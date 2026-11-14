/* Subversión propia (moportor6, 0.91): naturalezas, solo en PokéBonk Lite.
   - Se desbloquean un nivel antes de la primera evolución (nivel 16 si no evoluciona): la partida se detiene y eliges
     entre 3, sugeridas por tus ataques equipados (físicos / especiales / mezcla) y por si tu Pokémon es más defensivo
     (Defensa + Def. Esp. por encima de Ataque + At. Esp.). La primera es la recomendada.
   - Son para siempre: se guardan en el perfil por Pokémon (la especie con la que empiezas). En el Laboratorio se puede
     olvidar por Polvo y volver a elegir en la próxima partida.
   - Efecto: +15 % a una estadística y −10 % a otra (neutras: +4 % a todo). Ataque = daño físico, At. Esp. = daño
     especial, Defensa = armadura, Def. Esp. = PS máximos, Velocidad = velocidad de movimiento y de ataque.
   Ganchos: run.player.recompute (envuelto), run.state = 'modal' + run.resume() del juego. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const N = [
    ['fuerte', 'Fuerte'], ['hurana', 'Huraña', 'atk', 'def'], ['audaz', 'Audaz', 'atk', 'spe'], ['firme', 'Firme', 'atk', 'spa'], ['picara', 'Pícara', 'atk', 'spd'],
    ['osada', 'Osada', 'def', 'atk'], ['docil', 'Dócil'], ['placida', 'Plácida', 'def', 'spe'], ['agitada', 'Agitada', 'def', 'spa'], ['floja', 'Floja', 'def', 'spd'],
    ['miedosa', 'Miedosa', 'spe', 'atk'], ['activa', 'Activa', 'spe', 'def'], ['seria', 'Seria'], ['alegre', 'Alegre', 'spe', 'spa'], ['ingenua', 'Ingenua', 'spe', 'spd'],
    ['modesta', 'Modesta', 'spa', 'atk'], ['afable', 'Afable', 'spa', 'def'], ['mansa', 'Mansa', 'spa', 'spe'], ['timida', 'Tímida'], ['alocada', 'Alocada', 'spa', 'spd'],
    ['serena', 'Serena', 'spd', 'atk'], ['amable', 'Amable', 'spd', 'def'], ['grosera', 'Grosera', 'spd', 'spe'], ['cauta', 'Cauta', 'spd', 'spa'], ['rara', 'Rara']
  ];
  const NAT = Object.fromEntries(N.map(([id, n, up, dn]) => [id, { id, n, up, dn }]));
  const TXT = { atk: 'Físico', spa: 'Especial', def: 'Armadura', spd: 'PS', spe: 'Velocidad' };
  const desc = n => n.up ? `+15 % ${TXT[n.up]} · −10 % ${TXT[n.dn]}` : '+4 % a todo';
  const SUBE = 1.15, BAJA = 0.9, NEUTRA = 1.04, OLVIDAR = 300;

  const STATS = new Map();
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) STATS.set(x.id, x); }).catch(() => {});

  const meta = () => window.__pbMeta;
  const guardadas = () => { const p = meta()?.profile; return p ? (p.pbNat ??= {}) : null; };
  const clave = run => run.startSpecies ?? run.__pbNatSp ?? run.player?.speciesId;
  const deRun = run => { const g = guardadas(); return g && NAT[g[clave(run)]]; };

  // Nivel en el que se ofrece: uno antes de la primera evolución (misma cuenta que el juego), o 16.
  const nivelOferta = sp => {
    const d = STATS.get(sp);
    if (!d) return 16;
    const hijos = [...STATS.values()].filter(x => x.evoFrom === sp && x.id <= 1025);
    if (!hijos.length) return 16;
    const h = hijos[0], a = h.evoLevel ?? (d.evoStage === 0 ? 20 : 34);
    const nietos = [...STATS.values()].some(x => x.evoFrom === h.id);
    const lv = nietos ? Math.max(16, Math.min(30, Math.round(8 + a))) : Math.max(36, Math.min(50, Math.round(22 + a * 0.6)));
    return Math.max(2, lv - 1);
  };

  const sugerir = p => {
    let f = 0, e = 0;
    for (const m of p.moves ?? []) { const c = m?.def?.cls; if (c === 'physical') f++; else if (c === 'special') e++; }
    const s = STATS.get(p.speciesId)?.stats;
    const def = s && s.def + s.spd > (s.atk + s.spa) * 1.1;
    const lado = f > e ? 'f' : e > f ? 'e' : (s && s.atk >= s.spa ? 'f' : 'e');
    if (def) return lado === 'f' ? ['agitada', 'cauta', 'firme'] : ['osada', 'serena', 'modesta'];
    if (f && e && Math.abs(f - e) <= 1) return ['ingenua', 'alocada', 'seria'];
    return lado === 'f' ? ['firme', 'alegre', 'audaz'] : ['modesta', 'miedosa', 'mansa'];
  };

  const aplicar = (pl, n) => {
    const st = pl.stats;
    if (!st || !n) return;
    const k = s => n.up ? (s === n.up ? SUBE : s === n.dn ? BAJA : 1) : NEUTRA;
    st.physical *= k('atk'); st.special *= k('spa'); st.armor *= k('def');
    st.maxHp = Math.round(st.maxHp * k('spd'));
    st.moveSpeed *= k('spe'); st.attackSpeed *= k('spe');
    if (pl.hp > st.maxHp) pl.hp = st.maxHp;
  };

  // ---------- elección ----------
  const css = document.createElement('style');
  css.textContent = `.pb-nat{position:fixed;inset:0;z-index:100070;display:grid;place-items:center;background:rgba(10,8,30,.72);font-family:system-ui,sans-serif;color:#fff;padding:12px}
.pb-nat .c{width:min(720px,96vw);max-height:94vh;overflow:auto;background:linear-gradient(#2c2458,#1a1638);border:3px solid #ffd23a;border-radius:18px;padding:14px 16px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.5)}
.pb-nat h2{margin:0 0 4px;font-size:22px;color:#ffd23a}.pb-nat p{margin:0 0 10px;font-weight:700;opacity:.9}
.pb-nat .op{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}
.pb-nat button{cursor:pointer;border:3px solid #8a7ad8;border-radius:14px;background:#3a3070;color:#fff;padding:12px 10px;font:800 17px system-ui,sans-serif}
.pb-nat button small{display:block;margin-top:4px;font-size:13px;font-weight:700;color:#ffe9a8}
.pb-nat button.rec{border-color:#ffd23a;background:#4a3a20}.pb-nat button i{display:block;font-style:normal;font-size:11px;color:#ffd23a;margin-bottom:2px}
.pb-nat-chip{display:inline-block;margin-left:6px;padding:2px 8px;border-radius:9px;background:#ffd23a;color:#3a2a00;font:800 11px system-ui,sans-serif;vertical-align:middle}`;
  document.head.append(css);

  const ofrecer = run => {
    const p = run.player, ops = sugerir(p);
    const pausa = !run.coop;
    if (pausa) run.state = 'modal';
    const capa = document.createElement('div');
    capa.className = 'pb-nat';
    capa.innerHTML = `<div class="c"><h2>¡${STATS.get(p.speciesId)?.name ?? 'Tu Pokémon'} muestra su naturaleza!</h2><p>Según sus ataques y su forma de luchar. Elige una: será suya para siempre.</p><div class="op">${ops.map((id, k) => `<button data-n="${id}" class="${k ? '' : 'rec'}">${k ? '' : '<i>RECOMENDADA</i>'}${NAT[id].n}<small>${desc(NAT[id])}</small></button>`).join('')}</div></div>`;
    capa.querySelectorAll('button').forEach(b => b.onclick = () => {
      const g = guardadas();
      if (g) { g[clave(run)] = b.dataset.n; try { meta().save(); } catch {} }
      capa.remove();
      try { p.recompute(); } catch {}
      if (pausa) { try { run.resume(); } catch { run.state = 'play'; } }
      try { run.ui.toast(`Naturaleza ${NAT[b.dataset.n].n}: ${desc(NAT[b.dataset.n])}`, null); } catch {}
    });
    document.body.append(capa);
  };

  setInterval(() => {
    const run = window.__pbRun, pl = run?.player;
    if (!run || !pl || typeof pl.recompute !== 'function') return;
    run.__pbNatSp ??= pl.speciesId;
    if (!pl.__pbNat) {
      const rc = pl.recompute;
      pl.recompute = function (...a) { const r = rc.apply(this, a); try { aplicar(this, deRun(run)); } catch {} return r; };
      pl.__pbNat = true;
      try { pl.recompute(); } catch {}
    }
    if (run.state !== 'play' || deRun(run) || run.__pbNatOfrecida || document.querySelector('.pb-nat')) return;
    if ((pl.level ?? 1) >= nivelOferta(pl.speciesId) || (pl.evoStage ?? 0) > (STATS.get(run.__pbNatSp)?.evoStage ?? 0)) {
      run.__pbNatOfrecida = true;
      ofrecer(run);
    }
  }, 300);

  // ---------- se ve en la pausa ----------
  setInterval(() => {
    const run = window.__pbRun, h = document.querySelector('.pz .pz-hero');
    if (!run || !h || h.querySelector('.pb-nat-chip')) return;
    const n = deRun(run);
    if (!n) return;
    const nom = h.querySelector('.pz-name, h2, .name') ?? h;
    const c = document.createElement('span');
    c.className = 'pb-nat-chip';
    c.textContent = n.up ? `${n.n} +${TXT[n.up]} −${TXT[n.dn]}` : `${n.n} +4 %`;
    nom.append(c);
  }, 400);

  // ---------- Laboratorio: olvidar la naturaleza ----------
  setInterval(() => {
    const lab = document.querySelector('.screen.lab');
    if (!lab) return;
    const sp = window.PB_LAB?.cur?.(), g = guardadas();
    let caja = lab.querySelector('.pb-lab-nat');
    const n = g && NAT[g[sp]];
    if (caja && caja.dataset.k === `${sp}|${n?.id}`) return;
    if (!caja) {
      const head = lab.querySelector('.pb-lab-oro') ?? lab.querySelector('.scr-head');
      if (!head) return;
      caja = document.createElement('div');
      caja.className = 'pb-lab-oro pb-lab-nat';
      head.after(caja);
    }
    caja.dataset.k = `${sp}|${n?.id}`;
    caja.replaceChildren();
    const t = document.createElement('span');
    t.innerHTML = n ? `Naturaleza: <b>${n.n}</b> <small>· ${desc(n)}</small>` : `Naturaleza: <small>se elige un nivel antes de su primera evolución</small>`;
    caja.append(t);
    if (n) {
      const b = document.createElement('button');
      b.className = 'btn small gold';
      b.textContent = `Olvidar · ${OLVIDAR} de Polvo`;
      const m = meta();
      b.disabled = !m || (m.profile.stardust ?? 0) < OLVIDAR;
      b.onclick = () => {
        if (!m || (m.profile.stardust ?? 0) < OLVIDAR) return;
        m.profile.stardust -= OLVIDAR;
        delete g[sp];
        try { m.save(); } catch {}
        caja.dataset.k = '';
      };
      caja.append(b);
    }
  }, 500);
})();
