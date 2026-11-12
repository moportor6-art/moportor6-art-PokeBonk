"""Megas, formas X/Y/Z y Gigamax con los sprites de Pokémon Reloaded 1.9.2.2 (uso privado, con permiso).

Uso: python3 tools/megas_reloaded.py RUTA/data/pkmnbattle [site]

Lee los .gmspr originales (no los PNG de otras extracciones, que salían cortados) y por cada forma:
- arma una hoja con el mismo formato que las de PMD: walk, idle, attack, hurt, faint y charge, 8 filas;
- Reloaded trae 5 direcciones (2, 3, 6, 9, 8); las otras 3 se sacan en espejo, salvo si la forma las trae dibujadas (7, 4, 1);
- attack/charge usan «A», hurt «H» y faint «S», que no dependen de la dirección;
- guarda pmd/<sid>.png, pmd-shiny/<sid>.png (variocolor de Reloaded) y su entrada en data/sprites.json;
- escribe site/megas-reloaded.js, que lee mega-dynamax.js.
Solo entra una forma si están todos sus archivos: si falta alguno, se omite.

Formato .gmspr: zlib desde el byte 8. Cabecera de 4 int32 (delay, origen x, origen y, n.º de fotogramas);
cada fotograma: 4 int32 (delay, ancho, alto, bytes) y los píxeles en BGRA."""
import json, os, re, struct, sys, time, zlib
import numpy as np
from PIL import Image

# especie -> (código Reloaded, nombre, tipos o None si conserva los del Pokémon base)
MEGAS = {
    3: (100003, 'Mega Venusaur', None),
    9: (100009, 'Mega Blastoise', None),
    15: (100015, 'Mega Beedrill', None),
    18: (100018, 'Mega Pidgeot', None),
    26: (150026, 'Mega Raichu X', None),
    36: (100036, 'Mega Clefable', ['fairy', 'flying']),
    71: (100071, 'Mega Victreebel', None),
    121: (100121, 'Mega Starmie', None),
    127: (100127, 'Mega Pinsir', ['bug', 'flying']),
    130: (100130, 'Mega Gyarados', ['water', 'dark']),
    149: (100149, 'Mega Dragonite', None),
    154: (100154, 'Mega Meganium', ['grass', 'fairy']),
    160: (100160, 'Mega Feraligatr', ['water', 'dragon']),
    181: (100181, 'Mega Ampharos', ['electric', 'dragon']),
    212: (100212, 'Mega Scizor', None),
    214: (100214, 'Mega Heracross', None),
    257: (100257, 'Mega Blaziken', None),
    260: (100260, 'Mega Swampert', None),
    306: (100306, 'Mega Aggron', ['steel']),
    358: (100358, 'Mega Chimecho', ['psychic', 'steel']),
    373: (100373, 'Mega Salamence', None),
    376: (100376, 'Mega Metagross', None),
    398: (100398, 'Mega Staraptor', ['fighting', 'flying']),
    445: (100445, 'Mega Garchomp', None),
    460: (100460, 'Mega Abomasnow', None),
    478: (100478, 'Mega Froslass', None),
    485: (100485, 'Mega Heatran', None),
    # Teselia (códigos con la numeración interna de Reloaded)
    500: (100523, 'Mega Emboar', None),
    530: (100528, 'Mega Excadrill', None),
    531: (100645, 'Mega Audino', ['normal', 'fairy']),
    545: (100672, 'Mega Scolipede', None),
    560: (100591, 'Mega Scrafty', None),
    604: (100697, 'Mega Eelektross', None),
    609: (100534, 'Mega Chandelure', None),
    623: (100655, 'Mega Golurk', None),
    # Kalos (paquete reloaded_megas_gigamax.zip, códigos internos de Reloaded)
    652: (100747, 'Mega Chesnaught', ['grass', 'fighting']),
    655: (100750, 'Mega Delphox', ['fire', 'psychic']),
    658: (100753, 'Mega Greninja', ['water', 'dark']),
    668: (100763, 'Mega Pyroar', ['fire', 'normal']),
    678: (100773, 'Mega Meowstic', ['psychic']),
    687: (100782, 'Mega Malamar', ['dark', 'psychic']),
    689: (100784, 'Mega Barbaracle', ['rock', 'fighting']),
    691: (100786, 'Mega Dragalge', ['poison', 'dragon']),
    701: (100795, 'Mega Hawlucha', ['fighting', 'flying']),
    718: (100996, 'Mega Zygarde', ['dragon', 'ground']),
    719: (100835, 'Mega Diancie', ['rock', 'fairy']),
    # Confirmadas por el usuario (en LISTA.md salían «sin confirmar»): Butterfree y el Floette de AZ.
    12: (100820, 'Mega Butterfree', ['bug', 'flying']),
    670: (100898, 'Mega Floette', ['fairy']),
}
# Segundas formas de especies que ya tienen mega: se eligen en el Laboratorio.
ALT = {
    6: (200006, 'Mega Charizard Y', None, 'Y'),
    26: (200026, 'Mega Raichu Y', None, 'Y'),
    150: (200150, 'Mega Mewtwo X', ['psychic', 'fighting'], 'X'),
    359: (200359, 'Mega Absol Z', None, 'Z'),
    445: (200445, 'Mega Garchomp Z', None, 'Z'),
    448: (200448, 'Mega Lucario Z', None, 'Z'),
}
# Aspecto Gigamax durante el Dynamax.
GMAX = {
    3: (150003, 'Venusaur Gigamax'), 6: (150006, 'Charizard Gigamax'), 9: (150009, 'Blastoise Gigamax'),
    12: (100012, 'Butterfree Gigamax'), 25: (100025, 'Pikachu Gigamax'), 52: (100052, 'Meowth Gigamax'),
    68: (100068, 'Machamp Gigamax'), 94: (150094, 'Gengar Gigamax'), 99: (100099, 'Kingler Gigamax'),
    131: (100131, 'Lapras Gigamax'), 133: (100133, 'Eevee Gigamax'), 143: (100143, 'Snorlax Gigamax'),
    569: (100581, 'Garbodor Gigamax'),
}
SID = {'mega': 16000, 'alt': 17000, 'gmax': 18000}

# filas del juego (como PMD): abajo, abajo-der., der., arriba-der., arriba, arriba-izq., izq., abajo-izq.
FILAS = [('2', False), ('3', False), ('6', False), ('9', False), ('8', False), ('9', True), ('6', True), ('3', True)]
# Si la forma trae dibujadas las otras 3 direcciones (7, 4, 1), se usan en vez del espejo.
PROPIAS = {5: '7', 6: '4', 7: '1'}
ANIMS = [('walk', None, 8), ('idle', None, 16), ('attack', 'A', 3), ('hurt', 'H', 5), ('faint', 'S', 30), ('charge', 'A', 3)]


def leer(ruta):
    d = zlib.decompress(open(ruta, 'rb').read()[8:])
    _, ox, oy, n = struct.unpack('<4i', d[:16])
    o, fr = 16, []
    for _ in range(n):
        _, w, h, ln = struct.unpack('<4i', d[o:o + 16]); o += 16
        a = np.frombuffer(d[o:o + ln], np.uint8).reshape(h, w, 4)[..., [2, 1, 0, 3]]
        fr.append(Image.fromarray(a.copy(), 'RGBA')); o += ln
    return ox, oy, fr


def hoja(carpeta, cod):
    """Hoja PMD de un código Reloaded (P<cod>_*.gmspr), o None si falta algún archivo."""
    archivos = {}
    for k in ['2', '3', '6', '8', '9', 'A', 'H', 'S']:
        p = os.path.join(carpeta, f'P{cod}_{k}.gmspr')
        if not os.path.exists(p):
            return None, None
        archivos[k] = leer(p)
    for k in PROPIAS.values():
        p = os.path.join(carpeta, f'P{cod}_{k}.gmspr')
        if os.path.exists(p):
            archivos[k] = leer(p)
    partes, meta, y = [], {}, 0
    for clave, fija, dur in ANIMS:
        filas = [(fija, False)] * 8 if fija else [(PROPIAS[r], False) if r in PROPIAS and PROPIAS[r] in archivos else f for r, f in enumerate(FILAS)]
        usados = [archivos[k] for k, _ in filas]
        n = max(len(fr) for _, _, fr in usados)
        # Tamaño de casilla: el origen de Reloaded queda en el centro de la casilla.
        mx = max(max(ox, f.width - ox) for ox, _, fr in usados for f in fr)
        my = max(max(oy, f.height - oy) for _, oy, fr in usados for f in fr)
        fw, fh = 2 * mx + 2, 2 * my + 2
        im = Image.new('RGBA', (fw * n, fh * 8))
        for r, (k, espejo) in enumerate(filas):
            ox, oy, fr = archivos[k]
            for c in range(n):
                f = fr[c % len(fr)]
                x0 = fw // 2 - ox
                if espejo:
                    f = f.transpose(Image.FLIP_LEFT_RIGHT)
                    x0 = fw // 2 - (f.width - ox)
                im.alpha_composite(f, (c * fw + x0, r * fh + fh // 2 - oy))
        partes.append((im, y))
        meta[clave] = {'y': y, 'fw': fw, 'fh': fh, 'n': n, 'rows': 8, 'd': [dur] * n}
        y += im.height
    w = max(im.width for im, _ in partes)
    out = Image.new('RGBA', (w, y))
    for im, yy in partes:
        out.paste(im, (0, yy))
    return out, {'w': w, 'h': y, 'anims': meta}


def variocolor_cod(cod):
    # 100xxx -> 101xxx, 150xxx -> 151xxx, 200xxx -> 201xxx
    return cod + 1000


def main():
    carpeta = sys.argv[1]
    site = sys.argv[2] if len(sys.argv) > 2 else 'site'
    ruta_sprites = os.path.join(site, 'data', 'sprites.json')
    sprites = json.load(open(ruta_sprites, encoding='utf-8'))
    hechas = {'megas': {}, 'alt': {}, 'gmax': {}}
    # Lo que ya estaba convertido se conserva aunque la carpeta de esta vez no traiga sus archivos
    # (p. ej. al convertir solo un paquete parcial de Reloaded).
    previas = {}
    ruta_js = os.path.join(site, 'megas-reloaded.js')
    if os.path.exists(ruta_js):
        for var, k in (('PB_MEGAS_RELOADED', 'megas'), ('PB_MEGAS_ALT', 'alt'), ('PB_GMAX', 'gmax')):
            m = re.search(r'window\.' + var + r' = (\{.*?\n\});', open(ruta_js, encoding='utf-8').read(), re.S)
            previas[k] = json.loads(m.group(1)) if m else {}

    def montar(tipo, sp, cod, nombre):
        sid = SID[tipo] + sp
        im, meta = hoja(carpeta, cod)
        if im is None:
            k = {'mega': 'megas', 'alt': 'alt', 'gmax': 'gmax'}[tipo]
            vieja = previas.get(k, {}).get(str(sp))
            if vieja and str(sid) in sprites:
                vieja = {x: y for x, y in vieja.items() if x not in ('types', 'form')}
                print(f'{nombre}: se conserva la ya convertida')
                return vieja
            print(f'OMITIDA {nombre} ({cod}): faltan archivos')
            return None
        im.save(os.path.join(site, 'assets', 'pmd', f'{sid}.png'), optimize=True)
        sh, _ = hoja(carpeta, variocolor_cod(cod))
        if sh is not None:
            sh.save(os.path.join(site, 'assets', 'pmd-shiny', f'{sid}.png'), optimize=True)
        sprites[str(sid)] = meta
        print(f'{nombre}: ok (variocolor: {"sí" if sh is not None else "no"})')
        return {'sid': sid, 'name': nombre, 'shiny': sh is not None, 'src': 'reloaded'}

    for sp, (cod, nombre, tipos) in MEGAS.items():
        e = montar('mega', sp, cod, nombre)
        if e:
            hechas['megas'][sp] = {**e, **({'types': tipos} if tipos else {})}
    for sp, (cod, nombre, tipos, forma) in ALT.items():
        e = montar('alt', sp, cod, nombre)
        if e:
            hechas['alt'][sp] = {**e, 'form': forma, **({'types': tipos} if tipos else {})}
    for sp, (cod, nombre) in GMAX.items():
        e = montar('gmax', sp, cod, nombre)
        if e:
            hechas['gmax'][sp] = e

    json.dump(sprites, open(ruta_sprites, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    with open(os.path.join(site, 'megas-reloaded.js'), 'w', encoding='utf-8') as fh:
        fh.write('/* Subversión propia: megas, formas X/Y/Z y Gigamax con sprites de Pokémon Reloaded 1.9.2.2\n'
                 '   (uso privado, con permiso de sus autores). Las lee mega-dynamax.js.\n'
                 '   No editar a mano: lo rehace tools/megas_reloaded.py. */\n')
        fh.write('window.PB_MEGAS_RELOADED = ' + json.dumps(hechas['megas'], ensure_ascii=False, indent=1) + ';\n')
        fh.write('window.PB_MEGAS_ALT = ' + json.dumps(hechas['alt'], ensure_ascii=False, indent=1) + ';\n')
        fh.write('window.PB_GMAX = ' + json.dumps(hechas['gmax'], ensure_ascii=False, indent=1) + ';\n')
    for nombre in os.listdir(os.path.join(site, 'assets')):
        if nombre.startswith('defineProperty-') and nombre.endswith('.js'):
            p = os.path.join(site, 'assets', nombre)
            s = open(p, encoding='utf-8').read()
            s2 = re.sub(r'"data/sprites\.json":`[^`]*`', '"data/sprites.json":`pbrel' + str(int(time.time()) % 100000) + '`', s)
            if s2 != s:
                open(p, 'w', encoding='utf-8').write(s2)
    print(len(hechas['megas']), 'megas,', len(hechas['alt']), 'formas X/Y/Z,', len(hechas['gmax']), 'Gigamax')


if __name__ == '__main__':
    main()
