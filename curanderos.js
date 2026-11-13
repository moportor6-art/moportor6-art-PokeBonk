/* Subversión propia: curanderos en todos los mapas.
   El juego ya trae salvajes curanderos (Clefairy, Chansey, Blissey, Audino, Sylveon, Comfey, Hatenna...): cada
   4,5 s curan a los salvajes cercanos (15 % de PS; a los élites, 3 %) con un anillo verde y corazones. Pero solo
   salían en los mapas donde esas especies aparecen. Aquí:
   - En cualquier mapa, de vez en cuando un salvaje normal sale como curandero (de la región si la hay, si no uno de la
     lista según lo avanzado del mapa). Como mucho 1-3 a la vez.
   - Su cura sube poco a poco con el avance del mapa (x1 en el primero, hasta x1,6) y algo con la dificultad.
   - Se ve: anillo verde bajo cada curandero, cruces verdes encima y números verdes en los curados.
   - Aviso grande la primera vez en la partida (como los Alfas) y pequeño en los siguientes.
   - Alfa de apoyo de una especie curandera: te cura un poco cada 8 s, más con el vínculo y al evolucionar.
   Ganchos: menus-…js ($fjadv2: multiplicador PB_CURA.mult y PB_CURA.curado) y las aparición (PB_REGIONES.remap y
   PB_REG_E, envueltas aquí). */
(() => {
  const CURA = new Set([35, 36, 113, 242, 301, 440, 531, 594, 700, 764, 856, 857, 858]); // igual que el juego (Lh)
  // Orden aproximado de poder: los primeros mapas sacan los básicos.
  const POR_AVANCE = [[35, 113, 440, 531, 856], [36, 301, 594, 764, 857], [242, 700, 858]];
  const KJ = ['forest', 'desert', 'coast', 'glacier', 'canela', 'cave', 'encina', 'iris', 'graveyard'];
  const VERDE = 0x5ae88a, RING = 3, CRUZ = 20, CORAZON = 10;
  const R = () => window.PB_REGIONES;
  const nombre = sp => R()?.todos?.find(p => p.id === sp)?.name ?? 'Curandero';

  // Avance del mapa: 0 en Bosque Verde y +1 por cada mapa siguiente (Kanto, Johto y luego cada región).
  const avance = run => {
    const id = run?.biome?.id;
    let k = KJ.indexOf(id);
    if (k < 0) { const m = R()?.MAPAS ?? []; const j = m.indexOf(id); k = j < 0 ? 0 : KJ.length + j; }
    return k;
  };
  const C = {
    avance,
    mult(run) {
      const k = run.__pbCuraK ??= avance(run);
      const tier = Math.max(0, Math.min(2, run.tier | 0));
      return Math.min(1.6, 1 + k * 0.02) * (1 + 0.1 * tier);
    },
    // Al curar a un salvaje: número verde y unas chispas sobre él.
    curado(run, i, cant) {
      const E = run.enemies;
      if (!(cant > 0)) return;
      try {
        const y = E.y[i] + (E.hgt?.[i] ?? 1);
        if (Math.random() < 0.6) run.vfx.number(E.x[i], y + 0.4, E.z[i], cant, VERDE, true);
        run.vfx.burst(E.x[i], y, E.z[i], VERDE, 3, 1.5, CRUZ, 0.5, 0.5);
      } catch {}
    },
  };
  window.PB_CURA = C;

  // ---------- aparición ----------
  const vivos = run => {
    const E = run.enemies; let n = 0;
    for (let i = 0; i < E.n; i++) if (E.alive[i] && !(E.dying?.[i] > 0) && (E.flags[i] & 32)) n++;
    return n;
  };
  const elegir = run => {
    const reg = R()?.regionMapa?.(run);
    if (reg) { const suyos = [...CURA].filter(s => s >= reg.min && s <= reg.max); if (suyos.length) return suyos[Math.random() * suyos.length | 0]; }
    const k = run.__pbCuraK ??= avance(run);
    const nivel = k < 9 ? 0 : k < 25 ? 1 : 2;
    const l = POR_AVANCE[Math.random() < 0.7 ? nivel : Math.max(0, nivel - 1)];
    return l[Math.random() * l.length | 0];
  };
  const envolverRemap = () => {
    const Rg = R();
    if (!Rg || Rg.__pbCura) return !!Rg;
    const orig = Rg.remap;
    Rg.remap = function (run, id, flags) {
      const r = orig.call(this, run, id, flags);
      try {
        // Solo salvajes normales: ni jefes, élites, Alfas, capturas, tesoros, hordas, objetos, remotos ni clásicos.
        if (flags & (1 | 2 | 4 | 128 | 512 | 1024 | 4096 | 8192 | 16384 | 32768 | 65536 | 131072)) return r;
        if (run.mode === 'duel' || CURA.has(r ?? id)) return r;
        const k = run.__pbCuraK ??= avance(run);
        const tope = 1 + (k >= 10 ? 1 : 0) + (k >= 25 ? 1 : 0);
        const espera = Math.max(12, 28 - k * 0.5);
        if ((run.time ?? 0) - (run.__pbCuraT ?? -999) < espera) return r;
        if (Math.random() > 0.06 || vivos(run) >= tope) return r;
        run.__pbCuraT = run.time ?? 0;
        return elegir(run);
      } catch { return r; }
    };
    Rg.__pbCura = true;
    return true;
  };
  if (!envolverRemap()) { const t = setInterval(() => { if (envolverRemap()) clearInterval(t); }, 300); }

  // Aviso al aparecer un curandero (los naturales del mapa también).
  const prevE = window.PB_REG_E;
  window.PB_REG_E = (E, i, sp) => {
    try { prevE?.(E, i, sp); } catch {}
    try {
      if (!(E.flags[i] & 32)) return;
      const run = E.run;
      if (!run.__pbCuraVisto) {
        run.__pbCuraVisto = true;
        run.ui.banner('¡Curandero a la vista!', `${nombre(sp)} cura a los salvajes cercanos (cruz verde): derrótalo primero. Anticura lo frena.`, '#36c96a', { species: sp });
        try { run.cry(sp); } catch {}
      } else if ((run.time ?? 0) - (run.__pbCuraAviso ?? -999) > 40) {
        run.ui.toast(`${nombre(sp)} curandero cerca: cura a los salvajes`, null);
      }
      run.__pbCuraAviso = run.time ?? 0;
    } catch {}
  };

  // ---------- marcas, y Alfas aliados curanderos ----------
  setInterval(() => {
    const run = window.__pbRun;
    if (!run || run.state !== 'play' || !run.enemies) return;
    try {
      const E = run.enemies, t = run.time ?? 0;
      for (let i = 0; i < E.n; i++) {
        if (!E.alive[i] || E.dying?.[i] > 0 || !(E.flags[i] & 32)) continue;
        const sy = run.terrain.surface(E.x[i], E.z[i]);
        run.vfx.ground.spawn({ x: E.x[i], y: sy + 0.08, z: E.z[i], life: 0.22, size: 2.2, endSize: 2.2, color: E.healBlock?.[i] > 0 ? 0x8a8a8a : VERDE, shape: RING, glow: 0, rot: 0 });
        if (((t * 5) | 0) % 3 === 0) run.vfx.burst(E.x[i], E.y[i] + (E.hgt?.[i] ?? 1) + 0.7, E.z[i], VERDE, 1, 0.4, CRUZ, 0.6, 0.7);
      }
      // Alfa de apoyo curandero: 2 % de tus PS cada 8 s (+10 % por vínculo, +25 % por evolución).
      const p = run.player;
      for (const a of run.allies?.list ?? []) {
        if (!CURA.has(a.species)) continue;
        if (t - (a.__pbCuraT ?? 0) < 8) continue;
        a.__pbCuraT = t;
        if (p.dead || p.hp >= p.maxHp) continue;
        const cant = p.maxHp * 0.02 * (1 + 0.1 * (a.bond ?? 0)) * (1 + 0.25 * (a.evos ?? 0));
        p.heal(cant);
        run.vfx.ring(a.x, a.y + 0.1, a.z, 2.5, VERDE, 0.5);
        run.vfx.burst(p.pos.x, p.pos.y + 1.6, p.pos.z, VERDE, 6, 2, CORAZON, 0.6, 0.7);
        run.vfx.heal?.(p.pos.x, p.pos.y + 2.4, p.pos.z, cant);
      }
    } catch {}
  }, 200);
})();
