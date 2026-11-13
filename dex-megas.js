/* Subversión propia: pestaña «Megas y Gigamax» de la Pokédex.
   Enseña todas las megas, segundas formas y Gigamax que hay en el juego, también las que no tienes,
   solo como información: no desbloquea nada. Las megas se siguen comprando en el Laboratorio
   o desbloqueando con la investigación. La abre menus-…js con PB_DEX_MEGA.panel(meta, dep). */
(() => {
  let metaSprites = null;
  const cargarMeta = () => metaSprites ??= fetch('./data/sprites.json').then(r => r.json()).catch(() => ({}));

  // Dibuja el primer fotograma (quieto, mirando al frente) de la hoja PMD de un sprite.
  function miniatura(sid, shiny) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 96;
    cv.style.cssText = 'width:96px;height:96px;image-rendering:pixelated';
    cargarMeta().then(all => {
      const m = all[sid]?.anims?.idle ?? all[sid]?.anims?.walk;
      if (!m) return;
      const img = new Image();
      img.onload = () => {
        const g = cv.getContext('2d');
        g.imageSmoothingEnabled = false;
        const k = Math.min(2, 92 / Math.max(m.fw, m.fh));
        const w = m.fw * k, h = m.fh * k;
        g.drawImage(img, 0, m.y, m.fw, m.fh, (96 - w) / 2, (96 - h) / 2, w, h);
      };
      img.src = `./assets/${shiny ? 'pmd-shiny' : 'pmd'}/${sid}.png`;
    });
    return cv;
  }

  function lista() {
    const M = window.PB_MEGA;
    if (!M) return [];
    const out = [];
    for (const k of Object.keys(M.MEGAS).map(Number).sort((a, b) => a - b)) {
      M.forms(k).forEach((f, i) => out.push({ sp: k, f, tipo: 'mega', i }));
    }
    for (const k of Object.keys(M.GMAX).map(Number).sort((a, b) => a - b)) out.push({ sp: k, f: M.GMAX[k], tipo: 'gmax' });
    return out;
  }

  const D = {
    panel(meta, dep = {}) {
      const nombre = dep.nombre ?? (id => `#${id}`);
      const tipos = dep.tipos ?? {};
      let filtro = 'all', shiny = false;
      const el = document.createElement('div');
      el.className = 'panel pb-dxmega';
      el.style.cssText = 'display:flex;flex-direction:column;gap:12px;min-height:0;overflow:auto;padding:14px';
      const barra = document.createElement('div');
      barra.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center';
      const nota = document.createElement('small');
      nota.style.cssText = 'font-weight:700;opacity:.75';
      nota.textContent = 'Solo información: aquí ves todas las formas aunque no las tengas. Las megas se compran en el Laboratorio o se desbloquean al completar la investigación de su familia. El Gigamax sale solo al usar el Dynamax con ese Pokémon.';
      const rejilla = document.createElement('div');
      rejilla.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px';

      const pintar = () => {
        barra.textContent = '';
        const todos = lista();
        const abierta = x => x.tipo === 'gmax' || window.PB_MEGA.unlocked(meta, x.sp);
        const cuenta = { all: todos.length, mega: todos.filter(x => x.tipo === 'mega').length, gmax: todos.filter(x => x.tipo === 'gmax').length, own: todos.filter(x => x.tipo === 'mega' && abierta(x)).length };
        for (const [k, t] of [['all', 'Todas'], ['mega', 'Megas'], ['gmax', 'Gigamax'], ['own', 'Desbloqueadas']]) {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'pill' + (filtro === k ? ' on' : '');
          b.textContent = `${t} (${cuenta[k]})`;
          b.onclick = () => { filtro = k; pintar(); };
          barra.append(b);
        }
        const bs = document.createElement('button');
        bs.type = 'button';
        bs.className = 'pill' + (shiny ? ' on' : '');
        bs.textContent = shiny ? '✦ Variocolor' : 'Normal';
        bs.onclick = () => { shiny = !shiny; pintar(); };
        barra.append(bs);

        rejilla.textContent = '';
        const vis = todos.filter(x => filtro === 'all' || (filtro === 'own' ? x.tipo === 'mega' && abierta(x) : x.tipo === filtro));
        for (const x of vis) {
          const ok = abierta(x);
          const c = document.createElement('div');
          c.style.cssText = `display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 8px;border-radius:14px;text-align:center;background:${x.tipo === 'gmax' ? 'linear-gradient(#ffe3e3,#fff)' : 'linear-gradient(#efe3ff,#fff)'};color:#2a2340;box-shadow:0 3px 0 rgba(0,0,0,.12)`;
          const img = miniatura(x.f.sid, shiny && x.f.shiny);
          if (!ok) img.style.filter = 'grayscale(.85) brightness(.9)';
          const n = document.createElement('b');
          n.style.cssText = 'font-size:14px;line-height:1.15';
          n.textContent = x.f.name;
          const base = document.createElement('small');
          base.style.cssText = 'font-weight:700;opacity:.7';
          base.textContent = `#${x.sp} ${nombre(x.sp)}`;
          const ts = document.createElement('small');
          ts.style.cssText = 'font-weight:700;opacity:.8';
          ts.textContent = x.f.types ? 'Tipos: ' + x.f.types.map(t => tipos[t] ?? t).join(' / ') : (x.tipo === 'gmax' ? 'Mismo tipo que el Pokémon' : 'Mismos tipos que el Pokémon');
          const est = document.createElement('small');
          est.style.cssText = `font-weight:900;color:${ok ? '#2a9a4a' : '#8a5ad8'}`;
          est.textContent = x.tipo === 'gmax' ? 'Con el Dynamax'
            : ok ? (x.i ? '✓ Desbloqueada · se elige en el Laboratorio' : '✓ Desbloqueada')
              : 'En el Laboratorio';
          c.append(img, n, base, ts, est);
          rejilla.append(c);
        }
      };
      el.append(barra, nota, rejilla);
      pintar();
      return { el, focus() {}, key() {} };
    }
  };
  window.PB_DEX_MEGA = D;
})();
