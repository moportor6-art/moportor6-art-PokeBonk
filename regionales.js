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
  // Fusión de firma de cada línea regional: los dos ataques fuertes de su kit se funden en la Máquina de Bill.
  // Reutiliza el efecto (animación y forma de golpear) de una fusión de firma del juego con tipos parecidos.
  // [región, especie del kit, base, nombre, tipo, tipo2, ataque 1, ataque 2, descripción]
  const FUS = [
    ['alola', 19, 'fu-161', 'Banquete Nocturno', 'dark', 'normal', 'sucker-punch', 'crunch', 'Muerde a traición a la presa más cercana y a las que la rodean.'],
    ['alola', 26, 'fu-25', 'Surfeo Psíquico', 'electric', 'psychic', 'stoked-sparksurfer', 'psychic', 'Surfea sobre su cola entre rayos y ondas psíquicas que estallan a su paso.'],
    ['alola', 27, 'fu-90', 'Avalancha de Acero', 'ice', 'steel', 'icicle-crash', 'iron-head', 'Hace caer carámbanos duros como el acero sobre los enemigos.'],
    ['alola', 37, 'fu-86', 'Velo Aurora', 'ice', 'fairy', 'moonblast', 'blizzard', 'Una aurora helada y brillante barre la zona con nieve y luz de luna.'],
    ['alola', 50, 'fu-50', 'Grieta de Acero', 'ground', 'steel', 'iron-head', 'earthquake', 'Abre grietas por el suelo de las que salen púas de metal.'],
    ['alola', 52, 'fu-198', 'Garra Elegante', 'dark', null, 'night-slash', 'foul-play', 'Roba y araña con elegancia a los enemigos más fuertes.'],
    ['alola', 74, 'fu-74', 'Alud Magnético', 'rock', 'electric', 'rock-slide', 'discharge', 'Lanza rocas cargadas de electricidad que estallan al caer.'],
    ['alola', 88, 'fu-23', 'Fango Voraz', 'poison', 'dark', 'knock-off', 'sludge-bomb', 'Un barro venenoso que muerde y se traga todo lo que toca.'],
    ['alola', 103, 'fu-102', 'Palmera Dragón', 'grass', 'dragon', 'dragon-hammer', 'wood-hammer', 'Su largo cuello golpea como un martillo de dragón y hace llover cocos.'],
    ['alola', 105, 'fu-104', 'Danza de Huesos Ígneos', 'fire', 'ghost', 'bonemerang', 'flare-blitz', 'Gira su hueso en llamas fantasmales que vuelven una y otra vez.'],
    ['galar', 52, 'fu-227', 'Bigote de Acero', 'steel', null, 'iron-tail', 'iron-head', 'Sus bigotes de metal cortan como espadas a su alrededor.'],
    ['galar', 77, 'fu-77', 'Galope Místico', 'psychic', 'fairy', 'psybeam', 'dazzling-gleam', 'Galopa dejando una estela de luz mágica que hechiza a los enemigos.'],
    ['galar', 79, 'fu-79', 'Géiser Tóxico', 'poison', 'psychic', 'sludge-bomb', 'shell-side-arm', 'Brota un géiser de veneno y fuerza psíquica bajo los enemigos.'],
    ['galar', 83, 'fu-83', 'Asalto del Puerro', 'fighting', null, 'leaf-blade', 'meteor-assault', 'Carga con su puerro como una lanza y arrasa todo a su paso.'],
    ['galar', 110, 'fu-109', 'Niebla Purificadora', 'poison', 'fairy', 'sludge-bomb', 'strange-steam', 'Una niebla de humo extraño que envenena y deslumbra.'],
    ['galar', 122, 'fu-238', 'Claqué Helado', 'ice', 'psychic', 'freeze-dry', 'psychic', 'Zapatea sobre el hielo y congela con su mente a quien se acerque.'],
    ['galar', 144, 'fu-144', 'Mirada Glacial', 'psychic', 'flying', 'air-slash', 'freezing-glare', 'Su mirada psíquica congela el viento y hiere a todos los que la cruzan.'],
    ['galar', 145, 'fu-145', 'Patada Trueno', 'fighting', 'flying', 'brave-bird', 'thunderous-kick', 'Se lanza en picado y remata con patadas que retumban como truenos.'],
    ['galar', 146, 'fu-146', 'Fénix Sombrío', 'dark', 'flying', 'dark-pulse', 'fiery-wrath', 'Unas llamas de ira oscura cubren el cielo y caen sobre los enemigos.'],
    ['galar', 222, 'fu-222', 'Coral Maldito', 'ghost', null, 'power-gem', 'shadow-ball', 'Ramas de coral fantasma brotan del suelo y atrapan a los enemigos.'],
    ['galar', 263, 'fu-209', 'Bloqueo Rebelde', 'dark', 'normal', 'night-slash', 'body-slam', 'Se lanza con los brazos en cruz y aplasta a todo el que se cruza.'],
    ['galar', 554, 'fu-220', 'Daruma Glacial', 'ice', null, 'icicle-crash', 'ice-hammer', 'Rueda como una bola de nieve gigante que aplasta y congela.'],
    ['galar', 562, 'fu-56', 'Maldición de Arena', 'ground', 'ghost', 'shadow-ball', 'earth-power', 'Un remolino de arena maldita surge del suelo y arrastra a los enemigos.'],
    ['hisui', 58, 'fu-58', 'Estampida Volcánica', 'fire', 'rock', 'rock-slide', 'flare-blitz', 'Carga envuelto en fuego y rocas volcánicas que llueven a su alrededor.'],
    ['hisui', 100, 'fu-100', 'Reacción Clorofílica', 'electric', 'grass', 'energy-ball', 'chloroblast', 'Explota en cadena con energía vegetal y eléctrica.'],
    ['hisui', 157, 'fu-155', 'Desfile de Almas', 'fire', 'ghost', 'shadow-ball', 'infernal-parade', 'Un muro de llamas espectrales desfila quemando a los enemigos.'],
    ['hisui', 211, 'fu-211', 'Andanada Umbría', 'dark', 'poison', 'crunch', 'barb-barrage', 'Dispara una lluvia de púas venenosas desde la oscuridad.'],
    ['hisui', 215, 'fu-215', 'Garra Venenosa', 'fighting', 'poison', 'close-combat', 'dire-claw', 'Ataca en manada con garras que envenenan, duermen o paralizan.'],
    ['hisui', 503, 'fu-158', 'Tajo de la Marea', 'water', 'dark', 'razor-shell', 'ceaseless-edge', 'Sus sables de concha cortan como una ola oscura y dejan astillas.'],
    ['hisui', 549, 'fu-43', 'Danza del Combate', 'grass', 'fighting', 'leaf-blade', 'close-combat', 'Gira como una bailarina y reparte patadas entre pétalos.'],
    ['hisui', 570, 'fu-200', 'Ilusión Rencorosa', 'normal', 'ghost', 'shadow-ball', 'bitter-malice', 'Una procesión de ilusiones rencorosas atormenta a los enemigos.'],
    ['hisui', 628, 'fu-16', 'Ala Psíquica', 'psychic', 'flying', 'air-slash', 'esper-wing', 'Bate sus alas y lanza un ciclón de plumas cargadas de fuerza psíquica.'],
    ['hisui', 705, 'fu-147', 'Caparazón Dracónico', 'steel', 'dragon', 'iron-tail', 'dragon-pulse', 'Hace llover energía dracónica desde su caparazón de metal.'],
    ['hisui', 713, 'fu-90', 'Iceberg Montañoso', 'ice', 'rock', 'avalanche', 'mountain-gale', 'Hace caer pedazos de iceberg duros como la roca.'],
    ['hisui', 724, 'fu-1', 'Lluvia de Flechas', 'grass', 'fighting', 'leaf-blade', 'triple-arrows', 'Dispara flechas de hoja en ráfaga que atraviesan a los enemigos.'],
    ['paldea', 128, 'fu-128', 'Embestida Combativa', 'fighting', null, 'raging-bull', 'close-combat', 'Una estampida de embestidas furiosas que no deja a nadie en pie.'],
    ['paldea', 194, 'fu-194', 'Pantano Tóxico', 'poison', 'ground', 'sludge-bomb', 'earthquake', 'Convierte el suelo en un pantano venenoso que sacude y envenena.']
  ];
  const fuKey = (reg, sp) => `fu-${reg}-${sp}`;
  // Fusiones cuya animación base tiene colores de otro tipo: se pintan con los colores de sus tipos.
  const RECOLOR = new Set(['galar:146', 'galar:145', 'galar:144', 'galar:77', 'galar:79', 'galar:222', 'galar:263',
    'alola:105', 'alola:74', 'hisui:215', 'hisui:157', 'hisui:628', 'paldea:128']);
  const COLOR = { normal: 0xd8d4c0, fire: 0xff6a20, water: 0x3a8aff, grass: 0x4ac850, electric: 0xffd020, ice: 0x8ae4ff,
    fighting: 0xe0402a, poison: 0xa840e0, ground: 0xd8a850, flying: 0x9ab8ff, psychic: 0xff4aa0, bug: 0x9ac030,
    rock: 0xb89a5a, ghost: 0x7a40e0, dragon: 0x5a48ff, dark: 0x6a28c0, steel: 0xb0c0d0, fairy: 0xff9ae0 };
  // Cambia un color de la animación por uno de los tipos de la fusión, con la misma luminosidad.
  // Los casi blancos se dejan (destellos); el tono decide si usa el primer o el segundo tipo.
  const repinta = (c, t1, t2) => {
    const r = c >> 16 & 255, g = c >> 8 & 255, b = c & 255;
    if (Math.min(r, g, b) > 225) return c;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    let h = 0;
    if (mx !== mn) h = mx === r ? ((g - b) / (mx - mn) + 6) % 6 : mx === g ? (b - r) / (mx - mn) + 2 : (r - g) / (mx - mn) + 4;
    const base = h >= 3 && t2 != null ? t2 : t1;
    const L = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const br = base >> 16 & 255, bg = base >> 8 & 255, bb = base & 255;
    const Lb = (0.299 * br + 0.587 * bg + 0.114 * bb) / 255 || 0.01;
    const k = L / Lb;
    const f = v => k <= 1 ? Math.round(v * k) : Math.round(v + (255 - v) * Math.min(1, (L - Lb) / (1 - Lb || 1)));
    return f(br) << 16 | f(bg) << 8 | f(bb);
  };
  const ESTADO = { fire: 'burn', ice: 'freeze', electric: 'paralysis', poison: 'poison', grass: 'root', water: 'wet',
    psychic: 'confusion', ghost: 'curse', dark: 'curse', fairy: 'charm', fighting: 'stun', normal: 'stun', rock: 'stun',
    ground: 'stun', dragon: 'stun', steel: 'knock', flying: 'knock', bug: 'poison' };
  // Formas de partícula (enum de menus-…js) que ya traen el color de un tipo en su dibujo.
  const FORMA_TIPO = { 5: 'fire', 33: 'fire', 38: 'fire', 8: 'electric', 40: 'electric', 6: 'water', 15: 'water', 42: 'water',
    49: 'water', 126: 'water', 127: 'water', 128: 'water', 129: 'water', 130: 'water', 131: 'water', 132: 'water',
    7: 'ice', 51: 'ice', 4: 'grass', 64: 'grass', 79: 'grass', 9: 'rock', 41: 'rock' };
  const esColor = v => typeof v === 'number' && Number.isInteger(v) && v >= 0x10000 && v <= 0xffffff;
  // Envoltorio de la partida para el cast de una fusión: todo lo que pase por vfx y proyectiles sale repintado.
  const PROXIES = new WeakMap();
  const pintado = (run, t1, t2, st0, st1, tipos) => {
    const k = t1 + ':' + t2 + ':' + st0 + ':' + st1;
    let m = PROXIES.get(run);
    if (!m) PROXIES.set(run, m = new Map());
    if (m.has(k)) return m.get(k);
    const fixArg = a => {
      if (esColor(a)) return repinta(a, t1, t2);
      if (Array.isArray(a)) return a.map(x => esColor(x) ? repinta(x, t1, t2) : x);
      if (a && typeof a === 'object' && !(a instanceof Float32Array) && Object.getPrototypeOf(a) === Object.prototype) {
        const o = { ...a };
        if (st0 && o.status === st0) o.status = st1;
        // Partículas con dibujo propio de otro tipo (llamas, rayos, gotas...): pasan a una forma que se tiñe.
        const dt = typeof o.shape === 'number' ? FORMA_TIPO[o.shape] : null;
        if (dt && !tipos.includes(dt)) {
          o.shape = dt === 'fire' ? 31 : 2;
          if (!esColor(o.color) || Math.min(o.color >> 16 & 255, o.color >> 8 & 255, o.color & 255) > 225) o.color = t1;
        }
        for (const key of Object.keys(o)) {
          if (/col/i.test(key)) o[key] = Array.isArray(o[key]) ? o[key].map(x => esColor(x) ? repinta(x, t1, t2) : x) : esColor(o[key]) ? repinta(o[key], t1, t2) : o[key];
        }
        return o;
      }
      return a;
    };
    const envolver = (obj, hondo) => new Proxy(obj, {
      get(o, prop) {
        const v = o[prop];
        if (typeof v === 'function') return (...args) => v.apply(o, args.map(fixArg));
        if (hondo && v && typeof v === 'object' && !ArrayBuffer.isView(v) && !Array.isArray(v)) return envolver(v, false);
        return v;
      }
    });
    const SUB = new Set(['vfx', 'projectiles']);
    const px = new Proxy(run, {
      get(o, prop) {
        const v = o[prop];
        if (SUB.has(prop) && v) return envolver(v, true);
        return typeof v === 'function' ? v.bind(o) : v;
      },
      set(o, prop, v) { o[prop] = v; return true; }
    });
    m.set(k, px);
    return px;
  };
  const NOMBRE = { alola: 'Alola', galar: 'Galar', hisui: 'Hisui', paldea: 'Paldea' };
  const TIPO_ES = { normal: 'Normal', fire: 'Fuego', water: 'Agua', grass: 'Planta', electric: 'Eléctrico', ice: 'Hielo',
    fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca',
    ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada' };
  // Nombre de cada especie (para la vista previa): lo da el juego cuando ya cargó sus datos.
  const NOMBRE_ES = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const p of l) if (FORMAS[p.id]) NOMBRE_ES[p.id] = p.name; }).catch(() => {});
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
      const fam = run.meta.family(p.speciesId), reg = run.meta.profile.pbRegional?.[fam];
      const fu = FUS.find(f => f[0] === reg && run.meta.family(f[1]) === fam);
      p.__regFu = fu ? fuKey(reg, fu[1]) : null;
      p.roster = { ...p.roster, kit: kit.slice() };
      p.kitKeys = new Set([...kit, p.__regFu ?? `fu-${p.roster.id}`]);
    },
    // menus-…js, al montar las fusiones: añade las regionales (clonando el efecto de su base).
    fusiones(base, info, pot) {
      const out = [];
      for (const [reg, sp, b, name, type, type2, m1, m2, desc] of FUS) {
        const src = base.find(f => f.key === b);
        if (!src || !info[b]) continue;
        const key = fuKey(reg, sp);
        const f = { ...src, key, member: sp, moves: [m1, m2], name, desc, type };
        if (RECOLOR.has(reg + ':' + sp)) {
          const t1 = COLOR[type], t2 = type2 ? COLOR[type2] : null, cast = src.cast;
          // El estado que causa también pasa a ser el de su tipo (Fénix Sombrío ya no quema).
          const st1 = ESTADO[type] ?? null, st0 = src.status ?? null, tipos = [type, type2].filter(Boolean);
          f.status = st1;
          f.cast = function (e) { if (e?.run) e.run = pintado(e.run, t1, t2, st0, st1, tipos); return cast.call(this, e); };
        }
        if (type2) f.type2 = type2; else delete f.type2;
        info[key] = info[b];
        if (pot[b] != null) pot[key] = pot[b];
        out.push(f);
      }
      X._fus = out;
      return out;
    },
    // Fusión de firma de la línea del jugador cuando usa su forma regional (para la ficha y la guía).
    firma(member, lista) {
      const p = window.__pbRun?.player;
      if (!p?.__regFu || p.roster?.id !== member) return undefined;
      return lista.find(f => f.key === p.__regFu);
    },
    // HUD (main-…js): retrato de la forma y clave para volver a pintarlo (y sus tipos) cuando se aplica.
    hud(p, run) {
      if (!p?.__regK) return null;
      const f = X.elegida(run?.meta, p.speciesId);
      return f ? { k: ':' + p.__regK, sid: f.sid } : null;
    },
    abierta(meta, reg) {
      if (window.PB_PRUEBAS?.activo()) return true;
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
      box.append(t, sel);
      // Vista previa de la forma elegida para esta especie (o la de su línea): retrato y tipos.
      if (act) {
        const k = hecha(s, act) ? s : linea.find(x => hecha(x, act));
        if (k) {
          const f = hecha(k, act), v = document.createElement('span');
          v.style.cssText = 'display:inline-flex;align-items:center;gap:6px;font-weight:800';
          const img = document.createElement('img');
          img.src = `./assets/portraits/${f.sid}.png`;
          img.style.cssText = 'width:40px;height:40px;image-rendering:pixelated;border-radius:10px;background:#fff;border:2px solid #3a9ad8';
          v.append(img, `${NOMBRE_ES[k] ?? ''} de ${NOMBRE[act]} · ${FORMAS[k][act].map(t => TIPO_ES[t]).join(' / ')}`);
          box.append(v);
        }
      }
      box.append(n);
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

  // Ficha de la Liga (pantalla de elegir Pokémon): el mismo selector de forma regional, bajo el nombre.
  setInterval(() => {
    try {
      const meta = window.__pbMeta, id = document.querySelector('.ls-hero .ls-id');
      if (!meta || !id) return;
      const sp = +((id.querySelector('small')?.textContent ?? '').match(/#(\d+)/)?.[1] ?? 0);
      const old = id.querySelector('.pb-reg-ficha');
      if (old?.dataset.sp === String(sp)) return;
      old?.remove();
      if (!sp) return;
      const caja = document.createElement('div');
      caja.className = 'pb-reg-ficha';
      caja.dataset.sp = String(sp);
      caja.style.cssText = 'margin:6px 0;font-size:13px';
      const pinta = () => { caja.replaceChildren(); const r = X.row(meta, sp, pinta); if (r) caja.append(r); };
      pinta();
      if (caja.childNodes.length) id.querySelector('.ls-namerow')?.after(caja);
    } catch {}
  }, 500);

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
