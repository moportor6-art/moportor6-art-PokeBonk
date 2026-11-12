#!/usr/bin/env python3
"""Subversión propia: sprites de las megaevoluciones de Hoenn (y Groudon y Kyogre primigenios).

Baja del PMD Sprite Repository (PMDCollab/SpriteCollab, uso no comercial con crédito) las hojas de animación
de cada mega y arma el atlas que usa el juego: las animaciones walk, idle, attack, hurt, faint (Sleep) y
charge, una debajo de otra, con 8 filas (direcciones) cada una, igual que los atlas de las megas del juego
(pmd/15006.png...). La variocolor sale de comparar la hoja normal y la variocolor de la forma.

Escribe:
- site/assets/pmd/{15000+id}.png y site/assets/pmd-shiny/{15000+id}.png
- la entrada de cada uno en site/data/sprites.json (y cambia su ?v= en defineProperty-…js)
- site/megas-extra.js con las megas que se han podido montar (las lee mega-dynamax.js)

Uso: python3 tools/megas_hoenn.py site      (necesita Pillow e internet: se ejecuta en GitHub Actions)
"""
import io, json, os, re, sys, time, urllib.request, urllib.error, xml.etree.ElementTree as ET
from collections import Counter
from PIL import Image

RAW = 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/'
# especie: (nombre, tipos de la mega si cambian, palabras del nombre de la forma en SpriteCollab)
MEGAS = {
    254: ('Mega Sceptile', ['grass', 'dragon'], 'mega'),
    257: ('Mega Blaziken', None, 'mega'),
    260: ('Mega Swampert', None, 'mega'),
    282: ('Mega Gardevoir', None, 'mega'),
    302: ('Mega Sableye', None, 'mega'),
    303: ('Mega Mawile', None, 'mega'),
    306: ('Mega Aggron', ['steel'], 'mega'),
    308: ('Mega Medicham', None, 'mega'),
    310: ('Mega Manectric', None, 'mega'),
    319: ('Mega Sharpedo', None, 'mega'),
    323: ('Mega Camerupt', None, 'mega'),
    334: ('Mega Altaria', ['dragon', 'fairy'], 'mega'),
    354: ('Mega Banette', None, 'mega'),
    359: ('Mega Absol', None, 'mega'),
    362: ('Mega Glalie', None, 'mega'),
    373: ('Mega Salamence', None, 'mega'),
    376: ('Mega Metagross', None, 'mega'),
    380: ('Mega Latias', None, 'mega'),
    381: ('Mega Latios', None, 'mega'),
    384: ('Mega Rayquaza', None, 'mega'),
    382: ('Kyogre Primigenio', None, 'primal'),
    383: ('Groudon Primigenio', ['ground', 'fire'], 'primal'),
}
# animación del juego -> nombres de la animación en SpriteCollab, por orden de preferencia
ANIMS = [('walk', ['Walk']), ('idle', ['Idle', 'Walk']), ('attack', ['Attack', 'Strike', 'Shoot', 'Walk']),
         ('hurt', ['Hurt', 'Idle']), ('faint', ['Sleep', 'Faint', 'Hurt']), ('charge', ['Charge', 'Attack', 'Idle'])]


def bajar(ruta):
    for i in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(RAW + ruta, headers={'User-Agent': 'PokeBonk'}), timeout=40) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(2 + i * 3)
        except Exception:
            time.sleep(2 + i * 3)
    return None


def forma(tracker, pid, clave):
    """Carpeta de la forma (p. ej. '0001') cuyo nombre lleva 'mega' o 'primal'."""
    g = tracker.get(f'{pid:04d}', {})
    for k, v in (g.get('subgroups') or {}).items():
        if clave in str(v.get('name', '')).lower():
            return k
    return '0001'


def anim_data(base):
    xml = bajar(base + 'AnimData.xml')
    if not xml:
        return None
    raiz = ET.fromstring(xml)
    out = {}
    for a in raiz.iter('Anim'):
        nombre = a.findtext('Name')
        copia = a.findtext('CopyOf')
        if copia:
            out[nombre] = ('copia', copia)
            continue
        out[nombre] = (int(a.findtext('FrameWidth')), int(a.findtext('FrameHeight')),
                       [int(d.text) for d in a.iter('Duration')])
    for k, v in list(out.items()):
        if v[0] == 'copia':
            out[k] = out.get(v[1])
    return {k: v for k, v in out.items() if v}


def hoja(base, nombre, fw, fh):
    datos = bajar(base + f'{nombre}-Anim.png')
    if not datos:
        return None
    im = Image.open(io.BytesIO(datos)).convert('RGBA')
    filas = max(1, im.height // fh)
    if filas == 8:
        return im
    # Una sola dirección (Sleep...): se repite en las 8 filas.
    fila = im.crop((0, 0, im.width, fh))
    out = Image.new('RGBA', (im.width, fh * 8))
    for r in range(8):
        out.paste(fila, (0, r * fh))
    return out


def atlas(base):
    datos = anim_data(base)
    if not datos:
        return None, None
    partes, meta, y = [], {}, 0
    for clave, nombres in ANIMS:
        elegido = next((n for n in nombres if n in datos), None)
        if not elegido:
            return None, None
        fw, fh, dur = datos[elegido]
        im = hoja(base, elegido, fw, fh)
        if im is None:
            return None, None
        n = im.width // fw
        partes.append((im, y))
        meta[clave] = {'y': y, 'fw': fw, 'fh': fh, 'n': n, 'rows': 8, 'd': dur[:n] or [8] * n}
        y += im.height
    w = max(im.width for im, _ in partes)
    out = Image.new('RGBA', (w, y))
    for im, yy in partes:
        out.paste(im, (0, yy))
    return out, {'w': w, 'h': y, 'anims': meta}


def mapa_colores(a, b):
    a, b = a.convert('RGBA'), b.convert('RGBA')
    if a.size != b.size:
        return None
    votos = {}
    for pa, pb in zip(a.getdata(), b.getdata()):
        if pa[3] and pb[3]:
            votos.setdefault(pa[:3], Counter())[pb[:3]] += 1
    return {k: v.most_common(1)[0][0] for k, v in votos.items()}


def variocolor(base, im):
    for nombre in ('Idle-Anim.png', 'Walk-Anim.png', 'Attack-Anim.png'):
        a, b = bajar(base + nombre), bajar(base + '0001/' + nombre)
        if a and b:
            m = mapa_colores(Image.open(io.BytesIO(a)), Image.open(io.BytesIO(b)))
            if m:
                out = Image.new('RGBA', im.size)
                out.putdata([(m.get(p[:3], p[:3]) + (p[3],)) if p[3] else p for p in im.getdata()])
                return out
    return None


def main():
    site = sys.argv[1] if len(sys.argv) > 1 else 'site'
    ruta_sprites = os.path.join(site, 'data', 'sprites.json')
    sprites = json.load(open(ruta_sprites, encoding='utf-8'))
    tracker = json.loads(bajar('tracker.json') or b'{}')
    hechas = {}
    for pid, (nombre, tipos, clave) in MEGAS.items():
        sid = 15000 + pid
        f = forma(tracker, pid, clave)
        base = f'sprite/{pid:04d}/{f}/'
        im, meta = atlas(base)
        if im is None:
            print(f'{nombre}: no hay sprites en {base}')
            continue
        im.save(os.path.join(site, 'assets', 'pmd', f'{sid}.png'), optimize=True)
        sh = variocolor(base, im)
        if sh is not None:
            sh.save(os.path.join(site, 'assets', 'pmd-shiny', f'{sid}.png'), optimize=True)
        sprites[str(sid)] = meta
        hechas[pid] = {'sid': sid, 'name': nombre, 'shiny': sh is not None, **({'types': tipos} if tipos else {})}
        print(f'{nombre}: ok ({base}, variocolor: {"sí" if sh is not None else "no"})')
    json.dump(sprites, open(ruta_sprites, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    with open(os.path.join(site, 'megas-extra.js'), 'w', encoding='utf-8') as fh:
        fh.write('/* Subversión propia: megas de Hoenn montadas con tools/megas_hoenn.py (PMD Sprite Repository).\n'
                 '   Las lee mega-dynamax.js. No editar a mano: lo rehace el script. */\n')
        fh.write('window.PB_MEGAS_EXTRA = ' + json.dumps(hechas, ensure_ascii=False, indent=1) + ';\n')
    # Nuevo ?v= para sprites.json, para que no se use el de la caché.
    for nombre in os.listdir(os.path.join(site, 'assets')):
        if nombre.startswith('defineProperty-') and nombre.endswith('.js'):
            p = os.path.join(site, 'assets', nombre)
            s = open(p, encoding='utf-8').read()
            s2 = re.sub(r'"data/sprites\.json":`[^`]*`', '"data/sprites.json":`pbmega' + str(int(time.time()) % 100000) + '`', s)
            if s2 != s:
                open(p, 'w', encoding='utf-8').write(s2)
    print(f'{len(hechas)} de {len(MEGAS)} megas montadas')


if __name__ == '__main__':
    main()
