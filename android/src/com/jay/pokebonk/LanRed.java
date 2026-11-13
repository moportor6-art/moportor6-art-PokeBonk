package com.jay.pokebonk;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.InterfaceAddress;
import java.net.NetworkInterface;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Subversión propia: red local para el cooperativo en la misma Wi-Fi (lo usa lan.js por el puente PBLanNative).
 * - Anfitrión: servidor TCP (puerto 47321) y respuesta a la búsqueda por UDP (puerto 47322).
 * - Invitado: una conexión TCP con el anfitrión.
 * Cada mensaje es una línea de texto (JSON). Lo recibido se entrega en lotes a la página.
 * No sabe nada del juego: la sala y el reparto de mensajes los hace lan.js.
 */
public class LanRed {
    public interface Salida {
        void entregar(int conn, List<String> msgs);
        void evento(String tipo, int conn, String info);
        /** Ejecuta r más tarde (en el hilo de la página). Lo que llegue mientras tanto se entrega en el mismo lote. */
        default void programar(Runnable r) { r.run(); }
    }

    static final int PUERTO = 47321, PUERTO_UDP = 47322;
    static final String PREGUNTA = "PBLAN?", RESPUESTA = "PBLAN!";

    private final Salida out;
    private final Map<Integer, Conexion> conns = new ConcurrentHashMap<>();
    private final AtomicInteger nconn = new AtomicInteger(0);
    private volatile ServerSocket server;
    private volatile DatagramSocket udp;
    private volatile String nombre = "PokéBonk";
    private volatile int gen = 0; // cada servir/conectar/cerrar invalida los hilos anteriores

    public LanRed(Salida out) { this.out = out; }

    private final class Conexion {
        final int id;
        final Socket s;
        final OutputStream os;
        final ExecutorService escritor = Executors.newSingleThreadExecutor();
        final List<String> pendiente = new ArrayList<>();
        volatile boolean viva = true;

        Conexion(int id, Socket s) throws Exception {
            this.id = id;
            this.s = s;
            s.setTcpNoDelay(true);
            s.setKeepAlive(true);
            this.os = s.getOutputStream();
        }

        void leer(int g) {
            new Thread(() -> {
                try (BufferedReader r = new BufferedReader(new InputStreamReader(s.getInputStream(), StandardCharsets.UTF_8))) {
                    String linea;
                    while (viva && (linea = r.readLine()) != null) {
                        if (linea.isEmpty()) continue;
                        boolean primero;
                        synchronized (pendiente) { primero = pendiente.isEmpty(); pendiente.add(linea); }
                        // Se entrega en lote: lo que llegue mientras la página procesa va en el mismo envío.
                        if (primero) out.programar(this::vaciar);
                    }
                } catch (Exception ignored) {
                }
                cerrarConn(this, g);
            }, "pb-lan-rx-" + id).start();
        }

        void vaciar() {
            List<String> lote;
            synchronized (pendiente) {
                if (pendiente.isEmpty()) return;
                lote = new ArrayList<>(pendiente);
                pendiente.clear();
            }
            out.entregar(id, lote);
        }

        void enviar(String texto) {
            if (!viva) return;
            final byte[] b = (texto.replace("\n", " ") + "\n").getBytes(StandardCharsets.UTF_8);
            try {
                escritor.execute(() -> {
                    try { os.write(b); os.flush(); } catch (Exception e) { cerrarConn(this, gen); }
                });
            } catch (Exception ignored) {
            }
        }

        void cerrar() {
            viva = false;
            try { s.close(); } catch (Exception ignored) {}
            escritor.shutdownNow();
        }
    }

    private void cerrarConn(Conexion c, int g) {
        if (conns.remove(c.id) != null) {
            c.cerrar();
            if (g == gen) out.evento("close", c.id, "");
        } else {
            c.cerrar();
        }
    }

    /** Abre la sala en este dispositivo. Devuelve su IP en la Wi-Fi, o "" si no se pudo. */
    public synchronized String servir(String nombreSala) {
        cerrar();
        final int g = ++gen;
        if (nombreSala != null && !nombreSala.isEmpty()) nombre = nombreSala.replace("|", " ");
        String ip = ip();
        try {
            ServerSocket ss = new ServerSocket();
            ss.setReuseAddress(true);
            ss.bind(new InetSocketAddress(PUERTO));
            server = ss;
        } catch (Exception e) {
            return "";
        }
        new Thread(() -> {
            ServerSocket ss = server;
            while (g == gen && ss != null && !ss.isClosed()) {
                try {
                    Socket s = ss.accept();
                    if (g != gen) { s.close(); break; }
                    Conexion c = new Conexion(nconn.incrementAndGet(), s);
                    conns.put(c.id, c);
                    c.leer(g);
                    out.evento("open", c.id, s.getInetAddress().getHostAddress());
                } catch (Exception e) {
                    if (g != gen) break;
                }
            }
        }, "pb-lan-accept").start();
        new Thread(() -> responderBusquedas(g), "pb-lan-udp").start();
        return ip.isEmpty() ? "0.0.0.0" : ip;
    }

    private void responderBusquedas(int g) {
        try {
            DatagramSocket u = new DatagramSocket(null);
            u.setReuseAddress(true);
            u.setBroadcast(true);
            u.bind(new InetSocketAddress(PUERTO_UDP));
            udp = u;
            byte[] buf = new byte[256];
            while (g == gen && !u.isClosed()) {
                DatagramPacket p = new DatagramPacket(buf, buf.length);
                u.receive(p);
                String q = new String(p.getData(), 0, p.getLength(), StandardCharsets.UTF_8);
                if (!q.startsWith(PREGUNTA)) continue;
                byte[] r = (RESPUESTA + "|" + nombre + "|" + PUERTO).getBytes(StandardCharsets.UTF_8);
                u.send(new DatagramPacket(r, r.length, p.getAddress(), p.getPort()));
            }
        } catch (Exception ignored) {
        }
    }

    /** Se une a la sala de otro dispositivo. Avisa con evento "open" o "error". */
    public synchronized void conectar(final String ip) {
        cerrar();
        final int g = ++gen;
        new Thread(() -> {
            try {
                Socket s = new Socket();
                s.connect(new InetSocketAddress(ip, PUERTO), 6000);
                if (g != gen) { s.close(); return; }
                Conexion c = new Conexion(0, s);
                conns.put(0, c);
                c.leer(g);
                out.evento("open", 0, ip);
            } catch (Exception e) {
                if (g == gen) out.evento("error", 0, String.valueOf(e.getMessage()));
            }
        }, "pb-lan-connect").start();
    }

    public void enviar(int conn, String texto) {
        Conexion c = conns.get(conn);
        if (c != null) c.enviar(texto);
    }

    /** Pregunta por la Wi-Fi quién tiene una sala abierta. Cada respuesta llega como evento "found" ("ip|nombre"). */
    public void buscar() {
        new Thread(() -> {
            try (DatagramSocket u = new DatagramSocket()) {
                u.setBroadcast(true);
                u.setSoTimeout(1500);
                byte[] q = PREGUNTA.getBytes(StandardCharsets.UTF_8);
                for (InetAddress dst : difusiones()) {
                    try { u.send(new DatagramPacket(q, q.length, dst, PUERTO_UDP)); } catch (Exception ignored) {}
                }
                byte[] buf = new byte[256];
                long fin = System.currentTimeMillis() + 1500;
                while (System.currentTimeMillis() < fin) {
                    DatagramPacket p = new DatagramPacket(buf, buf.length);
                    try { u.receive(p); } catch (Exception e) { break; }
                    String r = new String(p.getData(), 0, p.getLength(), StandardCharsets.UTF_8);
                    if (!r.startsWith(RESPUESTA)) continue;
                    String[] k = r.split("\\|");
                    String desde = p.getAddress().getHostAddress();
                    if (desde.equals(ip())) continue; // la propia sala no se lista
                    out.evento("found", 0, desde + "|" + (k.length > 1 ? k[1] : desde));
                }
            } catch (Exception ignored) {
            }
        }, "pb-lan-buscar").start();
    }

    public synchronized void cerrar() {
        gen++;
        try { if (server != null) server.close(); } catch (Exception ignored) {}
        try { if (udp != null) udp.close(); } catch (Exception ignored) {}
        server = null;
        udp = null;
        for (Conexion c : new ArrayList<>(conns.values())) c.cerrar();
        conns.clear();
    }

    private static List<InetAddress> difusiones() {
        List<InetAddress> l = new ArrayList<>();
        try {
            for (NetworkInterface ni : Collections.list(NetworkInterface.getNetworkInterfaces())) {
                if (!ni.isUp() || ni.isLoopback()) continue;
                for (InterfaceAddress ia : ni.getInterfaceAddresses()) {
                    InetAddress b = ia.getBroadcast();
                    if (b != null && !l.contains(b)) l.add(b);
                }
            }
        } catch (Exception ignored) {
        }
        try { l.add(InetAddress.getByName("255.255.255.255")); } catch (Exception ignored) {}
        return l;
    }

    /** IP de este dispositivo en la red local (la Wi-Fi primero). */
    public static String ip() {
        String otra = "";
        try {
            for (NetworkInterface ni : Collections.list(NetworkInterface.getNetworkInterfaces())) {
                if (!ni.isUp() || ni.isLoopback()) continue;
                for (InetAddress a : Collections.list(ni.getInetAddresses())) {
                    if (!(a instanceof Inet4Address) || !a.isSiteLocalAddress()) continue;
                    String n = ni.getName();
                    if (n.startsWith("wlan") || n.startsWith("ap") || n.startsWith("swlan")) return a.getHostAddress();
                    if (otra.isEmpty()) otra = a.getHostAddress();
                }
            }
        } catch (Exception ignored) {
        }
        return otra;
    }
}
