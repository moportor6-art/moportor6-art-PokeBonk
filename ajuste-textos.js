/* Subversión propia: que los textos quepan en sus botones.
   Algunos textos (por ejemplo «Continuar» en el botón grande, «Supervivencia» o los eventos con fechas largas)
   no cabían en el menú del port y salían cortados. Aquí se encoge la letra de cada uno, solo lo justo,
   hasta que entra en su caja. Se vuelve a medir cuando cambia el contenido o el tamaño de pantalla. */
(() => {
  // [selector, tamaño mínimo en px, ¿también comprobar el alto?]
  const TARGETS = [
    ['.jay-actions .play .mm-tx b', 14, false],
    ['.jay-actions :is(.endless,.mutation) .mm-tx b', 9, false],
    ['.jay-actions :is(.endless,.mutation) .mm-tx small', 7, false],
    ['.jay-actions .event .mm-tx b', 8, true],
    ['.jay-actions .event .mm-tx small', 7, true],
    ['.jay-actions .tasks .mm-tx b', 9, false],
    ['.jay-actions .tasks .mm-tx small', 7, false],
    ['.jay-sidebar .mm-tx b', 8, false],
    ['.jay-sidebar .mm-tx small', 7, false],
    ['.jay-companion b, .jay-companion h2, .jay-companion h3', 9, false]
  ];
  const fits = (el, box, h) => el.scrollWidth <= box.clientWidth + 1 && (!h || (box.scrollHeight <= box.clientHeight + 1 && el.scrollHeight <= el.clientHeight + 1));

  const fit = el => {
    if (!el.isConnected || !el.offsetParent) return;
    const key = el.textContent + '|' + innerWidth + 'x' + innerHeight;
    if (el.dataset.pbFit === key) return;
    el.style.removeProperty('font-size');
    el.style.removeProperty('white-space');
    el.style.removeProperty('text-overflow');
    const t = TARGETS.find(t => el.matches(t[0]));
    const min = t ? t[1] : 8, h = t ? t[2] : false;
    // La caja que manda: el texto del botón (.mm-tx) o el propio elemento.
    const box = el.closest('.mm-tx') || el.parentElement || el;
    if (getComputedStyle(el).textOverflow === 'ellipsis' || getComputedStyle(el).overflow === 'hidden') {
      el.style.setProperty('text-overflow', 'clip', 'important');
    }
    let size = parseFloat(getComputedStyle(el).fontSize) || 14;
    let n = 0;
    while (!fits(el, box, h) && size > min && n++ < 60) {
      size -= 0.5;
      el.style.setProperty('font-size', size + 'px', 'important');
    }
    el.dataset.pbFit = key;
  };

  const run = () => {
    for (const [sel] of TARGETS) for (const el of document.querySelectorAll(sel)) { try { fit(el); } catch {} }
  };
  let queued = false;
  // Como mucho dos veces por segundo, para no gastar en partida.
  const schedule = () => { if (!queued) { queued = true; setTimeout(() => requestAnimationFrame(() => { queued = false; run(); }), 400); } };
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  addEventListener('resize', () => { for (const el of document.querySelectorAll('[data-pb-fit]')) delete el.dataset.pbFit; schedule(); });
  addEventListener('pb-orientation', () => { for (const el of document.querySelectorAll('[data-pb-fit]')) delete el.dataset.pbFit; schedule(); });
  schedule();

  // Barra lateral del menú: con Donaciones, PokéIsaac y Guía ya no cabía todo. Se quita «Inicio»
  // (no hace nada: ya estás en el inicio) y los botones se reparten el alto disponible.
  const st = document.createElement('style');
  st.textContent = `
html:not(.pb-portrait) .jay-sidebar{gap:calc(6 * var(--u))!important}
html:not(.pb-portrait) .jay-sidebar .jay-home-button{display:none!important}
html:not(.pb-portrait) .jay-sidebar .jay-watermark{display:none!important}
html:not(.pb-portrait) .jay-sidebar .mm-item{height:auto!important;min-height:calc(26 * var(--u))!important;flex:1 1 0!important;max-height:calc(44 * var(--u))!important}
.jay-actions .event .mm-tx{overflow:hidden}`;
  document.head.append(st);
})();
