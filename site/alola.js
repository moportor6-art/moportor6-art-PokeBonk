/* Subversión propia: Alola, la séptima región (datos). El motor de regiones está en regiones.js.
   - Liga: las 55 familias de Alola (#722-#809) con 4 ataques, pasiva, evolución y reto, Ultraentes y Meltan
     incluidos. Lunala entra como evolución alternativa de Cosmoem (formas.js).
   - Sprites: los de PMD que ya traía el juego (todos con animaciones y variocolor).
   - Mapas: Jungla Umbría, Volcán Wela, Costa de Poni y Ultraumbral, tras la Cueva Desenlace.
     Santuarios: Ruinas de la Abundancia (Tapu Lele y Tapu Bulu), Ruinas del Conflicto (Tapu Koko y Zeraora),
     Ruinas del Océano (Tapu Fini y Marshadow) y el Altar del Sol y la Luna (Solgaleo, Lunala y Necrozma).
   - Más duros que Kalos: enemigos con +100% PS y +70% daño (Ultraumbral, +125% y +80%).
   - Contadores de retos: alola, alola_local y runs_a. */
(() => {
  const r = (desc, counter, goal) => ({ desc, counter, goal });
  const n_ = n => n.toLocaleString('es');
  const partida = r('Juega 1 partida en un mapa de Alola.', 'runs_a', 1);
  const deAlola = n => r(`Derrota a ${n_(n)} Pokémon de Alola.`, 'alola', n);
  const local = n => r(`Derrota a ${n_(n)} Pokémon con Pokémon de Alola.`, 'alola_local', n);
  const bajas = (m, nombre, n) => r(`Consigue ${n_(n)} bajas en ${nombre}.`, 'kills_' + m, n);
  const guardianes = (m, nombre, n) => r(`Derrota a ${n} guardianes de ${nombre}.`, 'boss_' + m, n);
  const dificil = (m, nombre) => r(`Completa ${nombre} en Difícil.`, 'tier_' + m, 2);
  const pesadilla = (m, nombre) => r(`Completa ${nombre} en Pesadilla.`, 'tier_' + m, 3);
  const liga = n => r(`Ten ${n} miembros en tu Liga.`, 'league', n);
  const JUN = ['jungla', 'la Jungla Umbría'], WEL = ['wela', 'el Volcán Wela'], PON = ['poni', 'la Costa de Poni'], ULT = ['ultraumbral', 'el Ultraumbral'];
  const F = (id, role, passive, kit, rank, evo, challenge) => ({ id, role, passive, kit, rank, ...evo, challenge });

  const LIGA = [
    // iniciales
    F(722, 'Arquero', 'overgrow', ['leafage', 'razor-leaf', 'leaf-blade', 'spirit-shackle'], 'common', { evoLevels: [17, 34] }, partida),
    F(725, 'Luchador de fuego', 'blaze', ['ember', 'fire-fang', 'darkest-lariat', 'flare-blitz'], 'common', { evoLevels: [17, 34] }, partida),
    F(728, 'Cantante', 'torrent', ['water-gun', 'bubble-beam', 'sparkling-aria', 'moonblast'], 'common', { evoLevels: [17, 34] }, partida),
    // comunes de las rutas
    F(731, 'Tucán', 'skill-link', ['peck', 'rock-blast', 'bullet-seed', 'beak-blast'], 'common', { evoLevels: [14, 28] }, deAlola(1000)),
    F(734, 'Mangosta', 'strong-jaw', ['tackle', 'bite', 'crunch', 'thrash'], 'common', { evoLevels: [20] }, deAlola(1500)),
    F(736, 'Escarabajo cañón', 'dynamo', ['bug-bite', 'spark', 'bug-buzz', 'zap-cannon'], 'uncommon', { evoLevels: [20, 35] }, bajas(...JUN, 3000)),
    F(739, 'Cangrejo boxeador', 'iron-fist', ['rock-smash', 'bubble-beam', 'ice-hammer', 'close-combat'], 'uncommon', { evoLevels: [30] }, bajas(...PON, 4000)),
    F(741, 'Bailarín', 'tailwind', ['peck', 'air-slash', 'revelation-dance', 'hurricane'], 'uncommon', {}, local(4000)),
    F(742, 'Abeja polen', 'honey-gather', ['fairy-wind', 'struggle-bug', 'dazzling-gleam', 'bug-buzz'], 'common', { evoLevels: [25] }, bajas(...JUN, 2500)),
    F(744, 'Lobo de roca', 'steadfast', ['rock-throw', 'bite', 'accelerock', 'stone-edge'], 'uncommon', { evoLevels: [25] }, bajas(...WEL, 3500)),
    F(746, 'Banco de peces', 'swift-swim', ['water-gun', 'brine', 'aqua-tail', 'hydro-pump'], 'uncommon', {}, bajas(...PON, 5000)),
    F(747, 'Estrella venenosa', 'regenerator', ['poison-sting', 'venoshock', 'poison-jab', 'liquidation'], 'uncommon', { evoLevels: [38] }, bajas(...PON, 4500)),
    F(749, 'Burro de carga', 'stampede', ['mud-slap', 'bulldoze', 'high-horsepower', 'earthquake'], 'common', { evoLevels: [30] }, bajas(...WEL, 3000)),
    F(751, 'Araña burbuja', 'bubble-guard', ['water-gun', 'bug-bite', 'lunge', 'liquidation'], 'common', { evoLevels: [22] }, bajas(...PON, 3500)),
    F(753, 'Mantis flor', 'chlorophyll', ['razor-leaf', 'x-scissor', 'leaf-blade', 'solar-blade'], 'common', { evoLevels: [34] }, bajas(...JUN, 3500)),
    F(755, 'Seta luminosa', 'effect-spore', ['absorb', 'giga-drain', 'dazzling-gleam', 'moonblast'], 'uncommon', { evoLevels: [24] }, bajas(...JUN, 4000)),
    F(757, 'Salamandra tóxica', 'toxic-cloud', ['ember', 'poison-fang', 'venoshock', 'flamethrower'], 'uncommon', { evoLevels: [33] }, bajas(...WEL, 4500)),
    F(759, 'Oso abrazador', 'fluffy', ['tackle', 'brutal-swing', 'hammer-arm', 'double-edge'], 'uncommon', { evoLevels: [27] }, local(4000)),
    F(761, 'Fruta reina', 'leaf-guard', ['rapid-spin', 'magical-leaf', 'trop-kick', 'high-jump-kick'], 'common', { evoLevels: [18, 30] }, bajas(...JUN, 3000)),
    F(764, 'Guirnalda', 'healer', ['draining-kiss', 'magical-leaf', 'petal-blizzard', 'play-rough'], 'uncommon', {}, bajas(...JUN, 5000)),
    F(765, 'Sabio del bosque', 'pendulum', ['confusion', 'zen-headbutt', 'foul-play', 'psychic'], 'uncommon', {}, local(5000)),
    F(766, 'Equipo de monos', 'tm-payday', ['rock-smash', 'take-down', 'thrash', 'close-combat'], 'uncommon', {}, local(5000)),
    F(767, 'Caballero cochinilla', 'reef', ['struggle-bug', 'razor-shell', 'first-impression', 'liquidation'], 'uncommon', { evoLevels: [30] }, bajas(...PON, 5000)),
    F(769, 'Castillo de arena', 'sand-veil', ['astonish', 'sand-tomb', 'shadow-ball', 'earth-power'], 'common', { evoLevels: [42] }, bajas(...PON, 4000)),
    F(771, 'Pepino de mar', 'puff-spikes', ['water-gun', 'bubble-beam', 'water-pulse', 'hydro-pump'], 'common', {}, deAlola(2500)),
    F(774, 'Meteorito', 'star-core', ['rollout', 'swift', 'ancient-power', 'power-gem'], 'uncommon', {}, bajas(...ULT, 5000)),
    F(775, 'Koala dormido', 'insomnia', ['rollout', 'slam', 'sucker-punch', 'wood-hammer'], 'uncommon', {}, deAlola(4000)),
    F(776, 'Tortuga bomba', 'shell-armor', ['ember', 'dragon-pulse', 'flamethrower', 'shell-trap'], 'uncommon', {}, guardianes(...WEL, 5)),
    F(777, 'Erizo eléctrico', 'lightning-rod', ['spark', 'fell-stinger', 'zing-zap', 'wild-charge'], 'uncommon', {}, local(5000)),
    F(778, 'Disfraz', 'phantom', ['shadow-sneak', 'slash', 'shadow-claw', 'play-rough'], 'rare', {}, [liga(195), pesadilla(...PON)]),
    F(779, 'Pez de dientes', 'strong-jaw', ['aqua-jet', 'psychic-fangs', 'crunch', 'wave-crash'], 'uncommon', {}, bajas(...PON, 5500)),
    F(780, 'Dragón abuelo', 'sheer-force', ['twister', 'hyper-voice', 'dragon-pulse', 'outrage'], 'rare', {}, [liga(190), guardianes(...WEL, 8)]),
    F(781, 'Ancla fantasma', 'steel-plumage', ['astonish', 'anchor-shot', 'shadow-ball', 'power-whip'], 'rare', {}, [liga(190), guardianes(...PON, 8)]),
    F(782, 'Dragón de escamas', 'bulletproof', ['dragon-tail', 'dragon-claw', 'clanging-scales', 'close-combat'], 'rare', { evoLevels: [35, 45] }, [liga(195), bajas(...WEL, 10000)]),
    // legendarios, singulares y Ultraentes
    F(772, 'Bestia sintética', 'genome', ['tackle', 'crush-claw', 'multi-attack', 'double-edge'], 'legendary', { evoLevels: [30] }, [liga(190), local(20000)]),
    F(785, 'Guardián de Melemele', 'volt-pressure', ['thunder-shock', 'shock-wave', 'discharge', 'brave-bird'], 'legendary', {}, [liga(200), pesadilla(...WEL)]),
    F(786, 'Guardiana de Akala', 'pressure', ['confusion', 'psybeam', 'psyshock', 'moonblast'], 'legendary', {}, [liga(200), pesadilla(...JUN)]),
    F(787, 'Guardián de Ula-Ula', 'horn-pride', ['horn-attack', 'horn-leech', 'megahorn', 'wood-hammer'], 'legendary', {}, [liga(200), dificil(...JUN)]),
    F(788, 'Guardiana de Poni', 'sea-guardian', ['water-gun', 'muddy-water', 'moonblast', 'hydro-pump'], 'legendary', {}, [liga(200), dificil(...PON)]),
    F(789, 'Hijo de las estrellas', 'star-dust', ['confusion', 'zen-headbutt', 'psychic', 'sunsteel-strike'], 'legendary', { evoLevels: [43, 53] }, [liga(210), pesadilla(...ULT)]),
    F(793, 'Parásito', 'beast-boost', ['acid', 'venoshock', 'power-gem', 'head-smash'], 'legendary', {}, [liga(200), guardianes(...ULT, 10)]),
    F(794, 'Músculo', 'beast-boost', ['power-up-punch', 'lunge', 'hammer-arm', 'superpower'], 'legendary', {}, [liga(200), guardianes(...ULT, 12)]),
    F(795, 'Belleza', 'beast-boost', ['double-kick', 'bug-buzz', 'high-jump-kick', 'lunge'], 'legendary', {}, [liga(200), guardianes(...ULT, 12)]),
    F(796, 'Iluminación', 'beast-boost', ['thunder-shock', 'thunder-punch', 'discharge', 'power-whip'], 'legendary', {}, [liga(200), guardianes(...ULT, 14)]),
    F(797, 'Lanzadera', 'beast-boost', ['smack-down', 'giga-drain', 'flash-cannon', 'skull-bash'], 'legendary', {}, [liga(205), guardianes(...ULT, 14)]),
    F(798, 'Espadachín de papel', 'beast-boost', ['razor-leaf', 'night-slash', 'sacred-sword', 'leaf-blade'], 'legendary', {}, [liga(205), guardianes(...ULT, 16)]),
    F(799, 'Glotón', 'beast-boost', ['bite', 'dragon-tail', 'crunch', 'stomping-tantrum'], 'legendary', {}, [liga(205), guardianes(...ULT, 16)]),
    F(803, 'Aguijón', 'beast-boost', ['air-cutter', 'poison-jab', 'dragon-pulse', 'dragon-rush'], 'legendary', { evoLevels: [40] }, [liga(205), local(40000)]),
    F(805, 'Muralla de bloques', 'beast-boost', ['rock-throw', 'rock-slide', 'iron-head', 'double-edge'], 'legendary', {}, [liga(205), guardianes(...ULT, 18)]),
    F(806, 'Cabeza de fuego', 'beast-boost', ['ember', 'shadow-ball', 'mystical-fire', 'mind-blown'], 'legendary', {}, [liga(205), guardianes(...WEL, 15)]),
    F(800, 'Prisma', 'pressure', ['confusion', 'power-gem', 'prismatic-laser', 'photon-geyser'], 'legendary', {}, [liga(215), pesadilla(...ULT)]),
    F(801, 'Autómata', 'pixilate', ['psybeam', 'iron-head', 'flash-cannon', 'fleur-cannon'], 'legendary', {}, [liga(210), local(60000)]),
    F(802, 'Sombra', 'phantom', ['shadow-sneak', 'drain-punch', 'spectral-thief', 'close-combat'], 'legendary', {}, [liga(210), pesadilla(...PON)]),
    F(807, 'Trueno ágil', 'thunder-beast', ['spark', 'wild-charge', 'plasma-fists', 'close-combat'], 'legendary', {}, [liga(210), pesadilla(...WEL)]),
    F(808, 'Tuerca', 'magnet-pull', ['thunder-shock', 'flash-cannon', 'double-iron-bash', 'hyper-beam'], 'legendary', { evoLevels: [40] }, [liga(200), local(30000)])
  ];

  window.PB_REGIONES?.registrar({
    id: 'alola', name: 'Alola', gen: 7, min: 722, max: 809,
    gate: 'kalos', emblem: 791, c: '#2a8aa8', c2: '#ffd070',
    liga: LIGA,
    dificultad: { base: [2.0, 1.7], ultraumbral: [2.25, 1.8] },
    contadores: { derrotas: 'alola', local: 'alola_local', runs: 'runs_a' },
    mapas: [
      {
        id: 'jungla', base: 'forest', color: 0x3aa860, k: .22,
        name: 'Jungla Umbría', desc: 'La selva espesa de Akala: flores, abejas, mantis y frutas que patean. Los Pokémon de otras regiones no viven aquí.',
        unlock: 'Completa la Cueva Desenlace', zonas: ['Senda de la selva', 'Corazón de la jungla'],
        santuario: { de: 'encina', name: 'Ruinas de la Abundancia', heart: 'Corazón de la abundancia', legendaries: [786, 787], color: 0xffb0e0 },
        datos: {
          types: ['grass', 'bug', 'fairy', 'normal'], late: ['electric', 'poison'], legendaries: [786, 787],
          bosses: [754, 763, 738], guardians: [[754, 753], [763, 762], [738, 737]],
          totems: [[753, 742, 761, 755], [754, 743, 762, 756], [763, 738, 764, 775]], summoners: [[754, 753], [762, 761], [737, 736]],
          residents: [753, 742, 761, 755, 736, 731, 764], weather: ['clear', 'rain', 'sun'],
          props: ['tree', 'bush', 'tree', 'mushroom', 'bush'],
          music: { root: 62, scale: [0, 2, 4, 7, 9], bpm: 118, mood: 'bright' }
        }
      },
      {
        id: 'wela', base: 'canela', color: 0xc85a3a, k: .25,
        name: 'Volcán Wela', desc: 'Lava, rocas y dragones en la cima del volcán. Salamandras y lobos de roca rondan el cráter.',
        unlock: 'Completa la Jungla Umbría', zonas: ['Ladera', 'Cráter'],
        santuario: { de: 'canela', name: 'Ruinas del Conflicto', heart: 'Corazón del conflicto', legendaries: [785, 807], color: 0xffe040 },
        datos: {
          types: ['fire', 'rock', 'ground', 'dragon'], late: ['electric', 'fighting'], legendaries: [785, 807],
          bosses: [758, 784, 776], guardians: [[758, 757], [784, 783], [776, 745]],
          totems: [[757, 744, 749, 782], [758, 745, 750, 783], [784, 776, 780, 727]], summoners: [[758, 757], [783, 782], [750, 749]],
          residents: [757, 744, 749, 782, 725, 776, 777], weather: ['sun', 'ash', 'clear'],
          props: ['rock', 'pillar', 'rock', 'deadtree', 'crystal'],
          music: { root: 57, scale: [0, 1, 4, 5, 7, 8, 10], bpm: 122, mood: 'tense' }
        }
      },
      {
        id: 'poni', base: 'coast', color: 0x3a9ad8, k: .25,
        name: 'Costa de Poni', desc: 'Playas salvajes y arrecifes de la isla más remota. Cangrejos, estrellas venenosas y castillos de arena encantados.',
        unlock: 'Completa el Volcán Wela', zonas: ['Playa', 'Arrecife'],
        santuario: { de: 'coast', name: 'Ruinas del Océano', heart: 'Corazón del océano', legendaries: [788, 802], color: 0x60d0ff },
        datos: {
          types: ['water', 'ghost', 'poison', 'psychic'], late: ['fighting', 'ice'], legendaries: [788, 802],
          bosses: [748, 770, 768], guardians: [[748, 747], [770, 769], [768, 767]],
          totems: [[747, 751, 767, 769], [748, 752, 768, 770], [740, 746, 778, 781]], summoners: [[748, 747], [752, 751], [770, 769]],
          residents: [747, 751, 767, 769, 739, 746, 779], weather: ['clear', 'rain', 'clear'],
          props: ['rock', 'bush', 'rock', 'pillar', 'deadtree'],
          music: { root: 64, scale: [0, 2, 4, 5, 7, 9, 11], bpm: 112, mood: 'bright' }
        }
      },
      {
        id: 'ultraumbral', base: 'cave', color: 0x5a3aa8, k: .32,
        name: 'Ultraumbral', desc: 'Un mundo al otro lado de los Ultraumbrales. Los Ultraentes cazan aquí y la luz de Necrozma lo apaga todo.',
        unlock: 'Completa la Costa de Poni', zonas: ['Grieta', 'Ultraespacio'],
        santuario: { de: 'iris', name: 'Altar del Sol y la Luna', heart: 'Corazón de la luz', legendaries: [791, 792, 800], color: 0xfff0a0 },
        datos: {
          types: ['dragon', 'steel', 'psychic', 'poison'], late: ['rock', 'electric'], evolved: true, legendaries: [791, 792, 800],
          bosses: [794, 797, 799], guardians: [[793, 774], [795, 790], [796, 789]],
          totems: [[774, 789, 790, 803], [793, 794, 795, 796], [797, 798, 799, 805]], summoners: [[790, 789], [804, 803], [774, 774]],
          residents: [774, 789, 803, 784, 782, 777, 801], weather: ['fog', 'clear', 'ash'],
          props: ['crystal', 'pillar', 'crystal', 'rock', 'pillar'],
          music: { root: 55, scale: [0, 1, 3, 6, 7, 8, 11], bpm: 128, mood: 'mystic' }
        }
      },
      // 1.19 (solo Lite, de prueba): Isla Melemele, un mundo tropical propio. Isla rodeada de mar turquesa, arena,
      // palmeras y coral, con su cielo de día y su atardecer (zonasDatos). Abierta desde el principio para probarla.
      ...(window.PB_EDICION === 'lite' ? [{
        id: 'melemele', base: 'canela', color: 0x40c8a0, k: .15,
        name: 'Isla Melemele', desc: 'La primera isla de Alola: playas de arena blanca, mar turquesa y palmeras. Yungoos, Pikipek y Rockruff corretean por la orilla. (Mapa de prueba)',
        unlock: 'Mapa de prueba: abierto', zonas: ['Playa de Hau\'oli', 'Atardecer en Melemele'],
        zonasDatos: [
          { sky: [0x4ab0ff, 0xcff0ff], fog: 0xbfe8ff, fogNear: 90, fogFar: 300, light: 1.05, sun: 0xfff4d0, hemiGround: 0x5aa860, sunDir: [.5, .8, .3], sunH: .7, tint: [.98, 1.02, 1.03], clouds: [1, 1, 1], cover: .3, glow: 0, glowK: 0, stars: 0, motes: 'spray' },
          { sky: [0xff8a5a, 0xffd8a0], fog: 0xffc0a0, fogNear: 70, fogFar: 250, light: .9, sun: 0xffb070, hemiGround: 0x6a7a48, sunDir: [.8, .35, -.2], sunH: .22, tint: [1.06, .96, .94], clouds: [1, .85, .8], cover: .2, glow: 0xff9a5a, glowK: .3, stars: .2, motes: 'spray' }
        ],
        santuario: { de: 'coast', name: 'Ruinas de Melemele', heart: 'Corazón de Melemele', legendaries: [785], color: 0xffe040 },
        datos: {
          types: ['normal', 'bug', 'water', 'flying', 'fairy'], late: ['rock', 'electric'], legendaries: [785],
          bosses: [735, 743, 738], guardians: [[735, 734], [743, 742], [738, 737]],
          totems: [[734, 731, 736, 742], [735, 732, 737, 744], [738, 743, 741, 746]], summoners: [[735, 734], [732, 731], [737, 736]],
          residents: [731, 734, 736, 741, 742, 744, 746, 722, 725, 728], weather: ['sun', 'clear', 'rain'],
          sky: [0x4ab0ff, 0xcff0ff], fog: 0xbfe8ff, fogNear: 90, fogFar: 300, light: 1.05, sun: 0xfff4d0, hemiGround: 0x5aa860,
          ground: [0x6ac85a, 0x7ad86a, 0xe8d8a0, 0x58b84a], path: 0xecdcaa, cliff: [0xd8c08a, 0xb8a070, 0xe8d8a8], waterColor: 0x2ac8e0,
          rock: 0x8a9aa0, accent: 0xff7ac8, leaf: 0x3ac85a, bark: 0x9a7a4a, glow: 0xfff0b0, glowK: 0,
          props: ['palm', 'palm', 'bush', 'coral', 'palm', 'rock', 'tree'], propDensity: .9, morning: { motes: 'spray' },
          music: { root: 65, scale: [0, 2, 4, 7, 9], bpm: 116, mood: 'bright' }
        }
      }] : [])
    ]
  });
  // 1.19: Isla Melemele de prueba, abierta sin completar los mapas anteriores (solo Lite).
  if (window.PB_EDICION === 'lite') {
    const t = setInterval(() => {
      const m = window.__pbMeta;
      if (!m?.biomeUnlockedByChain || m.__pbMele) return;
      const f = m.biomeUnlockedByChain;
      m.biomeUnlockedByChain = function (id, ...a) { return id === 'melemele' || f.call(this, id, ...a); };
      m.__pbMele = true; clearInterval(t);
    }, 300);
  }
})();
