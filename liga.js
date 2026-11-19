/* Subversión propia (moportor6, 1.38): Liga Pokémon (Alto Mando y Campeón), solo en PokéBonk Lite.
   Modo historia → «🏆 Liga Pokémon». Con las 8 medallas de una región (profile.pbMedallas) se abre su Liga: los cuatro
   miembros del Alto Mando y el Campeón, uno tras otro (motor de la Torre de Líderes, PB_TORRE), mientras sigue la horda.
   Normal o Difícil (×1,5). Al ganar: Polvo (por recoger, premios.js) y el título «Campeón de <región>».
   Datos: profile.pbCampeon = { region: 'normal' | 'dificil' }. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const meta = () => window.__pbMeta, P = () => meta()?.profile, H = () => window.PB_HISTORIA;
  const E = (nombre, sp, sub = 'Alto Mando') => ({ nombre, sp, sub });
  const C = (nombre, sp) => ({ nombre, sp, sub: '👑 ¡El Campeón de la Liga!' });
  const LIGAS = {
    kanto: ['Kanto', 1.3, [E('Lorelei', 131), E('Bruno', 68), E('Agatha', 94), E('Lance', 149), C('Azul', 9)]],
    johto: ['Johto', 1.4, [E('Mento', 178), E('Koga', 169), E('Bruno', 68), E('Karen', 229), C('Lance', 149)]],
    hoenn: ['Hoenn', 1.5, [E('Sixto', 359), E('Fátima', 356), E('Nívea', 365), E('Dracón', 373), C('Máximo', 376)]],
    sinnoh: ['Sinnoh', 1.6, [E('Alecrán', 452), E('Gaia', 450), E('Fausto', 392), E('Lucio', 437), C('Cintia', 445)]],
    teselia: ['Teselia', 1.7, [E('Anís', 609), E('Aza', 625), E('Catleya', 576), E('Lotto', 534), C('Mirto', 637)]],
    kalos: ['Kalos', 1.8, [E('Malva', 663), E('Narciso', 693), E('Tileo', 681), E('Drácena', 715), C('Dianta', 282)]],
    alola: ['Alola', 1.9, [E('Kaudan', 740), E('Mayla', 745), E('Zarala', 770), E('Kahili', 733), C('Kukui', 727)]],
    galar: ['Galar', 2, [E('Roxy', 861, 'Copa de Campeones'), E('Berto', 858, 'Copa de Campeones'), E('Roy', 884, 'Copa de Campeones'), E('Paul', 832, 'Copa de Campeones'), C('Lionel', 6)]],
    paldea: ['Paldea', 2.1, [E('Cayena', 980), E('Lima', 959), E('Laureano', 973), E('Hassel', 998), C('Ságita', 983)]]
  };
  const medallas = reg => P()?.pbMedallas?.[reg]?.length ?? 0;

  const pantalla = () => {
    const h = H(), p = P(); if (!h || !p) return;
    const c = h.capa('kanto'), b = document.createElement('div'), camp = p.pbCampeon ?? {}; b.className = 'hb';
    b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🏆 Liga Pokémon</h2><p class="sub">Con las 8 medallas de una región, desafía a su Alto Mando y a su Campeón, uno tras otro. Gana Polvo y el título de Campeón.</p>
<div style="max-height:56vh;overflow:auto;display:flex;flex-direction:column;gap:6px">${Object.entries(LIGAS).map(([reg, [nom, , L]]) => {
      const m = medallas(reg), ok = m >= 8;
      return `<div class="fila" style="align-items:center;gap:6px;flex-wrap:wrap"><b style="min-width:84px">${nom}${camp[reg] ? ' 👑' : ''}</b>${L.map(x => `<img src="./assets/portraits/${x.sp}.png" alt="" loading="lazy" style="width:30px;height:30px;border-radius:6px;${ok ? '' : 'filter:grayscale(1) brightness(.5)'}">`).join('')}${ok ? `<button class="hbt lg" data-r="${reg}" data-d="0">Normal</button><button class="hbt lg" data-r="${reg}" data-d="1">Difícil</button>` : `<small>🔒 ${m}/8 medallas</small>`}</div>`;
    }).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('.lg').forEach(x => x.onclick = () => elegir(x.dataset.r, +x.dataset.d));
    b.querySelector('.vol').onclick = b.querySelector('.hx').onclick = () => h.abrir();
    c.append(b);
  };
  const elegir = (reg, dif) => {
    const h = H(), p = P(), c = h.capa('kanto'), b = document.createElement('div'); b.className = 'hb';
    const [nom, k, L] = LIGAS[reg];
    b.innerHTML = `<h2>Liga de ${nom}${dif ? ' (Difícil)' : ''}: elige a tu Pokémon</h2><div style="max-height:52vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
    b.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => {
      h.cerrar();
      const polvo = Math.round(2000 * k * (dif ? 1.6 : 1) / 100) * 100;
      window.PB_TORRE?.iniciar(+x.dataset.sp, 'iris', dif ? 1 : 0, {
        jefes: L, k: k * (dif ? 1.5 : 1), icono: '🏆 Liga',
        al(run) {
          const p = P(); (p.pbCampeon ??= {})[reg] = dif ? 'dificil' : (p.pbCampeon[reg] === 'dificil' ? 'dificil' : 'normal');
          try { window.PB_PREMIOS ? window.PB_PREMIOS.dar(`👑 Campeón de la Liga de ${nom}${dif ? ' (Difícil)' : ''}`, polvo) : (p.stardust = (p.stardust ?? 0) + polvo); meta().save(); } catch {}
          try { run.ui.banner(`👑 ¡Eres el Campeón de ${nom}!`, `Venciste al Alto Mando y a ${L[4].nombre} · +${polvo} de Polvo`, '#ffd84a', { species: run.startSpecies }); } catch {}
          run.later?.(4, () => { try { run.state === 'play' && run.finish(true); } catch {} });
        }
      });
    });
    b.querySelector('.vol').onclick = pantalla;
    c.append(b);
  };
  window.PB_LIGA = { LIGAS };
  setInterval(() => {
    const f = document.querySelector('.pb-h .pb-hoopa');
    if (!f || f.querySelector('.pb-liga')) return;
    const bt = document.createElement('button'); bt.className = 'hbt pb-liga'; bt.textContent = '🏆 Liga Pokémon'; bt.onclick = pantalla; f.append(bt);
  }, 400);
})();
