/* Subversión propia: guardado automático al salir de la app.
   Si sales de la app (botón de inicio, cambiar de app, apagar pantalla o cerrarla) en mitad de una partida,
   se hace lo mismo que «Guardar y salir». Al volver:
   - si la app seguía abierta, la partida se reanuda sola;
   - si la app se cerró, al abrirla sale el aviso del juego «Tienes una partida guardada» con
     Continuar / Finalizar / Más tarde.
   No se guarda en Duelos ni en Cooperativo, ni en momentos en que el juego no deja guardar
   (por ejemplo, en mitad de algunas peleas): en ese caso la partida se queda como estaba. */
(() => {
  let busy = false, resumeUntil = 0;

  const canSave = r => r && r.player && !r.player.dead && !r.duel && !r.coop &&
    ['play', 'paused', 'modal', 'cinematic', 'evolving'].includes(r.state);

  const save = async () => {
    const r = window.__pbRun;
    if (busy || !canSave(r)) return;
    try { if (r.$1tq7hbz?.()) return; } catch { return; }   // el juego dice que ahora no se puede guardar
    busy = true;
    try {
      const err = await r.$9sojcp();
      if (!err) {
        resumeUntil = Date.now() + 10 * 60 * 1000;
        try { r.ui.onSuspend?.(); } catch {}
      }
    } catch {} finally { busy = false; }
  };

  // Al volver con la app aún abierta: pulsa «Continuar» en el aviso de partida guardada.
  const resume = () => {
    if (Date.now() > resumeUntil) return;
    let tries = 0;
    const t = setInterval(() => {
      if (++tries > 40) { clearInterval(t); return; }
      const modal = [...document.querySelectorAll('.modal, .panel')].find(m => /partida guardada/i.test(m.textContent));
      if (!modal) {
        // Si aún no salió el aviso, se abre desde Jugar.
        if (tries === 6) document.querySelector('.mm-item.play')?.click();
        return;
      }
      const btn = [...modal.querySelectorAll('button')].find(b => /^\s*Continuar\s*$/i.test(b.textContent));
      if (btn) { clearInterval(t); resumeUntil = 0; btn.click(); }
    }, 250);
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') save(); else resume();
  });
  addEventListener('pagehide', save);
  window.PB_AUTOSAVE = { save, resume };
})();
