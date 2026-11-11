# Cambios respecto al port original

## PokéBonk TD: sonidos nuevos (Subversión 0.40)
- `td/sonidos/*.ogg`: efectos de PokéSurvivor (`juegos/poke-survivor/audio/sfx_*`, MIT). `td/pmd.json` lleva también el primer tipo (`t`) de 755 de los 779 Pokémon de PokéPath (de `data/pokemon.json`, también formas mega/regionales por nombre base).
- Interfaz y efectos del juego: se cambia el `src` de sus `Audio` (`soundUi`, `soundEffect`) por el equivalente de PokéSurvivor; los disparos genéricos (`projectileN`, `areaN`, `beamN`, `sword`, `ice`…) se silencian (`muted`) en la vista nueva y suenan desde `td.js`: `shot_<tipo>` al detectar el disparo, `hit` en golpes físicos o especiales (no en quemadura, veneno…), `faint` / `bossDown` al caer y `boss` al llegar el jefe. Tres reproductores por sonido, como mucho uno cada 70–90 ms; volumen de `config.audio` (master × efectos), respeta `mute[0]` (silenciar proyectiles).
- La vista clásica recupera los `src` y quita el silencio. Prueba de valores repetida: iguales.

## PokéBonk TD: música y jefes (Subversión 0.39)
- Música: `td/musica/*.ogg` son las pistas de PokéSurvivor (`juegos/poke-survivor/audio/mus_*`, MIT, JPTER78; `LEEME.txt`). `arranque.js` deja `soundMusic` y `routeData` en `window.__tdMusica`; cada canción de PokéPath se asigna a una pista según el mundo de la primera ruta que la usa (secretas: judgment; Halloween: halloween) y se cambia el `src` del propio `Audio` del juego (volumen, fundidos y pausa siguen siendo suyos). Con un enemigo `enemy.isBoss` vivo, la pista actual pasa a `boss.ogg`. La vista clásica recupera los `src` originales.
- Jefe: al aparecer un jefe con zoom 1, la cámara se acerca a ×1.8 y lo sigue con `requestAnimationFrame` hasta que cae; cualquier zoom manual (rueda, botones, dos dedos, arrastre) lo cancela. `navigator.vibrate` al perder vida (60 ms) y al llegar el jefe. Opciones en `localStorage` `pb-td-opciones` (con el prefijo de `pb-guardado.js`), botones en la barra de Ajustes. Android: permiso `VIBRATE` (cambia el hash de la app, así que el actualizador baja el APK).
- Botones de las ventanas del juego: mismos colores de fondo, sin borde negro, redondeados, sombra abajo y letra redondeada (td.css). «Reroll» (sin traducción en `text.js`) y «Route View» se traducen en `td.js`.
- Pasaporte (`remaster.js`): el juego se llama PokéBonk TD en las insignias (mismos ids); nuevas `pprt` (oleada 100 en una ruta, desde `player.records`), `pp5r` (en 5 rutas) y `pp500` (500 estrellas).
- Traspaso probado con una partida del TD: exportar, borrar, importar devuelve `pokepath:data` y `pokepath:pb-td-opciones` iguales.

## PokéBonk TD: combate con animaciones (Subversión 0.38)
- `td/pmd.json` (generado de `data/sprites.json` y `data/pokemon.json`): para los 651 Pokémon de PokéPath que tienen hoja en `assets/pmd`, la posición, tamaño y duración de sus animaciones de ataque, golpe y caída. Los sprites de PokéPath son las mismas hojas PMD (mismas 8 direcciones), así que la fila de dirección se reaprovecha.
- `arranque.js` deja `Tower` y `Enemy` en `window.__tdClases`. `td.js` envuelve `Tower.draw` (detecta el disparo cuando `attackCooldown` se recarga), `Enemy.draw` (caída cuando `dying`; destello del golpe) y `Enemy.getDamaged` (marca el golpe y si fue crítico, solo si bajó la vida), y en `drawImage` cambia el sprite por el fotograma de la hoja de PokéBonk mientras dura la animación. `Enemy.drawFloatingTexts` dibuja los números más grandes.
- Toque corto sobre un Pokémon del mapa: abre `UI.pokemon[i].info` (si no estás colocando uno, sin Bombardeo pendiente ni Patines y sin haber arrastrado). Arrastrar sigue moviéndolo.
- Prueba de valores repetida: iguales.

## PokéBonk TD: ventanas nuevas (Subversión 0.37)
- `colocar()` tiene tres modos: mapa (con zoom), sección abierta (Caja, Mochila, Tienda, Mapa, Pokédex, Perfil, Desafío, Ajustes) y ventana pequeña (`GameScene`: avisos, datos del Pokémon, tutorial…). Un `MutationObserver` sobre `#screen` recoloca al abrir o cerrar.
- Secciones: barra propia con el nombre y Cerrar (`sections.find(isOpen).close()`). En vertical (`tdr-rep`) el contenedor de la sección pasa a medir 440 de ancho lógico y el alto que quede (`--tdr-lw`, `--tdr-lh`), escalado al ancho del móvil; en horizontal (`tdr-reph`) se escala al alto con un alto lógico de unos 470 y hasta 1000 de ancho. Ajustes por ventana en `td.css` (Tienda en dos columnas, Mapa escalado y rutas de dos en dos, Perfil apilado, Mochila más alta).
- Ventanas pequeñas: centradas y escaladas para caber (hasta ×1.6), fondo oscuro a toda la pantalla; en vertical sube la letra pequeña de la ventana de datos del Pokémon.
- Colores: variables del tema del juego sobrescritas con `html.tdr-on[data-theme]`. Letra: `data-font="Lexend"` (para usar los ajustes de tamaño del juego) con Nunito; la vista clásica vuelve a llamar a `menuScene.applyFont()`.
- Textos: «WAVE $X | $Y/min» se enseña en español; los textos cortos que coinciden con la versión inglesa de `text.js` se cambian por la del idioma elegido (títulos que el juego pone al arrancar, antes de elegir idioma en una partida nueva).
- Prueba de valores repetida con la vista clásica de verdad activada (`.tdr-classic`): mismos resultados.

## PokéBonk TD: todas las rutas (Subversión 0.36)
- Recorrido automático de las 47 rutas de `routeData` (oleada 1 y oleada 100) con `area.loadArea`: cargan sin errores, se coloca un Pokémon tocando una casilla y empieza la oleada; en la vista clásica la misma secuencia da lo mismo. Mapas grandes (6-1 `xl`, 7-2 `xlv`, 10-4 `xlh`): el arrastre con un dedo del propio juego sigue funcionando con la pantalla escalada.
- Con zoom en mapas normales, un dedo sobre una zona sin Pokémon (y sin estar colocando uno) mueve el mapa; si hay un Pokémon, el toque es del juego (moverlo de casilla).
- `.tdr-wave.placing`: el juego desactiva "Siguiente oleada" mientras colocas; el botón lo dice y explica cómo cancelar.

## PokéBonk TD: mapa más claro (Subversión 0.35)
- `td.js` envuelve `drawImage` del contexto del mapa del juego: las imágenes de `/images/pokemon/` dibujadas con recorte (torres y enemigos) se agrandan ×1.65 desde su centro, solo en la vista nueva. No toca posiciones, casillas ni alcance.
- Zoom: el `transform` de `#screen-root` lleva el zoom y el centro; `#view-port` se recorta (`clip-path`) al hueco del mapa. Dos dedos (se capturan antes que el juego), rueda y botones + / − / Ver todo. Con una ventana del juego abierta, zoom 1 mientras está abierta. El juego sigue leyendo la posición real del mapa, así que tocar casillas con zoom funciona igual (prueba: con zoom ×1.96 la torre queda en la misma casilla que en la vista clásica).
- Próxima oleada: nombre, PS, armadura, velocidad, daño, oro y pasiva leídos del panel de información del juego. Huecos bloqueados en una tira; hasta 6 huecos, tarjetas anchas en 3 columnas.

## PokéBonk TD en pruebas (Subversión 0.34)
- `site/pokepath/remaster.html`: el mismo PokéPath TD (mismos CSS y módulos de `src/`, mismo guardado `pokepath:data` con `pb-guardado.js`) arrancado por `td/arranque.js`, que solo envuelve `Main.prototype.load` para dejar el objeto principal en `window.__pp`.
- `td/td.js` coloca la pantalla del juego (1238x674) con `translate` y `scale` para que la zona del mapa (259,25 720x624) quede donde toca y esconde (visibility) los paneles de escritorio. La interfaz nueva copia el estado (`player`, `area`, `team`, y lo que enseñan los botones originales) cada 150 ms y cada botón pulsa el botón original (`UI.pokemon[i].deploy/levelUp/item/info`, `nextWave`, `pauseWave`, `speedWave`, `autoWave`, `section[...]`), así que las reglas son las del juego. Las ventanas del juego (secciones de 720x624 y `GameScene`) caen centradas en el mapa. `textContent` en vez de `innerText` porque los paneles están ocultos.
- Prueba: la misma secuencia (subir de nivel dos veces, colocar en una casilla, Auto, velocidad, siguiente oleada) con los botones originales y con los nuevos da el mismo estado (oro, nivel, torres, auto, velocidad, oleada); con un botón mal enlazado la prueba falla.
- Partida nueva: el perfil empieza en español. Entrada "PokéBonk TD (en pruebas)" en Más juegos; PokéPath TD sigue igual.

## Vertical rediseñado (Subversión 0.33)
- Partida: `.hud-top` pasa a ser una barra de lado a lado (deja libre la pausa) con cuadrícula de 3 columnas y 2 filas; `.ht-c` y `.wallet` con `display:contents` para repartir zona y reloj (izquierda), cuenta atrás (centro, ocupa las dos filas) y dinero y precios (derecha). `.hud-tl` y `.hud-tr` debajo, con `zoom` (top/right divididos entre el zoom) para no pisar el `scale`/`translate` del Editor del HUD; contador de capturas a la izquierda del minimapa. `.bossbar` y `.minibars` dejan de usar el centro y ancho que calcula el juego (`--hc`, `--hw`, pensados para la barra en horizontal) y van a lo ancho debajo. Pausa, apuntado y MEGA/DMAX en la columna derecha.
- Menú: `.jay-actions` con filas automáticas; los eventos (había una regla `:has(.event + .event)` de 0.9.9 que los ponía a media anchura) y Encargos a todo el ancho. `.jay-sidebar` anclada abajo y `.jay-companion` ocupa el hueco que queda, así no se monta sobre el pie con pantallas de proporción 412x880 o más bajas.

## Modo vertical (Subversión 0.32)
- Todo en `site/vertical.js`, con selectores bajo `html.pb-portrait` (la clase que pone el propio archivo cuando la pantalla es más alta que ancha), así que en horizontal no cambia nada.
- Subir de nivel: `.modal .cards` en columna y cada `.card.offer` en fila (`.top` de 92 px a la izquierda con rareza arriba y tipo abajo, `.bd` a la derecha).
- La Liga: `.ls-hero` y `.ls-top` con `display:contents` para que sus partes sean celdas de la cuadrícula de `.ls-main` (sprite e identidad arriba, `.ls-roster` con altura máxima y su propio scroll, después `.ls-top-stats` y `.ls-body`). `.ls-cta` fijo abajo; en pantallas de menos de 400 px los botones Movimientos y Plan quedan solo con el icono.
- Elige mapa: `.rg-main` en columna, `.rg-headrow` en columna, `.rg-route` en cuadrícula y `.rg-go` fijo abajo (sin la animación de `.rg-side`, que lo descolocaba).
- Pausa (`.pz-tabs`), Ajustes (`.st-tabs` en dos filas), Encargos (`.tk-title` puede ocupar dos líneas) y Mutación del día (`.mu-poster`).
- También en horizontal: el chip de tipo de las cartas (`.card.offer .row .chip`) ya no se parte en dos líneas.

## Auto aprender (Subversión 0.31)
- PokéBonk: `site/autohab.js` puntúa las ofertas de subida de nivel según la especialidad (Ataque contra At. Esp. base de `data/pokemon.json`, o la clase de los movimientos que lleva): movimientos de esa clase y de su tipo, favoritos, repartir niveles, vitaminas por estadística (Proteína/Calcio según la clase) y nunca el Incienso Maldito. Parches: en `main-*.js`, `doLevelUp` pregunta a `PB_AUTOHAB.pick` y aplica la elegida como cuando solo hay una opción; en `menus-*.js`, `window.__pbOfferInfo` dice la clase y el tipo de cada movimiento y la estadística de cada vitamina. Botón en la pausa (localStorage `pb-autohab`), junto a "HUD y guía" en la franja de arriba.
- PokéSurvivor (`juegos/poke-survivor`): `_auto_pick` en `main.gd` (evoluciones, lo que desbloquea una, movimientos de su tipo, estadísticas según Ataque, vida y velocidad del Pokémon; cura solo con poca vida) y botón en Pausa > Opciones (`settings.autohab`).
- Pokémon Survivors: `tools/parche_pokemonsurvivors.py` añade `pbAutohab.ts` a su código antes de compilarlo y lo llama en la fase `levelup` (solo en partida individual); `pb-autohab-ps.js` pone el botón en su pausa con el mismo ajuste `pb-autohab`.

## Actualizador: archivos grandes y PokéSurvivor estable (Subversión 0.29)
- GitHub no admite archivos de más de 100 MB en un repositorio: la publicación de la v56/v57 falló por `pokesurvivor/index.pck` (141 MB). `tools/publicar_contenido.sh` (usado por el trabajo `contenido` y por el flujo manual "Publicar contenido") parte los de más de 95 MiB en trozos de 90 MiB (`archivo.pbparte.00`, `.01`...) y los dos actualizadores los juntan y comprueban el SHA-256 del archivo entero.
- La exportación web de Godot de PokéSurvivor cambiaba de bytes en cada compilación: ahora se guarda en caché por el hash de `juegos/poke-survivor/**`, así su módulo solo cambia cuando cambia el juego.

## Actualizador (Subversión 0.28)
- Mecanismo: el juego es la web de `site/` que la app sirve desde sus archivos (Android: assets del APK; Windows: carpeta del programa, protocolo `app://`). La actualización es una capa encima: los archivos que cambian se bajan a `files/contenido/vN-*/` (Android) o `%APPDATA%\PokeBonk\contenido\vN-*\` (Windows) y el servidor de la app los sirve antes que los suyos (o 404 si la versión nueva los quita). No cambia nada del juego.
- `tools/contenido.py base`: `site/contenido.json` (versión, subversión, huella del código nativo de cada plataforma y módulos con su hash) y `site/contenido/<módulo>.json` (tamaño y SHA-256 de cada archivo). Va dentro de la app. Módulos: `pokebonk` y una por cada juego de Más juegos.
- Trabajo `contenido` (solo con etiqueta vN): publica el juego tal cual va en la app en la rama `contenido` con la etiqueta `contenido-vN`, y `contenido.json` con el historial, la dirección de los archivos y el APK/instalador completos con su SHA-256. Se firma con la clave del APK (SHA256withRSA): Android lo comprueba con el certificado de la propia app, Windows con `desktop/clave.pem` (sacado del keystore al compilar).
- `android/.../Actualizador.java` y `desktop/actualizador.js` (misma lógica): buscar (manifiesto firmado; listas de los módulos con hash distinto), aplicar (carpeta nueva `.tmp` con lo que sigue valiendo + lo bajado, comprobado por SHA-256, 6 descargas a la vez; se renombra al final y `estado.json` se cambia de golpe), confirmar (el juego avisa al arrancar; tras 2 arranques sin confirmar se vuelve a lo anterior), restaurar y completo. Si la huella nativa cambia: Android baja el APK directamente a una sesión de `PackageInstaller` (SHA-256 comprobado antes de `commit`, permiso `REQUEST_INSTALL_PACKAGES`); Windows baja el instalador, lo comprueba y lo abre.
- Si la app instalada es otra (versión o huella distinta de la del estado), lo descargado se borra: lo nuevo ya viene dentro.
- `site/actualizaciones.js`: historial, módulos con tamaño, progreso y reinicio; pestaña Remaster > Actualizaciones. El aviso viejo (`updater.js`, solo enlazaba a GitHub) ya no se llama.
- `.gitattributes` con `eol=lf` y `core.autocrlf false` en Windows: los archivos tienen que ser los mismos bytes en las dos compilaciones. `config.json`: `appName` "PokéBonk Remaster" (build.py lo pone como nombre de la app).

## Traspaso, actualizaciones, Desafío, Overlord y gráficos (Subversión 0.27)
- `site/traspaso.js`: exporta `localStorage` (sin las claves propias del equipo: HUD, resolución, orientación...) y todas las bases IndexedDB (esquema, índices y registros; fechas y arrays con tipo en base64) a un JSON comprimido con gzip (`.pokebonk`). Al importar, borra y vuelve a crear las bases, sustituye `localStorage`, deja los `settings` del perfil de este equipo y bloquea las escrituras hasta recargar. Android: `AndroidMenu.saveFile` (MediaStore, Descargas/PokeBonk) y `AndroidMenu.pickFile` (ACTION_OPEN_DOCUMENT).
- Actualizaciones: `MainActivity.UPDATE_REPO` apunta a `moportor6-art/moportor6-art-PokeBonk` (el número del APK es el del tag). Windows: `checkUpdate()` en `desktop/main.js` compara el tag con `0.9.N` y llama a `window.pbUpdateFound`; `pokebonkDesktop.openUpdate` abre el instalador. `updater.js` acepta los dos y un texto propio.
- Desafío del Alfa: rachas (`st.rachas`, metas 3/5/10 semanas) y tabla de récords.
- Pasaporte: lee `user://pokemon_overlord.save` de Pokémon Overlord (IndexedDB `/userfs`, `PokemonOverlord/`) con un lector del formato de `store_var` de Godot 4 (probado con un archivo de Godot 4.5.1); usa `decks_cleared` y `mewtwo_cleared`.
- Gráficos: `tools/completar_graficos.py` (flujo "Completar gráficos") crea los `pmd-shiny` que faltaban cambiando la paleta del atlas normal con los colores de la hoja variocolor de SpriteCollab (`sprite/NNNN/0000/0001/`), y baja los retratos que faltaban (`portrait/NNNN/Normal.png` y `0000/0001/`). Android y Windows sirven el sprite normal, el retrato normal o el icono si aún falta alguno.

## Windows: Electron 44 (Subversión 0.26)
- El segundo volcado, leído entero, mostraba la caída en `StyleResolver::CreateCompositorKeyframeValueSnapshot` (al empezar una animación de `element.animate()` con `transform` y `calc()`), `StyleResolverState::UpdateLengthConversionData` y `CSSPrimitiveValue::ConvertToLength`: un fallo de Chromium 130. Se pasa a Electron ^44.7.0 (y electron-builder ^26). `console-message` acepta la firma nueva (objeto con `level`, `message`, `lineNumber`, `sourceUrl`).

## Windows: cierre al llegar al menú (Subversión 0.25)
- El volcado (Electron 33.4.11, símbolos de breakpad) daba un acceso a memoria nula en `blink::CSSMathExpressionOperation::CreateArithmeticOperationSimplified`, llamado desde `CSSPrimitiveValue::ConvertToLength` por una llamada de JavaScript. La única lectura así era `getComputedStyle(stage, '::before')` en `site/companion.js`: la plataforma usa `calc(n * var(--u))` con `--u: min(calc(100vw / 853), calc(100vh / 480))`. Ahora `--u` se mide con un elemento oculto (`height: calc(1000 * var(--u))`) y el suelo es `alto - 2u - 13,5u`, el mismo valor que antes.

## Windows: volcados de fallos (Subversión 0.24)
- El modo seguro de la 0.23 no sirvió (con `disable-gpu` también se caía, justo al llegar al menú), así que se quitó y `pantalla.json` vuelve a `seguro: 0`. `crashReporter.start({ uploadToServer: false })` hace que Windows deje volcados en la carpeta Crashpad; al caerse la página, el más reciente se copia a `%APPDATA%\PokeBonk\ultimo-fallo.dmp` y se anota en `registro.txt`. Como mucho dos recargas.

## Windows: modo seguro automático (Subversión 0.23)
- En el PC del usuario el proceso de la página se caía al arrancar (`render-process-gone`: `crashed`, código -36861, que solo dice que no había gestor de volcados). `desktop/main.js` guarda `seguro` en `pantalla.json`: si la página se cae en los primeros 90 s, sube el nivel y reinicia con `--pb-reintento` (el registro se sigue escribiendo). Nivel 1: `no-sandbox`, `sandbox: false` y `disable-features=RendererCodeIntegrity`. Nivel 2: además `use-angle=gl`. Nivel 3: además `disable-gpu`.

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
