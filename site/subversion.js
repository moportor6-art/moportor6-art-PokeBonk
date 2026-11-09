/* Subversión propia (fork de moportor6) sobre la versión oficial.
   La versión oficial del juego NO se toca: sigue siendo la de version.json.
   Aquí solo se añaden noticias propias (pantalla Noticias) y notas propias (ventana Novedades).
   Para una nueva subversión: cambia SUB y añade una entrada al principio de "items" y de "changelog". */
(() => {
  const OFICIAL = '0.9.9';
  const SUB = '0.18';
  const AUTOR = 'Actualización hecha por moportor6 (no oficial)';
  const PIE = '> Juego original de Charcher. Port Android de JayElDragon.';

  const items = [
    {
      id: 'moportor6-sub-0.18',
      date: Date.UTC(2026, 10, 9, 14),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.18`,
      summary: 'Pokémon Survivors de pedrobarretto en Más juegos, sin internet y sin cuenta.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Pokémon Survivors`,
        `- Nuevo juego en **Más juegos**: **Pokémon Survivors**, un survivors con 27 iniciales de todas las regiones (82 Pokémon con los huevos). Aguantas 15 minutos de hordas, aprendes movimientos, evolucionas y te enfrentas a Mewtwo. Biomas, cuevas, Megaevoluciones, Poké Mart y modo infinito. Está en español.`,
        `- Funciona **sin internet** y **sin cuenta**: juegas como invitado y tu progreso se guarda en este dispositivo. El ranking, el cooperativo y su pueblo online necesitan su servidor y una cuenta, así que aquí no aparecen.`,
        `- Su código es abierto: cada versión de la app compila su versión más nueva, y cada versión se guarda en el repositorio (rama respaldo-pokemon-survivors).`,
        `- Para volver, toca **Volver a PokéBonk** dos veces.`,
        ``,
        `> Pokémon Survivors: juego de pedrobarretto (github.com/pedrobarretto/pokemon-survivors, pokemonsurvivors.com). Código con licencia MIT.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.17',
      date: Date.UTC(2026, 10, 9, 11),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.17`,
      summary: 'Pokémon Overlord, el roguelike de combates por equipos de jab_lao, en Más juegos.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Pokémon Overlord`,
        `- Nuevo juego en **Más juegos**: **Pokémon Overlord**, un roguelike de combates por equipos. Antes de cada pelea colocas a tus Pokémon (delante aguantan los golpes, detrás están protegidos) y luego luchan solos o como tú elijas. Cada partida es distinta.`,
        `- Modos: **Play** (partida normal o Liga), **Advanced Mode**, **Battle Frontier**, **Versus Mode** y **Collection**. Está en inglés.`,
        `- Trae sus propios botones en pantalla para móvil (flechas, Z para aceptar, X para cancelar, C para ver la información).`,
        `- Funciona **sin internet** y sin cuenta. Tu partida se guarda en este dispositivo.`,
        `- En itch.io solo se juega en el navegador: se guardó una copia completa (también en el repositorio, rama respaldo-pokemon-overlord-web).`,
        `- Para volver, toca **Volver a PokéBonk** (arriba a la izquierda) dos veces.`,
        ``,
        `> Pokémon Overlord: juego de jab_lao (jab-lao.itch.io/pokemon-overlord).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.16',
      date: Date.UTC(2026, 10, 9, 10),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.16`,
      summary: 'PokéIsaac: disparo automático de verdad, sin mantener ningún botón.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéIsaac: disparo manual o automático`,
        `- Nuevo ajuste **Modo AUTO** en **Opciones > Táctil**, debajo de **Disparar con**: **AL MANTENER** (como siempre) o **SIEMPRE**.`,
        `- Con **Disparar con: AUTO** y **Modo AUTO: SIEMPRE**, tu Pokémon apunta y dispara solo al enemigo más cercano en cuanto aparece, sin tocar nada. Tú solo te mueves y esquivas.`,
        `- Si arrastras desde el botón AUTO, apuntas tú a mano en ese momento; al soltar, vuelve a apuntar solo.`,
        `- Para disparar siempre a mano, elige **Disparar con: STICK** o **4 FLECHAS**.`,
        `- PokéIsaac ya trae su propio editor de controles: **Opciones > Táctil > Colocar los botones** (mover, agrandar, aclarar o esconder cada joystick y botón).`,
        ``,
        `# Los demás juegos`,
        `- **PokéSurvivor** ya apunta solo, y en **Ajustes > Controles** tiene **Apuntado manual** (segundo dedo, ratón o stick derecho), tamaño del joystick y joystick fijo.`,
        `- **PokéPath TD**, **PokéPlunder** y **Pokelike** no tienen controles en pantalla que tapen el juego.`,
        ``,
        `> PokéIsaac: juego de @SrBatai (pokeisaac.com).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.15',
      date: Date.UTC(2026, 10, 9, 9),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.15`,
      summary: 'PokéPlunder, el roguelike por turnos de Khydra, en Más juegos.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéPlunder`,
        `- Nuevo juego en **Más juegos**: **PokéPlunder 1.1.6**, un roguelike por turnos del autor de PokéPath TD. Eliges entre 12 Pokémon y avanzas por 9 zonas con salas, tiendas, objetos, movimientos nuevos y jefes. Tres ranuras de guardado y mejoras permanentes. Está en inglés.`,
        `- Funciona **sin internet** y sin cuenta. Tu partida se guarda en este dispositivo.`,
        `- En itch.io solo se puede jugar en el navegador: se guardó una copia completa (también en el repositorio, rama respaldo-pokeplunder-web) por si un día deja de estar.`,
        `- Para volver, toca **Volver a PokéBonk** (abajo a la izquierda) dos veces.`,
        ``,
        `> PokéPlunder: juego de Khydra (khydra98.itch.io/pokeplunder).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.14',
      date: Date.UTC(2026, 10, 9, 8),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.14`,
      summary: 'PokéPath TD, el tower defense de Khydra, en Más juegos.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéPath TD`,
        `- Nuevo juego en **Más juegos**: **PokéPath TD 1.7**, un tower defense en el que construyes el camino por donde pasan los enemigos. 9 rutas, tu equipo de Pokémon, objetos, tienda y desafíos. Está en español.`,
        `- Funciona **sin internet** y sin cuenta: es el juego de su versión de escritorio. Tu partida se guarda en este dispositivo.`,
        `- Para volver, toca **Volver a PokéBonk** dos veces.`,
        ``,
        `> PokéPath TD: juego de Khydra (khydra98.itch.io/pokepath).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.13',
      date: Date.UTC(2026, 10, 9, 7),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.13`,
      summary: 'Ningún juego pide iniciar sesión: el Gacha de PokéIsaac funciona sin cuenta.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéIsaac sin cuenta`,
        `- Antes, el **Gacha**, las fichas, los Tickets, las misiones y los huevos pedían iniciar sesión o entrar como invitado en sus servidores. Ahora **PokéIsaac** entra solo con una cuenta local, sin pedir nada y sin internet.`,
        `- Empiezas con **300 fichas** y ganas más al terminar cada partida (según lo lejos que llegues), con las misiones y con los huevos. Las tiradas desbloquean los Pokémon para tus partidas.`,
        `- Todo se guarda en este dispositivo. Usa la simulación del servidor que el propio PokéIsaac trae dentro.`,
        `- Si quieres tu cuenta de pokeisaac.com, el Ranking, el cooperativo online, el clan o el chat, abre **PokéIsaac online** en Más juegos (necesita internet).`,
        ``,
        `# Los demás juegos`,
        `- **PokéBonk**: no pide cuenta para nada.`,
        `- **PokéSurvivor**: su cuenta es local y su Gachapon usa monedas y tickets que ganas jugando.`,
        `- **Pokelike**: Historia, Torre Batalla, Desafíos, tienda y sobres funcionan sin cuenta. Solo las clasificatorias (contra equipos de otros jugadores) y el guardado en la nube son de su servidor y piden registrarse.`,
        ``,
        `> PokéIsaac: juego de @SrBatai (pokeisaac.com).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.12',
      date: Date.UTC(2026, 10, 9, 5),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.12`,
      summary: 'Más juegos: PokéSurvivor, Pokelike y PokéIsaac 1.1.1, igual que la web.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéSurvivor`,
        `- **Pokémon Survivors 6.2** viene dentro de la app: está en **Más juegos**, en la barra del menú principal.`,
        `- Funciona **sin internet**: el juego entero va dentro del APK y de la versión de Windows.`,
        `- Para volver, toca **Volver a PokéBonk** dos veces.`,
        `- Sus partidas y su progreso se guardan aparte de los de PokéBonk.`,
        `- Copia de seguridad: el código fuente completo está guardado en el repositorio (carpeta juegos/poke-survivor) por si el original desaparece.`,
        ``,
        `# PokéIsaac al día`,
        `- PokéIsaac pasa de la 1.0.11 a la **1.1.1**, la misma que en pokeisaac.com: menú nuevo con **Clan** y **Chat**, compañeros en **Mi equipo**, modo Clásico por capítulos, entrenamiento con el Profesor Alakazam, barra de vida de jefes nueva, tienda de 6 huecos, salas, objetos y auras nuevos, y el juego en francés.`,
        `- A partir de ahora, **cada versión de la app trae el PokéIsaac más nuevo** de la web: se descarga solo al compilar.`,
        `- Cada versión nueva de PokéIsaac se guarda también en el repositorio (rama respaldo-pokeisaac) por si la web desaparece.`,
        `- **Los enemigos ya pueden hacerte daño y derrotarte.** La copia que venía en la app traía una línea añadida que hacía invencible a tu Pokémon (por eso Pikachu no moría). La versión nueva viene limpia, y al compilar se comprueba que no traiga esa trampa.`,
        `- El botón **Volver a PokéBonk** es más pequeño y está abajo, entre las noticias y Jugar, para no tapar nada.`,
        ``,
        `# Pokelike`,
        `- Nuevo juego en **Más juegos**: **Pokelike** (pokelike.xyz), la versión más nueva de la web (ahora la 3.6.3): modo **Historia**, **Torre Batalla**, **Desafíos** y el **Pokésort diario**. Está en español.`,
        `- Va **completo dentro de la app**: código, música y las imágenes del juego. Sin publicidad.`,
        `- Si el juego pide alguna imagen que no venía dentro, la descarga de pokelike.xyz (con internet) y la guarda para la próxima vez.`,
        `- El multijugador y el guardado en la nube son de sus servidores: esos sí necesitan internet.`,
        `- Cada versión de la app trae el Pokelike más nuevo de la web, y cada versión se guarda en el repositorio (rama respaldo-pokelike).`,
        `- Para volver, toca **Volver a PokéBonk** (abajo a la izquierda) dos veces.`,
        ``,
        `# Menú principal`,
        `- Los juegos extra se juntan en un solo botón, **Más juegos**: PokéIsaac, PokéSurvivor y Pokelike.`,
        `- La barra de accesos en vertical va en dos filas de 5, con el icono encima del nombre para que se lean enteros.`,
        ``,
        `> PokéSurvivor: juego original de JPTER78, port Android de JayElDragon. Código con licencia MIT; sprites con licencia CC BY-NC. Pokelike: pokelike.xyz, sprites de PokeAPI. PokéIsaac: @SrBatai.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.11',
      date: Date.UTC(2026, 10, 9, 4),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.11`,
      summary: 'Guardado automático: si sales de la app en mitad de una partida, puedes continuarla.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Reanudar donde te quedaste`,
        `- Si sales de la app en mitad de una partida (botón de inicio, cambiar de app, apagar la pantalla o cerrarla), la partida se **guarda sola**, igual que con "Guardar y salir".`,
        `- **Si vuelves y la app seguía abierta**, la partida se reanuda sola en pausa: pulsa Continuar y sigues.`,
        `- **Si la app se había cerrado**, al abrirla sale el aviso **Tienes una partida guardada** con **Continuar**, **Finalizar** (te quedas con lo conseguido) o **Más tarde**.`,
        `- No se guarda en Duelos ni en Cooperativo, ni en los momentos en que el juego no deja guardar (por ejemplo, en algunas peleas). En esos casos pasa lo de siempre.`,
        ``,
        `# Arreglos del menú principal`,
        `- Los textos que no cabían ahora se ajustan solos a su botón: **Continuar**, **Supervivencia**, los eventos con fechas largas, Encargos y la barra lateral.`,
        `- La barra lateral ya muestra todos los accesos (también **Guía**): se quitó "Inicio", que no hacía nada porque ya estás en el inicio, y los botones se reparten el alto.`,
        ``,
        `# Vertical, menos apretado`,
        `- Nueva disposición de la partida en vertical: minimapa más pequeño junto a Pausa, tiempo y dinero debajo, **ataques y vitaminas a la izquierda, encima del joystick** (ya no tapan el incienso ni la Ultimate) y **MEGA/DMAX a la derecha**.`,
        `- **Editor del HUD** también en **Ajustes > Gráficos**, debajo de Orientación. Se usa durante una partida (Pausa > Ajustes), y sigue estando la etiqueta "HUD y guía" de la pausa.`,
        ``,
        `# Editor del HUD: girar y ocultar`,
        `- Al tocar un elemento en el editor, además del tamaño ahora puedes **girarlo** (de -180° a 180°) y **ocultarlo**.`,
        `- Lo oculto no se ve ni se puede tocar en la partida. En el editor sale medio transparente para poder volver a mostrarlo.`,
        `- Cuidado con ocultar el joystick (no podrías moverte con el dedo) o Pausa (usa el botón Atrás del móvil).`,
        ``,
        `# Versión para Windows`,
        `- Cada versión trae también **PokeBonk para Windows**: instalador (**PokeBonk-Windows-Instalador.exe**) y versión sin instalar (**.zip**), en la misma release de GitHub que el APK.`,
        `- Es el mismo juego con todas estas mejoras. Se juega con teclado y ratón o con mando. **F11** para pantalla completa.`,
        `- Las partidas del PC y las del móvil van por separado.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.10',
      date: Date.UTC(2026, 10, 9, 3),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.10`,
      summary: 'Modo vertical: elige Horizontal, Vertical o Automática en Ajustes.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Modo vertical`,
        `- En **Ajustes > Gráficos**, la primera opción es **Orientación**: **Horizontal** (como siempre), **Vertical** o **Automática** (gira con el móvil). Se aplica al momento y se recuerda al abrir la app.`,
        `- **Menú principal en vertical:** logo arriba, Jugar y los modos, tu compañero en el centro y los accesos (Pokédex, Laboratorio, Logros, Builds, Ajustes, Donaciones, PokéIsaac, Guía) abajo en dos filas.`,
        `- **Partida en vertical:** el tiempo y el dinero bajan debajo del minimapa, y los ataques y vitaminas suben por encima de los botones táctiles.`,
        `- **Pausa en vertical:** en una sola columna (tu Pokémon, pestañas y botones).`,
        `- Ya no sale el aviso de girar el móvil si elegiste Vertical o Automática.`,
        `- El **Editor del HUD** guarda una disposición para horizontal y otra para vertical, así puedes acomodar cada una por separado.`,
        `- Las demás pantallas (Pokédex, Laboratorio, Ajustes, Builds, subidas de nivel, reliquias, resultados) ya se adaptan solas a la pantalla estrecha.`,
        ``,
        `# Arreglos`,
        `- **MEGA y DMAX en jefes:** ya se pueden usar durante la aparición de jefes, Alfas y otras escenas cortas. Antes el botón estaba lleno pero no respondía.`,
        `- Los botones MEGA y DMAX responden al apoyar el dedo, sin esperar a soltarlo.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.9',
      date: Date.UTC(2026, 10, 9, 2),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.9`,
      summary: 'La mega ahora es temporal y recargable, y hay más huecos de vitamina.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Megaevolución temporal`,
        `- La mega dura **40 segundos** (el doble que el Dynamax) y luego vuelves a tu forma normal, con tus tipos de siempre.`,
        `- Se **recarga con bajas**: **150** si la recarga empieza en los primeros 5 minutos, **300** después. Las bajas cuentan desde que se acaba la mega anterior.`,
        `- El botón MEGA muestra la recarga y, mientras dura, los segundos que quedan.`,
        `- Sigue haciendo falta la investigación de la familia al 100%, y se puede combinar con el Dynamax.`,
        ``,
        `# Laboratorio`,
        `- **Huecos de vitamina** pasa de 2 a **4 niveles**: de 3 huecos hasta **7** (los niveles nuevos cuestan más).`,
        ``,
        `# Arreglos`,
        `- Los botones **MEGA y DMAX** ya no se ven encima del menú de pausa.`,
        `- En la pausa, las estadísticas (tiempo, bajas, daño, dinero...) ya no quedan tapadas por los botones en pantallas bajas: ahora van en una sola fila.`,
        `- **Editar HUD** y **Guía** se juntan en una etiqueta **HUD y guía**, arriba a la derecha de la tarjeta de tu Pokémon en la pausa.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.8',
      date: Date.UTC(2026, 10, 9, 1),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.8`,
      summary: 'PokéIsaac incluido como minijuego, con su botón en el menú.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéIsaac`,
        `- **PokéIsaac 1.0.11** (de @SrBatai) viene dentro de la app: botón **PokéIsaac** en la barra del menú principal, debajo de Donaciones.`,
        `- Para volver, toca **Volver a PokéBonk** dos veces.`,
        `- Cada juego guarda sus propias partidas; no se mezclan.`,
        `- **Sin conexión:** usa **Jugar sin conexión**. Igual que en su APK original, los sprites de los Pokémon y algunos objetos se descargan de sus servidores, así que sin internet salen como una roca gris.`,
        `- **Con conexión:** carga los sprites y funcionan la cuenta, el ranking y el cooperativo, como en su APK.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.7',
      date: Date.UTC(2026, 10, 9, 0),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.7`,
      summary: 'Las Reliquias de la grieta ya tienen imagen.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Arreglos`,
        `- **Reliquias de la grieta sin imagen:** el port de Android solo traía la imagen de Polvo de Cometa; las otras 31 salían rotas.`,
        `- Ahora cada reliquia usa el icono de un objeto del juego que se le parece (por ejemplo, Colmillo Mellado usa el Colmillo Agudo y Escama del Dragón Antiguo el Colmillo Dragón). Lo que hace cada reliquia no cambia.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.6',
      date: Date.UTC(2026, 10, 8, 23),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.6`,
      summary: 'Guía de objetivos: una flecha te indica a dónde ir, en orden.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Guía de objetivos`,
        `- Una **flecha amarilla** alrededor de tu Pokémon apunta al siguiente objetivo, con su nombre y la distancia debajo.`,
        `- Si el objetivo se ve en pantalla, además sale un marcador que rebota encima de él.`,
        `- **Orden:** primero las **Poké Balls gratis**, luego los **NPC de mejoras** (tienda de Meowth, Ditto, Hypno, Ruinas del Fósil, Pokémon enjaulados, Snorlax, Magnemite, Porygon y el PC de Bill), después los **desafíos y altares**, luego el **guardián o legendario** y, al vencerlo, el **portal** al siguiente mapa.`,
        `- Dentro de cada paso te lleva al más cercano.`,
        `- Los NPC que se usan varias veces (como la tienda) cuentan como vistos al acercarte.`,
        `- **Toca la etiqueta** para saltarte ese objetivo.`,
        `- Se apaga y se enciende desde la **pausa**, con el botón **Guía: Sí/No**.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.5',
      date: Date.UTC(2026, 10, 8, 22),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.5`,
      summary: 'Editor del HUD: mueve y cambia el tamaño de cualquier elemento de la partida.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Editor del HUD`,
        `- En una partida, abre la **pausa** y toca **Editar HUD**.`,
        `- **Arrastra** cualquier elemento para moverlo: retrato, tiempo, minimapa, ataques y objetos, joystick, saltar, deslizar, fijar objetivo, Ultimate, incienso, pausa, apuntado, MEGA y DMAX.`,
        `- **Toca** uno para cambiar su **tamaño** (del 50% al 200%) o restablecerlo.`,
        `- **Restablecer todo** lo deja como al principio. Nada se puede sacar de la pantalla.`,
        `- Se guarda en tu móvil y vale para todas las partidas.`,
        `- Si mueves el joystick fijo, la zona donde se toca para usarlo se mueve con él.`,
        ``,
        `# Otros`,
        `- Los botones MEGA y DMAX ahora salen a la izquierda, debajo del retrato, y se ocultan en la pausa.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.4',
      date: Date.UTC(2026, 10, 8, 20),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.4`,
      summary: 'Megaevoluciones y Dynamax dentro de la partida.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Megaevolución`,
        `- **10 megas:** Mega Charizard X, Mega Alakazam, Mega Gengar, Mega Kangaskhan, Mega Aerodactyl, Mega Mewtwo Y, Mega Steelix, Mega Skarmory, Mega Houndoom y Mega Tyranitar.`,
        `- **Cómo se desbloquea:** completa al 100% la investigación de la familia de ese Pokémon.`,
        `- **En la partida:** jugando con ese Pokémon (ya evolucionado), al llegar a **150 bajas** se ilumina el botón **MEGA** a la derecha. Al tocarlo te megaevolucionas hasta el final de la partida.`,
        `- **Qué da:** +25% daño, +15% PS, +10% velocidad de ataque y +10 armadura, con su sprite de mega (también en variocolor, salvo Skarmory y Tyranitar).`,
        `- **Tipos:** cada mega usa sus tipos de los juegos. Solo cambia Mega Charizard X, que pasa a **Fuego/Dragón** (sus ataques de tipo Dragón ganan la bonificación de mismo tipo); las demás conservan los tipos de su Pokémon.`,
        ``,
        `# Dynamax`,
        `- **Cualquier Pokémon, las veces que quieras:** el botón **DMAX** se recarga con bajas y muestra cuántas llevas.`,
        `- **Recarga:** si empieza en los **primeros 5 minutos**, necesitas **100 bajas**; después de los 5 minutos, **300 bajas**. Las bajas cuentan desde que se acaba el Dynamax anterior.`,
        `- **Dura 20 segundos:** te haces gigante con aura roja, +50% daño, +50% PS y +30% área.`,
        `- Se puede combinar con la mega.`,
        `- No hay Gigantamax: todavía no existen sprites de esas formas.`,
        ``,
        `# Notas`,
        `- Mega y Dynamax no se usan en Duelos.`,
        `- Sprites de megas: PMD Sprite Repository (PMDCollab), uso no comercial con crédito. Autores en CREDITOS-SPRITES.md del repositorio.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.3',
      date: Date.UTC(2026, 10, 8, 18),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.3`,
      summary: 'El Laboratorio ahora es individual: cada Pokémon tiene sus propias mejoras. Cuatro mejoras nuevas.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Laboratorio individual`,
        `- **Cada Pokémon tiene sus propias mejoras.** Arriba de las Mejoras eliges a qué Pokémon se las compras, y solo le sirven a él en sus partidas.`,
        `- **Todas son individuales**, también las de partida (4.º movimiento, Revivir, Mochila grande, Equipo de apoyo, etc.). Solo el **Archivo** sigue siendo de toda la cuenta, porque es la lista de objetos que ocultas.`,
        `- **Devolver mejoras:** cada Pokémon tiene un botón que te regresa todo el Polvo gastado en él para repartirlo de nuevo, en él o en otro.`,
        `- **Lo que ya tenías comprado** valía para todos, así que se devolvió como Polvo Estelar una sola vez para que lo repartas.`,
        ``,
        `# Mejoras nuevas`,
        `- **Contundencia:** +5% daño crítico por nivel, hasta 5 niveles.`,
        `- **Alteración:** +6% probabilidad de causar estados por nivel, hasta 5 niveles.`,
        `- **Persistencia:** +4% duración de efectos y zonas por nivel, hasta 5 niveles.`,
        `- **Absorción:** +0,5% robo de vida por nivel, hasta 4 niveles (máximo +2%).`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.2',
      date: Date.UTC(2026, 10, 8, 16),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.2`,
      summary: 'Los Pokédólares que te sobran al acabar una partida se guardan para la siguiente.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Pokédólares guardados`,
        `- **El oro que sobra se guarda:** al terminar una partida (ganes, pierdas o salgas), los Pokédólares que no gastaste quedan guardados.`,
        `- **Se usan en la siguiente partida:** al empezar, se suman a tu monedero y te sale un aviso con la cantidad.`,
        `- **Si cierras la app a mitad de partida**, el oro guardado que llevabas no se pierde: vuelve a la reserva.`,
        `- **No cuenta en Duelos ni en Cooperativo**, para no tener ventaja frente a otros jugadores.`,
        ``,
        `# Notas`,
        `- Se quitaron los caracteres raros de las notas de actualización.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.1',
      date: Date.UTC(2026, 10, 8, 12),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.1`,
      summary: 'Compañeros con más libertad y el mismo poder de siempre.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Compañeros (Alfas de apoyo)`,
        `- **Se alejan más:** van a por el enemigo más cercano (hasta 18 m de ti) en vez de quedarse pegados a tu lado. Solo vuelven de golpe si se quedan a más de 40 m (antes 28 m).`,
        `- **Sus ataques mejoran solos:** el área de su ataque especial crece un 10% por cada nivel de vínculo.`,
        `- **Fusión de ataques:** con vínculo 2 o más y dos tipos, después de su ataque especial lanzan también el de su segundo tipo al 60% de daño (verás el aviso Fusión encima).`,
        `- **Evolucionan antes:** con vínculo 1 (25 bajas) y vínculo 3 (150 bajas); antes era con vínculo 2 y 4.`,
        `- **Mismo poder que en el original:** el daño base de los compañeros es el de siempre.`,
        ``,
        `# App`,
        `- Las actualizaciones llegan desde el repositorio propio (moportor6-art/moportor6-art-PokeBonk).`,
        ``,
        PIE
      ].join('\n')
    }
  ];

  // Mete las noticias propias entre las oficiales según su fecha (respeta las fijadas arriba).
  const merge = (oficiales, propias) => {
    const out = (Array.isArray(oficiales) ? oficiales : []).filter(n => !propias.some(p => p.id === n.id));
    for (const p of propias) {
      let i = out.findIndex(n => !n.pinned && (n.date ?? 0) < p.date);
      if (i < 0) i = out.length;
      out.splice(i, 0, p);
    }
    return out;
  };

  // Entradas propias para la ventana Novedades (botón de la versión junto al logo).
  // Categorías iguales a las oficiales: new, better, balance, fix, event, coop.
  const changelog = [
    {
      oficial: OFICIAL,
      sub: '0.18',
      date: '2026-11-09',
      title: 'Pokémon Survivors en Más juegos.',
      notes: [
        ['new', '**Pokémon Survivors** (de pedrobarretto) en Más juegos: survivors con 82 Pokémon, en español, sin internet y sin cuenta. Se actualiza solo en cada versión.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.17',
      date: '2026-11-09',
      title: 'Pokémon Overlord en Más juegos.',
      notes: [
        ['new', '**Pokémon Overlord** (de jab_lao) en Más juegos: roguelike de combates por equipos, sin internet y sin cuenta.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.16',
      date: '2026-11-09',
      title: 'PokéIsaac: disparo automático sin mantener.',
      notes: [
        ['new', 'PokéIsaac: **Modo AUTO: SIEMPRE** en Opciones > Táctil. Con Disparar con AUTO, apunta y dispara solo al enemigo más cercano.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.15',
      date: '2026-11-09',
      title: 'PokéPlunder en Más juegos.',
      notes: [
        ['new', '**PokéPlunder** (de Khydra) en Más juegos: roguelike por turnos sin internet y sin cuenta.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.14',
      date: '2026-11-09',
      title: 'PokéPath TD en Más juegos.',
      notes: [
        ['new', '**PokéPath TD** (de Khydra) en Más juegos: tower defense sin internet y sin cuenta, en español.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.13',
      date: '2026-11-09',
      title: 'Ningún juego pide iniciar sesión.',
      notes: [
        ['new', '**PokéIsaac sin cuenta**: Gacha, fichas, Tickets, misiones y huevos funcionan sin iniciar sesión y sin internet, guardados en el dispositivo.'],
        ['new', '**PokéIsaac online** en Más juegos, para usar tu cuenta de pokeisaac.com (Ranking, cooperativo, clan y chat).'],
        ['better', 'Revisados PokéBonk, PokéSurvivor y Pokelike: no piden cuenta (solo las clasificatorias y la nube de Pokelike).']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.12',
      date: '2026-11-09',
      title: 'Más juegos: PokéSurvivor, Pokelike y PokéIsaac 1.1.1.',
      notes: [
        ['new', '**PokéSurvivor** (Pokémon Survivors 6.2, de JPTER78 y JayElDragon) dentro de la app, sin internet. En Más juegos.'],
        ['new', '**PokéIsaac 1.1.1**, igual que la web (Clan, Chat, Mi equipo, Clásico por capítulos, entrenamiento...). Se actualiza solo en cada versión de la app.'],
        ['fix', 'PokéIsaac: los enemigos ya pueden hacerte daño y derrotarte (la copia anterior te hacía invencible).'],
        ['new', '**Pokelike** (el de la web, 3.6.3) dentro de la app, con su música y sin publicidad. Lo que falte se baja y se guarda.'],
        ['better', 'Botón **Más juegos** con PokéIsaac, PokéSurvivor y Pokelike.'],
        ['better', 'Barra de accesos en vertical: icono encima del nombre para que se lean enteros.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.11',
      date: '2026-11-09',
      title: 'Guardado automático al salir de la app.',
      notes: [
        ['new', '**Guardado automático**: si sales de la app en mitad de una partida, se guarda sola y al volver puedes continuarla o finalizarla.'],
        ['fix', 'Menú principal: los textos largos (Continuar, Supervivencia, eventos) ya caben en sus botones y la barra lateral muestra todos los accesos.'],
        ['better', 'Partida en vertical menos apretada, y Editor del HUD también en Ajustes > Gráficos.'],
        ['new', 'Editor del HUD: ahora puedes girar y ocultar cada elemento.'],
        ['new', 'Versión para Windows en cada release (instalador y .zip).']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.10',
      date: '2026-11-09',
      title: 'Modo vertical.',
      notes: [
        ['new', '**Orientación** en Ajustes > Gráficos: Horizontal, Vertical o Automática.'],
        ['new', 'Menú principal, HUD de la partida y pausa ordenados para vertical.'],
        ['better', 'El Editor del HUD guarda una disposición distinta para cada orientación.'],
        ['fix', 'MEGA y DMAX ya funcionan durante la aparición de jefes y Alfas.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.9',
      date: '2026-11-09',
      title: 'Mega temporal y más huecos de vitamina.',
      notes: [
        ['balance', '**Mega temporal**: dura 40 s y se recarga con bajas (150 en los primeros 5 minutos, 300 después).'],
        ['new', '**Huecos de vitamina** en el Laboratorio: ahora 4 niveles, hasta 7 huecos.'],
        ['fix', 'MEGA y DMAX ya no se ven encima de la pausa, y las estadísticas de la pausa ya no quedan tapadas.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.8',
      date: '2026-11-09',
      title: 'PokéIsaac como minijuego.',
      notes: [
        ['new', '**PokéIsaac** (de @SrBatai) dentro de la app: botón en el menú principal y botón Volver a PokéBonk.'],
        ['better', 'Sin internet se juega con Jugar sin conexión, pero los sprites de PokéIsaac se descargan de sus servidores, como en su APK original.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.7',
      date: '2026-11-09',
      title: 'Reliquias con imagen.',
      notes: [
        ['fix', '**Reliquias de la grieta**: ya no salen sin imagen. Cada una usa el icono de un objeto parecido del juego.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.6',
      date: '2026-11-08',
      title: 'Guía de objetivos con flechas.',
      notes: [
        ['new', '**Guía de objetivos**: una flecha te lleva en orden a las Poké Balls gratis, los NPC de mejoras, los desafíos, el guardián y el portal.'],
        ['better', 'Toca la etiqueta de la guía para saltarte un objetivo. Se apaga desde la pausa (Guía: Sí/No).']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.5',
      date: '2026-11-08',
      title: 'Editor del HUD.',
      notes: [
        ['new', '**Editar HUD** (en la pausa): arrastra cualquier elemento de la partida y cambia su tamaño del 50% al 200%.'],
        ['better', 'Los botones MEGA y DMAX salen a la izquierda, debajo del retrato, y se ocultan en la pausa.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.4',
      date: '2026-11-08',
      title: 'Megaevoluciones y Dynamax dentro de la partida.',
      notes: [
        ['new', '**10 megas**: Charizard X, Alakazam, Gengar, Kangaskhan, Aerodactyl, Mewtwo Y, Steelix, Skarmory, Houndoom y Tyranitar. Se desbloquean con la investigación de su familia al 100%.'],
        ['new', '**Botón MEGA** a las 150 bajas: te megaevolucionas hasta el final de la partida (+25% daño, +15% PS, +10% vel. de ataque, +10 armadura).'],
        ['new', '**Botón DMAX** que se recarga con bajas (100 en los primeros 5 minutos, 300 después): 20 s gigante con +50% daño, +50% PS y +30% área.'],
        ['balance', 'Mega Charizard X pasa a Fuego/Dragón; las demás megas conservan sus tipos, como en los juegos.'],
        ['balance', 'Mega y Dynamax no se usan en Duelos.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.3',
      date: '2026-11-08',
      title: 'Laboratorio individual por Pokémon y cuatro mejoras nuevas.',
      notes: [
        ['new', '**Laboratorio individual**: eliges a qué Pokémon le compras cada mejora y solo le sirve a él. El Archivo sigue siendo de toda la cuenta.'],
        ['new', '**Devolver mejoras**: recupera todo el Polvo gastado en un Pokémon para repartirlo de nuevo.'],
        ['new', '**Mejoras nuevas**: Contundencia (daño crítico), Alteración (estados), Persistencia (duración) y Absorción (robo de vida, máximo +2%).'],
        ['balance', 'Lo que ya tenías comprado se devolvió como Polvo Estelar una sola vez para repartirlo.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.2',
      date: '2026-11-08',
      title: 'Los Pokédólares que sobran se guardan para la siguiente partida.',
      notes: [
        ['new', '**Pokédólares guardados**: lo que no gastes en una partida se guarda y se suma al empezar la siguiente (con aviso de la cantidad).'],
        ['better', 'Si cierras la app a mitad de partida, el oro guardado que llevabas vuelve a la reserva.'],
        ['balance', 'No cuenta en **Duelos** ni en **Cooperativo**.'],
        ['fix', 'Se quitaron los caracteres raros de las notas de actualización.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.1',
      date: '2026-11-08',
      title: 'Compañeros con más libertad y el mismo poder de siempre.',
      notes: [
        ['better', '**Los compañeros se alejan más**: van a por el enemigo más cercano (hasta 18 m de ti) y solo vuelven de golpe si se quedan a más de 40 m (antes 28 m).'],
        ['better', '**Sus ataques mejoran solos**: el área de su ataque especial crece un 10% por cada nivel de vínculo.'],
        ['new', '**Fusión de ataques**: con vínculo 2 o más y dos tipos, tras su ataque especial lanzan el de su segundo tipo al 60% de daño.'],
        ['balance', '**Evolucionan antes**: con vínculo 1 (25 bajas) y vínculo 3 (150 bajas); antes con vínculo 2 y 4.'],
        ['balance', '**Mismo poder que el original**: el daño base de los compañeros no cambia.'],
        ['new', '**Actualizaciones propias**: la app busca nuevas versiones en el repositorio de moportor6.']
      ]
    }
  ];

  const SEEN = 'pb-sub-seen';
  const unseen = () => { try { return localStorage.getItem(SEEN) !== OFICIAL + '+' + SUB; } catch { return false; } };
  const markSeen = () => { try { localStorage.setItem(SEEN, OFICIAL + '+' + SUB); } catch {} };

  window.PB_SUB = { oficial: OFICIAL, sub: SUB, author: AUTOR, items, merge, changelog, unseen, markSeen };
})();
