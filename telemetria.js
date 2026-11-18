/* Subversión propia (moportor6, 1.16): telemetría de la muerte, solo en PokéBonk Lite.
   Durante la partida guarda los últimos 30 s de lo que le pasa a tu vida: cada golpe (quién, tipo, daño bruto y PS
   perdidos), los estados que te ponen, y cualquier bajada de PS que no venga de un golpe. Al caer, la ventana de
   resultados trae el botón «📋 Copiar informe»: copia el texto para pegarlo en el chat (si el portapapeles no
   funciona, lo muestra seleccionado para copiarlo a mano).
   Ganchos: player.hurt e inflict (envueltos) y una muestra de los PS cada 0,1 s. */
(() => {
  if (window.PB_EDICION !== 'lite') return;
  const VENTANA = 30;
  // 1.17: errores del juego (si un fotograma falla 60 veces seguidas, la partida termina «por error»).
  let ultErr = null;
  const ce = console.error.bind(console);
  console.error = (...a) => {
    try { const e = a.find(x => x instanceof Error); if (e || /pokebonk/i.test(String(a[0]))) ultErr = `${a.filter(x => !(x instanceof Error)).join(' ')} ${e ? `${e.name}: ${e.message}\n${(e.stack ?? '').split('\n').slice(1, 7).join('\n')}` : ''}`.trim(); } catch {}
    return ce(...a);
  };
  addEventListener('error', e => { try { ultErr = `${e.message}\n${(e.error?.stack ?? '').split('\n').slice(1, 7).join('\n')}`; } catch {} });
  let NOM = {};
  fetch('./data/pokemon.json').then(r => r.json()).then(l => { NOM = Object.fromEntries(l.map(x => [x.id, x.name])); }).catch(() => {});
  const nom = sp => NOM[sp] ?? `#${sp}`;
  const reloj = t => `${Math.floor(t / 60)}:${(t % 60).toFixed(1).padStart(4, '0')}`;
  const r1 = n => Math.round(n * 10) / 10;

  const T = run => run.__pbTel ??= { log: [], hp: null, enGolpe: false, informe: null };
  const anota = (run, txt) => {
    const d = T(run), t = run.time ?? 0;
    d.log.push([t, txt]);
    while (d.log.length && d.log[0][0] < t - VENTANA) d.log.shift();
    if (d.log.length > 400) d.log.splice(0, d.log.length - 400);
  };
  const quien = (run, src) => {
    const E = run.enemies;
    if (!(src >= 0) || !E?.species?.[src]) return 'escenario / efecto';
    const f = E.flags[src], x = [];
    if (f & 4) x.push('jefe'); if (f & 2) x.push('alfa'); if (f & 1) x.push('élite');
    if (E.pbSid?.[src]) x.push('Mega'); if ((E.scale?.[src] ?? 1) >= 2) x.push('Dynamax');
    if (window.PB_ULTRA?.es?.(run, src)) x.push('Ultraente');
    return nom(E.species[src]) + (x.length ? ` (${x.join(', ')})` : '');
  };

  const informe = run => {
    const p = run.player, s = p.stats ?? {}, d = T(run);
    const items = [...(p.items?.entries?.() ?? [])].map(([k, n]) => n > 1 ? `${k}×${n}` : k).join(', ') || '—';
    const modo = run.__hist != null ? `historia${run.__gym?.l?.nombre ? ` (${run.__gym.l.nombre})` : ''}` : run.mode;
    const cab = [
      `PokéBonk Lite · Subversión ${window.PB_SUB?.sub ?? '?'} · ${new Date().toLocaleString('es-MX')}`,
      `Pokémon: ${nom(p.speciesId)} Nv. ${p.level} · PS máx. ${Math.round(p.maxHp)} · armadura ${r1(s.armor ?? 0)} · regen ${r1(s.regen ?? 0)} · curación ×${r1(s.healing ?? 1)}${window.PB_TANQUE?.(p.speciesId) ? ` · ${['', 'Tanque', 'Muralla'][window.PB_TANQUE(p.speciesId)]}` : ''}`,
      `Partida: ${modo} · mapa ${run.biome?.id ?? '?'} · zona ${run.stage ?? '?'} · ${reloj(run.time ?? 0)} · bajas ${run.stats?.kills ?? 0} · dificultad ${run.tier ?? 0}`,
      `Objetos: ${items}`,
      run.__pbMuerte ? `Aviso: ${run.__pbMuerte}` : '',
      run.endHow === 'error' || ultErr ? `Error: ${ultErr ?? '—'}${run.endHow === 'error' ? ' · LA PARTIDA TERMINÓ POR ERROR' : ''}` : '',
      `— Últimos ${VENTANA} s —`
    ].filter(Boolean);
    return cab.concat(d.log.map(([t, x]) => `[${reloj(t)}] ${x}`)).join('\n');
  };
  window.PB_TELEMETRIA = () => { const run = window.__pbRun; return run ? informe(run) : ''; };

  const copiar = async (txt, b, donde) => {
    let ok = false;
    try { await navigator.clipboard.writeText(txt); ok = true; } catch {}
    if (!ok) try {
      const ta = document.createElement('textarea'); ta.value = txt; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.append(ta); ta.select(); ok = document.execCommand('copy'); ta.remove();
    } catch {}
    if (ok) { b.textContent = '✅ Informe copiado: pégalo en el chat'; return; }
    let ta = donde.querySelector('.pb-tel-txt');
    if (!ta) { ta = document.createElement('textarea'); ta.className = 'pb-tel-txt'; ta.readOnly = true; ta.style.cssText = 'display:block;width:92%;height:120px;margin:0 auto 6px;font:11px monospace'; b.after(ta); }
    ta.value = txt; ta.focus(); ta.select();
    b.textContent = 'Mantén pulsado el texto → Copiar';
  };
  // Si la partida terminó por error, un aviso fijo (sobrevive a la vuelta al menú) para copiar el informe.
  let avisado = null;
  const avisoError = (run, txt) => {
    if (avisado === run) return; avisado = run;
    const w = document.createElement('div');
    w.className = 'pb-tel-err';
    w.style.cssText = 'position:fixed;left:50%;top:10px;transform:translateX(-50%);z-index:2147483647;background:#3a0a0a;color:#fff;border:2px solid #ff6a5a;border-radius:12px;padding:8px 12px;font:700 13px system-ui,sans-serif;max-width:92vw;text-align:center;box-shadow:0 4px 18px rgba(0,0,0,.5)';
    w.innerHTML = '<div>⚠️ La partida terminó por un error del juego</div>';
    const b = document.createElement('button'); b.className = 'btn'; b.textContent = '📋 Copiar informe del error'; b.style.margin = '6px 4px 0';
    const x = document.createElement('button'); x.className = 'btn'; x.textContent = 'Cerrar'; x.style.margin = '6px 4px 0';
    b.onclick = e => { e.stopPropagation(); copiar(txt, b, w); };
    x.onclick = e => { e.stopPropagation(); w.remove(); };
    w.append(b, x); document.body.append(w);
  };

  setInterval(() => {
    const run = window.__pbRun, p = run?.player;
    if (!run || !p || run.mode === 'duel') return;
    if (run.endHow === 'error') avisoError(run, informe(run));
    if (!p.__pbTel && typeof p.hurt === 'function') {
      const h = p.hurt;
      p.hurt = function (dmg, tipo, src, ...a) {
        const antes = this.hp, d = T(run);
        d.enGolpe = true;
        let r;
        try { r = h.call(this, dmg, tipo, src, ...a); } finally { d.enGolpe = false; }
        try {
          const perdio = antes - this.hp;
          if (perdio > 0 || r) anota(run, `Golpe de ${quien(run, src)}${tipo ? ` · tipo ${tipo}` : ''} · bruto ${r1(dmg)} → −${r1(perdio)} PS (${r1(antes)} → ${r1(this.hp)})${this.dead || this.hp <= 0 ? ' · DEBILITADO' : ''}`);
          else if (dmg > 0) anota(run, `Golpe esquivado o bloqueado de ${quien(run, src)} (bruto ${r1(dmg)})`);
          d.hp = this.hp;
        } catch {}
        return r;
      };
      if (typeof p.inflict === 'function') {
        const inf = p.inflict;
        p.inflict = function (e, ...a) { const r = inf.call(this, e, ...a); try { if (r !== false) anota(run, `Estado recibido: ${e}`); } catch {} return r; };
      }
      p.__pbTel = true;
    }
    // Bajadas de PS que no vienen de un golpe (veneno, quemadura, Vida Esfera, efectos…).
    const d = T(run);
    if (d.hp != null && !d.enGolpe && run.state !== 'over') {
      const dif = p.hp - d.hp;
      if (dif < -0.5) anota(run, `PS −${r1(-dif)} sin golpe (${r1(d.hp)} → ${r1(p.hp)})${p.dead || p.hp <= 0 ? ' · DEBILITADO' : ''}`);
      else if (dif > p.maxHp * 0.08) anota(run, `Curación +${r1(dif)} PS`);
    }
    d.hp = p.hp;
    if ((run.state === 'over' || run.state === 'dead') && !d.informe && (p.dead || p.hp <= 0)) d.informe = informe(run);
    // Botón en la ventana de resultados.
    const m = run.ui?.modalEl;
    if (d.informe && run.state === 'over' && m?.isConnected && !m.querySelector('.pb-tel')) {
      const b = document.createElement('button');
      b.className = 'btn pb-tel';
      b.textContent = '📋 Copiar informe';
      b.style.cssText = 'margin:0 auto 6px;display:block';
      b.onclick = e => { e.stopPropagation(); copiar(d.informe, b, m); };
      const ref = m.querySelector('.pb-muerte');
      if (ref) ref.after(b); else (m.querySelector('.panel') ?? m).prepend(b);
    }
  }, 100);
})();
