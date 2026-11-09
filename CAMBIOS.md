# Cambios respecto al port original

## Pokelike y Más juegos (Subversión 0.12)
- `site/pokelike/`: Pokelike 1.6 (de la copia pcasaspere/pokelike_v2 de pokelike.xyz), preparado con `tools/actualizar_pokelike.py preparar`: sin anuncios ni Google Analytics, fuente local, botón Volver arriba a la izquierda (`window.PB_VOLVER_TOP`) y los sprites de PokeAPI (649 Pokémon, normales y shiny) dentro de la app (`data/pokedex.json` apunta a `sprites/pokemon/`).
- pokelike.xyz ya va por la 2.0: un solo `js/bundle.<hash>.js` ofuscado, con sprites en `img/sprites/`. No se puede preparar automáticamente, así que la app usa la 1.6 del repo. En cada compilación, `actualizar_pokelike.py crudo` guarda una copia tal cual de la web en la rama `respaldo-pokelike-web` (sin todos los sprites, que el código ofuscado pide por nombre). La rama `respaldo-pokelike` tiene la 1.6 preparada.
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
