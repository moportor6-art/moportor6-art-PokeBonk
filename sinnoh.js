/* Subversión propia: Sinnoh, la cuarta región (datos). El motor de regiones está en regiones.js.
   - Liga: las familias de Sinnoh con 4 ataques, pasiva, evolución y reto. Los bebés de Sinnoh empiezan
     ahora las familias de Chansey (Happiny), Snorlax (Munchlax), Mr. Mime (Mime Jr.), Sudowoodo (Bonsly),
     Mantine (Mantyke), Roselia (Budew) y Chimecho (Chingling): copian su ficha y la sustituyen.
   - Las evoluciones de 4.ª generación de familias antiguas (Magnezone, Electivire, Togekiss, Gallade,
     Mamoswine, Weavile...) entran solas en la partida al abrirse la Pokédex hasta el 493.
   - Mapas: Bosque Vetusto, Ruta Nevada, Lago Valor y Mundo Distorsión, tras el Pilar Celeste. En la zona 3,
     su legendario (Shaymin, Regigigas, el trío del lago o Dialga, Palkia y Giratina).
   - Más duros que Hoenn: enemigos con +40% PS y +25% daño (Mundo Distorsión, +60% y +35%).
   - Contadores de retos: sinnoh, sinnoh_local y runs_s. */
(() => {
  const r = (desc, counter, goal) => ({ desc, counter, goal });
  const n_ = n => n.toLocaleString('es');
  const partida = r('Juega 1 partida en un mapa de Sinnoh.', 'runs_s', 1);
  const deSinnoh = n => r(`Derrota a ${n_(n)} Pokémon de Sinnoh.`, 'sinnoh', n);
  const local = n => r(`Derrota a ${n_(n)} Pokémon con Pokémon de Sinnoh.`, 'sinnoh_local', n);
  const bajas = (m, nombre, n) => r(`Consigue ${n_(n)} bajas en ${nombre}.`, 'kills_' + m, n);
  const guardianes = (m, nombre, n) => r(`Derrota a ${n} guardianes de ${nombre}.`, 'boss_' + m, n);
  const dificil = (m, nombre) => r(`Completa ${nombre} en Difícil.`, 'tier_' + m, 2);
  const pesadilla = (m, nombre) => r(`Completa ${nombre} en Pesadilla.`, 'tier_' + m, 3);
  const liga = n => r(`Ten ${n} miembros en tu Liga.`, 'league', n);
  const VET = ['eterna', 'el Bosque Vetusto'], NEV = ['nevada', 'la Ruta Nevada'], VAL = ['valor', 'el Lago Valor'], DIS = ['distorsion', 'el Mundo Distorsión'];
  const F = (id, role, passive, kit, rank, evo, challenge) => ({ id, role, passive, kit, rank, ...evo, challenge });

  const LIGA = [
    F(387, 'Isla andante', 'battle-armor', ['razor-leaf', 'bite', 'seed-bomb', 'wood-hammer'], 'common', { evoLevels: [18, 32] }, partida),
    F(390, 'Mono llameante', 'iron-fist', ['ember', 'mach-punch', 'flame-wheel', 'close-combat'], 'common', { evoLevels: [14, 36] }, partida),
    F(393, 'Emperador', 'steel-plumage', ['bubble', 'peck', 'brine', 'hydro-cannon'], 'common', { evoLevels: [16, 36] }, partida),
    F(396, 'Rapaz', 'hustle', ['quick-attack', 'wing-attack', 'close-combat', 'brave-bird'], 'common', { evoLevels: [14, 34] }, deSinnoh(1500)),
    F(399, 'Castor', 'oblivious', ['tackle', 'headbutt', 'aqua-tail', 'hyper-fang'], 'common', { evoLevels: [15] }, deSinnoh(1000)),
    F(401, 'Violinista', 'technician', ['struggle-bug', 'fury-cutter', 'x-scissor', 'bug-buzz'], 'common', { evoLevels: [10] }, bajas(...VET, 3000)),
    F(403, 'Destello', 'static', ['spark', 'bite', 'thunder-fang', 'wild-charge'], 'common', { evoLevels: [15, 30] }, bajas(...VAL, 3000)),
    F(408, 'Cabezazo', 'mold-breaker', ['headbutt', 'ancient-power', 'zen-headbutt', 'head-smash'], 'rare', { evoLevels: [30] }, [liga(90), bajas(...NEV, 15000)]),
    F(410, 'Escudo', 'sturdy', ['tackle', 'ancient-power', 'iron-head', 'heavy-slam'], 'rare', { evoLevels: [30] }, [liga(90), guardianes(...NEV, 8)]),
    F(412, 'Capa', 'tinted-lens', ['tackle', 'bug-bite', 'psybeam', 'bug-buzz'], 'common', { branch: [413, 414], evoLevel: 20 }, bajas(...VET, 4000)),
    F(415, 'Colmena', 'star-swarm', ['bug-bite', 'gust', 'attack-order', 'air-slash'], 'uncommon', { evoLevels: [21] }, bajas(...VET, 6000)),
    F(417, 'Ardilla', 'pickup', ['nuzzle', 'quick-attack', 'spark', 'discharge'], 'uncommon', {}, local(3000)),
    F(418, 'Socorrista', 'swift-swim', ['aqua-jet', 'quick-attack', 'aqua-tail', 'wave-crash'], 'common', { evoLevels: [26] }, bajas(...VAL, 4000)),
    F(420, 'Cereza', 'chlorophyll', ['magical-leaf', 'growth', 'petal-blizzard', 'solar-beam'], 'common', { evoLevels: [25] }, bajas(...VET, 5000)),
    F(422, 'Babosa marina', 'slimy-skin', ['mud-slap', 'water-pulse', 'muddy-water', 'earth-power'], 'common', { evoLevels: [30] }, bajas(...VAL, 5000)),
    F(425, 'Globo', 'cotton-drift', ['astonish', 'gust', 'ominous-wind', 'shadow-ball'], 'uncommon', { evoLevels: [28] }, bajas(...DIS, 4000)),
    F(427, 'Conejita', 'limber-kicks', ['pound', 'jump-kick', 'bounce', 'high-jump-kick'], 'uncommon', { evoLevels: [25] }, local(4000)),
    F(431, 'Gata altiva', 'pickpocket', ['scratch', 'fake-out', 'slash', 'play-rough'], 'common', { evoLevels: [38] }, deSinnoh(3000)),
    F(434, 'Mofeta', 'aftermath', ['acid-spray', 'fury-swipes', 'night-slash', 'belch'], 'common', { evoLevels: [34] }, bajas(...DIS, 5000)),
    F(436, 'Espejo antiguo', 'barrier-wall', ['confusion', 'gyro-ball', 'extrasensory', 'flash-cannon'], 'uncommon', { evoLevels: [33] }, bajas(...NEV, 6000)),
    F(441, 'Loro cantor', 'compound-eyes', ['peck', 'chatter', 'hyper-voice', 'boomburst'], 'uncommon', {}, local(5000)),
    F(442, 'Ciento ocho almas', 'wail', ['shadow-sneak', 'ominous-wind', 'dark-pulse', 'shadow-ball'], 'rare', {}, [liga(100), local(10800)]),
    F(443, 'Tiburón de tierra', 'sand-rush', ['sand-tomb', 'dragon-breath', 'dragon-rush', 'earthquake'], 'rare', { evoLevels: [24, 48] }, [liga(110), dificil(...DIS)]),
    F(447, 'Aura', 'sniper', ['force-palm', 'quick-attack', 'aura-sphere', 'close-combat'], 'rare', { evoLevels: [30] }, [liga(100), guardianes(...NEV, 6)]),
    F(449, 'Hipopótamo', 'sand-jet', ['sand-attack', 'bite', 'sand-tomb', 'earthquake'], 'uncommon', { evoLevels: [34] }, bajas(...NEV, 7000)),
    F(451, 'Escorpión', 'battle-armor', ['poison-sting', 'pin-missile', 'poison-fang', 'cross-poison'], 'uncommon', { evoLevels: [40] }, bajas(...DIS, 6000)),
    F(453, 'Sapo tóxico', 'slimy-skin', ['poison-sting', 'feint-attack', 'poison-jab', 'drain-punch'], 'uncommon', { evoLevels: [37] }, local(6000)),
    F(455, 'Atrapamoscas', 'carnivore', ['vine-whip', 'bite', 'crunch', 'power-whip'], 'uncommon', {}, guardianes(...VET, 4)),
    F(456, 'Mariposa marina', 'swift-swim', ['water-gun', 'gust', 'water-pulse', 'silver-wind'], 'common', { evoLevels: [31] }, bajas(...VAL, 3500)),
    F(459, 'Pino helado', 'ice-body', ['powder-snow', 'razor-leaf', 'wood-hammer', 'blizzard'], 'common', { evoLevels: [40] }, bajas(...NEV, 4000)),
    F(479, 'Plasma', 'download', ['thunder-shock', 'ominous-wind', 'discharge', 'hydro-pump'], 'rare', {}, [liga(100), local(15000)]),
    // legendarios y singulares
    F(480, 'Saber', 'pendulum', ['confusion', 'swift', 'extrasensory', 'future-sight'], 'legendary', {}, [liga(115), dificil(...VAL)]),
    F(481, 'Emoción', 'sweet-smooch', ['confusion', 'heart-stamp', 'psychic', 'mystical-fire'], 'legendary', {}, [liga(115), guardianes(...VAL, 12)]),
    F(482, 'Voluntad', 'sniper', ['confusion', 'psycho-cut', 'psychic', 'explosion'], 'legendary', {}, [liga(115), local(30000)]),
    F(483, 'Señor del tiempo', 'time-travel', ['metal-claw', 'dragon-breath', 'flash-cannon', 'roar-of-time'], 'legendary', {}, [liga(125), pesadilla(...DIS)]),
    F(484, 'Señor del espacio', 'sea-guardian', ['water-pulse', 'dragon-breath', 'hydro-pump', 'spacial-rend'], 'legendary', {}, [liga(125), pesadilla(...VAL)]),
    F(485, 'Volcán de acero', 'flame-pressure', ['fire-fang', 'iron-head', 'lava-plume', 'magma-storm'], 'legendary', {}, [liga(120), guardianes(...NEV, 15)]),
    F(486, 'Coloso', 'anger-point', ['stomp', 'zen-headbutt', 'crush-grip', 'giga-impact'], 'legendary', {}, [liga(120), pesadilla(...NEV)]),
    F(487, 'Señor de la distorsión', 'phantom', ['shadow-sneak', 'dragon-breath', 'shadow-force', 'dragon-pulse'], 'legendary', {}, [liga(125), guardianes(...DIS, 20)]),
    F(488, 'Luna creciente', 'lunar-blessing', ['confusion', 'psycho-cut', 'moonblast', 'psychic'], 'legendary', {}, [liga(120), local(50000)]),
    F(489, 'Hermano del mar', 'swift-swim', ['water-gun', 'bubble-beam', 'water-pulse', 'scald'], 'legendary', {}, [liga(110), bajas(...VAL, 30000)]),
    F(490, 'Príncipe del mar', 'water-absorb', ['bubble', 'water-pulse', 'scald', 'hydro-pump'], 'legendary', {}, [liga(120), dificil(...VAL)]),
    F(491, 'Pesadilla', 'pendulum', ['feint-attack', 'dark-pulse', 'nightmare', 'dark-void'], 'legendary', {}, [liga(125), local(80000)]),
    F(492, 'Gratitud', 'natural-cure', ['magical-leaf', 'energy-ball', 'seed-flare', 'air-slash'], 'legendary', {}, [liga(115), pesadilla(...VET)]),
    F(493, 'Creador', 'mew', ['swift', 'extreme-speed', 'hyper-beam', 'judgment'], 'legendary', {}, [liga(130), local(150000)])
  ];

  window.PB_REGIONES?.registrar({
    id: 'sinnoh', name: 'Sinnoh', gen: 4, min: 387, max: 493,
    gate: 'hoenn', emblem: 493, c: '#7a5ad8', c2: '#c8a8ff',
    liga: LIGA,
    bebes: { 113: 440, 143: 446, 122: 439, 185: 438, 226: 458, 315: 406, 358: 433 },
    niveles: { 406: [12, 36], 433: [12] },
    oi: { 113: 440, 242: 440, 143: 446, 122: 439, 185: 438, 226: 458, 315: 406, 407: 406, 358: 433 },
    dificultad: { base: [1.4, 1.25], distorsion: [1.6, 1.35] },
    contadores: { derrotas: 'sinnoh', local: 'sinnoh_local', runs: 'runs_s' },
    mapas: [
      {
        id: 'eterna', base: 'forest', color: 0x1e3a2a, k: .35,
        name: 'Bosque Vetusto', desc: 'Un bosque viejo y oscuro de Sinnoh donde la niebla esconde fantasmas. Solo viven Pokémon de Sinnoh.',
        unlock: 'Completa el Pilar Celeste', zonas: ['Bosque en penumbra', 'La vieja mansión'],
        datos: {
          types: ['grass', 'bug', 'ghost', 'normal'], late: ['poison', 'fairy'], legendaries: [492],
          residents: [396, 399, 401, 412, 415, 420, 425], weather: ['fog', 'clear', 'rain'],
          bosses: [416, 426, 455], guardians: [[416, 414], [426, 429], [455, 465]],
          totems: [[397, 402, 413, 421], [414, 416, 426, 424], [429, 465, 455, 398]],
          summoners: [[416, 415], [426, 425], [398, 396]],
          props: ['pine', 'tree', 'mushroom', 'deadtree', 'bush'],
          music: { root: 59, scale: [0, 2, 3, 5, 7, 8, 10], bpm: 104, mood: 'mystic' }
        }
      },
      {
        id: 'nevada', base: 'glacier', color: 0xc8d8f0, k: .12,
        name: 'Ruta Nevada', desc: 'Ventisca, montañas y un templo antiguo cerca de Ciudad Puntaneva. Hielo, roca y acero.',
        unlock: 'Completa el Bosque Vetusto', zonas: ['Ventisca en la ruta', 'Templo Puntaneva'],
        datos: {
          types: ['ice', 'rock', 'steel', 'fighting'], late: ['dragon', 'dark'], legendaries: [486],
          residents: [459, 447, 436, 410, 408, 449], weather: ['hail', 'clear', 'hail'],
          bosses: [460, 473, 461], guardians: [[460, 478], [473, 471], [461, 448]],
          totems: [[460, 437, 411, 409], [473, 476, 448, 462], [461, 478, 471, 464]],
          summoners: [[460, 459], [448, 447], [437, 436]],
          props: ['snowpine', 'rock', 'crystal', 'snowpine', 'pine'],
          music: { root: 64, scale: [0, 2, 4, 7, 9], bpm: 96, mood: 'calm' }
        }
      },
      {
        id: 'valor', base: 'coast', color: 0x2a9ac8, k: .2,
        name: 'Lago Valor', desc: 'Lagos tranquilos y praderas con tormentas eléctricas. Dicen que el trío del lago vigila sus aguas.',
        unlock: 'Completa la Ruta Nevada', zonas: ['Orilla del lago', 'Tormenta sobre el lago'],
        datos: {
          types: ['water', 'electric', 'psychic', 'fairy'], late: ['steel', 'flying'], legendaries: [480, 481, 482],
          residents: [418, 422, 456, 403, 417, 439], weather: ['rain', 'clear', 'clear'],
          bosses: [419, 405, 423], guardians: [[419, 457], [405, 462], [423, 474]],
          totems: [[419, 423, 457, 405], [462, 474, 468, 437], [404, 419, 457, 423]],
          summoners: [[419, 418], [405, 403], [423, 422]],
          props: ['tree', 'bush', 'rock', 'coral', 'tree'],
          music: { root: 60, scale: [0, 2, 4, 5, 7, 9, 11], bpm: 112, mood: 'bright' }
        }
      },
      {
        id: 'distorsion', base: 'cave', color: 0x5a1a3a, k: .3,
        name: 'Mundo Distorsión', desc: 'Más allá de la Columna Lanza, donde el tiempo y el espacio se retuercen. El reto más duro hasta ahora.',
        unlock: 'Completa el Lago Valor', zonas: ['Columna Lanza', 'El otro lado'],
        datos: {
          types: ['dragon', 'ghost', 'dark', 'steel', 'psychic'], late: ['poison', 'fire'], evolved: true, legendaries: [483, 484, 487],
          residents: [442, 443, 434, 451, 453, 425], weather: ['fog', 'ash', 'fog'],
          bosses: [445, 477, 452], guardians: [[445, 444], [477, 442], [452, 454]],
          totems: [[444, 435, 452, 454], [445, 477, 442, 430], [445, 452, 477, 461]],
          summoners: [[445, 443], [477, 442], [435, 434]],
          props: ['pillar', 'grave', 'crystal', 'lavarock', 'deadtree'],
          music: { root: 58, scale: [0, 1, 3, 5, 6, 8, 10], bpm: 120, mood: 'tense' }
        }
      }
    ]
  });
})();
