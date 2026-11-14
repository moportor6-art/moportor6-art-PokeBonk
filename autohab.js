/* Subversión propia: "Auto aprender" para PokéBonk.
   Si está activado (Pausa > chip "Auto"), al subir de nivel no sale la elección: se escoge sola la mejor
   opción según la especialidad del Pokémon que llevas en ese momento:
   - Físico (Ataque base claramente mayor que At. Esp.): movimientos físicos y Proteína.
   - Especial (At. Esp. mayor): movimientos especiales y Calcio.
   - Mixto: lo que encaje con los movimientos que ya tienes.
   Además: movimientos de su tipo (STAB), los favoritos, mejorar lo que ya lleva, y vitaminas útiles para
   cualquiera (velocidad de ataque, proyectiles, crítico, área...). Nunca escoge el Incienso Maldito.
   La lógica está aquí; el juego solo pregunta a window.PB_AUTOHAB.pick(run, ofertas) (parche en main-*.js)
   y para saber qué es cada oferta usa window.__pbOfferInfo (parche en menus-*.js). */
(() => {
  if (window.PB_AUTOHAB) return;
  const KEY = 'pb-autohab';
  let on = false;
  try { on = localStorage.getItem(KEY) === '1'; } catch {}
  let base = null; // id -> {atk, spa, types}
  fetch('data/pokemon.json').then(r => r.json()).then(l => { base = {}; for (const p of l) base[p.id] = { atk: p.stats.atk, spa: p.stats.spa, types: p.types }; }).catch(() => {});

  // Cuánto vale cada vitamina para cada especialidad (0-100).
  const VIT = {
    physical: { physical: 95, special: 10, mixed: 55 },
    special: { physical: 10, special: 95, mixed: 55 },
    attackSpeed: 75, projectiles: 70, critChance: 60, area: 55, duration: 40, projSpeed: 25,
    maxHp: 45, armor: 40, shieldMax: 40, regen: 35, lifesteal: 50, evasion: 40, moveSpeed: 30,
    pickupRange: 30, xpGain: 35, luck: 30, gold: 15, statusChance: 25, difficulty: -100
  };

  const especialidad = (run) => {
    const p = run.player;
    const b = base?.[p.speciesId];
    const clases = { physical: 0, special: 0 };
    for (let i = 0; i < (p.moves?.length || 0); i++) { const m = p.moves[i]; if (m?.def?.cls) clases[m.def.cls] = (clases[m.def.cls] || 0) + (m.level || 1); }
    if (b) {
      if (b.atk >= b.spa * 1.12) return 'physical';
      if (b.spa >= b.atk * 1.12) return 'special';
    }
    if (clases.physical > clases.special) return 'physical';
    if (clases.special > clases.physical) return 'special';
    return 'mixed';
  };

  const puntos = (run, o, esp, tipos) => {
    let info = null;
    try { info = window.__pbOfferInfo ? window.__pbOfferInfo(run, o) : null; } catch {}
    const rareza = (o.rarity || 0) * 12;
    if (o.kind === 'newMove') {
      let s = 60;
      if (info?.cls) s += info.cls === esp ? 40 : esp === 'mixed' ? 15 : -20;
      if (info?.type && tipos.includes(info.type)) s += 15;
      if (o.fav) s += 30;
      return s;
    }
    if (o.kind === 'upMove') {
      let s = 55 + rareza - (info?.level || 1) * 3; // repartir: cuanto más nivel, menos prisa
      if (info?.cls) s += info.cls === esp ? 20 : esp === 'mixed' ? 5 : -15;
      if (info?.type && tipos.includes(info.type)) s += 8;
      return s;
    }
    if (o.kind === 'newVit' || o.kind === 'upVit') {
      const st = info?.stat;
      if (info?.dice) return 20 + rareza;
      let v = VIT[st];
      if (v && typeof v === 'object') v = v[esp];
      if (v == null) v = 30;
      if (v < 0) return v;
      return v + rareza + (o.kind === 'upVit' ? 4 - (info?.level || 1) * 2 : 0);
    }
    return 10;
  };

  const pick = (run, ofertas) => {
    if (!on || !ofertas?.length) return null;
    try {
      const esp = especialidad(run);
      const tipos = run.player.types || base?.[run.player.speciesId]?.types || [];
      let mejor = null, max = -Infinity;
      for (const o of ofertas) { const s = puntos(run, o, esp, tipos); if (s > max) { max = s; mejor = o; } }
      return max < 0 ? null : mejor; // si todo es malo (solo Incienso Maldito), que elija el jugador
    } catch { return null; }
  };

  const set = (v) => { on = !!v; try { localStorage.setItem(KEY, on ? '1' : '0'); } catch {} pintar(); };


  // Hueco libre del centro de la franja de la pausa: ahí van "HUD y guía" y "Auto aprender", uno encima del otro.
  const chipsPausa = (hero) => {
    let c = hero.querySelector('.pb-pz-chips');
    if (!c) {
      if (!document.getElementById('pb-pz-css')) { const st = document.createElement('style'); st.id = 'pb-pz-css'; st.textContent = '.pb-pz-movil button{padding:1px 9px!important;font-size:10px!important;box-shadow:none!important}'; document.head.append(st); }
      if (getComputedStyle(hero).position === 'static') hero.style.position = 'relative';
      c = document.createElement('div');
      c.className = 'pb-pz-chips';
      // Los dos botones juntos, uno encima del otro, en un hueco de la franja donde no hay texto.
      const pc = hero.clientWidth >= 700;
      c.style.cssText = pc
        ? 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;display:flex;flex-direction:column;gap:6px;align-items:stretch;pointer-events:none'
        : 'position:absolute;right:8px;top:6px;z-index:2;display:flex;flex-direction:row;gap:6px;align-items:center;pointer-events:none';
      if (!pc) c.classList.add('pb-pz-movil');
      hero.append(c);
    }
    return c;
  };
  const CHIP = 'pointer-events:auto;padding:5px 14px;border-radius:99px;border:2px solid #fff;color:#fff;font:800 12px system-ui,sans-serif;letter-spacing:.3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 0 rgba(0,0,0,.25)';
  const pintar = () => document.querySelectorAll('.pb-ah-btn').forEach(b => {
    const corto = !!b.closest('.pb-pz-movil'); // en el móvil hay poco sitio
    b.textContent = (corto ? 'Auto: ' : 'Auto aprender: ') + (on ? 'Sí' : 'No');
    b.style.background = on ? '#2fb55f' : '#5a4a8a';
  });
  const inject = () => {
    const hero = document.querySelector('.modal.sm-modal .panel.sm.pz > .pz-hero');
    if (!hero || hero.querySelector('.pb-ah-btn')) return;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pb-ah-btn';
    b.title = 'Al subir de nivel se elige sola la mejor mejora para tu Pokémon (físico, especial o mixto)';
    b.style.cssText = CHIP;
    b.addEventListener('click', e => { e.stopPropagation(); set(!on); });
    chipsPausa(hero).append(b);
    pintar();
  };
  setInterval(inject, 500);

  window.PB_AUTOHAB = { get on() { return on; }, set, pick, especialidad };
})();
