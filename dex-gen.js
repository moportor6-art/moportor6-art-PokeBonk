/* Subversión propia (moportor6, 1.53): Pokédex más cómoda.
   - Filtro por generación: fila «Todas · Gen 1 … Gen 9» bajo los tipos; se combina con la búsqueda, los tipos y
     Vistos/Capturados (solo esconde las casillas de otras generaciones, por su número).
   - En pantallas bajas (teléfono en horizontal): más aire en la ficha de la derecha (escaparate más bajo, ficha más
     alta, chips y estadísticas con separación) y los contadores de arriba en una sola línea más fina, para que la
     parrilla tenga más alto. */
(() => {
  const GEN = [[1, 151], [152, 251], [252, 386], [387, 493], [494, 649], [650, 721], [722, 809], [810, 905], [906, 1025]];
  let gen = 0;
  const css = document.createElement('style');
  css.textContent = `.pb-dxgen{display:flex;gap:5px;overflow-x:auto;scrollbar-width:none;padding:2px 0;flex:0 0 auto}.pb-dxgen::-webkit-scrollbar{display:none}
.pb-dxgen button{flex:1 0 auto;border:0;border-radius:99px;padding:4px 6px;font:800 11.5px system-ui,sans-serif;background:rgba(255,255,255,.08);color:#cfc8e8;cursor:pointer}
.pb-dxgen button.on{background:#ffd84a;color:#3a2a00}
.dx-grid .dx-tile.pb-gen-off{display:none!important}
/* 1.57: arreglos de la auditoría de menús. */
.mm-item.pb-hist.pb-punto::after{top:-5px!important;right:-5px!important}
.mm-item.pb-hist b{white-space:nowrap;font-size:clamp(13px,1.8vw,18px)!important;line-height:1.2!important;overflow:visible!important}
.pz .pz-hero .sm-kpi span{white-space:nowrap!important;overflow:hidden;text-overflow:ellipsis;max-width:100%;display:block}
.ev-go{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:clamp(15px,2.4vw,22px)!important}
.screen .seg{scrollbar-width:none}
@media (max-height:620px){
.dx .dx-left{gap:5px!important}
.dx .dx-stats{gap:5px!important}.dx .dx-stats .dx-chipstat{padding:1px 9px!important;min-height:0!important}
.dx .dx-stats .dx-chipstat small{font-size:9px!important}.dx .dx-stats .dx-chipstat b{font-size:13px!important}
.dx .dx-types{min-height:0}.dx .dx-types .dx-type{width:26px!important;height:26px!important}
.dx .dx-right{gap:8px!important;display:flex!important;flex-direction:column}
.dx .dx-show{flex:0 0 auto;height:140px!important;min-height:0!important}
.dx .dx-show .ls-stage{right:0!important;left:auto!important;width:55%!important}
.dx .dx-show .ls-plate{padding:4px 10px!important}.dx .dx-show .ls-plate h1{font-size:17px!important;margin:1px 0 3px!important}
.dx .dx-info{flex:1 1 auto;min-height:0;height:auto!important;padding:10px 12px!important}
.dx .dx-info>*{margin-bottom:12px!important}
.dx .dx-info .dx-entry{font-size:13px!important;line-height:1.45!important}
.dx .dx-info .row{gap:6px!important;row-gap:6px!important}
.dx .dx-info .stat-row{margin:3px 0!important}
.dx .dx-info .tag{margin-bottom:5px!important}
}`;
  document.head.append(css);
  const aplicar = grid => {
    const [a, b] = GEN[gen - 1] ?? [0, 1e9];
    for (const t of grid.querySelectorAll('.dx-tile')) {
      const n = +(t.querySelector('small')?.textContent ?? 0);
      t.classList.toggle('pb-gen-off', !!gen && (n < a || n > b));
    }
  };
  let obs = null;
  setInterval(() => {
    const left = document.querySelector('.dx .dx-left'), grid = left?.querySelector('.dx-grid'), tipos = left?.querySelector('.dx-types');
    if (!grid || !tipos) return;
    let fila = left.querySelector('.pb-dxgen');
    if (!fila) {
      fila = document.createElement('div'); fila.className = 'pb-dxgen';
      fila.innerHTML = ['Todas', ...GEN.map((_, i) => `Gen ${i + 1}`)].map((t, i) => `<button type="button" data-g="${i}"${i === gen ? ' class="on"' : ''}>${t}</button>`).join('');
      fila.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        gen = +b.dataset.g;
        fila.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
        aplicar(grid); grid.scrollTop = 0;
        // Selecciona la primera casilla visible de esa generación.
        const prim = grid.querySelector('.dx-tile:not(.pb-gen-off)'); if (gen && prim && !prim.classList.contains('on')) prim.click();
      });
      tipos.after(fila);
      obs?.disconnect();
      obs = new MutationObserver(() => aplicar(grid));
      obs.observe(grid, { childList: true });
      aplicar(grid);
    }
  }, 400);
})();

/* 1.59: aspectos en la ficha de la Pokédex. Lista los aspectos que tienes de ese Pokémon (variocolor, espectral,
   los de Tesoros, medallas, legendarios…) para equiparlos con un toque (meta.setSkin, lo mismo que el Vestidor) y un
   botón que abre el Vestidor del juego (Jugar → Vestidor) con ese Pokémon para verlos en movimiento. Los aspectos solo
   se usan con Pokémon de tu Liga. */
(() => {
  const NOMBRES = { shiny: '✨ Variocolor', classic: '✨ Variocolor clásico', spectral: '👻 Espectral', t1: '🎁 Aspecto de Tesoros', t2: '🏆 Gran premio de Tesoros', m1: '🏅 Aspecto de medalla I', m2: '🏅 Aspecto de medalla II', l1: '⭐ Aspecto legendario I', l2: '⭐ Aspecto legendario II', l3: '⭐ Aspecto legendario III' };
  const vestidor = sp => {
    document.querySelector('.screen.dx .back-btn')?.click();
    let n = 0;
    const paso = setInterval(() => {
      if (++n > 40) return clearInterval(paso);
      const tab = [...document.querySelectorAll('.ls-seg .pill')].find(b => /Vestidor/.test(b.textContent));
      if (!tab) { if (n === 3 || n === 12) [...document.querySelectorAll('.mm-play, .mm-item, button')].find(b => /^\s*Jugar/.test(b.innerText ?? ''))?.click(); return; }
      if (!tab.classList.contains('on')) { tab.click(); return; }
      const m = document.querySelector(`.wd-mon[data-id="${sp}"]`); if (m) { m.click(); clearInterval(paso); }
    }, 250);
  };
  setInterval(() => {
    const M = window.__pbMeta, info = document.querySelector('.dx-info'), on = document.querySelector('.dx-tile.on img, .dx-tile.on canvas');
    if (!M?.lookAvailable || !info) return;
    const sel = document.querySelector('.dx-tile.on small'), sp = +(sel?.textContent ?? 0); if (!sp) return;
    // El juego solo da por disponibles los aspectos de Pokémon de tu Liga: para enseñar también los ganados de otros, se
    // comprueba un momento como si estuviera en ella.
    const L = M.profile.league ?? [], liga = L.includes(sp);
    if (!liga) L.push(sp);
    let tiene = [];
    try { tiene = Object.keys(NOMBRES).filter(l => { try { return M.lookAvailable(sp, l); } catch { return false; } }); } finally { if (!liga) L.splice(L.lastIndexOf(sp), 1); }
    const actual = liga ? (M.skinFor?.(sp) ?? null) : null;
    const k = JSON.stringify([sp, tiene, actual, liga]);
    let d = info.querySelector('.pb-aspectos');
    if (d?.dataset.k === k) return;
    if (!tiene.length) { d?.remove(); return; }
    if (!d) { d = document.createElement('div'); d.className = 'pb-aspectos'; d.style.cssText = 'margin:10px 0;padding:8px 10px;border-radius:12px;background:rgba(255,120,200,.13);font:700 12px system-ui,sans-serif;line-height:1.5'; info.prepend(d); }
    d.dataset.k = k;
    const bt = (l, txt) => `<button type="button" data-l="${l ?? ''}" style="margin:3px 4px 0 0;border:0;border-radius:99px;padding:4px 10px;font:800 12px system-ui;cursor:pointer;${(actual ?? null) === l ? 'background:#3ec26a;color:#fff' : 'background:rgba(255,255,255,.85);color:#2a2340'}">${(actual ?? null) === l ? '✔ ' : ''}${txt}</button>`;
    d.innerHTML = `🎨 <b>Aspectos</b> (${tiene.length})${liga ? ' · toca uno para equiparlo' : ' · <span style="color:#ff8a8a">se usan cuando lo tengas en tu Liga</span>'}<br>${bt(null, 'Normal')}${tiene.map(l => bt(l, NOMBRES[l])).join('')}<br><button type="button" class="pb-asp-ver" style="margin-top:6px;border:0;border-radius:10px;padding:5px 12px;font:800 12px system-ui;background:#7a3fd0;color:#fff;cursor:pointer">👁️ Verlos en el Vestidor</button>`;
    d.querySelectorAll('[data-l]').forEach(b => b.onclick = e => { e.stopPropagation(); if (!liga) return; M.setSkin(sp, b.dataset.l || null); d.dataset.k = ''; });
    d.querySelector('.pb-asp-ver').onclick = e => { e.stopPropagation(); vestidor(sp); };
  }, 600);
})();
