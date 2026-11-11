/* PokéBonk TD: vista nueva encima de la lógica de PokéPath.
   - El mapa del juego (su canvas, con todo lo que pinta) se coloca grande y nítido; el resto de su interfaz
     de escritorio se esconde, pero sigue ahí: cada botón de la vista nueva pulsa el botón original, así las
     reglas (cuándo se puede subir de nivel, cuánto cuesta, qué hace cada cosa) son siempre las del juego.
   - En vertical: barra de arriba, mapa a lo ancho, equipo en 5x2 y abajo los botones de oleada.
     En horizontal: mapa a la izquierda a toda la altura y el panel a la derecha.
   - «Vista clásica» vuelve a la pantalla de siempre. Se recuerda en este equipo (pb-td-vista). */
(() => {
  const KEY = 'pb-td-vista';
  const OPC = 'pb-td-opciones';
  const opciones = (() => { try { return Object.assign({ zoomJefe: true, vibrar: true }, JSON.parse(localStorage.getItem(OPC) || '{}')); } catch { return { zoomJefe: true, vibrar: true }; } })();
  const guardaOpc = () => { try { localStorage.setItem(OPC, JSON.stringify(opciones)); } catch {} };
  const MAP = { x: 259, y: 25, w: 720, h: 624 };
  const STAGE = { w: 1238, h: 674 };
  const SECCIONES = [
    ['box', 'Caja'], ['inventory', 'Mochila'], ['shop', 'Tienda'], ['map', 'Mapa'],
    ['dex', 'Pokédex'], ['profile', 'Perfil'], ['challenge', 'Desafío'], ['menu', 'Ajustes']
  ];
  const VELOCIDAD = { 0.8: '×1', 1.2: '×1.5', 1.7: '×2' };

  let pp = null, ui = null, hud = null, ok = false, sonda = null, ultimaFirma = '';
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

  // ---------- ventanas del juego ----------
  // Secciones (Caja, Mochila, Tienda, Mapa, Pokédex, Perfil, Desafío, Ajustes): a pantalla completa debajo
  // de una barra con su nombre y «Cerrar». En vertical, las que tienen diseño propio para el móvil (td.css)
  // se dibujan con un ancho lógico de ANCHO_V y su contenido se reparte en columna.
  // Ventanas pequeñas (avisos, información del Pokémon…): centradas y tan grandes como quepan.
  const ANCHO_V = 440;
  const REPARTIDAS = ['box', 'inventory', 'shop', 'map', 'dex', 'profile', 'menu', 'challenge'];
  const SCREEN = { cx: STAGE.w / 2, cy: STAGE.h / 2 };
  const seccionAbierta = () => {
    if (!pp) return null;
    const m = { box: pp.boxScene, inventory: pp.inventoryScene, shop: pp.shopScene, map: pp.mapScene, dex: pp.dexScene,
      profile: pp.profileScene, challenge: pp.challengeScene, menu: pp.menuScene, editor: pp.editorScene };
    for (const [k, sc] of Object.entries(m)) if (sc?.isOpen && sc.container?.isConnected) return { k, sc };
    return null;
  };
  const ventanaAbierta = () => {
    const bs = [...document.querySelectorAll('#screen > .game-scene-background')];
    const b = bs[bs.length - 1];
    return b ? b.querySelector('.game-scene-window') : null;
  };
  const NOMBRES = Object.fromEntries(SECCIONES);
  NOMBRES.editor = 'Editor';

  const colocar = () => {
    const r = document.getElementById('screen-root');
    if (!r) return;
    if (!nueva() || !ok) {
      root.classList.remove('tdr-on'); r.style.transformOrigin = '';
      const vp = document.getElementById('view-port'); if (vp) vp.style.clipPath = '';
      return;
    }
    root.classList.add('tdr-on');
    const { map, vertical } = rects();
    ultimo = { map };
    const vw = innerWidth, vh = innerHeight;
    const sec = seccionAbierta(), win = ventanaAbierta();
    root.classList.toggle('tdr-sec', !!sec);
    root.classList.toggle('tdr-win', !!win);
    for (const k of SECCIONES.map(x => x[0]).concat('editor')) root.classList.toggle('tdr-sec-' + k, sec?.k === k);
    const reparte = !!sec && vertical && REPARTIDAS.includes(sec.k) && !win;
    // En horizontal: la ventana se dibuja más grande (escala ESCALA_H) con un alto lógico menor que 624
    // y el ancho que sobre, hasta 1000.
    const repH = !!sec && !vertical && REPARTIDAS.includes(sec.k) && !win;
    root.classList.toggle('tdr-rep', reparte);
    root.classList.toggle('tdr-reph', repH);
    let s, ox, oy, z = 1;
    if (win) {
      const W = win.offsetWidth || 640, H = win.offsetHeight || 500;
      s = Math.min((vw - 16) / W, (vh - 16) / H, 1.6);
      ox = vw / 2 - SCREEN.cx * s; oy = vh / 2 - SCREEN.cy * s;
    } else if (sec) {
      const top = parseFloat(getComputedStyle(hud.querySelector('.tdr-secbar')).height) || 56;
      if (reparte) {
        s = vw / ANCHO_V; ox = 0; oy = top;
        root.style.setProperty('--tdr-lw', ANCHO_V + 'px');
        root.style.setProperty('--tdr-lh', (vh - top) / s + 'px');
      } else if (repH) {
        s = Math.min(1, Math.max((vh - top) / 470, (vh - top) / 624));
        const lw = Math.min(1000, vw / s), lh = (vh - top) / s;
        ox = (vw - lw * s) / 2; oy = top;
        root.style.setProperty('--tdr-lw', lw + 'px');
        root.style.setProperty('--tdr-lh', lh + 'px');
      } else {
        s = Math.min(vw / 720, (vh - top) / 624);
        ox = vw / 2 - SCREEN.cx * s; oy = top + (vh - top) / 2 - SCREEN.cy * s;
      }
      hud.querySelector('.tdr-secbar b').textContent = NOMBRES[sec.k] || '';
    } else {
      z = Z.z;
      const cx = z === 1 ? MAP.w / 2 : Z.cx, cy = z === 1 ? MAP.h / 2 : Z.cy;
      s = map.w / MAP.w * z;
      ox = map.x + map.w / 2 - (MAP.x + cx) * s; oy = map.y + map.h / 2 - (MAP.y + cy) * s;
    }
    r.style.transformOrigin = '0 0';
    r.style.transform = `translate(${ox}px, ${oy}px) scale(${s})`;
    const vp = document.getElementById('view-port');
    if (vp) vp.style.clipPath = z > 1 ? `inset(${map.y}px ${vw - map.x - map.w}px ${vh - map.y - map.h}px ${map.x}px round 6px)` : '';
    root.classList.toggle('tdr-zoom', z > 1);
    root.style.setProperty('--tdr-mx', map.x + 'px');
    root.style.setProperty('--tdr-my', map.y + 'px');
    root.style.setProperty('--tdr-mw', map.w + 'px');
    root.style.setProperty('--tdr-mh', map.h + 'px');
    // Hueco para el panel en vertical: si es poco, menú compacto.
    root.classList.toggle('tdr-low', vh - (map.y + map.h) - 88 < 420);
  };
  // ---------- zoom del mapa ----------
  // Con dos dedos (o la rueda, o los botones + y -) se acerca el mapa. Solo cambia cómo se ve:
  // el juego sigue calculando con sus coordenadas (lee la posición real del mapa en pantalla).
  const Z = { z: 1, cx: MAP.w / 2, cy: MAP.h / 2 };
  const ZMAX = 3;
  const limitar = () => {
    Z.z = Math.max(1, Math.min(ZMAX, Z.z));
    const hw = MAP.w / 2 / Z.z, hh = MAP.h / 2 / Z.z;
    Z.cx = Math.max(hw, Math.min(MAP.w - hw, Z.cx));
    Z.cy = Math.max(hh, Math.min(MAP.h - hh, Z.cy));
  };
  // Punto de pantalla -> punto del mapa (con el zoom actual).
  const aMapa = (px, py) => {
    const m = ultimo.map, s = m.w / MAP.w * Z.z;
    return { x: Z.cx + (px - (m.x + m.w / 2)) / s, y: Z.cy + (py - (m.y + m.h / 2)) / s };
  };
  const zoomEn = (px, py, nz) => {
    zoomManual();
    const a = aMapa(px, py);
    Z.z = nz; limitar();
    const m = ultimo.map, s = m.w / MAP.w * Z.z;
    Z.cx = a.x - (px - (m.x + m.w / 2)) / s;
    Z.cy = a.y - (py - (m.y + m.h / 2)) / s;
    limitar(); colocar();
  };
  let ultimo = { map: { x: 0, y: 0, w: MAP.w, h: MAP.h } };

  // Después del resize del propio juego (que solo escala la pantalla entera).
  addEventListener('resize', () => requestAnimationFrame(colocar));

  const gestos = () => {
    const w = document.getElementById('canvas-wrapper');
    if (!w) return;
    const dedos = new Map();
    let pinza = null;
    const medio = () => { const p = [...dedos.values()]; return { x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2, d: Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y) }; };
    // Con zoom, un dedo sobre una zona sin Pokémon mueve el mapa (si no estás colocando a uno).
    let arrastre = null;
    // Tras mover el mapa con el dedo, el «click» que sigue no cuenta como toque.
    let arrastreHecho = false;
    let inicio = null;
    addEventListener('pointerdown', e => { arrastreHecho = false; inicio = { x: e.clientX, y: e.clientY }; }, true);
    addEventListener('pointermove', e => { if (inicio && e.buttons && Math.hypot(e.clientX - inicio.x, e.clientY - inicio.y) > 8) arrastreHecho = true; }, true);
    const hayPokemon = (x, y) => {
      const c = pp.game.canvas.getBoundingClientRect(), k = pp.game.canvas.width / c.width;
      const cx = (x - c.left) * k, cy = (y - c.top) * k;
      return pp.area.placementTiles.some(t => (t.tower || t.passenger) && cx > t.position.x && cx < t.position.x + t.size && cy > t.position.y && cy < t.position.y + t.size);
    };
    w.addEventListener('pointerdown', e => {
      if (!nueva() || dedos.size || Z.z <= 1 || pp.game.deployingUnit || e.button > 0) return;
      if (pp.game.isXL || pp.game.isXLV || pp.game.isXLH) return;
      if (hayPokemon(e.clientX, e.clientY)) return;
      arrastre = { id: e.pointerId, x: e.clientX, y: e.clientY, cx: Z.cx, cy: Z.cy, movido: false };
    }, true);
    addEventListener('pointermove', e => {
      if (!arrastre || e.pointerId !== arrastre.id || pinza) return;
      const dx = e.clientX - arrastre.x, dy = e.clientY - arrastre.y;
      if (!arrastre.movido && Math.hypot(dx, dy) < 6) return;
      arrastre.movido = true; arrastreHecho = true; zoomManual();
      const s = ultimo.map.w / MAP.w * Z.z;
      Z.cx = arrastre.cx - dx / s; Z.cy = arrastre.cy - dy / s;
      limitar(); colocar();
    }, true);
    const suelta = e => { if (arrastre && e.pointerId === arrastre.id) arrastre = null; };
    addEventListener('pointerup', suelta, true);
    addEventListener('pointercancel', suelta, true);

    // Toque corto sobre uno de tus Pokémon del mapa: abre sus Datos (en el juego original, el toque lo
    // levantaba para moverlo; para moverlo, arrástralo). Casos especiales del juego (Bombardeo pendiente,
    // Patines) se dejan como están.
    const enCasilla = (x, y) => {
      const c = pp.game.canvas.getBoundingClientRect(), k = pp.game.canvas.width / c.width;
      const cx = (x - c.left) * k, cy = (y - c.top) * k;
      return pp.area.placementTiles.find(t => cx > t.position.x && cx < t.position.x + t.size && cy > t.position.y && cy < t.position.y + t.size);
    };
    pp.game.canvas.addEventListener('click', e => {
      if (!nueva() || pp.game.deployingUnit || arrastreHecho) return;
      if (pp.area.towers.some(t => t.awaitingBombardZone)) return;
      const t = enCasilla(e.clientX, e.clientY);
      const pk = t && (t.passenger || t.tower);
      if (!pk || pk.item?.id === 'pokeSkates') return;
      const i = pp.team.pokemon.indexOf(pk);
      if (i < 0) return;
      e.stopImmediatePropagation(); e.preventDefault();
      ui.pokemon[i].info.click();
    }, true);

    w.addEventListener('pointerdown', e => {
      if (!nueva() || e.pointerType === 'mouse') return;
      dedos.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (dedos.size === 2) arrastre = null;
      if (dedos.size === 2) {
        zoomManual();
        const m = medio();
        pinza = { d: m.d, z: Z.z, a: aMapa(m.x, m.y) };
        e.stopImmediatePropagation(); e.preventDefault();
      }
    }, true);
    addEventListener('pointermove', e => {
      if (!dedos.has(e.pointerId)) return;
      dedos.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (!pinza || dedos.size < 2) return;
      const m = medio();
      Z.z = pinza.z * (m.d / Math.max(20, pinza.d)); limitar();
      const mp = ultimo.map, s = mp.w / MAP.w * Z.z;
      Z.cx = pinza.a.x - (m.x - (mp.x + mp.w / 2)) / s;
      Z.cy = pinza.a.y - (m.y - (mp.y + mp.h / 2)) / s;
      limitar(); colocar();
      e.stopImmediatePropagation();
    }, true);
    const fuera = e => { dedos.delete(e.pointerId); if (dedos.size < 2) pinza = null; };
    addEventListener('pointerup', fuera, true);
    addEventListener('pointercancel', fuera, true);
    w.addEventListener('wheel', e => {
      if (!nueva()) return;
      e.preventDefault();
      zoomEn(e.clientX, e.clientY, Z.z * (e.deltaY < 0 ? 1.15 : 1 / 1.15));
    }, { passive: false });
  };

  // ---------- interfaz ----------
  const montar = () => {
    hud = el('div', 'tdr');
    hud.innerHTML = `
      <header class="tdr-top">
        <i class="tdr-comp" hidden></i>
        <div class="tdr-route"><b></b><span></span></div>
        <div class="tdr-life" title="Vidas"><i></i><b></b></div>
        <div class="tdr-gold"><b></b></div>
        <div class="tdr-stars"><b></b></div>
      </header>
      <section class="tdr-side">
        <div class="tdr-next"><div class="tdr-next-top"><span>Próxima oleada</span><div class="tdr-next-row"></div></div><div class="tdr-foe"></div></div>
        <div class="tdr-team"></div>
        <div class="tdr-locks"></div>
        <nav class="tdr-menu"></nav>
      </section>
      <footer class="tdr-dock">
        <button type="button" class="tdr-b tdr-pause" aria-label="Pausa">Pausa</button>
        <button type="button" class="tdr-b tdr-speed" aria-label="Velocidad">×1</button>
        <button type="button" class="tdr-b tdr-auto" aria-pressed="false">Auto</button>
        <button type="button" class="tdr-wave"><span>Siguiente oleada</span><small></small></button>
      </footer>
      <div class="tdr-secbar"><b></b><span class="tdr-opts"><button type="button" class="tdr-opt" data-o="zoomJefe"></button><button type="button" class="tdr-opt" data-o="vibrar"></button></span><button type="button" class="tdr-close">Cerrar</button></div>
      <div class="tdr-zbar"><button type="button" class="tdr-zin" aria-label="Acercar">+</button><button type="button" class="tdr-zout" aria-label="Alejar">−</button><button type="button" class="tdr-zfit">Ver todo</button></div>`;
    document.body.append(hud);

    // Tu compañero del Remaster, junto al nombre de la ruta.
    try {
      const e = JSON.parse((window.__pbCrudo?.get || ((k) => localStorage.getItem(k)))('pb-entrenador') || 'null');
      const ic = hud.querySelector('.tdr-comp');
      if (e?.comp?.img && /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(e.comp.img)) { ic.hidden = false; ic.style.backgroundImage = `url("${e.comp.img}")`; ic.title = `${e.comp.name} · nivel ${e.nivel}`; }
    } catch {}
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
      else if (t.classList.contains('tdr-zin') || t.classList.contains('tdr-zout')) {
        const m = ultimo.map; zoomEn(m.x + m.w / 2, m.y + m.h / 2, Z.z * (t.classList.contains('tdr-zin') ? 1.4 : 1 / 1.4));
      } else if (t.classList.contains('tdr-zfit')) { zoomManual(); Z.z = 1; limitar(); colocar(); }
      else if (t.classList.contains('tdr-opt')) { opciones[t.dataset.o] = !opciones[t.dataset.o]; guardaOpc(); if (t.dataset.o === 'vibrar' && opciones.vibrar) vibra(40); }
      else if (t.classList.contains('tdr-close')) { const sc = pp.sections?.find(x => x.isOpen); sc?.close(); }
      else if (t.classList.contains('tdr-classic')) { try { localStorage.setItem(KEY, 'clasica'); } catch {} cambiar(); }
      else if (t.classList.contains('tdr-exit')) {
        if (!t.classList.contains('armed')) { t.classList.add('armed'); t.querySelector('span').textContent = 'Toca otra vez'; setTimeout(() => { t.classList.remove('armed'); t.querySelector('span').textContent = 'Salir'; }, 3000); return; }
        location.href = '../index.html#sala';
      } else if (t.dataset.k) ui.section[t.dataset.k]?.click();
      pintar();
    });

    // Botón para volver a la vista nueva desde la clásica.
    const volver = el('button', 'tdr-back', 'Vista nueva');
    volver.type = 'button';
    volver.addEventListener('click', () => { try { localStorage.removeItem(KEY); } catch {} cambiar(); });
    document.body.append(volver);
  };

  // Letra: en la vista nueva, la redondeada de PokéBonk con los ajustes de tamaño que el juego tiene para Lexend.
  // La vista clásica vuelve a la letra elegida en Ajustes.
  const fuente = () => {
    if (nueva()) { document.body.dataset.font = 'Lexend'; }
    else { try { pp.menuScene.applyFont(); } catch {} }
  };

  const cambiar = () => {
    fuente();
    colocar();
    if (!nueva()) { try { window.dispatchEvent(new Event('resize')); } catch {} }
    pintar();
  };

  // ---------- pintar (copia el estado del juego) ----------
  const pintar = () => {
    musica();
    sonidos();
    vigilaJefe();
    if (!pp || !hud || !nueva()) return;
    if (document.body.dataset.font !== 'Lexend') document.body.dataset.font = 'Lexend';
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

    // Datos del primer enemigo de la oleada (los mismos que enseña el juego en su panel).
    const val = e => e?.querySelector('.pos-right')?.textContent.trim() ?? '';
    const foe = [
      ['', (ui.infoName?.textContent || '').trim().toLowerCase()],
      ['PS', val(ui.infoHealth)], ['Armadura', val(ui.infoArmor)], ['Velocidad', val(ui.infoSpeed)],
      ['Daño', val(ui.infoPower)], ['Oro', val(ui.infoGold)]
    ];
    const pas = ui.infoPassive && getComputedStyle(ui.infoPassive).display !== 'none' ? (ui.infoPassive.name?.textContent || '').trim().toLowerCase() : '';
    const fk = JSON.stringify(foe) + pas;
    const fe = q('.tdr-foe');
    if (fe.dataset.k !== fk) {
      fe.dataset.k = fk; fe.textContent = '';
      for (const [k, v] of foe) {
        if (!v) continue;
        const b = el('span', k ? '' : 'nm'); if (k) { b.append(el('small', null, k)); } b.append(el('b', null, v)); fe.append(b);
      }
      if (pas) fe.append(el('span', 'pas', pas));
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

    // Huecos bloqueados: en una tira pequeña en vez de tarjetas.
    const libres = Math.min(10, p.teamSlots);
    // Hasta 6 huecos: 3 columnas con tarjetas anchas (dibujo a la izquierda). Con más: 5 columnas.
    const ancho = libres <= 6;
    q('.tdr-team').style.setProperty('--cols', ancho ? 3 : 5);
    q('.tdr-team').classList.toggle('wide', ancho);
    const lk = [];
    for (let i = libres; i < 10; i++) lk.push((ui.pokemon[i].stars.textContent.replace(/\D+/g, ' ').trim()) + ' ★');
    const lks = q('.tdr-locks'), lkk = lk.join('|');
    if (lks.dataset.k !== lkk) {
      lks.dataset.k = lkk; lks.textContent = '';
      if (lk.length) { lks.append(el('span', null, 'Más huecos')); for (const t of lk) lks.append(el('b', null, t)); }
    }

    // Opciones propias de la vista nueva (en la barra de Ajustes)
    hud.querySelectorAll('.tdr-opt').forEach(b => {
      const on = !!opciones[b.dataset.o];
      b.classList.toggle('on', on);
      b.textContent = (b.dataset.o === 'zoomJefe' ? 'Zoom al jefe' : 'Vibración') + (on ? ': Sí' : ': No');
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
    const colocando = !!pp.game.deployingUnit && !a.waveActive;
    w.classList.toggle('placing', colocando);
    w.querySelector('span').textContent = a.waveActive ? 'Oleada en curso' : colocando ? 'Elige una casilla' : 'Siguiente oleada';
    // «WAVE $X | $Y/min» del juego, en español.
    const ing = (ui.waveIncome?.textContent || '').match(/WAVE \$([\d.,]+)\s*\|\s*\$(?:\/min: )?([\d.,]+)/);
    w.querySelector('small').textContent = colocando ? 'O toca otra vez su tarjeta para cancelar'
      : ing ? `$${ing[1]} esta oleada, $${ing[2]}/min` : '';
    hud.querySelectorAll('.tdr-m[data-k]').forEach(b => {
      const s = ui.section[b.dataset.k];
      b.classList.toggle('off', !!s && (s.style.opacity === '0.4' || getComputedStyle(s).pointerEvents === 'none'));
    });

    // Con una ventana del juego abierta el panel se aparta y la ventana ocupa la pantalla.
    const sec = seccionAbierta(), win = ventanaAbierta();
    const firma = (sec?.k || '') + '|' + (win ? win.offsetWidth + 'x' + win.offsetHeight : '');
    root.classList.toggle('tdr-modal', !!(sec || win));
    if (firma !== ultimaFirma) { ultimaFirma = firma; colocar(); }
  };

  // ---------- Pokémon del mapa: más grandes y con las animaciones de PokéBonk ----------
  // Los sprites de PokéPath son los mismos de PMD que usa PokéBonk, pero solo con andar y quieto.
  // Aquí se añaden, desde las hojas de PokéBonk (assets/pmd), el ataque de tus Pokémon cuando disparan,
  // el golpe recibido de los enemigos y su caída al ser derrotados, más un destello en cada golpe.
  // Solo cambia el dibujo: posiciones, casillas, alcance y golpes son los del juego.
  const ESCALA = 1.65;
  const TICK = 1000 / 60;
  let PMD = {};
  fetch('./td/pmd.json').then(r => r.json()).then(j => { PMD = j; }).catch(() => {});
  const hojas = new Map();
  const hoja = (id, shiny) => {
    const k = (shiny ? 's' : 'n') + id;
    let im = hojas.get(k);
    if (!im) { im = new Image(); im.src = `../assets/${shiny ? 'pmd-shiny' : 'pmd'}/${id}.png`; hojas.set(k, im); }
    return im.complete && im.naturalWidth ? im : null;
  };
  const info = new WeakMap();
  const esPokemon = new WeakMap();
  const nombreDe = img => {
    let v = esPokemon.get(img);
    if (v === undefined) {
      const m = img.src.match(/\/images\/pokemon\/(normal|shiny|skin)\/([^/]+?)(?:-idle|-walk)?\.png/);
      v = m ? { n: decodeURIComponent(m[2]), shiny: m[1] === 'shiny' } : null;
      esPokemon.set(img, v);
    }
    return v;
  };
  let actual = null;
  const ahora = () => performance.now();
  const velocidad = () => Math.max(.5, (pp?.game?.speedFactor || .8) / .8);
  // Fotograma de una animación según el tiempo (ms) desde que empezó; null si ya terminó.
  const fotograma = (anim, t) => {
    const [, , , n, d] = anim;
    let tick = t / TICK, i = 0;
    while (i < n && tick >= d[i]) { tick -= d[i]; i++; }
    return i < n ? i : null;
  };
  const durAnim = anim => anim[4].reduce((a, b) => a + b, 0) * TICK;

  const agrandar = () => {
    const c = pp.game?.ctx, K = window.__tdClases;
    if (!c || c.__td) return;
    c.__td = true;
    if (K) {
      const dibT = K.Tower.prototype.draw;
      K.Tower.prototype.draw = function (...a) {
        const st = info.get(this) || {}; info.set(this, st);
        const cd = this.attackCooldown ?? 0;
        if (st.cd != null && cd > st.cd + 1) { st.atk = ahora(); try { sonidoDisparo(this); } catch {} }
        st.cd = cd;
        actual = this;
        try { return dibT.apply(this, a); } finally { actual = null; }
      };
      const dibE = K.Enemy.prototype.draw;
      K.Enemy.prototype.draw = function (...a) {
        const st = info.get(this) || {}; info.set(this, st);
        if (this.dying && !st.cae) { st.cae = ahora(); if (!pp.mute?.[0]) suena(this.enemy?.isBoss ? 'bossDown' : 'faint', 'effects', 90); }
        actual = this;
        try { return dibE.apply(this, a); } finally {
          actual = null;
          // Destello del golpe: un aro blanco que se abre y se apaga.
          const t = ahora() - (st.golpe || -1e9);
          if (nueva() && t < 180 && !this.dying) {
            const x = this.position.x + this.width / 2, y = this.position.y + this.height / 2, k = t / 180;
            c.save();
            c.globalAlpha = (1 - k) * .9;
            c.strokeStyle = st.crit ? '#ffcb05' : '#fff';
            c.lineWidth = st.crit ? 4 : 3;
            c.beginPath(); c.arc(x, y, 8 + k * (st.crit ? 26 : 16), 0, Math.PI * 2); c.stroke();
            c.restore();
          }
        }
      };
      // Números de daño: más grandes, con la letra de PokéBonk y un pequeño salto al aparecer.
      const textos = K.Enemy.prototype.drawFloatingTexts;
      K.Enemy.prototype.drawFloatingTexts = function (...a) {
        if (!nueva()) return textos.apply(this, a);
        const c = this.ctx, x = this.position.x + this.width / 2;
        for (const ft of this.floatingTexts) {
          const al = ft.alpha ?? 1;
          const pop = al > .85 ? 1 + (al - .85) * 2.5 : 1;
          const crit = ft.color && /ff|ffd|ffc|yellow/i.test(ft.color);
          c.save();
          c.globalAlpha = al;
          c.font = `900 ${Math.round((crit ? 22 : 18) * pop)}px "M PLUS Rounded 1c","Nunito",sans-serif`;
          c.textAlign = 'center'; c.textBaseline = 'middle';
          c.lineJoin = 'round'; c.lineWidth = 4; c.strokeStyle = '#1d1336';
          c.strokeText(ft.text, x, ft.y);
          c.fillStyle = ft.color || '#ffb347';
          c.fillText(ft.text, x, ft.y);
          c.restore();
        }
      };
      const dano = K.Enemy.prototype.getDamaged;
      K.Enemy.prototype.getDamaged = function (amount, source, ability, isCritical, ...r) {
        const antes = this.hp;
        const res = dano.call(this, amount, source, ability, isCritical, ...r);
        if (this.hp < antes) { const st = info.get(this) || {}; st.golpe = ahora(); st.crit = !!isCritical; info.set(this, st); if (!pp.mute?.[0] && (source === 'physical' || source === 'special' || source == null)) suena('hit', 'effects', 90); }
        return res;
      };
    }
    const orig = c.drawImage;
    c.drawImage = function (img, ...a) {
      if (a.length === 8 && nueva() && img instanceof HTMLImageElement) {
        const nm = nombreDe(img);
        if (nm) {
          const [sx, sy, sw, sh, dx, dy, dw, dh] = a;
          const cx = dx + dw / 2, cy = dy + dh / 2, px = dw / sw * ESCALA;
          // ¿Animación de PokéBonk?
          const st = actual && info.get(actual), p = PMD[nm.n];
          let anim = null, t = 0;
          if (st && p) {
            const v = velocidad();
            if (actual instanceof window.__tdClases.Tower && p.attack && st.atk) {
              t = (ahora() - st.atk) * v;
              const lim = Math.min(durAnim(p.attack), (actual.attackSpeed || actual.speed || 600) * .8);
              if (t < lim) anim = p.attack;
            } else if (actual instanceof window.__tdClases.Enemy) {
              if (actual.dying && p.faint && st.cae) { t = (ahora() - st.cae) * v; anim = p.faint; }
              else if (p.hurt && st.golpe && (t = (ahora() - st.golpe) * v) < durAnim(p.hurt)) anim = p.hurt;
            }
          }
          const sheet = anim && hoja(p.id, nm.shiny);
          const i = anim && sheet ? fotograma(anim, t) : null;
          if (anim && sheet && (i != null || anim === p.faint)) {
            const [y0, fw, fh, n] = anim;
            const fi = i == null ? n - 1 : i;
            const fila = Math.max(0, Math.min(7, Math.round(sy / sh)));
            const w = fw * px, h = fh * px;
            return orig.call(this, sheet, fi * fw, y0 + fila * fh, fw, fh, cx - w / 2, cy - h / 2, w, h);
          }
          const w = dw * ESCALA, h = dh * ESCALA;
          return orig.call(this, img, sx, sy, sw, sh, cx - w / 2, cy - h / 2, w, h);
        }
      }
      return orig.call(this, img, ...a);
    };
  };

  // ---------- música de PokéSurvivor ----------
  // En la vista nueva, cada canción de PokéPath se cambia por una pista de PokéSurvivor (de JPTER78, MIT)
  // según el mundo de la primera ruta que la usa; mientras hay un jefe en el mapa suena la del jefe.
  // Se cambia el archivo de la propia pista del juego, así que el volumen, las pausas y los fundidos
  // siguen siendo los suyos. La vista clásica recupera la música original.
  const PISTA_MUNDO = { 1: 'village', 2: 'forest', 3: 'cave', 4: 'rift', 5: 'forest', 6: 'cave', 7: 'volcano', 8: 'judgment', 9: 'rift', 10: 'volcano' };
  const pistaDe = {};
  let musicaPuesta = null, jefeSonando = null;
  const prepararMusica = () => {
    const M = window.__tdMusica;
    if (!M) return;
    for (const r of Object.values(M.routeData)) {
      const song = r.music?.song;
      if (!song || pistaDe[song]) continue;
      const w = +(String(r.name?.[0] || '').match(/(\d+)-\d+/) || [])[1];
      pistaDe[song] = song === 'halloween' ? 'halloween' : r.isSecret ? 'judgment' : (PISTA_MUNDO[w] || 'village');
    }
    pistaDe.intro = 'village';
    for (const [k, a] of Object.entries(M.soundMusic)) if (!a.dataset.orig) a.dataset.orig = a.getAttribute('src') || a.src;
  };
  const cambiaSrc = (a, src) => {
    if (a.getAttribute('src') === src) return;
    const sonaba = !a.paused, vol = a.volume;
    a.src = src; a.loop = true;
    if (sonaba) { a.volume = vol; a.play().catch(() => {}); }
  };
  const musica = () => {
    const M = window.__tdMusica;
    if (!M) return;
    const n = nueva();
    if (musicaPuesta !== n) {
      musicaPuesta = n;
      for (const [k, a] of Object.entries(M.soundMusic)) cambiaSrc(a, n && pistaDe[k] ? `./td/musica/${pistaDe[k]}.ogg` : a.dataset.orig);
      jefeSonando = null;
    }
    if (!n || !pp?.area?.music) return;
    const pista = M.soundMusic[pp.area.music.song];
    if (!pista) return;
    const jefe = pp.area.enemies?.some(e => e.enemy?.isBoss && !e.dying);
    if (jefe && jefeSonando !== pista) { jefeSonando = pista; cambiaSrc(pista, './td/musica/boss.ogg'); }
    else if (!jefe && jefeSonando) { cambiaSrc(jefeSonando, `./td/musica/${pistaDe[pp.area.music.song] || 'village'}.ogg`); jefeSonando = null; }
  };

  // ---------- efectos de sonido de PokéSurvivor ----------
  // En la vista nueva: los disparos de tus Pokémon suenan según su tipo (fuego, agua, eléctrico…), los golpes
  // y las caídas con los sonidos de PokéSurvivor, y los sonidos de los menús también. Los disparos genéricos
  // del juego se silencian en la vista nueva para no sonar dos veces; los sonidos propios de un Pokémon
  // (Chatot, Kyogre…) y los de habilidades especiales se quedan como están. Usa el volumen de efectos y de
  // interfaz de Ajustes y respeta sus silencios.
  const SON = './td/sonidos/';
  const UI_SON = { close: 'back', open: 'select', hover1: 'hover', hover2: 'hover', hover3: 'hover', option: 'click', button1: 'click', button2: 'click',
    key0: 'click', key1: 'click', click0: 'click', click1: 'click', select: 'select', obtain: 'chest', equip: 'confirm', unequip: 'back', pop0: 'error',
    purchase: 'buy', start: 'confirm', results: 'levelup' };
  const EF_SON = { shiny: 'shiny', explosion: 'burst1', earthquake: 'quake', teleport: 'rift', bell: 'toll', regenerator: 'heal', ding: 'xp' };
  const SILENCIO = /^(projectile\d|area\d|beam\d|hit4|sword|ice|rockThrow|thunder|chain|fire)$/;
  let sonidosPuestos = null;
  const volumen = tipo => {
    try { const a = JSON.parse(localStorage.getItem('data')).config.audio; return Math.min(1, a.master * .05 * a[tipo] * .05); } catch { return .3; }
  };
  const sonidos = () => {
    const M = window.__tdMusica;
    if (!M?.soundEffect) return;
    const n = nueva();
    if (sonidosPuestos === n) return;
    sonidosPuestos = n;
    const pon = (bank, mapa) => {
      for (const [k, a] of Object.entries(bank)) {
        if (!a.dataset.orig) a.dataset.orig = a.getAttribute('src') || a.src;
        const nuevo = n && mapa[k] ? SON + mapa[k] + '.ogg' : a.dataset.orig;
        if (a.getAttribute('src') !== nuevo) a.src = nuevo;
        if (bank === M.soundEffect) a.muted = n && SILENCIO.test(k);
      }
    };
    pon(M.soundUi, UI_SON);
    pon(M.soundEffect, EF_SON);
  };
  // Varios reproductores por sonido para que se puedan solapar; como mucho uno cada `cada` ms.
  const reproductores = new Map(), ultimoSon = new Map();
  const suena = (nombre, tipo = 'effects', cada = 70) => {
    if (!nueva() || document.hidden) return;
    const t = performance.now();
    if (t - (ultimoSon.get(nombre) || 0) < cada) return;
    ultimoSon.set(nombre, t);
    let lista = reproductores.get(nombre);
    if (!lista) { lista = [0, 1, 2].map(() => { const a = new Audio(SON + nombre + '.ogg'); a.preload = 'auto'; return a; }); lista.i = 0; reproductores.set(nombre, lista); }
    const a = lista[lista.i++ % lista.length];
    a.volume = volumen(tipo);
    if (!a.volume) return;
    try { a.currentTime = 0; a.play().catch(() => {}); } catch {}
  };
  const TIPOS_SON = new Set(['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']);
  const sonidoDisparo = torre => {
    if (pp.mute?.[0]) return;
    const src = torre.pokemon?.sprite?.base || torre.pokemon?.sprite?.idle || '';
    const k = (String(src).match(/\/([^/]+?)(?:-idle|-walk)?\.png/) || [])[1] || torre.pokemon?.key;
    const t = PMD[k]?.t;
    suena('shot_' + (TIPOS_SON.has(t) ? t : 'normal'));
  };

  // ---------- jefe: zoom automático y vibración ----------
  // Cuando aparece un jefe y no estás usando el zoom, la cámara se acerca y lo sigue; al caer el jefe
  // vuelve al mapa entero. Si tocas el zoom tú, manda el tuyo. Vibra al perder una vida y al llegar el jefe
  // (Android). Las dos cosas se apagan en Ajustes.
  const auto = { on: false, jefe: null };
  const vibra = p => { if (opciones.vibrar && nueva()) try { navigator.vibrate?.(p); } catch {} };
  let vidasAntes = null;
  const sigueJefe = () => {
    if (!auto.on) return;
    const j = auto.jefe;
    if (!j || j.dying || j.hp <= 0 || !pp.area.enemies.includes(j) || !nueva()) {
      auto.on = false; auto.jefe = null;
      Z.z = 1; limitar(); colocar();
      return;
    }
    if (!root.classList.contains('tdr-modal')) {
      const tx = j.position.x + j.width / 2, ty = j.position.y + j.height / 2;
      Z.z += (1.8 - Z.z) * .08;
      Z.cx += (tx - Z.cx) * .08; Z.cy += (ty - Z.cy) * .08;
      limitar(); colocar();
    }
    requestAnimationFrame(sigueJefe);
  };
  const vigilaJefe = () => {
    if (!pp?.area || !nueva()) return;
    const hp = pp.player.health?.[pp.area.map?.id];
    if (vidasAntes != null && hp < vidasAntes) vibra(60);
    vidasAntes = hp;
    const j = pp.area.enemies?.find(e => e.enemy?.isBoss && !e.dying && e.hp > 0);
    if (j && j !== auto.visto) {
      auto.visto = j;
      vibra([90, 60, 90]);
      suena('boss', 'effects', 0);
      if (opciones.zoomJefe && Z.z <= 1.01 && !auto.on) { auto.on = true; auto.jefe = j; requestAnimationFrame(sigueJefe); }
    }
  };
  const zoomManual = () => { auto.on = false; auto.jefe = null; };

  // ---------- textos que se quedan en inglés ----------
  // Algunas ventanas ponen su título al arrancar el juego, antes de elegir idioma en una partida nueva
  // («END OF ROUTE», «DRAFT PICK»…). Si un texto corto coincide con la versión inglesa de text.js,
  // se cambia por la del idioma elegido.
  let traduce = null;
  import('../src/js/file/text.js').then(({ text }) => {
    const idx = new Map();
    const recorre = o => {
      if (Array.isArray(o)) { if (typeof o[0] === 'string' && o.length >= 5 && o[0].length < 48) idx.set(o[0].trim().toLowerCase(), o); return; }
      if (o && typeof o === 'object') for (const v of Object.values(o)) recorre(v);
    };
    recorre(text);
    // Textos que el juego no trae traducidos.
    const extra = { 'reroll': 'Volver a tirar', 'route view': 'Vista de ruta' };
    for (const [en, es] of Object.entries(extra)) if (!idx.has(en)) idx.set(en, [en, es, en, en, en, en, en, en, en, en]);
    traduce = raiz => {
      const l = lang();
      if (!l || !raiz) return;
      raiz.querySelectorAll('.game-scene-title, .game-scene-window *, .section-scene-container *').forEach(e => {
        if (e.children.length) return;
        const t = e.textContent.trim();
        if (!t || t.length > 48) return;
        const o = idx.get(t.toLowerCase());
        if (!o || !o[l] || o[l] === o[0]) return;
        e.textContent = t === t.toUpperCase() ? o[l].toUpperCase() : o[l];
      });
    };
  }).catch(() => {});

  const iniciar = () => {
    if (ok) return;
    pp = window.__pp; ui = pp?.UI;
    if (!pp || !ui) return;
    ok = true;
    agrandar();
    // Partida nueva: el perfil empieza en español (se puede cambiar con las banderas).
    try { if (pp.data?.new && pp.lang === 0) pp.newGameScene?.selectLanguage?.(1); } catch {}
    prepararMusica();
    montar();
    gestos();
    fuente();
    // Abrir o cerrar ventanas recoloca al momento (sin esperar al siguiente repaso).
    const sc = document.getElementById('screen');
    if (sc) new MutationObserver(() => { pintar(); if (nueva()) traduce?.(sc); }).observe(sc, { childList: true });
    colocar();
    pintar();
    setInterval(pintar, 150);
  };
  addEventListener('pp-listo', () => setTimeout(iniciar, 0));
  if (window.__pp) iniciar();
})();
