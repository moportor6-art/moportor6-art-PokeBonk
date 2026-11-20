/* Subversión propia (0.28): pantalla del actualizador de PokéBonk Remaster.
   El trabajo lo hace la app (Android: Actualizador.java, Windows: desktop/actualizador.js); aquí solo se
   enseña qué hay, se pregunta y se ve el progreso:
   - Al abrir el juego, cuando el menú está a la vista, se busca en silencio (sin internet no pasa nada).
   - Si hay versión nueva, se enseña primero el historial de cambios y qué se va a bajar (por módulos, con
     tamaño). Se puede actualizar todo, elegir módulos, dejarlo para luego u omitir esa versión.
   - Al terminar, "Reiniciar ahora" recarga el juego con lo nuevo. Las partidas no se tocan.
   - El juego avisa a la app de que arrancó bien (confirmar); si no, la app vuelve sola a lo anterior.
   También en Remaster > Actualizaciones (buscar a mano, estado de cada módulo, volver a lo de la app). */
(() => {
  if (window.PB_ACT) return;
  const and = window.AndroidMenu && typeof window.AndroidMenu.actualizacion === 'function';
  const win = window.pokebonkDesktop && typeof window.pokebonkDesktop.actualizacion === 'function';
  const OMITIDA = 'pb-act-omitida';
  const esperas = new Map();
  const oyentes = new Set();
  let nid = 0;

  window.pbActEvento = (ev) => {
    if (ev && ev.tipo === 'respuesta' && esperas.has(ev.id)) {
      const { ok, ko } = esperas.get(ev.id); esperas.delete(ev.id);
      ev.error ? ko(new Error(ev.error)) : ok(ev.resultado);
      return;
    }
    for (const f of oyentes) try { f(ev); } catch {}
  };
  const llamar = (accion, datos) => {
    if (win) return window.pokebonkDesktop.actualizacion(accion, datos).then(r => { if (r && r.error) throw new Error(r.error); return r; });
    if (and) return new Promise((ok, ko) => { const id = String(++nid); esperas.set(id, { ok, ko }); window.AndroidMenu.actualizacion(id, accion, datos == null ? '' : JSON.stringify(datos)); });
    return Promise.reject(new Error('Las actualizaciones van en la app de Android o Windows.'));
  };
  const disponible = and || win;

  // El juego arrancó: la app ya puede dar por buena la versión instalada.
  const confirmar = () => { if (disponible) llamar('confirmar').catch(() => {}); };
  addEventListener('pokebonk:modules-ready', () => setTimeout(confirmar, 3000));
  setTimeout(() => { if (window.__pbApp) confirmar(); }, 20000);

  const mb = (b) => b >= 1 << 20 ? (b / (1 << 20)).toFixed(b >= 100 << 20 ? 0 : 1).replace('.', ',') + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  const ETQ = { new: 'Nuevo', better: 'Mejora', fix: 'Arreglo' };

  const css = `
.pb-act{position:fixed;inset:0;z-index:100001;display:flex;align-items:center;justify-content:center;background:rgba(10,6,24,.75)}
.pb-act[hidden]{display:none!important}
.pb-act .pa-box{width:min(640px,94vw);max-height:92vh;overflow:auto;padding:16px;border-radius:16px;border:3px solid #fff;background:linear-gradient(#3b2a6e,#241848);color:#fff;font-family:inherit;box-shadow:0 8px 30px rgba(0,0,0,.5)}
.pb-act h2{margin:0 0 4px;font-size:21px}
.pb-act .pa-sub{opacity:.85;font-size:13px;margin:0 0 12px}
.pb-act .pa-card{padding:10px 12px;border-radius:12px;background:rgba(255,255,255,.09);border:2px solid rgba(255,255,255,.25);margin-bottom:10px}
.pb-act .pa-card h3{margin:0 0 6px;font-size:15px}
.pb-act .pa-cl{max-height:34vh;overflow:auto}
.pb-act .pa-cl h4{margin:8px 0 4px;font-size:14px}
.pb-act .pa-cl ul{margin:0;padding-left:18px}
.pb-act .pa-cl li{margin:3px 0;font-size:13px}
.pb-act .pa-cl i{font-style:normal;font-size:11px;font-weight:800;padding:1px 6px;border-radius:6px;margin-right:4px;background:#5be38b;color:#123}
.pb-act .pa-cl i.better{background:#6cc3ff}.pb-act .pa-cl i.fix{background:#ffcb05}
.pb-act label.pa-m{display:flex;align-items:center;gap:10px;padding:7px 4px;border-bottom:1px solid rgba(255,255,255,.15);font-size:14px}
.pb-act label.pa-m input{width:20px;height:20px}
.pb-act label.pa-m span{flex:1}
.pb-act label.pa-m small{opacity:.8}
.pb-act .pa-btns{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.pb-act .pa-btns button{flex:1;min-width:140px;padding:12px;border-radius:12px;border:3px solid #fff;font:inherit;font-weight:900;color:#fff;background:rgba(255,255,255,.14)}
.pb-act .pa-btns button.go{background:linear-gradient(#5be38b,#2fb55f)}
.pb-act .pa-btns button:disabled{opacity:.5}
.pb-act .pa-bar{height:14px;border-radius:8px;background:rgba(255,255,255,.15);overflow:hidden;margin:8px 0}
.pb-act .pa-bar b{display:block;height:100%;width:0;background:linear-gradient(90deg,#5be38b,#ffcb05);transition:width .2s}
.pb-act .pa-msg{font-size:13px;opacity:.9}
.pb-act .pa-err{color:#ffb4b4;font-weight:700}`;
  let modal = null;
  const abrirModal = () => {
    if (!modal) {
      const st = document.createElement('style'); st.textContent = css; document.head.append(st);
      modal = document.createElement('div'); modal.className = 'pb-act'; modal.hidden = true;
      document.body.append(modal);
    }
    modal.hidden = false;
    return modal;
  };
  const cerrar = () => { if (modal) modal.hidden = true; };

  const historial = (cambios) => !cambios?.length ? '<p class="pa-msg">Sin notas para esta versión.</p>' :
    cambios.map(c => `<h4>Subversión ${esc(c.sub)}${c.title ? ' - ' + esc(c.title) : ''} <small>(${esc(c.date || '')})</small></h4><ul>${(c.notes || []).map(([k, t]) => `<li><i class="${esc(k)}">${ETQ[k] || esc(k)}</i>${md(t)}</li>`).join('')}</ul>`).join('');

  let trabajando = false;
  const mostrarPlan = (p) => {
    const m = abrirModal();
    const titulo = `Actualización disponible: ${esc(p.tag)}`;
    const sub = `Tienes la versión ${esc(p.actual)}${p.subActual ? ' (subversión ' + esc(p.subActual) + ')' : ''}. La nueva es la subversión ${esc(p.sub)}.`;
    let cuerpo = `<div class="pa-card"><h3>Qué cambia</h3><div class="pa-cl">${historial(p.cambios)}</div></div>`;
    if (p.completo) {
      cuerpo += `<div class="pa-card"><h3>Actualización completa</h3><p class="pa-msg">${esc(p.motivo)}</p><p class="pa-msg">Descarga: <b>${mb(p.completo.bytes)}</b>. ${and ? 'Android te pedirá confirmar la instalación.' : 'Se abrirá el instalador y el juego se cerrará.'}</p></div>`;
    } else if (p.completo === null) {
      cuerpo += `<div class="pa-card"><p class="pa-msg">Esta versión necesita instalarse completa, pero aún no está lista. Prueba en un rato.</p></div>`;
    } else {
      const total = p.modulos.reduce((s, x) => s + x.bytes, 0);
      cuerpo += `<div class="pa-card"><h3>Qué se descarga (${mb(total)})</h3><p class="pa-msg">Solo los archivos que cambian. Puedes elegir qué partes actualizar.</p>${p.modulos.map(x => `<label class="pa-m"><input type="checkbox" value="${esc(x.id)}" checked><span>${esc(x.nombre)}<br><small>${x.archivos} archivos${x.quitados ? ', ' + x.quitados + ' se quitan' : ''}</small></span><b>${mb(x.bytes)}</b></label>`).join('')}</div>`;
    }
    cuerpo += `<div class="pa-prog" hidden><div class="pa-bar"><b></b></div><p class="pa-msg pa-est"></p></div><p class="pa-msg pa-err" hidden></p>`;
    const puede = p.completo || p.modulos?.length;
    m.innerHTML = `<div class="pa-box"><h2>${titulo}</h2><p class="pa-sub">${sub}</p>${cuerpo}<div class="pa-btns">${puede ? `<button type="button" class="go pa-go">${p.completo ? 'Descargar e instalar' : 'Actualizar'}</button>` : ''}<button type="button" class="pa-luego">Más tarde</button><button type="button" class="pa-omitir">Omitir esta versión</button></div></div>`;
    const go = m.querySelector('.pa-go');
    m.querySelector('.pa-luego').onclick = () => { if (!trabajando) cerrar(); };
    m.querySelector('.pa-omitir').onclick = () => { if (trabajando) return; try { localStorage.setItem(OMITIDA, p.tag); } catch {} cerrar(); };
    if (go) go.onclick = () => {
      const ids = [...m.querySelectorAll('.pa-m input:checked')].map(i => i.value);
      if (!p.completo && !ids.length) return;
      trabajando = true;
      go.disabled = true;
      m.querySelector('.pa-prog').hidden = false;
      m.querySelector('.pa-est').textContent = 'Empezando...';
      m.querySelectorAll('.pa-m input').forEach(i => { i.disabled = true; });
      llamar(p.completo ? 'completo' : 'aplicar', p.completo ? null : ids).catch(e => evento({ tipo: 'error', mensaje: e.message }));
    };
  };

  const evento = (ev) => {
    if (!modal || modal.hidden) return;
    const bar = modal.querySelector('.pa-bar b'), est = modal.querySelector('.pa-est'), err = modal.querySelector('.pa-err');
    if (ev.tipo === 'progreso' && bar) {
      bar.style.width = (ev.total ? Math.min(100, ev.hecho / ev.total * 100) : 100) + '%';
      est.textContent = `${mb(ev.hecho)} de ${mb(ev.total)}` + (ev.totalArchivos > 1 ? ` (${ev.archivos}/${ev.totalArchivos} archivos)` : '');
    } else if (ev.tipo === 'listo') {
      trabajando = false;
      if (bar) bar.style.width = '100%';
      const btns = modal.querySelector('.pa-btns');
      est.textContent = `Listo: ${ev.archivos} archivos (${mb(ev.bytes || 0)}). Se aplica al reiniciar el juego. Tus partidas no se tocan.`;
      btns.innerHTML = '<button type="button" class="go pa-rei">Reiniciar ahora</button><button type="button" class="pa-luego">Después</button>';
      btns.querySelector('.pa-rei').onclick = () => {
        if (window.__pbApp?.run && window.__pbApp.run.state !== 'over') { est.textContent = 'Termina o guarda la partida antes de reiniciar.'; return; }
        llamar('reiniciar').catch(() => location.reload());
      };
      btns.querySelector('.pa-luego').onclick = cerrar;
    } else if (ev.tipo === 'instalador') {
      est.textContent = and ? 'Descargado y comprobado. Confirma la instalación en la ventana de Android.' : 'Descargado y comprobado. Se abre el instalador.';
    } else if (ev.tipo === 'permiso') {
      trabajando = false;
      est.textContent = ev.mensaje;
      const go = modal.querySelector('.pa-go'); if (go) { go.disabled = false; go.textContent = 'Instalar'; }
    } else if (ev.tipo === 'error') {
      trabajando = false;
      err.hidden = false; err.textContent = ev.mensaje || 'Algo falló.';
      const go = modal.querySelector('.pa-go'); if (go) { go.disabled = false; go.textContent = 'Reintentar'; }
      modal.querySelectorAll('.pa-m input').forEach(i => { i.disabled = false; });
    }
  };
  oyentes.add(evento);

  const buscar = async (manual) => {
    const p = await llamar('buscar');
    if (!p.hay) return p;
    let omitida = null;
    try { omitida = localStorage.getItem(OMITIDA); } catch {}
    if (manual || omitida !== p.tag) mostrarPlan(p);
    return p;
  };

  // Búsqueda automática con el menú a la vista y sin partida: al abrir y luego cada 10 minutos que estés en el menú
  // (1.58: antes solo una vez al abrir; si la versión nueva aún se estaba publicando no volvía a mirar).
  if (disponible) {
    let ultima = 0;
    setInterval(() => {
      if (Date.now() - ultima < 10 * 60e3 || trabajando || (modal && !modal.hidden)) return;
      if (!document.querySelector('.jay-sidebar') || (window.__pbApp?.run && window.__pbApp.run.state !== 'over')) return;
      if (document.querySelector('.pb-tour:not([hidden])')) return;
      ultima = Date.now();
      buscar(false).catch(() => {});
    }, 4000);
  }

  // Pestaña "Actualizaciones" de Remaster.
  const pintar = async (cuerpo) => {
    if (!disponible) {
      // En el navegador no hay nada que instalar: se enseña la versión y lo último que cambió.
      const S = window.PB_SUB, ult = (S?.changelog || []).slice(0, 4);
      cuerpo.innerHTML = `<div class="rm-card"><p><b>Versión ${esc(S?.oficial || '')}, subversión ${esc(S?.sub || '')}</b></p><p class="rm-muted">Estás en el navegador, que siempre carga la última versión. La app de Android y la de Windows se actualizan desde aquí.</p></div>` +
        ult.map(c => `<div class="rm-card"><p><b>${esc(c.sub)} · ${esc(c.title)}</b></p>${(c.notes || []).map(n => `<p class="rm-muted">${esc(String(n[1]).replace(/\*\*/g, ''))}</p>`).join('')}</div>`).join('');
      return;
    }
    let e = {};
    try { e = and ? JSON.parse(window.AndroidMenu.actualizacionEstado()) : await llamar('estado'); } catch {}
    const mods = Object.values(e.modulos || {}).map(m => `<div class="rm-b${m.actualizado ? ' ok' : ''}"><i>${m.actualizado ? '★' : '·'}</i><span>${esc(m.nombre)}<small>${m.actualizado ? 'Actualizado por descarga' : 'El que trae la app'}</small></span></div>`).join('');
    cuerpo.innerHTML = `<div class="rm-card"><p><b>Versión ${esc(e.version)}</b>${e.sub ? ' - subversión ' + esc(e.sub) : ''}</p><p class="rm-muted">${e.actualizado ? `La app es la ${esc(e.base)}; lo demás llegó por actualizaciones.` : 'Todo es lo que trae la app.'} Busca al abrir el juego. Sin internet se juega igual.</p></div>
      <button type="button" class="rm-btn rm-buscar">Buscar actualizaciones</button><p class="rm-muted rm-res"></p>
      <div class="rm-game">Partes del juego</div>${mods}
      ${e.actualizado ? '<button type="button" class="rm-btn alt rm-rest">Volver a lo que trae la app</button>' : ''}`;
    const res = cuerpo.querySelector('.rm-res');
    cuerpo.querySelector('.rm-buscar').onclick = async () => {
      res.textContent = 'Buscando...';
      try { localStorage.removeItem(OMITIDA); const p = await buscar(true); res.textContent = p.hay ? '' : `Ya tienes la última versión publicada (${p.tag || ''}). Si acabas de crear una versión, tarda unos 15 minutos en compilarse y publicarse: vuelve a buscar luego.`; }
      catch (err) { res.textContent = err.message.includes('404') || err.message.includes('fetch') ? 'No se pudo comprobar (sin internet o la versión nueva aún se está publicando).' : err.message; }
    };
    const r = cuerpo.querySelector('.rm-rest');
    if (r) r.onclick = async () => {
      if (!r.dataset.seguro) { r.dataset.seguro = '1'; r.textContent = 'Pulsa otra vez para confirmar (las partidas no se tocan)'; return; }
      try { await llamar('restaurar'); await llamar('reiniciar'); } catch (err) { res.textContent = err.message; }
    };
  };

  window.PB_ACT = { disponible, buscar, pintar, llamar };
})();
