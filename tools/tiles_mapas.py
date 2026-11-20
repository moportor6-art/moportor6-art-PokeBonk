"""Texturas de suelo que el motor pide para Isla Canela (island), Cueva Celeste (cave) y Bosque Encina (ancient) en
assets/env/<mapa>/tiles/ y que el juego nunca trajo (salía «Faltan N gráficos por cargar» y el suelo era el genérico).
Se hacen recoloreando texturas del propio mapa o del Valle Iris (mismo estilo, 128x128 y repetibles).
Uso: python3 tools/tiles_mapas.py (desde la raíz del repo)."""
from PIL import Image, ImageStat
import os
E = 'site/assets/env/'
def tono(src, rgb=None, contraste=1.0):
    im = Image.open(E + src + '.png').convert('RGB')
    if rgb is None: return im
    g = im.convert('L'); m = ImageStat.Stat(g).mean[0] or 1
    px = [(min(255, max(0, round(c * (1 + (v / m - 1) * contraste)))) for c in rgb) for v in g.getdata()]
    out = Image.new('RGB', im.size); out.putdata([tuple(x) for x in px]); return out
PLAN = {
    'canela': {'meadow': ('canela/ground',), 'tuff': ('iris/tiles/pebble', (150, 128, 104)), 'ash': ('iris/tiles/dirt', (104, 100, 98)),
               'crust': ('canela/path',), 'cliff': ('canela/cliff',), 'blacksand': ('iris/tiles/pebble', (58, 54, 60))},
    'cave': {'floor': ('cave/ground',), 'moss': ('iris/tiles/moss', (52, 96, 92)), 'crystal': ('iris/tiles/pebble', (130, 150, 230), 1.4),
             'gravel': ('iris/tiles/pebble', (84, 86, 110)), 'cliff': ('cave/cliff',), 'mud': ('iris/tiles/dirt', (62, 58, 72))},
    'encina': {'moss': ('encina/ground',), 'litter': ('iris/tiles/litter',), 'roots': ('encina/path',),
               'mud': ('iris/tiles/dirt', (84, 64, 44)), 'cliff': ('encina/cliff',), 'gravel': ('iris/tiles/pebble', (120, 112, 96))},
}
for mapa, tiles in PLAN.items():
    os.makedirs(E + mapa + '/tiles', exist_ok=True)
    for n, a in tiles.items():
        tono(*a).save(E + f'{mapa}/tiles/{n}.png', optimize=True)
