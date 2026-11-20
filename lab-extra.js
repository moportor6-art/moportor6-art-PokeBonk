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
  // 1.59: las cajas de opciones del Laboratorio (Tienda, Naturaleza, Maldición, Teratipo, Incubadora, Automático…) se
  // juntan en un desplegable cerrado, para que la lista de mejoras se vea (antes la empujaban fuera de la pantalla).
  const cssX = document.createElement('style');
  cssX.textContent = `.pb-lab-extras{margin:4px 0 6px;border-radius:14px;background:rgba(30,24,60,.82);color:#fff;flex:0 0 auto}
.pb-lab-extras>summary{cursor:pointer;list-style:none;padding:8px 14px;font:800 14px system-ui,sans-serif;display:flex;gap:8px;align-items:center}
.pb-lab-extras>summary::-webkit-details-marker{display:none}
.pb-lab-extras>summary small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}
.pb-lab-extras>summary b{margin-left:auto;flex:none;background:#ffd84a;color:#3a2a00;border-radius:99px;padding:2px 10px;font-size:12px}
.pb-lab-extras[open]>summary b{background:#ece8f6}
.pb-lab-extras .pb-lab-in{max-height:52vh;overflow:auto;padding:0 8px 8px;display:flex;flex-direction:column;gap:6px}
.pb-lab-extras .pb-lab-oro{margin:0!important}`;
  document.head.append(cssX);
  setInterval(() => {
    const lab = document.querySelector('.screen.lab'); if (!lab) return;
    let d = lab.querySelector('.pb-lab-extras');
    if (!d) {
      const ref = lab.querySelector('.lab-wrap') ?? lab.querySelector('.it-tools'); if (!ref) return;
      d = document.createElement('details'); d.className = 'pb-lab-extras';
      d.innerHTML = '<summary>⚙️ Más opciones del Laboratorio <small style="opacity:.7;font-weight:600">Tienda, naturaleza, maldición, teratipo, incubadora, automático…</small><b>Abrir</b></summary><div class="pb-lab-in"></div>';
      d.addEventListener('toggle', () => { d.querySelector('summary b').textContent = d.open ? 'Cerrar' : 'Abrir'; });
      ref.before(d);
    }
    const dentro = d.querySelector('.pb-lab-in');
    for (const c of lab.querySelectorAll('.pb-lab-oro')) if (!dentro.contains(c)) dentro.append(c);
  }, 300);
})();
