/* Subversión propia: botones «PokéIsaac» y «PokéSurvivor» en la barra del menú principal, bajo Donaciones.
   Abren esos juegos (carpetas pokeisaac/ y pokesurvivor/), que tienen su propio botón para volver. */
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
    const s = document.createElement('button');
    s.type = 'button';
    s.className = 'mm-item mini pb-survivor';
    s.innerHTML = '<span class="mm-ic"><img src="pokesurvivor-icono.png" alt="" style="width:28px;height:28px;border-radius:6px"></span><span class="mm-tx"><b>PokéSurvivor</b></span>';
    s.addEventListener('click', () => { location.href = 'pokesurvivor/index.html'; });
    b.after(s);
  };
  setInterval(place, 500);
  place();
})();
