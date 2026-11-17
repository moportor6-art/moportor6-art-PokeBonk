/* Subversión propia: Gimnasios.
   En «Preparar partida» se elige un líder de la región del mapa (Kanto, Johto, Hoenn, Sinnoh, Teselia, Kalos, Galar y
   Paldea tienen 8; Alola, sus 4 kahunas). Se vencen en orden.
   En esa partida (modo clásico, no en cooperativo):
   - los tres guardianes son el equipo del líder (el último, su as) y no se pueden capturar;
   - la mayoría de los salvajes normales son de su equipo y su tipo.
   Al ganar la partida: medalla + 300 de Polvo (y 1.000 más al completar las de la región).
   Cada medalla da para siempre una bonificación de estadística según su tipo (la mitad de la del Alfa de apoyo de ese
   tipo, misma tabla del juego), y cada región completa, +3 % de daño. Sprites de las medallas: PokeAPI/sprites
   (assets/medallas/<lider>.png; Alola no tiene medallas: sus kahunas muestran el icono de su tipo).
   Las medallas se guardan en profile.pbMedallas = { region: [idLider, ...] }.
   Gancho: main-…js (spawnBoss → PB_GYM.jefe). Las apariciones, envolviendo PB_REGIONES.remap. */
(() => {
  // [id, nombre, tipo (clave del juego), equipo (el último es el as)]
  const L = (id, nombre, tipo, equipo) => ({ id, nombre, tipo, equipo });
  const LIDERES = {
    kanto: [L('brock', 'Brock', 'rock', [74, 111, 75, 95]), L('misty', 'Misty', 'water', [120, 54, 118, 121]), L('surge', 'Lt. Surge', 'electric', [100, 25, 81, 26]),
      L('erika', 'Erika', 'grass', [43, 70, 114, 45]), L('koga', 'Koga', 'poison', [109, 89, 48, 110]), L('sabrina', 'Sabrina', 'psychic', [63, 122, 64, 65]),
      L('blaine', 'Blaine', 'fire', [58, 77, 126, 59]), L('giovanni', 'Giovanni', 'ground', [27, 51, 31, 112])],
    johto: [L('falkner', 'Pegaso', 'flying', [16, 163, 17, 18]), L('bugsy', 'Antón', 'bug', [11, 14, 165, 123]), L('whitney', 'Blanca', 'normal', [161, 19, 20, 241]),
      L('morty', 'Morti', 'ghost', [92, 93, 200, 94]), L('chuck', 'Aníbal', 'fighting', [56, 66, 57, 62]), L('jasmine', 'Yasmina', 'steel', [81, 82, 227, 208]),
      L('pryce', 'Fredo', 'ice', [86, 220, 87, 221]), L('clair', 'Débora', 'dragon', [147, 116, 148, 230])],
    hoenn: [L('roxanne', 'Petra', 'rock', [74, 75, 345, 299]), L('brawly', 'Marcial', 'fighting', [66, 307, 296, 297]), L('wattson', 'Erico', 'electric', [81, 100, 309, 310]),
      L('flannery', 'Candela', 'fire', [218, 322, 323, 324]), L('norman', 'Norman', 'normal', [327, 288, 264, 289]), L('winona', 'Alana', 'flying', [276, 277, 333, 334]),
      L('tate', 'Vito y Leti', 'psychic', [280, 281, 337, 338]), L('juan', 'Galano', 'water', [341, 340, 364, 230])],
    sinnoh: [L('roark', 'Roco', 'rock', [74, 95, 408, 409]), L('gardenia', 'Gardenia', 'grass', [420, 421, 387, 407]), L('maylene', 'Brega', 'fighting', [307, 67, 447, 448]),
      L('wake', 'Mananti', 'water', [129, 195, 130, 419]), L('fantina', 'Fantina', 'ghost', [92, 355, 200, 429]), L('byron', 'Acerón', 'steel', [436, 437, 208, 411]),
      L('candice', 'Inverna', 'ice', [459, 215, 460, 478]), L('volkner', 'Lectro', 'electric', [125, 135, 26, 466])],
    teselia: [L('cilan', 'Millo', 'grass', [506, 511, 556, 512]), L('lenora', 'Aloe', 'normal', [504, 505, 507, 508]), L('burgh', 'Camus', 'bug', [540, 543, 557, 542]),
      L('elesa', 'Camila', 'electric', [595, 587, 522, 523]), L('clay', 'Yakón', 'ground', [529, 551, 552, 530]), L('skyla', 'Gerania', 'flying', [527, 528, 580, 581]),
      L('brycen', 'Junco', 'ice', [582, 613, 615, 614]), L('drayden', 'Lirio', 'dragon', [610, 611, 621, 612])],
    kalos: [L('viola', 'Violeta', 'bug', [664, 665, 283, 666]), L('grant', 'Lino', 'rock', [696, 698, 699, 697]), L('korrina', 'Corelia', 'fighting', [619, 701, 67, 448]),
      L('ramos', 'Amaro', 'grass', [187, 188, 189, 673]), L('clemont', 'Lem', 'electric', [587, 694, 82, 695]), L('valerie', 'Valeria', 'fairy', [303, 439, 122, 700]),
      L('olympia', 'Ástrid', 'psychic', [561, 677, 79, 678]), L('wulfric', 'Édel', 'ice', [459, 712, 615, 713])],
    alola: [L('hala', 'Kaudan', 'fighting', [56, 57, 739, 740]), L('olivia', 'Mayla', 'rock', [74, 525, 299, 745]), L('nanu', 'Denio', 'dark', [302, 551, 552, 553]),
      L('hapu', 'Hela', 'ground', [749, 51, 340, 750])],
    galar: [L('milo', 'Percy', 'grass', [829, 546, 547, 830]), L('nessa', 'Cathy', 'water', [118, 846, 847, 834]), L('kabu', 'Naboru', 'fire', [37, 850, 38, 851]),
      L('bea', 'Judith', 'fighting', [236, 107, 870, 68]), L('opal', 'Sally', 'fairy', [303, 856, 857, 869]), L('gordie', 'Morris', 'rock', [837, 838, 874, 839]),
      L('piers', 'Nerio', 'dark', [560, 435, 454, 862]), L('raihan', 'Roy', 'dragon', [610, 611, 330, 884])],
    paldea: [L('katy', 'Araceli', 'bug', [917, 919, 920, 216]), L('brassius', 'Brais', 'grass', [548, 928, 929, 185]), L('iono', 'e-Nigma', 'electric', [940, 941, 939, 429]),
      L('kofu', 'Fuco', 'water', [960, 961, 976, 740]), L('larry', 'Laureano', 'normal', [775, 982, 397, 398]), L('ryme', 'Lima', 'ghost', [354, 971, 778, 972]),
      L('tulip', 'Tuli', 'psychic', [956, 282, 981, 671]), L('grusha', 'Grusha', 'ice', [873, 614, 334, 975])],
  };
  const REGION = { kanto: 'Kanto', johto: 'Johto', hoenn: 'Hoenn', sinnoh: 'Sinnoh', teselia: 'Teselia', kalos: 'Kalos', alola: 'Alola', galar: 'Galar', paldea: 'Paldea' };
  const TIPO = { rock: 'Roca', water: 'Agua', electric: 'Eléctrico', grass: 'Planta', poison: 'Veneno', psychic: 'Psíquico', fire: 'Fuego', ground: 'Tierra', flying: 'Volador', bug: 'Bicho', normal: 'Normal', ghost: 'Fantasma', fighting: 'Lucha', steel: 'Acero', ice: 'Hielo', dragon: 'Dragón', fairy: 'Hada', dark: 'Siniestro' };
  const R = () => window.PB_REGIONES;
  const meta = () => window.__pbMeta;
  const nombre = sp => R()?.todos?.find(p => p.id === sp)?.name ?? '#' + sp;
  let conSprite = null;
  fetch('./data/sprites.json').then(r => r.json()).then(d => { conSprite = new Set(Object.keys(d).map(Number)); }).catch(() => {});
  const vale = sp => !conSprite || conSprite.has(sp);

  const medallas = reg => meta()?.profile?.pbMedallas?.[reg] ?? [];
  // ¿Vale el gimnasio elegido para este mapa? Las regiones nuevas, por su id; los mapas del juego original, Kanto o Johto
  // (se eligió en su pestaña).
  const encaja = (run, reg) => {
    const r = R()?.regionMapa?.(run)?.id;
    return r ? r === reg : reg === 'kanto' || reg === 'johto';
  };
  const siguiente = reg => LIDERES[reg]?.find(l => !medallas(reg).includes(l.id));

  // Bonificación por medalla: la del Alfa de apoyo de su tipo (tabla del juego), a la mitad.
  const BONO = { normal: ['gold', 'mul', 1.1, '+5 % Pokédólares'], fire: ['statusDamage', 'mul', 1.15, '+7,5 % daño de estados'], water: ['healing', 'mul', 1.15, '+7,5 % curación'],
    grass: ['regen', 'add', 0.5, '+0,25 regeneración'], electric: ['attackSpeed', 'mul', 1.05, '+2,5 % velocidad de ataque'], ice: ['duration', 'mul', 1.1, '+5 % duración'],
    fighting: ['eliteDamage', 'mul', 1.1, '+5 % daño a élites'], poison: ['statusChance', 'mul', 1.12, '+6 % probabilidad de estados'], ground: ['armor', 'add', 4, '+2 armadura'],
    flying: ['moveSpeed', 'mul', 1.05, '+2,5 % velocidad'], psychic: ['xpGain', 'mul', 1.08, '+4 % experiencia'], bug: ['pickupRange', 'add', 1, '+0,5 recogida'],
    rock: ['maxHp', 'add', 15, '+7,5 PS máx.'], ghost: ['evasion', 'add', 0.03, '+1,5 % evasión'], dragon: ['damage', 'mul', 1.05, '+2,5 % daño'], dark: ['critChance', 'add', 0.04, '+2 % crítico'],
    steel: ['area', 'mul', 1.08, '+4 % área'], fairy: ['luck', 'add', 8, '+4 suerte'] };
  const modDe = tipo => { const [stat, k, v] = BONO[tipo]; return k === 'add' ? { stat, add: v / 2 } : { stat, mul: 1 + (v - 1) / 2 }; };
  const todasMods = () => {
    const out = [];
    for (const reg of Object.keys(LIDERES)) {
      const t = medallas(reg);
      for (const l of LIDERES[reg]) if (t.includes(l.id)) out.push(modDe(l.tipo));
      if (LIDERES[reg].every(l => t.includes(l.id))) out.push({ stat: 'damage', mul: 1.03 });
    }
    return out;
  };
  const img = (reg, l) => reg === 'alola' ? `./assets/ui/types/${l.tipo}.png` : `./assets/medallas/${l.id}.png`;
  const G = { LIDERES, sel: null, medallas, mods: todasMods };
  window.PB_GYM = G;
  // run.__gym.l: un rival que no es líder (el campeón del modo historia, historia.js), con su propio equipo.
  const lider = run => run?.__gym ? run.__gym.l ?? LIDERES[run.__gym.reg]?.find(l => l.id === run.__gym.id) : null;
  // Guardián de la zona: 1 → primero del equipo, 2 → el del medio, 3 o más → su as.
  // 1.07 (Lite): en partidas normales sin gimnasio elegido, los guardianes de las zonas 1 y 2 son Pokémon de un líder
  // de la región del mapa (uno por partida). La zona 3 sigue con su legendario capturable.
  const liderLibre = run => {
    if (window.PB_EDICION !== 'lite' || run.__gym || run.__hist != null || run.mode !== 'standard' || run.tower || run.endless || run.expedition || run.duel || (run.stage ?? 1) > 2) return null;
    const reg = R()?.regionMapa?.(run)?.id ?? (['encina', 'iris'].includes(run.biome?.id) ? 'johto' : 'kanto');
    const ls = LIDERES[reg];
    return ls?.length ? ls[Math.abs(run.seed | 0) % ls.length] : null;
  };
  G.jefe = run => {
    // Liga del modo historia (historia.js): en las zonas 1-3, el as de cada miembro del Alto Mando.
    const al = run.__pbAlto;
    if (al?.length && (run.stage ?? 1) <= 3) { const sp = al[(run.stage ?? 1) - 1]?.[3].filter(vale).at(-1); if (sp) return sp; }
    const l = lider(run) ?? liderLibre(run);
    if (!l) return null;
    const e = l.equipo.filter(vale), k = run.stage >= 3 ? e.length - 1 : run.stage === 2 ? Math.floor((e.length - 1) / 2) : 0;
    return e[k] ?? null;
  };

  // Salvajes normales: el 65 % pasa a ser de su equipo.
  const envolver = () => {
    const Rg = R();
    if (!Rg || Rg.__pbGym) return !!Rg;
    const orig = Rg.remap;
    Rg.remap = function (run, id, flags) {
      const r = orig.call(this, run, id, flags);
      try {
        const l = lider(run);
        if (!l || (flags & (1 | 2 | 4 | 32 | 64 | 128 | 512 | 1024 | 4096 | 8192 | 16384 | 32768 | 65536 | 131072))) return r;
        if (Math.random() > 0.65) return r;
        const e = l.equipo.slice(0, -1).filter(vale);
        return e.length ? e[Math.random() * e.length | 0] : r;
      } catch { return r; }
    };
    Rg.__pbGym = true;
    return true;
  };
  if (!envolver()) { const t = setInterval(() => { if (envolver()) clearInterval(t); }, 300); }

  // ---------- partida ----------
  let ultima = null;
  setInterval(() => {
    const run = window.__pbRun;
    if (!run) return;
    try {
      if (run !== ultima && run.state === 'play') {
        ultima = run;
        // Bonificaciones de las medallas (no en duelos).
        if (run.mode !== 'duel' && !run.__pbMed) {
          run.__pbMed = true;
          const m = todasMods();
          if (m.length) { run.tempMods.push(...m); run.player.recompute(); }
        }
        const s = G.sel; G.sel = null;
        if (s && !run.coop && !run.endless && !run.tower && !run.expedition && run.mode !== 'duel' && encaja(run, s.reg)) {
          run.__gym = s;
          const l = lider(run);
          run.ui.banner(`Gimnasio de ${l.nombre}`, `Tipo ${TIPO[l.tipo]}: sus guardianes son el equipo del líder. ¡Gana la Medalla ${REGION[s.reg]}!`, '#e0a020', { species: l.equipo[l.equipo.length - 1] });
        }
      }
      if (run.__gym && !run.__gym.l && !run.__gymPagado && run.state === 'over' && run.victory) {
        run.__gymPagado = true;
        const m = meta(), l = lider(run), reg = run.__gym.reg;
        if (!m || !l) return;
        const p = m.profile;
        p.pbMedallas ??= {};
        const lista = p.pbMedallas[reg] ??= [];
        if (lista.includes(l.id)) return;
        lista.push(l.id);
        let polvo = 300;
        if (LIDERES[reg].every(x => lista.includes(x.id))) polvo += 1000;
        p.stardust = (p.stardust ?? 0) + polvo;
        p.totalStardust = (p.totalStardust ?? 0) + polvo;
        try { m.save(); } catch {}
        setTimeout(() => { try { run.ui.toast(`¡Medalla de ${l.nombre} conseguida! ${BONO[l.tipo][3]} para siempre y +${polvo} de Polvo (${lista.length}/${LIDERES[reg].length} de ${REGION[reg]})`, null); } catch {} }, 1500);
      }
    } catch {}
  }, 500);

  // ---------- «Preparar partida»: elegir gimnasio ----------
  const st = document.createElement('style');
  st.textContent = `.pb-gym{margin:10px 0 4px;display:flex;flex-direction:column;gap:6px}
.pb-gym>b{font:900 12px var(--font-title,system-ui);letter-spacing:2px;opacity:.85}
.pb-gym select{padding:9px 10px;border-radius:12px;border:2px solid #d9d3ee;font:800 14px system-ui,sans-serif;color:#2a2340;background:#fff}
.pb-gym small{font:700 12px system-ui,sans-serif;opacity:.85;line-height:1.35}
.pb-gym .pb-med{display:flex;gap:4px;flex-wrap:wrap}.pb-gym .pb-med img{width:30px;height:30px;object-fit:contain;filter:grayscale(1) brightness(.6) opacity(.45)}
.pb-gym .pb-med img.si{filter:drop-shadow(0 1px 1px rgba(0,0,0,.5))}`;
  document.head.append(st);
  const regionElegida = () => {
    const t = document.querySelector('.rg .rg-realm.on')?.textContent ?? '';
    return Object.keys(REGION).find(k => t.includes(REGION[k])) ?? null;
  };
  let pintada = '';
  setInterval(() => {
    const side = document.querySelector('.rg .rg-side');
    if (!side) { pintada = ''; return; }
    const reg = regionElegida();
    const caja0 = side.querySelector('.pb-gym');
    const clave = reg + ':' + medallas(reg).join(',');
    if (caja0 && pintada === clave) return;
    caja0?.remove();
    pintada = clave;
    if (!reg || !LIDERES[reg]) { G.sel = null; return; }
    const body = [...side.children].find(c => /auto|scroll/.test(getComputedStyle(c).overflowY)) ?? side;
    const caja = document.createElement('div');
    caja.className = 'pb-gym';
    const t = document.createElement('b'); t.textContent = 'GIMNASIO';
    const sel = document.createElement('select');
    const tengo = medallas(reg), sig = siguiente(reg);
    sel.append(new Option('Sin gimnasio (partida normal)', ''));
    for (const l of LIDERES[reg]) {
      const o = new Option(`${tengo.includes(l.id) ? '✔ ' : l === sig ? '' : '🔒 '}${l.nombre} · ${TIPO[l.tipo]}`, l.id);
      o.disabled = !tengo.includes(l.id) && l !== sig;
      sel.append(o);
    }
    const nota = document.createElement('small');
    const med = document.createElement('div'); med.className = 'pb-med';
    for (const l of LIDERES[reg]) { const s = document.createElement('img'); s.src = img(reg, l); s.alt = s.title = `${l.nombre} · ${TIPO[l.tipo]}: ${BONO[l.tipo][3]}`; if (tengo.includes(l.id)) s.className = 'si'; med.append(s); }
    const pon = () => {
      const l = LIDERES[reg].find(x => x.id === sel.value);
      G.sel = l ? { reg, id: l.id } : null;
      nota.textContent = l
        ? `Sus 3 guardianes: ${[0, Math.floor((l.equipo.length - 1) / 2), l.equipo.length - 1].map(i => nombre(l.equipo[i])).join(', ')}. Gana la partida para llevarte la medalla${tengo.includes(l.id) ? ' (ya la tienes: es una revancha)' : ` (${BONO[l.tipo][3]} para siempre) y 300 de Polvo`}.`
        : `Medallas de ${REGION[reg]}: ${tengo.length}/${LIDERES[reg].length}. Cada una da una mejora permanente (toca su icono) y la región completa, +3 % de daño. Vence a los líderes en orden${sig ? `; el siguiente es ${sig.nombre}` : ''}. No en cooperativo.`;
    };
    sel.onchange = pon;
    pon();
    caja.append(t, sel, med, nota);
    body.append(caja);
  }, 600);
})();
