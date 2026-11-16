/* Subversión propia: Teselia, la quinta región (datos). El motor de regiones está en regiones.js.
   - Liga: las 82 familias de Teselia (#494-#649) con 4 ataques, pasiva, evolución y reto.
   - Sprites: los de PMD que ya traía el juego; los 14 que no tenían animaciones (Simisear, Tranquill,
     Blitzle...) y el variocolor de Victini y Karrablast salen de Pokémon Reloaded (tools/especies_reloaded.py).
   - Mapas: Bosque Azulejo, Desierto Resort, Cueva Electrorroca y Torre Dragospiral, tras el Mundo Distorsión.
     Santuarios: Santuario Abundancia (Tornadus, Thundurus y Landorus), Castillo Viejo (Victini),
     Cueva Gigante (Kyurem) y la cima de la Torre Dragospiral (Reshiram y Zekrom).
   - Más duros que Sinnoh: enemigos con +60% PS y +40% daño (Torre Dragospiral, +80% y +50%).
   - Contadores de retos: teselia, teselia_local y runs_u. */
(() => {
  const r = (desc, counter, goal) => ({ desc, counter, goal });
  const n_ = n => n.toLocaleString('es');
  const partida = r('Juega 1 partida en un mapa de Teselia.', 'runs_u', 1);
  const deTeselia = n => r(`Derrota a ${n_(n)} Pokémon de Teselia.`, 'teselia', n);
  const local = n => r(`Derrota a ${n_(n)} Pokémon con Pokémon de Teselia.`, 'teselia_local', n);
  const bajas = (m, nombre, n) => r(`Consigue ${n_(n)} bajas en ${nombre}.`, 'kills_' + m, n);
  const guardianes = (m, nombre, n) => r(`Derrota a ${n} guardianes de ${nombre}.`, 'boss_' + m, n);
  const dificil = (m, nombre) => r(`Completa ${nombre} en Difícil.`, 'tier_' + m, 2);
  const pesadilla = (m, nombre) => r(`Completa ${nombre} en Pesadilla.`, 'tier_' + m, 3);
  const liga = n => r(`Ten ${n} miembros en tu Liga.`, 'league', n);
  const AZU = ['azulejo', 'el Bosque Azulejo'], RES = ['resort', 'el Desierto Resort'], ELE = ['electrorroca', 'la Cueva Electrorroca'], DRA = ['dragospiral', 'la Torre Dragospiral'];
  const F = (id, role, passive, kit, rank, evo, challenge) => ({ id, role, passive, kit, rank, ...evo, challenge });

  const LIGA = [
    // iniciales
    F(495, 'Serpiente real', 'serpent-glare', ['vine-whip', 'leaf-tornado', 'leaf-blade', 'leaf-storm'], 'common', { evoLevels: [17, 36] }, partida),
    F(498, 'Cerdo de fuego', 'blaze', ['ember', 'flame-charge', 'heat-crash', 'flare-blitz'], 'common', { evoLevels: [17, 36] }, partida),
    F(501, 'Samurái', 'torrent-shell', ['water-gun', 'razor-shell', 'aqua-tail', 'hydro-pump'], 'common', { evoLevels: [17, 36] }, partida),
    // comunes de las rutas
    F(504, 'Vigía', 'lookout', ['tackle', 'bite', 'hyper-fang', 'crunch'], 'common', { evoLevels: [20] }, deTeselia(1000)),
    F(506, 'Perro fiel', 'loyal-guard', ['tackle', 'bite', 'take-down', 'giga-impact'], 'common', { evoLevels: [16, 32] }, deTeselia(1500)),
    F(509, 'Ladrona', 'pickpocket', ['scratch', 'assurance', 'night-slash', 'play-rough'], 'common', { evoLevels: [20] }, deTeselia(2000)),
    F(511, 'Mono hierba', 'harvest', ['vine-whip', 'bite', 'seed-bomb', 'crunch'], 'common', {}, bajas(...AZU, 2500)),
    F(513, 'Mono fuego', 'tantrum', ['incinerate', 'bite', 'flame-burst', 'fire-blast'], 'common', {}, bajas(...RES, 2500)),
    F(515, 'Mono agua', 'bubble-guard', ['water-gun', 'bite', 'scald', 'crunch'], 'common', {}, bajas(...ELE, 2500)),
    F(517, 'Comesueños', 'pendulum', ['psybeam', 'stored-power', 'psychic', 'dream-eater'], 'uncommon', {}, deTeselia(3000)),
    F(519, 'Paloma', 'tailwind', ['gust', 'air-cutter', 'air-slash', 'sky-attack'], 'common', { evoLevels: [21, 32] }, deTeselia(1200)),
    F(522, 'Cebra eléctrica', 'stampede', ['shock-wave', 'spark', 'discharge', 'wild-charge'], 'common', { evoLevels: [27] }, bajas(...ELE, 3000)),
    F(524, 'Mineral', 'sturdy', ['rock-blast', 'rock-slide', 'power-gem', 'stone-edge'], 'common', {}, bajas(...ELE, 4000)),
    F(527, 'Murciélago', 'vampire', ['gust', 'heart-stamp', 'air-slash', 'psychic'], 'common', {}, bajas(...ELE, 3500)),
    F(529, 'Taladro', 'burrower', ['mud-slap', 'dig', 'drill-run', 'earthquake'], 'uncommon', { evoLevels: [31] }, bajas(...RES, 5000)),
    F(531, 'Enfermera', 'healer', ['pound', 'disarming-voice', 'hyper-voice', 'double-edge'], 'uncommon', {}, local(3000)),
    F(532, 'Albañil', 'apprentice', ['low-kick', 'rock-throw', 'hammer-arm', 'superpower'], 'uncommon', {}, bajas(...AZU, 5000)),
    F(535, 'Renacuajo', 'slimy-skin', ['bubble-beam', 'mud-shot', 'muddy-water', 'hydro-pump'], 'common', { evoLevels: [25, 36] }, deTeselia(2500)),
    F(538, 'Judoka', 'guts', ['circle-throw', 'storm-throw', 'vital-throw', 'superpower'], 'uncommon', {}, bajas(...AZU, 4000)),
    F(539, 'Karateka', 'inner-focus', ['double-kick', 'low-sweep', 'brick-break', 'close-combat'], 'uncommon', {}, bajas(...AZU, 4000)),
    F(540, 'Sastre', 'chlorophyll', ['struggle-bug', 'razor-leaf', 'x-scissor', 'leaf-blade'], 'common', { evoLevels: [20] }, bajas(...AZU, 3000)),
    F(543, 'Ciempiés', 'venom-sting', ['poison-sting', 'bug-bite', 'venoshock', 'megahorn'], 'common', { evoLevels: [22, 30] }, bajas(...AZU, 3500)),
    F(546, 'Algodón', 'cotton-drift', ['absorb', 'fairy-wind', 'giga-drain', 'moonblast'], 'uncommon', {}, bajas(...AZU, 4500)),
    F(548, 'Bailarina', 'chlorophyll', ['absorb', 'magical-leaf', 'petal-dance', 'leaf-storm'], 'uncommon', {}, bajas(...AZU, 4500)),
    F(550, 'Pez bravo', 'reckless', ['water-gun', 'aqua-jet', 'crunch', 'wave-crash'], 'common', {}, deTeselia(3500)),
    F(551, 'Cocodrilo del desierto', 'intimidate', ['mud-slap', 'bite', 'crunch', 'earthquake'], 'uncommon', { evoLevels: [29, 40] }, bajas(...RES, 4000)),
    F(554, 'Daruma', 'hustle', ['ember', 'fire-fang', 'fire-punch', 'flare-blitz'], 'uncommon', { evoLevels: [35] }, bajas(...RES, 5000)),
    F(556, 'Cactus bailarín', 'rough-skin', ['absorb', 'pin-missile', 'petal-blizzard', 'solar-beam'], 'uncommon', {}, bajas(...RES, 4500)),
    F(557, 'Ermitaño', 'shell-bomb', ['rock-blast', 'bug-bite', 'x-scissor', 'rock-wrecker'], 'common', { evoLevels: [34] }, bajas(...RES, 3500)),
    F(559, 'Pandillero', 'moxie', ['low-kick', 'payback', 'crunch', 'high-jump-kick'], 'uncommon', { evoLevels: [39] }, local(4000)),
    F(561, 'Pájaro tótem', 'magic-guard', ['gust', 'psybeam', 'air-slash', 'psychic'], 'rare', {}, [liga(140), guardianes(...RES, 8)]),
    F(562, 'Máscara', 'wail', ['astonish', 'hex', 'shadow-claw', 'shadow-ball'], 'uncommon', { evoLevels: [34] }, bajas(...RES, 6000)),
    F(564, 'Tortuga fósil', 'spiral-shell', ['water-gun', 'ancient-power', 'aqua-tail', 'hydro-pump'], 'rare', { evoLevels: [37] }, [liga(135), bajas(...RES, 8000)]),
    F(566, 'Primer pájaro', 'ancient-wings', ['rock-throw', 'ancient-power', 'acrobatics', 'rock-slide'], 'rare', { evoLevels: [37] }, [liga(135), bajas(...RES, 8000)]),
    F(568, 'Basura', 'sludge-body', ['acid-spray', 'sludge', 'sludge-bomb', 'gunk-shot'], 'common', { evoLevels: [36] }, deTeselia(4000)),
    F(570, 'Ilusionista', 'phantom', ['scratch', 'feint-attack', 'night-daze', 'foul-play'], 'rare', { evoLevels: [30] }, [liga(140), local(10000)]),
    F(572, 'Chinchilla', 'skill-link', ['pound', 'tail-slap', 'swift', 'hyper-voice'], 'common', {}, deTeselia(3000)),
    F(574, 'Gótica', 'shadow-tag', ['confusion', 'psybeam', 'psyshock', 'psychic'], 'uncommon', { evoLevels: [32, 41] }, local(5000)),
    F(577, 'Célula', 'magic-guard', ['confusion', 'psyshock', 'psychic', 'future-sight'], 'uncommon', { evoLevels: [32, 41] }, local(5000)),
    F(580, 'Pato', 'big-pecks', ['water-gun', 'bubble-beam', 'air-slash', 'hurricane'], 'common', { evoLevels: [35] }, bajas(...DRA, 3000)),
    F(582, 'Helado', 'ice-body', ['icicle-spear', 'frost-breath', 'ice-beam', 'blizzard'], 'common', { evoLevels: [35, 47] }, bajas(...ELE, 4000)),
    F(585, 'Ciervo de las estaciones', 'sap-sipper', ['tackle', 'bullet-seed', 'horn-leech', 'double-edge'], 'common', { evoLevels: [34] }, bajas(...AZU, 3500)),
    F(587, 'Ardilla planeadora', 'static', ['nuzzle', 'spark', 'acrobatics', 'discharge'], 'uncommon', {}, bajas(...ELE, 5000)),
    F(588, 'Escarabajo lancero', 'swarm', ['fury-cutter', 'x-scissor', 'iron-head', 'megahorn'], 'uncommon', {}, bajas(...AZU, 5000)),
    F(590, 'Seta trampa', 'effect-spore', ['absorb', 'clear-smog', 'giga-drain', 'solar-beam'], 'common', { evoLevels: [39] }, bajas(...AZU, 4000)),
    F(592, 'Medusa fantasma', 'tentacles', ['bubble', 'hex', 'brine', 'water-spout'], 'uncommon', { evoLevels: [40] }, local(4500)),
    F(594, 'Pez cuidador', 'healer', ['water-pulse', 'brine', 'scald', 'hydro-pump'], 'uncommon', {}, local(5000)),
    F(595, 'Araña eléctrica', 'spider-silk', ['fury-cutter', 'electroweb', 'bug-buzz', 'discharge'], 'common', { evoLevels: [36] }, bajas(...ELE, 3500)),
    F(597, 'Semilla de hierro', 'iron-barbs', ['metal-claw', 'pin-missile', 'gyro-ball', 'power-whip'], 'uncommon', { evoLevels: [40] }, bajas(...ELE, 5000)),
    F(599, 'Engranaje', 'dynamo', ['thunder-shock', 'gear-grind', 'discharge', 'zap-cannon'], 'uncommon', { evoLevels: [38, 49] }, bajas(...ELE, 6000)),
    F(602, 'Anguila eléctrica', 'levitate', ['spark', 'charge-beam', 'thunderbolt', 'wild-charge'], 'uncommon', {}, guardianes(...ELE, 5)),
    F(605, 'Alienígena', 'download', ['confusion', 'psybeam', 'zen-headbutt', 'psychic'], 'uncommon', { evoLevels: [42] }, local(6000)),
    F(607, 'Vela', 'flash-fire', ['ember', 'hex', 'flamethrower', 'shadow-ball'], 'rare', {}, [liga(135), guardianes(...DRA, 6)]),
    F(610, 'Colmillo de hacha', 'mold-breaker', ['scratch', 'dragon-claw', 'dual-chop', 'outrage'], 'rare', { evoLevels: [38, 48] }, [liga(140), bajas(...DRA, 10000)]),
    F(613, 'Osezno helado', 'snow-cloak', ['powder-snow', 'frost-breath', 'icicle-crash', 'blizzard'], 'common', { evoLevels: [37] }, bajas(...ELE, 4500)),
    F(615, 'Cristal de nieve', 'levitate', ['ice-shard', 'aurora-beam', 'freeze-dry', 'ice-beam'], 'uncommon', {}, guardianes(...ELE, 6)),
    F(616, 'Caracol', 'shell-armor', ['struggle-bug', 'acid-spray', 'u-turn', 'bug-buzz'], 'uncommon', {}, bajas(...AZU, 5000)),
    F(618, 'Pez trampa', 'mud-trail', ['mud-slap', 'thunder-shock', 'mud-shot', 'discharge'], 'uncommon', {}, bajas(...RES, 5500)),
    F(619, 'Kung-fu', 'limber-kicks', ['force-palm', 'drain-punch', 'aura-sphere', 'high-jump-kick'], 'uncommon', { evoLevels: [50] }, local(7000)),
    F(621, 'Dragón de las cavernas', 'rough-skin', ['dragon-tail', 'bite', 'dragon-claw', 'outrage'], 'rare', {}, [liga(140), guardianes(...DRA, 8)]),
    F(622, 'Gólem antiguo', 'iron-fist', ['mud-slap', 'shadow-punch', 'heavy-slam', 'earthquake'], 'uncommon', { evoLevels: [43] }, guardianes(...DRA, 5)),
    F(624, 'Peón de filo', 'defiant', ['metal-claw', 'assurance', 'night-slash', 'iron-head'], 'uncommon', { evoLevels: [52] }, local(8000)),
    F(626, 'Bisonte', 'rhino-charge', ['fury-attack', 'horn-attack', 'head-charge', 'giga-impact'], 'uncommon', {}, bajas(...AZU, 6000)),
    F(627, 'Águila valiente', 'hustle', ['peck', 'crush-claw', 'brave-bird', 'sky-attack'], 'uncommon', { evoLevels: [54] }, bajas(...DRA, 6000)),
    F(629, 'Buitre', 'ill-omen', ['gust', 'feint-attack', 'air-slash', 'brave-bird'], 'uncommon', { evoLevels: [54] }, bajas(...DRA, 6000)),
    F(631, 'Oso hormiguero', 'long-tongue', ['fire-spin', 'fire-lash', 'inferno', 'flare-blitz'], 'uncommon', {}, bajas(...RES, 6000)),
    F(632, 'Hormiga de acero', 'hustle', ['bug-bite', 'metal-claw', 'x-scissor', 'iron-head'], 'uncommon', {}, bajas(...ELE, 6000)),
    F(633, 'Dragón de tres cabezas', 'twin-heads', ['dragon-breath', 'bite', 'dragon-pulse', 'outrage'], 'rare', { evoLevels: [50, 64] }, [liga(150), pesadilla(...DRA)]),
    F(636, 'Polilla del sol', 'heat-haze', ['ember', 'bug-bite', 'fiery-dance', 'fire-blast'], 'rare', { evoLevels: [59] }, [liga(150), guardianes(...RES, 15)]),
    // legendarios y singulares
    F(494, 'Victoria', 'flame-pressure', ['flame-charge', 'zen-headbutt', 'inferno', 'v-create'], 'legendary', {}, [liga(150), dificil(...RES)]),
    F(638, 'Espadachín de acero', 'steadfast-aura', ['double-kick', 'iron-head', 'sacred-sword', 'close-combat'], 'legendary', {}, [liga(145), guardianes(...ELE, 15)]),
    F(639, 'Espadachín de roca', 'horn-pride', ['double-kick', 'rock-slide', 'sacred-sword', 'stone-edge'], 'legendary', {}, [liga(145), guardianes(...RES, 15)]),
    F(640, 'Espadachín de hierba', 'limber-kicks', ['double-kick', 'magical-leaf', 'sacred-sword', 'leaf-blade'], 'legendary', {}, [liga(145), guardianes(...AZU, 15)]),
    F(641, 'Torbellino', 'tailwind', ['gust', 'air-slash', 'bleakwind-storm', 'hurricane'], 'legendary', {}, [liga(150), dificil(...AZU)]),
    F(642, 'Tormenta', 'volt-pressure', ['thunder-shock', 'discharge', 'wildbolt-storm', 'thunder'], 'legendary', {}, [liga(150), local(40000)]),
    F(645, 'Señor de la tierra', 'arena-trap', ['sand-tomb', 'earth-power', 'sandsear-storm', 'earthquake'], 'legendary', {}, [liga(155), pesadilla(...AZU)]),
    F(643, 'Dragón de la verdad', 'flame-pressure', ['dragon-breath', 'fusion-flare', 'dragon-pulse', 'blue-flare'], 'legendary', {}, [liga(160), pesadilla(...DRA)]),
    F(644, 'Dragón de los ideales', 'volt-pressure', ['dragon-breath', 'fusion-bolt', 'dragon-claw', 'bolt-strike'], 'legendary', {}, [liga(160), guardianes(...DRA, 25)]),
    F(646, 'Dragón vacío', 'ice-pressure', ['dragon-breath', 'icicle-spear', 'dragon-pulse', 'glaciate'], 'legendary', {}, [liga(160), pesadilla(...ELE)]),
    F(647, 'Potro del agua', 'justified', ['aqua-jet', 'double-kick', 'sacred-sword', 'hydro-pump'], 'legendary', {}, [liga(150), local(60000)]),
    F(648, 'Melodía', 'serene-grace', ['round', 'psybeam', 'relic-song', 'psychic'], 'legendary', {}, [liga(150), local(50000)]),
    F(649, 'Insecto paleozoico', 'download', ['fury-cutter', 'x-scissor', 'techno-blast', 'bug-buzz'], 'legendary', {}, [liga(155), dificil(...ELE)])
  ];

  window.PB_REGIONES?.registrar({
    id: 'teselia', name: 'Teselia', gen: 5, min: 494, max: 649,
    gate: 'sinnoh', emblem: 643, c: '#3a3a4a', c2: '#a8a8c8',
    liga: LIGA,
    dificultad: { base: [1.6, 1.4], dragospiral: [1.8, 1.5] },
    contadores: { derrotas: 'teselia', local: 'teselia_local', runs: 'runs_u' },
    mapas: [
      {
        id: 'azulejo', base: 'forest', color: 0x3a8a3a, k: .18,
        name: 'Bosque Azulejo', desc: 'El gran bosque de Teselia: hojas, bichos y luchadores entrenando entre los árboles. Los Pokémon de otras regiones no viven aquí.',
        unlock: 'Completa el Mundo Distorsión', zonas: ['Senda del bosque', 'Corazón del bosque'],
        santuario: { de: 'encina', name: 'Santuario Abundancia', heart: 'Corazón de la abundancia', legendaries: [641, 642, 645], color: 0x9ae85a },
        datos: {
          types: ['grass', 'bug', 'normal', 'fighting'], late: ['poison', 'fairy'], legendaries: [641, 642, 645],
          bosses: [542, 545, 534], guardians: [[542, 541], [545, 544], [534, 533]],
          totems: [[540, 543, 546, 548], [541, 544, 547, 549], [542, 545, 534, 598]], summoners: [[541, 540], [544, 543], [533, 532]],
          residents: [540, 543, 546, 548, 511, 506, 532], weather: ['clear', 'rain', 'clear'],
          props: ['tree', 'tree', 'bush', 'mushroom', 'pine'],
          music: { root: 62, scale: [0, 2, 4, 7, 9], bpm: 116, mood: 'bright' }
        }
      },
      {
        id: 'resort', base: 'desert', color: 0xd8b070, k: .2,
        name: 'Desierto Resort', desc: 'Arena, viento y las ruinas del Castillo Viejo. Fantasmas, cocodrilos y fósiles despiertan bajo el sol.',
        unlock: 'Completa el Bosque Azulejo', zonas: ['Tormenta de arena', 'Castillo Viejo'],
        santuario: { de: 'desert', name: 'Castillo Viejo', heart: 'Corazón del castillo', legendaries: [494], color: 0xffa040 },
        datos: {
          types: ['ground', 'rock', 'dark', 'ghost'], late: ['bug', 'fire', 'psychic'], legendaries: [494],
          bosses: [553, 563, 637], guardians: [[553, 552], [563, 562], [637, 636]],
          totems: [[551, 557, 562, 554], [552, 558, 563, 555], [553, 637, 526, 530]], summoners: [[552, 551], [563, 562], [555, 554]],
          residents: [551, 557, 562, 524, 529, 554, 556], weather: ['sun', 'clear', 'sun'],
          props: ['cactus', 'rock', 'pillar', 'deadtree', 'rock'],
          music: { root: 57, scale: [0, 1, 4, 5, 7, 8, 10], bpm: 108, mood: 'tense' }
        }
      },
      {
        id: 'electrorroca', base: 'cave', color: 0x3a5ab8, k: .25,
        name: 'Cueva Electrorroca', desc: 'Piedras cargadas de electricidad flotan en el aire. Arañas, engranajes y anguilas eléctricas por todas partes.',
        unlock: 'Completa el Desierto Resort', zonas: ['Galería de piedras', 'Cueva Gigante'],
        santuario: { de: 'glacier', name: 'Cueva Gigante', heart: 'Corazón del vacío', legendaries: [646], color: 0x8ad8ff },
        datos: {
          types: ['electric', 'steel', 'rock', 'bug'], late: ['ice', 'ground'], legendaries: [646],
          bosses: [596, 601, 604], guardians: [[596, 595], [601, 600], [604, 603]],
          totems: [[595, 597, 599, 602], [596, 598, 600, 603], [601, 604, 526, 584]], summoners: [[596, 595], [600, 599], [603, 602]],
          residents: [595, 597, 599, 602, 524, 582, 613], weather: ['fog', 'clear', 'hail'],
          props: ['crystal', 'rock', 'crystal', 'pillar', 'rock'],
          music: { root: 60, scale: [0, 2, 3, 5, 7, 9, 10], bpm: 118, mood: 'mystic' }
        }
      },
      {
        id: 'dragospiral', base: 'cave', color: 0x6a6a7a, k: .3,
        name: 'Torre Dragospiral', desc: 'La torre más antigua de Teselia. Dragones y aves rapaces guardan la cima donde descansan Reshiram y Zekrom.',
        unlock: 'Completa la Cueva Electrorroca', zonas: ['Pie de la torre', 'Escalera de los dragones'],
        santuario: { de: 'iris', name: 'Cima de la Torre Dragospiral', heart: 'Corazón de la verdad y los ideales', legendaries: [643, 644], color: 0xd8d8f8 },
        datos: {
          types: ['dragon', 'flying', 'dark', 'fire'], late: ['steel', 'ghost'], evolved: true, legendaries: [643, 644],
          bosses: [612, 635, 628], guardians: [[612, 611], [635, 634], [628, 627]],
          totems: [[610, 633, 627, 629], [611, 634, 630, 621], [612, 635, 628, 637]], summoners: [[611, 610], [634, 633], [630, 629]],
          residents: [610, 633, 621, 627, 629, 580, 622], weather: ['fog', 'clear', 'ash'],
          props: ['pillar', 'rock', 'grave', 'pillar', 'deadtree'],
          music: { root: 58, scale: [0, 1, 3, 5, 7, 8, 10], bpm: 124, mood: 'tense' }
        }
      }
    ]
  });
})();
