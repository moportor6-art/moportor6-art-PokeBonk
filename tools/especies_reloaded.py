"""Completa con sprites de Pokémon Reloaded 1.9.2.2 (uso privado, con permiso) los Pokémon que no tienen
animaciones de PMD (en data/sprites.json salen con «fallback» o sin «anims») y los que no tienen variocolor.

Uso: python3 tools/especies_reloaded.py RUTA/data/pkmnbattle [site] [desde] [hasta]

Mismo formato y reglas que tools/megas_reloaded.py: solo entra un Pokémon si están todos sus archivos.
Hasta el #493 Reloaded usa la Pokédex nacional; después mete Pokémon y variantes propias, así que su número
sale de tools/reloaded_numeros.json (número nacional -> número de Reloaded, sacado de los nombres de su
txt_pkmn.dll). Archivos: con número r < 1000, P<r> normal y P<1000+r> variocolor; con r >= 1000,
P<1000+r> normal y P<2000+r> variocolor."""
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from megas_reloaded import hoja

NUM = json.load(open(os.path.join(os.path.dirname(__file__), 'reloaded_numeros.json')))


def codigos(n):
    r = n if n <= 493 else NUM.get(str(n))
    if r is None:
        return None, None
    return (r, 1000 + r) if r < 1000 else (1000 + r, 2000 + r)


def main():
    carpeta = sys.argv[1]
    site = sys.argv[2] if len(sys.argv) > 2 else 'site'
    desde = int(sys.argv[3]) if len(sys.argv) > 3 else 1
    hasta = int(sys.argv[4]) if len(sys.argv) > 4 else 1025
    ruta = os.path.join(site, 'data', 'sprites.json')
    sprites = json.load(open(ruta, encoding='utf-8'))
    hechos, sin = [], []
    for n in range(desde, hasta + 1):
        e = sprites.get(str(n))
        falta_anim = not e or 'anims' not in e
        falta_shiny = not os.path.exists(os.path.join(site, 'assets', 'pmd-shiny', f'{n}.png'))
        if not falta_anim and not falta_shiny:
            continue
        cn, cs = codigos(n)
        if cn is None:
            sin.append(n); continue
        if falta_anim:
            im, meta = hoja(carpeta, cn)
            if im is None:
                sin.append(n); continue
            im.save(os.path.join(site, 'assets', 'pmd', f'{n}.png'), optimize=True)
            sprites[str(n)] = meta
            falta_shiny = True  # el variocolor tiene que ser del mismo estilo que el sprite normal
        if falta_shiny:
            sh, _ = hoja(carpeta, cs)
            if sh is not None:
                if not falta_anim:
                    # Solo faltaba el variocolor: la hoja de PMD tiene otro acomodo, así que también se
                    # cambia el sprite normal por el de Reloaded para que los dos encajen.
                    im, meta = hoja(carpeta, cn)
                    if im is None:
                        continue
                    im.save(os.path.join(site, 'assets', 'pmd', f'{n}.png'), optimize=True)
                    sprites[str(n)] = meta
                sh.save(os.path.join(site, 'assets', 'pmd-shiny', f'{n}.png'), optimize=True)
            elif not falta_anim:
                continue
        hechos.append(n)
    json.dump(sprites, open(ruta, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('completados:', hechos)
    print('sin sprites completos en Reloaded:', sin)


if __name__ == '__main__':
    main()
