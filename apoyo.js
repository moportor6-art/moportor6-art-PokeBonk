/* Subversión propia (moportor6, 1.02): movimientos de apoyo que no ocupan hueco, solo en PokéBonk Lite.
   Tu Pokémon los aprende solo y suben de nivel cada 5 niveles tuyos (máx. Nv. 8):
   - Nivel 10, un baile según su forma de luchar:
     Danza Espada (más ataques físicos): +4 % de daño físico por nivel del movimiento.
     Maquinación (más ataques especiales): +4 % de daño especial por nivel.
     Danza Dragón (tipo Dragón): +2,5 % de daño y +2 % de velocidad de movimiento por nivel.
   - Nivel 15, una protección:
     Protección: cada 15 s, escudo del 4 % de tus PS + 1 % por nivel (para los proyectiles y golpes).
     (Defensa Férrea en tipo Acero/Roca: además +3 de armadura por nivel. Reflejo en tipo Psíquico/Hada: escudo cada 12 s.)
   Se ven en la pausa (pestaña Movimientos), con el icono de su tipo, junto al de debilitar.js (Chirrido…).
   Gancho: player.recompute (envuelto) y player.shield. No se aplica en duelos. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const BAILE = {
    espada: { n: 'Danza Espada', tipo: 'normal', txt: r => `+${4 * r} % de daño físico` },
    maqui: { n: 'Maquinación', tipo: 'dark', txt: r => `+${4 * r} % de daño especial` },
    dragon: { n: 'Danza Dragón', tipo: 'dragon', txt: r => `+${(2.5 * r).toString().replace('.', ',')} % de daño y +${2 * r} % de velocidad` }
  };
  const PROT = {
    proteccion: { n: 'Protección', tipo: 'normal', cada: 15, txt: (r, c) => `Cada ${c} s, escudo del ${4 + r} % de tus PS` },
    ferrea: { n: 'Defensa Férrea', tipo: 'steel', cada: 15, txt: (r, c) => `+${3 * r} de armadura y, cada ${c} s, escudo del ${4 + r} % de tus PS` },
    reflejo: { n: 'Reflejo', tipo: 'psychic', cada: 12, txt: (r, c) => `Cada ${c} s, escudo del ${4 + r} % de tus PS` }
  };
  const NV_BAILE = 10, NV_PROT = 15, MAX = 8;
  const rango = (lv, desde) => lv < desde ? 0 : Math.min(MAX, 1 + Math.floor((lv - desde) / 5));
  const sirve = run => run && run.mode !== 'duel' && !run.duel;

  const elegir = (run, pl) => {
    const st = run.__pbApoyo ??= {};
    const t = pl.types ?? [];
    if (!st.baile && (pl.level ?? 1) >= NV_BAILE) {
      let f = 0, e = 0;
      for (const m of pl.moves ?? []) { const c = m?.def?.cls; if (c === 'physical') f++; else if (c === 'special') e++; }
      st.baile = t.includes('dragon') ? 'dragon' : f >= e ? 'espada' : 'maqui';
    }
    if (!st.prot && (pl.level ?? 1) >= NV_PROT) st.prot = t.includes('steel') || t.includes('rock') ? 'ferrea' : t.includes('psychic') || t.includes('fairy') ? 'reflejo' : 'proteccion';
    return st;
  };

  setInterval(() => {
    const run = window.__pbRun, pl = run?.player;
    if (!sirve(run) || !pl || typeof pl.recompute !== 'function') return;
    const st = elegir(run, pl), lv = pl.level ?? 1;
    if (!pl.__pbApoyo) {
      const rc = pl.recompute;
      pl.recompute = function (...a) {
        const r = rc.apply(this, a);
        try {
          const s = this.stats, b = rango(this.level ?? 1, NV_BAILE), p = rango(this.level ?? 1, NV_PROT);
          if (b && st.baile === 'espada') s.physical *= 1 + 0.04 * b;
          if (b && st.baile === 'maqui') s.special *= 1 + 0.04 * b;
          if (b && st.baile === 'dragon') { s.damage *= 1 + 0.025 * b; s.moveSpeed *= 1 + 0.02 * b; }
          if (p && st.prot === 'ferrea') s.armor += 3 * p;
        } catch {}
        return r;
      };
      pl.__pbApoyo = true;
    }
    // Avisos al aprender y al subir de nivel (y recalcular stats).
    for (const [k, desde, def] of [['b', NV_BAILE, BAILE[st.baile]], ['p', NV_PROT, PROT[st.prot]]]) {
      const r = rango(lv, desde);
      if (r !== (st[k + 'r'] ?? 0)) {
        const antes = st[k + 'r'] ?? 0;
        st[k + 'r'] = r;
        try { pl.recompute(); } catch {}
        if (run.state === 'play') try {
          if (!antes) run.ui.banner(`¡Aprendió ${def.n}!`, 'Movimiento de apoyo: no ocupa hueco y sube cada 5 niveles', '#9ae6ff', { species: pl.speciesId });
          else run.ui.toast(`${def.n} sube a Nv. ${r}`, null);
        } catch {}
      }
    }
    // Protección: escudo periódico.
    const p = rango(lv, NV_PROT);
    if (p && run.state === 'play' && pl.hp > 0) {
      const d = PROT[st.prot];
      if ((run.time ?? 0) >= (st.sigEscudo ??= (run.time ?? 0) + 2)) {
        st.sigEscudo = run.time + d.cada;
        pl.shield = Math.max(pl.shield ?? 0, pl.maxHp * (0.04 + 0.01 * p));
        try { run.vfx.ring(pl.pos.x, pl.pos.y + 0.2, pl.pos.z, 2.6, 0x9ae6ff, 0.5); run.ui.popup(pl.pos.x, pl.pos.y + 2.6, pl.pos.z, `¡${d.n}!`, '#9ae6ff', 0.8); } catch {}
      }
    }
  }, 150);

  // ---------- ficha en la pausa ----------
  const css = document.createElement('style');
  css.textContent = `.pb-apoyo-pz{margin:8px 0;padding:8px 10px;border-radius:12px;background:rgba(154,230,255,.1);border:1px solid rgba(154,230,255,.35)}
.pb-apoyo-pz h4{margin:0 0 6px;font:800 11px system-ui,sans-serif;letter-spacing:1px;color:#9ae6ff;text-transform:uppercase}
.pb-apoyo-pz div{display:flex;align-items:center;gap:8px;margin:4px 0;font:700 13px system-ui,sans-serif}
.pb-apoyo-pz img{width:26px;height:26px;image-rendering:pixelated;flex:none}.pb-apoyo-pz b{white-space:nowrap}
.pb-apoyo-pz small{opacity:.85;font-weight:600}.pb-apoyo-pz i{font-style:normal;color:#ffd23a;font-weight:900;margin-left:auto;white-space:nowrap}`;
  document.head.append(css);
  setInterval(() => {
    const run = window.__pbRun, ab = document.querySelector('.pz .pz-ability');
    if (!run || !ab || ab.parentElement.querySelector('.pb-apoyo-pz')) return;
    const st = run.__pbApoyo ?? {}, lv = run.player?.level ?? 1, filas = [];
    const b = BAILE[st.baile], p = PROT[st.prot], rb = rango(lv, NV_BAILE), rp = rango(lv, NV_PROT);
    if (b && rb) filas.push([b.tipo, b.n, b.txt(rb), `Nv. ${rb}/${MAX}`]);
    if (p && rp) filas.push([p.tipo, p.n, p.txt(rp, p.cada), `Nv. ${rp}/${MAX}`]);
    const d = window.PB_DEB?.(run);
    if (d) filas.push([d.tipo, d.n, d.txt, '']);
    const futuro = [!rb && `Nv. ${NV_BAILE}: un baile`, !rp && `Nv. ${NV_PROT}: una protección`].filter(Boolean);
    if (!filas.length && !futuro.length) return;
    const c = document.createElement('div');
    c.className = 'pb-apoyo-pz';
    c.innerHTML = `<h4>Movimientos de apoyo · no ocupan hueco</h4>` + filas.map(([t, n, x, nv]) => `<div><img src="./assets/ui/types/${t}.png" alt=""><span><b>${n}</b><br><small>${x}</small></span><i>${nv}</i></div>`).join('') + (futuro.length ? `<small>Próximos: ${futuro.join(' · ')}</small>` : '');
    ab.after(c);
  }, 400);
})();
