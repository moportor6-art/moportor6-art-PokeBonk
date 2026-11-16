/* Subversión propia: Paldea, la novena región (datos). El motor de regiones está en regiones.js.
   - Liga: las 72 familias nuevas de Paldea, Kitakami y Arándano (#906-#1025), con 4 ataques, pasiva, evolución y
     reto, Pokémon paradoja incluidos. Las evoluciones nuevas de líneas antiguas (Annihilape, Clodsire, Farigiraf,
     Dudunsparce, Kingambit, Dipplin y Archaludon) van como evoluciones alternativas con reto en formas.js.
   - Sprites: los de PMD que ya traía el juego (todos con animaciones; Pecharunt sin variocolor).
   - Mapas: Bosque de Kitakami, Cumbre Glaseada, Desierto Asado y Zona Cero, tras la Torre Rose.
     Santuarios: Templo de los Leales (Ogerpon, Okidogi, Munkidori y Fezandipiti), Santuarios Funestos (Wo-Chien,
     Chien-Pao, Ting-Lu y Chi-Yu), Casa del Mochi (Pecharunt) y la Cripta de Zona Cero (Koraidon, Miraidon y
     Terapagos).
   - Más duros que Galar: enemigos con +150% PS y +100% daño (Zona Cero, +180% y +120%).
   - Contadores de retos: paldea, paldea_local y runs_p. */
(() => {
  const r = (desc, counter, goal) => ({ desc, counter, goal });
  const n_ = n => n.toLocaleString('es');
  const partida = r('Juega 1 partida en un mapa de Paldea.', 'runs_p', 1);
  const dePaldea = n => r(`Derrota a ${n_(n)} Pokémon de Paldea.`, 'paldea', n);
  const local = n => r(`Derrota a ${n_(n)} Pokémon con Pokémon de Paldea.`, 'paldea_local', n);
  const bajas = (m, nombre, n) => r(`Consigue ${n_(n)} bajas en ${nombre}.`, 'kills_' + m, n);
  const guardianes = (m, nombre, n) => r(`Derrota a ${n} guardianes de ${nombre}.`, 'boss_' + m, n);
  const dificil = (m, nombre) => r(`Completa ${nombre} en Difícil.`, 'tier_' + m, 2);
  const pesadilla = (m, nombre) => r(`Completa ${nombre} en Pesadilla.`, 'tier_' + m, 3);
  const liga = n => r(`Ten ${n} miembros en tu Liga.`, 'league', n);
  const KIT = ['kitakami', 'el Bosque de Kitakami'], GLA = ['glaseada', 'la Cumbre Glaseada'], ASA = ['asado', 'el Desierto Asado'], ZON = ['zonacero', 'la Zona Cero'];
  const F = (id, role, passive, kit, rank, evo, challenge) => ({ id, role, passive, kit, rank, ...evo, challenge });

  const LIGA = [
    // iniciales
    F(906, 'Gato mago', 'overgrow', ['leafage', 'magical-leaf', 'night-slash', 'flower-trick'], 'common', { evoLevels: [16, 36] }, partida),
    F(909, 'Cocodrilo cantor', 'blaze', ['ember', 'fire-fang', 'shadow-ball', 'torch-song'], 'common', { evoLevels: [16, 36] }, partida),
    F(912, 'Pato bailarín', 'torrent', ['water-gun', 'aqua-cutter', 'close-combat', 'aqua-step'], 'common', { evoLevels: [16, 36] }, partida),
    // comunes de las rutas
    F(915, 'Cerdito', 'gluttony', ['tackle', 'take-down', 'body-slam', 'double-edge'], 'common', { evoLevels: [18] }, dePaldea(1000)),
    F(917, 'Araña bola', 'spider-silk', ['struggle-bug', 'bug-bite', 'lunge', 'skitter-smack'], 'common', { evoLevels: [15] }, bajas(...KIT, 2500)),
    F(919, 'Grillo saltarín', 'swarm', ['struggle-bug', 'bite', 'lunge', 'first-impression'], 'common', { evoLevels: [24] }, bajas(...KIT, 3000)),
    F(921, 'Ratón eléctrico', 'iron-fist', ['thunder-shock', 'nuzzle', 'spark', 'double-shock'], 'common', { evoLevels: [18, 32] }, dePaldea(2000)),
    F(924, 'Familia de ratones', 'skill-link', ['pound', 'bite', 'population-bomb', 'double-edge'], 'uncommon', { evoLevels: [25] }, local(4000)),
    F(926, 'Perrito', 'loyal-guard', ['tackle', 'bite', 'play-rough', 'body-press'], 'common', { evoLevels: [26] }, dePaldea(2500)),
    F(928, 'Aceituna', 'harvest', ['absorb', 'razor-leaf', 'seed-bomb', 'energy-ball'], 'common', { evoLevels: [25, 35] }, bajas(...KIT, 3000)),
    F(931, 'Loro pandillero', 'intimidate', ['peck', 'fury-attack', 'double-edge', 'brave-bird'], 'uncommon', {}, local(4000)),
    F(932, 'Sal', 'sturdy', ['rock-throw', 'rock-blast', 'salt-cure', 'stone-edge'], 'uncommon', { evoLevels: [24, 38] }, bajas(...GLA, 4000)),
    F(935, 'Caballero de fuego', 'flash-fire', ['ember', 'flame-charge', 'bitter-blade', 'armor-cannon'], 'rare', { branch: [936, 937], evoLevel: 38 }, [liga(255), guardianes(...ASA, 8)]),
    F(938, 'Renacuajo eléctrico', 'volt-absorb', ['thunder-shock', 'spark', 'water-gun', 'discharge'], 'common', { evoLevels: [30] }, bajas(...ASA, 3500)),
    F(940, 'Gaviota eléctrica', 'static', ['peck', 'spark', 'air-slash', 'discharge'], 'common', { evoLevels: [25] }, bajas(...ASA, 3500)),
    F(942, 'Mastín', 'intimidate', ['tackle', 'bite', 'crunch', 'jaw-lock'], 'common', { evoLevels: [30] }, dePaldea(3000)),
    F(944, 'Mono pintor', 'toxic-cloud', ['scratch', 'poison-jab', 'gunk-shot', 'knock-off'], 'uncommon', { evoLevels: [28] }, local(4500)),
    F(946, 'Matojo rodante', 'phantom', ['astonish', 'bullet-seed', 'phantom-force', 'power-whip'], 'common', { evoLevels: [30] }, bajas(...ASA, 4000)),
    F(948, 'Hongo andante', 'effect-spore', ['mud-shot', 'mega-drain', 'earth-power', 'giga-drain'], 'common', { evoLevels: [30] }, bajas(...KIT, 4000)),
    F(950, 'Cangrejo de roca', 'tough-claws', ['rock-smash', 'rock-tomb', 'x-scissor', 'high-horsepower'], 'uncommon', {}, bajas(...ASA, 5000)),
    F(951, 'Pimiento', 'chlorophyll', ['leafage', 'bullet-seed', 'flamethrower', 'solar-beam'], 'common', { evoLevels: [30] }, bajas(...ASA, 4000)),
    F(953, 'Escarabajo pelotero', 'star-dust', ['struggle-bug', 'psybeam', 'bug-buzz', 'psychic'], 'uncommon', { evoLevels: [30] }, bajas(...ASA, 5000)),
    F(955, 'Avestruz psíquica', 'speed-boost', ['peck', 'confusion', 'lumina-crash', 'psychic'], 'uncommon', { evoLevels: [35] }, local(5000)),
    F(957, 'Herrera', 'mold-breaker', ['fairy-wind', 'metal-claw', 'play-rough', 'gigaton-hammer'], 'uncommon', { evoLevels: [24, 38] }, bajas(...GLA, 5000)),
    F(960, 'Anguila de jardín', 'sand-veil', ['water-gun', 'mud-slap', 'aqua-tail', 'liquidation'], 'common', { evoLevels: [26] }, bajas(...ASA, 3500)),
    F(962, 'Pájaro bombardero', 'big-pecks', ['peck', 'pluck', 'knock-off', 'brave-bird'], 'uncommon', {}, bajas(...GLA, 5000)),
    F(963, 'Delfín héroe', 'water-veil', ['water-gun', 'aqua-jet', 'jet-punch', 'wave-crash'], 'rare', { evoLevels: [38] }, [liga(255), local(15000)]),
    F(965, 'Motor', 'clear-body', ['smog', 'iron-head', 'spin-out', 'gunk-shot'], 'uncommon', { evoLevels: [40] }, bajas(...ZON, 5000)),
    F(967, 'Dragón montura', 'run-away', ['quick-attack', 'dragon-tail', 'u-turn', 'double-edge'], 'uncommon', {}, bajas(...ASA, 6000)),
    F(968, 'Gusano de hierro', 'iron-body', ['tackle', 'iron-tail', 'iron-head', 'earthquake'], 'uncommon', {}, bajas(...ASA, 6000)),
    F(969, 'Cristal tóxico', 'toxic-cloud', ['acid-spray', 'rock-throw', 'mortal-spin', 'power-gem'], 'rare', { evoLevels: [35] }, [liga(250), guardianes(...GLA, 8)]),
    F(971, 'Perro fantasma', 'phantom', ['lick', 'bite', 'last-respects', 'body-press'], 'uncommon', { evoLevels: [30] }, bajas(...GLA, 5000)),
    F(973, 'Flamenco', 'tailwind', ['peck', 'double-kick', 'air-slash', 'close-combat'], 'uncommon', {}, bajas(...ASA, 6000)),
    F(974, 'Ballena de hielo', 'thick-fat', ['powder-snow', 'ice-shard', 'body-slam', 'ice-spinner'], 'common', { evoLevels: [35] }, bajas(...GLA, 4000)),
    F(976, 'Pez cuchilla', 'sniper', ['aqua-jet', 'psycho-cut', 'aqua-cutter', 'night-slash'], 'uncommon', {}, bajas(...GLA, 6000)),
    F(977, 'Ballenato gigante', 'unaware', ['water-gun', 'body-slam', 'wave-crash', 'order-up'], 'rare', {}, [liga(255), guardianes(...ASA, 10)]),
    F(978, 'Pez de sushi', 'own-tempo', ['water-gun', 'dragon-breath', 'muddy-water', 'draco-meteor'], 'uncommon', {}, local(6000)),
    F(996, 'Dragón de hielo', 'thick-fat', ['dragon-breath', 'ice-fang', 'icicle-crash', 'glaive-rush'], 'rare', { evoLevels: [35, 54] }, [liga(260), pesadilla(...GLA)]),
    F(999, 'Cofre de monedas', 'phantom', ['astonish', 'shadow-ball', 'power-gem', 'make-it-rain'], 'rare', { evoLevels: [40] }, [liga(260), local(30000)]),
    F(1012, 'Matcha', 'healer', ['astonish', 'mega-drain', 'matcha-gotcha', 'shadow-ball'], 'uncommon', { evoLevels: [30] }, bajas(...KIT, 5000)),
    // Pokémon paradoja
    F(984, 'Colmillo del pasado', 'protosynthesis', ['rapid-spin', 'bulldoze', 'headlong-rush', 'close-combat'], 'rare', {}, [liga(260), guardianes(...ZON, 10)]),
    F(985, 'Cola del pasado', 'protosynthesis', ['disarming-voice', 'psybeam', 'dazzling-gleam', 'psychic'], 'rare', {}, [liga(260), guardianes(...ZON, 10)]),
    F(986, 'Seta del pasado', 'protosynthesis', ['mega-drain', 'sucker-punch', 'seed-bomb', 'giga-drain'], 'rare', {}, [liga(260), guardianes(...ZON, 10)]),
    F(987, 'Melena del pasado', 'protosynthesis', ['astonish', 'mystical-fire', 'shadow-ball', 'moonblast'], 'rare', {}, [liga(260), guardianes(...ZON, 12)]),
    F(988, 'Ala del pasado', 'protosynthesis', ['bug-bite', 'low-sweep', 'lunge', 'close-combat'], 'rare', {}, [liga(260), guardianes(...ZON, 12)]),
    F(989, 'Pelo del pasado', 'protosynthesis', ['thunder-shock', 'mud-shot', 'discharge', 'earth-power'], 'rare', {}, [liga(260), guardianes(...ZON, 12)]),
    F(990, 'Rueda del futuro', 'quark-drive', ['rapid-spin', 'iron-head', 'high-horsepower', 'earthquake'], 'rare', {}, [liga(260), guardianes(...ZON, 10)]),
    F(991, 'Saco del futuro', 'quark-drive', ['powder-snow', 'aqua-jet', 'freeze-dry', 'blizzard'], 'rare', {}, [liga(260), guardianes(...ZON, 10)]),
    F(992, 'Manos del futuro', 'quark-drive', ['force-palm', 'thunder-punch', 'drain-punch', 'close-combat'], 'rare', {}, [liga(260), guardianes(...ZON, 10)]),
    F(993, 'Cuello del futuro', 'quark-drive', ['bite', 'air-slash', 'dark-pulse', 'hurricane'], 'rare', {}, [liga(260), guardianes(...ZON, 12)]),
    F(994, 'Polilla del futuro', 'quark-drive', ['ember', 'acid-spray', 'fiery-dance', 'sludge-wave'], 'rare', {}, [liga(260), guardianes(...ZON, 12)]),
    F(995, 'Púas del futuro', 'quark-drive', ['rock-blast', 'spark', 'stone-edge', 'wild-charge'], 'rare', {}, [liga(260), guardianes(...ZON, 12)]),
    F(1005, 'Luna del pasado', 'protosynthesis', ['bite', 'dragon-claw', 'crunch', 'outrage'], 'legendary', {}, [liga(270), pesadilla(...ZON)]),
    F(1006, 'Paladín del futuro', 'quark-drive', ['psycho-cut', 'sacred-sword', 'play-rough', 'close-combat'], 'legendary', {}, [liga(270), dificil(...ZON)]),
    F(1009, 'Ola del pasado', 'protosynthesis', ['water-gun', 'dragon-pulse', 'hydro-steam', 'hydro-pump'], 'legendary', {}, [liga(270), guardianes(...ZON, 20)]),
    F(1010, 'Verdor del futuro', 'quark-drive', ['magical-leaf', 'psyblade', 'leaf-blade', 'solar-blade'], 'legendary', {}, [liga(270), guardianes(...ZON, 20)]),
    F(1020, 'Llama del pasado', 'protosynthesis', ['ember', 'dragon-pulse', 'flamethrower', 'fire-blast'], 'legendary', {}, [liga(270), dificil(...ASA)]),
    F(1021, 'Trueno del pasado', 'protosynthesis', ['thunder-shock', 'dragon-pulse', 'thunderclap', 'thunder'], 'legendary', {}, [liga(270), dificil(...GLA)]),
    F(1022, 'Roca del futuro', 'quark-drive', ['rock-throw', 'zen-headbutt', 'stone-edge', 'psychic'], 'legendary', {}, [liga(270), dificil(...KIT)]),
    F(1023, 'Testa del futuro', 'quark-drive', ['metal-claw', 'psybeam', 'flash-cannon', 'psychic'], 'legendary', {}, [liga(270), pesadilla(...ASA)]),
    // legendarios y singulares
    F(1001, 'Tablilla funesta', 'pressure', ['absorb', 'foul-play', 'ruination', 'power-whip'], 'legendary', {}, [liga(265), dificil(...GLA)]),
    F(1002, 'Espada funesta', 'pressure', ['ice-shard', 'night-slash', 'icicle-crash', 'sacred-sword'], 'legendary', {}, [liga(265), guardianes(...GLA, 20)]),
    F(1003, 'Vasija funesta', 'pressure', ['mud-shot', 'payback', 'earthquake', 'ruination'], 'legendary', {}, [liga(265), local(40000)]),
    F(1004, 'Abalorio funesto', 'pressure', ['ember', 'dark-pulse', 'flamethrower', 'overheat'], 'legendary', {}, [liga(265), pesadilla(...GLA)]),
    F(1007, 'Rey del pasado', 'protosynthesis', ['rock-smash', 'dragon-claw', 'collision-course', 'close-combat'], 'legendary', {}, [liga(280), pesadilla(...ZON)]),
    F(1008, 'Rey del futuro', 'quark-drive', ['thunder-shock', 'dragon-pulse', 'electro-drift', 'thunder'], 'legendary', {}, [liga(280), guardianes(...ZON, 30)]),
    F(1014, 'Leal de la fuerza', 'pressure', ['poison-jab', 'brick-break', 'crunch', 'close-combat'], 'legendary', {}, [liga(265), guardianes(...KIT, 15)]),
    F(1015, 'Leal de la mente', 'pressure', ['poison-sting', 'psybeam', 'sludge-bomb', 'psychic'], 'legendary', {}, [liga(265), guardianes(...KIT, 15)]),
    F(1016, 'Leal del encanto', 'pressure', ['poison-sting', 'fairy-wind', 'sludge-bomb', 'moonblast'], 'legendary', {}, [liga(265), guardianes(...KIT, 15)]),
    F(1017, 'Ogro de las máscaras', 'harvest', ['vine-whip', 'double-kick', 'ivy-cudgel', 'power-whip'], 'legendary', {}, [liga(270), pesadilla(...KIT)]),
    F(1024, 'Tortuga teracristal', 'pressure', ['rapid-spin', 'tera-starstorm', 'earth-power', 'hyper-beam'], 'legendary', {}, [liga(285), pesadilla(...ZON)]),
    F(1025, 'Cadenas del mochi', 'toxic-cloud', ['acid', 'shadow-ball', 'malignant-chain', 'sludge-bomb'], 'legendary', {}, [liga(270), pesadilla(...ASA)])
  ];

  window.PB_REGIONES?.registrar({
    id: 'paldea', name: 'Paldea', gen: 9, min: 906, max: 1025,
    gate: 'galar', emblem: 1007, c: '#c83a2a', c2: '#a85aff',
    liga: LIGA,
    dificultad: { base: [2.5, 2.0], zonacero: [2.8, 2.2] },
    contadores: { derrotas: 'paldea', local: 'paldea_local', runs: 'runs_p' },
    mapas: [
      {
        id: 'kitakami', base: 'forest', color: 0xa8582a, k: .22,
        name: 'Bosque de Kitakami', desc: 'Arrozales, bosques de otoño y las leyendas de los Leales. Arañas, grillos y teteras de matcha viven entre las hojas. Los Pokémon de otras regiones no viven aquí.',
        unlock: 'Completa la Torre Rose', zonas: ['Arrozales', 'Bosque de los Leales'],
        santuario: { de: 'encina', name: 'Templo de los Leales', heart: 'Corazón de las máscaras', legendaries: [1017, 1014, 1015, 1016], color: 0x6ad87a },
        datos: {
          types: ['grass', 'bug', 'poison', 'ghost'], late: ['fairy', 'dark'], legendaries: [1017, 1014, 1015, 1016],
          bosses: [920, 930, 1013], guardians: [[920, 919], [930, 929], [1013, 1012]],
          totems: [[917, 919, 928, 948], [918, 920, 929, 949], [930, 1013, 945, 959]], summoners: [[918, 917], [929, 928], [949, 948]],
          residents: [917, 919, 928, 948, 1012, 944, 915], weather: ['clear', 'rain', 'fog'],
          props: ['tree', 'bush', 'tree', 'mushroom', 'pine'],
          music: { root: 62, scale: [0, 2, 4, 7, 9], bpm: 112, mood: 'bright' }
        }
      },
      {
        id: 'glaseada', base: 'glacier', color: 0xc8e0ff, k: .2,
        name: 'Cumbre Glaseada', desc: 'La montaña nevada del norte de Paldea. Ballenas de hielo, dragones helados y los santuarios de los Tesoros Funestos.',
        unlock: 'Completa el Bosque de Kitakami', zonas: ['Ladera nevada', 'Cumbre'],
        santuario: { de: 'glacier', name: 'Santuarios Funestos', heart: 'Corazón funesto', legendaries: [1001, 1002, 1003, 1004], color: 0x8a5ad8 },
        datos: {
          types: ['ice', 'rock', 'dragon', 'steel'], late: ['dark', 'ghost'], legendaries: [1001, 1002, 1003, 1004],
          bosses: [975, 934, 998], guardians: [[975, 974], [934, 933], [998, 997]],
          totems: [[974, 932, 996, 957], [975, 933, 997, 958], [934, 998, 959, 970]], summoners: [[975, 974], [933, 932], [958, 957]],
          residents: [974, 932, 996, 957, 971, 962, 969], weather: ['hail', 'clear', 'fog'],
          props: ['snowpine', 'rock', 'crystal', 'snowpine', 'pillar'],
          music: { root: 60, scale: [0, 2, 3, 5, 7, 9, 10], bpm: 108, mood: 'mystic' }
        }
      },
      {
        id: 'asado', base: 'desert', color: 0xe0a050, k: .2,
        name: 'Desierto Asado', desc: 'Arena, viento y ruinas al este de Paldea. Cangrejos de roca, gusanos de hierro y matojos rodantes cruzan las dunas.',
        unlock: 'Completa la Cumbre Glaseada', zonas: ['Dunas', 'Ruinas'],
        santuario: { de: 'desert', name: 'Casa del Mochi', heart: 'Corazón de las cadenas', legendaries: [1025], color: 0xd85aff },
        datos: {
          types: ['ground', 'fire', 'rock', 'electric'], late: ['steel', 'water'], legendaries: [1025],
          bosses: [949, 939, 952], guardians: [[950, 968], [939, 938], [952, 951]],
          totems: [[938, 940, 946, 951], [939, 941, 947, 952], [950, 968, 967, 961]], summoners: [[939, 938], [941, 940], [961, 960]],
          residents: [938, 940, 946, 951, 950, 968, 960], weather: ['sun', 'clear', 'sun'],
          props: ['cactus', 'rock', 'pillar', 'deadtree', 'rock'],
          music: { root: 57, scale: [0, 1, 4, 5, 7, 8, 10], bpm: 116, mood: 'tense' }
        }
      },
      {
        id: 'zonacero', base: 'cave', color: 0x5aa8c8, k: .3,
        name: 'Zona Cero', desc: 'El gran cráter del centro de Paldea. Cristales tera, Pokémon paradoja del pasado y del futuro, y en el fondo, la Cripta.',
        unlock: 'Completa el Desierto Asado', zonas: ['Laderas del cráter', 'Fondo de Zona Cero'],
        santuario: { de: 'iris', name: 'Cripta de Zona Cero', heart: 'Corazón teracristal', legendaries: [1007, 1008, 1024], color: 0x9ae8ff },
        datos: {
          types: ['dragon', 'psychic', 'fighting', 'electric'], late: ['steel', 'fairy'], evolved: true, legendaries: [1007, 1008, 1024],
          bosses: [1005, 1006, 998], guardians: [[984, 990], [987, 991], [993, 986]],
          totems: [[984, 985, 986, 987], [990, 991, 992, 993], [988, 989, 994, 995]], summoners: [[1009, 1010], [1020, 1021], [1022, 1023]],
          residents: [984, 990, 985, 991, 996, 965, 1000], weather: ['fog', 'clear', 'ash'],
          props: ['crystal', 'crystal', 'pillar', 'rock', 'crystal'],
          music: { root: 55, scale: [0, 1, 3, 6, 7, 8, 11], bpm: 130, mood: 'mystic' }
        }
      }
    ]
  });
})();
