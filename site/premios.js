/* Subversión propia (moportor6, 1.37): recompensas por recoger y logros por Pokémon, solo en PokéBonk Lite.
   - Logros por Pokémon: cada Pokémon con el que juegas (el que eliges al empezar) tiene su propia lista con 3 niveles
     (bronce, plata y oro): bajas, Alfas, jefes, victorias, variocolores capturados y evoluciones. Se ven en su ficha de la
     Pokédex. Con todos en oro, el Pokémon gana la «Maestría» (⭐ en su ficha) y un premio grande.
   - Recompensas: los logros (también los generales de extras.js) ya no se suman solos. Al terminar la partida aparece
     un aviso «🎁 Recompensas» que abre la lista para recogerlas. Datos: profile.pbLogPk { especie: { c: {…}, n: {…} } },
     profile.pbPremios [{ t, polvo }]. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const meta = () => window.__pbMeta, P = () => meta()?.profile;
  const guardar = () => { try { meta().save(); } catch {} };
  const f = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  // [clave, nombre, de dónde sale en run.stats, metas bronce/plata/oro]
  const METAS = [
    ['k', 'Bajas', s => s.kills, [1000, 10000, 50000]],
    ['a', 'Alfas derrotados', s => s.alphas, [5, 25, 100]],
    ['j', 'Jefes derrotados', s => (s.bosses ?? 0) + (s.totems ?? 0) + (s.summoners ?? 0) + (s.legendaries ?? 0), [3, 15, 50]],
    ['v', 'Victorias', (s, run) => (run.victory ? 1 : 0), [1, 5, 20]],
    ['s', 'Variocolores capturados', s => s.shinies, [1, 3, 10]],
    ['e', 'Evoluciones', s => s.evolutions, [1, 5, 15]]
  ];
  const NIV = [['🥉', 'bronce', 200], ['🥈', 'plata', 600], ['🥇', 'oro', 1500]];
  const MAESTRIA = 5000;
  let NOM = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) NOM[x.id] = x.name; }).catch(() => {});

  const dar = (t, polvo) => { const p = P(); if (!p) return; (p.pbPremios ??= []).push({ t, polvo }); guardar(); };
  window.PB_PREMIOS = { dar, METAS, NIV };

  // Al terminar cada partida: sumar al Pokémon y ver qué niveles nuevos alcanzó.
  let visto = null;
  setInterval(() => {
    const run = window.__pbRun, p = P();
    if (!run || !p || run.state !== 'over' || visto === run || run.mode === 'duel' || run.__pbSala || run.__pbPrueba) return;
    visto = run;
    const sp = run.startSpecies, L = (p.pbLogPk ??= {})[sp] ??= { c: {}, n: {} }, nombre = NOM[sp] ?? `#${sp}`;
    for (const [k, nom, de, metas] of METAS) {
      L.c[k] = (L.c[k] ?? 0) + (+de(run.stats ?? {}, run) || 0);
      while ((L.n[k] ?? 0) < 3 && L.c[k] >= metas[L.n[k] ?? 0]) {
        const i = L.n[k] ?? 0, [ic, , polvo] = NIV[i];
        L.n[k] = i + 1;
        dar(`${ic} ${nombre}: ${nom} (${f(metas[i])})`, polvo);
      }
    }
    if (!L.m && METAS.every(([k]) => L.n[k] >= 3)) { L.m = true; dar(`⭐ ¡Maestría con ${nombre}!`, MAESTRIA); }
    guardar();
  }, 500);

  // 1.40: modo Sin fin: 250 de Polvo × n por cada bloque de 5 minutos aguantados (300, luego 500…) y récord por Pokémon.
  let sfVisto = null;
  setInterval(() => {
    const run = window.__pbRun, p = P();
    if (!run?.endless || !p || run.mode === 'duel' || sfVisto === run || run.state !== 'over') return;
    sfVisto = run;
    const t = Math.floor(run.time ?? 0), bloques = Math.floor(t / 300), sp = run.startSpecies;
    const R = p.pbSinFin ??= {}, antes = R[sp] ?? 0;
    if (t > antes) R[sp] = t;
    p.pbSinFinMax = Math.max(p.pbSinFinMax ?? 0, t);
    if (bloques) dar(`♾️ Sin fin con ${NOM[sp] ?? '#' + sp}: ${Math.floor(t / 60)} min aguantados`, 250 * bloques * (bloques + 1) / 2);
    if (t > antes && antes) dar(`♾️ ¡Nuevo récord de Sin fin con ${NOM[sp] ?? '#' + sp}!`, 300);
    guardar();
  }, 500);
  setInterval(() => {
    const run = window.__pbRun;
    if (!run?.endless || run.state !== 'play') return;
    const b = Math.floor((run.time ?? 0) / 300);
    if (b > (run.__pbSFb ?? 0)) { run.__pbSFb = b; try { run.ui.toast(`♾️ ${b * 5} min: +${f(250 * b * (b + 1) / 2)} de Polvo en total al terminar`, null); } catch {} }
  }, 1000);

  // Aviso y lista para recoger.
  const css = document.createElement('style');
  css.textContent = `.pb-premios{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:99990;border:3px solid #fff;border-radius:16px;padding:8px 16px;background:linear-gradient(#ffcf4a,#e8961a);color:#3a2000;font:900 15px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.45);animation:pbPremio 1s ease-in-out infinite alternate;cursor:pointer}
@keyframes pbPremio{to{transform:translateX(-50%) scale(1.06)}}
.pb-premios-capa{position:fixed;inset:0;z-index:99991;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center}
.pb-premios-capa .c{background:#1e2440;color:#fff;border:3px solid #ffcf4a;border-radius:16px;padding:12px 14px;width:min(92vw,460px);max-height:84vh;display:flex;flex-direction:column;gap:8px;font:600 14px system-ui,sans-serif}
.pb-premios-capa .l{overflow:auto;display:flex;flex-direction:column;gap:4px}.pb-premios-capa .l div{display:flex;justify-content:space-between;gap:8px;background:rgba(255,255,255,.07);border-radius:8px;padding:5px 8px}
.pb-premios-capa button{border:0;border-radius:10px;padding:8px 14px;font:900 15px system-ui;background:#3ac85a;color:#fff;cursor:pointer}.pb-premios-capa .x{background:#555}`;
  document.head.append(css);
  const abrir = () => {
    const p = P(), L = p?.pbPremios ?? []; if (!L.length) return;
    const total = L.reduce((a, x) => a + x.polvo, 0);
    const capa = document.createElement('div'); capa.className = 'pb-premios-capa';
    capa.innerHTML = `<div class="c"><b style="font-size:18px">🎁 Recompensas (${L.length})</b><div class="l">${L.map(x => `<div><span>${x.t}</span><b>+${f(x.polvo)}</b></div>`).join('')}</div><button class="ok">Recoger todo · +${f(total)} de Polvo</button><button class="x">Luego</button></div>`;
    capa.querySelector('.ok').onclick = e => {
      e.stopPropagation(); p.stardust = (p.stardust ?? 0) + total; p.pbPremios = []; guardar(); capa.remove();
      try { window.__pbApp?.notice?.(`🎁 +${f(total)} de Polvo Estelar recogido`); } catch {}
    };
    capa.querySelector('.x').onclick = e => { e.stopPropagation(); capa.remove(); };
    capa.addEventListener('pointerdown', e => e.stopPropagation());
    document.body.append(capa);
  };
  let bt = null;
  setInterval(() => {
    const run = window.__pbRun, n = P()?.pbPremios?.length ?? 0;
    const ver = n > 0 && (!run || run.state === 'over') && !document.querySelector('.pb-premios-capa');
    if (!ver) { bt?.remove(); bt = null; return; }
    if (!bt || !bt.isConnected) {
      bt = document.createElement('button'); bt.type = 'button'; bt.className = 'pb-premios';
      bt.addEventListener('pointerdown', e => { e.stopPropagation(); e.preventDefault(); abrir(); }, true);
      bt.addEventListener('click', e => e.stopPropagation(), true);
      document.body.append(bt);
    }
    bt.textContent = `🎁 ¡${n} recompensa${n > 1 ? 's' : ''} por recoger!`;
  }, 400);

  // Ficha de la Pokédex: logros de este Pokémon.
  setInterval(() => {
    const info = document.querySelector('.dx-info'), on = document.querySelector('.dx-tile.on img');
    if (!info || !on) return;
    const sp = +((on.getAttribute('src') ?? '').match(/portraits\/(\d+)\.png/)?.[1] ?? 0); let L = P()?.pbLogPk?.[sp];
    let d = info.querySelector('.pb-logpk'); const k = JSON.stringify([sp, L, P()?.pbSinFin?.[sp]]);
    if (d?.dataset.k === k) return;
    if (!L && !P()?.pbSinFin?.[sp]) { d?.remove(); return; }
    L ??= { c: {}, n: {} };
    if (!d) { d = document.createElement('div'); d.className = 'pb-logpk'; d.style.cssText = 'margin:8px 0;padding:6px 8px;border-radius:10px;background:rgba(255,200,60,.14);font:700 12px system-ui,sans-serif;line-height:1.55'; info.append(d); }
    d.dataset.k = k;
    const sf = P()?.pbSinFin?.[sp];
    d.innerHTML = `${L.m ? '⭐ <b>Maestría</b> · ' : ''}🏅 Logros con este Pokémon<br>${sf ? `♾️ Récord de Sin fin: <b>${Math.floor(sf / 60)}:${String(sf % 60).padStart(2, '0')}</b><br>` : ''}` + METAS.map(([c, nom, , metas]) => {
      const n = L.n[c] ?? 0, v = L.c[c] ?? 0;
      return `${n ? NIV[n - 1][0] : '▫️'} ${nom}: <b>${f(v)}</b>${n < 3 ? ` / ${f(metas[n])}` : ' ✔'}`;
    }).join('<br>');
  }, 700);
})();
