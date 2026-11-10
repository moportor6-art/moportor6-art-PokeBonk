# Cambios respecto al port original

## Windows: pantalla morada y registro (Subversión 0.22)
- `desktop/main.js` ya no pone `enable-zero-copy` ni `enable-gpu-rasterization`: con una RX 7800 XT la ventana se quedaba con el color de fondo aunque el menú estaba cargado.
- Registro en `%APPDATA%\PokeBonk\registro.txt` (avisos y errores de la consola, fallos de carga, archivos que no existen y caídas del proceso). Ctrl+Mayús+I además de F12. Los archivos que no existen responden 404 en vez de un error de red.
- El trabajo `windows` de `compilar.yml` abre la app 45 s con `PB_DIAG_DIR`: deja en el registro de la compilación el `registro.txt`, el estado de la página y una captura en base64.

## Windows: aviso de copia no oficial (Subversión 0.21)
- `main-DfdwqtE9-*.js` comprueba `location.hostname` y, si no es una dirección conocida (pokebonk.com, `appassets.androidplatform.net` del APK, localhost o red local), tapa el juego con "Esta copia de PokéBonk no es la oficial". La app de Windows carga `app://pokebonk/`, cuyo hostname es `pokebonk`: se añade a esa lista. No se cambia la dirección para no cambiar el origen (y perder lo guardado).

## PokéBonk Remaster (Subversión 0.20)
- `site/remaster.js`: marca "REMASTER" bajo el logo (oculta `.com`) y en el título, botón **Remaster** en la barra del menú con tres pestañas, y tour de bienvenida la primera vez (`localStorage` `pb-remaster`, campo `tour`).
- Pasaporte de entrenador: lee `pokeisaac.save.v1`, `ps:save` (Pokémon Survivors), `poke_*` (Pokelike), `pokepath:data`, `pokeplunder:data` (o la clave antigua `data`, según su contenido) y el `save.json` de PokéSurvivor en IndexedDB (`/userfs`, almacén `FILE_DATA`). Cada insignia da Polvo Estelar una vez (`meta.profile.stardust`, `meta.save()`), nunca durante una partida.
- Desafío del Alfa: semana desde el lunes 5 de enero de 2026 (UTC); Pokémon de la Liga, mapa desbloqueado y dificultad sacados con una semilla de la semana. Se empieza con `App.startRun({species, biome, tier, boosts: [], mode: 'standard'})`; el resultado se lee envolviendo `run.result` de la partida (solo cuando `state` es `over` y las reglas coinciden).
- Parche en `main-*.js`: `applySettings()` deja `window.__pbMeta` y `window.__pbApp` para estos módulos.
- Nombre de la app: `android:label` "PokéBonk Remaster" y título de la ventana de Windows. `productName` sigue siendo "PokeBonk" para no cambiar la carpeta de datos (y no perder partidas).
- `site/pb-guardado.js`: PokéPath TD y PokéPlunder usaban la misma clave `data` de `localStorage`. Ahora cada juego pone un prefijo a sus claves (`window.PB_GUARDADO`) y la clave antigua se pasa al juego que corresponde por su contenido. Lo añade también `tools/preparar_pokepath.py`.

## Soporte extendido: mando y PC (Subversión 0.19)
- `desktop/preload.js` expone `window.pokebonkDesktop` (`display`, `setDisplay`, `relaunch`), el puente que el juego espera de su versión de escritorio oficial: así aparece la pestaña **Pantalla** de Ajustes. `desktop/main.js` guarda los ajustes en `pantalla.json` (carpeta de datos de la app), aplica modo, tamaño y monitor al momento, y al arrancar pone `use-angle` (d3d11/gl/vulkan) y, con "FPS sin tope", `disable-gpu-vsync` y `disable-frame-rate-limit`. Siempre: `force_high_performance_gpu`, `ignore-gpu-blocklist`, `enable-gpu-rasterization` y `enable-zero-copy`. Se responde `vsyncNext: true` porque el juego reactiva el V-Sync al arrancar si no; "FPS sin tope" va con sus propias claves (`fpsFree`, `fpsFreeNext`).
- Parches del juego: resolución "Súper 1,5×/2×" (`fixedRes` -3 y -2: `pixelRatio` = `devicePixelRatio` × 1,5 o × 2, en `resize()` de `main-*.js`), fila "FPS sin tope" en la pestaña Pantalla y Límite de FPS con 165 y 240 (`menus-*.js`).
- `site/pb-mando.js`: mando con cursor para juegos de ratón (Pokelike, PokéPath TD, PokéPlunder) y la ventana Más juegos (con `window.PB_MANDO_SOLO`). Va lo primero del `<head>`: apunta qué elementos escuchan clics para que la cruceta salte entre ellos. Lo añaden también `tools/actualizar_pokelike.py` y `tools/preparar_pokepath.py`.

## Pokémon Survivors (Subversión 0.18)
- `site/pokemonsurvivors/`: Pokémon Survivors de pedrobarretto (código MIT, github.com/pedrobarretto/pokemon-survivors). En GitHub Actions se clona su último commit, se compila con Node 24 (`npx vite build --base /pokemonsurvivors/`, sin claves de sus servicios: modo invitado, sin cuentas, ranking ni cooperativo) y se prepara con `tools/preparar_pokemonsurvivors.py` (botón Volver, que vuelve a `/index.html` con `window.PB_VOLVER_URL`). Caché por commit y respaldo en la rama `respaldo-pokemon-survivors` (etiqueta `pokemonsurvivors-<commit>`). La copia del repo es la compilación del commit 30e56a906fa1.

## Pokémon Overlord (Subversión 0.17)
- `site/pokeoverlord/`: Pokémon Overlord de jab_lao, juego de Godot 4 (sin hilos) que en itch.io solo se juega en el navegador. Copiado con el flujo "Copia de un juego web", que ahora lee `GODOT_CONFIG` para bajar `index.pck` (64 MB) e `index.wasm` (38 MB), y reintenta si itch.io responde 429. En el APK, esos dos archivos se sirven a trozos (`serveBig`) y van sin comprimir. Se quitó el script de itch.io y se añadió el botón Volver (arriba a la izquierda).

## PokéIsaac: disparo automático (Subversión 0.16)
- `tools/parche_pokeisaac.py` (función `auto_siempre`) añade el ajuste `touchAutoAlways` ("Modo AUTO": AL MANTENER / SIEMPRE). En el cálculo del disparo táctil con "Disparar con: AUTO", si no se mantiene el botón y el ajuste está en SIEMPRE, se usa la dirección al enemigo vivo más cercano (la misma función que usa el juego para el AUTO al mantener). Si una versión nueva no encaja, solo se avisa: el resto del parche sigue.

## PokéPlunder (Subversión 0.15)
- `site/pokeplunder/`: PokéPlunder 1.1.6 de Khydra. En itch.io solo se juega en el navegador: el flujo "Copia de un juego web" (`.github/workflows/revisar-juego.yml`) busca en la página de itch.io el juego de `html-classic.itch.zone` y lo copia entero en la rama `respaldo-pokeplunder-web` (los 603 archivos de su `assets/assets.json` están). Se quitó el script de itch.io, se bajó la música a 96 kbps y se añadió el botón Volver (abajo a la izquierda).

## PokéPath TD (Subversión 0.14)
- `site/pokepath/`: PokéPath TD 1.7 de Khydra, sacado de su instalador de Windows (electron-builder: 7z dentro del instalador NSIS y `resources/app.asar`). Es un juego web sin servidor que guarda en `localStorage`. `tools/preparar_pokepath.py` copia la parte web, añade `pb-pokepath.js` (pantalla completa sin Electron) y el botón Volver, y baja la música a 96 kbps.
- Su instalador busca actualizaciones en Khydra/PokePath-TD-Electron, pero ese repositorio no es público: para actualizar, se saca `app.asar` del instalador nuevo y se pasa por `tools/preparar_pokepath.py`.

## Juegos sin cuenta (Subversión 0.13)
- PokéIsaac trae dentro una simulación completa de su servidor (Supabase), "mockauth", que guarda cuentas, Gacha, fichas, Tickets, misiones, huevos y tienda en `localStorage` (`pokeisaac.mock.db`). La versión publicada borra los parámetros de la dirección, así que `tools/parche_pokeisaac.py` deja pasar `mockauth`/`mockdelay`/`mockanon`, llama a `window.PB_ISAAC_LOCAL(cuenta, juego)` y carga `site/pokeisaac/pb-local.js`, que entra solo como invitado local y cierra la ventana de cuenta. El parche se aplica en cada compilación tras bajar PokéIsaac; si ya no encaja, se usa la copia del repo.
- Más juegos abre `pokeisaac/index.html?mockauth=1&mockdelay=0` (sin cuenta) y, aparte, "PokéIsaac online" sin parámetros.
- Revisados: PokéBonk (backend local PBLocal), PokéSurvivor (cuenta local en `save_data.gd`; solo consulta GitHub para avisar de versiones) y Pokelike 2.0 (cuenta solo para clasificatorias y nube).

## Pokelike y Más juegos (Subversión 0.12)
- La app trae **Pokelike 2.0** de pokelike.xyz (versión del juego 3.6.3). Su código viene ofuscado, pero la lista de textos está en claro: `tools/actualizar_pokelike.py web` baja la página, el `js/bundle.<hash>.js`, los estilos, la música y todos los archivos que el código nombra (unos 1,800, más los nombres sueltos probados en cada carpeta conocida). Quita la publicidad (Publift/Fuse, Google) y las estadísticas, pone las fuentes de Google en local y el botón Volver (abajo a la izquierda, `window.PB_VOLVER_BL`).
- En GitHub Actions se baja solo cuando cambia el nombre del bundle (caché `pokelike-v1-<bundle>`) y cada versión se respalda en la rama `respaldo-pokelike` (etiqueta `pokelike-<versión>-<hash>`; la 1.6 queda en `pokelike-1.6-72ca3c0e`).
- Lo que falte (imágenes que el juego arma por nombre): Android (`MainActivity.fetchPokelike`) y Windows (`pokelikeOnline` en `desktop/main.js`) lo piden a pokelike.xyz y lo guardan en el dispositivo.
- `site/pokelike/` del repo es la 1.6 (copia de pcasaspere/pokelike_v2, preparada con `actualizar_pokelike.py preparar`): se usa si la descarga falla.
- `site/pokeisaac-boton.js`: un solo botón "Más juegos" que abre una ventana con PokéIsaac, PokéSurvivor y Pokelike.

## PokéSurvivor (Subversión 0.12)
- Copia completa del código de JayElDragon/poke-survivor (Godot 4.7, juego 6.2) en `juegos/poke-survivor/`, como respaldo por si el original desaparece. Se añadió el preset de exportación "Web" (sin hilos).
- En GitHub Actions, el trabajo `survivor` descarga Godot 4.7.2, exporta el juego a `site/pokesurvivor/` y lo pasa a los trabajos del APK y de Windows. No se sube al repo (el .pck pesa unos 148 MB).
- Botón PokéSurvivor en la barra del menú (`site/pokeisaac-boton.js`, icono `site/pokesurvivor-icono.png`). Botón "Volver a PokéBonk" (dos toques), igual que en PokéIsaac.
- Android: `MainActivity.serveBig()` sirve los archivos grandes (.pck, .wasm) por streaming, sin cargarlos en memoria; `build.py` los guarda sin comprimir en el APK.
- PokéIsaac: quitado un `if(this === o.player) return;` añadido en `hurt()` del jugador (`site/pokeisaac/js/pokeisaac.js`) que lo hacía invencible.
- PokéIsaac al día: `tools/actualizar_pokeisaac.py` baja el núcleo de pokeisaac.com en cada compilación (trabajo `survivor`), conserva `volver-pokebonk.js` y la fuente local, genera `hosts.txt` (servidores que la app de Android deja salir) y se niega a usar una copia con la trampa de invencibilidad. Cada versión nueva se respalda en la rama `respaldo-pokeisaac` (etiqueta `pokeisaac-<versión>`). Basado en el script de prometheus-lumen/pokeisaac-ios (MIT).
- Créditos: juego original de JPTER78, port de JayElDragon. Código MIT, sprites CC BY-NC.

## Compañeros (Alfas de apoyo) con más libertad
- **Se alejan más:** van a por el enemigo más cercano (hasta 18 m de ti) en vez de pegarse a tu lado; solo vuelven de golpe si se quedan a más de 40 m (antes 28 m).
- **Sus ataques mejoran solos:** el área de su ataque especial crece un 10% por cada nivel de vínculo.
- **Fusión de ataques:** con vínculo 2 o más y dos tipos, tras su ataque especial lanzan el de su segundo tipo al 60% de daño (sale «Fusión» encima).
- **Evolucionan antes:** con vínculo 1 (25 bajas) y vínculo 3 (150 bajas); antes era con vínculo 2 y 4.
- **Mismo poder que en el original:** el daño base de los compañeros es el de siempre (se quitó el tope de la versión anterior).

Todo está en `site/assets/menus-1ZFEe0vd-mw3e1u3x.js` (clase de los compañeros).

## Windows y editor del HUD (Subversión 0.11)
- `desktop/`: versión de Windows con Electron. `main.js` sirve `site/` por el protocolo `app://` (para que los módulos funcionen), F11 pantalla completa, enlaces externos al navegador y guardado automático al cerrar la ventana. El trabajo `windows` de `.github/workflows/compilar.yml` copia `site/`, compila con electron-builder (instalador NSIS y .zip) y lo sube a la release de cada etiqueta. También se compila si el mensaje del commit lleva `[windows]`.
- `site/hud-editor.js`: cada elemento se puede girar (`rotate`) y ocultar (opacidad 0 y sin toques; medio visible en el editor).

## Textos que caben (Subversión 0.11)
- `site/ajuste-textos.js`: encoge la letra de los textos del menú principal del port (botón grande, modos, eventos, Encargos, barra lateral, compañero) hasta que caben. En horizontal, la barra lateral oculta «Inicio» y reparte el alto entre los botones.

## Guardado automático (Subversión 0.11)
- `site/autoguardado.js`: al ocultarse la app (`visibilitychange`/`pagehide`) en mitad de una partida, hace lo mismo que «Guardar y salir» (`run.$9sojcp()` y `run.ui.onSuspend()`). Si la app sigue abierta al volver, pulsa «Continuar» en el aviso de partida guardada. No actúa en Duelos, Cooperativo ni cuando el juego no deja guardar.

## Modo vertical (Subversión 0.10)
- `site/vertical.js`: fila «Orientación» en Ajustes > Gráficos (`localStorage` `pb-orient`), clase `pb-portrait` en `<html>` cuando la pantalla es más alta que ancha, estilos del menú principal (unidades de 412 x 880), HUD y pausa en vertical, y salto automático del aviso de girar.
- `MainActivity.java`: `AndroidMenu.setOrientation("landscape"|"portrait"|"auto")`, guardado en SharedPreferences y aplicado en `onCreate`.
- `site/hud-editor.js`: disposición separada para vertical (`pb-hud-layout-v`).

## Mega temporal y vitaminas (Subversión 0.9)
- Mega: dura 40 s (`MEGA_SECS`) y se recarga con bajas como el Dynamax (150 si la recarga empieza antes de los 5 min, 300 después). Al acabar vuelven el sprite, los tipos y las estadísticas. En `site/mega-dynamax.js`.
- Laboratorio: «Huecos de vitamina» con 4 niveles (de 3 a 7 huecos; costes 1200, 3000, 6000, 10000 antes del descuento del juego). En `defineProperty-…js`.

## PokéIsaac (Subversión 0.8)
- PokéIsaac 1.0.11 (de @SrBatai), sacado de su APK (`assets/webroot/pokeisaac.com`), en `site/pokeisaac/`. Fuente Press Start 2P local en `site/pokeisaac/fonts/`.
- Botón en el menú: `site/pokeisaac-boton.js`. Botón para volver: `site/pokeisaac/volver-pokebonk.js` (cargado desde su `index.html`).
- `MainActivity.java`: deja salir a internet solo los servidores de PokéIsaac (`bfwnvevcyrwwukokooty.supabase.co` y `*.up.railway.app`), que su APK original también usa para sprites, objetos, cuenta y cooperativo.
- Para actualizar PokéIsaac: reemplazar `site/pokeisaac/` con el `pokeisaac.com` de su APK nuevo y volver a aplicar los dos cambios de su `index.html` (fuente local y `volver-pokebonk.js`).

## Reliquias con imagen (Subversión 0.7)
- El APK solo traía `ui/relics/r-comet.png`. Las otras 31 imágenes (`site/assets/ui/relics/*.png`) se crearon a partir de iconos de objetos del juego (`assets/items/`), centrados en 32x32. Sin cambios de código.

## Guía de objetivos (Subversión 0.6)
- Flecha alrededor del jugador hacia el siguiente objetivo, por pasos: Poké Balls gratis, NPC de mejoras, desafíos/altares, guardián, portal. Dentro de cada paso, el más cercano.
- Tocar la etiqueta salta el objetivo; botón «Guía: Sí/No» en la pausa (`localStorage` `pb-guia`).
- Código: `site/guia.js`; `window.__pbRun` se fija al empezar la partida (parche en `main-Cx4tF-…js`).

## Editor del HUD (Subversión 0.5)
- Botón «Editar HUD» en la pausa: arrastrar y cambiar tamaño (50-200%) de los elementos del HUD y los controles táctiles. Se guarda en `localStorage` (`pb-hud-layout`) en % de pantalla y se aplica con las propiedades CSS `translate` y `scale`.
- La zona táctil del joystick fijo sigue al joystick si se mueve (parche en `main-Cx4tF-…js`).
- Código: `site/hud-editor.js`.

## Megas y Dynamax (Subversión 0.4)
- 10 megas con sprites del PMD Sprite Repository convertidos al formato del juego (`site/assets/pmd/150NN.png`, `pmd-shiny/150NN.png`, entradas `150NN` en `site/data/sprites.json`; NN = número de la Pokédex). Créditos en `CREDITOS-SPRITES.md`.
- Se desbloquean con la investigación de la familia al 100%. En partida: botón MEGA a las 150 bajas (permanente en esa partida). Tipos como en los juegos: solo Mega Charizard X cambia (Fuego/Dragón).
- Dynamax: botón DMAX recargable con bajas (100 si la recarga empieza en los primeros 5 min, 300 después; cuentan desde que acaba el anterior), 20 s (escala x1,9, tinte rojo, +50% daño/PS, +30% área).
- Código: `site/mega-dynamax.js`; parches en `main-Cx4tF-…js` (arranque de partida, `recompute()` y `render()` del jugador).

## Laboratorio individual (Subversión 0.3)
- Cada mejora del Laboratorio se compra para un Pokémon concreto y solo le afecta a él (en sus partidas). Se guarda en `profile.lab.by[especie]`.
- Excepción: el **Archivo** sigue siendo de toda la cuenta.
- Selector «Mejoras de:» y botón «Devolver mejoras» en el Laboratorio: devuelve todo el Polvo gastado en ese Pokémon.
- Lo comprado antes (global) se devolvió una vez como Polvo Estelar.
- Mejoras nuevas: Contundencia (+5% daño crítico, 5 niv.), Alteración (+6% estados, 5 niv.), Persistencia (+4% duración, 5 niv.), Absorción (+0,5% robo de vida, 4 niv.).
- Código: `site/lab-individual.js` y parches en `defineProperty-…js` (lista de mejoras y lectura del lab), `menus-…js` (compra, `lab()`, `labStats()`, pantalla del Laboratorio) y `main-Cx4tF-…js` (especie de la partida).

## Pokédólares guardados (Subversión 0.2)
- Lo que sobra de oro al terminar una partida se guarda y se suma al empezar la siguiente (sale un aviso con la cantidad).
- Si la app se cierra a mitad de partida, el oro guardado que llevabas vuelve a la reserva.
- No se aplica en Duelos ni en Cooperativo.
- Código: `site/oro-guardado.js` y dos ganchos en `site/assets/main-Cx4tF-jA-mw3e1u3x.js` (inicio de partida y `finish`).

## Versión oficial y subversión propia
La versión oficial del juego **no se toca**: `site/version.json` y la lista oficial de «Novedades» siguen diciendo 0.9.9.
Nuestros cambios van como **subversión** encima de la oficial (ahora: **0.9.9 oficial - Subversión 0.12**) y se ven en dos sitios:
- **Noticias** (icono del periódico): una noticia «Versión 0.9.9 oficial - Subversión 0.x» con el detalle, firmada como «Actualización hecha por moportor6 (no oficial)».
- **Novedades** (botón de la versión junto al logo): un bloque propio arriba con la etiqueta «No oficial»; las notas oficiales siguen debajo, sin cambios.

Todo el texto está en `site/subversion.js`. Para una nueva subversión (p. ej. 0.2) añade una entrada al principio de `items` y de `changelog` y cambia `SUB`.
Si llega una versión oficial nueva, cambia `OFICIAL` y vuelve a empezar en Subversión 0.1.

Archivos tocados para esto: `site/index.html` (carga `subversion.js`), `site/assets/main-Cx4tF-jA-mw3e1u3x.js` (las noticias del modo sin conexión incluyen las propias) y `site/assets/menus-1ZFEe0vd-mw3e1u3x.js` (bloque en «Novedades» y firma de la noticia).
