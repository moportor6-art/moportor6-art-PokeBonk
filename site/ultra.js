/* Subversión propia (moportor6, 1.08): Ultrafendas y Ultraentes, solo en PokéBonk Lite (idea de Pokémon Survivors).
   - En partidas normales y de la historia, desde el minuto 4 de cada zona hay un 35 % de que se abra UNA ultrafenda
     cerca de ti (aviso y portal). De ella sale un Ultraente como jefe (1.13: PS y daño de un guardián de la zona, PS ×1,2).
   - Si lo vences, lo capturas con una Ente Ball: entra en tu Liga (si no lo tenías) y ganas Polvo Estelar.
   - Ultraimpulso: si juegas con un Ultraente, cada 50 bajas sube un 1 % tu daño en esa partida (máx. +30 %).
   Gancho: run.enemies.spawn (flag 4) y player.recompute. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const UE = [793, 794, 795, 796, 797, 798, 799, 803, 804, 805, 806];
  const NOM = { 793: 'Nihilego', 794: 'Buzzwole', 795: 'Pheromosa', 796: 'Xurkitree', 797: 'Celesteela', 798: 'Kartana', 799: 'Guzzlord', 803: 'Poipole', 804: 'Naganadel', 805: 'Stakataka', 806: 'Blacephalon' };
  // 1.13: para que fases.js no los trate como jefes de líder (en los gimnasios se reforzaban y se dinamaxizaban).
  window.PB_ULTRA = { es: (run, j) => { const s = run?.__pbFenda; return s?.j === j && run.enemies.gen[j] === s.g; } };
  // 1.48: cualquier enemigo con la marca de jefe que cae llama a onBossKilled y abre el portal de la zona. Los
  // Ultraentes (y los jefes de la Torre, los Anillos de Hoopa y la Liga, que se apuntan en run.__pbSinPortal) no son el
  // guardián: al caer ya no abren el portal ni cuentan como zona superada.
  const sinPortal = (run, j) => window.PB_ULTRA.es(run, j) || run.__pbSinPortal?.has(`${j}:${run.enemies.gen[j]}`);
  window.PB_SINPORTAL = (run, j) => { (run.__pbSinPortal ??= new Set()).add(`${j}:${run.enemies.gen[j]}`); };
  setInterval(() => {
    const run = window.__pbRun;
    if (!run?.onBossKilled || run.__pbOBK) return;
    run.__pbOBK = true;
    const obk = run.onBossKilled.bind(run);
    run.onBossKilled = (j, ...a) => {
      try {
        if (sinPortal(run, j)) {
          if (j === run.boss?.bossIndex) { try { run.boss.kit && (run.boss.kit.dead = true); run.boss.release?.(); } catch {} }
          return;
        }
      } catch {}
      return obk(j, ...a);
    };
  }, 300);
  const activa = run => run && run.mode === 'standard' && !run.tower && !run.endless && !run.expedition && !run.duel && !run.coop;
  const meta = () => window.__pbMeta;
  let vale = null;
  fetch('./data/sprites.json').then(r => r.json()).then(d => { vale = new Set(Object.keys(d).map(Number)); }).catch(() => {});

  const capturar = (run, sp) => {
    const m = meta(), p = m?.profile;
    if (!p) return;
    const nuevo = !p.league.includes(sp);
    if (nuevo) { p.league.push(sp); try { const f = m.family?.(sp) ?? sp; p.unlocked.includes(f) || p.unlocked.push(f); p.captured[f] = Date.now(); } catch {} }
    run.stats.pbDust = (run.stats.pbDust ?? 0) + 150;
    try { m.save(); } catch {}
    try { run.ui.banner(`¡${NOM[sp]} capturado con Ente Ball!`, nuevo ? 'Ya está en tu Liga. +150 de Polvo Estelar' : 'Ya lo tenías: +150 de Polvo Estelar', '#c86aff', { species: sp }); } catch {}
  };

  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p) return;
    // Ultraimpulso.
    if (UE.includes(p.speciesId) && !p.__pbUltra && typeof p.recompute === 'function') {
      const rc = p.recompute;
      p.recompute = function (...a) { const r = rc.apply(this, a); try { this.stats.damage *= 1 + Math.min(0.3, Math.floor((run.stats?.kills ?? 0) / 50) * 0.01); } catch {} return r; };
      p.__pbUltra = true;
    }
    if (p.__pbUltra) { const k = Math.floor((run.stats?.kills ?? 0) / 50); if (k !== run.__pbUltraK) { run.__pbUltraK = k; try { p.recompute(); } catch {} } }
    if (!activa(run) || run.state !== 'play') return;
    const s = run.__pbFenda ??= {};
    const E = run.enemies;
    // Jefe vivo: ¿murió? → captura.
    if (s.j != null) {
      const fuera = E.gen[s.j] !== s.g || !E.alive[s.j];
      if (fuera || E.dying?.[s.j] > 0 || !(E.hp[s.j] > 0)) {
        if (!fuera || s.f < 0.25) capturar(run, s.sp); // si desaparece casi sin vida también cuenta
        s.j = null;
      } else s.f = E.hp[s.j] / E.maxHp[s.j];
      return;
    }
    if (s.zona === (run.stage ?? 1) || (run.stageTime ?? 0) < 240) return;
    s.zona = run.stage ?? 1;
    if (Math.random() > 0.35) return;
    const lista = UE.filter(x => !vale || vale.has(x));
    const sp = lista[Math.floor(Math.random() * lista.length)];
    const a = Math.random() * Math.PI * 2, x = p.pos.x + Math.cos(a) * 14, z = p.pos.z + Math.sin(a) * 14;
    if (!run.terrain.inBounds(x, z, 6)) { s.zona = -1; return; }
    try {
      const y = run.terrain.height(x, z);
      run.vfx.ring(x, y + 0.2, z, 5, 0xc86aff, 1.2); run.vfx.ring(x, y + 0.2, z, 3, 0xffffff, 1);
      run.vfx.burst(x, y + 2, z, 0xc86aff, 40, 8, 0, 0.8, 1);
      run.ui.banner('¡Se abre una ultrafenda!', `¡Un Ultraente aparece: ${NOM[sp]}! Véncelo para capturarlo`, '#c86aff', { species: sp });
    } catch {}
    run.later?.(1.2, () => {
      try {
        // 1.13: PS y daño fijos, como un guardián de la zona (×1,2). Antes la vida salía con un multiplicador de más
        // (más de un millón de PS): era imposible de vencer y te perseguía toda la partida.
        const k = Math.max(0, Math.min(3, run.stage ?? 1) - 1), extra = (run.stage ?? 1) > 3 ? 1.5 : 1;
        const j = E.spawn(sp, x, z, 1, 1, 4 | 1);
        if (j >= 0) {
          const dif = (run.diff?.enemyHp ?? 1) * (run.player?.stats?.difficulty ?? 1);
          E.maxHp[j] = E.hp[j] = [4500, 18000, 37000][k] * 1.2 * extra * dif;
          E.dmg[j] = [30, 63, 102][k] * extra * (run.diff?.enemyDamage ?? 1);
          s.j = j; s.g = E.gen[j]; s.sp = sp;
          // 1.48: al menos 15 s de combate (25 s en Difícil), como tope de daño por segundo: antes caía en 1-2 s.
          const secs = (run.tier | 0) ? 25 : 15, tasa = E.maxHp[j] / secs;
          if (E.capRate) { E.capRate[j] = tasa; E.capBank[j] = tasa * 3; E.capT[j] = run.time ?? 0; }
        }
      } catch {}
    });
  }, 250);
})();
