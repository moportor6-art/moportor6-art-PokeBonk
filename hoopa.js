/* Subversión propia (moportor6, 1.08): Anillos de Hoopa, solo en PokéBonk Lite (idea de Pokémon Survivors).
   Botón «🌀 Anillos de Hoopa» en la pantalla del Modo historia. Eliges anillo (3, 5 o 7 jefes) y compañero, y empiezas
   un desafío de jefes: por los anillos salen, uno tras otro, legendarios que ya capturaste (o clásicos si tienes pocos)
   y, al final, el propio Hoopa. La horda normal sigue saliendo. Si los vences a todos, ganas la partida y Polvo Estelar
   (300 / 600 / 1000) y, la primera vez del anillo 3, Hoopa entra en tu Liga.
   Gancho: __pbApp.startRun y run.boss.spawn (jefes con kit). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const LEG = [144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382, 383, 384, 480, 481, 482, 483, 484, 485, 486, 487, 488, 491, 638, 639, 640, 641, 642, 643, 644, 645, 646, 716, 717, 718, 785, 786, 787, 788, 789, 791, 792, 800, 888, 889, 890, 894, 895, 896, 897, 898, 905, 1007, 1008, 1024];
  const BASE = [144, 145, 146, 150, 243, 244, 245, 249, 250, 382, 383, 384];
  const ANILLOS = [[3, 300, 'Anillo I'], [5, 600, 'Anillo II'], [7, 1000, 'Anillo III']];
  const HOOPA = 720;
  const meta = () => window.__pbMeta;
  const H = () => window.PB_HISTORIA;
  let pendiente = null;

  const pantalla = () => {
    const h = H(), p = meta()?.profile; if (!h || !p) return;
    const c = h.capa('kalos');
    const b = document.createElement('div'); b.className = 'hb';
    const propios = LEG.filter(x => p.league.includes(x));
    b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🌀 Anillos de Hoopa</h2><p class="sub">Desafío de jefes: por los anillos salen, uno tras otro, legendarios que ya capturaste (${propios.length}) y, al final, Hoopa. La horda no para. Vence a todos para ganar.</p>
<div class="fila">${ANILLOS.map((a, i) => `<button class="hbt an" data-i="${i}">${a[2]}<br><small>${a[0]} jefes · +${a[1]} Polvo${(p.pbHoopa ?? 0) > i ? ' · ✔' : ''}</small></button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('.an').forEach(x => x.onclick = () => companero(+x.dataset.i));
    b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = () => h.abrir();
    c.append(b);
  };

  const companero = n => {
    const h = H(), p = meta().profile, c = h.capa('kalos');
    const b = document.createElement('div'); b.className = 'hb';
    b.innerHTML = `<h2>${ANILLOS[n][2]}: elige a tu Pokémon</h2><div style="max-height:52vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => empezar(n, +x.dataset.sp));
    b.querySelector('.vol').onclick = pantalla;
    c.append(b);
  };

  const empezar = (n, sp) => {
    const p = meta().profile, propios = LEG.filter(x => p.league.includes(x) && x !== sp);
    const pool = [...propios].sort(() => Math.random() - 0.5);
    for (const x of BASE.sort(() => Math.random() - 0.5)) if (pool.length < ANILLOS[n][0] - 1 && !pool.includes(x)) pool.push(x);
    pendiente = { n, jefes: [...pool.slice(0, ANILLOS[n][0] - 1), HOOPA], i: 0, j: -1 };
    H().cerrar();
    const a = window.__pbApp;
    Promise.resolve(a?.startRun?.({ species: sp, biome: 'forest', tier: 1, boosts: [], mode: 'standard' })).then(ok => { if (!ok && !a.run) pendiente = null; });
  };

  const sacar = (run, d) => {
    const sp = d.jefes[d.i], pl = run.player.pos;
    for (let k = 0; k < 12; k++) {
      const a = Math.random() * Math.PI * 2, x = pl.x + Math.cos(a) * 12, z = pl.z + Math.sin(a) * 12;
      if (!run.terrain.inBounds(x, z, 6)) continue;
      try {
        const y = run.terrain.height(x, z);
        run.vfx.ring(x, y + 0.2, z, 4, 0xffc83a, 1.2); run.vfx.ring(x, y + 0.3, z, 2.5, 0xb05ad8, 1);
        run.ui.banner(`🌀 Anillo ${d.i + 1}/${d.jefes.length}`, sp === HOOPA ? '¡Hoopa en persona cruza el anillo!' : 'Un legendario cruza el anillo de Hoopa', '#ffc83a', { species: sp });
      } catch {}
      const f = 1 + d.i * 0.25 + d.n * 0.4;
      d.j = run.boss.spawn(sp, x, z, false, { hp: run.director.hpMult() * 2.6 * f * (sp === HOOPA ? 1.5 : 1), dmg: run.director.dmgMult() * (1 + d.n * 0.2), kit: true });
      if (d.j >= 0) { d.g = run.enemies.gen[d.j]; try { window.PB_SINPORTAL?.(run, d.j); } catch {} } // 1.48: sin portal
      return;
    }
  };

  setInterval(() => {
    const run = window.__pbRun;
    if (pendiente && run && run !== pendiente.run && run.player && run.state === 'play') { pendiente.run = run; run.__pbHoopa = pendiente; pendiente = null; run.__pbHoopa.t = (run.time ?? 0) + 8; }
    const d = run?.__pbHoopa;
    if (!d || run.state !== 'play' || d.fin) return;
    const E = run.enemies;
    if (d.j >= 0) {
      if (E.gen[d.j] === d.g && E.alive[d.j] && !(E.dying?.[d.j] > 0)) return;
      d.j = -1; d.i++; d.t = (run.time ?? 0) + 6;
      if (d.i >= d.jefes.length) {
        d.fin = true;
        const m = meta(), p = m.profile, [, polvo, nom] = ANILLOS[d.n];
        run.stats.pbDust = (run.stats.pbDust ?? 0) + polvo;
        p.pbHoopa = Math.max(p.pbHoopa ?? 0, d.n + 1);
        const nuevo = d.n === 2 && !p.league.includes(HOOPA);
        if (nuevo) { p.league.push(HOOPA); try { p.unlocked.includes(HOOPA) || p.unlocked.push(HOOPA); p.captured[HOOPA] = Date.now(); } catch {} }
        try { m.save(); } catch {}
        try { run.ui.banner(`¡${nom} superado!`, `+${polvo} de Polvo Estelar${nuevo ? ' · ¡Hoopa se une a tu Liga!' : ''}`, '#ffc83a', { species: HOOPA }); } catch {}
        run.later?.(3, () => { try { run.state === 'play' && run.finish(true); } catch {} });
      }
      return;
    }
    if ((run.time ?? 0) >= d.t) sacar(run, d);
  }, 250);

  // Botón en la pantalla del Modo historia.
  setInterval(() => {
    const sl = document.querySelector('.pb-h .hs-slots');
    if (!sl || sl.parentElement.querySelector('.pb-hoopa')) return;
    const f = document.createElement('div'); f.className = 'fila pb-hoopa';
    const bt = document.createElement('button'); bt.className = 'hbt'; bt.textContent = '🌀 Anillos de Hoopa';
    bt.onclick = pantalla;
    f.append(bt); sl.after(f);
  }, 400);
})();
