/* Subversión propia: PokéBonk Remaster.
   - Marca: "Remaster" bajo el logo y en el título de la ventana.
   - Botón "Remaster" en la barra del menú con tres secciones:
     1) Pasaporte de entrenador: lee el progreso guardado de los otros juegos (Más juegos) y da
        insignias. Cada insignia da Polvo Estelar en PokéBonk una sola vez.
     2) Desafío del Alfa: reto semanal con reglas fijas (Pokémon, mapa y dificultad), récord de la
        semana y premios una vez por semana.
     3) Tour de bienvenida: sale solo la primera vez y se puede repetir desde aquí.
   Todo se guarda en este dispositivo (localStorage 'pb-remaster'). El Polvo se suma al perfil del
   juego (meta.profile.stardust) y se guarda con meta.save(). */
(() => {
  if (window.__pbRemaster) return;
  window.__pbRemaster = true;

  const KEY = 'pb-remaster';
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const st = load();
  st.badges = st.badges || {};
  st.weeks = st.weeks || {};
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch {} };

  const meta = () => window.__pbMeta;
  const app = () => window.__pbApp;
  const inRun = () => { const r = app()?.run; return !!(r && r.state !== 'over'); };
  const notice = (m) => { try { app()?.notice(m); } catch {} };
  const fmt = (n) => Math.round(n).toLocaleString('es-ES');

  // Suma Polvo Estelar al perfil. Devuelve false si no se puede ahora (sin perfil o en partida).
  const giveDust = (n) => {
    const m = meta();
    if (!m?.profile || inRun()) return false;
    m.profile.stardust = (m.profile.stardust || 0) + n;
    m.profile.totalStardust = (m.profile.totalStardust || 0) + n;
    try { m.save(); } catch {}
    return true;
  };

  // ---------- Lectura de los otros juegos ----------
  const raw = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const json = (k) => { try { const v = raw(k); return v == null ? null : JSON.parse(v); } catch { return null; } };
  const num = (v) => {
    if (v == null) return 0;
    if (typeof v === 'number') return v;
    if (Array.isArray(v)) return v.length;
    if (typeof v === 'object') return Object.keys(v).length;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };
  // PokéPath y PokéPlunder usaban la misma clave "data". Ahora van con prefijo (pb-guardado.js),
  // pero si aún no se han abierto desde ese cambio, se mira la clave antigua por su contenido.
  const viejo = json('data');
  const esPath = (d) => d && JSON.stringify(d).includes('"teamManager"');
  const esPlunder = (d) => d && d.profile && d.profile.upgrades && d.profile.achievements;

  // Partidas de Godot (PokéSurvivor y Pokémon Overlord): IndexedDB "/userfs", almacén FILE_DATA.
  const leerGodot = (ruta) => new Promise((res) => {
    try {
      const rq = indexedDB.open('/userfs');
      rq.onerror = () => res(null);
      rq.onupgradeneeded = () => { try { rq.transaction.abort(); } catch {} res(null); };
      rq.onsuccess = () => {
        const db = rq.result;
        try {
          const g = db.transaction('FILE_DATA', 'readonly').objectStore('FILE_DATA').get('/userfs/godot/app_userdata/' + ruta);
          g.onsuccess = () => { const v = g.result; db.close(); res(v && v.contents ? new Uint8Array(v.contents.buffer, v.contents.byteOffset, v.contents.byteLength) : null); };
          g.onerror = () => { db.close(); res(null); };
        } catch { db.close(); res(null); }
      };
    } catch { res(null); }
  });
  // Lee JSON o el formato binario de Godot 4 (FileAccess.store_var): diccionarios, listas, textos y números.
  const godotVar = (u8) => {
    const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    let o = 0;
    const str = () => { const n = dv.getUint32(o, true); o += 4; const s = new TextDecoder().decode(u8.subarray(o, o + n)); o += n + ((4 - n % 4) % 4); return s; };
    const val = () => {
      const h = dv.getUint32(o, true); o += 4;
      const type = h & 0xff, wide = h & (1 << 16);
      switch (type) {
        case 0: return null;
        case 1: { const v = dv.getUint32(o, true); o += 4; return !!v; }
        case 2: { if (wide) { const v = Number(dv.getBigInt64(o, true)); o += 8; return v; } const v = dv.getInt32(o, true); o += 4; return v; }
        case 3: { if (wide) { const v = dv.getFloat64(o, true); o += 8; return v; } const v = dv.getFloat32(o, true); o += 4; return v; }
        case 4: case 21: case 22: return str(); // String, StringName, NodePath (aprox.)
        case 27: { const n = dv.getUint32(o, true) & 0x7fffffff; o += 4; const r = {}; for (let i = 0; i < n; i++) { const k = val(); r[String(k)] = val(); } return r; }
        case 28: { const n = dv.getUint32(o, true) & 0x7fffffff; o += 4; const r = []; for (let i = 0; i < n; i++) r.push(val()); return r; }
        case 30: case 31: case 32: case 33: case 34: { // arrays empaquetados de números: se cuentan
          const n = dv.getUint32(o, true); o += 4; const sz = { 30: 4, 31: 8, 32: 4, 33: 8 }[type] || 1; o += n * sz; o += (4 - (n * sz) % 4) % 4; return new Array(n).fill(0);
        }
        case 35: { const n = dv.getUint32(o, true); o += 4; const r = []; for (let i = 0; i < n; i++) r.push(str()); return r; }
        default: throw new Error('tipo ' + type);
      }
    };
    return val();
  };
  const leerPartida = (u8) => {
    if (!u8 || !u8.length) return null;
    try { return JSON.parse(new TextDecoder().decode(u8)); } catch {}
    for (const ini of [4, 0]) { try { const dv = new DataView(u8.buffer, u8.byteOffset + ini); const v = godotVar(new Uint8Array(u8.buffer, u8.byteOffset + ini, u8.byteLength - ini)); if (v && typeof v === 'object') return v; void dv; } catch {} }
    return null;
  };

  const leer = async () => {
    const isaac = json('pokeisaac.save.v1') || {};
    const ps = json('ps:save') || {};
    const life = ps.achievements?.lifetime || ps.lifetime || {};
    const path = json('pokepath:data') || (esPath(viejo) ? viejo : {});
    const pathPl = path.save?.player || {};
    const plunder = json('pokeplunder:data') || (esPlunder(viejo) ? viejo : {});
    const plSt = plunder.profile?.stats || {};
    const svDb = leerPartida(await leerGodot('Pokémon Survivors/save.json')) || {};
    const sv = svDb.stats || svDb;
    const ovBytes = await leerGodot('PokemonOverlord/pokemon_overlord.save');
    const ov = leerPartida(ovBytes);
    const busca = (obj, k) => { if (!obj || typeof obj !== 'object') return undefined; if (k in obj) return obj[k]; for (const v of Object.values(obj)) { const r = busca(v, k); if (r !== undefined) return r; } return undefined; };
    const decks = busca(ov, 'decks_cleared');
    const cuenta = (v) => v == null ? 0 : typeof v === 'object' ? Object.values(v).filter(x => x && x !== 0).length : num(v);
    const pf = meta()?.profile || {};
    return {
      bonk: { runs: num(pf.runs), kills: num(pf.kills), capt: num(pf.captured) },
      isaac: { runs: num(isaac.runs), wins: num(isaac.wins), floor: num(isaac.bestFloor) },
      survivors: { runs: num(life.runs), wins: num(life.wins), time: num(life.bestTime), level: num(life.bestLevel) },
      survivor: { runs: num(sv.runs), kills: num(sv.kills), bosses: num(sv.bosses), level: num(sv.best_level) },
      pokelike: { elite: num(json('poke_elite_wins') ?? raw('poke_elite_wins')), dex: num(json('poke_dex')), hall: num(json('poke_hall_of_fame')) },
      pokepath: { waves: num(pathPl.stats?.wavesCompleted), defeated: num(pathPl.stats?.defeatedEnemies), stars: num(pathPl.stars), owned: num(pathPl.stats?.pokemonOwned),
        rutas: (Array.isArray(pathPl.records) ? pathPl.records : []).filter(w => num(w) >= 100).length, mejor: Math.max(0, ...(Array.isArray(pathPl.records) ? pathPl.records.map(num) : [0])) },
      plunder: { wins: num(plSt[0]), battles: num(plSt[1]), points: num(plunder.profile?.points) },
      overlord: { hay: !!ovBytes, legible: !!ov, lideres: cuenta(decks), mewtwo: !!busca(ov, 'mewtwo_cleared') },
      reg: datosRegiones(pf)
    };
  };

  // Insignias: juego, id, nombre, condición, texto de la meta, Polvo
  const INSIGNIAS = [
    ['PokéIsaac', 'isaac1', 'Primera mazmorra', (d) => d.isaac.runs >= 1, 'Juega 1 partida', 150],
    ['PokéIsaac', 'isaac5', 'Explorador profundo', (d) => d.isaac.floor >= 5, 'Llega al piso 5', 300],
    ['PokéIsaac', 'isaacw', 'Conquistador', (d) => d.isaac.wins >= 1, 'Gana 1 partida', 500],
    ['Pokémon Survivors', 'ps1', 'Superviviente novato', (d) => d.survivors.runs >= 1, 'Juega 1 partida', 150],
    ['Pokémon Survivors', 'ps10', 'Diez minutos', (d) => d.survivors.time >= 600, 'Aguanta 10 minutos', 300],
    ['Pokémon Survivors', 'psw', 'Mewtwo vencido', (d) => d.survivors.wins >= 1, 'Vence a Mewtwo', 500],
    ['PokéSurvivor', 'sv1', 'Primera oleada', (d) => d.survivor.runs >= 1, 'Juega 1 partida', 150],
    ['PokéSurvivor', 'svb', 'Cazajefes', (d) => d.survivor.bosses >= 1, 'Vence a 1 jefe', 300],
    ['PokéSurvivor', 'svk', 'Mil bajas', (d) => d.survivor.kills >= 1000, 'Derrota 1.000 enemigos', 300],
    ['Pokelike', 'pl50', 'Investigador', (d) => d.pokelike.dex >= 50, '50 Pokémon en la Pokédex', 250],
    ['Pokelike', 'plw', 'Campeón de la Liga', (d) => d.pokelike.elite >= 1 || d.pokelike.hall >= 1, 'Gana a la Liga', 500],
    // PokéBonk TD usa la partida de PokéPath TD (pokepath:data).
    ['PokéBonk TD', 'pp10', 'Defensor', (d) => d.pokepath.waves >= 10, 'Supera 10 oleadas', 150],
    ['PokéBonk TD', 'pp100', 'Muralla', (d) => d.pokepath.waves >= 100, 'Supera 100 oleadas', 400],
    ['PokéBonk TD', 'pp20', 'Entrenador de torres', (d) => d.pokepath.owned >= 20, 'Consigue 20 Pokémon', 250],
    ['PokéBonk TD', 'pprt', 'Ruta despejada', (d) => d.pokepath.rutas >= 1, 'Llega a la oleada 100 de una ruta', 400],
    ['PokéBonk TD', 'pp5r', 'Guardián de la región', (d) => d.pokepath.rutas >= 5, 'Llega a la oleada 100 en 5 rutas', 600],
    ['PokéBonk TD', 'pp500', 'Coleccionista de estrellas', (d) => d.pokepath.stars >= 500, 'Consigue 500 estrellas', 300],
    ['Pokémon Overlord', 'ov1', 'Primer líder', (d) => d.overlord.lideres >= 1, 'Vence a 1 líder o rival', 150],
    ['Pokémon Overlord', 'ov8', 'Ocho medallas', (d) => d.overlord.lideres >= 8, 'Vence a 8 líderes o rivales', 300],
    ['Pokémon Overlord', 'ovm', 'Cara a cara con Mewtwo', (d) => d.overlord.mewtwo, 'Vence a Mewtwo', 500],
    ['PokéPlunder', 'pd10', 'Saqueador', (d) => d.plunder.battles >= 10, 'Gana 10 combates', 150],
    ['PokéPlunder', 'pdw', 'Botín completo', (d) => d.plunder.wins >= 1, 'Gana 1 partida', 500]
  ];
  // PokéBonk Lite (edicion.js): sin los otros juegos, sus insignias no se pueden conseguir.
  if (window.PB_EDICION === 'lite') {
    const fuera = new Set(['Pokelike', 'PokéBonk TD', 'PokéIsaac', 'PokéPlunder', 'PokéSurvivor', 'Pokémon Overlord', 'Pokémon Survivors']);
    for (let i = INSIGNIAS.length - 1; i >= 0; i--) if (fuera.has(INSIGNIAS[i][0])) INSIGNIAS.splice(i, 1);
  }
  // Insignias de las regiones nuevas y de los Retos (PokéBonk). Llevan 'region' al final: no cuentan para el
  // Maestro (que pide insignias de juegos distintos). «Campeón de X» además se enseña como título.
  function datosRegiones(pf) {
    const out = {}, liga = new Set(pf.league || []), c = pf.counters || {}, b = pf.biomes || {};
    // Kanto y Johto (las del juego original): solo cuenta su Liga (0.76).
    for (const [id, a, z] of [['kanto', 1, 151], ['johto', 152, 251]]) {
      let n = 0;
      for (let i = a; i <= z; i++) if (liga.has(i)) n++;
      out[id] = { liga: n, ligaT: z - a + 1 };
    }
    for (const r of window.PB_REGIONES?.lista ?? []) {
      const ids = r.liga.map(e => e.id), ley = r.liga.filter(e => e.rank === 'legendary').map(e => e.id);
      out[r.id] = {
        runs: num(c[r.contadores.runs]),
        mapas: r.mapas.filter(m => num(b[m.id]) >= 1).length, mapasT: r.mapas.length,
        liga: ids.filter(i => liga.has(i)).length, ligaT: ids.length,
        ley: ley.filter(i => liga.has(i)).length, leyT: ley.length,
        tier: Object.fromEntries(r.mapas.map(m => [m.id, num(b[m.id])]))
      };
    }
    return out;
  }
  for (const r of window.PB_REGIONES?.lista ?? []) {
    const g = 'Regiones · ' + r.name, x = (d) => d.reg?.[r.id] ?? {};
    if (r.especial) {
      for (const m of r.mapas) {
        INSIGNIAS.push([g, m.id + '-1', 'Escalador: ' + m.name, (d) => (x(d).tier?.[m.id] ?? 0) >= 1, 'Completa ' + m.name, 800, 'region']);
        INSIGNIAS.push([g, m.id + '-3', 'Leyenda: ' + m.name, (d) => (x(d).tier?.[m.id] ?? 0) >= 3, 'Completa ' + m.name + ' en Pesadilla', 1500, 'region']);
      }
      continue;
    }
    const nl = r.liga.length, ny = r.liga.filter(e => e.rank === 'legendary').length;
    INSIGNIAS.push([g, r.id + '-1', 'Viajero de ' + r.name, (d) => x(d).runs >= 1, 'Juega 1 partida en un mapa de ' + r.name, 200, 'region']);
    INSIGNIAS.push([g, r.id + '-m', 'Conquistador de ' + r.name, (d) => x(d).mapas >= x(d).mapasT && x(d).mapasT > 0, 'Completa sus ' + r.mapas.length + ' mapas', 500, 'region']);
    if (ny) INSIGNIAS.push([g, r.id + '-l', 'Señor de las leyendas de ' + r.name, (d) => x(d).ley >= ny, 'Ten en tu Liga a sus ' + ny + ' legendarios y singulares', 700, 'region']);
    INSIGNIAS.push([g, r.id + '-h', 'Explorador de ' + r.name, (d) => x(d).liga >= Math.ceil(nl / 2), 'Ten en tu Liga a la mitad de su Pokédex: ' + Math.ceil(nl / 2) + ' miembros', 400, 'region']);
    INSIGNIAS.push([g, r.id + '-c', 'Campeón de ' + r.name, (d) => x(d).liga >= nl, 'Completa su Liga: ' + nl + ' miembros (da el título)', 1000, 'region']);
  }
  // Pokédex de Kanto y Johto (0.76): mitad y completa, con título como las demás.
  for (const [id, name, n] of [['kanto', 'Kanto', 151], ['johto', 'Johto', 100]]) {
    const g = 'Regiones · ' + name, x = (d) => d.reg?.[id] ?? {};
    INSIGNIAS.push([g, id + '-h', 'Explorador de ' + name, (d) => x(d).liga >= Math.ceil(n / 2), 'Ten en tu Liga a la mitad de su Pokédex: ' + Math.ceil(n / 2) + ' miembros', 400, 'region']);
    INSIGNIAS.push([g, id + '-c', 'Campeón de ' + name, (d) => x(d).liga >= n, 'Completa su Liga: ' + n + ' miembros (da el título)', 1000, 'region']);
  }
  // Progreso para enseñar junto a la insignia (p. ej. «12/82»).
  const progreso = (id, d) => {
    const [rid, k] = id.split('-'), x = d?.reg?.[rid];
    if (!x) return '';
    if (k === 'm') return ` (${x.mapas}/${x.mapasT})`;
    if (k === 'l') return ` (${x.ley}/${x.leyT})`;
    if (k === 'c') return ` (${x.liga}/${x.ligaT})`;
    if (k === 'h') return ` (${Math.min(x.liga, Math.ceil(x.ligaT / 2))}/${Math.ceil(x.ligaT / 2)})`;
    return '';
  };
  const JUEGOS_P = [...new Set(INSIGNIAS.map(i => i[0]))];
  const MAESTRO = { id: 'maestro', name: 'Maestro de PokéBonk Remaster', need: 5, dust: 1500 };
  if (window.PB_EDICION === 'lite') MAESTRO.need = 1; // en la Lite solo hay un juego
  const juegosConInsignia = () => new Set(INSIGNIAS.filter(i => !i[6] && st.badges[i[1]]).map(i => i[0])).size;


  // ---------- Entrenador único ----------
  // Un solo nivel de entrenador para todo el Remaster: sube con lo que juegas en cualquier juego
  // (se calcula de sus partidas guardadas) y con las insignias. Cada nivel nuevo da Polvo Estelar.
  const TITULOS = [[30, 'Maestro'], [20, 'Élite'], [15, 'Veterano'], [10, 'Experto'], [6, 'Entrenador'], [3, 'Explorador'], [1, 'Novato']];
  const xpDe = (d) => Math.floor(
    Object.keys(st.badges).length * 120 +
    d.bonk.runs * 12 + d.bonk.capt * 3 +
    d.isaac.runs * 15 + d.isaac.floor * 10 + d.isaac.wins * 150 +
    d.survivors.runs * 15 + Math.min(d.survivors.time, 900) / 6 + d.survivors.wins * 150 +
    d.survivor.runs * 15 + d.survivor.bosses * 40 + Math.min(d.survivor.kills, 20000) / 20 +
    d.pokelike.dex * 4 + (d.pokelike.elite + d.pokelike.hall) * 150 +
    d.pokepath.waves * 2 + d.pokepath.rutas * 200 + d.pokepath.owned * 5 +
    d.plunder.battles * 6 + d.plunder.wins * 150 +
    d.overlord.lideres * 60 + (d.overlord.mewtwo ? 300 : 0) +
    Object.values(st.weeks).reduce((a, w) => a + Math.min(300, (w.best || 0) / 20), 0));
  const XP_NIVEL = (n) => 150 * (n - 1) * (n - 1);
  const entrenador = (d) => {
    const xp = xpDe(d), nivel = Math.floor(Math.sqrt(xp / 150)) + 1;
    const a = XP_NIVEL(nivel), b = XP_NIVEL(nivel + 1);
    let comp = null;
    try { comp = JSON.parse(document.querySelector('.jay-companion')?.dataset.snapshot || 'null'); } catch {}
    if (comp) {
      // El dibujo del compañero tal como lo pinta el menú (sirve para la ficha y para los otros juegos).
      let img = st.comp?.id === comp.id ? st.comp.img : null;
      const cv = document.querySelector('.jay-companion-sprite');
      if (cv && (!img || st.comp?.f !== cv.width + 'x' + cv.height)) {
        try {
          const c = document.createElement('canvas'); c.width = cv.width; c.height = cv.height;
          c.getContext('2d').drawImage(cv, 0, 0);
          const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
          if (d.some((v, i) => i % 4 === 3 && v)) img = c.toDataURL('image/png');
        } catch {}
      }
      st.comp = { id: comp.id, name: comp.name, img, f: cv ? cv.width + 'x' + cv.height : '' };
    }
    // Título de la última Liga regional completada (insignia «Campeón de X»), si hay.
    const camp = INSIGNIAS.filter(i => i[6] && i[1].endsWith('-c') && st.badges[i[1]]).sort((p, q) => st.badges[q[1]] - st.badges[p[1]])[0];
    return { xp, nivel, titulo: TITULOS.find(t => nivel >= t[0])[1] + (camp ? ' · ' + camp[2] : ''), pct: Math.max(0, Math.min(1, (xp - a) / (b - a))), falta: b - xp,
      nombre: meta()?.profile?.name || 'Entrenador', comp: st.comp || null };
  };
  // Cobra los niveles nuevos y deja la ficha a mano para los otros juegos (pb-entrenador).
  const subirNivel = (d) => {
    const e = entrenador(d), subidas = [];
    if (!st.nivel) st.nivel = 1;
    while (st.nivel < e.nivel) {
      if (!giveDust(100 * (st.nivel + 1))) break;
      st.nivel++; subidas.push(['Nivel de entrenador ' + st.nivel, 100 * st.nivel]);
    }
    try { localStorage.setItem('pb-entrenador', JSON.stringify({ nombre: e.nombre, nivel: e.nivel, titulo: e.titulo, comp: e.comp && { id: e.comp.id, name: e.comp.name, img: e.comp.img } })); } catch {}
    return subidas;
  };

  // ---------- Juego de la semana ----------
  // Cada semana toca un juego distinto de la Sala. Cuenta lo que avances en él desde que empieza la semana.
  const RETOS = [
    { g: 'pokebonk-td', n: 'PokéBonk TD', m: (d) => d.pokepath.waves, u: 'oleadas superadas', metas: [20, 60, 150] },
    { g: 'pokeisaac', n: 'PokéIsaac', m: (d) => d.isaac.runs, u: 'partidas', metas: [1, 3, 6] },
    { g: 'pokemonsurvivors', n: 'Pokémon Survivors', m: (d) => d.survivors.runs, u: 'partidas', metas: [1, 3, 6] },
    { g: 'pokesurvivor', n: 'PokéSurvivor', m: (d) => d.survivor.kills, u: 'enemigos derrotados', metas: [300, 1000, 2500] },
    { g: 'pokeplunder', n: 'PokéPlunder', m: (d) => d.plunder.battles, u: 'combates ganados', metas: [3, 8, 15] },
    { g: 'pokeoverlord', n: 'Pokémon Overlord', m: (d) => d.overlord.lideres, u: 'líderes vencidos', metas: [1, 2, 4] },
    { g: 'pokelike', n: 'Pokelike', m: (d) => d.pokelike.dex, u: 'Pokémon nuevos en la Pokédex', metas: [3, 8, 15] }
  ];
  const PREMIOS_RETO = [200, 400, 800];
  const retoSemana = () => RETOS[((semana() % RETOS.length) + RETOS.length) % RETOS.length];
  const reto = (d) => {
    const r = retoSemana(), w = semana(), v = r.m(d);
    if (!st.reto || st.reto.w !== w) { st.reto = { w, base: v, ok: [] }; save(); }
    if (v < st.reto.base) { st.reto.base = v; save(); } // partida borrada o importada
    return { r, hecho: v - st.reto.base, ok: st.reto.ok };
  };
  const cobrarReto = (d) => {
    const { r, hecho, ok } = reto(d), dados = [];
    r.metas.forEach((m, i) => {
      if (ok[i] || hecho < m) return;
      if (!giveDust(PREMIOS_RETO[i])) return;
      ok[i] = Date.now(); dados.push([`Juego de la semana (${r.n}): ${m} ${r.u}`, PREMIOS_RETO[i]]);
    });
    return dados;
  };

  // Revisa insignias nuevas, el nivel de entrenador y el juego de la semana, y da su Polvo. Devuelve lo nuevo.
  const revisar = async () => {
    const d = await leer();
    const nuevas = [];
    for (const [, id, name, ok, , dust] of INSIGNIAS) {
      if (st.badges[id] || !ok(d)) continue;
      if (!giveDust(dust)) break;
      st.badges[id] = Date.now();
      nuevas.push([name, dust]);
    }
    if (!st.badges[MAESTRO.id] && juegosConInsignia() >= MAESTRO.need && giveDust(MAESTRO.dust)) {
      st.badges[MAESTRO.id] = Date.now();
      nuevas.push([MAESTRO.name, MAESTRO.dust]);
    }
    nuevas.push(...cobrarReto(d), ...subirNivel(d));
    save();
    return { d, nuevas };
  };

  // ---------- Desafío del Alfa ----------
  const SEMANA0 = Date.UTC(2026, 0, 5); // lunes
  const semana = () => Math.floor((Date.now() - SEMANA0) / (7 * 864e5));
  const finSemana = () => SEMANA0 + (semana() + 1) * 7 * 864e5;
  const rng = (a) => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const MAPAS = { forest: 'Bosque Verde', desert: 'Desierto Rocoso', coast: 'Costa Tormenta', glacier: 'Glaciar Celeste', canela: 'Isla Canela', cave: 'Cueva Celeste', encina: 'Bosque Encina', iris: 'Ciudad Iris' };
  // Los mapas de las regiones nuevas también entran en el Desafío (solo los que ya tengas abiertos); los Retos no.
  for (const r of window.PB_REGIONES?.lista ?? []) if (!r.especial) for (const m of r.mapas) MAPAS[m.id] = m.name;
  const DIF = ['Normal', 'Difícil', 'Pesadilla'];
  const PREMIOS = [
    ['jugar', 'Termina una partida del desafío', 150, (w) => w.runs >= 1],
    ['puntos', 'Consigue 5.000 puntos', 300, (w) => w.best >= 5000],
    ['alfas', 'Derrota 3 Alfas en una partida', 300, (w) => w.bestAlphas >= 3],
    ['victoria', 'Gana la partida', 600, (w) => w.won]
  ];
  let nombres = null;
  fetch('data/pokemon.json').then(r => r.json()).then(l => { nombres = {}; for (const p of l) nombres[p.id] = p.name; }).catch(() => {});
  const nombre = (id) => nombres?.[id] || ('#' + id);

  const reglas = () => {
    const p = meta()?.profile;
    if (!p) return null;
    const r = rng(semana() * 7919 + 17);
    const liga = [...(p.league || [])].sort((a, b) => a - b);
    const mapas = Object.keys(MAPAS).filter(id => (p.biomes?.[id] ?? -1) >= 0);
    if (!liga.length || !mapas.length) return null;
    const species = liga[Math.floor(r() * liga.length)];
    const biome = mapas[Math.floor(r() * mapas.length)];
    const tier = Math.min(1, p.biomes[biome]);
    return { species, biome, tier };
  };
  const semanaSt = () => {
    const k = String(semana());
    st.weeks[k] = st.weeks[k] || { runs: 0, best: 0, bestAlphas: 0, won: false, claimed: {} };
    return st.weeks[k];
  };
  const puntos = (r) => Math.round((r.kills || 0) + 250 * num(r.alphas) + 500 * num(r.bosses) + Math.floor(r.time || 0) + (r.victory ? 3000 : 0));

  // Cuenta las partidas que siguen las reglas de la semana (también al reintentar desde la pausa).
  let vigilado = null;
  const vigilar = () => {
    const run = app()?.run;
    if (!run || run === vigilado || typeof run.result !== 'function') return;
    vigilado = run;
    const orig = run.result;
    let hecho = false;
    run.result = function (...a) {
      const r = orig.apply(this, a);
      try {
        const rg = reglas();
        if (!hecho && this.state === 'over' && rg && this.mode === 'standard' && !this.coop &&
            this.startSpecies === rg.species && this.biome?.id === rg.biome && this.tier === rg.tier) {
          hecho = true;
          const w = semanaSt();
          const pts = puntos(r);
          w.runs++;
          w.bestAlphas = Math.max(w.bestAlphas, num(r.alphas));
          w.won = w.won || !!r.victory;
          if (pts > w.best) { w.best = pts; w.newBest = true; }
          save();
        }
      } catch {}
      return r;
    };
  };
  setInterval(vigilar, 1000);

  const cobrarSemana = () => {
    const w = semanaSt();
    const dados = [];
    for (const [id, txt, dust, ok] of PREMIOS) {
      if (w.claimed[id] || !ok(w)) continue;
      if (!giveDust(dust)) break;
      w.claimed[id] = 1;
      dados.push([txt, dust]);
    }
    // Rachas: semanas seguidas con al menos una partida del desafío. Cada meta se cobra una vez.
    st.rachas = st.rachas || {};
    const r = racha();
    for (const [n, dust] of RACHAS) {
      if (st.rachas[n] || r < n) continue;
      if (!giveDust(dust)) break;
      st.rachas[n] = Date.now();
      dados.push([`Racha de ${n} semanas`, dust]);
    }
    if (dados.length) save();
    return dados;
  };
  const RACHAS = [[3, 400], [5, 800], [10, 2000]];
  const racha = () => {
    let k = semana();
    if (!st.weeks[k]?.runs) k--; // la semana actual aún no cuenta si no has jugado
    let n = 0;
    while (st.weeks[k]?.runs) { n++; k--; }
    return n;
  };
  const mejorSemana = () => Object.values(st.weeks).reduce((m, w) => Math.max(m, w.best || 0), 0);

  // ---------- Interfaz ----------
  const css = `
.pb-rm{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;background:rgba(10,6,24,.72)}
.pb-rm[hidden]{display:none!important}
.pb-rm .rm-box{width:min(620px,94vw);max-height:92vh;overflow:auto;padding:16px;border-radius:16px;border:3px solid #fff;background:linear-gradient(#3b2a6e,#241848);color:#fff;font-family:inherit;box-shadow:0 8px 30px rgba(0,0,0,.5)}
.pb-rm .rm-top{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px}
.pb-rm .rm-top b{font-size:20px}
.pb-rm .rm-x{width:36px;height:36px;flex:none;border-radius:10px;border:2px solid #fff;background:rgba(255,255,255,.12);color:#fff;font-size:18px;font-weight:800}
.pb-rm .rm-tabs{display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap}
.pb-rm .rm-tab{flex:1;min-width:100px;padding:8px;border-radius:10px;border:2px solid rgba(255,255,255,.6);background:rgba(255,255,255,.08);color:#fff;font-weight:800;font-family:inherit}
.pb-rm .rm-tab.on{background:#ffcb05;color:#2c1a4e;border-color:#fff}
.pb-rm .rm-game{margin:10px 0 4px;font-weight:800;opacity:.9}
.pb-rm .rm-b{display:flex;align-items:center;gap:10px;padding:8px 10px;margin:4px 0;border-radius:10px;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.25)}
.pb-rm .rm-b.ok{border-color:#ffcb05;background:rgba(255,203,5,.16)}
.pb-rm .rm-b i{font-style:normal;width:30px;height:30px;flex:none;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(255,255,255,.15);font-weight:900}
.pb-rm .rm-b.ok i{background:#ffcb05;color:#2c1a4e}
.pb-rm .rm-b span{flex:1}
.pb-rm .rm-b small{display:block;opacity:.8;font-size:12px}
.pb-rm .rm-b em{font-style:normal;font-weight:800;white-space:nowrap}
.pb-rm .rm-card{padding:12px;border-radius:12px;background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.35);margin-bottom:10px}
.pb-rm .rm-card p{margin:4px 0}
.pb-rm .rm-btn{display:block;width:100%;margin-top:10px;padding:12px;border-radius:12px;border:3px solid #fff;background:linear-gradient(#5be38b,#2fb55f);color:#fff;font-size:18px;font-weight:900;font-family:inherit}
.pb-rm .rm-btn.alt{background:rgba(255,255,255,.14);font-size:15px}
.pb-rm .rm-btn:disabled{opacity:.5}
.pb-rm .rm-muted{opacity:.8;font-size:13px}
.pb-rm .rm-tab-rec{width:100%;border-collapse:collapse;font-size:13px;margin:4px 0 6px}
.pb-rm .rm-tab-rec th,.pb-rm .rm-tab-rec td{padding:6px 4px;text-align:center;border-bottom:1px solid rgba(255,255,255,.18)}
.pb-rm .rm-tab-rec th{opacity:.8;font-weight:800}
.pb-rm .rm-tab-rec tr.hoy td{background:rgba(255,203,5,.14)}
.pb-rm-tag{display:inline-block;margin:2px 0 0 4px;padding:2px 10px;border-radius:999px;background:linear-gradient(#ffe43b,#ffb800);color:#2c1a4e;font-weight:900;font-size:clamp(11px,1.6vw,18px);letter-spacing:.12em;border:2px solid #2c1a4e;box-shadow:0 3px 0 #2c1a4e;transform:rotate(-3deg);vertical-align:middle}
.logo.hero .logo-com{display:none!important}
.pb-rm .rm-box{width:min(760px,96vw)!important}
.pb-rm .rm-tabs{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin:0 -4px 12px;padding:0 4px}
.pb-rm .rm-tabs::-webkit-scrollbar{display:none}
.pb-rm .rm-tab{flex:1 0 auto;min-width:0;padding:8px 12px;border-radius:999px;white-space:nowrap}
.pb-rm .rm-top b{display:flex;flex-direction:column;line-height:1}
.pb-rm .rm-top b small{font-size:11px;font-weight:800;letter-spacing:.14em;color:#ffcb05}
.rm-ent{display:flex;align-items:center;gap:12px;padding:10px 12px;margin-bottom:12px;border-radius:16px;background:linear-gradient(100deg,#ffcb05,#ff9d2e);color:#2c1a4e;box-shadow:0 3px 0 #0005}
.rm-ent img{width:56px;height:64px;flex:none;object-fit:contain;object-position:center bottom;image-rendering:pixelated}
.rm-ent div{flex:1;min-width:0}
.rm-ent b{display:block;font-size:17px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rm-ent small{display:block;font-weight:800;font-size:12px;opacity:.85}
.rm-ent .rm-xp{height:8px;margin-top:5px;border-radius:99px;background:#2c1a4e33;overflow:hidden}
.rm-ent .rm-xp i{display:block;height:100%;background:#2c1a4e;border-radius:99px}
.rm-ent em{font-style:normal;font-weight:900;font-size:26px;line-height:1;text-align:center;flex:none}
.rm-ent em small{font-size:10px;letter-spacing:.08em}
.rm-sala{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px}
.rm-j{--c:#8a6bff;position:relative;display:flex;flex-direction:column;border-radius:18px;overflow:hidden;background:#1d1336;box-shadow:0 3px 0 #0006,inset 0 0 0 2px color-mix(in srgb,var(--c) 70%,#fff 0%);text-align:left;color:#fff;font-family:inherit;padding:0;border:0}
.rm-j .rm-jb{position:relative;height:84px;background:linear-gradient(120deg,color-mix(in srgb,var(--c) 85%,#000),var(--c) 55%,color-mix(in srgb,var(--c) 60%,#fff));overflow:hidden}
.rm-j .rm-jb:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,#ffffff14 0 14px,transparent 14px 28px)}
.rm-j .rm-jb img{position:absolute;right:10px;top:50%;translate:0 -50%;width:72px;height:72px;object-fit:contain;filter:drop-shadow(0 4px 0 #0004)}
.rm-j .rm-jb b{position:absolute;left:12px;bottom:8px;right:90px;font-size:20px;line-height:1.05;text-shadow:0 2px 0 #0006}
.rm-j .rm-jt{position:absolute;left:10px;top:8px;padding:2px 8px;border-radius:99px;background:#2c1a4e;color:#ffcb05;font-size:11px;font-weight:900}
.rm-j .rm-jd{padding:8px 12px 4px;font-size:12.5px;opacity:.9;flex:1}
.rm-j .rm-jp{padding:0 12px 8px;font-size:12.5px;font-weight:800;color:#ffe27a}
.rm-j .rm-jp span{color:#cfc4ee;font-weight:700}
.rm-j .rm-ja{display:flex;gap:6px;padding:0 10px 10px}
.rm-j .rm-ja button{flex:1;padding:9px 6px;border-radius:12px;border:0;background:var(--c);color:#fff;font:900 15px inherit;font-family:inherit;box-shadow:0 3px 0 #0006}
.rm-j .rm-ja button.sec{flex:none;background:#ffffff1f;font-size:12px;font-weight:800;padding:9px 10px}
.rm-j.big{grid-column:1/-1;flex-direction:row;align-items:stretch}
.rm-j.big .rm-jb{flex:1 1 44%;height:auto;min-height:110px}
.rm-j.big .rm-jr{flex:1 1 56%;display:flex;flex-direction:column;min-width:0}
.rm-j.big .rm-jb b{font-size:24px}
.rm-h{margin:14px 2px 8px;font-weight:900;font-size:15px;color:#ffcb05;letter-spacing:.04em}
.rm-meta{display:flex;align-items:center;gap:8px;padding:6px 10px;margin:4px 0;border-radius:10px;background:rgba(255,255,255,.08)}
.rm-meta.ok{background:rgba(255,203,5,.2)}
.rm-meta span{flex:1}
.rm-barra{height:10px;border-radius:99px;background:#ffffff22;overflow:hidden;margin:6px 0}
.rm-barra i{display:block;height:100%;background:#ffcb05;border-radius:99px}
.pb-portrait .pb-rm .rm-box{width:100vw!important;max-height:100vh;height:100vh;border-radius:0;border:0;padding:calc(12px + env(safe-area-inset-top)) 12px 12px}
.pb-portrait .rm-j.big{flex-direction:column}
.pb-rm-tag{cursor:pointer}
.pb-rm-tag small{font-size:.62em;opacity:.75;margin-left:.5em;letter-spacing:.04em}
.jay-sidebar .mm-small .mm-item.pb-sala-btn{border-color:#fff3b0!important;background:linear-gradient(#ffe43b,#ffb800)!important;box-shadow:0 calc(3 * var(--u,1px)) #9c6a00!important}
.jay-sidebar .mm-small .mm-item.pb-sala-btn .mm-tx b{color:#2c1a4e!important;text-shadow:none!important;-webkit-text-stroke:0!important}
.pb-tour .rm-box{text-align:center}
.pb-tour .rm-step{min-height:150px}
.pb-tour h2{margin:6px 0 10px;font-size:22px}
.pb-tour .rm-dots{display:flex;justify-content:center;gap:6px;margin:10px 0}
.pb-tour .rm-dots b{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.3)}
.pb-tour .rm-dots b.on{background:#ffcb05}
.pb-tour .rm-row{display:flex;gap:8px}
.pb-tour .rm-row .rm-btn{margin-top:0}`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);

  const modal = (cls) => {
    const m = document.createElement('div');
    m.className = 'pb-rm ' + (cls || '');
    m.hidden = true;
    document.body.append(m);
    return m;
  };

  const CREDITOS = [
    ['PokéBonk', 'Juego original de Charcher. Port para Android de JayElDragon. Subversión no oficial de moportor6.'],
    ['PokéBonk TD', 'PokéPath TD, juego de Khydra. Música y efectos de PokéSurvivor (ver abajo).'],
    ['PokéSurvivor', 'Juego original de JPTER78 (pokesurvivor.com), port de JayElDragon. Código y música con licencia PolyForm Noncommercial 1.0.0 desde el 14-10-2026 (antes, MIT): solo uso sin fines comerciales. Required Notice: Copyright 2026 JPTER78 (https://github.com/JPTER78/pokesurvivor). Sprites CC BY-NC 4.0.'],
    ['Pokémon Survivors', 'De pedrobarretto.'],
    ['PokéIsaac', 'De @SrBatai (pokeisaac.com).'],
    ['PokéPlunder', 'De Khydra.'],
    ['Pokémon Overlord', 'De jab_lao.'],
    ['Pokelike', 'De pokelike.xyz.'],
    ['Sprites de Pokémon', 'PMDCollab (SpriteCollab) y sus artistas, CC BY-NC 4.0.'],
    ['Medallas de gimnasio', 'Sprites de PokeAPI/sprites (GitHub). Imágenes © The Pokémon Company / Nintendo; proyecto de fans sin fines de lucro.'],
    ['Retratos del modo historia (PokéBonk Lite)', 'Líderes de Pokémon Reloaded (uso privado, con permiso de sus autores); profesores, campeones y el resto, de Pokémon Showdown (play.pokemonshowdown.com/sprites/trainers). © The Pokémon Company / Nintendo; sin fines de lucro.']
  ];
  // Ficha del entrenador (arriba de Juegos y del Pasaporte).
  const fichaHTML = (d) => {
    const e = entrenador(d);
    return `<div class="rm-ent">${e.comp?.img ? `<img src="${e.comp.img}" alt="">` : ''}<div><b>${esc(e.nombre)}</b><small>${e.titulo}${e.comp ? ' con ' + esc(e.comp.name) : ''} · faltan ${fmt(e.falta)} de experiencia</small><div class="rm-xp"><i style="width:${Math.round(e.pct * 100)}%"></i></div></div><em>${e.nivel}<small><br>NIVEL</small></em></div>`;
  };
  const esc = (t) => String(t ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mmss = (s) => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
  // Lo que llevas en cada juego, en una línea.
  const PROGRESO = {
    'pokebonk-td': (d) => d.pokepath.waves ? `${fmt(d.pokepath.stars)} estrellas, ${d.pokepath.rutas} rutas completas` : '',
    pokemonsurvivors: (d) => d.survivors.runs ? `Mejor tiempo ${mmss(d.survivors.time)}, nivel ${d.survivors.level}` : '',
    pokesurvivor: (d) => d.survivor.runs ? `${fmt(d.survivor.kills)} derrotados, ${d.survivor.bosses} jefes` : '',
    pokeisaac: (d) => d.isaac.runs ? `Piso máximo ${d.isaac.floor}, ${d.isaac.runs} partidas` : '',
    pokeplunder: (d) => d.plunder.battles ? `${d.plunder.wins} victorias, ${d.plunder.battles} combates` : '',
    pokeoverlord: (d) => d.overlord.lideres ? `${d.overlord.lideres} líderes vencidos` : '',
    pokelike: (d) => d.pokelike.dex ? `${d.pokelike.dex} en la Pokédex` : ''
  };
  const tarjeta = (j, d, grande, semanal) => {
    const ins = INSIGNIAS.filter(i => i[0] === j.p), tengo = ins.filter(i => st.badges[i[1]]).length;
    const prog = PROGRESO[j.id]?.(d) || 'Sin estrenar';
    const cuerpo = `<div class="rm-jd">${j.desc}</div><div class="rm-jp">${prog} <span>· ${tengo}/${ins.length} insignias</span></div><div class="rm-ja"><button type="button" data-ir="${j.id}">${grande ? 'Seguir jugando' : 'Jugar'}</button>${j.alt ? `<button type="button" class="sec" data-ir="${j.alt.id}">${j.alt.name}</button>` : ''}</div>`;
    return `<div class="rm-j${grande ? ' big' : ''}" style="--c:${j.color}"><div class="rm-jb">${semanal ? '<span class="rm-jt">Juego de la semana</span>' : ''}<img src="${j.icon}" alt=""${j.pix ? ' style="image-rendering:pixelated"' : ''}><b>${j.name}</b></div>${grande ? `<div class="rm-jr">${cuerpo}</div>` : cuerpo}</div>`;
  };
  const pintarSala = async (cuerpo) => {
    const lista = window.PB_GAMES?.list || [];
    cuerpo.innerHTML = '<p class="rm-muted">Leyendo tus partidas...</p>';
    const { d, nuevas } = await revisar();
    if (tab !== 'juegos') return;
    const sem = retoSemana().g;
    const ult = st.ult ? lista.find(j => j.id === (st.ult === 'pokepath' ? 'pokebonk-td' : st.ult) || j.alt?.id === st.ult) : null;
    let h = fichaHTML(d);
    if (nuevas.length) h += `<div class="rm-card"><p><b>Nuevo: ${nuevas.map(n => esc(n[0]) + ' (+' + fmt(n[1]) + ' Polvo)').join(', ')}</b></p></div>`;
    h += '<div class="rm-sala">';
    if (ult) h += tarjeta(ult, d, true, ult.id === sem);
    for (const j of lista) if (j !== ult) h += tarjeta(j, d, false, j.id === sem);
    h += '</div><p class="rm-muted" style="margin-top:10px">Todos se juegan sin iniciar sesión. Cada juego es de su autor; aquí solo los reunimos.</p>';
    cuerpo.innerHTML = h;
    cuerpo.querySelectorAll('[data-ir]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.ir;
      const j = lista.find(x => x.id === id) || lista.map(x => x.alt).find(x => x?.id === id);
      if (!j) return;
      st.ult = id; save();
      location.href = j.url;
    }));
  };

  let hub = null;
  let tab = 'juegos';
  const pintarPasaporte = async (cuerpo) => {
    cuerpo.innerHTML = '<p class="rm-muted">Leyendo tus partidas...</p>';
    const { nuevas, d: ultimo } = await revisar();
    const total = INSIGNIAS.length + 1;
    const tengo = Object.keys(st.badges).length;
    let h = fichaHTML(ultimo) + `<div class="rm-card"><p><b>${tengo}/${total} insignias</b></p><p class="rm-muted">Juega a los juegos de la Sala y explora las regiones de PokéBonk: cada insignia da Polvo Estelar una sola vez. Se revisa cada vez que abres el Pasaporte.</p>`;
    if (nuevas.length) h += `<p><b>Nuevo: ${nuevas.map(n => n[0] + ' (+' + fmt(n[1]) + ' Polvo)').join(', ')}</b></p>`;
    if (inRun()) h += '<p class="rm-muted">Termina la partida para cobrar las insignias nuevas.</p>';
    h += '</div>';
    for (const g of JUEGOS_P) {
      h += `<div class="rm-game">${g}</div>`;
      for (const [jg, id, name, , meta2, dust] of INSIGNIAS) {
        if (jg !== g) continue;
        const ok = !!st.badges[id];
        h += `<div class="rm-b${ok ? ' ok' : ''}"><i>${ok ? '★' : '?'}</i><span>${name}<small>${meta2}${ok ? '' : progreso(id, ultimo)}</small></span><em>+${fmt(dust)}</em></div>`;
      }
    }
    const okM = !!st.badges[MAESTRO.id];
    h += `<div class="rm-game">Gran insignia</div><div class="rm-b${okM ? ' ok' : ''}"><i>${okM ? '★' : '?'}</i><span>${MAESTRO.name}<small>Consigue insignias en ${MAESTRO.need} juegos distintos (${juegosConInsignia()}/${MAESTRO.need})</small></span><em>+${fmt(MAESTRO.dust)}</em></div>`;
    if (ultimo?.overlord?.hay && !ultimo.overlord.legible) h += '<p class="rm-muted">La partida de Pokémon Overlord no se pudo leer.</p>';
    cuerpo.innerHTML = h;
  };

  // Desafíos: el juego de la semana (rota entre los juegos de la Sala) y el Desafío del Alfa de PokéBonk.
  const ponReto = async (cuerpo) => {
    const { d } = await revisar();
    if (tab !== 'desafio') return;
    const { r, hecho, ok } = reto(d);
    const j = (window.PB_GAMES?.list || []).find(x => x.id === r.g);
    const max = r.metas[r.metas.length - 1];
    let h = `<div class="rm-h">Juego de la semana: ${r.n}</div><div class="rm-card"><p>Esta semana llevas <b>${fmt(hecho)}</b> ${r.u}.</p><div class="rm-barra"><i style="width:${Math.min(100, Math.round(hecho / max * 100))}%"></i></div>`;
    r.metas.forEach((m, i) => { h += `<div class="rm-meta${ok[i] ? ' ok' : ''}"><span>${ok[i] ? '★' : '·'} ${fmt(m)} ${r.u}</span><b>+${fmt(PREMIOS_RETO[i])}</b></div>`; });
    h += `<p class="rm-muted">Cuenta lo que juegues desde el lunes. La semana que viene toca otro juego.</p>${j ? '<button type="button" class="rm-btn rm-ir-reto">Jugar ' + r.n + '</button>' : ''}</div><div class="rm-h">Desafío del Alfa (PokéBonk)</div>`;
    const div = document.createElement('div');
    div.innerHTML = h;
    cuerpo.prepend(div);
    div.querySelector('.rm-ir-reto')?.addEventListener('click', () => { st.ult = j.id; save(); location.href = j.url; });
  };
  const pintarDesafio = (cuerpo) => { pintarAlfa(cuerpo); ponReto(cuerpo); };
  const pintarAlfa = (cuerpo) => {
    const rg = reglas();
    const dados = cobrarSemana();
    const w = semanaSt();
    const quedan = finSemana() - Date.now();
    const dias = Math.floor(quedan / 864e5), horas = Math.floor(quedan % 864e5 / 36e5);
    let h = `<div class="rm-card"><p><b>Semana ${semana() + 1}</b> <span class="rm-muted">- acaba en ${dias} d ${horas} h</span></p>`;
    if (!rg) {
      h += '<p>Necesitas al menos un Pokémon en tu Liga y un mapa desbloqueado.</p></div>';
      cuerpo.innerHTML = h;
      return;
    }
    h += `<p>Pokémon: <b>${nombre(rg.species)}</b></p><p>Mapa: <b>${MAPAS[rg.biome]}</b></p><p>Dificultad: <b>${DIF[rg.tier]}</b></p><p class="rm-muted">Sin objetos de la Mochila. Los Alfas valen 250 puntos, los guardianes 500 y ganar 3.000; cada baja y cada segundo suman 1.</p></div>`;
    h += `<div class="rm-card"><p>Récord de la semana: <b>${fmt(w.best)}</b> puntos</p><p>Partidas: <b>${w.runs}</b> - Alfas en una partida: <b>${w.bestAlphas}</b>${w.won ? ' - <b>Ganado</b>' : ''}</p>`;
    if (dados.length) h += `<p><b>Premio: ${dados.map(d => '+' + fmt(d[1]) + ' Polvo').join(', ')}</b></p>`;
    h += '</div>';
    for (const [id, txt, dust] of PREMIOS) {
      const ok = !!w.claimed[id];
      h += `<div class="rm-b${ok ? ' ok' : ''}"><i>${ok ? '★' : '?'}</i><span>${txt}</span><em>+${fmt(dust)}</em></div>`;
    }
    st.rachas = st.rachas || {};
    const r = racha();
    h += `<div class="rm-game">Racha: ${r} ${r === 1 ? 'semana' : 'semanas'} seguidas</div>`;
    for (const [n, dust] of RACHAS) {
      const ok = !!st.rachas[n];
      h += `<div class="rm-b${ok ? ' ok' : ''}"><i>${ok ? '★' : '?'}</i><span>Juega el desafío ${n} semanas seguidas<small>${Math.min(r, n)}/${n}</small></span><em>+${fmt(dust)}</em></div>`;
    }
    const hist = Object.entries(st.weeks).filter(([k]) => st.weeks[k].runs).sort((a, b) => b[0] - a[0]);
    if (hist.length) {
      const top = mejorSemana();
      h += `<div class="rm-game">Tus récords (mejor: ${fmt(top)} puntos)</div><table class="rm-tab-rec"><tr><th>Semana</th><th>Puntos</th><th>Partidas</th><th>Alfas</th><th>Premios</th></tr>` +
        hist.map(([k, v]) => `<tr${+k === semana() ? ' class="hoy"' : ''}><td>${+k + 1}${+k === semana() ? ' (esta)' : ''}${v.best && v.best === top ? ' ★' : ''}</td><td>${fmt(v.best)}</td><td>${v.runs}</td><td>${v.bestAlphas}</td><td>${Object.keys(v.claimed || {}).length}/${PREMIOS.length}${v.won ? ' - Ganada' : ''}</td></tr>`).join('') + '</table>';
    }
    h += `<button type="button" class="rm-btn rm-go"${inRun() ? ' disabled' : ''}>Jugar el desafío</button>`;
    cuerpo.innerHTML = h;
    cuerpo.querySelector('.rm-go')?.addEventListener('click', () => {
      const a = app();
      if (!a || inRun()) return;
      hub.hidden = true;
      try { a.startRun({ species: rg.species, biome: rg.biome, tier: rg.tier, boosts: [], mode: 'standard' }); } catch (e) { notice(String(e.message || e)); }
    });
  };

  const pintarTraspaso = (cuerpo) => {
    const T = window.PB_TRASPASO;
    const fecha = (s) => { try { return new Date(s).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' }); } catch { return s; } };
    cuerpo.innerHTML = `<div class="rm-card"><p><b>Pasa tu partida entre el móvil y el PC</b></p><p class="rm-muted">Se guarda todo: PokéBonk, el Pasaporte, el Desafío y los juegos de Más juegos. Los ajustes de gráficos, controles y HUD de cada equipo no se tocan.</p></div>
      <div class="rm-card"><p><b>1. En el equipo donde está tu partida</b></p><p class="rm-muted">${window.AndroidMenu ? 'Se guarda en Descargas, carpeta PokeBonk.' : 'Elige dónde guardar el archivo.'} Luego pásalo al otro equipo (cable, Drive, WhatsApp, Telegram...).</p><button type="button" class="rm-btn rm-exp"${inRun() ? ' disabled' : ''}>Exportar partida</button></div>
      <div class="rm-card"><p><b>2. En el otro equipo</b></p><p class="rm-muted">Reemplaza la partida de este equipo por la del archivo. Si quieres conservar la de aquí, expórtala antes.</p><button type="button" class="rm-btn alt rm-imp"${inRun() ? ' disabled' : ''}>Importar partida</button></div>
      <div class="rm-out"></div>`;
    const out = cuerpo.querySelector('.rm-out');
    const msg = (h) => { out.innerHTML = `<div class="rm-card">${h}</div>`; out.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); };
    const exp = cuerpo.querySelector('.rm-exp');
    exp.addEventListener('click', async () => {
      exp.disabled = true;
      msg('<p>Preparando el archivo...</p>');
      try { const r = await T.exportar(); msg(`<p><b>Listo:</b> ${r.nombre} (${fmt(r.kb)} KB)</p><p class="rm-muted">Guardado en: ${r.donde}</p>`); }
      catch (err) { msg(`<p>${err.message || err}</p>`); }
      exp.disabled = false;
    });
    cuerpo.querySelector('.rm-imp').addEventListener('click', async () => {
      try {
        const r = await T.leerArchivo();
        if (!r) return;
        const s = r.resumen;
        msg(`<p><b>Partida encontrada</b></p><p>Entrenador: <b>${s.entrenador || 'sin nombre'}</b></p><p class="rm-muted">Exportada el ${fecha(s.fecha)} desde ${s.origen}.</p><p><b>Se reemplazará la partida de este equipo.</b></p><button type="button" class="rm-btn rm-ok">Sí, cargar esta partida</button><button type="button" class="rm-btn alt rm-no">Cancelar</button>`);
        out.querySelector('.rm-no').addEventListener('click', () => { out.innerHTML = ''; });
        const okb = out.querySelector('.rm-ok');
        okb.addEventListener('click', async () => {
          okb.disabled = true;
          msg('<p>Cargando la partida, el juego se reinicia...</p>');
          try { await T.aplicar(r.datos); } catch (err) { msg(`<p>${err.message || err}</p>`); }
        });
      } catch (err) { msg(`<p>${err.message || err}</p>`); }
    });
  };

  const pintar = () => {
    hub.querySelectorAll('.rm-tab').forEach(b => b.classList.toggle('on', b.dataset.t === tab));
    const cuerpo = hub.querySelector('.rm-body');
    if (tab === 'juegos') pintarSala(cuerpo);
    else if (tab === 'pasaporte') pintarPasaporte(cuerpo);
    else if (tab === 'desafio') pintarDesafio(cuerpo);
    else if (tab === 'traspaso') pintarTraspaso(cuerpo);
    else if (tab === 'act') { if (window.PB_ACT) window.PB_ACT.pintar(cuerpo); else cuerpo.innerHTML = ''; }
    else {
      cuerpo.innerHTML = `<div class="rm-card"><p><b>PokéBonk Remaster</b> es PokéBonk ${window.PB_SUB ? window.PB_SUB.oficial : ''} (el juego oficial de Charcher) con la subversión ${window.PB_SUB ? window.PB_SUB.sub : ''} de moportor6 (no oficial).</p><p class="rm-muted">Reúne PokéBonk y siete juegos más con un solo entrenador: tu nivel sube juegues a lo que juegues, las insignias del Pasaporte dan Polvo Estelar y cada semana hay un juego destacado y un Desafío del Alfa. Todo lo nuevo está en Noticias, apartado Subversiones.</p></div><div class="rm-h">Créditos y licencias de los juegos</div>${CREDITOS.map(c => `<div class="rm-b"><span>${c[0]}<small>${c[1]}</small></span></div>`).join('')}<p class="rm-muted">Pokémon y sus personajes pertenecen a Nintendo, Creatures Inc. y GAME FREAK inc. Todo el Remaster es gratis y sin ánimo de lucro: sin anuncios, compras ni donaciones.</p><button type="button" class="rm-btn alt rm-tour">Ver el tour de bienvenida</button>`;
      cuerpo.querySelector('.rm-tour').addEventListener('click', () => { hub.hidden = true; tour(); });
    }
  };

  const abrir = (t) => {
    if (!hub) {
      hub = modal();
      hub.innerHTML = `<div class="rm-box"><div class="rm-top"><b><small>POKÉBONK</small>Remaster</b><button type="button" class="rm-x" aria-label="Cerrar">X</button></div><div class="rm-tabs"><button type="button" class="rm-tab" data-t="juegos">Juegos</button><button type="button" class="rm-tab" data-t="pasaporte">Pasaporte</button><button type="button" class="rm-tab" data-t="desafio">Desafíos</button><button type="button" class="rm-tab" data-t="traspaso">Traspaso</button><button type="button" class="rm-tab" data-t="act">Actualizaciones</button><button type="button" class="rm-tab" data-t="info">Acerca de</button></div><div class="rm-body"></div></div>`;
      hub.addEventListener('click', (e) => {
        const b = e.target.closest('.rm-tab');
        if (b) { tab = b.dataset.t; pintar(); return; }
        if (e.target === hub || e.target.closest('.rm-x')) hub.hidden = true;
      });
    }
    if (t) tab = t;
    hub.hidden = false;
    pintar();
  };
  window.PB_REMASTER = { open: abrir, check: revisar, rules: reglas, week: semanaSt };

  // ---------- Tour de bienvenida ----------
  const PASOS = [
    ['Bienvenido a PokéBonk Remaster', 'El PokéBonk de siempre con muchas novedades. Te enseñamos lo principal en un momento.'],
    ['Nueve regiones', 'Al elegir mapa, cambia de región con las pestañas de arriba: de Kanto a Paldea, los 1025 Pokémon. Cada región se abre al completar la anterior, tiene 4 mapas con su santuario y legendarios, y sus Pokémon solo salen en sus mapas. Jugar con un Pokémon de la región da +10% de daño; con uno de fuera, más Pokédólares y Polvo.'],
    ['Unir Pokémon a tu Liga', 'Abre la Liga y toca un Pokémon: su ficha dice el reto que lo une a tu equipo (derrotar Pokémon de su región, ganar en un mapa, vencer guardianes...). Los legendarios piden retos más duros.'],
    ['Megas y Dynamax', 'En la partida, los botones MEGA y DYNAMAX se cargan derrotando enemigos (el DYNAMAX está gris mientras carga y rosa cuando está listo). El Dynamax sirve para cualquier Pokémon y algunos toman su forma Gigamax. La mega se consigue de dos formas: con la investigación de su familia al 100% o comprándola en el Laboratorio con Polvo Estelar y oro guardado.'],
    ['Formas y evoluciones especiales', 'Charizard, Mewtwo o Raichu tienen varias megas, y Tyranitar o Steelix formas extra de fans: elige cuál usar en el Laboratorio. Sylveon, Lunala y las evoluciones de Galar, Hisui y Paldea (Kleavor, Kingambit, Annihilape...) piden cumplir un reto con esa línea; luego se eligen al evolucionar. Míralo en su ficha de la Liga. Y las formas regionales (Vulpix de Alola, Ponyta de Galar, Growlithe de Hisui...) se eligen en el Laboratorio tras jugar en su región: cambian el dibujo y los tipos, y también salen de enemigas en los mapas de su región.'],
    ['Retos: Torre Mega y Dominio Gigamax', 'Tras la Zona Cero se abre la pestaña Extra. En la Torre Mega todos salen megaevolucionados y en el Dominio Gigamax, en forma Gigamax. Son los mapas más difíciles del juego.'],
    ['Laboratorio individual', 'Cada mejora del Laboratorio se compra para un Pokémon concreto y solo le afecta a él. Gasta tu Polvo Estelar en tus favoritos.'],
    ['Sala de juegos', 'El botón dorado Juegos abre la Sala: PokéBonk TD, Pokémon Survivors, PokéSurvivor, PokéIsaac, PokéPlunder, Pokémon Overlord y Pokelike, con tu progreso en cada uno. Todos sin iniciar sesión.'],
    ['Un entrenador para todo', 'Tu nivel de entrenador sube juegues a lo que juegues. En Remaster tienes el Pasaporte (insignias que dan Polvo, también por cada región: completa su Liga y ganas el título de Campeón), los Desafíos de cada semana y el Traspaso para pasar tu partida entre el móvil y el PC.'],
    ['Editor del HUD y mando', 'Desde la pausa puedes mover y cambiar el tamaño de los botones. En PC y Android también puedes jugar con mando.']
  ];
  let tourM = null;
  const tour = () => {
    let i = 0;
    if (!tourM) tourM = modal('pb-tour');
    const pinta = () => {
      const [t, d] = PASOS[i];
      tourM.innerHTML = `<div class="rm-box"><div class="rm-step"><h2>${t}</h2><p>${d}</p></div><div class="rm-dots">${PASOS.map((_, k) => `<b class="${k === i ? 'on' : ''}"></b>`).join('')}</div><div class="rm-row">${i ? '<button type="button" class="rm-btn alt rm-prev">Atrás</button>' : '<button type="button" class="rm-btn alt rm-skip">Saltar</button>'}<button type="button" class="rm-btn rm-next">${i === PASOS.length - 1 ? 'A jugar' : 'Siguiente'}</button></div></div>`;
    };
    tourM.onclick = (e) => {
      if (e.target.closest('.rm-next')) { if (i === PASOS.length - 1) fin(); else { i++; pinta(); } }
      else if (e.target.closest('.rm-prev')) { i--; pinta(); }
      else if (e.target.closest('.rm-skip')) fin();
    };
    // 2 = vio el tour con las regiones y las megas nuevas (Subversión 0.61); quien solo vio el viejo lo ve otra vez.
    const fin = () => { tourM.hidden = true; st.tour = 2; save(); };
    pinta();
    tourM.hidden = false;
  };

  // ---------- Marca y botón ----------
  const marca = () => {
    const w = document.querySelector('.logo.hero .logo-word');
    if (w && !w.parentNode.querySelector('.pb-rm-tag')) {
      const tag = document.createElement('span');
      tag.className = 'pb-rm-tag';
      tag.innerHTML = 'REMASTER' + (window.PB_SUB ? '<small>' + window.PB_SUB.sub + '</small>' : '');
      tag.setAttribute('role', 'button');
      tag.addEventListener('click', (e) => { e.stopPropagation(); if (!inRun()) abrir('juegos'); });
      w.after(tag);
    }
    if (document.title.includes('PokéBonk') && !document.title.includes('Remaster')) document.title = document.title.replace('PokéBonk', 'PokéBonk Remaster');
    const small = document.querySelector('.jay-sidebar .mm-small');
    if (small && !small.querySelector('.pb-rm-btn')) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'mm-item mini pb-rm-btn';
      b.innerHTML = '<span class="mm-ic"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M4 3h13l3 3v15H4Z" fill="#ffcb05" stroke="#2c1a4e" stroke-width="1.7" stroke-linejoin="round"/><path d="m12 7 1.5 3 3.3.5-2.4 2.3.6 3.3L12 14.6 9 16.1l.6-3.3-2.4-2.3 3.3-.5Z" fill="#ff667f" stroke="#2c1a4e" stroke-width="1.2" stroke-linejoin="round"/></svg></span><span class="mm-tx"><b>Remaster</b></span>';
      b.addEventListener('click', () => abrir('pasaporte'));
      const after = small.querySelector('.pb-isaac') || small.querySelector('.jay-donate');
      if (after) after.after(b); else small.append(b);
    }
    // Al volver de un juego (…/index.html#sala) se abre la Sala.
    if (small && location.hash === '#sala' && st.tour && !inRun()) {
      try { history.replaceState(null, '', location.pathname + location.search); } catch { location.hash = ''; }
      abrir('juegos');
    }
    // Tour la primera vez, cuando el menú ya está a la vista y sin partida.
    if ((st.tour ?? 0) < 2 && small && !inRun() && !document.querySelector('.pb-tour:not([hidden])')) tour();
  };
  setInterval(marca, 700);
  marca();

  // Avisa de insignias nuevas al volver de otro juego (sin abrir el Pasaporte).
  setTimeout(async () => {
    if (!meta()) return;
    const { nuevas } = await revisar();
    if (nuevas.length) notice('Pasaporte: ' + nuevas.map(n => n[0] + ' +' + fmt(n[1]) + ' Polvo').join(', '));
  }, 6000);
})();
