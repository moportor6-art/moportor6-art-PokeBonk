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
            with urlopen(Request(url, headers={'User-Agent': UA}), timeout=30) as r:
                return r.read()
        except Exception as e:  # noqa
            last = e
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
    dest = Path(dest)
    tmp = Path(tempfile.mkdtemp())
    html = fetch(ORIGIN).decode('utf-8')
    files = {'index.html'}
    for m in re.finditer(r'(?:src|href)="((?:js|css)/[\w./-]+?\.(?:js|css))', html):
        files.add(m.group(1))
    for arr in re.findall(r"\[((?:\s*'[\w-]+'\s*,?)+)\]\s*\.forEach\(\s*function\s*\(\s*\w+\s*\)\s*\{[^}]*js/", html):
        for n in re.findall(r"'([\w-]+)'", arr):
            files.add('js/%s.js' % n)
    files |= {'css/style.css', 'data/pokedex.json', 'data/pokedex-mods.json', 'favicon.svg'}
    (tmp / 'index.html').write_text(html, encoding='utf-8')
    for rel in sorted(files - {'index.html'}):
        try:
            data = fetch(ORIGIN + rel)
        except Exception as e:  # noqa
            print('  no se pudo bajar', rel, str(e)[:80]); continue
        (tmp / rel).parent.mkdir(parents=True, exist_ok=True)
        (tmp / rel).write_bytes(data)
    for rel in ESENCIALES:
        if not (tmp / rel).is_file():
            sys.exit('Falta un archivo esencial (%s); se queda la copia del repo.' % rel)
    # Imágenes con ruta fija que aparecen en el código y no están en la copia anterior.
    texto = ''.join((tmp / f).read_text(encoding='utf-8', errors='ignore') for f in files if (tmp / f).is_file())
    nuevas = 0
    for rel in sorted(set(re.findall(r"""['"`(]((?:sprites|ui)/[^'"`)?$\s]+\.(?:png|gif|jpg|webp|svg))""", texto))):
        if '%' not in rel and not (dest / rel).exists() and not (tmp / rel).exists():
            try:
                (tmp / rel).parent.mkdir(parents=True, exist_ok=True)
                (tmp / rel).write_bytes(fetch(ORIGIN + rel.replace(' ', '%20'))); nuevas += 1
            except Exception:  # noqa
                pass
    # Lo que no se bajó se conserva de la copia anterior.
    for f in dest.rglob('*') if dest.is_dir() else []:
        t = tmp / f.relative_to(dest)
        if f.is_file() and not t.exists():
            t.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(f, t)
    ver = re.search(r'\bv(\d+\.\d+(?:\.\d+)?)\b', html)
    (tmp / 'version.txt').write_text((ver.group(1) if ver else '?') + '\n')
    preparar(tmp, tmp, sprite_fetch=fetch)
    shutil.rmtree(dest, ignore_errors=True)
    shutil.copytree(tmp, dest)
    print('Listo: Pokelike %s de la web (%d archivos de código, %d imágenes nuevas)' % (ver.group(1) if ver else '?', len(files), nuevas))


if __name__ == '__main__':
    if len(sys.argv) >= 4 and sys.argv[1] == 'preparar':
        preparar(sys.argv[2], sys.argv[3], sys.argv[4] if len(sys.argv) > 4 else None)
    elif len(sys.argv) == 3 and sys.argv[1] == 'web':
        web(sys.argv[2])
    else:
        sys.exit(__doc__)
