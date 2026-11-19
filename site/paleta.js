/* Subversión propia (moportor6, 1.49-1.50): «Mapa de pruebas: Pueblo Paleta», solo en PokéBonk Lite.
   Botón 🧪 en la barra de arriba del menú de inicio (junto a Ajustes). Partida de 3 zonas sobre el mapa de Encina (el
   más llano), con construcciones de bloques (texturas del Voxel Pack de Kenney, CC0, en assets/voxel/):
   - Zona 1, Pueblo Paleta: casas de Rojo y de Azul, Laboratorio del Prof. Oak, jardín, carteles, buzones, faroles,
     cercas, muelle y el agua del sur. En casa de Rojo tu madre te cura; la hermana de Azul te da bayas; el Prof. Oak
     te deja una Poké Ball gratis (una vez cada uno).
   - Zona 2, Ruta 1: camino entre árboles, saltos (bordillos) con hueco, hierba alta, cercas y carteles.
   - Zona 3, Ciudad Verde: Centro Pokémon (te cura), Tienda (bayas), Gimnasio cerrado, casas y estanque.
   Cada zona busca un claro, aplana el suelo (alturas del terreno, así el Pokémon pisa la base), lo cubre de pasto,
   esconde los adornos del mapa que queden dentro, levanta los bloques y añade colisiones. Salvajes de la Ruta 1
   (Pidgey, Rattata…) y guardianes Pidgeotto y Raticate; la zona 3 conserva su legendario. Cielo de mañana.
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
    d.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🧪 Mapa de pruebas: Pueblo Paleta</h2><p class="sub">Pueblo Paleta, la Ruta 1 y Ciudad Verde hechos de bloques. No cuenta para récords ni logros.</p><div style="max-height:50vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div>`;
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
    bordillo: { top: 'grass_top', side: 'dirt_grass', bottom: 'dirt' }, luz: 'glass', pokeball: { top: 'cotton_red', side: 'snow', bottom: 'snow' }
  };
  const tx = (t, cara) => (typeof t === 'string' ? t : t[cara]);
  const transp = n => n === 'leaves_transparent' || n === 'glass_frame' || n === 'glass';
  const PLANO = /grass[1-4]|mushroom|wheat|fence/;

  // Cada zona: rectángulo (en bloques, relativo al origen), dónde apareces y qué se construye.
  function zona(n) {
    const V = new Map(), cruces = [], suelo = [], col = [], puertas = [], vallas = [];
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
    // Valla de madera en línea recta (tablas: plano con la textura de valla).
    const valla = (x0, z0, x1, z1) => {
      const dx = Math.sign(x1 - x0), dz = Math.sign(z1 - z0), L = Math.max(Math.abs(x1 - x0), Math.abs(z1 - z0));
      for (let i = 0; i <= L; i++) { const x = x0 + dx * i, z = z0 + dz * i; vallas.push([x, z, dx !== 0]); col.push({ x: x + 0.5, z: z + 0.5, r: 0.45, h: 1.3 }); }
    };
    const camino = (x0, x1, z0, z1, t = 'gravel_dirt') => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) suelo.push([x, z, t]); };
    const flores = (x0, x1, z0, z1, d = 2) => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) if (((x * 3 + z * 5) % d + d) % d === 0) cruces.push([x, 0, z, ((x + z) % 4 + 4) % 4 ? 'grass2' : 'mushroom_red']); };
    const hierba = (x0, x1, z0, z1) => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) cruces.push([x, 0, z, ((x + z) % 2 + 2) % 2 ? 'grass3' : 'grass4']); };
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
      return { xp, zp: puertaSur ? z1 + 1 : z0 - 1 };
    };

    if (n === 1) { // ---------------- Pueblo Paleta ----------------
      const R = { x0: -26, x1: 26, z0: -34, z1: 26 };
      const rojo = casa({ x0: -12, z0: -16, techo: T.techoR, chimenea: true });
      const azul = casa({ x0: 6, z0: -16, techo: T.techoA, chimenea: true });
      const lab = casa({ x0: 2, z0: 3, w: 13, d: 8, alt: 5, techo: T.techoL, pared: T.blanco, puertaSur: false, chimenea: true });
      puertas.push({ ...rojo, que: 'mama' }, { ...azul, que: 'hermana' }, { ...lab, que: 'oak' });
      buzon(rojo.xp - 2, rojo.zp + 1); buzon(azul.xp - 2, azul.zp + 1);
      cartel(rojo.xp + 2, rojo.zp + 1); cartel(azul.xp + 2, azul.zp + 1); cartel(lab.xp - 3, lab.zp - 1); cartel(-3, -3);
      farol(-3, -8); farol(3, -8); farol(-3, 1); farol(3, 1);
      // Caminos: Ruta 1 al norte, plaza, puertas y el muelle.
      camino(-1, 1, -34, -9); camino(-12, 14, -9, -6); camino(rojo.xp, rojo.xp, -9, rojo.zp); camino(azul.xp, azul.xp, -9, azul.zp);
      camino(-1, 1, -6, 15); camino(1, lab.xp, -1, 0); camino(lab.xp, lab.xp, 0, lab.zp);
      // Jardín vallado con flores.
      valla(-14, 3, -4, 3); valla(-14, 11, -4, 11); valla(-14, 4, -14, 10); valla(-4, 4, -4, 5); valla(-4, 9, -4, 10);
      flores(-13, -5, 4, 10, 2);
      flores(-10, -4, -5, -4, 3); flores(5, 10, -5, -4, 3);
      // Cercas a los lados del camino de la Ruta 1.
      valla(-3, -33, -3, -20); valla(3, -33, 3, -20);
      // Anillo de árboles (hueco al norte para la Ruta 1 y al sur para el agua).
      for (let x = -24; x <= 24; x += 3) if (Math.abs(x) > 4) arbol(x, -30);
      for (let z = -27; z <= 13; z += 3) { arbol(-24, z); arbol(24, z); }
      // Agua del sur con orilla de arena y un muelle de madera.
      for (let x = -22; x <= 22; x++) for (let z = 16; z <= 25; z++) if (!(Math.abs(x) <= 1 && z <= 21)) suelo.push([x, z, z === 16 ? 'sand' : 'water']);
      for (let z = 16; z <= 21; z++) for (let x = -1; x <= 1; x++) suelo.push([x, z, 'wood']);
      for (let x = -22; x <= 22; x++) if (Math.abs(x) > 1) col.push({ x: x + 0.5, z: 17.5, r: 0.8, h: 3 });
      for (let z = 17; z <= 22; z++) { col.push({ x: -1.6, z: z + 0.5, r: 0.5, h: 3 }); col.push({ x: 2.6, z: z + 0.5, r: 0.5, h: 3 }); }
      col.push({ x: 0.5, z: 22.6, r: 1.2, h: 3 });
      return { R, V, cruces, suelo, col, puertas, vallas, ini: { x: 0, z: -4 } };
    }
    if (n === 2) { // ---------------- Ruta 1 ----------------
      const R = { x0: -18, x1: 18, z0: -60, z1: 30 };
      for (let z = -58; z <= 28; z += 2) { arbol(-16, z, 3 + ((z >> 1) & 1)); arbol(16, z, 4 - ((z >> 1) & 1)); }
      const ruta = z => Math.round(Math.sin(z / 14) * 5);
      for (let z = -60; z <= 30; z++) { const c = ruta(z); camino(c - 1, c + 1, z, z); }
      // Bordillos (saltos) con un hueco donde pasa el camino.
      for (const z of [-40, -20, 0, 18]) { const c = ruta(z); for (let x = -14; x <= 14; x++) if (Math.abs(x - c) > 2) { pon(x, 0, z, T.bordillo); col.push({ x: x + 0.5, z: z + 0.5, r: 0.6, h: 1.3 }); } }
      hierba(-13, -6, -55, -46); hierba(6, 13, -34, -24); hierba(-12, -5, -14, -6); hierba(5, 12, 4, 12); hierba(-12, -4, 21, 27);
      valla(-6, -30, -6, -24); valla(9, -10, 9, -4);
      cartel(ruta(26) + 3, 26); cartel(ruta(-56) + 3, -56);
      arbol(-4, -50); arbol(10, 8); arbol(-10, 3);
      return { R, V, cruces, suelo, col, puertas, vallas, ini: { x: ruta(25), z: 25 } };
    }
    // ---------------- Ciudad Verde ----------------
    const R = { x0: -32, x1: 32, z0: -34, z1: 30 };
    const centro = casa({ x0: -18, z0: -12, w: 11, d: 7, alt: 4, techo: T.techoR, pared: T.blanco });
    const tienda = casa({ x0: 6, z0: -12, w: 9, d: 7, alt: 4, techo: T.techoA, pared: T.blanco });
    casa({ x0: -8, z0: -32, w: 17, d: 11, alt: 6, techo: T.techoV, pared: T.borde });
    casa({ x0: -24, z0: 8, techo: T.techoR, chimenea: true }); casa({ x0: 16, z0: 6, techo: T.techoA, chimenea: true });
    puertas.push({ ...centro, que: 'centro' }, { ...tienda, que: 'tienda' });
    pon(centro.xp, 3, centro.zp, T.pokeball);
    cartel(-3, -19); cartel(centro.xp + 3, centro.zp + 1); cartel(tienda.xp + 3, tienda.zp + 1);
    farol(-6, -3); farol(4, -3); farol(-6, 4); farol(4, 4);
    camino(-1, 1, -21, 30); camino(-26, 26, -3, -1); camino(centro.xp, centro.xp, centro.zp, -3); camino(tienda.xp, tienda.xp, tienda.zp, -3);
    // Estanque con orilla de arena.
    for (let x = 6; x <= 18; x++) for (let z = 16; z <= 26; z++) { const borde = x === 6 || x === 18 || z === 16 || z === 26; suelo.push([x, z, borde ? 'sand' : 'water']); if (!borde && (x === 7 || x === 17 || z === 17 || z === 25)) col.push({ x: x + 0.5, z: z + 0.5, r: 0.7, h: 3 }); }
    flores(-14, -6, 18, 24, 2); valla(-15, 17, -5, 17); valla(-15, 25, -5, 25);
    for (let x = -30; x <= 30; x += 3) if (Math.abs(x) > 3) { arbol(x, -33); arbol(x, 29); }
    for (let z = -30; z <= 27; z += 3) { arbol(-30, z); arbol(30, z); }
    return { R, V, cruces, suelo, col, puertas, vallas, ini: { x: 0, z: 24 } };
  }

  // ---------- terreno: busca sitio, aplana y cubre ----------
  const claro = (t, R) => {
    const W = (t.world ?? 360) / 2 - 10, w = R.x1 - R.x0, d = R.z1 - R.z0;
    let mejor = null;
    for (let cx = -W + w / 2 + 8; cx <= W - w / 2 - 8; cx += 8) for (let cz = -W + d / 2 + 8; cz <= W - d / 2 - 8; cz += 8) {
      const ox = Math.round(cx - (R.x0 + R.x1) / 2), oz = Math.round(cz - (R.z0 + R.z1) / 2);
      if (!t.inBounds(ox + R.x0, oz + R.z0, 4) || !t.inBounds(ox + R.x1, oz + R.z1, 4)) continue;
      let mn = 1e9, mx = -1e9, agua = 0;
      for (let x = R.x0; x <= R.x1; x += 4) for (let z = R.z0; z <= R.z1; z += 4) { const h = t.height(ox + x, oz + z); mn = Math.min(mn, h); mx = Math.max(mx, h); if (t.inWater?.(ox + x, oz + z)) agua++; }
      const nota = (mx - mn) + agua * 4;
      if (!mejor || nota < mejor.nota) mejor = { ox, oz, nota, max: mx };
    }
    return mejor;
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

  async function construir(run, nz) {
    const C = clases(run); if (!C) return null;
    const t = run.terrain, Z = zona(nz), sitio = claro(t, Z.R); if (!sitio) return null;
    const { ox, oz } = sitio, Y0 = Math.ceil(sitio.max);
    const celdas = aplanar(t, Z.R, ox, oz, Y0);
    const dentro = (x, z, m = 0) => x > ox + Z.R.x0 - m && x < ox + Z.R.x1 + 1 + m && z > oz + Z.R.z0 - m && z < oz + Z.R.z1 + 1 + m;
    // Fuera colisiones y adornos del mapa dentro de la zona; los objetos (cofres, bayas…) se ajustan al suelo nuevo.
    for (const k of t.colliders) if (dentro(k.x, k.z, ANILLO)) k.off = true;
    const misGrupos = new Set();
    t.group.parent.traverse(o => {
      if (o.name?.startsWith('pb-')) return;
      if (o.isInstancedMesh) {
        const m = o.instanceMatrix?.array; if (!m) return;
        let cambio = false;
        for (let i = 0; i < o.count; i++) { const x = m[i * 16 + 12], z = m[i * 16 + 14]; if (dentro(x, z, ANILLO) && m[i * 16 + 15]) { for (let j = 0; j < 16; j++) m[i * 16 + j] = 0; cambio = true; } }
        if (cambio) o.instanceMatrix.needsUpdate = true;
      }
    });
    // Adornos del mapa (árboles, rocas, arbustos: grupos con mallas toon) dentro de la zona. No se tocan los objetos
    // interactuables, los Pokémon (sprites) ni el terreno.
    const inter = new Set((run.interactables?.list ?? []).map(o => o.group).filter(Boolean));
    const esAdorno = o => { let toon = false; o.traverse(c => { if (c.isMesh && c.material?.type === 'MeshToonMaterial') toon = true; }); return toon; };
    const visitar = o => {
      for (const c of o.children) {
        if (c === t.group || c.name?.startsWith('pb-') || inter.has(c) || c.isLight || c.isCamera) continue;
        const e = c.matrixWorld?.elements, x = e?.[12], z = e?.[14];
        if (c.children.length && !c.isMesh && !(x || z)) { visitar(c); continue; } // contenedor en el origen: mirar dentro
        if (x != null && dentro(x, z, ANILLO) && esAdorno(c)) misGrupos.add(c);
      }
    };
    try { t.group.parent.updateMatrixWorld?.(true); visitar(t.group.parent); } catch {}
    for (const g of [t.env, ...(t.envList ?? [])]) for (const c of g?.children ?? []) { const p = c.position; if (p && dentro(p.x, p.z, ANILLO)) misGrupos.add(c); }
    for (const c of misGrupos) c.visible = false;
    for (const o of run.interactables?.list ?? []) if (dentro(o.x, o.z, ANILLO)) { const y = t.height(o.x, o.z); o.y = y; if (o.group?.position) o.group.position.y = y; }

    const nombres = new Set(['grass_top', 'gravel_dirt', 'water', 'sand', 'fence_wood', 'wood']);
    for (const b of Z.V.values()) for (const c of ['top', 'side', 'bottom']) nombres.add(tx(b, c));
    for (const c of Z.cruces) nombres.add(c[3]);
    const img = {}; await Promise.all([...nombres].map(async n => { img[n] = await cargar(n); }));
    const mats = {};
    const mat = n => mats[n] ??= (() => {
      const tt = new C.Tex(img[n]); tt.magFilter = tt.minFilter = 1003; tt.generateMipmaps = false; if (C.cs) tt.colorSpace = C.cs; tt.needsUpdate = true;
      const m = new C.Mat({ map: tt, gradientMap: C.grad, alphaTest: transp(n) || PLANO.test(n) ? 0.5 : 0, side: PLANO.test(n) || n === 'water' ? 2 : 0 });
      if (n === 'grass_top') m.color?.setHex?.(0xa8c48c); // pasto algo más apagado, como el del mapa
      return m;
    })();
    const caras = {};
    const quad = (n, v, nor) => { const g = caras[n] ??= { p: [], n: [], u: [], i: [] }, b = g.p.length / 3; for (const q of v) g.p.push(q[0], q[1], q[2]), g.n.push(...nor); g.u.push(0, 0, 1, 0, 1, 1, 0, 1); g.i.push(b, b + 1, b + 2, b, b + 2, b + 3); };
    const DIRS = [[1, 0, 0, 'side'], [-1, 0, 0, 'side'], [0, 1, 0, 'top'], [0, -1, 0, 'bottom'], [0, 0, 1, 'side'], [0, 0, -1, 'side']];
    const solido = (x, y, z) => { const b = Z.V.get(`${x},${y},${z}`); return b && !transp(tx(b, 'side')); };
    for (const [key, b] of Z.V) {
      const [x, y0, z] = key.split(',').map(Number), y = Y0 + y0;
      for (const [dx, dy, dz, cara] of DIRS) {
        if (solido(x + dx, y0 + dy, z + dz)) continue;
        if (dy === -1 && y0 === 0) continue; // la cara de abajo del suelo no se ve
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
      const X = ox + x, W = oz + z, y = Y0 + (n === 'water' ? 0.06 : n === 'wood' ? 0.25 : 0.04);
      quad(n, [[X, y, W + 1], [X + 1, y, W + 1], [X + 1, y, W], [X, y, W]], [0, 1, 0]);
    }
    // Pasto sobre todo el suelo aplanado (siguiendo las alturas nuevas, también en el borde inclinado).
    const { a0, a1, b0, b1 } = celdas, hgt = (a, b) => t.heights[t.idx(a, b)] + 0.02;
    for (let a = a0; a < a1; a++) for (let b = b0; b < b1; b++) {
      const x = a * t.cell - t.world / 2, z = b * t.cell - t.world / 2, X = x + t.cell, W = z + t.cell;
      if (!dentro(x + t.cell / 2, z + t.cell / 2, ANILLO)) continue;
      quad('grass_top', [[x, hgt(a, b + 1), W], [X, hgt(a + 1, b + 1), W], [X, hgt(a + 1, b), z], [x, hgt(a, b), z]], [0, 1, 0]);
    }
    const grupo = t.group;
    for (const [n, g] of Object.entries(caras)) {
      const geo = new C.Geo();
      geo.setAttribute('position', new C.Attr(new Float32Array(g.p), 3));
      geo.setAttribute('normal', new C.Attr(new Float32Array(g.n), 3));
      geo.setAttribute('uv', new C.Attr(new Float32Array(g.u), 2));
      geo.setIndex(g.i);
      const m = new C.Mesh(geo, mat(n)); m.name = 'pb-paleta'; m.frustumCulled = false;
      grupo.add(m);
    }
    for (const c of Z.col) t.addCollider({ x: ox + c.x, z: oz + c.z, r: c.r, h: Y0 + c.h });
    try { t.solidBoxes.push({ x0: ox + Z.R.x0, x1: ox + Z.R.x1, z0: oz + Z.R.z0, z1: oz + Z.R.z1 }); } catch {}
    return { ox, oz, Y0, Z };
  }

  // ---------- partida ----------
  const ZONAS = ['', '🏠 Pueblo Paleta', '🌿 Ruta 1', '🏙️ Ciudad Verde'];
  const CIELO = [null,
    { sky: [0x6ac0ff, 0xe8f6ff], fog: 0xdcefff, light: 1.08, sun: 0xfff2d0, motes: 'pollen' },
    { sky: [0x58b0ff, 0xe0f2ff], fog: 0xd4ecff, light: 1.05, sun: 0xfff0c8, motes: 'leaves' },
    { sky: [0xffb070, 0xffe8c0], fog: 0xffd8b0, light: 1, sun: 0xffc890, motes: 'pollen' }];
  const PUEBLO = {
    mama: ['🏠 Mamá', '«¡Descansa un poco, cariño!» · Vida al máximo'],
    hermana: ['🏠 Hermana de Azul', '«Toma, para tu viaje» · +3 Bayas Zidra'],
    oak: ['🔬 Prof. Oak', '«¡Te he dejado una Poké Ball delante del laboratorio!»'],
    centro: ['🏥 Centro Pokémon', '«¡Tu Pokémon está como nuevo!» · Vida al máximo'],
    tienda: ['🛒 Tienda', '«¡Muestra gratis!» · +3 Bayas Aranja y 1 Hiperpoción']
  };
  const usar = (run, que, puerta, s) => {
    const p = run.player;
    if (que === 'mama' || que === 'centro') p.hp = p.maxHp;
    if (que === 'hermana') window.PB_BOLSA?.dar?.('sitrus', 3);
    if (que === 'tienda') { window.PB_BOLSA?.dar?.('oran', 3); window.PB_BOLSA?.dar?.('pb-hiper', 1); }
    if (que === 'oak') try { run.interactables.place('freechest', s.ox + puerta.xp + 0.5, s.oz + puerta.zp - 2.5); } catch {}
    try { run.ui.banner(PUEBLO[que][0], PUEBLO[que][1], '#ffd84a'); run.audio?.power?.(); } catch {}
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
        const s = await construir(run, nz);
        P.terr = run.terrain; P.z = nz; P.s = s;
        if (s) {
          const pl = run.player.pos; pl.x = s.ox + s.Z.ini.x + 0.5; pl.z = s.oz + s.Z.ini.z + 0.5; pl.y = run.terrain.height(pl.x, pl.z) + 0.2;
          try { run.camTarget?.copy?.(pl); } catch {}
          try { run.setZoneLook({ ...run.zone, ...CIELO[nz] }); } catch {}
          run.ui.banner(`${ZONAS[nz]} · mapa de pruebas`, nz === 1 ? 'Visita las casas: tu madre, la hermana de Azul y el Prof. Oak te ayudan' : nz === 2 ? 'Cuidado con la hierba alta' : 'El Centro Pokémon te cura y la Tienda te regala bayas', '#8ae88a');
        }
      } catch (e) { try { console.warn('[paleta]', e); } catch {} }
      obra = false;
      return;
    }
    // Puertas: al acercarte, una vez por partida cada una.
    const s = P.s; if (!s) return;
    const pl = run.player.pos;
    for (const d of s.Z.puertas) {
      const k = `${nz}:${d.que}`; if (P.hecho.has(k)) continue;
      if (Math.hypot(pl.x - (s.ox + d.xp + 0.5), pl.z - (s.oz + d.zp + 0.5)) < 1.8) { P.hecho.add(k); usar(run, d.que, d, s); }
    }
  }, 300);

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
