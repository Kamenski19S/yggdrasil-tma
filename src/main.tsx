import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
  { id: "asgard", name: "Асгард", emoji: "🏛️", tag: "Золотой чертог богов", color: "#ffd76a", glow: "rgba(255,215,106,0.8)", dark: "#3d2e00", runeSym: "ᛟ", x: 50, y: 8, runes: [
    { id: "algiz", sym: "ᛉ", name: "Альгиз", meaning: "Защита богов", task: "Поблагодари высшие силы за защиту.", reward: 8 },
    { id: "ingwaz", sym: "ᛜ", name: "Ингуз", meaning: "Новый цикл", task: "Заверши этап и начни новый.", reward: 9 },
    { id: "dagaz", sym: "ᛞ", name: "Дагаз", meaning: "Рассвет", task: "Сделай шаг к прорыву.", reward: 10 },
  ]},
  { id: "alfheim", name: "Альфхейм", emoji: "✨", tag: "Мир светлых эльфов", color: "#e8f4ff", glow: "rgba(232,244,255,0.8)", dark: "#1a2a3d", runeSym: "ᚹ", x: 25, y: 22, runes: [
    { id: "wunjo", sym: "ᚹ", name: "Вуньо", meaning: "Радость", task: "Сделай что-то для радости.", reward: 6 },
    { id: "laguz", sym: "ᛚ", name: "Лагуз", meaning: "Интуиция", task: "Доверься интуиции.", reward: 7 },
    { id: "mannaz", sym: "ᛗ", name: "Манназ", meaning: "Человечность", task: "Прояви доброту.", reward: 7 },
  ]},
  { id: "vanaheim", name: "Ванахейм", emoji: "🌿", tag: "Дикий мир природы", color: "#b8e986", glow: "rgba(184,233,134,0.8)", dark: "#1a3d00", runeSym: "ᛒ", x: 75, y: 22, runes: [
    { id: "berkanan", sym: "ᛒ", name: "Беркана", meaning: "Рост", task: "Позаботься о теле.", reward: 6 },
    { id: "perthro", sym: "ᛈ", name: "Пертро", meaning: "Тайна", task: "Прими неопределённость.", reward: 7 },
    { id: "jera", sym: "ᛃ", name: "Йера", meaning: "Урожай", task: "Награди себя за труды.", reward: 8 },
  ]},
  { id: "midgard", name: "Мидгард", emoji: "🏡", tag: "Земля людей", color: "#7ee787", glow: "rgba(126,231,135,0.8)", dark: "#003d0a", runeSym: "ᚠ", x: 50, y: 38, runes: [
    { id: "fehu", sym: "ᚠ", name: "Феху", meaning: "Богатство", task: "Запиши 3 вещи для благодарности.", reward: 5 },
    { id: "uruz", sym: "ᚢ", name: "Уруз", meaning: "Сила", task: "Прогулка или зарядка.", reward: 5 },
    { id: "thurisaz", sym: "ᚦ", name: "Турисаз", meaning: "Защита", task: "Откажись от истощающего дела.", reward: 6 },
    { id: "ansuz", sym: "ᚨ", name: "Ансуз", meaning: "Мудрость", task: "Узнай новое и передай другу.", reward: 6 },
  ]},
  { id: "jotunheim", name: "Ётунхейм", emoji: "⛰️", tag: "Мир великанов", color: "#c9b49a", glow: "rgba(201,180,154,0.8)", dark: "#3d2e1a", runeSym: "ᚺ", x: 25, y: 55, runes: [
    { id: "hagalaz", sym: "ᚺ", name: "Хагалаз", meaning: "Разрушение", task: "Избавься от старого.", reward: 7 },
    { id: "othala", sym: "ᛟ", name: "Одал", meaning: "Дом", task: "Удели время семье.", reward: 8 },
    { id: "tiwaz_alt", sym: "ᛏ", name: "Тюр", meaning: "Жертва", task: "Малая жертва ради цели.", reward: 8 },
  ]},
  { id: "svartalfheim", name: "Свартальфхейм", emoji: "⚒️", tag: "Кузни дварфов", color: "#ff9d5c", glow: "rgba(255,157,92,0.8)", dark: "#3d1a00", runeSym: "ᚷ", x: 75, y: 55, runes: [
    { id: "gebo", sym: "ᚷ", name: "Гебо", meaning: "Дар", task: "Сделай подарок.", reward: 7 },
    { id: "ehwaz", sym: "ᛖ", name: "Эваз", meaning: "Движение", task: "Сдвинься с мёртвой точки.", reward: 7 },
    { id: "raido", sym: "ᚱ", name: "Райдо", meaning: "Ритм", task: "Выстрой ритм дня.", reward: 8 },
  ]},
  { id: "niflheim", name: "Нифльхейм", emoji: "❄️", tag: "Мир льдов", color: "#7ec8ff", glow: "rgba(126,200,255,0.8)", dark: "#001a3d", runeSym: "ᛁ", x: 25, y: 75, runes: [
    { id: "isa", sym: "ᛁ", name: "Иса", meaning: "Лёд", task: "10 минут тишины.", reward: 5 },
    { id: "nauthiz", sym: "ᚾ", name: "Наутиз", meaning: "Нужда", task: "Откажись от привычки.", reward: 6 },
    { id: "eihwaz", sym: "ᛇ", name: "Эйваз", meaning: "Стойкость", task: "Доделай отложенное.", reward: 7 },
  ]},
  { id: "muspelheim", name: "Муспельхейм", emoji: "🔥", tag: "Мир огня", color: "#ff6b4a", glow: "rgba(255,107,74,0.8)", dark: "#3d0000", runeSym: "ᚲ", x: 75, y: 75, runes: [
    { id: "kenaz", sym: "ᚲ", name: "Кеназ", meaning: "Творчество", task: "Создай что-то.", reward: 5 },
    { id: "sowilo", sym: "ᛊ", name: "Совило", meaning: "Победа", task: "Шаг к смелой цели.", reward: 6 },
    { id: "teiwaz", sym: "ᛏ", name: "Тейваз", meaning: "Справедливость", task: "Восстанови справедливость.", reward: 7 },
  ]},
  { id: "helheim", name: "Хельхейм", emoji: "🕯️", tag: "Подземный мир", color: "#b678ff", glow: "rgba(182,120,255,0.8)", dark: "#1a003d", runeSym: "ᛉ", x: 50, y: 92, runes: [
    { id: "calc", sym: "ᚲ", name: "Кальк", meaning: "Трансформация", task: "Прими изменение.", reward: 8 },
    { id: "gar", sym: "ᚷ", name: "Гар", meaning: "Судьба", task: "Энергия в одну цель.", reward: 9 },
    { id: "yggdrasil", sym: "ᛉ", name: "Иггдрасиль", meaning: "Единство", task: "Осознай связь действий.", reward: 10 },
  ]},
];

const NAV = [{ id: "tree", ic: "ᚱ", t: "Путь" }, { id: "hero", ic: "ᛗ", t: "Герой" }, { id: "gift", ic: "ᚷ", t: "Дар" }, { id: "hall", ic: "ᛟ", t: "Чертог" }];
type Screen = { t: "tree" } | { t: "realm"; id: string } | { t: "choose" } | { t: "hero" } | { t: "gift" } | { t: "hall" } | { t: "trial"; id: string } | { t: "fight"; id: string };
type HeroSkin = "viking" | "valkyrie";
type HeroWeapon = "default";
type Save = { sparks: number; done: string[]; gift: string; hero: { id: string; name: string } | null; trials: string[]; artifacts: string[]; watch: number; streak: number; powers: string[]; heroSkin: HeroSkin; heroWeapon: HeroWeapon; ownedWeapons: string[] };
const DEF: Save = { sparks: 25, done: [], gift: "", hero: null, trials: [], artifacts: [], watch: 0, streak: 0, powers: [], heroSkin: "viking", heroWeapon: "default", ownedWeapons: ["default"] };
const loadSave = (): Save => {
  try {
    const s:any = { ...DEF, ...JSON.parse(localStorage.getItem("yggdrasil") || "") };
    if (!Array.isArray(s.powers)) s.powers = [];
    if (!Array.isArray(s.ownedWeapons)) s.ownedWeapons = ["default"];
    if (s.heroSkin !== "viking" && s.heroSkin !== "valkyrie") {
      const hd = s.hero ? HEROES.find((x:any)=>x.id===s.hero.id) : null;
      s.heroSkin = hd?.gender === "f" ? "valkyrie" : "viking";
    }
    if (!s.heroWeapon) s.heroWeapon = "default";
    if (!s.watch) s.watch = Date.now();
    return s as Save;
  } catch {
    return { ...DEF, watch: Date.now() };
  }
};
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
  niflheim: { name: "Нидхёгг", title: "Дракон корней", hp: 35, atk: 6, sym: "ᚾ", greet: "Я точу корни Древа, и туман скрывает мои кольца. Отгадай мои загадки, смертный, или станешь добычей." },
  jotunheim: { name: "Вафтруднир", title: "Мудрейший из великанов", hp: 40, atk: 7, sym: "ᚺ", greet: "Я пил мудрость веков. Устроим состязание загадок, как в старину. Проигравший отдаёт голову." },
  vanaheim: { name: "Ньёрд", title: "Владыка морей и ветров", hp: 40, atk: 7, sym: "ᚾ", greet: "Ветер принёс тебя к моему берегу. Докажи, что твой ум гибок, как волна, — или шторм отгонит тебя прочь." },
  alfheim: { name: "Фрейр", title: "Владыка Альфхейма", hp: 45, atk: 8, sym: "ᚠ", greet: "Свет не любит лжи. Отвечай верно — и свет будет тебе союзником; ошибёшься — узнаешь мой меч." },
  svartalfheim: { name: "Синдри", title: "Мастер кузниц", hp: 45, atk: 8, sym: "ᚲ", greet: "Моя кузня не терпит пустых голов. Три загадки — три закалки. Ошибёшься — проверим твою сталь в бою." },
  helheim: { name: "Хель", title: "Госпожа подземного мира", hp: 50, atk: 9, sym: "ᛉ", greet: "Половина меня живая, половина мёртвая. Правда мне люба, ложь мерзка. Говори верно — или останься со мной навеки." },
  asgard: { name: "Один", title: "Всеотец", hp: 60, atk: 10, sym: "ᛟ", greet: "Я отдал глаз за мудрость. Посмотрим, что ты отдашь за неё. Моя последняя загадка без ответа — но попробуй." },
};
const MASTER_IMG: Record<string, string> = {
  midgard: "master_midgard",
  alfheim: "master_alfheim",
  vanaheim: "master_vanaheim",
  asgard: "master_asgard",
  jotunheim: "master_jotunheim",
  svartalfheim: "master_svartalfheim",
  niflheim: "master_niflheim",
  muspelheim: "master_muspelheim",
  helheim: "master_helheim",
};
const QUESTS: Record<string, Quest[]> = {
  midgard: [
    { q: "Как зовут мост, что я стерегу, ярче пламени и светлее солнца?", a: ["Гьялларбру", "Биврёст", "Нагльфар"], c: 1 },
    { q: "Как зовут мой рог, что разбудит всех богов в последний час?", a: ["Гьяллархорн", "Гунгнир", "Гримнир"], c: 0 },
    { q: "Какая лента связала волка Фенрира? Сделана она из шума кошачьих шагов и бороды женщины.", a: ["Лединг", "Дроми", "Глейпнир"], c: 2 },
  ],
  muspelheim: [
    { q: "Как зовут корабль из ногтей мертвецов, на котором враги богов поплывут в Рагнарёк?", a: ["Нагльфар", "Скидбладнир", "Хрингхорни"], c: 0 },
    { q: "Как зовут мой меч, светлее солнца, который я подниму в последней битве?", a: ["Гунгнир", "Лэватеинн, меч победы", "Мьёльнир"], c: 1 },
    { q: "Какой мост треснет под сынами Муспеля, когда мы поскачем к Асгарду?", a: ["Мост через Гьёлль", "Нагльфар", "Биврёст"], c: 2 },
  ],
  niflheim: [
    { q: "Как зовут источник в тумане, где я свернусь и точу корни Древа?", a: ["Источник Мимира", "Хвергельмир", "Источник Урд"], c: 1 },
    { q: "Как зовут белку, что носит мои проклятья орлу на вершине Древа?", a: ["Рататоск", "Ведфёльнир", "Эйктюрнир"], c: 0 },
    { q: "Как зовут Древо, чьи корни я грызу, а оно всё живёт?", a: ["Гласир", "Лэрад", "Иггдрасиль"], c: 2 },
  ],
  jotunheim: [
    { q: "Как зовут великана, из плоти которого создан Мидгард?", a: ["Имир", "Бергельмир", "Хюмир"], c: 0 },
    { q: "Как зовут коня, что везёт ночь по небу, роняя пену изо рта росой?", a: ["Скинфакси", "Хримфакси", "Свадильфари"], c: 1 },
    { q: "Как зовут реку, что делит мир великанов и мир богов и никогда не мёрзнет?", a: ["Слид", "Гьёлль", "Ифинг"], c: 2 },
  ],
  vanaheim: [
    { q: "В каком мире я рождён и выращен, в отличие от асов?", a: ["Ванахейм", "Асгард", "Альфхейм"], c: 0 },
    { q: "Как зовут мою дочь, прекраснейшую из ванов, хозяйку Фольквангра?", a: ["Фригг", "Сиф", "Фрейя"], c: 2 },
    { q: "О чём молят меня мореходы и рыбаки?", a: ["О победе в бою", "О попутном ветре и улове", "Об урожае полей"], c: 1 },
  ],
  alfheim: [
    { q: "Какой мир достался мне в детстве как «подарок на первый зуб»?", a: ["Ванахейм", "Альфхейм", "Ётунхейм"], c: 1 },
    { q: "Как зовут мой корабль, что складывается как ткань и вмещает всех богов?", a: ["Скидбладнир", "Нагльфар", "Хрингхорни"], c: 0 },
    { q: "Что отдал я Скирниру, чтобы завоевать великаншу Герд?", a: ["Коня Блодугхофи", "Кольцо Драупнир", "Свой победный меч"], c: 2 },
  ],
  svartalfheim: [
    { q: "Что выковали мы с братом Брокком, чем теперь бьёт Тор?", a: ["Гунгнир", "Мьёльнир", "Драупнир"], c: 1 },
    { q: "Как зовут кольцо, что каждую девятую ночь капает восемью новыми кольцами?", a: ["Драупнир", "Брисингамен", "Андваранаут"], c: 0 },
    { q: "Как зовут золотого вепря, что мы выковали быстрее любого коня?", a: ["Гулльфакси", "Свадильфари", "Гуллинбурсти"], c: 2 },
  ],
  helheim: [
    { q: "Как зовут мой чертог, где принимаю я умерших от болезней и старости?", a: ["Эльюднир", "Настронд", "Вальхалла"], c: 0 },
    { q: "Как зовут моего пса, что стережёт врата моего царства?", a: ["Фенрир", "Гарм", "Сколль"], c: 1 },
    { q: "Взгляни на меня: половина меня цвета мертвецов, половина — живых. Как моё имя?", a: ["Ран", "Нотт", "Хель"], c: 2 },
  ],
  asgard: [
    { q: "Что отдал я за глоток из источника Мимира, дающий мудрость?", a: ["Свой глаз", "Коня Слейпнира", "Кольцо Драупнир"], c: 0 },
    { q: "Как зовут двух моих воронов, что облетают мир за день и всё мне рассказывают?", a: ["Гери и Фреки", "Хугин и Мунин", "Сколль и Хати"], c: 1 },
    { q: "Последняя загадка, как во дни Гестумблинди: что шепнул я на ухо Бальдру на костре?", a: ["Слова прощения", "Тайну рун", "Этого не знает никто, кроме Одина"], c: 2 },
  ],
};

const ARTIFACTS: Record<string, string> = {
  midgard: "Мегингъёрд — пояс силы",
  muspelheim: "Пламя Муспеля",
  niflheim: "Осколок Хвергельмира",
  jotunheim: "Камень Ифинга",
  vanaheim: "Ветер Ньёрда",
  alfheim: "Свет Альфхейма",
  svartalfheim: "Драупнир — кольцо изобилия",
  helheim: "Слеза Хель",
  asgard: "Гунгнир — копьё Всеотца",
};
function BgImg({ name, className }: { name: string; className: string }) {
  return (
    <img
      src={name.includes(".") ? `${BASE}img/${name}` : `${BASE}img/${name}.jpg`}
      className={className}
      alt=""
      draggable={false}
    />
  );
}
const CSS = `
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body,#root{height:100%}
body{background:#0b0f0c;color:#e8f0e8;font-family:system-ui,sans-serif;overflow:hidden}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.app{height:100vh;display:flex;flex-direction:column}
.hdr{display:flex;justify-content:space-between;align-items:center;padding:7px 12px;background:rgba(8,10,9,.92);border-bottom:1px solid #1e2a20;z-index:6}
.title{font-size:14px;font-weight:600}.back{color:#6db3ff;font-size:13px}.sparks{color:#ffb35c;font-weight:700;font-size:13px}
.maparea{flex:1;position:relative;overflow:hidden;background:#0b0f0c}
.mapwrap{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;scrollbar-width:none}
.mapwrap::-webkit-scrollbar{display:none}
.mapcanvas{width:100%;min-height:100%;position:relative;margin:0 auto}
.mapimg{width:100%;height:auto;display:block}
.marker{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:5px;z-index:3}
.amulet-wrap{position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center}
.amulet-ring{position:absolute;inset:0;border-radius:50%;border:1px dashed;opacity:.5;animation:spin 15s linear infinite;pointer-events:none}
.amulet-glow{position:absolute;inset:-4px;border-radius:50%;opacity:.6;animation:breathe 3s ease-in-out infinite;pointer-events:none;z-index:1}
.amulet-core{position:relative;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;border:2px solid;box-shadow:0 0 9px currentColor,inset 0 0 8px rgba(0,0,0,.85);transition:transform .2s;z-index:2;text-shadow:0 0 6px currentColor}
.amulet-core::after{content:"";position:absolute;inset:3px;border-radius:50%;border:1px solid currentColor;opacity:.5;pointer-events:none}
.marker:active .amulet-core{transform:scale(.85)}
.mname{font-size:9px;font-weight:700;letter-spacing:.5px;padding:3px 8px;border-radius:6px;background:linear-gradient(180deg,rgba(20,25,22,.92),rgba(10,12,11,.96));border:1px solid;text-shadow:0 0 4px currentColor;box-shadow:0 2px 6px rgba(0,0,0,.6);white-space:nowrap;text-transform:uppercase}
.fadeT,.fadeB{position:absolute;left:0;right:0;height:26px;pointer-events:none;z-index:4}
.fadeT{top:0;background:linear-gradient(180deg,#0b0f0c,transparent)}.fadeB{bottom:0;background:linear-gradient(0deg,#0b0f0c,transparent)}
.hint{position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:11px;color:rgba(207,227,210,.7);z-index:5;pointer-events:none}
.content{flex:1;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 30%,#182420,#0b0f0c)}
.bgimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.veil{position:absolute;inset:0;background:linear-gradient(rgba(5,8,6,.6),transparent 30%,transparent 65%,rgba(5,8,6,.85));pointer-events:none}
.banner{position:absolute;top:10px;left:12px;right:auto;z-index:4;padding:6px 12px;border-radius:10px;background:linear-gradient(180deg,rgba(20,25,22,.88),rgba(10,12,11,.92));border:1px solid rgba(255,215,106,.45);box-shadow:0 2px 8px rgba(0,0,0,.6);pointer-events:none}
.bemoji{display:none}.btag{display:none}
.bname{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#ffd76a;text-shadow:0 0 6px rgba(255,215,106,.5)}
.gate{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:8px}
.gwrap{position:relative;width:96px;height:96px;display:flex;align-items:center;justify-content:center}
.gate-ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed;opacity:.6;animation:spin 12s linear infinite;pointer-events:none}
.gate-core{width:76px;height:76px;border-radius:50%;border:3px solid;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700;box-shadow:0 0 18px currentColor,inset 0 0 14px rgba(0,0,0,.9);animation:breathe 3s ease-in-out infinite;text-shadow:0 0 10px currentColor}
.player{position:absolute;width:76px;height:110px;transform:translate(-50%,-88%);z-index:20;pointer-events:none;transition:left .12s linear,top .12s linear;filter:drop-shadow(0 5px 7px rgba(0,0,0,.65))}
.player-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.midgard-content{position:relative;flex:1;min-height:0;overflow:hidden;background:#09110c;touch-action:none}
.midgard-world{position:absolute;left:0;top:0;background:#0b130e;line-height:0;will-change:transform;transition:transform .20s cubic-bezier(.22,.75,.25,1)}
.midgard-mapimg{position:absolute;left:0;top:0;display:block;width:100%;height:100%;object-fit:fill;user-select:none;-webkit-user-drag:none}
.midgard-shade{position:absolute;inset:0;z-index:5;pointer-events:none;background:linear-gradient(180deg,rgba(3,7,4,.12),transparent 24%,transparent 78%,rgba(3,7,4,.22))}
.midgard-content .player{z-index:20;width:58px;height:84px;transform:translate(-50%,-82%);transition:left .16s ease-out,top .16s ease-out;filter:drop-shadow(0 7px 5px rgba(0,0,0,.68))}
.move-pad{position:absolute;left:12px;bottom:16px;z-index:30;width:126px;display:flex;flex-direction:column;align-items:center;gap:3px}
.move-row{display:flex;align-items:center;justify-content:center}
.move-pad button{width:38px;height:38px;margin:2px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:rgba(12,18,14,.78);color:#e8f0e8;font-size:18px;font-weight:700;box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 0 8px rgba(126,231,135,.08);backdrop-filter:blur(4px)}
.move-pad button:active{transform:scale(.88);background:rgba(35,55,42,.9)}
.move-pad .move-center{width:32px;height:32px;font-size:10px;color:#ffd76a;border-color:rgba(255,215,106,.35)}
.scene-hint{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);z-index:25;padding:6px 10px;border-radius:9px;background:rgba(5,9,7,.72);border:1px solid rgba(126,231,135,.2);color:rgba(207,227,210,.72);font-size:10px;white-space:nowrap;pointer-events:none}
.herobar{display:flex;gap:10px;align-items:center;padding:8px 12px;background:rgba(10,13,11,.96);border-top:1px solid #1e2a20;z-index:6}
.hbface{position:relative;width:34px;height:34px;flex-shrink:0;border-radius:50%;border:1.5px solid;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;overflow:hidden;background:#0d130f;text-shadow:0 0 5px currentColor}
.hbimg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.hbname{flex:1;display:flex;flex-direction:column;align-items:flex-start;font-size:13px;font-weight:700;line-height:1.15}
.hbname i{font-style:normal;font-size:10px;color:#8fa39a}
.hbst{font-size:12px;color:#ffb35c;font-weight:700;white-space:nowrap}
.hbwpn{font-size:16px}
.scroll{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px}
.card{background:#121a15;border:1px solid #223028;border-radius:16px;padding:14px}.center{text-align:center}.big{font-size:44px}
.qhead2{font-size:16px;font-weight:700;margin:6px 0 4px}.dim{color:#8fa39a;font-size:13px;margin:6px 0 12px}
.choose-screen{padding:12px 12px 18px;gap:10px}.choose-intro{padding:14px 12px 10px}.choose-intro .big{font-size:34px;color:#ffd76a;text-shadow:0 0 10px rgba(255,215,106,.45)}
.hcard{display:flex;gap:12px;padding:12px;background:#121a15;border:1px solid #223028;border-radius:16px;text-align:left;align-items:center}
.hcard.on{border-color:#ffd76a;box-shadow:0 0 12px rgba(255,215,106,.35)}
.hface{position:relative;width:64px;height:64px;flex-shrink:0;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hsym{font-size:26px;font-weight:700;text-shadow:0 0 8px currentColor}
.himg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.hinfo{flex:1;display:flex;flex-direction:column;gap:3px}
.hname{font-size:15px;font-weight:700}
.hab{font-size:11px;color:#a9bfae;line-height:1.35}
.hst{font-size:11px;color:#ffb35c;font-weight:700}
.hw{font-size:11px;color:#8fa39a}
.bigface{width:96px;height:96px;margin:0 auto 10px}
.hrow{font-size:13px;color:#a9bfae;margin:6px 0;text-align:left}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.chip{padding:8px 12px;border-radius:10px;background:#0d130f;border:1px solid #223028;font-size:13px}
.chip.on{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 8px rgba(255,215,106,.4)}
.stats{display:flex;gap:10px;justify-content:center;margin:12px 0}
.stat{flex:1;background:#0d130f;border:1px solid #223028;border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:4px;align-items:center}.stat b{font-size:15px}.stat span{font-size:11px;color:#8fa39a}
.rank{font-size:14px;color:#ffd76a}
.nav{display:flex;flex-shrink:0;background:linear-gradient(180deg,#141b16,#0a0d0b);border-top:2px solid #2e3d31;box-shadow:inset 0 1px 0 rgba(255,215,106,.12);padding:3px 4px calc(3px + env(safe-area-inset-bottom));z-index:6}
.navbtn{flex:1;display:flex;flex-direction:column;align-items:center;gap:1px;padding:2px 0;color:#7d8f85;font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.navbtn .ic{width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;border-radius:50%;border:1.5px solid #3a4a3d;background:linear-gradient(180deg,#131a15,#0b0f0c);color:#8fa39a;transition:all .2s;text-shadow:0 0 5px currentColor}
.navbtn:active .ic{transform:scale(.88)}
.navbtn.on{color:#ffd76a}
.navbtn.on .ic{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 10px rgba(255,215,106,.45),inset 0 0 6px rgba(255,215,106,.2)}
.mhead{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 0 6px}
.mface{width:84px;height:84px;border-radius:50%;border:3px solid;display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:700;box-shadow:0 0 16px currentColor,inset 0 0 12px rgba(0,0,0,.9);text-shadow:0 0 10px currentColor;background:radial-gradient(circle,#1a221c,#0a0a0a 75%)}
.mname2{font-size:15px;font-weight:700}.mtitle{font-size:11px;color:#8fa39a}
/* Облако-мысль для загадки */
.greet{background:none;border:none;padding:0;font-style:italic;color:#a9bfae;text-align:center;font-size:12px;line-height:1.5}
.cloud{position:relative;margin:14px 10px 0;padding:16px 14px 12px;border-radius:26px;background:linear-gradient(180deg,#eef3ec,#d9e2da);color:#202b24;box-shadow:0 10px 26px rgba(0,0,0,.55), inset 0 -8px 16px rgba(110,130,120,.22);animation:cloudin .45s ease, bob 4s ease-in-out .45s infinite}
.cloud::before{content:"";position:absolute;top:-12px;left:50%;width:30px;height:30px;border-radius:50%;background:#eef3ec;transform:translateX(-75%);box-shadow:0 -2px 6px rgba(0,0,0,.25)}
.cloud::after{content:"";position:absolute;top:-22px;left:50%;width:14px;height:14px;border-radius:50%;background:#eef3ec;transform:translateX(-20%);box-shadow:0 -2px 4px rgba(0,0,0,.2)}
.riddle{color:#202b24;font-size:15px;font-weight:700;line-height:1.45;text-align:center;padding:2px 2px 10px}
.ans{width:100%;padding:11px 12px;border-radius:14px;background:rgba(255,255,255,.8);border:1px solid rgba(70,95,80,.3);color:#243028;font-size:14px;font-weight:600;margin-top:8px;text-align:center}
.ans:active{transform:scale(.98)}
.ans.good{border-color:#2e9e4f;color:#1d7a37;background:rgba(210,255,220,.9);box-shadow:0 0 10px rgba(60,200,110,.5)}
.ans.bad{border-color:#d0503a;color:#a83a28;background:rgba(255,220,214,.9);box-shadow:0 0 10px rgba(255,107,74,.5)}
.ans.off{opacity:.4;pointer-events:none}
.cloud .btn{margin-top:10px}
@keyframes cloudin{from{opacity:0;transform:translateX(46px) scale(.92)}}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
/* Дуэльная пластина боя */
.duel{display:flex;align-items:center;gap:8px;padding:12px 12px 10px;background:linear-gradient(180deg,rgba(20,28,23,.92),rgba(10,14,11,.96));border:1px solid #26342a;border-radius:20px;box-shadow:0 6px 18px rgba(0,0,0,.45)}
.dside{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;min-width:0}
.dface{position:relative;width:54px;height:54px;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;overflow:hidden;background:#0d130f;text-shadow:0 0 6px currentColor;box-shadow:0 0 10px currentColor}
.dhp{width:100%;height:6px;border-radius:4px;background:#0a0f0b;border:1px solid #223028;overflow:hidden}
.dhpfill{display:block;height:100%;border-radius:4px;transition:width .35s}
.dname{font-size:10px;font-weight:700;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dnum{font-size:9px;color:#8fa39a}
.dvs{font-size:15px;font-weight:700;color:#ffd76a;text-shadow:0 0 8px rgba(255,215,106,.55)}
.denergy{display:flex;gap:3px;justify-content:center;flex-wrap:wrap}
.pip{width:6px;height:6px;border-radius:50%;background:#233028}
.pip.on{background:#b678ff;box-shadow:0 0 5px #b678ff}
.flog{min-height:34px;font-size:12px;font-style:italic;color:#cfe3d2;line-height:1.45;text-align:center;margin:8px 4px}
.acts{display:flex;flex-direction:column;gap:8px;padding:0 6px}
.btn.rune{background:linear-gradient(135deg,#b678ff,#8a4fd6);color:#fff}
.btn.shield{background:linear-gradient(135deg,#7ec8ff,#4a9fd6);color:#06202f}
.btn{width:100%;padding:12px;border-radius:12px;background:linear-gradient(135deg,#2ea6ff,#1f7fd6);color:#fff;font-size:15px;font-weight:600}
.btn.gold{background:linear-gradient(135deg,#ffd76a,#e0a53f);color:#231a05}.btn.ok{background:#17301d;color:#7ee787;border:1px solid rgba(126,231,135,.33)}
.btn.ghost{background:transparent;border:1px solid #2a3a2e;color:#9ab0a2;margin-top:8px}.btn:disabled{opacity:.55}
.toast{position:fixed;top:60px;left:50%;transform:translateX(-50%);z-index:30;background:rgba(0,0,0,.85);border:1px solid rgba(255,215,106,.4);color:#ffd76a;padding:8px 14px;border-radius:12px;font-size:13px;animation:fade .3s}
.days{display:flex;gap:6px;justify-content:center;margin:10px 0}
.day{flex:1;padding:8px 2px;border-radius:10px;background:#0d130f;border:1px solid #223028;font-size:10px;color:#8fa39a;display:flex;flex-direction:column;gap:4px;align-items:center}
.day b{font-size:12px;color:#e8f0e8}
.day.on{border-color:#ffd76a;box-shadow:0 0 8px rgba(255,215,106,.35)}
.day.on b{color:#ffd76a}
.day.done{opacity:.5}
.mface{position:relative;overflow:hidden}
@keyframes breathe{0%,100%{opacity:.3;transform:scale(.9)}50%{opacity:.7;transform:scale(1.1)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes fade{from{opacity:0}}

.mid3d-scene{background:#8da894;overflow:hidden;position:relative;isolation:isolate;touch-action:none}
.mid3d-scene canvas{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;user-select:none;-webkit-user-select:none}
.mid3d-ui{position:absolute;z-index:8;user-select:none;-webkit-user-select:none}
.mid3d-top{top:10px;left:10px;right:10px;display:flex;justify-content:space-between;pointer-events:none}
.mid3d-pill{padding:7px 10px;border:1px solid rgba(255,215,106,.28);border-radius:11px;background:rgba(5,12,8,.72);backdrop-filter:blur(5px);box-shadow:0 4px 12px rgba(0,0,0,.25)}
.mid3d-pill b{display:block;color:#ffd76a;font-size:12px;line-height:1.1;letter-spacing:.8px}
.mid3d-pill span{display:block;color:#c9d9cd;font-size:9px;line-height:1.2;margin-top:2px}
.mid3d-joy{left:14px;bottom:18px;width:132px;height:132px;border-radius:50%;background:rgba(7,14,9,.46);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 0 25px rgba(0,0,0,.22);touch-action:none}
.mid3d-joy:before,.mid3d-joy:after{content:"";position:absolute;left:50%;top:50%;background:rgba(255,255,255,.08);transform:translate(-50%,-50%);pointer-events:none}
.mid3d-joy:before{width:82px;height:1px}.mid3d-joy:after{height:82px;width:1px}
.mid3d-knob{position:absolute;left:41px;top:41px;width:50px;height:50px;border-radius:50%;background:rgba(219,231,221,.28);border:1px solid rgba(255,255,255,.42);box-shadow:0 5px 15px rgba(0,0,0,.35);touch-action:none}
.mid3d-action{right:16px;bottom:32px;width:64px;height:64px;border-radius:50%;background:rgba(255,215,106,.92);color:#241b06;font-size:22px;font-weight:900;box-shadow:0 5px 16px rgba(0,0,0,.35);touch-action:none}
.mid3d-hint{left:50%;bottom:9px;transform:translateX(-50%);padding:6px 10px;border-radius:9px;background:rgba(5,10,7,.68);border:1px solid rgba(126,231,135,.18);color:#d0dfd3;font-size:10px;line-height:1.2;white-space:nowrap;pointer-events:none}
.mid3d-interact{left:50%;bottom:112px;transform:translateX(-50%);width:210px;text-align:center;padding:10px;border-radius:14px;background:rgba(5,11,7,.91);border:1px solid rgba(255,215,106,.55);box-shadow:0 8px 22px rgba(0,0,0,.35)}
.mid3d-interact b{display:block;color:#ffd76a;font-size:13px;line-height:1.2}
.mid3d-interact span{display:block;color:#aebfb2;font-size:10px;line-height:1.2;margin:3px 0 7px}
.mid3d-interact button{width:100%;padding:8px;border-radius:9px;background:#ffd76a;color:#241b06;font-weight:800;font-size:12px}
`;

/* ===== Midgard 3D: реальная сцена, герой, дорога, деревня, кузница и Мимир ===== */

/* ===== Midgard 3D: большая северная деревня, лес, река, кузница, Мимир и норны ===== */

const midMat = (c: number, roughness = 0.9, metalness = 0) =>
  new THREE.MeshStandardMaterial({ color: c, roughness, metalness });

const midBox = (w: number, h: number, d: number, c: number, roughness = 0.9) =>
  new THREE.Mesh(new THREE.BoxGeometry(w, h, d), midMat(c, roughness));

const midCyl = (r: number, h: number, c: number, segments = 12, roughness = 0.9) =>
  new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, segments), midMat(c, roughness));

const midHash = (x: number, z: number) => {
  const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return n - Math.floor(n);
};

// Subtle deterministic deformation: keeps silhouettes organic without adding heavy assets.
const midWarpGeometry = (geo: THREE.BufferGeometry, amount = 0.06, seed = 1) => {
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
    const organicBlobGeometry = (geo: THREE.BufferGeometry, amount = 0.10, seed = 1) => {
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


const midHeight = (x: number, z: number) => {
  const hillA = Math.sin(x * 0.11 + 0.7) * 0.65;
  const hillB = Math.cos(z * 0.09 - 0.4) * 0.48;
  const hillC = Math.sin((x + z) * 0.055) * 0.35;
  const villageFlatten = Math.exp(-(x * x + (z + 3) * (z + 3)) / 900);
  return (hillA + hillB + hillC) * (1 - villageFlatten * 0.72);
};

function markMeshes(g: THREE.Object3D) {
  g.traverse((o: any) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return g;
}

function midRock(x: number, z: number, s = 1) {
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

function addGrassTuft(scene: THREE.Scene, x: number, z: number, s = 1) {
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

function addRibbonRoad(scene: THREE.Scene, points: Array<[number, number]>, width: number, color: number) {
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

  // Неровные края дороги — несколько тёмных пятен дают грунту глубину без текстур.
  for (let i = 0; i < points.length - 1; i += 2) {
    const [x, z] = points[i];
    const s = 0.5 + midHash(x, z) * 0.7;
    const mud = new THREE.Mesh(
      new THREE.CircleGeometry(s, 7),
      midMat(0x554433, 1)
    );
    mud.rotation.x = -Math.PI / 2;
    mud.position.set(x + (midHash(z, x) - 0.5) * width, midHeight(x, z) + 0.055, z);
    mud.scale.set(1.8, 0.55, 1);
    scene.add(mud);
  }
}

function gableRoof(width: number, depth: number, color: number) {
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

function placeHouse(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number, label: string, id: string, scale = 1) {
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

function addFence(scene: THREE.Scene, x1: number, z1: number, x2: number, z2: number) {
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

function addBarrel(scene: THREE.Scene, x: number, z: number, s = 1) {
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

function addCrate(scene: THREE.Scene, x: number, z: number, s = 1) {
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

function addFire(scene: THREE.Scene, fires: Array<{ light: THREE.PointLight; phase: number }>, x: number, z: number, scale = 1) {
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

function addForge(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
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

function addMimirWell(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
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

function addNornShrine(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
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

function addDock(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number) {
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

function addNPC(scene: THREE.Scene, objects: THREE.Object3D[], x: number, z: number, id: string, label: string, color: number, phase: number) {
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

function midHero3d(h: HeroDef) {
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
    return thigh;
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

  g.userData.anim = { armL, armR, legL, legR, weapon, phase: h.id === "elf" ? 1.2 : h.id === "dwarf" ? 2.4 : 0 };
  return markMeshes(g);
}

function Midgard3D({ h, skin, weapon, on, eventDone }: { h: HeroDef; skin: HeroSkin; weapon: HeroWeapon; on: (id: string) => void; eventDone: boolean }) {
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
  const homeActionRef = useRef<((inside:boolean)=>void)|null>(null);
  const [villageGateOpen, setVillageGateOpen] = useState(false);
  const villageGateOpenRef = useRef(false);
  const gateActionRef = useRef<(()=>void)|null>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa4b6ad);
    const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 280);
    camera.position.set(0, 8.5, 17);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.03;
    el.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xe8f2e8, 0x65715f, 1.18);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffdfb8, 2.32);
    sun.position.set(-42, 58, 34);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1536, 1536);
    sun.shadow.camera.left = -95;
    sun.shadow.camera.right = 95;
    sun.shadow.camera.top = 95;
    sun.shadow.camera.bottom = -95;
    sun.shadow.bias = -0.0005;
    scene.add(sun);
    const horizonLight = new THREE.DirectionalLight(0xc1d4d6, 0.72);
    horizonLight.position.set(55, 18, -60);
    scene.add(horizonLight);

    const groundY = (x: number, z: number) => {
      const broad = Math.sin(x * 0.075) * 0.7 + Math.cos(z * 0.062) * 0.55 + Math.sin((x - z) * 0.045) * 0.35;
      const village = Math.exp(-((x * x) / 850 + ((z + 2) * (z + 2)) / 1050));
      const road = Math.exp(-((x * x) / 150 + ((z - 12) * (z - 12)) / 2200));
      return broad * (1 - village * 0.88) - road * 0.18;
    };

    // Мягкие "солнечные окна" между кронами: лёгкая атмосфера без тяжёлого volumetric rendering.
    const lightPoolCanvas = document.createElement("canvas");
    lightPoolCanvas.width = lightPoolCanvas.height = 128;
    const lctx = lightPoolCanvas.getContext("2d")!;
    const grad = lctx.createRadialGradient(64, 64, 4, 64, 64, 64);
    grad.addColorStop(0, "rgba(255,238,194,0.30)");
    grad.addColorStop(0.34, "rgba(255,231,178,0.16)");
    grad.addColorStop(0.72, "rgba(255,225,170,0.055)");
    grad.addColorStop(1, "rgba(255,225,170,0)");
    lctx.fillStyle = grad;
    lctx.fillRect(0, 0, 128, 128);
    const lightPoolTex = new THREE.CanvasTexture(lightPoolCanvas);
    lightPoolTex.colorSpace = THREE.SRGBColorSpace;
    const lightPoolMat = new THREE.MeshBasicMaterial({
      map: lightPoolTex, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, opacity: 0.58
    });
    const lightPools: THREE.Mesh[] = [];
    const lightPoolData = [
      [-22, -4, 7.5, 4.8], [-9, 18, 5.6, 2.2], [9, -10, 6.8, 5.4],
      [24, 5, 5.0, 1.7], [-31, 20, 5.2, 0.8], [18, 27, 7.0, 3.5]
    ];
    lightPoolData.forEach(([x, z, size, rot]) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size * 0.68), lightPoolMat.clone());
      m.rotation.x = -Math.PI / 2;
      m.rotation.z = rot;
      m.position.set(x, groundY(x,z) + 0.018, z);
      m.renderOrder = 2;
      scene.add(m);
      lightPools.push(m);
    });

    const canvasTex = (type: "ground" | "wood" | "roof" | "road" | "bark" | "foliage") => {
      const c = document.createElement("canvas");
      c.width = c.height = 512;
      const ctx = c.getContext("2d")!;
      const rand = (n:number) => Math.abs(Math.sin(n * 12.9898) * 43758.5453) % 1;
      if (type === "ground") {
        ctx.fillStyle = "#4c6042";
        ctx.fillRect(0,0,512,512);
        for(let i=0;i<1800;i++){
          const x=rand(i*1.17)*512,y=rand(i*2.31)*512;
          const r=10+rand(i*3.71)*28;
          const grass=rand(i*4.13);
          ctx.fillStyle=grass>.72?`rgba(96,108,63,${.08+rand(i)*.12})`:`rgba(30,36,25,${.05+rand(i)*.12})`;
          ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
        }
        for(let i=0;i<650;i++){
          const x=rand(i*7.1)*512,y=rand(i*8.2)*512;
          ctx.strokeStyle=`rgba(142,154,91,${.18+rand(i*2)*.15})`;ctx.lineWidth=1+rand(i*4)*1.5;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(rand(i*5)-.5)*5,y-3-rand(i*6)*5);ctx.stroke();
        }
      } else if (type === "wood") {
        ctx.fillStyle="#5a3d29";ctx.fillRect(0,0,512,512);
        for(let y=0;y<512;y+=22){
          ctx.fillStyle=`rgba(25,15,9,${.18+rand(y)*.13})`;ctx.fillRect(0,y,512,3);
          ctx.strokeStyle=`rgba(154,111,69,${.08+rand(y*2)*.08})`;ctx.lineWidth=2;
          ctx.beginPath();ctx.moveTo(0,y+7);ctx.bezierCurveTo(150,y+2,340,y+13,512,y+5);ctx.stroke();
        }
        for(let i=0;i<65;i++){const x=rand(i*2.1)*512;ctx.fillStyle=`rgba(20,12,8,${.12+rand(i*3)*.16})`;ctx.fillRect(x,0,2+rand(i*4)*3,512);}
      } else if (type === "roof") {
        ctx.fillStyle="#252522";ctx.fillRect(0,0,512,512);
        for(let y=-30;y<550;y+=25){
          ctx.fillStyle=`rgba(105,94,77,${.12+rand(y)*.08})`;ctx.fillRect(0,y,512,2);
          ctx.strokeStyle="rgba(12,12,11,.48)";ctx.lineWidth=3;
          for(let x=-40;x<560;x+=38){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-18,y+28);ctx.stroke();}
        }
        for(let i=0;i<180;i++){ctx.fillStyle=`rgba(170,154,123,${.03+rand(i)*.07})`;ctx.fillRect(rand(i*2)*512,rand(i*3)*512,2+rand(i*4)*7,2);}
      } else if (type === "bark") {
        // Matte bark: vertical fibers and broken patches, intentionally no glossy bands.
        ctx.fillStyle="#7b5a3f";ctx.fillRect(0,0,512,512);
        for(let i=0;i<76;i++){
          const x=rand(i*2.1)*512;
          const w=2+rand(i*3.7)*7;
          ctx.fillStyle=`rgba(${24+rand(i)*24},${16+rand(i*4)*18},${10+rand(i*5)*14},${.18+rand(i*6)*.22})`;
          ctx.fillRect(x,0,w,512);
        }
        for(let i=0;i<80;i++){
          const x=rand(i*7.1)*512,y=rand(i*8.2)*512;
          ctx.strokeStyle=`rgba(126,91,60,${.07+rand(i*2)*.09})`;ctx.lineWidth=1+rand(i*3)*2;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(rand(i*4)-.5)*12,y+18+rand(i*5)*45);ctx.stroke();
        }
      } else if (type === "foliage") {
        // Soft, matte needle/leaf color breakup. No painted highlights.
        ctx.fillStyle="#68865a";ctx.fillRect(0,0,512,512);
        for(let i=0;i<1900;i++){
          const x=rand(i*1.17)*512,y=rand(i*2.31)*512;
          const light=rand(i*3.7);
          const r=light>.72?112:light>.36?92:74;
          const g=light>.72?145:light>.36?121:98;
          const b=light>.72?76:light>.36?60:48;
          ctx.fillStyle=`rgba(${r},${g},${b},${.16+rand(i*4)*.28})`;
          ctx.beginPath();ctx.arc(x,y,1.5+rand(i*5)*4.5,0,Math.PI*2);ctx.fill();
        }
        for(let i=0;i<260;i++){
          const x=rand(i*9.1)*512,y=rand(i*10.2)*512;
          ctx.strokeStyle=`rgba(18,31,22,${.08+rand(i*3)*.12})`;ctx.lineWidth=1;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(rand(i*2)-.5)*10,y+(rand(i*4)-.5)*10);ctx.stroke();
        }
      } else {
        ctx.fillStyle="#514333";ctx.fillRect(0,0,512,512);
        for(let i=0;i<1300;i++){
          const x=rand(i*1.3)*512,y=rand(i*2.7)*512;
          ctx.fillStyle=`rgba(${45+rand(i*3)*38},${35+rand(i*4)*28},${23+rand(i*5)*20},${.08+rand(i*6)*.18})`;
          ctx.fillRect(x,y,2+rand(i*7)*7,1+rand(i*8)*4);
        }
      }
      const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;
      t.anisotropy=4;
      return t;
    };

    // Lightweight procedural surface maps: roughness + micro-bump.
    // Generated in-memory; no external texture files are required.
    const makeSurfaceMaps = () => {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const ctx = c.getContext("2d")!;
      const img = ctx.createImageData(128, 128);
      for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 128; x++) {
          const i = (y * 128 + x) * 4;
          const n =
            Math.sin(x * 0.37) * 0.30 +
            Math.sin(y * 0.61) * 0.24 +
            Math.sin((x + y) * 0.17) * 0.20 +
            Math.sin((x - y) * 0.09) * 0.14;
          const v = Math.max(214, Math.min(250, Math.round(232 + n * 18)));
          img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v; img.data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      const height = new THREE.CanvasTexture(c);
      height.wrapS = height.wrapT = THREE.RepeatWrapping;
      height.repeat.set(5, 5);
      const rough = new THREE.CanvasTexture(c);
      rough.wrapS = rough.wrapT = THREE.RepeatWrapping;
      rough.repeat.set(4, 4);
      return { height, rough };
    };
    const surfaceMaps = makeSurfaceMaps();

    const groundTexture = canvasTex("ground");
    groundTexture.repeat.set(5, 6);
    const barkTexture = canvasTex("bark");
    barkTexture.wrapS = barkTexture.wrapT = THREE.RepeatWrapping;
    barkTexture.repeat.set(1.2, 1.8);
    const foliageTexture = canvasTex("foliage");
    foliageTexture.wrapS = foliageTexture.wrapT = THREE.RepeatWrapping;
    foliageTexture.repeat.set(1.35, 1.35);
    const groundGeo = new THREE.PlaneGeometry(190, 190, 62, 62);
    const gp = groundGeo.attributes.position as THREE.BufferAttribute;
    for (let i=0;i<gp.count;i++) {
      const x=gp.getX(i), z=-gp.getY(i);
      gp.setZ(i, groundY(x,z));
    }
    groundGeo.rotateX(-Math.PI/2);
    groundGeo.computeVertexNormals();
    const terrainMat = new THREE.MeshStandardMaterial({
      map: groundTexture,
      roughness: 0.985,
      metalness: 0.0,
      roughnessMap: surfaceMaps.rough,
      bumpMap: surfaceMaps.height,
      bumpScale: 0.018
    });
    const terrain = new THREE.Mesh(groundGeo, terrainMat);
    terrain.receiveShadow = true;
    scene.add(terrain);

    // ===== NATURAL SPRUCE FOREST + MASSIVE OAK — Y-UP GLB =====
    // Restore the real GLB spruce layer: 30 trees spread around Midgard.
    // The spruce is intentionally darkened; no procedural firs are re-enabled.
    const gltfLoader = new GLTFLoader();
    let glbTreesAlive = true;
    const glbTreeInstances: THREE.Object3D[] = [];

    const treeAsset = 'Midgard_Natural_Spruce_V2_YUP.glb';
    const treeV3Asset = 'Midgard_Natural_Spruce_V3_YUP.glb';
    const oakAsset = 'Midgard_Massive_Oak_V1_YUP.glb';
    const mountainAsset = 'Midgard_Snow_Mountain_Range_V1_YUP.glb';
    const heroHouseAsset = 'Midgard_Hero_House_V1_YUP.glb';
    const vikingHouseAsset = 'Midgard_Viking_House_V1_YUP.glb';
    const forgeAsset = 'Midgard_Forge_V1_YUP.glb';
    const barnAsset = 'Midgard_Barn_V1_YUP.glb';
    const shedAsset = 'Midgard_Shed_V1_YUP.glb';
    const elderHouseAsset = 'Midgard_Elder_House_V1_YUP.glb';
    const fisherHouseAsset = 'Midgard_Fisher_House_V1_YUP.glb';
    const hunterHouseAsset = 'Midgard_Hunter_House_V1_YUP.glb';
    const herbalistHouseAsset = 'Midgard_Herbalist_House_V1_YUP.glb';
    const craftsmanHouseAsset = 'Midgard_Craftsman_House_V1_YUP.glb';
    const oldFarmAsset = 'Midgard_Old_Farm_V1_YUP.glb';
    const vikingGateAsset = 'Midgard_Viking_Gate_Tower_V1_YUP.glb';
    const vikingPalisadeAsset = 'Midgard_Viking_Palisade_Segment_V1_YUP.glb';
    const mimirWellAsset = 'Midgard_Mimir_Well_V1_YUP.glb';
    const hoddmimirAsset = 'Midgard_Hoddmimir_Holt_V2_YUP.glb';

    // Deterministic positions keep the village centre and major landmarks readable.
    const sprucePositions: Array<[number, number]> = [
      [-72,-62],[-51,-68],[-27,-72],[31,-67],[49,-63],[72,-55],
      [-76,-34],[-56,-38],[-36,-43],[34,-42],[57,-36],[78,-27],
      [-80,-4],[-61,-10],[-43,-8],[46,-9],[65,-3],[81,5],
      [-74,25],[-53,30],[-34,34],[39,29],[59,25],[71,39],
      [-68,57],[-45,61],[-24,66],[30,61],[52,57],[71,66]
    ];

    const darkenSpruceMaterial = (m:any) => {
      if (!m) return m;
      const mm = m.clone ? m.clone() : m;
      // 10% darker than the current spruce appearance.
      if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.765);
      if ('roughness' in mm) mm.roughness = 0.96;
      if ('metalness' in mm) mm.metalness = 0.0;
      mm.needsUpdate = true;
      return mm;
    };

    const prepareSpruceSource = (source: THREE.Object3D) => {
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.frustumCulled = false;
        o.castShadow = true;
        o.receiveShadow = true;
        if (Array.isArray(o.material)) o.material = o.material.map(darkenSpruceMaterial);
        else o.material = darkenSpruceMaterial(o.material);
      });

      sprucePositions.forEach(([x,z], i) => {
        const tree = source.clone(true);
        markMeshes(tree);
        tree.rotation.set(0, midHash(i, 2101) * Math.PI * 2, 0);
        tree.scale.setScalar(0.88 + midHash(i, 2102) * 0.22);
        tree.position.set(0, 0, 0);
        tree.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(tree);
        tree.position.set(x, groundY(x,z) - box.min.y, z);
        tree.updateMatrixWorld(true);
        scene.add(tree);
        glbTreeInstances.push(tree);
      });

      console.log('[NATURAL SPRUCE] 30 trees loaded', `${BASE}img/models/${treeAsset}`);
    };

    const loadGlbWithFolderFallback = (
      asset:string,
      onLoad:(gltf:any)=>void,
      label:string
    ) => {
      const paths = [`${BASE}img/models/${asset}`, `${BASE}img/model/${asset}`];
      const tryPath = (index:number) => {
        gltfLoader.load(paths[index], onLoad, undefined, (error:any) => {
          if (index + 1 < paths.length) tryPath(index + 1);
          else console.error(`[${label}] FAILED`, paths, error);
        });
      };
      tryPath(0);
    };

    loadGlbWithFolderFallback(treeAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      prepareSpruceSource(gltf.scene);
    }, 'NATURAL SPRUCE');

    // Add a small V3 comparison grove without replacing the successful V2 forest.
    // 12 V3 spruces, all with slightly different size and rotation.
    const spruceV3Positions: Array<[number,number]> = [
      [-73,-57],[-54,-62],[-31,-61],[38,-60],[54,-58],[73,-48],
      [-72,42],[-53,49],[-31,55],[32,53],[54,48],[72,55]
    ];

    loadGlbWithFolderFallback(treeV3Asset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const source = gltf.scene.clone(true);
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.frustumCulled = false;
        o.castShadow = true;
        o.receiveShadow = true;
        const darkenV3 = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          // Keep V3 close to the current dark V2 forest for a fair visual comparison.
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.72);
          if ('roughness' in mm) mm.roughness = 0.96;
          if ('metalness' in mm) mm.metalness = 0.0;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(darkenV3);
        else o.material = darkenV3(o.material);
      });

      spruceV3Positions.forEach(([x,z], i) => {
        const tree = source.clone(true);
        markMeshes(tree);
        tree.rotation.set(0, midHash(i, 2301) * Math.PI * 2, 0);
        tree.scale.setScalar(0.72 + midHash(i, 2302) * 0.28);
        tree.position.set(0,0,0);
        tree.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(tree);
        tree.position.set(x, groundY(x,z) - box.min.y, z);
        tree.updateMatrixWorld(true);
        scene.add(tree);
        glbTreeInstances.push(tree);
      });

      console.log('[NATURAL SPRUCE V3] 12 comparison trees loaded', `${BASE}img/models/${treeV3Asset}`);
    }, 'NATURAL SPRUCE V3');

    // Restore the GLB oak as a varied grove: 40 clones, while keeping the village centre readable.
    loadGlbWithFolderFallback(oakAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const oakSource = gltf.scene.clone(true);
      markMeshes(oakSource);

      // Another 20% darker than the previous oak pass.
      // Recompute smooth normals where possible to soften the faceted/segmented trunk look.
      oakSource.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.frustumCulled = false;
        o.castShadow = true;
        o.receiveShadow = true;
        if (o.geometry?.computeVertexNormals) {
          o.geometry = o.geometry.clone();
          o.geometry.computeVertexNormals();
          o.geometry.attributes?.normal && (o.geometry.attributes.normal.needsUpdate = true);
        }
        const darkenOak = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.672); // previous 0.84 × 0.80
          if ('roughness' in mm) mm.roughness = Math.max(mm.roughness ?? 0.9, 0.96);
          if ('metalness' in mm) mm.metalness = 0.0;
          if ('flatShading' in mm) mm.flatShading = false;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(darkenOak);
        else o.material = darkenOak(o.material);
      });

      // 40 deterministic positions. The first oak stays near Mimir; the rest form
      // an irregular outer woodland and deliberately avoid the village centre.
      const oakPositions: Array<[number,number]> = [
        [9,6],[-78,-70],[-58,-73],[-37,-68],[-13,-76],[18,-74],[42,-70],[65,-72],[80,-57],
        [-82,-47],[-64,-49],[-45,-53],[-24,-55],[28,-54],[50,-50],[71,-43],[84,-25],
        [-83,-17],[-67,-23],[-48,-25],[48,-23],[67,-18],[83,-7],
        [-82,13],[-64,17],[-46,14],[47,15],[65,12],[82,20],
        [-78,42],[-59,39],[-39,46],[38,43],[58,39],[66,57],
        [-68,69],[-43,66],[-18,74],[27,70],[55,67]
      ];

      const jointShadowMat = new THREE.MeshBasicMaterial({
        color:0x120f0c, transparent:true, opacity:0.20, depthWrite:false
      });

      oakPositions.forEach(([oakX,oakZ], i) => {
        const oak = oakSource.clone(true);
        markMeshes(oak);
        oak.rotation.set(0, midHash(i, 2211) * Math.PI * 2, 0);

        // Every oak has a different size. The Mimir oak stays moderately large;
        // the rest range from young/small to old/large.
        const oakScale = i === 0 ? 0.82 : 0.52 + midHash(i, 2212) * 0.43;
        oak.scale.setScalar(oakScale);
        oak.position.set(0,0,0);
        oak.updateMatrixWorld(true);
        const oakBox = new THREE.Box3().setFromObject(oak);
        oak.position.set(oakX, groundY(oakX,oakZ) - oakBox.min.y, oakZ);

        // Thin soft collars hide the three visible trunk-section seams without
        // changing the silhouette of the model. They scale together with each oak.
        [1.72, 3.32, 5.02].forEach((yy, j) => {
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(0.565 - j * 0.045, 0.040, 10, 36),
            jointShadowMat.clone()
          );
          ring.rotation.x = Math.PI / 2;
          ring.position.y = yy;
          oak.add(ring);
        });

        oak.updateMatrixWorld(true);
        scene.add(oak);
        glbTreeInstances.push(oak);
      });

      console.log('[MASSIVE OAK] 40 varied, darker, smoothed oaks loaded', `${BASE}img/models/${oakAsset}`);
    }, 'MASSIVE OAK');

    // Horizon ridge sheets removed: they were the visible translucent plates.
    // Real mountains and the distant GLB forest remain unchanged.

    // Old procedural far-firs removed for the GLB tree test.
    // This prevents the old cone-shaped forest from hiding the new models.

    const addMesh = (g: THREE.Object3D, interactive?: string, label?: string) => {
      if (interactive) g.userData = { id: interactive, label: label || interactive };
      g.traverse((o:any)=>{ if(o.isMesh){o.castShadow=true;o.receiveShadow=true;} });
      scene.add(g);
      if(interactive) objects.push(g);
      return g;
    };

    const mat = (color:number, rough=.9, metal=0) => new THREE.MeshStandardMaterial({
      color, roughness: rough, metalness: metal,
      roughnessMap: surfaceMaps.rough,
      bumpMap: surfaceMaps.height,
      bumpScale: metal > 0.35 ? 0.008 : 0.018
    });
    const box=(w:number,h:number,d:number,c:number,rough=.9)=>new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(c,rough));
    const cyl=(r:number,h:number,c:number,segments=10,rough=.9)=>new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,segments),mat(c,rough));
    const log=(length:number,radius:number,c:number)=>{
      const m=cyl(radius,length,c,10,.96); m.rotation.z=Math.PI/2; return m;
    };
    const roofSlope=(w:number,d:number,c:number)=>{
      const g=new THREE.Group(), panelW=w*.62, angle=.61;
      const roofMat=new THREE.MeshStandardMaterial({map:roofTex,color:c,roughness:.96,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.012,side:THREE.DoubleSide});
      // Thick boards rather than paper-thin planes: the roof remains visible from every camera angle.
      const a=new THREE.Mesh(new THREE.BoxGeometry(panelW,.18,d),roofMat);
      const b=a.clone();
      a.rotation.z=angle; b.rotation.z=-angle;
      a.position.x=-w*.205; b.position.x=w*.205;
      g.add(a,b);
      return g;
    };


    const objects: THREE.Object3D[] = [];
    const fires: Array<{light:THREE.PointLight; flame:THREE.Object3D; phase:number}> = [];
    const npcs: THREE.Object3D[] = [];
    const wildlife: Array<{g:THREE.Object3D; x:number; z:number; r:number; speed:number; phase:number; kind:string}> = [];

    // Collision layer: separate from visual meshes so future realistic assets can
    // replace the current models without changing player movement.
    type Collider =
      | { kind:"rect"; x:number; z:number; w:number; d:number; rot:number }
      | { kind:"circle"; x:number; z:number; r:number }
      | { kind:"segment"; x1:number; z1:number; x2:number; z2:number; r:number };
    const colliders: Collider[] = [];
    const HERO_RADIUS = 0.62;
    // 0 = barred shut, 1 = fully open. Used both by the visual gate and collision passage.
    let villageGateProgress = villageGateOpenRef.current ? 1 : 0;
    const addRectCollider=(x:number,z:number,w:number,d:number,rot=0,pad=0.12)=>colliders.push({kind:"rect",x,z,w:w+pad*2,d:d+pad*2,rot});
    const addCircleCollider=(x:number,z:number,r:number,pad=0.12)=>colliders.push({kind:"circle",x,z,r:r+pad});
    const addSegmentCollider=(x1:number,z1:number,x2:number,z2:number,r:number,pad=0.12)=>colliders.push({kind:"segment",x1,z1,x2,z2,r:r+pad});
    const hits=(x:number,z:number,c:Collider)=>{
      if(c.kind==="circle") return Math.hypot(x-c.x,z-c.z)<c.r+HERO_RADIUS;
      if(c.kind==="rect"){
        const co=Math.cos(c.rot),si=Math.sin(c.rot),dx=x-c.x,dz=z-c.z;
        const lx=co*dx-si*dz,lz=si*dx+co*dz;
        const qx=Math.max(-c.w/2,Math.min(c.w/2,lx)),qz=Math.max(-c.d/2,Math.min(c.d/2,lz));
        return Math.hypot(lx-qx,lz-qz)<HERO_RADIUS;
      }
      const vx=c.x2-c.x1,vz=c.z2-c.z1,len2=vx*vx+vz*vz;
      const t=len2>0?Math.max(0,Math.min(1,((x-c.x1)*vx+(z-c.z1)*vz)/len2)):0;
      const px=c.x1+vx*t,pz=c.z1+vz*t;
      return Math.hypot(x-px,z-pz)<c.r+HERO_RADIUS;
    };
    const blocked=(x:number,z:number)=>{
      if(insideHomeRef.current){
        // Interior bounds leave a clear opening toward the door at the front (positive Z).
        return x<heroHomeX-2.72 || x>heroHomeX+2.72 || z<heroHomeZ-2.05 || z>heroHomeZ+2.30;
      }
      // The front gate physically blocks the opening until the leaves have swung far enough.
      if(villageGateProgress < .78 && hits(x,z,{kind:"segment",x1:-3.15,z1:gateFrontZ,x2:3.15,z2:gateFrontZ,r:.20})) return true;
      return colliders.some(c=>hits(x,z,c));
    };
    const moveWithCollision=(q:{x:number;z:number},nx:number,nz:number)=>{
      if(insideHomeRef.current){
        const x=Math.max(heroHomeX-2.55,Math.min(heroHomeX+2.55,nx));
        const z=Math.max(heroHomeZ-1.92,Math.min(heroHomeZ+2.55,nz));
        q.x=x;q.z=z;return;
      }
      const x=Math.max(-88,Math.min(88,nx)),z=Math.max(-89,Math.min(89,nz));
      if(!blocked(x,z)){q.x=x;q.z=z;return;}
      if(!blocked(x,q.z)) q.x=x;
      if(!blocked(q.x,z)) q.z=z;
    };

    // Snow mountain range — real GLB background, replacing the old cone mountains.
    // The model is Y-up and faces +Z, so it sits beyond the northern forest.
    loadGlbWithFolderFallback(mountainAsset, (gltf:any) => {
      const mountainRange = gltf.scene.clone(true);

      mountainRange.traverse((o:any) => {
        if (!o.isMesh) return;
        o.castShadow = false;
        o.receiveShadow = false;
        o.frustumCulled = false;
      });

      // Original GLB is ~115 wide x ~46 high.
      // Stretch mostly in X so the ridge spans the whole Midgard horizon
      // without becoming unrealistically tall.
      mountainRange.scale.set(1.62, 0.90, 1.15);
      mountainRange.position.set(0, -1.2, -104);
      mountainRange.rotation.set(0, 0, 0);

      scene.add(mountainRange);
      console.log('[SNOW MOUNTAINS] loaded', `${BASE}img/models/${mountainAsset}`);
    }, 'SNOW MOUNTAINS');

    // Living river: broad low-poly water ribbon with subtle surface displacement.
    const riverPts:{x:number;z:number}[]=[];
    for(let i=0;i<=32;i++) riverPts.push({z:-94+i*6,x:-57+Math.sin(i*.42)*4.2});
    const riverVerts:number[]=[]; const riverIdx:number[]=[]; const riverHalf=5.4;
    for(let i=0;i<riverPts.length;i++){
      const p=riverPts[i],prev=riverPts[Math.max(0,i-1)],next=riverPts[Math.min(riverPts.length-1,i+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz)),nx=-dz/len,nz=dx/len,edge=groundY(p.x,p.z)+.055;
      for(const side of [-1,1]){const off=riverHalf*side;riverVerts.push(p.x+nx*off,edge+Math.sin(i*1.7+side)*.035,p.z+nz*off);}
      if(i<riverPts.length-1){const k=i*2;riverIdx.push(k,k+1,k+2,k+1,k+3,k+2);}
    }
    const riverGeo=new THREE.BufferGeometry();riverGeo.setAttribute("position",new THREE.Float32BufferAttribute(riverVerts,3));riverGeo.setIndex(riverIdx);riverGeo.computeVertexNormals();
    const riverMat=new THREE.MeshStandardMaterial({color:0x315f69,roughness:.52,metalness:0,transparent:true,opacity:.9});
    const river=new THREE.Mesh(riverGeo,riverMat);
    river.receiveShadow=true;scene.add(river);

    // Shallow-bank shelves: slightly lighter water near the edges makes the river read as deep in the center.
    const bankWaterMat=new THREE.MeshStandardMaterial({color:0x4f7880,roughness:.68,metalness:0,transparent:true,opacity:.58,side:THREE.DoubleSide});
    for(const side of [-1,1]){
      const verts:number[]=[]; const idx:number[]=[]; const shelf=1.18;
      for(let i=0;i<riverPts.length;i++){
        const p=riverPts[i],prev=riverPts[Math.max(0,i-1)],next=riverPts[Math.min(riverPts.length-1,i+1)];
        const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz)),nx=-dz/len,nz=dx/len;
        const inner=riverHalf*side, outer=(riverHalf-shelf)*side;
        verts.push(p.x+nx*inner,groundY(p.x,p.z)+.072,p.z+nz*inner);
        verts.push(p.x+nx*outer,groundY(p.x,p.z)+.078,p.z+nz*outer);
        if(i<riverPts.length-1){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}
      }
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));g.setIndex(idx);g.computeVertexNormals();
      const m=new THREE.Mesh(g,bankWaterMat);m.receiveShadow=true;scene.add(m);
    }

    // Soft current streaks: low-cost elongated planes that drift along the river direction.
    const currentStreaks:Array<{mesh:THREE.Mesh;phase:number;speed:number}>=[];
    const currentMat=new THREE.MeshBasicMaterial({color:0xc0d9d8,transparent:true,opacity:.085,depthWrite:false,side:THREE.DoubleSide});
    for(let i=0;i<22;i++){
      const pi=Math.min(riverPts.length-1,2+Math.floor(midHash(i,1510)*(riverPts.length-4))),p=riverPts[pi];
      const prev=riverPts[Math.max(0,pi-1)],next=riverPts[Math.min(riverPts.length-1,pi+1)];
      const ang=Math.atan2(next.x-prev.x,next.z-prev.z);
      const q=new THREE.Mesh(new THREE.PlaneGeometry(1.5+midHash(i,1511)*2.8,.08+midHash(i,1512)*.07),currentMat.clone());
      q.rotation.x=-Math.PI/2;q.rotation.z=ang;q.position.set(p.x+(midHash(i,1513)-.5)*6.4,groundY(p.x,p.z)+.095,p.z+(midHash(i,1514)-.5)*5.4);
      scene.add(q);currentStreaks.push({mesh:q,phase:midHash(i,1515)*Math.PI*2,speed:.55+midHash(i,1516)*.7});
    }

    const ripples:Array<{mesh:THREE.Mesh;phase:number}> = [];
    for(let i=0;i<52;i++){
      const pi=Math.min(riverPts.length-1,Math.floor(i*.62)),p=riverPts[pi],prev=riverPts[Math.max(0,pi-1)],next=riverPts[Math.min(riverPts.length-1,pi+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz)),side=i%2===0?-1:1,rr=.34+midHash(i,15)*.72,off=riverHalf+side*(.25+midHash(i,16)*1.4);
      const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(rr,1),mat(0x5e625a,1));
      stone.position.set(p.x+(-dz/len)*off,groundY(p.x,p.z)+.18,p.z+(dx/len)*off);stone.scale.y=.5+midHash(i,17)*.35;
      addMesh(stone);addCircleCollider(stone.position.x,stone.position.z,rr*.75,.03);
    }

    // A few partially submerged stones break the perfect ribbon silhouette and add scale.
    for(let i=0;i<18;i++){
      const pi=Math.min(riverPts.length-1,1+Math.floor(midHash(i,1520)*(riverPts.length-2))),p=riverPts[pi],prev=riverPts[Math.max(0,pi-1)],next=riverPts[Math.min(riverPts.length-1,pi+1)];
      const dx=next.x-prev.x,dz=next.z-prev.z,len=Math.max(.001,Math.hypot(dx,dz));
      const across=(midHash(i,1521)-.5)*6.4;
      const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(.16+midHash(i,1522)*.3,1),mat(0x68736d,1));
      stone.position.set(p.x+(-dz/len)*across,groundY(p.x,p.z)+.045,p.z+(dx/len)*across);
      stone.scale.y=.35+midHash(i,1523)*.45;stone.rotation.set(midHash(i,1524)*2,midHash(i,1525)*2,midHash(i,1526)*2);scene.add(stone);
    }

    // Roads are deliberately dark and wide, with two wheel ruts and stone edges.
    const road = (points:Array<[number,number]>, width:number) => {
      const pts=points.map(([x,z])=>new THREE.Vector3(x,groundY(x,z)+.035,z));
      const verts:number[]=[]; const idx:number[]=[];
      for(let i=0;i<pts.length;i++){
        const a=pts[Math.max(0,i-1)],b=pts[Math.min(pts.length-1,i+1)];
        const dx=b.x-a.x,dz=b.z-a.z,l=Math.max(.001,Math.hypot(dx,dz));
        const px=-dz/l,pz=dx/l;
        verts.push(pts[i].x+px*width/2,pts[i].y,pts[i].z+pz*width/2,pts[i].x-px*width/2,pts[i].y+.01,pts[i].z-pz*width/2);
        if(i<pts.length-1){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}
      }
      const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.Float32BufferAttribute(verts,3));geo.setIndex(idx);geo.computeVertexNormals();
      const mesh=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({map:canvasTex("road"),roughness:1}));mesh.receiveShadow=true;scene.add(mesh);
      // wheel ruts
      [-width*.22,width*.22].forEach(off=>{
        const rutPts=pts.map((p,i)=>{const a=pts[Math.max(0,i-1)],b=pts[Math.min(pts.length-1,i+1)];const dx=b.x-a.x,dz=b.z-a.z,l=Math.max(.001,Math.hypot(dx,dz));return new THREE.Vector3(p.x+(-dz/l)*off,p.y+.045,p.z+(dx/l)*off);});
        const rg=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rutPts),Math.max(12,pts.length*4),.055,5,false);
        const rm=new THREE.Mesh(rg,mat(0x33291f,1));rm.scale.y=.12;scene.add(rm);
      });
    };
    road([[0,72],[0,58],[1,44],[0,31],[1,19],[2,8],[0,-3],[-1,-16],[-2,-29],[-5,-44]],7.4);
    road([[-2,7],[8,5],[19,2],[31,-1],[42,-5]],5.7);
    road([[0,8],[-9,13],[-19,20],[-27,31],[-31,44]],4.6);
    road([[1,-3],[10,-10],[20,-18],[29,-28]],4.5);
    road([[-1,2],[-12,-4],[-22,-10],[-32,-12],[-39,-8]],4.4);
    road([[4,14],[-3,22],[-7,31],[-8,42]],3.8);
    road([[0,31],[-5,42],[-18,54],[-30,61],[-43,62]],4.0);
    road([[4,14],[10,28],[18,41],[27,57]],3.8);
    road([[5,31],[15,45],[27,57],[39,70]],3.7);
    road([[-20,20],[-36,28],[-51,34],[-64,36]],3.6);
    road([[-39,-8],[-47,-12],[-53,-15]],3.4);

    const woodTex=canvasTex("wood");woodTex.repeat.set(2,1);
    const roofTex=canvasTex("roof");roofTex.repeat.set(2,2);

    // Detailed Nordic longhouse.
    const house=(x:number,z:number,w:number,d:number,rot:number,label:string,id:string,wallColor:number,roofColor:number)=>{
      const g=new THREE.Group(); g.rotation.y=rot; g.position.set(x,groundY(x,z),z); g.userData={id,label};
      const logMat=new THREE.MeshStandardMaterial({map:woodTex,color:wallColor,roughness:.94,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.014});
      const foundation=box(w+.7,.55,d+.7,0x575a53,1); foundation.position.y=.28; g.add(foundation);

      // Seven courses of rounded logs, with alternating corner overlap.
      for(let row=0;row<7;row++){
        const yy=.62+row*.47;
        const front=log(w-(row%2)*.20,.29,wallColor); front.material=logMat;
        front.position.set(0,yy,d*.5-.03); g.add(front);
        const back=front.clone(); back.position.z=-d*.5+.03; g.add(back);
        const left=log(d+.06,.29,wallColor); left.material=logMat; left.rotation.y=Math.PI/2;
        left.position.set(-w*.5+.03,yy,0); g.add(left);
        const right=left.clone(); right.position.x=w*.5-.03; g.add(right);
      }

      for(const px of [-w*.5,w*.5]) for(const pz of [-d*.5,d*.5]){
        const post=cyl(.34,3.75,0x352419,8,1); post.position.set(px,2.05,pz); g.add(post);
      }

      const door=box(1.18,2.05,.18,0x241812,1); door.position.set(0,1.37,d*.5+.31); g.add(door);
      for(const px of [-.67,.67]){
        const frame=box(.15,2.28,.24,0x3a291d,1); frame.position.set(px,1.42,d*.5+.34); g.add(frame);
      }
      const lintel=log(1.65,.11,0x38261a); lintel.position.set(0,2.53,d*.5+.34); g.add(lintel);
      const handle=cyl(.055,.12,0xc69a52,8,.55); handle.rotation.z=Math.PI/2; handle.position.set(.33,1.38,d*.5+.43); g.add(handle);

      const windowMat=new THREE.MeshStandardMaterial({color:0xe4ae58,emissive:0x9a5d1e,emissiveIntensity:1.5,roughness:.45});
      for(const px of [-w*.27,w*.27]){
        const frame=box(1.28,1.02,.13,0x302219,1); frame.position.set(px,2.02,d*.5+.29); g.add(frame);
        const win=box(.94,.70,.055,0xe8b75f,.45); win.material=windowMat; win.position.set(px,2.02,d*.5+.36); g.add(win);
        const v=box(.07,.78,.09,0x302219,1); v.position.set(px,2.02,d*.5+.40); g.add(v);
        const hh=box(1.05,.07,.09,0x302219,1); hh.position.set(px,2.02,d*.5+.40); g.add(hh);
      }

      const roof=roofSlope(w+1.55,d+1.35,roofColor); roof.position.y=4.18; g.add(roof);
      // Heavy eaves and a real ridge make the silhouette unmistakably Nordic.
      for(const ex of [-1,1]){
        const eave=log(d+1.48,.12,0x30231b);
        eave.position.set(ex*(w*.46),3.78,0);
        eave.rotation.y=Math.PI/2;
        g.add(eave);
      }
      const ridge=log(d+1.45,.18,0x2a201a); ridge.rotation.y=Math.PI/2; ridge.position.y=5.28; g.add(ridge);

      const porch=box(w*.34,.16,1.05,0x62422b,1); porch.position.set(0,.64,d*.5+.66); g.add(porch);
      for(const px of [-w*.16,w*.16]){
        const p=log(.85,.08,0x49301f); p.rotation.y=Math.PI/2; p.position.set(px,.83,d*.5+.95); g.add(p);
      }

      const chimney=cyl(.34,2.0,0x57534e,8,1); chimney.position.set(w*.25,5.05,-d*.10); g.add(chimney);
      const cap=box(.72,.14,.72,0x302d29,1); cap.position.set(w*.25,6.08,-d*.10); g.add(cap);

      addMesh(g,id,label); objects.push(g); addRectCollider(x,z,w+.85,d+.85,rot,.05);
      return g;
    };

    // Dense village core: buildings frame the roads and central square.
    // Viking house GLB: use one loaded source and clone it for ordinary houses.
    // Named core homes (elder, fisherman, hunter, herbalist, craftsman) stay untouched.
    loadGlbWithFolderFallback(vikingHouseAsset, (gltf:any) => {
      if (!glbTreesAlive) return;

      const source = gltf.scene.clone(true);
      markMeshes(source);
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });

      const placements = [
        {x:-15,z:-18,rot:.18, sx:1.02,sy:1.02,sz:.78, id:"house",    label:"Дом дружинника"},
        {x:-31,z:  8,rot:.10, sx:.86,sy:.90,sz:.58, id:"fisher2",  label:"Дом рыбака"},
        {x:-27,z: 20,rot:-.25,sx:.82,sy:.86,sz:.56, id:"carpenter",label:"Дом плотника"},
        {x: 31,z: 18,rot:.32, sx:.88,sy:.92,sz:.58, id:"hunter2", label:"Дом охотницы"},
        {x: 20,z: 24,rot:-.12,sx:.84,sy:.88,sz:.57, id:"family",  label:"Дом семьи"}
      ];

      placements.forEach((p, i) => {
        const h = source.clone(true);
        h.scale.set(p.sx,p.sy,p.sz);
        h.rotation.set(0,p.rot,0);
        h.position.set(p.x,groundY(p.x,p.z),p.z);
        h.userData={id:p.id,label:p.label};
        addMesh(h,p.id,p.label);
        objects.push(h);
      });

      console.log('[VIKING HOUSE] 5 cloned houses loaded', `${BASE}img/models/${vikingHouseAsset}`);
    }, 'VIKING HOUSE');

    addRectCollider(-15,-18,9.0,7.0,.18,.05);

    // Five named village homes are unique GLB assets.
    // Their original map positions, rotations, interaction ids and collision plots are preserved.
    const placeUniqueVillageHouse = (
      asset:string,
      x:number,z:number,rot:number,
      sx:number,sy:number,sz:number,
      id:string,label:string
    ) => {
      loadGlbWithFolderFallback(asset, (gltf:any) => {
        if (!glbTreesAlive) return;

        const model = gltf.scene.clone(true);
        markMeshes(model);
        model.traverse((o:any) => {
          if (!o.isMesh) return;
          o.visible = true;
          o.castShadow = true;
          o.receiveShadow = true;
          o.frustumCulled = true;
        });

        model.scale.set(sx,sy,sz);
        model.rotation.set(0,rot,0);
        model.position.set(x,groundY(x,z),z);
        model.userData={id,label};

        addMesh(model,id,label);
        console.log(`[${label}] loaded`, `${BASE}img/models/${asset}`);
      }, label);
    };

    placeUniqueVillageHouse(elderHouseAsset,13,-18,-.08,1.02,.82,.90,"house","Дом старейшины");
    placeUniqueVillageHouse(fisherHouseAsset,23,-6,.72,.95,.94,.65,"fisher","Дом рыбака");
    placeUniqueVillageHouse(hunterHouseAsset,17,9,-.35,.94,.90,.64,"hunter","Дом охотника");
    placeUniqueVillageHouse(herbalistHouseAsset,3,-25,.05,.91,.88,.62,"herbalist","Дом травницы");
    placeUniqueVillageHouse(craftsmanHouseAsset,-22,-7,-.65,.86,.82,.64,"craftsman","Дом ремесленника");

    // Same collision footprints as the procedural houses they replace.
    addRectCollider(13,-18,10.85,7.85,-.08,.05);
    addRectCollider(23,-6,8.85,6.85,.72,.05);
    addRectCollider(17,9,8.85,6.85,-.35,.05);
    addRectCollider(3,-25,8.85,6.85,.05,.05);
    addRectCollider(-22,-7,8.85,6.85,-.65,.05);

    // GLB blacksmith forge — replaces the old procedural smithy.
    // Keep the same location, interaction id, collision footprint and warm fire light.
    loadGlbWithFolderFallback(forgeAsset, (gltf:any) => {
      if (!glbTreesAlive) return;

      const forgeModel = gltf.scene.clone(true);
      markMeshes(forgeModel);

      forgeModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });

      // Source is compact (~6 x 6 m). Slightly widen it so it reads well
      // on the existing smithy plot without becoming oversized.
      forgeModel.scale.set(1.14, 1.08, 1.02);
      forgeModel.rotation.set(0, 0, 0);
      forgeModel.position.set(-10, groundY(-10,-5), -5);
      forgeModel.userData = { id:"forge", label:"Кузница" };

      addMesh(forgeModel,"forge","Кузница");
      console.log('[FORGE] loaded', `${BASE}img/models/${forgeAsset}`);
    }, 'FORGE');

    addRectCollider(-10,-5,9.6,6.6,0,.05);

    // Preserve the real point light so the fire glows on the surrounding ground
    // even though the visible furnace itself is part of the GLB.
    const forgeLight=new THREE.PointLight(0xff7a32,3.2,14,2);
    forgeLight.position.set(-10,groundY(-10,-5)+1.75,-3.8);
    scene.add(forgeLight);

    // Central square: stone edging, market tables, banners and a large bonfire.
    const square=new THREE.Mesh(new THREE.CircleGeometry(8.5,32),new THREE.MeshStandardMaterial({color:0x6b5a47,roughness:1}));square.rotation.x=-Math.PI/2;square.position.set(1,groundY(1,0)+.05,0);square.receiveShadow=true;scene.add(square);
    for(let i=0;i<18;i++){const a=i/18*Math.PI*2;const s=new THREE.Mesh(new THREE.DodecahedronGeometry(.38,1),mat(0x6b6b63,1));s.position.set(1+Math.cos(a)*8.8,groundY(1+Math.cos(a)*8.8,Math.sin(a)*8.8)+.22,Math.sin(a)*8.8);scene.add(s);}
    const table=(x:number,z:number)=>{const g=new THREE.Group();const top=box(2.8,.22,1.0,0x684329,1);top.position.y=1.05;g.add(top);for(const px of [-1.05,1.05]){const l=box(.16,1,.16,0x3b291d,1);l.position.set(px,.5,-.32);g.add(l);const r=l.clone();r.position.z=.32;g.add(r);}g.position.set(x,groundY(x,z),z);scene.add(g);};
    table(-4,2);table(7,3);

    const fire=(x:number,z:number,scale:number)=>{const g=new THREE.Group();g.position.set(x,groundY(x,z),z);for(let i=0;i<7;i++){const a=i/7*Math.PI*2;const s=new THREE.Mesh(new THREE.DodecahedronGeometry(.32*scale,1),mat(0x5d5a52,1));s.position.set(Math.cos(a)*.7*scale,.25*scale,Math.sin(a)*.7*scale);g.add(s);}const log1=box(.2*scale,.2*scale,1.5*scale,0x4a2d1b,1),log2=log1.clone();log1.rotation.y=.55;log2.rotation.y=-.55;log1.position.y=log2.position.y=.38*scale;g.add(log1,log2);const fm=new THREE.MeshStandardMaterial({color:0xff8128,emissive:0xff4d0a,emissiveIntensity:4});const flame=new THREE.Mesh(new THREE.ConeGeometry(.5*scale,1.35*scale,8),fm);flame.position.y=1.02*scale;g.add(flame);scene.add(g);const light=new THREE.PointLight(0xff8a3c,2.4*scale,12*scale,2);light.position.set(x,groundY(x,z)+2*scale,z);scene.add(light);fires.push({light,flame,phase:midHash(x,z)*8});return g;};
    // Village center: Mimir's well replaces the bonfire; the existing 18-stone circle stays.
    const villageMimir=new THREE.Group();
    villageMimir.userData={id:"mimir",label:"Колодец Мимира"};
    villageMimir.position.set(1,groundY(1,0),0);

    const villageWellWater=new THREE.Mesh(
      new THREE.CircleGeometry(1.18,32),
      new THREE.MeshStandardMaterial({color:0x174b58,emissive:0x0c3d48,emissiveIntensity:1.9,roughness:.16,metalness:.04})
    );
    villageWellWater.rotation.x=-Math.PI/2; villageWellWater.position.y=.5; villageMimir.add(villageWellWater);

    for(let i=0;i<3;i++){
      const ripple=new THREE.Mesh(
        new THREE.TorusGeometry(.38+i*.28,.025,6,40),
        new THREE.MeshBasicMaterial({color:i===0?0x8eeeff:0x6bd7df,transparent:true,opacity:.42,depthWrite:false})
      );
      ripple.rotation.x=Math.PI/2; ripple.position.y=.525; villageMimir.add(ripple);
    }

    for(const px of [-1.35,1.35]){
      const p=box(.24,3.0,.24,0x4a3020,1);
      p.position.set(px,1.55,0); villageMimir.add(p);
    }

    const villageWellBeam=box(3.15,.26,.26,0x382519,1);
    villageWellBeam.position.y=2.96; villageMimir.add(villageWellBeam);

    const villageRope=new THREE.Mesh(
      new THREE.CylinderGeometry(.035,.035,1.2,6),mat(0x7b6248,1)
    );
    villageRope.position.y=2.25; villageMimir.add(villageRope);

    const villageBucket=box(.58,.5,.58,0x5a3b27,1);
    villageBucket.position.set(0,1.65,0); villageMimir.add(villageBucket);

    const villageWellHalo=new THREE.Mesh(
      new THREE.TorusGeometry(1.55,.055,8,48),
      new THREE.MeshStandardMaterial({color:0x76e59c,emissive:0x287c48,emissiveIntensity:3,roughness:.5})
    );
    villageWellHalo.rotation.x=Math.PI/2; villageWellHalo.position.y=.54; villageMimir.add(villageWellHalo);

    addMesh(villageMimir,"mimir","Колодец Мимира"); objects.push(villageMimir);
    addCircleCollider(1,0,3.8,.08);

    const villageMimirLight=new THREE.PointLight(0x72d9ee,2.0,12,2);
    villageMimirLight.position.set(1,groundY(1,0)+2.2,0); scene.add(villageMimirLight);

    loadGlbWithFolderFallback(mimirWellAsset,(gltf:any)=>{
      if(!glbTreesAlive)return;
      const model=gltf.scene.clone(true);markMeshes(model);
      model.traverse((o:any)=>{if(!o.isMesh)return;o.visible=true;o.castShadow=true;o.receiveShadow=true;o.frustumCulled=true;});
      model.scale.setScalar(.76);
      model.rotation.set(0,0,0);
      model.position.set(1,groundY(1,0),0);
      model.userData={id:"mimir",label:"Колодец Мимира"};
      villageMimir.visible=false;
      addMesh(model,"mimir","Колодец Мимира");objects.push(model);
      console.log('[MIMIR WELL] loaded',`${BASE}img/models/${mimirWellAsset}`);
    },'MIMIR WELL');

    fire(18,-15,.72);

    // Outer settlement: farms, workshops and service yards make the village read as a place,
    // not a handful of buildings. These are deliberately lightweight so the scene remains mobile-friendly.
    // Small yard fences removed. The village boundary is now defined by the main palisade.
    const shed=(x:number,z:number,w:number,d:number,rot:number,label:string,id:string)=>{
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z); g.rotation.y=rot; g.userData={id,label};
      const base=box(w+.25,.35,d+.25,0x555148,1);base.position.y=.18;g.add(base);
      const wall=new THREE.Mesh(new THREE.BoxGeometry(w,2.5,d),new THREE.MeshStandardMaterial({map:woodTex,color:0x62442f,roughness:1}));wall.position.y=1.45;g.add(wall);
      const roof=new THREE.Mesh(new THREE.BoxGeometry(w+.6,.18,d+.65),new THREE.MeshStandardMaterial({map:roofTex,color:0x292724,roughness:1}));roof.rotation.z=.55;roof.position.set(-.16,3.0,0);g.add(roof);
      const roof2=roof.clone();roof2.rotation.z=-.55;roof2.position.x=.16;g.add(roof2);
      const door=box(1.05,1.75,.12,0x2a1c14,1);door.position.set(0,1.05,d/2+.07);g.add(door);
      addMesh(g,id,label);objects.push(g);addRectCollider(x,z,w+.55,d+.55,rot,.04);
    };
    const hay=(x:number,z:number,s=1)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      const bale=new THREE.Mesh(new THREE.CylinderGeometry(.65*s,.65*s,1.2*s,10),mat(0x8a7441,1));bale.rotation.z=Math.PI/2;bale.position.y=.62*s;g.add(bale);
      for(let i=0;i<3;i++){const rope=new THREE.Mesh(new THREE.TorusGeometry(.66*s,.025*s,5,18),mat(0x594a2d,1));rope.rotation.y=Math.PI/2;rope.position.y=(.28+i*.34)*s;g.add(rope);}
      addMesh(g);
    };
    const cart=(x:number,z:number,rot:number)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);g.rotation.y=rot;
      const bed=box(2.8,.28,1.45,0x65432b,1);bed.position.y=1.0;g.add(bed);
      for(const px of [-1.15,1.15])for(const pz of [-.55,.55]){const p=box(.16,1.15,.16,0x432b1e,1);p.position.set(px,.55,pz);g.add(p);}
      for(const px of [-1.15,1.15]){const w=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.18,14),mat(0x292622,1));w.rotation.z=Math.PI/2;w.position.set(px,.52,-.92);g.add(w);}
      const shaft=box(.16,.16,2.4,0x49301f,1);shaft.rotation.x=Math.PI/2;shaft.position.set(0,.72,-2.0);g.add(shaft);addMesh(g);
    };
    const bench=(x:number,z:number,rot=0)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);g.rotation.y=rot;
      const top=box(2.2,.16,.5,0x704a2d,1);top.position.y=.85;g.add(top);
      for(const px of [-.78,.78]){const l=box(.12,.8,.12,0x3f2a1d,1);l.position.set(px,.4,0);g.add(l);}
      addMesh(g);
    };
    const wellMarker=(x:number,z:number)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      for(let i=0;i<10;i++){const a=i/10*Math.PI*2,s=box(.45,.38,.38,0x66655d,1);s.position.set(Math.cos(a)*.95,.19,Math.sin(a)*.95);s.rotation.y=a;g.add(s);}
      const post1=box(.16,2.2,.16,0x4a3020,1),post2=post1.clone();post1.position.set(-.9,1.2,0);post2.position.set(.9,1.2,0);g.add(post1,post2);
      const beam=box(2.0,.16,.16,0x3b281b,1);beam.position.y=2.25;g.add(beam);
      addMesh(g);
    };
    // Northern farm quarter.
    // Replace only the main village Barn and Shed with their GLB models.
    // The fisherman's storage and old abandoned barn stay procedural for now.
    loadGlbWithFolderFallback(barnAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const barnModel = gltf.scene.clone(true);
      markMeshes(barnModel);
      barnModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });
      barnModel.scale.set(.84,.90,.70);
      barnModel.rotation.set(0,.08,0);
      barnModel.position.set(-19,groundY(-19,31),31);
      barnModel.userData={id:"barn",label:"Амбар"};
      addMesh(barnModel,"barn","Амбар");
      objects.push(barnModel);
      console.log('[BARN] loaded', `${BASE}img/models/${barnAsset}`);
    }, 'BARN');
    addRectCollider(-19,31,8.55,5.25,.08,.04);

    loadGlbWithFolderFallback(shedAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const shedModel = gltf.scene.clone(true);
      markMeshes(shedModel);
      shedModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });
      shedModel.scale.set(1.00,.92,.70);
      shedModel.rotation.set(0,-.20,0);
      shedModel.position.set(17,groundY(17,34),34);
      shedModel.userData={id:"shed",label:"Сарай"};
      addMesh(shedModel,"shed","Сарай");
      objects.push(shedModel);
      console.log('[SHED] loaded', `${BASE}img/models/${shedAsset}`);
    }, 'SHED');
    addRectCollider(17,34,7.45,5.20,-.20,.04);

    // Legacy procedural fisher storage removed; it duplicated the newer village buildings.
    for(const p0 of [[-20,29,1.0],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]] as Array<[number,number,number]>) hay(p0[0],p0[1],p0[2]);
    cart(-17,24,.18); cart(29,-5,-.55); bench(-20,23,.18); bench(25,31,-.2);
    // A second line of modest homes is now supplied by Viking GLB clones above.
    addRectCollider(-31,8,7.8,5.8,.1,.04);addRectCollider(-27,20,7.8,5.8,-.25,.04);addRectCollider(31,18,7.8,5.8,.32,.04);addRectCollider(20,24,7.8,5.8,-.12,.04);
    // Small market corner near the square.
    const stall=(x:number,z:number,rot:number)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);g.rotation.y=rot;
      const top=box(3.0,.18,1.25,0x70462a,1);top.position.y=1.45;g.add(top);
      for(const px of [-1.25,1.25])for(const pz of [-.48,.48]){const p=box(.13,1.45,.13,0x412b1d,1);p.position.set(px,.72,pz);g.add(p);}
      // Triangular canopy removed; leave only the low market table/posts.
      addMesh(g);
    };
    stall(-5,-7,.12);stall(8,-5,-.18);stall(6,7,.5);
    // Hearths, wood piles and small objects around homes.
    // Firewood piles are disabled completely.
    // No stacked logs are created anywhere near houses or doorways.
    const woodpile=(_x:number,_z:number,_s=1)=>{ return; };
    for(const p0 of [[-17,-11],[-21,-16],[14,-12],[22,-14],[24,17],[-31,15],[-18,41],[34,14]] as Array<[number,number]>) wellMarker(p0[0],p0[1]);
    // Low vegetation and scattered stones fill empty ground without turning it into a particle-heavy scene.
    const bush=(x:number,z:number,s=1)=>{
      const g=new THREE.Group();const y=groundY(x,z);
      for(let i=0;i<5;i++){const c=new THREE.Mesh(new THREE.SphereGeometry((.28+midHash(i,x)*.18)*s,8,6),mat(i%2?0x355239:0x415f3f,1));c.position.set((midHash(i,2)-.5)*.7*s,.28*s,(midHash(i,3)-.5)*.7*s);g.add(c);}g.position.set(x,y,z);addMesh(g);
    };
    for(let i=0;i<48;i++){
      const a=midHash(i,501)*Math.PI*2,r=18+midHash(i,502)*39,x=Math.cos(a)*r,z=Math.sin(a)*r+4;
      if(Math.abs(x)<9 && Math.abs(z)<14) continue;
      bush(x,z,.65+midHash(i,503)*.75);
    }
    for(let i=0;i<34;i++){
      const x=-84+midHash(i,610)*168,z=-82+midHash(i,611)*164;
      if(Math.hypot(x,z-2)<24) continue;
      const s=.25+midHash(i,612)*.55;const rock=new THREE.Mesh(new THREE.DodecahedronGeometry(s,1),mat(0x575b55,1));rock.scale.y=.55;rock.position.set(x,groundY(x,z)+s*.28,z);rock.rotation.set(midHash(i,613),midHash(i,614),midHash(i,615));addMesh(rock);addCircleCollider(x,z,s*.8,.03);
    }

    // Old human settlement — a quiet abandoned farmstead beyond the village.
    // It is a game interpretation inspired by the human dwellings, barns, carts and hearths
    // described in Rígþula, not a claim that this exact place exists in the Edda.
    const oldFarmFallback=house(-65,5,8,5,0.12,"Старый хутор","oldfarm",0x63432f,0x2b2926);
    loadGlbWithFolderFallback(oldFarmAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const oldFarmModel = gltf.scene.clone(true);
      markMeshes(oldFarmModel);
      oldFarmModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });
      oldFarmModel.scale.set(.85,.75,.62);
      oldFarmModel.rotation.set(0,.12,0);
      oldFarmModel.position.set(-65,groundY(-65,5),5);
      oldFarmModel.userData={id:"oldfarm",label:"Старый хутор"};
      oldFarmFallback.visible=false;
      addMesh(oldFarmModel,"oldfarm","Старый хутор");
      objects.push(oldFarmModel);
      console.log('[OLD FARM] loaded', `${BASE}img/models/${oldFarmAsset}`);
    }, 'OLD FARM');
    // Legacy procedural old barn removed; the Old Farm GLB is now the sole farmstead structure here.
    hay(-68,8,.9); cart(-62,2,-.25); wellMarker(-58,4);
    const oldField=new THREE.Group();
    oldField.position.set(-63,groundY(-63,47),47);
    for(let r=0;r<6;r++){
      const furrow=box(10,.035,.12,0x40382a,1);
      furrow.position.set(0,.02,(r-2.5)*1.05);
      furrow.rotation.y=.06; oldField.add(furrow);
    }
    addMesh(oldField);

    const runeGroundTexture=(glyph:string,color:string)=>{
      const c=document.createElement("canvas"); c.width=c.height=256; const ctx=c.getContext("2d")!;
      ctx.clearRect(0,0,256,256); ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.shadowColor=color; ctx.shadowBlur=18; ctx.fillStyle=color; ctx.font="bold 150px serif"; ctx.fillText(glyph,128,132);
      ctx.shadowBlur=4; ctx.globalAlpha=.55; ctx.font="bold 118px serif"; ctx.fillText(glyph,128,132);
      const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=4; return t;
    };
    const addGroundRune=(g:THREE.Group,x:number,z:number,glyph:string,color:number,size=.72,rot=0)=>{
      const hex="#"+color.toString(16).padStart(6,"0");
      const m=new THREE.MeshBasicMaterial({map:runeGroundTexture(glyph,hex),transparent:true,depthWrite:false,side:THREE.DoubleSide});
      const q=new THREE.Mesh(new THREE.PlaneGeometry(size,size),m); q.rotation.x=-Math.PI/2; q.rotation.z=rot; q.position.set(x,.065,z); g.add(q);
      return q;
    };

    // Field of Runes — a monumental Norse ritual clearing, built around a central altar.
    const runeField=new THREE.Group();
    const runeFieldX=18, runeFieldZ=55;
    runeField.position.set(runeFieldX,groundY(runeFieldX,runeFieldZ),runeFieldZ);
    runeField.userData={id:"runefield",label:"Поле Рун"};
    const fieldStoneMat=new THREE.MeshStandardMaterial({color:0x59615d,roughness:.94,metalness:.04});
    const fieldDarkMat=new THREE.MeshStandardMaterial({color:0x3b4440,roughness:1});
    const cyanRuneMat=new THREE.MeshBasicMaterial({color:0x7de8ff,transparent:true,opacity:.92,depthWrite:false,side:THREE.DoubleSide});
    const purpleRuneMat=new THREE.MeshBasicMaterial({color:0xc58cff,transparent:true,opacity:.86,depthWrite:false,side:THREE.DoubleSide});
    const goldRuneMat=new THREE.MeshBasicMaterial({color:0xffd76a,transparent:true,opacity:.9,depthWrite:false,side:THREE.DoubleSide});

    // Mossy ritual ground.
    const fieldGround=new THREE.Mesh(new THREE.CircleGeometry(12.2,48),new THREE.MeshStandardMaterial({color:0x283a2c,roughness:1,transparent:true,opacity:.92}));
    fieldGround.rotation.x=-Math.PI/2; fieldGround.position.y=.018; runeField.add(fieldGround);

    // Central monumental altar with a glowing rune face.
    const altarBase=new THREE.Mesh(new THREE.CylinderGeometry(2.15,2.55,.48,10),fieldDarkMat);
    altarBase.position.y=.24; altarBase.scale.z=.82; runeField.add(altarBase);
    const altarBody=new THREE.Mesh(new THREE.DodecahedronGeometry(1.48,1),fieldStoneMat);
    altarBody.scale.set(1.0,1.65,.72); altarBody.position.y=1.38; altarBody.rotation.y=.18; runeField.add(altarBody);
    const altarCrown=new THREE.Mesh(new THREE.DodecahedronGeometry(.78,1),fieldStoneMat);
    altarCrown.scale.set(.72,1.15,.55); altarCrown.position.set(0,2.72,.02); altarCrown.rotation.z=.06; runeField.add(altarCrown);
    // Central stone: one large glowing Eihwaz rune (ᛇ), pushed clearly
    // in front of the altar face so it cannot disappear inside the mesh.
    const eihwazTex=runeGroundTexture('ᛇ','#8fe8ff');
    const eihwaz=new THREE.Mesh(
      new THREE.PlaneGeometry(1.42,2.25),
      new THREE.MeshBasicMaterial({
        map:eihwazTex,
        color:0xffffff,
        transparent:true,
        opacity:1,
        depthWrite:false,
        blending:THREE.AdditiveBlending,
        side:THREE.DoubleSide,
        toneMapped:false
      })
    );
    const altarFaceRot=.18;
    const altarFaceDepth=1.16;
    eihwaz.position.set(
      Math.sin(altarFaceRot)*altarFaceDepth,
      1.92,
      Math.cos(altarFaceRot)*altarFaceDepth
    );
    eihwaz.rotation.y=altarFaceRot;
    eihwaz.renderOrder=8;
    runeField.add(eihwaz);

    const altarGlow=new THREE.PointLight(0x73dfff,1.55,8.5,2);
    altarGlow.position.set(
      Math.sin(altarFaceRot)*1.45,
      2.0,
      Math.cos(altarFaceRot)*1.45
    );
    runeField.add(altarGlow);

    // Two concentric golden ritual rings.
    for(const [r,w] of [[3.0,.075],[7.1,.065],[10.1,.045]] as Array<[number,number]>) {
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,w,8,96),new THREE.MeshBasicMaterial({color:0xe9c76d,transparent:true,opacity:r<8?.82:.58,depthWrite:false}));
      ring.rotation.x=Math.PI/2; ring.position.y=.055; runeField.add(ring);
    }
    const fieldGlyphs=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛏ"];
    for(let i=0;i<16;i++){
      const a=i/16*Math.PI*2;
      addGroundRune(runeField,Math.cos(a)*8.55,Math.sin(a)*8.55,fieldGlyphs[i],i%3===0?0xe5b95b:(i%3===1?0x77e5f5:0xb887ef),.62,a+.18);
    }
    for(let i=0;i<12;i++){
      const a=i/12*Math.PI*2+.13;
      addGroundRune(runeField,Math.cos(a)*5.45,Math.sin(a)*5.45,fieldGlyphs[(i+5)%fieldGlyphs.length],i%2?0x74dff2:0xc18bed,.38,a);
    }

    // Outer ring of irregular monolithic menhirs.
    // Every large stone now carries several neon-painted runes in different colours.
    const runeNeonColors=[
      {hex:'#58bfff',light:0x58bfff}, // blue
      {hex:'#63ff86',light:0x63ff86}, // green
      {hex:'#ff4f55',light:0xff4f55}, // red
      {hex:'#fff15a',light:0xfff15a}, // yellow
      {hex:'#ffffff',light:0xffffff}, // white
      {hex:'#ffd36a',light:0xffd36a}, // gold
      {hex:'#cfd8df',light:0xcfd8df}, // silver
    ];
    for(let i=0;i<10;i++){
      const a=i/10*Math.PI*2+.16; const rr=9.15+(.5-midHash(i,1202))*1.0;
      const h=2.4+midHash(i,1203)*2.0; const w=.72+midHash(i,1204)*.48;
      const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.82+midHash(i,1205)*.22,1),fieldStoneMat);
      st.scale.set(w,h,0.72+midHash(i,1206)*.28);
      st.position.set(Math.cos(a)*rr,st.scale.y*.58,Math.sin(a)*rr);
      st.rotation.set((midHash(i,1207)-.5)*.22,a+(midHash(i,1208)-.5)*.3,(midHash(i,1209)-.5)*.18);
      runeField.add(st);

      // Three runes per stone, vertically staggered. MeshBasicMaterial keeps the
      // paint bright like neon without adding a costly light for every glyph.
      const faceX=st.position.x+Math.cos(a)*(.70+st.scale.z*.08);
      const faceZ=st.position.z+Math.sin(a)*(.70+st.scale.z*.08);
      const runeCount=3;
      for(let r=0;r<runeCount;r++){
        const glyph=fieldGlyphs[(i*2+r*5)%fieldGlyphs.length];
        const cc=runeNeonColors[(i+r*2)%runeNeonColors.length];
        const tex=runeGroundTexture(glyph,cc.hex);
        const mark=new THREE.Mesh(
          new THREE.PlaneGeometry(.68+r*.055,.92+r*.055),
          new THREE.MeshBasicMaterial({
            map:tex,
            color:0xffffff,
            transparent:true,
            opacity:.98,
            depthWrite:false,
            blending:THREE.AdditiveBlending,
            side:THREE.DoubleSide,
            toneMapped:false
          })
        );
        mark.position.set(
          faceX,
          st.position.y*(.48+.18*r),
          faceZ
        );
        mark.rotation.y=-a+Math.PI*.5;
        mark.renderOrder=5;
        runeField.add(mark);
      }

      // One soft coloured halo per stone (not per rune) for atmosphere and mobile performance.
      const primary=runeNeonColors[i%runeNeonColors.length];
      const gl=new THREE.PointLight(primary.light,.28,3.2,2);
      gl.position.set(st.position.x,st.position.y*.68,st.position.z);
      runeField.add(gl);
    }
    // Small boundary stones and sparse ritual debris.
    for(let i=0;i<18;i++){
      const a=midHash(i,1220)*Math.PI*2, rr=6.8+midHash(i,1221)*4.3;
      irregularRock(runeField,Math.cos(a)*rr,.22,Math.sin(a)*rr,.28+midHash(i,1222)*.35,i%2?0x4c5750:0x59625a,1223+i);
    }
    for(let i=0;i<10;i++){
      const a=midHash(i,1230)*Math.PI*2, rr=2.6+midHash(i,1231)*6.6;
      const relic=new THREE.Mesh(new THREE.CylinderGeometry(.06,.09,.035,7),new THREE.MeshStandardMaterial({color:0x9b814b,metalness:.6,roughness:.45}));
      relic.rotation.x=Math.PI/2; relic.position.set(Math.cos(a)*rr,.09,Math.sin(a)*rr); runeField.add(relic);
    }
    addMesh(runeField,"runefield","Поле Рун"); objects.push(runeField);
    addCircleCollider(runeFieldX,runeFieldZ,1.8,.08);

    // Palisade and gate: use one GLB segment for ALL four settlement walls.
    // Procedural stakes stay visible only as a fallback if the GLB is unavailable.
    const proceduralPalisades:THREE.Group[]=[];
    const palisadeRuns:Array<[number,number,number,number]>=[
      // Rear wall is now fully closed.
      [-30,-31,30,-31],
      // Side walls.
      [-30,-31,-30,44],[30,-31,30,44],
      // Main/front wall: run the large palisade right up to the gate posts.
      // Only the actual opening between the two working gate leaves remains passable.
      [-30,44,-4.25,44],[4.25,44,30,44]
    ];
    const palisade=(x1:number,z1:number,x2:number,z2:number)=>{
      const g=new THREE.Group();const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz),n=Math.max(1,Math.floor(len/1.7));
      for(let i=0;i<=n;i++){const t=i/n;const px=x1+dx*t,pz=z1+dz*t;const p=new THREE.Mesh(new THREE.ConeGeometry(.24,.24+2.8+midHash(i,x1)*.5,6),mat(0x3c2a1c,1));p.position.set(px,groundY(px,pz)+1.45,pz);g.add(p);}
      const beam=box(.3,.35,len,0x2d2119,1);beam.rotation.y=Math.atan2(dx,dz);beam.position.set((x1+x2)/2,groundY((x1+x2)/2,(z1+z2)/2)+1.25,(z1+z2)/2);g.add(beam);
      scene.add(g);proceduralPalisades.push(g);addSegmentCollider(x1,z1,x2,z2,.34,.08);
    };
    palisadeRuns.forEach(r=>palisade(...r));

    loadGlbWithFolderFallback(vikingPalisadeAsset,(gltf:any)=>{
      if(!glbTreesAlive)return;
      const source=gltf.scene.clone(true);
      markMeshes(source);
      source.traverse((o:any)=>{if(!o.isMesh)return;o.visible=true;o.castShadow=true;o.receiveShadow=true;o.frustumCulled=true;});
      proceduralPalisades.forEach(g=>g.visible=false);

      palisadeRuns.forEach(([x1,z1,x2,z2],runIndex)=>{
        const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz);
        const n=Math.max(1,Math.ceil(len/3.10));
        const each=len/n;
        for(let i=0;i<n;i++){
          const t=(i+.5)/n,px=x1+dx*t,pz=z1+dz*t;
          const seg=source.clone(true);
          seg.scale.set(each/3.2,.96+midHash(i,runIndex+2600)*.08,1);
          seg.rotation.set(0,Math.atan2(-dz,dx),0);
          seg.position.set(px,groundY(px,pz),pz);
          scene.add(seg);
        }
      });
      console.log('[PALISADE] all settlement walls loaded',`${BASE}img/models/${vikingPalisadeAsset}`);
    },'PALISADE');
    const gateFrontZ=44;
    const gate=new THREE.Group();gate.userData={id:"gate",label:"Ворота Мидгарда"};for(const x of [-4.2,4.2]){const p=box(.8,6,.8,0x2b1a11,1);p.position.set(x,3,gateFrontZ);gate.add(p);}const top=box(10,.8,1,0x24160f,1);top.position.set(0,6,gateFrontZ);gate.add(top);for(let i=-3;i<=3;i++){const bar=box(1.0,4.2,.22,0x3a2115,1);bar.position.set(i*1.15,2,gateFrontZ+.3);gate.add(bar);}addMesh(gate,"gate","Ворота Мидгарда");objects.push(gate);
    loadGlbWithFolderFallback(vikingGateAsset, (gltf:any) => {
      if (!glbTreesAlive) return;
      const gateModel = gltf.scene.clone(true);
      markMeshes(gateModel);
      gateModel.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });
      gateModel.scale.set(.78,.82,.82);
      gateModel.rotation.set(0,0,0);
      gateModel.position.set(0,groundY(0,gateFrontZ),gateFrontZ);
      gateModel.userData={id:"gate",label:"Ворота Мидгарда"};
      gate.visible=false;
      addMesh(gateModel,"gate","Ворота Мидгарда");
      objects.push(gateModel);
      console.log('[VIKING GATE] loaded', `${BASE}img/models/${vikingGateAsset}`);
    }, 'VIKING GATE');

    // Working old-style village doors: first lift/slide the heavy crossbar,
    // then swing the two leaves open on their side hinges.
    const gateWood=new THREE.MeshStandardMaterial({color:0x2b180f,roughness:1});
    const gateIron=new THREE.MeshStandardMaterial({color:0x262728,roughness:.78,metalness:.35});
    const gateLeftPivot=new THREE.Group();
    const gateRightPivot=new THREE.Group();
    gateLeftPivot.position.set(-3.12,groundY(-3.12,gateFrontZ),gateFrontZ+.38);
    gateRightPivot.position.set(3.12,groundY(3.12,gateFrontZ),gateFrontZ+.38);

    const makeGateLeaf=(side:number)=>{
      const leaf=new THREE.Group();
      const leafW=3.05,leafH=4.05;
      for(let i=0;i<5;i++){
        const plank=new THREE.Mesh(new THREE.BoxGeometry(.56,leafH,.24),gateWood);
        plank.position.set(side*(.33+i*.60),2.05,0);
        plank.castShadow=true;plank.receiveShadow=true;leaf.add(plank);
      }
      const brace1=new THREE.Mesh(new THREE.BoxGeometry(3.0,.18,.30),gateWood);
      brace1.position.set(side*1.48,1.18,.05);leaf.add(brace1);
      const brace2=brace1.clone();brace2.position.y=2.95;leaf.add(brace2);
      const diag=new THREE.Mesh(new THREE.BoxGeometry(3.25,.16,.27),gateWood);
      diag.position.set(side*1.48,2.05,.08);diag.rotation.z=side*.70;leaf.add(diag);
      const hinge=new THREE.Mesh(new THREE.BoxGeometry(.18,3.65,.34),gateIron);
      hinge.position.set(side*.12,2.05,.08);leaf.add(hinge);
      return leaf;
    };
    gateLeftPivot.add(makeGateLeaf(1));
    gateRightPivot.add(makeGateLeaf(-1));
    scene.add(gateLeftPivot,gateRightPivot);

    const villageGateBar=new THREE.Mesh(new THREE.BoxGeometry(6.7,.32,.34),gateWood);
    villageGateBar.position.set(0,groundY(0,gateFrontZ)+2.32,gateFrontZ+.72);
    villageGateBar.castShadow=true;villageGateBar.receiveShadow=true;scene.add(villageGateBar);

    gateActionRef.current=()=>{
      villageGateOpenRef.current=!villageGateOpenRef.current;
      setVillageGateOpen(villageGateOpenRef.current);
    };

    addCircleCollider(-4.2,gateFrontZ,.55,.05);addCircleCollider(4.2,gateFrontZ,.55,.05);
    // Norns' fate wheel — antique wooden wheel with an original yarn ball below.
    const nornsWheelAsset='Midgard_Norns_Fate_Wheel_V1_YUP.glb';
    const nornsRoot=new THREE.Group();
    nornsRoot.userData={id:"norns",label:"Прядильня норн"};
    const nornsX=-52,nornsZ=38;
    nornsRoot.position.set(nornsX,groundY(nornsX,nornsZ),nornsZ);

    // A shallow dark-blue pool beneath the wheel so the yarn rests visually "by the water".
    const nornsWater=new THREE.Mesh(
      new THREE.CircleGeometry(3.8,40),
      new THREE.MeshStandardMaterial({
        color:0x315b61,roughness:.28,metalness:.04,transparent:true,opacity:.86
      })
    );
    nornsWater.rotation.x=-Math.PI/2;
    nornsWater.position.y=.025;
    nornsRoot.add(nornsWater);

    loadGlbWithFolderFallback(nornsWheelAsset,(gltf:any)=>{
      const wheel=gltf.scene;
      markMeshes(wheel);
      wheel.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
      });
      wheel.scale.setScalar(.90);
      wheel.rotation.y=.22;
      wheel.position.set(0,.03,0);
      wheel.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(wheel);
      wheel.position.y-=bb.min.y-.03;
      nornsRoot.add(wheel);
      console.log('[NORNS WHEEL] GLB loaded',nornsWheelAsset);
    },'NORNS WHEEL');

    scene.add(nornsRoot);
    objects.push(nornsRoot);
    addCircleCollider(nornsX,nornsZ,2.4,.08);




    // Ancient Fehu stone — tall, flat and golden, with a large green Fehu rune.
    const rune=new THREE.Group();
    rune.userData={id:"rune",label:"Древний камень Феху"};
    rune.position.set(50,groundY(50,60),60);

    const fehuStoneMat=new THREE.MeshStandardMaterial({
      color:0xb9933f,
      roughness:.72,
      metalness:.16,
      emissive:0x3a2606,
      emissiveIntensity:.22
    });

    const stone=new THREE.Mesh(
      new THREE.DodecahedronGeometry(1.45,1),
      fehuStoneMat
    );
    stone.scale.set(.86,2.15,.30);
    stone.position.y=2.05;
    stone.rotation.z=.035;
    rune.add(stone);

    // Large green Fehu on the front face.
    const fehuTex=runeGroundTexture('ᚠ','#58ff74');
    const fehuMark=new THREE.Mesh(
      new THREE.PlaneGeometry(1.34,2.02),
      new THREE.MeshBasicMaterial({
        map:fehuTex,
        transparent:true,
        opacity:1,
        depthWrite:false,
        blending:THREE.AdditiveBlending,
        side:THREE.DoubleSide,
        toneMapped:false
      })
    );
    fehuMark.position.set(0,2.08,.47);
    fehuMark.renderOrder=8;
    rune.add(fehuMark);

    const fehuGlow=new THREE.PointLight(0x58ff74,.85,5.5,2);
    fehuGlow.position.set(0,2.0,.75);
    rune.add(fehuGlow);

    addMesh(rune,"rune","Древний камень Феху");
    objects.push(rune);
    addCircleCollider(50,60,1.55,.1);

    // Old floating dock/platform removed. Only the straight river bridge remains.
    // Straight river bridge replaces the old floating dock.
    const riverBridge=new THREE.Group();
    riverBridge.userData={id:"port",label:"Речной мост"};
    const bridgeX=-57, bridgeZ=-48, bridgeY=groundY(bridgeX,bridgeZ)+.58;
    riverBridge.position.set(bridgeX,bridgeY,bridgeZ);
    const bridgeWood=mat(0x5b3a25,1), bridgeDark=mat(0x332219,1);
    const span=13.6, deckW=3.6;
    for(let i=0;i<17;i++){
      const plank=box(.78,.24,deckW,0x67432b,1);
      plank.position.set(-span/2+.48+i*.80,0,0);
      riverBridge.add(plank);
    }
    for(const zSide of [-1,1]){
      const railZ=zSide*(deckW/2-.18);
      for(let i=0;i<6;i++){
        const x=-span/2+.55+i*(span-1.1)/5;
        const post=box(.18,1.55,.18,0x3d281c,1);
        post.position.set(x,.82,railZ);
        riverBridge.add(post);
      }
      const topRail=box(span-.8,.16,.16,0x3d281c,1);
      topRail.position.set(0,1.45,railZ);
      riverBridge.add(topRail);
      const midRail=box(span-.8,.12,.12,0x4b3020,1);
      midRail.position.set(0,.92,railZ);
      riverBridge.add(midRail);
    }
    const beamA=box(span-.4,.28,.24,0x332219,1);beamA.position.set(0,-.26,-1.25);riverBridge.add(beamA);
    const beamB=beamA.clone();beamB.position.z=1.25;riverBridge.add(beamB);
    addMesh(riverBridge,"port","Речной мост");objects.push(riverBridge);
    addRectCollider(bridgeX,bridgeZ,span,deckW,0,.02);

    // Utility clutter makes the village feel inhabited.
    const barrel=(x:number,z:number)=>{const b=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,1,12),mat(0x65432c,1));b.position.set(x,groundY(x,z)+.5,z);scene.add(b);for(const y of [.25,.76]){const r=new THREE.Mesh(new THREE.TorusGeometry(.51,.045,6,18),mat(0x302824,.7,.1));r.rotation.x=Math.PI/2;r.position.set(x,groundY(x,z)+y,z);scene.add(r);}};
    const crate=(x:number,z:number)=>{const c=box(1,.75,1,0x704a2e,1);c.position.set(x,groundY(x,z)+.38,z);scene.add(c);const s=box(.08,.82,1.05,0x38261a,1);s.position.set(x,groundY(x,z)+.38,z);scene.add(s);addRectCollider(x,z,1,1,0,.03);};
    [[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([x,z])=>barrel(x,z));
    [[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([x,z])=>crate(x,z));

    // Step 10 — living forest: gentle wind for foliage and small plants.
    // Group-level animation keeps the effect inexpensive on mobile.
    const windFoliage: Array<{o:THREE.Object3D,baseX:number,baseZ:number,phase:number,amp:number}> = [];
    const windPlants: Array<{o:THREE.Object3D,baseX:number,baseZ:number,phase:number,amp:number}> = [];

    // Realistic fantasy trees: firs for the forest + sacred ash trees around Midgard.
    // The ash is a deliberate visual echo of Yggdrasil rather than a generic oak.

    const ashTree=(x:number,z:number,s:number,ancient=false)=>{
      const g=new THREE.Group(), y=groundY(x,z);
      const bark=new THREE.MeshStandardMaterial({map:barkTexture,color:0xffffff,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.034});
      const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.42*s,.72*s,6.4*s,11),bark);
      trunk.position.y=3.2*s; trunk.rotation.z=(midHash(x,z)-.5)*.06; trunk.scale.x=1.08; g.add(trunk);
      // Buttress roots: broad, crooked and asymmetrical.
      for(let i=0;i<(ancient?9:7);i++){
        const a=i/(ancient?9:7)*Math.PI*2+midHash(i,x)*.18, len=(1.0+midHash(i,z)*1.6)*s;
        const root=new THREE.Mesh(new THREE.CylinderGeometry(.11*s,.30*s,len,7),bark);
        root.position.set(Math.cos(a)*len*.42,.28*s,Math.sin(a)*len*.42);
        root.rotation.z=Math.cos(a)*.72; root.rotation.x=-Math.sin(a)*.72; root.rotation.y=-a; g.add(root);
      }
      const branches=ancient?10:8;
      for(let i=0;i<branches;i++){
        const a=i/branches*Math.PI*2+midHash(i+11,x)*.22, len=(2.0+midHash(i+22,z)*2.2)*s;
        const br=new THREE.Mesh(new THREE.CylinderGeometry(.07*s,.19*s,len,8),bark);
        br.position.set(Math.cos(a)*len*.34,(3.25+midHash(i+33,x)*1.9)*s,Math.sin(a)*len*.34);
        br.rotation.z=Math.cos(a)*.76; br.rotation.x=Math.sin(a)*.76; br.rotation.y=-a; g.add(br);
        for(let k=0;k<4;k++){
          const leaf=new THREE.Mesh(organicBlobGeometry(new THREE.SphereGeometry((.46+midHash(k+i,90)*.25)*s,10,7),.14*s,k+i+17),new THREE.MeshStandardMaterial({map:foliageTexture,color:[0x315f39,0x427548,0x568653][(i+k)%3],roughness:1}));
          leaf.scale.y=.62; leaf.position.set(Math.cos(a)*len*(.52+.09*k)+(midHash(k,i)-.5)*.55*s,(3.9+midHash(i,k)*1.45+.25*k)*s,Math.sin(a)*len*(.52+.09*k)+(midHash(k+4,i)-.5)*.55*s);
          windFoliage.push({o:leaf,baseX:leaf.rotation.x,baseZ:leaf.rotation.z,phase:midHash(k+61,i+z)*Math.PI*2,amp:.012+.012*midHash(k+62,x)});
          g.add(leaf);
        }
      }
      if(ancient){
        // A few luminous runes are embedded in the bark rather than floating in front of it.
        const runes=['ᚱ','ᛉ','ᛟ','ᚦ','ᚨ'];
        for(let i=0;i<runes.length;i++){
          const a=-.9+i*.46;
          const rr=new THREE.Mesh(new THREE.PlaneGeometry(.48*s,.62*s),new THREE.MeshBasicMaterial({map:runeGroundTexture(runes[i],i%2?'#6fd4e8':'#e6bd61'),transparent:true,depthWrite:false,side:THREE.DoubleSide}));
          rr.position.set(Math.sin(a)*.56*s,(1.5+i*.68)*s,Math.cos(a)*.60*s); rr.rotation.y=a; g.add(rr);
        }
      }

      // Irregular bark ridges and knot scars make the trunk read as grown wood.
      for(let i=0;i<6;i++){
        const ridge=new THREE.Mesh(new THREE.SphereGeometry((.16+midHash(i,121)*.10)*s,7,5),bark);
        ridge.scale.set(.55,1.55,.42);
        const a=midHash(i,122)*Math.PI*2;
        ridge.position.set(Math.cos(a)*.50*s,(1.05+i*.48)*s,Math.sin(a)*.50*s);
        ridge.rotation.y=-a;
        g.add(ridge);
      }
      if(ancient){
        // Ancient-tree pass: layered trunk masses, crooked braces and hanging limbs
        // break the silhouette so the sacred ash reads as a centuries-old tree.
        const oldBark=new THREE.MeshStandardMaterial({
          map:barkTexture,color:0xffffff,roughness:1,
          roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.048
        });
        for(let i=0;i<4;i++){
          const a=i/4*Math.PI*2+.35;
          const len=(1.35+midHash(i,441)*.85)*s;
          const brace=new THREE.Mesh(new THREE.CylinderGeometry(.10*s,.26*s,len,8),oldBark);
          brace.position.set(Math.cos(a)*len*.34,.48*s,Math.sin(a)*len*.34);
          brace.rotation.z=Math.cos(a)*.92;
          brace.rotation.x=-Math.sin(a)*.92;
          brace.rotation.y=-a;
          g.add(brace);
        }
        for(let i=0;i<6;i++){
          const a=-1.25+i*.48;
          const len=(2.1+midHash(i,452)*1.7)*s;
          const limb=new THREE.Mesh(new THREE.CylinderGeometry(.045*s,.12*s,len,7),oldBark);
          limb.position.set(Math.sin(a)*len*.46,(5.0+midHash(i,453)*1.6)*s,Math.cos(a)*len*.46);
          limb.rotation.z=.72*Math.cos(a);
          limb.rotation.x=.55*Math.sin(a);
          limb.rotation.y=-a;
          g.add(limb);
        }
        // A few dark hollows suggest age without using expensive boolean geometry.
        for(let i=0;i<3;i++){
          const hollow=new THREE.Mesh(
            new THREE.SphereGeometry((.13+midHash(i,461)*.07)*s,8,6),
            new THREE.MeshStandardMaterial({color:0x171914,roughness:1})
          );
          const a=-.8+i*.72;
          hollow.scale.set(.55,1.15,.32);
          hollow.position.set(Math.sin(a)*.61*s,(2.05+i*.65)*s,Math.cos(a)*.61*s);
          hollow.rotation.y=a;
          g.add(hollow);
        }
      }

      g.position.set(x,y,z); addMesh(g); if(s>=1.2)addCircleCollider(x,z,.78*s,.05);
    };

    // Forest life inspired    // Forest life inspired by the Edda: four deer associated with Yggdrasil and a wandering squirrel.
    // They are game-world manifestations in Midgard, not claims that the literal cosmic animals live here.
    const deer = (x:number,z:number,s:number,phase:number) => {
      const g=new THREE.Group();
      const fur=new THREE.MeshStandardMaterial({color:0x6b4a31,roughness:.96});
      const furLight=new THREE.MeshStandardMaterial({color:0x87603f,roughness:.96});
      const dark=new THREE.MeshStandardMaterial({color:0x30251e,roughness:1});
      const ant=new THREE.MeshStandardMaterial({color:0xb9ad98,roughness:.9});
      const eyeMat=new THREE.MeshStandardMaterial({color:0x17130f,roughness:.25});

      // Torso: broad ribcage tapering toward the rump.
      const body=new THREE.Mesh(new THREE.SphereGeometry(.68,14,10),fur);
      body.scale.set(1.48,.66,.62);
      body.position.set(0,1.14*s,0); body.scale.multiplyScalar(s); g.add(body);

      const chest=new THREE.Mesh(new THREE.SphereGeometry(.42,12,9),furLight);
      chest.scale.set(.92,1.05,.76); chest.position.set(.52*s,1.20*s,0); g.add(chest);

      // Long sloping neck and a distinct deer head.
      const neck=new THREE.Mesh(new THREE.CylinderGeometry(.17*s,.30*s,1.18*s,10),fur);
      neck.position.set(.58*s,1.72*s,0); neck.rotation.z=-.36; g.add(neck);

      const head=new THREE.Mesh(new THREE.SphereGeometry(.34*s,12,9),furLight);
      head.scale.set(1.12,.82,.70); head.position.set(.96*s,2.14*s,0); g.add(head);

      const muzzle=new THREE.Mesh(new THREE.SphereGeometry(.17*s,10,7),furLight);
      muzzle.scale.set(1.28,.60,.62); muzzle.position.set(1.31*s,2.04*s,0); g.add(muzzle);

      const nose=new THREE.Mesh(new THREE.SphereGeometry(.075*s,8,6),dark);
      nose.scale.set(1,.68,.82); nose.position.set(1.47*s,2.04*s,0); g.add(nose);

      // Visible ears.
      for(const side of [-1,1]){
        const ear=new THREE.Mesh(new THREE.ConeGeometry(.095*s,.30*s,7),furLight);
        ear.position.set(.86*s,2.43*s,side*.18*s);
        ear.rotation.z=-.28; ear.rotation.x=side*.18;
        g.add(ear);
      }

      // Eyes with a tiny highlight.
      for(const side of [-1,1]){
        const eye=new THREE.Mesh(new THREE.SphereGeometry(.035*s,8,6),eyeMat);
        eye.position.set(1.16*s,2.23*s,side*.215*s); g.add(eye);
        const glint=new THREE.Mesh(new THREE.SphereGeometry(.009*s,6,4),new THREE.MeshBasicMaterial({color:0xffffff}));
        glint.position.set(1.19*s,2.245*s,side*.235*s); g.add(glint);
      }

      // Four articulated legs: upper limb, lower limb and small hoof.
      const legJoints: THREE.Object3D[]=[];
      for(const zSide of [-1,1]){
        for(const xSide of [-1,1]){
          const upper=new THREE.Group();
          upper.position.set(xSide*.46*s,.95*s,zSide*.30*s);
          const upperMesh=new THREE.Mesh(new THREE.CylinderGeometry(.070*s,.095*s,.56*s,7),fur);
          upperMesh.position.y=-.27*s; upper.add(upperMesh);

          const lower=new THREE.Group();
          lower.position.y=-.54*s;
          const lowerMesh=new THREE.Mesh(new THREE.CylinderGeometry(.045*s,.062*s,.56*s,7),dark);
          lowerMesh.position.y=-.27*s; lower.add(lowerMesh);

          const hoof=new THREE.Mesh(new THREE.SphereGeometry(.075*s,7,5),dark);
          hoof.scale.set(1.25,.48,1.45); hoof.position.y=-.56*s; lower.add(hoof);

          upper.add(lower); g.add(upper); legJoints.push(upper,lower);
        }
      }

      // Short white-ish tail.
      const tail=new THREE.Mesh(new THREE.SphereGeometry(.16*s,9,7),furLight);
      tail.scale.set(.68,1.12,.66); tail.position.set(-.98*s,1.38*s,0); g.add(tail);

      // More natural branched antlers, with a main beam and 3 tines per side.
      for(const side of [-1,1]){
        const beam=new THREE.Mesh(new THREE.CylinderGeometry(.040*s,.060*s,.68*s,7),ant);
        beam.position.set(.78*s,2.55*s,side*.13*s);
        beam.rotation.z=side*.22; g.add(beam);
        for(let k=0;k<3;k++){
          const tine=new THREE.Mesh(new THREE.CylinderGeometry(.020*s,.038*s,.34*s,6),ant);
          tine.position.set((.62+.12*k)*s,(2.79+.17*k)*s,side*(.13+.05*k)*s);
          tine.rotation.z=side*(.55-.08*k); g.add(tine);
        }
      }

      g.scale.setScalar(1.24);
      g.position.set(x,groundY(x,z),z);
      g.userData={phase,legJoints};
      addMesh(g);
      wildlife.push({g,x,z,r:4+midHash(phase,41)*3,speed:1.25+midHash(phase,42)*.8,phase,kind:'deer'});
    };
    const squirrel=(x:number,z:number) => {
      const g=new THREE.Group(); const fur=mat(0x6a4930,1),dark=mat(0x2f241c,1);
      const body=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),fur); body.scale.set(1.35,.9,.9); body.position.y=.72; g.add(body);
      const head=new THREE.Mesh(new THREE.SphereGeometry(.17,8,6),fur); head.position.set(.22,.86,0); g.add(head);
      for(const side of [-1,1]){const ear=new THREE.Mesh(new THREE.ConeGeometry(.06,.18,6),fur);ear.position.set(.17,.99,side*.09);g.add(ear);}
      const tail=new THREE.Mesh(new THREE.TorusGeometry(.24,.075,7,14,Math.PI*1.65),fur);tail.rotation.y=Math.PI/2;tail.position.set(-.22,.91,0);g.add(tail);
      const eye=new THREE.Mesh(new THREE.SphereGeometry(.025,6,4),dark);eye.position.set(.35,.9,-.12);g.add(eye);
      g.position.set(x,groundY(x,z),z); addMesh(g,'ratatosk','Белка Рататоск'); objects.push(g); addCircleCollider(x,z,.28,.02);
      wildlife.push({g,x,z,r:2.2,speed:.7,phase:1.7,kind:'squirrel'});
    };

    // Grove of Ash — a secluded grass-covered mound with an ancient ash growing from the crown.
    // Kept away from the main Midgard entrance so the silhouette does not block the village gate.
    const ashGroveX=-5, ashGroveZ=75;
    const ashGrove=new THREE.Group();
    ashGrove.userData={id:'ashgrove',label:'Роща Ясеня'};
    ashGrove.position.set(ashGroveX,groundY(ashGroveX,ashGroveZ),ashGroveZ);

    const groveEarthMat=new THREE.MeshStandardMaterial({color:0x4a3a28,roughness:1});
    // Use the SAME terrain texture/material response as the surrounding Midgard ground,
    // so the mound visually grows out of the landscape instead of looking painted green.
    const groveGrassMat=terrainMat.clone();
    groveGrassMat.map=groundTexture;
    groveGrassMat.color.set(0xffffff);
    groveGrassMat.roughness=.985;
    groveGrassMat.metalness=0;
    groveGrassMat.roughnessMap=surfaceMaps.rough;
    groveGrassMat.bumpMap=surfaceMaps.height;
    groveGrassMat.bumpScale=.018;
    groveGrassMat.needsUpdate=true;
    const groveBarkMat=new THREE.MeshStandardMaterial({map:barkTexture,color:0x5a3b27,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.035});
    const groveLeafMat=new THREE.MeshStandardMaterial({map:foliageTexture,color:0x4f7a43,roughness:1});
    const groveDoorMat=new THREE.MeshStandardMaterial({color:0x7a1830,roughness:.86,metalness:.03});
    const groveStoneMat=new THREE.MeshStandardMaterial({color:0x77766b,roughness:1});

    // Broad earthen embankment — deliberately NOT a half-sphere.
    // Three overlapping tapered terraces make the hill read as packed ground rising
    // naturally from the terrain, so the ash no longer looks as if it sits on a balloon.
    const moundLower=new THREE.Mesh(
      new THREE.CylinderGeometry(4.55,6.15,1.05,24,2,false),
      groveEarthMat
    );
    moundLower.scale.set(1.08,1,.90);
    moundLower.position.set(0,.50,0);
    moundLower.rotation.y=.08;
    ashGrove.add(moundLower);

    const moundMid=new THREE.Mesh(
      new THREE.CylinderGeometry(3.75,5.25,1.05,24,2,false),
      groveGrassMat
    );
    moundMid.scale.set(1.06,1,.90);
    moundMid.position.set(-.08,1.18,-.05);
    moundMid.rotation.y=-.06;
    ashGrove.add(moundMid);

    const moundTop=new THREE.Mesh(
      new THREE.CylinderGeometry(2.85,4.30,.82,24,2,false),
      groveGrassMat
    );
    moundTop.scale.set(1.05,1,.88);
    moundTop.position.set(.08,1.87,-.18);
    moundTop.rotation.y=.10;
    ashGrove.add(moundTop);

    // Small irregular shoulders soften the terrace edges without turning the mound
    // back into a sphere.
    for(let i=0;i<9;i++){
      const a=i/9*Math.PI*2+.18;
      const shoulder=new THREE.Mesh(
        new THREE.DodecahedronGeometry(.72+midHash(i,1319)*.34,1),
        i%3===0?groveEarthMat:groveGrassMat
      );
      shoulder.scale.set(1.35,.46,1.05);
      shoulder.position.set(
        Math.cos(a)*(4.15+midHash(i,1320)*.75),
        .52+midHash(i,1321)*.38,
        Math.sin(a)*(3.45+midHash(i,1322)*.55)
      );
      shoulder.rotation.y=midHash(i,1323)*Math.PI;
      ashGrove.add(shoulder);
    }

    // Recessed entrance cut visually into the front of the mound.
    const groveDoorShadow=new THREE.Mesh(new THREE.BoxGeometry(2.0,2.6,.22),new THREE.MeshBasicMaterial({color:0x120c0b}));
    groveDoorShadow.position.set(0,1.55,4.56);
    ashGrove.add(groveDoorShadow);
    const groveDoor=new THREE.Mesh(new THREE.BoxGeometry(1.48,2.12,.18),groveDoorMat);
    groveDoor.position.set(0,1.48,4.70);
    ashGrove.add(groveDoor);
    const groveDoorFrame=mat(0x4a2c22,1);
    const doorTop=new THREE.Mesh(new THREE.BoxGeometry(1.95,.18,.30),groveDoorFrame);
    doorTop.position.set(0,2.62,4.68); ashGrove.add(doorTop);
    [-.90,.90].forEach(px=>{const side=new THREE.Mesh(new THREE.BoxGeometry(.18,2.45,.30),groveDoorFrame);side.position.set(px,1.48,4.68);ashGrove.add(side);});
    const doorKnob=new THREE.Mesh(new THREE.SphereGeometry(.09,8,6),mat(0xb3894c,.55,.45));
    doorKnob.position.set(.46,1.48,4.82); ashGrove.add(doorKnob);

    // Short stepping-stone path so the entrance reads clearly from a distance.
    for(let i=0;i<5;i++){
      const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.44-.035*i,1),groveStoneMat);
      st.scale.set(1.25,.20,.78);
      st.position.set((i%2?-.10:.10),.12,5.05+i*.72);
      ashGrove.add(st);
    }

    // Ancient ash growing directly from the mound.
    const groveTrunk=new THREE.Mesh(new THREE.CylinderGeometry(.72,1.05,5.9,11),groveBarkMat);
    groveTrunk.position.set(0,4.72,-.20);
    groveTrunk.rotation.z=-.045;
    ashGrove.add(groveTrunk);
    for(let i=0;i<8;i++){
      const a=i/8*Math.PI*2+.20;
      const len=2.9+midHash(i,1330)*1.9;
      const br=new THREE.Mesh(new THREE.CylinderGeometry(.10,.28,len,7),groveBarkMat);
      br.position.set(Math.cos(a)*len*.30,7.1+midHash(i,1331)*1.0,Math.sin(a)*len*.30-.20);
      br.rotation.z=Math.cos(a)*.76;
      br.rotation.x=Math.sin(a)*.76;
      br.rotation.y=-a;
      ashGrove.add(br);
      for(let k=0;k<3;k++){
        const leaf=new THREE.Mesh(new THREE.SphereGeometry(.78+midHash(i,k+1332)*.34,9,6),groveLeafMat.clone());
        (leaf.material as THREE.MeshStandardMaterial).color.offsetHSL((midHash(i,k+1333)-.5)*.025,0,(midHash(i,k+1334)-.5)*.07);
        leaf.scale.set(1.25,.62,1.0);
        leaf.position.set(Math.cos(a)*len*(.44+.11*k)+(midHash(k,i)-.5)*.65,7.7+k*.32+midHash(i,k)*.85,Math.sin(a)*len*(.44+.11*k)-.20+(midHash(k+4,i)-.5)*.65);
        ashGrove.add(leaf);
      }
    }

    markMeshes(ashGrove);
    scene.add(ashGrove);
    objects.push(ashGrove);
    addCircleCollider(ashGroveX,ashGroveZ,2.6,.08);
    // Hoddmímir's Holt — a sacred refuge beneath a smaller world-tree.
    const hoddFallbackStart=scene.children.length;
    const hoddX=62,hoddZ=78;
    const hodd=new THREE.Group(); hodd.userData={id:'hoddmimir',label:'Лес Ходдмимира'};
    const hoddGround=new THREE.Mesh(new THREE.CircleGeometry(11.5,44),new THREE.MeshStandardMaterial({color:0x203b2b,roughness:1,transparent:true,opacity:.86})); hoddGround.rotation.x=-Math.PI/2; hoddGround.position.set(hoddX,groundY(hoddX,hoddZ)+.025,hoddZ);scene.add(hoddGround);
    const trunkMat=new THREE.MeshStandardMaterial({map:barkTexture,color:0xffffff,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.034});
    const worldTrunk=new THREE.Mesh(new THREE.CylinderGeometry(1.35,2.1,10.5,13),trunkMat); worldTrunk.position.set(hoddX,groundY(hoddX,hoddZ)+5.25,hoddZ); worldTrunk.rotation.z=-.05; scene.add(worldTrunk);
    for(let i=0;i<8;i++){
      const a=i/8*Math.PI*2+.2,len=(5.0+midHash(i,1401)*4.0);
      const br=new THREE.Mesh(new THREE.CylinderGeometry(.25,.58,len,9),trunkMat); br.position.set(hoddX+Math.cos(a)*len*.36,groundY(hoddX,hoddZ)+6.8+midHash(i,1402)*2.2,hoddZ+Math.sin(a)*len*.36); br.rotation.z=Math.cos(a)*.8;br.rotation.x=Math.sin(a)*.8;br.rotation.y=-a;scene.add(br);
      for(let k=0;k<4;k++){const leaf=new THREE.Mesh(new THREE.SphereGeometry((1.0+midHash(k+i,1403)*.55),9,6),new THREE.MeshStandardMaterial({map:foliageTexture,color:[0x234a31,0x2d5c39,0x386b42][(i+k)%3],roughness:1}));leaf.scale.y=.65;leaf.position.set(hoddX+Math.cos(a)*len*(.48+.09*k)+(midHash(k,i)-.5)*1.1,groundY(hoddX,hoddZ)+8.0+midHash(i,k)*3.0+k*.45,hoddZ+Math.sin(a)*len*(.48+.09*k)+(midHash(k+5,i)-.5)*1.1);scene.add(leaf);}
    }
    // Deeply carved luminous runes on the trunk.
    for(let i=0;i<9;i++){const glyph=['ᚱ','ᛉ','ᛟ','ᚦ','ᚨ','ᚠ','ᚷ','ᛏ','ᚢ'][i];const tex=runeGroundTexture(glyph,i%2?'#63d9ef':'#f0c65d');const q=new THREE.Mesh(new THREE.PlaneGeometry(.7,.9),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,side:THREE.DoubleSide}));q.position.set(hoddX+Math.sin(i*.63)*1.42,groundY(hoddX,hoddZ)+1.0+i*.78,hoddZ+Math.cos(i*.63)*1.42);q.rotation.y=Math.PI*.5-i*.16;scene.add(q);}
    // Sacred stone altar and eternal fire at the roots.
    const altar2=new THREE.Mesh(new THREE.DodecahedronGeometry(1.35,1),mat(0x4f5852,1));altar2.scale.set(1.45,.7,1.15);altar2.position.set(hoddX,groundY(hoddX,hoddZ)+.75,hoddZ+1.6);scene.add(altar2);
    fire(hoddX,hoddZ+2.1,.72);
    const hoddRing=new THREE.Mesh(new THREE.TorusGeometry(6.7,.06,8,64),new THREE.MeshStandardMaterial({color:0x8bcfd1,emissive:0x235f62,emissiveIntensity:1.9,transparent:true,opacity:.62}));hoddRing.rotation.x=Math.PI/2;hoddRing.position.set(hoddX,groundY(hoddX,hoddZ)+.055,hoddZ);scene.add(hoddRing);
    for(let i=0;i<22;i++){const a=midHash(i,1410)*Math.PI*2,rr=1.8+midHash(i,1411)*8.2,x=hoddX+Math.cos(a)*rr,z=hoddZ+Math.sin(a)*rr;addGroundRune(hodd,(x-hoddX),(z-hoddZ),['ᚱ','ᛉ','ᛟ','ᚦ','ᚨ','ᚠ'][i%6],i%2?0x67d3df:0xe0b55a,.35,midHash(i,1412)*Math.PI);}
    // Floating rune motes are intentionally sparse for mobile performance.
    for(let i=0;i<18;i++){const glyph=['ᚱ','ᚨ','ᛟ','ᚦ'][i%4];const tex=runeGroundTexture(glyph,i%2?'#63d9ef':'#e4bd65');const q=new THREE.Mesh(new THREE.PlaneGeometry(.34,.44),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,side:THREE.DoubleSide}));q.position.set(hoddX+(midHash(i,1420)-.5)*12,1.4+midHash(i,1421)*7,hoddZ+(midHash(i,1422)-.5)*12);q.userData.floatPhase=midHash(i,1423)*6;scene.add(q);}
    addMesh(hodd,'hoddmimir','Лес Ходдмимира');objects.push(hodd);addCircleCollider(hoddX,hoddZ,4.7,.08);
    const hoddFallbackVisuals=scene.children.slice(hoddFallbackStart);

    loadGlbWithFolderFallback(hoddmimirAsset,(gltf:any)=>{
      if(!glbTreesAlive)return;
      const model=gltf.scene.clone(true);markMeshes(model);
      model.traverse((o:any)=>{if(!o.isMesh)return;o.visible=true;o.castShadow=true;o.receiveShadow=true;o.frustumCulled=true;});
      model.scale.setScalar(.76);
      model.rotation.set(0,.18,0);
      model.position.set(hoddX,groundY(hoddX,hoddZ),hoddZ);
      model.userData={id:'hoddmimir',label:'Лес Ходдмимира'};
      hoddFallbackVisuals.forEach((o:any)=>o.visible=false);
      addMesh(model,'hoddmimir','Лес Ходдмимира');objects.push(model);
      const glow=new THREE.PointLight(0xffb13c,2.4,18,2);glow.position.set(hoddX,groundY(hoddX,hoddZ)+5,hoddZ+1.5);scene.add(glow);
      console.log('[HODDMIMIR] loaded',`${BASE}img/models/${hoddmimirAsset}`);
    },'HODDMIMIR');

    // The four deer are a deliberate Yggdrasil reference: they roam a separate clearing.    // The four deer are a deliberate Yggdrasil reference: they roam a separate clearing.
    const deerClearingX=43, deerClearingZ=32;
    for(let i=0;i<4;i++) deer(deerClearingX+(i-1.5)*2.8,deerClearingZ+(i%2?2.8:-2.8),1.20+midHash(i,1440)*.18,10+i);
    const deerStone=new THREE.Mesh(new THREE.DodecahedronGeometry(.72,1),mat(0x575d56,1));deerStone.position.set(deerClearingX,groundY(deerClearingX,deerClearingZ)+.5,deerClearingZ);scene.add(deerStone);
    const deerRing=new THREE.Mesh(new THREE.TorusGeometry(5.8,.045,7,48),new THREE.MeshStandardMaterial({color:0x7e8b72,emissive:0x303d2a,emissiveIntensity:.8,transparent:true,opacity:.48}));deerRing.rotation.x=Math.PI/2;deerRing.position.set(deerClearingX,groundY(deerClearingX,deerClearingZ)+.035,deerClearingZ);scene.add(deerRing);
    squirrel(ashGroveX+5,ashGroveZ+1);

    // Forgotten Cache — ornate cyan/gold fantasy chest GLB.
    // Keeps the original interaction id/location while replacing the old hollow-oak visual.
    // This filename is intentionally stable: replace the GLB to iterate on the chest without touching code.
    const forgottenCacheAsset='Midgard_Forgotten_Cache_Chest_V3_YUP.glb';
    const forgottenCacheRoot=new THREE.Group();
    forgottenCacheRoot.userData={id:'forestCache',label:'Забытый тайник'};
    forgottenCacheRoot.position.set(-72,groundY(-72,48),48);
    scene.add(forgottenCacheRoot);
    objects.push(forgottenCacheRoot);

    loadGlbWithFolderFallback(forgottenCacheAsset,(gltf:any)=>{
      const chest=gltf.scene;
      markMeshes(chest);
      chest.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
        const tune=(m:any)=>{
          if(!m)return m;
          const mm=m.clone?m.clone():m;
          const mn=String(mm.name||'');
          if('roughness' in mm && /gold|iron|cyan|crystal|metal/i.test(mn)) mm.roughness=Math.min(mm.roughness??.55,.48);
          if('metalness' in mm && /gold|iron|metal/i.test(mn)) mm.metalness=Math.max(mm.metalness??0,.58);
          if('emissive' in mm && /cyan|crystal|runic|gem|inner/i.test(mn)){
            mm.emissive=new THREE.Color(0x39ccec);
            mm.emissiveIntensity=5.12;
          }
          mm.needsUpdate=true;
          return mm;
        };
        if(Array.isArray(o.material))o.material=o.material.map(tune);else o.material=tune(o.material);
      });
      chest.scale.setScalar(.72);
      chest.rotation.y=2.15;
      chest.position.set(0,0,0);
      chest.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(chest);
      chest.position.y-=bb.min.y;
      chest.updateMatrixWorld(true);
      forgottenCacheRoot.add(chest);
      const cacheGlow=new THREE.PointLight(0x38cfee,2.16,6.5,2);
      cacheGlow.position.set(0,1.15,.45);
      forgottenCacheRoot.add(cacheGlow);
      console.log('[FORGOTTEN CACHE] GLB loaded',forgottenCacheAsset);
    },'FORGOTTEN CACHE');
    addCircleCollider(-72,48,2.15,.08);

    // Right forest expansion: detailed landmark clearings. The goal is a cinematic
    // handcrafted look rather than a ring of identical primitive stones.
    const plankBetween=(a:THREE.Vector3,b:THREE.Vector3,w:number,h:number,material:THREE.Material)=>{
      const d=a.distanceTo(b), m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
      m.position.copy(a).add(b).multiplyScalar(.5);
      m.lookAt(b); return m;
    };
    function irregularRock(g:THREE.Group,x:number,y:number,z:number,s:number,color:number,seed:number){
      const r=new THREE.Mesh(new THREE.DodecahedronGeometry(s,1),mat(color,1));
      r.scale.set(.72+midHash(seed,1)*.62,.55+midHash(seed,2)*.85,.68+midHash(seed,3)*.55);
      r.rotation.set(midHash(seed,4)*1.2,midHash(seed,5)*Math.PI,midHash(seed,6)*1.1); r.position.set(x,y,z); g.add(r); return r;
    }

    const makeFallenAsh=(x:number,z:number)=>{
      const g=new THREE.Group();
      g.position.set(x,groundY(x,z),z);
      g.userData={id:'fallenAsh',label:'Поверженный ясень'};

      const ring=new THREE.Mesh(
        new THREE.TorusGeometry(7.8,.07,8,64),
        new THREE.MeshStandardMaterial({color:0x8b9f87,emissive:0x334633,emissiveIntensity:1.0,transparent:true,opacity:.55})
      );
      ring.rotation.x=Math.PI/2;
      ring.position.y=.05;
      g.add(ring);

      // Brown broken ash stump: low-poly, heavy and old, without the three plank-like pieces on top.
      const fallenBark=new THREE.MeshStandardMaterial({
        map:barkTexture,color:0x6b4128,roughness:1,
        roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.04
      });
      const stump=new THREE.Mesh(new THREE.CylinderGeometry(1.45,2.15,4.9,11),fallenBark);
      stump.position.set(0,2.45,.2);
      stump.rotation.z=-.035;
      g.add(stump);

      // Irregular shattered crown only — no long boards/branches across the top.
      for(let i=0;i<6;i++){
        const a=i/6*Math.PI*2+.15;
        const shard=new THREE.Mesh(new THREE.ConeGeometry(.30,.95+midHash(i,1500)*.75,6),fallenBark);
        shard.position.set(Math.cos(a)*.88,4.95+midHash(i,1501)*.34,.2+Math.sin(a)*.88);
        shard.rotation.z=(midHash(i,1502)-.5)*.32;
        shard.rotation.x=(midHash(i,1503)-.5)*.22;
        g.add(shard);
      }

      // Dark entrance cut into the base of the stump.
      const entrance=new THREE.Mesh(new THREE.BoxGeometry(1.38,2.08,.24),new THREE.MeshBasicMaterial({color:0x080808}));
      entrance.position.set(0,1.20,1.93);
      g.add(entrance);
      const door=new THREE.Mesh(new THREE.BoxGeometry(1.08,1.82,.16),new THREE.MeshStandardMaterial({color:0x050505,roughness:.95}));
      door.position.set(0,1.18,2.08);
      g.add(door);
      const jambMat=mat(0x3f2619,1);
      const lintel=new THREE.Mesh(new THREE.BoxGeometry(1.48,.16,.28),jambMat);lintel.position.set(0,2.10,2.05);g.add(lintel);
      [-.68,.68].forEach(px=>{const j=new THREE.Mesh(new THREE.BoxGeometry(.15,2.04,.28),jambMat);j.position.set(px,1.20,2.05);g.add(j);});
      const handle=new THREE.Mesh(new THREE.SphereGeometry(.07,7,5),mat(0x8a6b3a,.6,.35));
      handle.position.set(.34,1.18,2.18);g.add(handle);

      for(let i=0;i<9;i++){
        const a=midHash(i,1510)*Math.PI*2,rr=1.7+midHash(i,1511)*5.6;
        irregularRock(g,Math.cos(a)*rr,.22,Math.sin(a)*rr,.3+midHash(i,1512)*.45,i%3?0x505852:0x5f645d,1513+i);
      }
      for(let i=0;i<8;i++) addGroundRune(g,(midHash(i,1520)-.5)*5.8,(midHash(i,1521)-.5)*5.8,['ᚦ','ᛉ','ᚱ','ᛟ'][i%4],0x9fd0c4,.42,midHash(i,1522)*Math.PI);

      addMesh(g,'fallenAsh','Поверженный ясень');
      objects.push(g);
      addCircleCollider(x,z,1.8,.08);
      return g;
    };

    const makeForgottenCamp=(x:number,z:number)=>{
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z); g.userData={id:'hunterCamp',label:'Забытая стоянка'};
      const earth=new THREE.Mesh(new THREE.CircleGeometry(8.7,40),new THREE.MeshStandardMaterial({color:0x31382c,roughness:1,transparent:true,opacity:.78}));
      earth.rotation.x=-Math.PI/2; earth.position.y=.025; earth.scale.set(1.18,.92,1); g.add(earth);

      // Collapsed Viking wagon: crooked frame, rotten planks and a broken spoked wheel.
      const wagon=new THREE.Group(); wagon.position.set(-1.45,.05,-.65); wagon.rotation.y=-.34; g.add(wagon);
      const rotten=mat(0x5b3b28,1), darkRotten=mat(0x38271e,1), iron=mat(0x292a28,.82,.35), mossMat=mat(0x43553a,1);
      const bed=box(3.7,.26,1.65,0x60412d,1); bed.position.y=1.05; bed.rotation.z=-.08; wagon.add(bed);
      for(let i=0;i<9;i++){
        const plank=box(2.8+midHash(i,501)*1.1,.16,.26, i%3?0x63452f:0x4b3325,1);
        plank.position.set(-.25+(midHash(i,502)-.5)*.25,1.18+(midHash(i,503)-.5)*.34,-.72+(i%3)*.68);
        plank.rotation.z=(midHash(i,504)-.5)*.16; plank.rotation.y=(midHash(i,505)-.5)*.16; wagon.add(plank);
      }
      for(const [xx,zz,rr] of [[-1.55,-.83,.82],[1.35,-.83,.74]] as Array<[number,number,number]>) {
        const wheel=new THREE.Mesh(new THREE.TorusGeometry(rr,.14,7,20,Math.PI*1.56),iron); wheel.rotation.y=Math.PI/2; wheel.rotation.z=rr>.8?.08:-.18; wheel.position.set(xx,.9,zz); wagon.add(wheel);
        const hub=new THREE.Mesh(new THREE.CylinderGeometry(.15,.18,.28,8),iron); hub.rotation.z=Math.PI/2; hub.position.set(xx,.9,zz); wagon.add(hub);
        for(let k=0;k<6;k++){
          const a=k/6*Math.PI*2+.25; const aa=new THREE.Vector3(xx+Math.cos(a)*rr*.82,.9+Math.sin(a)*rr*.82,zz+.02);
          const bb=new THREE.Vector3(xx,.9,zz+.02); wagon.add(plankBetween(bb,aa,.065,.065,iron));
        }
      }
      const axle=new THREE.Mesh(new THREE.BoxGeometry(3.8,.14,.16),iron); axle.position.set(0,.62,-.83); axle.rotation.z=.08; wagon.add(axle);
      const shaft=new THREE.Mesh(new THREE.BoxGeometry(.16,.18,3.2),rotten); shaft.position.set(1.8,.8,-.35); shaft.rotation.y=.9; wagon.add(shaft);
      for(let i=0;i<6;i++){const moss=new THREE.Mesh(new THREE.SphereGeometry(.28+midHash(i,507)*.18,7,5),mossMat);moss.scale.set(1.4,.32,.7);moss.position.set(-1.1+i*.48,1.34+(i%2)*.05,-.82);wagon.add(moss);}

      // Collapsed teepee-style leather shelter, partially swallowed by the forest.
      const tent=new THREE.Group(); tent.position.set(2.85,.02,1.15); tent.rotation.y=.18; g.add(tent);
      const poles=mat(0x4a3021,1);
      for(let i=0;i<4;i++){const a=i/4*Math.PI*2+.25; const p=box(.11,3.7,.11,0x4a3021,1); p.position.set(Math.cos(a)*1.25,1.65,Math.sin(a)*1.25); p.rotation.z=Math.cos(a)*.34; p.rotation.x=-Math.sin(a)*.34; tent.add(p);}
      const cloth=new THREE.Mesh(new THREE.ConeGeometry(2.0,3.2,4,1,true),new THREE.MeshStandardMaterial({color:0x4a3127,roughness:1,side:THREE.DoubleSide,transparent:true,opacity:.94}));
      cloth.position.y=1.45; cloth.scale.set(1,.9,.82); cloth.rotation.y=.78; tent.add(cloth);
      for(let i=0;i<9;i++){const moss=new THREE.Mesh(new THREE.SphereGeometry(.16+midHash(i,509)*.14,6,5),mossMat);moss.scale.set(1.5,.35,.8);moss.position.set((midHash(i,510)-.5)*2.4,1.0+midHash(i,511)*1.9,(midHash(i,512)-.5)*1.8);tent.add(moss);}
      const flap=box(1.05,1.55,.05,0x2f211c,1); flap.position.set(0,.72,1.65); flap.rotation.y=.16; tent.add(flap);

      // Stone hearth with warm firelight.
      fire(x+.1,z+.45,.78);
      const campLight=new THREE.PointLight(0xff9a45,1.0,8,2); campLight.position.set(.1,1.7,.45); g.add(campLight);

      // Rusted shield with a broken boss and scattered tools.
      const shield=new THREE.Group(); shield.position.set(-3.15,.5,1.25); shield.rotation.y=.8; shield.rotation.z=-.22; g.add(shield);
      const shieldDisc=new THREE.Mesh(new THREE.CircleGeometry(1.05,16),new THREE.MeshStandardMaterial({color:0x3b3c39,roughness:.85,metalness:.55,side:THREE.DoubleSide})); shieldDisc.rotation.x=-Math.PI/2; shieldDisc.scale.y=.8; shield.add(shieldDisc);
      const rim=new THREE.Mesh(new THREE.TorusGeometry(1.03,.11,7,18),iron); rim.rotation.x=-Math.PI/2; rim.scale.y=.8; shield.add(rim);
      const boss=new THREE.Mesh(new THREE.CylinderGeometry(.24,.31,.22,8),iron); boss.rotation.x=Math.PI/2; boss.position.set(.18,0,.08); shield.add(boss);
      const crack=box(.05,.035,1.15,0x171816,1); crack.position.set(-.28,.025,.05); crack.rotation.y=.42; shield.add(crack);

      const toolMat=mat(0x2d2c29,.65,.45);
      const axe=(px:number,pz:number,rot:number)=>{const t=new THREE.Group();t.position.set(px,.18,pz);t.rotation.y=rot;const h=box(.09,.09,1.55,0x4d3322,1);h.rotation.x=Math.PI/2;h.position.z=.15;t.add(h);const head=box(.55,.13,.28,0x30302d,.55);head.position.set(0,.02,-.62);head.rotation.y=-.25;t.add(head);g.add(t);};
      axe(-1.9,3.15,.45); axe(4.15,-.65,-.8);
      const hammer=box(.11,.11,.95,0x523724,1); hammer.rotation.y=.55; hammer.position.set(-2.1,.16,2.65); g.add(hammer);

      // Leather pouch, coins and bones.
      const pouch=new THREE.Mesh(new THREE.SphereGeometry(.48,9,7),new THREE.MeshStandardMaterial({color:0x5b3b27,roughness:1})); pouch.scale.set(.9,1.15,.65); pouch.position.set(3.55,.48,2.65); g.add(pouch);
      const strap=new THREE.Mesh(new THREE.TorusGeometry(.33,.035,6,18,Math.PI*1.5),mat(0x2e2119,1)); strap.rotation.x=Math.PI/2; strap.position.set(3.55,.93,2.65); g.add(strap);
      for(let i=0;i<15;i++){const c=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,.025,10),new THREE.MeshStandardMaterial({color:0x8e7445,metalness:.55,roughness:.45}));const a=midHash(i,520)*Math.PI*2,rr=2.1+midHash(i,521)*3.7;c.position.set(Math.cos(a)*rr,.13,Math.sin(a)*rr);c.rotation.x=Math.PI/2;g.add(c);}
      for(let i=0;i<5;i++){const bone=box(.08,.08,.9,0xaaa28d,1);bone.position.set(3.2+midHash(i,522)*2.4,.18,-2.7+midHash(i,523)*1.7);bone.rotation.y=midHash(i,524)*Math.PI;bone.rotation.z=(midHash(i,525)-.5)*.25;g.add(bone);}

      // Ancient runes etched into the mossy ground.
      const runeRing=new THREE.Mesh(new THREE.TorusGeometry(4.7,.055,7,64),new THREE.MeshBasicMaterial({color:0x8bc5c7,transparent:true,opacity:.5})); runeRing.rotation.x=Math.PI/2; runeRing.position.y=.075; g.add(runeRing);
      const runeGlyphs=["ᚠ","ᚱ","ᛉ","ᚷ","ᛟ","ᚦ","ᛏ","ᚢ"];
      runeGlyphs.forEach((ch,i)=>{const a=i/runeGlyphs.length*Math.PI*2;addGroundRune(g,Math.cos(a)*4.15,Math.sin(a)*4.15,ch,i%3===0?0xc9a55a:0x79b8bd,.55,a+.3);});
      for(let i=0;i<18;i++){const r=irregularRock(g,(midHash(i,530)-.5)*8,.18,(midHash(i,531)-.5)*7,.22+midHash(i,532)*.34, i%4===0?0x5d6658:0x4e544d,530+i);}
      for(let i=0;i<12;i++){const root=box(.12,.12,1.7+midHash(i,535)*2.0,0x3a2a20,1);root.position.set((midHash(i,536)-.5)*8,.11,(midHash(i,537)-.5)*8);root.rotation.y=midHash(i,538)*Math.PI;root.rotation.z=(midHash(i,539)-.5)*.2;g.add(root);}

      addMesh(g,'hunterCamp','Забытая стоянка'); objects.push(g); addCircleCollider(x,z,1.9,.1);
    };

    const makeForestClearing=(x:number,z:number,r:number,id:string,label:string,kind:number)=>{
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z);
      const ringColor=kind===1?0x718e78:kind===2?0x78808a:0x8a765e; const clearingMossMat=mat(0x43553a,1);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.07,8,64),new THREE.MeshStandardMaterial({color:ringColor,emissive:ringColor,emissiveIntensity:.65,transparent:true,opacity:.42}));
      ring.rotation.x=Math.PI/2; ring.position.y=.045; g.add(ring);
      const count=Math.floor(r/1.7);
      for(let i=0;i<count;i++){
        const a=midHash(i,x*11+z)*Math.PI*2, rr=r*.35+midHash(i,z*17)*r*.45;
        irregularRock(g,Math.cos(a)*rr,.2,Math.sin(a)*rr,.34+midHash(i,33)*.32,kind===1?0x505c52:kind===2?0x50575b:0x574a3c,800+i);
      }
      if(kind===1){
        for(let i=0;i<8;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.34+midHash(i,600)*.25,7,5),clearingMossMat);m.scale.y=.35;m.position.set((midHash(i,601)-.5)*r,.16,(midHash(i,602)-.5)*r);g.add(m);}
        for(let i=0;i<6;i++) addGroundRune(g,(midHash(i,603)-.5)*r*.9,(midHash(i,604)-.5)*r*.9,["ᛉ","ᚱ","ᚦ","ᚨ","ᛟ","ᚠ"][i],0x78a8a4,.42,midHash(i,605)*Math.PI);
      }
      if(kind===2){
        // A dead ash silhouette with a hollow center and broken branches.
        const stump=new THREE.Mesh(new THREE.CylinderGeometry(1.45,2.0,4.6,9),new THREE.MeshStandardMaterial({map:barkTexture,color:0x5a4a38,roughness:1})); stump.position.set(0,2.25,0); stump.rotation.z=.08; g.add(stump);
        const hollow=new THREE.Mesh(new THREE.SphereGeometry(.72,10,8),new THREE.MeshBasicMaterial({color:0x171714})); hollow.scale.set(1,.8,.45); hollow.position.set(0,1.75,1.32); g.add(hollow);
        for(let i=0;i<5;i++){const br=box(.22,.24,2.8+midHash(i,610)*1.7,0x4a392d,1);br.position.set((midHash(i,611)-.5)*2.0,3.7+midHash(i,612)*1.8,(midHash(i,613)-.5)*1.7);br.rotation.y=midHash(i,614)*Math.PI;br.rotation.z=(midHash(i,615)-.5)*.65;g.add(br);}
        addGroundRune(g,0,0,"ᚦ",0xd0b56d,.95,.15);
      }
      addMesh(g,id,label); objects.push(g);
    };

    makeForgottenCamp(68,8);
    // Deep Grove — restore the treehouse version.
    const deepGroveAsset='Midgard_Deep_Grove_Treehouse_V1_YUP.glb';
    const deepGroveX=-45,deepGroveZ=75;
    const deepGroveRoot=new THREE.Group();
    deepGroveRoot.userData={id:'deepGrove',label:'Глубокая роща'};
    deepGroveRoot.position.set(deepGroveX,groundY(deepGroveX,deepGroveZ),deepGroveZ);

    const deepGroveFloor=new THREE.Mesh(
      new THREE.CircleGeometry(8.8,44),
      new THREE.MeshStandardMaterial({color:0x2f412e,roughness:1,transparent:true,opacity:.78})
    );
    deepGroveFloor.rotation.x=-Math.PI/2;
    deepGroveFloor.position.y=.02;
    deepGroveRoot.add(deepGroveFloor);

    loadGlbWithFolderFallback(deepGroveAsset,(gltf:any)=>{
      const grove=gltf.scene;
      markMeshes(grove);
      grove.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;

        const applyDeepGroveLook=(m:any)=>{
          if(!m)return m;
          const mm=m.clone?m.clone():m;
          const mn=String(mm.name||'').toLowerCase();

          // Ancient ash: 50% darker trunk / bark.
          if(/bark|trunk|root|branch/.test(mn) && mm.color){
            mm.color.multiplyScalar(.50);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.9,.92);
          }

          // Tree house: about 30% darker overall.
          if(/cabin|house|wood|platform|balcony|ladder|foundation/.test(mn) && mm.color){
            mm.color.multiplyScalar(.70);
          }

          // Deep natural green roof.
          if(/roof|shingle/.test(mn) && mm.color){
            mm.color.set(0x2f6b3a);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.85,.90);
          }

          // Dark red door.
          if(/door/.test(mn) && mm.color){
            mm.color.set(0x8f2f26);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.8,.88);
            if('metalness' in mm) mm.metalness=0;
          }

          mm.needsUpdate=true;
          return mm;
        };

        if(Array.isArray(o.material))o.material=o.material.map(applyDeepGroveLook);
        else o.material=applyDeepGroveLook(o.material);
      });

      grove.scale.setScalar(.86);
      grove.rotation.y=-.38;
      grove.position.set(0,0,0);
      grove.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(grove);
      grove.position.y-=bb.min.y;
      deepGroveRoot.add(grove);
      console.log('[DEEP GROVE] Treehouse GLB restored',deepGroveAsset);
    },'DEEP GROVE');

    scene.add(deepGroveRoot);
    objects.push(deepGroveRoot);
    addCircleCollider(deepGroveX,deepGroveZ,2.7,.08);
    // Fallen Ash now uses the controlled procedural stump above.
    // The older GLB is intentionally not loaded because its upper pieces read as wooden planks.
    const fallenAshFallback=makeFallenAsh(-30,15);

    // ---------------------------------------------------------------------------
    // Sacred locations: Well of the Three Norns, Circle of Power,
    // and Whispering Stone. These are deliberately built from low-poly organic
    // forms, emissive rune planes, curves and point lights so they remain mobile
    // friendly while giving each place a strong magical identity.
    // ---------------------------------------------------------------------------
    const runeGlowTexture=(glyph:string,color:string)=>{
      const c=document.createElement("canvas"); c.width=c.height=256; const ctx=c.getContext("2d")!;
      ctx.clearRect(0,0,256,256); ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.shadowColor=color; ctx.shadowBlur=24; ctx.fillStyle=color; ctx.font="bold 156px serif"; ctx.fillText(glyph,128,132);
      ctx.shadowBlur=6; ctx.globalAlpha=.72; ctx.font="bold 126px serif"; ctx.fillText(glyph,128,132);
      const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=4; return t;
    };
    const addFloatingRune=(g:THREE.Group,glyph:string,x:number,y:number,z:number,color:number,size=.7,rot=0)=>{
      const hex="#"+color.toString(16).padStart(6,"0");
      const m=new THREE.MeshBasicMaterial({map:runeGlowTexture(glyph,hex),transparent:true,depthWrite:false,side:THREE.DoubleSide});
      const q=new THREE.Mesh(new THREE.PlaneGeometry(size,size),m); q.position.set(x,y,z); q.rotation.set(0,rot,0); g.add(q); return q;
    };
    const addMagicThread=(g:THREE.Group,points:THREE.Vector3[],color:number,thickness=.075)=>{
      const curve=new THREE.CatmullRomCurve3(points);
      const tube=new THREE.Mesh(new THREE.TubeGeometry(curve,42,thickness,6,false),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.9}));
      g.add(tube);
      const glow=new THREE.Mesh(new THREE.TubeGeometry(curve,42,thickness*2.5,6,false),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.12,depthWrite:false}));
      g.add(glow); return tube;
    };

    // «Разорванная нить» удалена полностью.



    // 1) WELL OF THE THREE NORNS ------------------------------------------------
    const threeNornsWellAsset='Midgard_Well_Three_Norns_V1_YUP.glb';
    const threeThreads=new THREE.Group();
    const threeThreadsX=58, threeThreadsZ=-28;
    threeThreads.position.set(threeThreadsX,groundY(threeThreadsX,threeThreadsZ),threeThreadsZ);
    threeThreads.userData={id:"threeThreads",label:"Колодец Трёх Норн"};

    // Soft sacred clearing under the GLB.
    const nornsWellGround=new THREE.Mesh(
      new THREE.CircleGeometry(9.2,48),
      new THREE.MeshStandardMaterial({
        color:0x344b32,
        roughness:1,
        transparent:true,
        opacity:.72
      })
    );
    nornsWellGround.rotation.x=-Math.PI/2;
    nornsWellGround.position.y=.018;
    threeThreads.add(nornsWellGround);

    loadGlbWithFolderFallback(threeNornsWellAsset,(gltf:any)=>{
      const well=gltf.scene;
      markMeshes(well);

      well.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;

        const tune=(m:any)=>{
          if(!m)return m;
          const mm=m.clone?m.clone():m;
          const mn=String(mm.name||'').toLowerCase();

          // Keep the reference palette: dark old stone, moss, warm amber light.
          if(/ancient_stone/.test(mn) && mm.color){
            mm.color.multiplyScalar(.82);
            if('roughness' in mm) mm.roughness=Math.max(mm.roughness??.9,.94);
          }
          if(/moss/.test(mn) && mm.color){
            mm.color.set(0x415d32);
          }
          if(/well_inner_glow|well_glow_hot|inner_glow_core/.test(mn)){
            if('color' in mm) mm.color.set(/hot|core/.test(mn)?0xffc65a:0xff9a22);
            if('emissive' in mm){
              mm.emissive=new THREE.Color(/hot|core/.test(mn)?0xff9d1c:0xff6b10);
              mm.emissiveIntensity=/hot|core/.test(mn)?2.5:1.7;
            }
          }
          mm.needsUpdate=true;
          return mm;
        };

        if(Array.isArray(o.material))o.material=o.material.map(tune);
        else o.material=tune(o.material);
      });

      well.scale.setScalar(.95);
      well.rotation.y=.18;
      well.position.set(0,0,0);
      well.updateMatrixWorld(true);

      const bb=new THREE.Box3().setFromObject(well);
      well.position.y-=bb.min.y;
      well.updateMatrixWorld(true);

      threeThreads.add(well);

      // The model materials glow, and this warm point light makes the well itself
      // cast a visible amber light onto nearby stone and ground.
      const innerLight=new THREE.PointLight(0xff8a1f,2.2,12,2);
      innerLight.position.set(0,2.0,0);
      threeThreads.add(innerLight);

      const softLight=new THREE.PointLight(0xffd36b,.65,7,2);
      softLight.position.set(0,3.8,0);
      threeThreads.add(softLight);

      console.log('[THREE NORNS WELL] GLB loaded',threeNornsWellAsset);
    },'THREE NORNS WELL');

    scene.add(threeThreads);
    objects.push(threeThreads);
    addCircleCollider(threeThreadsX,threeThreadsZ,3.4,.1);

    // 2) CIRCLE OF POWER --------------------------------------------------------
    const powerCircle=new THREE.Group();
    const powerX=5, powerZ=-70;
    powerCircle.position.set(powerX,groundY(powerX,powerZ),powerZ);
    powerCircle.userData={id:"powerCircle",label:"Круг Силы"};
    const powerGround=new THREE.Mesh(new THREE.CircleGeometry(10.8,48),new THREE.MeshStandardMaterial({color:0x1d2b26,roughness:1,transparent:true,opacity:.94}));
    powerGround.rotation.x=-Math.PI/2; powerGround.position.y=.02; powerCircle.add(powerGround);
    for(const [r,w,c,op] of [[3.2,.075,0xd47cff,.8],[6.2,.06,0x6a9cff,.68],[9.2,.045,0xb77dff,.58]] as Array<[number,number,number,number]>) {
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,w,8,96),new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:op,depthWrite:false}));
      ring.rotation.x=Math.PI/2; ring.position.y=.07; powerCircle.add(ring);
    }
    for(let i=0;i<20;i++){
      const a=i/20*Math.PI*2,rr=5.1+(i%2)*2.2;
      addGroundRune(powerCircle,Math.cos(a)*rr,Math.sin(a)*rr,fieldGlyphs[(i+2)%fieldGlyphs.length],i%2?0x8b78ff:0x63dff4,.38,a+.2);
    }
    const monolith=new THREE.Mesh(new THREE.DodecahedronGeometry(1.25,1),new THREE.MeshStandardMaterial({color:0x25292b,roughness:.9,metalness:.16}));
    monolith.scale.set(.9,2.8,.7); monolith.position.y=2.45; monolith.rotation.set(.05,.2,-.08); powerCircle.add(monolith);

    // Large golden Sowilo/Sowilo rune on the central monolith.
    const monolithRune=addFloatingRune(powerCircle,"ᛊ",.18,2.65,1.03,0xffd34f,1.82,.20);
    monolithRune.scale.set(1.0,1.30,1.0);
    monolithRune.material.blending=THREE.AdditiveBlending;
    (monolithRune.material as THREE.MeshBasicMaterial).toneMapped=false;
    monolithRune.renderOrder=9;

    const monolithRuneLight=new THREE.PointLight(0xffc83d,.95,5.5,2);
    monolithRuneLight.position.set(.18,2.7,1.25);
    powerCircle.add(monolithRuneLight);

    const powerLight=new THREE.PointLight(0x9c6cff,1.45,10,2); powerLight.position.set(0,2.5,.8); powerCircle.add(powerLight);
    for(let i=0;i<12;i++){
      const a=i/12*Math.PI*2,rr=4.1+midHash(i,1801)*4.5;
      const r=irregularRock(powerCircle,Math.cos(a)*rr,.3,Math.sin(a)*rr,.42+midHash(i,1802)*.42,i%3===0?0x59635d:0x4a514c,1803+i);
      if(i%4===0){const crystal=new THREE.Mesh(new THREE.ConeGeometry(.18,.9,5),new THREE.MeshBasicMaterial({color:i%2?0x8e74ff:0x69ddff,transparent:true,opacity:.75}));crystal.position.set(r.position.x,.62,r.position.z);powerCircle.add(crystal);}
    }
    for(let i=0;i<9;i++){
      const a=midHash(i,1820)*Math.PI*2,rr=2.2+midHash(i,1821)*6.7;
      const dust=new THREE.Mesh(new THREE.SphereGeometry(.045+midHash(i,1822)*.04,6,5),new THREE.MeshBasicMaterial({color:i%2?0x72e9ff:0xb27dff,transparent:true,opacity:.7}));
      dust.position.set(Math.cos(a)*rr,.4+midHash(i,1823)*2.6,Math.sin(a)*rr); powerCircle.add(dust);
    }
    addMesh(powerCircle,"powerCircle","Круг Силы"); objects.push(powerCircle); addCircleCollider(powerX,powerZ,2.2,.1);

    // 3) WHISPERING STONE -------------------------------------------------------
    // The old black stone is replaced by a bright amber crystal cluster.
    const whisperCrystalAsset='Midgard_Whisper_Amber_Crystal_V1_YUP.glb';
    const whisperStone=new THREE.Group();
    const whisperX=-72, whisperZ=-48;
    whisperStone.position.set(whisperX,groundY(whisperX,whisperZ),whisperZ);
    whisperStone.userData={id:"whisperStone",label:"Камень Шёпота"};

    const whisperGround=new THREE.Mesh(
      new THREE.CircleGeometry(8.6,40),
      new THREE.MeshStandardMaterial({color:0x241b14,roughness:1,transparent:true,opacity:.92})
    );
    whisperGround.rotation.x=-Math.PI/2;
    whisperGround.position.y=.02;
    whisperStone.add(whisperGround);

    const whisperRing=new THREE.Mesh(
      new THREE.TorusGeometry(5.8,.09,8,96),
      new THREE.MeshBasicMaterial({color:0xffa52f,transparent:true,opacity:.72,depthWrite:false})
    );
    whisperRing.rotation.x=Math.PI/2;
    whisperRing.position.y=.075;
    whisperStone.add(whisperRing);

    // Outer stones stay as a landmark threshold around the new crystal.
    for(let i=0;i<11;i++){
      const a=midHash(i,1920)*Math.PI*2,rr=4.8+midHash(i,1921)*2.6;
      irregularRock(whisperStone,Math.cos(a)*rr,.2,Math.sin(a)*rr,.28+midHash(i,1922)*.38,0x45433f,1923+i);
    }

    loadGlbWithFolderFallback(whisperCrystalAsset,(gltf:any)=>{
      const crystal=gltf.scene;
      markMeshes(crystal);
      crystal.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;
        const tune=(m:any)=>{
          if(!m)return m;
          const mm=m.clone?m.clone():m;
          const mn=String(mm.name||'');
          if('roughness' in mm && /amber|crystal|core/i.test(mn)) mm.roughness=Math.min(mm.roughness??.25,.24);
          if(/amber|crystal|core/i.test(mn)){
            // Keep the crystal visibly ORANGE instead of blowing out toward white.
            if('color' in mm) mm.color=new THREE.Color(/core|hot/i.test(mn)?0xff8a18:0xe9680e);
            if('emissive' in mm){
              mm.emissive=new THREE.Color(/core|hot/i.test(mn)?0xff6a00:0xd94d00);
              mm.emissiveIntensity=/core|hot/i.test(mn)?1.65:1.15;
            }
          }
          mm.needsUpdate=true;
          return mm;
        };
        if(Array.isArray(o.material))o.material=o.material.map(tune);else o.material=tune(o.material);
      });
      crystal.scale.setScalar(1.05);
      crystal.rotation.y=.42;
      crystal.position.set(0,0,0);
      crystal.updateMatrixWorld(true);
      const bb=new THREE.Box3().setFromObject(crystal);
      crystal.position.y-=bb.min.y;
      whisperStone.add(crystal);

      const crystalLight=new THREE.PointLight(0xff6a00,1.65,9,2);
      crystalLight.position.set(0,2.5,.35);
      whisperStone.add(crystalLight);
      console.log('[WHISPER CRYSTAL] GLB loaded',whisperCrystalAsset);
    },'WHISPER CRYSTAL');

    addMesh(whisperStone,"whisperStone","Камень Шёпота");
    objects.push(whisperStone);
    addCircleCollider(whisperX,whisperZ,2.5,.1);

    // STEP 9 — LANDMARK IDENTITY -------------------------------------------------
    // Give each major sacred place a distinct visual "threshold" so landmarks feel
    // embedded in the landscape rather than simply placed on top of it. Everything
    // here is low-poly and intentionally lightweight for mobile rendering.
    const landmarkThreshold=(x:number,z:number,glyph:string,accent:number,style:'grove'|'rune'|'fate'|'shadow'|'power'='rune')=>{
      const g=new THREE.Group();
      g.position.set(x,groundY(x,z),z);

      const floorColor=style==='shadow'?0x202821:style==='power'?0x20242b:style==='fate'?0x2c302d:0x304333;
      const floor=new THREE.Mesh(new THREE.CircleGeometry(style==='grove'?9.8:7.8,40),new THREE.MeshStandardMaterial({color:floorColor,roughness:1,transparent:true,opacity:.68}));
      floor.rotation.x=-Math.PI/2; floor.position.y=.025; g.add(floor);

      const ring=new THREE.Mesh(new THREE.TorusGeometry(style==='grove'?7.2:5.8,.045,7,64),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:style==='shadow'?.32:.46,depthWrite:false}));
      ring.rotation.x=Math.PI/2; ring.position.y=.055; g.add(ring);

      // Two asymmetric marker stones create a recognizable entrance silhouette.
      for(const side of [-1,1]){
        const rock=new THREE.Mesh(new THREE.DodecahedronGeometry(.48+midHash(side+Math.round(x),Math.round(z))*0.22,1),new THREE.MeshStandardMaterial({color:style==='shadow'?0x303638:0x59615a,roughness:1}));
        rock.scale.set(.8,1.65,.72);
        rock.position.set(side*2.35,.62,style==='grove'?-.15:.35);
        rock.rotation.set(.05,side*.28,-side*.10);
        g.add(rock);
        const rune=addFloatingRune(g,glyph,side*2.35,1.25,.73,accent,.34,side*.08);
        rune.rotation.x=0;
      }

      // Small embedded fragments point toward the center and visually connect the approach path.
      for(let i=0;i<8;i++){
        const a=-Math.PI/2+(i-3.5)*.16;
        const rr=2.8+Math.abs(i-3.5)*.42;
        const shard=new THREE.Mesh(new THREE.DodecahedronGeometry(.11+midHash(i,2200+Math.round(x))*.07,0),new THREE.MeshStandardMaterial({color:accent,emissive:accent,emissiveIntensity:.65,roughness:.72}));
        shard.position.set(Math.cos(a)*rr,.08,Math.sin(a)*rr);
        g.add(shard);
      }

      addMesh(g,`threshold_${style}_${Math.round(x)}_${Math.round(z)}`,`Порог: ${glyph}`);
      scene.add(g);
    };

    // Each landmark receives its own framing treatment and rune, with no new gameplay object.
    landmarkThreshold(ashGroveX,ashGroveZ,'ᚱ',0x8fe6a4,'grove');
    landmarkThreshold(hoddX,hoddZ,'ᛉ',0xe0b55a,'grove');
    landmarkThreshold(-72,48,'ᚠ',0xe2bd61,'shadow');
    landmarkThreshold(58,-28,'ᛟ',0xf0c65e,'fate');
    landmarkThreshold(5,-70,'ᛟ',0x8d78ff,'power');
    landmarkThreshold(-72,-48,'ᚨ',0x9b72ff,'shadow');
    landmarkThreshold(50,-62,'ᛏ',0x8fc6d7,'fate');
    landmarkThreshold(-52,38,'ᛜ',0xd7ae61,'fate');

    // The hero's home is deliberately a SMALL personal cabin just beyond the hunter camp.
    // It is visually distinct from the larger village houses: lower walls, a compact turf roof,
    // a short porch and a modest fenced yard. This is the hero's own dwelling, not another NPC house.
    const heroHomeX=80, heroHomeZ=30;
    const heroCabin=new THREE.Group();
    heroCabin.position.set(heroHomeX,groundY(heroHomeX,heroHomeZ),heroHomeZ);
    const cabinStoneMat=mat(0x5b5a53,1);
    // Build the cabin as real wall segments, leaving a physical doorway in the front wall.
    // This makes the transition into the interior possible without teleporting through a solid box.
    const foundation=box(7.8,.42,5.8,0x55534d,1); foundation.position.y=.22; heroCabin.add(foundation);
    const backWall=box(7.4,2.8,.30,0x62432f,1); backWall.position.set(0,1.4,-2.7); heroCabin.add(backWall);
    const leftWall=box(.30,2.8,5.4,0x62432f,1); leftWall.position.set(-3.7,1.4,0); heroCabin.add(leftWall);
    const rightWall=box(.30,2.8,5.4,0x62432f,1); rightWall.position.set(3.7,1.4,0); heroCabin.add(rightWall);
    const frontLeft=box(2.55,2.8,.30,0x62432f,1); frontLeft.position.set(-2.43,1.4,2.7); heroCabin.add(frontLeft);
    const frontRight=box(2.55,2.8,.30,0x62432f,1); frontRight.position.set(2.43,1.4,2.7); heroCabin.add(frontRight);
    const frontTop=box(2.3,.72,.30,0x62432f,1); frontTop.position.set(0,2.44,2.7); heroCabin.add(frontTop);
    const doorFrameL=box(.16,2.18,.34,0x2b211b,1); doorFrameL.position.set(-.66,1.28,2.72); heroCabin.add(doorFrameL);
    const doorFrameR=box(.16,2.18,.34,0x2b211b,1); doorFrameR.position.set(.66,1.28,2.72); heroCabin.add(doorFrameR);
    const doorFrameTop=box(1.48,.16,.34,0x2b211b,1); doorFrameTop.position.set(0,2.34,2.72); heroCabin.add(doorFrameTop);
    // Door on a hinge: it visibly swings open before the hero enters.
    const doorPivot=new THREE.Group(); doorPivot.position.set(-.57,0,2.72); heroCabin.add(doorPivot);
    const cabinDoor=box(1.14,2.05,.12,0x302219,1); cabinDoor.position.set(.57,1.28,0); doorPivot.add(cabinDoor);
    const doorHandle=new THREE.Mesh(new THREE.SphereGeometry(.08,8,6),mat(0xb48a4b,1)); doorHandle.position.set(.86,1.25,.10); doorPivot.add(doorHandle);
    const windowMat=new THREE.MeshStandardMaterial({color:0xd39b4f,emissive:0x9a5c20,emissiveIntensity:1.25,roughness:.45});
    for(const px of [-2.35,2.35]){
      const winFrame=box(1.25,1.0,.12,0x2b211b,1); winFrame.position.set(px,1.72,2.78); heroCabin.add(winFrame);
      const win=new THREE.Mesh(new THREE.BoxGeometry(.98,.72,.06),windowMat); win.position.set(px,1.72,2.86); heroCabin.add(win);
      const v=box(.07,.78,.1,0x2b211b,1); v.position.set(px,1.72,2.91); heroCabin.add(v);
      const h=box(1.08,.07,.1,0x2b211b,1); h.position.set(px,1.72,2.91); heroCabin.add(h);
    }
    const cabinRoofMat=new THREE.MeshStandardMaterial({map:roofTex,color:0x292a27,roughness:.98,side:THREE.DoubleSide});
    const roofL=new THREE.Mesh(new THREE.PlaneGeometry(4.25,6.25),cabinRoofMat);
    const roofR=new THREE.Mesh(new THREE.PlaneGeometry(4.25,6.25),cabinRoofMat);
    roofL.rotation.x=Math.PI/2; roofR.rotation.x=Math.PI/2; roofL.rotation.z=.62; roofR.rotation.z=-.62;
    roofL.position.set(-1.02,3.95,0); roofR.position.set(1.02,3.95,0); heroCabin.add(roofL,roofR);
    const cabinRidge=box(.22,.22,6.45,0x29231d,1); cabinRidge.position.y=4.75; heroCabin.add(cabinRidge);
    const chimney=new THREE.Mesh(new THREE.BoxGeometry(.48,1.35,.48),cabinStoneMat); chimney.position.set(1.55,4.8,-.65); heroCabin.add(chimney);
    const chimneyCap=box(.62,.10,.62,0x34312d,1); chimneyCap.position.set(1.55,5.48,-.65); heroCabin.add(chimneyCap);
    const porch=box(2.35,.18,1.0,0x65452d,1); porch.position.set(0,.62,3.15); heroCabin.add(porch);
    const porchStep=box(1.55,.16,.48,0x59402b,1); porchStep.position.set(0,.30,3.58); heroCabin.add(porchStep);
    addMesh(heroCabin,'heroHome','Домик героя'); objects.push(heroCabin);

    // Reference-driven hero house GLB. The procedural cabin stays as a fallback
    // until this asset loads successfully. The interactive hinged door is preserved.
    let heroHouseModel: THREE.Object3D | null = null;
    loadGlbWithFolderFallback(heroHouseAsset, (gltf:any) => {
      if (!glbTreesAlive) return;

      // Hide the old exterior only after the GLB is definitely available.
      heroCabin.children.forEach((child) => {
        if (child !== doorPivot) child.visible = false;
      });

      const house = gltf.scene.clone(true);
      markMeshes(house);
      house.traverse((o:any) => {
        if (!o.isMesh) return;
        o.visible = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = true;
      });

      // Model was built Y-up, front facing +Z, sized to the existing home footprint.
      house.scale.setScalar(0.98);
      house.position.set(0, 0, 0);
      house.rotation.set(0, 0, 0);

      heroCabin.add(house);
      heroHouseModel = house;
      console.log('[HERO HOUSE] loaded', `${BASE}img/models/${heroHouseAsset}`);
    }, 'HERO HOUSE');
    // Exterior collision follows the actual walls and leaves the doorway open.
    addRectCollider(heroHomeX,heroHomeZ-2.72,7.4,.30,0,.05);
    addRectCollider(heroHomeX-3.72,heroHomeZ,.30,5.45,0,.05);
    addRectCollider(heroHomeX+3.72,heroHomeZ,.30,5.45,0,.05);
    addRectCollider(heroHomeX-2.43,heroHomeZ+2.72,2.55,.30,0,.05);
    addRectCollider(heroHomeX+2.43,heroHomeZ+2.72,2.55,.30,0,.05);

    // Interior: a real small room occupying the same 3D space. The roof is hidden while inside
    // so the follow camera can see the room instead of clipping through the ceiling.
    const homeInterior=new THREE.Group(); homeInterior.position.set(heroHomeX,groundY(heroHomeX,heroHomeZ),heroHomeZ); homeInterior.visible=false;
    const floor=box(7.0,.16,5.0,0x4b3424,1); floor.position.y=.50; homeInterior.add(floor);
    const innerBack=box(7.0,2.65,.18,0x3f2b20,1); innerBack.position.set(0,1.8,-2.45); homeInterior.add(innerBack);
    const innerLeft=box(.18,2.65,4.9,0x3f2b20,1); innerLeft.position.set(-3.45,1.8,0); homeInterior.add(innerLeft);
    const innerRight=box(.18,2.65,4.9,0x3f2b20,1); innerRight.position.set(3.45,1.8,0); homeInterior.add(innerRight);
    const innerFrontL=box(2.35,2.65,.18,0x3f2b20,1); innerFrontL.position.set(-2.42,1.8,2.45); homeInterior.add(innerFrontL);
    const innerFrontR=box(2.35,2.65,.18,0x3f2b20,1); innerFrontR.position.set(2.42,1.8,2.45); homeInterior.add(innerFrontR);
    const rug=box(2.5,.04,2.1,0x6d4b31,1); rug.position.set(-.15,.60,.25); homeInterior.add(rug);
    const bed=box(1.65,.65,2.15,0x3d2a1e,1); bed.position.set(-2.15,.88,-1.25); homeInterior.add(bed);
    const blanket=box(1.48,.12,1.35,0x6b5140,1); blanket.position.set(-2.15,1.27,-.92); homeInterior.add(blanket);
    const pillow=box(1.28,.18,.46,0xb5a08a,1); pillow.position.set(-2.15,1.38,-1.95); homeInterior.add(pillow);
    const interiorTable=box(1.65,.12,1.05,0x503321,1); interiorTable.position.set(.85,1.15,-.15); homeInterior.add(interiorTable);
    for(const [x,z] of [[.2,-.15],[1.5,-.15],[.2,.55],[1.5,.55]]){const leg=box(.10,.7,.10,0x38251b,1);leg.position.set(x,.72,z);homeInterior.add(leg);}
    const chest=box(1.25,.8,.72,0x5b3a24,1); chest.position.set(2.1,.95,-1.7); homeInterior.add(chest);
    const shelf=box(1.9,.14,.45,0x5b3a24,1); shelf.position.set(1.35,2.0,-2.25); homeInterior.add(shelf);
    for(const x of [.75,1.35,1.95]){const bottle=new THREE.Mesh(new THREE.CylinderGeometry(.08,.1,.35,8),mat(0x6f7350,1));bottle.position.set(x,2.24,-2.22);homeInterior.add(bottle);}
    const hearthStone=box(1.35,.55,.7,0x5a554e,1); hearthStone.position.set(2.15,.78,.95); homeInterior.add(hearthStone);
    const hearthFire=new THREE.Mesh(new THREE.ConeGeometry(.28,.72,8),new THREE.MeshStandardMaterial({color:0xff8128,emissive:0xff4d0a,emissiveIntensity:4})); hearthFire.position.set(2.15,1.42,.95); homeInterior.add(hearthFire);
    const hearthLight=new THREE.PointLight(0xff8a3c,2.2,8,2); hearthLight.position.set(2.15,1.7,.95); homeInterior.add(hearthLight);
    addMesh(homeInterior,'heroHomeInterior','Дом героя — внутри'); objects.push(homeInterior);

    const heroYard=new THREE.Group();
    heroYard.position.set(heroHomeX,groundY(heroHomeX,heroHomeZ),heroHomeZ);
    const yardRing=new THREE.Mesh(new THREE.TorusGeometry(6.2,.055,7,48),new THREE.MeshStandardMaterial({color:0x76624c,emissive:0x211b15,emissiveIntensity:.25,transparent:true,opacity:.5}));
    yardRing.rotation.x=Math.PI/2; yardRing.position.y=.035; heroYard.add(yardRing);
    // Low fence leaves the cabin visually open and avoids the heavy log-pile look.
    for(const [fx,fz] of [[-5.1,-2.4],[5.1,-2.4],[-5.1,2.9],[5.1,2.9]]){
      const post=box(.18,1.0,.18,0x493527,1); post.position.set(fx,.50,fz); heroYard.add(post);
    }
    for(const fz of [-2.4,2.9]){const rail=box(10.2,.12,.12,0x60412b,1);rail.position.set(0,.59,fz);heroYard.add(rail);}
    const pathStoneMat=mat(0x69645c,1);
    for(let i=0;i<7;i++){const st=new THREE.Mesh(new THREE.CylinderGeometry(.32,.40,.12,7),pathStoneMat);st.position.set(0,.08,4.1+i*.72);st.rotation.y=i*.4;heroYard.add(st);}
    const homeHearth=fire(heroHomeX-2.4,heroHomeZ+4.8,.48); homeHearth.scale.setScalar(.72);
    addMesh(heroYard,'heroHomeYard','Двор домика героя'); objects.push(heroYard);


    // ===== DENSE FOG-EDGE FOREST — CORRECTED POSITION =====
    // Mountains are at negative Z (around -94), so the dense forest belongs
    // at the FAR/NORTH edge of Midgard, directly in front of the mountain fog.
    // Each slot contains ONLY ONE tree: spruce OR oak, never both.
    const fogForestSlots: Array<{x:number; z:number; seed:number; kind:'spruce'|'oak'}> = [];

    // Three staggered rows between the playable clearing and the mountains.
    // Grid spacing prevents trunks from spawning inside each other.
    const fogRows = [-69, -76, -83];
    let fogSeed = 0;

    for (let row=0; row<fogRows.length; row++) {
      const zBase = fogRows[row];
      for (let col=0; col<29; col++) {
        const seed = fogSeed++;
        const xBase = -82 + col * 5.85 + (row % 2 ? 2.9 : 0);
        let x = xBase + (midHash(seed, 4101) - .5) * 1.45;
        let z = zBase + (midHash(seed, 4102) - .5) * 2.2;

        // Keep the Circle of Power visually open: any fog-forest tree that would
        // stand directly in front of the central monolith is transplanted sideways,
        // not deleted.
        const powerTreeDist=Math.hypot(x-5,z+70);
        if(powerTreeDist<7.6){
          x += x<5 ? -10.5 : 10.5;
          z += 1.8;
        }

        if (x < -84 || x > 84) continue;

        // Keep several irregular view corridors so the forest has natural gaps.
        const gapLeft   = x > -42 && x < -33 && z > -80;
        const gapMiddle = x >  3 && x <  12 && z < -72;
        const gapRight  = x > 47 && x <  57 && z > -81;
        if (gapLeft || gapMiddle || gapRight) continue;

        // The river crosses this northern belt near x≈-57.
        // Leave a wide wooded river opening instead of growing trees in water.
        const riverX = -57 + Math.sin(((z + 94) / 6) * .42) * 4.2;
        if (Math.abs(x - riverX) < 8.0) continue;

        // One type per slot. Oaks are roughly one quarter of this distant forest.
        const kind: 'spruce'|'oak' =
          midHash(seed, 4103) < .27 ? 'oak' : 'spruce';

        fogForestSlots.push({x,z,seed,kind});
      }
    }

    const addCorrectFogForest = (
      source: THREE.Object3D,
      kind: 'spruce'|'oak'
    ) => {
      fogForestSlots.forEach((slot) => {
        if (slot.kind !== kind) return;

        const tree = source.clone(true);
        markMeshes(tree);

        // Wide size variation, but distant oaks stay a little smaller so their
        // crowns do not swallow the whole horizon.
        const sizeRnd = midHash(slot.seed, kind === 'spruce' ? 4110 : 4120);
        const scale = kind === 'spruce'
          ? 0.52 + sizeRnd * 0.56
          : 0.38 + sizeRnd * 0.42;

        tree.scale.setScalar(scale);
        tree.rotation.set(0, midHash(slot.seed, 4130) * Math.PI * 2, 0);

        tree.traverse((o:any) => {
          if (!o.isMesh) return;
          o.visible = true;
          o.castShadow = true;
          o.receiveShadow = true;
          o.frustumCulled = true;
        });

        // Snap the actual model bottom to terrain after scaling.
        tree.position.set(0,0,0);
        tree.updateMatrixWorld(true);
        const b = new THREE.Box3().setFromObject(tree);
        tree.position.set(slot.x, groundY(slot.x,slot.z) - b.min.y, slot.z);
        tree.updateMatrixWorld(true);

        scene.add(tree);
        glbTreeInstances.push(tree);
      });
    };

    // Spruces: dark distant backbone.
    loadGlbWithFolderFallback(treeAsset, (gltf:any) => {
      const source = gltf.scene.clone(true);
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        const adapt = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.72);
          if ('roughness' in mm) mm.roughness = 0.97;
          if ('metalness' in mm) mm.metalness = 0;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(adapt);
        else o.material = adapt(o.material);
      });
      addCorrectFogForest(source, 'spruce');
    }, 'FAR FOG FOREST SPRUCE');

    // Oaks: fewer and broader, but never share coordinates with spruces.
    loadGlbWithFolderFallback(oakAsset, (gltf:any) => {
      const source = gltf.scene.clone(true);
      source.traverse((o:any) => {
        if (!o.isMesh) return;
        const adapt = (m:any) => {
          if (!m) return m;
          const mm = m.clone ? m.clone() : m;
          if (mm.color?.multiplyScalar) mm.color.multiplyScalar(0.64);
          if ('roughness' in mm) mm.roughness = 0.98;
          if ('metalness' in mm) mm.metalness = 0;
          mm.needsUpdate = true;
          return mm;
        };
        if (Array.isArray(o.material)) o.material = o.material.map(adapt);
        else o.material = adapt(o.material);
      });
      addCorrectFogForest(source, 'oak');
    }, 'FAR FOG FOREST OAK');

    // Small landmarks inside the clearings.
    const campFire=fire(68,8,.75); campFire.scale.setScalar(.72);
    const campStone=new THREE.Mesh(new THREE.CylinderGeometry(.65,.8,.7,7),mat(0x514a42,1)); campStone.position.set(68,groundY(68,8)+.35,6.5); scene.add(campStone);
    for(const [x,z] of [[66,10],[70,10],[66,6],[70,6]]){const post=box(.16,1.15,.16,0x493527,1);post.position.set(x,groundY(x,z)+.57,z);scene.add(post);}
    // Extra loose fallen trunk removed; the dedicated Fallen Ash landmark remains.
    for(let i=0;i<7;i++){const rune=new THREE.Mesh(new THREE.DodecahedronGeometry(.14,0),mat(0x697d72,1));const a=i/7*Math.PI*2;rune.position.set(-45+Math.cos(a)*4,.12+groundY(-45+Math.cos(a)*4,75+Math.sin(a)*4),75+Math.sin(a)*4);scene.add(rune);}

    // The old procedural fir forest has been removed. Real GLB trees above now form the visible spruce layer.
    // Sacred ash trees remain temporarily because they are landmarks; they will be replaced by real assets later.

    // Three ash trees mark important places in Midgard; the largest is the village's
    // symbolic "ash of memory", a visual hint toward Yggdrasil.
    // Procedural ash trees are disabled in this GLB test pass.


    // Small grass clumps and ferns break up the flat ground while staying cheap on mobile.
    for(let i=0;i<110;i++){
      const a=midHash(i,701)*Math.PI*2,r=15+midHash(i,702)*50,x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<10&&Math.abs(z)<16) continue;
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      for(let k=0;k<3;k++){const blade=new THREE.Mesh(new THREE.ConeGeometry(.025,.38+midHash(k,i)*.28,4),new THREE.MeshStandardMaterial({color:k===1?0x53683f:0x415a37,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.012}));blade.position.set((k-1)*.09,.18,(midHash(k*3,i)-.5)*.12);blade.rotation.z=(k-1)*.22;g.add(blade);}
      scene.add(g);
      windPlants.push({o:g,baseX:0,baseZ:0,phase:midHash(i,703)*Math.PI*2,amp:.018+.016*midHash(i,704)});
    }

    for(let i=0;i<80;i++){const x=-88+midHash(i,101)*176,z=-88+midHash(i,111)*176;if(Math.hypot(x,z+2)>30){const grass=new THREE.Mesh(new THREE.ConeGeometry(.08,.55+midHash(i,121)*.7,5),new THREE.MeshStandardMaterial({color:0x4b6840,roughness:1,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.012}));grass.position.set(x,groundY(x,z)+.3,z);scene.add(grass); windPlants.push({o:grass,baseX:0,baseZ:0,phase:midHash(i,122)*Math.PI*2,amp:.014+.012*midHash(i,123)});}}

    // Set dressing: small embedded stones, fallen twigs and mossy fragments.
    // Sparse by design, so the large open spaces remain readable.
    for(let i=0;i<72;i++){
      const x=-84+midHash(i,150)*168, z=-82+midHash(i,151)*164;
      const nearVillage=Math.hypot(x-1,z+1)<24;
      const nearLandmark=[[18,55,15],[-65,5,13],[43,32,14],[62,78,12],[-45,75,13],[5,-70,14],[-72,-48,13],[-30,15,10]].some(([rx,rz,rr])=>Math.hypot(x-rx,z-rz)<rr);
      if(nearVillage||nearLandmark) continue;
      const s=.10+midHash(i,152)*.24;
      const rock=new THREE.Mesh(
        new THREE.DodecahedronGeometry(s,1),
        new THREE.MeshStandardMaterial({color:i%3===0?0x555b54:0x66665d,roughness:.98,roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.018})
      );
      rock.scale.set(1.0+midHash(i,153)*1.3,.55+midHash(i,154)*.7,.72+midHash(i,155)*1.15);
      rock.rotation.set(midHash(i,156)*1.7,midHash(i,157)*Math.PI,midHash(i,158)*1.7);
      rock.position.set(x,groundY(x,z)+s*.22,z);
      rock.castShadow=true; rock.receiveShadow=true; scene.add(rock);
    }

    // Fallen ground twigs removed to keep paths and house yards clean.

    // Step 4 — natural ground detail: moss, ferns, exposed roots and small woodland debris.
    // These are intentionally sparse and lightweight so the wide clearings remain readable.
    const mossMatA=new THREE.MeshStandardMaterial({
      color:0x6f8651,roughness:1,roughnessMap:surfaceMaps.rough,
      bumpMap:surfaceMaps.height,bumpScale:.008
    });
    const mossMatB=new THREE.MeshStandardMaterial({
      color:0x81935b,roughness:1,roughnessMap:surfaceMaps.rough,
      bumpMap:surfaceMaps.height,bumpScale:.006
    });
    const rootMat=new THREE.MeshStandardMaterial({
      map:barkTexture,color:0x5a402d,roughness:.99,
      roughnessMap:surfaceMaps.rough,bumpMap:surfaceMaps.height,bumpScale:.026
    });

    // Flat irregular moss islands: a few overlapping discs give the ground a softer,
    // organic transition instead of a repeated geometric patch.
    for(let i=0;i<54;i++){
      const a=midHash(i,920)*Math.PI*2,r=18+midHash(i,921)*63;
      const x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<12&&Math.abs(z)<20) continue;
      const g=new THREE.Group();g.position.set(x,groundY(x,z)+.018,z);
      const rx=.35+midHash(i,922)*.75, rz=.28+midHash(i,923)*.65;
      for(let k=0;k<2;k++){
        const patch=new THREE.Mesh(new THREE.CircleGeometry(1,9),k%2?mossMatB:mossMatA);
        patch.rotation.x=-Math.PI/2;
        patch.scale.set(rx*(1-k*.18),rz*(1-k*.12),1);
        patch.position.set((midHash(i+k,924)-.5)*.32,.006+k*.003,(midHash(i+k,925)-.5)*.28);
        g.add(patch);
      }
      scene.add(g);
    }

    // Small fern clusters. Three curved-ish fronds around one center make a readable
    // silhouette without using expensive foliage models.
    const fernMatA=new THREE.MeshStandardMaterial({color:0x547044,roughness:1});
    const fernMatB=new THREE.MeshStandardMaterial({color:0x6f8751,roughness:1});
    for(let i=0;i<72;i++){
      const a=midHash(i,930)*Math.PI*2,r=20+midHash(i,931)*61;
      const x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<13&&Math.abs(z)<21) continue;
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      const s=.55+midHash(i,932)*.8;
      for(let k=0;k<3;k++){
        const frond=new THREE.Mesh(new THREE.CylinderGeometry(.018*s,.035*s,.55*s,5),k===1?fernMatB:fernMatA);
        frond.position.set((k-1)*.12*s,.27*s,(midHash(i,k+933)-.5)*.10*s);
        frond.rotation.z=(k-1)*.30;
        frond.rotation.x=(midHash(i,k+936)-.5)*.22;
        g.add(frond);
        for(let q=0;q<3;q++){
          const leaf=new THREE.Mesh(new THREE.ConeGeometry(.045*s,.18*s,5),k===1?fernMatB:fernMatA);
          leaf.rotation.z=(k-1)*.30+(q%2?.18:-.18);
          leaf.rotation.x=Math.PI*.5;
          leaf.position.set((k-1)*.12*s+(q-1)*.075*s,.30*s+q*.10*s,(midHash(i,q+940)-.5)*.12*s);
          g.add(leaf);
        }
      }
      scene.add(g);
      windPlants.push({o:g,baseX:0,baseZ:0,phase:midHash(i,941)*Math.PI*2,amp:.022+.018*midHash(i,942)});
    }

    // Loose exposed-root clusters removed: without their old ash trunks they read as log debris.

    // A handful of low stumps and old branches add scale at the player's feet.
    for(let i=0;i<22;i++){
      const a=midHash(i,960)*Math.PI*2,r=27+midHash(i,961)*55;
      const x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<15&&Math.abs(z)<22) continue;
      const s=.55+midHash(i,962)*.8;
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      const stump=new THREE.Mesh(new THREE.CylinderGeometry(.18*s,.30*s,.45*s,7),rootMat);
      stump.position.y=.22*s;g.add(stump);
      const top=new THREE.Mesh(new THREE.CylinderGeometry(.19*s,.19*s,.035*s,7),mat(0x806b50,1));
      top.position.y=.45*s;g.add(top);
      scene.add(g);
    }

    // Loose old branches removed from the ground around settlement paths.

    // A small watchtower gives vertical scale and a visible landmark.
    const tower=new THREE.Group();tower.position.set(29,groundY(29,25),25);tower.userData={id:"tower",label:"Сторожевая башня"};for(const px of [-2,2])for(const pz of [-2,2]){const p=box(.35,7,.35,0x3c291d,1);p.position.set(px,3.5,pz);tower.add(p);}const deck=box(5,.35,5,0x68472d,1);deck.position.y=5.8;tower.add(deck);const roofT=new THREE.Mesh(new THREE.ConeGeometry(3.8,2.7,4),mat(0x292522,1));roofT.position.y=8;tower.add(roofT);addMesh(tower,"tower","Сторожевая башня");objects.push(tower);
    addRectCollider(29,25,4.8,4.8,0,.08);

    // NPCs with simple wandering paths.
    const npc=(x:number,z:number,id:string,label:string,color:number,phase:number)=>{const g=new THREE.Group();g.userData={id,label,phase,baseX:x,baseZ:z};const body=new THREE.Mesh(new THREE.CapsuleGeometry(.32,.78,4,8),mat(color,.9));body.position.y=.85;g.add(body);const head=new THREE.Mesh(new THREE.SphereGeometry(.25,12,8),mat(0xc99470,.9));head.position.y=1.58;g.add(head);const cloak=box(.7,.9,.15,0x27251f,1);cloak.position.set(0,.82,-.27);g.add(cloak);g.position.set(x,groundY(x,z),z);addMesh(g,id,label);objects.push(g);npcs.push(g);};
    npc(9,-8,"elder","Старейшина",0x73563f,.4);npc(-6,-3,"blacksmith","Кузнец",0x5c3b2b,1.5);npc(21,1,"hunter","Охотник",0x40523f,2.4);npc(5,10,"villager","Житель Мидгарда",0x59634d,3.4);npc(-16,4,"villager2","Житель деревни",0x654b3a,4.2);

    // Tiny pollen motes drift through the air. One shared Points object keeps draw calls low.
    const moteCount=72;
    const motePos=new Float32Array(moteCount*3);
    for(let i=0;i<moteCount;i++){
      const a=midHash(i,1401)*Math.PI*2,r=12+midHash(i,1402)*74;
      motePos[i*3]=Math.cos(a)*r; motePos[i*3+1]=1.0+midHash(i,1403)*4.8; motePos[i*3+2]=Math.sin(a)*r+3;
    }
    const moteGeo=new THREE.BufferGeometry();
    moteGeo.setAttribute('position',new THREE.Float32BufferAttribute(motePos,3));
    const moteMat=new THREE.PointsMaterial({color:0xf0dfae,size:.075,transparent:true,opacity:.24,depthWrite:false,sizeAttenuation:true});
    const motes=new THREE.Points(moteGeo,moteMat);
    scene.add(motes);

    // Real GLB hero. Keep the old procedural figure only as a safe loading fallback.
    const hero=new THREE.Group();
    scene.add(hero);

    const heroFallback=midHero3d(h);
    hero.add(heroFallback);
    let heroAnim:any=heroFallback.userData.anim;

    const heroAsset=skin==="valkyrie"
      ? "Midgard_Hero_Valkyrie_Skin_V3_Textured_YUP.glb"
      : "Midgard_Hero_Viking_Skin_V3_Textured_YUP.glb";

    loadGlbWithFolderFallback(heroAsset,(gltf:any)=>{
      const model=gltf.scene;
      markMeshes(model);
      model.traverse((o:any)=>{
        if(!o.isMesh)return;
        o.castShadow=true;
        o.receiveShadow=true;

        // Default weapon is already a separate named part in each GLB.
        if(/^DefaultWeapon_/.test(String(o.name||""))){
          o.visible=weapon==="default";
        }
      });

      // About twice the old on-screen hero height while keeping a human silhouette.
      model.scale.setScalar(.86);
      model.rotation.y=0;
      model.position.set(0,0,0);
      model.updateMatrixWorld(true);

      // Snap feet to the hero root.
      const bb=new THREE.Box3().setFromObject(model);
      model.position.y-=bb.min.y;
      model.updateMatrixWorld(true);

      hero.add(model);
      heroFallback.visible=false;

      const armL=model.getObjectByName("Arm_L_Pivot") as THREE.Object3D | null;
      const armR=model.getObjectByName("Arm_R_Pivot") as THREE.Object3D | null;
      const legL=model.getObjectByName("Leg_L_Pivot") as THREE.Object3D | null;
      const legR=model.getObjectByName("Leg_R_Pivot") as THREE.Object3D | null;
      const weaponSocket=model.getObjectByName("WeaponSocket_R") as THREE.Object3D | null;

      if(armL&&armR&&legL&&legR){
        const dummyL=new THREE.Object3D();
        const dummyR=new THREE.Object3D();
        heroAnim={
          armL:{upper:armL,elbow:dummyL},
          armR:{upper:armR,elbow:dummyR},
          legL,
          legR,
          weapon:weaponSocket||new THREE.Object3D(),
          phase:skin==="valkyrie"?1.2:0
        };
      }

      console.log("[HERO GLB] loaded",heroAsset);
    },"HERO GLB");

    const ray=new THREE.Raycaster();const pointer=new THREE.Vector2();
    const click=(e:PointerEvent)=>{if((e.target as HTMLElement)?.closest?.(".mid3d-ui"))return;const r=renderer.domElement.getBoundingClientRect();pointer.x=((e.clientX-r.left)/r.width)*2-1;pointer.y=-((e.clientY-r.top)/r.height)*2+1;ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(objects,true)[0];if(hit){let o:any=hit.object;while(o.parent&&!o.userData?.id)o=o.parent;if(o.userData?.id){if(o.userData.id==="gate")gateActionRef.current?.();else on(o.userData.id);}}};
    renderer.domElement.addEventListener("pointerup",click);

    const setHomeMode=(inside:boolean)=>{
      insideHomeRef.current=inside;
      setInsideHome(inside);
      setNear("");
      homeInterior.visible=inside;
      // Hide the GLB exterior while inside. If the GLB failed to load, preserve
      // the original procedural roof behavior as a safe fallback.
      if(heroHouseModel){
        heroHouseModel.visible=!inside;
        roofL.visible=false; roofR.visible=false; cabinRidge.visible=false; chimney.visible=false; chimneyCap.visible=false;
      }else{
        roofL.visible=!inside; roofR.visible=!inside; cabinRidge.visible=!inside; chimney.visible=!inside; chimneyCap.visible=!inside;
      }
      if(inside){
        state.current.x=heroHomeX; state.current.z=heroHomeZ+0.95; cameraDir.current.x=0; cameraDir.current.z=-1;
        doorPivot.rotation.y=-Math.PI/2;
      }else{
        state.current.x=heroHomeX; state.current.z=heroHomeZ+3.75; cameraDir.current.x=0; cameraDir.current.z=1;
        doorPivot.rotation.y=0;
      }
      hero.position.set(state.current.x,groundY(state.current.x,state.current.z)+.04,state.current.z);
    };
    homeActionRef.current=setHomeMode;

    const destinations=[
      {id:"house",label:"Дом старейшины",x:13,z:-18,r:5.2},{id:"forge",label:"Кузница",x:-10,z:-5,r:5.4},
      {id:"mimir",label:"Колодец Мимира",x:1,z:0,r:4.8},{id:"norns",label:"Прядильня норн",x:-52,z:38,r:5.4},
      {id:"rune",label:"Древний камень Феху",x:50,z:60,r:4.5},{id:"port",label:"Речной мост",x:-57,z:-48,r:6},
      {id:"ashgrove",label:"Роща Ясеня",x:-5,z:75,r:7.5},{id:"threeThreads",label:"Колодец Трёх Норн",x:58,z:-28,r:6.8},{id:"forestCache",label:"Забытый тайник",x:-72,z:48,r:4.2},
      {id:"runefield",label:"Поле Рун",x:18,z:55,r:8.0},{id:"oldfarm",label:"Старый хутор",x:-65,z:5,r:6.0},{id:"deer",label:"Поляна Четырёх Оленей",x:43,z:32,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:62,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:68,z:8,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:-45,z:75,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:-30,z:15,r:7.5},{id:"powerCircle",label:"Круг Силы — Монолит",x:5,z:-70,r:6.5},{id:"whisperStone",label:"Камень Шёпота",x:-72,z:-48,r:6.5},
      {id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},
      {id:"gate",label:"Ворота Мидгарда",x:0,z:44,r:6},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}
    ];

    const resize=()=>{const w=Math.max(1,el.clientWidth),hh=Math.max(1,el.clientHeight);camera.aspect=w/hh;camera.updateProjectionMatrix();renderer.setSize(w,hh,false);};resize();const observer=new ResizeObserver(resize);observer.observe(el);
    let raf=0,last=performance.now();
    const loop=(now:number)=>{
      const dt=Math.min(.05,(now-last)/1000);last=now;const q=state.current;const l=Math.hypot(q.dx,q.dz);

      // Gate sequence: remove the crossbar first, then swing both leaves.
      const gateTarget=villageGateOpenRef.current?1:0;
      villageGateProgress=THREE.MathUtils.clamp(villageGateProgress+(gateTarget>villageGateProgress?1:-1)*dt*.72,0,1);
      const barT=THREE.MathUtils.smoothstep(villageGateProgress,0,.42);
      const doorT=THREE.MathUtils.smoothstep(villageGateProgress,.32,1);
      gateLeftPivot.rotation.y=-doorT*1.42;
      gateRightPivot.rotation.y=doorT*1.42;
      villageGateBar.position.x=-barT*5.05;
      villageGateBar.position.y=groundY(0,gateFrontZ)+2.32-barT*.78;
      villageGateBar.position.z=gateFrontZ+.72+barT*.52;
      villageGateBar.rotation.z=-barT*.28;
      if(l>.05){
        const step=6.2*dt;
        moveWithCollision(q,q.x+(q.dx/l)*step,q.z+(q.dz/l)*step);
        hero.rotation.y=Math.atan2(q.dx,q.dz);
        cameraDir.current.x=q.dx/l;
        cameraDir.current.z=q.dz/l;
        setMoving(true);
      }else setMoving(false);
      const hy=groundY(q.x,q.z);
      hero.position.set(q.x,hy+.04,q.z);
      if(heroAnim){
        const walkT=now*.011+heroAnim.phase;
        const stride=l>.05?Math.sin(walkT)*0.58:0;
        const armSwing=l>.05?Math.sin(walkT+Math.PI)*0.42:0;
        heroAnim.legL.rotation.x=stride;
        heroAnim.legR.rotation.x=-stride;
        heroAnim.armL.upper.rotation.x=armSwing;
        heroAnim.armR.upper.rotation.x=-armSwing;
        heroAnim.armL.elbow.rotation.x=-Math.abs(armSwing)*.35;
        heroAnim.armR.elbow.rotation.x=-Math.abs(armSwing)*.35;
        heroAnim.weapon.rotation.z=-0.12+(l>.05?Math.sin(walkT)*.035:0);
      }
      // Keep the camera direction stable when the thumb is released. The old camera
      // used dx/dz directly, so stopping movement instantly changed its target and
      // produced the visible screen jump/bounce on mobile.
      const cd=cameraDir.current;
      const target=insideHomeRef.current
        ? new THREE.Vector3(q.x-cd.x*1.0,hy+3.65,q.z-cd.z*1.0)
        : new THREE.Vector3(q.x-cd.x*2.0,hy+7.2,q.z-cd.z*2.0+11.8);
      camera.position.lerp(target,insideHomeRef.current?.09:.055);
      camera.lookAt(q.x+(insideHomeRef.current?cd.x*.9:cd.x*1.9),hy+(insideHomeRef.current?1.25:1.2),q.z+(insideHomeRef.current?cd.z*.9:cd.z*1.9));
      let found="",foundId="";
      if(insideHomeRef.current){
        if(q.z>heroHomeZ+1.72){found="Дверь — выйти из дома";foundId="heroHomeExit";}
      } else {
        for(const d of destinations){if(Math.hypot(q.x-d.x,q.z-d.z)<d.r){found=d.label;foundId=d.id;break;}}
      }
      setNear(found?`${found}|${foundId}`:"");
      // Slow, irregular wind keeps the vegetation subtly alive.
      windFoliage.forEach((w,i)=>{
        const sway=Math.sin(now*.00125+w.phase)*w.amp + Math.sin(now*.00063+w.phase*1.7+i)*w.amp*.45;
        w.o.rotation.x=w.baseX+sway*.75; w.o.rotation.z=w.baseZ+sway;
      });
      windPlants.forEach((w,i)=>{
        const sway=Math.sin(now*.0017+w.phase)*w.amp + Math.sin(now*.00091+w.phase*1.9+i)*w.amp*.5;
        w.o.rotation.x=w.baseX+sway*.55; w.o.rotation.z=w.baseZ+sway;
      });
      for(let i=0;i<moteCount;i++){
        const j=i*3,phase=i*.73;
        motePos[j]+=Math.sin(now*.00022+phase)*.0018;
        motePos[j+1]+=Math.sin(now*.00047+phase*1.3)*.0010;
        motePos[j+2]+=Math.cos(now*.00019+phase)*.0015;
      }
      moteGeo.attributes.position.needsUpdate=true;
      moteMat.opacity=.19+.07*(.5+.5*Math.sin(now*.00055));

      ripples.forEach((r)=>{const pulse=.72+.28*Math.sin(now*.0016+r.phase);r.mesh.scale.set(pulse,pulse*.42,pulse);const m=r.mesh.material as THREE.MeshBasicMaterial;m.opacity=.055+.055*(.5+.5*Math.sin(now*.0016+r.phase));});
      currentStreaks.forEach((r)=>{const drift=Math.sin(now*.00055*r.speed+r.phase)*.9;r.mesh.position.y=groundY(r.mesh.position.x,r.mesh.position.z)+.095+drift*.008;const m=r.mesh.material as THREE.MeshBasicMaterial;m.opacity=.045+.045*(.5+.5*Math.sin(now*.0011*r.speed+r.phase));});

      fires.forEach(f=>{f.light.intensity=2.0+Math.sin(now*.012+f.phase)*.5;f.flame.scale.y=.9+Math.sin(now*.009+f.phase)*.12;});
      wildlife.forEach((w,i)=>{
        if(w.kind==='deer'){
          const dx=w.g.position.x-hero.position.x, dz=w.g.position.z-hero.position.z, dist=Math.hypot(dx,dz);
          if(dist<11){
            const legJoints=(w.g.userData?.legJoints||[]) as THREE.Object3D[];
            const gait=now*.014*(w.speed||1);
            for(let li=0;li<4;li++){
              const upper=legJoints[li*2], lower=legJoints[li*2+1];
              if(upper) upper.rotation.z=Math.sin(gait+li*Math.PI)*.10;
              if(lower) lower.rotation.z=Math.max(0,Math.sin(gait+li*Math.PI))*-.18;
            }
            const len=Math.max(.001,dist);
            const step=dist<5.5?.115:.075;
            const nx=w.g.position.x+(dx/len)*step, nz=w.g.position.z+(dz/len)*step;
            const bx=nx-30,bz=nz-53,br=Math.hypot(bx,bz);
            if(br<17){w.g.position.set(nx,groundY(nx,nz),nz);} else {
              const ang=Math.atan2(bz,bx); const rx=30+Math.cos(ang)*16, rz=53+Math.sin(ang)*10; w.g.position.set(rx,groundY(rx,rz),rz);
            }
            w.g.rotation.y=Math.atan2(dz,dx); w.g.position.y+=Math.sin(now*.008+i)*.025; return;
          }
        }
        const ang=now*.00105*w.speed+w.phase;const nx=w.x+Math.cos(ang)*w.r,nz=w.z+Math.sin(ang*.83)*w.r*.62;w.g.position.set(nx,groundY(nx,nz),nz);w.g.rotation.y=Math.atan2(Math.cos(ang*.83),-Math.sin(ang));
        if(w.kind==='deer'){
          const legJoints=(w.g.userData?.legJoints||[]) as THREE.Object3D[];
          const gait=now*.014*(w.speed||1);
          for(let li=0;li<4;li++){
            const upper=legJoints[li*2], lower=legJoints[li*2+1];
            if(upper) upper.rotation.z=Math.sin(gait+li*Math.PI)*.10;
            if(lower) lower.rotation.z=Math.max(0,Math.sin(gait+li*Math.PI))*-.18;
          }
          w.g.position.y+=Math.sin(now*.006+i)*.025;
          w.g.rotation.x=Math.sin(now*.004+w.phase)*.018;
        }
      });
      npcs.forEach((n,i)=>{const phase=n.userData.phase||0;const bx=n.userData.baseX,bz=n.userData.baseZ;const nx=bx+Math.sin(now*.00028+phase)*1.6,nz=bz+Math.cos(now*.00022+phase)*1.1;n.position.set(nx,groundY(nx,nz),nz);n.rotation.y=Math.sin(now*.0004+phase)*.5;});
      lightPools.forEach((m,i)=>{
        const p=m.material as THREE.MeshBasicMaterial;
        p.opacity = 0.48 + Math.sin(now*0.00055 + i*1.7)*0.07;
        m.rotation.z += Math.sin(now*0.00018+i)*0.00008;
      });
      renderer.render(scene,camera);raf=requestAnimationFrame(loop);
    };
    raf=requestAnimationFrame(loop);

    return()=>{glbTreesAlive=false;glbTreeInstances.forEach((tree)=>scene.remove(tree));glbTreeInstances.length=0;cancelAnimationFrame(raf);observer.disconnect();renderer.domElement.removeEventListener("pointerup",click);ripples.forEach(r=>{r.mesh.geometry.dispose();(r.mesh.material as THREE.Material).dispose();});currentStreaks.forEach(r=>{r.mesh.geometry.dispose();(r.mesh.material as THREE.Material).dispose();});groundTexture.dispose();woodTex.dispose();roofTex.dispose();lightPoolTex.dispose();lightPoolMat.dispose();lightPools.forEach(m=>{m.geometry.dispose();(m.material as THREE.Material).dispose();});renderer.dispose();moteGeo.dispose();moteMat.dispose();scene.traverse((o:any)=>{if(o.isMesh){o.geometry?.dispose?.();if(Array.isArray(o.material))o.material.forEach((m:any)=>m.dispose?.());else o.material?.dispose?.();}});renderer.domElement.remove();homeActionRef.current=null;gateActionRef.current=null;};
  },[h.id,on,eventDone]);

  const joyMove=(e:React.PointerEvent)=>{const a=joy.current,b=knob.current;if(!a||!b)return;const r=a.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,max=48;let x=e.clientX-cx,y=e.clientY-cy;const l=Math.hypot(x,y);if(l>max){x=x/l*max;y=y/l*max;}b.style.transform=`translate(${x}px,${y}px)`;state.current.dx=x/max;state.current.dz=y/max;};
  const stopJoy=()=>{if(knob.current)knob.current.style.transform="translate(0,0)";state.current.dx=0;state.current.dz=0;};
  // Keep the visible joystick compact, but give it a much larger invisible touch zone.
  // This makes it comfortable to start steering with a thumb slightly above the circle.
  const startJoyFromZone=(e:React.PointerEvent<HTMLDivElement>)=>{const a=joy.current;if(!a)return;const target=e.target as HTMLElement;if(target.closest?.(".mid3d-action")||target.closest?.(".mid3d-interact"))return;const r=a.getBoundingClientRect();const pad=26,up=78,down=26;const inside=e.clientX>=r.left-pad&&e.clientX<=r.right+pad&&e.clientY>=r.top-up&&e.clientY<=r.bottom+down;if(!inside)return;e.currentTarget.setPointerCapture(e.pointerId);joyMove(e);};
  const moveJoyFromZone=(e:React.PointerEvent<HTMLDivElement>)=>{if(e.currentTarget.hasPointerCapture(e.pointerId))joyMove(e);};
  const endJoyFromZone=(e:React.PointerEvent<HTMLDivElement>)=>{if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);stopJoy();};

  return <div className="content mid3d-scene" ref={mount} style={{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}} onPointerDown={startJoyFromZone} onPointerMove={moveJoyFromZone} onPointerUp={endJoyFromZone} onPointerCancel={endJoyFromZone} onContextMenu={e=>e.preventDefault()}>
    <div className="mid3d-ui mid3d-top"><div className="mid3d-pill"><b>МИДГАРД</b><span>Деревня • река • лес • святилища</span></div><div className="mid3d-pill"><b>ᛟ</b><span>Мир живёт вокруг тебя</span></div></div>
    {forestEventOpen&&!eventDone&&<div className="mid3d-ui mid3d-interact" style={{bottom:"14%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,390px)",zIndex:31}}>
      <b>ᛟ Колодец Трёх Норн</b>
      <span>В глубине колодца горит тёплое сияние. Серебряная, золотая и алая нити сходятся над водой, связывая прошлое, настоящее и будущее.</span>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:past")}}>ᛁ Прошлое — узнать, что здесь произошло</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:present")}}>ᛏ Настоящее — принять знак таким, какой он есть</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:future")}}>ᛉ Будущее — последовать за нитью, которую ещё не видно</button>
    </div>}
    {forestEventOpen&&eventDone&&<div className="mid3d-ui mid3d-interact" style={{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30}}>
      <b>Колодец Трёх Норн</b><span>Ты уже выбрал свою нить. Вода и три нити помнят этот выбор.</span>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>setForestEventOpen(false)}>Продолжить путь</button>
    </div>}
    {ritualOpen&&<div className="mid3d-ui mid3d-interact" style={{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30}}>
      <b>🜂 Круг Силы</b>
      <span>Древние камни отвечают на твоё присутствие. Выбери один путь.</span>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:mimir")}}>🧠 Око Мимира — открыть скрытое</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:norn")}}>🧵 Нить Норн — избежать одной судьбы</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:ash")}}>🌿 Дыхание Ясеня — +25 здоровья в следующем бою</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:fire")}}>🔥 Огненный обет — +5 к следующему удару</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:ice")}}>❄️ Ледяной обет — ослабить первый удар врага</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setRitualOpen(false);on("ritual:ygg")}}>🌳 Зов Иггдрасиля — пережить смертельный удар</button>
    </div>}
    {near&&!ritualOpen&&!forestEventOpen&&(()=>{const [label,id]=near.split("|");const home=id==="heroHome"||id==="heroHomeExit";const villageGate=id==="gate";return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>{villageGate?(villageGateOpen?"Створки открыты, тяжёлый засов снят":"Ворота заперты большим деревянным засовом"):home?(id==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода"):"Ты достаточно близко"}</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>{if(id==="powerCircle")setRitualOpen(true);else if(id==="threeThreads")setForestEventOpen(true);else if(id==="heroHome")homeActionRef.current?.(true);else if(id==="heroHomeExit")homeActionRef.current?.(false);else if(id==="gate")gateActionRef.current?.();else on(id);}}>{villageGate?(villageGateOpen?"Закрыть ворота и поставить засов":"Снять засов и открыть ворота"):home?(id==="heroHome"?"Открыть дверь и войти":"Выйти наружу"):"Взаимодействовать"}</button></div>;})()}
    <div className="mid3d-ui mid3d-joy" ref={joy}><div className="mid3d-knob" ref={knob}/></div>
    <button className="mid3d-ui mid3d-action" onPointerDown={e=>e.stopPropagation()} onClick={()=>on("event")}>ᚠ</button>
    <div className="mid3d-ui mid3d-hint">{insideHome?(moving?"Ты внутри дома":"Дом героя • отдых • сундук • выход"):moving?"Исследуй Мидгард":"Ворота • площадь • кузница • Мимир • норны • лес"}</div>
  </div>;
}

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
  const watchGain = () => Math.floor(Math.min(12, (Date.now() - save.watch) / 3600000) * 3);
  const collectWatch = () => { const g = watchGain(); if (g <= 0) { say("Дозор только начался — искры ещё копятся."); return; } setSave(s => ({ ...s, sparks: s.sparks + g, watch: Date.now() })); haptic("success"); say("Дозор завершён: +" + g + " ✨"); };
  const claimGift = () => { if (save.gift === today()) return; const d = save.gift ? Math.round((Date.parse(today()) - Date.parse(save.gift)) / 86400000) : 99; const next = d <= 2 ? (save.streak % 7) + 1 : 1; const rew = LADDER[next - 1]; setSave(s => ({ ...s, sparks: s.sparks + rew, gift: today(), streak: next })); haptic("success"); say("Дар Древа, день " + next + ": +" + rew + " ✨"); };
  const confirmHero = () => { if (!pick || !pickName) return; setSave(s => ({ ...s, hero: { id: pick, name: pickName } })); haptic("success"); say("Путь начинается, " + pickName + "!"); setScreen({ t: "tree" }); };
  const heroDef = save.hero ? HEROES.find(h => h.id === save.hero!.id)! : null;
  const rnd = (n: number) => Math.floor(Math.random() * n);
  const trialIdx = (id: string) => save.trials.filter(t => t.startsWith(id + ":")).length;
  const openGate = (r: Realm) => { if (save.artifacts.includes(r.id)) { say("Мир покорён. Артефакт хранится в листе героя."); return; } haptic(); setScreen({ t: "trial", id: r.id }); };
  const finishTrial = (id: string, idx: number, add: number) => {
    const art = idx === 2;
    setSave(s => ({ ...s, sparks: s.sparks + add + (art ? 30 : 0), trials: [...s.trials, id + ":" + idx], artifacts: art ? [...s.artifacts, id] : s.artifacts }));
    if (art) { haptic("success"); say("Мир пройден! Артефакт: " + ARTIFACTS[id]); }
  };
  const answer = (id: string, ai: number) => {
    if (res !== null) return;
    const idx = trialIdx(id); const q = QUESTS[id][idx];
    if (ai === q.c) {
      setRes(ai); haptic("success");
      const add = 12 + idx * 3 + (heroDef?.id === "dwarf" ? 6 : 0);
      say("Верно! Сундук хозяина: +" + add + " ✨"); finishTrial(id, idx, add);
      return;
    }
    if (save.powers.includes("mimirEye")) {
      setRes(q.c);
      setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "mimirEye") }));
      const add = 8 + idx * 2;
      haptic("success"); say("Око Мимира раскрыло истину. Ответ исправлен. +" + add + " ✨");
      finishTrial(id, idx, add);
      return;
    }
    if (save.powers.includes("nornThread")) {
      setRes(ai);
      setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "nornThread") }));
      const add = 6 + idx * 2;
      haptic("success"); say("Нить Норн изменила исход. Ошибка не приведёт к бою. +" + add + " ✨");
      finishTrial(id, idx, add);
      return;
    }
    setRes(ai); haptic(); setFlog(MASTERS[id].name + " мрачнеет: «Что ж — пусть решит сталь!»");
  };
  const useWhisper = (id: string) => { const idx = trialIdx(id); const q = QUESTS[id][idx]; const wrong = q.a.findIndex((_, i) => i !== q.c && i !== removed); setRemoved(wrong); setWhisper(true); haptic(); say("Шёпот ветров уносит один ответ..."); };
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
  const fightAct = (id: string, kind: "hit" | "rune" | "shield") => {
    if (over) return;
    const m = MASTERS[id]; const idx = trialIdx(id);
    let dmg = 0; let log = ""; let nhen = hen; let nshield = shield;
    if (kind === "hit") {
      dmg = heroDef!.str + rnd(4);
      if (save.powers.includes("fireOath")) { dmg += 5; setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "fireOath") })); log = "Огненный обет! "; }
      if (heroDef!.id === "berserk" && hhp <= heroDef!.hp / 2) { dmg *= 2; log += "Медвежья ярость! "; }
      log += "Ты бьёшь: " + heroDef!.weapon + " — −" + dmg + " хозяину.";
    }
    if (kind === "rune") {
      if (hen < 4) { say("Мало энергии для заклинания!"); return; }
      nhen = hen - 4; dmg = heroDef!.en + 2 + rnd(5);
      log = "Руническое заклинание вспыхивает: −" + dmg + " хозяину.";
    }
    if (kind === "shield") { nshield = true; log = "Ты поднимаешь щит — удар ослабнет."; }
    const nm = mhp - dmg;
    if (nm <= 0) { setMhp(0); setHen(nhen); setOver("win"); const add = 8 + idx * 2; setFlog("Хозяин повержен! Награда: +" + add + " ✨"); finishTrial(id, idx, add); return; }
    let md = m.atk + rnd(3); let mlog = "";
    if (nshield) { md = Math.ceil(md * 0.3); mlog = " Щит принял большую часть удара."; }
    if (save.powers.includes("iceOath")) { md = Math.ceil(md * 0.65); setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "iceOath") })); mlog += " Ледяной обет сковал удар врага."; }
    if (heroDef!.id === "dwarf") md = Math.ceil(md * 0.75);
    let nh = hhp;
    if (heroDef!.id === "viking" && !valk && nh - md <= 0) { setValk(true); md = 0; mlog = " Крылья бури поглотили смертельный удар!"; }
    nh = nh - md;
    setMhp(nm); setHhp(Math.max(0, nh)); setHen(nhen); setShield(false);
    if (nh <= 0 && save.powers.includes("yggdrasilCall")) {
      setSave(s => ({ ...s, powers: s.powers.filter(p => p !== "yggdrasilCall") }));
      setHhp(30); setFlog(log + " Корни Иггдрасиля удержали тебя над смертью. Ты возвращён с 30 здоровья.");
      return;
    }
    if (nh <= 0) { setOver("lose"); setSave(s => ({ ...s, sparks: Math.max(0, s.sparks - 10) })); setFlog(log + " " + m.name + " бьёт... Ты пал. Древо возрождает тебя (−10 ✨)."); return; }
    setFlog(log + mlog + " " + m.name + " отвечает: −" + md + ".");
  };
  const nextStep = (id: string) => { if (trialIdx(id) >= 3 || save.artifacts.includes(id)) setScreen({ t: "realm", id }); else setScreen({ t: "trial", id }); };
  const isNav = (id: string) => (id === "tree" ? screen.t === "tree" || screen.t === "realm" : screen.t === id);
  const navScreen = (id: string): Screen => (id === "tree" ? { t: "tree" } : ({ t: id } as Screen));
  // Реальная траектория дороги на исходной карте 1024×1536.
  // Герой всегда находится на этой линии, а камера двигается вместе с ним.
  return (
    <div className="app">
      <style>{CSS}</style>
      <div className="hdr">
        {screen.t === "tree" && <div className="title">🌳 Мировое Древо Иггдрасиль</div>}
        {screen.t === "realm" && <button className="back" onClick={() => go({ t: "tree" })}>← На Древо</button>}
        {screen.t === "choose" && <div className="title">🌫️ Выбор судьбы</div>}
        {screen.t === "hero" && <div className="title">🛡 Герой</div>}
        {screen.t === "gift" && <div className="title">🎁 Дар</div>}
        {screen.t === "hall" && <div className="title">🏛️ Чертог</div>}
        {screen.t === "trial" && <div className="title">🗝 Испытание</div>}
        {screen.t === "fight" && <div className="title">⚔ Бой</div>}
        <div className="sparks">✨ {save.sparks} Искр</div>
      </div>

      {screen.t === "choose" && (
        <div className="scroll choose-screen">
          <div className="card center choose-intro"><div className="big">ᛉ</div><div className="qhead2">Выбери героя</div><p className="dim">Норны прядут нить. Выбери, кто пройдёт путь девяти миров.</p></div>
          {HEROES.map(h => (
            <button key={h.id} className={"hcard" + (pick === h.id ? " on" : "")} onClick={() => { setPick(h.id); setPickName(""); haptic(); }}>
              <span className="hface" style={{ borderColor: h.color, color: h.color, background: "linear-gradient(160deg,#101613,#0a0a0a)" }}>
                <BgImg name={h.img} className="himg" />
              </span>
              <span className="hinfo">
                <span className="hname" style={{ color: h.color }}>{h.race}</span>
                <span className="hab">🌀 {h.ability}: {h.abilityDesc}</span>
                <span className="hst">⚔ {h.str} • ✨ {h.en} • ❤ {h.hp}</span>
                <span className="hw">🗡 {h.weapon}</span>
              </span>
            </button>
          ))}
          {pick && (
            <div className="card">
              <div className="qhead2">Имя героя</div>
              <div className="chips">
                {(HEROES.find(h => h.id === pick)!.gender === "f" ? NAMES_F : NAMES_M).map(n => (
                  <button key={n} className={"chip" + (pickName === n ? " on" : "")} onClick={() => { setPickName(n); haptic(); }}>{n}</button>
                ))}
              </div>
            </div>
          )}
          <button className="btn gold" disabled={!pick || !pickName} onClick={confirmHero}>Вступить на путь</button>
        </div>
      )}

      {screen.t === "tree" && (
        <div className="maparea">
          <div className="mapwrap">
            <div className="mapcanvas">
              <BgImg name="tree" className="mapimg" />
              {REALMS.map(r => (
                <button key={r.id} className="marker" style={{ left: r.x + "%", top: r.y + "%" }} onClick={() => openRealm(r)}>
                  <div className="amulet-wrap">
                    <div className="amulet-glow" style={{ background: `radial-gradient(circle, ${r.glow}, transparent 70%)` }} />
                    <div className="amulet-ring" style={{ borderColor: r.color }} />
                    <div className="amulet-core" style={{ borderColor: r.color, color: r.color, background: `linear-gradient(135deg, ${r.dark}, #0a0a0a)` }}>
                      {r.runeSym}
                    </div>
                  </div>
                  <span className="mname" style={{ color: r.color, borderColor: r.glow }}>{r.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="fadeT" /><div className="fadeB" />
          <div className="hint">↓ листай Древо вниз • нажми на амулет ↓</div>
        </div>
      )}

      {screen.t === "tree" && heroDef && save.hero && (
        <button className="herobar" onClick={() => go({ t: "hero" })}>
          <span className="hbface" style={{ borderColor: heroDef.color, color: heroDef.color }}><BgImg name={heroDef.img} className="hbimg" />{heroDef.sym}</span>
          <span className="hbname">{save.hero.name}<i>{heroDef.race}</i></span>
          <span className="hbst">⚔ {heroDef.str} ✨ {heroDef.en} ⏳ {watchGain()}</span>
          <span className="hbwpn">🗡</span>
        </button>
      )}

      {screen.t === "realm" && (() => {
  const realm = REALMS.find(r => r.id === screen.id)!;

  if (realm.id === "midgard") {
    if (!heroDef) return null;

    const interact = (id: string) => {
      haptic();
      if (id === "mimir") {
        if (save.done.includes("forest:present")) {
          if (!save.done.includes("forest:present:reward")) {
            setSave(s => ({ ...s, sparks: s.sparks + 20, done: [...new Set([...s.done, "forest:present:reward"])] }));
            haptic("success");
            say("Знак Мимира совпал с твоим выбором. В воде колодца всплывает руна: +20 ✨");
          } else {
            say("Мимир молчит. Но теперь ты знаешь, куда смотреть, когда вода снова заговорит.");
          }
        } else {
          say('Мимир: «Знание имеет цену. Слушай внимательно. Под деревней спит память о первых путниках.»');
        }
        return;
      }
      if (id === "norns") {
        say('Норны: «Каждый выбор оставляет нить. Не всякая дорога приведёт тебя туда же.»');
        return;
      }
      if (id === "threeThreads") {
        say('Колодец Трёх Норн светится изнутри. Серебряная, золотая и алая нити сходятся над водой — прошлое, настоящее и будущее здесь связаны воедино.');
        return;
      }
      if (id === "forge" || id === "blacksmith") {
        say("Кузнец: «Сталь помнит руку. Принеси руну — и мы узнаем, что можно закалить.»");
        return;
      }
      if (id === "house" || id === "elder") {
        say("Старейшина: «За северной дорогой начинается лес. Но ночью там слышны голоса, которых не знает ни один охотник.»");
        return;
      }
      if (id === "port") {
        say("У причала: «Река ведёт к землям, где Мидгард заканчивается. Когда-нибудь здесь начнётся путь дальше.»");
        return;
      }
      if (id === "rune") {
        say("Древний камень откликается руной ᚠ. В ладони становится теплее — будто кто-то заметил твой приход.");
        return;
      }
      if (id === "ashgrove") {
        say("Роща Ясеня молчит. На коре видны старые зарубки — будто кто-то учился здесь слушать судьбу и дерево.");
        return;
      }
      if (id === "runefield") {
        say("Поле Рун. Здесь можно будет разгадывать сочетания рун и открывать новые пути. Это место запомнит твой выбор.");
        return;
      }
      if (id === "oldfarm") {
        if (save.done.includes("forest:past")) {
          if (!save.done.includes("forest:past:reward")) {
            setSave(s => ({ ...s, sparks: s.sparks + 20, done: [...new Set([...s.done, "forest:past:reward"])] }));
            haptic("success");
            say("След из видения привёл тебя сюда. Под старой телегой найден тайник: +20 ✨");
          } else {
            say("Старый хутор уже отдал тебе свой секрет. В пыли остался лишь след колеса.");
          }
        } else {
          say("Старый хутор давно пуст. В доме ещё виден очаг, а возле амбара — следы телеги. Здесь когда-то жили люди.");
        }
        return;
      }
      if (id === "forestCache") {
        if (!save.done.includes("forest:cache")) {
          setSave(s => ({ ...s, sparks: s.sparks + 18, done: [...new Set([...s.done, "forest:cache"])] }));
          haptic("success");
          say("Под плоским камнем спрятан старый охотничий мешок. Внутри руна и 18 ✨. Кто-то оставил это не случайно.");
        } else say("Тайник пуст. На камне осталась лишь вырезанная руна.");
        return;
      }
      if (id === "forestWhisper") {
        if (!save.done.includes("forest:whisper")) {
          setSave(s => ({ ...s, sparks: s.sparks + 16, done: [...new Set([...s.done, "forest:whisper"])] }));
          haptic("success");
          say("Камень шепчет: «Не всякая весть должна быть услышана сразу». Внутри трещины мерцает руна. +16 ✨");
        } else say("Шёпот стих. Но теперь ты знаешь, что этот камень когда-нибудь может заговорить снова.");
        return;
      }
      if (id === "heroHome") {
        say("Домик героя. Здесь начинается и заканчивается твой путь по Мидгарду. Можно возвращаться сюда после дальних походов — позже этот дом станет настоящей базой для хранения найденного и новых приключений.");
        return;
      }
      if (id === "hunterCamp") {
        if (!save.done.includes("forest:camp")) {
          setSave(s => ({ ...s, sparks: s.sparks + 14, done: [...new Set([...s.done, "forest:camp"])] }));
          haptic("success");
          say("Старая стоянка охотника. У костра лежит обломок ножа и свежие следы — кто-то бывает здесь до сих пор. +14 ✨");
        } else say("Костёр давно погас, но следы вокруг стоянки всё ещё ведут глубже в лес.");
        return;
      }
      if (id === "deepGrove") {
        if (!save.done.includes("forest:grove")) {
          setSave(s => ({ ...s, sparks: s.sparks + 17, done: [...new Set([...s.done, "forest:grove"])] }));
          haptic("success");
          say("В глубокой роще почти не слышно ветра. На камнях проступают старые знаки. Кажется, лес что-то помнит. +17 ✨");
        } else say("Роща молчит. Но теперь ты знаешь дорогу сюда — и можешь вернуться позже.");
        return;
      }
      if (id === "fallenAsh") {
        if (!save.done.includes("forest:ash")) {
          setSave(s => ({ ...s, sparks: s.sparks + 21, done: [...new Set([...s.done, "forest:ash"])] }));
          haptic("success");
          say("Поверженный ясень. На срезе видна почти стёртая руна. Это не случайное дерево — здесь когда-то проводили обряд. +21 ✨");
        } else say("Старый ясень неподвижен. Под корой всё ещё виден след руны.");
        return;
      }
      if (id === "deer") {
        say("Четыре оленя поднимают головы. Если подойти слишком близко, они мгновенно сорвутся с места и убегут в лес.");
        return;
      }
      if (id === "hoddmimir") {
        say("Тихий лес Ходдмимира. Здесь можно спрятаться от мира и услышать, что говорит ветер. В Эдде это место связано с теми, кто переживёт гибель мира.");
        return;
      }
      if (id === "ratatosk") {
        if (save.done.includes("forest:future")) {
          if (!save.done.includes("forest:future:reward")) {
            setSave(s => ({ ...s, sparks: s.sparks + 20, done: [...new Set([...s.done, "forest:future:reward"])] }));
            haptic("success");
            say("Рататоск возвращается к тебе. На этот раз он оставляет знак будущего: +20 ✨");
          } else {
            say("Рататоск уже передал тебе свой знак. Теперь он следит, куда приведёт твой выбор.");
          }
        } else {
          say("Рататоск исчезает среди ветвей. Кажется, он принёс тебе чью-то весть — но решил оставить её при себе.");
        }
        return;
      }
      if (id === "forestEvent") {
        if (save.done.includes("forest:choice")) {
          say("Камень холоден. Твоя нить уже выбрана — теперь последствия будут искать тебя сами.");
        }
        return;
      }
      if (id === "forestEvent:past") {
        setSave(s => ({ ...s, sparks: s.sparks + 12, done: [...new Set([...s.done, "forest:choice", "forest:past"])] }));
        haptic("success");
        say("Ты видишь старую тропу и следы телеги. Видение ведёт к Старому хутору. Прошлое не исчезло — оно оставило след.");
        return;
      }
      if (id === "forestEvent:present") {
        setSave(s => ({ ...s, sparks: s.sparks + 12, done: [...new Set([...s.done, "forest:choice", "forest:present"])] }));
        haptic("success");
        say("На камне появляется знак Мимира. Ты понимаешь: ответ уже рядом, но увидеть его можно только в настоящем.");
        return;
      }
      if (id === "forestEvent:future") {
        setSave(s => ({ ...s, sparks: s.sparks + 12, done: [...new Set([...s.done, "forest:choice", "forest:future"])] }));
        haptic("success");
        say("Третья нить исчезает в лесу. Где-то впереди слышится смех Рататоска. Ты выбрал то, чего ещё нет.");
        return;
      }
      if (id === "event") {
        say("Ты замечаешь следы у северной дороги. Это не зверь. Событие Мидгарда начинается.");
        return;
      }
      if (id.startsWith("ritual:")) {
        const ritual = id.slice(7);
        const names: Record<string,string> = {
          mimir: "Око Мимира", norn: "Нить Норн", ash: "Дыхание Ясеня",
          fire: "Огненный обет", ice: "Ледяной обет", ygg: "Зов Иггдрасиля"
        };
        const power: Record<string,string> = { mimir: "mimirEye", norn: "nornThread", ash: "ashBreath", fire: "fireOath", ice: "iceOath", ygg: "yggdrasilCall" };
        const key = power[ritual];
        if (!key) return;
        if (save.powers.includes(key)) { say(names[ritual] + " уже пробуждён. Его сила ждёт своего часа."); return; }
        setSave(s => ({ ...s, powers: [...new Set([...s.powers, key])], done: [...new Set([...s.done, "ritual:" + ritual])] }));
        const text: Record<string,string> = {
          mimir: "Око Мимира открыто. Следующая тайна может сама выдать себя тебе.",
          norn: "Нить Норн натянулась. Один раз ты сможешь избежать последствий ошибочного пути.",
          ash: "Дыхание Ясеня наполнит тебя перед следующим боем: +25 здоровья и +2 энергии.",
          fire: "Огненный обет вложен в оружие. Следующий обычный удар нанесёт +5 урона.",
          ice: "Ледяной обет застыл на тебе. Первый удар врага в следующем бою будет слабее на 35%.",
          ygg: "Зов Иггдрасиля услышан. Один раз смертельный удар вернёт тебя к жизни с 30 здоровья."
        };
        haptic("success"); say(text[ritual]);
        return;
      }
    };

    return <Midgard3D h={heroDef} skin={save.heroSkin} weapon={save.heroWeapon} on={interact} eventDone={save.done.includes("forest:choice")} />;
  }

  return (
    <div className="content">
      <BgImg name={realm.id} className="bgimg" />
      <div className="veil" />

      <div className="banner">
        <span className="bemoji">{realm.emoji}</span>
        <div>
          <div className="bname">{realm.name}</div>
          <div className="btag">{realm.tag}</div>
        </div>
      </div>

      <button className="gate" onClick={() => openGate(realm)}>
        <span className="gwrap">
          <span
            className="gate-ring"
            style={{ borderColor: realm.color }}
          />
          <span
            className="gate-core"
            style={{
              borderColor: realm.color,
              color: realm.color,
              background: `radial-gradient(circle, ${realm.dark}, #050705 75%)`,
            }}
          >
            {realm.runeSym}
          </span>
        </span>

        <span
          className="mname"
          style={{
            color: realm.color,
            borderColor: realm.glow,
          }}
        >
          {save.artifacts.includes(realm.id)
            ? "Мир покорён"
            : "Врата мира"}
        </span>
      </button>

      <div className="hint">
        Нажми на врата — хозяин мира ждёт загадок
      </div>
    </div>
  );
})()}
      {screen.t === "trial" && (() => {
        const realm = REALMS.find(r => r.id === screen.id)!;
        const m = MASTERS[realm.id];
        const idx = trialIdx(realm.id);
        if (idx >= 3) return (
          <div className="scroll"><div className="card center"><div className="big">🏺</div><div className="qhead2">Мир покорён!</div><p className="dim">Артефакт: {ARTIFACTS[realm.id]}</p><button className="btn gold" onClick={() => go({ t: "realm", id: realm.id })}>К вратам</button></div></div>
        );
        const q = QUESTS[realm.id][idx];
        return (
          <div className="scroll">
            <div className="mhead">
              <span className="mface" style={{ borderColor: realm.color, color: realm.color }}><BgImg name={MASTER_IMG[realm.id]} className="himg" />{m.sym}</span>
              <span className="mname2" style={{ color: realm.color }}>{m.name}</span>
              <span className="mtitle">{m.title} • испытание {idx + 1} из 3</span>
            </div>
            {idx === 0 && <div className="greet">«{m.greet}»</div>}
            <div className="cloud">
              <div className="riddle">{q.q}</div>
              {q.a.map((a, i) => (
                <button key={i} className={"ans" + (res !== null ? (i === q.c ? " good" : i === res ? " bad" : " off") : removed === i ? " off" : "")} onClick={() => answer(realm.id, i)}>{a}</button>
              ))}
              {heroDef?.id === "elf" && !whisper && res === null && <button className="btn rune" onClick={() => useWhisper(realm.id)}>🌀 Шёпот ветров</button>}
              {res !== null && (res === q.c
                ? <button className="btn gold" onClick={() => nextStep(realm.id)}>Открыть сундук →</button>
                : <button className="btn" onClick={() => startFight(realm.id)}>⚔ В бой!</button>)}
            </div>
          </div>
        );
      })()}

      {screen.t === "fight" && (() => {
        const realm = REALMS.find(r => r.id === screen.id)!;
        const m = MASTERS[realm.id];
        return (
          <div className="scroll">
            <div className="duel">
              <div className="dside">
                <span className="dface" style={{ borderColor: realm.color, color: realm.color }}><BgImg name={MASTER_IMG[realm.id]} className="himg" />{m.sym}</span>
                <span className="dname" style={{ color: realm.color }}>{m.name}</span>
                <span className="dhp"><span className="dhpfill" style={{ width: Math.max(0, (mhp / m.hp) * 100) + "%", background: realm.color }} /></span>
                <span className="dnum">{mhp}/{m.hp}</span>
              </div>
              <span className="dvs">⚔</span>
              <div className="dside">
                <span className="dface" style={{ borderColor: heroDef!.color, color: heroDef!.color }}><BgImg name={heroDef!.img} className="himg" />{heroDef!.sym}</span>
                <span className="dname" style={{ color: heroDef!.color }}>{save.hero!.name}</span>
                <span className="dhp"><span className="dhpfill" style={{ width: Math.max(0, (hhp / heroDef!.hp) * 100) + "%", background: "#7ee787" }} /></span>
                <span className="denergy">{Array.from({ length: heroDef!.en }).map((_, i) => (<span key={i} className={"pip" + (i < hen ? " on" : "")} />))}</span>
              </div>
            </div>
            <div className="flog">{flog}</div>
            {!over && (<div className="acts">
              <button className="btn gold" onClick={() => fightAct(realm.id, "hit")}>⚔ Удар: {heroDef!.weapon}</button>
              <button className="btn rune" onClick={() => fightAct(realm.id, "rune")}>🌀 Руническое заклинание (−4 ✨)</button>
              <button className="btn shield" onClick={() => fightAct(realm.id, "shield")}>🛡 Щит</button>
            </div>)}
            {over === "win" && <button className="btn gold" onClick={() => nextStep(realm.id)}>Забрать награду →</button>}
            {over === "lose" && <button className="btn ghost" onClick={() => go({ t: "tree" })}>Древо возрождает тебя</button>}
          </div>
        );
      })()}

      {screen.t === "hero" && heroDef && save.hero && (
        <div className="scroll">
          <div className="card center">
            <span className="hface bigface" style={{ borderColor: heroDef.color, color: heroDef.color, background: "linear-gradient(160deg,#101613,#0a0a0a)" }}><BgImg name={heroDef.img} className="himg" /></span>
            <div className="qhead2" style={{ color: heroDef.color }}>{save.hero.name} • {heroDef.race}</div>
            <div className="stats">
              <div className="stat"><b>⚔ {heroDef.str}</b><span>сила</span></div>
              <div className="stat"><b>✨ {heroDef.en}</b><span>энергия</span></div>
              <div className="stat"><b>❤ {heroDef.hp}</b><span>здоровье</span></div>
            </div>
            <div className="hrow">🎭 Облик героя</div>
            <div className="chips">
              <button
                className={"chip"+(save.heroSkin==="viking"?" on":"")}
                onClick={()=>{setSave(s=>({...s,heroSkin:"viking"}));haptic();}}
              >Викинг</button>
              <button
                className={"chip"+(save.heroSkin==="valkyrie"?" on":"")}
                onClick={()=>{setSave(s=>({...s,heroSkin:"valkyrie"}));haptic();}}
              >Валькирия</button>
            </div>
            <div className="hrow">🗡 Оружие в руке</div>
            <div className="chips">
              <button
                className={"chip"+(save.heroWeapon==="default"?" on":"")}
                onClick={()=>{setSave(s=>({...s,heroWeapon:"default"}));haptic();}}
              >{save.heroSkin==="valkyrie"?"Меч валькирии":"Секира викинга"}</button>
            </div>
            <div className="dim" style={{marginTop:8}}>
              Новое оружие будет добавляться в склад и появляться здесь для экипировки.
            </div>
            <div className="hrow">🌀 {heroDef.ability}: {heroDef.abilityDesc}</div>
            <div className="hrow">✨ Искр: <b>{save.sparks}</b> • 🏺 Артефактов: <b>{save.artifacts.length}/9</b></div>
            {save.artifacts.length > 0 && <div className="hrow">🏺 {save.artifacts.map(a => ARTIFACTS[a]).join(", ")}</div>}
          </div>
        </div>
      )}

      {screen.t === "gift" && (() => {
        const claimed = save.gift === today();
        const d = save.gift ? Math.round((Date.parse(today()) - Date.parse(save.gift)) / 86400000) : 99;
        const next = d <= 2 ? (save.streak % 7) + 1 : 1;
        const hl = claimed ? save.streak : next;
        return (
          <div className="scroll">
            <div className="card center"><div className="big">🎁</div><div className="qhead2">Дар Древа</div><p className="dim">Забирай дар каждый день — серия растёт. Пропустишь больше двух суток — серия начнётся заново.</p>
              <div className="days">{LADDER.map((v, i) => (<span key={i} className={"day" + (i + 1 === hl ? " on" : i + 1 < hl && claimed ? " done" : "")}><b>{v}</b>день {i + 1}</span>))}</div>
              {claimed ? <button className="btn" disabled>Дар получен • вернись завтра</button> : <button className="btn gold" onClick={claimGift}>Забрать дар +{LADDER[next - 1]} ✨</button>}
            </div>
            <div className="card center"><div className="big">⏳</div><div className="qhead2">Дозор героя</div><p className="dim">Искры капают, даже когда приложение закрыто: 3 в час, до 12 часов.</p>
              <button className="btn gold" onClick={collectWatch}>Завершить дозор · +{watchGain()} ✨</button>
            </div>
          </div>
        );
      })()}

      {screen.t === "hall" && (
        <div className="scroll">
          <div className="card center">
            <div className="big">🏛️</div>
            <div className="qhead2">Склад Чертога</div>
            <div className="stats">
              <div className="stat"><b>✨ {save.sparks}</b><span>Искр</span></div>
              <div className="stat"><b>🏺 {save.artifacts.length}/9</b><span>артефакты</span></div>
            </div>
            <div className="rank">🏆 Ранг: {rank(save.sparks)}</div>
            {save.hero && heroDef && <p className="dim">Герой: {save.hero.name} • {heroDef.race} • испытаний пройдено: {save.trials.length}</p>}
          </div>

          <div className="card">
            <div className="qhead2">⚔ Оружие</div>
            <div className="hrow">
              {save.heroSkin==="valkyrie"?"Меч валькирии":"Секира викинга"} • экипировано
            </div>
            <p className="dim">Найденное по ходу игры оружие будет храниться здесь. Экипировать его можно в разделе «Герой».</p>
          </div>

          <div className="card">
            <div className="qhead2">🧪 Эликсиры и зелья</div>
            <p className="dim">Склад подготовлен. Найденные эликсиры, лечебные зелья и другие расходники появятся здесь.</p>
          </div>
        </div>
      )}

      {save.hero && (
        <div className="nav">
          {NAV.map(n => (<button key={n.id} className={"navbtn" + (isNav(n.id) ? " on" : "")} onClick={() => go(navScreen(n.id))}><span className="ic">{n.ic}</span>{n.t}</button>))}
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
