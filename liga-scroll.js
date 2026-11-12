/* Subversión propia: en la pantalla de elegir Pokémon, la columna de la Liga (pestañas, buscador, favoritos,
   tipos y la lista) se desplaza entera, como una sola página: al bajar, la parte de arriba se va y la lista
   ocupa todo el panel. La lista no es virtual (están todas las tarjetas), así que no cambia nada más. */
(() => {
  const st = document.createElement('style');
  st.textContent = `.ls-roster{overflow-y:auto!important;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.ls-roster>.ls-grid{overflow:visible!important;flex:0 0 auto!important;max-height:none!important;height:auto!important;min-height:0!important}`;
  document.head.append(st);
})();
