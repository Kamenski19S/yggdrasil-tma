import * as THREE from "three";

type MagicColor = "green" | "gold";

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  baseScale: number;
  rotationSpeed: THREE.Vector3;
}

export class VFXEngine {
  private scene: THREE.Scene;
  private root: THREE.Group;
  private particles: Particle[] = [];
  private auraObjects: THREE.Object3D[] = [];
  private disposed = false;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.root = new THREE.Group();
    this.root.name = "YggdrasilVFX";
    this.scene.add(this.root);
  }

  /**
   * Adds a lightweight fire effect.
   */
  addFire(position: THREE.Vector3, scale = 1): THREE.Group {
    const group = new THREE.Group();
    group.name = "Fire";

    group.position.copy(position);
    group.scale.setScalar(scale);

    const flameMaterial = new THREE.MeshBasicMaterial({
      color: 0xff7a18,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const flameGeometry = new THREE.SphereGeometry(0.16, 8, 8);
    const coreGeometry = new THREE.SphereGeometry(0.09, 8, 8);

    const flame = new THREE.Mesh(flameGeometry, flameMaterial);
    flame.scale.set(1, 1.7, 1);
    flame.position.y = 0.12;

    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.y = 0.08;

    group.add(flame);
    group.add(core);

    this.root.add(group);

    return group;
  }

  /**
   * Adds lightweight smoke particles.
   */
  addSmoke(position: THREE.Vector3, scale = 1): THREE.Group {
    const group = new THREE.Group();
    group.name = "Smoke";

    group.position.copy(position);
    group.scale.setScalar(scale);

    const material = new THREE.MeshBasicMaterial({
      color: 0x9a9a9a,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });

    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.SphereGeometry(
        0.08 + Math.random() * 0.06,
        7,
        7
      );

      const mesh = new THREE.Mesh(geometry, material.clone());

      mesh.position.set(
        (Math.random() - 0.5) * 0.18,
        0.15 + i * 0.13,
        (Math.random() - 0.5) * 0.18
      );

      const particle: Particle = {
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          0.015 + Math.random() * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
        life: Math.random(),
        maxLife: 1.5 + Math.random(),
        baseScale: 0.8 + Math.random() * 0.5,
        rotationSpeed: new THREE.Vector3(
          Math.random() * 0.01,
          Math.random() * 0.01,
          Math.random() * 0.01
        ),
      };

      this.particles.push(particle);
      group.add(mesh);
    }

    this.root.add(group);

    return group;
  }

  /**
   * Adds a magical aura.
   */
  addMagicAura(
    position: THREE.Vector3,
    color: MagicColor,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();
    group.name = `MagicAura_${color}`;

    group.position.copy(position);
    group.scale.setScalar(scale);

    const hexColor = color === "green" ? 0x45ff9a : 0xffd35a;

    const material = new THREE.MeshBasicMaterial({
      color: hexColor,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
      depthWrite: false,
    });

    const geometry = new THREE.SphereGeometry(0.45, 12, 8);
    const aura = new THREE.Mesh(geometry, material);

    group.add(aura);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: hexColor,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const ringGeometry = new THREE.RingGeometry(0.28, 0.34, 32);
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);

    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.42;

    group.add(ring);

    this.auraObjects.push(group);
    this.root.add(group);

    return group;
  }

  /**
   * Updates VFX.
   *
   * The main game passes time in seconds,
   * therefore the value can be absolute time or elapsed time.
   */
  update(time: number): void {
    if (this.disposed) return;

    const t = Number.isFinite(time) ? time : 0;

    // Animate magical auras.
    for (let i = 0; i < this.auraObjects.length; i++) {
      const object = this.auraObjects[i];

      object.rotation.y = t * (0.35 + i * 0.03);

      const pulse =
        1 + Math.sin(t * 2.2 + i) * 0.08;

      object.scale.setScalar(pulse);

      const aura = object.children[0];

      if (aura instanceof THREE.Mesh) {
        aura.rotation.x = t * 0.25;
        aura.rotation.z = t * 0.18;
      }

      const ring = object.children[1];

      if (ring instanceof THREE.Mesh) {
        ring.rotation.z = t * 0.7;
      }
    }

    // Animate smoke.
    for (const particle of this.particles) {
      particle.life += 0.016;

      particle.mesh.position.add(particle.velocity);

      particle.mesh.rotation.x += particle.rotationSpeed.x;
      particle.mesh.rotation.y += particle.rotationSpeed.y;
      particle.mesh.rotation.z += particle.rotationSpeed.z;

      const progress =
        (particle.life % particle.maxLife) / particle.maxLife;

      const scale =
        particle.baseScale * (0.7 + progress * 0.8);

      particle.mesh.scale.setScalar(scale);

      const material = particle.mesh.material;

      if (material instanceof THREE.MeshBasicMaterial) {
        material.opacity =
          0.22 * (1 - progress);
      }
    }
  }

  /**
   * Removes all VFX objects.
   */
  dispose(): void {
    if (this.disposed) return;

    this.disposed = true;

    this.root.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          for (const material of object.material) {
            material.dispose();
          }
        } else {
          object.material.dispose();
        }
      }
    });

    this.scene.remove(this.root);

    this.particles.length = 0;
    this.auraObjects.length = 0;
  }
}

export default VFXEngine;
