#!/usr/bin/env python3
"""Subversión propia: manifiestos del actualizador (Android y Windows).

El juego es una web que la app sirve desde sus propios archivos. El actualizador baja solo los archivos que
cambian a una carpeta aparte, y la app los sirve antes que los suyos. Para eso hace falta saber qué hay en
cada versión:

  python3 tools/contenido.py base site --version 56
      Escribe site/contenido.json (manifiesto principal) y site/contenido/<módulo>.json (archivo, tamaño y
      SHA-256 de cada fichero del módulo). Va DENTRO de la app: es lo que la app tiene de serie.

  python3 tools/contenido.py publicar site salida --tag v56 --repo usuario/repo --apk X.apk --exe Y.exe
      Escribe salida/contenido.json: el de base más dónde bajar los archivos (rama/etiqueta contenido-v56),
      el APK y el instalador completos (con su SHA-256) y el historial de cambios. Se firma aparte con la
      clave que firma el APK (la app la comprueba antes de usar nada).

Módulos: cada juego de "Más juegos" es uno (su carpeta) y lo demás es "pokebonk". El hash de un módulo es el
SHA-256 de su lista: si no cambia, no se baja nada de ese módulo.

"shell": huella del código nativo (Java de Android / Electron de Windows). Si la de la versión nueva no es la
de la app instalada, ese cambio no se puede aplicar por archivos y hace falta la actualización completa.
"""
import argparse, hashlib, json, os, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FORMATO = 1
MODULOS = {
    'pokebonk': 'PokéBonk (juego principal)',
    'pokeisaac': 'PokéIsaac',
    'pokemonsurvivors': 'Pokémon Survivors',
    'pokesurvivor': 'PokéSurvivor',
    'pokepath': 'PokéBonk TD',
    'pokeplunder': 'PokéPlunder',
    'pokeoverlord': 'Pokémon Overlord',
    'pokelike': 'Pokelike',
}
FUERA = ('contenido.json', 'contenido/')


def sha_archivo(p):
    h = hashlib.sha256()
    with open(p, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''):
            h.update(b)
    return h.hexdigest()


def huella(rutas):
    h = hashlib.sha256()
    archivos = []
    for r in rutas:
        p = ROOT / r
        archivos += [x for x in p.rglob('*') if x.is_file()] if p.is_dir() else ([p] if p.is_file() else [])
    # Mismo orden en Linux y Windows (rutas con / y orden por texto).
    for f in sorted(archivos, key=lambda x: x.relative_to(ROOT).as_posix()):
        h.update(f.relative_to(ROOT).as_posix().encode())
        h.update(f.read_bytes())
    return h.hexdigest()[:16]


def shells():
    return {
        'android': huella(['android', 'build.py', 'config.json']),
        'android-lite': huella(['android', 'build.py']),  # la Lite cambia config.json (paquete y nombre) al compilar
        'windows': huella(['desktop/main.js', 'desktop/preload.js', 'desktop/actualizador.js', 'desktop/package.json', 'desktop/build']),
    }


def modulo_de(rel):
    top = rel.split('/', 1)[0]
    return top if top in MODULOS and '/' in rel else 'pokebonk'


def base(site, version):
    site = Path(site)
    listas = {m: {} for m in MODULOS}
    for p in sorted(site.rglob('*')):
        if not p.is_file():
            continue
        rel = str(p.relative_to(site)).replace('\\', '/')
        if rel.startswith(FUERA) or rel.endswith(('.part',)) or '/.missing-' in rel:
            continue
        listas[modulo_de(rel)][rel] = [p.stat().st_size, sha_archivo(p)]
    (site / 'contenido').mkdir(exist_ok=True)
    mods = {}
    for m, archivos in listas.items():
        if not archivos:
            continue
        datos = json.dumps({'modulo': m, 'archivos': archivos}, ensure_ascii=False, separators=(',', ':'), sort_keys=True).encode()
        (site / 'contenido' / f'{m}.json').write_bytes(datos)
        mods[m] = {'nombre': MODULOS[m], 'hash': hashlib.sha256(datos).hexdigest(), 'archivos': len(archivos),
                   'bytes': sum(v[0] for v in archivos.values())}
    man = {'formato': FORMATO, 'version': int(version), 'sub': sub_actual(site), 'shell': shells(), 'modulos': mods}
    (site / 'contenido.json').write_text(json.dumps(man, ensure_ascii=False, indent=1), encoding='utf-8')
    print(f'contenido.json: versión {version}, ' + ', '.join(f'{m} {v["archivos"]}' for m, v in mods.items()))
    print('huellas: ' + ' '.join(f'{m}={v["hash"][:12]}' for m, v in mods.items()) + ' | shell ' + json.dumps(man['shell']))


def subversion(site):
    js = r"""
const vm=require('vm'),fs=require('fs');
const noop=new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>'':noop,apply:()=>noop,construct:()=>noop});
const ctx={document:noop,localStorage:{getItem:()=>null,setItem(){}},setInterval(){},setTimeout(){},addEventListener(){},MutationObserver:function(){return{observe(){}}},console};
ctx.window=ctx;vm.createContext(ctx);vm.runInContext(fs.readFileSync(process.argv[1],'utf8'),ctx);
process.stdout.write(JSON.stringify({sub:ctx.PB_SUB.sub,cambios:ctx.PB_SUB.changelog}));
"""
    try:
        out = subprocess.run(['node', '-e', js, str(Path(site) / 'subversion.js')], capture_output=True, text=True, encoding='utf-8', timeout=60)
        return json.loads(out.stdout)
    except Exception as e:
        print('aviso: no se pudo leer subversion.js:', e, file=sys.stderr)
        return {'sub': '', 'cambios': []}


def sub_actual(site):
    return subversion(site).get('sub', '')


def publicar(site, salida, tag, repo, apk, exe, apk_lite=None):
    site, salida = Path(site), Path(salida)
    salida.mkdir(parents=True, exist_ok=True)
    man = json.loads((site / 'contenido.json').read_text(encoding='utf-8'))
    man['tag'] = tag
    man['base'] = f'https://raw.githubusercontent.com/{repo}/contenido-{tag}/'
    man['cambios'] = subversion(site).get('cambios', [])[:30]
    completo = {}
    for plat, f, nombre in (('android', apk, 'PokeBonk.apk'), ('windows', exe, 'PokeBonk-Windows-Instalador.exe'), ('android-lite', apk_lite, 'PokeBonk-Lite.apk')):
        if f and Path(f).is_file():
            completo[plat] = {'url': f'https://github.com/{repo}/releases/download/{tag}/{nombre}',
                              'bytes': Path(f).stat().st_size, 'sha256': sha_archivo(f)}
    man['completo'] = completo
    (salida / 'contenido.json').write_text(json.dumps(man, ensure_ascii=False, indent=1), encoding='utf-8')
    print('publicado', tag, list(completo))


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    sp = ap.add_subparsers(dest='cmd', required=True)
    b = sp.add_parser('base'); b.add_argument('site'); b.add_argument('--version', required=True)
    p = sp.add_parser('publicar'); p.add_argument('site'); p.add_argument('salida'); p.add_argument('--tag', required=True)
    p.add_argument('--repo', required=True); p.add_argument('--apk'); p.add_argument('--exe'); p.add_argument('--apk-lite')
    a = ap.parse_args()
    if a.cmd == 'base':
        base(a.site, a.version)
    else:
        publicar(a.site, a.salida, a.tag, a.repo, a.apk, a.exe, a.apk_lite)
