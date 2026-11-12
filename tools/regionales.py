#!/usr/bin/env python3
"""Subversión propia: sprites de las formas regionales (Alola, Galar, Hisui y Paldea).

Baja del PMD Sprite Repository (PMDCollab/SpriteCollab, uso no comercial con crédito) las hojas de cada forma
regional y arma el atlas del juego con las mismas funciones que tools/megas_hoenn.py. Solo entra una forma si
SpriteCollab la tiene con todas las animaciones que pide el atlas (si no, se omite).

La lista de formas y sus tipos vive en site/regionales.js (PB_REGIONALES.FORMAS); aquí se lee de ese archivo.
sid de cada forma: 40000 + 2000 * región + especie (alola 0, galar 1, hisui 2, paldea 3); su variocolor va en
pmd-shiny con el mismo sid (el juego lo pide como sid + 20000).

Escribe site/assets/pmd/<sid>.png, site/assets/pmd-shiny/<sid>.png, sus entradas en site/data/sprites.json
y site/regionales-hechas.js (las lee regionales.js).

Uso: python3 tools/regionales.py site      (necesita Pillow e internet: se ejecuta en GitHub Actions)
"""
import json, os, re, sys, time
sys.path.insert(0, os.path.dirname(__file__))
from megas_hoenn import bajar, atlas, variocolor

REGIONES = ['alola', 'galar', 'hisui', 'paldea']
NOMBRE = {'alola': 'Alola', 'galar': 'Galar', 'hisui': 'Hisui', 'paldea': 'Paldea'}


def leer_formas(site):
    s = open(os.path.join(site, 'regionales.js'), encoding='utf-8').read()
    m = re.search(r'const FORMAS = (\{.*?\n  \});', s, re.S)
    txt = re.sub(r'//[^\n]*', '', m.group(1))
    txt = re.sub(r'([{,]\s*)([a-z]+|\d+):', r'\1"\2":', txt).replace("'", '"')
    txt = re.sub(r',(\s*[}\]])', r'\1', txt)
    return json.loads(txt)


def carpetas(tracker, pid, region):
    """Formas de SpriteCollab cuyo nombre lleva la región (p. ej. 'Alola', 'Paldea_Combat'), sin colores ni zen."""
    g = tracker.get(f'{pid:04d}', {})
    out = []
    for k, v in (g.get('subgroups') or {}).items():
        n = str(v.get('name', '')).lower()
        if region in n and not any(x in n for x in ('altcolor', 'shadow', 'zen', 'blaze', 'aqua', 'gigantamax')):
            out.append(k)
    return out


def main():
    site = sys.argv[1] if len(sys.argv) > 1 else 'site'
    formas = leer_formas(site)
    ruta_sprites = os.path.join(site, 'data', 'sprites.json')
    sprites = json.load(open(ruta_sprites, encoding='utf-8'))
    tracker = json.loads(bajar('tracker.json') or b'{}')
    hechas = {}
    for sp, regs in formas.items():
        pid = int(sp)
        for reg in regs:
            sid = 40000 + 2000 * REGIONES.index(reg) + pid
            nombre = f'{tracker.get(f"{pid:04d}", {}).get("name", pid)} de {NOMBRE[reg]}'
            im = meta = base = None
            for f in carpetas(tracker, pid, reg):
                base = f'sprite/{pid:04d}/{f}/'
                im, meta = atlas(base)
                if im is not None:
                    break
            if im is None:
                print(f'OMITIDA {nombre}: sin sprites completos en SpriteCollab ({carpetas(tracker, pid, reg)})')
                continue
            im.save(os.path.join(site, 'assets', 'pmd', f'{sid}.png'), optimize=True)
            sh = variocolor(base, im)
            if sh is not None:
                sh.save(os.path.join(site, 'assets', 'pmd-shiny', f'{sid}.png'), optimize=True)
            sprites[str(sid)] = meta
            hechas[f'{pid}:{reg}'] = {'sid': sid, 'shiny': sh is not None}
            print(f'{nombre}: ok ({base}, variocolor: {"sí" if sh is not None else "no"})')
    json.dump(sprites, open(ruta_sprites, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    with open(os.path.join(site, 'regionales-hechas.js'), 'w', encoding='utf-8') as fh:
        fh.write('/* Subversión propia: formas regionales montadas con tools/regionales.py (PMD Sprite Repository).\n'
                 '   Las lee regionales.js. No editar a mano: lo rehace el script. */\n')
        fh.write('window.PB_REGIONALES_HECHAS = ' + json.dumps(hechas, ensure_ascii=False, indent=1) + ';\n')
    for nombre in os.listdir(os.path.join(site, 'assets')):
        if nombre.startswith('defineProperty-') and nombre.endswith('.js'):
            p = os.path.join(site, 'assets', nombre)
            s = open(p, encoding='utf-8').read()
            s2 = re.sub(r'"data/sprites\.json":`[^`]*`', '"data/sprites.json":`pbreg' + str(int(time.time()) % 100000) + '`', s)
            if s2 != s:
                open(p, 'w', encoding='utf-8').write(s2)
    total = sum(len(v) for v in formas.values())
    print(f'{len(hechas)} de {total} formas regionales montadas')


if __name__ == '__main__':
    main()
