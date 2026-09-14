import * as THREE from "three";

type Emitter = {
  root: THREE.Group;
  particles: THREE.Mesh[];
  phase: number;
  speed: number;
  spread: number;
  life: number;
  kind: "fire" | "smoke" | "magic";
  baseY: number;
};

/**
 * Lightweight visual-effects engine for Yggdrasil Runes.
 * Designed for mobile/WebGL: small particle counts, shared materials,
 * no post-processing pipeline, and one update loop for all effects.
 */
export class VFXEngine {
  readonly root = new THREE.Group();
  private emitters: Emitter[] = [];
  private pulseObjects: Array<{
    object: THREE.Object3D;
    base: number;
    speed: number;
    amount: number;
  }> = [];
  private shared: Record<string, THREE.Material> = {};

  constructor(scene: THREE.Scene) {
    this.root.name = "YggdrasilVFX";
    scene.add(this.root);

    this.shared.fire = new THREE.MeshBasicMaterial({
      color: 0xff8a2b,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
    });

    this.shared.fireHot = new THREE.MeshBasicMaterial({
      color: 0xffd36a,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
    });

    this.shared.smoke = new THREE.MeshBasicMaterial({
      color: 0x9b9a93,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
    });

    this.shared.magic = new THREE.MeshBasicMaterial({
      color: 0x78e6a2,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });

    this.shared.magicGold = new THREE.MeshBasicMaterial({
      color: 0xffd76a,
      transparent: true,
      opacity: 0.68,
      depthWrite: false,
    });
  }

  addFire(position: THREE.Vector3, scale = 1) {
    const root = new THREE.Group();
    root.position.copy(position);
    root.name = "FireEmitter";

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.34 * scale, 8, 6),
      this.shared.fireHot
    );
    core.scale.set(0.85, 1.55, 0.75);
    root.add(core);

    const outer = new THREE.Mesh(
      new THREE.SphereGeometry(0.48 * scale, 8, 6),
      this.shared.fire
    );
    outer.scale.set(0.85, 1.35, 0.72);
    root.add(outer);

    const light = new THREE.PointLight(0xff8a32, 1.7, 7 * scale);
    light.position.y = 0.15 * scale;
    root.add(light);

    this.root.add(root);
    this.pulseObjects.push({ object: core, base: 1, speed: 5.2, amount: 0.12 });
    this.pulseObjects.push({ object: outer, base: 1, speed: 4.1, amount: 0.16 });

    this.addEmitter(root, "fire", 7, 1.8, 0.45, 1.2, scale);
    return root;
  }

  addSmoke(position: THREE.Vector3, scale = 1) {
    const root = new THREE.Group();
    root.position.copy(position);
    root.name = "SmokeEmitter";
    this.root.add(root);

    this.addEmitter(root, "smoke", 7, 0.55, 0.55, 3.0, scale);
    return root;
  }

  addMagicAura(
    position: THREE.Vector3,
    color: "green" | "gold" = "green",
    scale = 1
  ) {
    const root = new THREE.Group();
    root.position.copy(position);
    root.name = "MagicAura";

    const material =
      color === "gold" ? this.shared.magicGold : this.shared.magic;

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.78 * scale, 0.045 * scale, 6, 24),
      material
    );
    ring.rotation.x = Math.PI / 2;
    root.add(ring);

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.11 * scale, 8, 6),
      material
    );
    orb.position.y = 0.16 * scale;
    root.add(orb);

    this.root.add(root);
    this.pulseObjects.push({ object: ring, base: 1, speed: 1.8, amount: 0.12 });
    this.pulseObjects.push({ object: orb, base: 1, speed: 3.0, amount: 0.22 });

    this.addEmitter(root, "magic", 6, 0.75, 0.8, 1.8, scale);
    return root;
  }

  update(timeSeconds: number) {
    for (const pulse of this.pulseObjects) {
      const s =
        pulse.base +
        Math.sin(timeSeconds * pulse.speed) * pulse.amount;
      pulse.object.scale.setScalar(s);
    }

    for (const emitter of this.emitters) {
      emitter.phase += 0.016 * emitter.speed;

      emitter.particles.forEach((p, i) => {
        const seed = emitter.phase + i * 1.71;
        const age =
          (seed * 0.37 + i * 0.17) % emitter.life;
        const t = age / emitter.life;

        if (emitter.kind === "fire") {
          p.position.x =
            Math.sin(seed * 1.7) *
            emitter.spread *
            (0.35 + t);
          p.position.z =
            Math.cos(seed * 1.3) *
            emitter.spread *
            (0.35 + t);
          p.position.y =
            emitter.baseY + t * 1.65;

          const s = (1 - t) * 0.22 + 0.035;
          p.scale.setScalar(s);
          (p.material as THREE.MeshBasicMaterial).opacity =
            Math.max(0, 0.78 * (1 - t));
        } else if (emitter.kind === "smoke") {
          p.position.x =
            Math.sin(seed * 0.8) *
            emitter.spread *
            (0.4 + t);
          p.position.z =
            Math.cos(seed * 0.65) *
            emitter.spread *
            (0.4 + t);
          p.position.y =
            emitter.baseY + t * 2.8;

          const s = 0.12 + t * 0.34;
          p.scale.setScalar(s);
          (p.material as THREE.MeshBasicMaterial).opacity =
            0.15 * (1 - t);
        } else {
          const angle = seed * 1.7;
          const radius =
            emitter.spread * (0.35 + t * 0.65);

          p.position.x = Math.cos(angle) * radius;
          p.position.z = Math.sin(angle) * radius;
          p.position.y =
            emitter.baseY +
            Math.sin(seed * 1.2) * 0.18 +
            t * 0.55;

          const s = 0.035 + (1 - t) * 0.06;
          p.scale.setScalar(s);
          (p.material as THREE.MeshBasicMaterial).opacity =
            0.65 * (1 - t);
        }
      });
    }
  }

  dispose() {
    this.emitters = [];
    this.pulseObjects = [];

    this.root.traverse((o: any) => {
      if (o.geometry) o.geometry.dispose();
    });

    Object.values(this.shared).forEach((m) => m.dispose());
    this.root.removeFromParent();
  }

  private addEmitter(
    root: THREE.Group,
    kind: Emitter["kind"],
    count: number,
    speed: number,
    spread: number,
    life: number,
    scale: number
  ) {
    const particles: THREE.Mesh[] = [];

    const material =
      kind === "fire"
        ? this.shared.fire
        : kind === "smoke"
          ? this.shared.smoke
          : this.shared.magic;

    const geometry =
      kind === "smoke"
        ? new THREE.SphereGeometry(0.18 * scale, 6, 5)
        : new THREE.SphereGeometry(0.10 * scale, 6, 5);

    for (let i = 0; i < count; i++) {
      const p = new THREE.Mesh(geometry, material);
      p.position.set(
        (i - count / 2) * 0.03,
        0.1 + i * 0.02,
        0
      );
      root.add(p);
      particles.push(p);
    }

    this.emitters.push({
      root,
      particles,
      phase: Math.random() * 10,
      speed,
      spread,
      life,
      kind,
      baseY: 0.18 * scale,
    });
  }
}
