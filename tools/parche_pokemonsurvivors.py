#!/usr/bin/env python3
"""Subversión propia: parches al código de Pokémon Survivors antes de compilarlo (pedrobarretto/pokemon-survivors).

- "Auto aprender": copia tools/pokemonsurvivors/pbAutohab.ts a src/ y, en main.ts, al abrir la elección de nivel
  (fase 'levelup', solo en partida individual), escoge sola la carta si el ajuste está activado.
Si el código de arriba cambia y no se encuentra el sitio, se avisa y se compila sin el parche (no falla).

Uso: python3 tools/parche_pokemonsurvivors.py CARPETA_DEL_CÓDIGO
"""
import re, shutil, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent


def main():
    src = Path(sys.argv[1])
    main_ts = src / 'src' / 'main.ts'
    t = main_ts.read_text(encoding='utf-8')
    if 'pbAutoPick' in t:
        print('ya parcheado'); return
    m = re.search(r"(\n[ \t]*)case 'levelup':(\n[ \t]*)r\.overlay = levelUp\(", t)
    faltan = [n for n in ('./game/moves', './data/items', './game/branch') if not (src / 'src' / (n[2:] + '.ts')).is_file()]
    if not m or faltan:
        print('AVISO: no se encontró dónde poner Auto aprender', faltan); return
    shutil.copy2(HERE / 'pokemonsurvivors' / 'pbAutohab.ts', src / 'src' / 'pbAutohab.ts')
    ind = m.group(2)
    t = t[:m.start()] + m.group(1) + "case 'levelup':" + ind + "if (!c && pbAutoOn()) { const auto = pbAutoPick(g, me); if (auto) { pick(auto); break } }" + ind + "r.overlay = levelUp(" + t[m.end():]
    # import después del primer import
    i = t.index('\n', t.index('import ')) + 1
    t = t[:i] + "import { pbAutoOn, pbAutoPick } from './pbAutohab'\n" + t[i:]
    main_ts.write_text(t, encoding='utf-8')
    print('Auto aprender añadido a Pokémon Survivors')


if __name__ == '__main__':
    main()
