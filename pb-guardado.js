/* Subversión propia: guardado separado para los juegos que usan el mismo nombre de guardado.
   PokéPath TD y PokéPlunder guardan los dos en localStorage con la clave "data". Dentro de PokéBonk comparten
   almacenamiento, así que uno pisaba la partida del otro. Antes de cargar el juego se define
   window.PB_GUARDADO = 'pokepath' (o 'pokeplunder') y este archivo hace que sus claves vayan con ese prefijo.
   La partida que ya hubiera en "data" se pasa al juego al que pertenece. */
(() => {
  const juego = window.PB_GUARDADO;
  if (!juego || window.__pbGuardado) return;
  window.__pbGuardado = true;
  const pre = juego + ':';
  const S = Storage.prototype;
  const get = S.getItem, set = S.setItem, del = S.removeItem, key = S.key;
  const esDe = (txt) => {
    if (!txt) return null;
    if (txt.indexOf('"teamManager"') >= 0 || txt.indexOf('"routeWaves"') >= 0) return 'pokepath';
    if (txt.indexOf('"upgrades"') >= 0 && txt.indexOf('"achievements"') >= 0) return 'pokeplunder';
    return null;
  };
  try {
    if (get.call(localStorage, pre + 'data') == null) {
      const viejo = get.call(localStorage, 'data');
      if (esDe(viejo) === juego) set.call(localStorage, pre + 'data', viejo);
    }
  } catch (e) {}
  // Acceso sin prefijo, para lo que es de todo el Remaster (la ficha del entrenador).
  window.__pbCrudo = { get: (k) => get.call(localStorage, k), set: (k, v) => set.call(localStorage, k, v) };
  const mio = (s) => s === localStorage;
  S.getItem = function (k) { return get.call(this, mio(this) ? pre + k : k); };
  S.setItem = function (k, v) { return set.call(this, mio(this) ? pre + k : k, v); };
  S.removeItem = function (k) { return del.call(this, mio(this) ? pre + k : k); };
  S.key = function (i) {
    if (!mio(this)) return key.call(this, i);
    const propias = [];
    for (let j = 0; j < this.length; j++) { const k = key.call(this, j); if (k && k.startsWith(pre)) propias.push(k.slice(pre.length)); }
    return propias[i] ?? null;
  };
})();
