import * as THREE from "three";

/**
 * Yggdrasil Runes — VFX Engine
 *
 * Лёгкий движок визуальных эффектов для Three.js.
 * Рассчитан на Telegram Mini App и мобильные устройства.
 */

export type VFXKind =
  | "fire"
  | "spark"
  | "magic"
  | "rune"
  | "portal"
  | "fog"
  | "ice"
  | "lightning"
  | "heal";

type Particle = {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  gravity: number;
  spin: number;
  startScale: number;
};

type RingEffect = {
  mesh: THREE.Mesh;
  life: number;
  maxLife: number;
  startScale: number;
  endScale: number;
  rotationSpeed: number;
};

type LightEffect = {
  light: THREE.PointLight;
  life: number;
  maxLife: number;
  startIntensity: number;
};

export class VFXEngine {
  private readonly scene: THREE.Scene;

  private readonly particles: Particle[] = [];
  private readonly rings: RingEffect[] = [];
  private readonly lights: LightEffect[] = [];

  private readonly maxParticles = 180;
  private readonly maxRings = 24;
  private readonly maxLights = 10;

  private readonly particleGeometry =
    new THREE.SphereGeometry(0.055, 6, 6);

  private readonly sparkGeometry =
    new THREE.BoxGeometry(0.045, 0.045, 0.045);

  private readonly ringGeometry =
    new THREE.RingGeometry(0.72, 0.82, 24);

  private readonly materials =
    new Map<string, THREE.MeshBasicMaterial>();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  private material(
    key: string,
    color: number,
    opacity = 1,
    blending = THREE.AdditiveBlending
  ): THREE.MeshBasicMaterial {
    const cached = this.materials.get(key);

    if (cached) {
      return cached;
    }

    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: opacity < 1,
      opacity,
      depthWrite: false,
      blending
    });

    this.materials.set(key, mat);

    return mat;
  }

  private addParticle(
    position: THREE.Vector3,
    color: number,
    velocity: THREE.Vector3,
    life: number,
    size: number,
    gravity = 0,
    kind: "round" | "spark" = "round"
  ) {
    if (this.particles.length >= this.maxParticles) {
      this.removeParticle(0);
    }

    const geometry =
      kind === "spark"
        ? this.sparkGeometry
        : this.particleGeometry;

    const material = this.material(
      `particle-${color.toString(16)}`,
      color,
      0.95
    );

    const mesh = new THREE.Mesh(
      geometry,
      material
    );

    mesh.position.copy(position);

    mesh.scale.setScalar(size);

    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );

    this.scene.add(mesh);

    this.particles.push({
      mesh,
      velocity: velocity.clone(),
      life,
      maxLife: life,
      gravity,
      spin: (Math.random() - 0.5) * 8,
      startScale: size
    });
  }

  private removeParticle(index: number) {
    const particle = this.particles[index];

    if (!particle) {
      return;
    }

    this.scene.remove(particle.mesh);

    this.particles.splice(index, 1);
  }

  private addRing(
    position: THREE.Vector3,
    color: number,
    scale = 1,
    life = 0.8
  ) {
    if (this.rings.length >= this.maxRings) {
      const old = this.rings.shift();

      if (old) {
        this.scene.remove(old.mesh);
      }
    }

    const mesh = new THREE.Mesh(
      this.ringGeometry,
      this.material(
        `ring-${color.toString(16)}`,
        color,
        0.85
      )
    );

    mesh.position.copy(position);

    mesh.rotation.x = -Math.PI / 2;

    mesh.scale.setScalar(scale * 0.2);

    this.scene.add(mesh);

    this.rings.push({
      mesh,
      life,
      maxLife: life,
      startScale: scale * 0.2,
      endScale: scale,
      rotationSpeed:
        (Math.random() - 0.5) * 2
    });
  }

  private addLight(
    position: THREE.Vector3,
    color: number,
    intensity: number,
    distance: number,
    life: number
  ) {
    if (this.lights.length >= this.maxLights) {
      const old = this.lights.shift();

      if (old) {
        this.scene.remove(old.light);
      }
    }

    const light = new THREE.PointLight(
      color,
      intensity,
      distance,
      2
    );

    light.position.copy(position);

    this.scene.add(light);

    this.lights.push({
      light,
      life,
      maxLife: life,
      startIntensity: intensity
    });
  }

  fire(
    position: THREE.Vector3,
    power = 1
  ) {
    const count = Math.min(
      14,
      Math.round(8 * power)
    );

    for (let i = 0; i < count; i++) {
      const p = position.clone().add(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.25,
          Math.random() * 0.18,
          (Math.random() - 0.5) * 0.25
        )
      );

      const velocity =
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.45,
          0.8 + Math.random() * 0.9,
          (Math.random() - 0.5) * 0.45
        ).multiplyScalar(power);

      const color =
        Math.random() > 0.45
          ? 0xff7a18
          : 0xffd34e;

      this.addParticle(
        p,
        color,
        velocity,
        0.45 + Math.random() * 0.35,
        0.7,
        -0.45
      );
    }

    this.addLight(
      position,
      0xff8a24,
      1.2 * power,
      3.5,
      0.28
    );
  }

  sparks(
    position: THREE.Vector3,
    power = 1
  ) {
    const count = Math.min(
      20,
      Math.round(12 * power)
    );

    for (let i = 0; i < count; i++) {
      const velocity =
        new THREE.Vector3(
          (Math.random() - 0.5) * 2.2,
          0.5 + Math.random() * 2.2,
          (Math.random() - 0.5) * 2.2
        ).multiplyScalar(power);

      this.addParticle(
        position,
        0xffd36a,
        velocity,
        0.25 + Math.random() * 0.3,
        0.65,
        -2.8,
        "spark"
      );
    }
  }

  magic(
    position: THREE.Vector3,
    power = 1
  ) {
    const count = Math.min(
      24,
      Math.round(16 * power)
    );

    for (let i = 0; i < count; i++) {
      const a =
        Math.random() * Math.PI * 2;

      const r =
        Math.random() * 0.5;

      const p =
        position.clone().add(
          new THREE.Vector3(
            Math.cos(a) * r,
            Math.random() * 0.7,
            Math.sin(a) * r
          )
        );

      const velocity =
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.7,
          0.6 + Math.random() * 1.2,
          (Math.random() - 0.5) * 0.7
        ).multiplyScalar(power);

      this.addParticle(
        p,
        Math.random() > 0.5
          ? 0x55c8ff
          : 0x9a6cff,
        velocity,
        0.55 + Math.random() * 0.5,
        0.8,
        -0.35
      );
    }

    this.addRing(
      position,
      0x65cfff,
      1.5 * power,
      0.7
    );

    this.addLight(
      position,
      0x4da9ff,
      1.1 * power,
      4,
      0.35
    );
  }

  rune(
    position: THREE.Vector3,
    power = 1
  ) {
    this.addRing(
      position,
      0x4fd7ff,
      1.7 * power,
      1.1
    );

    const count = Math.min(
      28,
      Math.round(18 * power)
    );

    for (let i = 0; i < count; i++) {
      const a =
        (i / count) * Math.PI * 2;

      const radius =
        0.55 + Math.random() * 0.25;

      const p =
        position.clone().add(
          new THREE.Vector3(
            Math.cos(a) * radius,
            0.05 + Math.random() * 0.35,
            Math.sin(a) * radius
          )
        );

      const outward =
        new THREE.Vector3(
          Math.cos(a),
          0.5 + Math.random() * 0.8,
          Math.sin(a)
        );

      this.addParticle(
        p,
        0x8eeaff,
        outward.multiplyScalar(
          0.7 * power
        ),
        0.7 + Math.random() * 0.45,
        0.7
      );
    }

    this.addLight(
      position,
      0x5ecbff,
      1.5 * power,
      5,
      0.8
    );
  }

  portal(
    position: THREE.Vector3,
    power = 1
  ) {
    this.addRing(
      position,
      0x7c62ff,
      2.1 * power,
      1.3
    );

    for (let i = 0; i < 22; i++) {
      const a =
        Math.random() * Math.PI * 2;

      const radius =
        1.2 + Math.random() * 0.7;

      const p =
        position.clone().add(
          new THREE.Vector3(
            Math.cos(a) * radius,
            Math.random() * 1.2,
            Math.sin(a) * radius
          )
        );

      const target =
        position.clone()
          .sub(p)
          .normalize();

      this.addParticle(
        p,
        0xa78bff,
        target.multiplyScalar(
          0.9 * power
        ),
        0.7 + Math.random() * 0.5,
        0.75
      );
    }

    this.addLight(
      position,
      0x7658ff,
      2 * power,
      6,
      1
    );
  }

  ice(
    position: THREE.Vector3,
    power = 1
  ) {
    const count = Math.min(
      18,
      Math.round(10 * power)
    );

    for (let i = 0; i < count; i++) {
      const velocity =
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          0.15 + Math.random() * 0.7,
          (Math.random() - 0.5) * 0.5
        );

      this.addParticle(
        position.clone().add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.8,
            Math.random() * 0.5,
            (Math.random() - 0.5) * 0.8
          )
        ),
        0xbfefff,
        velocity,
        0.8 + Math.random() * 0.7,
        0.6,
        -0.15
      );
    }

    this.addRing(
      position,
      0x9edfff,
      1.4 * power,
      0.9
    );
  }

  heal(
    position: THREE.Vector3,
    power = 1
  ) {
    for (
      let i = 0;
      i < Math.min(18, Math.round(12 * power));
      i++
    ) {
      const a =
        Math.random() * Math.PI * 2;

      this.addParticle(
        position.clone().add(
          new THREE.Vector3(
            Math.cos(a) *
              Math.random() *
              0.6,
            Math.random() * 0.3,
            Math.sin(a) *
              Math.random() *
              0.6
          )
        ),
        0x72ffb0,
        new THREE.Vector3(
          0,
          0.6 + Math.random() * 0.8,
          0
        ),
        0.8 + Math.random() * 0.5,
        0.7
      );
    }

    this.addRing(
      position,
      0x6dffb0,
      1.2 * power,
      0.75
    );
  }

  lightning(
    position: THREE.Vector3,
    power = 1
  ) {
    const points: THREE.Vector3[] = [
      position.clone()
    ];

    let current =
      position.clone();

    for (let i = 0; i < 5; i++) {
      current =
        current.clone().add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.7,
            0.4 + Math.random() * 0.5,
            (Math.random() - 0.5) * 0.7
          )
        );

      points.push(current);
    }

    const geometry =
      new THREE.BufferGeometry()
        .setFromPoints(points);

    const material =
      new THREE.LineBasicMaterial({
        color: 0xd9f6ff,
        transparent: true,
        opacity: 0.95
      });

    const line =
      new THREE.Line(
        geometry,
        material
      );

    this.scene.add(line);

    window.setTimeout(() => {
      this.scene.remove(line);

      geometry.dispose();
      material.dispose();
    }, Math.max(
      70,
      Math.round(
        110 /
          Math.max(power, 0.2)
      )
    ));
  }

  fog(
    position: THREE.Vector3,
    radius = 2
  ) {
    for (let i = 0; i < 8; i++) {
      const p =
        position.clone().add(
          new THREE.Vector3(
            (Math.random() - 0.5) *
              radius,
            Math.random() * 1.2,
            (Math.random() - 0.5) *
              radius
          )
        );

      this.addParticle(
        p,
        0xc8d5df,
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.12,
          0.04,
          (Math.random() - 0.5) * 0.12
        ),
        1.5 + Math.random(),
        1.8
      );
    }
  }

  update(delta: number) {
    const dt =
      Math.min(delta, 0.05);

    for (
      let i = this.particles.length - 1;
      i >= 0;
      i--
    ) {
      const p =
        this.particles[i];

      p.life -= dt;

      if (p.life <= 0) {
        this.removeParticle(i);
        continue;
      }

      p.velocity.y +=
        p.gravity * dt;

      p.mesh.position
        .addScaledVector(
          p.velocity,
          dt
        );

      p.mesh.rotation.x +=
        p.spin * dt;

      p.mesh.rotation.y +=
        p.spin * 0.7 * dt;

      const lifeRatio =
        Math.max(
          0,
          p.life / p.maxLife
        );

      const scale =
        p.startScale *
        (0.35 + lifeRatio * 0.65);

      p.mesh.scale
        .setScalar(scale);
    }

    for (
      let i = this.rings.length - 1;
      i >= 0;
      i--
    ) {
      const r =
        this.rings[i];

      r.life -= dt;

      if (r.life <= 0) {
        this.scene.remove(
          r.mesh
        );

        this.rings.splice(i, 1);

        continue;
      }

      const t =
        1 -
        r.life / r.maxLife;

      const scale =
        THREE.MathUtils.lerp(
          r.startScale,
          r.endScale,
          t
        );

      r.mesh.scale
        .setScalar(scale);

      r.mesh.rotation.z +=
        r.rotationSpeed * dt;

      const material =
        r.mesh.material as
          THREE.MeshBasicMaterial;

      material.opacity =
        Math.max(
          0,
          0.85 * (1 - t)
        );
    }

    for (
      let i = this.lights.length - 1;
      i >= 0;
      i--
    ) {
      const l =
        this.lights[i];

      l.life -= dt;

      if (l.life <= 0) {
        this.scene.remove(
          l.light
        );

        this.lights.splice(i, 1);

        continue;
      }

      const t =
        l.life / l.maxLife;

      l.light.intensity =
        l.startIntensity * t;
    }
  }

  clear() {
    for (const p of this.particles) {
      this.scene.remove(p.mesh);
    }

    for (const r of this.rings) {
      this.scene.remove(r.mesh);
    }

    for (const l of this.lights) {
      this.scene.remove(l.light);
    }

    this.particles.length = 0;
    this.rings.length = 0;
    this.lights.length = 0;
  }

  dispose() {
    this.clear();

    this.particleGeometry.dispose();
    this.sparkGeometry.dispose();
    this.ringGeometry.dispose();

    for (const material of this.materials.values()) {
      material.dispose();
    }

    this.materials.clear();
  }
}

export default VFXEngine;
