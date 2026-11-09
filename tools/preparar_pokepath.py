#!/usr/bin/env python3
"""Subversión propia: PokéPath TD (de Khydra) dentro de PokéBonk.

Toma el juego que va dentro de su versión de escritorio (carpeta sacada de resources/app.asar) y lo deja listo en
DESTINO: solo la parte web (index.html, styles.css, src/), con el botón "Volver a PokéBonk", pantalla completa por el
navegador en vez de Electron y la música a 96 kbps (si hay ffmpeg) para que el APK pese menos.

Uso: python3 tools/preparar_pokepath.py CARPETA_DEL_ASAR DESTINO [VERSIÓN]
"""
import json, re, shutil, subprocess, sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

SHIM = """/* Subversión propia: PokéPath TD (versión de escritorio de Khydra) dentro de PokéBonk.
   La versión de escritorio usa Electron para la pantalla completa: aquí se hace con el navegador. */
window.electronAPI = window.electronAPI || {
  toggleFullscreen: () => {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    } catch (e) {}
    return Promise.resolve();
  }
};
"""


def main():
    src, dest = Path(sys.argv[1]), Path(sys.argv[2])
    ver = sys.argv[3] if len(sys.argv) > 3 else ''
    for f in ('index.html', 'src'):
        if not (src / f).exists():
            sys.exit('No parece PokéPath TD: falta %s' % f)
    shutil.rmtree(dest, ignore_errors=True)
    dest.mkdir(parents=True)
    shutil.copytree(src / 'src', dest / 'src', ignore=shutil.ignore_patterns('generate-assets-list.js'))
    for f in ('index.html', 'styles.css'):
        if (src / f).exists():
            shutil.copy2(src / f, dest / f)
    (dest / 'pb-pokepath.js').write_text(SHIM, encoding='utf-8')
    shutil.copy2(REPO / 'site/pokeisaac/volver-pokebonk.js', dest / 'volver-pokebonk.js')
    h = (dest / 'index.html').read_text(encoding='utf-8')
    if 'pb-pokepath.js' not in h:
        h = h.replace('</head>', '    <script src="pb-pokepath.js"></script>\n    <script src="volver-pokebonk.js"></script>\n</head>', 1)
    (dest / 'index.html').write_text(h, encoding='utf-8')
    if not ver:
        try:
            ver = json.loads((src / 'package.json').read_text())['version']
        except Exception:  # noqa
            ver = '?'
    (dest / 'version.txt').write_text(ver + '\n')
    if shutil.which('ffmpeg'):
        def bajar(f):
            t = f.with_name(f.name + '.t.mp3')
            r = subprocess.run(['ffmpeg', '-nostdin', '-v', 'error', '-y', '-i', str(f), '-codec:a', 'libmp3lame', '-b:a', '96k', str(t)])
            if r.returncode == 0 and t.exists() and t.stat().st_size < f.stat().st_size:
                t.replace(f)
            elif t.exists():
                t.unlink()
        with ThreadPoolExecutor(8) as pool:
            list(pool.map(bajar, (dest / 'src').rglob('*.mp3')))
    tam = sum(f.stat().st_size for f in dest.rglob('*') if f.is_file())
    print('PokéPath TD %s listo en %s (%.0f MB)' % (ver, dest, tam / 1048576))


if __name__ == '__main__':
    main()
