/* Subversión propia (moportor6, 1.34): Torre de Líderes, solo en PokéBonk Lite (como los Anillos de Hoopa, hoopa.js).
   Botón «🗼 Torre de Líderes» en el Modo historia. Uno tras otro salen los Pokémon estrella de los 8 líderes de Kanto o
   de Johto, cada vez más fuertes, mientras sigue la horda. Normal o Difícil (×1,5 de vida y daño). Si los vences a
   todos ganas la partida y 1.500 de Polvo (2.500 en Difícil). Datos: profile.pbTorre = ['kanto-1', …]. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const OPC = [['kanto', 1, 'Kanto · Normal', 1500], ['kanto', 1.5, 'Kanto · Difícil', 2500], ['johto', 1, 'Johto · Normal', 1500], ['johto', 1.5, 'Johto · Difícil', 2500]];
  const meta = () => window.__pbMeta, H = () => window.PB_HISTORIA;
  const ases = reg => (window.PB_GYM?.LIDERES?.[reg] ?? []).map(l => ({ sp: l.equipo.at(-1), nombre: l.nombre }));
  let pendiente = null;

  const pantalla = () => {
    const h = H(), p = meta()?.profile; if (!h || !p) return;
    const c = h.capa('kanto'), b = document.createElement('div'), hechas = p.pbTorre ?? []; b.className = 'hb';
    b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🗼 Torre de Líderes</h2><p class="sub">Los Pokémon estrella de los 8 líderes, uno tras otro y cada vez más fuertes. La horda no para. Véncelos a todos para ganar.</p>
<div class="fila">${OPC.map((o, i) => `<button class="hbt op" data-i="${i}">${o[2]}<br><small>+${o[3]} Polvo${hechas.includes(`${o[0]}-${o[1]}`) ? ' · ✔' : ''}</small></button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('.op').forEach(x => x.onclick = () => companero(+x.dataset.i));
    b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = () => h.abrir();
    c.append(b);
  };
  const companero = i => {
    const h = H(), p = meta().profile, c = h.capa('kanto'), b = document.createElement('div'); b.className = 'hb';
    b.innerHTML = `<h2>${OPC[i][2]}: elige a tu Pokémon</h2><div style="max-height:52vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => {
      const [reg, k] = OPC[i]; pendiente = { i, jefes: ases(reg), n: 0, j: -1, k };
      h.cerrar();
      Promise.resolve(window.__pbApp?.startRun?.({ species: +x.dataset.sp, biome: reg === 'johto' ? 'encina' : 'forest', tier: k > 1 ? 1 : 0, boosts: [], mode: 'standard' })).catch(() => { pendiente = null; });
    });
    b.querySelector('.vol').onclick = pantalla;
    c.append(b);
  };
  const sacar = (run, d) => {
    const L = d.jefes[d.n], pl = run.player.pos;
    for (let t = 0; t < 12; t++) {
      const a = Math.random() * Math.PI * 2, x = pl.x + Math.cos(a) * 12, z = pl.z + Math.sin(a) * 12;
      if (!run.terrain.inBounds(x, z, 6)) continue;
      try { run.ui.banner(`🗼 Piso ${d.n + 1}/${d.jefes.length}: ${L.nombre}`, '¡Su Pokémon estrella te desafía!', '#7ab8ff', { species: L.sp }); run.vfx.ring(x, run.terrain.height(x, z) + 0.2, z, 4, 0x7ab8ff, 1.2); } catch {}
      const f = (1 + d.n * 0.2) * d.k;
      d.j = run.boss.spawn(L.sp, x, z, false, { hp: run.director.hpMult() * 2.4 * f, dmg: run.director.dmgMult() * d.k, kit: true });
      if (d.j >= 0) d.g = run.enemies.gen[d.j];
      return;
    }
  };
  setInterval(() => {
    const run = window.__pbRun;
    if (pendiente && run && run !== pendiente.run && run.player && run.state === 'play') { pendiente.run = run; run.__pbTorre = pendiente; pendiente = null; run.__pbTorre.t = (run.time ?? 0) + 8; }
    const d = run?.__pbTorre;
    if (!d || run.state !== 'play' || d.fin) return;
    const E = run.enemies;
    if (d.j >= 0) {
      if (E.gen[d.j] === d.g && E.alive[d.j] && !(E.dying?.[d.j] > 0)) return;
      d.j = -1; d.n++; d.t = (run.time ?? 0) + 6;
      if (d.n >= d.jefes.length) {
        d.fin = true;
        const m = meta(), p = m.profile, [reg, k, nom, polvo] = OPC[d.i];
        run.stats.pbDust = (run.stats.pbDust ?? 0) + polvo;
        p.pbTorre ??= []; p.pbTorre.includes(`${reg}-${k}`) || p.pbTorre.push(`${reg}-${k}`);
        try { window.PB_LOGROS?.cont('torre'); m.save(); } catch {}
        try { run.ui.banner(`🗼 ¡Torre superada: ${nom}!`, `+${polvo} de Polvo Estelar`, '#7ab8ff'); } catch {}
        run.later?.(3, () => { try { run.state === 'play' && run.finish(true); } catch {} });
      }
      return;
    }
    if ((run.time ?? 0) >= d.t) sacar(run, d);
  }, 250);
  setInterval(() => {
    const f = document.querySelector('.pb-h .pb-hoopa');
    if (!f || f.querySelector('.pb-torre')) return;
    const bt = document.createElement('button'); bt.className = 'hbt pb-torre'; bt.textContent = '🗼 Torre de Líderes'; bt.onclick = pantalla; f.append(bt);
  }, 400);
})();
