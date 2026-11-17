/* Subversión propia (moportor6, 0.90): movimientos que bajan las defensas de los salvajes, solo en PokéBonk Lite.
   No ocupan huecos de movimiento ni de vitaminas: tu Pokémon aprende UNO al llegar al nivel 12, según su primer tipo,
   y lo usa solo cada 15 s sobre todos los salvajes cercanos (8 s de efecto: reciben más daño de todo).
   - Chirrido (Normal, Volador, Siniestro, Fantasma, Hada): el de mayor alcance; ×1,35 de daño recibido.
   - Sonido Metálico (Acero, Eléctrico, Hielo, Roca, Dragón, Psíquico): ×1,3 y rompe los escudos (escuderos).
   - Rocío Ácido (Veneno, Agua, Planta, Bicho): ×1,4 y los envenena.
   - Patada Trueno (Lucha, Fuego, Tierra): ×1,3 y patada a los cercanos (daño y aturdimiento).
   Ganchos: run.combat.hit (envuelto por partida) y run.player. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const MOV = {
    chirrido: { n: 'Chirrido', tipo: 'normal', mul: 1.35, r: 45, color: 0xf0e6c8 },
    metal: { n: 'Sonido Metálico', tipo: 'steel', mul: 1.3, r: 35, color: 0xb8c8d8 },
    acido: { n: 'Rocío Ácido', tipo: 'poison', mul: 1.4, r: 32, color: 0xb05ad8 },
    patada: { n: 'Patada Trueno', tipo: 'fighting', mul: 1.3, r: 32, color: 0xffd23a }
  };
  const POR_TIPO = {
    normal: 'chirrido', flying: 'chirrido', dark: 'chirrido', ghost: 'chirrido', fairy: 'chirrido',
    steel: 'metal', electric: 'metal', ice: 'metal', rock: 'metal', dragon: 'metal', psychic: 'metal',
    poison: 'acido', water: 'acido', grass: 'acido', bug: 'acido',
    fighting: 'patada', fire: 'patada', ground: 'patada'
  };
  const NIVEL = 12, CADA = 15, DURA = 8;
  // Para la ficha de la pausa (apoyo.js): el movimiento aprendido en esta partida.
  window.PB_DEB = run => { const m = MOV[run?.__pbDeb?.mov]; return m ? { n: m.n, tipo: m.tipo, txt: `Cada ${CADA} s: los salvajes cercanos reciben ×${String(m.mul).replace('.', ',')} de daño ${DURA} s` } : null; };

  const st = run => run.__pbDeb ??= { until: new Float64Array(4096), gen: new Int32Array(4096), sig: 0 };
  const debil = (run, j) => {
    const d = run.__pbDeb, E = run.enemies;
    return d && j < 4096 && d.gen[j] === E.gen[j] && run.time < d.until[j] ? MOV[d.mov]?.mul ?? 1 : 1;
  };

  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p || run.state !== 'play') return;
    const c = run.combat;
    if (c && !c.__pbDeb) {
      const h = c.hit;
      c.hit = function (j, dmg, o) { try { dmg *= debil(run, j); } catch {} return h.call(this, j, dmg, o); };
      c.__pbDeb = true;
    }
    const d = st(run);
    if ((p.level ?? 1) < NIVEL) return;
    if (!d.mov) {
      d.mov = POR_TIPO[p.types?.[0]] ?? 'chirrido';
      d.sig = run.time + 2;
      try { run.ui.banner(`¡${run.player.name ?? 'Tu Pokémon'} aprendió ${MOV[d.mov].n}!`, 'Baja las defensas de los salvajes cercanos cada 15 s (no ocupa hueco)', '#ffd23a', { species: p.speciesId }); } catch {}
      return;
    }
    if (run.time < d.sig) return;
    d.sig = run.time + CADA;
    const m = MOV[d.mov], E = run.enemies, x = p.pos.x, z = p.pos.z;
    let n = 0;
    for (const j of E.within(x, z, m.r)) {
      if (!E.alive[j] || E.dying?.[j] || (E.flags[j] & 65536) || j >= 4096) continue;
      d.gen[j] = E.gen[j]; d.until[j] = run.time + DURA; n++;
      try {
        if (d.mov === 'metal' && E.shield) E.shield[j] = 0;
        else if (d.mov === 'acido') c.hit(j, 6 * (1 + p.level * 0.08), { type: 'poison', cls: 'special', status: 'poison', statusChance: 1, noReact: true, src: 'pb-acido' });
        else if (d.mov === 'patada' && (E.x[j] - x) ** 2 + (E.z[j] - z) ** 2 < 64) c.hit(j, 25 * (1 + p.level * 0.08), { type: 'fighting', cls: 'physical', status: 'stun', statusChance: 0.5, knock: 3, noReact: true, src: 'pb-patada' });
      } catch {}
    }
    try {
      run.vfx.ring(x, p.pos.y + 0.2, z, Math.min(m.r, 14), m.color, 0.6);
      run.vfx.ring(x, p.pos.y + 0.2, z, Math.min(m.r, 14) * 0.6, m.color, 0.45);
      run.ui.popup(x, p.pos.y + 2.8, z, `¡${m.n}!${n ? ` · ${n} debilitados` : ''}`, '#ffd23a', 1);
    } catch {}
  }, 100);
})();
