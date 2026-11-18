/* Subversión propia (moportor6, 1.28): Bolsa de bayas, solo en PokéBonk Lite.
   Una barra de huecos (como la barra rápida de Minecraft) con las bayas que llevas en la partida: un hueco por tipo,
   hasta 30 de cada una, con su cantidad. Se usan solas en su momento y también tocando el hueco. Se mueve y cambia de
   tamaño en «Editar HUD».
   - De dónde salen: cada arbusto de bayas del mapa (se sigue usando como siempre, y además deja 1-2 bayas en la
     bolsa) y los Alfas y élites al caer (25 %).
   - Guardadas curan menos que las del arbusto (≈70 %).
     Aranja: cura 8 % (sola por debajo del 50 %)      · Zidra: cura 18 % (por debajo del 30 %)
     Ziuela: quita los estados (al recibir uno)       · Enigma: cura 12 % tras un golpe fuerte (más del 15 % de tu vida)
     Lichi: +30 % de daño 12 s  · Gonlan: +20 armadura 12 s · Aslac: +30 % de velocidad 12 s · Zonlan: +20 % de crítico 12 s
       (las cuatro, solas por debajo del 25 %)
     Mepo: +40 % de velocidad de ataque 10 s (sola con un jefe cerca) · Arabol (rara): dos efectos de apuro a la vez
   1.32: Zumo de Baya (cura 12 %, por debajo del 40 %), Hiperpoción (30 %, por debajo del 25 %) y Restaurar Todo (50 % y
     quita estados, por debajo del 15 %): salen de arbustos propios del mapa (2-4 por zona) y van a la bolsa.
   Iconos: assets/items (los que faltan, de PokeAPI/sprites con la acción «Bayas»; si no está, se dibuja un círculo).
   Ganchos: run.interactables.interact, player.recompute / hurt / heal / pstat (estados). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const MAX = 30, CD = 8;
  const B = {
    oran: { n: 'Aranja', icon: 'oran-berry', col: '#4a8aff', w: 30, auto: (r, p) => p.hp < p.maxHp * 0.5, usa: (r, p) => p.heal(p.maxHp * 0.08) },
    sitrus: { n: 'Zidra', icon: 'sitrus-berry', col: '#ffd84a', w: 18, auto: (r, p) => p.hp < p.maxHp * 0.3, usa: (r, p) => p.heal(p.maxHp * 0.18) },
    lum: { n: 'Ziuela', icon: 'lum-berry', col: '#7af07a', w: 10, auto: (r, p) => Object.values(p.pstat ?? {}).some(v => v > 0), usa: (r, p) => { for (const k in p.pstat ?? {}) p.pstat[k] = 0; } },
    enigma: { n: 'Enigma', icon: 'pb-enigma-berry', col: '#b05ad8', w: 6, auto: r => (r.__pbBolsaGolpe ?? -9) > (r.time ?? 0) - 1, usa: (r, p) => p.heal(p.maxHp * 0.12) },
    liechi: { n: 'Lichi', icon: 'liechi-berry', col: '#ff5a5a', w: 7, apuro: 'dano' },
    ganlon: { n: 'Gonlan', icon: 'ganlon-berry', col: '#8a6aff', w: 7, apuro: 'armadura' },
    salac: { n: 'Aslac', icon: 'salac-berry', col: '#5ad86a', w: 7, apuro: 'velocidad' },
    lansat: { n: 'Zonlan', icon: 'lansat-berry', col: '#ff8a3a', w: 7, apuro: 'critico' },
    leppa: { n: 'Mepo', icon: 'leppa-berry', col: '#ff9a5a', w: 6, auto: r => jefe(r), buff: 'ataque' },
    starf: { n: 'Arabol', icon: 'starf-berry', col: '#e8e8ff', w: 2, apuro: 'doble' },
    // 1.32: consumibles propios (no existen como objeto en el juego, así que no tocan tus vitaminas ni objetos).
    'pb-zumo': { n: 'Zumo de Baya', icon: 'berry-juice', col: '#ff8ab8', w: 0, auto: (r, p) => p.hp < p.maxHp * 0.4, usa: (r, p) => p.heal(p.maxHp * 0.12) },
    'pb-hiper': { n: 'Hiperpoción', icon: 'pb-hyper-potion', col: '#c86aff', w: 0, auto: (r, p) => p.hp < p.maxHp * 0.25, usa: (r, p) => p.heal(p.maxHp * 0.3) },
    'pb-restaurar': { n: 'Restaurar Todo', icon: 'pb-full-restore', col: '#ffe04a', w: 0, auto: (r, p) => p.hp < p.maxHp * 0.15, usa: (r, p) => { p.heal(p.maxHp * 0.5); for (const k in p.pstat ?? {}) p.pstat[k] = 0; } }
  };
  const BUFF = { dano: 12, armadura: 12, velocidad: 12, critico: 12, ataque: 10 };
  const NB = { dano: '+30 % de daño', armadura: '+20 de armadura', velocidad: '+30 % de velocidad', critico: '+20 % de crítico', ataque: '+40 % de velocidad de ataque' };
  const jefe = run => { const E = run.enemies, p = run.player.pos; for (let j = 0; j < (E.alive?.length ?? 0); j++) if (E.alive[j] && E.flags[j] & 4 && Math.hypot(E.x[j] - p.x, E.z[j] - p.z) < 35) return true; return false; };
  const azar = () => { const t = Object.values(B).reduce((a, b) => a + (b.w ?? 0), 0); let r = Math.random() * t; for (const [k, b] of Object.entries(B)) if (b.w && (r -= b.w) < 0) return k; return 'oran'; };
  const S = run => run.__pbBolsa ??= { n: {}, cd: {}, buff: {}, orden: [] };

  const dar = (run, k, cant = 1, aviso = false) => {
    const s = S(run), antes = s.n[k] ?? 0;
    s.n[k] = Math.min(MAX, antes + cant);
    if (!s.orden.includes(k)) s.orden.push(k);
    if (aviso && s.n[k] > antes) try { const p = run.player.pos; run.ui.popup(p.x, p.y + 2.6, p.z, `+${s.n[k] - antes} ${k.startsWith('pb-') ? '' : 'Baya '}${B[k].n}`, B[k].col, 0.8); } catch {}
  };
  const activar = (run, b) => {
    const s = S(run), t = run.time ?? 0, p = run.player;
    const pon = x => { s.buff[x] = t + BUFF[x]; };
    if (b.apuro === 'doble') { const l = Object.keys(BUFF).filter(x => x !== 'ataque'); pon(l.splice(Math.floor(Math.random() * l.length), 1)[0]); pon(l[Math.floor(Math.random() * l.length)]); }
    else if (b.apuro) pon(b.apuro); else if (b.buff) pon(b.buff);
    try { p.recompute(); } catch {}
  };
  const comer = (run, k, manual = false) => {
    const s = S(run), b = B[k], p = run.player, t = run.time ?? 0;
    if (!(s.n[k] > 0) || p.dead || (!manual && (s.cd[k] ?? 0) > t)) return false;
    s.n[k]--; s.cd[k] = t + CD;
    try { if (b.usa) b.usa(run, p); else activar(run, b); } catch {}
    try {
      run.ui.popup(p.pos.x, p.pos.y + 2.6, p.pos.z, `¡${k.startsWith('pb-') ? '' : 'Baya '}${b.n}!${b.apuro || b.buff ? ' ' + (b.apuro === 'doble' ? '¡Doble apuro!' : NB[b.apuro ?? b.buff]) : ''}`, b.col, 0.9);
      run.vfx.ring(p.pos.x, p.pos.y + 0.2, p.pos.z, 2.2, parseInt(b.col.slice(1), 16), 0.45);
    } catch {}
    return true;
  };

  // ---------- partida ----------
  const vistos = new Map();
  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p || run.mode === 'duel') return;
    const s = S(run), t = run.time ?? 0;
    if (!p.__pbBolsa && typeof p.recompute === 'function') {
      const rc = p.recompute;
      p.recompute = function (...a) {
        const r = rc.apply(this, a);
        try {
          const st = this.stats, bf = S(run).buff, ok = x => (bf[x] ?? 0) > (run.time ?? 0);
          if (ok('dano')) st.damage *= 1.3;
          if (ok('armadura')) st.armor += 20;
          if (ok('velocidad')) st.moveSpeed *= 1.3;
          if (ok('critico')) st.critChance += 0.2;
          if (ok('ataque')) st.attackSpeed *= 1.4;
        } catch {}
        return r;
      };
      const h = p.hurt;
      p.hurt = function (dmg, ...a) { const antes = this.hp, r = h.call(this, dmg, ...a); try { if (antes - this.hp > this.maxHp * 0.15) run.__pbBolsaGolpe = run.time ?? 0; } catch {} return r; };
      // Cada arbusto de bayas usado deja además 1-2 bayas en la bolsa.
      const I = run.interactables;
      if (I && !I.__pbBolsa) {
        const it = I.interact.bind(I);
        I.interact = o => {
          // 1.32: arbusto de consumible (puesto por bolsa.js): va a la bolsa, sin la curación del arbusto normal.
          const c = o?.data?.pbCons;
          if (c && !o.used) {
            if ((S(run).n[c] ?? 0) >= MAX) { if (!o.__pbAviso) { o.__pbAviso = true; try { run.ui.toast(`Ya llevas ${MAX} de ${B[c].n}`, null); } catch {} } return false; }
            o.used = true; if (o.group) o.group.userData.dim = 0.6;
            dar(run, c, 1, true);
            try { run.ui.toast(`¡${B[c].n}! Guardado en la bolsa`, B[c].icon); run.vfx.burst(o.x, o.y + 2, o.z, parseInt(B[c].col.slice(1), 16), 16, 4, 29, 0.5, 0.6); } catch {}
            return true;
          }
          const r = it(o); try { if (o?.kind === 'berry' && o.used) { dar(run, azar(), 1, true); if (Math.random() < 0.5) dar(run, azar(), 1, true); } } catch {} return r; };
        I.__pbBolsa = true;
      }
      p.__pbBolsa = true;
    }
    // 1.32: en cada zona aparecen arbustos con consumibles (Zumo de Baya, Hiperpoción y, a veces, Restaurar Todo).
    if (run.interactables?.place && run.terrain && s.zona !== (run.stage ?? 1) && run.state === 'play') {
      s.zona = run.stage ?? 1;
      const T = run.terrain, R = (T.play ?? 140) * 0.85, lista = ['pb-zumo', 'pb-zumo', 'pb-hiper'];
      if (Math.random() < 0.35) lista.push('pb-restaurar');
      for (const c of lista) for (let i = 0; i < 25; i++) {
        const x = (Math.random() * 2 - 1) * R, z = (Math.random() * 2 - 1) * R;
        try { if (!T.inBounds(x, z, 8) || T.inWater?.(x, z) || (T.isFlatOpen && !T.isFlatOpen(x, z))) continue; run.interactables.place('berry', x, z, { data: { pbCons: c } }); break; } catch { break; }
      }
    }
    // Fin de los efectos temporales.
    for (const [x, fin] of Object.entries(s.buff)) if (fin && fin <= t) { s.buff[x] = 0; try { p.recompute(); } catch {} }
    // Alfas y élites al caer.
    const E = run.enemies;
    if (E?.alive) {
      for (let j = 0; j < E.alive.length; j++) if (E.alive[j] && E.flags[j] & 3 && !(E.flags[j] & 4) && !vistos.has(j)) vistos.set(j, E.gen[j]);
      for (const [j, g] of vistos) if (E.gen[j] !== g || !E.alive[j] || E.dying?.[j] > 0) { vistos.delete(j); if (E.gen[j] === g && Math.random() < 0.25) dar(run, azar(), 1, true); }
    }
    // Uso automático.
    if (run.state === 'play' && !p.dead) {
      for (const k of s.orden) {
        const b = B[k];
        if (!(s.n[k] > 0) || (s.cd[k] ?? 0) > t) continue;
        const usar = b.auto ? b.auto(run, p) : p.hp < p.maxHp * (b.apuro === 'doble' ? 0.2 : 0.25);
        if (usar && comer(run, k)) break;
      }
    }
    pintar(run);
  }, 200);

  // ---------- barra ----------
  const css = document.createElement('style');
  css.textContent = `.pb-bolsa{position:fixed;left:50%;top:calc(56px + env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:25;display:flex;gap:4px;padding:4px;border-radius:12px;background:rgba(16,14,30,.55);border:2px solid rgba(255,255,255,.25);pointer-events:auto}
.pb-bolsa:empty{display:none}.pb-bolsa .h{position:relative;width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.12);border:2px solid var(--c);display:flex;align-items:center;justify-content:center;touch-action:manipulation;cursor:pointer;padding:0}
.pb-bolsa .h img{width:26px;height:26px;image-rendering:pixelated}.pb-bolsa .h i{width:20px;height:20px;border-radius:50%;background:var(--c);box-shadow:inset -3px -3px 0 rgba(0,0,0,.25)}
.pb-bolsa .h b{position:absolute;right:1px;bottom:-1px;font:900 12px system-ui,sans-serif;color:#fff;text-shadow:0 1px 2px #000,0 0 2px #000}.pb-bolsa .h.cd{filter:brightness(.6)}.pb-bolsa .h.on{box-shadow:0 0 10px var(--c)}`;
  document.head.append(css);
  let el = null, clave = '';
  const pintar = run => {
    const s = run.__pbBolsa, vivo = run.state === 'play' || document.body.classList.contains('pb-hud-editing');
    if (!el || !el.isConnected) { el = document.createElement('div'); el.className = 'pb-bolsa'; document.body.append(el); clave = ''; }
    el.style.visibility = vivo && run.state !== 'over' ? '' : 'hidden';
    const t = run.time ?? 0, lista = (s?.orden ?? []).filter(k => s.n[k] > 0);
    const k = lista.map(x => `${x}${s.n[x]}${(s.cd[x] ?? 0) > t ? 'c' : ''}`).join('|') + '|' + Object.entries(s?.buff ?? {}).filter(([, f]) => f > t).map(([x]) => x).join(',');
    const editando = document.body.classList.contains('pb-hud-editing');
    if (k + editando === clave) return;
    clave = k + editando;
    if (!lista.length && editando) { el.innerHTML = '<button type="button" class="h" style="--c:#aaa"><i></i><b>0</b></button>'; return; }
    el.replaceChildren(...lista.map(x => {
      const b = B[x], h = document.createElement('button');
      h.type = 'button'; h.className = 'h' + ((s.cd[x] ?? 0) > t ? ' cd' : ''); h.style.setProperty('--c', b.col); h.title = `${x.startsWith('pb-') ? '' : 'Baya '}${b.n}`;
      const im = new Image(); im.src = `./assets/items/${b.icon}.png`; im.alt = '';
      im.onerror = () => im.replaceWith(document.createElement('i'));
      const n = document.createElement('b'); n.textContent = s.n[x];
      h.append(im, n);
      const go = e => { e.stopPropagation(); e.preventDefault?.(); const r = window.__pbRun; if (r?.state === 'play') comer(r, x, true); };
      h.addEventListener('pointerdown', go);
      h.addEventListener('click', e => e.stopPropagation());
      return h;
    }));
  };
  window.PB_BOLSA = { dar: (k, n = 1) => window.__pbRun && dar(window.__pbRun, k, n), B };
})();
