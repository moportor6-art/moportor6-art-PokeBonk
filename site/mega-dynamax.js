/* Subversión propia: Megaevolución y Dynamax dentro de la partida.
   - Mega: solo para los Pokémon que tienen sprite de mega. Se desbloquea con la investigación de su
     familia al 100%. En la partida, al llegar a MEGA_KILLS bajas sale el botón MEGA; al tocarlo te
     megaevolucionas hasta el final de la partida.
   - Dynamax: cualquier Pokémon, varias veces por partida. Se recarga con bajas: DMAX_KILLS_EARLY
     bajas si la recarga empieza en los primeros DMAX_EARLY_SECS segundos, DMAX_KILLS_LATE después.
     Las bajas cuentan desde que acaba el Dynamax anterior. Dura DMAX_SECS segundos de juego.
   No se usa en Duelos. Sprites de megas: PMD Sprite Repository (PMDCollab), uso no comercial con crédito. */
(() => {
  const MEGA_KILLS = 150;
  const DMAX_KILLS_EARLY = 100;
  const DMAX_KILLS_LATE = 300;
  const DMAX_EARLY_SECS = 300;
  const DMAX_SECS = 20;

  // especie base -> mega (sid = id del sprite; shiny = tiene hoja variocolor propia;
  // types = tipos de la mega si cambian. Las demás conservan los tipos del Pokémon base, como en los juegos)
  const MEGAS = {
    6: { sid: 15006, name: 'Mega Charizard X', shiny: true, types: ['fire', 'dragon'] },
    65: { sid: 15065, name: 'Mega Alakazam', shiny: true },
    94: { sid: 15094, name: 'Mega Gengar', shiny: true },
    115: { sid: 15115, name: 'Mega Kangaskhan', shiny: true },
    142: { sid: 15142, name: 'Mega Aerodactyl', shiny: true },
    150: { sid: 15150, name: 'Mega Mewtwo Y', shiny: true },
    208: { sid: 15208, name: 'Mega Steelix', shiny: true },
    227: { sid: 15227, name: 'Mega Skarmory', shiny: false },
    229: { sid: 15229, name: 'Mega Houndoom', shiny: true },
    248: { sid: 15248, name: 'Mega Tyranitar', shiny: false }
  };
  const MEGA_MODS = [
    { stat: 'damage', mul: 1.25 }, { stat: 'maxHp', mul: 1.15 },
    { stat: 'attackSpeed', mul: 1.1 }, { stat: 'armor', add: 10 }
  ];
  const DMAX_MODS = [
    { stat: 'damage', mul: 1.5 }, { stat: 'maxHp', mul: 1.5 }, { stat: 'area', mul: 1.3 }
  ];

  const M = {
    MEGAS,
    run: null,
    st: null,

    // ¿Tiene desbloqueada la mega esta especie? (investigación de su familia al 100%)
    unlocked(meta, sp) {
      if (!MEGAS[sp] || !meta) return false;
      try {
        const fam = meta.family(sp), goal = meta.researchGoal(fam), have = meta.profile.research?.[fam] ?? 0;
        return goal > 0 && have >= goal;
      } catch { return false; }
    },

    // Llamado por el juego al empezar cada partida.
    start(run) {
      M.run = run;
      M.st = { mega: false, megaFor: null, dmaxEnd: 0, dmaxBase: 0, dmaxNeed: DMAX_KILLS_EARLY, off: run.mode === 'duel' };
      const p = run.player;
      if (p) { p.__msid = null; p.__mshp = false; p.__dmax = false; }
      try { for (const k in MEGAS) if (M.unlocked(run.meta, +k)) run.sprites.get(MEGAS[k].sid); } catch {}
      M.ui();
    },

    // Mods de estadísticas que el juego suma en recompute().
    mods(p) {
      const out = [];
      if (p.__msid) out.push(...MEGA_MODS);
      if (p.__dmax) out.push(...DMAX_MODS);
      return out;
    },

    canMega() {
      const r = M.run, s = M.st;
      if (!r || !s || s.off || s.mega || r.state !== 'play' || !r.player || r.player.dead) return false;
      const sp = r.player.speciesId;
      return M.unlocked(r.meta, sp) && (r.stats?.kills ?? 0) >= MEGA_KILLS;
    },
    canDmax() {
      const r = M.run, s = M.st;
      if (!r || !s || s.off || r.state !== 'play' || !r.player || r.player.dead || r.player.__dmax) return false;
      return M.dmaxProgress() >= s.dmaxNeed;
    },

    dmaxProgress() {
      const r = M.run, s = M.st;
      return Math.max(0, (r?.stats?.kills ?? 0) - (s?.dmaxBase ?? 0));
    },

    // Empieza una recarga nueva: 100 bajas en los primeros 5 minutos, 300 después.
    dmaxReset() {
      const r = M.run, s = M.st;
      s.dmaxBase = r.stats?.kills ?? 0;
      s.dmaxNeed = (r.time ?? 0) < DMAX_EARLY_SECS ? DMAX_KILLS_EARLY : DMAX_KILLS_LATE;
    },

    keepHp(p, fn) {
      const before = p.maxHp || 1, ratio = (p.hp ?? before) / before;
      fn(); p.recompute();
      p.hp = Math.min(p.maxHp, Math.max(1, Math.round(ratio * p.maxHp)));
    },

    megaevolve() {
      if (!M.canMega()) return;
      const r = M.run, p = r.player, m = MEGAS[p.speciesId], sh = r.shinySkin || r.skinLook === 'classic';
      M.keepHp(p, () => {
        p.__msid = sh && m.shiny ? m.sid + 2e4 : m.sid;
        p.__mshp = sh && !m.shiny;
        // Tipos de la mega (solo cambian si la mega cambia de tipo en los juegos).
        if (m.types) p.types = m.types.slice();
      });
      M.st.mega = true; M.st.megaFor = p.speciesId;
      try { r.sprites.get(p.__msid); } catch {}
      try { r.audio.power(); } catch {}
      try { r.shake?.(.4); } catch {}
      try { r.vfx.ring(p.pos.x, p.pos.y + .2, p.pos.z, 5 * (r.R ?? 1), 16766010, .5, .3); } catch {}
      try { r.ui.toast(`¡${m.name}! Más daño, PS, velocidad de ataque y armadura.`, null); } catch {}
    },

    dynamax() {
      if (!M.canDmax()) return;
      const r = M.run, p = r.player;
      M.keepHp(p, () => { p.__dmax = true; });
      M.st.dmaxEnd = r.time + DMAX_SECS;
      try { r.audio.power(); } catch {}
      try { r.shake?.(.6); } catch {}
      try { r.ui.toast(`¡Dynamax! ${DMAX_SECS} s gigante: más daño, PS y área.`, null); } catch {}
    },

    tick() {
      const r = M.run, s = M.st;
      if (!r || !s) return;
      const p = r.player;
      if (r.state === 'over') { M.hide(); M.run = null; return; }
      if (p && p.__dmax && r.time >= s.dmaxEnd) {
        M.keepHp(p, () => { p.__dmax = false; });
        M.dmaxReset();
        try { r.ui.toast(`El Dynamax se ha acabado. Recarga: ${s.dmaxNeed} bajas.`, null); } catch {}
      }
      // Si evoluciona o cambia de especie, la mega solo vale para la especie que la tenía.
      if (p && p.__msid && s.megaFor !== p.speciesId) { M.keepHp(p, () => { p.__msid = null; p.__mshp = false; }); s.mega = false; }
      if (p && p.__dmax && !p.dead) {
        try {
          for (let k = 0; k < 3; k++) r.vfx.add.spawn({ x: p.pos.x + (Math.random() - .5) * 2.6, y: p.pos.y + Math.random() * 3.4, z: p.pos.z + (Math.random() - .5) * 2.6,
            vy: 1.6, life: .8, size: 1.3, endSize: 0, color: [16724044, 16728128, 16737380][k], shape: 33, glow: 1 });
        } catch {}
      }
      M.paint();
    },

    // ---- botones ----
    el: null, bMega: null, bDmax: null,
    ui() {
      if (!M.el) {
        const st = document.createElement('style');
        st.textContent = `.pb-mx{position:fixed;right:max(12px,env(safe-area-inset-right));top:42%;z-index:30;display:flex;flex-direction:column;gap:10px;pointer-events:none}
.pb-mx button{pointer-events:auto;width:64px;height:64px;border-radius:50%;border:3px solid #fff;font:900 12px/1 system-ui,sans-serif;color:#fff;letter-spacing:.5px;box-shadow:0 4px 0 rgba(0,0,0,.25);touch-action:manipulation}
.pb-mx .mg{background:radial-gradient(circle at 35% 30%,#d9a8ff,#7a3fd0)}
.pb-mx .dx{background:radial-gradient(circle at 35% 30%,#ff9a9a,#d02a3a)}
.pb-mx button[hidden]{display:none}
.pb-mx button.ready{animation:pbmx 1s ease-in-out infinite}
.pb-mx button:disabled{filter:grayscale(.7) brightness(.8)}
@keyframes pbmx{50%{transform:scale(1.1)}}`;
        document.head.append(st);
        M.el = document.createElement('div'); M.el.className = 'pb-mx';
        M.bMega = document.createElement('button'); M.bMega.type = 'button'; M.bMega.className = 'mg'; M.bMega.textContent = 'MEGA';
        M.bDmax = document.createElement('button'); M.bDmax.type = 'button'; M.bDmax.className = 'dx'; M.bDmax.textContent = 'DMAX';
        const stop = e => { e.stopPropagation(); };
        for (const b of [M.bMega, M.bDmax]) { b.addEventListener('pointerdown', stop); b.addEventListener('touchstart', stop, { passive: true }); }
        M.bMega.addEventListener('click', e => { e.stopPropagation(); M.megaevolve(); M.paint(); });
        M.bDmax.addEventListener('click', e => { e.stopPropagation(); M.dynamax(); M.paint(); });
        M.el.append(M.bMega, M.bDmax);
        document.body.append(M.el);
      }
      M.paint();
    },
    hide() { if (M.el) M.el.hidden = true; },
    paint() {
      if (!M.el) return;
      const r = M.run, s = M.st;
      if (!r || !s || s.off || r.state === 'over') { M.el.hidden = true; return; }
      M.el.hidden = !(r.state === 'play' || r.state === 'paused' || r.state === 'evolving');
      const kills = r.stats?.kills ?? 0, p = r.player;
      // MEGA: solo si esta especie tiene mega desbloqueada y aún no la usó
      const hasMega = p && M.unlocked(r.meta, p.speciesId) && !s.mega;
      M.bMega.hidden = !hasMega;
      if (hasMega) {
        const ok = kills >= MEGA_KILLS;
        M.bMega.disabled = !ok; M.bMega.classList.toggle('ready', ok);
        M.bMega.textContent = ok ? 'MEGA' : `${Math.min(kills, MEGA_KILLS)}/${MEGA_KILLS}`;
      }
      M.bDmax.hidden = false;
      if (p && p.__dmax) {
        M.bDmax.disabled = true; M.bDmax.classList.remove('ready');
        M.bDmax.textContent = `${Math.max(0, Math.ceil(s.dmaxEnd - r.time))} s`;
      } else {
        const got = M.dmaxProgress(), ok = got >= s.dmaxNeed;
        M.bDmax.disabled = !ok; M.bDmax.classList.toggle('ready', ok);
        M.bDmax.textContent = ok ? 'DMAX' : `${Math.min(got, s.dmaxNeed)}/${s.dmaxNeed}`;
        // anillo de recarga
        M.bDmax.style.boxShadow = ok ? '' : `0 4px 0 rgba(0,0,0,.25), inset 0 ${-60 * Math.min(1, got / s.dmaxNeed)}px 0 rgba(255,255,255,.25)`;
      }
    }
  };
  setInterval(() => { try { M.tick(); } catch {} }, 100);
  window.PB_MEGA = M;
})();
