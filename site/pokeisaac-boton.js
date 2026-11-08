/* Subversión propia: botón «PokéIsaac» en la barra del menú principal, bajo Donaciones.
   Abre el minijuego PokéIsaac (carpeta pokeisaac/), que tiene su propio botón para volver. */
(() => {
  if (window.__pbIsaac) return;
  window.__pbIsaac = true;
  const place = () => {
    const small = document.querySelector('.jay-sidebar .mm-small');
    if (!small || small.querySelector('.pb-isaac')) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'mm-item mini pb-isaac';
    b.innerHTML = '<span class="mm-ic"><img src="pokeisaac/favicon.svg" alt="" style="width:28px;height:28px;image-rendering:pixelated"></span><span class="mm-tx"><b>PokéIsaac</b></span>';
    b.addEventListener('click', () => { location.href = 'pokeisaac/index.html'; });
    const after = small.querySelector('.jay-donate') || small.querySelector('.mm-item:not(.bug)');
    if (after) after.after(b); else small.append(b);
  };
  setInterval(place, 500);
  place();
})();
