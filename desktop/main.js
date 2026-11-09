// PokéBonk para Windows (subversión de moportor6): el mismo juego del APK dentro de Electron.
// Los archivos del juego van en la carpeta site/ y se sirven con el protocolo app:// para que
// los módulos JavaScript funcionen igual que en el móvil. Todo se juega sin conexión;
// solo PokéIsaac usa internet para sus sprites y su modo online, igual que en Android.
const { app, BrowserWindow, protocol, net, shell, Menu } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }
]);

const ROOT = path.join(__dirname, 'site');
let win = null;
let closing = false;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 450,
    backgroundColor: '#1a1630',
    title: 'PokéBonk',
    icon: path.join(__dirname, 'build', 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true, backgroundThrottling: false }
  });
  Menu.setApplicationMenu(null);
  win.loadURL('app://pokebonk/index.html');

  // F11: pantalla completa. F12: herramientas de desarrollo (por si hay que mirar un error).
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
    if (input.key === 'F12') { win.webContents.toggleDevTools(); e.preventDefault(); }
  });

  // Enlaces a otras webs (Discord, Ko-fi...) se abren en el navegador.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('app://')) { e.preventDefault(); if (/^https?:/.test(url)) shell.openExternal(url); }
  });

  // Al cerrar la ventana en mitad de una partida, se guarda (como «Guardar y salir») antes de salir.
  win.on('close', e => {
    if (closing) return;
    e.preventDefault();
    closing = true;
    const done = () => { if (win && !win.isDestroyed()) win.destroy(); };
    win.webContents.executeJavaScript('window.PB_AUTOSAVE ? window.PB_AUTOSAVE.save() : null', true)
      .catch(() => {})
      .finally(() => setTimeout(done, 1200));
    setTimeout(done, 5000);
  });
  win.on('closed', () => { win = null; });
}

// Subversión propia: si a Pokelike 2.0 le falta algún archivo, se pide a pokelike.xyz y se guarda para la próxima vez.
async function pokelikeOnline(rel) {
  const fs = require('fs');
  const cache = path.join(app.getPath('userData'), 'pokelike-cache');
  const file = path.normalize(path.join(cache, rel));
  if (!file.startsWith(cache)) return new Response('', { status: 404 });
  if (fs.existsSync(file)) return net.fetch(pathToFileURL(file).toString());
  try {
    const r = await net.fetch('https://pokelike.xyz/' + rel.split('/').map(encodeURIComponent).join('/'));
    const type = r.headers.get('content-type') || '';
    if (!r.ok || (!rel.endsWith('.html') && type.startsWith('text/html'))) return new Response('', { status: 404 });
    const buf = Buffer.from(await r.arrayBuffer());
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, buf);
    return new Response(buf, { headers: { 'content-type': type || 'application/octet-stream' } });
  } catch (e) {
    return new Response('', { status: 404 });
  }
}

app.whenReady().then(() => {
  protocol.handle('app', req => {
    let p = decodeURIComponent(new URL(req.url).pathname);
    if (p.endsWith('/')) p += 'index.html';
    const file = path.normalize(path.join(ROOT, p));
    if (!file.startsWith(ROOT)) return new Response('', { status: 404 });
    if (p.startsWith('/pokelike/') && !require('fs').existsSync(file)) return pokelikeOnline(p.slice('/pokelike/'.length));
    return net.fetch(pathToFileURL(file).toString());
  });
  createWindow();
});

app.on('window-all-closed', () => app.quit());
