/* Subversión propia (moportor6, 1.34): Guardería, solo en PokéBonk Lite.
   Botón «🏡 Guardería» en el Modo historia (junto a los Anillos de Hoopa). Dejas a dos Pokémon de tu Liga: madre y
   padre. Tras 3 partidas terminadas, la madre pone un Huevo: eclosiona su forma base (si no la tenías, entra en tu Liga)
   y hereda un movimiento del padre, que podrá aprender desde el Nv. 5 (a partir del siguiente arranque del juego:
   compatibilidad.js lo añade al cargar los movimientos). Datos: profile.pbGuarde = { a, b, n }, localStorage
   'pb-herencia' = { especie: idMovimiento }. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const PARTIDAS = 3;
  const meta = () => window.__pbMeta;
  let PK = {}, LS = null, MV = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { for (const x of l) PK[x.id] = x; }).catch(() => {});
  const base = sp => { let x = PK[sp], n = 0; while (x?.evoFrom && n++ < 4) x = PK[x.evoFrom]; return x?.id ?? sp; };
  const datos = async () => {
    if (!LS) LS = await fetch('./data/learnsets.json').then(r => r.json()).catch(() => ({}));
    if (!Object.keys(MV).length) for (const m of await fetch('./data/moves.json').then(r => r.json()).catch(() => [])) MV[m.id] = m;
  };
  const H = () => window.PB_HISTORIA;

  const eclosionar = async () => {
    const m = meta(), p = m.profile, g = p.pbGuarde; if (!g?.a || !g?.b) return null;
    await datos();
    const hijo = base(g.a), lista = (LS[g.b] ?? []).map(x => x[0]).filter(id => MV[id]?.power > 0);
    const mov = lista[Math.floor(Math.random() * lista.length)];
    const nuevo = !p.league.includes(hijo);
    if (nuevo) { p.league.push(hijo); try { const f = m.family?.(hijo) ?? hijo; p.unlocked.includes(f) || p.unlocked.push(f); p.captured[f] = Date.now(); } catch {} }
    if (mov) { const her = JSON.parse(localStorage.getItem('pb-herencia') || '{}'); her[hijo] = mov; localStorage.setItem('pb-herencia', JSON.stringify(her)); }
    g.n = 0; try { window.PB_LOGROS?.cont('huevos'); m.save(); } catch {}
    return `🥚 ¡Ha nacido ${PK[hijo]?.name ?? hijo}${nuevo ? ' (nuevo en tu Liga)' : ''}!${mov ? ` Heredó ${MV[mov].name} de ${PK[g.b]?.name}: lo podrá aprender desde el Nv. 5 (al volver a abrir el juego).` : ''}`;
  };

  // Cuenta partidas terminadas.
  let visto = null;
  setInterval(async () => {
    const run = window.__pbRun, p = meta()?.profile, g = p?.pbGuarde;
    if (!run || !g?.a || !g?.b || run.state !== 'over' || visto === run || run.mode === 'duel' || run.__pbSala || run.__pbPrueba) return;
    visto = run; g.n = (g.n ?? 0) + 1;
    try { meta().save(); } catch {}
    if (g.n >= PARTIDAS) { const t = await eclosionar(); if (t) setTimeout(() => { try { window.__pbApp?.notice?.(t); run.ui.toast(t, null); } catch {} }, 3000); }
  }, 600);

  const pantalla = (paso = 0, a = null) => {
    const h = H(), p = meta()?.profile; if (!h || !p) return;
    const g = p.pbGuarde ??= {}, c = h.capa('kanto'), b = document.createElement('div'); b.className = 'hb';
    if (!paso) {
      b.innerHTML = `<button class="hx" aria-label="Cerrar">✕</button><h2>🏡 Guardería</h2>
<p class="sub">Deja a dos Pokémon: tras ${PARTIDAS} partidas terminadas, la <b>madre</b> pone un huevo de su forma base que <b>hereda un movimiento del padre</b>.</p>
${g.a && g.b ? `<div class="fila" style="align-items:center;gap:10px"><img src="./assets/portraits/${g.a}.png" style="width:56px;height:56px;border-radius:10px"> ♥ <img src="./assets/portraits/${g.b}.png" style="width:56px;height:56px;border-radius:10px"><span>Huevo: <b>${g.n ?? 0}/${PARTIDAS}</b> partidas</span></div>` : '<p>Está vacía.</p>'}
<div class="fila"><button class="hbt dejar">${g.a ? 'Cambiar pareja' : 'Dejar Pokémon'}</button><button class="hbt vol">Volver</button></div>`;
      b.querySelector('.dejar').onclick = () => pantalla(1);
    } else {
      b.innerHTML = `<h2>${paso === 1 ? 'Elige a la madre (de ella sale el huevo)' : 'Elige al padre (hereda uno de sus movimientos)'}</h2><div style="max-height:52vh;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">${[...p.league].sort((x, y) => x - y).filter(x => x !== a).map(sp => `<button class="hbt" data-sp="${sp}" style="display:flex;flex-direction:column;align-items:center"><img src="./assets/portraits/${sp}.png" alt="" loading="lazy" style="width:48px;height:48px">${h.nombrePk(sp)}</button>`).join('')}</div><div class="fila"><button class="hbt vol">Volver</button></div>`;
      b.querySelectorAll('[data-sp]').forEach(x => x.onclick = () => { const sp = +x.dataset.sp; if (paso === 1) pantalla(2, sp); else { p.pbGuarde = { a, b: sp, n: 0 }; try { meta().save(); } catch {} pantalla(0); } });
    }
    b.querySelector('.vol').onclick = () => (paso ? pantalla(0) : h.abrir());
    b.querySelector('.hx')?.addEventListener('click', () => h.abrir());
    c.append(b);
  };
  setInterval(() => {
    const f = document.querySelector('.pb-h .pb-hoopa');
    if (!f || f.querySelector('.pb-guarde')) return;
    const bt = document.createElement('button'); bt.className = 'hbt pb-guarde'; bt.textContent = '🏡 Guardería'; bt.onclick = () => pantalla(0); f.append(bt);
  }, 400);
})();
