/* Subversión propia: desplazamientos y detalles de las pantallas de la Liga y de elegir mapa.
   - Elegir Pokémon: la columna de la Liga (pestañas, buscador, favoritos, tipos y la lista) se desplaza entera,
     como una sola página: al bajar, la parte de arriba se va y la lista ocupa todo el panel. La lista no es
     virtual (están todas las tarjetas), así que no cambia nada más.
   - Elegir mapa: las filas de regiones (.rg-realms: Kanto, Johto... Extra) y de mapas (.rg-regions) se arrastran
     de lado con el dedo o el ratón y con la rueda (en el móvil el juego no dejaba deslizarlas), y al abrir se
     centra la región elegida.
   - Ficha de la Liga: en «Evoluciona durante la partida», icono de MEGA o DYNAMAX en las fases con megaevolución
     o forma Gigamax. */
(() => {
  const st = document.createElement('style');
  st.textContent = `.ls-roster{overflow-y:auto!important;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.ls-roster>.ls-grid{overflow:visible!important;flex:0 0 auto!important;max-height:none!important;height:auto!important;min-height:0!important}
.rg .scr-head{min-width:0!important;max-width:100%}
.rg .rg-realms{flex:1 1 auto!important;min-width:0!important;overflow-x:auto!important;overflow-y:hidden}
.rg .rg-realms>.rg-realm{flex:0 0 auto!important}
.rg-realms,.rg-regions{touch-action:none;overscroll-behavior:contain;scrollbar-width:thin}
.ls-evo-mon{position:relative;overflow:visible!important}.ls-evo-mon>img:not(.pb-evo-ic){border-radius:50%}
.ls-evo-mon .pb-evo-ic{position:absolute!important;inset:auto!important;bottom:-5px!important;width:20px!important;height:20px!important;object-fit:contain!important;border:0!important;border-radius:0!important;background:none!important;padding:0!important;filter:drop-shadow(0 1px 1px rgba(0,0,0,.6));pointer-events:none}
.ls-evo-mon .pb-evo-ic.mg{right:-6px!important}.ls-evo-mon .pb-evo-ic.dx{left:-6px!important}`;
  document.head.append(st);

  // Arrastrar para desplazar (dedo y ratón). Si se arrastra, el toque no cuenta como pulsación.
  const arrastrable = el => {
    if (el.__pbDrag) return;
    el.__pbDrag = true;
    let x0 = 0, s0 = 0, id = null, movido = false;
    el.addEventListener('pointerdown', e => { id = e.pointerId; x0 = e.clientX; s0 = el.scrollLeft; movido = false; }, true);
    el.addEventListener('pointermove', e => {
      if (e.pointerId !== id) return;
      const dx = e.clientX - x0;
      if (!movido && Math.abs(dx) > 8) { movido = true; try { el.setPointerCapture(id); } catch {} }
      if (movido) { el.scrollLeft = s0 - dx; e.preventDefault(); }
    }, true);
    const fin = e => { if (e.pointerId === id) id = null; };
    el.addEventListener('pointerup', fin, true);
    el.addEventListener('pointercancel', fin, true);
    el.addEventListener('click', e => { if (movido) { e.stopPropagation(); e.preventDefault(); movido = false; } }, true);
    el.addEventListener('wheel', e => {
      if (el.scrollWidth <= el.clientWidth || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      el.scrollLeft += e.deltaY; e.preventDefault();
    }, { passive: false });
  };

  // Iconos de mega y Gigamax en la cadena de evolución de la ficha.
  const iconos = () => {
    const M = window.PB_MEGA;
    if (!M) return;
    for (const mon of document.querySelectorAll('.ls-evo-mon')) {
      const sp = +((mon.querySelector('img')?.getAttribute('src') ?? '').match(/portraits\/(\d+)\.png/)?.[1] ?? 0);
      if (mon.dataset.pbEvo === String(sp)) continue;
      mon.dataset.pbEvo = String(sp);
      mon.querySelectorAll('.pb-evo-ic').forEach(x => x.remove());
      const pon = (cls, src, title) => { const i = document.createElement('img'); i.className = 'pb-evo-ic ' + cls; i.src = src; i.title = title; mon.append(i); };
      if (M.MEGAS[sp]) pon('mg', './assets/botones/mega.png', M.forms(sp).map(f => f.name).join(' / '));
      if (M.GMAX[sp]) pon('dx', './assets/botones/dmax.png', M.GMAX[sp].name ?? 'Gigamax');
    }
  };

  let visto = null;
  setInterval(() => {
    try {
      document.querySelectorAll('.rg-realms,.rg-regions').forEach(arrastrable);
      // Al abrir la pantalla de mapas, deja a la vista la región elegida.
      const on = document.querySelector('.rg .rg-realms .rg-realm.on');
      if (on && on !== visto) { visto = on; on.scrollIntoView({ block: 'nearest', inline: 'center' }); }
      iconos();
    } catch {}
  }, 500);
})();
