/* Subversión propia (moportor6, 1.26): Desafío diario, solo en PokéBonk Lite.
   Botón «📅 Desafío diario» en la pantalla del Modo historia (junto a los Anillos de Hoopa). Cada día (fecha del
   teléfono) toca un mapa que ya hayas jugado, un Pokémon de tu Liga y una regla especial, iguales todo el día.
   Meta: aguantar 10 minutos (o ganar la partida). Premio: 500 de Polvo Estelar, una vez al día.
   Datos: profile.pbDiario = { dia: 'AAAA-MM-DD', hecho: bool }. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const META = 600, PREMIO = 500;
  const REGLAS = [
    { id: 'horda', nombre: 'Horda doble', desc: 'El doble de enemigos (+50 % de experiencia).', ini: run => { run.diff.enemyAmount *= 2; run.diff.xpMult *= 1.5; } },
    { id: 'canon', nombre: 'Cañón de cristal', desc: '+60 % de daño, pero −40 % de PS máximos.', st: s => { s.damage *= 1.6; s.maxHp *= 0.6; } },
    { id: 'rayo', nombre: 'Relámpago', desc: 'Te mueves un 30 % más rápido, y los enemigos un 20 %.', st: s => { s.moveSpeed *= 1.3; }, ini: run => { run.diff.enemySpeed *= 1.2; } },
    { id: 'seca', nombre: 'Sequía', desc: 'Tu curación se reduce un 70 %.', st: s => { s.healing = (s.healing ?? 1) * 0.3; } },
    { id: 'gigantes', nombre: 'Gigantes', desc: 'Los enemigos tienen +60 % de PS (+50 % de experiencia).', ini: run => { run.diff.enemyHp *= 1.6; run.diff.xpMult *= 1.5; } },
    { id: 'furia', nombre: 'Furia', desc: 'Los enemigos pegan un 40 % más; tú atacas un 25 % más rápido.', st: s => { s.attackSpeed *= 1.25; }, ini: run => { run.diff.enemyDamage *= 1.4; } }
  ];
  const meta = () => window.__pbMeta;
  const hoy = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const azar = semilla => { let h = 2166136261; for (const c of semilla) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296; };
  const reto = () => {
    const p = meta().profile, r = azar(hoy());
    const mapas = Object.entries(p.biomes ?? {}).filter(([, v]) => v >= 0).map(([k]) => k).sort();
    const liga = [...p.league].sort((a, b) => a - b);
    return { dia: hoy(), mapa: mapas.length ? mapas[Math.floor(r() * mapas.length)] : 'forest', sp: liga[Math.floor(r() * liga.length)] ?? 1, regla: REGLAS[Math.floor(r() * REGLAS.length)] };
  };
  const nomMapa = id => { try { for (const r of window.PB_REGIONES?.lista ?? []) for (const m of r.mapas ?? []) if (m.id === id) return m.name; } catch {} return { forest: 'Bosque Verde', desert: 'Desierto Rocoso', coast: 'Costa Tormenta' }[id] ?? id; };
  const estado = () => { const p = meta().profile; if (p.pbDiario?.dia !== hoy()) p.pbDiario = { dia: hoy(), hecho: false }; return p.pbDiario; };
  let pendiente = null;

  const pantalla = () => {
    const H = window.PB_HISTORIA; if (!H) return;
    const c = H.capa('kanto'), x = reto(), e = estado();
    const b = document.createElement('div'); b.className = 'hb';
    b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>📅 Desafío diario · ${x.dia}</h2>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0"><img src="./assets/portraits/${x.sp}.png" alt="" style="width:64px;height:64px;border-radius:12px;image-rendering:pixelated">
<div><b>${H.nombrePk(x.sp)}</b> en <b>${nomMapa(x.mapa)}</b><br><b>Regla: ${x.regla.nombre}</b> — ${x.regla.desc}<br>Meta: aguanta <b>10 minutos</b> (o gana). Premio: <b>${PREMIO} de Polvo</b>, una vez al día.</div></div>
<p class="sub">${e.hecho ? '✔ Ya lo superaste hoy. Puedes volver a jugarlo, pero el premio es solo una vez. Mañana habrá otro.' : 'Mismo reto para todo el día.'}</p>
<div class="fila"><button class="hbt go">¡A jugar!</button><button class="hbt vol">Volver</button></div>`;
    b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = () => H.abrir();
    b.querySelector('.go').onclick = () => {
      pendiente = x; H.cerrar();
      Promise.resolve(window.__pbApp?.startRun?.({ species: x.sp, biome: x.mapa, tier: 0, boosts: [], mode: 'standard' })).catch(() => { pendiente = null; });
    };
    c.append(b);
  };

  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (pendiente && run && p && run.state === 'play' && !run.__pbDiario) {
      run.__pbDiario = pendiente; pendiente = null;
      const R = run.__pbDiario.regla;
      try { R.ini?.(run); } catch {}
      if (R.st) { const rc = p.recompute; p.recompute = function (...a) { const r = rc.apply(this, a); try { R.st(this.stats); this.maxHp = this.stats.maxHp; if (this.hp > this.maxHp) this.hp = this.maxHp; } catch {} return r; }; try { p.recompute(); } catch {} }
      try { run.ui.banner('📅 Desafío diario', `${R.nombre}: ${R.desc} Aguanta 10 minutos.`, '#3a9aff', { species: p.speciesId }); } catch {}
    }
    const d = run?.__pbDiario;
    if (!d || d.ok) return;
    if ((run.time ?? 0) >= META || (run.state === 'over' && run.victory)) {
      d.ok = true;
      const e = estado(), nuevo = !e.hecho;
      if (nuevo) { e.hecho = true; run.stats.pbDust = (run.stats.pbDust ?? 0) + PREMIO; try { meta().save(); } catch {} }
      try { run.ui.banner('📅 ¡Desafío diario superado!', nuevo ? `+${PREMIO} de Polvo Estelar` : 'Ya tenías el premio de hoy', '#3a9aff'); } catch {}
    }
  }, 300);

  // Botón junto a los Anillos de Hoopa.
  setInterval(() => {
    const f = document.querySelector('.pb-h .pb-hoopa');
    if (!f || f.querySelector('.pb-diario')) return;
    const bt = document.createElement('button'); bt.className = 'hbt pb-diario'; bt.textContent = '📅 Desafío diario';
    bt.onclick = pantalla; f.append(bt);
  }, 400);
})();
