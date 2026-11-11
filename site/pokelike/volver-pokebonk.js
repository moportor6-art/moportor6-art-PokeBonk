/* PokéBonk Remaster: marco común de los juegos de la Sala.
   - Al entrar: una cortina breve con la marca del Remaster, el nombre del juego y tu compañero y nivel
     de entrenador (los deja el menú en "pb-entrenador"). Se quita sola; no espera a nada del juego.
   - Botón «Remaster» para volver a la Sala. Hay que tocarlo dos veces para no salir sin querer.
   Este mismo archivo se copia a cada juego (el original es site/pokeisaac/volver-pokebonk.js). */
(() => {
  if (window.__pbMarco) return;
  window.__pbMarco = true;
  const NOMBRES = { pokeisaac: 'PokéIsaac', pokelike: 'Pokelike', pokemonsurvivors: 'Pokémon Survivors', pokesurvivor: 'PokéSurvivor',
    pokeoverlord: 'Pokémon Overlord', pokepath: /remaster\.html/.test(location.pathname) ? 'PokéBonk TD' : 'PokéPath TD', pokeplunder: 'PokéPlunder' };
  const dir = location.pathname.split('/').filter(Boolean)[0] || '';
  const juego = NOMBRES[dir] || '';
  let ent = null;
  try {
    const leer = window.__pbCrudo?.get || ((k) => localStorage.getItem(k));
    ent = JSON.parse(leer('pb-entrenador') || 'null');
  } catch {}
  const esc = (t) => String(t ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const F = '"M PLUS Rounded 1c","Nunito","Trebuchet MS",system-ui,sans-serif';

  const add = () => {
    if (document.querySelector('.pb-volver')) return;
    const st = document.createElement('style');
    const pos = window.PB_VOLVER_BL ? 'left:max(4px,env(safe-area-inset-left));bottom:max(4px,env(safe-area-inset-bottom));' : window.PB_VOLVER_TOP ? 'left:max(4px,env(safe-area-inset-left));top:max(4px,env(safe-area-inset-top));' : 'left:25%;bottom:max(4px,env(safe-area-inset-bottom));';
    st.textContent = `.pb-volver{position:fixed;${pos}z-index:99999;display:flex;align-items:center;gap:5px;padding:4px 10px 4px 6px;border-radius:99px;border:0;background:linear-gradient(#ffe43b,#ffb800);color:#2c1a4e;font:900 11px ${F};letter-spacing:.06em;box-shadow:0 2px 0 #2c1a4e;opacity:.78}
.pb-volver:before{content:"‹";font-size:16px;line-height:.8}
.pb-volver.armed{background:#ff4a6e;color:#fff;opacity:1}
.pb-cortina{position:fixed;inset:0;z-index:100000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:radial-gradient(120% 80% at 50% 0%,#3a2867,#1d1336 60%);color:#fff;font-family:${F};text-align:center;transition:opacity .45s;pointer-events:none}
.pb-cortina.fuera{opacity:0}
.pb-cortina .c-m{font-weight:900;font-size:13px;letter-spacing:.2em;color:#ffcb05}
.pb-cortina .c-j{font-weight:900;font-size:clamp(28px,7vw,44px);line-height:1.05;text-shadow:0 3px 0 #0006}
.pb-cortina .c-e{display:flex;align-items:center;gap:10px;margin-top:8px;padding:6px 16px 6px 8px;border-radius:99px;background:#ffffff1a;font-weight:800;font-size:14px}
.pb-cortina .c-e img{width:44px;height:54px;object-fit:contain;image-rendering:pixelated}
@media (prefers-reduced-motion:reduce){.pb-cortina{transition:none}}`;
    document.head.append(st);

    if (juego && !window.PB_SIN_CORTINA) {
      const c = document.createElement('div');
      c.className = 'pb-cortina';
      c.innerHTML = `<div class="c-m">POKÉBONK REMASTER</div><div class="c-j">${esc(juego)}</div>` +
        (ent ? `<div class="c-e">${ent.comp?.img && /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(ent.comp.img) ? `<img src="${ent.comp.img}" alt="">` : ''}<span>${esc(ent.nombre)} · ${esc(ent.titulo)} nivel ${+ent.nivel}</span></div>` : '');
      document.body.append(c);
      setTimeout(() => c.classList.add('fuera'), 1300);
      setTimeout(() => c.remove(), 1900);
    }

    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pb-volver'; b.textContent = 'REMASTER';
    let t = 0;
    b.addEventListener('click', e => {
      e.stopPropagation();
      if (!b.classList.contains('armed')) {
        b.classList.add('armed'); b.textContent = '¿Salir? Toca otra vez';
        clearTimeout(t); t = setTimeout(() => { b.classList.remove('armed'); b.textContent = 'REMASTER'; }, 3000);
        return;
      }
      location.href = (window.PB_VOLVER_URL || '../index.html') + '#sala';
    });
    for (const ev of ['pointerdown', 'touchstart', 'mousedown']) b.addEventListener(ev, e => e.stopPropagation(), { passive: true });
    document.body.append(b);
  };
  if (document.body) add(); else addEventListener('DOMContentLoaded', add);
})();
