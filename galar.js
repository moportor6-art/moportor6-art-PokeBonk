/* Subversión propia: Galar, la octava región (datos). El motor de regiones está en regiones.js.
   - Liga: las 49 familias nuevas de Galar (#810-#898) y Enamorus (#905), con 4 ataques, pasiva, evolución y
     reto. Las evoluciones de Galar y de Hisui para líneas antiguas (Obstagoon, Perrserker, Cursola, Sirfetch'd,
     Mr. Rime, Runerigus, Wyrdeer, Kleavor, Ursaluna, Basculegion, Sneasler y Overqwil) van como evoluciones
     alternativas con reto en formas.js, para que esas líneas no cambien solas.
   - Sprites: los de PMD que ya traía el juego (todos con animaciones y variocolor).
   - Mapas: Bosque Lumirinto, Tundra Corona, Isla de la Armadura y Torre Rose, tras el Ultraumbral.
     Santuarios: Claro de las Hadas (Zarude y Enamorus), Templo de la Corona (Calyrex, Glastrier y Spectrier),
     Torres del Maestro (Kubfu, Regieleki y Regidrago) y la cima de la Torre Rose (Zacian, Zamazenta y Eternatus).
   - Más duros que Alola: enemigos con +120% PS y +85% daño (Torre Rose, +150% y +100%).
   - Contadores de retos: galar, galar_local y runs_g. */
(() => {
  const r = (desc, counter, goal) => ({ desc, counter, goal });
  const n_ = n => n.toLocaleString('es');
  const partida = r('Juega 1 partida en un mapa de Galar.', 'runs_g', 1);
  const deGalar = n => r(`Derrota a ${n_(n)} Pokémon de Galar.`, 'galar', n);
  const local = n => r(`Derrota a ${n_(n)} Pokémon con Pokémon de Galar.`, 'galar_local', n);
  const bajas = (m, nombre, n) => r(`Consigue ${n_(n)} bajas en ${nombre}.`, 'kills_' + m, n);
  const guardianes = (m, nombre, n) => r(`Derrota a ${n} guardianes de ${nombre}.`, 'boss_' + m, n);
  const dificil = (m, nombre) => r(`Completa ${nombre} en Difícil.`, 'tier_' + m, 2);
  const pesadilla = (m, nombre) => r(`Completa ${nombre} en Pesadilla.`, 'tier_' + m, 3);
  const liga = n => r(`Ten ${n} miembros en tu Liga.`, 'league', n);
  const LUM = ['lumirinto', 'el Bosque Lumirinto'], TUN = ['tundra', 'la Tundra Corona'], ISL = ['armadura', 'la Isla de la Armadura'], TOR = ['torrerose', 'la Torre Rose'];
  const F = (id, role, passive, kit, rank, evo, challenge) => ({ id, role, passive, kit, rank, ...evo, challenge });

  const LIGA = [
    // iniciales
    F(810, 'Baterista', 'overgrow', ['branch-poke', 'razor-leaf', 'wood-hammer', 'drum-beating'], 'common', { evoLevels: [16, 35] }, partida),
    F(813, 'Delantero', 'blaze', ['ember', 'flame-charge', 'bounce', 'pyro-ball'], 'common', { evoLevels: [16, 35] }, partida),
    F(816, 'Agente secreto', 'sniper', ['water-gun', 'water-pulse', 'u-turn', 'snipe-shot'], 'common', { evoLevels: [16, 35] }, partida),
    // comunes de las rutas
    F(819, 'Ardilla glotona', 'gluttony', ['tackle', 'bite', 'bullet-seed', 'body-slam'], 'common', { evoLevels: [24] }, deGalar(1000)),
    F(821, 'Cuervo blindado', 'steel-plumage', ['peck', 'pluck', 'drill-peck', 'brave-bird'], 'common', { evoLevels: [18, 38] }, deGalar(1500)),
    F(824, 'Escarabajo cósmico', 'compound-eyes', ['struggle-bug', 'confusion', 'psybeam', 'psychic'], 'common', { evoLevels: [10, 30] }, bajas(...LUM, 2500)),
    F(827, 'Zorro ladrón', 'pickpocket', ['quick-attack', 'snarl', 'night-slash', 'foul-play'], 'common', { evoLevels: [18] }, deGalar(2000)),
    F(829, 'Flor de algodón', 'cotton-drift', ['leafage', 'razor-leaf', 'leaf-tornado', 'hyper-voice'], 'common', { evoLevels: [20] }, bajas(...LUM, 3000)),
    F(831, 'Oveja', 'fluffy', ['tackle', 'double-kick', 'headbutt', 'double-edge'], 'common', { evoLevels: [24] }, deGalar(2500)),
    F(833, 'Tortuga mordedora', 'strong-jaw', ['water-gun', 'bite', 'rock-tomb', 'jaw-lock'], 'common', { evoLevels: [22] }, bajas(...ISL, 3000)),
    F(835, 'Perro eléctrico', 'static', ['spark', 'bite', 'crunch', 'wild-charge'], 'common', { evoLevels: [25] }, deGalar(3000)),
    F(837, 'Vagoneta de carbón', 'flame-body', ['rapid-spin', 'flame-charge', 'incinerate', 'stone-edge'], 'common', { evoLevels: [18, 34] }, bajas(...TUN, 3500)),
    F(840, 'Manzana dragón', 'gluttony', ['astonish', 'dragon-breath', 'dragon-pulse', 'grav-apple'], 'uncommon', { branch: [841, 842], evoLevel: 30 }, bajas(...LUM, 5000)),
    F(843, 'Serpiente de arena', 'sand-jet', ['sand-tomb', 'brutal-swing', 'bulldoze', 'dig'], 'common', { evoLevels: [36] }, bajas(...TUN, 4000)),
    F(845, 'Cormorán', 'swift-swim', ['peck', 'water-gun', 'drill-peck', 'hydro-pump'], 'uncommon', {}, bajas(...ISL, 5000)),
    F(846, 'Barracuda', 'swift-swim', ['peck', 'aqua-jet', 'crunch', 'liquidation'], 'common', { evoLevels: [26] }, bajas(...ISL, 3500)),
    F(848, 'Bebé tóxico', 'toxic-cloud', ['acid', 'shock-wave', 'overdrive', 'poison-jab'], 'uncommon', { evoLevels: [30] }, local(4000)),
    F(850, 'Ciempiés de fuego', 'flash-fire', ['ember', 'bug-bite', 'fire-lash', 'lunge'], 'common', { evoLevels: [28] }, bajas(...TUN, 4000)),
    F(852, 'Pulpo luchador', 'limber', ['rock-smash', 'octazooka', 'submission', 'superpower'], 'uncommon', { evoLevels: [35] }, bajas(...ISL, 4500)),
    F(854, 'Tetera embrujada', 'phantom', ['astonish', 'mega-drain', 'shadow-ball', 'giga-drain'], 'uncommon', { evoLevels: [30] }, bajas(...LUM, 5000)),
    F(856, 'Bruja serena', 'healer', ['confusion', 'psybeam', 'dazzling-gleam', 'psychic'], 'uncommon', { evoLevels: [32, 42] }, bajas(...LUM, 5000)),
    F(859, 'Duende pícaro', 'prankster', ['fake-out', 'bite', 'false-surrender', 'spirit-break'], 'uncommon', { evoLevels: [32, 42] }, local(5000)),
    F(868, 'Crema', 'sweet-veil', ['tackle', 'fairy-wind', 'draining-kiss', 'dazzling-gleam'], 'uncommon', { evoLevels: [30] }, local(5000)),
    F(870, 'Tropa', 'defiant', ['tackle', 'headbutt', 'megahorn', 'close-combat'], 'uncommon', {}, bajas(...ISL, 6000)),
    F(871, 'Erizo de mar', 'lightning-rod', ['peck', 'thunder-shock', 'spark', 'zing-zap'], 'common', {}, bajas(...ISL, 4000)),
    F(872, 'Polilla de hielo', 'ice-body', ['powder-snow', 'struggle-bug', 'aurora-beam', 'bug-buzz'], 'uncommon', { evoLevels: [30] }, bajas(...TUN, 5000)),
    F(874, 'Piedra gigante', 'rock-head', ['rock-throw', 'stomp', 'rock-slide', 'stone-edge'], 'uncommon', {}, bajas(...TUN, 6000)),
    F(875, 'Pingüino de hielo', 'ice-body', ['powder-snow', 'icy-wind', 'freeze-dry', 'blizzard'], 'uncommon', {}, bajas(...TUN, 6000)),
    F(876, 'Mayordomo', 'synchronize', ['disarming-voice', 'psybeam', 'stored-power', 'psychic'], 'uncommon', {}, local(6000)),
    F(877, 'Hámster hambriento', 'cheek-pouch', ['thunder-shock', 'bite', 'spark', 'aura-wheel'], 'uncommon', {}, local(6000)),
    F(878, 'Elefante de cobre', 'sheer-force', ['rock-smash', 'bulldoze', 'iron-head', 'high-horsepower'], 'uncommon', { evoLevels: [34] }, bajas(...TUN, 5000)),
    F(880, 'Fósil quimera', 'volt-absorb', ['thunder-shock', 'dragon-tail', 'bolt-beak', 'dragon-pulse'], 'rare', {}, [liga(225), bajas(...TOR, 8000)]),
    F(881, 'Fósil helado', 'volt-absorb', ['thunder-shock', 'powder-snow', 'bolt-beak', 'blizzard'], 'rare', {}, [liga(225), bajas(...TUN, 8000)]),
    F(882, 'Fósil marino', 'strong-jaw', ['water-gun', 'dragon-breath', 'fishious-rend', 'dragon-pulse'], 'rare', {}, [liga(225), bajas(...ISL, 8000)]),
    F(883, 'Fósil glaciar', 'water-absorb', ['water-gun', 'powder-snow', 'fishious-rend', 'icicle-crash'], 'rare', {}, [liga(225), guardianes(...TUN, 8)]),
    F(884, 'Rascacielos', 'iron-body', ['metal-claw', 'breaking-swipe', 'flash-cannon', 'dragon-claw'], 'rare', {}, [liga(225), guardianes(...TOR, 8)]),
    F(885, 'Dragón fantasma', 'phantom', ['astonish', 'dragon-breath', 'dragon-darts', 'phantom-force'], 'rare', { evoLevels: [50, 60] }, [liga(230), pesadilla(...TOR)]),
    // legendarios y singulares
    F(888, 'Espada heroica', 'pressure', ['metal-claw', 'moonblast', 'sacred-sword', 'behemoth-blade'], 'legendary', {}, [liga(240), pesadilla(...TOR)]),
    F(889, 'Escudo heroico', 'pressure', ['metal-claw', 'iron-head', 'close-combat', 'behemoth-bash'], 'legendary', {}, [liga(240), guardianes(...TOR, 25)]),
    F(890, 'Eternidad', 'pressure', ['poison-tail', 'dragon-pulse', 'cross-poison', 'dynamax-cannon'], 'legendary', {}, [liga(245), pesadilla(...TOR)]),
    F(891, 'Aprendiz del dojo', 'iron-fist', ['rock-smash', 'brick-break', 'wicked-blow', 'close-combat'], 'legendary', { evoLevels: [40] }, [liga(230), pesadilla(...ISL)]),
    F(893, 'Mono de la jungla', 'harvest', ['vine-whip', 'bite', 'energy-ball', 'power-whip'], 'legendary', {}, [liga(230), pesadilla(...LUM)]),
    F(894, 'Gigante eléctrico', 'volt-pressure', ['thunder-shock', 'electroweb', 'thunder-cage', 'zap-cannon'], 'legendary', {}, [liga(230), dificil(...ISL)]),
    F(895, 'Gigante dragón', 'pressure', ['dragon-breath', 'crunch', 'dragon-claw', 'dragon-energy'], 'legendary', {}, [liga(230), guardianes(...ISL, 20)]),
    F(896, 'Corcel de hielo', 'ice-pressure', ['avalanche', 'icicle-crash', 'glacial-lance', 'double-edge'], 'legendary', {}, [liga(235), dificil(...TUN)]),
    F(897, 'Corcel fantasma', 'phantom', ['hex', 'stomp', 'shadow-ball', 'astral-barrage'], 'legendary', {}, [liga(235), guardianes(...TUN, 20)]),
    F(898, 'Rey de las cosechas', 'harvest', ['confusion', 'giga-drain', 'psychic', 'solar-beam'], 'legendary', {}, [liga(240), pesadilla(...TUN)]),
    F(905, 'Diosa del amor', 'fairy', ['fairy-wind', 'twister', 'springtide-storm', 'moonblast'], 'legendary', {}, [liga(235), dificil(...LUM)])
  ];

  window.PB_REGIONES?.registrar({
    id: 'galar', name: 'Galar', gen: 8, min: 810, max: 905,
    gate: 'alola', emblem: 888, c: '#6a2a8a', c2: '#ff6aa8',
    liga: LIGA,
    dificultad: { base: [2.2, 1.85], torrerose: [2.5, 2.0] },
    contadores: { derrotas: 'galar', local: 'galar_local', runs: 'runs_g' },
    mapas: [
      {
        id: 'lumirinto', base: 'forest', color: 0x6a3ab8, k: .28,
        name: 'Bosque Lumirinto', desc: 'Un bosque oscuro iluminado por setas que brillan. Hadas, brujas y teteras embrujadas acechan entre los árboles. Los Pokémon de otras regiones no viven aquí.',
        unlock: 'Completa el Ultraumbral', zonas: ['Senda de las setas', 'Corazón del bosque'],
        santuario: { de: 'encina', name: 'Claro de las Hadas', heart: 'Corazón de las hadas', legendaries: [893, 905], color: 0xff8ad8 },
        datos: {
          types: ['fairy', 'psychic', 'grass', 'ghost'], late: ['dark', 'dragon'], legendaries: [893, 905],
          bosses: [858, 861, 855], guardians: [[858, 857], [861, 860], [855, 854]],
          totems: [[856, 859, 854, 829], [857, 860, 855, 830], [858, 861, 841, 842]], summoners: [[857, 856], [860, 859], [825, 824]],
          residents: [856, 859, 854, 829, 824, 868, 840], weather: ['fog', 'clear', 'rain'],
          props: ['mushroom', 'tree', 'mushroom', 'bush', 'tree'],
          music: { root: 60, scale: [0, 2, 3, 5, 7, 8, 10], bpm: 108, mood: 'mystic' }
        }
      },
      {
        id: 'tundra', base: 'glacier', color: 0xb8d8f0, k: .22,
        name: 'Tundra Corona', desc: 'Nieve, minas de carbón y cuevas heladas. Polillas de hielo, gigantes de piedra y elefantes de cobre recorren la tundra.',
        unlock: 'Completa el Bosque Lumirinto', zonas: ['Llanura nevada', 'Cumbre helada'],
        santuario: { de: 'glacier', name: 'Templo de la Corona', heart: 'Corazón de la corona', legendaries: [898, 896, 897], color: 0xd8f0ff },
        datos: {
          types: ['ice', 'rock', 'steel', 'ground'], late: ['fire', 'ghost'], legendaries: [898, 896, 897],
          bosses: [879, 839, 873], guardians: [[879, 878], [839, 838], [873, 872]],
          totems: [[872, 837, 843, 878], [873, 838, 844, 875], [879, 839, 874, 881]], summoners: [[838, 837], [873, 872], [844, 843]],
          residents: [872, 837, 843, 878, 875, 874, 850], weather: ['hail', 'clear', 'fog'],
          props: ['snowpine', 'rock', 'crystal', 'snowpine', 'pillar'],
          music: { root: 62, scale: [0, 2, 3, 5, 7, 9, 10], bpm: 110, mood: 'mystic' }
        }
      },
      {
        id: 'armadura', base: 'coast', color: 0x3ab8a0, k: .22,
        name: 'Isla de la Armadura', desc: 'La isla del dojo del maestro Mustard. Pulpos luchadores, barracudas y tropas de Falinks entrenan en sus playas.',
        unlock: 'Completa la Tundra Corona', zonas: ['Playa del dojo', 'Torres del Maestro'],
        santuario: { de: 'coast', name: 'Torres del Maestro', heart: 'Corazón del dojo', legendaries: [891, 894, 895], color: 0xffd060 },
        datos: {
          types: ['water', 'fighting', 'bug', 'poison'], late: ['electric', 'dragon'], legendaries: [891, 894, 895],
          bosses: [834, 853, 847], guardians: [[834, 833], [853, 852], [847, 846]],
          totems: [[833, 846, 852, 871], [834, 847, 853, 870], [849, 845, 882, 851]], summoners: [[834, 833], [847, 846], [849, 848]],
          residents: [833, 846, 852, 871, 845, 870, 848], weather: ['clear', 'rain', 'clear'],
          props: ['rock', 'bush', 'pillar', 'rock', 'tree'],
          music: { root: 64, scale: [0, 2, 4, 5, 7, 9, 11], bpm: 120, mood: 'bright' }
        }
      },
      {
        id: 'torrerose', base: 'cave', color: 0x8a2a5a, k: .32,
        name: 'Torre Rose', desc: 'La torre de la Liga de Galar, tomada por la energía de Eternatus. Dragones y cuervos blindados vigilan cada piso hasta la cima.',
        unlock: 'Completa la Isla de la Armadura', zonas: ['Pisos bajos', 'Ascensor a la cima'],
        santuario: { de: 'iris', name: 'Cima de la Torre Rose', heart: 'Corazón de la eternidad', legendaries: [888, 889, 890], color: 0xff4aa0 },
        datos: {
          types: ['dragon', 'steel', 'dark', 'poison'], late: ['flying', 'fairy'], evolved: true, legendaries: [888, 889, 890],
          bosses: [887, 823, 884], guardians: [[887, 886], [823, 822], [884, 880]],
          totems: [[885, 821, 884, 827], [886, 822, 880, 828], [887, 823, 861, 849]], summoners: [[886, 885], [822, 821], [828, 827]],
          residents: [885, 821, 884, 827, 880, 882, 859], weather: ['fog', 'ash', 'clear'],
          props: ['pillar', 'crystal', 'pillar', 'rock', 'pillar'],
          music: { root: 55, scale: [0, 1, 3, 5, 7, 8, 10], bpm: 130, mood: 'tense' }
        }
      },
      // 1.39 (solo Lite): dos mapas más de Galar tras la Torre Rose, como las islas de Alola (alola.js): la zona 1 usa el
      // cielo de «datos» y las zonas 2 y 3, «zonasDatos».
      ...(window.PB_EDICION === 'lite' ? [{
        id: 'oniria', base: 'forest', color: 0x8a3ad8, k: .3,
        name: 'Bosque Oniria', desc: 'Un bosque eterno de setas que brillan en la penumbra. Impidimp hace travesuras y Hatterene castiga a quien hace ruido.',
        unlock: 'Completa la Torre Rose', zonas: ['Setas brillantes', 'Corazón del bosque'],
        zonasDatos: [
          { sky: [0x3a1a6a, 0x8a5ad8], fog: 0x4a2a7a, fogNear: 40, fogFar: 180, light: .7, sun: 0xc8a0ff, hemiGround: 0x3a2a5a, sunDir: [.2, .8, .3], sunH: .5, tint: [.95, .92, 1.1], clouds: [.8, .7, 1], cover: .5, glow: 0xff8aff, glowK: .45, stars: .3, motes: 'fireflies' },
          { sky: [0x1a0a3a, 0x4a2a8a], fog: 0x2a1a4a, fogNear: 30, fogFar: 160, light: .55, sun: 0xa88aff, hemiGround: 0x2a1a3a, sunDir: [-.2, .7, .4], sunH: .35, tint: [.9, .88, 1.15], clouds: [.6, .5, .9], cover: .4, glow: 0xff5aff, glowK: .6, stars: .8, motes: 'crystal' }
        ],
        santuario: { de: 'encina', name: 'Claro de Zarude', heart: 'Corazón de la jungla', legendaries: [893], color: 0x7aff7a },
        datos: {
          types: ['fairy', 'dark', 'psychic', 'grass'], late: ['ghost', 'poison'], evolved: true, legendaries: [893],
          bosses: [861, 858, 869], guardians: [[861, 860], [858, 857], [869, 868]],
          totems: [[859, 856, 868, 854], [860, 857, 869, 855], [861, 858, 841, 842]], summoners: [[861, 860], [858, 857], [855, 854]],
          residents: [859, 856, 868, 854, 840, 829, 876], weather: ['fog', 'clear', 'rain'],
          sky: [0x5a3a9a, 0xb08ae8], fog: 0x6a4a9a, fogNear: 50, fogFar: 200, light: .8, sun: 0xe0c8ff, hemiGround: 0x4a3a6a, morning: { motes: 'pollen' },
          props: ['mushroom', 'mushroom', 'tree', 'mushroom', 'bush', 'crystal'], propDensity: .95,
          music: { root: 58, scale: [0, 2, 3, 6, 7, 9, 10], bpm: 100, mood: 'mystic' }
        }
      },
      {
        id: 'minasgalar', base: 'cave', color: 0xc86a3a, k: .34,
        name: 'Minas de Galar', desc: 'Túneles de carbón y cintas transportadoras. Rolycoly rueda por los raíles y Coalossal custodia la veta más honda.',
        unlock: 'Completa el Bosque Oniria', zonas: ['Galería de carbón', 'Veta profunda'],
        zonasDatos: [
          { sky: [0x3a2a1a, 0x8a5a3a], fog: 0x4a3020, fogNear: 35, fogFar: 170, light: .75, sun: 0xffa060, hemiGround: 0x4a3020, sunDir: [.3, .8, .2], sunH: .5, tint: [1.08, .95, .88], clouds: [.8, .7, .6], cover: .3, glow: 0xff7a2a, glowK: .4, stars: 0, motes: 'embers' },
          { sky: [0x2a0a0a, 0x6a2a1a], fog: 0x3a1a10, fogNear: 30, fogFar: 150, light: .65, sun: 0xff6a3a, hemiGround: 0x3a1a10, sunDir: [-.2, .8, .3], sunH: .4, tint: [1.12, .9, .85], clouds: [.7, .5, .5], cover: .2, glow: 0xff4a1a, glowK: .6, stars: 0, motes: 'ash' }
        ],
        santuario: { de: 'cave', name: 'Templo de Regieleki', heart: 'Corazón eléctrico', legendaries: [894], color: 0xffe04a },
        datos: {
          types: ['rock', 'fire', 'steel', 'ground'], late: ['electric', 'dragon'], evolved: true, legendaries: [894],
          bosses: [839, 879, 851], guardians: [[839, 838], [879, 878], [851, 850]],
          totems: [[837, 833, 850, 878], [838, 834, 851, 879], [839, 874, 884, 849]], summoners: [[839, 838], [851, 850], [879, 878]],
          residents: [837, 833, 850, 878, 874, 848, 884], weather: ['ash', 'clear', 'fog'],
          morning: { motes: 'drips' },
          props: ['rock', 'lavarock', 'pillar', 'crystal', 'rock'], propDensity: .8,
          music: { root: 52, scale: [0, 1, 3, 5, 7, 8, 10], bpm: 126, mood: 'tense' }
        }
      }] : [])
    ]
  });
})();
