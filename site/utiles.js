/* Subversión propia (moportor6, 1.36): utilidades, solo en PokéBonk Lite.
   - Sala de entrenamiento (Modo historia → «🎯 Entrenamiento»): sin horda, con tres muñecos que no atacan ni caen.
     Un recuadro (movible en el editor del HUD) muestra el daño por segundo y el total; «+5 Nv.» sube a tu Pokémon.
     No cuenta para estadísticas, logros ni Guardería.
   - Evento de Navidad (todo diciembre): nieve, Delibird entre los salvajes, un regalo de Delibird cada 3 minutos y
     250 de Polvo extra al terminar cada partida. Para probarlo fuera de fecha: localStorage 'pb-navidad' = '1'.
   - Bestiario (Modo historia → «📖 Bestiario»): cada jefe que ves (líderes, Dominantes, Invocadores, minijefes…)
     queda apuntado con sus tipos, debilidades, veces visto y vencido y tu victoria más rápida. profile.pbBestia.
   - Control: vibración al recibir golpes y zona muerta del joystick (Pausa → «HUD y guía»; pbAuto.vib y pbAuto.dz,
     que el bundle lee en window.__pbJoyDZ). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const meta = () => window.__pbMeta, P = () => meta()?.profile, H = () => window.PB_HISTORIA;
  const guardar = () => { try { meta().save(); } catch {} };
  const A = () => { const p = P(); if (!p) return null; const a = p.pbAuto ??= {}; a.vib ??= true; a.dz ??= 0.1; return a; };
  let PK = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) PK[x.id] = x; }).catch(() => {});
  const lista = (titulo, alElegir, volver) => {
    const h = H(), p = P(), c = h.capa('kanto'), b = document.createElement('div'); b.className = 'hb';
    b.innerHTML = `<h2>${titulo}</h2><div style="max-height:52vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => alElegir(+x.dataset.sp));
    b.querySelector('.vol').onclick = volver;
    c.append(b);
  };
  const boton = (cls, txt, fn) => setInterval(() => {
    const f = document.querySelector('.pb-h .pb-hoopa');
    if (!f || f.querySelector('.' + cls)) return;
    const bt = document.createElement('button'); bt.className = 'hbt ' + cls; bt.textContent = txt; bt.onclick = fn; f.append(bt);
  }, 400);

  // ================= Control: vibración y zona muerta =================
  setInterval(() => {
    const a = A(); if (!a) return;
    window.__pbJoyDZ = a.dz;
    const pl = window.__pbRun?.player;
    if (!pl || pl.__pbVib) return;
    pl.__pbVib = true;
    let hp = pl.hp, ult = 0;
    setInterval(() => {
      if (pl.hp < hp - 0.5 && A()?.vib && performance.now() - ult > 250) { ult = performance.now(); try { navigator.vibrate?.(pl.hp < pl.maxHp * 0.25 ? 90 : 35); } catch {} }
      hp = pl.hp;
    }, 100);
  }, 500);

  // ================= Sala de entrenamiento =================
  let salaPend = null;
  const MUNECOS = [143, 202, 76];
  boton('pb-sala-bt', '🎯 Entrenamiento', () => lista('🎯 Sala de entrenamiento: elige a tu Pokémon', sp => {
    salaPend = sp; H().cerrar();
    Promise.resolve(window.__pbApp?.startRun?.({ species: sp, biome: 'forest', tier: 0, boosts: [], mode: 'standard' })).catch(() => { salaPend = null; });
  }, () => H().abrir()));
  const css = document.createElement('style');
  css.textContent = `.pb-sala{position:fixed;left:50%;top:44px;transform:translateX(-50%);z-index:30;background:rgba(10,20,40,.78);color:#fff;border:2px solid #7ab8ff;border-radius:12px;padding:5px 10px;font:800 13px system-ui,sans-serif;text-align:center;pointer-events:auto}
.pb-sala b{font-size:20px;color:#ffd84a}.pb-sala button{margin:3px 2px 0;border:0;border-radius:8px;padding:3px 8px;font:800 12px system-ui;background:#3a7aff;color:#fff}
body.pb-hud-editing .pb-sala{display:block!important}`;
  document.head.append(css);
  let caja = null;
  setInterval(() => {
    const run = window.__pbRun;
    if (salaPend != null && run?.player && run.state === 'play' && run.startSpecies === salaPend && !run.__pbSala) {
      salaPend = null; run.__pbSala = { mun: [], hist: [] };
      const d = run.director; if (d && !d.__pbSala) { const u = d.update.bind(d); d.update = (...x) => (run.__pbSala ? undefined : u(...x)); d.__pbSala = true; }
      const E = run.enemies;
      for (let j = 0; j < E.alive.length; j++) if (E.alive[j]) { try { run.combat.hit(j, E.maxHp[j] * 10, { type: 'normal', cls: 'physical', fixed: true }); } catch {} }
      const pl = run.player.pos;
      MUNECOS.forEach((sp, i) => {
        const a = (i / MUNECOS.length) * Math.PI * 2;
        const j = E.spawn(sp, pl.x + Math.cos(a) * 7, pl.z + Math.sin(a) * 7, 50, 0, 0);
        if (j >= 0) run.__pbSala.mun.push([j, E.gen[j]]);
      });
      try { run.ui.banner('🎯 Sala de entrenamiento', 'Golpea a los muñecos: el recuadro de arriba mide tu daño. Sal desde la pausa.', '#7ab8ff'); } catch {}
    }
    const S = run?.__pbSala;
    if (!S || !run.player) { caja?.remove(); caja = null; return; }
    const E = run.enemies;
    for (const [j, g] of S.mun) if (E.gen[j] === g && E.alive[j]) { E.speed[j] = 0; E.dmg[j] = 0; E.aggro && (E.aggro[j] = 0); if (E.hp[j] < E.maxHp[j] * 0.3) E.hp[j] = E.maxHp[j]; }
    const now = performance.now(), dmg = run.stats?.damage ?? 0;
    S.hist.push([now, dmg]); while (S.hist.length && now - S.hist[0][0] > 5000) S.hist.shift();
    const dps = S.hist.length > 1 ? (dmg - S.hist[0][1]) / Math.max(0.5, (now - S.hist[0][0]) / 1000) : 0;
    S.max = Math.max(S.max ?? 0, dps);
    if (!caja || !caja.isConnected) {
      caja = document.createElement('div'); caja.className = 'pb-sala';
      caja.innerHTML = '<span class="v"></span><br><button class="nv">+5 Nv.</button><button class="rs">Reiniciar</button>';
      caja.querySelector('.nv').onclick = e => { e.stopPropagation(); const p = run.player; for (let i = 0; i < 5; i++) p.addXp(p.xpNext + 1); };
      caja.querySelector('.rs').onclick = e => { e.stopPropagation(); S.max = 0; S.hist.length = 0; S.base = run.stats.damage; };
      document.body.append(caja);
    }
    caja.hidden = run.state !== 'play' && !document.body.classList.contains('pb-hud-editing');
    const f = n => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    caja.querySelector('.v').innerHTML = `Daño por segundo: <b>${f(dps)}</b> · récord ${f(S.max)}<br>Total: ${f(dmg - (S.base ?? 0))} · Nv. ${run.player.level}`;
  }, 200);
  window.PB_UTILES = { sala: run => !!run?.__pbSala };

  // ================= Navidad =================
  const navidad = () => new Date().getMonth() === 11 || localStorage.getItem('pb-navidad') === '1';
  let navVisto = null, navFin = null;
  setInterval(() => {
    const run = window.__pbRun;
    if (!run?.player || !navidad() || run.__pbSala || run.mode === 'duel') return;
    if (run.state === 'play') {
      if (navVisto !== run) {
        navVisto = run; run.__pbNav = { t: (run.time ?? 0) + 180, z: null };
        try { const r = run.biome?.residents; r && !r.includes(225) && r.push(225); } catch {}
        try { run.ui.banner('❄️ ¡Evento de Navidad!', 'Nieve, Delibird repartiendo regalos y +250 de Polvo al terminar', '#bfe8ff', { species: 225 }); } catch {}
      }
      const N = run.__pbNav;
      if (N.z !== run.zone) { N.z = run.zone; try { run.setZoneLook({ ...run.zone, motes: 'snow' }); } catch {} }
      if ((run.time ?? 0) >= N.t) {
        N.t = (run.time ?? 0) + 180;
        const pl = run.player.pos, a = Math.random() * Math.PI * 2, x = pl.x + Math.cos(a) * 6, z = pl.z + Math.sin(a) * 6;
        try { if (run.terrain.inBounds(x, z, 4)) { run.interactables.place('freechest', x, z); run.ui.banner('🎁 ¡Delibird te deja un regalo!', 'Una Poké Ball gratis cerca de ti', '#ff6a6a', { species: 225 }); } } catch {}
      }
    }
    if (run.state === 'over' && navFin !== run) {
      navFin = run; const p = P(); if (!p) return;
      if (window.PB_PREMIOS) window.PB_PREMIOS.dar('🎄 Regalo de Navidad', 250); // 1.37: por recoger
      else { p.stardust = (p.stardust ?? 0) + 250; guardar(); }
    }
  }, 500);

  // ================= Bestiario =================
  const T = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
  const TN = { normal: 'Normal', fire: 'Fuego', water: 'Agua', electric: 'Eléctrico', grass: 'Planta', ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada' };
  // ataque → [súper eficaz contra, poco eficaz contra, sin efecto contra]
  const TAB = {
    normal: ['', 'rock steel', 'ghost'], fire: ['grass ice bug steel', 'fire water rock dragon', ''], water: ['fire ground rock', 'water grass dragon', ''],
    electric: ['water flying', 'electric grass dragon', 'ground'], grass: ['water ground rock', 'fire grass poison flying bug dragon steel', ''],
    ice: ['grass ground flying dragon', 'fire water ice steel', ''], fighting: ['normal ice rock dark steel', 'poison flying psychic bug fairy', 'ghost'],
    poison: ['grass fairy', 'poison ground rock ghost', 'steel'], ground: ['fire electric poison rock steel', 'grass bug', 'flying'],
    flying: ['grass fighting bug', 'electric rock steel', ''], psychic: ['fighting poison', 'psychic steel', 'dark'],
    bug: ['grass psychic dark', 'fire fighting poison flying ghost steel fairy', ''], rock: ['fire ice flying bug', 'fighting ground steel', ''],
    ghost: ['psychic ghost', 'dark', 'normal'], dragon: ['dragon', 'steel', 'fairy'], dark: ['psychic ghost', 'fighting dark fairy', ''],
    steel: ['ice rock fairy', 'fire water electric steel', ''], fairy: ['fighting dragon dark', 'fire poison steel', '']
  };
  const efecto = (at, defs) => defs.reduce((m, d) => { const [s, n, i] = TAB[at].map(x => x.split(' ')); return m * (i.includes(d) ? 0 : s.includes(d) ? 2 : n.includes(d) ? 0.5 : 1); }, 1);
  const vistos = new Map();
  setInterval(() => {
    const run = window.__pbRun, p = P(), E = run?.enemies;
    if (!run || !p || !E || run.state !== 'play' || run.__pbSala) return;
    const B = p.pbBestia ??= {}; let cambio = false;
    for (let j = 0; j < E.alive.length; j++) {
      if (!E.alive[j] || !(E.flags[j] & (4 | 4096 | 8192))) continue;
      const k = `${j}:${E.gen[j]}`; if (vistos.has(k)) continue;
      const sp = E.species[j]; vistos.set(k, { j, g: E.gen[j], sp, t0: run.time ?? 0, run });
      const b = B[sp] ??= { v: 0, d: 0, t: 0 }; b.v++; cambio = true;
    }
    for (const [k, o] of vistos) {
      if (o.run !== run) { vistos.delete(k); continue; }
      if (E.gen[o.j] === o.g && E.alive[o.j] && !(E.dying?.[o.j] > 0)) continue;
      vistos.delete(k);
      const b = B[o.sp]; b.d++; cambio = true; const t = Math.round((run.time ?? 0) - o.t0); if (t > 0 && (!b.t || t < b.t)) b.t = t;
    }
    if (cambio) guardar();
  }, 400);
  const bestiario = (sp = 0) => {
    const h = H(), p = P(), c = h.capa('kanto'), b = document.createElement('div'); b.className = 'hb';
    const B = p.pbBestia ?? {}, ids = Object.keys(B).map(Number).sort((x, y) => x - y);
    if (!sp) {
      b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>📖 Bestiario (${ids.length})</h2><p class="sub">Cada jefe que te encuentras queda apuntado. Toca uno para ver sus debilidades.</p>
<div style="max-height:52vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${ids.map(x => `<button class="hbt" data-sp="${x}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${x}.png" alt="" loading="lazy" style="width:48px;height:48px;${B[x].d ? '' : 'filter:grayscale(.7)'}">${h.nombrePk(x)}<small>${B[x].d ? '✔ ' + B[x].d : 'sin vencer'}</small></button>`).join('') || '<p>Aún no te has encontrado con ningún jefe.</p>'}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
      b.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => bestiario(+x.dataset.sp));
      b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = () => h.abrir();
    } else {
      const d = B[sp], tipos = PK[sp]?.types ?? [];
      const deb = T.map(t => [t, efecto(t, tipos)]).filter(x => x[1] > 1).sort((x, y) => y[1] - x[1]);
      const res = T.map(t => [t, efecto(t, tipos)]).filter(x => x[1] < 1);
      const n = l => l.map(([t, m]) => `${TN[t]}${m === 4 ? ' ×4' : m === 0 ? ' (inmune)' : m === 0.25 ? ' ×¼' : ''}`).join(', ') || '—';
      b.innerHTML = `<h2>${h.nombrePk(sp)}</h2><div class="fila" style="align-items:center;gap:12px"><img src="./assets/portraits/${sp}.png" style="width:72px;height:72px;border-radius:12px"><div style="text-align:left;line-height:1.6">Tipo: <b>${tipos.map(t => TN[t] ?? t).join(' / ')}</b><br>Visto: <b>${d.v}</b> · Vencido: <b>${d.d}</b>${d.t ? ` · Más rápido: <b>${Math.floor(d.t / 60)}:${String(d.t % 60).padStart(2, '0')}</b>` : ''}</div></div>
<p style="text-align:left">⚔️ <b>Débil a:</b> ${n(deb)}<br>🛡️ <b>Resiste:</b> ${n(res)}</p><div class="fila"><button class="hbt vol">Volver</button></div>`;
      b.querySelector('.vol').onclick = () => bestiario();
    }
    c.append(b);
  };
  boton('pb-bestia-bt', '📖 Bestiario', () => bestiario());
})();
