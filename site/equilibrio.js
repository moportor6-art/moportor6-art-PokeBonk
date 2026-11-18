/* Subversión propia (moportor6, 0.97): equilibrio de la Lite.
   - Tope de nivel por medallas: 30 + 6 por medalla de gimnasio (máx. 100). Al llegar, la EXP extra se convierte en
     Polvo Estelar (va a stats.pbDust, que se suma al acabar).
   - Escalado según tu nivel: si vas por encima del nivel esperado para el tiempo de partida (3 + 2,5 por minuto), los
     salvajes que aparecen ganan +2 % de PS y daño por nivel de más (máx. +60 %).
   - Tope por objeto: máximo 5 copias de cada objeto por partida (o el máximo propio del objeto si es menor).
   - Élites con rasgo: Veloz (+40 % velocidad), Vampírico (se cura 3× el daño que te hace), Explosivo (al morir deja una
     zona que estalla) o Blindado (los 4 primeros golpes no le hacen daño).
   - Duración mínima (1.17): Dominantes e Invocadores 10 s, Alfas 6 s (+25 % por zona).
   - Furia: jefes, guardianes y líderes que siguen vivos a los 2 minutos se enfurecen (+30 % daño y velocidad).
   Solo partidas normales / historia (no duelos, torre, sin fin ni expedición). En Sin fin (0.99): sin tope de nivel y
   vitaminas sin tope (salvo las de proyectiles y los objetos únicos). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  // 0.99: modo Sin fin sin tope en las vitaminas (objetos apilables, máx. 3 o más): se pueden seguir apilando.
  // Los que tocan proyectiles (cantidad, rebotes, velocidad) mantienen su tope; los únicos (máx. 1-2) también.
  const PROY = new Set(['projectiles', 'bounces', 'projSpeed']);
  // 1.12: quién te derrotó (cartel al caer y aviso en la pantalla de resultados).
  const TIPO = { normal: 'Normal', fire: 'Fuego', water: 'Agua', grass: 'Planta', electric: 'Eléctrico', ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada' };
  const muerte = (run, src, dano, tipo) => {
    const E = run.enemies, nom = sp => window.PB_HISTORIA?.nombrePk?.(sp) ?? `#${sp}`;
    let quien = 'el escenario (peligro o efecto del mapa)';
    if (src >= 0 && E.species?.[src]) {
      const f = E.flags[src], extra = [];
      if (f & 4) extra.push('jefe');
      if (E.pbSid?.[src]) extra.push('Mega');
      if ((E.scale?.[src] ?? 1) >= 2) extra.push('Dynamax');
      if (S(run).furia.get(src)?.ok) extra.push('enfurecido');
      quien = nom(E.species[src]) + (extra.length ? ` (${extra.join(' · ')})` : '');
    }
    const txt = `Te derrotó ${quien}: último golpe de ${dano} de daño${TIPO[tipo] ? ` de tipo ${TIPO[tipo]}` : ''}.`;
    run.__pbMuerte = txt;
    try { run.ui.banner('Debilitado', txt, '#ff4a3a'); } catch {}
    // 1.15: el aviso va dentro de la ventana de resultados (se queda hasta que la cierres).
    let n = 0;
    const t = setInterval(() => {
      if (++n > 60 || window.__pbRun !== run && n > 4) { clearInterval(t); return; }
      const m = run.ui?.modalEl;
      if (run.state !== 'over' || !m?.isConnected || m.querySelector('.pb-muerte')) return;
      const d = document.createElement('div'); d.className = 'pb-muerte';
      d.style.cssText = 'margin:0 auto 6px;max-width:92%;background:rgba(60,10,10,.92);color:#fff;border:2px solid #ff6a5a;border-radius:10px;padding:5px 12px;font:800 13px system-ui,sans-serif;text-align:center';
      d.textContent = '💀 ' + txt;
      (m.querySelector('.panel') ?? m).prepend(d); clearInterval(t);
    }, 250);
  };
  // 1.15: al caer, la ventana de resultados ignora los toques durante 1,5 s. En el móvil, los toques que seguías dando
  // (ataque, salto…) caían sobre «Menú» y la cerraban al instante; en la historia te mandaban directo al líder.
  let abierta = null, t0 = 0;
  new MutationObserver(() => {
    const run = window.__pbRun, m = run?.ui?.modalEl;
    if (m && m !== abierta && m.isConnected && (run.state === 'over' || run.state === 'dead')) { abierta = m; t0 = performance.now(); }
  }).observe(document.documentElement, { childList: true, subtree: true }); // (el script carga antes de <body>)
  for (const ev of ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click'])
    addEventListener(ev, e => {
      if (abierta?.isConnected && performance.now() - t0 < (window.__pbLockMs ?? 1500) && abierta.contains(e.target)) { e.stopPropagation(); e.preventDefault(); }
    }, true);
  // 1.17: Dominantes (tótem), Invocadores y Alfas duran un mínimo aunque tu daño sea enorme: 10 s los dos primeros y
  // 6 s los Alfas (+25 % por zona). Usa el mismo tope de daño por segundo que el juego da a los guardianes (capRate).
  const minis = new WeakMap();
  setInterval(() => {
    const run = window.__pbRun, E = run?.enemies;
    if (!run || !E?.capRate || !activa(run) || run.state !== 'play') return;
    const vistos = minis.get(run) ?? minis.set(run, new Map()).get(run), z = 1 + 0.25 * Math.max(0, Math.min(3, run.stage ?? 1) - 1);
    for (let j = 0; j < E.alive.length; j++) {
      const f = E.flags[j];
      if (!E.alive[j] || (f & 4) || !(f & (4096 | 8192 | 2)) || vistos.get(j) === E.gen[j]) continue;
      vistos.set(j, E.gen[j]);
      const secs = (f & (4096 | 8192) ? 10 : 6) * z, tope = E.maxHp[j] / secs;
      if (!(E.capRate[j] > 0) || E.capRate[j] > tope) E.capRate[j] = tope;
    }
  }, 250);
  window.PB_ITEM_MAX = (id, def) => {
    const run = window.__pbRun;
    if (!run?.endless || !def || (def.max ?? 10) < 3) return undefined;
    if ((def.mods ?? []).some(m => PROY.has(m.stat))) return undefined;
    return 999;
  };
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
        // 1.12: aguante. Ningún golpe suelto te quita más del 45 % de tus PS máximos (el juego ya trae ese tope como
        // 7.º argumento de hurt; aquí se pone a todos), y si caes, se dice quién y con cuánto.
        a[3] = a[3] > 0 ? Math.min(a[3], 0.45) : 0.45;
        const antes = this.hp, vivia = !this.dead;
        const r = h.call(this, dmg, tipo, src, ...a);
        try { if (vivia && (this.dead || this.hp <= 0)) muerte(run, src, Math.round(antes - Math.max(0, this.hp)), tipo); } catch {}
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
