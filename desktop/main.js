// PokéBonk para Windows (subversión de moportor6): el mismo juego del APK dentro de Electron.
// Los archivos del juego van en la carpeta site/ y se sirven con el protocolo app:// para que
// los módulos JavaScript funcionen igual que en el móvil. Todo se juega sin conexión;
// solo PokéIsaac usa internet para sus sprites y su modo online, igual que en Android.
const { app, BrowserWindow, protocol, net, shell, Menu, ipcMain, screen } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

// ---------------------------------------------------------------------------------------------
// Subversión propia: ajustes de pantalla para PC (pestaña "Pantalla" del juego).
// El juego trae esa pestaña para su versión de escritorio oficial: aparece cuando existe
// window.pokebonkDesktop (lo da preload.js). Aquí se guardan modo, tamaño, monitor, motor gráfico
// (Direct3D 11, OpenGL o Vulkan) y "FPS sin tope" (sin V-Sync: necesario para AFMF 2 de AMD).
// ---------------------------------------------------------------------------------------------
const CFG_FILE = path.join(app.getPath('userData'), 'pantalla.json');
const DEF = { mode: 'window', size: 'max', monitor: 0, angle: 'auto', fpsFree: false };
function readCfg() {
  try { return Object.assign({}, DEF, JSON.parse(fs.readFileSync(CFG_FILE, 'utf8'))); } catch (e) { return Object.assign({}, DEF); }
}
function writeCfg() {
  try { fs.mkdirSync(path.dirname(CFG_FILE), { recursive: true }); fs.writeFileSync(CFG_FILE, JSON.stringify(cfg, null, 1)); } catch (e) {}
}
let cfg = readCfg();
// Lo que solo cambia al reiniciar: con qué valores arrancó esta sesión.
const boot = { angle: cfg.angle, fpsFree: !!cfg.fpsFree };

// La gráfica potente siempre (portátiles con dos gráficas) y todo lo que se pueda por GPU.
app.commandLine.appendSwitch('force_high_performance_gpu');
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-zero-copy');
if (['d3d11', 'gl', 'vulkan'].includes(boot.angle)) app.commandLine.appendSwitch('use-angle', boot.angle);
if (boot.fpsFree) {
  app.commandLine.appendSwitch('disable-gpu-vsync');
  app.commandLine.appendSwitch('disable-frame-rate-limit');
}

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }
]);

const ROOT = path.join(__dirname, 'site');
let win = null;
let closing = false;

function displays() {
  const all = screen.getAllDisplays();
  const prim = screen.getPrimaryDisplay().id;
  return all.map(d => ({ d, primary: d.id === prim }));
}
function targetDisplay() {
  const all = displays();
  return (all[cfg.monitor] || all.find(x => x.primary) || all[0]).d;
}
const SIZES = ['1280x720', '1600x900', '1920x1080', '2560x1440', '3200x1800', '3840x2160'];
function fitSizes() {
  const wa = targetDisplay().workAreaSize;
  return SIZES.filter(s => { const [w, h] = s.split('x').map(Number); return w <= wa.width && h <= wa.height; });
}
function applyWindow() {
  if (!win || win.isDestroyed()) return;
  const d = targetDisplay();
  if (cfg.mode === 'fullscreen') {
    if (win.isFullScreen()) win.setFullScreen(false);
    win.setBounds(d.bounds);
    win.setFullScreen(true);
    return;
  }
  if (win.isFullScreen()) win.setFullScreen(false);
  if (cfg.size === 'max' || !fitSizes().includes(cfg.size)) {
    win.setBounds(d.workArea);
    win.maximize();
  } else {
    if (win.isMaximized()) win.unmaximize();
    const [w, h] = cfg.size.split('x').map(Number);
    win.setContentSize(w, h);
    const b = win.getBounds();
    win.setPosition(Math.round(d.workArea.x + (d.workArea.width - b.width) / 2), Math.round(d.workArea.y + (d.workArea.height - b.height) / 2));
  }
}
function displayInfo() {
  return {
    mode: win && win.isFullScreen() ? 'fullscreen' : 'window',
    size: cfg.size,
    sizes: fitSizes(),
    monitors: displays().map(({ d, primary }) => ({ label: d.label || (d.size.width + '×' + d.size.height), primary })),
    monitor: Math.min(cfg.monitor, displays().length - 1),
    angles: process.platform === 'win32' ? ['auto', 'd3d11', 'gl', 'vulkan'] : ['auto', 'gl', 'vulkan'],
    angle: boot.angle,
    angleNext: cfg.angle,
    // El juego activa el V-Sync al arrancar si vsyncNext no está: se dice que sí y "FPS sin tope" va aparte.
    vsync: true,
    vsyncNext: true,
    fpsFree: boot.fpsFree,
    fpsFreeNext: !!cfg.fpsFree
  };
}
ipcMain.handle('pb-display', () => displayInfo());
ipcMain.handle('pb-set-display', (e, p) => {
  p = p || {};
  if (p.mode === 'fullscreen' || p.mode === 'window') cfg.mode = p.mode;
  if (typeof p.size === 'string') cfg.size = p.size;
  if (Number.isInteger(p.monitor)) cfg.monitor = p.monitor;
  if (typeof p.angle === 'string') cfg.angle = p.angle;
  if (typeof p.fpsFree === 'boolean') cfg.fpsFree = p.fpsFree;
  writeCfg();
  if ('mode' in p || 'size' in p || 'monitor' in p) applyWindow();
  return new Promise(r => setTimeout(() => r(displayInfo()), 250));
});
ipcMain.handle('pb-relaunch', () => {
  app.relaunch();
  if (win && !win.isDestroyed()) win.close(); else app.quit();
});

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    show: false,
    minWidth: 800,
    minHeight: 450,
    backgroundColor: '#1a1630',
    title: 'PokéBonk Remaster',
    icon: path.join(__dirname, 'build', 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true, backgroundThrottling: false, preload: path.join(__dirname, 'preload.js') }
  });
  Menu.setApplicationMenu(null);
  applyWindow();
  win.show();
  win.on('enter-full-screen', () => { if (cfg.mode !== 'fullscreen') { cfg.mode = 'fullscreen'; writeCfg(); } });
  win.on('leave-full-screen', () => { if (cfg.mode !== 'window') { cfg.mode = 'window'; writeCfg(); } });
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
