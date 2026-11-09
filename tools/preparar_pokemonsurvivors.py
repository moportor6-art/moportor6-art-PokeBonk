#!/usr/bin/env python3
"""Subversión propia: Pokémon Survivors (github.com/pedrobarretto/pokemon-survivors, código MIT) dentro de PokéBonk.

Toma su carpeta dist/ (compilada con `vite build --base /pokemonsurvivors/`) y la deja en DESTINO con el botón
"Volver a PokéBonk" en sus páginas de juego. Sin claves de sus servicios, el juego queda en modo invitado: sin
cuenta, sin ranking ni cooperativo online, y la partida se guarda en el dispositivo.

Uso: python3 tools/preparar_pokemonsurvivors.py DIST DESTINO VERSIÓN
"""
import shutil, sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent


def main():
    src, dest, ver = Path(sys.argv[1]), Path(sys.argv[2]), sys.argv[3]
    if not (src / 'index.html').is_file():
        sys.exit('Falta dist/index.html')
    shutil.rmtree(dest, ignore_errors=True)
    shutil.copytree(src, dest, ignore=shutil.ignore_patterns('*.map'))
    shutil.copy2(REPO / 'site/pokeisaac/volver-pokebonk.js', dest / 'volver-pokebonk.js')
    n = 0
    for page in [dest / 'index.html'] + [dest / l / 'index.html' for l in ('en', 'es', 'fr', 'zh-tw')]:
        if page.is_file():
            h = page.read_text(encoding='utf-8')
            if 'volver-pokebonk.js' not in h:
                h = h.replace('</head>', '<script>window.PB_VOLVER_TOP = 1; window.PB_VOLVER_URL = "/index.html";</script><script src="/pokemonsurvivors/volver-pokebonk.js"></script></head>', 1)
                page.write_text(h, encoding='utf-8'); n += 1
    (dest / 'version.txt').write_text(ver + '\n')
    tam = sum(f.stat().st_size for f in dest.rglob('*') if f.is_file())
    print('Pokémon Survivors %s listo en %s (%.0f MB, %d páginas con Volver)' % (ver, dest, tam / 1048576, n))


if __name__ == '__main__':
    main()
