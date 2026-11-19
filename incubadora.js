/* Subversión propia (moportor6, 1.08): Incubadora, solo en PokéBonk Lite (idea de Pokémon Survivors).
   - 3 huecos en el Laboratorio. Al terminar una partida con victoria recibes un Huevo si hay hueco libre (y hasta 3
     más en cola de espera).
   - Cada huevo eclosiona tras 1500 bajas, sumadas partida a partida (cuentan para todos los huevos a la vez).
   - Al eclosionar: un Pokémon de la región en que jugaste que aún no tengas en tu Liga (forma base); si ya los tienes
     todos, 300 de Polvo Estelar.
   Datos en profile.pbHuevos = { h: [{ reg, need, k }], cola: [...] }. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const NECESITA = 1500, HUECOS = 3, COLA = 3;
  const meta = () => window.__pbMeta;
  const D = () => { const p = meta()?.profile; if (!p) return null; return p.pbHuevos ??= { h: [], cola: [] }; };
  const R = () => window.PB_REGIONES;
  let POKE = null;
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { POKE = l; }).catch(() => {});
  let vale = null;
  fetch('./data/sprites.json').then(r => r.json()).then(d => { vale = new Set(Object.keys(d).map(Number)); }).catch(() => {});
  const RANGO = { kanto: [1, 151], johto: [152, 251], hoenn: [252, 386], sinnoh: [387, 493], teselia: [494, 649], kalos: [650, 721], alola: [722, 809], galar: [810, 905], paldea: [906, 1025] };
  const LEG = new Set([144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 716, 717, 718, 719, 720, 721, 785, 786, 787, 788, 789, 790, 791, 792, 800, 801, 802, 807, 808, 809, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 905, 1001, 1002, 1003, 1004, 1007, 1008, 1014, 1015, 1016, 1017, 1024, 1025]);

  const eclosionar = h => {
    const m = meta(), p = m.profile, [a, b] = RANGO[h.reg] ?? RANGO.kanto;
    const pool = (POKE ?? []).filter(x => x.id >= a && x.id <= b && !x.evoFrom && !LEG.has(x.id) && (!vale || vale.has(x.id)) && !p.league.includes(x.id));
    try { window.PB_LOGROS?.cont('huevos'); } catch {} // 1.34: logro «Criador»
    if (!pool.length) { p.stardust = (p.stardust ?? 0) + 300; return 'Ya tienes todos los de esa región: +300 de Polvo Estelar'; }
    const x = pool[Math.floor(Math.random() * pool.length)];
    p.league.push(x.id);
    try { const f = m.family?.(x.id) ?? x.id; p.unlocked.includes(f) || p.unlocked.push(f); p.captured[f] = Date.now(); } catch {}
    return `¡Del huevo ha salido ${x.name}! Ya está en tu Liga`;
  };

  // Al terminar cada partida: suma bajas, eclosiona y da huevo si fue victoria.
  let visto = null;
  setInterval(() => {
    const run = window.__pbRun, d = D();
    if (!run || !d || run.state !== 'over' || visto === run || run.mode === 'duel') return;
    visto = run;
    const k = Math.round((run.stats?.kills ?? 0) * (window.PB_LABX?.huevo?.(run) ?? 1)), avisos = []; // 1.26: Suerte de huevos
    for (const h of d.h) h.k = (h.k ?? 0) + k;
    for (const h of [...d.h]) if (h.k >= h.need) { avisos.push(eclosionar(h)); d.h.splice(d.h.indexOf(h), 1); }
    while (d.h.length < HUECOS && d.cola.length) d.h.push(d.cola.shift());
    if (run.victory) {
      const reg = R()?.regionMapa?.(run)?.id ?? (['encina', 'iris'].includes(run.biome?.id) ? 'johto' : 'kanto');
      const huevo = { reg, need: NECESITA, k: 0 };
      if (d.h.length < HUECOS) { d.h.push(huevo); avisos.push(`¡Has recibido un Huevo de ${reg[0].toUpperCase() + reg.slice(1)}! Está en la Incubadora (Laboratorio)`); }
      else if (d.cola.length < COLA) { d.cola.push(huevo); avisos.push('Huevo nuevo en la cola de la Incubadora'); }
    }
    try { meta().save(); } catch {}
    avisos.forEach((t, i) => setTimeout(() => { try { run.ui.toast(`🥚 ${t}`, null); } catch {} }, 1500 + i * 2500));
  }, 500);

  // ---------- caja en el Laboratorio ----------
  setInterval(() => {
    const lab = document.querySelector('.screen.lab'), d = D();
    if (!lab || !d) return;
    const k = JSON.stringify(d);
    let caja = lab.querySelector('.pb-lab-huevos');
    if (caja && caja.dataset.k === k) return;
    if (!caja) {
      const ref = lab.querySelector('.pb-lab-tera') ?? lab.querySelector('.pb-lab-mald') ?? lab.querySelector('.pb-lab-oro') ?? lab.querySelector('.scr-head');
      if (!ref) return;
      caja = document.createElement('div');
      caja.className = 'pb-lab-oro pb-lab-huevos';
      caja.style.cssText = 'background:#3a3018;color:#fff4d0;flex-wrap:wrap';
      ref.after(caja);
    }
    caja.dataset.k = k;
    const hu = Array.from({ length: HUECOS }, (_, i) => d.h[i]);
    caja.innerHTML = `<span>🥚 Incubadora <small>· gana partidas para recibir huevos; eclosionan con ${NECESITA} bajas</small></span>` +
      hu.map(h => h ? `<span style="display:inline-flex;align-items:center;gap:4px;background:rgba(0,0,0,.25);border-radius:8px;padding:2px 8px"><b>🥚 ${h.reg}</b><small>${Math.min(h.k, h.need)}/${h.need}</small></span>` : `<span style="opacity:.6;background:rgba(0,0,0,.15);border-radius:8px;padding:2px 8px">vacío</span>`).join('') +
      (d.cola.length ? `<small>· en cola: ${d.cola.length}</small>` : '');
  }, 600);
})();
