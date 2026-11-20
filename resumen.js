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
.pb-res-mv img{width:18px;height:18px}.pb-res-hab{font:700 12px system-ui,sans-serif;opacity:.85;margin:2px 0 4px}
/* 1.45: pausa compacta en pantallas bajas (teléfono en horizontal): botones en 2 filas sin desplazamiento y una sola
   barra de desplazamiento por pestaña (antes había otra dentro de la lista de objetos y otra en su detalle). */
@media (max-height:620px){
.pz .sm-foot{overflow:visible!important}
.pz .sm-foot .actions{display:flex!important;flex-wrap:wrap!important;gap:5px!important;align-content:flex-start}
.pz .sm-foot .actions .btn{flex:1 1 calc(25% - 5px)!important;width:auto!important;max-width:none!important;grid-column:auto!important;margin:0!important;min-height:0!important;height:30px!important;padding:0 2px!important;font-size:clamp(10px,1.4vw,12px)!important;line-height:1.05!important;white-space:normal!important;word-break:normal!important;overflow-wrap:normal!important;hyphens:none!important;letter-spacing:0!important}
.pz .sm-foot .actions .btn.big{flex-basis:100%!important;height:36px!important;font-size:16px!important;order:-1}
.pz .sm-foot .actions .pz-end{flex-basis:calc(33% - 5px)!important;order:10}
.pz .sm-foot .actions .pz-save{order:11}.pz .sm-foot .actions .btn.red{order:12}
.pz .pz-items{max-height:none!important;overflow:visible!important;grid-template-columns:repeat(auto-fill,minmax(50px,1fr))!important;gap:5px!important}
.pz .pz-item{min-height:0!important;height:50px!important;width:auto!important}
.pz .pz-item img{max-width:34px;max-height:34px}
.pz .pz-detail{max-height:none!important;overflow:visible!important}
.pz .pz-centre .sm-cbody{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:8px;row-gap:4px;align-content:start}
.pz .pz-centre .sm-cbody>*{grid-column:1;margin-top:0!important}
.pz .pz-centre .sm-cbody>.pz-detail{grid-column:2;grid-row:1/span 8;align-self:start}
.pz .pz-centre .sm-cbody>.pz-vits{grid-template-columns:1fr!important}
.pz .pz-detail .pz-desc{font-size:12px!important;line-height:1.3!important}
.pz .pz-vits{grid-template-columns:repeat(auto-fill,minmax(170px,1fr))!important;gap:5px!important}
.pz .pz-vit{padding:4px 6px!important;font-size:11.5px!important}.pz .pz-vit b{font-size:12px!important}
.pz .pz-statcols{font-size:11.5px!important;line-height:1.25!important}
.pz .pz-tabs .pz-tab{min-height:0!important;height:32px}
.pb-resumen .pz-detail{display:none!important}.pb-resumen .pz-vits{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))!important}
.pb-resumen .pb-res-mv span{padding:3px 7px;font-size:11.5px}.pb-resumen .tag{margin-top:5px!important}
}`;
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
