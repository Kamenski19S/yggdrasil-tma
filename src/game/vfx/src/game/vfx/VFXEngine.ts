import * as THREE from "three";

export type VFXType =
  | "rune"
  | "fire"
  | "spark"
  | "smoke"
  | "magic"
  | "portal"
  | "lightning"
  | "frost"
  | "dust"
  | "heal"
  | "impact";

export interface VFXOptions {
  type: VFXType;
  position: THREE.Vector3;
  color?: THREE.ColorRepresentation;
  scale?: number;
  duration?: number;
  intensity?: number;
  direction?: THREE.Vector3;
}

interface ActiveEffect {
  object: THREE.Object3D;
  type: VFXType;
  age: number;
  duration: number;
  intensity: number;
  velocity?: THREE.Vector3;
  baseScale: number;
  light?: THREE.PointLight;
}

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  rotationSpeed: THREE.Vector3;
  gravity: number;
}

/**
 * YGGDRASIL RUNES
 * VFX Engine
 *
 * Центральный менеджер визуальных эффектов 3D мира.
 *
 * Создан так, чтобы:
 * - работать без сервера;
 * - работать в Telegram Mini App;
 * - не создавать тысячи объектов;
 * - автоматически удалять завершённые эффекты;
 * - позволять постепенно добавлять новые эффекты.
 */
export class VFXEngine {
  private scene: THREE.Scene;

  private effects: ActiveEffect[] = [];

  private particles: Particle[] = [];

  private readonly maxEffects = 80;
  private readonly maxParticles = 350;

  private particleGeometry: THREE.SphereGeometry;
  private smallParticleGeometry: THREE.SphereGeometry;

  private materials = new Map<string, THREE.MeshBasicMaterial>();

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.particleGeometry = new THREE.SphereGeometry(0.055, 6, 6);
    this.smallParticleGeometry = new THREE.SphereGeometry(0.025, 5, 5);
  }

  /**
   * Универсальный запуск эффекта.
   */
  play(options: VFXOptions): THREE.Object3D | null {
    if (this.effects.length >= this.maxEffects) {
      this.removeOldestEffect();
    }

    const scale = options.scale ?? 1;
    const duration = options.duration ?? 1;
    const intensity = options.intensity ?? 1;

    let object: THREE.Object3D | null = null;

    switch (options.type) {
      case "rune":
        object = this.createRune(options.position, options.color, scale);
        break;

      case "fire":
        object = this.createFire(options.position, options.color, scale);
        break;

      case "spark":
        object = this.createSpark(options.position, options.color, scale);
        break;

      case "smoke":
        object = this.createSmoke(options.position, scale);
        break;

      case "magic":
        object = this.createMagic(options.position, options.color, scale);
        break;

      case "portal":
        object = this.createPortal(options.position, options.color, scale);
        break;

      case "lightning":
        object = this.createLightning(
          options.position,
          options.color,
          scale,
          options.direction
        );
        break;

      case "frost":
        object = this.createFrost(options.position, options.color, scale);
        break;

      case "dust":
        object = this.createDust(options.position, options.color, scale);
        break;

      case "heal":
        object = this.createHeal(options.position, options.color, scale);
        break;

      case "impact":
        object = this.createImpact(options.position, options.color, scale);
        break;
    }

    if (!object) {
      return null;
    }

    this.scene.add(object);

    const light =
      object instanceof THREE.Group
        ? object.userData.vfxLight
        : undefined;

    const velocity =
      options.direction?.clone().normalize().multiplyScalar(1.5);

    this.effects.push({
      object,
      type: options.type,
      age: 0,
      duration,
      intensity,
      velocity,
      baseScale: scale,
      light,
    });

    return object;
  }

  /**
   * Вызывается каждый кадр из игрового цикла.
   */
  update(delta: number): void {
    this.updateEffects(delta);
    this.updateParticles(delta);
  }

  /**
   * Создание светящейся руны.
   */
  private createRune(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x66ccff,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `rune-${String(color)}`,
      color,
      true
    );

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.35 * scale, 0.43 * scale, 32),
      material
    );

    ring.rotation.x = -Math.PI / 2;

    group.add(ring);

    const inner = new THREE.Mesh(
      new THREE.RingGeometry(0.12 * scale, 0.16 * scale, 16),
      material
    );

    inner.rotation.x = -Math.PI / 2;

    group.add(inner);

    const light = new THREE.PointLight(
      color,
      1.5,
      3.5 * scale
    );

    light.position.y = 0.2;

    group.add(light);

    group.userData.vfxLight = light;

    group.position.copy(position);

    return group;
  }

  /**
   * Огонь.
   */
  private createFire(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0xff6a18,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `fire-${String(color)}`,
      color,
      true
    );

    const flame = new THREE.Mesh(
      new THREE.SphereGeometry(
        0.22 * scale,
        8,
        8
      ),
      material
    );

    flame.scale.set(
      0.75,
      1.5,
      0.75
    );

    flame.position.y = 0.3 * scale;

    group.add(flame);

    const light = new THREE.PointLight(
      color,
      2.2,
      4 * scale
    );

    light.position.y = 0.4;

    group.add(light);

    group.userData.vfxLight = light;

    group.position.copy(position);

    return group;
  }

  /**
   * Искры.
   */
  private createSpark(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0xffd36b,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    group.position.copy(position);

    for (let i = 0; i < 8; i++) {
      const material = this.getMaterial(
        `spark-${String(color)}`,
        color,
        true
      );

      const mesh = new THREE.Mesh(
        this.smallParticleGeometry,
        material
      );

      mesh.position.set(
        (Math.random() - 0.5) * scale,
        Math.random() * scale,
        (Math.random() - 0.5) * scale
      );

      group.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 1.5,
          Math.random() * 2,
          (Math.random() - 0.5) * 1.5
        ),
        life: 0,
        maxLife: 0.35 + Math.random() * 0.6,
        rotationSpeed: new THREE.Vector3(
          Math.random(),
          Math.random(),
          Math.random()
        ),
        gravity: 2.5,
      });
    }

    return group;
  }

  /**
   * Дым.
   */
  private createSmoke(
    position: THREE.Vector3,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      "smoke",
      0x777777,
      true
    );

    for (let i = 0; i < 5; i++) {
      const smoke = new THREE.Mesh(
        new THREE.SphereGeometry(
          (0.12 + Math.random() * 0.12) * scale,
          8,
          8
        ),
        material
      );

      smoke.position.set(
        (Math.random() - 0.5) * 0.25,
        i * 0.15 * scale,
        (Math.random() - 0.5) * 0.25
      );

      group.add(smoke);
    }

    group.position.copy(position);

    return group;
  }

  /**
   * Магическая энергия.
   */
  private createMagic(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x7b5cff,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `magic-${String(color)}`,
      color,
      true
    );

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(
        0.18 * scale,
        12,
        12
      ),
      material
    );

    group.add(core);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(
        0.3 * scale,
        0.025 * scale,
        8,
        32
      ),
      material
    );

    group.add(ring);

    const light = new THREE.PointLight(
      color,
      1.8,
      3.5 * scale
    );

    group.add(light);

    group.userData.vfxLight = light;

    group.position.copy(position);

    return group;
  }

  /**
   * Магический портал.
   */
  private createPortal(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x49a7ff,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `portal-${String(color)}`,
      color,
      true
    );

    const outer = new THREE.Mesh(
      new THREE.TorusGeometry(
        0.75 * scale,
        0.07 * scale,
        12,
        48
      ),
      material
    );

    group.add(outer);

    const inner = new THREE.Mesh(
      new THREE.CircleGeometry(
        0.68 * scale,
        32
      ),
      material
    );

    group.add(inner);

    const light = new THREE.PointLight(
      color,
      3,
      6 * scale
    );

    group.add(light);

    group.userData.vfxLight = light;

    group.position.copy(position);

    return group;
  }

  /**
   * Молния.
   */
  private createLightning(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0xb9e8ff,
    scale = 1,
    direction?: THREE.Vector3
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `lightning-${String(color)}`,
      color,
      true
    );

    const points: THREE.Vector3[] = [];

    const dir =
      direction?.clone().normalize() ??
      new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < 7; i++) {
      const point = dir
        .clone()
        .multiplyScalar(i * 0.25 * scale);

      point.x += (Math.random() - 0.5) * 0.15 * scale;
      point.z += (Math.random() - 0.5) * 0.15 * scale;

      points.push(point);
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(
      points
    );

    const line = new THREE.Line(
      geometry,
      material
    );

    group.add(line);

    const light = new THREE.PointLight(
      color,
      5,
      5 * scale
    );

    group.add(light);

    group.userData.vfxLight = light;

    group.position.copy(position);

    return group;
  }

  /**
   * Лёд / мороз.
   */
  private createFrost(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x9deaff,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `frost-${String(color)}`,
      color,
      true
    );

    for (let i = 0; i < 6; i++) {
      const crystal = new THREE.Mesh(
        new THREE.ConeGeometry(
          0.06 * scale,
          0.35 * scale,
          6
        ),
        material
      );

      crystal.position.set(
        (Math.random() - 0.5) * scale,
        Math.random() * 0.25 * scale,
        (Math.random() - 0.5) * scale
      );

      crystal.rotation.z =
        (Math.random() - 0.5) * 0.8;

      group.add(crystal);
    }

    group.position.copy(position);

    return group;
  }

  /**
   * Пыль.
   */
  private createDust(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0xb99a72,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `dust-${String(color)}`,
      color,
      true
    );

    for (let i = 0; i < 10; i++) {
      const dust = new THREE.Mesh(
        this.smallParticleGeometry,
        material
      );

      dust.position.set(
        (Math.random() - 0.5) * scale,
        Math.random() * 0.5 * scale,
        (Math.random() - 0.5) * scale
      );

      group.add(dust);

      this.particles.push({
        mesh: dust,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.25,
          Math.random() * 0.4,
          (Math.random() - 0.5) * 0.25
        ),
        life: 0,
        maxLife: 0.6 + Math.random() * 0.8,
        rotationSpeed: new THREE.Vector3(
          0.2,
          0.2,
          0.2
        ),
        gravity: 0,
      });
    }

    group.position.copy(position);

    return group;
  }

  /**
   * Эффект лечения.
   */
  private createHeal(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x67ff9a,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `heal-${String(color)}`,
      color,
      true
    );

    for (let i = 0; i < 5; i++) {
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(
          0.055 * scale,
          6,
          6
        ),
        material
      );

      orb.position.set(
        (Math.random() - 0.5) * scale,
        Math.random() * scale,
        (Math.random() - 0.5) * scale
      );

      group.add(orb);
    }

    const light = new THREE.PointLight(
      color,
      1.5,
      3 * scale
    );

    group.add(light);

    group.userData.vfxLight = light;

    group.position.copy(position);

    return group;
  }

  /**
   * Удар / вспышка.
   */
  private createImpact(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0xffffff,
    scale = 1
  ): THREE.Group {
    const group = new THREE.Group();

    const material = this.getMaterial(
      `impact-${String(color)}`,
      color,
      true
    );

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(
        0.05 * scale,
        0.12 * scale,
        24
      ),
      material
    );

    ring.rotation.x = -Math.PI / 2;

    group.add(ring);

    const light = new THREE.PointLight(
      color,
      4,
      4 * scale
    );

    group.add(light);

    group.userData.vfxLight = light;

    group.position.copy(position);

    return group;
  }

  /**
   * Обновление активных эффектов.
   */
  private updateEffects(delta: number): void {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const effect = this.effects[i];

      effect.age += delta;

      const progress = Math.min(
        effect.age / effect.duration,
        1
      );

      const object = effect.object;

      switch (effect.type) {
        case "rune":
          object.rotation.y += delta * 0.8;

          object.scale.setScalar(
            effect.baseScale *
              (0.85 + Math.sin(effect.age * 5) * 0.12)
          );

          if (effect.light) {
            effect.light.intensity =
              effect.intensity *
              (1.2 + Math.sin(effect.age * 8) * 0.5);
          }
          break;

        case "fire":
          object.scale.y =
            effect.baseScale *
            (1 + Math.sin(effect.age * 14) * 0.15);

          object.rotation.y += delta * 2;

          if (effect.light) {
            effect.light.intensity =
              effect.intensity *
              (1.7 + Math.sin(effect.age * 18) * 0.5);
          }
          break;

        case "magic":
          object.rotation.y += delta * 2;
          object.rotation.x += delta * 0.6;

          object.scale.setScalar(
            effect.baseScale *
              (0.8 + Math.sin(effect.age * 6) * 0.2)
          );

          if (effect.light) {
            effect.light.intensity =
              effect.intensity *
              (1.5 + Math.sin(effect.age * 7) * 0.5);
          }
          break;

        case "portal":
          object.rotation.y += delta * 1.2;
          object.rotation.z += delta * 0.3;

          object.scale.setScalar(
            effect.baseScale *
              (0.9 + Math.sin(effect.age * 4) * 0.1)
          );

          if (effect.light) {
            effect.light.intensity =
              effect.intensity *
              (2 + Math.sin(effect.age * 5) * 0.8);
          }
          break;

        case "lightning":
          object.scale.setScalar(
            effect.baseScale *
              (0.8 + Math.random() * 0.4)
          );

          if (effect.light) {
            effect.light.intensity =
              Math.random() * 5;
          }
          break;

        case "smoke":
          object.position.y += delta * 0.35;
          object.rotation.y += delta * 0.15;

          object.scale.setScalar(
            effect.baseScale *
              (1 + progress * 1.2)
          );
          break;

        case "frost":
          object.rotation.y += delta * 0.4;
          object.scale.setScalar(
            effect.baseScale *
              (0.8 + progress * 0.5)
          );
          break;

        case "heal":
          object.position.y += delta * 0.2;
          object.rotation.y += delta;

          object.scale.setScalar(
            effect.baseScale *
              (1 + Math.sin(effect.age * 5) * 0.15)
          );
          break;

        case "impact":
          object.scale.setScalar(
            effect.baseScale *
              (0.5 + progress * 2)
          );

          if (effect.light) {
            effect.light.intensity =
              effect.intensity *
              (1 - progress);
          }
          break;

        case "spark":
          object.rotation.y += delta * 2;
          break;

        case "dust":
          object.rotation.y += delta * 0.2;
          break;
      }

      if (effect.velocity) {
        object.position.addScaledVector(
          effect.velocity,
          delta
        );
      }

      if (progress >= 1) {
        this.removeEffect(i);
      }
    }
  }

  /**
   * Обновление частиц.
   */
  private updateParticles(delta: number): void {
    for (
      let i = this.particles.length - 1;
      i >= 0;
      i--
    ) {
      const particle = this.particles[i];

      particle.life += delta;

      particle.velocity.y -=
        particle.gravity * delta;

      particle.mesh.position.addScaledVector(
        particle.velocity,
        delta
      );

      particle.mesh.rotation.x +=
        particle.rotationSpeed.x * delta;

      particle.mesh.rotation.y +=
        particle.rotationSpeed.y * delta;

      const progress =
        particle.life / particle.maxLife;

      particle.mesh.scale.setScalar(
        Math.max(0, 1 - progress)
      );

      if (
        particle.life >= particle.maxLife ||
        this.particles.length > this.maxParticles
      ) {
        particle.mesh.removeFromParent();

        this.particles.splice(i, 1);
      }
    }
  }

  /**
   * Удаление эффекта.
   */
  private removeEffect(index: number): void {
    const effect = this.effects[index];

    effect.object.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
      }

      if (
        child instanceof THREE.Line
      ) {
        child.geometry.dispose();
      }
    });

    effect.object.removeFromParent();

    this.effects.splice(index, 1);
  }

  /**
   * Если эффектов слишком много,
   * удаляем самый старый.
   */
  private removeOldestEffect(): void {
    if (this.effects.length === 0) {
      return;
    }

    this.removeEffect(0);
  }

  /**
   * Кэш материалов.
   *
   * Это важно для Telegram/mobile:
   * мы не создаём новый материал
   * каждый кадр.
   */
  private getMaterial(
    key: string,
    color: THREE.ColorRepresentation,
    transparent = false
  ): THREE.MeshBasicMaterial {
    const cached = this.materials.get(key);

    if (cached) {
      return cached;
    }

    const material = new THREE.MeshBasicMaterial({
      color,
      transparent,
      opacity: transparent ? 0.85 : 1,
      depthWrite: false,
    });

    this.materials.set(key, material);

    return material;
  }

  /**
   * Полная очистка VFX.
   *
   * Вызывается при смене сцены.
   */
  clear(): void {
    for (
      let i = this.effects.length - 1;
      i >= 0;
      i--
    ) {
      this.removeEffect(i);
    }

    for (const particle of this.particles) {
      particle.mesh.removeFromParent();
    }

    this.particles.length = 0;
  }

  /**
   * Освобождение ресурсов.
   */
  dispose(): void {
    this.clear();

    this.particleGeometry.dispose();
    this.smallParticleGeometry.dispose();

    for (const material of this.materials.values()) {
      material.dispose();
    }

    this.materials.clear();
  }

  /**
   * Быстрые команды для игрового кода.
   */

  rune(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x66ccff,
    scale = 1
  ): void {
    this.play({
      type: "rune",
      position,
      color,
      scale,
      duration: 2,
    });
  }

  fire(
    position: THREE.Vector3,
    scale = 1
  ): void {
    this.play({
      type: "fire",
      position,
      scale,
      duration: 0.8,
      intensity: 1,
    });
  }

  magic(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x7b5cff,
    scale = 1
  ): void {
    this.play({
      type: "magic",
      position,
      color,
      scale,
      duration: 1.5,
    });
  }

  portal(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0x49a7ff,
    scale = 1
  ): void {
    this.play({
      type: "portal",
      position,
      color,
      scale,
      duration: 3,
    });
  }

  spark(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0xffd36b,
    scale = 1
  ): void {
    this.play({
      type: "spark",
      position,
      color,
      scale,
      duration: 0.8,
    });
  }

  frost(
    position: THREE.Vector3,
    scale = 1
  ): void {
    this.play({
      type: "frost",
      position,
      scale,
      duration: 1.2,
    });
  }

  lightning(
    position: THREE.Vector3,
    direction = new THREE.Vector3(0, 1, 0),
    scale = 1
  ): void {
    this.play({
      type: "lightning",
      position,
      direction,
      scale,
      duration: 0.25,
    });
  }

  heal(
    position: THREE.Vector3,
    scale = 1
  ): void {
    this.play({
      type: "heal",
      position,
      scale,
      duration: 1.5,
    });
  }

  impact(
    position: THREE.Vector3,
    color: THREE.ColorRepresentation = 0xffffff,
    scale = 1
  ): void {
    this.play({
      type: "impact",
      position,
      color,
      scale,
      duration: 0.35,
    });
  }
}

export default VFXEngine;
