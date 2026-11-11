#!/usr/bin/env python3
"""Subversión propia: Pokémon Survivors (github.com/pedrobarretto/pokemon-survivors, código MIT) dentro de PokéBonk.

Toma su carpeta dist/ (compilada con `vite build --base /pokemonsurvivors/`) y la deja en DESTINO con el botón
"Volver a PokéBonk" en sus páginas de juego. Sin claves de sus servicios, el juego queda en modo invitado: sin
cuenta, sin ranking ni cooperativo online, y la partida se guarda en el dispositivo.

También quita las páginas de su web (Pokédex, guías, tier list, novedades, legal, apoyo… en todos los idiomas,
y sitemap, robots y similares): son para buscadores, el juego no las usa y dentro de PokéBonk ni se llega a ellas.
Se quedan las páginas del juego (index.html de cada idioma), assets/, icons/, fonts/ y los manifiestos.

Uso: python3 tools/preparar_pokemonsurvivors.py DIST DESTINO VERSIÓN
     python3 tools/preparar_pokemonsurvivors.py --podar DESTINO   (solo quitar las páginas web)
"""
import re, shutil, sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
IDIOMAS = ('en', 'es', 'fr', 'zh-tw')
SOBRA = ('sitemap.xml', 'llms.txt', 'robots.txt', 'og.png', 'sim-build.json', 'creators')  # creators: miniaturas de su página de creadores


def podar(dest):
    """Borra las páginas de la web que no son el juego. Devuelve los bytes ahorrados."""
    ahorro = 0

    def borra(f):
        nonlocal ahorro
        if f.is_dir():
            ahorro += sum(x.stat().st_size for x in f.rglob('*') if x.is_file())
            shutil.rmtree(f)
        elif f.is_file():
            ahorro += f.stat().st_size
            f.unlink()
    for base in [dest] + [dest / l for l in IDIOMAS]:
        if not base.is_dir():
            continue
        for d in base.iterdir():
            if d.is_dir() and d.name not in IDIOMAS:
                ficheros = [x for x in d.rglob('*') if x.is_file()]
                # Solo carpetas que son páginas (html) y nada más: assets/, icons/ y fonts/ no se tocan.
                if ficheros and all(x.suffix in ('.html', '.xml', '.txt') for x in ficheros):
                    borra(d)
    for n in SOBRA:
        borra(dest / n)
    for f in dest.glob('*.txt'):
        if re.fullmatch(r'[0-9a-f]{32}\.txt', f.name):  # clave de IndexNow de su web
            borra(f)
    return ahorro


def main():
    src, dest, ver = Path(sys.argv[1]), Path(sys.argv[2]), sys.argv[3]
    if not (src / 'index.html').is_file():
        sys.exit('Falta dist/index.html')
    shutil.rmtree(dest, ignore_errors=True)
    shutil.copytree(src, dest, ignore=shutil.ignore_patterns('*.map'))
    shutil.copy2(REPO / 'site/pokeisaac/volver-pokebonk.js', dest / 'volver-pokebonk.js')
    shutil.copy2(REPO / 'tools/pokemonsurvivors/pb-autohab-ps.js', dest / 'pb-autohab-ps.js')
    n = 0
    for page in [dest / 'index.html'] + [dest / l / 'index.html' for l in ('en', 'es', 'fr', 'zh-tw')]:
        if page.is_file():
            h = page.read_text(encoding='utf-8')
            if 'volver-pokebonk.js' not in h:
                h = h.replace('</head>', '<script>window.PB_VOLVER_URL = "/index.html";</script><script src="/pokemonsurvivors/volver-pokebonk.js"></script><script src="/pokemonsurvivors/pb-autohab-ps.js"></script></head>', 1)
                page.write_text(h, encoding='utf-8'); n += 1
    (dest / 'version.txt').write_text(ver + '\n')
    ahorro = podar(dest)
    tam = sum(f.stat().st_size for f in dest.rglob('*') if f.is_file())
    print('Pokémon Survivors %s listo en %s (%.0f MB, %d páginas con Volver, %.0f MB de páginas web quitados)'
          % (ver, dest, tam / 1048576, n, ahorro / 1048576))


if __name__ == '__main__':
    if len(sys.argv) == 3 and sys.argv[1] == '--podar':
        print('%.1f MB quitados' % (podar(Path(sys.argv[2])) / 1048576))
    else:
        main()
