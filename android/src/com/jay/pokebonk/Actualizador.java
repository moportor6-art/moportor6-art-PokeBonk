package com.jay.pokebonk;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageInfo;
import android.content.pm.PackageInstaller;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.util.Base64;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.PublicKey;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Subversión propia: actualizador de PokéBonk Remaster para Android.
 *
 * El juego es la web de assets/site que sirve MainActivity. Una actualización baja SOLO los archivos que
 * cambian a files/contenido/&lt;versión&gt;/ y MainActivity los sirve antes que los del APK. Las partidas
 * (localStorage/IndexedDB del WebView) no se tocan.
 *  - Manifiesto contenido.json de la release, firmado con la misma clave que firma el APK: se comprueba con
 *    el certificado de la propia app. Sin firma válida no se usa nada.
 *  - Módulos (juego principal y cada juego de "Más juegos"): solo se bajan los que cambian.
 *  - Cada archivo se comprueba con su SHA-256. Todo se prepara en una carpeta nueva y se cambia al final;
 *    si el juego no arranca dos veces seguidas con lo nuevo, se vuelve solo a lo anterior.
 *  - Si cambia el código de la app (Java, permisos...), se baja el APK completo y se instala con el
 *    instalador de Android (PackageInstaller). Se comprueba su SHA-256 antes de instalarlo.
 */
final class Actualizador {
    // "android-lite" en PokéBonk Lite (paquete .lite): su APK completo es otro y no lleva los otros juegos.
    static String PLAT = "android";
    static final long LIMITE = 95L * 1024 * 1024;   // más que esto va partido en el contenido publicado
    static final long TROZO = 90L * 1024 * 1024;
    interface Emisor { void emitir(JSONObject ev); }

    private final Activity act;
    private final String repo;
    private final Emisor emisor;
    private final File dir;
    private final File estFile;
    private JSONObject base;
    private JSONObject est;
    private Set<String> borrados = new HashSet<>();
    private volatile JSONObject plan;          // manifiesto y listas de la última búsqueda
    private final AtomicBoolean ocupado = new AtomicBoolean(false);
    private BroadcastReceiver receptor;

    Actualizador(Activity act, String repo, Emisor emisor) {
        this.act = act;
        this.repo = repo;
        this.emisor = emisor;
        if (act.getPackageName().endsWith(".lite")) PLAT = "android-lite";
        this.dir = new File(act.getFilesDir(), "contenido");
        this.estFile = new File(dir, "estado.json");
        try { base = new JSONObject(new String(leerAsset("site/contenido.json"), StandardCharsets.UTF_8)); } catch (Exception e) { base = null; }
        est = leerEstado();
        arranque();
    }

    // ---------- estado ----------
    private JSONObject leerEstado() {
        try { return new JSONObject(new String(leer(estFile), StandardCharsets.UTF_8)); } catch (Exception e) { return new JSONObject(); }
    }
    private synchronized void guardarEstado() {
        try {
            dir.mkdirs();
            File tmp = new File(dir, "estado.json.tmp");
            try (OutputStream o = new FileOutputStream(tmp)) { o.write(est.toString(1).getBytes(StandardCharsets.UTF_8)); }
            if (!tmp.renameTo(estFile)) { estFile.delete(); tmp.renameTo(estFile); }
        } catch (Exception e) { Log.w("PokeBonk", "estado", e); }
        cargarBorrados();
    }
    private void cargarBorrados() {
        Set<String> s = new HashSet<>();
        JSONArray a = est.optJSONArray("borrados");
        if (a != null) for (int i = 0; i < a.length(); i++) s.add(a.optString(i));
        borrados = s;
    }
    private String shellBase() { return base == null ? "" : base.optJSONObject("shell") == null ? "" : base.optJSONObject("shell").optString(PLAT); }

    private void arranque() {
        if (base == null) return;
        try {
            if (est.optInt("base", -1) != base.optInt("version") || !shellBase().equals(est.optString("shell"))) {
                borrarTodo(dir);
                est = new JSONObject();
                est.put("base", base.optInt("version"));
                est.put("shell", shellBase());
                est.put("modulos", new JSONObject());
                est.put("borrados", new JSONArray());
                guardarEstado();
                return;
            }
            if (est.optBoolean("pendiente")) {
                int n = est.optInt("intentos") + 1;
                est.put("intentos", n);
                if (n > 2) {
                    Log.w("PokeBonk", "La versión " + est.optInt("version") + " no arrancó: se vuelve a la anterior");
                    JSONObject ant = est.optJSONObject("anterior");
                    String[] campos = {"dir", "modulos", "borrados", "version", "sub"};
                    for (String c : campos) est.put(c, ant != null && ant.has(c) ? ant.get(c) : JSONObject.NULL);
                    if (est.isNull("modulos")) est.put("modulos", new JSONObject());
                    if (est.isNull("borrados")) est.put("borrados", new JSONArray());
                    est.put("anterior", JSONObject.NULL);
                    est.put("pendiente", false);
                    est.put("intentos", 0);
                }
                guardarEstado();
            }
        } catch (Exception e) { Log.w("PokeBonk", "arranque", e); }
        cargarBorrados();
    }

    /** MainActivity: archivo actualizado para esta ruta, BORRADO si ya no existe en la versión nueva, o null. */
    static final File BORRADO = new File("/borrado");
    File resolver(String rel) {
        String d = est.optString("dir", "");
        if (d.isEmpty() || est.isNull("dir")) return null;
        if (borrados.contains(rel)) return BORRADO;
        File f = new File(new File(dir, d), rel);
        return f.isFile() ? f : null;
    }

    // ---------- red y utilidades ----------
    private static byte[] bajar(String url) throws IOException {
        IOException ultimo = null;
        for (int i = 0; i < 4; i++) {
            HttpURLConnection c = null;
            try {
                c = (HttpURLConnection) new URL(url).openConnection();
                c.setConnectTimeout(15000);
                c.setReadTimeout(30000);
                c.setRequestProperty("User-Agent", "PokeBonkAndroid");
                c.setRequestProperty("Cache-Control", "no-cache");
                int code = c.getResponseCode();
                if (code == 404) throw new IOException("404 " + url);
                if (code != 200) throw new IOException(code + " " + url);
                try (InputStream in = c.getInputStream()) { return leerTodo(in); }
            } catch (IOException e) {
                ultimo = e;
                if (e.getMessage() != null && e.getMessage().startsWith("404")) break;
                try { Thread.sleep(1500L * (i + 1)); } catch (InterruptedException ignored) { }
            } finally { if (c != null) c.disconnect(); }
        }
        throw ultimo;
    }
    private static byte[] leerTodo(InputStream in) throws IOException {
        ByteArrayOutputStream o = new ByteArrayOutputStream();
        byte[] b = new byte[65536];
        int n;
        while ((n = in.read(b)) > 0) o.write(b, 0, n);
        return o.toByteArray();
    }
    private static byte[] leer(File f) throws IOException { try (InputStream in = new FileInputStream(f)) { return leerTodo(in); } }
    private byte[] leerAsset(String p) throws IOException { try (InputStream in = act.getAssets().open(p)) { return leerTodo(in); } }
    private static String sha(byte[] b) throws Exception { return hex(MessageDigest.getInstance("SHA-256").digest(b)); }
    private static String hex(byte[] d) { StringBuilder s = new StringBuilder(); for (byte x : d) s.append(String.format("%02x", x)); return s.toString(); }
    private static String url(String raiz, String rel) throws Exception {
        StringBuilder s = new StringBuilder(raiz);
        String[] p = rel.split("/");
        for (int i = 0; i < p.length; i++) { if (i > 0) s.append('/'); s.append(URLEncoder.encode(p[i], "UTF-8").replace("+", "%20")); }
        return s.toString();
    }
    private static void borrarTodo(File f) {
        if (f == null || !f.exists()) return;
        File[] h = f.listFiles();
        if (h != null) for (File x : h) borrarTodo(x);
        f.delete();
    }
    private static void copiar(File o, File d) throws IOException {
        d.getParentFile().mkdirs();
        try (InputStream in = new FileInputStream(o); OutputStream out = new FileOutputStream(d)) {
            byte[] b = new byte[65536]; int n;
            while ((n = in.read(b)) > 0) out.write(b, 0, n);
        }
    }

    private PublicKey clavePropia() throws Exception {
        PackageManager pm = act.getPackageManager();
        android.content.pm.Signature[] firmas;
        if (Build.VERSION.SDK_INT >= 28) {
            PackageInfo pi = pm.getPackageInfo(act.getPackageName(), PackageManager.GET_SIGNING_CERTIFICATES);
            firmas = pi.signingInfo.getApkContentsSigners();
        } else {
            PackageInfo pi = pm.getPackageInfo(act.getPackageName(), PackageManager.GET_SIGNATURES);
            firmas = pi.signatures;
        }
        X509Certificate cert = (X509Certificate) CertificateFactory.getInstance("X.509").generateCertificate(new ByteArrayInputStream(firmas[0].toByteArray()));
        return cert.getPublicKey();
    }
    private boolean firmaValida(byte[] datos, String firmaB64) throws Exception {
        PublicKey k = clavePropia();
        String alg = "EC".equals(k.getAlgorithm()) ? "SHA256withECDSA" : "SHA256with" + k.getAlgorithm();
        java.security.Signature s = java.security.Signature.getInstance(alg);
        s.initVerify(k);
        s.update(datos);
        return s.verify(Base64.decode(firmaB64.trim(), Base64.DEFAULT));
    }

    private JSONObject listaActual(String m) {
        try {
            String d = est.isNull("dir") ? "" : est.optString("dir", "");
            JSONObject mods = est.optJSONObject("modulos");
            if (!d.isEmpty() && mods != null && mods.has(m))
                return new JSONObject(new String(leer(new File(new File(new File(dir, d), "_listas"), m + ".json")), StandardCharsets.UTF_8)).getJSONObject("archivos");
        } catch (Exception ignored) { }
        return listaBase(m);
    }
    private JSONObject listaBase(String m) {
        try { return new JSONObject(new String(leerAsset("site/contenido/" + m + ".json"), StandardCharsets.UTF_8)).getJSONObject("archivos"); }
        catch (Exception e) { return new JSONObject(); }
    }
    private String hashActual(String m) {
        JSONObject mods = est.optJSONObject("modulos");
        if (mods != null && mods.has(m)) return mods.optString(m);
        JSONObject bm = base.optJSONObject("modulos");
        return bm != null && bm.optJSONObject(m) != null ? bm.optJSONObject(m).optString("hash") : "";
    }
    private int versionActual() { return est.isNull("dir") || est.optString("dir", "").isEmpty() ? base.optInt("version") : est.optInt("version", base.optInt("version")); }
    private String subActual() { return est.isNull("dir") || est.optString("dir", "").isEmpty() ? base.optString("sub") : est.optString("sub", base.optString("sub")); }
    private static int cmpSub(String a, String b) {
        String[] x = (a == null ? "0" : a).split("\\."), y = (b == null ? "0" : b).split("\\.");
        for (int i = 0; i < Math.max(x.length, y.length); i++) {
            int p = i < x.length ? parse(x[i]) : 0, q = i < y.length ? parse(y[i]) : 0;
            if (p != q) return p - q;
        }
        return 0;
    }
    private static int parse(String s) { try { return Integer.parseInt(s); } catch (Exception e) { return 0; } }

    // ---------- acciones ----------
    JSONObject estado() throws Exception {
        JSONObject o = new JSONObject();
        if (base == null) { o.put("puede", false); return o; }
        o.put("version", versionActual());
        o.put("sub", subActual());
        o.put("base", base.optInt("version"));
        o.put("actualizado", !(est.isNull("dir") || est.optString("dir", "").isEmpty()));
        o.put("puede", true);
        JSONObject mods = new JSONObject();
        JSONObject bm = base.optJSONObject("modulos");
        JSONObject em = est.optJSONObject("modulos");
        if (bm != null) for (Iterator<String> it = bm.keys(); it.hasNext(); ) {
            String m = it.next();
            JSONObject x = new JSONObject();
            x.put("nombre", bm.getJSONObject(m).optString("nombre"));
            x.put("actualizado", em != null && em.has(m));
            mods.put(m, x);
        }
        o.put("modulos", mods);
        return o;
    }

    JSONObject buscar() throws Exception {
        if (base == null) throw new Exception("Esta versión no trae datos de actualización.");
        JSONObject rel = new JSONObject(new String(bajar("https://api.github.com/repos/" + repo + "/releases/latest"), StandardCharsets.UTF_8));
        String tag = rel.getString("tag_name");
        String raiz = "https://raw.githubusercontent.com/" + repo + "/contenido-" + tag + "/";
        byte[] datos = bajar(raiz + "contenido.json");
        String firma = new String(bajar(raiz + "contenido.json.sig"), StandardCharsets.UTF_8);
        if (!firmaValida(datos, firma)) throw new Exception("La firma de la actualización no es válida: no se ha instalado nada.");
        JSONObject man = new JSONObject(new String(datos, StandardCharsets.UTF_8));
        JSONObject p = new JSONObject();
        p.put("version", man.optInt("version"));
        p.put("tag", man.optString("tag", tag));
        p.put("sub", man.optString("sub"));
        p.put("actual", versionActual());
        p.put("subActual", subActual());
        JSONArray cambios = new JSONArray();
        JSONArray todos = man.optJSONArray("cambios");
        if (todos != null) for (int i = 0; i < todos.length(); i++) {
            JSONObject c = todos.optJSONObject(i);
            if (c != null && cmpSub(c.optString("sub"), subActual()) > 0) cambios.put(c);
        }
        p.put("cambios", cambios);
        String raizArch = man.optString("base", raiz);
        JSONObject listas = new JSONObject();
        JSONObject shellNuevo = man.optJSONObject("shell");
        boolean hay;
        if (shellNuevo == null || !shellNuevo.optString(PLAT).equals(shellBase())) {
            JSONObject c = man.optJSONObject("completo") == null ? null : man.optJSONObject("completo").optJSONObject(PLAT);
            JSONObject comp = new JSONObject();
            if (c != null) comp.put("bytes", c.optLong("bytes"));
            p.put("completo", c == null ? JSONObject.NULL : comp);
            p.put("motivo", "Esta versión cambia la app, no solo el juego: se instala completa (tus partidas se conservan).");
            hay = c != null;
        } else {
            JSONArray mods = new JSONArray();
            JSONObject mm = man.optJSONObject("modulos");
            if (mm != null) for (Iterator<String> it = mm.keys(); it.hasNext(); ) {
                String m = it.next();
                JSONObject info = mm.getJSONObject(m);
                if (info.optString("hash").equals(hashActual(m))) continue;
                // Lite: los módulos que no trae (los otros juegos) no se bajan.
                if (PLAT.endsWith("-lite") && listaBase(m).length() == 0 && (est.optJSONObject("modulos") == null || !est.optJSONObject("modulos").has(m))) continue;
                byte[] lb = bajar(url(raizArch, "contenido/" + m + ".json"));
                if (!sha(lb).equals(info.optString("hash"))) throw new Exception("La lista de " + info.optString("nombre") + " no coincide con el manifiesto.");
                JSONObject nueva = new JSONObject(new String(lb, StandardCharsets.UTF_8)).getJSONObject("archivos");
                JSONObject vieja = listaActual(m);
                int n = 0; long bytes = 0; int quitados = 0;
                for (Iterator<String> k = nueva.keys(); k.hasNext(); ) {
                    String r = k.next();
                    JSONArray v = nueva.getJSONArray(r);
                    JSONArray w = vieja.optJSONArray(r);
                    if (w == null || !w.optString(1).equals(v.optString(1))) { n++; bytes += v.optLong(0); }
                }
                for (Iterator<String> k = vieja.keys(); k.hasNext(); ) if (!nueva.has(k.next())) quitados++;
                JSONObject x = new JSONObject();
                x.put("id", m); x.put("nombre", info.optString("nombre")); x.put("archivos", n); x.put("bytes", bytes); x.put("quitados", quitados);
                mods.put(x);
                listas.put(m, nueva);
            }
            p.put("modulos", mods);
            hay = mods.length() > 0;
        }
        p.put("hay", hay);
        JSONObject interno = new JSONObject();
        interno.put("man", man); interno.put("listas", listas); interno.put("raiz", raizArch); interno.put("visible", p);
        plan = interno;
        Log.i("PokeBonk", "Actualizador: " + (hay ? "hay" : "no hay") + " actualización (" + tag + "; tienes " + versionActual() + ")");
        return p;
    }

    void aplicar(JSONArray ids) throws Exception {
        JSONObject pl = plan;
        if (pl == null || !pl.getJSONObject("visible").has("modulos")) throw new Exception("Primero busca actualizaciones.");
        if (!ocupado.compareAndSet(false, true)) return;
        try {
            JSONObject man = pl.getJSONObject("man");
            JSONObject listas = pl.getJSONObject("listas");
            String raiz = pl.getString("raiz");
            Set<String> elegidos = new HashSet<>();
            for (Iterator<String> it = listas.keys(); it.hasNext(); ) {
                String m = it.next();
                boolean ok = ids == null || ids.length() == 0;
                if (ids != null) for (int i = 0; i < ids.length(); i++) if (m.equals(ids.optString(i))) ok = true;
                if (ok) elegidos.add(m);
            }
            String nuevoDir = "v" + man.optInt("version") + "-" + Long.toString(System.currentTimeMillis(), 36);
            File tmp = new File(dir, nuevoDir + ".tmp");
            borrarTodo(tmp);
            new File(tmp, "_listas").mkdirs();
            String viejo = est.isNull("dir") ? "" : est.optString("dir", "");
            File viejoDir = viejo.isEmpty() ? null : new File(dir, viejo);
            JSONObject modulos = new JSONObject(est.optJSONObject("modulos") == null ? "{}" : est.optJSONObject("modulos").toString());
            Set<String> quitar = new HashSet<>();
            // Módulos ya actualizados que no se tocan ahora: pasan tal cual.
            if (viejoDir != null) for (Iterator<String> it = modulos.keys(); it.hasNext(); ) {
                String m = it.next();
                if (elegidos.contains(m)) continue;
                JSONObject lista = listaActual(m);
                for (Iterator<String> k = lista.keys(); k.hasNext(); ) { String r = k.next(); File o = new File(viejoDir, r); if (o.isFile()) copiar(o, new File(tmp, r)); }
                copiar(new File(new File(viejoDir, "_listas"), m + ".json"), new File(new File(tmp, "_listas"), m + ".json"));
                JSONObject bas = listaBase(m);
                for (Iterator<String> k = bas.keys(); k.hasNext(); ) { String r = k.next(); if (!lista.has(r)) quitar.add(r); }
            }
            final List<String[]> tareas = new ArrayList<>();   // ruta, hash, tamaño
            for (String m : elegidos) {
                JSONObject nueva = listas.getJSONObject(m);
                JSONObject bas = listaBase(m), actual = listaActual(m);
                for (Iterator<String> k = nueva.keys(); k.hasNext(); ) {
                    String r = k.next();
                    JSONArray v = nueva.getJSONArray(r);
                    String h = v.optString(1);
                    JSONArray b = bas.optJSONArray(r);
                    if (b != null && h.equals(b.optString(1))) continue;
                    JSONArray a = actual.optJSONArray(r);
                    if (viejoDir != null && a != null && h.equals(a.optString(1)) && new File(viejoDir, r).isFile()) { copiar(new File(viejoDir, r), new File(tmp, r)); continue; }
                    tareas.add(new String[]{r, h, String.valueOf(v.optLong(0))});
                }
                for (Iterator<String> k = bas.keys(); k.hasNext(); ) { String r = k.next(); if (!nueva.has(r)) quitar.add(r); }
                JSONObject l = new JSONObject(); l.put("modulo", m); l.put("archivos", nueva);
                try (OutputStream o = new FileOutputStream(new File(new File(tmp, "_listas"), m + ".json"))) { o.write(l.toString().getBytes(StandardCharsets.UTF_8)); }
                modulos.put(m, man.getJSONObject("modulos").getJSONObject(m).optString("hash"));
            }
            long total = 0;
            for (String[] t : tareas) total += Long.parseLong(t[2]);
            final long totalF = total;
            final AtomicLong hecho = new AtomicLong();
            final AtomicInteger n = new AtomicInteger();
            final AtomicBoolean roto = new AtomicBoolean(false);
            progreso(0, total, 0, tareas.size());
            ExecutorService pool = Executors.newFixedThreadPool(6);
            List<Future<?>> fs = new ArrayList<>();
            for (final String[] t : tareas) fs.add(pool.submit(() -> {
                if (roto.get()) return null;
                File d = new File(tmp, t[0]);
                d.getParentFile().mkdirs();
                long tam = Long.parseLong(t[2]);
                if (tam > LIMITE) {
                    // GitHub no guarda archivos de más de 100 MB: van en trozos de 90 MB (.pbparte.00, .01...).
                    MessageDigest md = MessageDigest.getInstance("SHA-256");
                    try (OutputStream o = new FileOutputStream(d)) {
                        for (int k = 0; (long) k * TROZO < tam; k++) {
                            byte[] parte = bajar(url(raiz, t[0] + ".pbparte." + (k < 10 ? "0" : "") + k));
                            md.update(parte);
                            o.write(parte);
                        }
                    }
                    if (!hex(md.digest()).equals(t[1])) throw new Exception("Un archivo llegó dañado (" + t[0] + "): no se ha instalado nada.");
                } else {
                    byte[] b = bajar(url(raiz, t[0]));
                    if (!sha(b).equals(t[1])) throw new Exception("Un archivo llegó dañado (" + t[0] + "): no se ha instalado nada.");
                    try (OutputStream o = new FileOutputStream(d)) { o.write(b); }
                }
                long h = hecho.addAndGet(Long.parseLong(t[2]));
                int k = n.incrementAndGet();
                if (k % 5 == 0 || k == tareas.size()) progreso(h, totalF, k, tareas.size());
                return null;
            }));
            pool.shutdown();
            try {
                for (Future<?> f : fs) f.get();
            } catch (java.util.concurrent.ExecutionException e) {
                roto.set(true);
                pool.shutdownNow();
                borrarTodo(tmp);
                Throwable c = e.getCause();
                throw c instanceof Exception ? (Exception) c : new Exception(String.valueOf(c));
            }
            File fin = new File(dir, nuevoDir);
            if (!tmp.renameTo(fin)) throw new Exception("No se pudo preparar la carpeta de la actualización.");
            boolean todos = true;
            JSONObject mm = man.getJSONObject("modulos");
            for (Iterator<String> it = mm.keys(); it.hasNext(); ) {
                String m = it.next();
                String h = modulos.has(m) ? modulos.optString(m) : (base.getJSONObject("modulos").has(m) ? base.getJSONObject("modulos").getJSONObject(m).optString("hash") : "");
                if (!h.equals(mm.getJSONObject(m).optString("hash"))) todos = false;
            }
            JSONObject ant = new JSONObject();
            ant.put("dir", viejo.isEmpty() ? JSONObject.NULL : viejo);
            ant.put("modulos", est.optJSONObject("modulos") == null ? new JSONObject() : est.optJSONObject("modulos"));
            ant.put("borrados", est.optJSONArray("borrados") == null ? new JSONArray() : est.optJSONArray("borrados"));
            ant.put("version", est.opt("version") == null ? JSONObject.NULL : est.opt("version"));
            ant.put("sub", est.opt("sub") == null ? JSONObject.NULL : est.opt("sub"));
            int vAnt = versionActual(); String sAnt = subActual();
            est.put("anterior", ant);
            est.put("dir", nuevoDir);
            est.put("modulos", modulos);
            est.put("borrados", new JSONArray(quitar));
            est.put("pendiente", true);
            est.put("intentos", 0);
            est.put("version", todos ? man.optInt("version") : vAnt);
            est.put("sub", todos ? man.optString("sub") : sAnt);
            guardarEstado();
            Log.i("PokeBonk", "Actualizador: instalada " + man.optString("tag") + " (" + tareas.size() + " archivos)");
            JSONObject ev = new JSONObject();
            ev.put("tipo", "listo"); ev.put("archivos", tareas.size()); ev.put("bytes", total);
            emisor.emitir(ev);
        } finally { ocupado.set(false); }
    }

    private void progreso(long hecho, long total, int archivos, int totalArchivos) {
        try {
            JSONObject ev = new JSONObject();
            ev.put("tipo", "progreso"); ev.put("hecho", hecho); ev.put("total", total); ev.put("archivos", archivos); ev.put("totalArchivos", totalArchivos);
            emisor.emitir(ev);
        } catch (Exception ignored) { }
    }

    void confirmar() {
        try {
            if (!est.optBoolean("pendiente")) return;
            est.put("pendiente", false);
            est.put("intentos", 0);
            guardarEstado();
            String actual = est.optString("dir", "");
            JSONObject ant = est.optJSONObject("anterior");
            String previo = ant == null ? "" : ant.optString("dir", "");
            File[] h = dir.listFiles();
            if (h != null) for (File f : h) {
                String n = f.getName();
                if (n.startsWith("v") && !n.equals(actual) && !n.equals(previo)) borrarTodo(f);
            }
        } catch (Exception e) { Log.w("PokeBonk", "confirmar", e); }
    }

    void restaurar() throws Exception {
        borrarTodo(dir);
        est = new JSONObject();
        est.put("base", base == null ? 0 : base.optInt("version"));
        est.put("shell", shellBase());
        est.put("modulos", new JSONObject());
        est.put("borrados", new JSONArray());
        guardarEstado();
    }

    // ---------- APK completo con el instalador de Android ----------
    static final String ACCION_INSTALAR = "com.jay.pokebonk.INSTALAR";

    void completo() throws Exception {
        JSONObject pl = plan;
        JSONObject c = pl == null || pl.getJSONObject("man").optJSONObject("completo") == null ? null : pl.getJSONObject("man").getJSONObject("completo").optJSONObject(PLAT);
        if (c == null) throw new Exception("No hay APK para esta versión.");
        if (Build.VERSION.SDK_INT >= 26 && !act.getPackageManager().canRequestPackageInstalls()) {
            act.runOnUiThread(() -> {
                try { act.startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + act.getPackageName()))); } catch (Exception ignored) { }
            });
            JSONObject ev = new JSONObject();
            ev.put("tipo", "permiso");
            ev.put("mensaje", "Activa \"Permitir de esta fuente\" para PokéBonk, vuelve y pulsa otra vez Instalar.");
            emisor.emitir(ev);
            return;
        }
        if (!ocupado.compareAndSet(false, true)) return;
        PackageInstaller.Session s = null;
        try {
            long tam = c.optLong("bytes");
            PackageInstaller pi = act.getPackageManager().getPackageInstaller();
            PackageInstaller.SessionParams sp = new PackageInstaller.SessionParams(PackageInstaller.SessionParams.MODE_FULL_INSTALL);
            sp.setAppPackageName(act.getPackageName());
            if (tam > 0) sp.setSize(tam);
            int id = pi.createSession(sp);
            s = pi.openSession(id);
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            HttpURLConnection con = (HttpURLConnection) new URL(c.getString("url")).openConnection();
            con.setInstanceFollowRedirects(true);
            con.setConnectTimeout(20000);
            con.setReadTimeout(60000);
            con.setRequestProperty("User-Agent", "PokeBonkAndroid");
            if (con.getResponseCode() != 200) throw new Exception("No se pudo bajar el APK (" + con.getResponseCode() + ").");
            long hecho = 0, aviso = 0;
            try (InputStream in = con.getInputStream(); OutputStream out = s.openWrite("base.apk", 0, tam > 0 ? tam : -1)) {
                byte[] b = new byte[1 << 16]; int n;
                while ((n = in.read(b)) > 0) {
                    out.write(b, 0, n); md.update(b, 0, n); hecho += n;
                    if (hecho - aviso > (8 << 20)) { aviso = hecho; progreso(hecho, tam, 0, 1); }
                }
                s.fsync(out);
            } finally { con.disconnect(); }
            if (!hex(md.digest()).equals(c.optString("sha256"))) { s.abandon(); s = null; throw new Exception("El APK llegó dañado: no se ha instalado."); }
            registrarReceptor();
            Intent i = new Intent(ACCION_INSTALAR).setPackage(act.getPackageName());
            int flags = PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= 31 ? PendingIntent.FLAG_MUTABLE : 0);
            PendingIntent pend = PendingIntent.getBroadcast(act, 4712, i, flags);
            s.commit(pend.getIntentSender());
            s.close();
            s = null;
            JSONObject ev = new JSONObject();
            ev.put("tipo", "instalador");
            emisor.emitir(ev);
        } catch (Exception e) {
            if (s != null) try { s.abandon(); } catch (Exception ignored) { }
            throw e;
        } finally { ocupado.set(false); }
    }

    private void registrarReceptor() {
        if (receptor != null) return;
        receptor = new BroadcastReceiver() {
            @Override public void onReceive(Context ctx, Intent intent) {
                int st = intent.getIntExtra(PackageInstaller.EXTRA_STATUS, PackageInstaller.STATUS_FAILURE);
                if (st == PackageInstaller.STATUS_PENDING_USER_ACTION) {
                    Intent confirmar = intent.getParcelableExtra(Intent.EXTRA_INTENT);
                    if (confirmar != null) { confirmar.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK); act.startActivity(confirmar); }
                } else if (st != PackageInstaller.STATUS_SUCCESS) {
                    try {
                        JSONObject ev = new JSONObject();
                        ev.put("tipo", "error");
                        ev.put("mensaje", "Android no instaló la actualización: " + intent.getStringExtra(PackageInstaller.EXTRA_STATUS_MESSAGE));
                        emisor.emitir(ev);
                    } catch (Exception ignored) { }
                }
            }
        };
        IntentFilter f = new IntentFilter(ACCION_INSTALAR);
        if (Build.VERSION.SDK_INT >= 33) act.registerReceiver(receptor, f, Context.RECEIVER_NOT_EXPORTED);
        else act.registerReceiver(receptor, f);
    }
}
