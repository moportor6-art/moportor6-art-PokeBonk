/* Subversión propia (moportor6, 1.03): segunda fase de los jefes finales, solo en PokéBonk Lite.
   Jefes (flag 4) de la última zona (zona 3 o más), de Sin fin y los ases de líderes y campeones: al bajar al 50 % de PS
   se transforman una vez:
   - si su especie tiene Mega (con todas sus animaciones, de PB_MEGA), MEGAEVOLUCIONAN: cambian al sprite de la Mega,
     recuperan hasta el 70 % de PS y ganan +40 % de daño;
   - si no, se DINAMAXIZAN: el doble de grandes, PS máximos ×1,5 y recuperan hasta el 75 %, y +25 % de daño.
   Gancho: E.pbSid (el sprite que dibuja el juego vía PB_RETOS.sid) y E.scale/E.sized. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const final = run => run.endless || (run.stage ?? 1) >= 3 || !!run.__gym;
  const hecho = new WeakMap();
  setInterval(() => {
    const run = window.__pbRun, E = run?.enemies;
    if (!E || run.state !== 'play' || run.duel || run.mode === 'duel') return;
    let set = hecho.get(run);
    if (!set) hecho.set(run, set = new Set());
    if (!final(run)) return;
    for (let j = 0; j < E.n; j++) {
      if (!E.alive[j] || E.dying?.[j] > 0 || !(E.flags[j] & 4) || (E.flags[j] & 65536)) continue;
      const k = `${j}:${E.gen[j]}`;
      if (set.has(k) || E.hp[j] > E.maxHp[j] * 0.5) continue;
      set.add(k);
      const sp = E.species[j], mega = window.PB_MEGA?.MEGAS?.[sp];
      const x = E.x[j], y = E.y[j], z = E.z[j];
      if (mega?.sid) {
        E.pbSid ??= new Int32Array(2400);
        try { run.sprites.get(mega.sid); } catch {}
        E.pbSid[j] = mega.sid;
        E.hp[j] = Math.max(E.hp[j], E.maxHp[j] * 0.7);
        E.dmg[j] *= 1.4;
        if (E.sized) E.sized[j] = 0;
        try { run.ui.banner(`¡${mega.name}!`, 'El jefe megaevoluciona: recupera PS y pega más fuerte', '#ff7ad8', { species: sp }); } catch {}
        try { run.vfx.ring(x, y + 0.2, z, 6, 0xff7ad8, 0.8); run.vfx.burst(x, y + 2, z, 0xff7ad8, 30, 8, 0, 0.6, 0.8); } catch {}
      } else {
        if (E.scale) E.scale[j] *= 2;
        if (E.sized) E.sized[j] = 0;
        E.maxHp[j] *= 1.5;
        E.hp[j] = Math.max(E.hp[j], E.maxHp[j] * 0.75);
        E.dmg[j] *= 1.25;
        try { run.ui.banner('¡Se dinamaxiza!', 'El jefe crece, recupera PS y pega más fuerte', '#ff3a5a', { species: sp }); } catch {}
        try { run.vfx.ring(x, y + 0.2, z, 7, 0xff3a5a, 0.8); run.vfx.burst(x, y + 2, z, 0xff3a5a, 30, 8, 0, 0.7, 0.8); } catch {}
      }
    }
  }, 150);
})();
