#!/usr/bin/env python3
"""Subversión propia: PokéIsaac sin cuenta (parche que se aplica a cada versión que se baja de pokeisaac.com).

1. Deja pasar los parámetros mockauth/mockdelay/mockanon de la dirección (la versión publicada los borra todos):
   con ?mockauth=1 el juego usa la simulación de su servidor que trae dentro y guarda todo en el dispositivo.
2. Llama a window.PB_ISAAC_LOCAL(cuenta, juego) para que pb-local.js entre solo como invitado local.
3. Cambia el aviso "Modo simulado (mockauth)" por uno en español normal.
4. Carga pb-local.js en index.html.

Uso: python3 tools/parche_pokeisaac.py site/pokeisaac   (se puede repetir: no aplica dos veces lo mismo)
Sale con error si el juego cambió y algún parche ya no encaja (el resto del juego sigue igual).
"""
import re, sys
from pathlib import Path


def parchear(dest):
    dest = Path(dest)
    js = dest / 'js/pokeisaac.js'
    t = js.read_text(encoding='utf-8')
    fallos = []
    if 'pokeisaac.mock.db' not in t:
        fallos.append('el juego ya no trae la simulación del servidor')
    if '/^mock(auth|delay|anon)$/' not in t:
        t, n = re.subn(r'if\(window\.PI_BUILD\)for\(const (\w+) of Object\.keys\((\w+)\)\)delete \2\[\1\]',
                       r'if(window.PI_BUILD)for(const \1 of Object.keys(\2))/^mock(auth|delay|anon)$/.test(\1)||delete \2[\1]', t, count=1)
        if not n:
            fallos.append('no se encontró dónde borra los parámetros')
    if 'PB_ISAAC_LOCAL' not in t:
        t, n = re.subn(r'(\w+)\.Account=(\w+),', r'\1.Account=\2,window.PB_ISAAC_LOCAL&&window.PB_ISAAC_LOCAL(\2,\1),', t, count=1)
        if not n:
            fallos.append('no se encontró la cuenta')
    t = t.replace('Modo simulado (mockauth)', 'Modo sin cuenta: tu progreso se guarda en este dispositivo')
    js.write_text(t, encoding='utf-8')
    idx = dest / 'index.html'
    h = idx.read_text(encoding='utf-8')
    if 'pb-local.js' not in h:
        h = h.replace('<script src="volver-pokebonk.js"></script>', '<script src="volver-pokebonk.js"></script>\n  <script src="pb-local.js"></script>', 1)
        if 'pb-local.js' not in h:
            fallos.append('no se pudo añadir pb-local.js')
        idx.write_text(h, encoding='utf-8')
    return fallos


if __name__ == '__main__':
    f = parchear(sys.argv[1] if len(sys.argv) > 1 else 'site/pokeisaac')
    if f:
        sys.exit('Parche de PokéIsaac sin cuenta: ' + '; '.join(f))
    print('Parche de PokéIsaac sin cuenta aplicado')
