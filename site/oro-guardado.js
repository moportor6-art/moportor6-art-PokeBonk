/* Subversión propia: los Pokédólares (monedas de oro) que sobran al terminar una partida se guardan.
   Desde la 0.74 el ahorro NO entra en la partida siguiente (cada partida empieza con 0 ₽): solo se gasta fuera,
   en la tienda de Megas. Lo de cada partida se va sumando a la hucha.
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
    // Al empezar: el ahorro se queda en la hucha (antes se llevaba a la partida).
    take() { return 0; },
    // Al terminar: lo que sobra de la partida se suma a la hucha.
    put(g) { set(BANK, num(BANK) + Math.max(0, Math.floor(g || 0))); set(PEND, 0); },
    // Para gastar fuera de la partida (tienda de Megas).
    set(v) { set(BANK, v); }
  };
})();
