/* Subversión propia: los Pokédólares (monedas de oro) que sobran al terminar una partida se guardan.
   Desde la 0.74 el ahorro NO entra en la partida siguiente (cada partida empieza con 0 ₽): solo se gasta fuera,
   en la tienda de Megas. En PokéBonk Lite (0.95) vuelve a entrar: empiezas con todo lo ahorrado. Lo de cada partida se va sumando a la hucha.
   No se usa en Duelos ni en Cooperativo, para no dar ventaja frente a otros jugadores. */
(() => {
  const BANK = 'pb-oro-guardado';
  const PEND = 'pb-oro-en-partida';
  const num = k => { try { return Math.max(0, Math.floor(Number(localStorage.getItem(k)) || 0)); } catch { return 0; } };
  const set = (k, v) => { try { localStorage.setItem(k, String(Math.max(0, Math.floor(v || 0)))); } catch {} };
  // Si la app se cerró en mitad de una partida, el oro que se llevó vuelve a la reserva.
  const pend = num(PEND);
  if (pend > 0) { set(BANK, num(BANK) + pend); set(PEND, 0); }
  window.PB_GOLD = {
    saved: () => num(BANK),
    // Al empezar: el ahorro se queda en la hucha (antes se llevaba a la partida).
    // PokéBonk Lite (0.95, por la Dificultad Remaster): vuelve lo de antes, el ahorro entra en la partida siguiente.
    take() {
      if (window.PB_EDICION !== 'lite') return 0;
      // 0.97: solo entra la mitad; la otra mitad se queda ahorrada (tienda de Megas, Laboratorio, siguientes partidas).
      const t = num(BANK), b = Math.floor(t / 2); set(PEND, b); set(BANK, t - b); return b;
    },
    // Al terminar: lo que sobra de la partida se suma a la hucha.
    put(g) { set(BANK, num(BANK) + Math.max(0, Math.floor(g || 0))); set(PEND, 0); },
    // Para gastar fuera de la partida (tienda de Megas).
    set(v) { set(BANK, v); }
  };

  // Laboratorio (0.76): cambiar oro guardado por Polvo Estelar, 10 ₽ = 1 de Polvo.
  const TASA = 10;
  const fmt = n => Math.floor(n).toLocaleString('es');
  const st = document.createElement('style');
  st.textContent = `.pb-lab-oro{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0 8px;padding:8px 12px;border-radius:14px;background:#fff6d8;color:#5b3a00;font:800 13px system-ui,sans-serif;box-shadow:0 3px 0 rgba(0,0,0,.12)}
.pb-lab-oro b{font-size:15px}.pb-lab-oro small{font-weight:700;color:#7a5a20}.pb-lab-oro .btn{padding:4px 12px!important;min-height:0!important;font-size:13px!important}`;
  document.head.append(st);
  const cambiar = (cant, caja) => {
    const meta = window.__pbMeta, oro = num(BANK);
    cant = Math.min(oro, cant) - (Math.min(oro, cant) % TASA);
    if (!meta || cant < TASA) return;
    const antes = meta.profile.stardust ?? 0, polvo = cant / TASA;
    set(BANK, oro - cant);
    meta.profile.stardust = antes + polvo;
    try { meta.save(); } catch {}
    // El Laboratorio enseña el Polvo que tenía al abrirse: se actualiza donde aparezca ese número.
    const scr = caja.closest('.screen');
    for (const el of scr?.querySelectorAll('*') ?? []) if (el.children.length === 0 && el.textContent.trim() === fmt(antes)) el.textContent = fmt(antes + polvo);
    pinta(caja);
  };
  const pinta = caja => {
    const oro = num(BANK);
    caja.replaceChildren();
    const t = document.createElement('span');
    t.innerHTML = `Oro guardado: <b>${fmt(oro)} ₽</b> <small>· ${TASA} ₽ = 1 de Polvo</small>`;
    caja.append(t);
    for (const [txt, c] of [[`Cambiar 100 ₽`, 100], [`Cambiar todo`, oro]]) {
      const b = document.createElement('button');
      b.className = 'btn small gold';
      b.textContent = txt;
      b.disabled = oro < Math.min(c, TASA) || oro < TASA;
      b.onclick = () => cambiar(c, caja);
      caja.append(b);
    }
  };
  setInterval(() => {
    const lab = document.querySelector('.screen.lab');
    if (!lab || lab.querySelector('.pb-lab-oro')) return;
    const head = lab.querySelector('.scr-head');
    if (!head) return;
    const caja = document.createElement('div');
    caja.className = 'pb-lab-oro';
    head.after(caja);
    pinta(caja);
  }, 500);
})();
