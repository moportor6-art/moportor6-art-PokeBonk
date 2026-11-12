/* Subversión propia: PokéIsaac dentro de la app de PokéBonk.
   Botón pequeño para volver al menú de PokéBonk. Hay que tocarlo dos veces para no salir sin querer. */
(() => {
  const add = () => {
    if (document.querySelector('.pb-volver')) return;
    const st = document.createElement('style');
    const pos = window.PB_VOLVER_BL ? 'left:max(4px,env(safe-area-inset-left));bottom:max(4px,env(safe-area-inset-bottom));' : window.PB_VOLVER_TOP ? 'left:max(4px,env(safe-area-inset-left));top:max(4px,env(safe-area-inset-top));' : 'left:25%;bottom:max(4px,env(safe-area-inset-bottom));';
    st.textContent = `.pb-volver{position:fixed;${pos}z-index:99999;padding:4px 8px;border-radius:8px;border:2px solid #fff;background:rgba(40,30,70,.75);color:#fff;font:700 10px system-ui,sans-serif;opacity:.7}
.pb-volver.armed{background:#c0392b;opacity:1}`;
    document.head.append(st);
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pb-volver'; b.textContent = 'Volver a PokéBonk';
    let t = 0;
    b.addEventListener('click', e => {
      e.stopPropagation();
      if (!b.classList.contains('armed')) {
        b.classList.add('armed'); b.textContent = '¿Salir? Toca otra vez';
        clearTimeout(t); t = setTimeout(() => { b.classList.remove('armed'); b.textContent = 'Volver a PokéBonk'; }, 3000);
        return;
      }
      location.href = window.PB_VOLVER_URL || '../index.html';
    });
    for (const ev of ['pointerdown', 'touchstart', 'mousedown']) b.addEventListener(ev, e => e.stopPropagation(), { passive: true });
    document.body.append(b);
  };
  if (document.body) add(); else addEventListener('DOMContentLoaded', add);
})();
