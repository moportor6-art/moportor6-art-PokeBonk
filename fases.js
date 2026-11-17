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
  const hecho = new WeakMap(), gigantes = new Map();
  const megaevolucionar = (run, E, j, mega, vida) => {
    const x = E.x[j], y = E.y[j], z = E.z[j];
    E.pbSid ??= new Int32Array(2400);
    try { run.sprites.get(mega.sid); } catch {}
    E.pbSid[j] = mega.sid;
    E.hp[j] = Math.max(E.hp[j], E.maxHp[j] * vida);
    E.dmg[j] *= 1.4;
    if (E.sized) E.sized[j] = 0;
    try { run.ui.banner(`¡${mega.name}!`, 'El jefe megaevoluciona: recupera PS y pega más fuerte', '#ff7ad8', { species: E.species[j] }); } catch {}
    try { run.vfx.ring(x, y + 0.2, z, 6, 0xff7ad8, 0.8); run.vfx.burst(x, y + 2, z, 0xff7ad8, 30, 8, 0, 0.6, 0.8); } catch {}
  };
  const dinamaxizar = (run, E, j, vida) => {
    const x = E.x[j], y = E.y[j], z = E.z[j];
    if (E.scale) { E.scale[j] *= 2; gigantes.set(j, { g: E.gen[j], s: E.scale[j] }); }
    if (E.sized) E.sized[j] = 0;
    E.maxHp[j] *= 1.5;
    E.hp[j] = Math.max(E.hp[j], E.maxHp[j] * vida);
    E.dmg[j] *= 1.25;
    try { run.ui.banner('¡Se dinamaxiza!', 'El jefe crece, recupera PS y pega más fuerte', '#ff3a5a', { species: E.species[j] }); } catch {}
    try { run.vfx.ring(x, y + 0.2, z, 7, 0xff3a5a, 0.8); run.vfx.burst(x, y + 2, z, 0xff3a5a, 30, 8, 0, 0.7, 0.8); } catch {}
  };
  setInterval(() => {
    const run = window.__pbRun, E = run?.enemies;
    if (!E || run.state !== 'play' || run.duel || run.mode === 'duel') return;
    let set = hecho.get(run);
    if (!set) hecho.set(run, set = new Set());
    // Que el Dynamax no se pierda si el kit del jefe reajusta su tamaño.
    for (const [j, d] of gigantes) { if (E.gen[j] !== d.g || !E.alive[j]) gigantes.delete(j); else if (E.scale && E.scale[j] < d.s) E.scale[j] = d.s; }
    if (!final(run)) return;
    for (let j = 0; j < E.n; j++) {
      if (!E.alive[j] || E.dying?.[j] > 0 || !(E.flags[j] & 4) || (E.flags[j] & 65536)) continue;
      const sant = run.__hist != null && (run.stage ?? 1) >= 4 && run.sanctuary;
      const k = `${j}:${E.gen[j]}`, f = E.hp[j] / E.maxHp[j];
      const sp = E.species[j], mega = window.PB_MEGA?.MEGAS?.[sp];
      // Santuario del modo historia (1.04): Mega al 66 % (si la tiene) y Dynamax al 33 %, ambas a la vez.
      if (sant) {
        if (mega?.sid && f <= 0.66 && !set.has(k + 'm')) { set.add(k + 'm'); megaevolucionar(run, E, j, mega, 0.8); }
        if (f <= 0.33 && !set.has(k + 'd')) { set.add(k + 'd'); dinamaxizar(run, E, j, 0.6); }
        continue;
      }
      if (set.has(k) || f > 0.5) continue;
      set.add(k);
      if (mega?.sid) megaevolucionar(run, E, j, mega, 0.7); else dinamaxizar(run, E, j, 0.75);
    }
  }, 150);
})();
