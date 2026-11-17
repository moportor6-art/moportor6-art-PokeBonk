/* Subversión propia (moportor6, 1.08): Radio, solo en PokéBonk Lite (idea de Pokémon Survivors, de pedrobarretto).
   En la pausa, «HUD y guía» → botón «📻 Música»: eliges qué música suena en las partidas (o «Aleatoria», la de siempre).
   Se guarda (profile.pbRadio) y vale para las siguientes. Gancho: la elección de pista del juego (nM en menus-…js)
   pregunta a window.PB_RADIO(); el cambio en marcha usa run.audio.playTrack. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const PISTAS = [['', 'Aleatoria'], ['ingame1', 'Combate 1'], ['ingame2', 'Combate 2'], ['ingame3', 'Combate 3'], ['ingame4', 'Combate 4'], ['ingame5', 'Combate 5'], ['boss', 'Jefe'], ['menu', 'Menú'], ['johto-menu', 'Menú de Johto'], ['halloween-menu', 'Menú de Halloween']];
  const meta = () => window.__pbMeta;
  window.PB_RADIO = () => meta()?.profile?.pbRadio || null;
  const nombre = id => PISTAS.find(p => p[0] === (id ?? ''))?.[1] ?? 'Aleatoria';
  // 1.10: dentro del menú «HUD y guía» de la pausa; en la barra de pestañas empujaba fuera el botón del Laboratorio.
  setInterval(() => {
    const row = document.querySelector('.pb-he-menu .row');
    if (!row || row.querySelector('.pb-radio')) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'pb-radio';
    const pinta = () => { b.textContent = `📻 Música: ${nombre(window.PB_RADIO())}`; };
    pinta();
    b.title = 'Radio: cambia la música de las partidas';
    b.onclick = e => {
      e.stopPropagation();
      const m = meta(); if (!m) return;
      const i = PISTAS.findIndex(p => p[0] === (m.profile.pbRadio ?? ''));
      const id = PISTAS[(i + 1) % PISTAS.length][0];
      m.profile.pbRadio = id;
      try { m.save(); } catch {}
      pinta();
      const run = window.__pbRun;
      if (run && id) try { run.music = id; run.audio.playTrack(id); } catch {}
    };
    row.append(b);
  }, 300);
})();
