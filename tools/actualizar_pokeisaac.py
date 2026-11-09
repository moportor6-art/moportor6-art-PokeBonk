#!/usr/bin/env python3
"""Subversión propia: descarga el núcleo actual de PokéIsaac desde pokeisaac.com y lo deja en site/pokeisaac.

Se ejecuta en GitHub Actions antes de compilar (aquí sí hay internet). Si falla, se queda la copia que ya hay en el repo.
Basado en tools/fetch_assets.py de prometheus-lumen/pokeisaac-ios (licencia MIT).
Solo baja el núcleo (html, js, css, idiomas, fuentes). Los sprites, música y modo online siguen viniendo de los
servidores del juego, igual que en la web y en su APK original.

Uso: python3 tools/actualizar_pokeisaac.py site/pokeisaac
"""
import json, re, shutil, sys, tempfile, time
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote, urljoin, urlsplit
from urllib.request import Request, urlopen

import os
ORIGIN = os.environ.get('PI_ORIGIN', 'https://pokeisaac.com/')
UA = 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36'


def fetch(url):
    last = None
    for _ in range(3):
        try:
            with urlopen(Request(url, headers={'User-Agent': UA, 'Accept-Encoding': 'identity'}), timeout=30) as r:
                return r.read()
        except Exception as e:  # noqa
            last = e
            time.sleep(1)
    raise last


def config(html, name):
    m = re.search(r'window\.' + re.escape(name) + r'\s*=\s*', html)
    return json.JSONDecoder().raw_decode(html[m.end():])[0] if m else None


class Deps(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'script' and a.get('src'):
            self.urls.append(a['src'])
        if tag == 'link' and a.get('rel') in ('stylesheet', 'icon', 'apple-touch-icon', 'manifest') and a.get('href'):
            self.urls.append(a['href'])


def main():
    dest = Path(sys.argv[1] if len(sys.argv) > 1 else 'site/pokeisaac')
    tmp = Path(tempfile.mkdtemp())
    html = fetch(ORIGIN).decode('utf-8')
    build = config(html, 'PI_BUILD') or '?'
    print('PokéIsaac en la web:', build, flush=True)

    files = {}  # ruta local -> url
    d = Deps(); d.feed(html)
    for raw in d.urls:
        url = urljoin(ORIGIN, raw)
        if urlsplit(url).netloc == urlsplit(ORIGIN).netloc:
            files[urlsplit(url).path.lstrip('/')] = url
    for rel in ['version.txt', 'favicon.ico', 'favicon.svg', 'site.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
                'js/vendor/socket.io-4.8.4.min.js']:
        files.setdefault(rel, urljoin(ORIGIN, rel))
    for rel, ver in (config(html, 'PI_FILEV') or {}).items():
        files['assets/' + rel] = urljoin(ORIGIN, 'assets/' + rel) + '?v=' + quote(str(ver))
    for lang in (config(html, 'PI_LANGS') or []):
        files['lang/%s.json' % lang] = urljoin(ORIGIN, 'lang/%s.json' % lang) + '?v=' + quote(build)
    for lang in ('ja', 'zh', 'zt', 'ko'):
        files['fonts/pixel-%s.woff2' % lang] = urljoin(ORIGIN, 'fonts/pixel-%s.woff2' % lang)

    fails = []
    for rel, url in sorted(files.items()):
        try:
            data = fetch(url)
        except Exception as e:  # noqa
            fails.append(rel); print('  no se pudo bajar', rel, str(e)[:80]); continue
        p = tmp / rel
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_bytes(data)
    for rel in ['js/pokeisaac.js', 'css/style.css', 'assets/manifest.js']:
        if not (tmp / rel).is_file():
            sys.exit('Falta un archivo esencial (%s); se queda la copia del repo.' % rel)

    # Las piezas propias de la copia anterior: botón para volver y la fuente local.
    for rel in ['volver-pokebonk.js', 'fonts/press-start-2p.css']:
        src = dest / rel
        if src.is_file():
            (tmp / rel).parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, tmp / rel)
    # Lo que la web no listó (fuentes locales, animaciones por región...) se conserva de la copia anterior.
    kept = 0
    for f in dest.rglob('*') if dest.is_dir() else []:
        t = tmp / f.relative_to(dest)
        if f.is_file() and not t.exists() and f.name != 'hosts.txt':
            t.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(f, t); kept += 1
    print('Conservados de la copia anterior:', kept)
    html = re.sub(r'\s*<link[^>]+rel="preconnect"[^>]+fonts\.g(?:oogleapis|static)\.com[^>]*>', '', html)
    html = re.sub(r'https://fonts\.googleapis\.com/css2\?family=Press\+Start\+2P(?:&amp;|&)display=swap', 'fonts/press-start-2p.css', html)
    html = re.sub(r'(<script[^>]+src="js/pokeisaac\.js)', r'<script src="volver-pokebonk.js"></script>\n\1', html, count=1)
    (tmp / 'index.html').write_text(html, encoding='utf-8')

    # Servidores a los que el juego puede conectarse (la app de Android solo deja salir a estos).
    text = html + (tmp / 'js/pokeisaac.js').read_text(encoding='utf-8', errors='ignore')
    hosts = sorted(set(re.findall(r'https://([a-z0-9-]+(?:\.[a-z0-9-]+)+)', text)) - {'pokeisaac.com', 'fonts.googleapis.com'})
    (tmp / 'hosts.txt').write_text('\n'.join(hosts) + '\n')

    # Aviso si alguien metió la trampa de invencibilidad de la copia del APK.
    if re.search(r'hurt\([^)]*\)\s*\{\s*if\s*\(\s*this\s*===\s*\w\.player\s*\)\s*\{?\s*return', text):
        sys.exit('El juego descargado trae la línea de invencibilidad; se queda la copia del repo.')

    shutil.rmtree(dest, ignore_errors=True)
    shutil.copytree(tmp, dest)
    print('Listo: PokéIsaac %s (%d archivos, %d fallos). Servidores: %s' % (build, len(files) - len(fails), len(fails), ', '.join(hosts)))


if __name__ == '__main__':
    main()
