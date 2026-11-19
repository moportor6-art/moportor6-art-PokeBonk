/* Subversión propia (moportor6, 1.38): registro del entrenador, solo en PokéBonk Lite.
   - Dónde aparece: en la ficha de la Pokédex, los mapas en los que el Pokémon es jefe, guardián, Dominante, invocador,
     legendario o habitual (lee la lista de mapas que pasa por PB_REGIONES.mapas).
   - Historial (Modo historia → «📜 Historial»): tus últimas 20 partidas con Pokémon, mapa, zona, tiempo, bajas, Polvo y
     de qué caíste. profile.pbHistorial.
   - Títulos (Modo historia → «🎖️ Títulos»): se ganan con logros, Maestrías, la Liga, las medallas y la Torre; el que
     elijas sale bajo tu nombre en la partida (movible en el editor del HUD). profile.pbTitulo.
   - Eficacia: los números de daño súper eficaz salen en verde y los poco eficaces en azul grisáceo (el bundle «menus» lee
     window.__pbEfSE / __pbEfNE). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const meta = () => window.__pbMeta, P = () => meta()?.profile, H = () => window.PB_HISTORIA;
  const guardar = () => { try { meta().save(); } catch {} };
  const f = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const mmss = t => `${Math.floor(t / 60)}:${String(Math.round(t) % 60).padStart(2, '0')}`;
  let NOM = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) NOM[x.id] = x.name; }).catch(() => {});
  const nom = sp => NOM[sp] ?? `#${sp}`;
  window.__pbEfSE = 0x5aff6a; window.__pbEfNE = 0x7a8aaa;

  // ================= Dónde aparece =================
  let BIOMAS = [];
  window.PB_DONDE = sp => donde(sp);
  const R = window.PB_REGIONES;
  if (R?.mapas && !R.__pbReg) {
    const m = R.mapas.bind(R);
    R.mapas = lista => { const out = m(lista); try { BIOMAS = [...lista, ...out].filter(b => b?.zones && b.name); } catch {} return out; };
    R.__pbReg = true;
  }
  const ROLES = [['legendaries', '✨ Legendario'], ['bosses', '👑 Jefe'], ['guardians', '🛡️ Guardián'], ['totems', '🔥 Dominante'], ['summoners', '📯 Invocador'], ['residents', '🏠 Habitual']];
  const donde = sp => {
    const res = {};
    for (const b of BIOMAS) for (const [k, et] of ROLES) {
      const v = b[k]; if (!Array.isArray(v)) continue;
      if (v.flat(3).includes(sp)) (res[et] ??= new Set()).add(b.name);
      if (k === 'legendaries' && b.sanctuary?.legendaries?.includes?.(sp)) (res[et] ??= new Set()).add(b.name);
    }
    return res;
  };
  setInterval(() => {
    const info = document.querySelector('.dx-info'), on = document.querySelector('.dx-tile.on img');
    if (!info || !on || !BIOMAS.length) return;
    const sp = +((on.getAttribute('src') ?? '').match(/portraits\/(\d+)\.png/)?.[1] ?? 0);
    let d = info.querySelector('.pb-donde');
    if (d?.dataset.sp === String(sp)) return;
    if (!d) { d = document.createElement('div'); d.className = 'pb-donde'; d.style.cssText = 'margin:8px 0;padding:6px 8px;border-radius:10px;background:rgba(80,200,120,.14);font:700 12px system-ui,sans-serif;line-height:1.55'; info.append(d); }
    d.dataset.sp = sp;
    const r = donde(sp), filas = Object.entries(r).map(([et, s]) => `${et}: ${[...s].join(', ')}`);
    d.innerHTML = `🗺️ Dónde aparece<br>${filas.join('<br>') || 'No es fijo en ningún mapa.'}<br><small>Además puede salir como salvaje de su tipo en cualquier mapa.</small>`;
  }, 700);

  // ================= Historial =================
  let visto = null;
  setInterval(() => {
    const run = window.__pbRun, p = P();
    if (!run || !p || run.state !== 'over' || run.mode === 'duel' || run.__pbSala || run.__pbPrueba) return;
    const Hs = p.pbHistorial ??= [];
    if (visto !== run) {
      visto = run;
      Hs.unshift({ sp: run.startSpecies, m: run.biome?.name ?? '', z: run.stage ?? 1, t: Math.round(run.time ?? 0), k: run.stats?.kills ?? 0, v: !!run.victory, sf: !!run.endless, x: run.__pbMuerte ?? '', d: Date.now(), polvo: null });
      Hs.length = Math.min(Hs.length, 20); guardar();
    }
    const e = Hs[0];
    if (e && e.polvo == null) {
      const txt = run.ui?.modalEl?.innerText ?? '', m = txt.match(/\+\s*([\d.,]+)\s*\n?\s*polvo/i);
      if (m) { e.polvo = +m[1].replace(/[.,]/g, ''); guardar(); }
    }
  }, 600);
  const historial = () => {
    const h = H(), p = P(), c = h.capa('kanto'), b = document.createElement('div'); b.className = 'hb';
    const L = p.pbHistorial ?? [];
    b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>📜 Historial (${L.length})</h2><div style="max-height:58vh;overflow:auto;display:flex;flex-direction:column;gap:5px;text-align:left">${L.map(e => `<div style="display:flex;gap:8px;align-items:center;background:rgba(255,255,255,.07);border-radius:10px;padding:5px 8px"><img src="./assets/portraits/${e.sp}.png" style="width:40px;height:40px;border-radius:8px"><div style="font-size:12px;line-height:1.45"><b>${e.sf ? '♾️ Sin fin' : e.v ? '🏆 Victoria' : '💀 Derrota'}</b> · ${h.nombrePk(e.sp)} · ${e.m} (zona ${e.z})<br>⏱️ ${mmss(e.t)} · ⚔️ ${f(e.k)} bajas${e.polvo != null ? ` · ✨ +${f(e.polvo)} Polvo` : ''} · ${new Date(e.d).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })}${!e.v && e.x ? `<br><small>${e.x}</small>` : ''}</div></div>`).join('') || '<p>Aún no hay partidas terminadas.</p>'}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = () => h.abrir();
    c.append(b);
  };

  // ================= Títulos =================
  const REG = { kanto: 'Kanto', johto: 'Johto', hoenn: 'Hoenn', sinnoh: 'Sinnoh', teselia: 'Teselia', kalos: 'Kalos', alola: 'Alola', galar: 'Galar', paldea: 'Paldea' };
  const titulos = () => {
    const p = P(), out = [['Novato', 'Para empezar']];
    for (const [r, n] of Object.entries(REG)) if ((p.pbMedallas?.[r]?.length ?? 0) >= 8) out.push([`Medallista de ${n}`, `Las 8 medallas de ${n}`]);
    for (const [r, d] of Object.entries(p.pbCampeon ?? {})) out.push([`Campeón de ${REG[r] ?? r}${d === 'dificil' ? ' ★' : ''}`, `Venciste a la Liga de ${REG[r] ?? r}`]);
    if ((p.pbTorre?.length ?? 0) > 0) out.push(['Señor de la Torre', 'Superaste la Torre de Líderes']);
    for (const [id, n, desc] of window.PB_LOGROS?.LOGROS ?? []) if (p.pbLogros?.includes(id)) out.push([n, desc]);
    for (const [sp, L] of Object.entries(p.pbLogPk ?? {})) {
      if (L.m) out.push([`Maestro de ${nom(+sp)}`, 'Maestría con este Pokémon']);
      if ((L.n?.a ?? 0) >= 3) out.push([`Cazador de Alfas (${nom(+sp)})`, '100 Alfas con este Pokémon']);
    }
    return out;
  };
  const pantallaT = () => {
    const h = H(), p = P(), c = h.capa('kanto'), b = document.createElement('div'); b.className = 'hb';
    const L = titulos(), act = p.pbTitulo ?? '';
    b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🎖️ Títulos (${L.length})</h2><p class="sub">El que elijas sale bajo tu nombre durante la partida. Se ganan con logros, Maestrías, medallas, la Liga y la Torre.</p><div style="max-height:52vh;overflow:auto;display:flex;flex-direction:column;gap:5px">${L.map(([t, d]) => `<button class="hbt tt" data-t="${t}" style="text-align:left${t === act ? ';outline:3px solid #ffd84a' : ''}">${t === act ? '✔ ' : ''}<b>${t}</b> <small>· ${d}</small></button>`).join('')}<button class="hbt tt" data-t="">Sin título</button></div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('.tt').forEach(x => x.onclick = () => { p.pbTitulo = x.dataset.t; guardar(); pantallaT(); });
    b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = () => h.abrir();
    c.append(b);
  };
  const css = document.createElement('style');
  css.textContent = `#hud .hud-tl:has(.pb-titulo){position:relative}.pb-titulo{position:absolute;left:6px;top:100%;margin-top:1px;font:900 11px system-ui,sans-serif;color:#ffd84a;text-shadow:0 1px 2px #000,0 0 3px #000;white-space:nowrap;pointer-events:none}`;
  document.head.append(css);
  setInterval(() => {
    const run = window.__pbRun, tl = document.querySelector('#hud .hud-tl'), t = P()?.pbTitulo;
    let el = document.querySelector('.pb-titulo');
    if (!run?.player || !tl || !t) { el?.remove(); return; }
    if (!el || !tl.contains(el)) { el?.remove(); el = document.createElement('span'); el.className = 'pb-titulo'; tl.append(el); }
    if (el.textContent !== `🎖️ ${t}`) el.textContent = `🎖️ ${t}`;
  }, 700);

  for (const [cls, txt, fn] of [['pb-hist-bt', '📜 Historial', historial], ['pb-tit-bt', '🎖️ Títulos', pantallaT]]) setInterval(() => {
    const fl = document.querySelector('.pb-h .pb-hoopa');
    if (!fl || fl.querySelector('.' + cls)) return;
    const bt = document.createElement('button'); bt.className = 'hbt ' + cls; bt.textContent = txt; bt.onclick = fn; fl.append(bt);
  }, 400);
})();
