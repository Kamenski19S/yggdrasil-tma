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

function midTree(x: number, z: number, s = 1, autumn = false) {
  const g = new THREE.Group();
  const trunk = midCyl(0.34 * s, 2.5 * s, 0x4b3021, 8, 1);
  trunk.position.y = 1.25 * s;
  trunk.rotation.z = (midHash(x, z) - 0.5) * 0.08;
  g.add(trunk);

  const greens = autumn ? [0x53623b, 0x697449, 0x7a7548] : [0x213f2a, 0x2d5132, 0x3a6040];
  for (let i = 0; i < 3; i++) {
    const r = (1.75 - i * 0.28) * s;
    const crown = new THREE.Mesh(
      new THREE.ConeGeometry(r, (2.7 - i * 0.18) * s, 9),
      midMat(greens[i], 1)
    );
    crown.position.y = (2.35 + i * 0.92) * s;
    crown.rotation.y = midHash(x + i, z - i) * Math.PI;
    g.add(crown);
  }
  g.position.set(x, midHeight(x, z), z);
  return markMeshes(g);
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
  const mat = midMat(0x3d653e, 1);
  for (let i = 0; i < 4; i++) {
    const blade = midBox(0.035 * s, 0.45 * s, 0.035 * s, 0x3d653e, 1);
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
  const g = new THREE.Group();
  const clothColor = h.id === "berserk" ? 0x5a2020 : h.id === "dwarf" ? 0x71482f : h.id === "viking" ? 0x5b4b2b : 0x263b4d;
  const skinColor = h.gender === "f" ? 0xd9ad8a : 0xc9936f;
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.72, 4, 8), midMat(clothColor, 0.88));
  body.position.y = 0.9;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 12), midMat(skinColor, 0.9));
  head.position.y = 1.62;
  g.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.36, 12, 8), midMat(h.id === "elf" ? 0xb8c8d1 : 0x2a211d, 0.95));
  hair.scale.y = 0.55;
  hair.position.y = 1.82;
  g.add(hair);
  const leg1 = midBox(0.2, 0.72, 0.22, 0x202326, 0.96);
  const leg2 = leg1.clone();
  leg1.position.set(-0.15, 0.36, 0);
  leg2.position.set(0.15, 0.36, 0);
  g.add(leg1, leg2);
  const shoulder = midBox(0.9, 0.22, 0.5, clothColor, 0.88);
  shoulder.position.y = 1.23;
  g.add(shoulder);
  const cape = midBox(0.68, 0.95, 0.09, h.id === "berserk" ? 0x2b0c0c : 0x18272e, 0.98);
  cape.position.set(0, 0.95, -0.34);
  g.add(cape);
  const weapon = midBox(0.08, 1.35, 0.08, 0xc3c8ca, 0.38);
  weapon.position.set(0.58, 1.08, 0);
  weapon.rotation.z = -0.35;
  g.add(weapon);
  const grip = midBox(0.1, 0.38, 0.1, 0x51321e, 0.95);
  grip.position.set(0.54, 0.45, 0);
  g.add(grip);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.65, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32 }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  g.add(shadow);
  return markMeshes(g);
}

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
  const homeActionRef = useRef<((inside:boolean)=>void)|null>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

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
    const horizonLight=new THREE.DirectionalLight(0xb8cbc5,.58);horizonLight.position.set(55,18,-60);scene.add(horizonLight);

    const groundY = (x: number, z: number) => {
      const broad = Math.sin(x * 0.075) * 0.7 + Math.cos(z * 0.062) * 0.55 + Math.sin((x - z) * 0.045) * 0.35;
      const village = Math.exp(-((x * x) / 850 + ((z + 2) * (z + 2)) / 1050));
      const road = Math.exp(-((x * x) / 150 + ((z - 12) * (z - 12)) / 2200));
      return broad * (1 - village * 0.88) - road * 0.18;
    };

    const canvasTex = (type: "ground" | "wood" | "roof" | "road") => {
      const c = document.createElement("canvas");
      c.width = c.height = 512;
      const ctx = c.getContext("2d")!;
      const rand = (n:number) => Math.abs(Math.sin(n * 12.9898) * 43758.5453) % 1;
      if (type === "ground") {
        ctx.fillStyle = "#3f4d38";
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
          ctx.strokeStyle=`rgba(118,126,78,${.16+rand(i*2)*.16})`;ctx.lineWidth=1+rand(i*4)*1.5;
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

    const groundTexture = canvasTex("ground");
    groundTexture.repeat.set(5, 6);
    const groundGeo = new THREE.PlaneGeometry(190, 190, 62, 62);
    const gp = groundGeo.attributes.position as THREE.BufferAttribute;
    for (let i=0;i<gp.count;i++) {
      const x=gp.getX(i), z=-gp.getY(i);
      gp.setZ(i, groundY(x,z));
    }
    groundGeo.rotateX(-Math.PI/2);
    groundGeo.computeVertexNormals();
    const terrain = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({ map: groundTexture, roughness: 1 }));
    terrain.receiveShadow = true;
    scene.add(terrain);

    const addMesh = (g: THREE.Object3D, interactive?: string, label?: string) => {
      if (interactive) g.userData = { id: interactive, label: label || interactive };
      g.traverse((o:any)=>{ if(o.isMesh){o.castShadow=true;o.receiveShadow=true;} });
      scene.add(g);
      if(interactive) objects.push(g);
      return g;
    };

    const mat = (color:number, rough=.9, metal=0) => new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal});
    const box=(w:number,h:number,d:number,c:number,rough=.9)=>new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(c,rough));

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

    // Mountains and dark tree line create a real horizon instead of an empty plane.
    const mountainMat = mat(0x34443f,1);
    for(let i=0;i<22;i++){
      const g=new THREE.Group();
      const x=-105+i*10;
      const r=8+midHash(i,7)*9;
      const m=new THREE.Mesh(new THREE.ConeGeometry(r,18+midHash(i,8)*16,7),mountainMat);
      m.position.y=8;
      g.add(m);
      g.position.set(x, -1, -94+midHash(i,9)*11);
      addMesh(g);
    }

    // Curved river on the western side.
    const riverPts:THREE.Vector3[]=[];
    for(let i=0;i<=24;i++){
      const z=-94+i*8;
      const x=-57 + Math.sin(i*.55)*3.6;
      riverPts.push(new THREE.Vector3(x, groundY(x,z)-0.05, z));
    }
    const riverCurve=new THREE.CatmullRomCurve3(riverPts);
    const riverGeo=new THREE.TubeGeometry(riverCurve,64,5.8,8,false);
    const river=new THREE.Mesh(riverGeo,new THREE.MeshStandardMaterial({color:0x274f5a,roughness:.2,metalness:.05,transparent:true,opacity:.9}));
    river.scale.y=.025;
    river.position.y=.05;
    river.receiveShadow=true;
    scene.add(river);
    // River banks.
    for(let i=0;i<50;i++){
      const z=-92+i*3.7, x=-57+Math.sin(i*.55)*3.6;
      const r=.35+midHash(i,15)*.6;
      const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(r,1),mat(0x5e625a,1));
      stone.scale.y=.55;
      stone.position.set(x+(midHash(i,16)-.5)*10,groundY(x,z)+.25,z);
      addMesh(stone);addCircleCollider(stone.position.x,stone.position.z,r*.9,.03);
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
      const g=new THREE.Group();g.rotation.y=rot;g.position.set(x,groundY(x,z),z);g.userData={id,label};
      const stoneMat=new THREE.MeshStandardMaterial({color:0x595b55,roughness:1});
      const woodMat=new THREE.MeshStandardMaterial({map:woodTex,color:wallColor,roughness:.92});
      const darkWood=mat(0x292019,1);
      const stoneBase=box(w+.7,.62,d+.7,0x565852,1);stoneBase.position.y=.31;g.add(stoneBase);
      const wall=new THREE.Mesh(new THREE.BoxGeometry(w,3.55,d),woodMat);wall.position.y=2.05;g.add(wall);
      // Clean timber wall: no cylindrical log courses on the facade.
      // These were the source of the long beam-like shapes around the entrance.
      for(const px of [-w*.46,w*.46]) for(const pz of [-d*.5,d*.5]){
        const post=box(.34,3.9,.34,0x2a2018,1);post.position.set(px,2.08,pz);g.add(post);
      }
      // Clean front facade: the entrance must remain completely unobstructed.
      // Do not place tall vertical structural beams near the doorway.
      // No horizontal beam over the doorway; keep the entrance visually clean.
      const door=box(1.18,2.15,.18,0x241912,1);door.position.set(0,1.35,d/2+.17);g.add(door);
      const doorFrame1=box(.14,2.35,.22,0x3a291d,1),doorFrame2=doorFrame1.clone();doorFrame1.position.set(-.67,1.42,d/2+.2);doorFrame2.position.set(.67,1.42,d/2+.2);g.add(doorFrame1,doorFrame2);
      for(const px of [-w*.27,w*.27]){
        const winFrame=box(1.15,.95,.14,0x2a211b,1);winFrame.position.set(px,2.18,d/2+.18);g.add(winFrame);
        const win=new THREE.Mesh(new THREE.BoxGeometry(.88,.68,.06),new THREE.MeshStandardMaterial({color:0xf0b85d,emissive:0xd87922,emissiveIntensity:1.8,roughness:.35}));win.position.set(px,2.18,d/2+.255);g.add(win);
        const v=box(.07,.76,.12,0x2a211b,1);v.position.set(px,2.18,d/2+.3);g.add(v);const hh=box(1.0,.07,.12,0x2a211b,1);hh.position.set(px,2.18,d/2+.3);g.add(hh);
      }
      // Roof: thin shingle planes, without thick diagonal fascia beams.
      // The old BoxGeometry roof edges looked like giant logs crossing the doorway.
      const roofMat=new THREE.MeshStandardMaterial({map:roofTex,color:roofColor,roughness:.98,side:THREE.DoubleSide});
      const roofA=new THREE.Mesh(new THREE.PlaneGeometry(w*.82,d+1.0),roofMat);
      const roofB=new THREE.Mesh(new THREE.PlaneGeometry(w*.82,d+1.0),roofMat);
      roofA.rotation.x=Math.PI/2; roofB.rotation.x=Math.PI/2;
      roofA.rotation.z=.62; roofB.rotation.z=-.62;
      roofA.position.set(-w*.22,4.22,0); roofB.position.set(w*.22,4.22,0);
      g.add(roofA,roofB);
      const ridge=box(.30,.28,d+1.08,0x2b211b,1);ridge.position.y=5.08;g.add(ridge);
      // No long diagonal beams on the front slope: the entrance stays visually clear.
      // Clean entrance: no tall porch posts in front of the doorway.
      // A shallow threshold remains without blocking the door visually.
      const porch=box(w*.34,.16,1.0,0x62422b,1);porch.position.set(0,.68,d/2+.54);g.add(porch);
      const chimney=new THREE.Mesh(new THREE.BoxGeometry(.62,2.0,.62),stoneMat);chimney.position.set(w*.24,5.15,-d*.08);g.add(chimney);
      // Small roof smoke stack cap.
      const cap=box(.82,.12,.82,0x35322e,1);cap.position.set(w*.24,6.17,-d*.08);g.add(cap);
      addMesh(g,id,label);objects.push(g);addRectCollider(x,z,w+.85,d+.85,rot,.05);
    };

    // Dense village core: buildings frame the roads and central square.
    house(-15,-18,9,7,.18,"Дом дружинника","house",0x80583a,0x2c2927);
    house(13,-18,10,7,-.08,"Дом старейшины","house",0x765036,0x292725);
    house(23,-6,8,6,.72,"Дом рыбака","fisher",0x6e5039,0x30302d);
    house(17,9,8,6,-.35,"Дом охотника","hunter",0x6b4a32,0x292725);
    house(3,-25,8,6,.05,"Дом травницы","herbalist",0x755238,0x312b28);
    house(-22,-7,8,6,-.65,"Дом ремесленника","craftsman",0x704b32,0x282624);

    // Blacksmith workshop is open on one side so it reads as a forge, not another house.
    const forge=new THREE.Group();forge.position.set(-10,groundY(-10,-5),-5);forge.userData={id:"forge",label:"Кузница"};
    const fw=box(9,3.8,6,0x4e3a2d,1);fw.position.y=1.9;forge.add(fw);
    const fr1=box(2.8,3.6,.28,0x2a211a,1);fr1.position.set(-3.1,1.9,3.05);forge.add(fr1);
    const roofF=new THREE.Mesh(new THREE.BoxGeometry(5.5,.24,6.7),new THREE.MeshStandardMaterial({map:roofTex,color:0x252322,roughness:1}));roofF.rotation.z=.58;roofF.position.set(-2.0,4.2,0);forge.add(roofF);const roofF2=roofF.clone();roofF2.rotation.z=-.58;roofF2.position.x=2.0;forge.add(roofF2);
    const furnace=box(2.2,1.8,1.7,0x353330,1);furnace.position.set(-2,1,1.15);forge.add(furnace);
    const glow=new THREE.Mesh(new THREE.CircleGeometry(.55,16),new THREE.MeshStandardMaterial({color:0xff6c24,emissive:0xff3b0b,emissiveIntensity:5}));glow.rotation.y=Math.PI;glow.position.set(-2,1.05,2.02);forge.add(glow);
    const anvil=box(1.4,.35,.55,0x25282a,.4);anvil.position.set(1.2,1.05,1.15);forge.add(anvil);const stem=box(.5,.9,.5,0x292a2a,.45);stem.position.set(1.2,.62,1.15);forge.add(stem);
    for(let i=0;i<4;i++){const tool=box(.09,1.35,.09,0xaaa9a4,.35);tool.position.set(2.1+i*.18,1.1,1.3);tool.rotation.z=-.3+i*.18;forge.add(tool);}
    addMesh(forge,"forge","Кузница");objects.push(forge);
    addRectCollider(-10,-5,9.6,6.6,0,.05);
    const forgeLight=new THREE.PointLight(0xff7a32,3.2,13,2);forgeLight.position.set(-12,groundY(-12,-5)+2.2,-4);scene.add(forgeLight);

    // Central square: stone edging, market tables, banners and a large bonfire.
    const square=new THREE.Mesh(new THREE.CircleGeometry(8.5,32),new THREE.MeshStandardMaterial({color:0x6b5a47,roughness:1}));square.rotation.x=-Math.PI/2;square.position.set(1,groundY(1,0)+.05,0);square.receiveShadow=true;scene.add(square);
    for(let i=0;i<18;i++){const a=i/18*Math.PI*2;const s=new THREE.Mesh(new THREE.DodecahedronGeometry(.38,1),mat(0x6b6b63,1));s.position.set(1+Math.cos(a)*8.8,groundY(1+Math.cos(a)*8.8,Math.sin(a)*8.8)+.22,Math.sin(a)*8.8);scene.add(s);}
    const table=(x:number,z:number)=>{const g=new THREE.Group();const top=box(2.8,.22,1.0,0x684329,1);top.position.y=1.05;g.add(top);for(const px of [-1.05,1.05]){const l=box(.16,1,.16,0x3b291d,1);l.position.set(px,.5,-.32);g.add(l);const r=l.clone();r.position.z=.32;g.add(r);}g.position.set(x,groundY(x,z),z);scene.add(g);};
    table(-4,2);table(7,3);

    const fire=(x:number,z:number,scale:number)=>{const g=new THREE.Group();g.position.set(x,groundY(x,z),z);for(let i=0;i<7;i++){const a=i/7*Math.PI*2;const s=new THREE.Mesh(new THREE.DodecahedronGeometry(.32*scale,1),mat(0x5d5a52,1));s.position.set(Math.cos(a)*.7*scale,.25*scale,Math.sin(a)*.7*scale);g.add(s);}const log1=box(.2*scale,.2*scale,1.5*scale,0x4a2d1b,1),log2=log1.clone();log1.rotation.y=.55;log2.rotation.y=-.55;log1.position.y=log2.position.y=.38*scale;g.add(log1,log2);const fm=new THREE.MeshStandardMaterial({color:0xff8128,emissive:0xff4d0a,emissiveIntensity:4});const flame=new THREE.Mesh(new THREE.ConeGeometry(.5*scale,1.35*scale,8),fm);flame.position.y=1.02*scale;g.add(flame);scene.add(g);const light=new THREE.PointLight(0xff8a3c,2.4*scale,12*scale,2);light.position.set(x,groundY(x,z)+2*scale,z);scene.add(light);fires.push({light,flame,phase:midHash(x,z)*8});return g;};
    fire(1,0,1.15);fire(18,-15,.72);

    // Outer settlement: farms, workshops and service yards make the village read as a place,
    // not a handful of buildings. These are deliberately lightweight so the scene remains mobile-friendly.
    const fenceRun=(x1:number,z1:number,x2:number,z2:number,h=1.25)=>{
      const g=new THREE.Group(); const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz),n=Math.max(1,Math.floor(len/1.55));
      for(let i=0;i<=n;i++){
        const t=i/n,px=x1+dx*t,pz=z1+dz*t;
        const post=box(.18,h,.18,0x49301f,1); post.position.set(px,groundY(px,pz)+h/2,pz); g.add(post);
      }
      for(const off of [-.28,.38]){
        const rail=box(.14,.14,len,0x5b3b25,1); rail.rotation.y=Math.atan2(dx,dz);
        rail.position.set((x1+x2)/2,groundY((x1+x2)/2,(z1+z2)/2)+h*off,(z1+z2)/2); g.add(rail);
      }
      scene.add(g); addSegmentCollider(x1,z1,x2,z2,.12,.02);
    };
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
    shed(-19,31,8,5,.08,"Амбар","barn");
    shed(17,34,7,5,-.2,"Сарай","shed");
    shed(27,13,6,4,.45,"Склад рыбака","fishshed");
    fenceRun(-25,27,-13,27); fenceRun(-25,27,-25,38); fenceRun(-25,38,-14,38);
    fenceRun(12,29,25,29); fenceRun(25,29,25,40); fenceRun(25,40,12,40);
    fenceRun(29,-1,39,-1); fenceRun(39,-1,39,10); fenceRun(39,10,30,10);
    for(const p0 of [[-20,29,1.0],[-16,34,.85],[-20,35,.8],[18,31,.9],[21,37,.72],[31,5,.9]] as Array<[number,number,number]>) hay(p0[0],p0[1],p0[2]);
    cart(-17,24,.18); cart(29,-5,-.55); bench(-20,23,.18); bench(25,31,-.2);
    // A second line of modest homes creates a believable village edge.
    house(-31,8,7,5,.1,"Дом рыбака","fisher2",0x694832,0x2d2b29);
    house(-27,20,7,5,-.25,"Дом плотника","carpenter",0x765039,0x302b27);
    house(31,18,7,5,.32,"Дом охотницы","hunter2",0x63432f,0x292724);
    house(20,24,7,5,-.12,"Дом семьи","family",0x79543a,0x2d2927);
    addRectCollider(-31,8,7.8,5.8,.1,.04);addRectCollider(-27,20,7.8,5.8,-.25,.04);addRectCollider(31,18,7.8,5.8,.32,.04);addRectCollider(20,24,7.8,5.8,-.12,.04);
    // Small market corner near the square.
    const stall=(x:number,z:number,rot:number)=>{
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);g.rotation.y=rot;
      const top=box(3.0,.18,1.25,0x70462a,1);top.position.y=1.45;g.add(top);
      for(const px of [-1.25,1.25])for(const pz of [-.48,.48]){const p=box(.13,1.45,.13,0x412b1d,1);p.position.set(px,.72,pz);g.add(p);}
      const canopy=new THREE.Mesh(new THREE.ConeGeometry(1.65,2.5,4,1,false,Math.PI/4),mat(0x49382e,1));canopy.scale.z=.55;canopy.position.y=2.15;g.add(canopy);addMesh(g);
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
    house(-64,36,8,5,0.12,"Старый дом","oldfarm",0x63432f,0x2b2926);
    shed(-58,42,6,4,-0.12,"Старый амбар","oldbarn");
    fenceRun(-70,32,-60,32); fenceRun(-70,32,-70,43); fenceRun(-70,43,-61,43);
    hay(-67,39,.9); cart(-61,33,-.25); wellMarker(-57,34);
    const oldField=new THREE.Group();
    oldField.position.set(-63,groundY(-63,47),47);
    for(let r=0;r<6;r++){
      const furrow=box(10,.035,.12,0x40382a,1);
      furrow.position.set(0,.02,(r-2.5)*1.05);
      furrow.rotation.y=.06; oldField.add(furrow);
    }
    addMesh(oldField);

    // Field of Runes — an open clearing where carved stones and training posts mark an old rite.
    const runeField=new THREE.Group();
    runeField.position.set(39,groundY(39,70),70);
    runeField.userData={id:"runefield",label:"Поле Рун"};
    const fieldStoneMat=mat(0x555b56,1);
    const fieldRuneMat=new THREE.MeshStandardMaterial({color:0xb99a5b,emissive:0x68471d,emissiveIntensity:1.6,roughness:.62});
    for(let i=0;i<11;i++){
      const a=midHash(i,1201)*Math.PI*2; const rr=3.5+midHash(i,1202)*8.0;
      const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.65+midHash(i,1203)*.38,1),fieldStoneMat);
      st.scale.y=1.4+midHash(i,1204)*1.5;
      st.position.set(Math.cos(a)*rr,st.scale.y*.48,Math.sin(a)*rr);
      st.rotation.set(midHash(i,1205),a,midHash(i,1206)); runeField.add(st);
      const mark=new THREE.Mesh(new THREE.BoxGeometry(.11,.035,.72),fieldRuneMat);
      mark.position.set(st.position.x,st.position.y+.55,st.position.z); mark.rotation.y=-a+.45; runeField.add(mark);
    }
    for(let i=0;i<5;i++){
      const post=box(.22,1.8,.22,0x4a3020,1);
      post.position.set(-6+i*3, .9, 7.5); runeField.add(post);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(.34,.035,6,18),fieldRuneMat);
      ring.rotation.x=Math.PI/2; ring.position.set(-6+i*3,1.55,7.5); runeField.add(ring);
    }
    const fieldFire=new THREE.Group();
    for(let i=0;i<7;i++){const a=i/7*Math.PI*2;const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.3,1),mat(0x55534d,1));st.position.set(Math.cos(a)*.65,.22,Math.sin(a)*.65);fieldFire.add(st);}
    runeField.add(fieldFire);
    addMesh(runeField,"runefield","Поле Рун"); objects.push(runeField);
    addCircleCollider(39,70,1.0,.08);

    // Palisade and gate: the player enters a settlement, not an isolated field.
    const palisade=(x1:number,z1:number,x2:number,z2:number)=>{const g=new THREE.Group();const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz),n=Math.floor(len/1.7);for(let i=0;i<=n;i++){const t=i/n;const px=x1+dx*t,pz=z1+dz*t;const p=new THREE.Mesh(new THREE.ConeGeometry(.24,.24+2.8+midHash(i,x1)*.5,6),mat(0x3c2a1c,1));p.position.set(px,groundY(px,pz)+1.45,pz);g.add(p);}const beam=box(.3,.35,len,0x2d2119,1);beam.rotation.y=Math.atan2(dx,dz);beam.position.set((x1+x2)/2,groundY((x1+x2)/2,(z1+z2)/2)+1.25,(z1+z2)/2);g.add(beam);scene.add(g);addSegmentCollider(x1,z1,x2,z2,.34,.08);};
    palisade(-30,-31,-8,-31);palisade(8,-31,30,-31);palisade(-30,-31,-30,-13);palisade(30,-31,30,16);
    const gate=new THREE.Group();gate.userData={id:"gate",label:"Ворота Мидгарда"};for(const x of [-4.2,4.2]){const p=box(.8,6,.8,0x35251a,1);p.position.set(x,3,-31);gate.add(p);}const top=box(10,.8,1,0x2d2018,1);top.position.set(0,6,-31);gate.add(top);for(let i=-3;i<=3;i++){const bar=box(1.0,4.2,.22,0x5b3a24,1);bar.position.set(i*1.15,2,-30.7);gate.add(bar);}addMesh(gate,"gate","Ворота Мидгарда");objects.push(gate);
    addCircleCollider(-4.2,-31,.55,.05);addCircleCollider(4.2,-31,.55,.05);

    // Mimir's well and Norn shrine are visually distinctive landmarks.
    const mimir=new THREE.Group();mimir.userData={id:"mimir",label:"Колодец Мимира"};mimir.position.set(18,groundY(18,15),15);
    for(let i=0;i<14;i++){const a=i/14*Math.PI*2;const s=box(.7,.48,.5,0x666a63,1);s.position.set(Math.cos(a)*1.45,.24,Math.sin(a)*1.45);s.rotation.y=a+Math.PI/2;mimir.add(s);}const water=new THREE.Mesh(new THREE.CircleGeometry(1.05,28),new THREE.MeshStandardMaterial({color:0x173b43,emissive:0x0b3138,emissiveIntensity:1.8,roughness:.18}));water.rotation.x=-Math.PI/2;water.position.y=.5;mimir.add(water);for(const px of [-1.35,1.35]){const p=box(.22,3,.22,0x4a3020,1);p.position.set(px,1.55,0);mimir.add(p);}const beam=box(3.1,.25,.25,0x382519,1);beam.position.y=2.95;mimir.add(beam);const bucket=box(.55,.5,.55,0x5a3b27,1);bucket.position.set(0,1.65,0);mimir.add(bucket);const halo=new THREE.Mesh(new THREE.TorusGeometry(1.8,.06,8,40),new THREE.MeshStandardMaterial({color:0x76e59c,emissive:0x287c48,emissiveIntensity:3}));halo.rotation.x=Math.PI/2;halo.position.y=.53;mimir.add(halo);addMesh(mimir,"mimir","Колодец Мимира");objects.push(mimir);
    addCircleCollider(18,15,1.8,.08);
    const ml=new THREE.PointLight(0x72e8a0,1.8,10,2);ml.position.set(18,groundY(18,15)+1.4,15);scene.add(ml);

    const shrine=new THREE.Group();shrine.userData={id:"norns",label:"Прядильня норн"};shrine.position.set(-25,groundY(-25,43),43);
    for(let i=0;i<3;i++){const st=new THREE.Mesh(new THREE.CapsuleGeometry(.65,2.3,5,8),mat(0x575d59,1));st.position.set((i-1)*2.2,1.35,0);st.rotation.z=(i-1)*.07;shrine.add(st);const r=new THREE.Mesh(new THREE.TorusGeometry(.42,.055,7,20),new THREE.MeshStandardMaterial({color:[0xc7e5cf,0xc8a4e8,0xe1c274][i],emissive:[0x5d9971,0x724d91,0x8d6c28][i],emissiveIntensity:2.2}));r.rotation.x=Math.PI/2;r.position.set((i-1)*2.2,1.6,-.55);shrine.add(r);}
    const threadMat=new THREE.LineBasicMaterial({color:0xd4c4e7,transparent:true,opacity:.78});for(let i=0;i<2;i++){const p=[new THREE.Vector3((i-1)*2.2,2,.1),new THREE.Vector3((i-.5)*2.2,4.1,-.7),new THREE.Vector3(i*2.2,2,.1)];shrine.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p),threadMat));}const ring=new THREE.Mesh(new THREE.TorusGeometry(4.1,.07,8,48),new THREE.MeshStandardMaterial({color:0xbda8d2,emissive:0x5d4770,emissiveIntensity:1.5}));ring.rotation.x=Math.PI/2;ring.position.y=.05;shrine.add(ring);addMesh(shrine,"norns","Прядильня норн");objects.push(shrine);
    addCircleCollider(-25,43,3.0,.1);

    // Ritual Place of Power — an ancient stone circle where the hero can invoke different paths of power.
    const ritualX=-43, ritualZ=62;
    const ritual=new THREE.Group();
    ritual.userData={id:"ritual",label:"Круг Силы"};
    ritual.position.set(ritualX,groundY(ritualX,ritualZ),ritualZ);
    const outerStoneMat=mat(0x666963,1);
    const innerStoneMat=mat(0x555a55,1);
    for(let ring=0;ring<2;ring++){
      const count=ring===0?18:12;
      const radius=ring===0?6.2:3.65;
      for(let i=0;i<count;i++){
        const a=i/count*Math.PI*2+ring*.12;
        const rr=radius+(midHash(i,930+ring)*.5-.25);
        const h=.42+midHash(i,940+ring)*.48;
        const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.55+midHash(i,950+ring)*.28,1),ring===0?outerStoneMat:innerStoneMat);
        st.scale.y=.65+h*.35;
        st.position.set(Math.cos(a)*rr,h*.45,Math.sin(a)*rr);
        st.rotation.set(midHash(i,960+ring),a+midHash(i,970+ring),midHash(i,980+ring));
        ritual.add(st);
      }
    }
    const altar=new THREE.Mesh(new THREE.DodecahedronGeometry(1.05,1),mat(0x555954,1));
    altar.scale.set(1.25,.62,1.05);altar.position.y=.5;ritual.add(altar);
    for(const r of [2.1,3.15,5.15]){
      const rm=new THREE.Mesh(new THREE.TorusGeometry(r,.045,7,64),new THREE.MeshStandardMaterial({color:0x8cae9b,emissive:0x355b49,emissiveIntensity:1.4,transparent:true,opacity:.72}));
      rm.rotation.x=Math.PI/2;rm.position.y=.055;ritual.add(rm);
    }
    const ritualRuneMat=new THREE.MeshStandardMaterial({color:0xc9a85e,emissive:0x8c5f18,emissiveIntensity:2.2,roughness:.5});
    for(let i=0;i<8;i++){
      const a=i/8*Math.PI*2;
      const runeMark=new THREE.Mesh(new THREE.BoxGeometry(.13,.025,.65),ritualRuneMat);
      runeMark.position.set(Math.cos(a)*4.55,.075,Math.sin(a)*4.55);runeMark.rotation.y=-a;ritual.add(runeMark);
    }
    addMesh(ritual,"ritual","Круг Силы");objects.push(ritual);
    addCircleCollider(ritualX,ritualZ,1.25,.06);
    const ritualLight=new THREE.PointLight(0x8cc7a8,1.15,11,2);ritualLight.position.set(ritualX,groundY(ritualX,ritualZ)+1.6,ritualZ);scene.add(ritualLight);

    // Ancient rune altar.
    const rune=new THREE.Group();rune.userData={id:"rune",label:"Древний камень Феху"};rune.position.set(27,groundY(27,57),57);const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(1.45,1),mat(0x4c534f,1));stone.position.y=1.2;rune.add(stone);const rr=new THREE.Mesh(new THREE.TorusGeometry(1.05,.07,8,30),new THREE.MeshStandardMaterial({color:0xffd76a,emissive:0x996313,emissiveIntensity:3}));rr.rotation.x=Math.PI/2;rr.position.y=1.2;rune.add(rr);addMesh(rune,"rune","Древний камень Феху");objects.push(rune);
    addCircleCollider(27,57,1.7,.1);

    // Bridge and dock.
    const bridge=new THREE.Group();bridge.userData={id:"port",label:"Мост к причалу"};for(let i=-5;i<=5;i++){const plank=box(3.6,.28,.82,0x60402a,1);plank.position.set(-53,groundY(-53,i*1.0)+.5,i);bridge.add(plank);}addMesh(bridge,"port","Мост к причалу");objects.push(bridge);
    const dock=new THREE.Group();dock.position.set(-46,groundY(-46,-15),-15);for(let i=0;i<7;i++){const p=box(2.8,.24,.72,0x6b472d,1);p.position.set(0,.3,i*.85);dock.add(p);}for(const px of [-1.2,1.2])for(let i=0;i<3;i++){const p=box(.22,1.5,.22,0x3f291c,1);p.position.set(px,-.2,i*2.5);dock.add(p);}const hull=box(2.2,.55,4.8,0x4b2c1d,1);hull.position.set(3,-.15,2.5);dock.add(hull);addMesh(dock,"port","Речной причал");objects.push(dock);

    // Utility clutter makes the village feel inhabited.
    const barrel=(x:number,z:number)=>{const b=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,1,12),mat(0x65432c,1));b.position.set(x,groundY(x,z)+.5,z);scene.add(b);for(const y of [.25,.76]){const r=new THREE.Mesh(new THREE.TorusGeometry(.51,.045,6,18),mat(0x302824,.7,.1));r.rotation.x=Math.PI/2;r.position.set(x,groundY(x,z)+y,z);scene.add(r);}};
    const crate=(x:number,z:number)=>{const c=box(1,.75,1,0x704a2e,1);c.position.set(x,groundY(x,z)+.38,z);scene.add(c);const s=box(.08,.82,1.05,0x38261a,1);s.position.set(x,groundY(x,z)+.38,z);scene.add(s);addRectCollider(x,z,1,1,0,.03);};
    [[24,-13],[25,-10],[18,-20],[-18,-21],[-24,-4],[-8,-18],[21,2],[14,11]].forEach(([x,z])=>barrel(x,z));
    [[25,-14],[27,-11],[-19,-20],[-21,-5],[18,-19],[-7,-19]].forEach(([x,z])=>crate(x,z));

    // Realistic fantasy trees: firs for the forest + sacred ash trees around Midgard.
    // The ash is a deliberate visual echo of Yggdrasil rather than a generic oak.
    const firTree=(x:number,z:number,s:number)=>{
      const g=new THREE.Group();const y=groundY(x,z);
      const bark=mat(0x38281f,1);
      const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.18*s,.34*s,4.6*s,10),bark);
      trunk.position.y=2.3*s;trunk.rotation.z=(midHash(x,z)-.5)*.045;g.add(trunk);

      // Irregular horizontal branches give the fir a more natural silhouette.
      for(let b=0;b<5;b++){
        const branch=new THREE.Mesh(new THREE.CylinderGeometry(.045*s,.095*s,(1.15+b*.16)*s,7),bark);
        branch.position.set((midHash(b,x)-.5)*.45*s,(1.25+b*.58)*s,(midHash(b,z)-.5)*.38*s);
        branch.rotation.z=(midHash(b+10,x)-.5)*.45;
        branch.rotation.y=midHash(b+20,z)*Math.PI*2;
        g.add(branch);
      }

      const greens=[0x1e3428,0x274431,0x2d4d36,0x34583d,0x233c2d];
      // Layered, slightly asymmetric foliage instead of perfect cones.
      for(let i=0;i<6;i++){
        const t=i/5;
        const r=(1.55-.72*t)*s;
        const crown=new THREE.Mesh(new THREE.ConeGeometry(r,.95*s,9,1),mat(greens[i%greens.length],1));
        crown.scale.x=.88+midHash(i,x)*.18;
        crown.scale.z=.84+midHash(i,z)*.2;
        crown.position.set((midHash(i*4,x)-.5)*.28*s,(2.05+i*.62)*s,(midHash(i*5,z)-.5)*.28*s);
        crown.rotation.y=midHash(i+40,x)*Math.PI*2;
        g.add(crown);
      }
      // A few low boughs make large trees feel grown rather than assembled.
      if(s>1.15){
        for(let i=0;i<3;i++){
          const low=new THREE.Mesh(new THREE.ConeGeometry(.62*s,.7*s,8),mat(greens[(i+2)%greens.length],1));
          low.position.set((i-1)*.38*s,.72*s,(midHash(i,z)-.5)*.3*s);
          low.rotation.y=midHash(i+70,x)*Math.PI*2;g.add(low);
        }
      }
      g.position.set(x,y,z);addMesh(g);
      if(s>=1.15)addCircleCollider(x,z,.42*s,.04);
    };

    const ashTree=(x:number,z:number,s:number,ancient=false)=>{
      const g=new THREE.Group();const y=groundY(x,z);
      const bark=mat(ancient?0x403229:0x4a3427,1);
      const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.32*s,.52*s,5.8*s,11),bark);
      trunk.position.y=2.9*s;trunk.rotation.z=(midHash(x,z)-.5)*.035;g.add(trunk);

      // Forked ash branches: broad crown, not a conifer silhouette.
      const branchCount=ancient?8:6;
      for(let i=0;i<branchCount;i++){
        const a=(i/branchCount)*Math.PI*2+midHash(i,x)*.25;
        const len=(1.65+midHash(i+30,z)*1.35)*s;
        const branch=new THREE.Mesh(new THREE.CylinderGeometry(.075*s,.16*s,len,8),bark);
        branch.position.set(Math.cos(a)*len*.34,(3.35+midHash(i+40,x)*1.25)*s,Math.sin(a)*len*.34);
        branch.rotation.z=Math.cos(a)*.78;
        branch.rotation.x=Math.sin(a)*.78;
        branch.rotation.y=-a;
        g.add(branch);

        // Small leaf clusters at branch ends.
        for(let k=0;k<3;k++){
          const leaf=new THREE.Mesh(new THREE.SphereGeometry((.42+midHash(k+i,90)*.22)*s,8,6),mat(k%2?0x496044:0x3b573b,1));
          const f=.55+k*.18;
          leaf.position.set(Math.cos(a)*len*.62+(midHash(k, i)-.5)*.35*s,(3.55+midHash(i,k)*1.15+f)*s,Math.sin(a)*len*.62+(midHash(k+4,i)-.5)*.35*s);
          leaf.scale.y=.72;g.add(leaf);
        }
      }

      // A few hanging twigs give the sacred ash a slightly mythical silhouette.
      for(let i=0;i<(ancient?7:4);i++){
        const a=midHash(i+100,x)*Math.PI*2;
        const twig=new THREE.Mesh(new THREE.CylinderGeometry(.025*s,.055*s,(.9+midHash(i,z)*.7)*s,6),bark);
        twig.position.set(Math.cos(a)*1.05*s,(3.15+midHash(i+5,x)*1.5)*s,Math.sin(a)*1.05*s);
        twig.rotation.z=(midHash(i+8,z)-.5)*.35;g.add(twig);
      }
      g.position.set(x,y,z);addMesh(g);
      if(s>=1.2)addCircleCollider(x,z,.62*s,.04);
    };

    // Forest life inspired by the Edda: four deer associated with Yggdrasil and a wandering squirrel.
    // They are game-world manifestations in Midgard, not claims that the literal cosmic animals live here.
    const deer = (x:number,z:number,s:number,phase:number) => {
      const g=new THREE.Group();
      const fur=mat(0x8a6d4d,1), dark=mat(0x342b24,1), ant=mat(0xb0a58e,1);
      const body=new THREE.Mesh(new THREE.CapsuleGeometry(.46*s,1.0*s,6,10),fur); body.rotation.z=Math.PI/2; body.position.y=.9*s; g.add(body);
      const neck=new THREE.Mesh(new THREE.CylinderGeometry(.24*s,.32*s,.84*s,8),fur); neck.position.set(.48*s,1.25*s,0); neck.rotation.z=-.35; g.add(neck);
      const head=new THREE.Mesh(new THREE.SphereGeometry(.31*s,10,7),fur); head.scale.set(1.25,.9,1); head.position.set(.77*s,1.58*s,0); g.add(head);
      const snout=new THREE.Mesh(new THREE.SphereGeometry(.14*s,8,5),dark); snout.scale.z=.72; snout.position.set(1.0*s,1.53*s,0); g.add(snout);
      for(const pz of [-.25,.25]) for(const px of [-.27,.34]) { const leg=new THREE.Mesh(new THREE.CylinderGeometry(.065*s,.09*s,.72*s,6),dark); leg.position.set(px*s,.48*s,pz*s); leg.rotation.z=(px<0?.08:-.06); g.add(leg); }
      for(const side of [-1,1]) for(let k=0;k<4;k++){ const a=new THREE.Mesh(new THREE.CylinderGeometry(.028*s,.05*s,.38*s,5),ant); a.position.set(.7*s,(1.82+k*.13)*s,side*(.11+k*.055)*s); a.rotation.z=side*(.45-k*.08); g.add(a); }
      const tail=new THREE.Mesh(new THREE.SphereGeometry(.13*s,7,5),fur); tail.position.set(-.52*s,1.05*s,0); tail.scale.set(.7,1.2,.7); g.add(tail);
      g.position.set(x,groundY(x,z),z); g.userData={phase}; addMesh(g); wildlife.push({g,x,z,r:4+midHash(phase,41)*3,speed:1.25+midHash(phase,42)*.8,phase,kind:'deer'});
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

    // Grove of Ash — the strongest Midgard echo of Yggdrasil: several old ash trees
    // gathered around a quiet root-stone clearing. This is an in-world interpretation.
    const ashGroveX=-4, ashGroveZ=69;
    const ashGrove=new THREE.Group();
    ashGrove.userData={id:"ashgrove",label:"Роща Ясеня"};
    const grovePositions:Array<[number,number,number,boolean]>=[
      [-5,2,1.65,false],[-1,1,1.45,false],[-7,4,1.25,false],[1,5,1.3,false],
      [-2,7,2.05,true],[4,3,1.15,false]
    ];
    for(const [dx,dz,sc,anc] of grovePositions){
      // Build at local offsets by creating the same sacred-ash model at world coordinates.
      ashTree(ashGroveX+dx,ashGroveZ+dz,sc,anc);
    }
    for(let i=0;i<9;i++){
      const a=i/9*Math.PI*2; const rr=4.2+midHash(i,1301)*2.0;
      const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.48+midHash(i,1302)*.24,1),mat(0x575b56,1));
      st.position.set(ashGroveX+Math.cos(a)*rr,groundY(ashGroveX+Math.cos(a)*rr,ashGroveZ+Math.sin(a)*rr)+.35,ashGroveZ+Math.sin(a)*rr);
      st.scale.y=1.3+midHash(i,1303)*.7; st.rotation.set(midHash(i,1304),a,midHash(i,1305));
      addMesh(st);
    }
    const groveRing=new THREE.Mesh(new THREE.TorusGeometry(5.7,.055,7,64),new THREE.MeshStandardMaterial({color:0x8c9b78,emissive:0x394d31,emissiveIntensity:1.1,transparent:true,opacity:.62}));
    groveRing.rotation.x=Math.PI/2; groveRing.position.set(ashGroveX,groundY(ashGroveX,ashGroveZ)+.045,ashGroveZ); scene.add(groveRing);
    const groveStone=new THREE.Mesh(new THREE.DodecahedronGeometry(1.0,1),mat(0x4f5651,1));
    groveStone.position.set(ashGroveX,groundY(ashGroveX,ashGroveZ)+.75,ashGroveZ); groveStone.scale.y=1.5; scene.add(groveStone);
    const groveRune=new THREE.Mesh(new THREE.TorusGeometry(.62,.05,7,24),new THREE.MeshStandardMaterial({color:0xc2aa67,emissive:0x65471d,emissiveIntensity:1.7}));
    groveRune.rotation.x=Math.PI/2; groveRune.position.set(ashGroveX,groundY(ashGroveX,ashGroveZ)+1.45,ashGroveZ); scene.add(groveRune);
    objects.push(ashGrove); addCircleCollider(ashGroveX,ashGroveZ,1.0,.08);

    // Hoddmímir's Holt — a distant refuge in the forest, inspired by Vafþrúðnismál.
    // The exact location is our game interpretation; the Edda gives the wood, not a Midgard map pin.
    const hoddX=61, hoddZ=78;
    const hodd=new THREE.Group(); hodd.userData={id:'hoddmimir',label:'Лес Ходдмимира'};
    const hoddRing=new THREE.Mesh(new THREE.TorusGeometry(5.6,.055,7,56),new THREE.MeshStandardMaterial({color:0x899579,emissive:0x34432f,emissiveIntensity:1.0,transparent:true,opacity:.55}));
    hoddRing.rotation.x=Math.PI/2; hoddRing.position.set(hoddX,groundY(hoddX,hoddZ)+.04,hoddZ); scene.add(hoddRing);
    const shelter=new THREE.Group(); shelter.position.set(hoddX,groundY(hoddX,hoddZ),hoddZ); shelter.userData={id:'hoddmimir',label:'Лес Ходдмимира'};
    for(const dx of [-2.4,2.4]){const post=box(.28,2.5,.28,0x4a3323,1);post.position.set(dx,1.25,0);shelter.add(post);}
    const roof=new THREE.Mesh(new THREE.ConeGeometry(3.4,1.65,6),mat(0x3a3129,1));roof.position.y=2.75;roof.scale.z=.72;shelter.add(roof);
    const hearth=fire(hoddX,hoddZ+1.8,.55);
    const refugeStone=new THREE.Mesh(new THREE.DodecahedronGeometry(.8,1),mat(0x505650,1));refugeStone.position.set(hoddX,groundY(hoddX,hoddZ)+.65,hoddZ+2.2);shelter.add(refugeStone);
    addMesh(shelter,'hoddmimir','Лес Ходдмимира'); objects.push(shelter); addCircleCollider(hoddX,hoddZ,1.1,.08);

    // The four deer are a deliberate Yggdrasil reference: they roam a separate clearing.
    const deerClearingX=30, deerClearingZ=53;
    for(let i=0;i<4;i++) deer(deerClearingX+(i-1.5)*2.6,deerClearingZ+(i%2?2.6:-2.6),1.12+midHash(i,1440)*.16,10+i);
    const deerStone=new THREE.Mesh(new THREE.DodecahedronGeometry(.72,1),mat(0x575d56,1));deerStone.position.set(deerClearingX,groundY(deerClearingX,deerClearingZ)+.5,deerClearingZ);scene.add(deerStone);
    const deerRing=new THREE.Mesh(new THREE.TorusGeometry(5.8,.045,7,48),new THREE.MeshStandardMaterial({color:0x7e8b72,emissive:0x303d2a,emissiveIntensity:.8,transparent:true,opacity:.48}));deerRing.rotation.x=Math.PI/2;deerRing.position.set(deerClearingX,groundY(deerClearingX,deerClearingZ)+.035,deerClearingZ);scene.add(deerRing);
    squirrel(ashGroveX+5,ashGroveZ+1);

    // First living forest event: the Three Threads stone.
    // This is a game-world interpretation: the Edda gives the Norns as powers
    // that mark the fates of people; the concrete Midgard location is our fiction.
    const eventX=12, eventZ=49;
    const eventGroup=new THREE.Group();
    eventGroup.position.set(eventX,groundY(eventX,eventZ),eventZ);
    const eventStone=new THREE.Mesh(new THREE.DodecahedronGeometry(1.05,1),mat(0x4e5550,1));
    eventStone.position.y=.85; eventStone.scale.y=1.55; eventGroup.add(eventStone);
    const eventRing=new THREE.Mesh(new THREE.TorusGeometry(2.7,.055,7,48),new THREE.MeshStandardMaterial({color:0x9c8cb0,emissive:0x4b365a,emissiveIntensity:1.8,transparent:true,opacity:.78}));
    eventRing.rotation.x=Math.PI/2; eventRing.position.y=.06; eventGroup.add(eventRing);
    const eventThreadMat=new THREE.LineBasicMaterial({color:0xd8c9e8,transparent:true,opacity:.72});
    for(let i=0;i<3;i++){
      const pts=[new THREE.Vector3((i-1)*.72,.95,.15),new THREE.Vector3((i-1)*1.25,2.9,-.35+Math.sin(i)*.25),new THREE.Vector3((i-1)*1.75,.5,.9)];
      eventGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),eventThreadMat));
    }
    for(let i=0;i<7;i++){
      const fp=new THREE.Mesh(new THREE.DodecahedronGeometry(.11,0),mat(0x665b52,1));
      const a=-1.0+i*.32; fp.position.set(-1.7+a*.95,.06,-1.6+i*.46); fp.scale.set(1.6,.35,.8); eventGroup.add(fp);
    }
    addMesh(eventGroup,'forestEvent','Камень Трёх Нитей');
    addCircleCollider(eventX,eventZ,1.15,.08);

    // Additional living forest events. These are small, reusable encounters rather than decoration.
    // Their exact locations and outcomes are game fiction inspired by the Edda's themes of fate,
    // wisdom and the living ecosystem around Yggdrasil.
    const makeForestEvent = (x:number,z:number,id:string,label:string,ringColor:number,stoneColor:number,detail:number) => {
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z);
      const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(.78+detail*.08,1),mat(stoneColor,1));
      stone.position.y=.58+detail*.08; stone.scale.y=1.35; g.add(stone);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(2.0+detail*.18,.045,7,40),new THREE.MeshStandardMaterial({color:ringColor,emissive:ringColor,emissiveIntensity:1.25,transparent:true,opacity:.62}));
      ring.rotation.x=Math.PI/2; ring.position.y=.045; g.add(ring);
      for(let i=0;i<3+detail;i++){
        const mark=new THREE.Mesh(new THREE.DodecahedronGeometry(.12,.0),mat(0x777066,1));
        const a=i/(3+detail)*Math.PI*2; mark.position.set(Math.cos(a)*(1.15+detail*.12),.08,Math.sin(a)*(1.15+detail*.12)); mark.scale.y=.45; g.add(mark);
      }
      addMesh(g,id,label); objects.push(g); addCircleCollider(x,z,.9,.08);
    };
    makeForestEvent(-15,58,'forestCache','Забытый тайник',0xb28b52,0x4b4035,2);
    makeForestEvent(46,43,'forestWhisper','Камень Шёпота',0x7895a5,0x454d4d,3);
    makeForestEvent(-48,72,'forestThread','Разорванная нить',0x9c7190,0x51484d,2);

    // Right forest expansion: three larger areas so the eastern side feels like a
    // place to explore, not an empty ring of trees. These are game interpretations.
    const makeForestClearing=(x:number,z:number,r:number,id:string,label:string,kind:number)=>{
      const g=new THREE.Group(); g.position.set(x,groundY(x,z),z);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.07,8,56),new THREE.MeshStandardMaterial({color:kind===1?0x667b63:kind===2?0x6f7780:0x7d6955,emissive:kind===1?0x263b29:0x252b30,emissiveIntensity:.7,transparent:true,opacity:.48}));
      ring.rotation.x=Math.PI/2; ring.position.y=.045; g.add(ring);
      for(let i=0;i<Math.floor(r/2);i++){
        const a=midHash(i,x*11+z)*Math.PI*2, rr=r*.35+midHash(i,z*17)*r*.45;
        const stone=new THREE.Mesh(new THREE.DodecahedronGeometry(.28+midHash(i,33)*.22,1),mat(kind===1?0x555d54:kind===2?0x51565a:0x5a4a3c,1));
        stone.position.set(Math.cos(a)*rr,.22,Math.sin(a)*rr); stone.scale.y=.65; g.add(stone);
      }
      addMesh(g,id,label); objects.push(g);
    };
    makeForestClearing(70,18,8.5,'hunterCamp','Забытая стоянка',3);
    makeForestClearing(67,49,9.5,'deepGrove','Глубокая роща',1);
    makeForestClearing(52,7,7.5,'fallenAsh','Поверженный ясень',2);

    // The hero's home is deliberately a SMALL personal cabin just beyond the hunter camp.
    // It is visually distinct from the larger village houses: lower walls, a compact turf roof,
    // a short porch and a modest fenced yard. This is the hero's own dwelling, not another NPC house.
    const heroHomeX=75, heroHomeZ=30;
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

    // Small landmarks inside the clearings.
    const campFire=fire(70,18,.75); campFire.scale.setScalar(.72);
    const campStone=new THREE.Mesh(new THREE.CylinderGeometry(.65,.8,.7,7),mat(0x514a42,1)); campStone.position.set(70,groundY(70,18)+.35,16.5); scene.add(campStone);
    for(const [x,z] of [[68,20],[72,20],[68,16],[72,16]]){const post=box(.16,1.15,.16,0x493527,1);post.position.set(x,groundY(x,z)+.57,z);scene.add(post);}
    const fallen=new THREE.Group(); fallen.position.set(52,groundY(52,7),7); const trunk= new THREE.Mesh(new THREE.CylinderGeometry(.5,.62,7,8),mat(0x4c392b,1)); trunk.rotation.z=Math.PI/2; trunk.position.y=.5; fallen.add(trunk); const cut=new THREE.Mesh(new THREE.CylinderGeometry(.53,.53,.12,12),mat(0x75644d,1)); cut.rotation.z=Math.PI/2; cut.position.set(3.5,.5,0); fallen.add(cut); scene.add(fallen);
    for(let i=0;i<7;i++){const rune=new THREE.Mesh(new THREE.DodecahedronGeometry(.14,0),mat(0x697d72,1));const a=i/7*Math.PI*2;rune.position.set(67+Math.cos(a)*4,.12+groundY(67+Math.cos(a)*4,49+Math.sin(a)*4),49+Math.sin(a)*4);scene.add(rune);}

    // Dense forest ring uses varied, irregular firs.
    for(let i=0;i<95;i++){
      const a=midHash(i,77)*Math.PI*2;const r=58+midHash(i,91)*32;
      const x=Math.cos(a)*r,z=Math.sin(a)*r+2;
      const reserved=[[ashGroveX,ashGroveZ,11],[39,70,13],[-64,36,11],[-43,62,10],[30,53,12],[61,78,10],[-15,58,7],[46,43,7],[-48,72,7],[70,18,11],[75,30,13],[67,49,12],[52,7,10]];
      const reservedHit=reserved.some(([rx,rz,rr])=>Math.hypot(x-rx,z-rz)<rr);
      if(Math.abs(x+57)>9 && !reservedHit)firTree(x,z,.78+midHash(i,13)*.82);
    }

    // Three ash trees mark important places in Midgard; the largest is the village's
    // symbolic "ash of memory", a visual hint toward Yggdrasil.
    ashTree(-10,18,1.55,false);
    ashTree(13,24,1.7,false);
    ashTree(-31,-12,2.15,true);

    // Small grass clumps and ferns break up the flat ground while staying cheap on mobile.
    for(let i=0;i<110;i++){
      const a=midHash(i,701)*Math.PI*2,r=15+midHash(i,702)*50,x=Math.cos(a)*r,z=Math.sin(a)*r+3;
      if(Math.abs(x)<10&&Math.abs(z)<16) continue;
      const g=new THREE.Group();g.position.set(x,groundY(x,z),z);
      for(let k=0;k<3;k++){const blade=new THREE.Mesh(new THREE.ConeGeometry(.025,.38+midHash(k,i)*.28,4),mat(k===1?0x53683f:0x415a37,1));blade.position.set((k-1)*.09,.18,(midHash(k*3,i)-.5)*.12);blade.rotation.z=(k-1)*.22;g.add(blade);}
      scene.add(g);
    }

    for(let i=0;i<80;i++){const x=-88+midHash(i,101)*176,z=-88+midHash(i,111)*176;if(Math.hypot(x,z+2)>30){const grass=new THREE.Mesh(new THREE.ConeGeometry(.08,.55+midHash(i,121)*.7,5),mat(0x4b6840,1));grass.position.set(x,groundY(x,z)+.3,z);scene.add(grass);}}

    // A small watchtower gives vertical scale and a visible landmark.
    const tower=new THREE.Group();tower.position.set(29,groundY(29,25),25);tower.userData={id:"tower",label:"Сторожевая башня"};for(const px of [-2,2])for(const pz of [-2,2]){const p=box(.35,7,.35,0x3c291d,1);p.position.set(px,3.5,pz);tower.add(p);}const deck=box(5,.35,5,0x68472d,1);deck.position.y=5.8;tower.add(deck);const roofT=new THREE.Mesh(new THREE.ConeGeometry(3.8,2.7,4),mat(0x292522,1));roofT.position.y=8;tower.add(roofT);addMesh(tower,"tower","Сторожевая башня");objects.push(tower);
    addRectCollider(29,25,4.8,4.8,0,.08);

    // NPCs with simple wandering paths.
    const npc=(x:number,z:number,id:string,label:string,color:number,phase:number)=>{const g=new THREE.Group();g.userData={id,label,phase,baseX:x,baseZ:z};const body=new THREE.Mesh(new THREE.CapsuleGeometry(.32,.78,4,8),mat(color,.9));body.position.y=.85;g.add(body);const head=new THREE.Mesh(new THREE.SphereGeometry(.25,12,8),mat(0xc99470,.9));head.position.y=1.58;g.add(head);const cloak=box(.7,.9,.15,0x27251f,1);cloak.position.set(0,.82,-.27);g.add(cloak);g.position.set(x,groundY(x,z),z);addMesh(g,id,label);objects.push(g);npcs.push(g);};
    npc(9,-8,"elder","Старейшина",0x73563f,.4);npc(-6,-3,"blacksmith","Кузнец",0x5c3b2b,1.5);npc(21,1,"hunter","Охотник",0x40523f,2.4);npc(5,10,"villager","Житель Мидгарда",0x59634d,3.4);npc(-16,4,"villager2","Житель деревни",0x654b3a,4.2);

    const mistMat=new THREE.MeshBasicMaterial({color:0xc7d4cf,transparent:true,opacity:.045,depthWrite:false});
    const mist=new THREE.Group();
    for(let i=0;i<34;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.9+midHash(i,810)*2.2,8,6),mistMat);m.position.set(-88+midHash(i,811)*176,1.8+midHash(i,812)*2.2,-72+midHash(i,813)*144);mist.add(m);}
    scene.add(mist);

    const hero=midHero3d(h);scene.add(hero);

    const ray=new THREE.Raycaster();const pointer=new THREE.Vector2();
    const click=(e:PointerEvent)=>{if((e.target as HTMLElement)?.closest?.(".mid3d-ui"))return;const r=renderer.domElement.getBoundingClientRect();pointer.x=((e.clientX-r.left)/r.width)*2-1;pointer.y=-((e.clientY-r.top)/r.height)*2+1;ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(objects,true)[0];if(hit){let o:any=hit.object;while(o.parent&&!o.userData?.id)o=o.parent;if(o.userData?.id)on(o.userData.id);}};
    renderer.domElement.addEventListener("pointerup",click);

    const setHomeMode=(inside:boolean)=>{
      insideHomeRef.current=inside;
      setInsideHome(inside);
      setNear("");
      homeInterior.visible=inside;
      // Roof and upper exterior are hidden while inside, making the room readable from the follow camera.
      roofL.visible=!inside; roofR.visible=!inside; cabinRidge.visible=!inside; chimney.visible=!inside; chimneyCap.visible=!inside;
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
      {id:"mimir",label:"Колодец Мимира",x:18,z:15,r:4.8},{id:"norns",label:"Прядильня норн",x:-25,z:43,r:5.4},
      {id:"rune",label:"Древний камень Феху",x:27,z:57,r:4.5},{id:"ritual",label:"Круг Силы",x:-43,z:62,r:6.8},{id:"port",label:"Речной причал",x:-46,z:-15,r:5},
      {id:"ashgrove",label:"Роща Ясеня",x:-4,z:69,r:7.5},{id:"forestEvent",label:eventDone?"Камень Трёх Нитей — место выбора":"Камень Трёх Нитей",x:eventX,z:eventZ,r:4.8},{id:"forestCache",label:"Забытый тайник",x:-15,z:58,r:4.2},{id:"forestWhisper",label:"Камень Шёпота",x:46,z:43,r:4.2},{id:"forestThread",label:"Разорванная нить",x:-48,z:72,r:4.2},{id:"runefield",label:"Поле Рун",x:39,z:70,r:8.0},{id:"oldfarm",label:"Старый хутор",x:-64,z:36,r:6.0},{id:"deer",label:"Поляна Четырёх Оленей",x:30,z:53,r:7.5},{id:"hoddmimir",label:"Лес Ходдмимира",x:61,z:78,r:6.5},{id:"hunterCamp",label:"Забытая стоянка",x:70,z:18,r:8.5},{id:"heroHome",label:"Дверь дома героя",x:75,z:32.75,r:2.8},{id:"deepGrove",label:"Глубокая роща",x:67,z:49,r:9.5},{id:"fallenAsh",label:"Поверженный ясень",x:52,z:7,r:7.5},
      {id:"elder",label:"Старейшина",x:9,z:-8,r:3.2},{id:"blacksmith",label:"Кузнец",x:-6,z:-3,r:3.2},
      {id:"gate",label:"Ворота Мидгарда",x:0,z:-31,r:5},{id:"tower",label:"Сторожевая башня",x:29,z:25,r:4}
    ];

    const resize=()=>{const w=Math.max(1,el.clientWidth),hh=Math.max(1,el.clientHeight);camera.aspect=w/hh;camera.updateProjectionMatrix();renderer.setSize(w,hh,false);};resize();const observer=new ResizeObserver(resize);observer.observe(el);
    let raf=0,last=performance.now();
    const loop=(now:number)=>{
      const dt=Math.min(.05,(now-last)/1000);last=now;const q=state.current;const l=Math.hypot(q.dx,q.dz);
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
      fires.forEach(f=>{f.light.intensity=2.0+Math.sin(now*.012+f.phase)*.5;f.flame.scale.y=.9+Math.sin(now*.009+f.phase)*.12;});
      mist.children.forEach((m,i)=>{m.position.x+=Math.sin(now*.00012+i)*.003;m.position.z+=Math.cos(now*.0001+i)*.002;});
      wildlife.forEach((w,i)=>{
        if(w.kind==='deer'){
          const dx=w.g.position.x-hero.position.x, dz=w.g.position.z-hero.position.z, dist=Math.hypot(dx,dz);
          if(dist<11){
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
        const ang=now*.00105*w.speed+w.phase;const nx=w.x+Math.cos(ang)*w.r,nz=w.z+Math.sin(ang*.83)*w.r*.62;w.g.position.set(nx,groundY(nx,nz),nz);w.g.rotation.y=Math.atan2(Math.cos(ang*.83),-Math.sin(ang)); if(w.kind==='deer') w.g.position.y+=Math.sin(now*.006+i)*.025;
      });
      npcs.forEach((n,i)=>{const phase=n.userData.phase||0;const bx=n.userData.baseX,bz=n.userData.baseZ;const nx=bx+Math.sin(now*.00028+phase)*1.6,nz=bz+Math.cos(now*.00022+phase)*1.1;n.position.set(nx,groundY(nx,nz),nz);n.rotation.y=Math.sin(now*.0004+phase)*.5;});
      renderer.render(scene,camera);raf=requestAnimationFrame(loop);
    };
    raf=requestAnimationFrame(loop);

    return()=>{cancelAnimationFrame(raf);observer.disconnect();renderer.domElement.removeEventListener("pointerup",click);groundTexture.dispose();woodTex.dispose();roofTex.dispose();renderer.dispose();scene.traverse((o:any)=>{if(o.isMesh){o.geometry?.dispose?.();if(Array.isArray(o.material))o.material.forEach((m:any)=>m.dispose?.());else o.material?.dispose?.();}});renderer.domElement.remove();homeActionRef.current=null;};
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
      <b>ᛟ Камень Трёх Нитей</b>
      <span>На камне проступают три линии. Одна ведёт назад. Вторая — к тому, что происходит сейчас. Третья исчезает в тумане будущего.</span>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:past")}}>ᛁ Прошлое — узнать, что здесь произошло</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:present")}}>ᛏ Настоящее — принять знак таким, какой он есть</button>
      <button onPointerDown={e=>e.stopPropagation()} onClick={()=>{setForestEventOpen(false);on("forestEvent:future")}}>ᛉ Будущее — последовать за нитью, которую ещё не видно</button>
    </div>}
    {forestEventOpen&&eventDone&&<div className="mid3d-ui mid3d-interact" style={{bottom:"18%",left:"50%",transform:"translateX(-50%)",width:"min(92vw,360px)",zIndex:30}}>
      <b>Камень Трёх Нитей</b><span>Ты уже выбрал свою нить. Камень помнит этот выбор.</span>
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
    {near&&!ritualOpen&&!forestEventOpen&&(()=>{const [label,id]=near.split("|");const home=id==="heroHome"||id==="heroHomeExit";return <div className="mid3d-ui mid3d-interact"><b>{label}</b><span>{home?(id==="heroHome"?"Дверь заперта только от непрошеных гостей":"Ты у выхода") : "Ты достаточно близко"}</span><button onPointerDown={e=>e.stopPropagation()} onClick={()=>{if(id==="ritual")setRitualOpen(true);else if(id==="forestEvent")setForestEventOpen(true);else if(id==="heroHome")homeActionRef.current?.(true);else if(id==="heroHomeExit")homeActionRef.current?.(false);else on(id);}}>{home?(id==="heroHome"?"Открыть дверь и войти":"Выйти наружу"):"Взаимодействовать"}</button></div>;})()}
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
      if (id === "forestThread") {
        if (!save.done.includes("forest:thread")) {
          setSave(s => ({ ...s, sparks: s.sparks + 22, done: [...new Set([...s.done, "forest:thread"])] }));
          haptic("success");
          say("На ветке висит оборванная нить. Ты не знаешь, кому она принадлежала, но рядом лежит руна судьбы. +22 ✨");
        } else say("Оборванная нить всё ещё висит на ветке. Второго знака она не даёт.");
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

    return <Midgard3D h={heroDef} on={interact} eventDone={save.done.includes("forest:choice")} />;
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
            <div className="hrow">🗡 Оружие: <b>{heroDef.weapon}</b></div>
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
        <div className="scroll"><div className="card center"><div className="big">🏛️</div><div className="qhead2">Чертог путника</div>
          <div className="stats"><div className="stat"><b>✨ {save.sparks}</b><span>Искр</span></div><div className="stat"><b>🏺 {save.artifacts.length}/9</b><span>артефакты</span></div></div>
          <div className="rank">🏆 Ранг: {rank(save.sparks)}</div>
          {save.hero && heroDef && <p className="dim">Герой: {save.hero.name} • {heroDef.race} • испытаний пройдено: {save.trials.length}</p>}
        </div></div>
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
