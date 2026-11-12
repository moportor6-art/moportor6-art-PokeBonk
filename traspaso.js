/* Subversión propia: traspaso de partida entre el móvil y el PC.
   "Exportar" guarda en un archivo .pokebonk todo lo de este dispositivo: PokéBonk y los juegos de
   Más juegos (localStorage y las bases IndexedDB, como las partidas de Godot de PokéSurvivor y Overlord).
   "Importar" lo carga en el otro equipo y reinicia el juego. Se quedan los ajustes de este dispositivo
   (gráficos, controles táctiles, posición del HUD, orientación), porque un PC y un móvil no los quieren igual.
   Android: el archivo va a Descargas/PokeBonk (AndroidMenu.saveFile / pickFile). Windows y navegador:
   descarga normal y selector de archivos. */
(() => {
  if (window.PB_TRASPASO) return;
  const FORMATO = 1;
  // Claves propias de cada dispositivo: no viajan.
  const LOCALES = /^(pb-hud-layout|pb-render-res|pb-orient|pb\.swgpu|pb-update-seen|pb\.bootRetry|pb\.seenVersion)/;
  const PERFIL = 'pb.offline.profile';

  const b64 = {
    de: (u8) => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); },
    a: (s) => { const bin = atob(s); const u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); return u8; }
  };
  const TIPOS = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array };
  // Valores de IndexedDB a JSON y vuelta (fechas, ArrayBuffer y arrays con tipo).
  const empaquetar = (v) => {
    if (v instanceof Date) return { __pb: 'date', v: v.getTime() };
    if (v instanceof ArrayBuffer) return { __pb: 'buf', v: b64.de(new Uint8Array(v)) };
    if (ArrayBuffer.isView(v)) return { __pb: 'ta', t: v.constructor.name, v: b64.de(new Uint8Array(v.buffer, v.byteOffset, v.byteLength)) };
    if (Array.isArray(v)) return v.map(empaquetar);
    if (v && typeof v === 'object') { const o = {}; for (const k in v) o[k] = empaquetar(v[k]); return o; }
    return v;
  };
  const desempaquetar = (v) => {
    if (Array.isArray(v)) return v.map(desempaquetar);
    if (v && typeof v === 'object') {
      if (v.__pb === 'date') return new Date(v.v);
      if (v.__pb === 'buf') return b64.a(v.v).buffer;
      if (v.__pb === 'ta') { const u8 = b64.a(v.v); const T = TIPOS[v.t] || Uint8Array; return new T(u8.buffer, 0, u8.byteLength / (T.BYTES_PER_ELEMENT || 1)); }
      const o = {}; for (const k in v) o[k] = desempaquetar(v[k]); return o;
    }
    return v;
  };
  const req = (r) => new Promise((ok, ko) => { r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error); });

  const leerBases = async () => {
    const out = [];
    let lista = [];
    try { lista = indexedDB.databases ? await indexedDB.databases() : []; } catch {}
    for (const { name, version } of lista) {
      if (!name) continue;
      let db;
      try { db = await req(indexedDB.open(name)); } catch { continue; }
      const stores = [];
      for (const sn of db.objectStoreNames) {
        const tx = db.transaction(sn, 'readonly');
        const st = tx.objectStore(sn);
        const indexes = [...st.indexNames].map(n => { const ix = st.index(n); return { name: n, keyPath: ix.keyPath, unique: ix.unique, multiEntry: ix.multiEntry }; });
        const [keys, values] = await Promise.all([req(st.getAllKeys()), req(st.getAll())]);
        stores.push({ name: sn, keyPath: st.keyPath, autoIncrement: st.autoIncrement, indexes, keys: empaquetar(keys), values: empaquetar(values) });
      }
      db.close();
      out.push({ name, version: version || db.version, stores });
    }
    return out;
  };

  const escribirBases = async (bases) => {
    for (const b of bases || []) {
      await new Promise((ok) => { const r = indexedDB.deleteDatabase(b.name); r.onsuccess = r.onerror = r.onblocked = () => ok(); });
      const open = indexedDB.open(b.name, b.version || 1);
      open.onupgradeneeded = () => {
        const db = open.result;
        for (const s of b.stores) {
          const st = db.createObjectStore(s.name, { keyPath: s.keyPath ?? undefined, autoIncrement: !!s.autoIncrement });
          for (const ix of s.indexes || []) st.createIndex(ix.name, ix.keyPath, { unique: !!ix.unique, multiEntry: !!ix.multiEntry });
        }
      };
      const db = await req(open);
      for (const s of b.stores) {
        if (!db.objectStoreNames.contains(s.name)) continue;
        const keys = desempaquetar(s.keys), values = desempaquetar(s.values);
        const tx = db.transaction(s.name, 'readwrite');
        const st = tx.objectStore(s.name);
        values.forEach((v, i) => { if (s.keyPath != null) st.put(v); else st.put(v, keys[i]); });
        await new Promise((ok, ko) => { tx.oncomplete = ok; tx.onerror = () => ko(tx.error); });
      }
      db.close();
    }
  };

  const comprimir = async (txt) => {
    if (typeof CompressionStream === 'undefined') return new TextEncoder().encode(txt);
    const s = new Blob([txt]).stream().pipeThrough(new CompressionStream('gzip'));
    return new Uint8Array(await new Response(s).arrayBuffer());
  };
  const descomprimir = async (u8) => {
    if (u8[0] === 0x1f && u8[1] === 0x8b) {
      const s = new Blob([u8]).stream().pipeThrough(new DecompressionStream('gzip'));
      return await new Response(s).text();
    }
    return new TextDecoder().decode(u8);
  };

  const origen = () => window.AndroidMenu ? 'Android' : window.pokebonkDesktop ? 'Windows' : 'navegador';
  const enPartida = () => { const r = window.__pbApp?.run; return !!(r && r.state !== 'over'); };

  const exportar = async () => {
    if (enPartida()) throw new Error('Termina o guarda la partida antes de exportar.');
    const ls = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (!LOCALES.test(k)) ls[k] = localStorage.getItem(k); }
    const datos = { app: 'PokeBonk Remaster', formato: FORMATO, fecha: new Date().toISOString(), origen: origen(), ls, idb: await leerBases() };
    const bytes = await comprimir(JSON.stringify(datos));
    const d = new Date();
    const nombre = `pokebonk-partida-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${String(d.getHours()).padStart(2, '0')}${String(d.getMinutes()).padStart(2, '0')}.pokebonk`;
    if (window.AndroidMenu?.saveFile) {
      const donde = await new Promise((ok) => { window.pbTraspasoGuardado = ok; window.AndroidMenu.saveFile(nombre, b64.de(bytes)); });
      if (!donde) throw new Error('No se pudo guardar el archivo.');
      return { nombre, donde, kb: Math.round(bytes.length / 1024) };
    }
    const url = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));
    const a = document.createElement('a');
    a.href = url; a.download = nombre;
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    return { nombre, donde: 'Descargas', kb: Math.round(bytes.length / 1024) };
  };

  const elegirArchivo = () => new Promise((ok) => {
    if (window.AndroidMenu?.pickFile) {
      window.pbTraspasoRecibido = (s) => ok(s ? b64.a(s) : null);
      window.AndroidMenu.pickFile();
      return;
    }
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.pokebonk,application/octet-stream';
    inp.onchange = async () => { const f = inp.files?.[0]; ok(f ? new Uint8Array(await f.arrayBuffer()) : null); };
    inp.click();
  });

  // Lee el archivo y devuelve un resumen para confirmar; aplicar() lo carga de verdad.
  const leerArchivo = async () => {
    const u8 = await elegirArchivo();
    if (!u8) return null;
    let datos;
    try { datos = JSON.parse(await descomprimir(u8)); } catch { throw new Error('Ese archivo no es una partida de PokéBonk.'); }
    if (datos?.app !== 'PokeBonk Remaster' || !datos.ls) throw new Error('Ese archivo no es una partida de PokéBonk.');
    let entrenador = '';
    try { entrenador = JSON.parse(datos.ls[PERFIL] || '{}').name || ''; } catch {}
    return { datos, resumen: { fecha: datos.fecha, origen: datos.origen, entrenador, claves: Object.keys(datos.ls).length, bases: (datos.idb || []).length } };
  };

  const aplicar = async (datos) => {
    if (enPartida()) throw new Error('Termina o guarda la partida antes de importar.');
    // Ajustes de este dispositivo: se conservan.
    const propios = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (LOCALES.test(k)) propios[k] = localStorage.getItem(k); }
    let ajustes = null;
    try { ajustes = JSON.parse(localStorage.getItem(PERFIL) || 'null')?.settings ?? null; } catch {}
    await escribirBases(datos.idb);
    // Que el juego no vuelva a guardar su perfil viejo encima mientras se recarga.
    const set = Storage.prototype.setItem;
    localStorage.clear();
    for (const [k, v] of Object.entries(datos.ls)) set.call(localStorage, k, v);
    for (const [k, v] of Object.entries(propios)) set.call(localStorage, k, v);
    if (ajustes) {
      try { const p = JSON.parse(localStorage.getItem(PERFIL)); if (p) { p.settings = ajustes; set.call(localStorage, PERFIL, JSON.stringify(p)); } } catch {}
    }
    Storage.prototype.setItem = function () {};
    Storage.prototype.removeItem = function () {};
    Storage.prototype.clear = function () {};
    location.reload();
  };

  window.PB_TRASPASO = { exportar, leerArchivo, aplicar };
})();
