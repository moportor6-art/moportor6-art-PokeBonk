/* Subversión propia (moportor6, 1.25): recogida automática, solo en PokéBonk Lite.
   Al pasar junto a estas cosas se usan solas, sin pulsar el botón de acción:
   - Roca de oro: tu Pokémon la rompe y te llevas el oro.
   - Imán: atrae la experiencia del mapa.
   - Baya: te la comes si te falta vida (si estás al máximo, se queda para luego).
   Lo que cuesta dinero o abre una ventana (cofres, altares, jaulas, tragaperras, setas…) sigue siendo con el botón.
   Gancho: run.interactables.interact (el mismo que usa el botón). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const AUTO = { rock: 1, magnet: 1, berry: 1 };
  setInterval(() => {
    const run = window.__pbRun, p = run?.player, I = run?.interactables;
    if (!run || !p || !I?.list || run.state !== 'play' || p.dead) return;
    for (const o of I.list) {
      if (!AUTO[o.kind] || o.used || (o.cost ?? 0) > 0) continue;
      if (Math.hypot(o.x - p.pos.x, o.z - p.pos.z) > (o.r ?? 2) + 0.6) continue;
      if (o.kind === 'berry' && p.hp >= p.maxHp * 0.9) continue;
      try {
        I.interact(o);
        if (o.kind === 'rock') run.vfx?.burst?.(o.x, o.y + 0.8, o.z, 0xffd84a, 14, 5, 29, 0.45, 0.6);
      } catch {}
    }
  }, 150);
})();
