"""Compila y firma el APK. Funciona en Windows, Linux y en GitHub Actions.

Uso:  python build.py                      (usa config.json)
      python build.py --version-code 5     (fuerza el número de versión)

Necesita el SDK de Android (variable ANDROID_SDK_ROOT o ANDROID_HOME) con
build-tools 35 o superior y platforms/android-35, y un JDK 17 (JAVA_HOME).

Firma: si existen las variables KEYSTORE_FILE y KEYSTORE_PASSWORD las usa
(así lo hace GitHub Actions con los secretos del repositorio). Si no, usa o
crea android/mi-clave.keystore + android/keystore.properties (no los subas).
"""
from pathlib import Path
import argparse, json, os, re, secrets, shutil, subprocess, sys, zipfile

ROOT = Path(__file__).resolve().parent
EXE = '.exe' if os.name == 'nt' else ''
BAT = '.bat' if os.name == 'nt' else ''

ap = argparse.ArgumentParser()
ap.add_argument('--version-code', type=int)
ap.add_argument('--version-name')
args = ap.parse_args()

cfg = json.loads((ROOT / 'config.json').read_text(encoding='utf-8'))
repo, package, app_name = cfg['repo'], cfg['package'], cfg['appName']
version_code = str(args.version_code or cfg['versionCode'])
version_name = args.version_name or f"{cfg['versionNamePrefix']}{version_code}"
if '/' not in repo or 'TU_USUARIO' in repo:
    sys.exit('Pon tu repositorio de GitHub en config.json ("repo": "usuario/repositorio").')
if not re.fullmatch(r'[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+', package):
    sys.exit('El "package" de config.json no es válido (ejemplo: com.tunombre.pokebonk).')

# --- herramientas -------------------------------------------------------------
sdk = Path(os.environ.get('ANDROID_SDK_ROOT') or os.environ.get('ANDROID_HOME') or '')
if not sdk.is_dir():
    sys.exit('No encuentro el SDK de Android: define ANDROID_SDK_ROOT.')
bts = sorted([p for p in (sdk / 'build-tools').iterdir() if (p / ('aapt2' + EXE)).is_file()], key=lambda p: [int(x) for x in re.findall(r'\d+', p.name)])
if not bts:
    sys.exit('Faltan las build-tools del SDK de Android.')
bt = bts[-1]
aj = sdk / 'platforms/android-35/android.jar'
if not aj.is_file():
    cands = sorted((sdk / 'platforms').glob('android-*/android.jar'))
    if not cands:
        sys.exit('Falta platforms/android-35 en el SDK.')
    aj = cands[-1]
jdk = Path(os.environ.get('JAVA_HOME') or '')
java = jdk / 'bin' / ('java' + EXE) if jdk.is_dir() else Path(shutil.which('java') or 'java')
javac = jdk / 'bin' / ('javac' + EXE) if jdk.is_dir() else Path(shutil.which('javac') or 'javac')
keytool = jdk / 'bin' / ('keytool' + EXE) if jdk.is_dir() else Path(shutil.which('keytool') or 'keytool')

def run(cmd):
    subprocess.run([str(x) for x in cmd], check=True)

# --- copia de trabajo con tu paquete y tu repositorio -----------------------
build = ROOT / 'work-build'
shutil.rmtree(build, ignore_errors=True)
classes = build / 'classes'; classes.mkdir(parents=True)
assets = build / 'assets'; assets.mkdir()
src = build / 'src' / Path(*package.split('.')); src.mkdir(parents=True)
for f in (ROOT / 'android/src').rglob('*.java'):
    code = f.read_text(encoding='utf-8')
    code = re.sub(r'^package [\w.]+;', f'package {package};', code, count=1, flags=re.M)
    code = re.sub(r'static final String UPDATE_REPO = "[^"]*";', f'static final String UPDATE_REPO = "{repo}";', code)
    (src / f.name).write_text(code, encoding='utf-8')
man = (ROOT / 'android/AndroidManifest.xml').read_text(encoding='utf-8')
man = re.sub(r'package="[^"]*"', f'package="{package}"', man, count=1)
man = re.sub(r'android:label="[^"]*"', f'android:label="{app_name}"', man, count=1)
(build / 'AndroidManifest.xml').write_text(man, encoding='utf-8')
shutil.copytree(ROOT / 'site', assets / 'site', ignore=shutil.ignore_patterns('.missing-*', '*.part'))
# el aviso de actualización del juego enlaza a tu repositorio
for f in (assets / 'site').glob('*.js'):
    t = f.read_text(encoding='utf-8')
    if 'JayElDragon/Pokebonk-android' in t:
        f.write_text(t.replace('JayElDragon/Pokebonk-android', repo), encoding='utf-8')

# --- compilar -----------------------------------------------------------------
dist = ROOT / 'dist'; dist.mkdir(exist_ok=True)
run([bt / ('aapt2' + EXE), 'compile', '--dir', ROOT / 'android/res', '-o', build / 'res.zip'])
run([bt / ('aapt2' + EXE), 'link', '-o', build / 'resources.apk', '-I', aj, '--manifest', build / 'AndroidManifest.xml', '-A', assets, build / 'res.zip',
     '--min-sdk-version', '26', '--target-sdk-version', '35', '--version-code', version_code, '--version-name', version_name,
     '-0', 'png', '-0', 'jpg', '-0', 'ogg', '-0', 'mp3', '-0', 'glb', '-0', 'woff2', '-0', 'woff', '-0', 'pck', '-0', 'wasm'])
run([javac, '-nowarn', '-source', '11', '-target', '11', '-encoding', 'UTF-8', '-cp', aj, '-d', classes, *src.glob('*.java')])
run([java, '-cp', bt / 'lib/d8.jar', 'com.android.tools.r8.D8', '--release', '--min-api', '26', '--lib', aj, '--output', build, *classes.rglob('*.class')])
with zipfile.ZipFile(build / 'resources.apk') as zi, zipfile.ZipFile(build / 'unsigned.apk', 'w') as zo:
    for info in zi.infolist():
        zo.writestr(info, zi.read(info.filename))
    zo.write(build / 'classes.dex', 'classes.dex', compress_type=zipfile.ZIP_DEFLATED)
run([bt / ('zipalign' + EXE), '-p', '-f', '4', build / 'unsigned.apk', build / 'aligned.apk'])

# --- firmar -------------------------------------------------------------------
ks_env, pw_env = os.environ.get('KEYSTORE_FILE'), os.environ.get('KEYSTORE_PASSWORD')
if ks_env and pw_env:
    ks, password = Path(ks_env), pw_env
else:
    ks = ROOT / 'android/mi-clave.keystore'
    props = ROOT / 'android/keystore.properties'
    if ks.exists() and not props.exists():
        sys.exit('Existe la clave pero falta android/keystore.properties.')
    if not ks.exists():
        password = secrets.token_urlsafe(24)
        props.write_text('storePassword=' + password + '\n', encoding='utf-8')
        run([keytool, '-genkeypair', '-keystore', ks, '-alias', 'pokebonk', '-keyalg', 'RSA', '-keysize', '2048', '-validity', '10000',
             '-storepass', password, '-keypass', password, '-dname', 'CN=PokeBonk personal'])
    else:
        password = next(l.split('=', 1)[1] for l in props.read_text(encoding='utf-8').splitlines() if l.startswith('storePassword='))
pwf = build / 'pw.tmp'
pwf.write_text(password + '\n' + password + '\n', encoding='utf-8')
try:
    out = dist / 'PokeBonk.apk'
    run([java, '-jar', bt / 'lib/apksigner.jar', 'sign', '--ks', ks, '--ks-key-alias', 'pokebonk', '--ks-pass', 'file:' + str(pwf), '--key-pass', 'file:' + str(pwf), '--out', out, build / 'aligned.apk'])
finally:
    pwf.unlink(missing_ok=True)
run([java, '-jar', bt / 'lib/apksigner.jar', 'verify', out])
print(f'APK listo: {out}  (paquete {package}, versión {version_code} / {version_name})')
