/* PokéBonk TD: vista nueva encima de la lógica de PokéPath.
   - El mapa del juego (su canvas, con todo lo que pinta) se coloca grande y nítido; el resto de su interfaz
     de escritorio se esconde, pero sigue ahí: cada botón de la vista nueva pulsa el botón original, así las
     reglas (cuándo se puede subir de nivel, cuánto cuesta, qué hace cada cosa) son siempre las del juego.
   - En vertical: barra de arriba, mapa a lo ancho, equipo en 5x2 y abajo los botones de oleada.
     En horizontal: mapa a la izquierda a toda la altura y el panel a la derecha.
   - «Vista clásica» vuelve a la pantalla de siempre. Se recuerda en este equipo (pb-td-vista). */
(() => {
  const KEY = 'pb-td-vista';
  const MAP = { x: 259, y: 25, w: 720, h: 624 };
  const STAGE = { w: 1238, h: 674 };
  const SECCIONES = [
    ['box', 'Caja'], ['inventory', 'Mochila'], ['shop', 'Tienda'], ['map', 'Mapa'],
    ['dex', 'Pokédex'], ['profile', 'Perfil'], ['challenge', 'Desafío'], ['menu', 'Ajustes']
  ];
  const VELOCIDAD = { 0.8: '×1', 1.2: '×1.5', 1.7: '×2' };

  let pp = null, ui = null, hud = null, ok = false, sonda = null;
  const nueva = () => { try { return localStorage.getItem(KEY) !== 'clasica'; } catch { return true; } };
  const root = document.documentElement;
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  const visible = e => !!e && getComputedStyle(e).display !== 'none';
  const usable = e => visible(e) && getComputedStyle(e).pointerEvents !== 'none';
  const lang = () => pp?.lang ?? 1;
  const nombre = v => Array.isArray(v) ? (v[lang()] ?? v[1] ?? v[0]) : (v ?? '');
  const oro = n => '$' + (pp?.utility?.formatGold ? pp.utility.formatGold(n, lang()) : n);

  // ---------- colocación ----------
  const rects = () => {
    const vw = innerWidth, vh = innerHeight;
    if (!sonda) { sonda = el('div'); sonda.style.cssText = 'position:fixed;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)'; document.body.append(sonda); }
    const cs = getComputedStyle(sonda);
    const st = parseFloat(cs.paddingTop) || 0, sb = parseFloat(cs.paddingBottom) || 0, sl = parseFloat(cs.paddingLeft) || 0, sr = parseFloat(cs.paddingRight) || 0;
    const vertical = vh > vw * 1.05;
    root.classList.toggle('tdr-v', vertical);
    root.classList.toggle('tdr-h', !vertical);
    if (vertical) {
      const top = st + 58;
      const w = vw - sl - sr, h = w * MAP.h / MAP.w;
      return { vertical, map: { x: sl, y: top, w, h } };
    }
    const panelMin = Math.min(460, Math.max(300, vw * 0.36));
    let h = vh - st - sb, w = h * MAP.w / MAP.h;
    if (vw - sl - sr - w < panelMin) { w = vw - sl - sr - panelMin; h = w * MAP.h / MAP.w; }
    return { vertical, map: { x: sl, y: st + (vh - st - sb - h) / 2, w, h } };
  };

  const colocar = () => {
    const r = document.getElementById('screen-root');
    if (!r) return;
    if (!nueva() || !ok) { root.classList.remove('tdr-on'); r.style.transformOrigin = ''; return; }
    root.classList.add('tdr-on');
    const { map } = rects();
    const s = map.w / MAP.w;
    r.style.transformOrigin = '0 0';
    r.style.transform = `translate(${map.x - MAP.x * s}px, ${map.y - MAP.y * s}px) scale(${s})`;
    root.style.setProperty('--tdr-mx', map.x + 'px');
    root.style.setProperty('--tdr-my', map.y + 'px');
    root.style.setProperty('--tdr-mw', map.w + 'px');
    root.style.setProperty('--tdr-mh', map.h + 'px');
    // Hueco para el panel en vertical: si es poco, menú compacto.
    root.classList.toggle('tdr-low', innerHeight - (map.y + map.h) - 88 < 420);
  };
  // Después del resize del propio juego (que solo escala la pantalla entera).
  addEventListener('resize', () => requestAnimationFrame(colocar));

  // ---------- interfaz ----------
  const montar = () => {
    hud = el('div', 'tdr');
    hud.innerHTML = `
      <header class="tdr-top">
        <div class="tdr-route"><b></b><span></span></div>
        <div class="tdr-life" title="Vidas"><i></i><b></b></div>
        <div class="tdr-gold"><b></b></div>
        <div class="tdr-stars"><b></b></div>
      </header>
      <section class="tdr-side">
        <div class="tdr-next"><span>Próxima oleada</span><div class="tdr-next-row"></div></div>
        <div class="tdr-team"></div>
        <nav class="tdr-menu"></nav>
      </section>
      <footer class="tdr-dock">
        <button type="button" class="tdr-b tdr-pause" aria-label="Pausa">Pausa</button>
        <button type="button" class="tdr-b tdr-speed" aria-label="Velocidad">×1</button>
        <button type="button" class="tdr-b tdr-auto" aria-pressed="false">Auto</button>
        <button type="button" class="tdr-wave"><span>Siguiente oleada</span><small></small></button>
      </footer>
      <button type="button" class="tdr-close">Cerrar</button>`;
    document.body.append(hud);

    const team = hud.querySelector('.tdr-team');
    for (let i = 0; i < 10; i++) {
      const c = el('div', 'tdr-card');
      c.dataset.i = i;
      c.innerHTML = `<button type="button" class="tdr-deploy"><i class="tdr-spr"></i><span class="tdr-nm"></span><span class="tdr-lv"></span><em class="tdr-st"></em></button>
        <div class="tdr-acts"><button type="button" class="tdr-up">+1<small></small></button><button type="button" class="tdr-item" aria-label="Objeto"></button><button type="button" class="tdr-info" aria-label="Información">i</button></div>`;
      team.append(c);
    }
    const menu = hud.querySelector('.tdr-menu');
    for (const [k, n] of SECCIONES) {
      const b = el('button', 'tdr-m');
      b.type = 'button'; b.dataset.k = k;
      b.innerHTML = `<img alt="" src="./src/assets/images/icons/${k}.png"><span>${n}</span>`;
      menu.append(b);
    }
    const clas = el('button', 'tdr-m tdr-classic'); clas.type = 'button'; clas.innerHTML = '<span>Vista clásica</span>';
    const salir = el('button', 'tdr-m tdr-exit'); salir.type = 'button'; salir.innerHTML = '<span>Salir</span>';
    menu.append(clas, salir);

    // Acciones: siempre el botón original del juego.
    hud.addEventListener('click', e => {
      const t = e.target.closest('button');
      if (!t || !pp) return;
      const card = t.closest('.tdr-card'), i = card ? +card.dataset.i : -1;
      if (t.classList.contains('tdr-deploy')) {
        if (!pp.team.pokemon[i]) return void ui.pokemon[i].noPokemon?.click();
        ui.pokemon[i].deploy.click();
      } else if (t.classList.contains('tdr-up')) ui.pokemon[i].levelUp.click();
      else if (t.classList.contains('tdr-item')) ui.pokemon[i].item.click();
      else if (t.classList.contains('tdr-info')) ui.pokemon[i].info.click();
      else if (t.classList.contains('tdr-pause')) ui.pauseWave.click();
      else if (t.classList.contains('tdr-speed')) ui.speedWave.click();
      else if (t.classList.contains('tdr-auto')) ui.autoWave.click();
      else if (t.classList.contains('tdr-wave')) ui.nextWave.click();
      else if (t.classList.contains('tdr-close')) { const sc = pp.sections?.find(x => x.isOpen); sc?.close(); }
      else if (t.classList.contains('tdr-classic')) { try { localStorage.setItem(KEY, 'clasica'); } catch {} cambiar(); }
      else if (t.classList.contains('tdr-exit')) {
        if (!t.classList.contains('armed')) { t.classList.add('armed'); t.querySelector('span').textContent = 'Toca otra vez'; setTimeout(() => { t.classList.remove('armed'); t.querySelector('span').textContent = 'Salir'; }, 3000); return; }
        location.href = '../index.html';
      } else if (t.dataset.k) ui.section[t.dataset.k]?.click();
      pintar();
    });

    // Botón para volver a la vista nueva desde la clásica.
    const volver = el('button', 'tdr-back', 'Vista nueva');
    volver.type = 'button';
    volver.addEventListener('click', () => { try { localStorage.removeItem(KEY); } catch {} cambiar(); });
    document.body.append(volver);
  };

  const cambiar = () => {
    colocar();
    if (!nueva()) { try { window.dispatchEvent(new Event('resize')); } catch {} }
    pintar();
  };

  // ---------- pintar (copia el estado del juego) ----------
  const pintar = () => {
    if (!pp || !hud || !nueva()) return;
    const a = pp.area, p = pp.player;
    const q = s => hud.querySelector(s);
    if (a?.map) {
      q('.tdr-route b').textContent = a.map.isSecret ? '???' : nombre(a.map.name);
      q('.tdr-route span').textContent = 'Oleada ' + (a.waveNumber ?? 1);
      const hp = Math.max(0, p.health?.[a.map.id] ?? 0);
      q('.tdr-life b').textContent = hp;
      q('.tdr-life i').style.setProperty('--v', Math.min(1, hp / 14));
    }
    q('.tdr-gold b').textContent = oro(p.gold);
    q('.tdr-stars b').textContent = Math.min(4000, p.stars);

    // Próxima oleada: los sprites que enseña el propio juego.
    const row = q('.tdr-next-row');
    const src = [...(ui.mapWavePokemonContainer?.children || [])].map(x => (x.style.backgroundImage.match(/url\("?([^")]+)/) || [])[1] || '').filter(Boolean);
    const key = src.join('|');
    if (row.dataset.k !== key) {
      row.dataset.k = key; row.textContent = '';
      for (const s of src) { const im = el('i'); im.style.backgroundImage = `url("${s}")`; row.append(im); }
    }

    // Equipo
    hud.querySelectorAll('.tdr-card').forEach((c, i) => {
      const pk = pp.team.pokemon[i], u = ui.pokemon[i];
      const locked = i >= p.teamSlots;
      c.classList.toggle('empty', !pk && !locked);
      c.classList.toggle('locked', locked);
      c.classList.toggle('on', !!pk?.isDeployed);
      c.classList.toggle('sel', !!pk && pp.game.deployingUnit === pk);
      c.style.setProperty('--pc', pk?.specie?.color || '#8b7fb0');
      const spr = c.querySelector('.tdr-spr');
      const img = pk ? `url("${pk.sprite.base}")` : '';
      if (spr.style.backgroundImage !== img) spr.style.backgroundImage = img;
      c.querySelector('.tdr-nm').textContent = pk ? (pk.alias ?? nombre(pk.name)) : locked ? 'Bloqueado' : 'Vacío';
      c.querySelector('.tdr-lv').textContent = pk ? u.level.textContent.replace('Lv', 'Nv.') : locked ? (u.stars.textContent.replace(/\D+/g, ' ').trim() + ' ★') : '';
      c.querySelector('.tdr-st').textContent = pk ? (pk.isDeployed ? 'En el campo' : pp.game.deployingUnit === pk ? 'Toca una casilla' : '') : '';
      const up = c.querySelector('.tdr-up');
      up.hidden = !pk || !visible(u.levelUp);
      up.disabled = !usable(u.levelUp);
      up.firstChild.nodeValue = u.levelUp.textContent || '+1';
      up.querySelector('small').textContent = pk && pk.cost != null && u.levelUp.textContent === '+1' ? oro(pk.cost) : '';
      const it = c.querySelector('.tdr-item');
      it.hidden = !pk || !visible(u.item);
      it.disabled = !usable(u.item);
      const ib = pk?.item ? `url("${pk.item.sprite}")` : '';
      if (it.style.backgroundImage !== ib) it.style.backgroundImage = ib;
      it.textContent = pk?.item ? '' : '+';
      c.querySelector('.tdr-info').hidden = !pk;
    });

    // Oleada y botones
    const st = pp.game.stopped;
    q('.tdr-pause').classList.toggle('on', !!st);
    q('.tdr-pause').textContent = st ? 'Seguir' : 'Pausa';
    q('.tdr-speed').textContent = VELOCIDAD[pp.game.speedFactor] || ('×' + pp.game.speedFactor);
    q('.tdr-auto').classList.toggle('on', !!a.autoWave);
    q('.tdr-auto').setAttribute('aria-pressed', String(!!a.autoWave));
    const w = q('.tdr-wave');
    w.disabled = !usable(ui.nextWave);
    w.classList.toggle('live', !!a.waveActive);
    w.querySelector('span').textContent = a.waveActive ? 'Oleada en curso' : 'Siguiente oleada';
    w.querySelector('small').textContent = (ui.waveIncome?.textContent || '').trim();
    hud.querySelectorAll('.tdr-m[data-k]').forEach(b => {
      const s = ui.section[b.dataset.k];
      b.classList.toggle('off', !!s && (s.style.opacity === '0.4' || getComputedStyle(s).pointerEvents === 'none'));
    });

    // Con una ventana del juego abierta (Caja, Tienda…) el panel se aparta.
    const seccion = !!document.querySelector('#screen > .section-scene-container');
    const abierto = seccion || !!document.querySelector('.game-scene-background');
    root.classList.toggle('tdr-modal', abierto);
    root.classList.toggle('tdr-sec', seccion);
  };

  const iniciar = () => {
    if (ok) return;
    pp = window.__pp; ui = pp?.UI;
    if (!pp || !ui) return;
    ok = true;
    // Partida nueva: el perfil empieza en español (se puede cambiar con las banderas).
    try { if (pp.data?.new && pp.lang === 0) pp.newGameScene?.selectLanguage?.(1); } catch {}
    montar();
    colocar();
    pintar();
    setInterval(pintar, 150);
  };
  addEventListener('pp-listo', () => setTimeout(iniciar, 0));
  if (window.__pp) iniciar();
})();
