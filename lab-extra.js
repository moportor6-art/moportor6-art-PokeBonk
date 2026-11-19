/* Subversión propia (moportor6, 1.26): mejoras nuevas del Laboratorio, solo en PokéBonk Lite.
   Se compran con Polvo Estelar para cada Pokémon, como las demás:
   - Sintonía Unown (3 niv.): los altares Unown se cargan un 15 % más rápido por nivel mientras estás dentro.
   - Imán de grietas (3 niv.): las grietas tardan un 15 % más por nivel en desbordarse.
   - Suerte de huevos (3 niv.): las bajas de la partida cuentan un 15 % más por nivel para la Incubadora.
   - Ojo de cazador (3 niv., caro): +25 % por nivel de probabilidad de variocolor.
   Ganchos: PB_LAB.defs, interactables.altarUpdate, rifts.updateEntrance (prototipos), meta.shinyRate e incubadora.js. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const DEFS = [
    { id: 'pb-unown', name: 'Sintonía Unown', desc: 'Los altares Unown se cargan un 15 % más rápido por nivel.', icon: 'card-key', max: 3, cost: n => Math.round(300 * 1.8 ** n) },
    { id: 'pb-grieta', name: 'Imán de grietas', desc: 'Las grietas tardan un 15 % más por nivel en desbordarse.', icon: 'lax-incense', max: 3, cost: n => Math.round(250 * 1.8 ** n) },
    { id: 'pb-huevo', name: 'Suerte de huevos', desc: 'Tus bajas cuentan un 15 % más por nivel para la Incubadora.', icon: 'lucky-egg', max: 3, cost: n => Math.round(200 * 1.8 ** n) },
    { id: 'pb-shiny', name: 'Ojo de cazador', desc: '+25 % por nivel de probabilidad de encontrar Pokémon variocolor.', icon: 'poke-radar', max: 3, cost: n => Math.round(1200 * 2.2 ** n) }
  ];
  const nivel = (id, run = window.__pbRun) => {
    try { const sp = run?.startSpecies ?? window.PB_LAB?.runCur; return sp == null ? 0 : window.__pbMeta?.lab?.(id, sp) ?? 0; } catch { return 0; }
  };
  window.PB_LABX = { nivel, huevo: run => 1 + 0.15 * nivel('pb-huevo', run) };
  const t = setInterval(() => {
    const L = window.PB_LAB, m = window.__pbMeta, run = window.__pbRun;
    if (L?.defs?.length && !L.__pbX) { for (const d of DEFS) if (!L.defs.some(x => x.id === d.id)) L.defs.push(d); L.__pbX = true; }
    if (m?.shinyRate && !m.__pbX) {
      const sr = m.shinyRate;
      m.shinyRate = function (...a) { return sr.apply(this, a) * (1 + 0.25 * nivel('pb-shiny')); };
      m.__pbX = true;
    }
    const I = run?.interactables && Object.getPrototypeOf(run.interactables);
    if (I?.altarUpdate && !I.__pbX) {
      const au = I.altarUpdate;
      I.altarUpdate = function (s, f, e, ...a) { const k = f < (s.r ?? 5) ? 1 + 0.15 * nivel('pb-unown', this.run) : 1; return au.call(this, s, f, e * k, ...a); };
      I.__pbX = true;
    }
    const R = run?.rifts && Object.getPrototypeOf(run.rifts);
    if (R?.updateEntrance && !R.__pbX) {
      const ue = R.updateEntrance;
      R.updateEntrance = function (e, ...a) { const r = ue.call(this, e, ...a); try { const n = nivel('pb-grieta', this.run); if (n && this.entrance) this.entrance.life += e * Math.min(0.6, 0.15 * n); } catch {} return r; };
      R.__pbX = true;
    }
  }, 400);
})();
