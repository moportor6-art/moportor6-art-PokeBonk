/* PokéBonk TD: arranque.
   Arranca PokéPath TD tal cual (misma lógica, mismos datos, mismo guardado) y deja a mano su objeto
   principal para que la vista nueva (td.js) lea el estado y use sus mismos botones.
   No cambia nada del juego: solo guarda una referencia cuando termina de cargar. */
import { Main } from '../src/js/game/Main.js';
import { Init } from '../src/js/game/Init.js';
import { loadData } from '../src/js/file/data.js';

const cargar = Main.prototype.load;
Main.prototype.load = function (...args) {
  window.__pp = this;
  const r = cargar.apply(this, args);
  window.dispatchEvent(new Event('pp-listo'));
  return r;
};

import('./td.js');

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());
  new Init(loadData());
});
