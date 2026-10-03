import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { type HeroDef, type HeroWeapon } from './core';



/* ===== Midgard 3D: реальная сцена, герой, дорога, деревня, кузница и Мимир ===== */

/* ===== Midgard 3D: большая северная деревня, лес, река, кузница, Мимир и норны ===== */

export const midMat = (c: number, roughness = 0.9, metalness = 0) =>
  new THREE.MeshStandardMaterial({ color: c, roughness, metalness });



export const midBox = (w: number, h: number, d: number, c: number, roughness = 0.9) =>
  new THREE.Mesh(new THREE.BoxGeometry(w, h, d), midMat(c, roughness));



export const midCyl = (r: number, h: number, c: number, segments = 12, roughness = 0.9) =>
  new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, segments), midMat(c, roughness));



export const midHash = (x: number, z: number) => {
  const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return n - Math.floor(n);
};



// Subtle deterministic deformation: keeps silhouettes organic without adding heavy assets.
export const midWarpGeometry = (geo: THREE.BufferGeometry, amount = 0.06, seed = 1) => {
  const p = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = Math.sin((x + seed) * 7.13 + (z - seed) * 5.71 + y * 3.17) * 0.5 + 0.5;
    const radial = Math.min(1, Math.sqrt(x * x + z * z) * 0.7);
    p.setX(i, x + (n - 0.5) * amount * (0.45 + radial));
    p.setZ(i, z + (Math.cos((z + seed) * 6.41 + y * 2.37) - 0.5) * amount * (0.35 + radial));
  }
  p.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
};


    export const organicBlobGeometry = (geo: THREE.BufferGeometry, amount = 0.10, seed = 1) => {
      const p = geo.attributes.position as THREE.BufferAttribute;
      for(let i=0;i<p.count;i++){
        const x=p.getX(i), y=p.getY(i), z=p.getZ(i);
        const r=Math.max(.001,Math.sqrt(x*x+z*z));
        const n1=Math.sin(x*8.7+z*6.1+y*4.3+seed)*.5+.5;
        const n2=Math.cos(x*13.2-z*9.4+y*3.1+seed*1.7)*.5+.5;
        const edge=Math.min(1,r*1.4);
        p.setX(i,x+(n1-.5)*amount*(.45+edge));
        p.setZ(i,z+(n2-.5)*amount*(.35+edge));
        p.setY(i,y+(n1+n2-1)*amount*.18);
      }
      p.needsUpdate=true;
      geo.computeVertexNormals();
      return geo;
    };




export const midHeight = (x: number, z: number) => {
  const hillA = Math.sin(x * 0.11 + 0.7) * 0.65;
  const hillB = Math.cos(z * 0.09 - 0.4) * 0.48;
  const hillC = Math.sin((x + z) * 0.055) * 0.35;
  const villageFlatten = Math.exp(-(x * x + (z + 3) * (z + 3)) / 900);
  return (hillA + hillB + hillC) * (1 - villageFlatten * 0.72);
};



export function markMeshes(g: THREE.Object3D) {
  g.traverse((o: any) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return g;
}



export function midRock(x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const rock = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.9 * s, 1),
    midMat(0x5b625d, 0.98)
  );
  rock.scale.y = 0.65 + midHash(x, z) * 0.3;
  rock.rotation.set(midHash(x, z) * 0.5, midHash(z, x) * 2, 0);
  g.add(rock);
  g.position.set(x, midHeight(x, z) + 0.2 * s, z);
  return markMeshes(g);
}



export function addGrassTuft(scene: THREE.Scene, x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0x3d653e });
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.035 * s, 0.45 * s, 0.035 * s), mat);
    blade.position.set((i - 1.5) * 0.08 * s, 0.22 * s, (i % 2) * 0.07 * s);
    blade.rotation.z = (i - 1.5) * 0.18;
    blade.material = mat;
    g.add(blade);
  }
  g.position.set(x, midHeight(x, z), z);
  scene.add(g);
}



export function addRibbonRoad(scene: THREE.Scene, points: Array<[number, number]>, width: number, color: number) {
  const verts: number[] = [];
  const idx: number[] = [];
  const pts = points.map(([x, z]) => new THREE.Vector3(x, midHeight(x, z) + 0.045, z));
  for (let i = 0; i < pts.length; i++) {
    const prev = pts[Math.max(0, i - 1)];
    const next = pts[Math.min(pts.length - 1, i + 1)];
    const dx = next.x - prev.x;
    const dz = next.z - prev.z;
    const len = Math.max(0.001, Math.hypot(dx, dz));
    const px = -dz / len;
    const pz = dx / len;
    const half = width / 2;
    verts.push(pts[i].x + px * half, pts[i].y, pts[i].z + pz * half);
    verts.push(pts[i].x - px * half, pts[i].y + 0.006, pts[i].z - pz * half);
    if (i < pts.length - 1) {
      const k = i * 2;
      idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const road = new THREE.Mesh(geo, midMat(color, 1));
  road.receiveShadow = true;
  scene.add(road);

}



export function gableRoof(width: number, depth: number, color: number) {
  const g = new THREE.Group();
  const panelW = width * 0.57;
  const angle = 0.58;
  const panelA = midBox(panelW, 0.22, depth + 0.55, color, 0.95);
  const panelB = midBox(panelW, 0.22, depth + 0.55, color, 0.95);
  panelA.rotation.z = angle;
  panelB.rotation.z = -angle;
  panelA.position.x = -width * 0.205;
  panelB.position.x = width * 0.205;
  g.add(panelA, panelB);
  return g;
}



export function placeHouse(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number, label: string, id: string, scale = 1) {
  const g = new THREE.Group();
  g.userData = { label, id };
  const y = midHeight(x, z);
  const w = 7 * scale;
  const d = 5.4 * scale;
  const wall = midBox(w, 3.4 * scale, d, 0x6d4a34, 0.96);
  wall.position.y = 1.7 * scale;
  g.add(wall);

  const lower = midBox(w + 0.25, 0.38 * scale, d + 0.25, 0x3d2a1e, 0.98);
  lower.position.y = 0.2 * scale;
  g.add(lower);

  const roof = gableRoof(w + 0.8 * scale, d + 0.4 * scale, 0x302722);
  roof.position.y = 4.0 * scale;
  g.add(roof);

  // Clean front facade: no tall beams in front of the entrance.
  const beamMat = 0x38261b;
  const cross = midBox(w * 0.95, 0.28 * scale, 0.3 * scale, beamMat, 0.98);
  cross.position.set(0, 2.35 * scale, d / 2 + 0.05 * scale);
  g.add(cross);

  const door = midBox(1.08 * scale, 1.9 * scale, 0.16 * scale, 0x291b14, 0.98);
  door.position.set(0, 0.95 * scale, d / 2 + 0.11 * scale);
  g.add(door);
  const handle = midCyl(0.055 * scale, 0.12 * scale, 0xc69a52, 8, 0.55);
  handle.rotation.z = Math.PI / 2;
  handle.position.set(0.33 * scale, 0.98 * scale, d / 2 + 0.2 * scale);
  g.add(handle);

  const windowMat = new THREE.MeshStandardMaterial({
    color: 0xd7a85b,
    emissive: 0x8b5d1e,
    emissiveIntensity: 0.7,
    roughness: 0.55,
  });
  [-1.85, 1.85].forEach(px => {
    const win = new THREE.Mesh(new THREE.BoxGeometry(1.15 * scale, 0.95 * scale, 0.08 * scale), windowMat);
    win.position.set(px * scale, 1.85 * scale, d / 2 + 0.1 * scale);
    g.add(win);
    const mullionV = midBox(0.08 * scale, 1.02 * scale, 0.11 * scale, 0x35251b, 0.98);
    mullionV.position.set(px * scale, 1.85 * scale, d / 2 + 0.16 * scale);
    g.add(mullionV);
    const mullionH = midBox(1.18 * scale, 0.08 * scale, 0.11 * scale, 0x35251b, 0.98);
    mullionH.position.set(px * scale, 1.85 * scale, d / 2 + 0.16 * scale);
    g.add(mullionH);
  });

  const chimney = midBox(0.65 * scale, 2.0 * scale, 0.65 * scale, 0x554840, 0.95);
  chimney.position.set(w * 0.25, 4.55 * scale, -0.3 * scale);
  g.add(chimney);
  const cap = midBox(0.9 * scale, 0.18 * scale, 0.9 * scale, 0x312a26, 0.98);
  cap.position.set(w * 0.25, 5.55 * scale, -0.3 * scale);
  g.add(cap);

  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
}



export function addFence(scene: THREE.Scene, x1: number, z1: number, x2: number, z2: number) {
  const g = new THREE.Group();
  const dx = x2 - x1;
  const dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  const angle = Math.atan2(dx, dz);
  const posts = Math.max(2, Math.floor(len / 2.8));
  for (let i = 0; i <= posts; i++) {
    const t = i / posts;
    const p = midBox(0.18, 1.55, 0.18, 0x4b3020, 0.98);
    p.position.set(x1 + dx * t, midHeight(x1 + dx * t, z1 + dz * t) + 0.78, z1 + dz * t);
    g.add(p);
  }
  for (const yy of [0.48, 1.0]) {
    const rail = midBox(0.14, 0.14, len, 0x5b3b25, 0.98);
    rail.rotation.y = angle;
    rail.position.set((x1 + x2) / 2, midHeight((x1 + x2) / 2, (z1 + z2) / 2) + yy, (z1 + z2) / 2);
    g.add(rail);
  }
  scene.add(markMeshes(g));
}



export function addBarrel(scene: THREE.Scene, x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const b = midCyl(0.48 * s, 0.95 * s, 0x62432d, 12, 0.98);
  b.position.y = 0.48 * s;
  g.add(b);
  for (const yy of [0.22, 0.74]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.49 * s, 0.045 * s, 6, 18),
      midMat(0x2e2926, 0.72, 0.15)
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = yy * s;
    g.add(ring);
  }
  g.position.set(x, midHeight(x, z), z);
  scene.add(markMeshes(g));
}



export function addCrate(scene: THREE.Scene, x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const box = midBox(0.9 * s, 0.72 * s, 0.9 * s, 0x704a2f, 0.98);
  box.position.y = 0.36 * s;
  g.add(box);
  const slat = midBox(0.08 * s, 0.8 * s, 0.95 * s, 0x39261a, 0.98);
  slat.position.y = 0.36 * s;
  g.add(slat);
  g.position.set(x, midHeight(x, z), z);
  scene.add(markMeshes(g));
}



export function addFire(scene: THREE.Scene, fires: Array<{ light: THREE.PointLight; phase: number }>, x: number, z: number, scale = 1) {
  const g = new THREE.Group();
  const stones = [0, 1, 2, 3, 4, 5].map(i => {
    const a = i / 6 * Math.PI * 2;
    const s = midCyl(0.24 * scale, 0.28 * scale, 0x4d4a43, 7, 1);
    s.position.set(Math.cos(a) * 0.65 * scale, 0.14 * scale, Math.sin(a) * 0.65 * scale);
    return s;
  });
  g.add(...stones);
  const wood1 = midBox(0.18 * scale, 0.18 * scale, 1.35 * scale, 0x4a2d1b, 0.98);
  const wood2 = wood1.clone();
  wood1.rotation.y = 0.6;
  wood2.rotation.y = -0.6;
  wood1.position.y = wood2.position.y = 0.3 * scale;
  g.add(wood1, wood2);
  const flameMat = new THREE.MeshStandardMaterial({ color: 0xff8a2b, emissive: 0xff5a12, emissiveIntensity: 3.2, roughness: 0.55 });
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.42 * scale, 1.2 * scale, 7), flameMat);
  flame.position.y = 0.92 * scale;
  g.add(flame);
  const inner = new THREE.Mesh(new THREE.ConeGeometry(0.22 * scale, 0.72 * scale, 7), new THREE.MeshStandardMaterial({ color: 0xffe2a0, emissive: 0xff9a22, emissiveIntensity: 3.8, roughness: 0.5 }));
  inner.position.y = 0.84 * scale;
  g.add(inner);
  g.position.set(x, midHeight(x, z), z);
  scene.add(markMeshes(g));
  const light = new THREE.PointLight(0xff8a38, 2.0 * scale, 10 * scale, 2);
  light.position.set(x, midHeight(x, z) + 2 * scale, z);
  scene.add(light);
  fires.push({ light, phase: midHash(x, z) * 10 });
}



export function addForge(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Кузница", id: "forge" };
  const y = midHeight(x, z);
  const wall = midBox(8.5, 4.2, 6.5, 0x4d3b31, 0.98);
  wall.position.y = 2.1;
  g.add(wall);
  const roof = gableRoof(9.3, 7.0, 0x292421);
  roof.position.y = 4.75;
  g.add(roof);
  for (const px of [-3.9, 3.9]) {
    const beam = midBox(0.3, 4.3, 0.34, 0x2d2119, 0.98);
    beam.position.set(px, 2.15, 3.28);
    g.add(beam);
  }
  const furnace = midBox(2.0, 1.8, 1.6, 0x34312e, 0.98);
  furnace.position.set(-1.9, 0.9, 0.4);
  g.add(furnace);
  const glowMat = new THREE.MeshStandardMaterial({ color: 0xff7b25, emissive: 0xff3d0b, emissiveIntensity: 4, roughness: 0.5 });
  const opening = new THREE.Mesh(new THREE.CircleGeometry(0.48, 16), glowMat);
  opening.rotation.y = Math.PI;
  opening.position.set(-1.9, 1.0, 1.23);
  g.add(opening);
  const chimney = midBox(0.9, 4.0, 0.9, 0x3d3632, 0.96);
  chimney.position.set(-1.9, 6.0, -0.5);
  g.add(chimney);
  const anvil = midBox(1.2, 0.38, 0.52, 0x252729, 0.42);
  anvil.position.set(1.4, 1.0, 0.9);
  g.add(anvil);
  const anvilStem = midBox(0.45, 0.9, 0.45, 0x292a2a, 0.45);
  anvilStem.position.set(1.4, 0.55, 0.9);
  g.add(anvilStem);
  for (let i = 0; i < 3; i++) {
    const tool = midBox(0.08, 1.5, 0.08, 0xb6b4ae, 0.45);
    tool.position.set(2.4 + i * 0.18, 1.0, 1.15);
    tool.rotation.z = -0.25 + i * 0.15;
    g.add(tool);
  }
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
  const forgeLight = new THREE.PointLight(0xff7a2d, 2.8, 12, 2);
  forgeLight.position.set(x - 1.9, y + 2.0, z + 1.0);
  scene.add(forgeLight);
}



export function addMimirWell(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Колодец Мимира", id: "mimir" };
  const y = midHeight(x, z);
  const stones = midMat(0x58615b, 0.98);
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2;
    const stone = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.42, 0.42), stones);
    stone.position.set(Math.cos(a) * 1.25, 0.22, Math.sin(a) * 1.25);
    stone.rotation.y = a + Math.PI / 2;
    g.add(stone);
  }
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.92, 28), new THREE.MeshStandardMaterial({ color: 0x173a43, emissive: 0x0b3038, emissiveIntensity: 1.2, roughness: 0.22, metalness: 0.05 }));
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.45;
  g.add(water);
  const postL = midBox(0.22, 2.8, 0.22, 0x4b3020, 0.98);
  const postR = postL.clone();
  postL.position.set(-1.2, 1.55, 0);
  postR.position.set(1.2, 1.55, 0);
  g.add(postL, postR);
  const beam = midBox(2.8, 0.24, 0.24, 0x39261a, 0.98);
  beam.position.y = 2.82;
  g.add(beam);
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.15, 6), midMat(0x7b6248, 1));
  rope.position.y = 2.2;
  g.add(rope);
  const bucket = midCyl(0.3, 0.42, 0x5d412a, 10, 0.98);
  bucket.position.set(0, 1.62, 0);
  g.add(bucket);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.055, 8, 40), new THREE.MeshStandardMaterial({ color: 0x7ee787, emissive: 0x2f8c50, emissiveIntensity: 2.3, roughness: 0.5 }));
  halo.rotation.x = Math.PI / 2;
  halo.position.y = 0.48;
  g.add(halo);
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
  const light = new THREE.PointLight(0x73e6a0, 1.6, 9, 2);
  light.position.set(x, y + 1.2, z);
  scene.add(light);
}



export function addNornShrine(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Прядильня норн", id: "norns" };
  const y = midHeight(x, z);
  const colors = [0xb9d9c0, 0xc9a6e8, 0xd6b66d];
  for (let i = 0; i < 3; i++) {
    const stone = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 2.0, 4, 8), midMat(0x555d59, 0.98));
    stone.position.set((i - 1) * 1.7, 1.15, 0);
    stone.rotation.z = (i - 1) * 0.06;
    g.add(stone);
    const rune = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.045, 6, 18), new THREE.MeshStandardMaterial({ color: colors[i], emissive: colors[i], emissiveIntensity: 1.7, roughness: 0.55 }));
    rune.rotation.x = Math.PI / 2;
    rune.position.set((i - 1) * 1.7, 1.35, -0.5);
    g.add(rune);
  }
  const lineMat = new THREE.LineBasicMaterial({ color: 0xc9b6dc, transparent: true, opacity: 0.62 });
  for (let i = 0; i < 2; i++) {
    const pts = [
      new THREE.Vector3((i - 1) * 1.7, 1.8, 0.2),
      new THREE.Vector3((i - 0.5) * 1.0, 2.8, -0.3),
      new THREE.Vector3((i) * 1.7, 1.8, 0.2),
    ];
    g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.055, 8, 48), new THREE.MeshStandardMaterial({ color: 0xc9b6dc, emissive: 0x62477a, emissiveIntensity: 1.2, roughness: 0.7 }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.04;
  g.add(ring);
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
}



export function addDock(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
  const g = new THREE.Group();
  g.userData = { label: "Речной причал", id: "port" };
  const y = midHeight(x, z);
  for (let i = 0; i < 7; i++) {
    const plank = midBox(2.8, 0.22, 0.72, 0x68472e, 0.98);
    plank.position.set(0, 0.3, i * 0.82);
    g.add(plank);
  }
  for (const px of [-1.2, 1.2]) {
    for (let i = 0; i < 3; i++) {
      const post = midBox(0.22, 1.4, 0.22, 0x3f2a1d, 0.98);
      post.position.set(px, -0.25, i * 2.45);
      g.add(post);
    }
  }
  const boat = new THREE.Group();
  const hull = midBox(2.2, 0.55, 5.0, 0x4b2c1d, 0.98);
  hull.scale.x = 0.72;
  hull.position.y = -0.15;
  boat.add(hull);
  const mast = midBox(0.12, 3.8, 0.12, 0x4a3020, 0.98);
  mast.position.y = 1.8;
  boat.add(mast);
  const sail = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.5), midMat(0xb8b09c, 0.98));
  sail.position.set(0.85, 1.8, 0);
  sail.rotation.y = Math.PI / 2;
  boat.add(sail);
  boat.position.set(4.2, -0.15, 2.2);
  g.add(boat);
  g.position.set(x, y, z);
  scene.add(markMeshes(g));
  objects.push(g);
}



export function addNPC(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number, id: string, label: string, color: number, phase: number) {
  const g = new THREE.Group();
  g.userData = { label, id };
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.72, 4, 8), midMat(color, 0.92));
  body.position.y = 0.85;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 8), midMat(0xc89570, 0.9));
  head.position.y = 1.55;
  g.add(head);
  const cloak = midBox(0.65, 0.72, 0.14, 0x29251f, 0.98);
  cloak.position.set(0, 0.8, -0.26);
  g.add(cloak);
  g.position.set(x, midHeight(x, z), z);
  g.userData.phase = phase;
  scene.add(markMeshes(g));
  objects.push(g);
  return g;
}



export function midHero3d(h: HeroDef) {
  // Human-scale hero built from articulated parts.  The silhouette is intentionally
  // closer to a real person than the old capsule figure, while staying lightweight
  // enough for mobile Three.js rendering.
  const g = new THREE.Group();
  const male = h.gender === "m";
  const skinColor = male ? 0xc9936f : 0xd9ad8a;
  const hairColor = h.id === "elf" ? 0xb8c8d1 : (h.id === "dwarf" ? 0x6f4a32 : 0x2a211d);
  const clothColor = h.id === "berserk" ? 0x5a2020 : h.id === "dwarf" ? 0x71482f : h.id === "viking" ? 0x5b4b2b : 0x263b4d;
  const leatherColor = h.id === "dwarf" ? 0x4b2d1c : 0x3a281c;
  const metalColor = h.id === "berserk" ? 0x9b9fa3 : 0x737a7e;

  const matSkin = midMat(skinColor, 0.92);
  const matCloth = midMat(clothColor, 0.9);
  const matLeather = midMat(leatherColor, 0.96);
  const matHair = midMat(hairColor, 0.95);
  const matMetal = midMat(metalColor, 0.78);
  const matDark = midMat(0x202326, 0.98);

  // Pelvis and torso: separate forms give the body a waist and shoulders.
  const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.24, 5, 8), matLeather);
  pelvis.position.y = 0.72;
  g.add(pelvis);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(male ? 0.37 : 0.32, 0.56, 6, 10), matCloth);
  torso.position.y = 1.15;
  g.add(torso);

  const chest = new THREE.Mesh(new THREE.CapsuleGeometry(male ? 0.40 : 0.34, 0.34, 5, 8), matCloth);
  chest.scale.z = 0.82;
  chest.position.y = 1.28;
  g.add(chest);

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.38, 0.09, 12), matLeather);
  belt.position.y = 0.93;
  g.add(belt);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.055), matMetal);
  buckle.position.set(0, 0.93, 0.38);
  g.add(buckle);

  // Neck and head.
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.18, 10), matSkin);
  neck.position.y = 1.63;
  g.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 16, 12), matSkin);
  head.scale.set(0.92, 1.06, 0.92);
  head.position.y = 1.91;
  g.add(head);

  // Hair cap + back hair.  The elf keeps a lighter tone; the others are dark-haired.
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.325, 14, 10), matHair);
  hair.scale.set(0.98, 0.72, 0.98);
  hair.position.set(0, 2.08, -0.025);
  g.add(hair);
  const hairBack = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.30, 5, 8), matHair);
  hairBack.position.set(0, 1.93, -0.25);
  hairBack.rotation.x = 0.15;
  g.add(hairBack);

  // Face details are tiny, but make the head read as a human rather than a sphere.
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.13, 5), matSkin);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 1.92, 0.30);
  g.add(nose);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x17191a, roughness: 0.55 });
  for (const sx of [-0.105, 0.105]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.025, 7, 5), eyeMat);
    eye.position.set(sx, 1.98, 0.285);
    g.add(eye);
  }

  if (male) {
    const beard = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 7), matHair);
    beard.scale.set(0.82, 1.0, 0.72);
    beard.position.set(0, 1.80, 0.24);
    g.add(beard);
  } else {
    const braid = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.42, 4, 7), matHair);
    braid.position.set(-0.27, 1.78, -0.08);
    braid.rotation.z = -0.22;
    g.add(braid);
  }

  // Articulated arms.
  const makeArm = (side:number) => {
    const upper = new THREE.Group();
    upper.position.set(side * (male ? 0.43 : 0.39), 1.43, 0);
    upper.rotation.z = side * 0.07;
    const upperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.105, 0.42, 5, 7), matCloth);
    upperArm.position.y = -0.23;
    upper.add(upperArm);
    const elbow = new THREE.Group();
    elbow.position.y = -0.46;
    upper.add(elbow);
    const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.34, 5, 7), matLeather);
    forearm.position.y = -0.20;
    elbow.add(forearm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.105, 9, 7), matSkin);
    hand.position.y = -0.43;
    elbow.add(hand);
    g.add(upper);
    return { upper, elbow };
  };
  const armL = makeArm(-1), armR = makeArm(1);

  // Legs are also articulated so the walking cycle can be seen clearly.
  const makeLeg = (side:number) => {
    const thigh = new THREE.Group();
    thigh.position.set(side * 0.15, 0.68, 0);
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.42, 5, 7), matDark);
    upper.position.y = -0.23;
    thigh.add(upper);
    const knee = new THREE.Group();
    knee.position.y = -0.48;
    thigh.add(knee);
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.40, 5, 7), matDark);
    shin.position.y = -0.22;
    knee.add(shin);
    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.24, 5, 7), matLeather);
    boot.scale.z = 1.25;
    boot.position.set(0, -0.47, 0.075);
    knee.add(boot);
    g.add(thigh);
    return {upper:thigh,knee};
  };
  const legL = makeLeg(-1), legR = makeLeg(1);

  // Shoulder mantle and simple weatherproof cloak.
  const mantle = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.10, 5, 8), matLeather);
  mantle.scale.z = 0.72;
  mantle.position.y = 1.48;
  g.add(mantle);
  const cape = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.92, 0.075), midMat(h.id === "berserk" ? 0x2b0c0c : 0x18272e, 0.98));
  cape.position.set(0, 1.05, -0.28);
  cape.rotation.x = -0.035;
  g.add(cape);

  // Weapon silhouette depends on the chosen hero, but remains attached to the body.
  const weapon = new THREE.Group();
  if (h.id === "berserk" || h.id === "dwarf") {
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.72, 7), matLeather);
    handle.position.y = 0.36;
    weapon.add(handle);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.34, 0.055), matMetal);
    blade.position.set(0, 0.88, 0);
    blade.rotation.z = h.id === "dwarf" ? -0.22 : 0.22;
    weapon.add(blade);
  } else {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 1.10, 7), matLeather);
    shaft.position.y = 0.52;
    weapon.add(shaft);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.25, 6), matMetal);
    tip.position.y = 1.18;
    weapon.add(tip);
  }
  weapon.position.set(0.43, 0.32, 0.03);
  weapon.rotation.z = -0.12;
  g.add(weapon);

  // A small shield on the back gives the silhouette depth without becoming oversized.
  if (h.id === "viking" || h.id === "berserk") {
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.30, 0.30, 0.10, 16), matLeather);
    shield.rotation.x = Math.PI / 2;
    shield.position.set(0, 1.12, -0.37);
    g.add(shield);
    const boss = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 6), matMetal);
    boss.position.set(0, 1.12, -0.43);
    g.add(boss);
  }

  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.62, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32 }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  g.add(shadow);

  g.userData.anim = { mode:"rigged", armL, armR, legL, legR, eyes:new THREE.Object3D(), weapon, phase: h.id === "elf" ? 1.2 : h.id === "dwarf" ? 2.4 : 0 };
  return markMeshes(g);
}




export type GuardianLoot={ashWood?:number;weapons?:HeroWeapon[];shields?:string[];runes?:string[];potions?:string[]};


export const MIDGARD_GUARDIAN_LOOT:Record<string,{correct:GuardianLoot;battle:GuardianLoot}>={
  rune:{correct:{runes:['fehuWealth']},battle:{weapons:['knife'],runes:['fehuWealth'],potions:['northernMoss']}},
  ashgrove:{correct:{ashWood:2,runes:['berkanoHeal']},battle:{ashWood:3,weapons:['axeSmall'],runes:['berkanoHeal'],potions:['northernMoss']}},
  norns:{correct:{runes:['perthroFate']},battle:{weapons:['sword2'],runes:['perthroFate'],potions:['lifeElixir']}},
  threeThreads:{correct:{runes:['algizGuard']},battle:{weapons:['dagger2'],shields:['Shield_Heater.glb'],runes:['algizGuard'],potions:['frostDraught']}},
  whisperStone:{correct:{runes:['ansuzWisdom']},battle:{weapons:['mace'],runes:['kenazShard'],potions:['northernMoss']}},
  runefield:{correct:{runes:['raidoPath']},battle:{weapons:['spear'],shields:['Shield_Heater_2.glb'],runes:['raidoPath','hagalazBreak'],potions:['frostDraught']}},
  mimir:{correct:{runes:['ansuzWisdom']},battle:{weapons:['swordBig'],runes:['ansuzWisdom','mannazMind'],potions:['hoddmimirElixir']}},
  powerCircle:{correct:{runes:['tiwazValor']},battle:{weapons:['axeDouble'],shields:['Shield_Celtic_Golden.glb'],runes:['tiwazValor','uruzStrength'],potions:['lifeElixir']}},
  hoddmimir:{correct:{runes:['othalaLegacy']},battle:{weapons:['claymore'],shields:['Shield_Round_2.glb'],runes:['sowiloLight','othalaLegacy'],potions:['hoddmimirElixir','lifeElixir']}}
};


export const lootCountAdd=(counts:Record<string,number>,ids:string[])=>{
  const next={...counts};for(const id of ids)next[id]=(next[id]||0)+1;return next;
};


export const guardianLootText=(id:string,battle:boolean)=>{
  const loot=MIDGARD_GUARDIAN_LOOT[id]?.[battle?'battle':'correct'];if(!loot)return '';
  const names:string[]=[];
  if(loot.ashWood)names.push('Ясеневая древесина ×'+loot.ashWood);
  for(const w of loot.weapons||[])names.push(({knife:'Боевой кинжал',dagger2:'Кинжал II',axe:'Северный топор',axeSmall:'Малый топор',axeDouble:'Двойной топор',mace:'Малый молот',hammerDouble:'Двойной молот',spear:'Копьё',sword2:'Меч II',swordBig:'Большой меч',swordGolden:'Золотой меч',claymore:'Клеймор',scythe:'Боевая коса',default:'Оружие'} as Record<string,string>)[w]||w);
  for(const s of loot.shields||[])names.push(({ 'Shield_Round.glb':'Круглый щит','Shield_Round_2.glb':'Серебряный щит','Shield_Heater.glb':'Щит','Shield_Heater_2.glb':'Щит II','Shield_Celtic_Golden.glb':'Золотой щит'} as Record<string,string>)[s]||s);
  for(const r of loot.runes||[])names.push('руна '+(RUNE_CATALOG.find(x=>x.id===r)?.name||r));
  for(const p of loot.potions||[])names.push(POTION_CATALOG.find(x=>x.id===p)?.name||p);
  return names.join(', ');
};


export type WhisperCombatStats={maxHp:number;attack:number;runeAttack:number;defense:number;power:number};


export const POTION_CATALOG=[
  {id:'lifeElixir',name:'Эликсир жизни',effect:'Полностью восстанавливает здоровье Вики',symbol:'❤️'},
  {id:'northernMoss',name:'Эликсир северного мха',effect:'Восстанавливает 30 здоровья',symbol:'🌿'},
  {id:'frostDraught',name:'Морозный настой',effect:'Два следующих удара без щита слабее вдвое',symbol:'❄️'},
  {id:'hoddmimirElixir',name:'Эликсир Ходдмимира',effect:'Полностью восстанавливает здоровье и даёт защиту от двух следующих ударов',symbol:'✨'},
  {id:'manaElixir',name:'Эликсир маны',effect:'Три следующих рунических удара сильнее на 30%',symbol:'💧'},
  {id:'strengthElixir',name:'Эликсир силы',effect:'Три следующих удара оружием сильнее на 30%',symbol:'🔥'},
  {id:'luckElixir',name:'Эликсир удачи',effect:'50% шанс избежать каждой из трёх следующих атак',symbol:'🍀'}
] as const;


export type RuneDef={id:string;name:string;effect:string;symbol:string;attack?:number;rune?:number;defense?:number;power?:number};


export const RUNE_CATALOG:RuneDef[]=[
  {id:'fehuWealth',name:'Феху',effect:'Укрепляет общую силу и будущие награды',symbol:'ᚠ',power:1},
  {id:'uruzStrength',name:'Уруз',effect:'Усиленный удар оружием',symbol:'ᚢ',attack:2,power:1},
  {id:'thurisazStrike',name:'Турисаз',effect:'Тяжёлый пробивной удар',symbol:'ᚦ',attack:2},
  {id:'ansuzWisdom',name:'Ансуз',effect:'Усиливает рунический урон',symbol:'ᚨ',rune:2,power:1},
  {id:'raidoPath',name:'Райдо',effect:'Ускоряет передвижение на 10%',symbol:'ᚱ',power:1},
  {id:'kenazShard',name:'Кеназ',effect:'Усиливает руническую атаку',symbol:'ᚲ',rune:2},
  {id:'geboGift',name:'Гебо',effect:'Руна дара; повышает ценность трофея',symbol:'ᚷ',power:1},
  {id:'wunjoLuck',name:'Вуньо',effect:'Укрепляет удачу и боевой дух',symbol:'ᚹ',power:1},
  {id:'hagalazBreak',name:'Хагалаз',effect:'Добавляет разрушительную силу',symbol:'ᚺ',attack:1,rune:1},
  {id:'nauthizEndurance',name:'Наутиз',effect:'Даёт стойкость под давлением',symbol:'ᚾ',defense:1},
  {id:'isaGuard',name:'Иса',effect:'Холодная защита снижает урон',symbol:'ᛁ',defense:2},
  {id:'jeraHarvest',name:'Йера',effect:'Усиливает результат долгого пути',symbol:'ᛃ',power:1},
  {id:'eihwazResilience',name:'Эйваз',effect:'Укрепляет выносливость и защиту',symbol:'ᛇ',defense:1,power:1},
  {id:'perthroFate',name:'Перт',effect:'Руна судьбы усиливает магию',symbol:'ᛈ',rune:1,power:1},
  {id:'algizGuard',name:'Альгиз',effect:'Снижает входящий урон',symbol:'ᛉ',defense:2},
  {id:'sowiloLight',name:'Соулу',effect:'Солнечная сила усиливает оружие и руны',symbol:'ᛋ',attack:2,rune:2,power:1},
  {id:'tiwazValor',name:'Тейваз',effect:'Воинская руна усиливает удар',symbol:'ᛏ',attack:2,power:1},
  {id:'berkanoHeal',name:'Беркана',effect:'Сила роста укрепляет жизненную стойкость',symbol:'ᛒ',defense:1},
  {id:'ehwazMotion',name:'Эваз',effect:'Движение и согласованность повышают силу',symbol:'ᛖ',power:1},
  {id:'mannazMind',name:'Манназ',effect:'Ясность разума усиливает руническую атаку',symbol:'ᛗ',rune:2},
  {id:'laguzFlow',name:'Лагуз',effect:'Поток усиливает руническую энергию',symbol:'ᛚ',rune:2},
  {id:'ingwazReserve',name:'Ингваз',effect:'Запас внутренней силы повышает стойкость',symbol:'ᛜ',defense:1,power:1},
  {id:'dagazDawn',name:'Дагаз',effect:'Прорыв усиливает оба вида атаки',symbol:'ᛞ',attack:1,rune:1,power:1},
  {id:'othalaLegacy',name:'Отала',effect:'Наследие укрепляет защиту и общую силу',symbol:'ᛟ',defense:1,power:1}
]


export const lootDisplayName=(id:string)=>{
  const weaponNames:Record<string,string>={default:'Основное оружие',sword2:'Меч II',swordBig:'Большой меч',swordGolden:'Золотой меч',knife:'Боевой кинжал',dagger2:'Кинжал II',axe:'Северный топор',axeSmall:'Малый топор',axeDouble:'Двойной топор',mace:'Малый молот',hammerDouble:'Двойной молот',spear:'Копьё',claymore:'Клеймор',scythe:'Боевая коса'};
  const shieldNames:Record<string,string>={'Shield_Round.glb':'Круглый щит','Shield_Round_2.glb':'Серебряный щит','Shield_Heater.glb':'Щит','Shield_Heater_2.glb':'Щит II','Shield_Celtic_Golden.glb':'Золотой щит'};
  return weaponNames[id]||shieldNames[id]||RUNE_CATALOG.find(r=>r.id===id)?.name||POTION_CATALOG.find(p=>p.id===id)?.name||id;
};


export const weaponDisplayIcon=(id:string)=>id==='axe'||id==='axeSmall'||id==='axeDouble'?'🪓':id==='mace'||id==='hammerDouble'?'🔨':id==='spear'?'🔱':id==='knife'||id==='dagger2'?'🗡️':'⚔️';


export type BanditSpec={id:string;name:string;x:number;z:number;hp:number;damage:number;sparks:number;reward:string;item?:string;kind?:'weapon'|'potion'|'rune';quantity?:number};


export const BANDIT_SPECS:BanditSpec[]=[
  {id:'forest',name:'Разбойник у моста',x:-46,z:49,hp:3,damage:9,sparks:12,reward:'Разбойничий кинжал',kind:'weapon',item:'knife'},
  {id:'grove',name:'Разбойник глубокой рощи',x:-41,z:70,hp:4,damage:10,sparks:13,reward:'Эликсир северного мха',kind:'potion',item:'northernMoss'},
  {id:'ash',name:'Разбойник у ясеня',x:-29,z:29,hp:4,damage:11,sparks:14,reward:'Случайная руна Старшего Футарка',kind:'rune'},
  {id:'norns',name:'Разбойник у старой дороги',x:-46,z:-24,hp:5,damage:12,sparks:15,reward:'Морозный настой',kind:'potion',item:'frostDraught'},
  {id:'runefield',name:'Разбойник рунного поля',x:34,z:64,hp:5,damage:13,sparks:16,reward:'Случайная руна Старшего Футарка',kind:'rune'},
  {id:'deer',name:'Разбойник оленьей поляны',x:66,z:44,hp:6,damage:14,sparks:17,reward:'Случайная руна Старшего Футарка',kind:'rune'},
  {id:'camp',name:'Разбойник лесной стоянки',x:69,z:-7,hp:6,damage:15,sparks:18,reward:'Случайная руна Старшего Футарка',kind:'rune'},
  {id:'south',name:'Разбойник южного тракта',x:34,z:-49,hp:7,damage:16,sparks:19,reward:'Эликсир жизни',kind:'potion',item:'lifeElixir'},
  {id:'west',name:'Разбойник западного берега',x:-70,z:-16,hp:8,damage:17,sparks:21,reward:'Два эликсира северного мха',kind:'potion',item:'northernMoss',quantity:2}
];


export type WhisperPhase="closed"|"question"|"fight"|"reward"|"defeat";


export const MIDGARD_MAP_ICON="data:image/webp;base64,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";


export const MIDGARD_MILL_ICON="data:image/webp;base64,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";
