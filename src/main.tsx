import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

interface Hero {
  id: string;
  race: string;
  weapon: string;
  sym: string;
  color: string;
  str: number;
  en: number;
  hp: number;
  abilityDesc: string;
}

interface Save {
  sparks: number;
  hero: { id: string; name: string } | null;
  done: string[];
  trials: string[];
}

const loadSave = (): Save => {
  try {
    const raw = localStorage.getItem("yggdrasil");
    if (raw) return JSON.parse(raw);
  } catch {}
  return { sparks: 45, hero: null, done: [], trials: [] };
};

const HEROES: Hero[] = [
  { id: "viking", race: "Норманн", weapon: "Топор и Рунный Щит", sym: "ᚠ", color: "#e3963e", str: 14, en: 10, hp: 120, abilityDesc: "Мощный удар в ближнем бою" },
  { id: "völva", race: "Вёльва", weapon: "Посох и Руны Судеб", sym: "ᚲ", color: "#82c91e", str: 10, en: 16, hp: 90, abilityDesc: "Магия стихий и предсказания" },
  { id: "berserk", race: "Ульфхеднар", weapon: "Волчья шкура и Кезен", sym: "ᚷ", color: "#ff6b6b", str: 18, en: 8, hp: 140, abilityDesc: "Ярость Берсерка наносит двойной урон" },
];

const REALMS = [
  { id: "midgard", name: "Мидгард", tag: "Мир людей", runeSym: "ᛗ", color: "#7ee787", dark: "#122618", glow: "rgba(126,231,135,0.35)", x: 50, y: 52, runes: [{ id: "m1", name: "Удача" }, { id: "m2", name: "Дом" }] },
  { id: "muspelheim", name: "Муспельхейм", tag: "Огненный мир", runeSym: "ᚲ", color: "#ff6b4a", dark: "#261512", glow: "rgba(255,107,74,0.35)", x: 28, y: 32, runes: [{ id: "mu1", name: "Пламя" }] },
  { id: "niflheim", name: "Нифльхейм", tag: "Мир туманов", runeSym: "ᛁ", color: "#4aa3ff", dark: "#121b26", glow: "rgba(74,163,255,0.35)", x: 74, y: 30, runes: [{ id: "n1", name: "Лёд" }] },
  { id: "jotunheim", name: "Йотунхейм", tag: "Мир великанов", runeSym: "ᚦ", color: "#d290ff", dark: "#211226", glow: "rgba(210,144,255,0.35)", x: 22, y: 72, runes: [{ id: "j1", name: "Сила" }] },
  { id: "vanaheim", name: "Ванахейм", tag: "Мир ванов", runeSym: "ᛒ", color: "#ffd76a", dark: "#262212", glow: "rgba(255,215,106,0.35)", x: 78, y: 70, runes: [{ id: "v1", name: "Плодородие" }] },
];

const NAV = [
  { id: "tree", t: "Древо", ic: "🌳" },
  { id: "hero", t: "Герой", ic: "🛡️" },
  { id: "gift", t: "Дары", ic: "🎁" },
  { id: "hall", t: "Чертог", ic: "🏰" },
];

const MASTERS: Record<string, { name: string; title: string; sym: string; hp: number; atk: number; greet: string }> = {
  midgard: { name: "Староста Бран", title: "Хранитель Очага", sym: "ᛗ", hp: 60, atk: 8, greet: "Добро пожаловать в Мидгард, странник. Пройди по тропе мудрости." },
  muspelheim: { name: "Сурт", title: "Владыка Пламени", sym: "ᚲ", hp: 100, atk: 14, greet: "Мой огонь сожжет все сомнения. Готов ли ты выстоять?" },
  niflheim: { name: "Хель", title: "Госпожа Туманов", sym: "ᛁ", hp: 90, atk: 12, greet: "Холод моих вод сковывает спешку. Подумай над ответом." },
  jotunheim: { name: "Трим", title: "Король Ётунов", sym: "ᚦ", hp: 120, atk: 16, greet: "Сила — единственный закон скал!" },
  vanaheim: { name: "Фрейя", title: "Госпожа Ванов", sym: "ᛒ", hp: 80, atk: 10, greet: "Красота и гармония скрывают великую мощь." },
};

const QUESTS: Record<string, Array<{ q: string; a: string[]; c: number }>> = {
  midgard: [
    { q: "Какая руна символизирует защиту и защиту дома?", a: ["Альгиз", "Турисаз", "Хагалаз"], c: 0 },
    { q: "Что символизирует Мидгард в скандинавской мифологии?", a: ["Мир богов", "Мир людей", "Мир мертвых"], c: 1 },
  ],
  muspelheim: [
    { q: "Кто охраняет границы Муспельхейма с огненным мечом?", a: ["Сурт", "Локи", "Один"], c: 0 },
  ],
  niflheim: [
    { q: "Как называется ледяной источник в Нифльхейме?", a: ["Хвергельмир", "Мимисбрунн", "Урд"], c: 0 },
  ],
  jotunheim: [
    { q: "Какой город является столицей ётунов?", a: ["Утгард", "Асгард", "Вальхалла"], c: 0 },
  ],
  vanaheim: [
    { q: "Кем являются ваны по своему рангу?", a: ["Боги плодородия и природы", "Великаны", "Карлики-кузнецы"], c: 0 },
  ],
};

const rank = (sparks: number) => {
  if (sparks > 150) return "Великий Мудрец Рун";
  if (sparks > 80) return "Проводник Иггдрасиля";
  if (sparks > 30) return "Странник Пути";
  return "Новичок Мидгарда";
};

const BgImg = ({ name, className }: { name: string; className?: string }) => (
  <div className={className} style={{ backgroundImage: `url(./assets/${name})`, backgroundSize: "cover", backgroundPosition: "center" }} />
);

function Midgard3D({ h, on, eventDone }: { h: Hero; on: (s: string) => void; eventDone: boolean }) {
  const mount = useRef<HTMLDivElement>(null);
  const joy = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, z: -10, dx: 0, dz: 0 });
  const [near, setNear] = useState("");
  const [moving, setMoving] = useState(false);
  const [ritualOpen, setRitualOpen] = useState(false);
  const [forestEventOpen, setForestEventOpen] = useState(false);

  const midHash = (x: number, z: number) => {
    const n = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
    return n - Math.floor(n);
  };

  const groundY = (x: number, z: number) => {
    return Math.sin(x * 0.15) * Math.cos(z * 0.15) * 0.45 + Math.sin(x * 0.05) * 0.2;
  };

  const midTree = (x: number, z: number, scale = 1, pine = false) => {
    const group = new THREE.Group();
    const gy = groundY(x, z);
    
    if (pine) {
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18 * scale, 0.24 * scale, 1.4 * scale, 6),
        new THREE.MeshStandardMaterial({ color: 0x4a382c, roughness: 0.9 })
      );
      trunk.position.y = gy + 0.7 * scale;
      trunk.castShadow = true;
      group.add(trunk);

      const leaves = new THREE.Mesh(
        new THREE.ConeGeometry(1.1 * scale, 2.6 * scale, 7),
        new THREE.MeshStandardMaterial({ color: 0x243d2c, roughness: 0.85 })
      );
      leaves.position.y = gy + 2.1 * scale;
      leaves.castShadow = true;
      group.add(leaves);
    } else {
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2 * scale, 0.28 * scale, 1.6 * scale, 7),
        new THREE.MeshStandardMaterial({ color: 0x544033, roughness: 0.9 })
      );
      trunk.position.y = gy + 0.8 * scale;
      trunk.castShadow = true;
      group.add(trunk);

      const crown = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.2 * scale, 1),
        new THREE.MeshStandardMaterial({ color: 0x3b5238, roughness: 0.8 })
      );
      crown.position.y = gy + 2.2 * scale;
      crown.castShadow = true;
      group.add(crown);
    }

    group.position.set(x, 0, z);
    return group;
  };

  const midHero3d = (hero: Hero) => {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: hero.color, roughness: 0.7 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xdfb18c, roughness: 0.8 });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.7, 0.35), bodyMat);
    torso.position.y = 0.85;
    torso.castShadow = true;
    group.add(torso);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.38, 0.38), skinMat);
    head.position.y = 1.35;
    head.castShadow = true;
    group.add(head);

    const legGeo = new THREE.BoxGeometry(0.2, 0.55, 0.22);
    const legL = new THREE.Mesh(legGeo, new THREE.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 0.9 }));
    legL.position.set(-0.16, 0.3, 0);
    group.add(legL);

    const legR = new THREE.Mesh(legGeo, new THREE.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 0.9 }));
    legR.position.set(0.16, 0.3, 0);
    group.add(legR);

    const armGeo = new THREE.BoxGeometry(0.16, 0.55, 0.16);
    const armLGroup = new THREE.Group();
    armLGroup.position.set(-0.4, 1.05, 0);
    const armL = new THREE.Mesh(armGeo, bodyMat);
    armL.position.y = -0.2;
    armLGroup.add(armL);
    group.add(armLGroup);

    const armRGroup = new THREE.Group();
    armRGroup.position.set(0.4, 1.05, 0);
    const armR = new THREE.Mesh(armGeo, bodyMat);
    armR.position.y = -0.2;
    armRGroup.add(armR);
    group.add(armRGroup);

    group.userData = { anim: { legL, legR, armL: { upper: armLGroup }, armR: { upper: armRGroup } } };
    return group;
  };

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e1411);
    scene.fog = new THREE.FogExp2(0x0e1411, 0.035);

    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x7da294, 0.8);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff3d1, 1.4);
    sun.position.set(15, 25, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 1024;
    sun.shadow.mapSize.height = 1024;
    scene.add(sun);

    // Земля Мидгарда
    const groundGeo = new THREE.PlaneGeometry(120, 120, 48, 48);
    groundGeo.rotateX(-Math.PI / 2);
    const pos = groundGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const pz = pos.getZ(i);
      pos.setY(i, groundY(px, pz));
    }
    groundGeo.computeVertexNormals();
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x283b30, roughness: 0.95, metalness: 0.05 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.receiveShadow = true;
    scene.add(ground);

    // Трава и элементы
    const grassGroup = new THREE.Group();
    const grassCanvas = document.createElement("canvas");
    grassCanvas.width = grassCanvas.height = 64;
    const gctx = grassCanvas.getContext("2d")!;
    gctx.fillStyle = "#5d7a5b";
    gctx.beginPath();
    gctx.arc(32, 44, 20, 0, Math.PI * 2);
    gctx.fill();
    const grassTex = new THREE.CanvasTexture(grassCanvas);
    grassTex.colorSpace = THREE.SRGBColorSpace;
    const grassMat = new THREE.SpriteMaterial({ map: grassTex, transparent: true, depthWrite: false });

    for (let i = 0; i < 48; i++) {
      const spr = new THREE.Sprite(grassMat);
      const gx = -52 + midHash(i, 11) * 104;
      const gz = -52 + midHash(i, 12) * 104;
      if (Math.hypot(gx, gz) < 3.5) continue;
      spr.position.set(gx, groundY(gx, gz) + 0.35, gz);
      spr.scale.set(0.9, 0.9, 1);
      grassGroup.add(spr);
    }
    scene.add(grassGroup);

    // Интерактивные объекты
    const interactables: Array<{ pos: THREE.Vector3; id: string; label: string; radius: number }> = [];

    const houseGroup = new THREE.Group();
    const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(5.2, 3.2, 4.2), new THREE.MeshStandardMaterial({ color: 0x5e4534, roughness: 0.9 }));
    wallMesh.position.y = 1.6;
    wallMesh.castShadow = true;
    houseGroup.add(wallMesh);
    const roofMesh = new THREE.Mesh(new THREE.ConeGeometry(4.2, 2.2, 4), new THREE.MeshStandardMaterial({ color: 0x3d3027, roughness: 0.85 }));
    roofMesh.rotation.y = Math.PI / 4;
    roofMesh.position.y = 4.3;
    roofMesh.castShadow = true;
    houseGroup.add(roofMesh);
    houseGroup.position.set(0, groundY(0, -14), -14);
    scene.add(houseGroup);
    interactables.push({ pos: new THREE.Vector3(0, groundY(0, -14), -12), id: "council", label: "Дом совета", radius: 3.2 });

    const shrineGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 2.8, 8), new THREE.MeshStandardMaterial({ color: 0x6e7872, roughness: 0.85 }));
      const angle = (i / 3) * Math.PI * 2;
      pillar.position.set(Math.cos(angle) * 1.8, 1.4, Math.sin(angle) * 1.8);
      pillar.castShadow = true;
      shrineGroup.add(pillar);
    }
    const altar = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.8, 1.4), new THREE.MeshStandardMaterial({ color: 0x4a524e, roughness: 0.8 }));
    altar.position.y = 0.4;
    shrineGroup.add(altar);
    shrineGroup.position.set(10, groundY(10, -5), -5);
    scene.add(shrineGroup);
    interactables.push({ pos: new THREE.Vector3(10, groundY(10, -5), -5), id: "shrine", label: "Рунное святилище", radius: 3.5 });

    const portalGroup = new THREE.Group();
    const portalArch = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.25, 8, 24), new THREE.MeshStandardMaterial({ color: 0xffd76a, emissive: 0x997220, emissiveIntensity: 0.5, roughness: 0.4 }));
    portalArch.position.y = 2.2;
    portalGroup.add(portalArch);
    portalGroup.position.set(-12, groundY(-12, -22), -22);
    scene.add(portalGroup);
    interactables.push({ pos: new THREE.Vector3(-12, groundY(-12, -22), -22), id: "portal", label: "Тропа испытаний", radius: 3.5 });

    for (let i = 0; i < 70; i++) {
      const tx = -55 + midHash(i, 51) * 110;
      const tz = -55 + midHash(i, 52) * 110;
      if (Math.hypot(tx, tz) < 14) continue;
      const tr = midTree(tx, tz, 0.8 + midHash(i, 53) * 0.7, midHash(i, 54) > 0.5);
      scene.add(tr);
    }

    const heroObj = midHero3d(h);
    scene.add(heroObj);

    let animId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(0.1, (now - lastTime) * 0.001);
      lastTime = now;

      const s = state.current;
      if (s.dx !== 0 || s.dz !== 0) {
        const speed = 7.5;
        s.x += s.dx * speed * dt;
        s.z += s.dz * speed * dt;
        s.x = Math.max(-48, Math.min(48, s.x));
        s.z = Math.max(-48, Math.min(48, s.z));

        const targetAngle = Math.atan2(s.dx, s.dz);
        heroObj.rotation.y = targetAngle;

        if (heroObj.userData.anim) {
          const a = heroObj.userData.anim;
          const tCycle = now * 0.015;
          const swing = Math.sin(tCycle) * 0.55;
          a.legL.rotation.x = swing;
          a.legR.rotation.x = -swing;
          a.armL.upper.rotation.x = -swing * 0.8;
          a.armR.upper.rotation.x = swing * 0.8;
        }
        setMoving(true);
      } else {
        if (heroObj.userData.anim) {
          const a = heroObj.userData.anim;
          a.legL.rotation.x = THREE.MathUtils.lerp(a.legL.rotation.x, 0, 0.15);
          a.legR.rotation.x = THREE.MathUtils.lerp(a.legR.rotation.x, 0, 0.15);
          a.armL.upper.rotation.x = THREE.MathUtils.lerp(a.armL.upper.rotation.x, 0, 0.15);
          a.armR.upper.rotation.x = THREE.MathUtils.lerp(a.armR.upper.rotation.x, 0, 0.15);
        }
        setMoving(false);
      }

      heroObj.position.set(s.x, groundY(s.x, s.z), s.z);

      let currentNear = "";
      for (const obj of interactables) {
        const dist = Math.hypot(s.x - obj.pos.x, s.z - obj.pos.z);
        if (dist < obj.radius) {
          currentNear = obj.id;
          break;
        }
      }
      setNear(currentNear);

      const targetCamX = s.x;
      const targetCamZ = s.z + 13;
      const targetCamY = groundY(s.x, s.z) + 7.5;
      camera.position.x += (targetCamX - camera.position.x) * 0.08;
      camera.position.z += (targetCamZ - camera.position.z) * 0.08;
      camera.position.y += (targetCamY - camera.position.y) * 0.08;
      camera.lookAt(s.x, groundY(s.x, s.z) + 1.5, s.z - 1.5);

      renderer.render(scene, camera);
    };
    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, [h]);

  useEffect(() => {
    const j = joy.current;
    const k = knob.current;
    if (!j || !k) return;

    let active = false;
    const center = { x: 66, y: 66 };

    const onStart = (clientX: number, clientY: number) => {
      active = true;
      onMove(clientX, clientY);
    };

    const onMove = (clientX: number, clientY: number) => {
      if (!active) return;
      const rect = j.getBoundingClientRect();
      const x = clientX - rect.left - center.x;
      const y = clientY - rect.top - center.y;
      const dist = Math.hypot(x, y);
      const maxDist = 48;
      const angle = Math.atan2(y, x);

      const clampedDist = Math.min(dist, maxDist);
      const kx = Math.cos(angle) * clampedDist;
      const ky = Math.sin(angle) * clampedDist;

      k.style.transform = `translate(${kx}px, ${ky}px)`;

      state.current.dx = kx / maxDist;
      state.current.dz = ky / maxDist;
    };

    const onEnd = () => {
      active = false;
      k.style.transform = `translate(0px, 0px)`;
      state.current.dx = 0;
      state.current.dz = 0;
    };

    const touchStart = (e: TouchEvent) => onStart(e.touches[0].clientX, e.touches[0].clientY);
    const touchMove = (e: TouchEvent) => onMove(e.touches[0].clientX, e.touches[0].clientY);
    const mouseStart = (e: MouseEvent) => onStart(e.clientX, e.clientY);
    const mouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);

    j.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    j.addEventListener("mousedown", mouseStart);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", onEnd);

    return () => {
      j.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", onEnd);
      j.removeEventListener("mousedown", mouseStart);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", onEnd);
    };
  }, []);

  return (
    <div className="mid3d-scene" ref={mount} style={{ width: "100%", height: "100%", position: "relative" }}>
      <div className="mid3d-ui mid3d-top">
        <div className="mid3d-pill">
          <b>МИДГАРД · СЕЛО</b>
          <span>Исследуй мир, найди святилище или совет</span>
        </div>
        export function App() {
  const [save, setSave] = useState<Save>(loadSave);
  const [screen, setScreen] = useState<{ t: string; id?: string }>({ t: "tree" });
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try { localStorage.setItem("yggdrasil", JSON.stringify(save)); } catch {}
  }, [save]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  };

  const addSparks = (n: number) => setSave(s => ({ ...s, sparks: s.sparks + n }));

  const currentHero = HEROES.find(h => h.id === save.hero?.id) || HEROES[1];

  return (
    <div className="app">
      {toast && <div className="toast">{toast}</div>}

      <div className="hdr">
        <div className="title">Иггдрасиль: Путь Рун</div>
        <div className="sparks">✨ {save.sparks}</div>
      </div>

      <div style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Экран 1: Древо Миров */}
        {screen.t === "tree" && (
          <div className="maparea">
            <div className="mapwrap">
              <div className="mapcanvas" style={{ height: 760 }}>
                <BgImg name="tree_bg.jpg" className="mapimg" />
                {REALMS.map(r => {
                  const doneCount = (r.runes || []).filter(rn => save.done.includes(rn.id)).length;
                  const totalCount = (r.runes || []).length;
                  const isDone = totalCount > 0 && doneCount === totalCount;
                  return (
                    <div
                      key={r.id}
                      className="marker"
                      style={{ left: `${r.x}%`, top: `${r.y}%` }}
                      onClick={() => setScreen({ t: "realm", id: r.id })}
                    >
                      <div className="amulet-wrap">
                        <div className="amulet-ring" style={{ borderColor: r.color }} />
                        <div className="amulet-glow" style={{ background: r.glow }} />
                        <div className="amulet-core" style={{ color: r.color, borderColor: r.color, background: r.dark }}>
                          {r.runeSym}
                        </div>
                      </div>
                      <div className="mname" style={{ color: r.color, borderColor: r.color }}>
                        {r.name} {isDone ? "✓" : `${doneCount}/${totalCount}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="fadeT" />
            <div className="fadeB" />
            <div className="hint">Нажми на мир Древа, чтобы войти в него</div>
          </div>
        )}

        {/* Экран 2: Мир / 3D Мидгард */}
        {screen.t === "realm" && (
          <>
            {screen.id === "midgard" ? (
              <Midgard3D h={currentHero} on={() => setScreen({ t: "trial", id: "midgard" })} eventDone={save.trials.includes("midgard")} />
            ) : (
              <div className="content">
                <BgImg name={`${screen.id}.jpg`} className="bgimg" />
                <div className="veil" />
                {(() => {
                  const r = REALMS.find(x => x.id === screen.id)!;
                  return (
                    <>
                      <div className="banner" style={{ borderColor: r.color }}>
                        <div className="bname" style={{ color: r.color }}>{r.name} · {r.tag}</div>
                      </div>
                      <div className="gate">
                        <div className="gwrap" onClick={() => setScreen({ t: "trial", id: r.id })}>
                          <div className="gate-ring" style={{ borderColor: r.color }} />
                          <div className="gate-core" style={{ color: r.color, borderColor: r.color, background: r.dark }}>
                            {r.runeSym}
                          </div>
                        </div>
                        <div style={{ color: r.color, fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginTop: 4 }}>
                          Открыть врата чертога
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </>
        )}

        {/* Экран 3: Испытание / Загадки */}
        {screen.t === "trial" && (
          <div className="content" style={{ padding: 16, overflowY: "auto" }}>
            {(() => {
              const realmId = screen.id || "midgard";
              const r = REALMS.find(x => x.id === realmId)!;
              const master = MASTERS[realmId];
              const quests = QUESTS[realmId] || [];
              const [qIdx, setQIdx] = useState(0);
              const [selected, setSelected] = useState<number | null>(null);

              const q = quests[qIdx];

              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 420, margin: "0 auto", width: "100%" }}>
                  <div className="card center" style={{ background: "rgba(18,26,21,0.92)", border: `1px solid ${r.color}` }}>
                    <div className="mhead">
                      <div className="mface" style={{ color: r.color, borderColor: r.color }}>{master.sym}</div>
                      <div className="mname2" style={{ color: r.color }}>{master.name}</div>
                      <div className="mtitle">{master.title}</div>
                    </div>
                    <div className="greet">«{master.greet}»</div>
                  </div>

                  {q ? (
                    <div className="card" style={{ background: "rgba(18,26,21,0.95)" }}>
                      <div className="riddle">Загадка {qIdx + 1} из {quests.length}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, textAlign: "center", color: "#e8f0e8" }}>{q.q}</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {q.a.map((ansText, i) => {
                          const isSelected = selected === i;
                          const isCorrect = i === q.c;
                          let btnClass = "ans";
                          if (selected !== null) {
                            if (isCorrect) btnClass += " good";
                            else if (isSelected) btnClass += " bad";
                            else btnClass += " off";
                          }
                          return (
                            <button
                              key={i}
                              className={btnClass}
                              onClick={() => {
                                if (selected !== null) return;
                                setSelected(i);
                                setTimeout(() => {
                                  setSelected(null);
                                  if (qIdx + 1 < quests.length) {
                                    setQIdx(idx => idx + 1);
                                  } else {
                                    setScreen({ t: "fight", id: realmId });
                                  }
                                }, 1200);
                              }}
                            >
                              {ansText}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })()}
          </div>
        )}

        {/* Экран 4: Пошаговый бой */}
        {screen.t === "fight" && (
          <div className="content" style={{ padding: 16, overflowY: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {(() => {
              const realmId = screen.id || "midgard";
              const master = MASTERS[realmId] || MASTERS["midgard"];
              const [bossHp, setBossHp] = useState(master.hp);
              const [heroHp, setHeroHp] = useState(currentHero.hp);
              const [log, setLog] = useState(`Битва началась! Противник: ${master.name}`);

              return (
                <div style={{ width: "100%", maxWidth: 380, display: "flex", flexDirection: "column", gap: 16 }}>
                  <div className="duel">
                    <div className="dside">
                      <div className="dface" style={{ color: currentHero.color, borderColor: currentHero.color }}>{currentHero.sym}</div>
                      <div className="dname">{currentHero.race}</div>
                      <div className="dhp"><span className="dhpfill" style={{ width: `${(heroHp / currentHero.hp) * 100}%`, background: "#7ee787" }} /></div>
                      <div className="dnum">{heroHp} / {currentHero.hp} HP</div>
                    </div>
                    <div className="dvs">VS</div>
                    <div className="dside">
                      <div className="dface" style={{ color: "#ffd76a", borderColor: "#ffd76a" }}>{master.sym}</div>
                      <div className="dname">{master.name}</div>
                      <div className="dhp"><span className="dhpfill" style={{ width: `${(bossHp / master.hp) * 100}%`, background: "#ff6b4a" }} /></div>
                      <div className="dnum">{bossHp} / {master.hp} HP</div>
                    </div>
                  </div>

                  <div className="card center" style={{ background: "rgba(18,26,21,0.95)" }}>
                    <div className="flog">{log}</div>
                  </div>

                  <div className="acts">
                    <button className="btn rune" onClick={() => {
                      const dmg = currentHero.str * 2;
                      const nextBoss = Math.max(0, bossHp - dmg);
                      setBossHp(nextBoss);
                      if (nextBoss <= 0) {
                        setLog("Победа! Чертог покорён.");
                        addSparks(25);
                        setTimeout(() => setScreen({ t: "tree" }), 1500);
                      } else {
                        const counter = master.atk;
                        const nextHero = Math.max(0, heroHp - counter);
                        setHeroHp(nextHero);
                        setLog(`Ты нанёс ${dmg} урона руной! Противник ответил на ${counter}.`);
                        if (nextHero <= 0) {
                          setLog("Ты пал в бою... Возвращайся на Древо.");
                          setTimeout(() => setScreen({ t: "tree" }), 2000);
                        }
                      }
                    }}>Удар руной</button>

                    <button className="btn shield" onClick={() => {
                      setLog("Ты защищаешься щитом, поглощая часть урона!");
                      const counter = Math.max(2, master.atk - 3);
                      setHeroHp(h => Math.max(0, h - counter));
                    }}>Щит и выносливость</button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Экран Героя */}
        {screen.t === "hero" && (
          <div className="scroll" style={{ padding: 16 }}>
            <div className="card center">
              <div className="bigface hface" style={{ margin: "0 auto 12px", borderColor: currentHero.color, width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 16, border: "2px solid" }}>
                <span className="hsym" style={{ color: currentHero.color, fontSize: 28 }}>{currentHero.sym}</span>
              </div>
              <div className="qhead2">{currentHero.race}</div>
              <div className="dim">{currentHero.weapon}</div>
              <div className="chips" style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12 }}>
                <div className="chip on">Сила: {currentHero.str}</div>
                <div className="chip on">Энергия: {currentHero.en}</div>
                <div className="chip on">Здоровье: {currentHero.hp}</div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 16 }}>
              <div className="qhead2">Выбор героя</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
                {HEROES.map(h => (
                  <button
                    key={h.id}
                    className={`hcard ${save.hero?.id === h.id ? "on" : ""}`}
                    onClick={() => setSave(s => ({ ...s, hero: { id: h.id, name: h.race } }))}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, cursor: "pointer", textAlign: "left" }}
                  >
                    <div className="hface" style={{ borderColor: h.color, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, border: "2px solid" }}>
                      <span className="hsym" style={{ color: h.color, fontSize: 20 }}>{h.sym}</span>
                    </div>
                    <div className="hinfo">
                      <div className="hname" style={{ fontWeight: 700, color: "#fff" }}>{h.race}</div>
                      <div className="hab" style={{ fontSize: 12, color: "#a9bfae" }}>{h.abilityDesc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Экран Даров */}
        {screen.t === "gift" && (
          <div className="scroll center" style={{ justifyContent: "center", alignItems: "center", padding: 16 }}>
            <div className="card center" style={{ maxWidth: 360, width: "100%" }}>
              <div className="big" style={{ fontSize: 48, marginBottom: 8 }}>🎁</div>
              <div className="qhead2" style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Ежедневный дар рун</div>
              <div className="dim" style={{ fontSize: 13, color: "#a9bfae", marginBottom: 16 }}>Получай искры и благословение каждый день</div>
              <button className="btn gold" onClick={() => {
                addSparks(15);
                showToast("+15 искр получено!");
              }}>Забрать дар</button>
            </div>
          </div>
        )}

        {/* Экран Чертога */}
        {screen.t === "hall" && (
          <div className="scroll center" style={{ justifyContent: "center", alignItems: "center", padding: 16 }}>
            <div className="card center" style={{ maxWidth: 360, width: "100%" }}>
              <div className="big" style={{ fontSize: 48, marginBottom: 8 }}>🏰</div>
              <div className="qhead2" style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Чертог Мудреца</div>
              <div className="rank" style={{ marginTop: 6, fontSize: 16, color: "#ffd76a", fontWeight: 600 }}>{rank(save.sparks)}</div>
              <div className="dim" style={{ marginTop: 8, fontSize: 13, color: "#a9bfae" }}>Искр собрано: {save.sparks}</div>
            </div>
          </div>
        )}
      </div>

      <div className="nav">
        {NAV.map(n => {
          let isOn = false;
          if (n.id === "tree" && (screen.t === "tree" || screen.t === "realm" || screen.t === "trial" || screen.t === "fight")) isOn = true;
          if (n.id === "hero" && screen.t === "hero") isOn = true;
          if (n.id === "gift" && screen.t === "gift") isOn = true;
          if (n.id === "hall" && screen.t === "hall") isOn = true;

          return (
            <button
              key={n.id}
              className={`navbtn ${isOn ? "on" : ""}`}
              onClick={() => setScreen({ t: n.id })}
            >
              <div className="ic">{n.ic}</div>
              {n.t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
      </div>

      {near && (
        <div className="mid3d-ui mid3d-interact">
          <b>{near === "council" ? "Дом совета" : near === "shrine" ? "Рунное святилище" : "Тропа испытаний"}</b>
          <span>Нажми, чтобы войти во взаимодействие</span>
          <button onClick={() => {
            if (near === "shrine") setRitualOpen(true);
            else if (near === "portal") setForestEventOpen(true);
            else on("midgard");
          }}>Войти</button>
        </div>
      )}

      <div className="mid3d-ui mid3d-joy" ref={joy}>
        <div className="mid3d-knob" ref={knob} />
      </div>

      <div className="mid3d-ui mid3d-hint">Используй джойстик слева для перемещения по Мидгарду</div>

      {ritualOpen && (
        <div className="toast" style={{ top: "30%", background: "#121a15", border: "1px solid #ffd76a", padding: 20, borderRadius: 16, textAlign: "center", width: "85%", maxWidth: 320 }}>
          <div style={{ fontSize: 18, color: "#ffd76a", fontWeight: 700, marginBottom: 8 }}>Рунное святилище</div>
          <div style={{ fontSize: 13, color: "#a9bfae", marginBottom: 16 }}>Древние руны шепчут мудрость Мидгарда. Испытай свою удачу и получи благословение!</div>
          <button className="btn gold" onClick={() => { setRitualOpen(false); on("midgard"); }}>Получить дар</button>
          <button className="btn ghost" onClick={() => setRitualOpen(false)}>Назад</button>
        </div>
      )}

      {forestEventOpen && (
        <div className="toast" style={{ top: "30%", background: "#121a15", border: "1px solid #ffd76a", padding: 20, borderRadius: 16, textAlign: "center", width: "85%", maxWidth: 320 }}>
          <div style={{ fontSize: 18, color: "#ffd76a", fontWeight: 700, marginBottom: 8 }}>Тропа испытаний</div>
          <div style={{ fontSize: 13, color: "#a9bfae", marginBottom: 16 }}>Пройди через туман к вратам других миров Иггдрасиля. Готов ли ты к битве с хранителем?</div>
          <button className="btn gold" onClick={() => { setForestEventOpen(false); on("midgard"); }}>Начать испытание</button>
          <button className="btn ghost" onClick={() => setForestEventOpen(false)}>Назад</button>
        </div>
      )}
    </div>
  );
      }
/* Основные стили приложения */
.app {
  width: 100vw;
  height: 100vh;
  background-color: #0c110e;
  color: #e8f0e8;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
}

.hdr {
  height: 52px;
  background: rgba(14, 20, 17, 0.95);
  border-bottom: 1px solid rgba(126, 231, 135, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 10;
}

.title {
  font-weight: 700;
  font-size: 15px;
  color: #7ee787;
  letter-spacing: 0.5px;
}

.sparks {
  font-weight: 600;
  font-size: 14px;
  color: #ffd76a;
  background: rgba(255, 215, 106, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 106, 0.2);
}

/* Навигация внизу */
.nav {
  height: 64px;
  background: rgba(14, 20, 17, 0.95);
  border-top: 1px solid rgba(126, 231, 135, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}

.navbtn {
  background: transparent;
  border: none;
  color: #8fa396;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  padding: 6px 12px;
  transition: color 0.2s;
}

.navbtn .ic {
  font-size: 20px;
}

.navbtn.on {
  color: #7ee787;
}

/* Общие контейнеры и карточки */
.scroll {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.card {
  background: rgba(18, 26, 21, 0.85);
  border: 1px solid rgba(126, 231, 135, 0.2);
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(10px);
}

.card.center {
  text-align: center;
}

.qhead2 {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.dim {
  font-size: 13px;
  color: #a9bfae;
}

/* Карта Древа Миров */
.maparea {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #090e0b;
}

.mapwrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}

.mapcanvas {
  width: 100%;
  min-width: 360px;
  position: relative;
}

.mapimg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.55;
  filter: contrast(1.1);
}

.fadeT, .fadeB {
  position: absolute;
  left: 0;
  right: 0;
  height: 40px;
  pointer-events: none;
  z-index: 2;
}
.fadeT { top: 0; background: linear-gradient(to bottom, #0c110e, transparent); }
.fadeB { bottom: 0; background: linear-gradient(to top, #0c110e, transparent); }

.hint {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(14, 20, 17, 0.85);
  border: 1px solid rgba(126, 231, 135, 0.3);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  color: #a9bfae;
  z-index: 5;
  pointer-events: none;
  white-space: nowrap;
}

/* Маркеры миров на карте */
.marker {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  z-index: 4;
  padding: 10px;
}

.amulet-wrap {
  position: relative;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.amulet-ring {
  position: absolute;
  inset: 0;
  border: 2px dashed;
  border-radius: 50%;
  animation: spin 16s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

.amulet-glow {
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  filter: blur(6px);
}

.amulet-core {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

.mname {
  font-size: 11px;
  font-weight: 700;
  background: rgba(14, 20, 17, 0.9);
  padding: 2px 8px;
  border-radius: 10px;
  border: 1px solid;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

/* Экраны миров и врат */
.content {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bgimg {
  position: absolute;
  inset: 0;
  opacity: 0.4;
  filter: blur(1px);
}

.veil {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 20%, rgba(12, 17, 14, 0.85) 90%);
}

.banner {
  position: relative;
  z-index: 2;
  background: rgba(14, 20, 17, 0.9);
  border: 1px solid;
  padding: 8px 20px;
  border-radius: 14px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
}

.bname {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.gate {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.gwrap {
  position: relative;
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.gwrap:active {
  transform: scale(0.95);
}

.gate-ring {
  position: absolute;
  inset: 0;
  border: 3px solid;
  border-radius: 50%;
  animation: spin 12s linear infinite;
}

.gate-core {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.6);
}

/* Загадки и викторины */
.mhead {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
}

.mface {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 8px;
  background: rgba(0,0,0,0.3);
}

.mname2 {
  font-weight: 700;
  font-size: 16px;
}

.mtitle {
  font-size: 12px;
  color: #a9bfae;
}

.greet {
  font-style: italic;
  font-size: 13px;
  color: #c5d6c8;
  line-height: 1.4;
}

.riddle {
  font-size: 12px;
  font-weight: 700;
  color: #7ee787;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  text-align: center;
}

.ans {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 12px 16px;
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.ans:hover {
  background: rgba(255, 255, 255, 0.08);
}

.ans.good {
  background: rgba(126, 231, 135, 0.2) !important;
  border-color: #7ee787 !important;
  color: #7ee787;
}

.ans.bad {
  background: rgba(255, 107, 74, 0.2) !important;
  border-color: #ff6b4a !important;
  color: #ff6b4a;
}

.ans.off {
  opacity: 0.4;
}

/* Боевая система */
.duel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(18, 26, 21, 0.95);
  border: 1px solid rgba(126, 231, 135, 0.2);
  border-radius: 16px;
  padding: 16px;
}

.dside {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.dface {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 6px;
  background: rgba(0,0,0,0.3);
}

.dname {
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 6px;
}

.dhp {
  width: 100%;
  height: 6px;
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 4px;
}

.dhpfill {
  display: block;
  height: 100%;
  transition: width 0.3s;
}

.dnum {
  font-size: 10px;
  color: #a9bfae;
}

.dvs {
  font-weight: 800;
  font-size: 16px;
  color: #ffd76a;
  padding: 0 12px;
}

.flog {
  font-size: 13px;
  color: #e8f0e8;
  line-height: 1.4;
  text-align: center;
}

.acts {
  display: flex;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: transform 0.1s;
}

.btn:active {
  transform: scale(0.97);
}

.btn.rune {
  background: linear-gradient(135deg, #7ee787, #3fb950);
  color: #0c110e;
  box-shadow: 0 4px 12px rgba(126,231,135,0.3);
}

.btn.shield {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
}

.btn.gold {
  background: linear-gradient(135deg, #ffd76a, #d4af37);
  color: #0c110e;
  box-shadow: 0 4px 12px rgba(255,215,106,0.3);
}

.btn.ghost {
  background: transparent;
  color: #a9bfae;
  border: 1px solid rgba(255,255,255,0.1);
  margin-top: 8px;
}

/* 3D Мидгард и Джойстик */
.mid3d-scene {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.mid3d-ui {
  position: absolute;
  z-index: 10;
  pointer-events: none;
}

.mid3d-top {
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
}

.mid3d-pill {
  background: rgba(14, 20, 17, 0.85);
  border: 1px solid rgba(126, 231, 135, 0.3);
  padding: 8px 16px;
  border-radius: 14px;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
}

.mid3d-pill b {
  font-size: 13px;
  color: #7ee787;
  letter-spacing: 0.5px;
}

.mid3d-pill span {
  font-size: 11px;
  color: #a9bfae;
}

.mid3d-interact {
  bottom: 96px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(18, 26, 21, 0.92);
  border: 1px solid #ffd76a;
  padding: 14px 20px;
  border-radius: 16px;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.6);
  animation: popUp 0.2s ease-out;
  width: 90%;
  max-width: 300px;
}

@keyframes popUp {
  from { transform: translateX(-50%) scale(0.9); opacity: 0; }
  to { transform: translateX(-50%) scale(1); opacity: 1; }
}

.mid3d-interact b {
  font-size: 14px;
  color: #ffd76a;
}

.mid3d-interact span {
  font-size: 12px;
  color: #a9bfae;
}

.mid3d-interact button {
  margin-top: 4px;
  background: linear-gradient(135deg, #ffd76a, #d4af37);
  border: none;
  color: #0c110e;
  font-weight: 700;
  font-size: 13px;
  padding: 8px 20px;
  border-radius: 10px;
  cursor: pointer;
}

.mid3d-joy {
  bottom: 24px;
  left: 24px;
  width: 132px;
  height: 132px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  touch-action: none;
}

.mid3d-knob {
  width: 52px;
  height: 52px;
  background: rgba(126, 231, 135, 0.4);
  border: 2px solid #7ee787;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  transition: transform 0.05s linear;
}

.mid3d-hint {
  bottom: 24px;
  right: 24px;
  background: rgba(14, 20, 17, 0.85);
  border: 1px solid rgba(126, 231, 135, 0.2);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 11px;
  color: #a9bfae;
  max-width: 160px;
  text-align: center;
  display: none;
}

@media (min-width: 768px) {
  .mid3d-hint {
    display: block;
  }
}

/* Всплывающие уведомления */
.toast {
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(18, 26, 21, 0.95);
  border: 1px solid #7ee787;
  color: #7ee787;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 13px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.6);
  z-index: 100;
  animation: fadeInOut 2.4s ease forwards;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translate(-50%, -10px); }
  15% { opacity: 1; transform: translate(-50%, 0); }
  85% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -10px); }
}
