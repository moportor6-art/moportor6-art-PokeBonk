#!/usr/bin/env bash
# Subversión propia: publica el contenido de una versión para el actualizador.
# Uso: tools/publicar_contenido.sh TAG CARPETA_SITIO CARPETA_COMPLETOS
#  - manifiesto con historial y APK/instalador completos (tools/contenido.py publicar), firmado con la clave
#    del APK (KEYSTORE_BASE64 / KEYSTORE_PASSWORD);
#  - rama "contenido" y etiqueta "contenido-TAG" con el juego archivo por archivo. GitHub no admite archivos de
#    más de 100 MB: esos van partidos en trozos de 90 MB ("archivo.pbparte.00", ".01"...) y el original no se
#    sube (el actualizador los junta y comprueba el SHA-256 del archivo entero);
#  - contenido.json y su firma también en la release.
set -euo pipefail
TAG="$1"; SITIO="$2"; COMPLETOS="$3"
REPO="${GITHUB_REPOSITORY}"

python3 tools/contenido.py publicar "$SITIO" pub --tag "$TAG" --repo "$REPO" --apk "$COMPLETOS/PokeBonk.apk" --exe "$COMPLETOS/PokeBonk-Windows-Instalador.exe"
echo "$KEYSTORE_BASE64" | base64 -d > "$RUNNER_TEMP/k.jks"
keytool -importkeystore -noprompt -srckeystore "$RUNNER_TEMP/k.jks" -srcstorepass "$KEYSTORE_PASSWORD" -srcalias pokebonk \
  -destkeystore "$RUNNER_TEMP/k.p12" -deststoretype PKCS12 -deststorepass "$KEYSTORE_PASSWORD" -destkeypass "$KEYSTORE_PASSWORD"
openssl pkcs12 -in "$RUNNER_TEMP/k.p12" -nocerts -nodes -passin env:KEYSTORE_PASSWORD -out "$RUNNER_TEMP/k.pem" 2>/dev/null \
  || openssl pkcs12 -legacy -in "$RUNNER_TEMP/k.p12" -nocerts -nodes -passin env:KEYSTORE_PASSWORD -out "$RUNNER_TEMP/k.pem"
keytool -exportcert -rfc -alias pokebonk -keystore "$RUNNER_TEMP/k.jks" -storepass "$KEYSTORE_PASSWORD" > "$RUNNER_TEMP/cert.pem"
openssl dgst -sha256 -sign "$RUNNER_TEMP/k.pem" -out "$RUNNER_TEMP/firma.bin" pub/contenido.json
openssl x509 -in "$RUNNER_TEMP/cert.pem" -pubkey -noout > "$RUNNER_TEMP/pub.pem"
openssl dgst -sha256 -verify "$RUNNER_TEMP/pub.pem" -signature "$RUNNER_TEMP/firma.bin" pub/contenido.json
base64 -w0 "$RUNNER_TEMP/firma.bin" > pub/contenido.json.sig
rm -f "$RUNNER_TEMP/k.pem" "$RUNNER_TEMP/k.p12" "$RUNNER_TEMP/k.jks"

# Árbol del contenido en una carpeta aparte (repositorio git propio que reusa los objetos ya subidos).
ARBOL="$RUNNER_TEMP/arbol"
rm -rf "$ARBOL"; mkdir -p "$ARBOL"
cp -a "$SITIO/." "$ARBOL/"
find "$ARBOL" -type f -size +95M | while read -r f; do
  split -b 90M -d -a 2 "$f" "$f.pbparte."
  rm "$f"
  echo "partido: ${f#$ARBOL/} ($(ls "$f".pbparte.* | wc -l) trozos)"
done
cp pub/contenido.json pub/contenido.json.sig "$ARBOL/"
printf '* -text\n' > "$ARBOL/.gitattributes"
URL="$(git remote get-url origin)"
EXTRA="$(git config --get-all http.https://github.com/.extraheader || true)"
cd "$ARBOL"
git init -q -b contenido
git config user.name "github-actions"
git config user.email "github-actions@users.noreply.github.com"
[ -n "$EXTRA" ] && git config http.https://github.com/.extraheader "$EXTRA"
git remote add origin "$URL"
git fetch -q --depth=1 origin contenido:refs/remotes/origin/contenido 2>/dev/null || git fetch -q --depth=1 origin main:refs/remotes/origin/main || true
git add -A
git commit -q -m "Contenido de $TAG para el actualizador"
git tag -f "contenido-$TAG"
git push -f origin HEAD:refs/heads/contenido "refs/tags/contenido-$TAG"
cd - > /dev/null
gh release upload "$TAG" pub/contenido.json pub/contenido.json.sig --clobber
echo "Contenido de $TAG publicado"
