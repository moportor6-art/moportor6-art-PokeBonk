/* Subversión propia: los Pokédólares (monedas de oro) que sobran al terminar una partida
   se guardan y se suman al empezar la siguiente.
   No se usa en Duelos ni en Cooperativo, para no dar ventaja frente a otros jugadores. */
(() => {
  const BANK = 'pb-oro-guardado';
  const PEND = 'pb-oro-en-partida';
  const num = k => { try { return Math.max(0, Math.floor(Number(localStorage.getItem(k)) || 0)); } catch { return 0; } };
  const set = (k, v) => { try { localStorage.setItem(k, String(Math.max(0, Math.floor(v || 0)))); } catch {} };
  // Si la app se cerró en mitad de una partida, el oro que se llevó vuelve a la reserva.
  const pend = num(PEND);
  if (pend > 0) { set(BANK, num(BANK) + pend); set(PEND, 0); }
  window.PB_GOLD = {
    saved: () => num(BANK),
    // Al empezar: saca todo lo guardado para usarlo en esta partida.
    take() { const b = num(BANK); set(PEND, b); set(BANK, 0); return b; },
    // Al terminar: lo que sobra queda guardado para la próxima.
    put(g) { set(BANK, g); set(PEND, 0); }
  };
})();
