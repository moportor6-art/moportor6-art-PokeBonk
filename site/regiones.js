/* Subversión propia: regiones nuevas (Hoenn, Sinnoh...).
   Cada región se registra con PB_REGIONES.registrar({...}) desde su archivo (hoenn.js, sinnoh.js) y trae:
   - su rango de la Pokédex (min-max), sus mapas (que se clonan del aspecto de mapas del juego) y su Liga;
   - bebés: miembros de la Liga de regiones anteriores cuya familia empieza ahora por un bebé de esta región
     (Marill -> Azurill, Snorlax -> Munchlax...). La ficha del bebé copia la del miembro y lo sustituye;
   - dificultad de sus mapas (multiplicadores de PS y daño enemigos) y nombres de sus contadores de retos.
   Reglas comunes:
   - En los mapas de una región solo salen Pokémon de su rango; en Kanto y Johto, solo hasta el 251.
   - Bono de local (+10% daño) con un Pokémon de la región en sus mapas; bono de forastero (+20% Pokédólares,
     +30% Polvo) con uno de otra.
   - Los Pokémon fijos de Kanto que traen algunos sucesos se cambian por uno de la región del mapa.
   Ganchos en el juego: defineProperty-…js (maxDex, liga, mapas, regiones, bebés), menus-…js (lista de
   Pokémon por región, contadores, enemigos) y main-…js (start, mods, polvo). */
(() => {
  const KANTO_JOHTO_MAX = 251;
  const clon = o => JSON.parse(JSON.stringify(o));
  const mezcla = (a, b, k) => [16, 8, 0].reduce((s, sh) => s | Math.round(((a >> sh) & 255) * (1 - k) + ((b >> sh) & 255) * k) << sh, 0);
  const CIELO = ['sky', 'fog', 'sun', 'hemiGround', 'waterColor'];
  const tinte = (o, col, k, soloSuelo) => {
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

  const R = {
    lista: [],
    registrar(def) { R.lista.push(def); R.cache.clear(); },
    get maxDex() { return Math.max(KANTO_JOHTO_MAX, ...R.lista.map(r => r.max)); },
    get MAPAS() { return R.lista.flatMap(r => r.mapas.map(m => m.id)); },
    // miembro antiguo -> bebé que ahora empieza su familia
    get bebes() { return Object.assign({}, ...R.lista.map(r => r.bebes ?? {})); },
    // especie -> miembro de la Liga, para las especies cuya ficha ya no existe
    get oi() { return Object.assign({}, ...R.lista.map(r => r.oi ?? {})); },
    regionDe(id) { return R.lista.find(r => id >= r.min && id <= r.max) ?? null; },
    regionMapa(run) { return run?.biome?.region ? R.lista.find(r => r.id === run.biome.region) ?? null : null; },

    // ---- datos para el juego ----
    liga(D) {
      const out = [];
      for (const r of R.lista) {
        for (const x of r.liga) {
          out.push({ ...x, kit: x.kit.slice(), challenge: Array.isArray(x.challenge) ? x.challenge.map(c => ({ ...c })) : { ...x.challenge }, pbRegion: r.id });
        }
        for (const [de, a] of Object.entries(r.bebes ?? {})) {
          const e = D.find(x => x.id === +de) ?? out.find(x => x.id === +de);
          if (!e) continue;
          const lv = r.niveles?.[a] ?? (e.evoLevels ? [12, ...e.evoLevels] : [12]);
          out.push({ ...e, id: a, kit: e.kit.slice(), evoLevels: lv, pbRegion: r.id, pbBebeDe: +de });
        }
      }
      return out;
    },
    mapas(lista) {
      const out = [];
      for (const r of R.lista) {
        for (const m of r.mapas) {
          const base = lista.find(x => x.id === m.base);
          if (!base) continue;
          const o = tinte(clon(base), m.color, m.k);
          if (m.suelo) tinte(o, m.suelo[0], m.suelo[1], true);
          delete o.sanctuary; delete o.johto;
          const zonas = o.zones.map((z, i) => ({ ...clon(z), name: m.zonas?.[i] ?? z.name }));
          Object.assign(o, m.datos, { id: m.id, name: m.name, desc: m.desc, unlock: m.unlock, region: r.id, specials: [], zones: zonas });
          // Santuario (zona 4): la arena, el altar y el portal de un santuario del juego, con el cielo teñido y
          // el legendario de este mapa. Sin santuario, el legendario es el jefe de la zona 3.
          const sa = m.santuario && lista.find(x => x.id === m.santuario.de)?.sanctuary;
          if (sa) {
            const s2 = tinte(clon(sa), m.santuario.color ?? m.color, m.santuario.k ?? .3);
            Object.assign(s2, { name: m.santuario.name, heart: m.santuario.heart, legendaries: m.santuario.legendaries ?? o.legendaries });
            if (m.santuario.music) s2.music = m.santuario.music;
            o.sanctuary = s2;
          }
          out.push(o);
        }
      }
      return out;
    },
    regiones() {
      return R.lista.map(r => ({ id: r.id, name: r.name, gen: r.gen, maps: r.mapas.map(m => m.id), slots: 0, gate: r.gate, emblem: r.emblem, c: r.c, c2: r.c2 }));
    },

    // ---- durante la partida ----
    cache: new Map(),
    todos: null,
    lista_(todos, run) {
      const reg = R.regionMapa(run);
      const k = (reg?.id ?? 'kj') + todos.length;
      let v = R.cache.get(k);
      if (!v || v.src !== todos) {
        v = todos.filter(p => reg ? p.id >= reg.min && p.id <= reg.max : p.id <= KANTO_JOHTO_MAX);
        v.src = todos;
        R.cache.set(k, v);
      }
      return v;
    },
    listaPokemon(todos) {
      R.todos = todos;
      const run = window.__pbRun;
      if (!run || run.state === 'over' || !run.biome) return todos;
      return R.lista_(todos, run);
    },
    remap(run, id, flags) {
      const reg = R.regionMapa(run);
      if (!reg || (id >= reg.min && id <= reg.max) || !R.todos || (flags & (4 | 128 | 16384 | 65536))) return null;
      const m = run.__pbRemap ??= new Map();
      if (m.has(id)) return m.get(id);
      const byId = R.byId ??= new Map(R.todos.map(p => [p.id, p]));
      const p = byId.get(id);
      let elegido = null;
      if (p) {
        const suyos = R.todos.filter(q => q.id >= reg.min && q.id <= reg.max && !q.legendary && !q.mythical);
        const tipo = suyos.filter(q => q.types.some(t => p.types.includes(t)));
        const fase = tipo.filter(q => q.evoStage === p.evoStage);
        const cands = fase.length ? fase : tipo.length ? tipo : suyos;
        if (cands.length) elegido = cands[(id * 2654435761 >>> 0) % cands.length].id;
      }
      m.set(id, elegido);
      return elegido;
    },
    esLocal(run, reg = R.regionMapa(run)) {
      const id = run?.player?.roster?.id ?? 0;
      return !!reg && id >= reg.min && id <= reg.max;
    },
    start(run) {
      const reg = R.regionMapa(run);
      if (!reg || run.mode === 'duel') return;
      const d = reg.dificultad[run.biome.id] ?? reg.dificultad.base;
      run.diff.enemyHp *= d[0];
      run.diff.enemyDamage *= d[1];
      const local = R.esLocal(run, reg);
      if (!local) run.goldMul = (run.goldMul ?? 1) * 1.2;
      try { run.meta.count(reg.contadores.runs, 1); } catch {}
      setTimeout(() => {
        try {
          run.ui.toast(local ? `Bono de local: +10% de daño en ${reg.name}`
            : 'Bono de forastero: +20% Pokédólares y +30% de Polvo al acabar', null);
        } catch {}
      }, 4000);
    },
    mods(p) {
      const run = p?.run, reg = R.regionMapa(run);
      const id = p?.roster?.id ?? 0;
      return reg && id >= reg.min && id <= reg.max ? [{ stat: 'damage', mul: 1.1 }] : [];
    },
    polvo(run) {
      const reg = R.regionMapa(run);
      return reg && !R.esLocal(run, reg) && run.mode !== 'duel' ? 1.3 : 1;
    },
    // Contadores de retos al derrotar a `n` Pokémon de la especie `sp`.
    cuenta(run, sp, n) {
      const reg = R.regionDe(sp);
      if (reg) run.meta.count(reg.contadores.derrotas, n);
      const enMapa = R.regionMapa(run);
      if (enMapa && R.esLocal(run, enMapa)) run.meta.count(enMapa.contadores.local, n);
    }
  };
  window.PB_REGIONES = R;
})();
