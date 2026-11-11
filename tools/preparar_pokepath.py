#!/usr/bin/env python3
"""Subversión propia: PokéPath TD (de Khydra) dentro de PokéBonk.

Toma el juego que va dentro de su versión de escritorio (carpeta sacada de resources/app.asar) y lo deja listo en
DESTINO como PokéBonk TD: solo la parte web (styles.css, src/), con pantalla completa por el navegador en vez de
Electron, y index.html arrancando la pantalla de PokéBonk TD (td/, que se conserva del DESTINO anterior).

Después lo aligera (optimizar): la música y parte de los sonidos pasan a ser los de PokéSurvivor (td/musica y
td/sonidos), así que los mp3 y wav originales que ya no se usan se borran, igual que las letras sin usar, el arranque
de la versión original (bootstrap.js) y las entradas de assets.json que apuntan a archivos que no están.

Uso: python3 tools/preparar_pokepath.py CARPETA_DEL_ASAR DESTINO [VERSIÓN]
     python3 tools/preparar_pokepath.py --optimizar DESTINO   (solo el aligerado, sobre una copia ya preparada)
"""
import json, re, shutil, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

SHIM = """/* Subversión propia: PokéPath TD (versión de escritorio de Khydra) dentro de PokéBonk.
   La versión de escritorio usa Electron para la pantalla completa: aquí se hace con el navegador. */
window.electronAPI = window.electronAPI || {
  toggleFullscreen: () => {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    } catch (e) {}
    return Promise.resolve();
  }
};
"""


def main():
    src, dest = Path(sys.argv[1]), Path(sys.argv[2])
    ver = sys.argv[3] if len(sys.argv) > 3 else ''
    for f in ('index.html', 'src'):
        if not (src / f).exists():
            sys.exit('No parece PokéPath TD: falta %s' % f)
    guardar = Path(tempfile.mkdtemp())
    if (dest / 'td').is_dir():
        shutil.copytree(dest / 'td', guardar / 'td')
    elif (REPO / 'site/pokepath/td').is_dir():
        shutil.copytree(REPO / 'site/pokepath/td', guardar / 'td')
    else:
        sys.exit('Falta td/ (la pantalla de PokéBonk TD)')
    shutil.rmtree(dest, ignore_errors=True)
    dest.mkdir(parents=True)
    shutil.copytree(guardar / 'td', dest / 'td')
    shutil.rmtree(guardar, ignore_errors=True)
    shutil.copytree(src / 'src', dest / 'src', ignore=shutil.ignore_patterns('generate-assets-list.js'))
    for f in ('index.html', 'styles.css'):
        if (src / f).exists():
            shutil.copy2(src / f, dest / f)
    (dest / 'pb-pokepath.js').write_text(SHIM, encoding='utf-8')
    shutil.copy2(REPO / 'site/pokeisaac/volver-pokebonk.js', dest / 'volver-pokebonk.js')
    h = (dest / 'index.html').read_text(encoding='utf-8')
    if 'pb-pokepath.js' not in h:
        h = h.replace('</head>', '    <script src="pb-pokepath.js"></script>\n    <script src="volver-pokebonk.js"></script>\n</head>', 1)
    if 'pb-mando.js' not in h:
        h = re.sub(r'(<head[^>]*>)', r'\1\n    <script src="/pb-mando.js"></script>', h, count=1)
    if 'pb-guardado.js' not in h:
        # PokéPath y PokéPlunder guardan con la misma clave ("data"): cada uno con su prefijo.
        h = re.sub(r'(<head[^>]*>)', r'\1\n    <script>window.PB_GUARDADO = "pokepath";</script>\n    <script src="/pb-guardado.js"></script>', h, count=1)
    # PokéBonk TD: misma página con la letra de PokéBonk, su CSS y su arranque (td/arranque.js).
    h = h.replace('<title>PokéPath TD</title>', '<title>PokéBonk TD</title>')
    if 'td/td.css' not in h:
        h = h.replace('    <script src="pb-pokepath.js"></script>',
                      '    <link rel="stylesheet" href="../assets/fonts-DP6S8ZEv-mw3e1u3x.css">\n'
                      '    <link rel="stylesheet" href="./td/td.css">\n'
                      '    <script src="pb-pokepath.js"></script>\n'
                      '    <script>window.PB_VOLVER_OCULTO = true;</script>', 1)
    h = h.replace('./src/js/bootstrap.js', './td/arranque.js')
    (dest / 'index.html').write_text(h, encoding='utf-8')
    # remaster.html era la dirección de PokéBonk TD hasta la Subversión 0.41: lleva a index.html.
    (dest / 'remaster.html').write_text(REDIRIGE, encoding='utf-8')
    if not ver:
        try:
            ver = json.loads((src / 'package.json').read_text())['version']
        except Exception:  # noqa
            ver = '?'
    (dest / 'version.txt').write_text(ver + '\n')
    if shutil.which('ffmpeg'):
        def bajar(f):
            t = f.with_name(f.name + '.t.mp3')
            r = subprocess.run(['ffmpeg', '-nostdin', '-v', 'error', '-y', '-i', str(f), '-codec:a', 'libmp3lame', '-b:a', '96k', str(t)])
            if r.returncode == 0 and t.exists() and t.stat().st_size < f.stat().st_size:
                t.replace(f)
            elif t.exists():
                t.unlink()
        with ThreadPoolExecutor(8) as pool:
            list(pool.map(bajar, (dest / 'src').rglob('*.mp3')))
    optimizar(dest)
    tam = sum(f.stat().st_size for f in dest.rglob('*') if f.is_file())
    print('PokéBonk TD (PokéPath TD %s) listo en %s (%.0f MB)' % (ver, dest, tam / 1048576))


# Sonidos del juego que pasan a ser los de PokéSurvivor (td/sonidos). Los de interfaz que no están aquí
# (step, end) y los efectos propios de un Pokémon o de una habilidad (Chatot, Kyogre, perro…) se quedan.
UI_SON = {'close': 'back', 'open': 'select', 'hover1': 'hover', 'hover2': 'hover', 'hover3': 'hover', 'option': 'click',
          'button1': 'click', 'button2': 'click', 'key0': 'click', 'key1': 'click', 'click0': 'click', 'click1': 'click',
          'select': 'select', 'obtain': 'chest', 'equip': 'confirm', 'unequip': 'back', 'pop0': 'error', 'purchase': 'buy',
          'start': 'confirm', 'results': 'levelup'}
EF_SON = {'shiny': 'shiny', 'explosion': 'burst1', 'earthquake': 'quake', 'teleport': 'rift', 'bell': 'toll',
          'regenerator': 'heal', 'ding': 'xp'}
# Disparos genéricos: no suenan, porque td.js pone a cada disparo el sonido del tipo del Pokémon.
SILENCIO = re.compile(r'^(projectile\d|area\d|beam\d|hit4|sword|ice|rockThrow|thunder|chain|fire)$')
# Música: cada canción va con la pista de PokéSurvivor del mundo de la primera ruta que la usa.
MUNDOS = """
const { routeData } = await import(process.argv[1]);
const PISTA = { 1: 'village', 2: 'forest', 3: 'cave', 4: 'rift', 5: 'forest', 6: 'cave', 7: 'volcano', 8: 'judgment', 9: 'rift', 10: 'volcano' };
const p = {};
for (const r of Object.values(routeData)) {
  const song = r.music?.song;
  if (!song || p[song]) continue;
  const w = +(String(r.name?.[0] || '').match(/(\\d+)-\\d+/) || [])[1];
  p[song] = song === 'halloween' ? 'halloween' : r.isSecret ? 'judgment' : (PISTA[w] || 'village');
}
console.log(JSON.stringify(p));
"""
REDIRIGE = """<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>PokéBonk TD</title>
<script>location.replace('index.html' + location.search + location.hash);</script>
<meta http-equiv="refresh" content="0; url=index.html"></head><body></body></html>
"""


def optimizar(dest):
    antes = sum(f.stat().st_size for f in dest.rglob('*') if f.is_file())
    audio = dest / 'src/js/file/audio.js'
    a = audio.read_text(encoding='utf-8')
    if './src/assets/sounds/music/' in a:
        if not shutil.which('node'):
            sys.exit('Hace falta node para repartir la música por mundos')
        rutas = (dest / 'src/js/game/data/routeData.js').resolve().as_uri()
        pista = json.loads(subprocess.run(['node', '--input-type=module', '-e', MUNDOS, rutas],
                                          check=True, capture_output=True, text=True).stdout)
        pista['intro'] = 'village'
    else:
        pista = {}

    def cambia(m):
        sangria, clave, banco, resto = m.group(1), m.group(2), m.group(3), m.group(4)
        if banco == 'music':
            return "%s%s: './td/musica/%s.ogg',%s\n" % (sangria, clave, pista.get(clave, 'village'), resto)
        mapa = UI_SON if banco == 'ui' else EF_SON
        if clave in mapa:
            return "%s%s: './td/sonidos/%s.ogg',%s\n" % (sangria, clave, mapa[clave], resto)
        if banco == 'effect' and SILENCIO.match(clave):
            return ''
        return m.group(0)
    a = re.sub(r"(?m)^([ \t]*)(\w+):\s*'\./src/assets/sounds/(ui|effect|music)/[^']+',?([^\n]*)\n?", cambia, a)
    audio.write_text(a, encoding='utf-8')

    # Sonidos que ya no nombra nadie.
    usados = set(re.findall(r"\./(src/assets/sounds/[^']+)'", a))
    for banco in ('ui', 'effect', 'music'):
        for f in (dest / 'src/assets/sounds' / banco).glob('*'):
            if f.is_file() and f.relative_to(dest).as_posix() not in usados:
                f.unlink()
    # El arranque de la versión original: ahora arranca td/arranque.js.
    (dest / 'src/js/bootstrap.js').unlink(missing_ok=True)
    # Letras que no nombra ningún CSS ni JS.
    codigo = ''.join(f.read_text(encoding='utf-8', errors='ignore')
                     for f in dest.rglob('*') if f.suffix in ('.css', '.js', '.html'))
    for f in (dest / 'src/assets/fonts').glob('*'):
        if f.is_file() and f.name not in codigo:
            f.unlink()
    # La pantalla de carga precarga lo que diga assets.json: solo lo que existe.
    lista = dest / 'src/assets/assets.json'
    if lista.exists():
        d = json.loads(lista.read_text(encoding='utf-8'))
        for k in ('images', 'sounds'):
            d[k] = [x for x in d.get(k, []) if (dest / x).is_file()]
        lista.write_text(json.dumps(d, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    despues = sum(f.stat().st_size for f in dest.rglob('*') if f.is_file())
    print('Aligerado: %.1f MB menos (%.1f MB)' % ((antes - despues) / 1048576, despues / 1048576))


if __name__ == '__main__':
    if len(sys.argv) == 3 and sys.argv[1] == '--optimizar':
        optimizar(Path(sys.argv[2]))
    else:
        main()
