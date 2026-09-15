import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";

const tg: any = (window as any).Telegram?.WebApp;
const BASE: string = (import.meta as any).env?.BASE_URL || "/";

type Rune = { id: string; sym: string; name: string; meaning: string; task: string; reward: number };
type Realm = {
  id: string; name: string; emoji: string; tag: string; color: string; glow: string; dark: string; runeSym: string;
  x: number; y: number; runes?: Rune[];
};
type HeroDef = {
  id: string; race: string; gender: "f" | "m"; sym: string; color: string; str: number; en: number; hp: number;
  weapon: string; ability: string; abilityDesc: string; img: string;
};
type Quest = { q: string; a: string[]; c: number };
type Master = { name: string; title: string; hp: number; atk: number; sym: string; greet: string };

const REALMS: Realm[] = [
  { id: "asgard", name: "Асгард", emoji: "🏛️", tag: "Золотой чертог богов", color: "#ffd76a", glow: "rgba(255,215,106,0.8)", dark: "#3d2e00", runeSym: "ᛟ", x: 50, y: 8 },
  { id: "alfheim", name: "Альфхейм", emoji: "✨", tag: "Мир светлых эльфов", color: "#e8f4ff", glow: "rgba(232,244,255,0.8)", dark: "#1a2a3d", runeSym: "ᚹ", x: 25, y: 22 },
  { id: "vanaheim", name: "Ванахейм", emoji: "🌿", tag: "Дикий мир природы", color: "#b8e986", glow: "rgba(184,233,134,0.8)", dark: "#1a3d00", runeSym: "ᛒ", x: 75, y: 22 },
  { id: "midgard", name: "Мидгард", emoji: "🏡", tag: "Земля людей", color: "#7ee787", glow: "rgba(126,231,135,0.8)", dark: "#003d0a", runeSym: "ᚠ", x: 50, y: 38 },
  { id: "jotunheim", name: "Ётунхейм", emoji: "⛰️", tag: "Мир великанов", color: "#c9b49a", glow: "rgba(201,180,154,0.8)", dark: "#3d2e1a", runeSym: "ᚺ", x: 25, y: 55 },
  { id: "svartalfheim", name: "Свартальфхейм", emoji: "⚒️", tag: "Кузни дварфов", color: "#ff9d5c", glow: "rgba(255,157,92,0.8)", dark: "#3d1a00", runeSym: "ᚷ", x: 75, y: 55 },
  { id: "niflheim", name: "Нифльхейм", emoji: "❄️", tag: "Мир льдов", color: "#7ec8ff", glow: "rgba(126,200,255,0.8)", dark: "#001a3d", runeSym: "ᛁ", x: 25, y: 75 },
  { id: "muspelheim", name: "Муспельхейм", emoji: "🔥", tag: "Мир огня", color: "#ff6b4a", glow: "rgba(255,107,74,0.8)", dark: "#3d0000", runeSym: "ᚲ", x: 75, y: 75 },
  { id: "helheim", name: "Хельхейм", emoji: "🕯️", tag: "Подземный мир", color: "#b678ff", glow: "rgba(182,120,255,0.8)", dark: "#1a003d", runeSym: "ᛉ", x: 50, y: 92 }
];

const NAV = [{ id: "tree", ic: "ᚱ", t: "Путь" }, { id: "hero", ic: "ᛗ", t: "Герой" }, { id: "gift", ic: "ᚷ", t: "Дар" }, { id: "hall", ic: "ᛟ", t: "Чертог" }];
type Screen = { t: "tree" } | { t: "realm"; id: string } | { t: "choose" } | { t: "hero" } | { t: "gift" } | { t: "hall" } | { t: "trial"; id: string } | { t: "fight"; id: string };
type Save = { sparks: number; done: string[]; gift: string; hero: { id: string; name: string } | null; trials: string[]; artifacts: string[]; watch: number; streak: number; powers: string[] };
const DEF: Save = { sparks: 25, done: [], gift: "", hero: null, trials: [], artifacts: [], watch: 0, streak: 0, powers: [] };
const loadSave = (): Save => { try { const s = { ...DEF, ...JSON.parse(localStorage.getItem("yggdrasil") || "") }; if (!Array.isArray(s.powers)) s.powers = []; if (!s.watch) s.watch = Date.now(); return s; } catch { return { ...DEF, watch: Date.now() }; } };
const today = () => new Date().toISOString().slice(0, 10);
const rank = (n: number) => (n >= 500 ? "Всеотец" : n >= 300 ? "Мудрец Древа" : n >= 150 ? "Хранитель рун" : n >= 50 ? "Странник рун" : "Путник");
const LADDER = [3, 5, 8, 12, 18, 25, 40];

const NAMES_F = ["Астрид", "Фрейдис", "Гудрун", "Сигрид", "Хельга", "Ингрид", "Ирса", "Сольвейг"];
const NAMES_M = ["Сигурд", "Рагнар", "Эйнар", "Лейф", "Бьорн", "Харальд", "Ульф", "Гудмунд"];

const HEROES: HeroDef[] = [
  { id: "elf", race: "Эльфийка", gender: "f", sym: "ᛊ", color: "#e8f4ff", str: 6, en: 10, hp: 90, weapon: "Лук Лунного Света", ability: "Шёпот ветров", abilityDesc: "1 раз в мире убирает один неверный ответ загадки.", img: "hero_elf.png" },
  { id: "viking", race: "Викинг", gender: "m", sym: "ᛉ", color: "#ffd76a", str: 9, en: 7, hp: 110, weapon: "Копьё Молний", ability: "Крылья бури", abilityDesc: "1 раз за бой щитом поглощает удар врага.", img: "hero_viking.png" },
  { id: "dwarf", race: "Гном", gender: "m", sym: "ᚲ", color: "#ff9d5c", str: 10, en: 5, hp: 130, weapon: "Молот Глубин", ability: "Каменная кожа", abilityDesc: "Получает на 25% меньше урона; сундуки дают +50% искр.", img: "hero_dwarf.png" },
  { id: "berserk", race: "Берсерк", gender: "m", sym: "ᚦ", color: "#ff6b4a", str: 12, en: 4, hp: 100, weapon: "Секира «Клык Зверя»", ability: "Медвежья ярость", abilityDesc: "Когда здоровье ниже половины — урон удваивается.", img: "hero_berserk.png" },
];

const MASTERS: Record<string, Master> = {
  midgard: { name: "Хеймдалль", title: "Страж Радужного моста", hp: 30, atk: 5, sym: "ᚺ", greet: "Я слышу, как растёт трава и шерсть на овцах. Кто дерзнул подойти к моему мосту? Отвечай на загадки — или берись за оружие." },
  muspelheim: { name: "Сурт", title: "Огненный великан", hp: 35, atk: 6, sym: "ᚲ", greet: "Моё пламя старше богов. Если твоя мудрость не вспыхнет ярче огня — судить тебя будет мой меч." },
  niflheim: { name: "Нидхёгг", title: "Дракон корней", hp: 35, atk: 6, sym: "ᚾ", greet: "Я точу корни Древа. В тумане скрыты мои кольца. Отгадай — или станешь добычей." },
  jotunheim: { name: "Вафтруднир", title: "Мудрейший из великанов", hp: 40, atk: 7, sym: "ᚺ", greet: "Я пил мудрость веков. Устроим состязание загадок, как в старину." },
  vanaheim: { name: "Ньёрд", title: "Владыка морей и ветров", hp: 40, atk: 7, sym: "ᚾ", greet: "Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна." },
  alfheim: { name: "Фрейр", title: "Владыка Альфхейма", hp: 45, atk: 8, sym: "ᚠ", greet: "Свет не любит лжи. Отвечай верно — и свет будет тебе союзником." },
  svartalfheim: { name: "Синдри", title: "Мастер кузниц", hp: 45, atk: 8, sym: "ᚲ", greet: "Моя кузня не терпит пустых голов. Три загадки — три закалки." },
  helheim: { name: "Хель", title: "Госпожа подземного мира", hp: 50, atk: 9, sym: "ᛉ", greet: "Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка." },
  asgard: { name: "Один", title: "Всеотец", hp: 60, atk: 10, sym: "ᛟ", greet: "Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё." }
};
// --- ФУНКЦИИ ПОСТРОЕНИЯ МИРА ---
function markMeshes(g: THREE.Object3D) {
  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

const mat = (color: number, roughness = 0.9, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
const box = (w: number, h: number, d: number, c: number, r = 0.9) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c, r));

function addForge(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number, s = 1) {
  const g = new THREE.Group(); g.userData = { label: "Кузница", id: "forge" };
  const y = midHeight(x, z);
  const foundation = box(8 * s, 0.3 * s, 6 * s, 0x5b5a53, 1); foundation.position.y = 0.2 * s; g.add(foundation);
  
  // Стены из бруса
  const logMat = new THREE.MeshStandardMaterial({ color: 0x8B4A2B, roughness: 0.9 });
  for (let i = -3; i <= 3; i++) {
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.35 * s, 0.35 * s, 3.5 * s, 8), logMat);
    log.position.y = 1.7 * s;
    log.position.set(i * 1.2 * s, 0, 0);
    g.add(log);
  }
  const backWall = box(7.5 * s, 3.5 * s, 0.3 * s, 0x4a2a1e, 1); backWall.position.y = 1.7 * s; g.add(backWall);
  
  // Крыша
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x3d2a1e, roughness: 0.9 });
  const roofA = new THREE.Mesh(new THREE.BoxGeometry(3.8 * s, 0.2 * s, 4.5 * s), roofMat); roofA.rotation.z = 0.2; roofA.position.set(-2.1 * s, 2.4 * s, 0); g.add(roofA);

function Midgard3D({ h, on, eventDone }: { h: HeroDef; on: (id: string) => void; eventDone: boolean }) {
  const mount = useRef<HTMLDivElement>(null);
  const joy = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, z: 28, dx: 0, dz: 0 });
  const [near, setNear] = useState("");
  const [moving, setMoving] = useState(false);
  const [ritualOpen, setRitualOpen] = useState(false);
  const [forestEventOpen, setForestEventOpen] = useState(false);
  const [insideHome, setInsideHome] = useState(false);
  const cameraDir = useRef({ x: 0, z: 1 });
  const insideHomeRef = useRef(false);
  const homeActionRef = useRef<((inside: boolean) => void) | null>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    // --- СЦЕНА ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8fa8a1);
    scene.fog = new THREE.FogExp2(0x7b8d86, 0.0058);

    const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 280);
    camera.position.set(0, 8.5, 17);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    el.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xdce9e5, 0x3d4038, 1.38);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff1cf, 3.15);
    sun.position.set(-42, 58, 34);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -95;
    sun.shadow.camera.right = 95;
    sun.shadow.camera.top = 95;
    sun.shadow.camera.bottom = -95;
    sun.shadow.bias = -0.0005;
    scene.add(sun);
    const horizonLight = new THREE.DirectionalLight(0xb8cbc5, 0.58);
    horizonLight.position.set(55, 18, -60);
    scene.add(horizonLight);

    // --- ГЕОМЕТРИЯ МИРА (Вызов функций из Блока 2) ---
    const groundGeo = new THREE.PlaneGeometry(190, 190, 62, 62);
    const gp = groundGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < gp.count; i++) {
      const x = gp.getX(i), z = -gp.getY(i);
      gp.setZ(i, groundY(x, z));
    }
    groundGeo.rotateX(-Math.PI / 2);
    groundGeo.computeVertexNormals();
    const terrain = new THREE.Mesh(groundGeo, new THREE.MeshLambertMaterial({ map: groundTexture }));
    terrain.receiveShadow = true;
    scene.add(terrain);

    // ВЫЗОВ ФУНКЦИЙ ПОСТРОЙКИ (изменено)
    addForge(scene, objects, -10, -5); 
    placeHouse(-15, -18, 9, 7, 0.18, "house", "house_1", 0x80583a, 0x2c2927);
    placeHouse(13, -18, 10, 7, -0.08, "house", "house_2", 0x765036, 0x292725);
    placeHouse(23, -6, 8, 6, 0.72, "hunter", "hunter_house", 0x6b4a32, 0x292725);
    placeHouse(17, 9, 8, 
  const roofB = roofA.clone(); roofB.rotation.z = -0.2; roofB.position.set(2.1 * s, 2.4 *
function App() {
  const [screen, setScreen] = useState<Screen>(() => (loadSave().hero ? { t: "tree" } : { t: "choose" }));
  const [save, setSave] = useState<Save>(loadSave);
  const [pick, setPick] = useState("");
  const [pickName, setPickName] = useState("");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<number>(0);
  const [res, setRes] = useState<number | null>(null);
  const [removed, setRemoved] = useState<number | null>(null);
  const [whisper, setWhisper] = useState(false);
  const [mhp, setMhp] = useState(0);
  const [hhp, setHhp] = useState(0);
  const [hen, setHen] = useState(0);
  const [flog, setFlog] = useState("");
  const [shield, setShield] = useState(false);
  const [valk, setValk] = useState(false);
  const [over, setOver] = useState("");
  const [roadT, setRoadT] = useState(0.06);

  useEffect(() => { localStorage.setItem("yggdrasil", JSON.stringify(save)); }, [save]);
  useEffect(() => { tg?.ready?.(); tg?.expand?.(); tg?.setHeaderColor?.("#0b0f0c"); tg?.setBackgroundColor?.("#0b0f0c"); }, []);
  useEffect(() => {
    if (!tg?.BackButton) return;
    const back = () => setScreen({ t: "tree" });
    if (screen.t !== "tree" && screen.t !== "choose" && save.hero) { tg.BackButton.show(); tg.BackButton.onClick(back); } else tg.BackButton.hide();
    return () => { tg.BackButton?.offClick?.(back); };
  }, [screen, save.hero]);
  useEffect(() => { setRes(null); setRemoved(null); setWhisper(false); setOver(""); setShield(false); }, [screen]);

  const say = (m: string) => { setToast(m); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToast(""), 1800); };
  const haptic = (k: "light" | "success" = "light") => { try { if (k === "success") tg?.HapticFeedback?.notificationOccurred?.("success"); else tg?.HapticFeedback?.impactOccurred?.("light"); } catch {} };
  const go = (s: Screen) => setScreen(s);
  const openRealm = (r: Realm) => { haptic(); setScreen({ t: "realm", id: r.id }); };
  
  // ... (ваши функции watchGain, claimGift, confirmHero остаются БЕЗ ИЗМЕНЕНИЙ) ...

  const startFight = (id: string) => {
    const m = MASTERS[id];
    const ash = save.powers.includes("ashBreath");
    setMhp(m.hp);
    setHhp(heroDef!.hp + (ash ? 25 : 0));
    setHen(heroDef!.en + (ash ? 2 : 0));
    setOver(""); setShield(false); setValk(false);
    setFlog(ash ? "Дыхание Ясеня хранит тебя: +25 здоровья, +2 энергии." : m.name + " поднимает оружие!");
    if (ash) setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "ashBreath") }));
    setScreen({ t: "fight", id });
  };

  // ... функция fightAct остается БЕЗ ИЗМЕНЕНИЙ ...

  return (
    <div className="app">
      * {
  margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent;
}
html, body, #root { height: 100% }
body { background: #0b0f0c; color: #e8f0e8; font-family: system-ui, sans-serif; overflow: hidden }
button { font: inherit; color: inherit; background: none; border: none; cursor: pointer }
.app { height: 100vh; display: flex; flex-direction: column }
.hdr { display: flex; justify-content: space-between; align-items: center; padding: 7px 12px; background: rgba(8,10,9,.92); border-bottom: 1px solid #1e2a20; z-index: 6 }
.title { font-size: 14px; font-weight: 600 } 
.back { color: #6db3ff; font-size: 13px } 
.sparks { color: #ffb35c; font-weight: 700; font-size: 13px }
.maparea { flex: 1; position: relative; overflow: hidden; background: #0b0f0c }
.mapwrap { position: absolute; inset: 0; overflow-y: auto; overflow-x: hidden; scrollbar-width: none }
.mapwrap::-webkit-scrollbar { display: none }
.mapcanvas { width: 100%; min-height: 100%; position: relative; margin: 0 auto }
.mapimg { width: 100%; height: auto; display: block }
.marker { position: absolute; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; gap: 5px; z-index: 3 }
.amulet-wrap { position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center }
.amulet-ring { position: absolute; inset: 0; border-radius: 50%; border: 1px dashed; opacity: .5; animation: spin 15s linear infinite; pointer-events: none }
.amulet-glow { position: absolute; inset: -4px; border-radius: 50%; opacity: .6; animation: breathe 3s ease-in-out infinite; pointer-events: none; z-index: 1 }
.amulet-core { position: relative; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; border: 2px solid; box-shadow: 0 0 9px currentColor, inset 0 0 8px rgba(0,0,0,.85); transition: transform .2s; z-index: 2; text-shadow: 0 0 6px currentColor }
.mname { font-size: 9px; font-weight: 700; letter-spacing: .5px; padding: 3px 8px; border-radius: 6px; background: linear-gradient(180deg,rgba(20,25,22,.92),rgba(10,12,11,.96)); border: 1px solid; text-shadow: 0 0 4px currentColor; box-shadow: 0 2px 6px rgba(0,0,0,.6); white-space: nowrap; text-transform: uppercase }
.fadeT, .fadeB { position: absolute; left: 0; right: 0; height: 26px; pointer-events: none; z-index: 4 }
.fadeT { top: 0; background: linear-gradient(180deg,#0b0f0c,transparent) }
.fadeB { bottom: 0; background: linear-gradient(0deg,#0b0f0c,transparent) }
.hint { position: absolute; bottom: 10px; left: 0; right: 0; text-align: center; font-size: 11px; color: rgba(207,227,210,.7); z-index: 5; pointer-events: none }
.content { flex: 1; position: relative; overflow: hidden; background: radial-gradient(circle at 50% 30%,#182420,#0b0f0c) }
.bgimg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover }
.veil { position: absolute; inset: 0; background: linear-gradient(rgba(5,8,6,.6),transparent 30%,transparent 65%,rgba(5,8,6,.85)); pointer-events: none }
.banner { position: absolute; top: 10px; left: 12px; right: auto; z-index: 4; padding: 6px 12px; border-radius: 10px; background: linear-gradient(180deg,rgba(20,25,22,.88),rgba(10,12,11,.92)); border: 1px solid rgba(255,215,106,.45); box-shadow: 0 2px 8px rgba(0,0,0,.6); pointer-events: none }
.gate { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 8px }
.gwrap { position: relative; width: 96px; height: 96px; display: flex; align-items: center; justify-content: center }
.gate-ring { position: absolute; inset: 0; border-radius: 50%; border: 1.5px dashed; opacity: .6; animation: spin 12s linear infinite; pointer-events: none }
.gate-core { width: 76px; height: 76px; border-radius: 50%; border: 3px solid; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 700; box-shadow: 0 0 18px currentColor, inset 0 0 14px rgba(0,0,0,.9); animation: breathe 3s ease-in-out infinite; text-shadow: 0 0 10px currentColor }
.player { position: absolute; width: 76px; height: 110px; transform: translate(-50%,-88%); z-index: 20; pointer-events: none; transition: left .12s linear,top .12s linear; filter: drop-shadow(0 5px 7px rgba(0,0,0,.65)) }
.player-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain }
.midgard-content { position: relative; flex: 1; min-height: 0; overflow: hidden; background: #09110c; touch-action: none }
.midgard-world { position: absolute; left: 0; top: 0; background: #0b130e; line-height: 0; will-change: transform; transition: transform .20s cubic-bezier(.22,.75,.25,1) }
.midgard-mapimg { position: absolute; left: 0; top: 0; display: block; width: 100%; height: 100%; object-fit: fill; user-select: none; -webkit-user-drag: none }
.midgard-shade { position: absolute; inset: 0; z-index: 5; pointer-events: none; background: linear-gradient(180deg,rgba(3,7,4,.12),transparent 24%,transparent 78%) }
.midgard-content .player { z-index: 20; width: 58px; height: 84px; transform: translate(-50%,-82%); transition: left .16s ease-out,top .16s ease-out; filter: drop-shadow(0 7px 5px rgba(0,0,0,.68)) }
.move-pad { position: absolute; left: 12px; bottom: 16px; z-index: 30; width: 126px; display: flex; flex-direction: column; align-items: center; gap: 3px }
.move-row { display: flex; align-items: center; justify-content: center }
.move-pad button { width: 38px; height: 38px; margin: 2px; border-radius: 50%; border: 1px solid rgba(255,255,255,.3); background: rgba(12,18,14,.78); color: #e8f0e8; font-size: 18px; font-weight: 700; box-shadow: 0 3px 8px rgba(0,0,0,.45),inset 0 0 8px rgba(126,231,135,.08); backdrop-filter: blur(4px) }
.move-pad button:active { transform: scale(.88); background: rgba(35,55,42,.9) }
.move-pad .move-center { width: 32px; height: 32px; font-size: 10px; color: #ffd76a; border-color: rgba(255,215,106,.35) }
.scene-hint { position: absolute; left: 50%; bottom: 8px; transform: translateX(-50%); z-index: 25; padding: 6px 10px; border-radius: 9px; background: rgba(5,9,7,.72); border: 1px solid rgba(126,231,135,.2); color: rgba(207,227,210,.72); font-size: 10px; white-space: nowrap; pointer-events: none }
.herobar { display: flex; gap: 10px; align-items: center; padding: 8px 12px; background: rgba(10,13,11,.96); border-top: 1px solid #1e2a20; z-index: 6 }
.hbface { position: relative; width: 34px; height: 34px; flex-shrink: 0; border-radius: 50%; border: 1.5px solid; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 700; overflow: hidden; background: #0d130f; text-shadow: 0 0 5px currentColor }
.hbimg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain }
.hbname { flex: 1; display: flex; flex-direction: column; align-items: flex-start; font-size: 13px; font-weight: 700; line-height: 1.15 }
.hbst { font-size: 12px; color: #ffb35c; font-weight: 700; white-space: nowrap }
.hbwpn { font-size: 16px }
.scroll { flex: 1; overflow-y: auto; padding: 14px; display: flex; flex-direction: column; gap: 12px }
.card { background: #121a15; border: 1px solid #223028; border-radius: 16px; padding: 14px }
.center { text-align: center }
.big { font-size: 44px }
.qhead2 { font-size: 16px; font-weight: 700; margin: 6px 0 4px }
.dim { color: #8fa39a; font-size: 13px; margin: 6px 0 12px }
.choose-screen { padding: 12px 12px 18px; gap: 10px }
.choose-intro { padding: 14px 12px 10px }
.choose-intro .big { font-size: 34px; color: #ffd76a; text-shadow: 0 0 10px rgba(255,215,106,.45) }
.hcard { display: flex; gap: 12px; padding: 12px; background: #121a15; border: 1px solid #223028; border-radius: 16px; text-align: left; align-items: center }
.hcard.on { border-color: #ffd76a; box-shadow: 0 0 12px rgba(255,215,106,.35) }
.days { display: flex; gap: 6px; justify-content: center; margin: 10px 0 }
.day { flex: 1; padding: 8px 2px; border-radius: 10px; background: #0d130f; border: 1px solid #223028; font-size: 10px; color: #8fa39a; display: flex; flex-direction: column; gap: 4px; align-items: center }
.day b { font-size: 12px; color: #e8f0e8 }
.day.on { border-color: #ffd76a; box-shadow: 0 0 8px rgba(255,215,106,.35) }
.day.on b { color: #ffd76a }
.day.done { opacity: .5 }
      <div className="hdr">
        {/* Шапка экрана */}
      </div>

      {/* ЭКРАНЫ ВЫБОРА И МЕНЮ (остаются как есть) */}
      {screen.t === "choose" && /* ... ваш код выбора героя ... */ null}
      {screen.t === "tree" && /* ... карта мира (Midgard3D будет ниже) ... */ null}
      
      {/* ГЛАВНЫЙ 3D МИР */}
      {screen.t === "tree" && (
        <Midgard3D 
          h={heroDef} 
          on={(id) => {
            if (id.startsWith("forest")) setForestEventOpen(true);
            else if (id === "mimir") { if (save.done.includes("forest:present")) { if (!save.done.includes("forest:present:reward")) { setSave(s => ({ ...s, sparks: s.sparks + 20, done: [...new Set([...s.done, "forest:present:reward"]) ]})); haptic("success"); say("Знак Мимира совпал! +20 ✨"); } else { say("Мимир молчит."); } } else { say('Мимир: «Слушай внимательно...»'); }
          }}
          eventDone={save.done.includes("forest:choice")}
        />
      )}

      {/* ОКНО СОБЫТИЯ В Л
