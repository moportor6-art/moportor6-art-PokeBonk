/* Subversión propia (moportor6, 1.27): automatismos, solo en PokéBonk Lite.
   Opciones en Pausa → «HUD y guía» (se guardan en profile.pbAuto):
   - Mega / Dynamax / Tera automáticos al aparecer un jefe (por defecto Sí).
   - Evoluciones de reto automáticas (Blissey, Crobat…, al llegar a su nivel, sin preguntar; por defecto No).
   - Incienso inteligente: con el Incienso lleno (3), abre una grieta sola si no hay jefe (por defecto Sí).
   - Modo rendimiento: Auto (menos partículas con más de 200 enemigos) / Siempre / No.
   Siempre activos:
   - Curación de emergencia: con menos del 30 % de PS te comes la baya libre más cercana (hasta 15 m).
   - (Repetir partida ya lo trae el juego: botón «Otra vez» de los resultados.)
   - Laboratorio automático (caja en el Laboratorio): al terminar cada partida gasta el Polvo en tus 3 prioridades.
   - Avisos en el menú: punto rojo en «Modo historia» (Desafío diario sin hacer) y en «Laboratorio» (mejora
     asequible o huevo a punto).
   Ganchos: PB_MEGA (megaevolve/dynamax), PB_TERA.activar, run.rifts.use/useBlock, run.tryJohtoGrow,
   run.ui.showBranch, run.interactables.interact, meta.buyLab (con PB_LAB.tmp para la especie) y run.vfx. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const meta = () => window.__pbMeta;
  const A = () => { const p = meta()?.profile; if (!p) return null; const a = p.pbAuto ??= {}; a.mx ??= true; a.evo ??= false; a.inc ??= true; a.rend ??= 'auto'; a.lab ??= { on: false, orden: [] }; return a; };
  const guardar = () => { try { meta().save(); } catch {} };
  const jefe = run => { const E = run.enemies, p = run.player.pos; for (let j = 0; j < (E.alive?.length ?? 0); j++) if (E.alive[j] && E.flags[j] & 4 && !(E.dying?.[j] > 0) && !window.PB_ULTRA?.es?.(run, j) && Math.hypot(E.x[j] - p.x, E.z[j] - p.z) < 40) return true; return false; };
  const listo = b => b && b.isConnected && !b.disabled && b.classList.contains('ready') && getComputedStyle(b).visibility !== 'hidden';

  // ---------- en la partida ----------
  setInterval(() => {
    const run = window.__pbRun, p = run?.player, a = A();
    if (!run || !p || !a || run.state !== 'play' || p.dead || run.mode === 'duel') return;
    const hayJefe = jefe(run);
    // Mega / Dynamax / Tera con el jefe.
    if (a.mx && hayJefe) {
      const M = window.PB_MEGA;
      try { if (listo(M?.bMega)) M.megaevolve(); else if (listo(M?.bDmax)) M.dynamax(); } catch {}
      try { if (window.PB_TERA?.puede?.()) window.PB_TERA.activar(); } catch {}
    }
    // Incienso lleno y sin jefe: abre una grieta.
    if (a.inc && !hayJefe && run.incense >= 3 && run.rifts?.incenseOn) try { if (run.rifts.useBlock() === null) run.rifts.use(); } catch {}
    // Curación de emergencia.
    if (p.hp < p.maxHp * 0.3) try {
      let mejor = null, d = 15;
      for (const o of run.interactables?.list ?? []) { if (o.kind !== 'berry' || o.used || (o.cost ?? 0) > 0) continue; const x = Math.hypot(o.x - p.pos.x, o.z - p.pos.z); if (x < d) { d = x; mejor = o; } }
      if (mejor) { run.interactables.interact(mejor); run.vfx?.ring?.(p.pos.x, p.pos.y + 0.2, p.pos.z, 2.5, 0x7af07a, 0.5); }
    } catch {}
    // Evoluciones de reto sin preguntar.
    if (!run.__pbAutoEvo && typeof run.tryJohtoGrow === 'function') {
      const tg = run.tryJohtoGrow;
      run.tryJohtoGrow = function (...x) {
        if (!A()?.evo) return tg.apply(this, x);
        const ui = this.ui, sb = ui.showBranch;
        ui.showBranch = (r, forms, cb) => { ui.showBranch = sb; cb(forms[0]); };
        try { return tg.apply(this, x); } finally { if (ui.showBranch !== sb) ui.showBranch = sb; }
      };
      run.__pbAutoEvo = true;
    }
    // Modo rendimiento.
    const v = run.vfx;
    if (v && !v.__pbRend) {
      const n = () => { const m = A()?.rend; if (m === 'no') return false; if (m === 'siempre') return true; let c = 0; const al = run.enemies?.alive; if (al) for (let j = 0; j < al.length; j++) if (al[j] && ++c > 200) return true; return false; };
      let cache = false, t = 0;
      const ahora = () => { const x = performance.now(); if (x - t > 500) { t = x; cache = n(); } return cache; };
      const bu = v.burst?.bind(v);
      if (bu) v.burst = (x, y, z, col, cnt, ...r) => bu(x, y, z, col, ahora() ? Math.max(1, Math.ceil(cnt * 0.4)) : cnt, ...r);
      const g = v.ground, gs = g?.spawn?.bind(g);
      if (gs) g.spawn = o => (ahora() && Math.random() < 0.5 ? undefined : gs(o));
      v.__pbRend = true;
    }
  }, 300);

  // ---------- resultados: laboratorio automático ----------
  let visto = null;
  setInterval(() => {
    const run = window.__pbRun, a = A();
    if (!run || !a || run.state !== 'over' || visto === run) return;
    const m = run.ui?.modalEl;
    if (!m?.isConnected) return;
    visto = run;
    // Laboratorio automático.
    if (a.lab.on && a.lab.orden.length) setTimeout(() => {
      const M = meta(), L = window.PB_LAB, sp = run.startSpecies; if (!M || !L) return;
      const antes = M.profile.stardust ?? 0, comprado = [];
      L.tmp = sp;
      try {
        for (let vuelta = 0; vuelta < 60; vuelta++) {
          let algo = false;
          for (const id of a.lab.orden) if (M.buyLab(id)) { algo = true; comprado.push(id); }
          if (!algo) break;
        }
      } catch {}
      L.tmp = null;
      if (comprado.length) {
        const nom = id => L.defs.find(d => d.id === id)?.name ?? id, c = {};
        for (const id of comprado) c[id] = (c[id] ?? 0) + 1;
        try { window.__pbApp?.notice?.(`🤖 Laboratorio automático: ${Object.entries(c).map(([k, n]) => `${nom(k)} +${n}`).join(', ')} (−${antes - (M.profile.stardust ?? 0)} de Polvo)`); } catch {}
      }
    }, 2500);
  }, 400);

  // ---------- opciones en Pausa → «HUD y guía» ----------
  const OPC = [
    ['mx', 'Mega/Dynamax/Tera automáticos', ['Sí', 'No'], [true, false]],
    ['evo', 'Evoluciones de reto automáticas', ['No', 'Sí'], [false, true]],
    ['inc', 'Incienso inteligente', ['Sí', 'No'], [true, false]],
    ['rend', 'Modo rendimiento', ['Auto', 'Siempre', 'No'], ['auto', 'siempre', 'no']]
  ];
  setInterval(() => {
    const row = document.querySelector('.pb-he-menu .row'), a = A();
    if (!row || !a || row.querySelector('.pb-auto')) return;
    for (const [k, nom, et, val] of OPC) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'pb-auto';
      const pinta = () => { b.textContent = `⚙️ ${nom}: ${et[Math.max(0, val.indexOf(a[k]))]}`; };
      pinta();
      b.onclick = e => { e.stopPropagation(); a[k] = val[(val.indexOf(a[k]) + 1) % val.length]; guardar(); pinta(); };
      row.append(b);
    }
  }, 300);

  // ---------- caja del Laboratorio automático ----------
  setInterval(() => {
    const lab = document.querySelector('.screen.lab'), a = A(), L = window.PB_LAB;
    if (!lab || !a || !L?.defs) return;
    const k = JSON.stringify(a.lab);
    let caja = lab.querySelector('.pb-lab-auto');
    if (caja?.dataset.k === k) return;
    if (!caja) {
      const ref = lab.querySelector('.pb-lab-huevos') ?? lab.querySelector('.pb-lab-tera') ?? lab.querySelector('.pb-lab-oro') ?? lab.querySelector('.scr-head');
      if (!ref) return;
      caja = document.createElement('div'); caja.className = 'pb-lab-oro pb-lab-auto'; caja.style.cssText = 'background:#1a2a3a;color:#d8ecff;flex-wrap:wrap;gap:6px';
      ref.after(caja);
    }
    caja.dataset.k = k;
    caja.replaceChildren();
    const s = document.createElement('span');
    s.innerHTML = `🤖 Laboratorio automático <small>· al terminar cada partida gasta el Polvo en estas mejoras del Pokémon que jugaste, por turnos</small>`;
    const on = document.createElement('button'); on.className = 'btn small'; on.textContent = a.lab.on ? 'Activado' : 'Desactivado';
    on.onclick = () => { a.lab.on = !a.lab.on; guardar(); };
    caja.append(s, on);
    const ops = L.defs.filter(d => d.stat || d.id.startsWith('pb-')).map(d => `<option value="${d.id}">${d.name}</option>`).join('');
    for (let i = 0; i < 3; i++) {
      const sel = document.createElement('select'); sel.style.cssText = 'font:700 12px system-ui;border-radius:8px;padding:2px 4px';
      sel.innerHTML = `<option value="">${i + 1}.ª: —</option>` + ops; sel.value = a.lab.orden[i] ?? '';
      sel.onchange = () => { const o = a.lab.orden.slice(0, 3); o[i] = sel.value; a.lab.orden = o.filter(Boolean); guardar(); };
      caja.append(sel);
    }
  }, 600);

  // ---------- avisos en el menú ----------
  const css = document.createElement('style');
  css.textContent = '.pb-punto{position:relative}.pb-punto::after{content:"";position:absolute;top:4px;right:6px;width:11px;height:11px;border-radius:50%;background:#ff3a3a;border:2px solid #fff;box-shadow:0 0 6px #ff3a3a;pointer-events:none}';
  document.head.append(css);
  setInterval(() => {
    const M = meta(), p = M?.profile; if (!p) return;
    const d = new Date(), hoy = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    document.querySelector('.mm-item.pb-hist')?.classList.toggle('pb-punto', !(p.pbDiario?.dia === hoy && p.pbDiario.hecho));
    const labBtn = [...document.querySelectorAll('.mm-item.tile')].find(e => /Laboratorio/.test(e.textContent));
    if (!labBtn) return;
    let ok = false;
    try {
      const L = window.PB_LAB, sp = L?.sel?.(M) ?? p.lastSpecies, dust = p.stardust ?? 0;
      L.tmp = sp;
      for (const x of L?.defs ?? []) { const lv = M.lab(x.id) ?? 0; if (lv < x.max && x.cost(lv) <= dust) { ok = true; break; } }
      L.tmp = null;
      ok ||= (p.pbHuevos?.h ?? []).some(h => h.k >= h.need * 0.9);
    } catch { if (window.PB_LAB) window.PB_LAB.tmp = null; }
    labBtn.classList.toggle('pb-punto', ok);
  }, 1500);
})();
