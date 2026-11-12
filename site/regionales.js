/* Subversión propia: formas regionales (Alola, Galar, Hisui y Paldea).
   - Sprites: tools/regionales.py los monta del PMD Sprite Repository (acción «Regionales») y escribe
     regionales-hechas.js. Solo se usan las formas que tienen todas sus animaciones.
   - Enemigas: en los mapas de su región salen también estas especies, con su forma y sus tipos
     (las de Hisui, en los mapas de Sinnoh).
   - Jugables: en el Laboratorio eliges la forma para toda la línea (Vulpix y Ninetales, por ejemplo). Se abre
     jugando una partida en esa región. En la partida cambian el dibujo y los tipos.
   - Ganchos: regiones.js (especies extra de cada región), menus-…js (tipos y dibujo de cada enemigo al
     aparecer: PB_REG_E; dibujo: PB_RETOS.sid) y main-…js (dibujo del jugador: PB_REGIONALES.psid). */
(() => {
  const FORMAS = {
    // Alola
    19: { alola: ['dark', 'normal'] }, 20: { alola: ['dark', 'normal'] }, 26: { alola: ['electric', 'psychic'] },
    27: { alola: ['ice', 'steel'] }, 28: { alola: ['ice', 'steel'] }, 37: { alola: ['ice'] }, 38: { alola: ['ice', 'fairy'] },
    50: { alola: ['ground', 'steel'] }, 51: { alola: ['ground', 'steel'] },
    52: { alola: ['dark'], galar: ['steel'] }, 53: { alola: ['dark'] },
    74: { alola: ['rock', 'electric'] }, 75: { alola: ['rock', 'electric'] }, 76: { alola: ['rock', 'electric'] },
    88: { alola: ['poison', 'dark'] }, 89: { alola: ['poison', 'dark'] }, 103: { alola: ['grass', 'dragon'] }, 105: { alola: ['fire', 'ghost'] },
    // Galar
    77: { galar: ['psychic'] }, 78: { galar: ['psychic', 'fairy'] }, 79: { galar: ['psychic'] }, 80: { galar: ['poison', 'psychic'] },
    199: { galar: ['poison', 'psychic'] }, 83: { galar: ['fighting'] }, 110: { galar: ['poison', 'fairy'] }, 122: { galar: ['ice', 'psychic'] },
    144: { galar: ['psychic', 'flying'] }, 145: { galar: ['fighting', 'flying'] }, 146: { galar: ['dark', 'flying'] },
    222: { galar: ['ghost'] }, 263: { galar: ['dark', 'normal'] }, 264: { galar: ['dark', 'normal'] },
    554: { galar: ['ice'] }, 555: { galar: ['ice'] }, 562: { galar: ['ground', 'ghost'] }, 618: { galar: ['ground', 'steel'] },
    // Hisui
    58: { hisui: ['fire', 'rock'] }, 59: { hisui: ['fire', 'rock'] }, 100: { hisui: ['electric', 'grass'] }, 101: { hisui: ['electric', 'grass'] },
    157: { hisui: ['fire', 'ghost'] }, 211: { hisui: ['dark', 'poison'] }, 215: { hisui: ['fighting', 'poison'] },
    503: { hisui: ['water', 'dark'] }, 549: { hisui: ['grass', 'fighting'] }, 570: { hisui: ['normal', 'ghost'] }, 571: { hisui: ['normal', 'ghost'] },
    628: { hisui: ['psychic', 'flying'] }, 705: { hisui: ['steel', 'dragon'] }, 706: { hisui: ['steel', 'dragon'] },
    713: { hisui: ['ice', 'rock'] }, 724: { hisui: ['grass', 'fighting'] },
    // Paldea
    128: { paldea: ['fighting'] }, 194: { paldea: ['poison', 'ground'] }
  };
  // Kit de 4 ataques (del juego) para cada línea con forma regional, con los tipos de la forma. Se usa en la
  // partida en lugar del kit de su ficha de la Liga. Clave: cualquier especie de la línea.
  const KITS = {
    alola: {
      19: ['tackle', 'bite', 'sucker-punch', 'crunch'],
      26: ['thunder-shock', 'psybeam', 'stoked-sparksurfer', 'psychic'],
      27: ['powder-snow', 'metal-claw', 'icicle-crash', 'iron-head'],
      37: ['powder-snow', 'ice-shard', 'moonblast', 'blizzard'],
      50: ['mud-slap', 'metal-claw', 'iron-head', 'earthquake'],
      52: ['scratch', 'bite', 'night-slash', 'foul-play'],
      74: ['rock-throw', 'spark', 'rock-slide', 'discharge'],
      88: ['acid', 'bite', 'knock-off', 'sludge-bomb'],
      103: ['bullet-seed', 'dragon-breath', 'dragon-hammer', 'wood-hammer'],
      105: ['ember', 'shadow-bone', 'bonemerang', 'flare-blitz']
    },
    galar: {
      52: ['scratch', 'metal-claw', 'iron-tail', 'iron-head'],
      77: ['confusion', 'fairy-wind', 'psybeam', 'dazzling-gleam'],
      79: ['acid', 'confusion', 'sludge-bomb', 'shell-side-arm'],
      83: ['rock-smash', 'brick-break', 'leaf-blade', 'meteor-assault'],
      110: ['smog', 'fairy-wind', 'sludge-bomb', 'strange-steam'],
      122: ['ice-shard', 'confusion', 'freeze-dry', 'psychic'],
      144: ['confusion', 'gust', 'air-slash', 'freezing-glare'],
      145: ['peck', 'rock-smash', 'brave-bird', 'thunderous-kick'],
      146: ['gust', 'bite', 'dark-pulse', 'fiery-wrath'],
      222: ['astonish', 'hex', 'power-gem', 'shadow-ball'],
      263: ['tackle', 'snarl', 'night-slash', 'body-slam'],
      554: ['powder-snow', 'ice-punch', 'icicle-crash', 'ice-hammer'],
      562: ['astonish', 'hex', 'shadow-ball', 'earth-power']
    },
    hisui: {
      58: ['ember', 'rock-throw', 'rock-slide', 'flare-blitz'],
      100: ['thunder-shock', 'bullet-seed', 'energy-ball', 'chloroblast'],
      157: ['ember', 'hex', 'shadow-ball', 'infernal-parade'],
      211: ['poison-sting', 'bite', 'crunch', 'barb-barrage'],
      215: ['poison-jab', 'rock-smash', 'close-combat', 'dire-claw'],
      503: ['water-gun', 'night-slash', 'razor-shell', 'ceaseless-edge'],
      549: ['magical-leaf', 'double-kick', 'leaf-blade', 'close-combat'],
      570: ['scratch', 'shadow-sneak', 'shadow-ball', 'bitter-malice'],
      628: ['peck', 'confusion', 'air-slash', 'esper-wing'],
      705: ['dragon-breath', 'metal-claw', 'iron-tail', 'dragon-pulse'],
      713: ['powder-snow', 'rock-throw', 'avalanche', 'mountain-gale'],
      724: ['leafage', 'double-kick', 'leaf-blade', 'triple-arrows']
    },
    paldea: {
      128: ['tackle', 'rock-smash', 'raging-bull', 'close-combat'],
      194: ['mud-shot', 'poison-sting', 'sludge-bomb', 'earthquake']
    }
  };
  const NOMBRE = { alola: 'Alola', galar: 'Galar', hisui: 'Hisui', paldea: 'Paldea' };
  // Región del juego donde sale (y se abre) cada forma.
  const MAPAS_DE = { alola: 'alola', galar: 'galar', hisui: 'sinnoh', paldea: 'paldea' };
  const hecha = (sp, reg) => window.PB_REGIONALES_HECHAS?.[sp + ':' + reg] ?? null;
  const formasDe = sp => Object.keys(FORMAS[sp] ?? {}).filter(reg => hecha(sp, reg));

  const X = {
    FORMAS, NOMBRE,
    // Especies que salen de más en los mapas de una región del juego (las que tienen su forma montada).
    extra(regionId) {
      const k = regionId + Object.keys(window.PB_REGIONALES_HECHAS ?? {}).length;
      if (!X._extra?.[k]) {
        const out = new Set();
        for (const sp in FORMAS) for (const reg of formasDe(sp)) if (MAPAS_DE[reg] === regionId) out.add(+sp);
        (X._extra ??= {})[k] = out;
      }
      return X._extra[k];
    },
    // Forma que toca a un enemigo según el mapa.
    enemigo(run, sp) {
      const r = run?.biome?.region;
      if (!r) return null;
      const reg = formasDe(sp).find(g => MAPAS_DE[g] === r);
      return reg ? { reg, types: FORMAS[sp][reg], ...hecha(sp, reg) } : null;
    },
    // Forma elegida para la línea del jugador (profile.pbRegional[familia] = 'alola'...).
    elegida(meta, sp) {
      try {
        const reg = meta?.profile?.pbRegional?.[meta.family(sp)];
        return reg && hecha(sp, reg) ? { reg, types: FORMAS[sp][reg], ...hecha(sp, reg) } : null;
      } catch { return null; }
    },
    // Dibujo del jugador (main-…js), si su línea usa una forma regional.
    psid(p, run) {
      const f = X.elegida(run?.meta, p?.speciesId);
      if (!f) return undefined;
      const sh = run.shinySkin || run.skinLook === 'classic';
      return sh && f.shiny ? f.sid + 2e4 : f.sid;
    },
    KITS,
    // Kit de la forma regional elegida para la línea de sp (o null).
    kit(meta, sp) {
      try {
        const fam = meta.family(sp), reg = meta.profile.pbRegional?.[fam];
        if (!reg || !KITS[reg]) return null;
        const k = Object.keys(KITS[reg]).find(x => meta.family(+x) === fam);
        // Solo si la línea tiene alguna forma de esa región montada.
        return k && Object.keys(FORMAS).some(x => FORMAS[x][reg] && hecha(+x, reg) && meta.family(+x) === fam) ? KITS[reg][k] : null;
      } catch { return null; }
    },
    // Al empezar la partida (regiones.js): el jugador usa el kit de su forma regional.
    start(run) {
      const p = run?.player;
      if (!p?.roster || run.mode === 'duel') return;
      const kit = X.kit(run.meta, p.speciesId);
      if (!kit) return;
      p.roster = { ...p.roster, kit: kit.slice() };
      p.kitKeys = new Set([...kit, `fu-${p.roster.id}`]);
    },
    abierta(meta, reg) {
      const r = window.PB_REGIONES?.lista?.find(x => x.id === MAPAS_DE[reg]);
      return !!r && (meta?.profile?.counters?.[r.contadores.runs] ?? 0) >= 1;
    },
    // Fila del Laboratorio: elegir la forma de la línea.
    row(meta, s, redraw) {
      let fam;
      try { fam = meta.family(s); } catch { return null; }
      const linea = Object.keys(FORMAS).map(Number).filter(k => { try { return meta.family(k) === fam; } catch { return false; } });
      const regs = [...new Set(linea.flatMap(formasDe))];
      if (!regs.length) return null;
      const box = document.createElement('div');
      box.style.cssText = 'flex-basis:100%;display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-radius:12px;background:linear-gradient(90deg,#e6f6ff,#f3ffe6)';
      const t = document.createElement('span');
      t.style.cssText = 'font-weight:900;color:#1a6a8a';
      t.textContent = 'Forma regional:';
      const sel = document.createElement('select');
      sel.style.cssText = 'font:inherit;font-weight:800;padding:4px 8px;border-radius:10px;border:2px solid #3a9ad8;background:#fff;color:#2a2340';
      const act = meta.profile.pbRegional?.[fam] ?? '';
      const opt = (v, txt, dis) => { const o = document.createElement('option'); o.value = v; o.textContent = txt; o.disabled = !!dis; if (v === act) o.selected = true; sel.append(o); };
      opt('', 'Normal');
      for (const reg of regs) {
        const ok = X.abierta(meta, reg);
        opt(reg, `De ${NOMBRE[reg]}${ok ? '' : ' (bloqueada)'}`, !ok);
      }
      sel.addEventListener('change', () => {
        (meta.profile.pbRegional ??= {})[fam] = sel.value;
        if (!sel.value) delete meta.profile.pbRegional[fam];
        try { meta.save(); } catch {}
        redraw?.();
      });
      const n = document.createElement('small');
      n.style.cssText = 'flex-basis:100%;font-weight:700;opacity:.75';
      const bloq = regs.filter(r => !X.abierta(meta, r));
      n.textContent = 'Cambia el dibujo, los tipos y los ataques (de su región) en la partida, para toda la línea.' +
        (bloq.length ? ` Se abre al jugar 1 partida en ${bloq.map(r => r === 'hisui' ? 'Sinnoh' : NOMBRE[r]).join(' o ')}.` : '');
      box.append(t, sel, n);
      return box;
    },
    // Cada 200 ms: tipos de la forma elegida (tras evolucionar o al acabar la mega se vuelven a poner).
    tick() {
      const run = window.__pbRun, p = run?.player;
      if (!p || run.state === 'over' || p.__msid) return;
      const f = X.elegida(run.meta, p.speciesId);
      const k = f ? p.speciesId + ':' + f.reg : '';
      if (p.__regK === k) return;
      if (f) { if (!p.__regK) p.__regBase = p.types; p.types = f.types.slice(); }
      else if (p.__regBase) { p.types = p.__regBase; p.__regBase = null; }
      p.__regK = k;
      try { run.sprites.get(X.psid(p, run)); } catch {}
    }
  };
  setInterval(() => { try { X.tick(); } catch {} }, 200);

  // Enemigos: al aparecer (menus-…js), tipos y dibujo de su forma regional en los mapas de su región.
  window.PB_REG_E = (E, i, sp) => {
    E.pbSid ??= new Int32Array(2400);
    const f = X.enemigo(E.run, sp);
    E.pbSid[i] = f ? f.sid : 0;
    if (!f) return;
    E.t1[i] = E.typeIdx.get(f.types[0]) ?? 0;
    E.t2[i] = f.types[1] ? E.typeIdx.get(f.types[1]) ?? 0 : 0;
    try { E.run.sprites.get(f.sid); } catch {}
  };

  // Especies extra en los mapas de cada región.
  for (const r of window.PB_REGIONES?.lista ?? []) {
    Object.defineProperty(r, 'extra', { configurable: true, get: () => X.extra(r.id) });
  }
  window.PB_REGIONALES = X;
})();
