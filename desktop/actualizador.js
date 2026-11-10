// Subversión propia: actualizador de PokéBonk Remaster para Windows.
//
// El juego es la web de site/ que sirve el protocolo app://. Una actualización baja SOLO los archivos que
// cambian a %APPDATA%\PokeBonk\contenido\<versión>\ y el protocolo los sirve antes que los de la app.
// No se toca la carpeta del programa ni las partidas (localStorage/IndexedDB son de la app, no de site/).
//
// - Manifiesto: contenido.json de la release (rama/etiqueta contenido-vN), firmado con la clave que firma el
//   APK (su certificado va en clave.pem al compilar). Sin firma válida no se usa nada.
// - Módulos: cada juego de "Más juegos" y el juego principal. Solo se bajan los módulos cuyo hash cambia.
// - Cada archivo se comprueba con su SHA-256 antes de usarlo. Todo se prepara en una carpeta nueva y se cambia
//   de golpe al final (estado.json). Si el juego no arranca dos veces seguidas con la versión nueva, se vuelve
//   solo a la anterior.
// - Si cambia el programa en sí (Electron, main.js...), eso no va por archivos: se ofrece el instalador
//   completo, que se baja, se comprueba y se abre (se instala encima y conserva las partidas).
const { app, net, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const REPO = 'moportor6-art/moportor6-art-PokeBonk';
const PLAT = 'windows';
const LIMITE = 95 * 1024 * 1024; // más que esto va partido en el contenido publicado
const TROZO = 90 * 1024 * 1024;

module.exports = function crearActualizador({ siteRoot, log, emitir }) {
  const DIR = path.join(app.getPath('userData'), 'contenido');
  const EST = path.join(DIR, 'estado.json');
  let base = null;
  try { base = JSON.parse(fs.readFileSync(path.join(siteRoot, 'contenido.json'), 'utf8')); } catch {}
  let clave = null;
  try { clave = fs.readFileSync(path.join(__dirname, 'clave.pem'), 'utf8'); } catch {}

  const leerEstado = () => { try { return JSON.parse(fs.readFileSync(EST, 'utf8')); } catch { return {}; } };
  const guardarEstado = (e) => {
    fs.mkdirSync(DIR, { recursive: true });
    fs.writeFileSync(EST + '.tmp', JSON.stringify(e, null, 1));
    fs.renameSync(EST + '.tmp', EST); // cambio atómico
  };
  let est = leerEstado();

  // ---- arranque: versión de la app nueva, recuperación de una actualización que no arrancó ----
  const arranque = () => {
    if (!base) return;
    if (est.base !== base.version || est.shell !== base.shell?.[PLAT]) {
      if (est.dir) log(`[actualizador] la app cambió (${est.base} -> ${base.version}): se quita el contenido descargado`);
      try { fs.rmSync(DIR, { recursive: true, force: true }); } catch {}
      est = { base: base.version, shell: base.shell?.[PLAT], dir: null, modulos: {}, borrados: [] };
      guardarEstado(est);
      return;
    }
    if (est.pendiente) {
      est.intentos = (est.intentos || 0) + 1;
      if (est.intentos > 2) {
        log(`[actualizador] la versión ${est.version} no arrancó: se vuelve a la anterior`);
        Object.assign(est, est.anterior || { dir: null, modulos: {}, borrados: [], version: null, sub: null });
        est.anterior = null; est.pendiente = false; est.intentos = 0;
      }
      guardarEstado(est);
    }
  };
  arranque();
  const borrados = () => new Set(est.borrados || []);
  let borr = borrados();

  // El protocolo app:// pregunta aquí antes de servir un archivo de site/.
  const resolver = (rel) => {
    if (!est.dir) return null;
    if (borr.has(rel)) return { borrado: true };
    const f = path.join(DIR, est.dir, rel);
    return f.startsWith(path.join(DIR, est.dir)) && fs.existsSync(f) ? { archivo: f } : null;
  };

  const confirmar = () => {
    if (!est.pendiente) return;
    est.pendiente = false; est.intentos = 0;
    guardarEstado(est);
    // Se borran las carpetas viejas (se queda la actual y la anterior por si acaso).
    for (const d of fs.readdirSync(DIR)) {
      if (d.startsWith('v') && d !== est.dir && d !== est.anterior?.dir) try { fs.rmSync(path.join(DIR, d), { recursive: true, force: true }); } catch {}
    }
    log(`[actualizador] versión ${est.version} confirmada`);
  };

  // ---- red ----
  const bajar = async (url, tipo = 'buffer') => {
    let ultimo;
    for (let i = 0; i < 4; i++) {
      try {
        const r = await net.fetch(url, { headers: { 'User-Agent': 'PokeBonkWindows', 'Cache-Control': 'no-cache' } });
        if (r.status === 404) throw Object.assign(new Error('404 ' + url), { fatal: true });
        if (!r.ok) throw new Error(r.status + ' ' + url);
        return tipo === 'json' ? await r.json() : Buffer.from(await r.arrayBuffer());
      } catch (e) { ultimo = e; if (e.fatal) break; await new Promise(ok => setTimeout(ok, 1500 * (i + 1))); }
    }
    throw ultimo;
  };
  const sha = (buf) => crypto.createHash('sha256').update(buf).digest('hex');
  const url = (b, rel) => b + rel.split('/').map(encodeURIComponent).join('/');
  const listaActual = (m) => {
    const f = est.modulos?.[m] && est.dir ? path.join(DIR, est.dir, '_listas', m + '.json') : path.join(siteRoot, 'contenido', m + '.json');
    try { return JSON.parse(fs.readFileSync(f, 'utf8')).archivos; } catch { return {}; }
  };
  const listaBase = (m) => { try { return JSON.parse(fs.readFileSync(path.join(siteRoot, 'contenido', m + '.json'), 'utf8')).archivos; } catch { return {}; } };
  const hashActual = (m) => est.modulos?.[m] || base?.modulos?.[m]?.hash;
  const versionActual = () => est.dir ? est.version : base?.version;
  const subActual = () => est.dir ? est.sub : base?.sub;
  const cmpSub = (a, b) => { const x = String(a || '0').split('.').map(Number), y = String(b || '0').split('.').map(Number); for (let i = 0; i < Math.max(x.length, y.length); i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); } return 0; };

  let plan = null;
  let ocupado = false;

  const buscar = async () => {
    if (!base) throw new Error('Esta versión no trae datos de actualización.');
    if (!clave) throw new Error('Esta versión no puede comprobar firmas: actualiza con el instalador una vez.');
    const rel = await bajar(`https://api.github.com/repos/${REPO}/releases/latest`, 'json');
    const tag = rel.tag_name;
    const raiz = `https://raw.githubusercontent.com/${REPO}/contenido-${tag}/`;
    const datos = await bajar(raiz + 'contenido.json');
    const firma = (await bajar(raiz + 'contenido.json.sig')).toString().trim();
    if (!crypto.verify('sha256', datos, clave, Buffer.from(firma, 'base64'))) throw new Error('La firma de la actualización no es válida: no se ha instalado nada.');
    const man = JSON.parse(datos.toString('utf8'));
    const cambios = (man.cambios || []).filter(c => cmpSub(c.sub, subActual()) > 0);
    const p = { version: man.version, tag: man.tag, sub: man.sub, actual: versionActual(), subActual: subActual(), cambios, man, raiz: man.base || raiz };
    if (man.shell?.[PLAT] !== base.shell?.[PLAT]) {
      const c = man.completo?.[PLAT];
      p.completo = c ? { bytes: c.bytes } : null;
      p.motivo = 'Esta versión cambia el programa, no solo el juego: se instala completa (tus partidas se conservan).';
    } else {
      p.modulos = [];
      for (const [m, info] of Object.entries(man.modulos || {})) {
        if (info.hash === hashActual(m)) continue;
        const lista = await bajar(url(p.raiz, `contenido/${m}.json`));
        if (sha(lista) !== info.hash) throw new Error(`La lista de ${info.nombre} no coincide con el manifiesto.`);
        const nueva = JSON.parse(lista.toString('utf8')).archivos;
        const vieja = listaActual(m);
        let n = 0, bytes = 0;
        for (const [r, [tam, h]] of Object.entries(nueva)) if (!vieja[r] || vieja[r][1] !== h) { n++; bytes += tam; }
        const quitados = Object.keys(vieja).filter(r => !nueva[r]).length;
        p.modulos.push({ id: m, nombre: info.nombre, archivos: n, bytes, quitados, lista: nueva, hash: info.hash });
      }
    }
    p.hay = !!(p.completo || p.modulos?.length);
    plan = p;
    const visible = { ...p, man: undefined, modulos: p.modulos?.map(({ lista, ...r }) => r) };
    log(`[actualizador] ${p.hay ? 'hay' : 'no hay'} actualización (${tag}; tienes ${versionActual()})`);
    return visible;
  };

  const aplicar = async (ids) => {
    if (!plan?.modulos) throw new Error('Primero busca actualizaciones.');
    if (ocupado) return;
    ocupado = true;
    try {
      const elegidos = plan.modulos.filter(m => !ids?.length || ids.includes(m.id));
      const nuevoDir = `v${plan.version}-${Date.now().toString(36)}`;
      const tmp = path.join(DIR, nuevoDir + '.tmp');
      fs.rmSync(tmp, { recursive: true, force: true });
      fs.mkdirSync(path.join(tmp, '_listas'), { recursive: true });
      const viejoDir = est.dir ? path.join(DIR, est.dir) : null;
      const copiar = (rel) => {
        const o = path.join(viejoDir, rel), d = path.join(tmp, rel);
        fs.mkdirSync(path.dirname(d), { recursive: true });
        try { fs.linkSync(o, d); } catch { fs.copyFileSync(o, d); }
      };
      const modulos = { ...(est.modulos || {}) };
      const quitar = new Set();
      // Módulos que ya venían actualizados y no se tocan ahora: se pasan tal cual a la carpeta nueva.
      for (const m of Object.keys(modulos)) {
        if (elegidos.some(e => e.id === m) || !viejoDir) continue;
        const lista = listaActual(m);
        for (const r of Object.keys(lista)) if (fs.existsSync(path.join(viejoDir, r))) copiar(r);
        fs.copyFileSync(path.join(viejoDir, '_listas', m + '.json'), path.join(tmp, '_listas', m + '.json'));
        for (const r of Object.keys(listaBase(m))) if (!lista[r]) quitar.add(r);
      }
      // Qué hay que bajar de cada módulo elegido.
      const tareas = [];
      for (const m of elegidos) {
        const bas = listaBase(m.id), act = listaActual(m.id);
        for (const [r, [tam, h]] of Object.entries(m.lista)) {
          if (bas[r] && bas[r][1] === h) continue; // igual que en la app: no hace falta
          if (viejoDir && act[r] && act[r][1] === h && fs.existsSync(path.join(viejoDir, r))) { copiar(r); continue; }
          tareas.push({ r, tam, h });
        }
        for (const r of Object.keys(bas)) if (!m.lista[r]) quitar.add(r);
        fs.writeFileSync(path.join(tmp, '_listas', m.id + '.json'), JSON.stringify({ modulo: m.id, archivos: m.lista }));
        modulos[m.id] = m.hash;
      }
      const total = tareas.reduce((s, t) => s + t.tam, 0);
      let hecho = 0, nHecho = 0;
      emitir({ tipo: 'progreso', hecho, total, archivos: 0, totalArchivos: tareas.length });
      let i = 0, roto = false;
      const trabajador = async () => {
        while (i < tareas.length && !roto) {
          const t = tareas[i++];
          // GitHub no guarda archivos de más de 100 MB: esos van en trozos de 90 MB (.pbparte.00, .01...).
          let buf;
          if (t.tam > LIMITE) {
            const trozos = [];
            for (let k = 0; k * TROZO < t.tam; k++) trozos.push(await bajar(url(plan.raiz, t.r + '.pbparte.' + String(k).padStart(2, '0'))));
            buf = Buffer.concat(trozos);
          } else buf = await bajar(url(plan.raiz, t.r));
          if (sha(buf) !== t.h) throw new Error('Un archivo llegó dañado (' + t.r + '): no se ha instalado nada.');
          const d = path.join(tmp, t.r);
          fs.mkdirSync(path.dirname(d), { recursive: true });
          fs.writeFileSync(d, buf);
          hecho += t.tam; nHecho++;
          if (nHecho % 5 === 0 || nHecho === tareas.length) emitir({ tipo: 'progreso', hecho, total, archivos: nHecho, totalArchivos: tareas.length });
        }
      };
      try { await Promise.all(Array.from({ length: 6 }, trabajador)); }
      catch (e) { roto = true; setTimeout(() => fs.rmSync(tmp, { recursive: true, force: true }), 3000); throw e; }
      fs.renameSync(tmp, path.join(DIR, nuevoDir));
      const todos = Object.keys(plan.man.modulos).every(m => (modulos[m] || base.modulos?.[m]?.hash) === plan.man.modulos[m].hash);
      est = {
        ...est,
        anterior: { dir: est.dir, modulos: est.modulos || {}, borrados: est.borrados || [], version: est.version, sub: est.sub },
        dir: nuevoDir, modulos, borrados: [...quitar], pendiente: true, intentos: 0,
        version: todos ? plan.version : (est.version || base.version), sub: todos ? plan.sub : (est.sub || base.sub)
      };
      guardarEstado(est);
      borr = borrados();
      log(`[actualizador] instalada ${plan.tag}: ${tareas.length} archivos (${Math.round(total / 1024)} KB), módulos ${elegidos.map(m => m.id).join(', ')}`);
      emitir({ tipo: 'listo', archivos: tareas.length, bytes: total });
    } finally { ocupado = false; }
  };

  const completo = async () => {
    const c = plan?.man?.completo?.[PLAT];
    if (!c) throw new Error('No hay instalador para esta versión.');
    if (ocupado) return;
    ocupado = true;
    try {
      const destino = path.join(app.getPath('temp'), `PokeBonk-Instalador-${plan.tag}.exe`);
      const r = await net.fetch(c.url, { headers: { 'User-Agent': 'PokeBonkWindows' } });
      if (!r.ok) throw new Error('No se pudo bajar el instalador (' + r.status + ').');
      const h = crypto.createHash('sha256');
      const out = fs.createWriteStream(destino + '.part');
      let hecho = 0;
      const lector = r.body.getReader();
      for (;;) {
        const { done, value } = await lector.read();
        if (done) break;
        h.update(value); out.write(Buffer.from(value)); hecho += value.length;
        if (hecho % (8 << 20) < value.length) emitir({ tipo: 'progreso', hecho, total: c.bytes, archivos: 0, totalArchivos: 1 });
      }
      await new Promise(ok => out.end(ok));
      if (h.digest('hex') !== c.sha256) { fs.rmSync(destino + '.part', { force: true }); throw new Error('El instalador llegó dañado: no se ha abierto.'); }
      fs.renameSync(destino + '.part', destino);
      log(`[actualizador] instalador ${plan.tag} comprobado; se abre`);
      emitir({ tipo: 'instalador' });
      await shell.openPath(destino);
      setTimeout(() => app.quit(), 1500);
    } finally { ocupado = false; }
  };

  const estado = () => ({
    version: versionActual(), sub: subActual(), base: base?.version, actualizado: !!est.dir,
    modulos: Object.fromEntries(Object.entries(base?.modulos || {}).map(([m, v]) => [m, { nombre: v.nombre, actualizado: !!est.modulos?.[m] }])),
    puede: !!(base && clave)
  });

  // Volver a lo que trae la app (por si algo va mal).
  const restaurar = () => {
    est = { base: base?.version, shell: base?.shell?.[PLAT], dir: null, modulos: {}, borrados: [] };
    guardarEstado(est);
    borr = borrados();
    for (const d of fs.readdirSync(DIR)) if (d.startsWith('v')) try { fs.rmSync(path.join(DIR, d), { recursive: true, force: true }); } catch {}
    log('[actualizador] contenido restaurado al de la app');
  };

  return { resolver, confirmar, buscar, aplicar, completo, estado, restaurar };
};
