/* Subversión propia: Retos, una «región» especial con dos mapas de jefes que usan las megas y los Gigamax.
   - Torre Mega: solo salen las familias con mega, y todo Pokémon con mega aparece megaevolucionado.
     Santuario: Cima de la Torre Mega (Mega Rayquaza, Mega Mewtwo y Mega Zygarde).
   - Dominio Gigamax: solo salen las familias con Gigamax, y todo Pokémon con Gigamax aparece gigamaxizado.
     Santuario: Núcleo del Dominio (Eternatus Eternamax, Urshifu y Melmetal Gigamax).
   - Se abren tras la Zona Cero. Enemigos con +160% PS y +110% daño (Dominio Gigamax, +180% y +120%).
   - Sin Liga propia y sin bono de local: cualquier Pokémon juega como forastero (+20% Pokédólares, +30% Polvo).
   - Ganchos: regiones.js (región especial, familias permitidas, alEmpezar) y menus-…js (PB_RETOS.sid: qué hoja
     se dibuja para cada enemigo). Las formas salen de mega-dynamax.js (PB_MEGA.MEGAS y PB_MEGA.GMAX). */
(() => {
  const forma = (run, sp) => {
    const b = run?.biome?.id, M = window.PB_MEGA;
    if (!M) return null;
    if (b === 'torremega') return M.MEGAS[sp] ?? null;
    if (b === 'dominio') return M.GMAX[sp] ?? null;
    return null;
  };
  const cacheFam = new Map();
  const familias = (todos, de) => {
    const k = de + todos.length;
    if (!cacheFam.has(k)) {
      const fam = new Map(todos.map(p => [p.id, p.family]));
      cacheFam.set(k, new Set(Object.keys(window.PB_MEGA?.[de] ?? {}).map(id => fam.get(+id)).filter(f => f != null)));
    }
    return cacheFam.get(k);
  };

  window.PB_RETOS = {
    // Hoja que se dibuja para un enemigo de la especie sp (undefined = la normal).
    sid(run, sp) { return forma(run, sp)?.sid; }
  };

  window.PB_REGIONES?.registrar({
    id: 'retos', name: 'Retos', gen: 10, genLabel: 'Extra', especial: true, min: 1, max: 1025,
    gate: 'paldea', emblem: 384, c: '#3a1a5a', c2: '#ffcc40',
    liga: [],
    dificultad: { base: [2.6, 2.1], dominio: [2.8, 2.2] },
    contadores: { derrotas: 'retos', local: 'retos_local', runs: 'runs_r' },
    familias(todos) {
      const b = window.__pbRun?.biome?.id;
      return familias(todos, b === 'dominio' ? 'GMAX' : 'MEGAS');
    },
    alEmpezar(run) {
      // Carga ya las hojas de los jefes, guardianes y legendarios para que no salgan sin dibujo.
      const d = run.biome ?? {};
      const ids = new Set([...(d.bosses ?? []), ...(d.guardians ?? []).flat(), ...(d.legendaries ?? []), ...(d.residents ?? [])]);
      for (const sp of ids) { const f = forma(run, sp); if (f) run.sprites.get(f.sid); }
    },
    mapas: [
      {
        id: 'torremega', base: 'iris', color: 0x7a3ad8, k: .3,
        name: 'Torre Mega', desc: 'Una torre donde la piedra activadora brilla en cada piso. Todo Pokémon que puede megaevolucionar aparece megaevolucionado.',
        unlock: 'Completa la Zona Cero', zonas: ['Pisos bajos', 'Pisos altos'],
        santuario: { de: 'iris', name: 'Cima de la Torre Mega', heart: 'Corazón de la megaevolución', legendaries: [384, 150, 718], color: 0xff70ff },
        datos: {
          types: ['dragon', 'fire', 'psychic', 'dark', 'steel', 'fighting', 'ghost', 'water'], late: ['fairy', 'rock'], evolved: true, legendaries: [384, 150, 718],
          bosses: [6, 248, 445], guardians: [[6, 5], [248, 247], [445, 444]],
          totems: [[3, 9, 65, 94], [130, 142, 208, 229], [376, 373, 306, 354]], summoners: [[5, 4], [247, 246], [444, 443]],
          residents: [3, 9, 6, 65, 94, 130, 142, 248, 445, 376, 373, 282], weather: ['fog', 'clear', 'ash'],
          props: ['pillar', 'crystal', 'pillar', 'rock', 'crystal'],
          music: { root: 58, scale: [0, 2, 3, 5, 7, 8, 11], bpm: 132, mood: 'tense' }
        }
      },
      {
        id: 'dominio', base: 'cave', color: 0xc8283a, k: .35,
        name: 'Dominio Gigamax', desc: 'Una guarida llena de energía Dinamax. Todo Pokémon que puede gigamaxizarse aparece en su forma Gigamax.',
        unlock: 'Completa la Torre Mega', zonas: ['Guarida', 'Núcleo'],
        santuario: { de: 'canela', name: 'Núcleo del Dominio', heart: 'Corazón Dinamax', legendaries: [890, 892, 809], color: 0xff2a5a },
        datos: {
          types: ['fire', 'water', 'grass', 'normal', 'fighting', 'steel', 'ghost', 'poison'], late: ['dragon', 'psychic'], evolved: true, legendaries: [890, 892, 809],
          bosses: [6, 812, 823], guardians: [[812, 811], [815, 814], [818, 817]],
          totems: [[3, 9, 6, 25], [68, 94, 99, 131], [143, 823, 849, 858]], summoners: [[811, 810], [814, 813], [817, 816]],
          residents: [25, 52, 133, 812, 815, 818, 823, 826, 834, 839], weather: ['ash', 'fog', 'clear'],
          props: ['crystal', 'rock', 'pillar', 'crystal', 'rock'],
          music: { root: 55, scale: [0, 1, 3, 5, 7, 8, 10], bpm: 136, mood: 'tense' }
        }
      }
    ]
  });
})();
