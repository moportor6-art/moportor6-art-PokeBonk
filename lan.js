/* Subversión propia: cooperativo en la misma Wi-Fi (sin internet ni cuenta).
   El juego ya trae el cooperativo completo, pero su sala vive en el servidor oficial y los jugadores se unen por WebRTC.
   Aquí:
   - El móvil anfitrión hace de servidor de sala: imita la API /coop (crear, unirse, sondeo, listo, mapa, empezar, chat...).
   - Los demás le hablan por la red local con el puente nativo del APK (PBLanNative: sockets TCP, búsqueda por UDP).
   - Los enlaces de la partida (rQ en el bundle) se cambian por PB_LAN.Link, que viaja por esa misma conexión
     (los invitados se hablan entre sí a través del anfitrión).
   El resto (sala, partida sincronizada, vuelta a la sala) es el cooperativo original del juego. */
(() => {
  const N = () => window.PBLanNative;
  const PING = 2000;
  const err = (message, status) => Object.assign(Error(message), { status });
  const rnd = n => Array.from(crypto.getRandomValues(new Uint8Array(n)), b => (b % 36).toString(36)).join('');
  const yo = (() => { try { let v = localStorage.getItem('pb.lan.id'); if (!v) { v = 'lan-' + rnd(10); localStorage.setItem('pb.lan.id', v); } return v; } catch { return 'lan-' + rnd(10); } })();
  const perfil = () => window.__pbMeta?.profile ?? {};

  const L = {
    modo: null,       // null | 'host' | 'guest'
    ip: '',           // IP de este móvil (anfitrión) o del anfitrión (invitado)
    me: yo,
    links: new Map(), // id del otro jugador -> Link
    conns: new Map(), // (anfitrión) conexión -> id del jugador
    ids: new Map(),   // (anfitrión) id del jugador -> conexión
    rpcs: new Map(),
    nrpc: 0,
    hallados: new Map(),
    alCambiar: null,
  };
  window.PB_LAN = L;
  L.disponible = () => !!N();
  L.enLan = () => !!L.modo;
  L.semilla = party => { let h = 2166136261; for (const c of String(party)) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };

  // ---------- transporte ----------
  const enviarA = (conn, obj) => { try { N()?.enviar(conn, JSON.stringify(obj)); } catch {} };
  // Mensaje de enlace hacia otro jugador: el anfitrión lo manda directo; el invitado, siempre al anfitrión (que reenvía).
  L.tx = (to, ch, d) => {
    if (L.modo === 'host') { const c = L.ids.get(to); if (c != null) enviarA(c, { t: 'ln', from: yo, to, ch, d }); }
    else if (L.modo === 'guest') enviarA(0, { t: 'ln', from: yo, to, ch, d });
  };
  const alLink = m => { const k = L.links.get(m.from); if (k) k.rx(m.ch, m.d); };

  L._rxN = (conn, lista) => { for (const s of lista) { let m; try { m = JSON.parse(s); } catch { continue; } try { L._rx(conn, m); } catch (e) { console.warn('[lan]', e); } } };
  L._rx = (conn, m) => {
    if (L.modo === 'host') {
      if (m.t === 'hola') { const viejo = L.ids.get(m.id); if (viejo != null && viejo !== conn) L.conns.delete(viejo); L.conns.set(conn, m.id); L.ids.set(m.id, conn); S.vuelve(m.id); return; }
      const de = L.conns.get(conn); if (!de) return;
      if (m.t === 'rpc') {
        S.op(de, m.op, m.a).then(v => enviarA(conn, { t: 'rpcR', id: m.id, v }), e => enviarA(conn, { t: 'rpcR', id: m.id, e: { message: e.message, status: e.status ?? 400 } }));
      } else if (m.t === 'ln') {
        m.from = de;
        if (m.to === yo) alLink(m); else { const c = L.ids.get(m.to); if (c != null) enviarA(c, m); }
      }
    } else if (L.modo === 'guest') {
      if (m.t === 'rpcR') { const p = L.rpcs.get(m.id); if (p) { L.rpcs.delete(m.id); clearTimeout(p.t); m.e ? p.no(err(m.e.message, m.e.status)) : p.si(m.v); } }
      else if (m.t === 'ln') alLink(m);
      else if (m.t === 'cerrada') S.perdida = m.motivo || 'La sala se ha cerrado.';
    }
  };
  L._ev = (tipo, conn, info) => {
    if (tipo === 'found') { const [ip, nombre] = String(info).split('|'); if (ip) { L.hallados.set(ip, { ip, nombre: nombre || ip, at: Date.now() }); L.alCambiar?.(); } return; }
    if (L.modo === 'host' && tipo === 'close') { const id = L.conns.get(conn); L.conns.delete(conn); if (id && L.ids.get(id) === conn) { L.ids.delete(id); S.fuera(id); L.links.get(id)?.set('failed'); } return; }
    if (L.modo === 'guest') {
      if (tipo === 'open') { enviarA(0, { t: 'hola', id: yo }); L.esperaAbrir?.si(); L.esperaAbrir = null; }
      if (tipo === 'close' || tipo === 'error') {
        L.esperaAbrir?.no(err(tipo === 'error' && info ? `No se pudo conectar con ${L.ip}.` : 'Se ha perdido la conexión con el anfitrión.', 410)); L.esperaAbrir = null;
        S.perdida = 'Se ha perdido la conexión con el anfitrión.';
        for (const p of L.rpcs.values()) { clearTimeout(p.t); p.no(err(S.perdida, 410)); }
        L.rpcs.clear();
        for (const k of L.links.values()) k.set('failed');
      }
    }
  };
  const rpc = (op, a) => new Promise((si, no) => {
    if (S.perdida) return no(err(S.perdida, 410));
    const id = ++L.nrpc;
    L.rpcs.set(id, { si, no, t: setTimeout(() => { L.rpcs.delete(id); no(err('El anfitrión no responde.', 504)); }, 15000) });
    enviarA(0, { t: 'rpc', id, op, a });
  });

  L.alojar = () => {
    if (L.modo === 'host') return L.ip;
    L.salir();
    const ip = N()?.servir(perfil().name || 'PokéBonk') || '';
    if (!ip) throw err('No se pudo abrir la sala. ¿Estás conectado a una Wi-Fi?', 0);
    L.modo = 'host'; L.ip = ip; S.perdida = null;
    return ip;
  };
  L.conectar = ip => new Promise((si, no) => {
    L.salir();
    L.modo = 'guest'; L.ip = ip; S.perdida = null;
    L.esperaAbrir = { si, no };
    setTimeout(() => { if (L.esperaAbrir) { L.esperaAbrir = null; L.salir(); no(err(`No se pudo conectar con ${ip}.`, 0)); } }, 8000);
    try { N().conectar(ip); } catch (e) { L.esperaAbrir = null; no(e); }
  });
  L.buscar = () => { try { N()?.buscar(); } catch {} };
  L.salir = () => {
    for (const k of [...L.links.values()]) k.close();
    try { N()?.cerrar(); } catch {}
    L.modo = null; L.conns.clear(); L.ids.clear(); L.rpcs.clear(); S.sala = null;
  };

  // ---------- sala (solo en el anfitrión) ----------
  const S = { sala: null, señales: [], chat: [], nsig: 0, nchat: 0, perdida: null, fuera_t: new Map() };
  const cambio = () => { if (S.sala) S.sala.version++; };
  const resp = id => ({
    room: structuredClone(S.sala), me: id,
    signals: S.señales.filter(s => s.to === id),
    chat: S.chat,
  });
  const miembro = (id, body = {}) => {
    const p = body.perfil ?? {};
    return { id, name: String(p.name || 'Entrenador').slice(0, 24), slot: 0, host: false, ready: false, species: body.species ?? null, skin: body.skin ?? null, avatar: p.avatar, frame: p.frame, title: p.title, guest: false };
  };
  const reordenar = () => { S.sala.members.forEach((m, i) => { m.slot = i; m.host = m.id === S.sala.host; }); };
  const deSala = (id, code) => {
    if (!S.sala || (code && code !== S.sala.code)) throw err('La sala ya no existe.', 404);
    const m = S.sala.members.find(x => x.id === id);
    if (!m) throw err(S.sala.echados?.includes(id) ? 'Te han echado de la sala.' : 'Ya no estás en la sala.', 403);
    return m;
  };
  S.vuelve = id => { clearTimeout(S.fuera_t.get(id)); S.fuera_t.delete(id); };
  // Si un invitado se desconecta, se le espera un poco antes de sacarlo de la sala.
  S.fuera = id => {
    if (!S.sala?.members.some(m => m.id === id)) return;
    S.fuera_t.set(id, setTimeout(() => { if (S.sala && !L.ids.has(id)) { S.sala.members = S.sala.members.filter(m => m.id !== id); reordenar(); cambio(); } }, S.sala.state === 'started' ? 30000 : 8000));
  };
  const OPS = {
    info() { if (!S.sala) throw err('Ese móvil no tiene ninguna sala abierta ahora mismo.', 404); return { code: S.sala.code }; },
    coopCreate(id, [, body]) {
      S.señales = []; S.chat = []; S.nsig = 0; S.nchat = 0;
      S.sala = { code: 'W' + rnd(4).toUpperCase(), host: id, members: [], state: 'lobby', party: '', version: 1, pub: 0, want: 4, biome: body?.biome || 'forest', tier: 0, votes: null, leadLeft: null, anyMap: false, echados: [] };
      S.sala.members.push(miembro(id, body)); reordenar();
      return resp(id);
    },
    coopJoin(id, [, code, body]) {
      if (!S.sala) throw err('No hay ninguna sala abierta en este móvil.', 404);
      if (S.sala.echados.includes(id)) throw err('Te han echado de esta sala.', 403);
      if (!S.sala.members.some(m => m.id === id)) {
        if (S.sala.members.length >= (S.sala.want || 4)) throw err('La sala está llena.', 409);
        if (S.sala.state === 'started') throw err('La partida ya ha empezado. Espera a que vuelvan a la sala.', 409);
        S.sala.members.push(miembro(id, body)); reordenar(); cambio();
      }
      return resp(id);
    },
    coopPoll(id, [, code, after = 0, chatAfter = 0]) {
      deSala(id, code);
      return { ...resp(id), signals: S.señales.filter(s => s.to === id && s.id > after), chat: S.chat.filter(c => c.id > chatAfter) };
    },
    coopSignal(id, [, code, to, kind, data]) {
      deSala(id, code);
      S.señales.push({ id: ++S.nsig, from: id, to, kind, data });
      if (S.señales.length > 200) S.señales.splice(0, S.señales.length - 200);
      return {};
    },
    coopMe(id, [, code, body]) {
      const m = deSala(id, code);
      if (body.species !== undefined) m.species = body.species;
      if (body.skin !== undefined) m.skin = body.skin;
      if (body.ready !== undefined) m.ready = !!body.ready;
      cambio(); return resp(id);
    },
    coopSettings(id, [, code, body]) {
      const m = deSala(id, code);
      if (!m.host) throw err('Solo el anfitrión elige el mapa.', 403);
      if (body.biome) S.sala.biome = body.biome;
      if (body.tier != null) S.sala.tier = body.tier;
      cambio(); return resp(id);
    },
    coopOpenSeats(id, [, code, on, size]) {
      deSala(id, code);
      if (size >= 2 && size <= 4) S.sala.want = Math.max(size, S.sala.members.length);
      cambio(); return resp(id);
    },
    coopChat(id, [, code, text]) {
      deSala(id, code);
      S.chat.push({ id: ++S.nchat, from: id, text: String(text).slice(0, 200), at: Date.now() });
      if (S.chat.length > 80) S.chat.shift();
      return {};
    },
    coopKick(id, [, code, user]) {
      const m = deSala(id, code);
      if (!m.host || user === id) throw err('Solo el anfitrión puede echar.', 403);
      S.sala.members = S.sala.members.filter(x => x.id !== user); S.sala.echados.push(user);
      reordenar(); cambio(); return resp(id);
    },
    coopVote(id, [, code]) { deSala(id, code); return resp(id); },
    coopStart(id, [, code]) {
      const m = deSala(id, code);
      if (!m.host) throw err('Solo el anfitrión puede empezar.', 403);
      if (S.sala.members.length < 2) throw err('Hace falta al menos otro entrenador.', 409);
      if (S.sala.members.some(x => !x.host && !x.ready)) throw err('Esperando a que todos estén listos.', 409);
      S.sala.state = 'started'; S.sala.party = 'lan-' + rnd(8) + Date.now().toString(36);
      cambio(); return resp(id);
    },
    coopAgain(id, [, code, party]) {
      deSala(id, code);
      if (S.sala.state === 'started' && S.sala.party === party) {
        S.sala.state = 'lobby';
        for (const x of S.sala.members) if (!x.host) x.ready = false;
        cambio();
      }
      return resp(id);
    },
    coopLeave(id, [, code]) {
      if (!S.sala || (code && code !== S.sala.code)) return {};
      if (id === S.sala.host) {
        // El anfitrión cierra la sala: los demás lo notan en su próximo sondeo.
        for (const c of L.ids.values()) enviarA(c, { t: 'cerrada', motivo: 'El anfitrión ha cerrado la sala.' });
        S.sala = null;
      } else { S.sala.members = S.sala.members.filter(m => m.id !== id); reordenar(); cambio(); }
      return {};
    },
  };
  S.op = async (id, op, a) => { const f = OPS[op]; if (!f) throw err('Operación no disponible en la red local.', 400); return f(id, a ?? []); };
  L.sala = () => S.sala;

  // ---------- API que ve el juego (la llama el backend local) ----------
  const con = (op, a) => {
    if (!L.modo) return Promise.reject(err('No hay conexión con el servidor.', 0));
    // Los objetos del juego (la sala) no viajan: solo datos simples.
    const args = a.map(v => (v && typeof v === 'object' && (v.members || v.token)) ? null : v);
    return L.modo === 'host' ? S.op(yo, op, args).then(v => structuredClone(v)) : rpc(op, args);
  };
  const conPerfil = body => ({ ...(body ?? {}), perfil: { name: perfil().name, avatar: perfil().avatar, frame: perfil().frame, title: perfil().title } });
  L.api = {
    coopCreate: (acc, body) => con('coopCreate', [null, conPerfil(body)]),
    coopJoin: (acc, code, body) => con('coopJoin', [null, code, conPerfil(body)]),
    coopPoll: (acc, code, after, chatAfter) => con('coopPoll', [null, code, after, chatAfter]),
    coopSignal: (acc, code, to, kind, data) => con('coopSignal', [null, code, to, kind, data]),
    coopMe: (acc, code, body) => con('coopMe', [null, code, body]),
    coopSettings: (acc, code, body) => con('coopSettings', [null, code, body]),
    coopOpenSeats: (acc, code, on, size) => con('coopOpenSeats', [null, code, on, size]),
    coopChat: (acc, code, text) => con('coopChat', [null, code, text]),
    coopKick: (acc, code, user) => con('coopKick', [null, code, user]),
    coopVote: (acc, code) => con('coopVote', [null, code]),
    coopStart: (acc, code) => con('coopStart', [null, code]),
    coopAgain: (acc, code, party) => con('coopAgain', [null, code, party]),
    coopLeave: (acc, code) => con('coopLeave', [null, code]).catch(() => ({})),
    coopIce: async () => ({ servers: [] }),
    coopAccess: async () => ({ play: true }),
    coopSeeking: async () => ({ n: 0 }),
    coopInvites: async () => [],
    coopInvite: async () => { throw err('En la red local, el otro móvil se une desde Cooperativo → Unirse.', 400); },
    coopDecline: async () => ({}),
  };

  // ---------- enlace de partida (sustituye a la conexión WebRTC) ----------
  const b64 = buf => { const u = new Uint8Array(buf); let s = ''; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); };
  const deB64 = s => { const b = atob(s), u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u.buffer; };
  L.Link = class {
    constructor(id, offerer, ev) {
      Object.assign(this, { id, offerer, ev, mode: 'lan', attempt: 0, state: 'connecting', rtt: 0, relayed: false, pend: [], pings: 0, lastRx: performance.now(), discAt: 0, wasOpen: false, nohope: false, born: performance.now() });
      L.links.get(id)?.close();
      L.links.set(id, this);
      this.hola = setInterval(() => { if (this.state === 'connecting') L.tx(id, 'h', 0); }, 400);
      L.tx(id, 'h', 0);
      this.timer = setTimeout(() => { if (this.state === 'connecting') this.set('failed'); }, 45000);
      this.pingT = setInterval(() => {
        if (this.state !== 'open') return;
        const t = performance.now(); this.pend.push(t); if (this.pend.length > 30) this.pend.shift();
        L.tx(id, 'p', t);
      }, PING);
      // Así el otro lado crea su enlace (el cooperativo lo hace al recibir una «oferta»).
      if (offerer) ev.signal(id, 'offer', 'lan');
    }
    rx(ch, d) {
      this.lastRx = performance.now();
      if (this.state === 'connecting') { this.set('open'); L.tx(this.id, 'h', 0); }
      if (this.state !== 'open') return;
      if (ch === 'c') this.ev.ctl?.(this.id, d);
      else if (ch === 's') this.ev.snap?.(this.id, deB64(d));
      else if (ch === 'p') L.tx(this.id, 'q', d);
      else if (ch === 'q') { this.rtt = performance.now() - d; const i = this.pend.indexOf(d); if (i >= 0) this.pend.splice(0, i + 1); }
    }
    onSignal(kind) { if (kind === 'offer') this.ev.signal(this.id, 'answer', 'lan'); }
    set(e) {
      if (this.state === e || this.state === 'closed') return;
      this.state = e;
      if (e !== 'connecting') clearTimeout(this.timer);
      if (e === 'open') this.wasOpen = true;
      this.ev.state?.(this.id, e);
    }
    sendCtl(o) { if (this.state !== 'open') return false; L.tx(this.id, 'c', o); return true; }
    sendSnap(buf) { if (this.state !== 'open') return false; L.tx(this.id, 's', b64(buf)); return true; }
    get backlog() { return 0; }
    get lag() { return this.state === 'open' ? Math.max(this.rtt, this.pend.length ? performance.now() - this.pend[0] : 0) : 0; }
    get idle() { return (performance.now() - this.lastRx) / 1e3; }
    summary() { return `lan ${this.state} rtt${Math.round(this.rtt)}`; }
    note() {}
    checkRelay() {}
    // El juego da un enlace por muerto si pasa 14 s sin noticias (p. ej. mientras el otro móvil carga la partida).
    // Aquí la conexión es la de la Wi-Fi: mientras siga abierta, se espera hasta 60 s antes de rendirse.
    fail() {
      if (this.state !== 'open' && this.state !== 'connecting') return;
      if (L.modo && !S.perdida && this.idle < 60 && (L.modo === 'guest' || L.ids.has(this.id))) return;
      this.set('failed');
    }
    close() { clearTimeout(this.timer); clearInterval(this.hola); clearInterval(this.pingT); this.state = 'closed'; if (L.links.get(this.id) === this) L.links.delete(this.id); }
  };

  // ---------- pantalla «Cooperativo en tu Wi-Fi» ----------
  const st = document.createElement('style');
  st.textContent = `.pb-lan-body{display:flex;gap:16px;flex-wrap:wrap;align-items:stretch;justify-content:center;overflow-y:auto;min-height:0;flex:1;padding:6px 4px 12px}
.pb-lan-card{flex:1 1 300px;max-width:430px;background:rgba(255,255,255,.95);border-radius:22px;padding:16px 18px;display:flex;flex-direction:column;gap:10px;color:#2a2440;box-shadow:0 6px 0 rgba(42,36,64,.18)}
.pb-lan-card h2{margin:0;font-size:21px;font-family:var(--font-title)}
.pb-lan-card p{margin:0;font-size:13px;line-height:1.35;color:#4a4366}
.pb-lan-card .btn{width:100%}
.pb-lan-ip{font:900 22px/1 var(--font-title);letter-spacing:1px;color:#1f7a4a;text-align:center;padding:8px;border-radius:12px;background:#e6f7ee}
.pb-lan-list{display:flex;flex-direction:column;gap:6px;max-height:150px;overflow-y:auto}
.pb-lan-list button{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px 12px;border-radius:12px;border:2px solid #d9d3ee;background:#f6f3ff;color:#2a2440;font:800 14px system-ui,sans-serif;cursor:pointer}
.pb-lan-list button small{color:#6b6589;font-weight:700}
.pb-lan-row{display:flex;gap:8px}.pb-lan-row input{flex:1;min-width:0;padding:10px 12px;border-radius:12px;border:2px solid #d9d3ee;font:800 16px system-ui,sans-serif;color:#2a2440;background:#fff}
.pb-lan-row .btn{width:auto}
.pb-lan-err{color:#b0392b!important;font-weight:800;min-height:1em}
.pb-lan-tip{font-size:12px!important;color:#6b6589!important}
@media (max-height:500px){.pb-lan-card{padding:10px 14px;gap:6px}.pb-lan-card h2{font-size:18px}.pb-lan-ip{font-size:18px;padding:4px}.pb-lan-card .btn.big{min-height:44px;padding-top:6px;padding-bottom:6px;font-size:18px}.pb-lan-body{padding-bottom:4px}}
.mm-modes .mm-pair>.mm-item.endless{flex-direction:row!important;justify-content:flex-start!important;align-items:center!important;text-align:left!important;gap:8px!important;padding:3px 10px 3px 6px!important;min-height:0!important}
.mm-modes .mm-pair>.mm-item.endless .mm-ic{width:32px!important;height:32px!important;flex:none!important;margin:0!important}
.mm-modes .mm-pair>.mm-item.endless .mm-ic img{width:28px!important;height:28px!important}
.mm-modes .mm-pair>.mm-item.endless .mm-tx{align-items:flex-start!important;min-width:0}
.mm-modes .mm-pair>.mm-item.endless b{font-size:14px!important;letter-spacing:-.2px;white-space:nowrap}
.mm-modes .mm-pair>.mm-item.endless small{font-size:10px!important;white-space:nowrap}
.mm-modes .mm-pair>.mm-item.coop .mm-beta{display:none}
.cp.lobby .pb-lan-wifi{margin-left:8px;padding:2px 10px;border-radius:99px;background:#1f9a6a;color:#fff;font:800 12px system-ui,sans-serif;white-space:nowrap}`;
  document.head.append(st);
  const el = (tag, attrs = {}, ...kids) => { const e = document.createElement(tag); for (const [k, v] of Object.entries(attrs)) k.startsWith('on') ? e.addEventListener(k.slice(2), v) : e.setAttribute(k, v); e.append(...kids.filter(x => x != null)); return e; };

  // acts: { crear(), unirse(code), volver(), pantalla(titulo, sub, back, ...hijos) } los da el bundle.
  L.menu = (app, acts) => {
    const fallo = el('p', { class: 'pb-lan-err', role: 'alert' });
    const ocupado = (b, on) => { b.disabled = on; b.style.opacity = on ? '.6' : ''; };
    const mal = e => { fallo.textContent = e.message || String(e); };
    let ipPropia = '';
    try { ipPropia = N()?.ip?.() || ''; } catch {}
    const crear = el('button', { class: 'btn big green', onclick: async () => {
      ocupado(crear, true); fallo.textContent = '';
      try { L.alojar(); await acts.crear(); } catch (e) { L.salir(); mal(e); ocupado(crear, false); }
    } }, 'Crear sala en este móvil');
    const lista = el('div', { class: 'pb-lan-list' });
    const entrar = async (ip, b) => {
      ocupado(b, true); fallo.textContent = '';
      try {
        await L.conectar(ip);
        const { code } = await rpc('info', []);
        await acts.unirse(code);
      } catch (e) { L.salir(); mal(e); ocupado(b, false); }
    };
    const pinta = () => {
      if (!lista.isConnected && L.alCambiar === pinta) return;
      const ahora = Date.now(), vivos = [...L.hallados.values()].filter(h => ahora - h.at < 8000);
      lista.replaceChildren(...(vivos.length ? vivos.map(h => el('button', { onclick: e => entrar(h.ip, e.currentTarget) }, el('span', {}, h.nombre), el('small', {}, h.ip))) : [el('p', { class: 'pb-lan-tip' }, 'Buscando salas en tu Wi-Fi…')]));
    };
    L.alCambiar = pinta;
    const campo = el('input', { inputmode: 'decimal', placeholder: '192.168.1.25', 'aria-label': 'IP del anfitrión' });
    try { campo.value = localStorage.getItem('pb.lan.ultima') || ''; } catch {}
    const ir = el('button', { class: 'btn blue', onclick: e => { const ip = campo.value.trim(); if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) { mal('Escribe la IP que sale en el móvil anfitrión, por ejemplo 192.168.1.25.'); return; } try { localStorage.setItem('pb.lan.ultima', ip); } catch {} entrar(ip, e.currentTarget); } }, 'Unirse');
    const anf = el('div', { class: 'pb-lan-card' },
      el('h2', {}, 'Anfitrión'),
      el('p', {}, 'Crea la sala en este móvil. Elegirás el mapa y empezarás la partida cuando el otro esté listo.'),
      ipPropia ? el('div', { class: 'pb-lan-ip' }, ipPropia) : null,
      ipPropia ? el('p', { class: 'pb-lan-tip' }, 'Esta es la dirección de este móvil, por si el otro no lo encuentra solo.') : null,
      crear);
    const inv = el('div', { class: 'pb-lan-card' },
      el('h2', {}, 'Unirse'),
      el('p', {}, 'Toca la sala del otro móvil cuando aparezca, o escribe su dirección.'),
      lista,
      el('div', { class: 'pb-lan-row' }, campo, ir));
    const cuerpo = el('div', { class: 'pb-lan-body' }, anf, inv);
    const pie = el('div', { style: 'padding:0 8px' }, fallo, el('p', { class: 'pb-lan-tip', style: 'text-align:center' }, 'Los dos móviles en la misma Wi-Fi y con la misma subversión del juego. No hace falta internet ni cuenta.'));
    acts.pantalla('Cooperativo en tu Wi-Fi', 'De 2 a 4 entrenadores · sin internet', () => { L.alCambiar = null; clearInterval(t); L.salir(); acts.volver(); }, cuerpo, pie);
    pinta();
    L.buscar();
    const t = setInterval(() => { if (!cuerpo.isConnected) { clearInterval(t); return; } L.buscar(); pinta(); }, 2500);
  };

  // En la sala: chapita con la IP del anfitrión, para que se vea a qué Wi-Fi está unido cada uno.
  setInterval(() => {
    const t = document.querySelector('.cp.lobby .scr-title');
    if (!t) return;
    let w = t.querySelector('.pb-lan-wifi');
    if (!L.modo) { w?.remove(); return; }
    if (!w) { w = el('span', { class: 'pb-lan-wifi' }); t.append(w); }
    const txt = 'Wi-Fi · ' + L.ip;
    if (w.textContent !== txt) w.textContent = txt;
  }, 700);
})();
