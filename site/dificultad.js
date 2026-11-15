/* Subversión propia (moportor6, 0.84): «Dificultad Remaster», solo en PokéBonk Lite.
   Partidas normales y del modo historia (no duelos, torre, sin fin ni expedición):
   - salvajes normales y élites: PS ×2 y +8 %/min, daño ×1,8 y +6 %/min (minutos de la zona);
   - cada mapa es más difícil que el anterior: +3 % por mapa en el orden de la Liga (Kanto → Paldea), encima de la
     dificultad propia de cada región;
   - élites también en Normal (4 % de los salvajes sueltos);
   - Alfas: PS ×40 y daño ×3 respecto a un normal (antes ×22 y ×1,8), llegan con 3-5 de escolta, embisten con aviso
     en el suelo y salen el doble (uno extra cada 2,5-4 min desde el minuto 2);
   - presión adaptativa: cada 30 s, si vas sobrado (más del 80 % de PS y matando rápido) sube un 10 % (hasta ×3);
     si vas por debajo del 30 % de PS, baja.
   - defensa: armadura extra por la Defensa y Def. Esp. reales del Pokémon (/8) y +1 por nivel (0.89; el doble desde la 0.93; todos los modos);
   - precios: mejoras del Laboratorio y Poké Balls del mapa un 40 % más baratas (0.88, todos los modos).
   Ganchos: PB_REG_E (aparición, encadenado) y run.director.fire('alpha') del juego. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const MAPAS_KJ = ['forest', 'desert', 'coast', 'glacier', 'canela', 'cave', 'encina', 'iris'];
  const ORDEN = ['hoenn', 'sinnoh', 'teselia', 'kalos', 'alola', 'galar', 'paldea'];
  const indiceMapa = id => {
    const l = [...MAPAS_KJ];
    try { for (const r of ORDEN) for (const m of window.PB_REGIONES?.lista?.find(x => x.id === r)?.mapas ?? []) l.push(m.id); } catch {}
    const k = l.indexOf(id);
    return k < 0 ? 0 : k;
  };
  const activa = run => run && run.mode === 'standard' && !run.tower && !run.endless && !run.expedition && !run.duel;
  const D = run => {
    if (run.__pbDif) return run.__pbDif;
    const g = indiceMapa(run.biome?.id);
    return (run.__pbDif = { g, mapa: 1 + 0.03 * g, presion: 1, kills: 0, sigAlfa: 120 + Math.random() * 60, cola: [], dash: new Map() });
  };
  const min = run => (run.stageTime ?? 0) / 60;
  const factores = run => {
    const d = D(run), m = min(run);
    return { hp: 2 * (1 + 0.08 * m) * d.mapa * d.presion, dmg: 1.8 * (1 + 0.06 * m) * d.mapa * d.presion };
  };

  const prevE = window.PB_REG_E;
  window.PB_REG_E = (E, i, sp) => {
    try { prevE?.(E, i, sp); } catch {}
    try {
      const run = E.run ?? window.__pbRun;
      if (!activa(run)) return;
      const fl = E.flags[i];
      if (fl & (4 | 128 | 65536)) return; // jefes y guardianes, jaulas de captura y salvajes de otro jugador
      const f = factores(run);
      let hp = f.hp, dmg = f.dmg;
      if (fl & 2) {
        hp *= 40 / 22; dmg *= 3 / 1.8;
        D(run).cola.push({ sp: E.species[i], x: E.x[i], z: E.z[i], n: 3 + Math.floor(Math.random() * 3) });
      } else if (!(fl & 1) && !fl && (run.tier | 0) === 0 && Math.random() < 0.04) {
        E.flags[i] |= 1; hp *= 4.5; dmg *= 1.35; // élite (en Difícil y Experto ya los pone el juego)
      }
      E.maxHp[i] *= hp; E.hp[i] *= hp; E.dmg[i] *= dmg;
    } catch {}
  };

  // Precios (0.88): mejoras del Laboratorio y Poké Balls del mapa un 40 % más baratas (en todos los modos de la Lite).
  const BARATO = 0.6;
  const labBarato = () => {
    const defs = window.PB_LAB?.defs;
    if (!defs?.length) return setTimeout(labBarato, 500);
    for (const d of defs) {
      if (d.__pbBarato) continue;
      const c = d.cost;
      d.cost = lv => Math.max(1, Math.round(c(lv) * BARATO));
      d.__pbBarato = true;
    }
  };
  labBarato();
  setInterval(() => {
    const ia = window.__pbRun?.interactables;
    if (!ia || ia.__pbBarato || typeof ia.chestCost !== 'function') return;
    const c = ia.chestCost.bind(ia);
    ia.chestCost = () => Math.max(1, Math.round(c() * BARATO));
    ia.__pbBarato = true;
  }, 200);

  // Defensa (0.89, todos los modos de la Lite): armadura extra = (Defensa + Def. Esp. reales de la etapa actual) / 8
  // + 1 por nivel. El juego solo daba 5-16 de armadura base, casi igual para todos.
  const STATS = new Map();
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) STATS.set(x.id, x.stats); }).catch(() => {});
  const extraDef = pl => {
    const st = STATS.get(pl.speciesId);
    return (st ? (st.def + st.spd) / 8 : 0) + 0.8 * (pl.level ?? 1); // 0.93: el doble (antes 0,5); 0.96: −20 % (0,8)
  };
  setInterval(() => {
    const pl = window.__pbRun?.player;
    if (!pl || pl.__pbDef || typeof pl.recompute !== 'function') return;
    const rc = pl.recompute;
    pl.recompute = function (...a) {
      const r = rc.apply(this, a);
      try {
        if (this.stats) {
          this.stats.armor += extraDef(this);
          // 0.94: también ataque por nivel: +0,8 % de daño (0.96: −20 %, antes 1 %) y +0,5 % de velocidad de ataque.
          const lv = this.level ?? 1;
          this.stats.damage *= 1 + 0.008 * lv;
          // 0.96: Maldición de la horda (Laboratorio): más salvajes, más EXP.
          const mc = maldicion();
          if (mc && !run0()?.duel && run0()?.mode !== 'duel') { this.stats.enemyAmount *= 1 + 0.25 * mc; this.stats.xpGain *= 1 + 0.15 * mc; }
          this.stats.attackSpeed *= 1 + 0.005 * lv;
        }
      } catch {}
      return r;
    };
    pl.__pbDef = { nivel: pl.level, sp: pl.speciesId };
    try { pl.recompute(); } catch {}
  }, 200);
  // Al subir de nivel o evolucionar, recalcula si el juego no lo hizo.
  setInterval(() => {
    const pl = window.__pbRun?.player, d = pl?.__pbDef;
    if (!d || (d.nivel === pl.level && d.sp === pl.speciesId)) return;
    d.nivel = pl.level; d.sp = pl.speciesId;
    try { pl.recompute(); } catch {}
  }, 500);

  // ---------- Maldición de la horda (0.96, Laboratorio de la Lite) ----------
  // Nivel 0-8 (profile.pbMaldicion): cada nivel +25 % de salvajes en las oleadas (×3 al 8) y +15 % de EXP y de Polvo
  // Estelar al terminar (+120 % al 8). No se aplica en duelos.
  const MAX_M = 8;
  const run0 = () => window.__pbRun;
  const maldicion = () => Math.max(0, Math.min(MAX_M, window.__pbMeta?.profile?.pbMaldicion | 0));
  const polvo0 = window.PB_REGIONES?.polvo;
  if (window.PB_REGIONES) window.PB_REGIONES.polvo = run => {
    const b = (() => { try { return polvo0?.call(window.PB_REGIONES, run) ?? 1; } catch { return 1; } })();
    return run?.mode === 'duel' ? b : b * (1 + 0.15 * maldicion());
  };
  setInterval(() => {
    const lab = document.querySelector('.screen.lab'), m = window.__pbMeta;
    if (!lab || !m) return;
    let caja = lab.querySelector('.pb-lab-mald');
    const n = maldicion();
    if (caja && caja.dataset.n === String(n)) return;
    if (!caja) {
      const ref = lab.querySelector('.pb-lab-nat') ?? lab.querySelector('.pb-lab-oro') ?? lab.querySelector('.scr-head');
      if (!ref) return;
      caja = document.createElement('div');
      caja.className = 'pb-lab-oro pb-lab-mald';
      caja.style.cssText = 'background:#3a1a3a;color:#ffd8ff';
      ref.after(caja);
    }
    caja.dataset.n = String(n);
    caja.replaceChildren();
    const t = document.createElement('span');
    t.innerHTML = `☠ Maldición de la horda: <b>${n}/${MAX_M}</b> <small style="color:#ffb0ff">· oleadas +${n * 25} % · EXP y Polvo +${n * 15} %</small>`;
    const btn = (txt, d) => {
      const b = document.createElement('button');
      b.className = 'btn small';
      b.textContent = txt;
      b.disabled = n + d < 0 || n + d > MAX_M;
      b.onclick = () => { m.profile.pbMaldicion = Math.max(0, Math.min(MAX_M, n + d)); try { m.save(); } catch {} };
      return b;
    };
    caja.append(t, btn('−', -1), btn('+', 1));
  }, 400);

  const aviso = (run, t) => { try { run.ui.toast(t, null); } catch {} };
  setInterval(() => {
    const run = window.__pbRun;
    if (!activa(run) || run.state !== 'play') return;
    const d = D(run), E = run.enemies, p = run.player;
    if (!d.avisado && (run.stageTime ?? 0) > 3) {
      d.avisado = true;
      aviso(run, `Dificultad Remaster · mapa ${d.g + 1}: ×${d.mapa.toFixed(2).replace('.', ',')}`);
    }
    // Escolta de los Alfas.
    while (d.cola.length) {
      const a = d.cola.shift();
      for (let k = 0; k < a.n; k++) {
        const ang = Math.random() * Math.PI * 2, x = a.x + Math.cos(ang) * 3, z = a.z + Math.sin(ang) * 3;
        try { if (run.terrain.inBounds(x, z, 4)) E.spawn(a.sp, x, z, run.director.hpMult(), run.director.dmgMult(), 0); } catch {}
      }
    }
    // Alfa extra.
    if ((run.stageTime ?? 0) >= d.sigAlfa) {
      d.sigAlfa = run.stageTime + 150 + Math.random() * 90;
      try { run.director.fire('alpha'); } catch {}
    }
    // Embestida: aviso rojo en el suelo y, 0,8 s después, carga hacia donde estabas.
    const t = run.time ?? 0;
    for (let i = 0; i < E.n; i++) {
      if (!E.alive[i] || E.dying?.[i] || !(E.flags[i] & 2) || (E.flags[i] & 65536)) continue;
      const s = d.dash.get(i) ?? { gen: E.gen[i], sig: t + 3 + Math.random() * 3 };
      if (s.gen !== E.gen[i]) { s.gen = E.gen[i]; s.sig = t + 3; s.obj = null; }
      d.dash.set(i, s);
      const dx = p.pos.x - E.x[i], dz = p.pos.z - E.z[i], dist = Math.hypot(dx, dz);
      if (!s.obj && t >= s.sig && dist > 4 && dist < 22) {
        s.obj = { x: p.pos.x, z: p.pos.z, at: t + 0.8 };
        try { run.vfx.ground.spawn({ x: p.pos.x, y: run.terrain.surface(p.pos.x, p.pos.z) + 0.08, z: p.pos.z, life: 0.8, size: 2.5, endSize: 3.5, color: 0xff3a3a, shape: 3, glow: 0, rot: 0 }); } catch {}
      } else if (s.obj && t >= s.obj.at) {
        const ex = s.obj.x - E.x[i], ez = s.obj.z - E.z[i], l = Math.hypot(ex, ez) || 1;
        E.kx[i] = ex / l * 26; E.kz[i] = ez / l * 26;
        s.obj = null; s.sig = t + 5 + Math.random() * 3;
      }
    }
    // Presión adaptativa.
    if ((run.time ?? 0) >= (d.sigP ??= (run.time ?? 0) + 30)) {
      d.sigP = run.time + 30;
      const k = run.stats?.kills ?? 0, ritmo = k - d.kills, vida = p.hp / Math.max(1, p.maxHp);
      d.kills = k;
      if (vida > 0.8 && ritmo >= 40 && d.presion < 3) {
        d.presion = Math.min(3, d.presion * 1.1);
        aviso(run, `¡La presión aumenta! ×${d.presion.toFixed(2).replace('.', ',')}`);
      } else if (vida < 0.3 && d.presion > 1) {
        d.presion = Math.max(1, d.presion / 1.1);
        aviso(run, `La presión baja: ×${d.presion.toFixed(2).replace('.', ',')}`);
      }
    }
  }, 100);
})();
