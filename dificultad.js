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
