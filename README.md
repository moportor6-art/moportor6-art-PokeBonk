# PokéBonk para Android (mi versión)

Versión propia del port para Android de **PokéBonk**, con su propio canal de actualizaciones.

- Juego: **Charcher** (PokéBonk 0.9.9).
- Port para Android original: **JayElDragon** ([Pokebonk-android](https://github.com/JayElDragon/Pokebonk-android)).
- Sprites de Pokémon: PMD SpriteCollab (CC BY-NC 4.0). Pokémon © Nintendo / Creatures Inc. / GAME FREAK inc.

Proyecto de fans, sin ánimo de lucro y no oficial.

## Qué hay aquí

- `site/`: el juego web 0.9.9 ya parcheado por el port (sale del APK de JayElDragon), con los menús, controles y textos del port.
- `android/`: la app Android (WebView a pantalla completa que carga `site/` sin internet).
- `build.py`: compila y firma el APK con tu paquete, tu nombre y tu repositorio de actualizaciones.
- `config.json`: lo que cambia respecto al original.
- `.github/workflows/compilar.yml`: GitHub compila el APK y lo publica como release automáticamente.

## config.json

| Campo | Qué es |
|---|---|
| `repo` | `usuario/repositorio` de GitHub. La app consulta aquí la última release para avisar de actualizaciones. |
| `package` | Nombre del paquete Android (único; no lo cambies una vez publicado). |
| `appName` | Nombre que sale bajo el icono. |
| `versionCode` | Número de versión para compilar en tu PC (en GitHub lo pone la etiqueta). |

## Publicar una actualización (sin PC)

1. Cambia lo que quieras (archivos de `site/`, por ejemplo) y súbelo al repositorio.
2. En GitHub: *Releases → Draft a new release → Choose a tag* y escribe una etiqueta nueva con un número mayor que la anterior: `v1`, `v2`, `v3`…
3. Publícala. GitHub Actions compila el APK (unos minutos) y lo adjunta a esa release.
4. Las apps instaladas verán el aviso «Descargar actualización» la próxima vez que se abran.

El aviso solo funciona si el repositorio es **público** (la app consulta GitHub sin cuenta).

## Secretos necesarios (una sola vez)

En *Settings → Secrets and variables → Actions → New repository secret*:

- `KEYSTORE_BASE64`: el contenido de `KEYSTORE_BASE64.txt`.
- `KEYSTORE_PASSWORD`: el contenido de `KEYSTORE_PASSWORD.txt`.

Guarda también una copia de `pokebonk.keystore` y su contraseña fuera de GitHub. **Si pierdes la clave no podrás publicar actualizaciones** que se instalen encima de la app: Android exige la misma firma siempre.

## Compilar en tu PC (opcional)

Necesitas JDK 17 y el SDK de Android (build-tools 35 y platforms/android-35):

```
set ANDROID_SDK_ROOT=C:\ruta\al\Android\Sdk      (Windows)
export ANDROID_SDK_ROOT=~/Android/Sdk            (Linux)
python build.py --version-code 2
```

Para firmar con tu clave en el PC, define antes `KEYSTORE_FILE` (ruta a `pokebonk.keystore`) y `KEYSTORE_PASSWORD`. El APK queda en `dist/PokeBonk.apk`.
