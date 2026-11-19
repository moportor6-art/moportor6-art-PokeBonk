/* Subversión propia (moportor6, 1.49-1.51): «Mapa de pruebas: Pueblo Paleta», solo en PokéBonk Lite.
   Botón 🧪 en la barra de arriba del menú de inicio (junto a Ajustes). Partida de 3 zonas sobre el mapa de Encina (el
   más llano), con construcciones de bloques (texturas del Voxel Pack de Kenney, CC0, en assets/voxel/):
   - Zona 1, Pueblo Paleta: casas de Rojo y de Azul, Laboratorio del Prof. Oak, jardín, carteles, buzones, faroles,
     cercas, muelle y el agua del sur.
   - Zona 2, Ruta 1: camino entre árboles, bordillos con hueco, hierba alta, cercas, carteles y tu rival Azul al norte.
   - Zona 3, Ciudad Verde: Centro Pokémon, Tienda, Gimnasio (cerrado), casas, estanque y el viejo que corta el paso
     hasta que pasas por la Tienda.
   1.51: se puede entrar en las casas (cuartos de bloques, sin salvajes dentro): tu madre te cura, la hermana de Azul
   te da bayas, en el Laboratorio el Prof. Oak te deja elegir una de las tres Poké Balls (Bulbasaur, Charmander o
   Squirtle: +20 % de daño de Planta, Fuego o Agua en la partida), el Centro Pokémon te cura y la Tienda te regala
   bayas y el Paquete de Oak. Personajes de bloques con diálogos (los del Modo historia), música tranquila en los
   pueblos y algo de variedad en cada partida (sitio, flores y hierba alta).
   Cada zona busca un claro, aplana el suelo (alturas del terreno, así el Pokémon pisa la base), lo cubre de pasto,
   esconde los adornos del mapa que queden dentro, levanta los bloques y añade colisiones. Salvajes de la Ruta 1 y
   guardianes Pidgeotto y Raticate; la zona 3 conserva su legendario.
   No cuenta para récords, logros, Historial ni Guardería (run.__pbPrueba).
   Las clases de Three.js se toman de objetos que ya están en la escena (el bundle no las expone). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const H = () => window.PB_HISTORIA, meta = () => window.__pbMeta;
  let pend = null;

  // ---------- menú de inicio ----------
  setInterval(() => {
    // Botón redondo en la barra de arriba, junto al de Ajustes (en la parrilla de modos no cabía).
    const aj = document.querySelector('.mm-top .jay-settings-shortcut:not(.pb-paleta)');
    if (!aj || aj.parentElement.querySelector('.pb-paleta')) return;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'jay-settings-shortcut pb-paleta'; b.title = 'Mapa de pruebas: Pueblo Paleta';
    b.innerHTML = '<span style="font-size:18px;line-height:1">🧪</span>';
    b.onclick = elegir;
    aj.before(b);
  }, 500);
  function elegir() {
    const h = H(), p = meta()?.profile; if (!h || !p) return;
    const c = h.capa('kanto'), d = document.createElement('div'); d.className = 'hb';
    d.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🧪 Mapa de pruebas: Pueblo Paleta</h2><p class="sub">Pueblo Paleta, la Ruta 1 y Ciudad Verde hechos de bloques. Entra en las casas. No cuenta para récords ni logros.</p><div style="max-height:50vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div>`;
    d.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => {
      pend = +x.dataset.sp; h.cerrar();
      Promise.resolve(window.__pbApp?.startRun?.({ species: pend, biome: 'encina', tier: 0, boosts: [], mode: 'standard' })).catch(() => { pend = null; });
    });
    d.querySelector('.hx').onclick = () => h.cerrar();
    c.append(d);
  }

  // ---------- texturas y clases de Three.js ----------
  const IMG = {};
  const cargar = n => IMG[n] ??= new Promise(ok => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => ok(null); i.src = `./assets/voxel/${n}.png`; });
  const clases = run => {
    let ref = null, tex = null, attr = null;
    run.terrain.group.parent.traverse(o => {
      if (!ref && o.isMesh && o.material?.type === 'MeshToonMaterial') ref = o;
      const pa = o.geometry?.attributes?.position; if (!attr && pa && !pa.isInterleavedBufferAttribute && !pa.isInstancedBufferAttribute) attr = pa.constructor;
      const m = o.material; if (!tex && m && !Array.isArray(m) && m.map?.isTexture && !m.map.isDataTexture && !m.map.isCompressedTexture) tex = m.map;
    });
    if (!ref || !tex || !attr) return null;
    return { Mesh: ref.constructor, Geo: ref.geometry.constructor, Attr: attr, Mat: ref.material.constructor, Tex: tex.constructor, grad: ref.material.gradientMap ?? null, cs: tex.colorSpace };
  };

  // ---------- bloques ----------
  const T = {
    pared: 'cotton_tan', blanco: 'snow', techoR: 'cotton_red', techoA: 'cotton_blue', techoV: 'cotton_green', techoL: 'wood_red',
    madera: 'wood', puerta: 'wood_red', ventana: 'glass_frame', borde: 'greystone', ladrillo: 'brick_red', piedra: 'stone',
    tronco: { top: 'trunk_top', side: 'trunk_side', bottom: 'trunk_top' }, hojas: 'leaves_transparent',
    cartel: { top: 'table', side: 'wood', bottom: 'wood' }, buzon: { top: 'cotton_red', side: 'cotton_red', bottom: 'stone' },
    bordillo: { top: 'grass_top', side: 'dirt_grass', bottom: 'dirt' }, luz: 'glass', pokeball: { top: 'cotton_red', side: 'snow', bottom: 'snow' },
    mesa: { top: 'table', side: 'wood', bottom: 'wood' }, tele: { top: 'greystone', side: 'glass_frame', bottom: 'greystone' }, mostrador: { top: 'cotton_red', side: 'snow', bottom: 'snow' }
  };
  const tx = (t, cara) => (typeof t === 'string' ? t : t[cara]);
  const transp = n => n === 'leaves_transparent' || n === 'glass_frame' || n === 'glass';
  const PLANO = /grass[1-4]|mushroom|wheat|fence/;
  const azar = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

  // Personaje de bloques (piernas, cuerpo, cabeza y pelo); tumbado = el viejo de Ciudad Verde en el suelo.
  const persona = (x, z, cuerpo, pelo, tag, tumbado = false) => persona0(x, z, cuerpo, pelo, tag, tumbado).map(c => (tumbado ? c : [c[0], c[1] * 1.35, c[2], c[3], c[4] * 1.35, c[5], c[6], c[7]]));
  const persona0 = (x, z, cuerpo, pelo, tag, tumbado = false) => tumbado
    ? [[x - 0.6, 0, z + 0.2, x + 0.1, 0.35, z + 0.8, 'cotton_blue', tag], [x + 0.1, 0, z + 0.15, x + 0.8, 0.45, z + 0.85, cuerpo, tag], [x + 0.8, 0, z + 0.3, x + 1.2, 0.4, z + 0.7, 'cotton_tan', tag], [x + 1.2, 0, z + 0.3, x + 1.3, 0.4, z + 0.7, pelo, tag]]
    : [[x + 0.28, 0, z + 0.36, x + 0.72, 0.6, z + 0.64, 'cotton_blue', tag], [x + 0.2, 0.6, z + 0.3, x + 0.8, 1.2, z + 0.7, cuerpo, tag], [x + 0.3, 1.2, z + 0.32, x + 0.7, 1.6, z + 0.68, 'cotton_tan', tag], [x + 0.28, 1.6, z + 0.3, x + 0.72, 1.7, z + 0.7, pelo, tag]];

  // Cada zona: rectángulo (en bloques, relativo al origen), dónde apareces y qué se construye.
  function zona(n) {
    const V = new Map(), cruces = [], suelo = [], col = [], puertas = [], vallas = [], cubos = [], puntos = [];
    const pon = (x, y, z, b) => V.set(`${x},${y},${z}`, b);
    const solidoC = (x0, x1, z0, z1, h) => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) if (x === x0 || x === x1 || z === z0 || z === z1) col.push({ x: x + 0.5, z: z + 0.5, r: 0.75, h }); };
    const arbol = (x, z, alto = 4) => {
      for (let i = 0; i < alto; i++) pon(x, i, z, T.tronco);
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) for (let dy = alto - 1; dy <= alto; dy++) if (dx || dz || dy === alto) pon(x + dx, dy, z + dz, T.hojas);
      pon(x, alto + 1, z, T.hojas);
      col.push({ x: x + 0.5, z: z + 0.5, r: 0.7, h: alto + 2 });
    };
    const cartel = (x, z) => { pon(x, 0, z, T.madera); pon(x, 1, z, T.cartel); col.push({ x: x + 0.5, z: z + 0.5, r: 0.45, h: 2.2 }); };
    const buzon = (x, z) => { pon(x, 0, z, T.madera); pon(x, 1, z, T.buzon); col.push({ x: x + 0.5, z: z + 0.5, r: 0.4, h: 2.2 }); };
    const farol = (x, z) => { for (let y = 0; y < 3; y++) pon(x, y, z, T.piedra); pon(x, 3, z, T.luz); col.push({ x: x + 0.5, z: z + 0.5, r: 0.4, h: 4.2 }); };
    const valla = (x0, z0, x1, z1) => {
      const dx = Math.sign(x1 - x0), dz = Math.sign(z1 - z0), L = Math.max(Math.abs(x1 - x0), Math.abs(z1 - z0));
      for (let i = 0; i <= L; i++) { const x = x0 + dx * i, z = z0 + dz * i; vallas.push([x, z, dx !== 0]); col.push({ x: x + 0.5, z: z + 0.5, r: 0.45, h: 1.3 }); }
    };
    const camino = (x0, x1, z0, z1, t = 'gravel_dirt') => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) suelo.push([x, z, t]); };
    const flores = (x0, x1, z0, z1, d = 2) => { const k = azar(0, d - 1); for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) if (((x * 3 + z * 5 + k) % d + d) % d === 0) cruces.push([x, 0, z, Math.random() < 0.3 ? 'mushroom_red' : 'grass2']); };
    const hierba = (x0, x1, z0, z1) => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) if (Math.random() < 0.85) cruces.push([x, 0, z, Math.random() < 0.5 ? 'grass3' : 'grass4']); };
    const npc = (x, z, cuerpo, pelo, tag, que, r = 1.6) => { cubos.push(...persona(x, z, cuerpo, pelo, tag)); col.push({ x: x + 0.5, z: z + 0.5, r: 0.45, h: 2 }); puntos.push({ x: x + 0.5, z: z + 0.5, r, que }); };
    // Casa de dos aguas (cumbrera de este a oeste) con puerta al sur o al norte.
    const casa = ({ x0, z0, w = 7, d = 6, alt = 4, techo, pared = T.pared, puertaSur = true, chimenea = false }) => {
      const x1 = x0 + w - 1, z1 = z0 + d - 1, zp = puertaSur ? z1 : z0, xp = x0 + Math.floor(w / 2);
      for (let y = 0; y < alt; y++) for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
        if (x !== x0 && x !== x1 && z !== z0 && z !== z1) continue;
        let b = y === 0 ? T.borde : pared;
        if (y === 2 && ((z === z0 || z === z1) && (x === x0 + 1 || x === x1 - 1 || (w > 9 && (x - x0) % 3 === 1 && x !== xp)) || (x === x0 || x === x1) && (z - z0) % 3 === 1)) b = T.ventana;
        if (z === zp && x === xp && y < 2) b = T.puerta;
        pon(x, y, z, b);
      }
      const nt = Math.ceil(d / 2) + 1;
      for (let i = 0; i < nt; i++) for (let x = x0 - 1; x <= x1 + 1; x++) { pon(x, alt + i, z0 - 1 + i, techo); pon(x, alt + i, z1 + 1 - i, techo); }
      for (let i = 0; i < nt - 1; i++) for (let z = z0 + i; z <= z1 - i; z++) { pon(x0, alt + i, z, pared); pon(x1, alt + i, z, pared); }
      if (chimenea) for (let y = alt; y < alt + nt + 1; y++) pon(x1 - 1, y, z0 + 1, T.ladrillo);
      for (const x of [x0 + 1, x1 - 1]) cruces.push([x, 0, puertaSur ? z1 + 1 : z0 - 1, 'grass2']);
      solidoC(x0, x1, z0, z1, alt + nt + 1);
      return { xp, zp: puertaSur ? z1 + 1 : z0 - 1, sur: puertaSur };
    };
    const R = n === 1 ? { x0: -26, x1: 26, z0: -34, z1: 26 } : n === 2 ? { x0: -18, x1: 18, z0: -60, z1: 30 } : { x0: -32, x1: 32, z0: -34, z1: 30 };
    let ini, cuartos = [];
    if (n === 1) { // ---------------- Pueblo Paleta ----------------
      const rojo = casa({ x0: -12, z0: -16, techo: T.techoR, chimenea: true });
      const azul = casa({ x0: 6, z0: -16, techo: T.techoA, chimenea: true });
      const lab = casa({ x0: 2, z0: 3, w: 13, d: 8, alt: 5, techo: T.techoL, pared: T.blanco, puertaSur: false, chimenea: true });
      puertas.push({ ...rojo, que: 'casa-rojo' }, { ...azul, que: 'casa-azul' }, { ...lab, que: 'lab' });
      cuartos = ['casa-rojo', 'casa-azul', 'lab'];
      buzon(rojo.xp - 2, rojo.zp + 1); buzon(azul.xp - 2, azul.zp + 1);
      cartel(rojo.xp + 2, rojo.zp + 1); cartel(azul.xp + 2, azul.zp + 1); cartel(lab.xp - 3, lab.zp - 1); cartel(-3, -3);
      farol(-3, -8); farol(3, -8); farol(-3, 1); farol(3, 1);
      camino(-1, 1, -34, -9); camino(-12, 14, -9, -6); camino(rojo.xp, rojo.xp, -9, rojo.zp); camino(azul.xp, azul.xp, -9, azul.zp);
      camino(-1, 1, -6, 15); camino(1, lab.xp, -1, 0); camino(lab.xp, lab.xp, 0, lab.zp);
      valla(-14, 3, -4, 3); valla(-14, 11, -4, 11); valla(-14, 4, -14, 10); valla(-4, 4, -4, 5); valla(-4, 9, -4, 10);
      flores(-13, -5, 4, 10, 2); flores(-10, -4, -5, -4, 3); flores(5, 10, -5, -4, 3);
      valla(-3, -33, -3, -20); valla(3, -33, 3, -20);
      for (let x = -24; x <= 24; x += 3) if (Math.abs(x) > 4) arbol(x, -30);
      for (let z = -27; z <= 13; z += 3) { arbol(-24, z); arbol(24, z); }
      for (let x = -22; x <= 22; x++) for (let z = 16; z <= 25; z++) if (!(Math.abs(x) <= 1 && z <= 21)) suelo.push([x, z, z === 16 ? 'sand' : 'water']);
      for (let z = 16; z <= 21; z++) for (let x = -1; x <= 1; x++) suelo.push([x, z, 'wood']);
      for (let x = -22; x <= 22; x++) if (Math.abs(x) > 1) col.push({ x: x + 0.5, z: 17.5, r: 0.8, h: 3 });
      for (let z = 17; z <= 22; z++) { col.push({ x: -1.6, z: z + 0.5, r: 0.5, h: 3 }); col.push({ x: 2.6, z: z + 0.5, r: 0.5, h: 3 }); }
      col.push({ x: 0.5, z: 22.6, r: 1.2, h: 3 });
      ini = { x: 0, z: -4 };
    } else if (n === 2) { // ---------------- Ruta 1 ----------------
      for (let z = -58; z <= 28; z += 2) { arbol(-16, z, 3 + ((z >> 1) & 1)); arbol(16, z, 4 - ((z >> 1) & 1)); }
      const fase = Math.random() * 6, ruta = z => Math.round(Math.sin(z / 14 + fase) * 5);
      for (let z = -60; z <= 30; z++) { const c = ruta(z); camino(c - 1, c + 1, z, z); }
      for (const z of [-40, -20, 0, 18]) { const c = ruta(z); for (let x = -14; x <= 14; x++) if (Math.abs(x - c) > 2) { pon(x, 0, z, T.bordillo); col.push({ x: x + 0.5, z: z + 0.5, r: 0.6, h: 1.3 }); } }
      for (const [z0, z1] of [[-55, -46], [-34, -24], [-14, -6], [4, 12], [21, 27]]) { const lado = Math.random() < 0.5 ? -1 : 1, x0 = lado < 0 ? -13 : 5; hierba(x0, x0 + azar(5, 8), z0, z1); }
      valla(-6, -30, -6, -24); valla(9, -10, 9, -4);
      cartel(ruta(26) + 3, 26); cartel(ruta(-56) + 3, -56);
      arbol(-4 + azar(-2, 2), -50); arbol(10, 8 + azar(-2, 2)); arbol(-10, 3 + azar(-2, 2));
      // Azul espera al norte, junto al camino.
      npc(ruta(-50) + 3, -50, 'cotton_blue', 'wood', 'azul', 'rival', 3.5);
      ini = { x: ruta(25), z: 25 };
    } else { // ---------------- Ciudad Verde ----------------
      const centro = casa({ x0: -18, z0: -12, w: 11, d: 7, alt: 4, techo: T.techoR, pared: T.blanco });
      const tienda = casa({ x0: 6, z0: -12, w: 9, d: 7, alt: 4, techo: T.techoA, pared: T.blanco });
      const gym = casa({ x0: -8, z0: -32, w: 17, d: 11, alt: 6, techo: T.techoV, pared: T.borde });
      casa({ x0: -24, z0: 8, techo: T.techoR, chimenea: true }); casa({ x0: 16, z0: 6, techo: T.techoA, chimenea: true });
      puertas.push({ ...centro, que: 'centro' }, { ...tienda, que: 'tienda' });
      puntos.push({ x: gym.xp + 0.5, z: gym.zp + 0.5, r: 1.8, que: 'gimnasio' });
      cuartos = ['centro', 'tienda'];
      pon(centro.xp, 3, centro.zp, T.pokeball);
      cartel(-3, -19); cartel(centro.xp + 3, centro.zp + 1); cartel(tienda.xp + 3, tienda.zp + 1);
      farol(-6, -3); farol(4, -3); farol(-6, 4); farol(4, 4);
      camino(-1, 1, -21, 30); camino(-26, 26, -3, -1); camino(centro.xp, centro.xp, centro.zp, -3); camino(tienda.xp, tienda.xp, tienda.zp, -3);
      for (let x = 6; x <= 18; x++) for (let z = 16; z <= 26; z++) { const borde = x === 6 || x === 18 || z === 16 || z === 26; suelo.push([x, z, borde ? 'sand' : 'water']); if (!borde && (x === 7 || x === 17 || z === 17 || z === 25)) col.push({ x: x + 0.5, z: z + 0.5, r: 0.7, h: 3 }); }
      flores(-14, -6, 18, 24, 2); valla(-15, 17, -5, 17); valla(-15, 25, -5, 25);
      for (let x = -30; x <= 30; x += 3) if (Math.abs(x) > 3) { arbol(x, -33); arbol(x, 29); }
      for (let z = -30; z <= 27; z += 3) { arbol(-30, z); arbol(30, z); }
      // El viejo tumbado en el camino del norte (corta el paso al Gimnasio hasta que pasas por la Tienda).
      cubos.push(...persona(-0.4, -16, 'wood', 'snow', 'viejo', true));
      cubos.push(...persona(3, -16, 'wood', 'snow', 'viejo2'));
      for (let x = -2; x <= 2; x++) col.push({ x: x + 0.5, z: -15.5, r: 0.7, h: 2, tag: 'viejo' });
      puntos.push({ x: 0.5, z: -14.5, r: 2.4, que: 'viejo' });
      ini = { x: 0, z: 24 };
    }
    return { R, V, cruces, suelo, col, puertas, vallas, cubos, puntos, ini, cuartos };
  }

  // Cuartos por dentro: 11 × 9 bloques, sin techo (se ve desde arriba), salida por el hueco del sur.
  const ANCHO = 13;
  function interiores(lista) {
    const V = new Map(), cubos = [], suelo = [], col = [], puntos = [], cuartos = {};
    const pon = (x, y, z, b) => V.set(`${x},${y},${z}`, b);
    lista.forEach((que, i) => {
      const x0 = i * ANCHO, x1 = x0 + 10, z0 = 0, z1 = 8, sx = x0 + 5;
      const pared = que === 'lab' || que === 'centro' || que === 'tienda' ? T.blanco : T.pared;
      for (let y = 0; y < 2; y++) for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
        if (x !== x0 && x !== x1 && z !== z0 && z !== z1) continue;
        if (z === z1 && x === sx) continue;
        pon(x, y, z, y === 1 && z === z0 && (x - x0) % 3 === 1 ? T.ventana : pared);
        col.push({ x: x + 0.5, z: z + 0.5, r: 0.7, h: 3 });
      }
      for (let x = x0 + 1; x < x1; x++) for (let z = z0 + 1; z < z1; z++) suelo.push([x, z, que === 'centro' ? 'greysand' : 'wood']);
      suelo.push([sx, z1, 'wood_red']);
      const mueble = (x, z, b, alto = 1) => { for (let y = 0; y < alto; y++) pon(x, y, z, b); col.push({ x: x + 0.5, z: z + 0.5, r: 0.6, h: 2 }); };
      const persona_ = (x, z, cuerpo, pelo, q) => { cubos.push(...persona(x, z, cuerpo, pelo, '')); col.push({ x: x + 0.5, z: z + 0.5, r: 0.45, h: 2 }); puntos.push({ x: x + 0.5, z: z + 1.5, r: 1.4, que: q }); };
      if (que === 'casa-rojo') {
        mueble(x0 + 2, z0 + 1, T.tele); mueble(x0 + 1, z0 + 1, T.madera, 2);
        mueble(x0 + 5, z0 + 4, T.mesa); mueble(x0 + 6, z0 + 4, T.mesa);
        mueble(x1 - 1, z0 + 1, T.madera, 2); mueble(x1 - 2, z0 + 1, T.madera, 2);
        persona_(x0 + 5, z0 + 2, 'cotton_red', 'wood', 'mama');
      } else if (que === 'casa-azul') {
        mueble(x0 + 5, z0 + 4, T.mesa); mueble(x0 + 4, z0 + 4, T.mesa);
        mueble(x0 + 1, z0 + 1, T.madera, 2); mueble(x0 + 2, z0 + 1, T.madera, 2); mueble(x1 - 1, z0 + 1, T.tele);
        persona_(x0 + 6, z0 + 2, 'cotton_green', 'wood', 'hermana');
      } else if (que === 'lab') {
        for (let x = x0 + 1; x <= x0 + 3; x++) mueble(x, z0 + 1, T.madera, 2);
        for (let x = x1 - 3; x <= x1 - 1; x++) mueble(x, z0 + 1, T.madera, 2);
        mueble(x0 + 1, z0 + 4, T.tele, 2); mueble(x1 - 1, z0 + 4, T.tele, 2);
        // Mesa con las tres Poké Balls.
        for (let x = x0 + 4; x <= x0 + 6; x++) pon(x, 0, z0 + 4, T.mesa);
        for (let x = x0 + 4; x <= x0 + 6; x++) col.push({ x: x + 0.5, z: z0 + 4.5, r: 0.6, h: 2 });
        [['grass', 1], ['fire', 4], ['water', 7]].forEach(([t, sp], k) => {
          const x = x0 + 4 + k;
          cubos.push([x + 0.3, 1, z0 + 4.3, x + 0.7, 1.4, z0 + 4.5, 'cotton_red', ''], [x + 0.3, 1, z0 + 4.5, x + 0.7, 1.4, z0 + 4.7, 'snow', '']);
          puntos.push({ x: x + 0.5, z: z0 + 5.6, r: 0.8, que: 'ball', tipo: t, sp });
        });
        persona_(x0 + 8, z0 + 3, 'snow', 'greystone', 'oak');
      } else if (que === 'centro') {
        for (let x = x0 + 3; x <= x0 + 7; x++) mueble(x, z0 + 3, T.mostrador);
        persona_(x0 + 5, z0 + 1, 'snow', 'cotton_red', 'enfermera');
        puntos.push({ x: x0 + 5.5, z: z0 + 4.6, r: 1.4, que: 'enfermera' });
        mueble(x0 + 1, z0 + 1, T.tele, 2); mueble(x1 - 1, z0 + 1, T.tele, 2);
      } else if (que === 'tienda') {
        for (let z = z0 + 2; z <= z0 + 4; z++) mueble(x0 + 3, z, T.mostrador);
        persona_(x0 + 1, z0 + 3, 'cotton_blue', 'wood', 'tendero');
        puntos.push({ x: x0 + 4.6, z: z0 + 3.5, r: 1.4, que: 'tendero' });
        for (let z = z0 + 1; z <= z0 + 6; z += 2) { mueble(x1 - 1, z, T.madera, 2); mueble(x1 - 3, z, T.madera, 2); }
      }
      puntos.push({ x: sx + 0.5, z: z1 + 0.9, r: 0.9, que: 'salir', de: que });
      cuartos[que] = { x: sx + 0.5, z: z1 - 1.2 };
    });
    return { R: { x0: -1, x1: lista.length * ANCHO - 1, z0: -1, z1: 10 }, V, cruces: [], suelo, col, puertas: [], vallas: [], cubos, puntos, cuartos, interior: true };
  }

  // ---------- terreno: busca sitio, aplana y cubre ----------
  const claro = (t, R, evita) => {
    const W = (t.world ?? 360) / 2 - 10, w = R.x1 - R.x0, d = R.z1 - R.z0, todos = [];
    for (let cx = -W + w / 2 + 8; cx <= W - w / 2 - 8; cx += 8) for (let cz = -W + d / 2 + 8; cz <= W - d / 2 - 8; cz += 8) {
      const ox = Math.round(cx - (R.x0 + R.x1) / 2), oz = Math.round(cz - (R.z0 + R.z1) / 2);
      if (!t.inBounds(ox + R.x0, oz + R.z0, 4) || !t.inBounds(ox + R.x1, oz + R.z1, 4)) continue;
      if (evita && ox + R.x1 + 20 > evita.x0 && ox + R.x0 - 20 < evita.x1 && oz + R.z1 + 20 > evita.z0 && oz + R.z0 - 20 < evita.z1) continue;
      let mn = 1e9, mx = -1e9, agua = 0;
      for (let x = R.x0; x <= R.x1; x += 4) for (let z = R.z0; z <= R.z1; z += 4) { const h = t.height(ox + x, oz + z); mn = Math.min(mn, h); mx = Math.max(mx, h); if (t.inWater?.(ox + x, oz + z)) agua++; }
      todos.push({ ox, oz, nota: (mx - mn) + agua * 4, max: mx });
    }
    todos.sort((a, b) => a.nota - b.nota);
    // Algo de variedad: uno de los cuatro mejores sitios (si son casi igual de llanos).
    const buenos = todos.filter(s => s.nota <= (todos[0]?.nota ?? 0) + 1.5).slice(0, 4);
    return buenos[Math.floor(Math.random() * buenos.length)] ?? todos[0] ?? null;
  };
  const ANILLO = 6;
  function aplanar(t, R, ox, oz, Y0) {
    const n = t.res + 1, Hh = t.heights, orig = Float32Array.from(Hh);
    const a0 = Math.max(0, Math.floor((ox + R.x0 - ANILLO + t.world / 2) / t.cell) - 1), a1 = Math.min(n - 1, Math.ceil((ox + R.x1 + 1 + ANILLO + t.world / 2) / t.cell) + 1);
    const b0 = Math.max(0, Math.floor((oz + R.z0 - ANILLO + t.world / 2) / t.cell) - 1), b1 = Math.min(n - 1, Math.ceil((oz + R.z1 + 1 + ANILLO + t.world / 2) / t.cell) + 1);
    for (let a = a0; a <= a1; a++) for (let b = b0; b <= b1; b++) {
      const wx = a * t.cell - t.world / 2, wz = b * t.cell - t.world / 2;
      const dx = Math.max(ox + R.x0 - wx, 0, wx - (ox + R.x1 + 1)), dz = Math.max(oz + R.z0 - wz, 0, wz - (oz + R.z1 + 1)), dd = Math.hypot(dx, dz);
      if (dd >= ANILLO) continue;
      const k = dd / ANILLO, s = k * k * (3 - 2 * k), i = t.idx(a, b);
      Hh[i] = Y0 * (1 - s) + Math.min(Y0, orig[i]) * s;
    }
    return { a0, a1, b0, b1 };
  }

  // Levanta una parte (pueblo o cuartos) en su sitio: aplana, esconde adornos, malla y colisiones.
  async function levantar(run, C, Z, sitio) {
    const t = run.terrain, { ox, oz } = sitio, Y0 = Math.ceil(sitio.max);
    const celdas = aplanar(t, Z.R, ox, oz, Y0);
    const dentro = (x, z, m = 0) => x > ox + Z.R.x0 - m && x < ox + Z.R.x1 + 1 + m && z > oz + Z.R.z0 - m && z < oz + Z.R.z1 + 1 + m;
    for (const k of t.colliders) if (dentro(k.x, k.z, ANILLO)) k.off = true;
    const ocultos = new Set();
    t.group.parent.traverse(o => {
      if (o.name?.startsWith('pb-') || !o.isInstancedMesh) return;
      const m = o.instanceMatrix?.array; if (!m) return;
      let cambio = false;
      for (let i = 0; i < o.count; i++) { const x = m[i * 16 + 12], z = m[i * 16 + 14]; if (dentro(x, z, ANILLO) && m[i * 16 + 15]) { for (let j = 0; j < 16; j++) m[i * 16 + j] = 0; cambio = true; } }
      if (cambio) o.instanceMatrix.needsUpdate = true;
    });
    // Adornos del mapa (grupos con mallas toon) dentro de la zona; no los interactuables, los sprites ni el terreno.
    const inter = new Set((run.interactables?.list ?? []).map(o => o.group).filter(Boolean));
    const esAdorno = o => { let toon = false; o.traverse(c => { if (c.isMesh && c.material?.type === 'MeshToonMaterial') toon = true; }); return toon; };
    const visitar = o => {
      for (const c of o.children) {
        if (c === t.group || c.name?.startsWith('pb-') || inter.has(c) || c.isLight || c.isCamera) continue;
        const e = c.matrixWorld?.elements, x = e?.[12], z = e?.[14];
        if (c.children.length && !c.isMesh && !(x || z)) { visitar(c); continue; }
        if (x != null && dentro(x, z, ANILLO) && esAdorno(c)) ocultos.add(c);
      }
    };
    try { t.group.parent.updateMatrixWorld?.(true); visitar(t.group.parent); } catch {}
    for (const g of [t.env, ...(t.envList ?? [])]) for (const c of g?.children ?? []) { const p = c.position; if (p && dentro(p.x, p.z, ANILLO)) ocultos.add(c); }
    // Además, malla a malla: árboles y rocas metidos en grupos grandes (por trozos de mapa).
    const enInter = o => { for (let q = o; q; q = q.parent) if (inter.has(q)) return true; return false; };
    try {
      const v = { x: 0, y: 0, z: 0 };
      t.group.parent.traverse(o => {
        if (!o.isMesh || o.isInstancedMesh || o.material?.type !== 'MeshToonMaterial' || o.name?.startsWith('pb-') || o.parent === t.group) return;
        const g = o.geometry; if (!g) return;
        g.boundingSphere || g.computeBoundingSphere?.();
        const c = g.boundingSphere?.center; if (!c || g.boundingSphere.radius > 30) return;
        const e = o.matrixWorld.elements, x = e[0] * c.x + e[4] * c.y + e[8] * c.z + e[12], z = e[2] * c.x + e[6] * c.y + e[10] * c.z + e[14];
        if (dentro(x, z, ANILLO) && !enInter(o)) ocultos.add(o);
      });
    } catch {}
    for (const c of ocultos) c.visible = false;
    for (const o of run.interactables?.list ?? []) if (dentro(o.x, o.z, ANILLO)) {
      // En los cuartos no caben altares ni cofres: se apartan fuera; en el pueblo se ajustan al suelo nuevo.
      if (Z.interior) { o.x = ox + Z.R.x1 + ANILLO + 4; o.z = oz + (Z.R.z0 + Z.R.z1) / 2; if (o.group?.position) { o.group.position.x = o.x; o.group.position.z = o.z; } }
      const y = t.height(o.x, o.z); o.y = y; if (o.group?.position) o.group.position.y = y;
    }

    const nombres = new Set(['grass_top', 'fence_wood']);
    for (const b of Z.V.values()) for (const c of ['top', 'side', 'bottom']) nombres.add(tx(b, c));
    for (const c of Z.cruces) nombres.add(c[3]);
    for (const c of Z.suelo) nombres.add(c[2]);
    for (const c of Z.cubos) nombres.add(c[6]);
    const img = {}; await Promise.all([...nombres].map(async n => { img[n] = await cargar(n); }));
    const mats = {};
    const mat = n => mats[n] ??= (() => {
      const tt = new C.Tex(img[n]); tt.magFilter = tt.minFilter = 1003; tt.generateMipmaps = false; if (C.cs) tt.colorSpace = C.cs; tt.needsUpdate = true;
      const m = new C.Mat({ map: tt, gradientMap: C.grad, alphaTest: transp(n) || PLANO.test(n) ? 0.5 : 0, side: PLANO.test(n) || n === 'water' ? 2 : 0 });
      if (n === 'grass_top') m.color?.setHex?.(0xa8c48c); // pasto algo más apagado, como el del mapa
      return m;
    })();
    const caras = {};
    const quad = (n, v, nor, tag = '') => { const g = caras[tag + '|' + n] ??= { n, tag, p: [], nn: [], u: [], i: [] }, b = g.p.length / 3; for (const q of v) g.p.push(q[0], q[1], q[2]), g.nn.push(...nor); g.u.push(0, 0, 1, 0, 1, 1, 0, 1); g.i.push(b, b + 1, b + 2, b, b + 2, b + 3); };
    const DIRS = [[1, 0, 0, 'side'], [-1, 0, 0, 'side'], [0, 1, 0, 'top'], [0, -1, 0, 'bottom'], [0, 0, 1, 'side'], [0, 0, -1, 'side']];
    const solido = (x, y, z) => { const b = Z.V.get(`${x},${y},${z}`); return b && !transp(tx(b, 'side')); };
    const caja = (X0, Y0b, W0, X1, Y1, W1, n, tag, sinBase) => {
      quad(n, [[X1, Y0b, W1], [X1, Y0b, W0], [X1, Y1, W0], [X1, Y1, W1]], [1, 0, 0], tag);
      quad(n, [[X0, Y0b, W0], [X0, Y0b, W1], [X0, Y1, W1], [X0, Y1, W0]], [-1, 0, 0], tag);
      quad(n, [[X0, Y0b, W1], [X1, Y0b, W1], [X1, Y1, W1], [X0, Y1, W1]], [0, 0, 1], tag);
      quad(n, [[X1, Y0b, W0], [X0, Y0b, W0], [X0, Y1, W0], [X1, Y1, W0]], [0, 0, -1], tag);
      quad(n, [[X0, Y1, W1], [X1, Y1, W1], [X1, Y1, W0], [X0, Y1, W0]], [0, 1, 0], tag);
      if (!sinBase) quad(n, [[X0, Y0b, W0], [X1, Y0b, W0], [X1, Y0b, W1], [X0, Y0b, W1]], [0, -1, 0], tag);
    };
    for (const [key, b] of Z.V) {
      const [x, y0, z] = key.split(',').map(Number), y = Y0 + y0;
      for (const [dx, dy, dz, cara] of DIRS) {
        if (solido(x + dx, y0 + dy, z + dz)) continue;
        if (dy === -1 && y0 === 0) continue;
        const n = tx(b, cara), X = ox + x, W = oz + z;
        let v;
        if (dx === 1) v = [[X + 1, y, W + 1], [X + 1, y, W], [X + 1, y + 1, W], [X + 1, y + 1, W + 1]];
        else if (dx === -1) v = [[X, y, W], [X, y, W + 1], [X, y + 1, W + 1], [X, y + 1, W]];
        else if (dz === 1) v = [[X, y, W + 1], [X + 1, y, W + 1], [X + 1, y + 1, W + 1], [X, y + 1, W + 1]];
        else if (dz === -1) v = [[X + 1, y, W], [X, y, W], [X, y + 1, W], [X + 1, y + 1, W]];
        else if (dy === 1) v = [[X, y + 1, W + 1], [X + 1, y + 1, W + 1], [X + 1, y + 1, W], [X, y + 1, W]];
        else v = [[X, y, W], [X + 1, y, W], [X + 1, y, W + 1], [X, y, W + 1]];
        quad(n, v, [dx, dy, dz]);
      }
    }
    for (const [x0, y0, z0, x1, y1, z1, n, tag] of Z.cubos) caja(ox + x0, Y0 + y0, oz + z0, ox + x1, Y0 + y1, oz + z1, n, tag, y0 === 0);
    for (const [x, y0, z, n] of Z.cruces) {
      const X = ox + x, W = oz + z, y = Y0 + y0;
      quad(n, [[X, y, W], [X + 1, y, W + 1], [X + 1, y + 1, W + 1], [X, y + 1, W]], [0, 1, 0]);
      quad(n, [[X + 1, y, W], [X, y, W + 1], [X, y + 1, W + 1], [X + 1, y + 1, W]], [0, 1, 0]);
    }
    for (const [x, z, eje] of Z.vallas) {
      const X = ox + x, W = oz + z, y = Y0;
      if (eje) quad('fence_wood', [[X, y, W + 0.5], [X + 1, y, W + 0.5], [X + 1, y + 1, W + 0.5], [X, y + 1, W + 0.5]], [0, 0, 1]);
      else quad('fence_wood', [[X + 0.5, y, W + 1], [X + 0.5, y, W], [X + 0.5, y + 1, W], [X + 0.5, y + 1, W + 1]], [1, 0, 0]);
    }
    const marcado = new Set();
    for (const [x, z, n] of Z.suelo) {
      if (marcado.has(`${x},${z}`)) continue; marcado.add(`${x},${z}`);
      const X = ox + x, W = oz + z, y = Y0 + (n === 'water' ? 0.06 : n === 'wood' && !Z.interior ? 0.25 : 0.04);
      quad(n, [[X, y, W + 1], [X + 1, y, W + 1], [X + 1, y, W], [X, y, W]], [0, 1, 0]);
    }
    const { a0, a1, b0, b1 } = celdas, hgt = (a, b) => t.heights[t.idx(a, b)] + 0.02;
    for (let a = a0; a < a1; a++) for (let b = b0; b < b1; b++) {
      const x = a * t.cell - t.world / 2, z = b * t.cell - t.world / 2, X = x + t.cell, W = z + t.cell;
      if (!dentro(x + t.cell / 2, z + t.cell / 2, ANILLO)) continue;
      quad('grass_top', [[x, hgt(a, b + 1), W], [X, hgt(a + 1, b + 1), W], [X, hgt(a + 1, b), z], [x, hgt(a, b), z]], [0, 1, 0]);
    }
    const mallas = {};
    for (const g of Object.values(caras)) {
      const geo = new C.Geo();
      geo.setAttribute('position', new C.Attr(new Float32Array(g.p), 3));
      geo.setAttribute('normal', new C.Attr(new Float32Array(g.nn), 3));
      geo.setAttribute('uv', new C.Attr(new Float32Array(g.u), 2));
      geo.setIndex(g.i);
      const m = new C.Mesh(geo, mat(g.n)); m.name = 'pb-paleta' + (g.tag ? '-' + g.tag : ''); m.frustumCulled = false;
      t.group.add(m);
      (mallas[g.tag] ??= []).push(m);
    }
    const cols = {};
    for (const c of Z.col) { const k = { x: ox + c.x, z: oz + c.z, r: c.r, h: Y0 + c.h }; t.addCollider(k); if (c.tag) (cols[c.tag] ??= []).push(k); }
    try { t.solidBoxes.push({ x0: ox + Z.R.x0, x1: ox + Z.R.x1, z0: oz + Z.R.z0, z1: oz + Z.R.z1 }); } catch {}
    return { ox, oz, Y0, Z, mallas, cols };
  }

  async function construir(run, nz) {
    const C = clases(run); if (!C) return null;
    const t = run.terrain, Z = zona(nz), sitio = claro(t, Z.R); if (!sitio) return null;
    const s = await levantar(run, C, Z, sitio);
    if (Z.cuartos.length) {
      const I = interiores(Z.cuartos), si = claro(t, I.R, { x0: sitio.ox + Z.R.x0, x1: sitio.ox + Z.R.x1, z0: sitio.oz + Z.R.z0, z1: sitio.oz + Z.R.z1 });
      if (si) s.dentro = await levantar(run, C, I, si);
    }
    for (const m of s.mallas['viejo2'] ?? []) m.visible = false;
    return s;
  }

  // ---------- partida ----------
  const ZONAS = ['', '🏠 Pueblo Paleta', '🌿 Ruta 1', '🏙️ Ciudad Verde'];
  const CIELO = [null,
    { sky: [0x6ac0ff, 0xe8f6ff], fog: 0xdcefff, light: 1.08, sun: 0xfff2d0, motes: 'pollen' },
    { sky: [0x58b0ff, 0xe0f2ff], fog: 0xd4ecff, light: 1.05, sun: 0xfff0c8, motes: 'leaves' },
    { sky: [0xffb070, 0xffe8c0], fog: 0xffd8b0, light: 1, sun: 0xffc890, motes: 'pollen' }];
  const OAK = 'prof-kanto', AZUL = 'azul';
  const TIPO = { grass: 'Planta', fire: 'Fuego', water: 'Agua' };
  const PK = { 1: 'Bulbasaur', 4: 'Charmander', 7: 'Squirtle' };

  // Diálogo del Modo historia con la partida detenida.
  const hablar = (run, lineas, fin) => {
    const h = H(); if (!h?.dialogo) { fin?.(); return; }
    const antes = run.state; run.state = 'modal';
    try {
      h.dialogo('kanto', lineas, () => {
        if (run.state === 'over' || run.state === 'dead') return;
        try { run.resume ? run.resume() : (run.state = antes === 'modal' ? 'play' : antes); } catch { run.state = 'play'; }
        try { fin?.(); } catch {}
      });
    } catch { run.state = 'play'; fin?.(); }
  };
  const llevar = (run, x, z) => { const p = run.player.pos; p.x = x; p.z = z; p.y = run.terrain.height(x, z) + 0.2; try { run.camTarget?.copy?.(p); } catch {} };

  // Dentro de las casas: no aparecen salvajes y los de fuera se quedan quietos.
  const quietos = new Map();
  const dentroDe = (run, si) => {
    run.__pbDentro = si;
    const d = run.director;
    if (d && !d.__pbPaleta) { const u = d.update.bind(d); d.update = (...x) => (run.__pbDentro ? undefined : u(...x)); d.__pbPaleta = true; }
    if (!si) { const E = run.enemies; for (const [j, [g, v]] of quietos) if (E.gen[j] === g && E.alive[j]) E.speed[j] = v; quietos.clear(); }
  };

  const accion = (run, P, s, pt) => {
    const p = run.player, Pr = P;
    switch (pt.que) {
      case 'salir': {
        const d = s.Z.puertas.find(x => x.que === pt.de); if (!d) return;
        dentroDe(run, false);
        llevar(run, s.ox + d.xp + 0.5, s.oz + d.zp + 0.5 + (d.sur === false ? -1.6 : 1.6));
        P.cd = performance.now() + 1500;
        return;
      }
      case 'mama': if (Pr.hecho.has('mama')) return hablar(run, [['', 'Mamá', '¡Cuídate mucho, cariño!']]);
        Pr.hecho.add('mama');
        return hablar(run, [['', 'Mamá', '¡Hola, cariño! ¿Ya te vas de aventura?'], ['', 'Mamá', 'Descansa un poco antes de salir.']], () => { p.hp = p.maxHp; run.ui.toast('❤️ Vida al máximo', null); });
      case 'hermana': if (Pr.hecho.has('hermana')) return hablar(run, [['', 'Hermana de Azul', '¡Mucha suerte en tu viaje!']]);
        Pr.hecho.add('hermana');
        return hablar(run, [['', 'Hermana de Azul', '¡Hola! Mi hermano ya se ha ido al laboratorio.'], ['', 'Hermana de Azul', 'Toma estas bayas para el camino.']], () => { window.PB_BOLSA?.dar?.('sitrus', 3); run.ui.toast('🍊 +3 Bayas Zidra', null); });
      case 'oak': return hablar(run, Pr.regalo
        ? [[OAK, 'Prof. Oak', `¡Cuida bien de tu nuevo compañero! Tus ataques de tipo ${TIPO[Pr.regalo]} serán más fuertes.`]]
        : [[OAK, 'Prof. Oak', '¡Hola! Bienvenido al mundo de los Pokémon.'], [OAK, 'Prof. Oak', 'En la mesa hay tres Poké Balls. Acércate a una: ¡te ayudará en esta partida!']]);
      case 'ball': {
        if (Pr.regalo) return;
        Pr.regalo = pt.tipo;
        return hablar(run, [['pk:' + pt.sp, PK[pt.sp], `¡Has elegido a ${PK[pt.sp]}, el Pokémon de tipo ${TIPO[pt.tipo]}!`], [OAK, 'Prof. Oak', `¡Buena elección! Durante esta partida tus ataques de tipo ${TIPO[pt.tipo]} harán un 20 % más de daño.`]], () => {
          const C = run.combat; if (C && !C.__pbRegalo) { const h = C.hit.bind(C); C.hit = (j, d, o, ...x) => h(j, o?.type === run.__pbPrueba?.regalo ? d * 1.2 : d, o, ...x); C.__pbRegalo = true; }
          try { run.ui.banner(`🎁 ${PK[pt.sp]} te acompaña`, `+20 % de daño de tipo ${TIPO[pt.tipo]}`, '#ffd84a', { species: pt.sp }); } catch {}
        });
      }
      case 'enfermera': return hablar(run, [['pk:113', 'Chansey', '¡Bienvenido al Centro Pokémon! Vamos a curar a tu Pokémon.'], ['pk:113', 'Chansey', '¡Ya está! Tu Pokémon está como nuevo.']], () => { p.hp = p.maxHp; run.ui.toast('❤️ Vida al máximo', null); });
      case 'tendero': if (Pr.hecho.has('tendero')) return hablar(run, [['', 'Tendero', '¡Vuelve cuando quieras!']]);
        Pr.hecho.add('tendero');
        return hablar(run, [['', 'Tendero', '¡Hola! Vienes de Pueblo Paleta, ¿verdad?'], ['', 'Tendero', 'Ha llegado un paquete para el Prof. Oak: el Paquete de Oak. ¡Y llévate unas muestras!']], () => {
          window.PB_BOLSA?.dar?.('oran', 3); window.PB_BOLSA?.dar?.('pb-hiper', 1);
          Pr.paquete = true;
          run.ui.toast('📦 Paquete de Oak · +3 Bayas Aranja y 1 Hiperpoción', null);
        });
      case 'viejo': if (Pr.paquete) return;
        return hablar(run, [['', 'Viejo', '¡Eh! ¡Por aquí no se pasa! Aún no me he tomado mi café...'], ['', 'Viejo', 'Pásate por la Tienda y luego hablamos.']]);
      case 'gimnasio':
        return hablar(run, [['giovanni', '', 'El Gimnasio de Ciudad Verde está cerrado. Su Líder no está...']]);
      case 'rival': {
        if (Pr.hecho.has('rival')) return;
        Pr.hecho.add('rival');
        const tu = (window.PB_REGIONES?.todos?.find(x => x.id === (p.speciesId ?? run.startSpecies))?.types ?? [])[0];
        const CONTRA = { grass: 4, bug: 4, ice: 4, steel: 4, fire: 7, rock: 7, ground: 7, water: 1, electric: 1 };
        const sp = CONTRA[tu] ?? [1, 4, 7][Math.random() * 3 | 0];
        return hablar(run, [[AZUL, 'Azul', '¡Eh, tú! ¿Ya has conseguido tu primer Pokémon?'], [AZUL, 'Azul', `¡Vamos a ver quién es mejor! ¡Adelante, ${PK[sp]}!`]], () => {
          const E = run.enemies, a = Math.random() * Math.PI * 2, d = run.director;
          const j = E.spawn(sp, p.pos.x + Math.cos(a) * 6, p.pos.z + Math.sin(a) * 6, (d.hpMult?.() ?? 1) * 6, (d.dmgMult?.() ?? 1) * 1.3, 1, 1);
          if (j >= 0) Pr.rival = { j, g: E.gen[j], sp };
          for (const m of s.mallas['azul'] ?? []) m.visible = false;
          try { run.ui.banner('⚔️ ¡Tu rival Azul!', `Su ${PK[sp]} quiere pelea`, '#3a7bd5', { species: sp }); } catch {}
        });
      }
    }
  };

  let obra = false;
  setInterval(async () => {
    const run = window.__pbRun;
    if (!run?.player) return;
    if (pend != null && run.state === 'play' && run.startSpecies === pend && !run.__pbPrueba && clases(run)) { pend = null; run.__pbPrueba = { hecho: new Set() }; }
    const P = run.__pbPrueba;
    if (!P || run.state !== 'play' || obra) return;
    const nz = Math.min(3, run.stage ?? 1);
    if (P.terr !== run.terrain || P.z !== nz) {
      obra = true;
      try {
        dentroDe(run, false);
        const s = await construir(run, nz);
        P.terr = run.terrain; P.z = nz; P.s = s;
        if (s) {
          llevar(run, s.ox + s.Z.ini.x + 0.5, s.oz + s.Z.ini.z + 0.5);
          try { run.setZoneLook({ ...run.zone, ...CIELO[nz] }); } catch {}
          // Música tranquila en los pueblos (si no elegiste una pista en la radio).
          if (nz !== 2 && !window.PB_RADIO?.()) try { run.music = 'menu'; run.audio.playTrack('menu'); } catch {}
          run.ui.banner(`${ZONAS[nz]} · mapa de pruebas`, nz === 1 ? 'Entra en las casas: tu madre, la hermana de Azul y el Prof. Oak te esperan' : nz === 2 ? 'Cuidado con la hierba alta… y con tu rival' : 'Centro Pokémon, Tienda y un viejo que no te deja pasar', '#8ae88a');
        }
      } catch (e) { try { console.warn('[paleta]', e); } catch {} }
      obra = false;
      return;
    }
    const s = P.s; if (!s) return;
    const pl = run.player.pos, ahora = performance.now();
    // El rival vencido.
    if (P.rival) { const E = run.enemies, r = P.rival; if (!(E.gen[r.j] === r.g && E.alive[r.j] && !(E.dying?.[r.j] > 0))) { P.rival = null; run.stats.pbDust = (run.stats.pbDust ?? 0) + 100; hablar(run, [[AZUL, 'Azul', '¡¿Qué?! ¡No puede ser! ¡Elegí al Pokémon equivocado!'], [AZUL, 'Azul', 'Bah… ¡nos vemos en Ciudad Verde! (+100 de Polvo)']]); } }
    // El viejo se levanta cuando traes el Paquete de la Tienda.
    if (P.paquete && !P.viejoArriba) { P.viejoArriba = true; for (const m of s.mallas['viejo'] ?? []) m.visible = false; for (const m of s.mallas['viejo2'] ?? []) m.visible = true; for (const k of s.cols['viejo'] ?? []) k.off = true; }
    // Dentro: los salvajes no se mueven.
    if (run.__pbDentro) { const E = run.enemies; for (let j = 0; j < E.alive.length; j++) if (E.alive[j] && !(E.flags[j] & 4)) { if (!quietos.has(j)) quietos.set(j, [E.gen[j], E.speed[j]]); E.speed[j] = 0; } }
    if (ahora < (P.cd ?? 0)) return;
    // Puertas de fuera: entrar.
    for (const d of s.Z.puertas) {
      if (Math.hypot(pl.x - (s.ox + d.xp + 0.5), pl.z - (s.oz + d.zp + 0.5)) > 1.4) continue;
      const c = s.dentro?.Z.cuartos?.[d.que]; if (!c) continue;
      dentroDe(run, true);
      llevar(run, s.dentro.ox + c.x, s.dentro.oz + c.z);
      P.cd = ahora + 1200;
      return;
    }
    // Personajes, Poké Balls, salidas y avisos (fuera y dentro).
    // Cada uno se activa al entrar en su radio; para repetir hay que salir y volver a acercarse.
    const cerca = P.cerca ??= new Set();
    for (const [base, pts] of [[s, s.Z.puntos], [s.dentro, s.dentro?.Z.puntos ?? []]]) for (const pt of pts) {
      const k = pt.que + (pt.tipo ?? '') + (pt.de ?? '');
      if (Math.hypot(pl.x - (base.ox + pt.x), pl.z - (base.oz + pt.z)) > pt.r) { cerca.delete(k); continue; }
      if (cerca.has(k)) continue;
      cerca.add(k); P.cd = ahora + 600;
      accion(run, P, s, pt);
      return;
    }
  }, 200);

  // Salvajes de la Ruta 1 y guardianes propios (la zona 3 conserva el legendario del mapa).
  const POOL = [[16, 16, 19, 19, 16, 19, 10, 13], [16, 19, 16, 19, 21, 10, 13, 29, 32], [16, 19, 21, 29, 32, 56, 10, 13, 25]];
  const envolver = () => {
    const Rg = window.PB_REGIONES, G = window.PB_GYM;
    if (!Rg?.remap || !G?.jefe) return false;
    if (!Rg.__pbPaleta) {
      const orig = Rg.remap;
      Rg.remap = function (run, id, flags) {
        const r = orig.call(this, run, id, flags);
        try { if (run?.__pbPrueba && !(flags & (2 | 4 | 4096 | 8192 | 65536))) { const L = POOL[Math.min(2, (run.stage ?? 1) - 1)]; return L[Math.random() * L.length | 0]; } } catch {}
        return r;
      };
      Rg.__pbPaleta = true;
    }
    if (!G.__pbPaleta) {
      const j = G.jefe;
      G.jefe = run => (run?.__pbPrueba && (run.stage ?? 1) <= 2 ? [17, 20][(run.stage ?? 1) - 1] : j(run));
      G.__pbPaleta = true;
    }
    return true;
  };
  const te = setInterval(() => { if (envolver()) clearInterval(te); }, 400);
})();
