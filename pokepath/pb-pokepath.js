/* Subversión propia: PokéPath TD (versión de escritorio de Khydra) dentro de PokéBonk.
   La versión de escritorio usa Electron para la pantalla completa: aquí se hace con el navegador. */
window.electronAPI = window.electronAPI || {
  toggleFullscreen: () => {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    } catch (e) {}
    return Promise.resolve();
  }
};
