/* Subversión propia (moportor6, 1.03): segunda fase de los jefes finales, solo en PokéBonk Lite.
   Jefes (flag 4) de la última zona (zona 3 o más), de Sin fin y los ases de líderes y campeones: al bajar al 50 % de PS
   se transforman una vez:
   - si su especie tiene Mega (con todas sus animaciones, de PB_MEGA), MEGAEVOLUCIONAN: cambian al sprite de la Mega,
     recuperan hasta el 70 % de PS y ganan +40 % de daño;
   - si no, se DINAMAXIZAN: el doble de grandes, PS máximos ×1,5 y recuperan hasta el 75 %, y +25 % de daño.
   Además (1.07) PB_KIT: los legendarios de todos los santuarios usan el combate de autor de su escenario.
   Gancho: E.pbSid (el sprite que dibuja el juego vía PB_RETOS.sid) y E.scale/E.sized. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  // 1.07: cualquier legendario (o el as del líder en la historia) usa el combate «de autor» del escenario de su santuario
  // (volcán de Charizard, cueva de Mewtwo, torre de Ho-Oh, bosque de Celebi). Kyogre y Rayquaza siguen con los suyos.
  window.PB_KIT = (arena, sp) => !!arena && sp !== 382 && sp !== 384;
  const final = run => run.endless || (run.stage ?? 1) >= 3 || !!run.__gym;
  const hecho = new WeakMap(), gigantes = new Map(), teras = new Map();
  const base = new Map(), tope = (E, j, bk) => { const b = base.get(bk); if (b > 0 && E.dmg[j] > b * 1.6) E.dmg[j] = b * 1.6; if (base.size > 300) base.clear(); };
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
      if (window.PB_ULTRA?.es(run, j)) continue; // 1.13: los Ultraentes de las ultrafendas no son jefes de líder
      const sant = run.__hist != null && (run.stage ?? 1) >= 4 && run.sanctuary;
      const k = `${j}:${E.gen[j]}`, f = E.hp[j] / E.maxHp[j];
      const sp = E.species[j], mega = window.PB_MEGA?.MEGAS?.[sp];
      // 1.22: daño base al verlo por primera vez; con fases y furia no pasa de ×1,6 (antes podía llegar a ×1,95).
      const bk = `${j}:${E.gen[j]}`;
      if (!base.has(bk)) base.set(bk, E.dmg[j]);
      // 1.08: Teracristalización al 85 % (todos los jefes finales).
      if (f <= 0.85 && !set.has(k + 't') && window.PB_TERA) {
        set.add(k + 't');
        const T = window.PB_TERA, t = T.tipos(sp)[0] ?? 'normal', col = T.COL[t] ?? 0xffffff;
        E.dmg[j] *= 1.2;
        teras.set(j, { g: E.gen[j], col, t, ini: run.time ?? 0, run });
        try { run.ui.banner('¡El jefe se teracristaliza!', `Teratipo ${T.NOM[t] ?? t}: +20 % de daño`, '#' + col.toString(16).padStart(6, '0'), { species: sp }); run.vfx.ring(E.x[j], E.y[j] + 0.2, E.z[j], 6, col, 0.8); } catch {}
      }
      // 1.10: jefes de los líderes (gimnasios, historia y Alto Mando) con fuerza de legendario: PS ×1,6 y un mínimo de
      // 40/50/60 s de combate (tope de daño por segundo, como los guardianes), y las mismas fases que el santuario.
      const lider = !!(run.__gym || run.__pbAlto);
      if (lider && !set.has(k + 'L')) {
        set.add(k + 'L');
        // 1.24: en dificultad Normal (tier 0) aguantan bastante menos: +25 % de PS y 15/18/20 s como mínimo, aunque el
        // juego les diera un tope más largo; en Difícil sigue igual (+60 % y 30/33/35 s).
        const normal = (run.tier | 0) === 0, z = Math.min(2, (run.stage ?? 1) - 1);
        if (!run.sanctuary) { E.maxHp[j] *= normal ? 1.25 : 1.6; E.hp[j] = E.maxHp[j]; }
        const secs = run.sanctuary ? (normal ? 40 : 60) : (normal ? [15, 18, 20] : [30, 33, 35])[z] /* 1.22: antes 40/50/60 */, tasa = E.maxHp[j] / secs;
        if (E.capRate && (normal || !(E.capRate[j] > 0) || E.capRate[j] > tasa)) { E.capRate[j] = tasa; E.capBank[j] = tasa * 3; E.capT[j] = run.time ?? 0; }
      }
      // Santuario del modo historia (1.04) y líderes (1.10): Mega al 66 % (si la tiene) y Dynamax al 33 %, ambas a la vez.
      if (sant || lider) {
        if (mega?.sid && f <= 0.66 && !set.has(k + 'm')) { set.add(k + 'm'); megaevolucionar(run, E, j, mega, 0.8); }
        if (f <= 0.33 && !set.has(k + 'd')) { set.add(k + 'd'); dinamaxizar(run, E, j, 0.6); }
        tope(E, j, bk);
        continue;
      }
      tope(E, j, bk);
      if (set.has(k) || f > 0.5) continue;
      set.add(k);
      if (mega?.sid) megaevolucionar(run, E, j, mega, 0.7); else dinamaxizar(run, E, j, 0.75);
      tope(E, j, bk);
    }
  }, 150);
  // 1.10: corona y cuerpo de cristal de los jefes teracristalizados (tera.js), cada fotograma.
  window.PB_TINTE = (j, E, run) => { const d = teras.get(j); return d && d.g === E.gen[j] && window.PB_TERA ? window.PB_TERA.tinte(d.t, run?.time ?? 0, (run?.time ?? 0) - d.ini < 0.4 ? 0.5 : 0) : null; };
  const coronas = () => {
    requestAnimationFrame(coronas);
    const T = window.PB_TERA;
    for (const [j, d] of teras) {
      const run = d.run, E = run.enemies, clave = 'jefe' + j;
      if (run !== window.__pbRun || E.gen[j] !== d.g || !E.alive[j] || E.dying?.[j] > 0) {
        T?.quitarCorona(clave);
        if (run === window.__pbRun && E.gen[j] === d.g) T?.estallar?.(run, E.x[j], E.y[j], E.z[j], d.t);
        teras.delete(j); continue;
      }
      T?.ponerCorona(clave, { x: E.x[j], y: E.y[j] + (E.hgt?.[j] ?? 2.5) * 0.95, z: E.z[j], tipo: d.t, esc: Math.max(1, E.scale?.[j] ?? 1) * 1.3, chica: false });
    }
  };
  requestAnimationFrame(coronas);
})();
