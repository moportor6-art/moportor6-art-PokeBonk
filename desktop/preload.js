// Subversión propia: puente entre el juego y la ventana de Windows. Con window.pokebonkDesktop el juego
// muestra su pestaña "Pantalla" (modo, tamaño, resolución, monitor, motor gráfico y FPS sin tope).
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('pokebonkDesktop', {
  display: () => ipcRenderer.invoke('pb-display'),
  setDisplay: (p) => ipcRenderer.invoke('pb-set-display', p),
  relaunch: () => ipcRenderer.invoke('pb-relaunch'),
  // Aviso de versión nueva (updater.js): abre la descarga del instalador en el navegador.
  openUpdate: (url) => ipcRenderer.invoke('pb-open-update', url)
});
