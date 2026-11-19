/* Subversión propia (moportor6, 1.01): compatibilidad de tipos en los movimientos, solo en PokéBonk Lite.
   Los movimientos que ofrece el juego salen de data/learnsets.json, que solo trae los que se aprenden por nivel (por eso
   un tipo Agua solo veía Agua y Normal). Aquí, al cargarse ese archivo, cada Pokémon recibe además movimientos de 2
   tipos compatibles (como las MT de los juegos: Agua → Hielo, Fuego → Lucha/Tierra…), a partir del nivel 18 y cada 8
   niveles. Así hay más variedad y se pueden juntar dos movimientos del mismo tipo para las fusiones del PC de Bill.
   Gancho: envuelve window.fetch solo para data/learnsets.json (antes de que cargue el módulo del juego). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const COMPAT = {
    normal: ['fighting', 'dark'], fire: ['fighting', 'ground'], water: ['ice', 'dark'], grass: ['poison', 'ground'],
    electric: ['steel', 'psychic'], ice: ['water', 'ground'], fighting: ['rock', 'dark'], poison: ['dark', 'ground'],
    ground: ['rock', 'steel'], flying: ['steel', 'dark'], psychic: ['fairy', 'ghost'], bug: ['poison', 'grass'],
    rock: ['ground', 'steel'], ghost: ['dark', 'psychic'], dragon: ['fire', 'water'], dark: ['ghost', 'poison'],
    steel: ['rock', 'electric'], fairy: ['psychic', 'grass']
  };
  const MOV = {
    ice: ['ice-shard', 'icy-wind', 'ice-punch', 'ice-beam', 'blizzard'], fighting: ['karate-chop', 'low-kick', 'brick-break', 'focus-blast'],
    ground: ['mud-shot', 'bulldoze', 'dig', 'earthquake'], poison: ['sludge', 'poison-jab', 'sludge-bomb'],
    steel: ['metal-claw', 'steel-wing', 'iron-tail', 'flash-cannon'], psychic: ['confusion', 'psybeam', 'zen-headbutt', 'psychic'],
    rock: ['rock-throw', 'rock-tomb', 'rock-slide', 'stone-edge'], dark: ['bite', 'night-slash', 'crunch', 'dark-pulse'],
    ghost: ['hex', 'shadow-claw', 'shadow-ball'], grass: ['magical-leaf', 'seed-bomb', 'giga-drain', 'energy-ball'],
    fire: ['ember', 'fire-fang', 'fire-punch', 'flamethrower'], water: ['water-gun', 'water-pulse', 'aqua-tail', 'surf'],
    electric: ['spark', 'shock-wave', 'thunder-punch', 'thunderbolt'], fairy: ['draining-kiss', 'dazzling-gleam', 'moonblast'],
    dragon: ['dragon-claw', 'dragon-pulse'], normal: ['headbutt', 'body-slam']
  };
  const f0 = window.fetch.bind(window);
  const ampliar = async ls => {
    const [mv, pk] = await Promise.all([f0('./data/moves.json').then(r => r.json()), f0('./data/pokemon.json').then(r => r.json())]);
    const id = new Map(mv.map(m => [m.key, m.id]));
    for (const p of pk) {
      const l = ls[p.id];
      if (!l || !p.types?.length) continue;
      const ya = new Set(l.map(x => x[0]));
      const tipos = [...new Set(p.types.flatMap(t => COMPAT[t] ?? []))].filter(t => !p.types.includes(t)).slice(0, 2);
      let nv = 18;
      for (const t of tipos) for (const k of (MOV[t] ?? []).slice(0, 3)) {
        const m = id.get(k);
        if (m != null && !ya.has(m)) { l.push([m, nv]); ya.add(m); nv += 8; }
      }
    }
    // 1.34: movimientos heredados de la Guardería (guarderia.js los guarda aquí: { especie: idMovimiento }), desde el Nv. 5.
    try { const her = JSON.parse(localStorage.getItem('pb-herencia') || '{}'); for (const [sp, m] of Object.entries(her)) { const l = ls[sp]; if (l && !l.some(x => x[0] === m)) l.push([m, 5]); } } catch {}
    return ls;
  };
  window.fetch = async (u, ...a) => {
    const r = await f0(u, ...a);
    try {
      if (String(u?.url ?? u).includes('data/learnsets.json') && r.ok) {
        const ls = await ampliar(await r.clone().json());
        window.PB_COMPAT = (window.PB_COMPAT ?? 0) + 1;
        return new Response(JSON.stringify(ls), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
    } catch {}
    return r;
  };
})();
