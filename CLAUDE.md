# PokéBonk Remaster (fork de moportor6; público desde el 17-11-2026, con permiso de los autores)

Responde siempre en español.

## Reglas de protección (prioridad sobre cualquier optimización, también sobre Ponytail)

- Nunca elimines funcionalidades, mecánicas, sprites, animaciones, sonidos, mapas ni contenido existente para ahorrar tokens o código. «Borrar antes que añadir» solo vale para código nuevo que tú mismo ibas a escribir.
- No simplifiques un sistema si cambia su comportamiento.
- Mantén la compatibilidad con Windows y Android (APK) y los controles táctiles.
- No toques módulos ajenos a la tarea.
- Antes de un cambio grande, deja un punto de restauración (commit). Después, prueba que no haya regresiones (Playwright sobre `site/`, como en las subversiones anteriores).
- Todo lo nuevo que aparezca en pantalla durante la partida (botones, barras, contadores) debe añadirse a `ITEMS` de `hud-editor.js` para poder moverlo y redimensionarlo.
- Solo entran megas o formas con todas sus animaciones; si no las tienen, se omiten (no se dibujan ni se usa el sprite normal).

## Ahorro de tokens

- Si Ponytail está instalado como plugin, sigue sus reglas (nivel `full`). Sin plugin, aplica lo mismo: la solución más corta que resuelve todo, reutilizar lo que ya existe y no añadir nada que nadie pidió.
- Lee fragmentos con `grep`/`sed -n`, no archivos enteros. Los bundles de `site/assets/*.js` son enormes y minificados: busca con `grep -o '.\{80\}texto.\{80\}'`.
- No vuelvas a leer lo que no cambió; usa este mapa.

## Mapa del proyecto

- La versión oficial es **0.9.9** y no se cambia. Cada cambio es una «Subversión 0.x»:
  - en `site/subversion.js`: sube `SUB`, añade una noticia al principio de `items` (y quita `pinned` a la anterior si la nueva va fijada) y una entrada al principio de `changelog`;
  - en `CAMBIOS.md`: añade una sección arriba.
  - Autor: «Actualización hecha por moportor6 (no oficial)».
- Releases: el usuario crea los tags `vN`; comprueba a qué commit apunta y que la acción «Compilar y publicar APK» termine bien.
- Ganchos: los bundles minificados de `site/assets` (`defineProperty-…` datos, `main-…` partida y servidor local, `menus-…` menús, enemigos y jefes) llaman a objetos globales de scripts clásicos cargados en `site/index.html` antes del módulo:
  - `regiones.js` motor de regiones; `hoenn.js`, `sinnoh.js`, `teselia.js`, `kalos.js`, `alola.js`, `galar.js`, `paldea.js` datos de cada región; `retos.js` Torre Mega y Dominio Gigamax;
  - `mega-dynamax.js`, `megas-extra.js` (PMD), `megas-reloaded.js` (Reloaded), `megas-tienda.js`, `dex-megas.js`;
  - `formas.js`, `bebes.js`, `fiebres.js`, `leyendas.js` (kits de Kyogre y Rayquaza), `regionales.js` + `regionales-hechas.js` (formas regionales);
- Datos del juego: `site/data/pokemon.json` y `learnsets.json` traen los 1025 Pokémon; el límite visible es `maxDex`.
- Sprites: hojas PMD en `site/assets/pmd/<sid>.png` y `pmd-shiny/`, metadatos en `site/data/sprites.json`.
  - `tools/megas_hoenn.py` (acción «Megas», PMDCollab) y `tools/regionales.py` (acción «Regionales», PMDCollab; sids 10000-13999). Los ids >= 20000 son variocolor;
  - `tools/megas_reloaded.py` y `tools/especies_reloaded.py` (Pokémon Reloaded, uso privado con permiso; numeración en `tools/reloaded_numeros.json`).
- `liga-scroll.js`: desplazamiento natural de la lista de la Liga.
- `lan.js` + `android/.../LanRed.java` (puente `PBLanNative`): cooperativo en la misma Wi-Fi; `legibilidad.js`: contraste y choques visuales. `curanderos.js`: curanderos en todos los mapas y Alfas curanderos. `zona.js`: zonas de 15 minutos. `clima.js`: el clima avisa y afecta a los salvajes. `gimnasios.js`: gimnasios y medallas; `rival.js`: el rival Azul.
- `edicion.js`: edición «completa» o «lite» (PokéBonk Lite = paquete `.lite` / programa «PokeBonk Lite», trabajos `lite` y `windows-lite`; sin los otros juegos). `dificultad.js`: «Dificultad Remaster» de la Lite (también defensa real y precios). `debilitar.js`: Chirrido y compañía (Lite). `apoyo.js`: bailes y protecciones sin hueco (Lite). `naturalezas.js`: naturalezas (Lite). `equilibrio.js`: tope de nivel, élites con rasgos, furia, duración mínima de minijefes, aguante (45 % por golpe) y aviso de quién te derrotó (Lite). `compatibilidad.js`: movimientos de tipos compatibles (Lite). `fases.js`: segunda fase Mega/Dynamax de jefes finales (Lite). `historia.js`: modo historia de la Lite (retratos en `assets/historia/`, acción «Historia»). `tera.js` Teracristalización (coronas en `data/tera-coronas.json`), `hoopa.js` Anillos de Hoopa, `ultra.js` Ultrafendas, `incubadora.js` huevos, `radio.js` música (Lite, ideas de Pokémon Survivors). `evo-retos.js`: contador de retos de evolución (Lite). `tanques.js`: Tanque/Muralla y Vida Esfera con retroceso (Lite). `telemetria.js`: informe copiable de la muerte (Lite). `lab-dificil.js`: +3 niveles de Laboratorio solo para Difícil (Lite). `auto-recoger.js`: rocas de oro, imanes, bayas y Poké Balls gratis automáticos, y elección sola con una carta (Lite). `lab-extra.js`: Sintonía Unown, Imán de grietas, Suerte de huevos, Ojo de cazador (Lite). `diario.js`: Desafío diario (Lite). `automatiza.js`: Mega/Dynamax/Tera e Incienso automáticos, evoluciones de reto, baya de emergencia, Laboratorio automático, avisos del menú y modo rendimiento (Lite). `bolsa.js`: Bolsa de bayas (Lite; iconos con la acción «Bayas», `tools/bayas.txt`).
- `extras.js`: esquiva automática, avisos de rarezas, cartas favoritas, movimientos Z, logros, récords por Pokémon y Tienda de Polvo (Lite). `guarderia.js`: Guardería con herencia (Lite). `torre.js`: Torre de Líderes (Lite).
- `utiles.js`: Sala de entrenamiento, evento de Navidad, Bestiario, vibración y zona muerta del joystick (Lite).
- `premios.js`: logros por Pokémon, recompensas por recoger al terminar la partida y premios/récords del Sin fin (Lite).
- `liga.js`: Liga Pokémon (Alto Mando y Campeón) con el motor de `torre.js` (Lite). `registro.js`: dónde aparece, historial, títulos y colores de eficacia (Lite).
- `esfera.js`: Esfera elemental del Laboratorio (Lite).
- `resumen.js`: pestaña «Resumen» de la pausa con movimientos y vitaminas, y pausa compacta en pantallas bajas (Lite).
- `paleta.js`: mapa de pruebas «Pueblo Paleta» de bloques (Lite; texturas CC0 de Kenney en `assets/voxel/`).
- `pruebas.js`: botón TEMPORAL para desbloquear toda la Liga (pedido para pruebas; se quitará cuando el usuario lo diga).
- Secretos: el keystore y su contraseña solo viven en los secrets de GitHub; nunca en el repo.
- Créditos que se conservan: Charcher, JayElDragon, @SrBatai, autores de PMDCollab, JPTER78/JayElDragon (PokéSurvivor, con su aviso PolyForm Noncommercial), pokelike.xyz, PokeAPI/sprites (medallas), Pokémon Showdown (retratos de la historia), Khydra, jab_lao, pedrobarretto, Pokémon Reloaded y Kenney (Voxel Pack, CC0). Nada comercial.
