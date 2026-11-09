/*
 * Service worker de la app instalada (PWA). Hace falta para que el móvil ofrezca «Instalar» y, de paso, guarda en el
 * teléfono lo que pesa: el código, los sprites, la música y los biomas.
 * - La página (index.html) va siempre primero a la red: una versión nueva se ve al momento. Sin red, la última guardada.
 * - El código de Vite lleva un hash en el nombre (no cambia nunca): primero lo guardado. Al llegar una página nueva se
 *   borran las versiones viejas de cada archivo (mismo nombre, otro hash), para que la caché no crezca con cada despliegue.
 * - Sprites, música, biomas e iconos no llevan hash: se sirve lo guardado y se refresca por detrás, así que un archivo
 *   regenerado llega en la siguiente carga.
 * - Menos el manifest de sprites, que dice qué hojas hay: primero la red (preguntando si ha cambiado). Uno viejo deja las
 *   especies nuevas como Eevee. Si la red no contesta en MANIFEST_WAIT_MS, o no hay, lo guardado (y se refresca por detrás).
 *   Con ?fresh (la página ha visto que lo guardado es viejo), solo la red, y se guarda como el normal.
 * - /api, /game y /admin nunca pasan por aquí (ni las peticiones a otros dominios, ni los WebSocket).
 * Para tirar todo lo guardado al desplegar un cambio incompatible, sube VERSION.
 */
const VERSION = 1;
const PAGES = `pokedive-pages-v${VERSION}`;
const CODE = `pokedive-code-v${VERSION}`;
const MEDIA = `pokedive-media-v${VERSION}`;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("pokedive-") && ![PAGES, CODE, MEDIA].includes(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});

/** Archivo de Vite con hash: /assets/index-BxY12abc.js → nombre «index», extensión «js». */
const HASHED = /^\/assets\/([^/]+)-[A-Za-z0-9_-]{8}\.(js|css|png|svg|woff2?)$/;
/** El manifest de sprites, y lo que se espera a la red por él antes de servir el guardado. */
const MANIFEST = "/assets/pokemon/manifest.json";
const MANIFEST_WAIT_MS = 4000;
/** Sin hash pero casi fijo. */
const isMedia = (path) => path.startsWith("/assets/") || path.startsWith("/icons/") || path === "/logo.svg" || path === "/favicon.svg";

/** Guarda una respuesta; el manifest de sprites, solo si llega entero (cortado haría fallar el arranque cada vez). */
async function store(cache, req, res) {
  try {
    if (new URL(req.url).pathname.endsWith("/manifest.json")) JSON.parse(await res.clone().text());
    await cache.put(req, res);
  } catch { /* cortado o sin espacio: no se guarda */ }
}

/** Con una página nueva: fuera las versiones viejas de los archivos que nombra (mismo nombre, otro hash). */
async function prune(html) {
  const used = new Map();
  for (const m of html.matchAll(/\/assets\/[^"'\s)]+/g)) { const h = HASHED.exec(m[0]); if (h) used.set(`${h[1]}.${h[2]}`, m[0]); }
  const cache = await caches.open(CODE);
  for (const req of await cache.keys()) {
    const path = new URL(req.url).pathname, h = HASHED.exec(path);
    const now = h && used.get(`${h[1]}.${h[2]}`);
    if (now && now !== path) await cache.delete(req);
  }
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/game/") || url.pathname.startsWith("/admin")) return;

  if (req.mode === "navigate") {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res.ok) {
          const copy = res.clone();
          e.waitUntil((async () => { await (await caches.open(PAGES)).put("/", copy.clone()); await prune(await copy.text()); })().catch(() => undefined));
        }
        return res;
      } catch {
        return (await caches.match("/")) ?? Response.error();
      }
    })());
    return;
  }

  if (HASHED.test(url.pathname)) {
    e.respondWith((async () => {
      const cache = await caches.open(CODE);
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.status === 200 && res.type === "basic") cache.put(req, res.clone()).catch(() => undefined);
      return res;
    })());
    return;
  }

  // El manifest pedido con ?fresh (la página ha recibido uno viejo, ver src/manifest.ts): siempre de la red, y se guarda
  // como el manifest normal para la próxima vez (no con su dirección, que cambia).
  if (url.pathname === MANIFEST && url.searchParams.has("fresh")) {
    e.respondWith((async () => {
      const res = await fetch(req, { cache: "no-cache" });
      if (res.status !== 200 || res.type !== "basic") return res;
      const full = new Response(await res.arrayBuffer(), { status: res.status, statusText: res.statusText, headers: res.headers });
      e.waitUntil(caches.open(MEDIA).then((cache) => store(cache, new Request(new URL(MANIFEST, self.location.origin)), full.clone())));
      return full;
    })());
    return;
  }

  if (url.pathname === MANIFEST) {
    e.respondWith((async () => {
      const cache = await caches.open(MEDIA);
      // Entero antes de darlo por llegado: las cabeceras llegan enseguida aunque el resto tarde, y con la red lenta es
      // el resto lo que hace esperar. Se guarda al acabar de llegar, aunque la página ya se haya llevado lo guardado.
      const fresh = fetch(req, { cache: "no-cache" }).then(async (res) => {
        if (res.status !== 200 || res.type !== "basic") return res;
        const full = new Response(await res.arrayBuffer(), { status: res.status, statusText: res.statusText, headers: res.headers });
        await store(cache, req, full.clone());
        return full;
      });
      e.waitUntil(fresh.catch(() => undefined));
      const hit = await cache.match(req);
      if (!hit) return fresh;
      // Con mala conexión, esperar a la red sería peor que lo de antes (lo guardado al momento): como mucho un rato.
      let timer;
      const late = new Promise((resolve) => { timer = setTimeout(() => resolve(hit), MANIFEST_WAIT_MS); });
      try { return await Promise.race([fresh.then((res) => (res.ok ? res : hit)), late]); }
      catch { return hit; }
      finally { clearTimeout(timer); }
    })());
    return;
  }

  if (isMedia(url.pathname)) {
    e.respondWith((async () => {
      const cache = await caches.open(MEDIA);
      const hit = await cache.match(req);
      const fresh = fetch(req).then((res) => {
        if (res.status === 200 && res.type === "basic") void store(cache, req, res.clone());
        return res;
      });
      if (hit) { e.waitUntil(fresh.catch(() => undefined)); return hit; }
      return fresh;
    })());
  }
});
