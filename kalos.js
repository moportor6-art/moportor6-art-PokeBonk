/* Subversión propia: Kalos, la sexta región (datos). El motor de regiones está en regiones.js.
   - Liga: las 37 familias de Kalos (#650-#721) con 4 ataques, pasiva, evolución y reto. Sylveon entra
     como nueva rama de Eevee (formas.js).
   - Sprites: los de PMD que ya traía el juego (todos con animaciones).
   - Mapas: Bosque Novarte, Cueva Reflejos, Hotel Desolación y Cueva Desenlace, tras la Torre Dragospiral.
     Santuarios: Árbol de la Vida (Xerneas), Cámara de Diamantes (Diancie), Anillo de Hoopa (Hoopa y
     Volcanion) y el fondo de la Cueva Desenlace (Yveltal y Zygarde).
   - Más duros que Teselia: enemigos con +80% PS y +55% daño (Cueva Desenlace, +100% y +65%).
   - Contadores de retos: kalos, kalos_local y runs_k. */
(() => {
  const r = (desc, counter, goal) => ({ desc, counter, goal });
  const n_ = n => n.toLocaleString('es');
  const partida = r('Juega 1 partida en un mapa de Kalos.', 'runs_k', 1);
  const deKalos = n => r(`Derrota a ${n_(n)} Pokémon de Kalos.`, 'kalos', n);
  const local = n => r(`Derrota a ${n_(n)} Pokémon con Pokémon de Kalos.`, 'kalos_local', n);
  const bajas = (m, nombre, n) => r(`Consigue ${n_(n)} bajas en ${nombre}.`, 'kills_' + m, n);
  const guardianes = (m, nombre, n) => r(`Derrota a ${n} guardianes de ${nombre}.`, 'boss_' + m, n);
  const dificil = (m, nombre) => r(`Completa ${nombre} en Difícil.`, 'tier_' + m, 2);
  const pesadilla = (m, nombre) => r(`Completa ${nombre} en Pesadilla.`, 'tier_' + m, 3);
  const liga = n => r(`Ten ${n} miembros en tu Liga.`, 'league', n);
  const NOV = ['novarte', 'el Bosque Novarte'], REF = ['reflejos', 'la Cueva Reflejos'], HOT = ['desolacion', 'el Hotel Desolación'], DES = ['desenlace', 'la Cueva Desenlace'];
  const F = (id, role, passive, kit, rank, evo, challenge) => ({ id, role, passive, kit, rank, ...evo, challenge });

  const LIGA = [
    // iniciales
    F(650, 'Caballero espinoso', 'bulletproof', ['vine-whip', 'pin-missile', 'seed-bomb', 'wood-hammer'], 'common', { evoLevels: [16, 36] }, partida),
    F(653, 'Hechicera', 'blaze', ['ember', 'psybeam', 'mystical-fire', 'fire-blast'], 'common', { evoLevels: [16, 36] }, partida),
    F(656, 'Ninja', 'torrent', ['water-shuriken', 'water-pulse', 'night-slash', 'hydro-pump'], 'common', { evoLevels: [16, 36] }, partida),
    // comunes de las rutas
    F(659, 'Excavador', 'huge-power', ['mud-slap', 'dig', 'bulldoze', 'earthquake'], 'common', { evoLevels: [20] }, deKalos(1000)),
    F(661, 'Petirrojo ígneo', 'tailwind', ['peck', 'flame-charge', 'acrobatics', 'brave-bird'], 'common', { evoLevels: [17, 35] }, deKalos(1500)),
    F(664, 'Mariposa de los mapas', 'shield-dust', ['struggle-bug', 'bug-bite', 'draining-kiss', 'hurricane'], 'common', { evoLevels: [9, 12] }, bajas(...NOV, 2500)),
    F(667, 'Rey de la manada', 'intimidate', ['ember', 'headbutt', 'flamethrower', 'hyper-voice'], 'uncommon', { evoLevels: [35] }, bajas(...HOT, 4000)),
    F(669, 'Flor de las hadas', 'flower-veil', ['fairy-wind', 'magical-leaf', 'petal-blizzard', 'moonblast'], 'uncommon', { evoLevels: [19, 30] }, bajas(...NOV, 4500)),
    F(672, 'Montura', 'sap-sipper', ['vine-whip', 'razor-leaf', 'horn-leech', 'leaf-blade'], 'common', { evoLevels: [32] }, bajas(...NOV, 3000)),
    F(674, 'Panda pendenciero', 'iron-fist', ['arm-thrust', 'low-sweep', 'night-slash', 'hammer-arm'], 'uncommon', { evoLevels: [32] }, local(3500)),
    F(676, 'Caniche', 'fluffy', ['tackle', 'bite', 'headbutt', 'take-down'], 'common', {}, deKalos(2500)),
    F(677, 'Gato psíquico', 'prankster', ['confusion', 'psybeam', 'psyshock', 'psychic'], 'uncommon', { evoLevels: [25] }, local(3000)),
    F(679, 'Espada embrujada', 'steadfast', ['fury-cutter', 'shadow-sneak', 'iron-head', 'sacred-sword'], 'rare', { evoLevels: [35, 45] }, [liga(165), guardianes(...HOT, 8)]),
    F(682, 'Perfume', 'healer', ['fairy-wind', 'draining-kiss', 'disarming-voice', 'moonblast'], 'uncommon', { evoLevels: [30] }, bajas(...REF, 4500)),
    F(684, 'Algodón de azúcar', 'sweet-veil', ['fairy-wind', 'draining-kiss', 'energy-ball', 'play-rough'], 'uncommon', { evoLevels: [30] }, bajas(...REF, 4500)),
    F(686, 'Calamar hipnótico', 'ink-sniper', ['peck', 'psybeam', 'night-slash', 'psycho-cut'], 'uncommon', { evoLevels: [30] }, bajas(...HOT, 5000)),
    F(688, 'Percebe', 'tough-claws', ['water-gun', 'ancient-power', 'razor-shell', 'stone-edge'], 'common', { evoLevels: [39] }, bajas(...REF, 3500)),
    F(690, 'Alga venenosa', 'poison-point', ['acid', 'water-pulse', 'sludge-bomb', 'dragon-pulse'], 'uncommon', { evoLevels: [48] }, bajas(...DES, 4000)),
    F(692, 'Pistola de agua', 'ink-sniper', ['water-gun', 'water-pulse', 'aura-sphere', 'crabhammer'], 'uncommon', { evoLevels: [37] }, bajas(...REF, 5000)),
    F(694, 'Lagarto solar', 'solar-power', ['thunder-shock', 'quick-attack', 'parabolic-charge', 'thunderbolt'], 'common', { evoLevels: [30] }, bajas(...NOV, 3500)),
    F(696, 'Rey tirano', 'strong-jaw', ['bite', 'ancient-power', 'crunch', 'head-smash'], 'rare', { evoLevels: [39] }, [liga(165), bajas(...DES, 8000)]),
    F(698, 'Saurio de la aurora', 'snow-warning', ['powder-snow', 'aurora-beam', 'ancient-power', 'blizzard'], 'rare', { evoLevels: [39] }, [liga(165), bajas(...REF, 8000)]),
    F(701, 'Luchador enmascarado', 'mold-breaker', ['wing-attack', 'brick-break', 'flying-press', 'high-jump-kick'], 'rare', {}, [liga(170), guardianes(...DES, 8)]),
    F(702, 'Antena', 'cheek-pouch', ['nuzzle', 'parabolic-charge', 'discharge', 'play-rough'], 'uncommon', {}, bajas(...NOV, 5000)),
    F(703, 'Joya', 'sturdy', ['smack-down', 'power-gem', 'moonblast', 'stone-edge'], 'uncommon', {}, guardianes(...REF, 5)),
    F(704, 'Babosa dragón', 'slimy-skin', ['water-gun', 'dragon-breath', 'dragon-pulse', 'aqua-tail'], 'rare', { evoLevels: [40, 50] }, [liga(170), pesadilla(...NOV)]),
    F(707, 'Llavero', 'prankster', ['fairy-wind', 'draining-kiss', 'flash-cannon', 'play-rough'], 'uncommon', {}, local(5000)),
    F(708, 'Tocón fantasma', 'harvest', ['astonish', 'branch-poke', 'phantom-force', 'wood-hammer'], 'uncommon', { evoLevels: [35] }, bajas(...HOT, 5000)),
    F(710, 'Calabaza', 'phantom', ['astonish', 'bullet-seed', 'shadow-ball', 'seed-bomb'], 'uncommon', { evoLevels: [35] }, bajas(...HOT, 5500)),
    F(712, 'Iceberg', 'ice-body', ['powder-snow', 'ice-fang', 'avalanche', 'icicle-crash'], 'common', { evoLevels: [37] }, bajas(...REF, 4000)),
    F(714, 'Murciélago sónico', 'second-head', ['gust', 'bite', 'air-slash', 'boomburst'], 'rare', { evoLevels: [48] }, [liga(170), bajas(...DES, 10000)]),
    // legendarios y singulares
    F(716, 'Árbol de la vida', 'lunar-blessing', ['aurora-beam', 'horn-leech', 'moonblast', 'megahorn'], 'legendary', {}, [liga(180), pesadilla(...NOV)]),
    F(717, 'Capullo de la destrucción', 'vampire', ['gust', 'dark-pulse', 'oblivion-wing', 'hurricane'], 'legendary', {}, [liga(180), pesadilla(...DES)]),
    F(718, 'Orden del ecosistema', 'multiscale', ['dragon-breath', 'bulldoze', 'thousand-arrows', 'lands-wrath'], 'legendary', {}, [liga(185), guardianes(...DES, 25)]),
    F(719, 'Princesa de los diamantes', 'gem-hoarder', ['smack-down', 'power-gem', 'diamond-storm', 'moonblast'], 'legendary', {}, [liga(175), dificil(...REF)]),
    F(720, 'Duende de los anillos', 'magic-guard', ['confusion', 'shadow-ball', 'psychic', 'hyperspace-hole'], 'legendary', {}, [liga(175), local(50000)]),
    F(721, 'Cañón de vapor', 'steam-engine', ['flame-charge', 'scald', 'overheat', 'steam-eruption'], 'legendary', {}, [liga(175), dificil(...HOT)])
  ];

  window.PB_REGIONES?.registrar({
    id: 'kalos', name: 'Kalos', gen: 6, min: 650, max: 721,
    gate: 'teselia', emblem: 716, c: '#2a4a8a', c2: '#e8b0d8',
    liga: LIGA,
    dificultad: { base: [1.8, 1.55], desenlace: [2.0, 1.65] },
    contadores: { derrotas: 'kalos', local: 'kalos_local', runs: 'runs_k' },
    mapas: [
      {
        id: 'novarte', base: 'forest', color: 0x7ac85a, k: .2,
        name: 'Bosque Novarte', desc: 'El bosque luminoso a las afueras de Novarte: mariposas, flores de las hadas y lagartos tomando el sol. Los Pokémon de otras regiones no viven aquí.',
        unlock: 'Completa la Torre Dragospiral', zonas: ['Senda de las flores', 'Claro del bosque'],
        santuario: { de: 'encina', name: 'Árbol de la Vida', heart: 'Corazón de la vida', legendaries: [716], color: 0x6ad8ff },
        datos: {
          types: ['grass', 'bug', 'fairy', 'normal'], late: ['electric', 'dragon'], legendaries: [716],
          bosses: [666, 671, 673], guardians: [[666, 665], [671, 670], [673, 672]],
          totems: [[664, 669, 672, 694], [665, 670, 673, 695], [666, 671, 706, 702]], summoners: [[665, 664], [670, 669], [695, 694]],
          residents: [664, 669, 672, 694, 659, 661, 702], weather: ['clear', 'sun', 'rain'],
          props: ['tree', 'bush', 'tree', 'mushroom', 'pine'],
          music: { root: 64, scale: [0, 2, 4, 7, 9], bpm: 112, mood: 'bright' }
        }
      },
      {
        id: 'reflejos', base: 'glacier', color: 0x9ad8f0, k: .22,
        name: 'Cueva Reflejos', desc: 'Una cueva de espejos y cristal helado. Hadas, joyas y fósiles de la era glaciar se reflejan en cada pared.',
        unlock: 'Completa el Bosque Novarte', zonas: ['Galería de espejos', 'Gruta helada'],
        santuario: { de: 'glacier', name: 'Cámara de Diamantes', heart: 'Corazón de diamante', legendaries: [719], color: 0xffb8e8 },
        datos: {
          types: ['rock', 'fairy', 'ice', 'water'], late: ['steel', 'psychic'], legendaries: [719],
          bosses: [699, 713, 689], guardians: [[699, 698], [713, 712], [689, 688]],
          totems: [[688, 698, 712, 682], [689, 699, 713, 684], [703, 685, 683, 693]], summoners: [[699, 698], [713, 712], [693, 692]],
          residents: [688, 698, 712, 682, 684, 692, 703], weather: ['fog', 'hail', 'clear'],
          props: ['crystal', 'rock', 'crystal', 'snowpine', 'pillar'],
          music: { root: 61, scale: [0, 2, 3, 5, 7, 9, 10], bpm: 104, mood: 'mystic' }
        }
      },
      {
        id: 'desolacion', base: 'canela', color: 0x5a3a6a, k: .28,
        name: 'Hotel Desolación', desc: 'Un hotel abandonado junto al mar. Fantasmas, calabazas y espadas embrujadas rondan los pasillos; en el sótano se abren los anillos de Hoopa.',
        unlock: 'Completa la Cueva Reflejos', zonas: ['Vestíbulo en ruinas', 'Sótano'],
        santuario: { de: 'canela', name: 'Anillo de Hoopa', heart: 'Corazón de los anillos', legendaries: [720, 721], color: 0xd88aff },
        datos: {
          types: ['ghost', 'dark', 'fire', 'steel'], late: ['poison', 'psychic'], legendaries: [720, 721],
          bosses: [681, 711, 668], guardians: [[681, 680], [711, 710], [668, 667]],
          totems: [[679, 708, 710, 686], [680, 709, 711, 687], [681, 668, 675, 678]], summoners: [[680, 679], [709, 708], [687, 686]],
          residents: [679, 708, 710, 686, 667, 674, 677], weather: ['fog', 'clear', 'ash'],
          props: ['grave', 'deadtree', 'pillar', 'rock', 'grave'],
          music: { root: 57, scale: [0, 1, 3, 5, 6, 8, 10], bpm: 100, mood: 'tense' }
        }
      },
      {
        id: 'desenlace', base: 'cave', color: 0x3a6a4a, k: .3,
        name: 'Cueva Desenlace', desc: 'La cueva más profunda de Kalos. Dragones, fósiles y murciélagos sónicos guardan el lugar donde Zygarde vigila el equilibrio y Yveltal duerme.',
        unlock: 'Completa el Hotel Desolación', zonas: ['Túneles', 'Fondo de la cueva'],
        santuario: { de: 'iris', name: 'Fondo de la Cueva Desenlace', heart: 'Corazón del equilibrio', legendaries: [717, 718], color: 0x5ae87a },
        datos: {
          types: ['dragon', 'ground', 'rock', 'flying'], late: ['dark', 'poison'], evolved: true, legendaries: [717, 718],
          bosses: [706, 715, 697], guardians: [[706, 705], [715, 714], [697, 696]],
          totems: [[704, 714, 696, 690], [705, 715, 697, 691], [706, 701, 660, 663]], summoners: [[705, 704], [715, 714], [691, 690]],
          residents: [704, 714, 696, 690, 659, 701, 661], weather: ['fog', 'clear', 'ash'],
          props: ['rock', 'pillar', 'crystal', 'rock', 'deadtree'],
          music: { root: 55, scale: [0, 1, 3, 5, 7, 8, 10], bpm: 126, mood: 'tense' }
        }
      }
    ]
  });
})();
