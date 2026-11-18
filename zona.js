/* Subversión propia: zonas de 15 minutos en el modo clásico (antes 10).
   - El «¡ENJAMBRE FINAL!» y el reloj de la zona pasan de 10:00 a 15:00 (menos en duelos, que siguen igual).
   - Los primeros 10 minutos conservan su guion de eventos; se añaden 5 minutos más con el suyo (cartas cada
     minuto, 2 Alfas, horda y estampida, oleada de élites, tótem, invocador y un evento), con la semilla de la partida.
   Ganchos: main-…js (enjambre final y reloj) y menus-…js (guion del director, límites de reintento y la guía). */
(() => {
  const MIN = 15;
  window.PB_ZONA = run => (run?.mode === 'duel' || run?.duel ? 600 : MIN * 60);
  // n: guion (lista de {t, kind}); run: partida; rng: el generador del director (con la semilla, igual en el cooperativo).
  window.PB_ZONA_EXTRA = (n, run, rng) => {
    const fin = window.PB_ZONA(run);
    if (fin <= 600) return;
    for (let m = 10 + rng.range(0, 0.4); m < fin / 60 - 0.4; m += rng.range(0.8, 1.2)) n.push({ t: m * 60, kind: 'card' });
    n.push({ t: 630, kind: 'alpha' }, { t: 780, kind: 'alpha' });
    n.push({ t: 660, kind: 'swarm' }, { t: 840, kind: 'stampede' });
    n.push({ t: 720, kind: 'elitewave' }, { t: 750, kind: 'totem' }, { t: 810, kind: 'summoner' });
    n.push({ t: 690, kind: 'special' }, { t: rng.range(640, 820), kind: 'event' });
    if (run.tier >= 2) n.push({ t: 870, kind: 'elitewave' });
  };
})();
