/* Subversión propia (moportor6, 0.97): equilibrio de la Lite.
   - Tope de nivel por medallas: 30 + 6 por medalla de gimnasio (máx. 100). Al llegar, la EXP extra se convierte en
     Polvo Estelar (va a stats.pbDust, que se suma al acabar).
   - Escalado según tu nivel: si vas por encima del nivel esperado para el tiempo de partida (3 + 2,5 por minuto), los
     salvajes que aparecen ganan +2 % de PS y daño por nivel de más (máx. +60 %).
   - Tope por objeto: máximo 5 copias de cada objeto por partida (o el máximo propio del objeto si es menor).
   - Élites con rasgo: Veloz (+40 % velocidad), Vampírico (se cura 3× el daño que te hace), Explosivo (al morir deja una
     zona que estalla) o Blindado (los 4 primeros golpes no le hacen daño).
   - Furia: jefes, guardianes y líderes que siguen vivos a los 2 minutos se enfurecen (+30 % daño y velocidad).
   Solo partidas normales / historia (no duelos, torre, sin fin ni expedición). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const activa = run => run && run.mode === 'standard' && !run.tower && !run.endless && !run.expedition && !run.duel;
  const meta = () => window.__pbMeta;
  const medallas = () => Object.values(meta()?.profile?.pbMedallas ?? {}).reduce((a, l) => a + (l?.length ?? 0), 0);
  // 0.98: nunca por debajo del nivel de la siguiente evolución (si no, te quedabas sin poder evolucionar).
  const tope = () => { const r = window.__pbRun; return Math.min(100, Math.max(30 + 6 * medallas(), r?.nextEvo?.level ?? 0)); };
  const esperado = run => 3 + 2.5 * ((run.time ?? 0) / 60);
  const RASGOS = ['veloz', 'vampirico', 'explosivo', 'blindado'];
  const NOMBRE = { veloz: 'Veloz', vampirico: 'Vampírico', explosivo: 'Explosivo', blindado: 'Blindado' };
  const S = run => run.__pbEq ??= { rasgo: new Map(), furia: new Map(), muertos: [] };
  const vivo = (E, j, g) => E.gen[j] === g && E.alive[j] && !(E.dying?.[j] > 0);

  // Escalado por nivel y rasgos de élite, al aparecer.
  const prevE = window.PB_REG_E;
  window.PB_REG_E = (E, i, sp) => {
    try { prevE?.(E, i, sp); } catch {}
    try {
      const run = E.run ?? window.__pbRun;
      if (!activa(run)) return;
      const fl = E.flags[i];
      if (fl & (128 | 65536)) return;
      const de = (run.player?.level ?? 1) - esperado(run);
      if (de > 0 && !(fl & 4)) { const k = 1 + Math.min(0.6, 0.02 * de); E.maxHp[i] *= k; E.hp[i] *= k; E.dmg[i] *= k; }
      const st = S(run);
      if (fl & 4) st.furia.set(i, { g: E.gen[i], t: run.time ?? 0, ok: false });
      if ((fl & 1) && !(fl & 4)) {
        const r = RASGOS[Math.floor(Math.random() * RASGOS.length)];
        st.rasgo.set(i, { g: E.gen[i], r, golpes: 4 });
        if (r === 'veloz' && E.speed) E.speed[i] *= 1.4;
        try { run.ui.popup(E.x[i], E.y[i] + (E.hgt?.[i] ?? 2) + 1, E.z[i], `Élite ${NOMBRE[r]}`, '#ff9a3a', 1); } catch {}
      }
    } catch {}
  };

  const rasgo = (run, j) => { const r = run.__pbEq?.rasgo.get(j); return r && run.enemies.gen[j] === r.g ? r : null; };

  setInterval(() => {
    const run = window.__pbRun, pl = run?.player;
    if (!activa(run) || !pl) { const m = document.querySelector('.pb-tope'); if (m) m.hidden = true; return; }
    const E = run.enemies, st = S(run);
    // Ganchos por partida.
    if (pl.addXp && !pl.__pbEqXp) {
      const ax = pl.addXp;
      pl.addXp = function (e, ...a) {
        if ((this.level ?? 1) >= tope()) {
          run.stats.pbDust = (run.stats.pbDust ?? 0) + e * 0.05;
          const t = run.time ?? 0;
          if (!(st.avisoTope > t)) { st.avisoTope = t + 90; try { run.ui.toast(`Tope de nivel ${tope()}: ${medallas()} medallas (30 + 6 por medalla). La EXP extra se convierte en Polvo Estelar; gana medallas para subirlo`, null); } catch {} }
          return;
        }
        return ax.call(this, e, ...a);
      };
      pl.__pbEqXp = true;
    }
    if (pl.$h8lcma && !pl.__pbEqObj) {
      const can = pl.$h8lcma;
      pl.$h8lcma = function (id, ...a) { return can.call(this, id, ...a) && (this.items.get(id) ?? 0) < 5; };
      pl.__pbEqObj = true;
    }
    if (pl.hurt && !pl.__pbEqHurt) {
      const h = pl.hurt;
      pl.hurt = function (dmg, tipo, src, ...a) {
        const r = h.call(this, dmg, tipo, src, ...a);
        try {
          const t = src >= 0 && rasgo(run, src);
          if (r !== false && t?.r === 'vampirico' && E.alive[src]) {
            E.hp[src] = Math.min(E.maxHp[src], E.hp[src] + dmg * 3);
            try { run.ui.popup(E.x[src], E.y[src] + 2, E.z[src], `+${Math.round(dmg * 3)}`, '#ff5a7a', 0.8); } catch {}
          }
        } catch {}
        return r;
      };
      pl.__pbEqHurt = true;
    }
    const c = run.combat;
    if (c && !c.__pbEq) {
      const hit = c.hit;
      c.hit = function (j, dmg, o) {
        try {
          const t = rasgo(run, j);
          if (t?.r === 'blindado' && t.golpes > 0 && dmg > 0) {
            t.golpes--;
            try { run.ui.popup(E.x[j], E.y[j] + 2, E.z[j], t.golpes ? '¡Bloqueado!' : '¡Blindaje roto!', '#c8d8e8', 0.8); } catch {}
            return hit.call(this, j, 0, o);
          }
        } catch {}
        return hit.call(this, j, dmg, o);
      };
      c.__pbEq = true;
    }
    // Marca «TOPE» junto al nivel mientras estás topado (fija en pantalla: el recuadro del nivel recorta lo que sobresale).
    const lv = document.querySelector('#hud .tl-lvl');
    let m = document.querySelector('.pb-tope');
    const top = lv && (pl.level ?? 1) >= tope();
    if (top && !m) { m = document.createElement('div'); m.className = 'pb-tope'; m.style.cssText = 'position:fixed;z-index:30;pointer-events:none;font:900 10px system-ui;color:#3a2a00;background:#ffd23a;border:2px solid #fff3c0;border-radius:8px;padding:1px 6px;letter-spacing:.5px;transform:translate(-50%,0)'; document.body.append(m); }
    if (m) {
      m.hidden = !top || run.state !== 'play';
      if (top) { const r = lv.getBoundingClientRect(); m.style.left = (r.left + r.width / 2) + 'px'; m.style.top = (r.bottom + 2) + 'px'; m.textContent = `TOPE ${tope()}`; }
    }
    // Explosivos: al morir dejan una zona que estalla a los 1,1 s.
    for (const [j, t] of st.rasgo) {
      if (E.gen[j] !== t.g) { st.rasgo.delete(j); continue; }
      if (t.r === 'explosivo' && (!E.alive[j] || E.dying?.[j] > 0) && !t.boom) {
        t.boom = true;
        const x = E.x[j], z = E.z[j], y = run.terrain.height(x, z), R = 3.5, dmg = E.dmg[j] * 2;
        try { run.vfx.telegraph(x, y, z, R, 0xff6a2a, 1.1); } catch {}
        run.later?.(1.1, () => {
          try { run.vfx.burst(x, y + 1, z, 0xff6a2a, 20, 6, 0, 0.5, 0.6); run.vfx.ring(x, y, z, R, 0xff6a2a, 0.4); } catch {}
          const p = run.player.pos;
          if ((p.x - x) ** 2 + (p.z - z) ** 2 < R * R) try { run.player.hurt(dmg, 'fire', -1, x, z); } catch {}
        });
      }
    }
    // Furia de jefes y líderes.
    for (const [j, f] of st.furia) {
      if (!vivo(E, j, f.g)) { st.furia.delete(j); continue; }
      if (!f.ok && (run.time ?? 0) - f.t >= 120) {
        f.ok = true;
        E.dmg[j] *= 1.3;
        if (E.speed) E.speed[j] *= 1.3;
        try { run.ui.banner('¡Se ha enfurecido!', 'Tardaste más de 2 minutos: +30 % de daño y velocidad', '#ff4a3a', { species: E.species[j] }); } catch {}
        try { run.vfx.ring(E.x[j], E.y[j], E.z[j], 5, 0xff3a3a, 0.6); } catch {}
      }
    }
  }, 150);
})();
