# Cambios respecto al port original

## Compañeros (Alfas de apoyo) con más libertad
- **Se alejan más:** van a por el enemigo más cercano (hasta 18 m de ti) en vez de pegarse a tu lado; solo vuelven de golpe si se quedan a más de 40 m (antes 28 m).
- **Sus ataques mejoran solos:** el área de su ataque especial crece un 10% por cada nivel de vínculo.
- **Fusión de ataques:** con vínculo 2 o más y dos tipos, tras su ataque especial lanzan el de su segundo tipo al 60% de daño (sale «Fusión» encima).
- **Evolucionan antes:** con vínculo 1 (25 bajas) y vínculo 3 (150 bajas); antes era con vínculo 2 y 4.
- **Mismo poder que en el original:** el daño base de los compañeros es el de siempre (se quitó el tope de la versión anterior).

Todo está en `site/assets/menus-1ZFEe0vd-mw3e1u3x.js` (clase de los compañeros).

## Megas y Dynamax (Subversión 0.4)
- 10 megas con sprites del PMD Sprite Repository convertidos al formato del juego (`site/assets/pmd/150NN.png`, `pmd-shiny/150NN.png`, entradas `150NN` en `site/data/sprites.json`; NN = número de la Pokédex). Créditos en `CREDITOS-SPRITES.md`.
- Se desbloquean con la investigación de la familia al 100%. En partida: botón MEGA a las 150 bajas (permanente en esa partida). Tipos como en los juegos: solo Mega Charizard X cambia (Fuego/Dragón).
- Dynamax: botón DMAX a las 100 bajas, una vez por partida, 20 s (escala x1,9, tinte rojo, +50% daño/PS, +30% área).
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
Nuestros cambios van como **subversión** encima de la oficial (ahora: **0.9.9 oficial - Subversión 0.4**) y se ven en dos sitios:
- **Noticias** (icono del periódico): una noticia «Versión 0.9.9 oficial - Subversión 0.x» con el detalle, firmada como «Actualización hecha por moportor6 (no oficial)».
- **Novedades** (botón de la versión junto al logo): un bloque propio arriba con la etiqueta «No oficial»; las notas oficiales siguen debajo, sin cambios.

Todo el texto está en `site/subversion.js`. Para una nueva subversión (p. ej. 0.2) añade una entrada al principio de `items` y de `changelog` y cambia `SUB`.
Si llega una versión oficial nueva, cambia `OFICIAL` y vuelve a empezar en Subversión 0.1.

Archivos tocados para esto: `site/index.html` (carga `subversion.js`), `site/assets/main-Cx4tF-jA-mw3e1u3x.js` (las noticias del modo sin conexión incluyen las propias) y `site/assets/menus-1ZFEe0vd-mw3e1u3x.js` (bloque en «Novedades» y firma de la noticia).
