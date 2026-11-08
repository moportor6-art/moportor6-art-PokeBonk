/* Subversión propia (fork de moportor6) sobre la versión oficial.
   La versión oficial del juego NO se toca: sigue siendo la de version.json.
   Aquí solo se añaden noticias propias (pantalla Noticias) y notas propias (ventana Novedades).
   Para una nueva subversión: cambia SUB y añade una entrada al principio de "items" y de "changelog". */
(() => {
  const OFICIAL = '0.9.9';
  const SUB = '0.5';
  const AUTOR = 'Actualización hecha por moportor6 (no oficial)';
  const PIE = '> Juego original de Charcher. Port Android de JayElDragon.';

  const items = [
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
