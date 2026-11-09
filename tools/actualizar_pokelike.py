#!/usr/bin/env python3
"""Subversión propia: Pokelike (pokelike.xyz) dentro de PokeBonk, jugable sin internet.

Dos usos:
  python3 tools/actualizar_pokelike.py preparar ORIGEN DESTINO [SPRITES_POKEAPI]
      Prepara una copia del juego (carpeta ORIGEN) en DESTINO (site/pokelike).
  python3 tools/actualizar_pokelike.py web DESTINO
      Baja la versión más nueva de pokelike.xyz y los sprites de PokeAPI (GitHub Actions) y la prepara
      encima de la copia que ya hay en DESTINO. Si algo esencial falla, se queda la copia del repo.

Preparar = quitar publicidad y estadísticas de Google, fuente local, botón "Volver a PokéBonk",
y sprites de los Pokémon dentro de la app en vez de pedirlos a internet.
"""
import json, os, re, shutil, sys, tempfile, time
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

ORIGIN = os.environ.get('PL_ORIGIN', 'https://pokelike.xyz/')
SPRITES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
UA = 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36'
ESENCIALES = ['index.html', 'css/style.css', 'js/data.js', 'js/game.js', 'js/ui.js', 'data/pokedex.json']
REPO = Path(__file__).resolve().parent.parent


def fetch(url):
    last = None
    for _ in range(3):
        try:
            h = {'User-Agent': UA}
            if os.environ.get('PL_REFERER'):
                h['Referer'] = os.environ['PL_REFERER']
            with urlopen(Request(url, headers=h), timeout=30) as r:
                return r.read()
        except Exception as e:  # noqa
            last = e
            if getattr(e, 'code', 500) < 500:
                break
            time.sleep(1)
    raise last


def preparar(src, dest, sprites_dir=None, sprite_fetch=None):
    """src y dest pueden ser la misma carpeta."""
    src, dest = Path(src), Path(dest)
    if src != dest:
        shutil.rmtree(dest, ignore_errors=True)
        shutil.copytree(src, dest, ignore=shutil.ignore_patterns('.git', '.github', 'AGENTS.md', 'README*.md', '*.py'))

    # index.html: fuera anuncios y analítica, fuente local y botón para volver.
    p = dest / 'index.html'
    html = p.read_text(encoding='utf-8')
    html = re.sub(r'\s*<script[^>]*pagead2\.googlesyndication\.com[^>]*>\s*</script>', '', html)
    html = re.sub(r'\s*<!--\s*Google tag[^>]*-->', '', html)
    html = re.sub(r'\s*<script[^>]*googletagmanager\.com[^>]*>\s*</script>', '', html)
    html = re.sub(r'\s*<script>\s*window\.dataLayer[\s\S]*?</script>', '', html)
    html = re.sub(r'\s*<ins class="adsbygoogle"[\s\S]*?</ins>', '', html)
    html = re.sub(r'\s*<script>\s*\(adsbygoogle[\s\S]*?</script>', '', html)
    html = re.sub(r'\s*<link rel="preconnect"[^>]+fonts\.g(?:oogleapis|static)\.com[^>]*>', '', html)
    html = re.sub(r'https://fonts\.googleapis\.com/css2\?family=Press\+Start\+2P(?:&amp;|&)display=swap', 'fonts/press-start-2p.css', html)
    if 'volver-pokebonk.js' not in html:
        html = html.replace('</head>', '  <script>window.PB_VOLVER_TOP = 1;</script>\n  <script src="volver-pokebonk.js"></script>\n</head>', 1)
    css = dest / 'css/style.css'
    if css.is_file():
        css.write_text(re.sub(r"@import url\(['\"]?https://fonts\.googleapis\.com[^)]*\);?", '', css.read_text(encoding='utf-8')), encoding='utf-8')
    (dest / 'privacy.html').unlink(missing_ok=True)
    p.write_text(html, encoding='utf-8')
    shutil.copy2(REPO / 'site/pokeisaac/volver-pokebonk.js', dest / 'volver-pokebonk.js')
    (dest / 'fonts').mkdir(exist_ok=True)
    for f in (REPO / 'site/pokeisaac/fonts').iterdir():
        if f.name == 'press-start-2p.css' or f.suffix == '.woff2' and not f.name.startswith('pixel-'):
            shutil.copy2(f, dest / 'fonts' / f.name)

    # Sprites de PokeAPI dentro de la app.
    dex_p = dest / 'data/pokedex.json'
    dex = json.loads(dex_p.read_text(encoding='utf-8'))
    falta = 0
    for k, v in dex.items():
        for campo, sub in (('spriteUrl', ''), ('shinySpriteUrl', 'shiny/')):
            url = v.get(campo) or ''
            m = re.match(r'https://raw\.githubusercontent\.com/PokeAPI/sprites/master/sprites/pokemon/(?:shiny/)?([\w-]+\.png)$', url)
            if not m:
                continue
            local = 'sprites/pokemon/%s%s' % (sub, m.group(1))
            t = dest / local
            if not t.is_file():
                s = Path(sprites_dir) / (sub + m.group(1)) if sprites_dir else None
                t.parent.mkdir(parents=True, exist_ok=True)
                if s and s.is_file():
                    shutil.copy2(s, t)
                elif sprite_fetch:
                    try:
                        t.write_bytes(sprite_fetch(SPRITES + sub + m.group(1)))
                    except Exception:  # noqa
                        pass
            if t.is_file():
                v[campo] = local
            else:
                falta += 1
    # Formas especiales (Deoxys, Shaymin...): su sprite también va dentro.
    for t in re.findall(r"'[\w-]+':\s*(\d{5})", (dest / 'js/data.js').read_text(encoding='utf-8')):
        for sub in ('', 'shiny/'):
            f = dest / ('sprites/pokemon/%s%s.png' % (sub, t))
            s = Path(sprites_dir) / (sub + t + '.png') if sprites_dir else None
            if not f.is_file():
                f.parent.mkdir(parents=True, exist_ok=True)
                if s and s.is_file():
                    shutil.copy2(s, f)
                elif sprite_fetch:
                    try:
                        f.write_bytes(sprite_fetch(SPRITES + sub + t + '.png'))
                    except Exception:  # noqa
                        pass
    dex_p.write_text(json.dumps(dex, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    print('Pokelike preparado en %s (%d Pokémon, %d sprites sin copia local)' % (dest, len(dex), falta))


def web(dest):
    """Pokelike 2.0 de pokelike.xyz completo: código, estilos, música y todas las imágenes que el código nombra."""
    from concurrent.futures import ThreadPoolExecutor
    dest = Path(dest)
    tmp = Path(tempfile.mkdtemp())
    html = fetch(ORIGIN).decode('utf-8')
    rels = set(m.lstrip('./') for m in re.findall(r'(?:src|href)="(?!https?:|//|#|data:|mailto:)([^"?#]+)', html))
    rels.discard('')

    def bajar(rel):
        t = tmp / rel
        if t.exists():
            return True
        try:
            data = fetch(ORIGIN + '/'.join(quote(x) for x in rel.split('/')))
        except Exception:  # noqa
            return False
        # La web devuelve su página principal para lo que no existe.
        if not rel.endswith('.html') and data[:200].lstrip().lower().startswith((b'<!doctype', b'<html')):
            return False
        t.parent.mkdir(parents=True, exist_ok=True)
        t.write_bytes(data)
        return True

    with ThreadPoolExecutor(8) as pool:
        list(pool.map(bajar, sorted(rels)))
    bundle = sorted(tmp.glob('js/bundle*.js'))
    for rel in ['style/main.css']:
        if not (tmp / rel).is_file():
            sys.exit('Falta un archivo esencial (%s); se queda la copia del repo.' % rel)
    if not bundle:
        sys.exit('Falta el código del juego (js/bundle); se queda la copia del repo.')

    # Todo lo que el código y los estilos nombran.
    texto = ''
    for f in list(tmp.rglob('*.js')) + list(tmp.rglob('*.css')):
        texto += f.read_text(encoding='utf-8', errors='ignore').replace('\\x20', ' ') + '\n'
    ext = r'(?:png|jpg|jpeg|gif|webp|svg|mp3|ogg|wav|json|woff2?|ttf)'
    nombres = set(re.findall(r"""['"`(]([^'"`()\s<>{}$]{1,140}\.""" + ext + r""")['"`)]""", texto))
    carpetas = sorted(set(re.findall(r"""['"`]((?:img|audio|data|style|fonts)/[^'"`\s$]*/)['"`]""", texto)))
    pedir = set()
    for n in nombres:
        if n.startswith(('http:', 'https:', 'data:')):
            continue
        n = n.replace('../', '').lstrip('./')
        if '/' in n:
            pedir.add(n)
        else:
            pedir.update(c + n for c in carpetas)
    print('Pokelike: %d nombres de archivo, %d carpetas, %d peticiones' % (len(nombres), len(carpetas), len(pedir)), flush=True)
    with ThreadPoolExecutor(12) as pool:
        ok = sum(pool.map(bajar, sorted(pedir)))
    print('Pokelike: %d archivos bajados' % ok, flush=True)

    # Fuentes de Google en local.
    css_url = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=DotGothic16&display=swap'
    try:
        req = Request(css_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'})
        with urlopen(req, timeout=30) as r:
            gcss = r.read().decode('utf-8')
        (tmp / 'fonts').mkdir(exist_ok=True)
        for i, u in enumerate(dict.fromkeys(re.findall(r'url\((https://[^)]+)\)', gcss))):
            name = 'f%03d.%s' % (i, u.rsplit('.', 1)[-1])
            (tmp / 'fonts' / name).write_bytes(fetch(u))
            gcss = gcss.replace(u, name)
        (tmp / 'fonts/google.css').write_text(gcss, encoding='utf-8')
        fuente = 'fonts/google.css'
    except Exception as e:  # noqa
        print('  fuentes de Google no disponibles:', str(e)[:80])
        fuente = None

    # Página: sin publicidad ni estadísticas, fuentes locales y botón para volver.
    malos = ('fuseplatform', 'googletag', 'gtag(', 'cloudflareinsights', 'adsbygoogle', 'inmobi')
    html = re.sub(r'<script\b[^>]*>[\s\S]*?</script>', lambda m: '' if any(x in m.group(0) for x in malos) else m.group(0), html)
    html = re.sub(r'\s*<link[^>]+(?:fuseplatform|googletagmanager|fonts\.gstatic)[^>]*>', '', html)
    html = re.sub(r'<noscript>\s*<link[^>]+fonts\.googleapis[^>]*>\s*</noscript>', '', html)
    html = re.sub(r'\s*<link rel="preconnect"[^>]+fonts\.googleapis\.com[^>]*>', '', html)
    if fuente:
        html = re.sub(r'https://fonts\.googleapis\.com/css2\?[^"\']+', fuente, html)
        for f in tmp.rglob('*.css'):
            if f.parent.name != 'fonts':
                t = f.read_text(encoding='utf-8', errors='ignore')
                f.write_text(re.sub(r"@import url\(['\"]?https://fonts\.googleapis\.com[^)]*\);?", '', t), encoding='utf-8')
    html = html.replace('</head>', '  <script>window.PB_VOLVER_BL = 1;</script>\n  <script src="volver-pokebonk.js"></script>\n</head>', 1)
    (tmp / 'index.html').write_text(html, encoding='utf-8')
    shutil.copy2(REPO / 'site/pokeisaac/volver-pokebonk.js', tmp / 'volver-pokebonk.js')
    vers = re.findall(r"'(\d+)\.(\d+)\.(\d+)'", bundle[0].read_text(encoding='utf-8', errors='ignore'))
    ver = '.'.join(max(vers, key=lambda v: tuple(map(int, v)))) if vers else '2'
    (tmp / 'version.txt').write_text(ver + '\n')
    shutil.rmtree(dest, ignore_errors=True)
    shutil.copytree(tmp, dest)
    tam = sum(f.stat().st_size for f in dest.rglob('*') if f.is_file())
    print('Listo: Pokelike %s de la web (%d archivos, %.0f MB)' % (ver, sum(1 for f in dest.rglob('*') if f.is_file()), tam / 1048576))


def crudo(out):
    """Copia tal cual de un juego web (por defecto pokelike.xyz; otro con PL_ORIGIN), para respaldo y para revisarlo."""
    import posixpath
    out = Path(out); out.mkdir(parents=True, exist_ok=True)
    try:
        html = fetch(ORIGIN).decode('utf-8')
    except Exception:  # noqa
        html = fetch(ORIGIN + 'index.html').decode('utf-8')
    (out / 'index.html').write_text(html, encoding='utf-8')
    ext = r'(?:js|mjs|css|json|png|gif|jpg|jpeg|webp|svg|mp3|ogg|wav|m4a|woff2?|ttf|wasm|atlas|txt|tmj|tsj|xml)'
    todo = set((m, '') for m in re.findall(r'(?:src|href)="(?!https?:|//|#|data:|mailto:)([^"?#]+)', html))
    # Juegos de Godot (web): sus archivos van en GODOT_CONFIG, no en etiquetas.
    g = re.search(r'GODOT_CONFIG\s*=\s*(\{.*?\});', html, re.S)
    if g:
        try:
            cfg = json.loads(g.group(1))
            ex = cfg.get('executable', 'index')
            for f in list((cfg.get('fileSizes') or {}).keys()) + [ex + '.js', ex + '.wasm', ex + '.pck',
                     ex + '.audio.worklet.js', ex + '.audio.position.worklet.js', ex + '.worker.js']:
                todo.add((f, ''))
        except Exception as e:  # noqa
            print('  GODOT_CONFIG no se pudo leer:', e)
    hecho = set()
    while todo:
        raw, base = todo.pop()
        rel = posixpath.normpath(posixpath.join(base, raw)) if raw.startswith(('./', '../')) else raw.lstrip('/')
        if rel.startswith('..') or rel in hecho or not rel or rel.endswith('/') or rel == '.':
            continue
        hecho.add(rel)
        try:
            data = fetch(ORIGIN + '/'.join(quote(x) for x in rel.split('/')))
        except Exception as e:  # noqa
            print('  no se pudo bajar', rel, str(e)[:60]); continue
        if not rel.endswith('.html') and data[:200].lstrip().lower().startswith((b'<!doctype', b'<html')):
            continue
        (out / rel).parent.mkdir(parents=True, exist_ok=True)
        (out / rel).write_bytes(data)
        if rel.endswith(('.js', '.mjs', '.css', '.json')):
            txt = data.decode('utf-8', errors='ignore')
            d = posixpath.dirname(rel)
            for m in re.findall(r"""['"`(]((?:\.{1,2}/|/)?[\w@.-]+(?:/[\w@.%-]+)*\.""" + ext + r""")['"`)?#]""", txt):
                if m.startswith(('./', '../')):
                    # En un .js, una ruta puede ser de import (relativa al archivo) o de imagen/sonido (relativa a la página).
                    todo.add((m, d))
                    if rel.endswith(('.js', '.mjs')):
                        todo.add((m, ''))
                elif '/' in m:
                    todo.add((m, ''))
    print('Copia tal cual de %s: %d archivos' % (ORIGIN, len(hecho)))

if __name__ == '__main__':
    if len(sys.argv) >= 4 and sys.argv[1] == 'preparar':
        preparar(sys.argv[2], sys.argv[3], sys.argv[4] if len(sys.argv) > 4 else None)
    elif len(sys.argv) == 3 and sys.argv[1] == 'crudo':
        crudo(sys.argv[2])
    elif len(sys.argv) == 3 and sys.argv[1] == 'web':
        web(sys.argv[2])
    else:
        sys.exit(__doc__)
