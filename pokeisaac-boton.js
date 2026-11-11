/* Subversión propia: botón "Más juegos" en la barra del menú principal, bajo Donaciones.
   Abre una ventana con PokéIsaac, PokéSurvivor, PokéPath TD y Pokelike (carpetas pokeisaac/, pokesurvivor/ y pokelike/).
   Cada juego tiene su propio botón "Volver a PokéBonk". */
(() => {
  if (window.__pbIsaac) return;
  window.__pbIsaac = true;
  const JUEGOS = [
    { id: 'pokeisaac', name: 'PokéIsaac', icon: 'pokeisaac/favicon.svg', url: 'pokeisaac/index.html?mockauth=1&mockdelay=0',
      desc: 'Mazmorras al estilo The Binding of Isaac. Sin cuenta: Gacha y fichas en este dispositivo. De @SrBatai.', pix: true },
    { id: 'pokeisaac-online', name: 'PokéIsaac online', icon: 'pokeisaac/favicon.svg', url: 'pokeisaac/index.html',
      desc: 'Con tu cuenta de pokeisaac.com: Ranking, cooperativo, clan y chat. Necesita internet.', pix: true },
    { id: 'pokemonsurvivors', name: 'Pokémon Survivors', icon: 'pokemonsurvivors-icono.png', url: 'pokemonsurvivors/index.html',
      desc: 'Survivors con 82 Pokémon: aguanta 15 minutos de hordas, evoluciona y vence a Mewtwo. De pedrobarretto.', pix: true },
    { id: 'pokesurvivor', name: 'PokéSurvivor', icon: 'pokesurvivor-icono.png', url: 'pokesurvivor/index.html',
      desc: 'Sobrevive a oleadas de enemigos. De JPTER78 y JayElDragon.' },
    { id: 'pokepath', name: 'PokéPath TD', icon: 'pokepath-icono.png', url: 'pokepath/index.html',
      desc: 'Tower defense: construye el camino y defiende 9 rutas. De Khydra.', pix: true },
    { id: 'pokebonk-td', name: 'PokéBonk TD (en pruebas)', icon: 'pokepath-icono.png', url: 'pokepath/remaster.html',
      desc: 'PokéPath TD con la cara de PokéBonk: misma partida y mismos valores, pensado para el móvil. Juego de Khydra.', pix: true },
    { id: 'pokeplunder', name: 'PokéPlunder', icon: 'pokeplunder-icono.png', url: 'pokeplunder/index.html',
      desc: 'Roguelike por turnos: 12 Pokémon, 9 zonas, objetos y jefes. De Khydra.', pix: true },
    { id: 'pokeoverlord', name: 'Pokémon Overlord', icon: 'pokeoverlord-icono.png', url: 'pokeoverlord/index.html',
      desc: 'Roguelike de combates por equipos: coloca tu equipo y lucha. Battle Frontier y Versus. De jab_lao.', pix: true },
    { id: 'pokelike', name: 'Pokelike', icon: 'pokelike/favicon.svg', url: 'pokelike/index.html',
      desc: 'Roguelike por turnos: Historia, Torre Batalla y Desafíos. De pokelike.xyz.' }
  ];

  const css = `
.pb-games{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;background:rgba(10,6,24,.72)}
.pb-games[hidden]{display:none!important}
.pb-games .pg-box{width:min(560px,92vw);max-height:90vh;overflow:auto;padding:16px;border-radius:16px;border:3px solid #fff;background:linear-gradient(#3b2a6e,#241848);color:#fff;font-family:inherit;box-shadow:0 8px 30px rgba(0,0,0,.5)}
.pb-games .pg-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.pb-games .pg-top b{font-size:20px}
.pb-games .pg-x{width:36px;height:36px;border-radius:10px;border:2px solid #fff;background:rgba(255,255,255,.12);color:#fff;font-size:18px;font-weight:800}
.pb-games .pg-list{display:flex;flex-direction:column;gap:10px}
.pb-games .pg-g{display:flex;align-items:center;gap:12px;width:100%;padding:10px 12px;border-radius:12px;border:2px solid rgba(255,255,255,.6);background:rgba(255,255,255,.1);color:#fff;text-align:left;font-family:inherit}
.pb-games .pg-g:active{transform:scale(.98);background:rgba(255,255,255,.2)}
.pb-games .pg-g img{width:44px;height:44px;flex:none;border-radius:8px;object-fit:contain}
.pb-games .pg-g b{display:block;font-size:16px}
.pb-games .pg-g small{display:block;font-size:12px;opacity:.85;margin-top:2px}
.pb-games .pg-v{font-style:normal;font-weight:700;font-size:12px;opacity:.75;margin-left:4px}
.pb-portrait .pb-games .pg-box{width:92vw}`;

  let modal = null;
  const open = () => {
    if (!modal) {
      const st = document.createElement('style');
      st.textContent = css;
      document.head.append(st);
      modal = document.createElement('div');
      modal.className = 'pb-games';
      modal.innerHTML = `<div class="pg-box"><div class="pg-top"><b>Más juegos</b><button type="button" class="pg-x" aria-label="Cerrar">X</button></div><div class="pg-list">${
        JUEGOS.map(j => `<button type="button" class="pg-g" data-url="${j.url}"><img src="${j.icon}" alt=""${j.pix ? ' style="image-rendering:pixelated"' : ''}><span><b>${j.name} <i class="pg-v" data-dir="${j.url.split('/')[0]}"></i></b><small>${j.desc}</small></span></button>`).join('')
      }</div></div>`;
      // Versión de cada juego (su version.txt). Los que no lo traen se quedan sin número.
      modal.querySelectorAll('.pg-v').forEach(el => {
        fetch(el.dataset.dir + '/version.txt', { cache: 'no-cache' }).then(r => r.ok ? r.text() : '').then(v => {
          v = String(v || '').trim().split(/\s/)[0];
          if (!v || v.length > 40 || /</.test(v)) return;
          el.textContent = /^[0-9a-f]{12,}$/i.test(v) ? 'rev. ' + v.slice(0, 7) : 'v' + v.replace(/-[0-9a-f]{6,}$/i, '');
        }).catch(() => {});
      });
      modal.addEventListener('click', e => {
        const g = e.target.closest('.pg-g');
        if (g) { location.href = g.dataset.url; return; }
        if (e.target === modal || e.target.closest('.pg-x')) modal.hidden = true;
      });
      document.body.append(modal);
    }
    modal.hidden = false;
  };
  window.PB_GAMES = { open, list: JUEGOS };

  const place = () => {
    const small = document.querySelector('.jay-sidebar .mm-small');
    if (!small || small.querySelector('.pb-isaac')) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'mm-item mini pb-isaac';
    b.innerHTML = '<span class="mm-ic"><img src="pokeisaac/favicon.svg" alt="" style="width:28px;height:28px;image-rendering:pixelated"></span><span class="mm-tx"><b>Más juegos</b></span>';
    b.addEventListener('click', open);
    const after = small.querySelector('.jay-donate') || small.querySelector('.mm-item:not(.bug)');
    if (after) after.after(b); else small.append(b);
  };
  setInterval(place, 500);
  place();
})();
