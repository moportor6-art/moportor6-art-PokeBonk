/* Combates por fases de legendarios nuevos (fork de moportor6, no oficial).
   menus-…js llama a PB_KITS.kit(run, i, dep) cuando ningún kit del juego cubre la especie.
   dep trae la clase base de los jefes por fases (UN) y utilidades internas del juego:
   c = traducción, k = azar, A = formas de partícula, Oa = color por tipo. */
(() => {
  let clases = null;

  function crear({ UN, c, k, A }) {
    const AGUA = 0x3a8aff, ESPUMA = 0xbfe8ff, RAYO = 0xffe23a, HIELO = 0x9ae8ff;
    const VERDE = 0x3ae08a, DRAGON = 0x7a5aff, ORO = 0xffd84a;

    /* Ondas que se expanden por el suelo: se esquivan saltando. */
    function ondas(jefe, dt, color) {
      const run = jefe.run, p = run.player.pos;
      for (let n = jefe.waves.length - 1; n >= 0; n--) {
        const w = jefe.waves[n], prev = w.r;
        w.r += w.speed * dt;
        run.vfx.ring(w.x, w.y, w.z, w.r, w.ult ? 0x1a4ad8 : color, .05, .97);
        for (let i = 0, m = w.ult ? 10 : 6; i < m; i++) {
          const a = k.range(0, Math.PI * 2), x = w.x + Math.cos(a) * w.r, z = w.z + Math.sin(a) * w.r;
          run.vfx.norm.spawn({ x, y: jefe.groundY(x, z) + .3, z, vx: Math.cos(a) * 2, vy: k.range(3, 6), vz: Math.sin(a) * 2, gravity: 20, life: .5, size: k.range(.5, .9), endSize: .3, color: 0xffffff, shape: Math.random() < .6 ? A.PixSplash : A.PixFoam });
        }
        w.ult && run.sanctuary?.blastRing(w.x, w.z, prev, w.r, 20);
        const d = Math.hypot(p.x - w.x, p.z - w.z);
        if (!w.hit && d >= prev && d < w.r) {
          w.hit = true;
          if (jefe.playerLow(jefe.groundY(p.x, p.z), 1.3)) jefe.hurt(w.mul, w.minFrac, 'water');
          else run.ui.popup(p.x, p.y + 2.4, p.z, c('¡Esquivado!'), '#7aff8a', .9);
        }
        if (w.r > w.max) jefe.waves.splice(n, 1);
      }
    }

    /* ---------------- Kyogre ---------------- */
    class Kyogre extends UN {
      constructor(...a) {
        super(...a);
        Object.assign(this, {
          float: false, phaseNames: [c('Señor de los mares'), c('Llovizna'), c('Pulso Primigenio')],
          phaseColor: '#4aa8ff', band: [9, 15], speed: 4.4,
          waves: [], pools: [], poolHurtT: 0, rainT: 3, swirl: null, ultT: 9
        });
      }
      attack() {
        const l = this.phase === 1 ? ['surf', 'hydro', 'spout', 'ice']
          : ['surf', 'hydro', 'spout', 'ice', 'thunder', 'whirl'];
        switch (this.pick(l)) {
          case 'surf': return this.surf();
          case 'hydro': return this.hydroPump();
          case 'spout': return this.waterSpout();
          case 'ice': return this.iceBeam();
          case 'thunder': return this.thunder();
          default: return this.whirlpool();
        }
      }
      surf() {
        const e = this.run;
        this.lock = 1.1; this.E.atkAnim[this.i] = .8;
        e.vfx.telegraph(this.bx, this.by, this.bz, 5, AGUA, .8);
        e.ui.popup(this.bx, this.by + 4, this.bz, c('¡Surf!'), '#6ab8ff', 1);
        e.later(.8, () => {
          e.shake(.35, this.bx, this.bz); e.audio.boom(.7);
          e.vfx.burst(this.bx, this.by + 1, this.bz, AGUA, 24, 9, A.PixSplash, .7, .6);
          const n = this.phase >= 2 ? 3 : 2;
          for (let t = 0; t < n; t++) e.later(t * .5, () => this.waves.push({ x: this.bx, y: this.by, z: this.bz, r: 1.5, max: 24 + this.phase * 4, speed: 18, mul: 1.2, minFrac: 0, hit: false, ult: false }));
        });
        return 3;
      }
      hydroPump() {
        const e = this.run, p = e.player.pos, a = this.aimAt(p.x, p.z), ang = Math.atan2(a.z, a.x);
        const n = this.phase >= 2 ? 3 : 1;
        this.lock = 1.4; this.E.atkAnim[this.i] = 1.2;
        for (let i = 0; i < n; i++) {
          const r = ang + (i - (n - 1) / 2) * .4;
          this.line(this.bx, this.bz, this.bx + Math.cos(r) * 38, this.bz + Math.sin(r) * 38, 1.8, 1.1, 1.8, AGUA, true, A.PixWaterBall);
        }
        e.later(1.1, () => { e.vfx.flash(this.bx, this.by + 2, this.bz, AGUA, 6, .2); e.shake(.25); });
        e.audio.shot('water', .9);
        return 3;
      }
      waterSpout() {
        const e = this.run, p = e.player.pos, n = 4 + this.phase;
        this.E.atkAnim[this.i] = .8;
        e.vfx.burst(this.bx, this.by + 3, this.bz, AGUA, 24, 10, A.PixWaterBlob, .8, .6);
        e.ui.popup(this.bx, this.by + 4, this.bz, c('¡Salpicar!'), '#6ab8ff', 1);
        for (let r = 0; r < n; r++) {
          const o = { x: p.x + (r ? k.range(-11, 11) : 0), z: p.z + (r ? k.range(-11, 11) : 0) };
          e.sanctuary?.confine(o.x, o.z, 2, o);
          const x = o.x, z = o.z, y = this.groundY(x, z), sx = this.bx, sz = this.bz, sy = this.by + 3, t = 1.3 + r * .12;
          this.circle(x, z, 3, t, 1.3, AGUA, A.PixSplash, () => this.pools.push({ x, y, z, r: 2.6, t: 4 }));
          e.animate(t, u => {
            Math.random() < .7 && e.vfx.norm.spawn({ x: sx + (x - sx) * u, y: sy + (y - sy) * u + Math.sin(u * Math.PI) * 10, z: sz + (z - sz) * u, life: .25, size: 1, endSize: .5, color: 0xffffff, endColor: AGUA, shape: A.PixWaterBall });
          });
        }
        e.audio.boom(.6);
        return 3.2;
      }
      iceBeam() {
        const e = this.run, p = e.player.pos, a = this.aimAt(p.x, p.z), ang = Math.atan2(a.z, a.x);
        this.lock = 1; this.E.atkAnim[this.i] = .8;
        for (let t = 0; t < 5; t++) e.later(.3 + t * .14, () => {
          for (let j = 0; j < 7; j++) {
            const r = ang + (j - 3) * .14 + k.range(-.04, .04);
            this.shot(Math.cos(r), Math.sin(r), 13, .4, { shape: A.PixSnow, color: HIELO, life: 2.4, type: 'ice' });
          }
        });
        e.audio.cone('ice', .9);
        return 2.8;
      }
      thunder() {
        const e = this.run, p = e.player.pos, n = 3 + this.phase;
        for (let i = 0; i < n; i++) {
          const x = p.x + (i ? k.range(-9, 9) : e.player.vel.x * .8), z = p.z + (i ? k.range(-9, 9) : e.player.vel.z * .8), y = this.groundY(x, z);
          this.circle(x, z, 3, 1 + i * .12, 1.4, RAYO, A.PixBolt, () => e.vfx.lightning(x, y + 26, z, x, y, z, RAYO, .6, 9, .25));
        }
        this.E.atkAnim[this.i] = .5;
        e.ui.popup(this.bx, this.by + 4, this.bz, c('¡Trueno!'), '#ffe23a', 1);
        return 2.8;
      }
      whirlpool() {
        const e = this.run;
        this.lock = 1.6; this.E.atkAnim[this.i] = 1.4;
        e.ui.popup(this.bx, this.by + 4, this.bz, c('¡Torbellino!'), '#6ab8ff', 1);
        this.swirl = { t: 1.8, acc: 0, a: k.range(0, 6.3) };
        e.audio.shot('water', .7);
        return 3.2;
      }
      origin() {
        const e = this.run, E = this.E, i = this.i;
        this.lock = 6.5; this.cd = 2.5;
        const x = this.hx, z = this.hz + 8;
        E.x[i] = x; E.z[i] = z; E.y[i] = e.terrain.surface(x, z) + 1.1;
        e.ui.banner(c('¡Pulso Primigenio!'), c('Salta las olas gigantes'), '#ff5a8a', { species: this.species });
        e.audio.alarm();
        E.atkAnim[i] = 4;
        e.animate(1.2, () => {
          const a = k.range(0, Math.PI * 2), r = k.range(3, 7);
          e.vfx.add.spawn({ x: x + Math.cos(a) * r, y: E.y[i] + k.range(0, 4), z: z + Math.sin(a) * r, vx: -Math.cos(a) * r * 1.6, vz: -Math.sin(a) * r * 1.6, life: .6, size: .6, endSize: .1, color: ESPUMA, shape: A.Twinkle, glow: 1 });
        }, () => {
          for (let t = 0; t < 3; t++) e.later(t * .9, () => {
            this.waves.push({ x: this.bx, y: this.by, z: this.bz, r: 2, max: 54, speed: 22, mul: 2.4, minFrac: .35, hit: false, ult: true });
            this.ringShots(14, 9, .6, t * .25, { shape: A.PixWaterBall, color: AGUA, life: 4, size: 1.2 });
            e.shake(.7); e.audio.boom(1); e.$o4dswf(.06);
          });
        });
      }
      tick(dt) {
        const e = this.run, p = e.player.pos;
        ondas(this, dt, 0x4a9aff);
        if (this.swirl) {
          const s = this.swirl;
          s.t -= dt; s.acc += dt; s.a += dt * 2.4;
          if (s.acc >= .12) {
            s.acc = 0;
            for (let j = 0; j < 3; j++) {
              const r = s.a + j * Math.PI * 2 / 3;
              this.shot(Math.cos(r), Math.sin(r), 9, .35, { shape: A.PixWaterSwirl, color: AGUA, life: 3, type: 'water' });
            }
          }
          if (s.t <= 0) this.swirl = null;
        }
        this.poolHurtT -= dt;
        for (let n = this.pools.length - 1; n >= 0; n--) {
          const r = this.pools[n];
          r.t -= dt;
          if (r.t <= 0) { this.pools.splice(n, 1); continue; }
          Math.random() < dt * 6 && e.vfx.groundN.spawn({ x: r.x, y: r.y + .1, z: r.z, life: .5, size: r.r * 2, endSize: r.r * 2, color: 0x2a6ad8, shape: A.Soft, rot: 0 });
          Math.random() < dt * 8 && e.vfx.norm.spawn({ x: r.x + k.range(-r.r, r.r) * .7, y: r.y + .2, z: r.z + k.range(-r.r, r.r) * .7, vy: k.range(1, 2.5), life: .5, size: .7, endSize: .2, color: ESPUMA, shape: A.PixBubble });
          if (this.poolHurtT <= 0 && (p.x - r.x) ** 2 + (p.z - r.z) ** 2 < r.r * r.r && p.y - r.y < 1) {
            this.poolHurtT = .5;
            this.dead || e.player.hurt(e.player.maxHp * .03, 'water', -1, NaN, NaN, true, 0, this.i);
          }
        }
        // Llovizna: desde la fase 2 caen rayos sueltos cerca del jugador.
        if (this.phase >= 2 && this.immune <= 0 && !this.dead) {
          this.rainT -= dt;
          if (this.rainT <= 0) {
            this.rainT = this.phase >= 3 ? 1.6 : 2.4;
            const x = p.x + k.range(-6, 6), z = p.z + k.range(-6, 6), y = this.groundY(x, z);
            this.circle(x, z, 2.4, 1.1, .9, RAYO, A.PixBolt, () => e.vfx.lightning(x, y + 26, z, x, y, z, RAYO, .5, 8, .2));
          }
          if (Math.random() < dt * 30) {
            const x = p.x + k.range(-16, 16), z = p.z + k.range(-16, 16);
            e.vfx.norm.spawn({ x, y: p.y + 14, z, vy: -30, life: .45, size: .35, endSize: .3, color: ESPUMA, shape: A.PixDrop });
          }
        }
        if (this.phase >= 3 && this.immune <= 0 && (this.ultT -= dt) <= 0 && this.lock <= 0) { this.ultT = 15; this.origin(); }
      }
      $l5rpqv(f) {
        const e = this.run;
        for (let n = 0; n < 3; n++) e.later(n * .2, () => e.vfx.ring(this.bx, this.by, this.bz, 6 + n * 7, f === 2 ? RAYO : AGUA, .7));
        if (f === 2) e.ui.popup(this.bx, this.by + 4, this.bz, c('¡Empieza a llover!'), '#9ad8ff', 1.2);
        if (f === 3) { this.ultT = 2; this.speed = 5; }
      }
      render() { this.run.enemies.scale[this.i] = 3; }
    }

    /* ---------------- Rayquaza ---------------- */
    class Rayquaza extends UN {
      constructor(...a) {
        super(...a);
        Object.assign(this, {
          float: true, phaseNames: [c('Guardián del cielo'), c('Bloqueo Aéreo'), c('Ascenso del Dragón')],
          phaseColor: '#5aff9a', band: [10, 17], speed: 5.6,
          dash: null, dashes: 0, tornados: [], fade: 1, ultT: 9, ascent: null
        });
      }
      attack() {
        const l = this.phase === 1 ? ['pulse', 'twister', 'extreme', 'hyper']
          : ['pulse', 'twister', 'extreme', 'hyper', 'outrage', 'meteor'];
        switch (this.pick(l)) {
          case 'pulse': return this.dragonPulse();
          case 'twister': return this.twister();
          case 'extreme': return this.extremeSpeed(1);
          case 'hyper': return this.hyperBeam();
          case 'outrage': return this.extremeSpeed(3);
          default: return this.dracoMeteor();
        }
      }
      dragonPulse() {
        const e = this.run, n = this.phase >= 3 ? 5 : 3;
        for (let t = 0; t < n; t++) e.later(t * .28, () => {
          const p = e.player.pos, a = this.aimAt(p.x, p.z), r = Math.atan2(a.z, a.x) + (t - (n - 1) / 2) * .35;
          this.shot(Math.cos(r), Math.sin(r), 9, 1, { shape: A.PixDragonFire, color: DRAGON, homing: true, life: 4, size: 1.5, type: 'dragon' });
          this.E.atkAnim[this.i] = .3; e.audio.shot('dragon', .6);
        });
        return 2.6;
      }
      twister() {
        const e = this.run, n = 3 + this.phase;
        this.E.atkAnim[this.i] = .7;
        e.ui.popup(this.bx, this.by + 4, this.bz, c('¡Ciclón!'), '#7affb0', 1);
        for (let i = 0; i < n; i++) this.tornados.push({ a: i / n * Math.PI * 2, r: 2, t: 4.5, x: this.bx, z: this.bz, hitT: 0 });
        e.audio.whoosh();
        return 3;
      }
      extremeSpeed(n) {
        const e = this.run;
        this.lock = .9 + n * .75; this.dashes = n;
        e.ui.popup(this.bx, this.by + 4, this.bz, n > 1 ? c('¡Enfado!') : c('¡Velocidad Extrema!'), n > 1 ? '#ff6a4a' : '#ffffff', 1);
        this.nextDash();
        return 2.4 + n * .7;
      }
      nextDash() {
        if (this.dashes-- <= 0 || this.dead) return;
        const e = this.run, p = e.player.pos, a = this.aimAt(p.x + e.player.vel.x * .5, p.z + e.player.vel.z * .5);
        // La línea de daño pasa de largo al jugador, pero Rayquaza frena 3 m antes:
        // si lo cruzara quedaría entre la cámara y el jugador y taparía la pantalla.
        const len = Math.min(32, a.d + 7), o = { x: this.bx + a.x * len, z: this.bz + a.z * len };
        const fin = Math.max(0, Math.min(len, a.d - 3)), q = { x: this.bx + a.x * fin, z: this.bz + a.z * fin };
        e.sanctuary?.confine(q.x, q.z, 3, q);
        const x0 = this.bx, z0 = this.bz, w = .7;
        this.line(x0, z0, o.x, o.z, 1.6, w, 1.5, VERDE, true, A.PixSlash);
        e.later(w, () => { this.dash = { t: 0, dur: .2, x0, z0, x1: q.x, z1: q.z }; e.audio.whoosh(); });
        e.later(w + .5, () => this.nextDash());
      }
      hyperBeam() {
        const e = this.run, p = e.player.pos, a = this.aimAt(p.x, p.z), r = 1.4;
        this.lock = 2; this.E.atkAnim[this.i] = r;
        e.animate(r, () => {
          const t = k.range(0, Math.PI * 2), d = k.range(2, 5);
          e.vfx.add.spawn({ x: this.bx + Math.cos(t) * d, y: this.by + k.range(0, 4), z: this.bz + Math.sin(t) * d, vx: -Math.cos(t) * d * 2, vz: -Math.sin(t) * d * 2, life: .5, size: .5, endSize: .1, color: ORO, shape: A.Twinkle, glow: .9 });
        });
        const n = this.phase >= 3 ? 3 : 1, ang = Math.atan2(a.z, a.x);
        for (let i = 0; i < n; i++) {
          const q = ang + (i - (n - 1) / 2) * .5;
          this.line(this.bx, this.bz, this.bx + Math.cos(q) * 42, this.bz + Math.sin(q) * 42, 2.2, r, 2.2, ORO, true, A.Twinkle);
        }
        e.later(r, () => { e.vfx.flash(this.bx, this.by + 2, this.bz, ORO, 7, .2); e.shake(.35); });
        e.audio.charge?.();
        return 3.2;
      }
      dracoMeteor() {
        const e = this.run, p = e.player.pos, n = 4 + this.phase;
        this.E.atkAnim[this.i] = .7;
        e.ui.popup(this.bx, this.by + 4, this.bz, c('¡Cometa Draco!'), '#b08aff', 1);
        e.vfx.burst(this.bx, this.by + 3, this.bz, DRAGON, 20, 10, A.PixStar, .7, .6);
        for (let i = 0; i < n; i++) {
          const o = { x: p.x + (i ? k.range(-9, 9) : e.player.vel.x), z: p.z + (i ? k.range(-9, 9) : e.player.vel.z) };
          e.sanctuary?.confine(o.x, o.z, 2, o);
          const t = 1.2 + i * .14, y = this.groundY(o.x, o.z);
          this.circle(o.x, o.z, 3.2, t, 1.5, DRAGON, A.PixStar);
          e.vfx.norm.spawn({ x: o.x, y: y + 16, z: o.z, vy: -16 / t, life: t, size: 2.4, endSize: 2.4, color: 0xffffff, shape: A.PixDragonFire, spin: 3 });
        }
        e.audio.shot('dragon', .8);
        return 3;
      }
      dragonAscent() {
        const e = this.run;
        this.lock = 8; this.cd = 2.5;
        e.ui.banner(c('¡Ascenso del Dragón!'), c('No te quedes quieto y ponte a cubierto al final'), '#ff5a8a', { species: this.species });
        e.audio.alarm();
        e.vfx.burst(this.bx, this.by + 1, this.bz, VERDE, 30, 10, A.PixSparkle, .7, .7);
        this.ascent = { fadeOut: true };
        e.animate(.6, u => { this.fade = 1 - u; }, () => {
          // Mientras está en el cielo no se queda invisible junto al jugador.
          { const E = this.E, i = this.i, x = this.hx, z = this.hz + 8; E.x[i] = x; E.z[i] = z; E.y[i] = e.terrain.surface(x, z) + 1.4; this.immune = 4.6; }
          const golpes = 4;
          for (let g = 0; g < golpes; g++) e.later(.4 + g * 1.05, () => {
            if (this.dead) return;
            const p = e.player.pos, o = { x: p.x + e.player.vel.x * .6, z: p.z + e.player.vel.z * .6 };
            e.sanctuary?.confine(o.x, o.z, 3, o);
            this.circle(o.x, o.z, 4, .9, 1.6, VERDE, A.PixSparkle, () => {
              const y = this.groundY(o.x, o.z);
              e.vfx.lightning(o.x, y + 26, o.z, o.x, y, o.z, VERDE, .5, 9, .25);
              e.vfx.burst(o.x, y + 1, o.z, VERDE, 24, 9, A.PixSparkle, .6, .6); e.shake(.3, o.x, o.z);
            });
          });
          e.later(.4 + golpes * 1.05, () => {
            const E = this.E, i = this.i, x = this.hx, z = this.hz + 8;
            E.x[i] = x; E.z[i] = z; E.y[i] = e.terrain.surface(x, z) + 1.4;
            e.animate(.4, u => { this.fade = u; }, () => { this.fade = 1; this.ascent = null; });
            this.cataclysm(x, E.y[i] + 1, z, 3.6, 3, .45, VERDE, c('¡Ascenso del Dragón!'), c('Ponte a cubierto detrás de algo'));
          });
        });
      }
      tick(dt) {
        const e = this.run, E = this.E, i = this.i, p = e.player.pos;
        if (this.dash) {
          const d = this.dash;
          d.t += dt;
          const u = Math.min(1, d.t / d.dur);
          E.x[i] = d.x0 + (d.x1 - d.x0) * u; E.z[i] = d.z0 + (d.z1 - d.z0) * u;
          E.vx[i] = E.vz[i] = 0;
          E.y[i] = e.terrain.surface(E.x[i], E.z[i]) + 1.4;
          e.vfx.trail?.(E.x[i], E.y[i] + 1, E.z[i], VERDE);
          Math.random() < .6 && e.vfx.norm.spawn({ x: E.x[i], y: E.y[i] + 1, z: E.z[i], life: .35, size: 1.6, endSize: .3, color: VERDE, shape: A.PixSparkle });
          if (u >= 1) { this.dash = null; e.shake(.2, E.x[i], E.z[i]); }
        }
        for (let n = this.tornados.length - 1; n >= 0; n--) {
          const t = this.tornados[n];
          t.t -= dt; t.a += dt * 1.6; t.r += dt * 4.5; t.hitT -= dt;
          const x = t.x + Math.cos(t.a) * t.r, z = t.z + Math.sin(t.a) * t.r, y = this.groundY(x, z);
          e.orbitals.push(x, y + 1.4 + Math.sin(e.time * 8 + n) * .2, z, 2.2, 0xd8ffe8, A.PixTornado, e.time * 6, .2);
          if (t.hitT <= 0 && Math.hypot(p.x - x, p.z - z) < 1.8 && this.playerLow(y, 2.6)) { t.hitT = 1; this.hurt(.9, 0, 'flying'); }
          if (t.t <= 0) this.tornados.splice(n, 1);
        }
        if (this.phase >= 3 && this.immune <= 0 && !this.ascent && (this.ultT -= dt) <= 0 && this.lock <= 0) { this.ultT = 16; this.dragonAscent(); }
      }
      $l5rpqv(f) {
        const e = this.run;
        this.tornados.length = 0; this.dash = null;
        for (let n = 0; n < 3; n++) e.later(n * .2, () => e.vfx.ring(this.bx, this.by, this.bz, 6 + n * 7, f === 2 ? 0xffffff : VERDE, .7));
        if (f === 2) { this.speed = 6.2; this.barrierRate = 1.1; }
        if (f === 3) { this.ultT = 2; this.speed = 6.6; }
      }
      render() { this.run.enemies.scale[this.i] = 3.2 * Math.max(.05, this.fade); }
    }

    return { 382: Kyogre, 384: Rayquaza };
  }

  window.PB_KITS = {
    kit(run, i, dep) {
      const sp = run.enemies.species[i];
      if (sp !== 382 && sp !== 384) return null;
      clases ??= crear(dep);
      return new clases[sp](run, i);
    }
  };
})();
