/* Subversión propia (fork de moportor6) sobre la versión oficial.
   La versión oficial del juego NO se toca: sigue siendo la de version.json.
   Aquí solo se añaden noticias propias (pantalla Noticias) y notas propias (ventana Novedades).
   Para una nueva subversión: cambia SUB y añade una entrada al principio de "items" y de "changelog". */
(() => {
  const OFICIAL = '0.9.9';
  const SUB = '0.77';
  const AUTOR = 'Actualización hecha por moportor6 (no oficial)';
  const PIE = '> Juego original de Charcher. Port Android de JayElDragon.';

  const items = [
    {
      id: 'moportor6-sub-0.77',
      date: Date.UTC(2026, 10, 14, 0, 0),
      tag: 'novedad',
      pinned: true,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.77`,
      summary: '¡Gimnasios con medallas en todas las regiones y tu rival Azul!',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `**Gimnasios** (Elige mapa → Preparar partida → baja hasta **Gimnasio**)`,
        `- Elige un líder de la región del mapa: 8 en Kanto, Johto, Hoenn, Sinnoh, Teselia, Kalos, Galar y Paldea, y los 4 kahunas de Alola. Se vencen en orden.`,
        `- En esa partida, los 3 guardianes son el equipo del líder (el último, su as, y no se capturan) y la mayoría de los salvajes son de su tipo.`,
        `- Gana la partida y te llevas su **medalla** y 300 de Polvo. Con todas las de una región, 1.000 más. Después puedes repetirlos como revancha.`,
        `- No en cooperativo.`,
        ``,
        `**Tu rival, Azul**`,
        `- A mitad de la zona 2 aparece con su inicial de Kanto: el que le gana al tipo de tu Pokémon, y se queda con él.`,
        `- Evoluciona según las veces que os habéis visto (3 y 7), y es más duro cuanto más avanzas.`,
        `- Derrótalo: +150 ₽ en la partida y +100 de Polvo. No sale en gimnasios ni en cooperativo.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.76',
      date: Date.UTC(2026, 10, 13, 23, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.76`,
      summary: 'Escuderos en todos los mapas, el clima afecta a los salvajes, oro por Polvo en el Laboratorio y premios de Pokédex.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Escuderos en todos los mapas** (Metapod, Kakuna, Aron, Bronzor, Shellder, Onix, Beldum, Carbink...), como los curanderos: anillo azul, aviso «¡Escudero a la vista!» al acercarse y +50 % de PS. Sus escudos también crecen con el avance del mapa.`,
        `- **Clima**: al empezar una zona con clima te dice qué tipos sube y baja. Y ahora también cuenta para los salvajes: los de tipo favorecido pegan un 15 % más y los perjudicados, un 15 % menos.`,
        `- **Laboratorio**: cambia tu oro guardado por Polvo Estelar (10 ₽ = 1 de Polvo), de 100 en 100 o todo de golpe.`,
        `- **Pokédex por región**: insignia «Explorador de X» (400 de Polvo) al tener la mitad de su Pokédex en tu Liga, en todas las regiones. Kanto y Johto ganan también «Campeón de X» (1.000 de Polvo y título).`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.75',
      date: Date.UTC(2026, 10, 13, 21, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.75`,
      summary: 'Más curanderos, que además dan escudo a sus compañeros y se curan a sí mismos.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Más curanderos**, en todos los mapas: hasta 2 a la vez al principio, 3 en los mapas intermedios y 4 en los finales, y salen más seguido.`,
        `- En cada pulso, además de curar a los de alrededor, **se curan a sí mismos** un 10 % extra y dejan un **escudo** pequeño a los salvajes cercanos (la mitad que un escudero), con un anillo azul. Todo crece con el avance del mapa.`,
        `- Anticura sigue frenándolos: ni curan, ni se curan, ni dan escudo.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.74',
      date: Date.UTC(2026, 10, 13, 20, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.74`,
      summary: 'El oro ahorrado ya no entra en la partida, y los curanderos se notan más.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `**Oro guardado**`,
        `- Lo que te sobra al terminar cada partida se sigue guardando y **se va sumando**, para gastarlo fuera (tienda de Megas).`,
        `- Pero **ya no entra en la partida siguiente**: cada partida empieza con 0 ₽. Nada de cofres de pago desde el nivel 1 con el oro de antes.`,
        ``,
        `**Curanderos**`,
        `- El aviso «¡Curandero a la vista!» sale cuando uno se te acerca (antes salía al aparecer lejos y lo tapaba el aviso de la zona).`,
        `- Tienen el doble de PS, para que les dé tiempo a curar. Ya no aparecen en los primeros 25 s de la zona.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.73',
      date: Date.UTC(2026, 10, 13, 12, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.73`,
      summary: 'Zonas de 15 minutos en todos los mapas del modo clásico.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Zonas de 15 minutos** (antes 10) en todos los mapas del modo clásico, de todas las regiones. El reloj empieza en 15:00 y el «¡ENJAMBRE FINAL!» llega al acabarse.`,
        `- Los primeros 10 minutos siguen igual. Los 5 nuevos traen su propio ritmo: cartas cada minuto, 2 Alfas más, horda y estampida, oleada de élites (2 en Pesadilla), tótem, invocador y un evento. Más tiempo para prepararte, pero también más presión.`,
        `- Los duelos siguen con su tiempo. Supervivencia, la Expedición y las torres no cambian.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.72',
      date: Date.UTC(2026, 10, 13, 11, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.72`,
      summary: 'El recuadro de Forma regional ya se lee bien con el tema oscuro.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Forma regional** (ficha de la Liga y Laboratorio): con el tema oscuro, el texto salía casi transparente sobre el fondo claro. Ahora es oscuro y se lee bien, también el nombre y los tipos de la forma elegida.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.71',
      date: Date.UTC(2026, 10, 13, 10, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.71`,
      summary: 'Curanderos en todos los mapas, con aviso, y Alfas de apoyo que te curan.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `**Curanderos salvajes en todos los mapas**`,
        `- Los curanderos del juego (Clefairy, Chansey, Blissey, Audino, Alomomola, Sylveon, Comfey, la línea de Hatenna...) ya curaban a los salvajes cercanos, pero solo salían en algunos mapas. Ahora pueden salir en cualquiera: primero los de la región, si los hay.`,
        `- Como mucho 1 a la vez al principio, 2 más adelante y 3 en los mapas finales.`,
        `- Su cura sube poco a poco con cada mapa (hasta un 60 % más en los últimos) y un poco con la dificultad.`,
        `- Se ven: anillo verde bajo sus pies (gris si tienen Anticura), cruces verdes encima y números verdes sobre los curados.`,
        `- **Aviso**: «¡Curandero a la vista!» la primera vez en la partida, y avisos pequeños después. Derrótalos primero; Anticura (ataques Siniestro) los frena.`,
        ``,
        `**Alfas de apoyo curanderos**: si uno de esos Pokémon lucha contigo como Alfa de apoyo, te cura un 2 % de tus PS cada 8 s, +10 % por cada nivel de vínculo y +25 % por cada evolución.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.70',
      date: Date.UTC(2026, 10, 13, 8, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.70`,
      summary: '¡Cooperativo en tu Wi-Fi! Juega con 1-3 amigos en la misma red, sin internet ni cuenta.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `**Cooperativo en tu Wi-Fi** (menú principal → **Cooperativo**, junto a Supervivencia):`,
        `- Un móvil pulsa **Crear sala en este móvil**. Los demás abren Cooperativo y tocan su sala cuando aparece en **Unirse**, o escriben la dirección que sale en el anfitrión (por ejemplo 192.168.1.25).`,
        `- Es el cooperativo original del juego: sala con vuestros Pokémon, el anfitrión elige mapa y dificultad, «¡Estoy listo!», chat y partida compartida en el modo clásico o en Supervivencia. Al terminar, volvéis a la sala.`,
        `- De 2 a 4 entrenadores. Todos en la misma Wi-Fi y con la misma subversión. No hace falta internet ni cuenta.`,
        `- Si no aparece la sala, escribe la dirección a mano. Las redes de invitados o públicas a veces no dejan que los móviles se vean entre sí.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.69',
      date: Date.UTC(2026, 10, 13, 6, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.69`,
      summary: 'Repaso visual: textos más legibles y menos cosas montadas unas sobre otras.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Elegir compañero**: las tarjetas ya no tapan a los Pokémon y el botón «¡Elijo a…!» cabe en pantallas bajas.`,
        `- **Más legible**: el contador de Bonkoins, el botón «Te faltan…» de la Tienda, las etiquetas de tipo y dificultad y las regiones bloqueadas se leen mejor.`,
        `- **Nada cortado**: el botón «Editar» de Builds, los nombres largos de ataque (Lanzallamas) y los tooltips altos (se encogen para verse enteros).`,
        `- **En partida**: el minimapa se aparta de los botones de la derecha si chocan, y el aviso del objetivo («Super Ball gratis») sube si tapa los ataques. Si moviste algo con el editor del HUD, se respeta.`,
        `- Las barras de desplazamiento ya no se pintan encima de tooltips ni ventanas.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.68',
      date: Date.UTC(2026, 10, 13, 5, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.68`,
      summary: 'Las regiones de Elige mapa se deslizan y la cadena de evolución muestra las megas y los Gigamax.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Elige mapa**: la fila de regiones (Kanto, Johto… Extra) y la de mapas se deslizan con el dedo, el ratón o la rueda, y al abrir se ve la región elegida.`,
        `- **Cadena de evolución en la Liga**: las fases con megaevolución llevan el icono MEGA y las que tienen forma Gigamax, el icono DYNAMAX (mantén pulsado o pasa el ratón para ver su nombre).`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.67',
      date: Date.UTC(2026, 10, 13, 4, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.67`,
      summary: 'Forma regional en la ficha de la Liga, lista con desplazamiento natural y modo de pruebas con aspectos.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Forma regional en la ficha de la Liga**: al elegir Pokémon, bajo su nombre sale «Forma regional» con su retrato y sus tipos (por ejemplo, Vulpix de Alola · Hielo). Es la misma elección que en el Laboratorio.`,
        `- **Lista de la Liga con desplazamiento natural**: la columna entera se desplaza; al bajar, las pestañas, el buscador y los filtros se van y quedan solo los Pokémon.`,
        `- **Modo de pruebas**: el botón «Desbloquear todos» ahora también abre todos los aspectos del Vestidor y todas las formas regionales. «Restaurar mi Liga» devuelve también tus aspectos.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.66',
      date: Date.UTC(2026, 10, 13, 3, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.66`,
      summary: 'Botón temporal para desbloquear todos los Pokémon y hacer pruebas.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Modo de pruebas (temporal)**: al darle a Jugar o Continuar, en la lista de la Liga hay un botón **«Desbloquear todos (pruebas)»** que une a tu Liga a los 541 Pokémon para probarlos. Toca dos veces para confirmar.`,
        `- Antes guarda una copia de tu Liga real. El botón **«Restaurar mi Liga»** la devuelve tal cual estaba (los que hayas unido durante las pruebas se quitan).`,
        `- Este botón se quitará en unas versiones.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.65',
      date: Date.UTC(2026, 10, 13, 2, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.65`,
      summary: 'Las fusiones regionales con los colores de su tipo, y el retrato y los tipos de la forma regional en la partida.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **13 fusiones regionales con los colores de su tipo**: Fénix Sombrío, Patada Trueno, Mirada Glacial, Galope Místico, Géiser Tóxico, Coral Maldito, Bloqueo Rebelde, Danza de Huesos Ígneos, Alud Magnético, Garra Venenosa, Desfile de Almas, Ala Psíquica y Embestida Combativa. Las partículas de otro tipo (llamas, rayos, gotas...) cambian de forma, y el estado que causan es el de su tipo (Fénix Sombrío ya no quema: maldice).`,
        `- **Retrato y tipos de la forma regional** en el marcador de la partida (arriba a la izquierda): Vulpix de Alola sale con su cara de Alola y como Hielo.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.64',
      date: Date.UTC(2026, 10, 13, 1, 30),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.64`,
      summary: '37 fusiones de firma nuevas para las formas regionales.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- Cada línea con forma regional tiene su **fusión de firma**: junta en la Máquina de Bill los dos ataques fuertes de su kit, al nivel máximo.`,
        `- Ejemplos: **Velo Aurora** (Vulpix de Alola: Fuerza Lunar + Ventisca), **Surfeo Psíquico** (Raichu de Alola), **Fénix Sombrío** (Moltres de Galar: Pulso Umbrío + Furia Candente), **Desfile de Almas** (Typhlosion de Hisui), **Tajo de la Marea** (Samurott de Hisui), **Embestida Combativa** (Tauros de Paldea)...`,
        `- Usan la animación de una fusión del juego con tipos parecidos, con su nombre y sus tipos propios. Salen en la guía de fusiones de la pausa cuando juegas con la forma regional.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.63',
      date: Date.UTC(2026, 10, 13, 1, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.63`,
      summary: 'Las formas regionales usan ataques de sus tipos: Vulpix de Alola con hielo, Raichu de Alola con eléctricos y psíquicos...',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- Cada una de las **37 líneas con forma regional** tiene su propio kit de 4 ataques del juego, con los tipos de la forma y sus ataques característicos cuando existen:`,
        `  - **Alola**: Raichu (Impactrueno, Psicorrayo, Surfeo Galvánico, Psíquico), Vulpix y Ninetales (hielo y hada), Marowak (fuego y Hueso Sombrío)...`,
        `  - **Galar**: Slowbro (Moluscañón), Weezing (Vapor Extraño), Articuno, Zapdos y Moltres con sus ataques propios, Sirfetch'd (Asalto Estelar)...`,
        `  - **Hisui**: Typhlosion (Desfile Infernal), Samurott (Tajo Metralla), Decidueye (Triple Flecha), Braviary (Ala Mística)...`,
        `  - **Paldea**: Tauros (Furia Taurina) y Wooper (veneno y tierra).`,
        `- Al elegir la forma regional en el Laboratorio, el kit cambia para toda la línea en la partida (y en la guía de movimientos de la pausa).`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.62',
      date: Date.UTC(2026, 10, 13, 0, 30),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.62`,
      summary: '¡Formas regionales! 54 formas de Alola, Galar, Hisui y Paldea, jugables y como enemigas.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **54 formas regionales** con todas sus animaciones: 19 de Alola (Vulpix, Raichu, Marowak...), 18 de Galar (Ponyta, Slowpoke, las aves legendarias...), 15 de Hisui (Growlithe, Zorua, Typhlosion...) y 2 de Paldea (Tauros y Wooper).`,
        `- **Jugables**: en el Laboratorio, la fila «Forma regional» elige la forma para toda la línea (Vulpix y Ninetales, Pikachu solo cambia al ser Raichu...). Se abre al jugar 1 partida en su región (Hisui, en Sinnoh). En la partida cambian el dibujo y los **tipos**; los ataques siguen siendo los de su ficha.`,
        `- **Enemigas**: en los mapas de su región también salen estas especies, con su forma y sus tipos (las de Hisui, en Sinnoh).`,
        `- Falta Stunfisk de Galar: no tiene todas sus animaciones todavía.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.61',
      date: Date.UTC(2026, 10, 12, 23, 30),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.61`,
      summary: 'Insignias y títulos por región en el Pasaporte, Desafío semanal en los mapas nuevos y un tour que lo explica todo.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Pasaporte por regiones**: de Hoenn a Paldea, cada región tiene 4 insignias con Polvo Estelar: Viajero (juega allí), Conquistador (completa sus 4 mapas), Señor de las leyendas (ten en tu Liga a sus legendarios) y **Campeón** (completa su Liga). Cada una enseña cuánto te falta.`,
        `- **Título de Campeón**: al completar la Liga de una región, tu ficha de entrenador lo muestra (por ejemplo, «Campeón de Kalos»).`,
        `- **Retos** en el Pasaporte: completar la Torre Mega y el Dominio Gigamax, y hacerlo en Pesadilla.`,
        `- **Desafío del Alfa**: ya puede tocar cualquier mapa de las regiones nuevas que tengas abierto.`,
        `- **Tour de bienvenida nuevo**: explica las regiones, cómo unir Pokémon a tu Liga, las dos formas de conseguir las megas (investigación o compra en el Laboratorio), las formas y evoluciones que piden un reto y los Retos. Sale una vez aunque ya hubieras visto el anterior, y se puede repetir desde Remaster.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.60',
      date: Date.UTC(2026, 10, 12, 23, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.60`,
      summary: '¡Retos! La Torre Mega y el Dominio Gigamax, dos mapas de jefes con megas y Gigamax.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- Nueva pestaña **Extra · Retos** al elegir mapa, que se abre tras la Zona Cero.`,
        `- **Torre Mega**: solo salen las familias que tienen mega, y todo Pokémon que puede megaevolucionar aparece **megaevolucionado**. En la cima esperan **Mega Rayquaza, Mega Mewtwo y Mega Zygarde**.`,
        `- **Dominio Gigamax**: solo salen las familias con Gigamax, y todo Pokémon que puede gigamaxizarse aparece en su **forma Gigamax**. En el núcleo esperan **Eternatus Eternamax, Urshifu Gigamax y Melmetal Gigamax**.`,
        `- Son los mapas más difíciles del juego. Cualquier Pokémon de tu Liga juega como forastero: +20% Pokédólares y +30% Polvo.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.59',
      date: Date.UTC(2026, 10, 12, 22, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.59`,
      summary: '¡Paldea! La novena región: 72 familias jugables con los Pokémon paradoja, 4 mapas y 7 evoluciones nuevas.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Paldea** (Pokémon #906 al #1025, con Kitakami y Arándano): las 72 familias nuevas se pueden unir a tu Liga, cada una con sus 4 ataques, su pasiva, sus evoluciones y su reto. Incluye los **Pokémon paradoja**, los Tesoros Funestos, los Leales, Ogerpon, Terapagos y Pecharunt. Charcadet elige entre Armarouge y Ceruledge.`,
        `- **Evoluciones de Paldea** para líneas antiguas, con su reto: Annihilape, Clodsire, Farigiraf, Dudunsparce, Kingambit, Archaludon y Dipplin (que luego evoluciona en Hydrapple).`,
        `- **4 mapas nuevos**, tras la Torre Rose: Bosque de Kitakami, Cumbre Glaseada, Desierto Asado y Zona Cero. Son los más difíciles del juego y los Pokémon de Paldea solo salen en ellos.`,
        `- **Santuarios**: Templo de los Leales (Ogerpon, Okidogi, Munkidori y Fezandipiti), Santuarios Funestos (Wo-Chien, Chien-Pao, Ting-Lu y Chi-Yu), Casa del Mochi (Pecharunt) y la Cripta de Zona Cero (Koraidon, Miraidon y Terapagos).`,
        `- **Mega Scovillain** ya se puede comprar en el Laboratorio.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.58',
      date: Date.UTC(2026, 10, 12, 20, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.58`,
      summary: '¡Galar! La octava región: 48 familias jugables, 4 mapas, 17 Gigamax y evoluciones de Galar e Hisui.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Galar** (Pokémon #810 al #898, y Enamorus): las 48 familias nuevas se pueden unir a tu Liga, cada una con sus 4 ataques, su pasiva, sus evoluciones y su reto. Applin elige entre Flapple y Appletun, y Kubfu evoluciona en Urshifu.`,
        `- **Evoluciones de Galar e Hisui** para líneas antiguas, con su reto: Obstagoon, Perrserker, Cursola, Sirfetch’d, Mr. Rime, Runerigus, Wyrdeer, Kleavor, Ursaluna, Basculegion, Sneasler y Overqwil. Se eligen al evolucionar, como Scizor o Leafeon.`,
        `- **4 mapas nuevos**, tras el Ultraumbral: Bosque Lumirinto, Tundra Corona, Isla de la Armadura y Torre Rose. Son más difíciles que los de Alola y los Pokémon de Galar solo salen en ellos.`,
        `- **Santuarios**: Claro de las Hadas (Zarude y Enamorus), Templo de la Corona (Calyrex, Glastrier y Spectrier), Torres del Maestro (Kubfu, Regieleki y Regidrago) y la cima de la Torre Rose (Zacian, Zamazenta y Eternatus).`,
        `- **17 Gigamax** con el Dynamax: Rillaboom, Cinderace, Inteleon, Corviknight, Orbeetle, Drednaw, Coalossal, Flapple, Appletun, Sandaconda, Toxtricity, Centiskorch, Hatterene, Grimmsnarl, Alcremie, Urshifu y **Eternatus Eternamax**.`,
        `- **Mega Falinks** ya se puede comprar en el Laboratorio.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.57',
      date: Date.UTC(2026, 10, 12, 18, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.57`,
      summary: '¡Alola! La séptima región: 55 familias jugables con los Ultraentes, 4 mapas y botones nuevos de Mega y Dynamax.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Alola** (Pokémon #722 al #809): las 55 familias se pueden unir a tu Liga, cada una con sus 4 ataques, su pasiva, sus evoluciones y su reto. Incluye los **Ultraentes**, Código Cero, Meltan, Magearna, Marshadow y Zeraora.`,
        `- **Lunala**: Cosmoem puede evolucionar en Solgaleo o, ganando en el Ultraumbral con la línea de Cosmog, en Lunala.`,
        `- **4 mapas nuevos**, tras la Cueva Desenlace: Jungla Umbría, Volcán Wela, Costa de Poni y Ultraumbral. Son más difíciles que los de Kalos y los Pokémon de Alola solo salen en ellos.`,
        `- **Santuarios**: Ruinas de la Abundancia (Tapu Lele y Tapu Bulu), Ruinas del Conflicto (Tapu Koko y Zeraora), Ruinas del Océano (Tapu Fini y Marshadow) y el Altar del Sol y la Luna (Solgaleo, Lunala y Necrozma).`,
        `- **Mega Crabominable** y **Mega Drampa** en el Laboratorio, y **Melmetal Gigamax** con el Dynamax.`,
        `- **Mega Zoroark** en el Laboratorio (y Mega Falinks y Mega Scovillain listas para cuando lleguen Galar y Paldea).`,
        `- **Formas extra opcionales** (diseños de fans de Pokémon Reloaded), elegibles en el Laboratorio: **Mega Raichu (Reloaded)**, **Mega Tyranitar Negro** y **Mega Steelix de Hielo**.`,
        `- **Botones nuevos de MEGA y DYNAMAX**: el de Dynamax se ve gris mientras carga y rosa cuando está listo.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.56',
      date: Date.UTC(2026, 10, 12, 9, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.56`,
      summary: '¡Kalos! La sexta región: 37 familias jugables, 4 mapas, santuarios y 13 megas.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Kalos** (Pokémon #650 al #721): las 37 familias se pueden unir a tu Liga, cada una con sus 4 ataques, su pasiva, sus evoluciones y su reto.`,
        `- **Sylveon**: nueva rama de Eevee. Se desbloquea ganando en el Bosque Novarte con la línea de Eevee.`,
        `- **4 mapas nuevos**, tras la Torre Dragospiral: Bosque Novarte, Cueva Reflejos, Hotel Desolación y Cueva Desenlace. Son más difíciles que los de Teselia y los Pokémon de Kalos solo salen en ellos.`,
        `- **Santuarios**: Árbol de la Vida (Xerneas), Cámara de Diamantes (Diancie), Anillo de Hoopa (Hoopa y Volcanion) y el fondo de la Cueva Desenlace (Yveltal y Zygarde).`,
        `- **Megas de Kalos** en el Laboratorio: Chesnaught, Delphox, Greninja, Pyroar, Meowstic, Malamar, Barbaracle, Dragalge, Hawlucha, Zygarde y Diancie.`,
        `- **Mega Floette** (el Floette de AZ) y **Mega Butterfree**, también en el Laboratorio.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.55',
      date: Date.UTC(2026, 10, 12, 11, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.55`,
      summary: '¡Teselia! La quinta región: 82 familias jugables, 4 mapas, santuarios y megas.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Teselia** (Pokémon #494 al #649): las 82 familias se pueden unir a tu Liga, cada una con sus 4 ataques, su pasiva, sus evoluciones y su reto.`,
        `- **4 mapas nuevos**, tras el Mundo Distorsión: Bosque Azulejo, Desierto Resort, Cueva Electrorroca y Torre Dragospiral. Son más difíciles que los de Sinnoh y los Pokémon de Teselia solo salen en ellos.`,
        `- **Santuarios**: Santuario Abundancia (Tornadus, Thundurus y Landorus), Castillo Viejo (Victini), Cueva Gigante (Kyurem) y la cima de la Torre Dragospiral (Reshiram y Zekrom).`,
        `- **Megas de Teselia**: Emboar, Excadrill, Audino, Scolipede, Scrafty, Eelektross, Chandelure y Golurk, en el Laboratorio. Y **Garbodor Gigamax** con el Dynamax.`,
        `- Los Pokémon de Teselia que no tenían animaciones (Simisear, Tranquill, Blitzle, Throh, Crustle, Tirtouga, Amoonguss, Frillish, Stunfisk, Bouffalant...) usan sprites de Pokémon Reloaded.`,
        `- Los guardianes de los mapas de Sinnoh ya son Pokémon de Sinnoh (antes la ficha enseñaba los de Kanto).`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.54',
      date: Date.UTC(2026, 10, 12, 10, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.54`,
      summary: 'Nueva pestaña «Megas y Gigamax» en la Pokédex.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- La **Pokédex** tiene una pestaña nueva, **Megas y Gigamax**, con todas las megas, sus segundas formas y los Gigamax del juego.`,
        `- Filtros: Todas, Megas, Gigamax y Desbloqueadas; y un botón para verlas en variocolor.`,
        `- Salen todas aunque no las tengas, solo como información: las que te faltan se ven en gris. No desbloquea nada; las megas se siguen comprando en el Laboratorio.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.53',
      date: Date.UTC(2026, 10, 12, 9, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.53`,
      summary: 'Megas con dibujo propio, Charizard Y, Mewtwo X, megas Z y Gigamax.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `Sprites de **Pokémon Reloaded 1.9.2.2**, usados con permiso de sus autores y solo en esta versión privada.`,
        ``,
        `- **16 megas** que se veían como el Pokémon normal ya tienen su dibujo y animaciones: Venusaur, Blastoise, Beedrill, Pidgeot, Pinsir, Gyarados, Ampharos, Scizor, Heracross, Blaziken, Swampert, Aggron, Salamence, Metagross, Garchomp y Abomasnow.`,
        `- **10 megas nuevas** de Leyendas Z-A: Clefable, Victreebel, Starmie, Dragonite, Meganium, Feraligatr, Chimecho, Staraptor, Froslass y Heatran.`,
        `- **Mega Raichu X y Mega Raichu Y**.`,
        `- **Segundas formas**: Mega Charizard Y, Mega Mewtwo X, Mega Raichu Y, Mega Absol Z, Mega Garchomp Z y Mega Lucario Z. Se elige cuál usar en el Laboratorio.`,
        `- **Gigamax**: al usar el Dynamax, Venusaur, Charizard, Blastoise, Butterfree, Pikachu, Meowth, Machamp, Gengar, Kingler, Lapras, Eevee y Snorlax toman su aspecto Gigamax.`,
        `- Todas con su variocolor. Ya no hay megas sin dibujo propio: si una forma no tiene todas sus animaciones, no entra.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.52',
      date: Date.UTC(2026, 10, 12, 8, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.52`,
      summary: 'Las megas se pueden comprar en el Laboratorio con Polvo y con el oro guardado.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- En el **Laboratorio**, al elegir un Pokémon con megaevolución, aparece el botón para comprarla.`,
        `- Cuesta **3,000 de Polvo Estelar + 2,000 de oro**. Las de legendarios (Mewtwo, Latias, Latios, Kyogre, Groudon, Rayquaza, Dialga y Darkrai) cuestan **5,000 de Polvo + 3,000 de oro**.`,
        `- El oro es el que te sobra al terminar las partidas; ahora también se ve en el Laboratorio.`,
        `- Se compra una vez por familia y sirve para siempre. Completar la investigación la sigue desbloqueando como antes.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.51',
      date: Date.UTC(2026, 10, 12, 7, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.51`,
      summary: 'Kyogre y Rayquaza tienen combate propio por fases en sus santuarios.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `**Kyogre** (Cueva Ancestral, Fondo Marino):`,
        `- Fase 1, *Señor de los mares*: Surf (olas que se esquivan saltando), Hidrobomba, Salpicar (deja charcos que hacen daño) y Rayo Hielo.`,
        `- Fase 2, *Llovizna*: empieza a llover y caen rayos sueltos; se suman Trueno y Torbellino.`,
        `- Fase 3, *Pulso Primigenio*: cada cierto tiempo lanza tres olas gigantes; hay que saltarlas.`,
        ``,
        `**Rayquaza** (Cima del Pilar Celeste):`,
        `- Fase 1, *Guardián del cielo*: Pulso Dragón (teledirigido), Ciclón, Velocidad Extrema (embestida en línea) e Hiperrayo.`,
        `- Fase 2, *Bloqueo Aéreo*: más rápido; se suman Enfado (tres embestidas seguidas) y Cometa Draco.`,
        `- Fase 3, *Ascenso del Dragón*: sube al cielo, cae cuatro veces donde estés y termina con un golpe enorme; ponte a cubierto.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.50',
      date: Date.UTC(2026, 10, 12, 6, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.50`,
      summary: 'Los 8 mapas de Hoenn y Sinnoh ya tienen santuario con su legendario.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `Cada mapa nuevo tiene ahora su santuario: busca el portal y entra para pelear contra el legendario.`,
        ``,
        `- **Hoenn**: Claro del Deseo (Jirachi), Cráter del Monte Cenizo (Groudon), Cueva Ancestral (Kyogre) y Cima del Pilar Celeste (Rayquaza).`,
        `- **Sinnoh**: Jardín Floral (Shaymin), Templo Puntaneva (Regigigas), Caverna del Lago (Uxie, Mesprit o Azelf) y Columna Lanza (Dialga, Palkia o Giratina).`,
        `- Groudon y Shaymin usan su combate especial por fases. Los demás usan el combate de legendario normal.`,
        `- Los escenarios reutilizan los de los santuarios originales, con el color de cada lugar.`,
        ``,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.49',
      date: Date.UTC(2026, 10, 12, 5, 30),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.49`,
      summary: 'Mega Darkrai y Dialga Primigenio.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Mega Darkrai** y **Dialga Primigenio** (la forma de Pokémon Mundo Misterioso: Exploradores del Cielo), con sus animaciones del PMD Sprite Repository.`,
        `- Las megas nuevas de Leyendas Z-A (Raichu, Clefable, Victreebel, Starmie, Dragonite, Meganium, Feraligatr, Chimecho, Staraptor, Froslass, Heatran...) entrarán solas cuando tengan animaciones.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.48',
      date: Date.UTC(2026, 10, 12, 5, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.48`,
      summary: 'Gallade, Froslass, Leafeon y Glaceon; las evoluciones de Johto ya se desbloquean; más megas.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Otras evoluciones`,
        `Cumples su reto y, al evolucionar, eliges. Lo ves en la ficha de la Liga, en «Otras evoluciones».`,
        `- **Gallade** (desde Kirlia): derrota a 3.000 Pokémon de Sinnoh con la línea de Ralts.`,
        `- **Froslass** (desde Snorunt): gana en la Ruta Nevada con la línea de Snorunt.`,
        `- **Leafeon** (desde Eevee): gana en el Bosque Vetusto con la línea de Eevee.`,
        `- **Glaceon** (desde Eevee): congela a 5.000 Pokémon con la línea de Eevee.`,
        `- **Arreglo**: las 11 evoluciones de Johto (Crobat, Bellossom, Politoed, Espeon, Umbreon, Slowking, Steelix, Scizor, Kingdra, Porygon2 y Blissey) no se podían desbloquear sin el servidor oficial: ahora sus retos cuentan al acabar cada partida.`,
        ``,
        `# Más megas`,
        `- Con sprite propio: **Mega Lopunny**, **Mega Lucario**, **Mega Gallade** y **Mega Slowbro**.`,
        `- Sin dibujo todavía en el PMD Sprite Repository (funcionan con el sprite normal): Mega Venusaur, Blastoise, Beedrill, Pidgeot, Pinsir, Gyarados, Ampharos, Scizor, Heracross, Garchomp y Abomasnow.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.47',
      date: Date.UTC(2026, 10, 12, 4, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.47: ¡Llega Sinnoh!`,
      summary: 'La cuarta región: 45 familias nuevas, bebés de Sinnoh, evoluciones nuevas para Pokémon antiguos y 4 mapas con Dialga, Palkia y Giratina.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Cuatro mapas nuevos`,
        `Se abren después del **Pilar Celeste**. Solo viven Pokémon de Sinnoh y son **más duros que Hoenn**: enemigos con **+40 % PS y +25 % daño**, y en el Mundo Distorsión **+60 % y +35 %**.`,
        `- **Bosque Vetusto** (Planta, Bicho, Fantasma, Normal), con niebla: Vespiquen, Drifblim y Carnivine, y **Shaymin** al final.`,
        `- **Ruta Nevada** (Hielo, Roca, Acero, Lucha), con granizo: Abomasnow, Mamoswine y Weavile, y **Regigigas** al final.`,
        `- **Lago Valor** (Agua, Eléctrico, Psíquico, Hada): Floatzel, Luxray y Gastrodon, y uno del **trío del lago** al final.`,
        `- **Mundo Distorsión** (Dragón, Fantasma, Siniestro, Acero, Psíquico): Garchomp, Dusknoir y Drapion, y **Dialga, Palkia o Giratina** al final.`,
        `Los bonos de **local** (+10 % daño) y **forastero** (+20 % ₽ y +30 % Polvo) también valen aquí.`,
        ``,
        `# La Liga de Sinnoh`,
        `- **45 familias nuevas** con su papel, pasiva, 4 ataques y reto: Turtwig, Chimchar y Piplup (basta una partida en Sinnoh), Shinx, Gible, Riolu, Cranidos, Shieldon, Spiritomb, Rotom...`,
        `- **Legendarios y singulares**: el trío del lago, Dialga, Palkia, Giratina, Heatran, Regigigas, Cresselia, Darkrai, Shaymin, Manaphy, Phione y **Arceus**.`,
        `- **Burmy** elige entre Wormadam y Mothim al evolucionar.`,
        ``,
        `# Primera forma y familias completas`,
        `- Los bebés de Sinnoh empiezan ahora sus familias: **Happiny** (Chansey y Blissey), **Munchlax** (Snorlax), **Mime Jr.** (Mr. Mime), **Bonsly** (Sudowoodo), **Mantyke** (Mantine), **Budew** (Roselia y Roserade) y **Chingling** (Chimecho). Si ya tenías al mayor, recibes al bebé.`,
        `- Las familias antiguas ganan su evolución de Sinnoh en la partida: **Magnezone, Electivire, Magmortar, Togekiss, Rhyperior, Tangrowth, Lickilicky, Ambipom, Honchkrow, Mismagius, Weavile, Gliscor, Mamoswine, Yanmega, Porygon-Z, Probopass, Dusknoir y Roserade**.`,
        `- La Liga queda en **247 miembros**.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.46',
      date: Date.UTC(2026, 10, 12, 3, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.46`,
      summary: 'Megaevoluciones de Hoenn y Groudon y Kyogre primigenios.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Megas de Hoenn`,
        `Se desbloquean igual que las demás: con la investigación de su familia al 100 %, y se activan en la partida con el botón **MEGA**.`,
        `- Con sus propios sprites: **Mega Sceptile** (Planta/Dragón), Gardevoir, Sableye, Mawile, Medicham, Manectric, Sharpedo, Camerupt, **Mega Altaria** (Dragón/Hada), Banette, Absol, Glalie, Latias, Latios y **Mega Rayquaza**.`,
        `- **Kyogre Primigenio** y **Groudon Primigenio** (Tierra/Fuego).`,
        `- **Mega Blaziken, Swampert, Aggron (Acero), Salamence y Metagross** funcionan igual, pero todavía no tienen dibujo en el PMD Sprite Repository: se ven con el sprite de su forma normal.`,
        `Sprites del PMD Sprite Repository (PMDCollab), uso no comercial con crédito.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.45',
      date: Date.UTC(2026, 10, 12, 2, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.45: ¡Llega Hoenn!`,
      summary: 'La tercera región: 73 familias nuevas en la Liga y 4 mapas con Groudon, Kyogre, Rayquaza y Jirachi.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Cuatro mapas nuevos`,
        `Se abren uno tras otro después de **Ciudad Iris**. En ellos solo viven Pokémon de Hoenn, y en Kanto y Johto siguen solo los suyos.`,
        `- **Bosque Petalia** (Planta, Bicho, Normal, Siniestro): Slaking, Shiftry y Breloom de guardianes y **Jirachi** al final.`,
        `- **Monte Cenizo** (Fuego, Tierra, Roca), con sol y ceniza: Camerupt, Flygon y Aggron, y **Groudon** al final.`,
        `- **Fondo Marino** (Agua, Hielo, Siniestro), con lluvia: Sharpedo, Walrein y Milotic, y **Kyogre** al final.`,
        `- **Pilar Celeste** (Dragón, Volador, Psíquico, Fantasma), el más duro: Salamence, Metagross y Altaria, y **Rayquaza** en la cima.`,
        `Son más difíciles que los de antes: enemigos con **+25 % PS y +15 % daño** (en el Pilar Celeste, +40 % y +25 %).`,
        ``,
        `# Bonos`,
        `- **Local**: con un Pokémon de Hoenn en un mapa de Hoenn, **+10 % de daño**. Muchos retos de la Liga de Hoenn solo cuentan con Pokémon de Hoenn.`,
        `- **Forastero**: con un Pokémon de Kanto o Johto en un mapa de Hoenn, **+20 % Pokédólares** y **+30 % de Polvo Estelar** al acabar.`,
        ``,
        `# La Liga de Hoenn`,
        `- **73 familias nuevas**, cada una con su papel, su pasiva, 4 ataques y su reto de investigación: Treecko, Torchic y Mudkip (basta una partida en Hoenn), Ralts, Aron, Trapinch, Bagon, Beldum, Absol, Feebas...`,
        `- **Evoluciones con elección**: Wurmple (Silcoon o Cascoon), Nincada (Ninjask o Shedinja) y Clamperl (Huntail o Gorebyss).`,
        `- **Legendarios**: los tres Regis, Latias, Latios, Kyogre, Groudon, Rayquaza, Jirachi y Deoxys, con retos difíciles.`,
        `- **Azurill** y **Wynaut** pasan a ser la primera forma de Marill y Wobbuffet. Si ya los tenías, recibes a su bebé.`,
        `- Roselia y Chimecho empiezan como ellos mismos: sus bebés son de Sinnoh.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.44',
      date: Date.UTC(2026, 10, 11, 23, 30),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.44`,
      summary: 'Cada familia empieza por su primera forma: Pichu, Cleffa, Igglybuff, Tyrogue, Smoochum, Elekid y Magby.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# La familia empieza por el bebé`,
        `- **Pikachu, Clefairy, Jigglypuff, Jynx, Electabuzz, Magmar, Hitmonlee, Hitmonchan y Hitmontop** ya no son miembros aparte de la Liga: su familia es la de su bebé, que es el que se investiga, se desbloquea y se elige.`,
        `- **Pichu** evoluciona a Pikachu y a Raichu en la partida, **Cleffa** a Clefairy y Clefable, **Igglybuff** a Jigglypuff y Wigglytuff, **Smoochum** a Jynx, **Elekid** a Electabuzz, **Magby** a Magmar y **Tyrogue** al Hitmon que elijas.`,
        `- Llevas el kit, la pasiva y el reto de investigación del bebé. Como en el juego, al evolucionar puedes quedarte como estás.`,
        `- La Liga pasa de 138 a **129 miembros**: una por familia.`,
        `- Si ya tenías a alguno de esos en tu Liga, recibes a su bebé.`,
        `- Los bebés de otras regiones (Happiny, Munchlax, Azurill...) llegarán con su región.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.43',
      date: Date.UTC(2026, 10, 11, 23, 0),
      tag: 'novedad',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.43`,
      summary: 'Tres objetos nuevos: Fiebre del Oro, Fiebre Estelar y Bonkoin Doble.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `Son **objetos**: salen en las Poké Balls como los demás y no ocupan huecos de movimiento ni de vitamina.`,
        ``,
        `# Fiebre del Oro (rara, hasta 3)`,
        `- Cada **90 s** (75 s con dos, 60 s con tres) llega la **Fiebre del oro**: durante **15 s** llueven monedas a tu alrededor y todos los Pokédólares que recoges valen de **×1,5 a ×2,5**.`,
        `- El múltiplo se sortea en cada fiebre y la **suerte** lo inclina hacia arriba.`,
        ``,
        `# Fiebre Estelar (rara, hasta 3)`,
        `- Cada **120 s** (100 s con dos, 80 s con tres) llega la **Fiebre del Polvo Estelar**: durante **15 s**, cada Pokémon que derrotas da de **×1,5 a ×2,5** del Polvo normal por derrota, también según tu suerte.`,
        `- Las estrellas vuelan hacia ti y ese Polvo se suma al de la partida al terminar.`,
        ``,
        `# Bonkoin Doble (épica, hasta 2)`,
        `- Cada Bonkoin que recoges tiene un **25 %** (50 % con dos) de **valer por dos**. La suerte lo sube un poco.`,
        ``,
        `Mientras dura una fiebre, un aviso arriba enseña cuánto llevas juntado y cuánto le queda.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.42',
      date: Date.UTC(2026, 10, 11, 12, 0),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.42`,
      summary: 'Fuera PokéPath TD antiguo y el Remaster pesa unos 89 MB menos.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Un solo tower defense`,
        `- **PokéBonk TD** es ya el único tower defense: se quitan PokéPath TD original (el segundo botón de su tarjeta en la Sala) y la **Vista clásica**. Tu partida sigue igual, es la misma.`,
        `- El menú del TD tiene un botón menos y **Salir** ocupa su sitio.`,
        ``,
        `# Más ligero`,
        `- La música y los sonidos de PokéSurvivor vienen ya puestos en el juego en vez de cambiarse en marcha, así que se borran la música y los sonidos antiguos de PokéPath que ya no sonaban, dos letras sin usar y su arranque antiguo. La pantalla de carga del TD ya no precarga 50 MB de música.`,
        `- Pokémon Survivors pierde las páginas de su web (Pokédex, guías, tier list, novedades… en cinco idiomas) que el juego no usa.`,
        `- En total, unos **89 MB menos**: PokéBonk TD pasa de 98 a 39 MB y Pokémon Survivors de 86 a 57 MB.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.41',
      date: Date.UTC(2026, 10, 11, 8, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.41`,
      summary: 'Sala de juegos, un entrenador para todo el Remaster y juego de la semana.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Sala de juegos`,
        `- **Más juegos** pasa a ser la **Sala de juegos** (botón dorado **Juegos**): una tarjeta por juego con su dibujo, lo que llevas en él y tus insignias. El último al que jugaste sale grande arriba con **Seguir jugando**.`,
        `- PokéBonk TD es ahora el tower defense principal; PokéPath TD sigue como «PokéPath TD original» en su tarjeta. PokéIsaac online también va en la tarjeta de PokéIsaac.`,
        `- Al entrar en un juego sale un momento la marca del Remaster con tu compañero y tu nivel, y el botón **REMASTER** (dos toques) te devuelve a la Sala.`,
        ``,
        `# Un entrenador para todo`,
        `- **Nivel de entrenador** único: sube con lo que juegas en cualquier juego y con tus insignias. Cada nivel nuevo da Polvo Estelar. Lo ves arriba en Juegos y en el Pasaporte, con tu compañero.`,
        `- **Juego de la semana**: cada semana toca un juego de la Sala, con tres metas y Polvo de premio (pestaña **Desafíos**, junto al Desafío del Alfa).`,
        `- El logo REMASTER del menú abre la Sala. El hub tiene las pestañas Juegos, Pasaporte, Desafíos, Traspaso, Actualizaciones y Acerca de (con los créditos y licencias de cada juego).`,
        `- En el navegador, Actualizaciones enseña tu versión y lo último que ha cambiado.`,
        ``,
        `# Licencias y donaciones`,
        `- Fuera el botón de **Donaciones**: el Remaster es gratis y sin ánimo de lucro, sin anuncios, compras ni donaciones.`,
        `- PokéSurvivor cambió de licencia el 14-10-2026 (PolyForm Noncommercial, solo uso sin fines comerciales). Añadido su aviso de copyright de JPTER78 en sus créditos y en los de la música del TD.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.40',
      date: Date.UTC(2026, 10, 11, 5, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.40`,
      summary: 'PokéBonk TD: efectos de sonido de PokéSurvivor, con disparos según el tipo.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk TD (en pruebas)`,
        `- **Efectos de sonido de PokéSurvivor**: cada Pokémon dispara con el sonido de su tipo (fuego, agua, eléctrico, planta… 18 tipos), los golpes y las caídas de los enemigos suenan como en PokéSurvivor, y el jefe tiene sonido de llegada y de derrota.`,
        `- Los botones y ventanas también usan los sonidos de PokéSurvivor.`,
        `- Los sonidos especiales de algunos Pokémon y habilidades (Chatot, Kyogre, campanas…) se mantienen.`,
        `- Respeta el volumen de efectos y de interfaz de Ajustes y la opción de silenciar proyectiles. La vista clásica sigue con los sonidos de PokéPath.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.39',
      date: Date.UTC(2026, 10, 11, 5, 0),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.39`,
      summary: 'PokéBonk TD: música de PokéSurvivor, cámara al jefe, vibración y botones nuevos.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk TD (en pruebas)`,
        `- **Música de PokéSurvivor** (de JPTER78): cada mundo tiene su pista y cuando aparece un jefe suena la música de jefe. Respeta el volumen de música de Ajustes. La vista clásica sigue con la música de PokéPath.`,
        `- **Cámara al jefe**: cuando llega un jefe y no estás usando el zoom, la cámara se acerca y lo sigue; al caer vuelve al mapa entero. Si tocas el zoom tú, manda el tuyo.`,
        `- **Vibración** al perder una vida y al llegar un jefe (Android).`,
        `- Las dos cosas se apagan en **Ajustes** (botones arriba: Zoom al jefe y Vibración).`,
        `- **Botones** de la Caja, la Mochila, Ajustes, el Draft y el resto de ventanas con el estilo de PokéBonk. «Reroll» ahora es **Volver a tirar**.`,
        `- En vertical, el buscador y el orden de la Caja y la Mochila ya no se pisan.`,
        ``,
        `# Pasaporte`,
        `- Las insignias del tower defense salen como **PokéBonk TD** (cuentan igual las partidas de PokéPath TD, que es la misma) y hay tres nuevas: **Ruta despejada**, **Guardián de la región** y **Coleccionista de estrellas**.`,
        ``,
        `- Probado: exportar e importar con **Traspaso** devuelve la partida del TD igual, con sus opciones.`,
        `- **Android**: esta versión añade el permiso de vibración, así que la actualización trae la app completa (el actualizador la instala como siempre).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.38',
      date: Date.UTC(2026, 10, 11, 4, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.38`,
      summary: 'PokéBonk TD: animaciones de PokéBonk en el combate y Datos con un toque.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk TD (en pruebas)`,
        `- **Animaciones de PokéBonk** en el mapa: tus Pokémon hacen su animación de **ataque** al disparar, los enemigos la de **recibir un golpe** y la de **caer** al ser derrotados (también los variocolor).`,
        `- **Destello** en cada golpe, más grande y amarillo en los críticos.`,
        `- **Números de daño** más grandes, con la letra de PokéBonk; los críticos más grandes todavía.`,
        `- **Toca uno de tus Pokémon en el mapa** para abrir sus Datos. Para moverlo de casilla, arrástralo (o toca su tarjeta).`,
        `- Solo cambia cómo se ve: el daño, el alcance y las casillas son los del juego.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.37',
      date: Date.UTC(2026, 10, 11, 3, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.37`,
      summary: 'PokéBonk TD: ventanas al estilo PokéBonk y pensadas para el móvil.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk TD (en pruebas)`,
        `- **Ventanas a pantalla completa**: Caja, Mochila, Tienda, Mapa, Pokédex, Perfil, Desafío y Ajustes se abren debajo de una barra con su nombre y **Cerrar**.`,
        `- **En vertical se reparten para el móvil** y se leen a buen tamaño: la Tienda en dos columnas con el huevo a lo ancho, el Mapa entero a lo ancho (y la vista de rutas de dos en dos), el Perfil con el retrato arriba y las estadísticas debajo, y la Mochila con más sitio para los objetos.`,
        `- **En horizontal** las ventanas se ven más grandes y aprovechan el ancho.`,
        `- **Avisos y datos del Pokémon** (Fin de ruta, Derrota, Datos, tutorial…) centrados, tan grandes como quepan y con la letra más grande en vertical.`,
        `- Colores y letra de PokéBonk en todas las ventanas. La **Vista clásica** vuelve a la letra y los colores que tengas en Ajustes.`,
        `- Textos en español: el dinero de la oleada («$X esta oleada, $Y/min») y los títulos que salían en inglés en una partida nueva (Fin de ruta, Elección de Draft…).`,
        `- El equipo aprovecha el espacio libre en vertical y el menú de abajo siempre se ve, también en móviles pequeños.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.36',
      date: Date.UTC(2026, 10, 10, 23, 0),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.36`,
      summary: 'PokéBonk TD: todas las rutas revisadas y el mapa se mueve con un dedo al hacer zoom.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk TD (en pruebas)`,
        `- Revisadas las **47 rutas** (también las secretas y las de mapa grande) en la oleada 1 y en la oleada 100: se cargan, se colocan Pokémon y empiezan las oleadas igual que en PokéPath TD.`,
        `- Con zoom, **un dedo** mueve el mapa (si tocas donde no hay un Pokémon y no estás colocando uno). En las rutas de mapa grande se sigue moviendo con un dedo como siempre.`,
        `- Mientras colocas un Pokémon, el botón grande dice **Elige una casilla**; vuelve a tocar su tarjeta para cancelar.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.35',
      date: Date.UTC(2026, 10, 10, 22, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.35`,
      summary: 'PokéBonk TD: Pokémon más grandes, zoom del mapa y datos de la próxima oleada.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk TD (en pruebas)`,
        `- Tus Pokémon y los enemigos se dibujan **más grandes** en el mapa. Solo cambia el dibujo: las casillas, el alcance y los golpes son los mismos.`,
        `- **Zoom del mapa**: con dos dedos, con la rueda del ratón o con los botones **+** y **−** de la esquina. **Ver todo** vuelve al mapa entero. Al abrir la Caja, la Tienda u otra ventana, el mapa se ve entero y vuelve a tu zoom al cerrarla.`,
        `- **Próxima oleada** enseña los datos del enemigo: PS, armadura, velocidad, daño, oro y su habilidad si tiene.`,
        `- Equipo con tarjetas anchas mientras tengas 6 huecos; los huecos que se desbloquean con estrellas van en una tira pequeña.`,
        `- Arreglado: en horizontal, los botones Vista clásica y Salir salían sin texto.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.34',
      date: Date.UTC(2026, 10, 10, 21, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.34`,
      summary: 'PokéBonk TD en pruebas: PokéPath TD con la cara de PokéBonk, pensado para el móvil.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk TD (en pruebas)`,
        `- En **Más juegos** hay una entrada nueva: **PokéBonk TD**. Es PokéPath TD por dentro (mismas rutas, oleadas, estadísticas, habilidades y objetos) con una pantalla nueva al estilo PokéBonk.`,
        `- Usa **la misma partida** que PokéPath TD: puedes jugar en uno o en otro sin perder nada.`,
        `- El mapa se ve grande y nítido. En **vertical**: arriba la ruta, la oleada, las vidas y el dinero; el mapa a lo ancho; debajo tu equipo y abajo los botones de oleada. En **horizontal**: el mapa a toda la altura y el panel a la derecha.`,
        `- Cada Pokémon del equipo tiene su tarjeta: tócala para colocarlo y luego toca una casilla del mapa. Debajo, **+1** para subirlo de nivel (con su precio), su objeto y su información.`,
        `- **Siguiente oleada** grande, y al lado Pausa, velocidad y Auto. La Caja, la Mochila, la Tienda, el Mapa y el resto siguen siendo las del juego; se cierran con **Cerrar**.`,
        `- **Vista clásica** vuelve a la pantalla de siempre de PokéPath dentro del mismo juego.`,
        `- PokéPath TD sigue igual en Más juegos mientras PokéBonk TD está en pruebas.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.33',
      date: Date.UTC(2026, 10, 10, 19, 10),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.33`,
      summary: 'Modo vertical rediseñado en la partida y en el menú: tiempos y datos con su propio espacio.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Partida en vertical`,
        `- Arriba hay una **barra propia** con fondo oscuro: a la izquierda la zona y el reloj de la partida, en el centro la **cuenta atrás grande** y a la derecha el dinero y los precios. Antes eran seis cosas pegadas en una sola línea sobre el escenario.`,
        `- Debajo, el retrato a la izquierda y el minimapa a la derecha, a la misma altura. El contador de capturas va junto al minimapa.`,
        `- La **barra del jefe** va a lo ancho debajo de todo eso (antes salía encogida y cortada en la esquina).`,
        `- MEGA/DMAX debajo del botón de apuntado. El Editor del HUD sigue pudiendo mover y escalar cada cosa.`,
        ``,
        `# Menú principal en vertical`,
        `- Los **eventos** van uno por fila a todo el ancho: el nombre se lee entero y la cuenta atrás no se aprieta.`,
        `- El tiempo de los **Encargos** ya no se corta.`,
        `- La barra de botones de abajo ya no tapa el texto del pie en móviles más bajos.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.32',
      date: Date.UTC(2026, 10, 10, 18, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.32`,
      summary: 'Modo vertical: las pantallas que no encajaban ahora se ven bien con el móvil de pie.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Modo vertical`,
        `- **Subir de nivel**: las tres cartas van una debajo de otra a todo el ancho, con el dibujo a la izquierda. Ya no se corta el texto.`,
        `- **La Liga** (elegir Pokémon): arriba el Pokémon elegido en pequeño, justo debajo la lista para elegir y después sus estadísticas y su kit. El botón **¡Te elijo a ti!** queda fijo abajo.`,
        `- **Elige mapa**: el nombre y la descripción de la región a todo el ancho, los guardianes en cuadrícula y **¡Empezar!** fijo abajo.`,
        `- **Pausa**: las pestañas Movimientos, Objetos y Estadísticas caben enteras.`,
        `- **Ajustes**: las pestañas en dos filas en vez de salirse por la derecha.`,
        `- **Encargos**: el nombre del encargo se ve entero.`,
        `- **Mutación del día**: la medalla ya no tapa el título.`,
        `- En horizontal todo sigue igual (solo se arregla que el tipo del movimiento en las cartas se partía en dos líneas).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.31',
      date: Date.UTC(2026, 10, 10, 15, 50),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.31`,
      summary: 'Auto aprender: al subir de nivel se elige sola la mejor mejora según la especialidad de tu Pokémon.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Auto aprender`,
        `- En la **pausa** hay un botón **Auto aprender**. Si lo activas, al subir de nivel no sale la elección: se escoge sola la mejor opción.`,
        `- Se basa en la **especialidad** del Pokémon que llevas: si su Ataque es mayor, movimientos **físicos** y Proteína; si su Ataque Especial es mayor, movimientos **especiales** y Calcio; si están igualados, lo que encaje con los movimientos que ya tienes.`,
        `- También tiene en cuenta los movimientos de su tipo, tus favoritos, repartir niveles entre movimientos y vitaminas útiles para todos (velocidad de ataque, proyectiles, crítico, área...). Nunca escoge el Incienso Maldito.`,
        `- Se queda guardado para las siguientes partidas. Si lo quitas, vuelve la elección de siempre.`,
        ``,
        `# También en otros juegos`,
        `- **Pokémon Survivors**: botón **Auto aprender** en su pausa (es el mismo ajuste que en PokéBonk). Escoge evoluciones y fusiones primero, movimientos de su tipo, objetos útiles como Cinta Fuerte o Garra Rápida, los de su tipo, y la Baya solo si vas mal de vida.`,
        `- **PokéSurvivor**: **Pausa > Opciones > Auto aprender**. Se fija en si tu Pokémon es fuerte, resistente o rápido para elegir Potencia, Coraza, Reflejos..., y siempre primero lo que lo hace evolucionar.`,
        `- Si sale una elección de otra clase (fusión, vínculo, objeto del cofre...), la decides tú.`,
        `- Los botones **HUD y guía** y **Auto aprender** van juntos en la franja de arriba de la pausa, sin tapar nada.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.30',
      date: Date.UTC(2026, 10, 10, 11, 10),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.30`,
      summary: 'Más juegos enseña la versión de cada juego y PokéPath TD vuelve a PokéBonk Remaster.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `- **Más juegos**: junto a cada nombre sale la versión que trae tu app (por ejemplo PokéIsaac v1.1.1 o PokéPath TD v1.7).`,
        `- **PokéPath TD**: su botón dice **Volver a PokéBonk Remaster**, como PokéPlunder.`,
        `- Llega por el actualizador: solo se bajan esos archivos (unos KB).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.29',
      date: Date.UTC(2026, 10, 10, 8, 0),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.29`,
      summary: 'Actualizador: archivos grandes en trozos, PokéSurvivor estable y dos cambios pequeños de prueba.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Prueba del actualizador`,
        `- **Juego principal**: la etiqueta del logo enseña la subversión (**REMASTER 0.29**).`,
        `- **PokéPlunder**: su botón dice **Volver a PokéBonk Remaster**.`,
        ``,
        `# Actualizador`,
        `- Los archivos de más de 100 MB (el de PokéSurvivor) se publican en trozos y la app los junta y los comprueba. Por eso no se podía publicar la actualización de la 0.28.`,
        `- PokéSurvivor ya no cambia en cada versión si su juego no cambia: no se vuelve a bajar entero.`,
        `- Como cambia la propia app, desde la 0.28 esta versión se instala **completa**: en Android con el instalador de Android, en Windows con su instalador. Las siguientes ya irán solo por archivos.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.28',
      date: Date.UTC(2026, 10, 10, 7, 0),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.28`,
      summary: 'Actualizador propio: solo se bajan los archivos que cambian, con historial de cambios, por módulos, firmado y con vuelta atrás.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Actualizador`,
        `- Al abrir el juego busca si hay versión nueva (sin internet no hace nada y se juega igual).`,
        `- Antes de nada enseña **qué cambia** (el historial de cada subversión) y **qué se descarga**, por partes: el juego principal y cada juego de Más juegos, con su tamaño. Puedes actualizar todo, elegir partes, dejarlo para luego u omitir esa versión.`,
        `- **Solo se bajan los archivos que cambian**, no la app entera. Se guardan aparte y el juego los usa en lugar de los suyos.`,
        `- Si una versión cambia la propia app (no solo el juego), se baja completa: en **Android** se instala con el instalador de Android sin pasar por GitHub; en **Windows** se abre el instalador.`,
        `- **Seguridad**: cada versión va firmada con la misma clave que el APK y cada archivo se comprueba antes de usarlo. Si algo llega dañado, no se instala nada.`,
        `- **Vuelta atrás**: si el juego no arranca con lo nuevo, la app vuelve sola a lo anterior. En **Remaster > Actualizaciones** puedes buscar a mano, ver cada parte y volver a lo que trae la app.`,
        `- Partidas, ajustes y progreso no se tocan nunca.`,
        ``,
        `# Importante`,
        `- Esta versión hay que instalarla **completa una vez** (APK o instalador). A partir de aquí, las siguientes llegan solas.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.27',
      date: Date.UTC(2026, 10, 10, 6, 0),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.27`,
      summary: 'Traspaso de partida móvil-PC, aviso de versión nueva, rachas del Desafío, Overlord en el Pasaporte y todos los gráficos dentro de la app.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Traspaso de partida`,
        `- En **Remaster > Traspaso**: **Exportar partida** crea un archivo .pokebonk con todo (PokéBonk, Pasaporte, Desafío y los juegos de Más juegos). En el otro equipo, **Importar partida** lo carga y reinicia el juego.`,
        `- En Android el archivo va a **Descargas/PokeBonk**. Pásalo al PC (cable, Drive, WhatsApp...) o al revés.`,
        `- Los ajustes de cada equipo (gráficos, controles, HUD, orientación) no se tocan.`,
        ``,
        `# Aviso de versión nueva`,
        `- Al abrir el juego mira la última release de GitHub. Si hay una más nueva, sale un aviso con el botón para descargarla: el **APK** en Android y el **instalador** en Windows.`,
        ``,
        `# Desafío del Alfa`,
        `- **Rachas**: juega el desafío varias semanas seguidas. 3 semanas: +400, 5 semanas: +800, 10 semanas: +2.000 de Polvo.`,
        `- Tabla con **todos tus récords**: puntos, partidas, Alfas y premios de cada semana. La mejor semana va con estrella.`,
        ``,
        `# Pasaporte`,
        `- **Pokémon Overlord** ya da insignias: vencer a 1 líder (+150), a 8 líderes (+300) y a Mewtwo (+500).`,
        ``,
        `# Todo offline`,
        `- Faltaban **710 sprites variocolor**, **773 retratos variocolor** y **54 retratos** de Pokémon a partir del 252. Por eso a veces salía "Faltan gráficos por cargar". Ahora van dentro de la app (del PMD Sprite Repository).`,
        `- Si aún faltara alguno, se usa el más parecido (el sprite normal o el icono) en vez de quedarse esperando.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.26',
      date: Date.UTC(2026, 10, 10, 4, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.26`,
      summary: 'Windows: motor nuevo (Chromium actual). Arreglado el cierre al llegar al menú.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Windows`,
        `- La app de Windows llevaba un navegador interno antiguo (Chromium 130) con un fallo: se cerraba al empezar algunas animaciones del menú. Ahora usa **Electron 44**, con un Chromium actual, como el de Chrome.`,
        `- Por eso el juego se cerraba y reiniciaba al llegar al menú. El arreglo de la 0.25 no bastaba.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.25',
      date: Date.UTC(2026, 10, 10, 3, 10),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.25`,
      summary: 'Windows: arreglado el cierre del juego al llegar al menú.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Windows`,
        `- El juego se cerraba al llegar al menú principal. El informe del fallo lo señaló: el panel **Tu compañero** medía la plataforma bajo tu Pokémon de una forma que tumba el navegador que lleva la app de Windows. Ahora se mide de otra manera y se ve igual.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.24',
      date: Date.UTC(2026, 10, 10, 2, 10),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.24`,
      summary: 'Windows: vuelve a usar la tarjeta gráfica y guarda un informe del fallo para arreglarlo.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Windows`,
        `- Se quita el modo seguro de la 0.23: el fallo pasaba igual sin tarjeta gráfica, así que la gráfica no es la causa. El juego vuelve a usarla siempre.`,
        `- Si el juego se cierra, la app guarda un informe del fallo en **ultimo-fallo.dmp** (carpeta %APPDATA%\\PokeBonk) y recarga como mucho dos veces, sin bucles.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.23',
      date: Date.UTC(2026, 10, 10, 1, 10),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.23`,
      summary: 'Windows: modo seguro automático si el juego se cierra al arrancar.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Windows: modo seguro automático`,
        `- En algunos PC Windows cerraba el proceso del juego nada más arrancar y la ventana se quedaba morada.`,
        `- Ahora, si el juego se cierra en los primeros 90 segundos, la app **se reinicia sola** con un modo más seguro y se queda con el primero que funciona:`,
        `- Nivel 1: sin la protección que choca con programas que se meten en otras apps (capas de grabación, antivirus).`,
        `- Nivel 2: además, motor gráfico OpenGL.`,
        `- Nivel 3: además, sin tarjeta gráfica (va más lento, pero abre).`,
        `- El nivel que se usa queda apuntado en **registro.txt** (carpeta %APPDATA%\\PokeBonk).`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.22',
      date: Date.UTC(2026, 10, 10, 0, 30),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.22`,
      summary: 'Windows: arreglada la pantalla morada al abrir el juego y nuevo registro de errores.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Windows`,
        `- Con algunas gráficas AMD la ventana se quedaba **morada** sin mostrar el menú. Se quitaron dos opciones de GPU que lo provocaban; Chromium ya las decide solo.`,
        `- **Registro de errores**: la app guarda lo que falla en **registro.txt**, dentro de la carpeta **%APPDATA%\\PokeBonk** (escríbelo en la barra del Explorador). Se reinicia cada vez que abres el juego.`,
        `- **F12** o **Ctrl + Mayús + I** abren las herramientas de desarrollo.`,
        `- Cada compilación de Windows se abre sola en GitHub antes de publicarse para comprobar que llega al menú.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.21',
      date: Date.UTC(2026, 10, 9, 23),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.21`,
      summary: 'Arreglado: en Windows salía el aviso de copia no oficial y no se podía jugar.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Corrección`,
        `- **Windows**: al abrir el juego salía "Esta copia de PokéBonk no es la oficial" y no dejaba jugar. El juego solo se abría desde ciertas direcciones y la de la app de Windows no estaba entre ellas. Ya está añadida.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.20',
      date: Date.UTC(2026, 10, 10, 2),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `PokéBonk Remaster: versión ${OFICIAL} oficial - Subversión 0.20`,
      summary: 'Nace PokéBonk Remaster: Pasaporte de entrenador, Desafío del Alfa semanal y tour de bienvenida.',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# PokéBonk Remaster`,
        `- Nuevo nombre para esta versión: **PokéBonk Remaster**. Lo verás bajo el logo, en el nombre de la app y en la ventana de Windows.`,
        `- Nuevo botón **Remaster** en la barra del menú, bajo Más juegos.`,
        ``,
        `# Pasaporte de entrenador`,
        `- Lee tu progreso en **PokéIsaac**, **Pokémon Survivors**, **PokéSurvivor**, **Pokelike**, **PokéPath TD** y **PokéPlunder** y te da **insignias**.`,
        `- Cada insignia da **Polvo Estelar** en PokéBonk **una sola vez** (de 150 a 500). Con insignias en 5 juegos distintos ganas la gran insignia: **+1.500**.`,
        `- Se revisa al abrir el Pasaporte y al volver al menú. Si estás en partida, se cobra al terminarla.`,
        ``,
        `# Desafío del Alfa`,
        `- Cada semana (de lunes a lunes) hay reglas fijas: un **Pokémon** de tu Liga, un **mapa** y una **dificultad**. Sin objetos de la Mochila.`,
        `- Puntos: cada baja y cada segundo **1**, cada Alfa **250**, cada guardián **500** y ganar **3.000**. Se guarda tu récord de la semana.`,
        `- Premios de la semana: terminar una partida (+150), 5.000 puntos (+300), 3 Alfas en una partida (+300) y ganar (+600).`,
        `- Pulsa **Jugar el desafío** y la partida empieza con esas reglas. Reintentar desde la pausa también cuenta.`,
        ``,
        `# Tour de bienvenida`,
        `- La primera vez que abres el juego, un tour corto te enseña Mega y Dynamax, el Laboratorio individual, Más juegos, el Pasaporte, el Desafío y el editor del HUD. Se puede repetir desde **Remaster**.`,
        ``,
        `# Corrección`,
        `- **PokéPath TD** y **PokéPlunder** guardaban en el mismo sitio y se pisaban la partida. Ahora cada uno tiene su guardado; lo que tenías se pasa solo al juego que toca.`,
        PIE
      ].join('\n')
    },
    {
      id: 'moportor6-sub-0.19',
      date: Date.UTC(2026, 10, 9, 21),
      tag: 'parche',
      pinned: false,
      sub: true,
      author: AUTOR,
      title: `Versión ${OFICIAL} oficial - Subversión 0.19`,
      summary: 'Soporte extendido: mando en todos los juegos y opciones de PC (Súper resolución, motor gráfico, FPS sin tope).',
      body: [
        `Subversión **no oficial** hecha por moportor6 sobre la versión **${OFICIAL}** oficial. La versión oficial no cambia.`,
        ``,
        `# Versión de Windows`,
        `- Nueva pestaña **Ajustes > Pantalla** (la que trae PokéBonk para su versión de escritorio): modo de pantalla, tamaño de la ventana, resolución, monitor y **motor gráfico** (Direct3D 11, OpenGL o Vulkan).`,
        `- **Resolución Súper 1,5× y Súper 2×**: el juego se dibuja con más píxeles que tu pantalla y luego se reduce. Bordes mucho más finos, para gráficas potentes.`,
        `- **FPS sin tope**: quita el V-Sync para pasar de los hercios de tu pantalla. Es lo que necesitan la generación de fotogramas de AMD (**AFMF 2**) y Lossless Scaling. Se aplica al reiniciar.`,
        `- **Límite de FPS** con 165 y 240.`,
        `- El juego usa siempre la gráfica potente y dibuja todo por GPU.`,
        ``,
        `# Generación de fotogramas (AMD)`,
        `- En **Pantalla**: Motor gráfico **Direct3D 11**, **FPS sin tope: Sí** y reiniciar. En Gráficos, Límite de FPS en **Sin límite**.`,
        `- Juega en **pantalla completa** (F11).`,
        `- En **AMD Software: Adrenalin**, activa **AMD Fluid Motion Frames 2** (en Juegos, para PokeBonk o para todo). La capa de Adrenalin (Alt+R) muestra si está funcionando.`,
        ``,
        `# Mando en todos los juegos`,
        `- **PokéBonk**, **PokéIsaac**, **PokéSurvivor**, **Pokémon Survivors** y **Pokémon Overlord** ya traían mando.`,
        `- **Pokelike**, **PokéPath TD** y **PokéPlunder** se juegan con ratón: ahora el mando mueve un **cursor**. Stick: mover. Cruceta: saltar al botón más cercano. **A**: clic (mantén para arrastrar). **X**: clic derecho. **B**: atrás. **LB/RB**: subir y bajar listas. **Start**: Enter. **Select** dos veces: Volver a PokéBonk.`,
        `- La ventana **Más juegos** también se maneja con el mando.`,
        ``,
        `# Corrección`,
        `- **PokéPlunder** sí tiene español: cámbialo en su menú de ajustes (el engranaje), en LANGUAGE.`,
        PIE
      ].join('\n')
    },
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
      sub: '0.77',
      date: '2026-11-14',
      title: 'Gimnasios y rival.',
      notes: [
        ['new', 'Gimnasios: 68 líderes y kahunas en 9 regiones, con medallas y Polvo.'],
        ['new', 'Tu rival Azul aparece en la zona 2 y evoluciona con cada encuentro.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.76',
      date: '2026-11-13',
      title: 'Escuderos, clima, oro en el Laboratorio y premios de Pokédex.',
      notes: [
        ['new', 'Escuderos en todos los mapas, con aviso y marca azul.'],
        ['balance', 'El clima de la zona también afecta a los salvajes (±15 % de daño según su tipo), con aviso al empezar.'],
        ['new', 'En el Laboratorio se cambia el oro guardado por Polvo Estelar (10 ₽ = 1).'],
        ['new', 'Insignias «Explorador de X» (mitad de la Pokédex regional) en todas las regiones, y «Campeón» para Kanto y Johto.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.75',
      date: '2026-11-13',
      title: 'Curanderos más numerosos, con escudo y autocuración.',
      notes: [
        ['balance', 'Hasta 2-4 curanderos a la vez según el avance, y salen más seguido.'],
        ['new', 'Los curanderos se curan a sí mismos y dan un escudo pequeño a los salvajes cercanos.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.74',
      date: '2026-11-13',
      title: 'Oro ahorrado solo fuera de la partida; curanderos más visibles.',
      notes: [
        ['balance', 'El oro que sobra se acumula para la tienda de Megas, pero ya no se suma al empezar la partida siguiente.'],
        ['balance', 'Los curanderos tienen el doble de PS y no salen en los primeros 25 s.'],
        ['fix', 'El aviso de curandero sale cuando se acerca uno, no al aparecer lejos.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.73',
      date: '2026-11-13',
      title: 'Zonas de 15 minutos.',
      notes: [
        ['balance', 'Cada zona del modo clásico dura 15 minutos (antes 10) en todos los mapas.'],
        ['balance', 'Los 5 minutos nuevos tienen su propio guion de eventos: más Alfas, hordas, élites, tótem e invocador.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.72',
      date: '2026-11-13',
      title: 'Forma regional legible en tema oscuro.',
      notes: [
        ['fix', 'El recuadro de Forma regional ya no sale con el texto casi invisible en el tema oscuro.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.71',
      date: '2026-11-13',
      title: 'Curanderos en todos los mapas.',
      notes: [
        ['new', 'Los salvajes curanderos pueden salir en cualquier mapa (1-3 a la vez según el avance), con aviso y marca verde.'],
        ['balance', 'Su cura sube poco a poco con cada mapa (hasta +60 %) y con la dificultad.'],
        ['new', 'Los Alfas de apoyo curanderos te curan un 2 % cada 8 s (más con vínculo y evoluciones).']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.70',
      date: '2026-11-13',
      title: 'Cooperativo en tu Wi-Fi.',
      notes: [
        ['coop', 'Nuevo **Cooperativo en tu Wi-Fi**: crea una sala en un móvil y únete desde otros de la misma red, sin internet ni cuenta.'],
        ['coop', 'Es el cooperativo original (sala, listo, mapa y dificultad, chat, partida compartida y vuelta a la sala) para 2-4 entrenadores.'],
        ['coop', 'La sala se encuentra sola en la Wi-Fi; si no, se puede escribir la dirección del anfitrión.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.69',
      date: '2026-11-13',
      title: 'Repaso visual de menús y HUD.',
      notes: [
        ['fix', 'Elegir compañero: las tarjetas no tapan a los Pokémon y el botón cabe en pantallas bajas.'],
        ['fix', 'Textos claros sobre fondo claro (Bonkoins, Tienda, etiquetas, regiones bloqueadas).'],
        ['fix', 'Botón «Editar» de Builds, nombres largos de ataque y tooltips altos ya no se cortan.'],
        ['fix', 'En partida, el minimapa y el aviso del objetivo dejan de montarse sobre los botones y los ataques.'],
        ['fix', 'Las barras de desplazamiento no se dibujan encima de tooltips y ventanas.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.68',
      date: '2026-11-13',
      title: 'Regiones deslizables e iconos de mega y Gigamax.',
      notes: [
        ['fix', 'En Elige mapa, las filas de regiones y de mapas se pueden deslizar en el móvil.'],
        ['new', 'Icono MEGA o DYNAMAX en las fases de la cadena de evolución que los tienen.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.67',
      date: '2026-11-12',
      title: 'Forma regional en la Liga y lista más cómoda.',
      notes: [
        ['new', 'Selector de forma regional (con retrato y tipos) en la ficha de la Liga.'],
        ['better', 'La lista de la Liga se desplaza entera: al bajar solo quedan los Pokémon.'],
        ['new', 'El modo de pruebas también abre los aspectos del Vestidor y las formas regionales.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.66',
      date: '2026-11-12',
      title: 'Modo de pruebas temporal.',
      notes: [
        ['new', 'Botón temporal para desbloquear todos los Pokémon de la Liga, con copia y botón para restaurar tu Liga.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.65',
      date: '2026-11-12',
      title: 'Colores de las fusiones regionales y retrato regional.',
      notes: [
        ['better', '13 fusiones regionales con los colores, partículas y estado de su tipo.'],
        ['fix', 'El marcador de la partida enseña el retrato y los tipos de la forma regional.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.64',
      date: '2026-11-12',
      title: 'Fusiones de firma para las formas regionales.',
      notes: [
        ['new', '37 fusiones de firma nuevas, una por línea con forma regional.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.63',
      date: '2026-11-12',
      title: 'Ataques propios para las formas regionales.',
      notes: [
        ['new', 'Kit propio de 4 ataques para cada línea con forma regional, con sus tipos y ataques característicos.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.62',
      date: '2026-11-12',
      title: 'Formas regionales.',
      notes: [
        ['new', '54 formas regionales (Alola, Galar, Hisui y Paldea): elígelas en el Laboratorio y enfréntalas en los mapas de su región.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.61',
      date: '2026-11-12',
      title: 'Pasaporte por regiones y tour nuevo.',
      notes: [
        ['new', 'Pasaporte: 4 insignias por región (con el título de Campeón) y 4 de Retos.'],
        ['better', 'El Desafío del Alfa usa también los mapas de las regiones nuevas.'],
        ['better', 'Tour de bienvenida actualizado: regiones, Liga, megas, formas especiales y Retos.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.60',
      date: '2026-11-12',
      title: 'Retos: Torre Mega y Dominio Gigamax.',
      notes: [
        ['new', 'Torre Mega: enemigos megaevolucionados y Mega Rayquaza, Mega Mewtwo y Mega Zygarde en la cima.'],
        ['new', 'Dominio Gigamax: enemigos Gigamax y Eternatus Eternamax, Urshifu y Melmetal en el núcleo.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.59',
      date: '2026-11-12',
      title: 'Paldea, la novena región.',
      notes: [
        ['new', 'Paldea: 72 familias jugables (con los Pokémon paradoja), 4 mapas y 4 santuarios con sus legendarios.'],
        ['new', '7 evoluciones de Paldea para líneas antiguas, con reto.'],
        ['new', 'Mega Scovillain en el Laboratorio.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.58',
      date: '2026-11-12',
      title: 'Galar, la octava región.',
      notes: [
        ['new', 'Galar: 48 familias jugables, 4 mapas y 4 santuarios con sus legendarios.'],
        ['new', '12 evoluciones de Galar e Hisui para líneas antiguas, con reto.'],
        ['new', '17 Gigamax de Galar (con Eternatus Eternamax) y Mega Falinks.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.57',
      date: '2026-11-12',
      title: 'Alola, la séptima región.',
      notes: [
        ['new', 'Alola: 55 familias jugables (con los Ultraentes), 4 mapas y 4 santuarios con sus legendarios.'],
        ['new', 'Lunala como evolución alternativa de Cosmoem.'],
        ['new', 'Mega Crabominable, Mega Drampa y Melmetal Gigamax.'],
        ['new', 'Mega Zoroark y formas extra opcionales: Mega Raichu (Reloaded), Mega Tyranitar Negro y Mega Steelix de Hielo.'],
        ['better', 'Botones de MEGA y DYNAMAX con su propio diseño.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.56',
      date: '2026-11-12',
      title: 'Kalos, la sexta región.',
      notes: [
        ['new', 'Kalos: 37 familias jugables, 4 mapas y 4 santuarios con sus legendarios.'],
        ['new', 'Sylveon como nueva evolución de Eevee.'],
        ['new', 'Megas de Chesnaught, Delphox, Greninja, Pyroar, Meowstic, Malamar, Barbaracle, Dragalge, Hawlucha, Zygarde, Diancie, Floette y Butterfree.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.55',
      date: '2026-11-12',
      title: 'Teselia, la quinta región.',
      notes: [
        ['new', 'Teselia: 82 familias jugables, 4 mapas y 4 santuarios con sus legendarios.'],
        ['new', 'Megas de Emboar, Excadrill, Audino, Scolipede, Scrafty, Eelektross, Chandelure y Golurk; Garbodor Gigamax.'],
        ['fix', 'Los guardianes de los mapas de Sinnoh ya son de Sinnoh.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.54',
      date: '2026-11-12',
      title: 'Pestaña «Megas y Gigamax» en la Pokédex.',
      notes: [
        ['new', 'Pokédex: pestaña con todas las megas y Gigamax, con filtros y variocolor; las que no tienes se ven en gris.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.53',
      date: '2026-11-12',
      title: 'Megas con dibujo propio, formas X/Y/Z y Gigamax.',
      notes: [
        ['new', '16 megas ya tienen su dibujo y 10 megas nuevas de Leyendas Z-A (sprites de Pokémon Reloaded).'],
        ['new', 'Mega Raichu X y Y, Mega Charizard Y, Mega Mewtwo X y megas Z de Absol, Garchomp y Lucario, a elegir en el Laboratorio.'],
        ['new', 'Aspecto Gigamax con el Dynamax para 12 Pokémon.'],
        ['fix', 'Las megas sin dibujo propio ya no entran.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.52',
      date: '2026-11-12',
      title: 'Comprar megas en el Laboratorio.',
      notes: [
        ['new', 'Las megas se compran en el Laboratorio: 3,000 Polvo + 2,000 oro (legendarias: 5,000 + 3,000).'],
        ['new', 'El oro guardado de las partidas se ve en el Laboratorio.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.51',
      date: '2026-11-12',
      title: 'Combates por fases de Kyogre y Rayquaza.',
      notes: [
        ['new', 'Kyogre: Surf, Hidrobomba, Salpicar, Rayo Hielo; lluvia con rayos en la fase 2; Pulso Primigenio en la fase 3.'],
        ['new', 'Rayquaza: Pulso Dragón, Ciclón, Velocidad Extrema, Hiperrayo; Enfado y Cometa Draco en la fase 2; Ascenso del Dragón en la fase 3.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.50',
      date: '2026-11-11',
      title: 'Santuarios en los mapas de Hoenn y Sinnoh.',
      notes: [
        ['new', 'Los 8 mapas de Hoenn y Sinnoh tienen santuario con su legendario.'],
        ['new', 'Groudon y Shaymin tienen combate por fases; el resto, combate de legendario normal.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.49',
      date: '2026-11-11',
      title: 'Mega Darkrai y Dialga Primigenio.',
      notes: [
        ['new', 'Mega Darkrai y Dialga Primigenio, con animaciones.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.48',
      date: '2026-11-11',
      title: 'Otras evoluciones y más megas.',
      notes: [
        ['new', 'Gallade, Froslass, Leafeon y Glaceon, con su reto, para elegirlos al evolucionar.'],
        ['fix', 'Las 11 evoluciones de Johto ya se desbloquean sin el servidor oficial.'],
        ['new', 'Megas de Lopunny, Lucario, Gallade y Slowbro con sprite; otras 11 con el sprite normal.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.47',
      date: '2026-11-11',
      title: '¡Llega Sinnoh! 45 familias, 4 mapas y evoluciones nuevas.',
      notes: [
        ['new', 'Mapas de Sinnoh: Bosque Vetusto, Ruta Nevada, Lago Valor y Mundo Distorsión, con Shaymin, Regigigas, el trío del lago y Dialga, Palkia o Giratina.'],
        ['new', 'Liga de Sinnoh: 45 familias con kit, pasiva, evolución y reto, Arceus incluido.'],
        ['new', 'Evoluciones de Sinnoh para familias antiguas (Magnezone, Togekiss, Weavile, Mamoswine...).'],
        ['better', 'Happiny, Munchlax, Mime Jr., Bonsly, Mantyke, Budew y Chingling empiezan sus familias.'],
        ['balance', 'Los mapas de Sinnoh son más duros que los de Hoenn (+40 % PS y +25 % daño; Mundo Distorsión, +60 % y +35 %).']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.46',
      date: '2026-11-11',
      title: 'Megas de Hoenn y Groudon y Kyogre primigenios.',
      notes: [
        ['new', '20 megas de Hoenn y Groudon y Kyogre primigenios, con la investigación de su familia al 100 %.'],
        ['better', 'Blaziken, Swampert, Aggron, Salamence y Metagross se ven con su sprite normal hasta que haya dibujo de su mega.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.45',
      date: '2026-11-11',
      title: '¡Llega Hoenn! 73 familias y 4 mapas nuevos.',
      notes: [
        ['new', 'Mapas de Hoenn: Bosque Petalia, Monte Cenizo, Fondo Marino y Pilar Celeste, con Jirachi, Groudon, Kyogre y Rayquaza al final.'],
        ['new', 'Liga de Hoenn: 73 familias con kit, pasiva, evolución y reto, legendarios incluidos.'],
        ['new', 'Bono de local (+10 % daño con Pokémon de Hoenn) y de forastero (+20 % ₽ y +30 % Polvo con Pokémon de Kanto o Johto).'],
        ['balance', 'Los mapas de Hoenn son más duros (+25 % PS y +15 % daño; Pilar Celeste, +40 % y +25 %).'],
        ['better', 'Los Pokémon de Hoenn solo salen en sus mapas; Azurill y Wynaut empiezan las familias de Marill y Wobbuffet.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.44',
      date: '2026-11-11',
      title: 'Cada familia empieza por su primera forma.',
      notes: [
        ['better', 'Pikachu, Clefairy, Jigglypuff, Jynx, Electabuzz, Magmar y los Hitmon se consiguen con su bebé (Pichu, Cleffa, Igglybuff, Smoochum, Elekid, Magby, Tyrogue), que evoluciona en la partida.'],
        ['better', 'La Liga queda en 129 miembros, uno por familia. Quien ya los tenía recibe a su bebé.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.43',
      date: '2026-11-11',
      title: 'Fiebre del Oro, Fiebre Estelar y Bonkoin Doble.',
      notes: [
        ['new', 'Objeto Fiebre del Oro: cada 90 s, 15 s de lluvia de monedas y Pokédólares ×1,5 a ×2,5 según la suerte.'],
        ['new', 'Objeto Fiebre Estelar: cada 120 s, 15 s en los que cada derrota da ×1,5 a ×2,5 de Polvo Estelar.'],
        ['new', 'Objeto Bonkoin Doble: 25 % (hasta 50 %) de que una Bonkoin cuente por dos.'],
        ['better', 'No ocupan huecos de movimiento ni de vitamina, y un aviso enseña lo juntado en cada fiebre.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.42',
      date: '2026-11-11',
      title: 'Un solo tower defense y unos 89 MB menos.',
      notes: [
        ['better', 'PokéBonk TD es el único tower defense: fuera PokéPath TD original y la vista clásica.'],
        ['better', 'Borrados la música, sonidos y letras de PokéPath que ya no se usaban: el TD pesa 39 MB en vez de 98.'],
        ['better', 'Pokémon Survivors sin las páginas de su web que el juego no usa: 29 MB menos.'],
        ['fix', 'La carga del TD ya no precarga la música antigua.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.41',
      date: '2026-11-11',
      title: 'Sala de juegos y entrenador único.',
      notes: [
        ['new', 'Sala de juegos: una tarjeta por juego con tu progreso y Seguir jugando.'],
        ['new', 'Nivel de entrenador para todo el Remaster y juego de la semana con premios.'],
        ['better', 'Marca común al entrar en cada juego y botón REMASTER para volver a la Sala.'],
        ['fix', 'Fuera las donaciones; licencia y aviso de copyright de PokéSurvivor en los créditos.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.40',
      date: '2026-11-10',
      title: 'PokéBonk TD: sonidos nuevos.',
      notes: [
        ['new', 'PokéBonk TD: efectos de sonido de PokéSurvivor, con disparos según el tipo del Pokémon.'],
        ['better', 'PokéBonk TD: sonidos de golpe, caída y jefe, y de botones y ventanas.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.39',
      date: '2026-11-10',
      title: 'PokéBonk TD: música y jefes.',
      notes: [
        ['new', 'PokéBonk TD: música de PokéSurvivor por mundo y música de jefe.'],
        ['new', 'PokéBonk TD: la cámara sigue al jefe y vibración al perder vida (se apagan en Ajustes).'],
        ['better', 'PokéBonk TD: botones de las ventanas al estilo PokéBonk; tres insignias nuevas en el Pasaporte.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.38',
      date: '2026-11-10',
      title: 'PokéBonk TD: combate con animaciones.',
      notes: [
        ['new', 'PokéBonk TD: animaciones de ataque, golpe y caída de PokéBonk en el mapa.'],
        ['better', 'PokéBonk TD: destello en cada golpe y números de daño más grandes.'],
        ['new', 'PokéBonk TD: toca un Pokémon del mapa para ver sus Datos.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.37',
      date: '2026-11-10',
      title: 'PokéBonk TD: ventanas nuevas.',
      notes: [
        ['better', 'PokéBonk TD: ventanas a pantalla completa con los colores y la letra de PokéBonk.'],
        ['better', 'PokéBonk TD: en vertical, Tienda, Mapa, Perfil y Mochila repartidas para el móvil.'],
        ['fix', 'PokéBonk TD: textos que salían en inglés y dinero de la oleada en español.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.36',
      date: '2026-11-10',
      title: 'PokéBonk TD: todas las rutas.',
      notes: [
        ['better', 'PokéBonk TD: las 47 rutas revisadas, también las secretas y las de mapa grande.'],
        ['better', 'PokéBonk TD: con zoom, el mapa se mueve con un dedo.'],
        ['better', 'PokéBonk TD: el botón grande avisa cuando estás colocando un Pokémon.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.35',
      date: '2026-11-10',
      title: 'PokéBonk TD: mapa más claro.',
      notes: [
        ['better', 'PokéBonk TD: Pokémon más grandes en el mapa y zoom con dos dedos o con + y −.'],
        ['new', 'PokéBonk TD: datos del enemigo de la próxima oleada.'],
        ['fix', 'PokéBonk TD: botones Vista clásica y Salir sin texto en horizontal.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.34',
      date: '2026-11-10',
      title: 'PokéBonk TD en pruebas.',
      notes: [
        ['new', '**PokéBonk TD** en Más juegos: PokéPath TD con pantalla nueva para el móvil, misma partida y mismos valores.'],
        ['new', 'Tarjetas del equipo con subir de nivel y su precio, y botón grande de Siguiente oleada.'],
        ['better', 'Vista clásica a un toque, por si prefieres la pantalla de siempre.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.33',
      date: '2026-11-10',
      title: 'Vertical rediseñado.',
      notes: [
        ['better', 'Partida en vertical: barra de arriba con la cuenta atrás grande, zona, reloj y dinero bien separados.'],
        ['better', 'Partida en vertical: barra del jefe a lo ancho; retrato y minimapa a la misma altura.'],
        ['better', 'Menú en vertical: eventos uno por fila y la cuenta atrás de los Encargos entera.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.32',
      date: '2026-11-10',
      title: 'Modo vertical mejorado.',
      notes: [
        ['better', 'En vertical, las cartas de subir de nivel van a todo el ancho y se leen enteras.'],
        ['better', 'En vertical, La Liga y Elige mapa ordenadas para el móvil, con el botón de empezar siempre a mano.'],
        ['fix', 'En vertical, pestañas de la pausa y de Ajustes, nombres de los Encargos y título de la Mutación del día ya no se cortan.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.31',
      date: '2026-11-10',
      title: 'Auto aprender.',
      notes: [
        ['new', '**Auto aprender** en la pausa: elige sola la mejor mejora según si tu Pokémon es físico, especial o mixto.'],
        ['new', 'Auto aprender también en Pokémon Survivors y PokéSurvivor.'],
        ['better', 'Botones de la pausa juntos y sin tapar texto.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.30',
      date: '2026-11-10',
      title: 'Versiones en Más juegos.',
      notes: [
        ['new', 'Más juegos enseña la versión de cada juego.'],
        ['better', 'PokéPath TD: el botón dice "Volver a PokéBonk Remaster".']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.29',
      date: '2026-11-10',
      title: 'Prueba del actualizador.',
      notes: [
        ['better', 'El logo enseña la subversión (REMASTER 0.29).'],
        ['better', 'PokéPlunder: el botón dice "Volver a PokéBonk Remaster".'],
        ['fix', 'Actualizador: archivos de más de 100 MB en trozos (no se podía publicar).'],
        ['fix', 'PokéSurvivor ya no se vuelve a bajar en cada versión.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.28',
      date: '2026-11-10',
      title: 'Actualizador propio.',
      notes: [
        ['new', 'Actualizaciones por archivos: solo se baja lo que cambia, por partes del juego.'],
        ['new', 'Historial de cambios antes de actualizar, y Remaster > Actualizaciones.'],
        ['new', 'Android instala el APK nuevo sin pasar por GitHub cuando cambia la app.'],
        ['better', 'Actualizaciones firmadas y comprobadas, con vuelta atrás si algo falla.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.27',
      date: '2026-11-10',
      title: 'Traspaso, avisos y gráficos completos.',
      notes: [
        ['new', '**Traspaso** de partida entre el móvil y el PC (Remaster > Traspaso).'],
        ['new', 'Aviso de versión nueva en Android y Windows.'],
        ['new', 'Desafío del Alfa: rachas con premio y tabla de récords.'],
        ['new', 'Pokémon Overlord da insignias en el Pasaporte.'],
        ['fix', 'Todos los sprites y retratos variocolor dentro de la app: ya no sale "Faltan gráficos".']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.26',
      date: '2026-11-09',
      title: 'Windows: motor nuevo.',
      notes: [
        ['fix', 'Windows: Electron 44 (Chromium actual). Ya no se cierra al llegar al menú.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.25',
      date: '2026-11-09',
      title: 'Windows: menú arreglado.',
      notes: [
        ['fix', 'Windows: el juego ya no se cierra al llegar al menú (panel Tu compañero).']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.24',
      date: '2026-11-09',
      title: 'Windows: informe de fallos.',
      notes: [
        ['fix', 'Windows: vuelve a usar la tarjeta gráfica (fuera el modo seguro).'],
        ['new', 'Windows: informe del fallo en ultimo-fallo.dmp.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.23',
      date: '2026-11-09',
      title: 'Windows: modo seguro.',
      notes: [
        ['fix', 'Windows: si el juego se cierra al arrancar, la app se reinicia sola en modo seguro.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.22',
      date: '2026-11-09',
      title: 'Windows: pantalla morada.',
      notes: [
        ['fix', 'Windows: ya no se queda la pantalla morada con gráficas AMD.'],
        ['new', 'Windows: registro de errores en %APPDATA%\\PokeBonk\\registro.txt.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.21',
      date: '2026-11-09',
      title: 'Windows arreglado.',
      notes: [
        ['fix', 'Windows: ya no sale el aviso de copia no oficial al abrir el juego.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.20',
      date: '2026-11-10',
      title: 'PokéBonk Remaster.',
      notes: [
        ['new', 'Nuevo nombre: **PokéBonk Remaster**, con botón **Remaster** en el menú.'],
        ['new', '**Pasaporte de entrenador**: insignias por tu progreso en los otros juegos, con Polvo Estelar.'],
        ['new', '**Desafío del Alfa** semanal con reglas fijas, récord y premios.'],
        ['new', 'Tour de bienvenida la primera vez.'],
        ['fix', 'PokéPath TD y PokéPlunder ya no comparten guardado.']
      ]
    },
    {
      oficial: OFICIAL,
      sub: '0.19',
      date: '2026-11-09',
      title: 'Soporte extendido: mando y PC.',
      notes: [
        ['new', 'Windows: pestaña **Pantalla** con resolución **Súper 1,5×/2×**, motor gráfico (Direct3D 11, OpenGL, Vulkan) y **FPS sin tope** (para AFMF 2).'],
        ['new', 'Límite de FPS con 165 y 240.'],
        ['new', 'Mando con cursor en Pokelike, PokéPath TD, PokéPlunder y en Más juegos.']
      ]
    },
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
