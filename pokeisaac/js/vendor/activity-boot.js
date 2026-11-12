// PokéIsaac como ACTIVIDAD DE DISCORD (05/11/2026). Va ANTES del paquete del juego (no se empaqueta con él) y solo hace algo si Discord abre la
// página dentro de su iframe (la dirección lleva ?frame_id=...&instance_id=...) o si se prueba con el emulador local (?actstub=1).
// Dentro de una Actividad la página vive en <id>.discordsays.com y SOLO puede hablar con ese mismo origen: todo lo demás pasa por el proxy
// de Discord, `/.proxy/<prefijo>/...`, que se configura en el Developer Portal > Activities > URL Mappings (ver docs/discord-actividad.md):
//   /     -> pokeisaac.com                            (la propia web: index.html)
//   /supa -> bfwnvevcyrwwukokooty.supabase.co         (cuentas, base de datos, tiempo real y archivos de respaldo)
//   /pa   -> pi-assets.pages.dev                      (paquetes de iconos, retratos, música, sonidos y miniaturas)
//   /ps   -> pi-sprites.pages.dev                     (hojas de sprites)
//   /coop -> pokeisaac-coop-production.up.railway.app (servidor del cooperativo, Socket.IO por WebSocket)
// Aquí se reescriben las direcciones que el juego usa (recursos, Supabase, cooperativo) para que apunten a esos prefijos ANTES de que arranque el
// resto, se apaga lo que no funciona dentro de Discord (WebRTC, inicio de sesión con Google o Discord, ventanas nuevas) y se carga el SDK.
(function () {
  'use strict';
  var q = new URLSearchParams(location.search);
  var stub = q.get('actstub') === '1';
  if (!q.get('frame_id') && !stub) return;
  var APP = '1563706637959692298';
  var P = location.origin + '/.proxy';
  var A = window.PI_ACT = { app: APP, proxy: P, stub: stub, supa: P + '/supa', coop: P + '/coop', platform: q.get('platform') || '', log: [] };
  // Diagnóstico remoto: lo que pase dentro de Discord (no hay consola) llega a pi_client_errors como «warn: activity: ...».
  A.note = function (msg) { try { A.log.push(msg); console.warn('activity: ' + msg); } catch (e) { /* nada */ } };
  try { document.documentElement.classList.add('pi-activity'); } catch (e) { /* nada */ }

  // Recursos: cada carpeta con su prefijo del proxy; el respaldo de Supabase también.
  var cur = window.PI_ASSETS;
  if (cur && cur.base) {
    var bases = {};
    Object.keys(cur.bases || {}).forEach(function (k) { bases[k] = P + (/pi-sprites/.test(cur.bases[k]) ? '/ps/' : '/pa/'); });
    window.PI_ASSETS = { base: P + '/supa/storage/v1/object/public/pokeisaac-assets/', ver: cur.ver, vers: cur.vers || null, bases: bases, mirror: null, packv: cur.packv || null, packsOnBase: true };
  }
  // Cooperativo: un solo servidor (Europa) por el proxy; el cliente de Socket.IO lleva la ruta con `path` (js/net/relay.js).
  window.PI_COOP_URL = A.coop; window.PI_COOP_REGIONS = { eu: A.coop };
  delete window.PI_ICE;

  // La fuente pixelada del juego viene de Google Fonts (bloqueada dentro de Discord): se sirve la copia local.
  var st = document.createElement('style');
  st.textContent = '@font-face{font-family:"Press Start 2P";src:url(fonts/PressStart2P-Regular.ttf) format("truetype");font-display:block}';
  document.head.appendChild(st);

  // Si algo se bloquea por la política de seguridad de Discord, queda apuntado.
  document.addEventListener('securitypolicyviolation', function (e) { A.note('CSP bloqueó ' + String(e.blockedURI).slice(0, 120) + ' (' + e.violatedDirective + ')'); });

  // El SDK solo se carga dentro de Discord (158 KB); el emulador local no lo necesita.
  var v = encodeURIComponent(window.PI_BUILD || 'dev');
  if (!stub) document.write('<script src="js/vendor/discord-sdk-2.5.0.js"><\/script>');
  document.write('<script src="js/vendor/activity-init.js?v=' + v + '"><\/script>');
})();
