/* Subversión propia: Hoenn, la tercera región.
   - Liga: las familias de Hoenn (empiezan por su primera forma), con 4 ataques, pasiva, evolución y reto.
     Azurill y Wynaut pasan a ser la primera forma de Marill y Wobbuffet. Roselia y Chimecho empiezan como
     ellos mismos porque sus bebés (Budew y Chingling) son de Sinnoh.
   - Mapas: Bosque Petalia, Monte Cenizo, Fondo Marino y Pilar Celeste. Se abren uno tras otro después de
     Ciudad Iris y usan de base el aspecto de un mapa del juego (árboles, rocas, cielo), con colores propios.
   - Los Pokémon de Hoenn solo salen en los mapas de Hoenn, y los de Kanto y Johto solo en los suyos.
   - Los mapas de Hoenn son más duros: enemigos con +25% PS y +15% daño (Pilar Celeste, +40% y +25%).
   - Bono de local: con un Pokémon de Hoenn en un mapa de Hoenn, +10% daño. Retos de la Liga que solo
     cuentan con Pokémon de Hoenn (contador hoenn_local).
   - Bono de forastero: con un Pokémon de Kanto o Johto en un mapa de Hoenn, +20% Pokédólares y +30% de
     Polvo Estelar al acabar.
   El juego lee PB_HOENN al cargar los datos (defineProperty-…js): liga(D) añade las fichas, mapas(a) los
   mapas y region() la región. menus-…js usa lista() para filtrar los Pokémon por región durante la partida
   y main-…js llama a start() al crear al jugador, a mods() al recalcular sus estadísticas y a polvo() para
   el multiplicador de Polvo del resultado. */
(() => {
  const HOENN_MIN = 252, HOENN_MAX = 386;
  const esHoenn = id => id >= HOENN_MIN && id <= HOENN_MAX;
  const MAPAS = ['petalia', 'cenizo', 'marino', 'celeste'];

  // ---------- retos ----------
  const r = (desc, counter, goal) => ({ desc, counter, goal });
  const partida = r('Juega 1 partida en un mapa de Hoenn.', 'runs_h', 1);
  const deHoenn = n => r(`Derrota a ${n.toLocaleString('es')} Pokémon de Hoenn.`, 'hoenn', n);
  const local = n => r(`Derrota a ${n.toLocaleString('es')} Pokémon con Pokémon de Hoenn.`, 'hoenn_local', n);
  const bajas = (m, nombre, n) => r(`Consigue ${n.toLocaleString('es')} bajas en ${nombre}.`, 'kills_' + m, n);
  const guardianes = (m, nombre, n) => r(`Derrota a ${n} guardianes de ${nombre}.`, 'boss_' + m, n);
  const dificil = (m, nombre) => r(`Completa ${nombre} en Difícil.`, 'tier_' + m, 2);
  const pesadilla = (m, nombre) => r(`Completa ${nombre} en Pesadilla.`, 'tier_' + m, 3);
  const PET = ['petalia', 'el Bosque Petalia'], CEN = ['cenizo', 'el Monte Cenizo'], MAR = ['marino', 'el Fondo Marino'], CEL = ['celeste', 'el Pilar Celeste'];
  const liga = (n) => r(`Ten ${n} miembros en tu Liga.`, 'league', n);

  // ---------- fichas de la Liga ----------
  // id, papel, pasiva, kit (4 ataques que el juego ya tiene), rareza, evolución y reto.
  const F = (id, role, passive, kit, rank, evo, challenge) => ({ id, role, passive, kit, rank, ...evo, challenge, pbHoenn: true });
  const LIGA = [
    F(252, 'Ninja de la selva', 'sniper', ['bullet-seed', 'quick-attack', 'leaf-blade', 'leaf-storm'], 'common', { evoLevels: [16, 36] }, partida),
    F(255, 'Patada ígnea', 'speed-boost', ['ember', 'double-kick', 'blaze-kick', 'flare-blitz'], 'common', { evoLevels: [16, 36] }, partida),
    F(258, 'Pantanoso', 'swift-swim', ['water-gun', 'mud-shot', 'muddy-water', 'earthquake'], 'common', { evoLevels: [16, 36] }, partida),
    F(261, 'Jauría', 'loyal-guard', ['bite', 'howl', 'crunch', 'sucker-punch'], 'common', { evoLevels: [18] }, deHoenn(1000)),
    F(263, 'Recolector', 'pickup', ['tackle', 'pin-missile', 'slash', 'double-edge'], 'common', { evoLevels: [20] }, deHoenn(1500)),
    F(265, 'Capullo', 'compound-eyes', ['string-shot', 'poison-sting', 'silver-wind', 'bug-buzz'], 'common', { branch: [266, 268], evoLevel: 7 }, bajas(...PET, 3000)),
    F(270, 'Bailarín', 'swift-swim', ['absorb', 'bubble-beam', 'giga-drain', 'hydro-pump'], 'common', { evoLevels: [14, 36] }, bajas(...MAR, 3000)),
    F(273, 'Duende del bosque', 'chlorophyll', ['razor-leaf', 'feint-attack', 'leaf-tornado', 'hurricane'], 'common', { evoLevels: [14, 36] }, bajas(...PET, 4000)),
    F(276, 'Golondrina', 'guts', ['peck', 'quick-attack', 'aerial-ace', 'brave-bird'], 'common', { evoLevels: [22] }, deHoenn(2000)),
    F(278, 'Gaviota', 'tailwind', ['water-gun', 'wing-attack', 'air-cutter', 'hurricane'], 'common', { evoLevels: [25] }, bajas(...MAR, 2000)),
    F(280, 'Protectora', 'persevere', ['confusion', 'disarming-voice', 'psychic', 'moonblast'], 'rare', { evoLevels: [20, 30] }, [liga(40), local(5000)]),
    F(283, 'Patinador', 'water-veil', ['bubble', 'quick-attack', 'silver-wind', 'bug-buzz'], 'uncommon', { evoLevels: [22] }, bajas(...MAR, 5000)),
    F(285, 'Esporas', 'effect-spore', ['stun-spore', 'mach-punch', 'bullet-seed', 'sky-uppercut'], 'uncommon', { evoLevels: [23] }, bajas(...PET, 6000)),
    F(287, 'Perezoso', 'anger-point', ['scratch', 'yawn', 'slash', 'giga-impact'], 'rare', { evoLevels: [18, 36] }, [liga(35), guardianes(...PET, 6)]),
    F(290, 'Muda', 'speed-boost', ['leech-life', 'fury-cutter', 'x-scissor', 'dig'], 'uncommon', { branch: [291, 292], evoLevel: 20 }, local(3000)),
    F(293, 'Altavoz', 'technician', ['pound', 'uproar', 'hyper-voice', 'boomburst'], 'uncommon', { evoLevels: [20, 40] }, deHoenn(4000)),
    F(296, 'Sumo', 'guts', ['arm-thrust', 'fake-out', 'vital-throw', 'close-combat'], 'common', { evoLevels: [24] }, bajas(...CEN, 3000)),
    F(299, 'Brújula', 'magnet-pull', ['rock-throw', 'thunder-wave', 'power-gem', 'stone-edge'], 'uncommon', {}, bajas(...CEN, 5000)),
    F(300, 'Gatita', 'cute-charm', ['fake-out', 'sing', 'play-rough', 'double-edge'], 'common', { evoLevels: [30] }, deHoenn(2500)),
    F(302, 'Joyero', 'pickpocket', ['scratch', 'shadow-sneak', 'power-gem', 'shadow-claw'], 'uncommon', {}, bajas(...CEN, 6000)),
    F(303, 'Gran mandíbula', 'strong-jaw', ['astonish', 'iron-head', 'crunch', 'play-rough'], 'uncommon', {}, local(4000)),
    F(304, 'Coraza de hierro', 'sturdy', ['metal-claw', 'rock-tomb', 'iron-tail', 'heavy-slam'], 'rare', { evoLevels: [32, 42] }, [liga(35), guardianes(...CEN, 6)]),
    F(307, 'Meditación', 'iron-fist', ['confusion', 'force-palm', 'high-jump-kick', 'zen-headbutt'], 'uncommon', { evoLevels: [37] }, local(5000)),
    F(309, 'Relámpago', 'static', ['spark', 'quick-attack', 'thunder-fang', 'wild-charge'], 'common', { evoLevels: [26] }, bajas(...MAR, 4000)),
    F(311, 'Animador', 'static', ['nuzzle', 'spark', 'electro-ball', 'thunder'], 'uncommon', {}, local(2500)),
    F(312, 'Animadora', 'motor-drive', ['thunder-shock', 'charge-beam', 'discharge', 'thunderbolt'], 'uncommon', {}, local(2500)),
    F(313, 'Luciérnaga', 'star-swarm', ['tackle', 'struggle-bug', 'signal-beam', 'bug-buzz'], 'uncommon', {}, bajas(...PET, 5000)),
    F(314, 'Luz de luna', 'tinted-lens', ['quick-attack', 'struggle-bug', 'moonlight', 'bug-buzz'], 'uncommon', {}, bajas(...PET, 5000)),
    F(315, 'Rosa espinosa', 'poison-point', ['absorb', 'poison-sting', 'giga-drain', 'sludge-bomb'], 'uncommon', {}, bajas(...PET, 7000)),
    F(316, 'Glotón', 'gluttony', ['pound', 'acid-spray', 'sludge-bomb', 'gunk-shot'], 'common', { evoLevels: [26] }, deHoenn(3000)),
    F(318, 'Dientes de sierra', 'speed-boost', ['bite', 'aqua-jet', 'crunch', 'liquidation'], 'uncommon', { evoLevels: [30] }, bajas(...MAR, 6000)),
    F(320, 'Ballena', 'oblivious', ['water-gun', 'rollout', 'water-spout', 'hydro-pump'], 'uncommon', { evoLevels: [40] }, guardianes(...MAR, 4)),
    F(322, 'Volcán andante', 'magma-armor', ['ember', 'magnitude', 'lava-plume', 'eruption'], 'common', { evoLevels: [33] }, bajas(...CEN, 4000)),
    F(324, 'Chimenea', 'flame-body', ['smog', 'rapid-spin', 'flamethrower', 'overheat'], 'uncommon', {}, guardianes(...CEN, 4)),
    F(325, 'Saltarín', 'headache', ['psywave', 'bounce', 'psychic', 'power-gem'], 'common', { evoLevels: [32] }, deHoenn(3500)),
    F(327, 'Tambaleo', 'spin-top', ['teeter-dance', 'dizzy-punch', 'rapid-spin', 'superpower'], 'uncommon', {}, local(3500)),
    F(328, 'Hormigaleón', 'arena-trap', ['sand-attack', 'bulldoze', 'dragon-breath', 'earthquake'], 'rare', { evoLevels: [35, 45] }, [liga(40), dificil(...CEN)]),
    F(331, 'Espantapájaros', 'sand-rush', ['absorb', 'needle-arm', 'sucker-punch', 'seed-bomb'], 'common', { evoLevels: [32] }, bajas(...CEN, 3500)),
    F(333, 'Nube de algodón', 'cotton-drift', ['peck', 'sing', 'dragon-pulse', 'moonblast'], 'rare', { evoLevels: [35] }, [liga(35), bajas(...CEL, 5000)]),
    F(335, 'Rival de Seviper', 'hustle', ['scratch', 'crush-claw', 'x-scissor', 'close-combat'], 'uncommon', {}, local(6000)),
    F(336, 'Colmillo venenoso', 'serpent-glare', ['wrap', 'poison-fang', 'night-slash', 'gunk-shot'], 'uncommon', {}, local(6000)),
    F(337, 'Luna', 'lunar-blessing', ['confusion', 'rock-throw', 'moonblast', 'psychic'], 'uncommon', {}, bajas(...CEL, 4000)),
    F(338, 'Sol', 'magic-guard', ['confusion', 'rock-slide', 'solar-beam', 'zen-headbutt'], 'uncommon', {}, bajas(...CEL, 4000)),
    F(339, 'Bigotes', 'slimy-skin', ['mud-slap', 'water-gun', 'muddy-water', 'earthquake'], 'common', { evoLevels: [30] }, bajas(...MAR, 3500)),
    F(341, 'Matón', 'hyper-cutter', ['bubble-beam', 'vice-grip', 'knock-off', 'crabhammer'], 'common', { evoLevels: [30] }, deHoenn(4500)),
    F(343, 'Muñeco de arcilla', 'magic-guard', ['confusion', 'rapid-spin', 'ancient-power', 'earth-power'], 'uncommon', { evoLevels: [36] }, bajas(...CEL, 6000)),
    F(345, 'Lirio fósil', 'reef', ['acid', 'giga-drain', 'ancient-power', 'energy-ball'], 'rare', { evoLevels: [40] }, [liga(30), bajas(...CEN, 20000)]),
    F(347, 'Garra fósil', 'battle-armor', ['fury-cutter', 'metal-claw', 'x-scissor', 'rock-blast'], 'rare', { evoLevels: [40] }, [liga(30), guardianes(...CEN, 8)]),
    F(349, 'Belleza escondida', 'water-veil', ['tackle', 'water-pulse', 'twister', 'hydro-pump'], 'rare', { evoLevels: [30] }, [liga(30), dificil(...MAR)]),
    F(351, 'Meteorólogo', 'adaptability', ['ember', 'water-gun', 'powder-snow', 'weather-ball'], 'uncommon', {}, local(4000)),
    F(352, 'Camaleón', 'imposter', ['lick', 'shadow-sneak', 'slash', 'sucker-punch'], 'uncommon', {}, local(4500)),
    F(353, 'Muñeco maldito', 'wail', ['astonish', 'night-shade', 'shadow-ball', 'phantom-force'], 'uncommon', { evoLevels: [37] }, bajas(...CEL, 5000)),
    F(355, 'Réquiem', 'phantom', ['night-shade', 'astonish', 'shadow-sneak', 'shadow-ball'], 'uncommon', { evoLevels: [37] }, bajas(...CEL, 5000)),
    F(357, 'Árbol frutal', 'harvest', ['razor-leaf', 'gust', 'leaf-storm', 'air-slash'], 'uncommon', {}, bajas(...PET, 8000)),
    F(358, 'Campanilla', 'headache', ['astonish', 'confusion', 'extrasensory', 'psychic'], 'uncommon', {}, bajas(...CEL, 6000)),
    F(359, 'Desastre', 'ill-omen', ['quick-attack', 'night-slash', 'psycho-cut', 'sucker-punch'], 'rare', {}, [liga(45), local(15000)]),
    F(361, 'Gorro de nieve', 'ice-body', ['powder-snow', 'ice-shard', 'ice-fang', 'blizzard'], 'common', { evoLevels: [42] }, bajas(...MAR, 5000)),
    F(363, 'Bola de hielo', 'rolling-tusk', ['powder-snow', 'rollout', 'aurora-beam', 'blizzard'], 'uncommon', { evoLevels: [32, 44] }, bajas(...MAR, 7000)),
    F(366, 'Perla', 'torrent-shell', ['clamp', 'whirlpool', 'water-pulse', 'hydro-pump'], 'uncommon', { branch: [367, 368], evoLevel: 30 }, guardianes(...MAR, 6)),
    F(369, 'Fósil viviente', 'rock-head', ['rock-tomb', 'aqua-tail', 'head-smash', 'hydro-pump'], 'rare', {}, [liga(40), guardianes(...MAR, 10)]),
    F(370, 'Corazón', 'sweet-smooch', ['water-gun', 'sweet-kiss', 'water-pulse', 'draining-kiss'], 'common', {}, bajas(...MAR, 2500)),
    F(371, 'Sueño de volar', 'hustle', ['ember', 'dragon-breath', 'dragon-claw', 'outrage'], 'rare', { evoLevels: [30, 50] }, [liga(50), dificil(...CEL)]),
    F(374, 'Supercomputadora', 'iron-fist', ['take-down', 'metal-claw', 'zen-headbutt', 'meteor-mash'], 'rare', { evoLevels: [20, 45] }, [liga(50), guardianes(...CEL, 8)]),
    // legendarios
    F(377, 'Gólem de roca', 'sturdy', ['rock-throw', 'hammer-arm', 'stone-edge', 'superpower'], 'legendary', {}, [liga(55), guardianes(...CEN, 15)]),
    F(378, 'Gólem de hielo', 'ice-pressure', ['icy-wind', 'ice-beam', 'thunderbolt', 'blizzard'], 'legendary', {}, [liga(55), guardianes(...MAR, 15)]),
    F(379, 'Gólem de acero', 'sturdy', ['metal-claw', 'iron-head', 'flash-cannon', 'heavy-slam'], 'legendary', {}, [liga(55), guardianes(...CEL, 15)]),
    F(380, 'Eón protectora', 'lunar-blessing', ['dragon-breath', 'mist-ball', 'dragon-pulse', 'psychic'], 'legendary', {}, [liga(60), local(40000)]),
    F(381, 'Eón veloz', 'genome', ['dragon-breath', 'luster-purge', 'dragon-pulse', 'psychic'], 'legendary', {}, [liga(60), local(40000)]),
    F(382, 'Señor de los mares', 'sea-guardian', ['water-pulse', 'ice-beam', 'origin-pulse', 'water-spout'], 'legendary', {}, [liga(65), pesadilla(...MAR)]),
    F(383, 'Señor de la tierra', 'volcano-beast', ['mud-shot', 'fire-punch', 'precipice-blades', 'eruption'], 'legendary', {}, [liga(65), pesadilla(...CEN)]),
    F(384, 'Señor del cielo', 'north-wind', ['twister', 'dragon-claw', 'dragon-ascent', 'outrage'], 'legendary', {}, [liga(70), pesadilla(...CEL)]),
    F(385, 'Deseo', 'star-dust', ['confusion', 'swift', 'doom-desire', 'iron-head'], 'legendary', {}, [liga(72), local(80000)]),
    F(386, 'Virus espacial', 'download', ['confusion', 'night-shade', 'psycho-boost', 'superpower'], 'legendary', {}, [liga(73), guardianes(...CEL, 25)])
  ];
  // Azurill y Wynaut: copian la ficha de Marill y Wobbuffet (de Johto) y la sustituyen.
  const BEBES_HOENN = { 183: 298, 202: 360 };

  // ---------- mapas ----------
  const clon = o => JSON.parse(JSON.stringify(o));
  const mezcla = (a, b, k) => [16, 8, 0].reduce((s, sh) => s | Math.round(((a >> sh) & 255) * (1 - k) + ((b >> sh) & 255) * k) << sh, 0);
  const CIELO = ['sky', 'fog', 'sun', 'hemiGround', 'waterColor'];
  const tinte = (o, col, k, soloSuelo) => {
    // Tiñe los colores (números de 24 bits) del aspecto del mapa hacia un color, para darle identidad propia.
    // Con soloSuelo, el cielo no cambia.
    const v = x => (typeof x === 'number' && x > 4096 && x <= 0xffffff) ? mezcla(x, col, k) : x;
    for (const key of [...(soloSuelo ? [] : CIELO), 'ground', 'path', 'cliff']) {
      if (Array.isArray(o[key])) o[key] = o[key].map(v); else o[key] = v(o[key]);
    }
    if (o.tex) for (const key of Object.keys(o.tex)) {
      if (key === 'detail' || key === 'deco') continue;
      o.tex[key] = Array.isArray(o.tex[key]) ? o.tex[key].map(v) : v(o.tex[key]);
    }
    return o;
  };
  const mapa = (base, extra, col, k, suelo) => {
    const m = tinte(clon(base), col, k);
    if (suelo) tinte(m, suelo[0], suelo[1], true);
    delete m.sanctuary; delete m.johto;
    return Object.assign(m, extra, { hoenn: true, specials: [] });
  };
  function mapas(lista) {
    const b = id => lista.find(x => x.id === id);
    const need = ['forest', 'canela', 'coast', 'cave'];
    if (!need.every(b)) return [];
    const z = (base, nombres) => base.zones.map((zz, i) => ({ ...clon(zz), name: nombres[i] ?? zz.name }));
    const pet = mapa(b('forest'), {
      id: 'petalia', name: 'Bosque Petalia', desc: 'Un bosque húmedo y espeso de Hoenn, lleno de setas y Pokémon traviesos. Los de Kanto y Johto no viven aquí.',
      types: ['grass', 'bug', 'normal', 'dark'], late: ['fighting', 'poison'],
      legendaries: [385], residents: [263, 261, 265, 285, 287, 276], weather: ['clear', 'rain', 'clear'],
      bosses: [289, 275, 286], guardians: [[289, 288], [275, 272], [286, 284]],
      totems: [[264, 262, 267, 269], [272, 275, 284, 286], [289, 297, 358, 357]],
      summoners: [[262, 261], [272, 270], [289, 287]],
      props: ['tree', 'tree', 'mushroom', 'bush', 'pine'],
      music: { root: 62, scale: [0, 2, 4, 7, 9], bpm: 112, mood: 'bright' },
      unlock: 'Completa Ciudad Iris'
    }, 0x2fae5a, .12);
    pet.zones = z(pet, ['Bosque al amanecer', 'Lluvia entre setas']);
    const cen = mapa(b('canela'), {
      id: 'cenizo', name: 'Monte Cenizo', desc: 'El volcán de Hoenn: lava, ceniza que cae del cielo y Pokémon de fuego y roca. El calor se nota.',
      types: ['fire', 'ground', 'rock'], late: ['dragon', 'steel'],
      legendaries: [383], residents: [322, 324, 304, 328, 299, 331], weather: ['sun', 'ash', 'sun'],
      bosses: [323, 330, 306], guardians: [[323, 324], [330, 332], [306, 299]],
      totems: [[322, 328, 304, 343], [324, 332, 305, 344], [330, 306, 323, 346]],
      summoners: [[323, 322], [330, 328], [306, 304]],
      props: ['lavarock', 'rock', 'deadtree', 'cactus', 'rock'],
      music: { root: 57, scale: [0, 1, 4, 5, 7, 8, 10], bpm: 126, mood: 'tense' },
      unlock: 'Completa el Bosque Petalia'
    }, 0x5a3a34, .4);
    cen.zones = z(cen, ['Laderas de ceniza', 'Cráter al rojo']);
    const mar = mapa(b('coast'), {
      id: 'marino', name: 'Fondo Marino', desc: 'Arrecifes, cuevas marinas y lluvia sin fin cerca de Arrecípolis. Los de agua mandan aquí.',
      types: ['water', 'ice', 'dark'], late: ['dragon', 'psychic'],
      legendaries: [382], residents: [278, 318, 320, 341, 339, 370, 366], weather: ['rain', 'clear', 'rain'],
      bosses: [319, 365, 350], guardians: [[319, 342], [365, 362], [350, 369]],
      totems: [[279, 340, 342, 364], [319, 321, 362, 367], [350, 365, 368, 369]],
      summoners: [[319, 318], [365, 363], [321, 320]],
      props: ['coral', 'coral', 'palm', 'rock', 'bush'],
      music: { root: 55, scale: [0, 2, 3, 5, 7, 9, 10], bpm: 108, mood: 'calm' },
      unlock: 'Completa el Monte Cenizo'
    }, 0x1a5aa8, .15, [0xe2c98e, .78]);
    mar.zones = z(mar, ['Arrecife al atardecer', 'Tormenta en alta mar']);
    const cel = mapa(b('cave'), {
      id: 'celeste', name: 'Pilar Celeste', desc: 'La torre en ruinas donde duerme Rayquaza: dragones, fantasmas y psíquicos. El reto más duro de Hoenn.',
      types: ['dragon', 'flying', 'psychic', 'ghost'], late: ['steel', 'dark'], evolved: true,
      legendaries: [384], residents: [333, 353, 355, 359, 337, 338, 343], weather: ['fog', 'clear', 'fog'],
      bosses: [373, 376, 334], guardians: [[373, 372], [376, 375], [334, 354]],
      totems: [[334, 344, 354, 356], [372, 375, 359, 358], [373, 376, 354, 356]],
      summoners: [[373, 371], [376, 374], [356, 355]],
      props: ['pillar', 'crystal', 'rock', 'pillar', 'grave'],
      music: { root: 60, scale: [0, 1, 3, 5, 7, 8, 10], bpm: 116, mood: 'mystic' },
      unlock: 'Completa el Fondo Marino'
    }, 0x6a5ac8, .15);
    cel.zones = z(cel, ['Pisos en ruinas', 'La cima del pilar']);
    return [pet, cen, mar, cel];
  }

  const H = {
    MIN: HOENN_MIN, MAX: HOENN_MAX, MAPAS, esHoenn,
    BEBES_HOENN,

    // Fichas para la Liga (las añade el juego antes de ordenarla). D = la lista del juego.
    liga(D) {
      const out = LIGA.map(x => ({ ...x, kit: x.kit.slice(), challenge: Array.isArray(x.challenge) ? x.challenge.map(c => ({ ...c })) : { ...x.challenge } }));
      for (const [de, a] of Object.entries(BEBES_HOENN)) {
        const e = D.find(x => x.id === +de);
        if (!e) continue;
        const lv = e.evoLevels ? [12, ...e.evoLevels] : [12];
        out.push({ ...e, id: a, kit: e.kit.slice(), evoLevels: lv, pbHoenn: true });
      }
      return out;
    },
    mapas,
    region() {
      return { id: 'hoenn', name: 'Hoenn', gen: 3, maps: MAPAS.slice(), slots: 4, gate: 'johto', emblem: 384, c: '#2a8ad8', c2: '#5ad8c8' };
    },

    // Pokémon por región durante una partida: en Hoenn solo los de Hoenn; fuera, solo Kanto y Johto.
    cache: new Map(),
    todos: null,
    lista(todos) {
      H.todos = todos;
      const run = window.__pbRun;
      if (!run || run.state === 'over' || !run.biome) return todos;
      const h = !!run.biome.hoenn;
      const k = todos.length + (h ? 'h' : 'k');
      let v = H.cache.get(k);
      if (!v || v.src !== todos) {
        v = todos.filter(p => h ? esHoenn(p.id) : p.id < HOENN_MIN);
        v.src = todos;
        H.cache.set(k, v);
      }
      return v;
    },

    // Algunos sucesos del juego (niebla, estampidas, emboscadas…) traen Pokémon fijos de Kanto. En un mapa de
    // Hoenn se cambian por uno de Hoenn del mismo tipo y fase; los jefes y los Pokémon de sucesos con reglas
    // propias (Meowth dorado, objetos, remotos) no se tocan.
    remap(run, id, flags) {
      if (!run?.biome?.hoenn || id >= HOENN_MIN || !H.todos || (flags & (4 | 128 | 16384 | 65536))) return null;
      const m = run.__pbRemap ??= new Map();
      if (m.has(id)) return m.get(id);
      const byId = H.byId ??= new Map(H.todos.map(p => [p.id, p]));
      const p = byId.get(id);
      let elegido = null;
      if (p) {
        const hoenn = H.todos.filter(q => esHoenn(q.id) && !q.legendary && !q.mythical);
        const tipo = hoenn.filter(q => q.types.some(t => p.types.includes(t)));
        const fase = tipo.filter(q => q.evoStage === p.evoStage);
        const cands = fase.length ? fase : tipo.length ? tipo : hoenn;
        if (cands.length) elegido = cands[(id * 2654435761 >>> 0) % cands.length].id;
      }
      m.set(id, elegido);
      return elegido;
    },

    enHoenn: run => !!run?.biome?.hoenn,
    esLocal: run => esHoenn(run?.player?.roster?.id ?? 0),

    start(run) {
      if (!H.enHoenn(run) || run.mode === 'duel') return;
      const dura = run.biome.id === 'celeste';
      run.diff.enemyHp *= dura ? 1.4 : 1.25;
      run.diff.enemyDamage *= dura ? 1.25 : 1.15;
      if (!H.esLocal(run)) run.goldMul = (run.goldMul ?? 1) * 1.2;
      try { run.meta.count('runs_h', 1); } catch {}
      // Aviso del bono al empezar.
      setTimeout(() => {
        try {
          run.ui.toast(H.esLocal(run)
            ? 'Bono de local: +10% de daño en Hoenn'
            : 'Bono de forastero: +20% Pokédólares y +30% de Polvo al acabar', null);
        } catch {}
      }, 4000);
    },

    mods(p) {
      const run = p?.run;
      return H.enHoenn(run) && esHoenn(p.roster?.id ?? 0) ? [{ stat: 'damage', mul: 1.1 }] : [];
    },

    polvo(run) {
      return H.enHoenn(run) && !H.esLocal(run) && run.mode !== 'duel' ? 1.3 : 1;
    }
  };
  window.PB_HOENN = H;
})();
