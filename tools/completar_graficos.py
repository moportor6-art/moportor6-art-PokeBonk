#!/usr/bin/env python3
"""Subversión propia: completa los gráficos que el juego pide y no están en la app.

Faltaban sprites variocolor (pmd-shiny) y retratos (portraits, portraits-shiny) de muchos Pokémon a partir
del 252. Sin ellos el juego enseña "Faltan N gráficos por cargar" y el botón de reintentar.

Todo sale del PMD Sprite Repository (PMDCollab/SpriteCollab, uso no comercial con crédito):
- pmd-shiny/{id}.png: los atlas del juego (pmd/{id}.png) son PNG con paleta. Se compara la hoja normal y
  la variocolor de SpriteCollab (mismos fotogramas, solo cambian los colores), se saca qué color pasa a
  cuál y se cambia la paleta del atlas. Mismo dibujo y misma posición de cada fotograma.
- portraits/{id}.png y portraits-shiny/{id}.png: retrato "Normal" (40x40) de SpriteCollab.

Uso: python3 tools/completar_graficos.py site
Solo crea lo que falta; no toca nada que ya exista. Necesita Pillow e internet (se ejecuta en GitHub Actions).
"""
import io, json, os, sys, time, urllib.request, urllib.error
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

RAW = 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/'


def bajar(ruta):
    for i in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(RAW + ruta, headers={'User-Agent': 'PokeBonk'}), timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(2 + i * 3)
        except Exception:
            time.sleep(2 + i * 3)
    return None


def mapa_colores(normal, shiny):
    """Color normal -> color variocolor, mirando los mismos píxeles de las dos hojas."""
    a = normal.convert('RGBA')
    b = shiny.convert('RGBA')
    if a.size != b.size:
        return None
    votos = {}
    for pa, pb in zip(a.getdata(), b.getdata()):
        if pa[3] == 0 or pb[3] == 0:
            continue
        votos.setdefault(pa[:3], Counter())[pb[:3]] += 1
    return {k: v.most_common(1)[0][0] for k, v in votos.items()}


def shiny_atlas(site, pid):
    dst = os.path.join(site, 'assets', 'pmd-shiny', f'{pid}.png')
    src = os.path.join(site, 'assets', 'pmd', f'{pid}.png')
    if os.path.exists(dst) or not os.path.exists(src):
        return None
    n = int(pid)
    if n > 1025:
        return 'forma'
    base = f'sprite/{n:04d}/'
    m = None
    for hoja in ('Idle-Anim.png', 'Walk-Anim.png', 'Attack-Anim.png'):
        a, b = bajar(base + hoja), bajar(base + '0001/' + hoja)
        if a and b:
            m = mapa_colores(Image.open(io.BytesIO(a)), Image.open(io.BytesIO(b)))
            if m:
                break
    if not m:
        return 'sin variocolor'
    im = Image.open(src)
    if im.mode != 'P':
        px = im.convert('RGBA')
        out = Image.new('RGBA', px.size)
        out.putdata([(m.get(p[:3], p[:3]) + (p[3],)) if p[3] else p for p in px.getdata()])
        out.save(dst, optimize=True)
        return 'ok'
    pal = im.getpalette()[:768]
    nueva = []
    cambios = 0
    for i in range(0, len(pal), 3):
        c = tuple(pal[i:i + 3])
        d = m.get(c, c)
        cambios += d != c
        nueva += list(d)
    if not cambios:
        return 'sin cambios'
    im2 = im.copy()
    im2.putpalette(nueva)
    if 'transparency' in im.info:
        im2.info['transparency'] = im.info['transparency']
    im2.save(dst, optimize=True, transparency=im.info.get('transparency'))
    return 'ok'


def retrato(site, pid, shiny):
    carpeta = 'portraits-shiny' if shiny else 'portraits'
    dst = os.path.join(site, 'assets', carpeta, f'{pid}.png')
    if os.path.exists(dst):
        return None
    datos = bajar(f'portrait/{pid:04d}/' + ('0001/' if shiny else '') + 'Normal.png')
    if not datos:
        return 'no existe'
    im = Image.open(io.BytesIO(datos)).convert('RGBA')
    if im.size != (40, 40):
        im = im.resize((40, 40), Image.NEAREST)
    im.save(dst, optimize=True)
    return 'ok'


def main():
    site = sys.argv[1] if len(sys.argv) > 1 else 'site'
    sprites = json.load(open(os.path.join(site, 'data', 'sprites.json'), encoding='utf-8'))
    tareas = [('pmd-shiny', k, lambda k=k: shiny_atlas(site, k)) for k, v in sprites.items() if v.get('anims')]
    for i in range(1, 1026):
        tareas.append(('portraits', i, lambda i=i: retrato(site, i, False)))
        tareas.append(('portraits-shiny', i, lambda i=i: retrato(site, i, True)))
    res = Counter()
    with ThreadPoolExecutor(12) as ex:
        for (tipo, pid, _), r in zip(tareas, ex.map(lambda t: t[2](), tareas)):
            if r:
                res[(tipo, r)] += 1
    for (tipo, r), n in sorted(res.items()):
        print(f'{tipo}: {r} {n}')


if __name__ == '__main__':
    main()
