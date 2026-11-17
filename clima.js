/* Subversión propia: el clima también cuenta para los salvajes, y se avisa.
   El juego ya potencia tus ataques según el clima (tipos favorecidos ×1,3, perjudicados ×0,75), pero no lo decía y a los
   salvajes no les afectaba. Aquí:
   - Al empezar cada zona con clima, un aviso dice qué tipos sube y baja.
   - Los salvajes que aparecen con ese clima pegan un 15 % más si su tipo está favorecido y un 15 % menos si está perjudicado.
   Gancho: PB_REG_E (aparición de salvajes), encadenado. */
(() => {
  const CLIMA = { // igual que el juego
    rain: { n: 'Lluvia', up: ['water', 'electric'], down: ['fire'] },
    sun: { n: 'Sol abrasador', up: ['fire', 'grass'], down: ['water'] },
    sand: { n: 'Tormenta de arena', up: ['rock', 'ground', 'steel'], down: [] },
    hail: { n: 'Granizo', up: ['ice'], down: [] },
    fog: { n: 'Niebla', up: ['ghost', 'dark'], down: [] },
    ash: { n: 'Lluvia de ceniza', up: ['fire', 'dragon'], down: ['ice'] },
  };
  const ES = { water: 'Agua', electric: 'Eléctrico', fire: 'Fuego', grass: 'Planta', rock: 'Roca', ground: 'Tierra', steel: 'Acero', ice: 'Hielo', ghost: 'Fantasma', dark: 'Siniestro', dragon: 'Dragón' };
  const lista = l => l.map(t => ES[t] ?? t).join(', ');
  const tipos = (E, i) => { try { return E.$1y70fka(i).map(t => t?.id ?? t?.key ?? t); } catch { return []; } };

  const prevE = window.PB_REG_E;
  window.PB_REG_E = (E, i, sp) => {
    try { prevE?.(E, i, sp); } catch {}
    try {
      const c = CLIMA[E.run?.weather];
      if (!c || (E.flags[i] & 65536)) return;
      const t = tipos(E, i);
      if (t.some(x => c.up.includes(x))) E.dmg[i] *= 1.15;
      else if (t.some(x => c.down.includes(x))) E.dmg[i] *= 0.85;
    } catch {}
  };

  setInterval(() => {
    const run = window.__pbRun;
    if (!run || run.state !== 'play' || (run.stageTime ?? 0) < 4) return;
    // Solo el clima propio de la zona (el que cambia un movimiento ya lo avisa el juego).
    const clave = String(run.stage);
    if (run.__pbClima === clave) return;
    run.__pbClima = clave;
    const c = CLIMA[run.baseWeather];
    if (!c) return;
    try {
      run.ui.toast(`${c.n}: ${lista(c.up)} +30 %${c.down.length ? `, ${lista(c.down)} −25 %` : ''}. A los salvajes también les afecta.`, null);
    } catch {}
  }, 1000);
})();
