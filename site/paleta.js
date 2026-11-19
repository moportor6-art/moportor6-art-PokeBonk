/* Subversión propia (moportor6, 1.49): «Mapa de pruebas: Pueblo Paleta», solo en PokéBonk Lite.
   Botón 🧪 en la barra de arriba del menú de inicio (junto a Ajustes). Arranca una partida en el mapa de Encina (el más llano), busca un claro sin árboles, te lleva ahí
   y levanta un Pueblo Paleta de bloques (texturas del Voxel Pack de Kenney, CC0, en assets/voxel/): las casas de Rojo
   y de Azul, el Laboratorio del Prof. Oak, el jardín vallado, carteles, el camino a la Ruta 1 con su hierba alta, el
   anillo de árboles y el agua del sur. Las paredes y los troncos chocan (colliders del terreno). Es una prueba: no
   cuenta para estadísticas, logros, Historial ni Guardería (run.__pbPrueba).
   Las clases de Three.js se toman de objetos que ya están en la escena (el bundle no las expone). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const H = () => window.PB_HISTORIA, meta = () => window.__pbMeta;
  let pend = null;

  // ---------- menú de inicio ----------
  setInterval(() => {
    // Botón redondo en la barra de arriba, junto al de Ajustes (en la parrilla de modos no cabía).
    const aj = document.querySelector('.mm-top .jay-settings-shortcut');
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
    d.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🧪 Mapa de pruebas: Pueblo Paleta</h2><p class="sub">Un pueblo de bloques en un claro llano. No cuenta para récords ni logros.</p><div style="max-height:50vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div>`;
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

  // ---------- el pueblo, en bloques de 1 m ----------
  // Tipos de bloque: textura por cara (top/side/bottom) o igual en todas.
  const T = {
    pared: 'cotton_tan', techoR: 'cotton_red', techoA: 'cotton_blue', madera: 'wood', puerta: 'wood_red', ventana: 'glass_frame',
    base: 'stone', lab: 'snow', techoL: 'brick_grey', borde: 'greystone', tronco: { top: 'trunk_top', side: 'trunk_side', bottom: 'trunk_top' },
    hojas: 'leaves_transparent', cartel: { top: 'table', side: 'wood', bottom: 'wood' }, arena: 'sand'
  };
  const tx = (t, cara) => (typeof t === 'string' ? t : t[cara]);
  const transp = n => n === 'leaves_transparent' || n === 'glass_frame';

  function plano(run) {
    const t = run.terrain, V = new Map(), cruces = [], suelo = [], col = [];
    const k = (x, y, z) => `${x},${y},${z}`;
    const pon = (x, y, z, b) => V.set(k(x, y, z), b);
    const alto = (x, z) => t.height(x + 0.5, z + 0.5);
    // Base de cada construcción: la altura más alta de su planta; debajo, cimientos de piedra hasta el suelo.
    const cimientos = (x0, x1, z0, z1) => {
      let top = -1e9; for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) top = Math.max(top, alto(x, z));
      const yb = Math.ceil(top);
      for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) for (let y = Math.floor(alto(x, z)) - 1; y < yb; y++) pon(x, y, z, T.base);
      return yb;
    };
    const muro = (x0, x1, z0, z1, h) => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) col.push({ x: x + 0.5, z: z + 0.5, r: 0.75, h }); };
    // Casa con tejado a dos aguas (Rojo y Azul).
    const casa = (x0, z0, techo, cx) => {
      const x1 = x0 + 6, z1 = z0 + 5, yb = cimientos(x0, x1, z0, z1), alt = 4;
      for (let y = yb; y < yb + alt; y++) for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
        if (x !== x0 && x !== x1 && z !== z0 && z !== z1) continue;
        let b = T.pared;
        const ventana = y === yb + 2 && ((z === z0 || z === z1) && (x === x0 + 1 || x === x1 - 1) || (x === x0 || x === x1) && z === z0 + 2);
        if (ventana) b = T.ventana;
        if (z === z1 && x === x0 + 3 && y < yb + 2) b = T.puerta;
        pon(x, y, z, b);
      }
      for (let i = 0; i < 4; i++) for (let x = x0 - 1; x <= x1 + 1; x++) { pon(x, yb + alt + i, z0 - 1 + i, techo); pon(x, yb + alt + i, z1 + 1 - i, techo); }
      for (let x = x0 - 1; x <= x1 + 1; x++) pon(x, yb + alt + 3, z0 + 3, techo);
      for (let i = 0; i < 3; i++) for (let z = z0 + i; z <= z1 - i; z++) { pon(x0, yb + alt + i, z, T.pared); pon(x1, yb + alt + i, z, T.pared); }
      // Cartel delante de la puerta.
      const sx = cx, sz = z1 + 2, sy = Math.floor(alto(sx, sz)) + 1; pon(sx, sy, sz, T.madera); pon(sx, sy + 1, sz, T.cartel);
      col.push({ x: sx + 0.5, z: sz + 0.5, r: 0.45, h: sy + 2 });
      muro(x0, x1, z0, z1, yb + alt + 4);
    };
    casa(-11, -14, T.techoR, -6);
    casa(5, -14, T.techoA, 10);
    // Laboratorio del Prof. Oak.
    {
      const x0 = 3, x1 = 14, z0 = 2, z1 = 10, yb = cimientos(x0, x1, z0, z1), alt = 5;
      for (let y = yb; y < yb + alt; y++) for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
        if (x !== x0 && x !== x1 && z !== z0 && z !== z1) continue;
        let b = T.lab;
        if (y === yb || y === yb + alt - 1) b = T.borde;
        if ((y === yb + 2 || y === yb + 3) && ((z === z0 || z === z1) && (x - x0) % 3 === 1 && x !== x0 + 7 || (x === x0 || x === x1) && (z - z0) % 3 === 1)) b = T.ventana;
        if (z === z0 && (x === x0 + 7 || x === x0 + 8) && y < yb + 3) b = T.puerta;
        pon(x, y, z, b);
      }
      for (let x = x0 - 1; x <= x1 + 1; x++) for (let z = z0 - 1; z <= z1 + 1; z++) pon(x, yb + alt, z, T.techoL);
      for (let x = x0 + 2; x <= x1 - 2; x++) for (let z = z0 + 2; z <= z1 - 2; z++) pon(x, yb + alt + 1, z, T.techoL);
      const sx = x0 + 5, sz = z0 - 2, sy = Math.floor(alto(sx, sz)) + 1; pon(sx, sy, sz, T.madera); pon(sx, sy + 1, sz, T.cartel);
      col.push({ x: sx + 0.5, z: sz + 0.5, r: 0.45, h: sy + 2 });
      muro(x0, x1, z0, z1, yb + alt + 2);
    }
    // Jardín vallado con flores.
    for (let x = -13; x <= -3; x++) for (let z = 3; z <= 10; z++) {
      const borde = x === -13 || x === -3 || z === 3 || z === 10, y = Math.floor(alto(x, z)) + 1;
      if (borde) { if (!(z === 3 && (x === -8 || x === -7))) { pon(x, y, z, T.madera); col.push({ x: x + 0.5, z: z + 0.5, r: 0.45, h: y + 1.2 }); } }
      else if ((x + z) % 2 === 0) cruces.push([x, y, z, (x * 7 + z) % 3 ? 'mushroom_red' : 'grass2']);
    }
    // Camino: de la Ruta 1 (norte) a la plaza, y a las puertas.
    const camino = (x0, x1, z0, z1) => { for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) suelo.push([x, z, 'gravel_dirt']); };
    camino(-1, 1, -30, -1); camino(-8, 9, -6, -1); camino(-6, -5, -8, -6); camino(10, 11, -8, -6); camino(9, 11, -1, 1);
    // Hierba alta de la Ruta 1.
    for (let x = -6; x <= 6; x++) for (let z = -32; z <= -26; z++) if (Math.abs(x) > 1 && (x * 3 + z) % 2) cruces.push([x, Math.floor(alto(x, z)) + 1, z, 'grass3']);
    // Árboles alrededor (con hueco al norte para la Ruta 1 y al sur para el agua).
    for (let a = 0; a < Math.PI * 2; a += 0.16) {
      const x = Math.round(Math.sin(a) * 23), z = Math.round(-Math.cos(a) * 23);
      if (z < 0 && Math.abs(x) < 6) continue;
      if (z > 14 && Math.abs(x) < 12) continue;
      const y = Math.floor(alto(x, z)) + 1;
      for (let i = 0; i < 4; i++) pon(x, y + i, z, T.tronco);
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) for (let dy = 3; dy <= 4; dy++) if (dx || dz || dy === 4) pon(x + dx, y + dy, z + dz, T.hojas);
      pon(x, y + 5, z, T.hojas);
      col.push({ x: x + 0.5, z: z + 0.5, r: 0.7, h: y + 6 });
    }
    // Agua del sur con orilla de arena.
    for (let x = -11; x <= 11; x++) for (let z = 15; z <= 22; z++) suelo.push([x, z, z === 15 || Math.abs(x) === 11 ? 'sand' : 'water']);
    return { V, cruces, suelo, col };
  }

  async function construir(run, ox, oz) {
    const C = clases(run); if (!C) return false;
    const P = plano({ terrain: { height: (x, z) => run.terrain.height(ox + x, oz + z) } });
    const nombres = new Set(['gravel_dirt', 'water', 'sand', 'grass2', 'grass3', 'mushroom_red']);
    for (const b of P.V.values()) for (const c of ['top', 'side', 'bottom']) nombres.add(tx(b, c));
    const img = {}; await Promise.all([...nombres].map(async n => { img[n] = await cargar(n); }));
    const mats = {};
    const mat = n => mats[n] ??= (() => {
      const t = new C.Tex(img[n]); t.magFilter = t.minFilter = 1003; t.generateMipmaps = false; if (C.cs) t.colorSpace = C.cs; t.needsUpdate = true;
      const m = new C.Mat({ map: t, gradientMap: C.grad, transparent: false, alphaTest: transp(n) || /grass|mushroom/.test(n) ? 0.5 : 0, side: /grass|mushroom|water|gravel|sand/.test(n) ? 2 : 0 });
      return m;
    })();
    const caras = {}; // textura → { p, n, u, i }
    const quad = (n, v, nor) => { const g = caras[n] ??= { p: [], n: [], u: [], i: [] }, b = g.p.length / 3; for (const q of v) g.p.push(q[0], q[1], q[2]), g.n.push(...nor); g.u.push(0, 0, 1, 0, 1, 1, 0, 1); g.i.push(b, b + 1, b + 2, b, b + 2, b + 3); };
    const DIRS = [[1, 0, 0, 'side'], [-1, 0, 0, 'side'], [0, 1, 0, 'top'], [0, -1, 0, 'bottom'], [0, 0, 1, 'side'], [0, 0, -1, 'side']];
    const solido = (x, y, z) => { const b = P.V.get(`${x},${y},${z}`); return b && !transp(tx(b, 'side')); };
    for (const [key, b] of P.V) {
      const [x, y, z] = key.split(',').map(Number);
      for (const [dx, dy, dz, cara] of DIRS) {
        if (solido(x + dx, y + dy, z + dz)) continue;
        const n = tx(b, cara), X = ox + x, Z = oz + z;
        // Vértices en sentido antihorario mirando desde fuera; u horizontal, v vertical (abajo → arriba).
        let v;
        if (dx === 1) v = [[X + 1, y, Z + 1], [X + 1, y, Z], [X + 1, y + 1, Z], [X + 1, y + 1, Z + 1]];
        else if (dx === -1) v = [[X, y, Z], [X, y, Z + 1], [X, y + 1, Z + 1], [X, y + 1, Z]];
        else if (dz === 1) v = [[X, y, Z + 1], [X + 1, y, Z + 1], [X + 1, y + 1, Z + 1], [X, y + 1, Z + 1]];
        else if (dz === -1) v = [[X + 1, y, Z], [X, y, Z], [X, y + 1, Z], [X + 1, y + 1, Z]];
        else if (dy === 1) v = [[X, y + 1, Z + 1], [X + 1, y + 1, Z + 1], [X + 1, y + 1, Z], [X, y + 1, Z]];
        else v = [[X, y, Z], [X + 1, y, Z], [X + 1, y, Z + 1], [X, y, Z + 1]];
        quad(n, v, [dx, dy, dz]);
      }
    }
    for (const [x, y, z, n] of P.cruces) {
      const X = ox + x, Z = oz + z;
      quad(n, [[X, y, Z], [X + 1, y, Z + 1], [X + 1, y + 1, Z + 1], [X, y + 1, Z]], [0, 1, 0]);
      quad(n, [[X + 1, y, Z], [X, y, Z + 1], [X, y + 1, Z + 1], [X + 1, y + 1, Z]], [0, 1, 0]);
    }
    for (const [x, z, n] of P.suelo) {
      const X = ox + x, Z = oz + z, y = run.terrain.height(X + 0.5, Z + 0.5) + (n === 'water' ? 0.08 : 0.04);
      quad(n, [[X, y, Z + 1], [X + 1, y, Z + 1], [X + 1, y, Z], [X, y, Z]], [0, 1, 0]);
    }
    const grupo = run.terrain.group;
    for (const [n, g] of Object.entries(caras)) {
      const geo = new C.Geo();
      geo.setAttribute('position', new C.Attr(new Float32Array(g.p), 3));
      geo.setAttribute('normal', new C.Attr(new Float32Array(g.n), 3));
      geo.setAttribute('uv', new C.Attr(new Float32Array(g.u), 2));
      geo.setIndex(g.i);
      geo.computeBoundingSphere?.();
      const m = new C.Mesh(geo, mat(n)); m.name = 'pb-paleta'; m.frustumCulled = false;
      grupo.add(m);
    }
    for (const c of P.col) run.terrain.addCollider({ x: ox + c.x, z: oz + c.z, r: c.r, h: c.h });
    // Que no aparezcan cosas encima de las casas.
    try { run.terrain.solidBoxes.push({ x0: ox - 12, x1: ox + 15, z0: oz - 15, z1: oz - 7 }, { x0: ox + 3, x1: ox + 15, z0: oz + 2, z1: oz + 11 }); } catch {}
    return true;
  }

  // Busca un claro llano y sin árboles de unos 50 × 60 m.
  const claro = run => {
    const t = run.terrain, W = (t.world ?? 360) / 2 - 40;
    let mejor = null;
    for (let cx = -W; cx <= W; cx += 10) for (let cz = -W; cz <= W; cz += 10) {
      if (!t.inBounds(cx, cz, 30)) continue;
      let mn = 1e9, mx = -1e9, agua = false;
      for (let x = -26; x <= 26; x += 4) for (let z = -32; z <= 22; z += 4) { const h = t.height(cx + x, cz + z); mn = Math.min(mn, h); mx = Math.max(mx, h); if (t.inWater?.(cx + x, cz + z)) agua = true; }
      if (agua) continue;
      let n = 0; for (const c of t.colliders) if (Math.abs(c.x - cx) < 27 && c.z - cz > -34 && c.z - cz < 24) n++;
      const nota = (mx - mn) + n * 3;
      if (!mejor || nota < mejor.nota) mejor = { cx, cz, nota };
    }
    return mejor;
  };

  setInterval(async () => {
    const run = window.__pbRun;
    if (pend == null || !run?.player || run.state !== 'play' || run.startSpecies !== pend || run.__pbPrueba) return;
    // Espera a que la escena tenga ya sus piezas (las clases de Three.js se sacan de ellas).
    if (!clases(run)) return;
    pend = null; run.__pbPrueba = true;
    try {
      const c = claro(run) ?? { cx: 0, cz: 0 }, ox = Math.round(c.cx), oz = Math.round(c.cz);
      // Las colisiones de los árboles del juego que queden dentro del pueblo se apagan.
      for (const k of run.terrain.colliders) if (Math.abs(k.x - ox) < 27 && k.z - oz > -34 && k.z - oz < 24) k.off = true;
      const ok = await construir(run, ox, oz);
      const p = run.player.pos; p.x = ox; p.z = oz - 3; p.y = run.terrain.height(p.x, p.z) + 0.2;
      try { run.camTarget?.copy?.(p); } catch {}
      run.ui.banner(ok ? '🧪 Pueblo Paleta (mapa de pruebas)' : 'No se pudo construir el pueblo', ok ? 'Casas de Rojo y Azul, Laboratorio de Oak y la Ruta 1 al norte' : 'Faltan piezas de la escena', '#8ae88a');
    } catch (e) { try { console.warn('[paleta]', e); } catch {} }
  }, 300);
})();
