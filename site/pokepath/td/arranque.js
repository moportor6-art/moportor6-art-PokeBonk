/* PokéBonk TD: arranque.
   Arranca PokéPath TD tal cual (misma lógica, mismos datos, mismo guardado) y deja a mano su objeto
   principal para que la vista nueva (td.js) lea el estado y use sus mismos botones.
   No cambia nada del juego: solo guarda una referencia cuando termina de cargar. */
import { Main } from '../src/js/game/Main.js';
import { Init } from '../src/js/game/Init.js';
import { loadData } from '../src/js/file/data.js';
import { Tower } from '../src/js/game/component/Tower.js';
import { Enemy } from '../src/js/game/component/Enemy.js';

import { soundMusic } from '../src/js/file/audio.js';
import { routeData } from '../src/js/game/data/routeData.js';

// La vista nueva (td.js) necesita las clases de torre y enemigo para dibujar sus animaciones,
// y las pistas de música y las rutas para poner la música de PokéSurvivor.
window.__tdClases = { Tower, Enemy };
window.__tdMusica = { soundMusic, routeData };

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
