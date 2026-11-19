/* Subversión propia (moportor6, 1.44): pestaña «Resumen» en la pausa, solo en PokéBonk Lite.
   Junto a Movimientos · Objetos · Estadísticas: en una sola vista, la habilidad, los movimientos que llevas (con su
   nivel) y las vitaminas con lo que hace cada una (las que el modo automático eligió por ti), los objetos y las
   reliquias. Se arma copiando lo que la propia pausa ya muestra en sus pestañas (.pz-left y .pz-centre). */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const css = document.createElement('style');
  css.textContent = `.pz.pb-res-on .pz-body>section:not(.pb-resumen){display:none!important}
.pz .pb-resumen{display:none}.pz.pb-res-on .pb-resumen{display:flex!important;flex-direction:column;flex:1 1 auto;min-width:0}
.pb-resumen .sm-cbody{overflow:auto}.pb-resumen .tag{margin-top:8px}
.pb-res-mv{display:flex;flex-wrap:wrap;gap:6px}.pb-res-mv span{display:flex;align-items:center;gap:4px;background:rgba(120,90,255,.1);border-radius:9px;padding:4px 8px;font:800 12px system-ui,sans-serif}
.pb-res-mv img{width:18px;height:18px}.pb-res-hab{font:700 12px system-ui,sans-serif;opacity:.85;margin:2px 0 4px}`;
  document.head.append(css);
  const esc = t => String(t ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const pintar = (pz, sec) => {
    const izq = pz.querySelector('.pz-left'), cen = pz.querySelector('.pz-centre');
    const hab = izq?.querySelector('.pz-ability b')?.textContent;
    const mv = [...(izq?.querySelectorAll('.pz-move') ?? [])].map(m => `<span>${m.querySelector('.typeicon img')?.outerHTML ?? ''}${esc(m.querySelector('.pz-mh b')?.textContent)} <small>${esc(m.querySelector('.pz-mh span')?.textContent)}</small></span>`).join('');
    const cuerpo = cen?.querySelector('.sm-cbody')?.cloneNode(true);
    sec.innerHTML = `<header><b>Resumen</b><small>Movimientos y vitaminas</small></header><div class="sm-cbody">${hab ? `<div class="pb-res-hab">Habilidad: <b>${esc(hab)}</b></div>` : ''}<div class="tag">Movimientos · ${izq?.querySelectorAll('.pz-move').length ?? 0}</div><div class="pb-res-mv">${mv || '<small>—</small>'}</div></div>`;
    if (cuerpo) {
      // Primero las vitaminas (lo que más cuesta recordar), luego objetos y reliquias.
      const b = sec.querySelector('.sm-cbody'), tags = [...cuerpo.children];
      const iv = tags.findIndex(e => e.classList.contains('tag') && /vitamina/i.test(e.textContent));
      const vit = iv >= 0 ? tags.slice(iv, iv + 2) : [];
      const tObj = document.createElement('div'); tObj.className = 'tag'; tObj.textContent = 'Objetos';
      b.append(...vit, tObj, ...tags.filter(e => !vit.includes(e)));
    }
  };
  setInterval(() => {
    const pz = document.querySelector('.pz'), tabs = pz?.querySelector('.pz-tabs'), body = pz?.querySelector('.pz-body');
    if (!pz || !tabs || !body) return;
    let bt = tabs.querySelector('.pb-res-tab'), sec = body.querySelector('.pb-resumen');
    if (!sec) { sec = document.createElement('section'); sec.className = 'sm-card pb-resumen'; body.append(sec); }
    if (!bt) {
      bt = document.createElement('button'); bt.type = 'button'; bt.className = 'pz-tab pb-res-tab'; bt.textContent = 'Resumen';
      bt.onclick = e => {
        e.stopPropagation();
        tabs.querySelectorAll('.pz-tab').forEach(t => t.classList.toggle('on', t === bt));
        pz.classList.add('pb-res-on'); pintar(pz, sec);
      };
      tabs.prepend(bt);
      tabs.querySelectorAll('.pz-tab:not(.pb-res-tab)').forEach(t => t.addEventListener('click', () => { pz.classList.remove('pb-res-on'); bt.classList.remove('on'); }));
      if (tabs.scrollWidth > tabs.clientWidth + 1) { tabs.style.flexWrap = 'wrap'; tabs.style.rowGap = '6px'; }
    }
  }, 500);
})();
