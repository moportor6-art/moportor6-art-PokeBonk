/* Subversión propia (moportor6, 1.08 y 1.10): Teracristalización, solo en PokéBonk Lite. Idea, coronas y animación de
   Pokémon Survivors (pedrobarretto, con su permiso para uso privado): las 19 coronas de cristal (data/tera-coronas.json,
   su arte de píxeles con sus rampas de color, contorno, destello y centelleo), el cuerpo de cristal del teratipo, la
   transformación (astillas en espiral, picos de cristal en los pies, destello blanco y anillo que se cierra) y el
   estallido al terminar. Aquí, en 3D: la corona se dibuja en una capa sobre el juego, proyectada sobre la cabeza, y el cristal es un tinte
   del sprite (main-…js: player.__pbTint; menus-…js: PB_TINTE para los jefes).
   - Desde el nivel 15, una vez por zona: botón TERA (con la corona) junto a MEGA y DYNAMAX. Dura 3 minutos.
   - Teratipo: el primer tipo de tu Pokémon o el que elijas en el Laboratorio (también Astral).
   - Efecto: +20 % de daño, +10 de armadura y ×1,25 a tus ataques de tu teratipo (Astral: ×1,1 a todos).
   - Jefes finales y de líderes (fases.js): se teracristalizan al 85 % de PS, con corona y cristal.
   Ganchos: player.recompute y combat.hit (envueltos). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const TIPOS = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy', 'stellar'];
  const NOM = { normal: 'Normal', fire: 'Fuego', water: 'Agua', grass: 'Planta', electric: 'Eléctrico', ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada', stellar: 'Astral' };
  // Rampas de cristal de Pokémon Survivors: o contorno, 1..4 de sombra a brillo, 5/6 acento y su sombra.
  const RAMPA = {
    normal: { o: '#2c2c1c', 1: '#76765a', 2: '#aeae86', 3: '#dcdcb8', 4: '#ffffff', 5: '#f0c848', 6: '#a87818' },
    fire: { o: '#401008', 1: '#b03c14', 2: '#f07830', 3: '#f8b860', 4: '#fff8d8', 5: '#f8e050', 6: '#a85820' },
    water: { o: '#0c1848', 1: '#2848b0', 2: '#4c88f0', 3: '#98c8f8', 4: '#ffffff', 5: '#60e0f8', 6: '#2080b0' },
    grass: { o: '#0c2808', 1: '#2c7424', 2: '#58b444', 3: '#a4e070', 4: '#f0ffd0', 5: '#f8d048', 6: '#c07818' },
    electric: { o: '#3c2800', 1: '#b08800', 2: '#f0c820', 3: '#f8f080', 4: '#ffffff', 5: '#606878', 6: '#383c48' },
    ice: { o: '#103040', 1: '#3a84a4', 2: '#70c4dc', 3: '#bcf0f8', 4: '#ffffff', 5: '#e0f8ff', 6: '#78b8d0' },
    fighting: { o: '#300808', 1: '#8a1c14', 2: '#c43428', 3: '#f07858', 4: '#fff0e0', 5: '#f8c840', 6: '#b07818' },
    poison: { o: '#280830', 1: '#682470', 2: '#a444a4', 3: '#d888dc', 4: '#fff0ff', 5: '#88e858', 6: '#3c8828' },
    ground: { o: '#382408', 1: '#946c24', 2: '#d0a850', 3: '#f0d898', 4: '#fff8e0', 5: '#b85c2c', 6: '#7c3418' },
    flying: { o: '#201848', 1: '#5c54b4', 2: '#9890f0', 3: '#cccaf8', 4: '#ffffff', 5: '#88e0f8', 6: '#3890b8' },
    psychic: { o: '#400820', 1: '#b02c64', 2: '#f85888', 3: '#f8acc8', 4: '#ffffff', 5: '#a878f8', 6: '#6040b0' },
    bug: { o: '#202808', 1: '#647414', 2: '#a8b820', 3: '#d8e868', 4: '#f8ffe0', 5: '#e05030', 6: '#902818' },
    rock: { o: '#2c2008', 1: '#7c6424', 2: '#b8a038', 3: '#e0d088', 4: '#fff8e0', 5: '#90c0f0', 6: '#4878b8' },
    ghost: { o: '#180c28', 1: '#44346c', 2: '#705898', 3: '#a890d0', 4: '#f0e8ff', 5: '#70e8f8', 6: '#2878a8' },
    dragon: { o: '#100840', 1: '#3c1ca8', 2: '#7038f8', 3: '#a888f8', 4: '#f0e8ff', 5: '#f8c840', 6: '#a87018' },
    dark: { o: '#100808', 1: '#3c2c24', 2: '#705848', 3: '#a89080', 4: '#f0e0d0', 5: '#f84060', 6: '#982038' },
    steel: { o: '#202030', 1: '#6c6c84', 2: '#a8a8c0', 3: '#d8d8e8', 4: '#ffffff', 5: '#58c8e0', 6: '#287890' },
    fairy: { o: '#401828', 1: '#c05878', 2: '#ee99ac', 3: '#f8c8d8', 4: '#ffffff', 5: '#f8e060', 6: '#c09018' },
    stellar: { o: '#140c38', 1: '#5848b0', 2: '#9c90e8', 3: '#d8d0f8', 4: '#ffffff', 5: '#f8e060', 6: '#c06090' }
  };
  const ASTRAL = ['#f85858', '#f8a838', '#f8e858', '#58e898', '#58a8f8', '#a878f8'];
  const num = c => parseInt(c.slice(1), 16);
  const rgb = c => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
  const COL = Object.fromEntries(TIPOS.map(t => [t, num(RAMPA[t][2])]));
  const NV = 15, DURA = 180, INTRO = 1.2;
  const meta = () => window.__pbMeta;
  const TP = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => l.forEach(x => { TP[x.id] = x.types; })).catch(() => {});
  const elegido = sp => meta()?.profile?.pbTera?.[sp];
  const tipoDe = run => elegido(run.startSpecies) ?? run.player?.types?.[0] ?? TP[run.startSpecies]?.[0] ?? 'normal';

  // ---------- coronas (arte de Pokémon Survivors) ----------
  let CORONAS = null;
  fetch('./data/tera-coronas.json').then(r => r.json()).then(d => { CORONAS = d; }).catch(() => {});
  const cache = new Map();
  const lienzo = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
  const corona = (t, chica) => {
    const k = t + (chica ? ':s' : '');
    if (cache.has(k)) return cache.get(k);
    const filas = CORONAS?.[chica ? 'SMALL_CROWNS' : 'CROWNS']?.[t];
    if (!filas) return null;
    const r = RAMPA[t], [o, uno] = [rgb(r.o), rgb(r[1])];
    const hondo = `rgb(${o.map((v, i) => Math.round(v + (uno[i] - v) * 0.45)).join(',')})`;
    const [R, O, Y, G, B, V] = ASTRAL;
    const pal = { 1: r[1], 2: r[2], 3: r[3], 4: r[4], w: '#ffffff', d: hondo, a: r[5], b: r[6], R, O, Y, G, B, V };
    const w = Math.max(...filas.map(f => f.length)), h = filas.length;
    const base = lienzo(w, h), bx = base.getContext('2d');
    filas.forEach((f, y) => { for (let x = 0; x < f.length; x++) { const c = pal[f[x]]; if (c) { bx.fillStyle = c; bx.fillRect(x, y, 1, 1); } } });
    // Contorno de 1 px en el oscuro de la rampa.
    const spr = lienzo(w + 2, h + 2), sx = spr.getContext('2d');
    const sil = lienzo(w, h), lx = sil.getContext('2d');
    lx.drawImage(base, 0, 0); lx.globalCompositeOperation = 'source-in'; lx.fillStyle = r.o; lx.fillRect(0, 0, w, h);
    for (const [dx, dy] of [[0, 1], [2, 1], [1, 0], [1, 2]]) sx.drawImage(sil, dx, dy);
    sx.drawImage(base, 1, 1);
    const brillo = lienzo(w + 2, h + 2), gx = brillo.getContext('2d');
    gx.drawImage(spr, 0, 0); gx.globalCompositeOperation = 'source-in'; gx.fillStyle = '#fff'; gx.fillRect(0, 0, w + 2, h + 2);
    const top = filas.findIndex(f => /[^.]/.test(f)), cols = [...filas[top]].flatMap((c, i) => c === '.' ? [] : [i]);
    const art = { spr, brillo, w: w + 2, h: h + 2, tx: cols[cols.length >> 1] + 1, ty: top + 1 };
    cache.set(k, art);
    return art;
  };
  // Dibuja la corona con su destello (banda diagonal de 3 px que la cruza) y el centelleo en su punta.
  const tmp = lienzo(64, 64);
  const pintarCorona = (cx, art, k, t) => {
    const S = 4; // a 4× para que el filtro no la emborrone
    cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height);
    cx.imageSmoothingEnabled = false;
    cx.drawImage(art.spr, 0, 0, art.w * S, art.h * S);
    if (k >= 0) {
      const g = tmp.getContext('2d');
      g.globalCompositeOperation = 'source-over'; g.clearRect(0, 0, 64, 64); g.drawImage(art.brillo, 0, 0);
      g.globalCompositeOperation = 'destination-in'; g.fillStyle = '#fff';
      const at = Math.round(k * (art.w + art.h * 0.5 + 3)) - 3;
      for (let y = 0; y < art.h; y++) g.fillRect(at - (y >> 1) + (art.h >> 1), y, 3, 1);
      cx.drawImage(tmp, 0, 0, art.w, art.h, 0, 0, art.w * S, art.h * S);
    }
    if (Math.floor(t * 2.5) % 4 === 0) {
      cx.fillStyle = '#fff';
      const x = art.tx * S, y = art.ty * S;
      cx.fillRect(x - S, y, S * 3, S); cx.fillRect(x, y - S, S, S * 3);
    }
  };

  // Capa 2D sobre el lienzo del juego (debajo del HUD): las coronas se dibujan proyectando su punto 3D a la pantalla.
  // (Las mallas añadidas a la escena no salen: el juego pinta los sprites por su propia vía.)
  const coronas = new Map(); // clave → { x, y, z, tipo, esc, chica, t0 }
  let capa = null, cx2 = null, vec = null;
  const prepararCapa = run => {
    const cv = run.r?.canvas;
    if (!cv) return false;
    if (!capa || !capa.isConnected) {
      capa = document.createElement('canvas');
      capa.className = 'pb-tera-capa';
      capa.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:1';
      cv.after(capa);
      cx2 = capa.getContext('2d');
    }
    const dpr = Math.min(2, devicePixelRatio || 1), w = Math.round(innerWidth * dpr), h = Math.round(innerHeight * dpr);
    if (capa.width !== w || capa.height !== h) { capa.width = w; capa.height = h; }
    vec ??= run.player?.pos?.clone?.();
    return !!vec;
  };
  const proyectar = (cam, x, y, z) => { vec.set(x, y, z).project(cam); return vec.z < 1 ? [(vec.x + 1) / 2 * capa.width, (1 - vec.y) / 2 * capa.height] : null; };
  const dibujarCoronas = run => {
    if (!capa) return;
    cx2.clearRect(0, 0, capa.width, capa.height);
    if (!coronas.size || run.state === 'over') return;
    const cam = run.r.camera, ahora = performance.now() / 1000;
    for (const c of coronas.values()) {
      const art = corona(c.tipo, c.chica);
      if (!art || c.oculta) continue;
      const a = proyectar(cam, c.x, c.y, c.z), b = a && proyectar(cam, c.x, c.y + 1, c.z);
      if (!a || !b) continue;
      const ppu = Math.hypot(b[0] - a[0], b[1] - a[1]), S = 0.075 * c.esc * ppu; // píxeles de pantalla por píxel de la corona
      const t = ahora - c.t0, fase = (t % 2.4) / 0.55;
      c.lz ??= lienzo(art.w * 4, art.h * 4);
      const paso = Math.floor(t * 12);
      if (paso !== c.paso) { c.paso = paso; pintarCorona(c.lz.getContext('2d'), art, fase <= 1 ? fase : -1, t); }
      cx2.imageSmoothingEnabled = false;
      cx2.drawImage(c.lz, Math.round(a[0] - art.w * S / 2), Math.round(a[1] - art.h * S), Math.round(art.w * S), Math.round(art.h * S));
    }
  };
  // 1.23: a petición, sin corona (ni en ti ni en los jefes); en su lugar, cristales en el suelo al caminar. El arte
  // de las coronas se conserva aquí por si se quiere volver: basta con poner SIN_CORONA a false.
  const SIN_CORONA = true;
  const ponerCorona = (clave, d) => { if (SIN_CORONA) return; const c = coronas.get(clave); if (c && c.tipo === d.tipo && c.chica === d.chica) Object.assign(c, d); else coronas.set(clave, { ...d, t0: performance.now() / 1000 }); };
  const quitarCorona = clave => coronas.delete(clave);
  const alturaCuerpo = (run, sid, esc) => { try { const b = run.sprites.get(sid); const h = b?.bodyHeight?.(esc); if (h > 0) return h; } catch {} return 2.2 * (esc || 1); };
  // Tinte de cristal (r, g, b, cantidad) para el sprite: el color del teratipo, con destellos de luz.
  const tinte = (t, tiempo, extra = 0) => {
    const r = t === 'stellar' ? rgb(ASTRAL[Math.floor(tiempo * 3) % 6]) : rgb(RAMPA[t][3]);
    const luz = Math.max(0, Math.sin(tiempo * 2.6)) ** 8;
    return [r[0] / 170 + luz * 0.4, r[1] / 170 + luz * 0.4, r[2] / 170 + luz * 0.4, Math.min(1, 0.5 + 0.06 * Math.sin(tiempo * 5) + luz * 0.25 + extra)];
  };
  window.PB_TERA = { TIPOS, NOM, COL, RAMPA, tipos: sp => TP[sp] ?? [], corona, ponerCorona, quitarCorona, tinte, alturaCuerpo };

  // ---------- estado de la partida ----------
  const st = run => run.__pbTera ??= { fin: 0, zona: -1 };
  const activo = run => !!run && (run.time ?? 0) < (run.__pbTera?.fin ?? 0);
  const puede = run => run && run.state === 'play' && (run.player?.level ?? 1) >= NV && !activo(run) && st(run).zona !== (run.stage ?? 1);

  // Transformación de Survivors: astillas en espiral, picos de cristal en los pies, el cuerpo se vuelve de cristal,
  // destello blanco y un anillo de luz que se cierra; luego aparece la corona.
  const transformar = (run, t) => {
    const p = run.player, r = RAMPA[t], col = num(r[2]), luz = num(r[4]);
    const tonos = t === 'stellar' ? ASTRAL.map(num) : [num(r[1]), num(r[2]), num(r[3]), num(r[5])];
    const h = alturaCuerpo(run, p.__msid ?? p.speciesId, p.renderScale);
    for (let i = 0; i < 6; i++) run.later?.(i * 0.08, () => { try {
      const q = p.pos, d = 3.6 * (1 - i / 6) + 0.6;
      for (let n = 0; n < 16; n++) {
        const a = n / 16 * Math.PI * 2 + i * 0.6;
        run.vfx.add.spawn({ x: q.x + Math.cos(a) * d, y: q.y + h * 0.5 + Math.sin(a * 2) * 0.3, z: q.z + Math.sin(a) * d, vx: -Math.cos(a) * 3, vz: -Math.sin(a) * 3, vy: 0.3, life: 0.35, size: 0.35, endSize: 0.1, color: tonos[n % tonos.length], glow: 0.6 });
      }
    } catch {} });
    run.later?.(0.35, () => { try { run.vfx.ring(p.pos.x, p.pos.y + 0.1, p.pos.z, 2.2, col, 0.5); for (let n = 0; n < 4; n++) run.vfx.add.spawn({ x: p.pos.x + [-0.75, 0.75, -0.45, 0.45][n], y: p.pos.y + 0.2, z: p.pos.z + (n % 2 ? 0.3 : -0.3), vy: 4 + n, life: 0.4, size: 0.7, endSize: 0.2, color: tonos[n % tonos.length], glow: 0.7 }); } catch {} });
    run.later?.(INTRO * 0.75, () => { for (let i = 0; i < 4; i++) run.later?.(i * 0.05, () => { try { run.vfx.ring(p.pos.x, p.pos.y + h * 0.5, p.pos.z, 4 - i * 0.9, luz, 0.25); } catch {} }); });
    run.later?.(INTRO, () => { try { run.vfx.burst(p.pos.x, p.pos.y + h * 0.6, p.pos.z, col, 30, 7, 0, 0.6, 0.8); run.vfx.ring(p.pos.x, p.pos.y + 0.2, p.pos.z, 5, col, 0.7); } catch {} });
  };
  // Al terminar: el cristal estalla en astillas del teratipo.
  const estallar = (run, x, y, z, t) => {
    const r = RAMPA[t], tonos = t === 'stellar' ? ASTRAL.map(num) : [num(r[1]), num(r[2]), num(r[3]), num(r[4])];
    try {
      for (let n = 0; n < 24; n++) { const a = Math.random() * Math.PI * 2, v = 3 + Math.random() * 5; run.vfx.add.spawn({ x, y: y + 1 + Math.random(), z, vx: Math.cos(a) * v, vz: Math.sin(a) * v, vy: 2 + Math.random() * 4, life: 0.7, size: 0.4, endSize: 0.05, color: tonos[n % tonos.length], glow: 0.5 }); }
      run.vfx.ring(x, y + 0.2, z, 4, num(r[2]), 0.5);
    } catch {}
  };
  window.PB_TERA.estallar = estallar;
  // 1.23: rastro de cristales del color del teratipo en el suelo mientras caminas teracristalizado.
  let ultPos = null;
  setInterval(() => {
    const run = window.__pbRun, p = run?.player, s = run?.__pbTera;
    if (!run || !p || run.state !== 'play' || !activo(run) || (run.time ?? 0) - (s?.ini ?? 0) < INTRO || p.dead) { ultPos = null; return; }
    const x = p.pos.x, z = p.pos.z;
    if (ultPos && Math.hypot(x - ultPos[0], z - ultPos[1]) < 0.7) return;
    ultPos = [x, z];
    const col = COL[s.tipo] ?? 0xffffff, g = run.vfx?.ground;
    if (!g?.spawn) return;
    try {
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2, r = 0.25 + Math.random() * 0.6, cx = x + Math.cos(a) * r, cz = z + Math.sin(a) * r;
        const tam = 0.9 + Math.random() * 0.8;
        g.spawn({ x: cx, y: (run.terrain.surface ?? run.terrain.height).call(run.terrain, cx, cz) + 0.1, z: cz, life: 2.4 + Math.random(), size: tam, endSize: tam * 0.4, color: i === 1 ? 0xffffff : col, shape: i === 2 ? 32 : 29, glow: 0.7, rot: Math.random() * Math.PI * 2 });
      }
      if (Math.random() < 0.35) run.vfx.burst(x, p.pos.y + 0.3, z, col, 3, 1.5, 29, 0.3, 0.5);
    } catch {}
  }, 90);

  const activar = () => {
    const run = window.__pbRun;
    if (!puede(run)) return;
    const s = st(run), t = tipoDe(run), p = run.player;
    s.zona = run.stage ?? 1; s.fin = (run.time ?? 0) + DURA; s.tipo = t; s.ini = run.time ?? 0;
    try { p.recompute(); } catch {}
    transformar(run, t);
    try {
      run.ui.banner('¡Teracristalización!', t === 'stellar' ? 'Teratipo Astral: +20 % de daño, +10 armadura y ×1,1 a todos tus ataques' : `Teratipo ${NOM[t] ?? t}: +20 % de daño, +10 armadura y ×1,25 a tus ataques ${NOM[t] ?? t}`, RAMPA[t][2], { species: p.speciesId });
      run.audio.power();
    } catch {}
  };

  // Cada fotograma: corona, tinte y motas que suben del cristal.
  let ultimoRun = null;
  const bucle = () => {
    requestAnimationFrame(bucle);
    const run = window.__pbRun, p = run?.player, s = run?.__pbTera;
    if (ultimoRun !== run) { coronas.clear(); if (cx2) cx2.clearRect(0, 0, capa.width, capa.height); ultimoRun = run; }
    if (!run || !p || !prepararCapa(run)) return;
    if (s?.fin) {
      const vivo = activo(run) && run.state !== 'over';
      const dentro = vivo && (run.time ?? 0) - s.ini >= INTRO * 0.75;
      if (dentro) {
        if (!p.__pbTint) p.__pbTint = tiempo => activo(run) && (run.time - s.ini) >= INTRO * 0.75 ? tinte(s.tipo, tiempo, (run.time - s.ini) < INTRO ? 0.5 : 0) : null;
        const resto = s.fin - run.time, parpadea = resto < 3 && Math.floor(run.time * 8) % 2 === 0;
        const esc = (p.renderScale || 1) * (p.__dmax ? 1.9 : 1);
        const h = alturaCuerpo(run, p.__msid ?? p.speciesId, esc);
        ponerCorona('yo', { x: p.pos.x, y: p.pos.y + h * 0.92, z: p.pos.z, tipo: s.tipo, esc, chica: h / esc < 1.4, oculta: parpadea || p.dead });
        s.vista = true;
        if (run.state === 'play' && Math.random() < 0.12) try {
          const r = RAMPA[s.tipo];
          run.vfx.add.spawn({ x: p.pos.x + (Math.random() - 0.5) * 1.2, y: p.pos.y + Math.random() * h, z: p.pos.z + (Math.random() - 0.5) * 1.2, vy: 1.2, life: 0.9, size: 0.18, endSize: 0, color: num(s.tipo === 'stellar' ? ASTRAL[Math.random() * 6 | 0] : r[3 + (Math.random() < 0.5 ? 1 : 0)]), glow: 0.6 });
        } catch {}
      } else if (s.vista) {
        s.vista = false; quitarCorona('yo');
        if (!vivo && run.state !== 'over') estallar(run, p.pos.x, p.pos.y, p.pos.z, s.tipo);
      }
    }
    dibujarCoronas(run);
  };
  requestAnimationFrame(bucle);

  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p) return;
    if (!p.__pbTera && typeof p.recompute === 'function') {
      const rc = p.recompute;
      p.recompute = function (...a) {
        const r = rc.apply(this, a);
        try { if (activo(run)) { this.stats.damage *= 1.2; this.stats.armor += 10; } } catch {}
        return r;
      };
      p.__pbTera = true;
    }
    const c = run.combat;
    if (c && !c.__pbTera) {
      const h = c.hit;
      c.hit = function (j, dmg, o) {
        try { const t = run.__pbTera?.tipo; if (activo(run) && t) { if (t === 'stellar') dmg *= 1.1; else if (o?.type === t) dmg *= 1.25; } } catch {}
        return h.call(this, j, dmg, o);
      };
      c.__pbTera = true;
    }
    const s = run.__pbTera;
    if (s?.fin && !activo(run) && !s.fuera) { s.fuera = true; try { p.recompute(); run.ui.toast('La teracristalización termina', null); } catch {} }
    if (activo(run)) s.fuera = false;
    pintar(run);
  }, 150);

  // ---------- botón TERA (junto a MEGA y DYNAMAX), con la corona ----------
  const css = document.createElement('style');
  css.textContent = `.pb-tera{width:64px;height:64px;border-radius:50%;border:3px solid #fff;background:radial-gradient(circle at 35% 30%,#fff 0 12%,var(--tc,#8ae8ff) 13% 60%,#2a4a7a 100%);color:#fff;font:900 12px system-ui,sans-serif;text-shadow:0 1px 2px #000;box-shadow:0 3px 10px rgba(0,0,0,.4);touch-action:manipulation;cursor:pointer;margin-top:6px;pointer-events:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;padding:0}
.pb-tera:disabled{filter:grayscale(.85) brightness(.75)}.pb-tera.on{animation:pbtera 1s infinite}.pb-tera small{display:block;font-size:9px;font-weight:800;line-height:1}
.pb-tera i{display:block;width:30px;height:20px;background:center/contain no-repeat;image-rendering:pixelated;filter:drop-shadow(0 1px 1px #000)}
@keyframes pbtera{50%{box-shadow:0 0 18px var(--tc,#8ae8ff)}}`;
  document.head.append(css);
  const icono = new Map();
  const iconoDe = t => { if (!icono.has(t)) { const a = corona(t); if (!a) return ''; const c = lienzo(a.w * 3, a.h * 3), x = c.getContext('2d'); x.imageSmoothingEnabled = false; x.drawImage(a.spr, 0, 0, c.width, c.height); icono.set(t, c.toDataURL()); } return icono.get(t); };
  let btn = null, k0 = '';
  const pintar = run => {
    const mx = document.querySelector('.pb-mx');
    if (!mx) return;
    if (!btn || !btn.isConnected) {
      btn = document.createElement('button');
      btn.className = 'pb-tera';
      let last = 0;
      const go = e => { e.stopPropagation(); e.preventDefault?.(); const t = performance.now(); if (t - last < 400) return; last = t; activar(); };
      btn.addEventListener('pointerdown', go);
      btn.addEventListener('click', e => e.stopPropagation());
      mx.append(btn); k0 = '';
    }
    const t = tipoDe(run), lv = run.player?.level ?? 1;
    btn.style.setProperty('--tc', RAMPA[t]?.[2] ?? '#8ae8ff');
    btn.hidden = run.duel || run.mode === 'duel';
    btn.disabled = !puede(run) && !activo(run);
    btn.classList.toggle('on', activo(run));
    const resto = Math.max(0, Math.ceil((run.__pbTera?.fin ?? 0) - (run.time ?? 0)));
    const txt = activo(run) ? `${Math.floor(resto / 60)}:${String(resto % 60).padStart(2, '0')}` : lv < NV ? `Nv. ${NV}` : st(run).zona === (run.stage ?? 1) ? 'usada' : NOM[t] ?? t;
    const k = t + '|' + txt + '|' + !!CORONAS;
    if (k === k0) return;
    k0 = k;
    const ic = iconoDe(t);
    btn.innerHTML = `${ic ? `<i style="background-image:url(${ic})"></i>` : ''}<span>TERA</span><small>${txt}</small>`;
  };
  window.addEventListener('keydown', e => { if (e.code === 'KeyT' && !e.repeat) activar(); });

  // ---------- Laboratorio: elegir teratipo ----------
  setInterval(() => {
    const lab = document.querySelector('.screen.lab'), m = meta();
    if (!lab || !m) return;
    const sp = window.PB_LAB?.cur?.();
    let caja = lab.querySelector('.pb-lab-tera');
    const t = elegido(sp);
    const k = `${sp}|${t}|${!!CORONAS}`;
    if (caja && caja.dataset.k === k) return;
    if (!caja) {
      const ref = lab.querySelector('.pb-lab-mald') ?? lab.querySelector('.pb-lab-nat') ?? lab.querySelector('.pb-lab-oro') ?? lab.querySelector('.scr-head');
      if (!ref) return;
      caja = document.createElement('div');
      caja.className = 'pb-lab-oro pb-lab-tera';
      caja.style.cssText = 'background:#1a3a5a;color:#d8f4ff';
      ref.after(caja);
    }
    caja.dataset.k = k;
    caja.replaceChildren();
    const s = document.createElement('span');
    const ic = iconoDe(t ?? TP[sp]?.[0] ?? 'normal');
    s.innerHTML = `${ic ? `<img src="${ic}" alt="" style="height:18px;image-rendering:pixelated;vertical-align:middle">` : '💎'} Teratipo: <b>${t ? NOM[t] : 'su primer tipo'}</b> <small>· TERA desde el Nv. ${NV}, una vez por zona, 3 min</small>`;
    const sel = document.createElement('select');
    sel.style.cssText = 'font:700 13px system-ui;border-radius:8px;padding:2px 4px';
    sel.innerHTML = `<option value="">Su primer tipo</option>` + TIPOS.map(x => `<option value="${x}" ${x === t ? 'selected' : ''}>${NOM[x]}</option>`).join('');
    sel.onchange = () => { const p = m.profile; p.pbTera ??= {}; if (sel.value) p.pbTera[sp] = sel.value; else delete p.pbTera[sp]; try { m.save(); } catch {} };
    caja.append(s, sel);
  }, 500);
})();
