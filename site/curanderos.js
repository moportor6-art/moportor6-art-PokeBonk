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
  const ESCUDO = new Set([11, 14, 90, 91, 95, 213, 436, 437, 703, 304, 305, 306, 374, 375, 376]); // igual que el juego (Rh)
  // Dos papeles de apoyo del juego: curanderos (bit 32) y escuderos (bit 64). Orden aproximado de poder por avance.
  const ROLES = [
    { bit: 32, set: CURA, k: 'Cura', avance: [[35, 113, 440, 531, 856], [36, 301, 594, 764, 857], [242, 700, 858]], color: 0x5ae88a, hex: '#36c96a',
      titulo: '¡Curandero a la vista!', texto: n => `${n} cura a los salvajes cercanos (cruz verde): derrótalo primero. Anticura lo frena.`, corto: n => `¡${n} curandero cerca! Cura a los salvajes` },
    { bit: 64, set: ESCUDO, k: 'Esc', avance: [[11, 14, 304, 436], [90, 95, 213, 305, 374, 437], [91, 306, 376, 703, 375]], color: 0x8ae0ff, hex: '#3aa0e0',
      titulo: '¡Escudero a la vista!', texto: n => `${n} protege con escudos a los salvajes cercanos (anillo azul): derrótalo primero.`, corto: n => `¡${n} escudero cerca! Da escudos a los salvajes` },
  ];
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
      return Math.min(2.4, 1.6 + k * 0.03) * (1 + 0.15 * tier); // 0.83: más fuertes desde el principio
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
  // Tras cada pulso de un curandero (i = índice, cerca = salvajes a su alrededor):
  // se cura a sí mismo un poco más y deja un escudo pequeño a los de alrededor (la mitad que un escudero).
  C.pulso = (run, i, cerca) => {
    const E = run.enemies, m = C.mult(run);
    if (E.hp[i] < E.maxHp[i]) {
      const cant = Math.min(E.maxHp[i] - E.hp[i], E.maxHp[i] * 0.15 * m);
      E.hp[i] += cant; C.curado(run, i, cant);
    }
    let n = 0;
    for (const j of cerca) {
      if (j === i || n >= 12 || E.healBlock[j] > 0 || (E.flags[j] & (4 | 128))) continue;
      const tope = E.maxHp[j] * 0.4 * m;
      if (E.shield[j] < tope) { E.shield[j] = Math.min(tope, E.shield[j] + E.maxHp[j] * 0.15 * m); n++; }
    }
    if (n) run.vfx.ring(E.x[i], E.y[i] + 0.2, E.z[i], 5, 0x8ae0ff, 0.5);
  };
  window.PB_CURA = C;

  // ---------- aparición ----------
  const vivos = (run, bit) => {
    const E = run.enemies; let n = 0;
    for (let i = 0; i < E.n; i++) if (E.alive[i] && !(E.dying?.[i] > 0) && (E.flags[i] & bit)) n++;
    return n;
  };
  const elegir = (run, rol) => {
    const reg = R()?.regionMapa?.(run);
    if (reg) { const suyos = [...rol.set].filter(s => s >= reg.min && s <= reg.max); if (suyos.length) return suyos[Math.random() * suyos.length | 0]; }
    const k = run.__pbCuraK ??= avance(run);
    const nivel = k < 9 ? 0 : k < 25 ? 1 : 2;
    const l = rol.avance[Math.random() < 0.7 ? nivel : Math.max(0, nivel - 1)];
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
        if (run.mode === 'duel' || CURA.has(r ?? id) || ESCUDO.has(r ?? id)) return r;
        if ((run.stageTime ?? 99) < 12) return r; // no en el arranque de la zona (lo taparía su aviso)
        const k = run.__pbCuraK ??= avance(run);
        const tope = 4 + (k >= 10 ? 1 : 0) + (k >= 25 ? 2 : 0);
        const espera = Math.max(4, 9 - k * 0.2);
        for (const rol of ROLES) {
          const T = '__pb' + rol.k + 'T';
          if ((run.time ?? 0) - (run[T] ?? -999) < espera) continue;
          if (Math.random() > 0.25 || vivos(run, rol.bit) >= tope) continue;
          run[T] = run.time ?? 0;
          return elegir(run, rol);
        }
        return r;
      } catch { return r; }
    };
    Rg.__pbCura = true;
    return true;
  };
  if (!envolverRemap()) { const t = setInterval(() => { if (envolverRemap()) clearInterval(t); }, 300); }

  // Curanderos normales (no élites ni jefes): el doble de PS, para que les dé tiempo a curar.
  const prevE = window.PB_REG_E;
  window.PB_REG_E = (E, i, sp) => {
    try { prevE?.(E, i, sp); } catch {}
    // Escuderos normales: +50 % de PS.
    try { if ((E.flags[i] & 96) && !(E.flags[i] & (1 | 2 | 4 | 65536))) { const f = E.flags[i] & 32 ? 3 : 2.5; E.maxHp[i] *= f; E.hp[i] *= f; } } catch {}
  };
  // Aviso cuando un curandero se acerca (aparecen lejos, en el borde): grande la primera vez, pequeño después.
  const avisar = (run, sp, rol) => {
    const V = '__pb' + rol.k + 'Visto';
    if (!run[V]) {
      run[V] = true;
      run.ui.banner(rol.titulo, rol.texto(nombre(sp)), rol.hex, { species: sp });
      try { run.cry(sp); } catch {}
    } else run.ui.toast(rol.corto(nombre(sp)), null);
    run['__pb' + rol.k + 'Aviso'] = run.time ?? 0;
  };

  // ---------- marcas, y Alfas aliados curanderos ----------
  setInterval(() => {
    const run = window.__pbRun;
    if (!run || run.state !== 'play' || !run.enemies) return;
    try {
      const E = run.enemies, t = run.time ?? 0, pp = run.player.pos;
      for (const rol of ROLES) {
        let cerca = 0;
        for (let i = 0; i < E.n; i++) {
          if (!E.alive[i] || E.dying?.[i] > 0 || !(E.flags[i] & rol.bit)) continue;
          if (!cerca && Math.hypot(E.x[i] - pp.x, E.z[i] - pp.z) < 20) cerca = E.species[i];
          const sy = run.terrain.surface(E.x[i], E.z[i]);
          run.vfx.ground.spawn({ x: E.x[i], y: sy + 0.08, z: E.z[i], life: 0.22, size: 2.2, endSize: 2.2, color: E.healBlock?.[i] > 0 ? 0x8a8a8a : rol.color, shape: RING, glow: 0, rot: 0 });
          if (((t * 5) | 0) % 3 === 0) run.vfx.burst(E.x[i], E.y[i] + (E.hgt?.[i] ?? 1) + 0.7, E.z[i], rol.color, 1, 0.4, rol.bit === 32 ? CRUZ : 14, 0.6, 0.7);
        }
        if (cerca && (run.stageTime ?? 99) > 6 && t - (run['__pb' + rol.k + 'Aviso'] ?? -999) > 45) avisar(run, cerca, rol);
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
