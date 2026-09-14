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
type Save = { sparks: number; done: string[]; gift: string; hero: { id: string; name: string } | null; trials: string[]; artifacts: string[]; watch: number; streak: number };
const DEF: Save = { sparks: 25, done: [], gift: "", hero: null, trials: [], artifacts: [], watch: 0, streak: 0 };
const loadSave = (): Save => { try { const s = { ...DEF, ...JSON.parse(localStorage.getItem("yggdrasil") || "") }; if (!s.watch) s.watch = Date.now(); return s; } catch { return { ...DEF, watch: Date.now() }; } };
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

const midMat = (c: number, roughness = 0.88) =>
  new THREE.MeshStandardMaterial({ color: c, roughness });

const midBox = (
  w: number,
  h: number,
  d: number,
  materialOrColor: number | THREE.Material
) =>
  new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    typeof materialOrColor === "number"
      ? midMat(materialOrColor)
      : materialOrColor
  );

const midCyl = (r: number, h: number, c: number, segments = 10) =>
  new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, segments), midMat(c));

function midTree(x: number, z: number, s = 1) {
  const g = new THREE.Group();
  const trunk = midCyl(0.38 * s, 2.3 * s, 0x5a3926);
  trunk.position.y = 1.15 * s;
  g.add(trunk);
  for (let i = 0; i < 3; i++) {
    const crown = new THREE.Mesh(
      new THREE.ConeGeometry((1.55 - i * 0.25) * s, (2.5 - i * 0.2) * s, 8),
      midMat(0x28512e)
    );
    crown.position.y = (2.5 + i * 0.95) * s;
    g.add(crown);
  }
  g.position.set(x, 0, z);
  g.traverse((o: any) => {
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
  });
  return g;
}

function midHero3d(h: HeroDef) {
  const g = new THREE.Group();
  const clothColor =
    h.id === "berserk" ? 0x5a2020 :
    h.id === "dwarf" ? 0x71482f : 0x263b4d;
  const skinColor = h.gender === "f" ? 0xd9ad8a : 0xc9936f;

  const body = midCyl(0.46, 0.9, clothColor);
  body.position.y = 0.95;
  g.add(body);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 16, 12),
    midMat(skinColor)
  );
  head.position.y = 1.65;
  g.add(head);

  const leg1 = midBox(0.2, 0.72, 0.2, 0x1b1e20);
  const leg2 = midBox(0.2, 0.72, 0.2, 0x1b1e20);
  leg1.position.set(-0.16, 0.36, 0);
  leg2.position.set(0.16, 0.36, 0);
  g.add(leg1, leg2);

  const helm = new THREE.Mesh(
    new THREE.ConeGeometry(0.43, 0.3, 8),
    midMat(0x77736a)
  );
  helm.position.y = 1.96;
  g.add(helm);

  const cape = midBox(0.7, 1, 0.08, h.id === "berserk" ? 0x2b0c0c : 0x18272e);
  cape.position.set(0, 1, -0.36);
  g.add(cape);

  const weapon = midBox(0.08, 1.25, 0.08, 0xc3c8ca);
  weapon.position.set(0.58, 1.1, 0);
  weapon.rotation.z = -0.35;
  g.add(weapon);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.65, 24),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  g.add(shadow);

  return g;
}

function Midgard3D({ h, on }: { h: HeroDef; on: (id: string) => void }) {
  const mount = useRef<HTMLDivElement>(null);
  const joy = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, z: 34, dx: 0, dz: 0 });

  const [near, setNear] = useState("");
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8da894);
    scene.fog = new THREE.Fog(0x8da894, 38, 105);

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 180);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xe4efe4, 0x3b2c22, 1.8));

    const sun = new THREE.DirectionalLight(0xffefc8, 2.2);
    sun.position.set(-18, 30, 12);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -55;
    sun.shadow.camera.right = 55;
    sun.shadow.camera.top = 55;
    sun.shadow.camera.bottom = -55;
    scene.add(sun);

    // Большая земля — герой действительно стоит на поверхности мира.
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 120),
      new THREE.MeshStandardMaterial({ color: 0x557b4e, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Дорога с развилками.
    const roadMain = midBox(7, 0.08, 100, 0x8b7150);
    roadMain.position.set(0, 0.05, 0);
    roadMain.receiveShadow = true;
    scene.add(roadMain);

    const roadVillage = midBox(34, 0.08, 5, 0x8b7150);
    roadVillage.position.set(15, 0.055, -18);
    roadVillage.receiveShadow = true;
    scene.add(roadVillage);

    const roadForest = midBox(28, 0.08, 5, 0x8b7150);
    roadForest.rotation.y = -0.42;
    roadForest.position.set(-10, 0.055, -2);
    roadForest.receiveShadow = true;
    scene.add(roadForest);

    // Река и мост.
    const river = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 120),
      new THREE.MeshStandardMaterial({ color: 0x2b6375, roughness: 0.22, metalness: 0.05 })
    );
    river.rotation.x = -Math.PI / 2;
    river.position.set(-35, 0.02, 0);
    scene.add(river);

    const bridge = midBox(11, 0.55, 6, 0x6d5037);
    bridge.position.set(-27, 0.3, 0);
    bridge.castShadow = true;
    scene.add(bridge);

    // Лес.
    const treeSpots: Array<[number, number, number]> = [
      [-18, -34, 1.0], [-8, -39, 0.8], [18, -35, 1.2], [27, -27, 0.9],
      [-25, -18, 0.8], [28, 2, 1.0], [-25, 18, 1.2], [24, 30, 0.9],
      [-18, 31, 1.1], [17, 39, 0.85], [31, 18, 0.9], [-31, 8, 1.1],
    ];
    treeSpots.forEach(([x, z, s]) => scene.add(midTree(x, z, s)));

    const objects: THREE.Object3D[] = [];

    function placeHouse(x: number, z: number, label: string, id: string) {
      const g = new THREE.Group();
      g.userData = { label, id };

      const wood = midMat(0x60412f, 0.98);
      const darkWood = midMat(0x2f2119, 0.98);
      const beam = midMat(0x3b281d, 0.98);
      const stoneMat = midMat(0x62645d, 0.98);
      const roofMat = midMat(0x3d4436, 1);
      const mossMat = midMat(0x536348, 1);

      // Каменный фундамент.
      const foundation = midBox(6.9, 0.55, 5.8, stoneMat);
      foundation.position.y = 0.28;
      g.add(foundation);

      // Сруб.
      const body = midBox(6.25, 3.55, 5.15, 0x65442f);
      body.position.y = 2.05;
      g.add(body);

      // Видимые венцы брёвен.
      for (let i = 0; i < 6; i++) {
        const log = midBox(6.45, 0.14, 5.32, wood);
        log.position.y = 0.82 + i * 0.58;
        g.add(log);
      }

      // Угловые стойки.
      [[-3.08, -2.55], [3.08, -2.55], [-3.08, 2.55], [3.08, 2.55]].forEach(([px, pz]) => {
        const post = midBox(0.34, 4.2, 0.34, beam);
        post.position.set(px, 2.25, pz);
        g.add(post);
      });

      // Высокий северный фронтон.
      const gableL = midBox(0.26, 4.7, 0.30, beam);
      gableL.rotation.z = -0.63;
      gableL.position.set(-1.68, 5.02, 2.60);
      g.add(gableL);
      const gableR = gableL.clone();
      gableR.rotation.z = 0.63;
      gableR.position.x = 1.68;
      g.add(gableR);

      const ridge = midBox(0.30, 0.30, 5.55, beam);
      ridge.position.set(0, 6.15, 0);
      g.add(ridge);

      // Два объёмных ската крыши.
      const roofL = midBox(4.2, 0.32, 5.75, roofMat);
      roofL.rotation.z = -0.58;
      roofL.position.set(-1.78, 5.08, 0);
      g.add(roofL);
      const roofR = roofL.clone();
      roofR.rotation.z = 0.58;
      roofR.position.x = 1.78;
      g.add(roofR);

      // Полосы дерна/мха — дешёвая замена тяжёлой текстуре.
      for (let i = -2; i <= 2; i++) {
        const stripL = midBox(0.9, 0.09, 5.35, mossMat);
        stripL.rotation.z = -0.58;
        stripL.position.set(-1.55 + i * 0.76, 5.28 + Math.abs(i) * 0.12, 0);
        g.add(stripL);
        const stripR = stripL.clone();
        stripR.rotation.z = 0.58;
        stripR.position.x = 1.55 + i * 0.76;
        g.add(stripR);
      }

      // Дверь и массивная рама.
      const door = midBox(1.12, 2.05, 0.20, darkWood);
      door.position.set(0, 1.50, 2.63);
      g.add(door);
      const frameL = midBox(0.16, 2.25, 0.24, beam);
      frameL.position.set(-0.70, 1.58, 2.74);
      g.add(frameL);
      const frameR = frameL.clone();
      frameR.position.x = 0.70;
      g.add(frameR);
      const frameTop = midBox(1.55, 0.17, 0.24, beam);
      frameTop.position.set(0, 2.62, 2.74);
      g.add(frameTop);

      // Два тёплых окна.
      const glowMat = new THREE.MeshStandardMaterial({
        color: 0xd58d3a,
        emissive: 0x7b3f10,
        emissiveIntensity: 1.35,
        roughness: 0.7,
      });
      [-2.05, 2.05].forEach((wx) => {
        const winFrame = midBox(1.05, 0.88, 0.14, beam);
        winFrame.position.set(wx, 2.15, 2.62);
        g.add(winFrame);
        const win = midBox(0.72, 0.58, 0.08, glowMat);
        win.position.set(wx, 2.15, 2.72);
        g.add(win);
        const v = midBox(0.07, 0.68, 0.10, darkWood);
        v.position.set(wx, 2.15, 2.80);
        g.add(v);
        const hbar = midBox(0.78, 0.07, 0.10, darkWood);
        hbar.position.set(wx, 2.15, 2.80);
        g.add(hbar);
      });

      // Небольшой каменный дымоход.
      const chimney = midBox(0.78, 1.45, 0.78, 0x514a43);
      chimney.position.set(-1.65, 6.0, -1.0);
      g.add(chimney);
      const smoke = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x8a8982, transparent: true, opacity: 0.14 })
      );
      smoke.position.set(-1.65, 7.02, -1.0);
      g.add(smoke);

      // Ступени из камня.
      const step1 = midBox(2.15, 0.20, 0.95, stoneMat);
      step1.position.set(0, 0.72, 3.05);
      g.add(step1);
      const step2 = midBox(1.65, 0.18, 0.60, stoneMat);
      step2.position.set(0, 0.48, 3.42);
      g.add(step2);

      // Камни вокруг дома.
      const rocks: Array<[number, number, number, number]> = [
        [-4.2, 0.48, -2.9, 0.85], [4.15, 0.52, -2.8, 0.72],
        [-4.45, 0.45, 2.75, 0.66], [4.45, 0.50, 2.55, 0.78],
        [-3.9, 0.34, 4.0, 0.58], [3.7, 0.36, 4.0, 0.52],
        [-5.0, 0.45, 0.0, 0.62], [5.0, 0.44, -0.15, 0.60],
      ];
      rocks.forEach(([rx, ry, rz, size], i) => {
        const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(size, 0), stoneMat);
        rock.scale.set(1.25, 0.72, 0.95);
        rock.position.set(rx, ry, rz);
        rock.rotation.set(0.1 * i, 0.4 * i, 0.08 * i);
        g.add(rock);
      });

      // Поленница и бочки.
      for (let i = 0; i < 3; i++) {
        const log = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 1.7, 8), midMat(0x704a30, 1));
        log.rotation.z = Math.PI / 2;
        log.position.set(-3.65, 0.38 + (i % 2) * 0.30, 3.0 + Math.floor(i / 2) * 0.36);
        g.add(log);
      }
      for (let i = 0; i < 2; i++) {
        const barrel = midCyl(0.40, 0.82, midMat(0x65432c, 1), 10);
        barrel.position.set(3.65 + i * 0.78, 0.83, 3.0);
        g.add(barrel);
      }

      // Низкая ограда и проход.
      const fenceMat = midMat(0x493326, 1);
      const post = (px: number, pz: number) => {
        const p = midBox(0.18, 1.25, 0.18, fenceMat);
        p.position.set(px, 0.63, pz);
        g.add(p);
      };
      [-4.7, -3.5, 3.5, 4.7].forEach((px) => post(px, 3.72));
      const railL = midBox(1.35, 0.13, 0.13, fenceMat);
      railL.position.set(-4.1, 0.72, 3.72);
      g.add(railL);
      const railR = railL.clone();
      railR.position.x = 4.1;
      g.add(railR);

      // Кузница получает дополнительные рабочие детали.
      if (id === "forge") {
        const canopy = midBox(7.25, 0.20, 6.20, 0x493225);
        canopy.position.set(0, 5.70, 0.25);
        g.add(canopy);
        const postMat = midMat(0x38271e, 0.98);
        [[-3.15, 2.6, -2.55], [3.15, 2.6, -2.55], [-3.15, 2.6, 2.55], [3.15, 2.6, 2.55]].forEach(([px, py, pz]) => {
          const p = midBox(0.28, 5.10, 0.28, postMat);
          p.position.set(px, py, pz);
          g.add(p);
        });
        const anvilBase = midBox(1.30, 0.70, 0.82, 0x262826);
        anvilBase.position.set(-2.0, 0.36, 1.0);
        g.add(anvilBase);
        const anvilTop = midBox(1.75, 0.24, 0.92, 0x383a38);
        anvilTop.position.set(-2.0, 0.83, 1.0);
        g.add(anvilTop);
        const fire = new THREE.Mesh(
          new THREE.SphereGeometry(0.50, 8, 6),
          new THREE.MeshBasicMaterial({ color: 0xff7a22, transparent: true, opacity: 0.85 })
        );
        fire.scale.set(1, 1.5, 0.8);
        fire.position.set(1.9, 1.0, 1.0);
        g.add(fire);
        const fireLight = new THREE.PointLight(0xff8a32, 2.2, 8);
        fireLight.position.set(1.9, 1.25, 1.0);
        g.add(fireLight);
      }

      g.position.set(x, 0, z);
      g.traverse((o: any) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      scene.add(g);
      objects.push(g);
    }

    placeHouse(12, -18, "Дом старейшины", "house");
    placeHouse(-11, -9, "Кузница", "forge");

    // Колодец Мимира.
    const mimir = new THREE.Group();
    mimir.userData = { label: "Колодец Мимира", id: "mimir" };

    const well = midCyl(1.25, 1.3, 0x3e4d46, 14);
    well.position.y = 0.65;
    mimir.add(well);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.45, 0.10, 8, 32),
      new THREE.MeshStandardMaterial({
        color: 0x7ee787,
        emissive: 0x245d35,
        emissiveIntensity: 1.6,
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.25;
    mimir.add(ring);

    const water = new THREE.Mesh(
      new THREE.CircleGeometry(0.9, 24),
      new THREE.MeshStandardMaterial({
        color: 0x163b45,
        emissive: 0x0b2830,
        emissiveIntensity: 0.8,
      })
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = 1.32;
    mimir.add(water);

    mimir.position.set(13, 0, 6);
    scene.add(mimir);
    objects.push(mimir);

    // Камень с руной.
    const runeStone = new THREE.Group();
    runeStone.userData = { label: "Древний камень", id: "rune" };
    const stone = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1.25, 0),
      midMat(0x4b554e, 0.98)
    );
    stone.position.y = 1.1;
    runeStone.add(stone);
    const runeGlow = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.06, 8, 24),
      new THREE.MeshStandardMaterial({
        color: 0xffd76a,
        emissive: 0x8a5d12,
        emissiveIntensity: 1.8,
      })
    );
    runeGlow.rotation.x = Math.PI / 2;
    runeGlow.position.y = 1.15;
    runeStone.add(runeGlow);
    runeStone.position.set(8, 0, 18);
    scene.add(runeStone);
    objects.push(runeStone);

    const hero = midHero3d(h);
    scene.add(hero);

    const ray = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const click = (e: PointerEvent) => {
      // Не обрабатываем клики по джойстику/кнопкам UI.
      if ((e.target as HTMLElement)?.closest?.(".mid3d-ui")) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      ray.setFromCamera(pointer, camera);
      const hit = ray.intersectObjects(objects, true)[0];
      if (hit) {
        let o: any = hit.object;
        while (o.parent && !o.userData?.id) o = o.parent;
        if (o.userData?.id) on(o.userData.id);
      }
    };
    renderer.domElement.addEventListener("pointerup", click);

    const resize = () => {
      const w = Math.max(1, el.clientWidth);
      const hh = Math.max(1, el.clientHeight);
      camera.aspect = w / hh;
      camera.updateProjectionMatrix();
      renderer.setSize(w, hh, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(el);

    let raf = 0;
    let last = performance.now();

    const destinations = [
      { id: "house", label: "Дом старейшины", x: 12, z: -18 },
      { id: "forge", label: "Кузница", x: -11, z: -9 },
      { id: "mimir", label: "Колодец Мимира", x: 13, z: 6 },
      { id: "rune", label: "Древний камень", x: 8, z: 18 },
    ];

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const q = state.current;
      const len = Math.hypot(q.dx, q.dz);

      if (len > 0.05) {
        q.x += (q.dx / len) * 7 * dt;
        q.z += (q.dz / len) * 7 * dt;
        hero.rotation.y = Math.atan2(q.dx, q.dz);
        setMoving(true);
      } else {
        setMoving(false);
      }

      // Границы доступной первой зоны.
      q.x = Math.max(-29, Math.min(29, q.x));
      q.z = Math.max(-47, Math.min(47, q.z));

      hero.position.set(q.x, 0.02, q.z);

      const targetCam = new THREE.Vector3(q.x, 10.5, q.z + 15.5);
      camera.position.lerp(targetCam, 0.10);
      camera.lookAt(q.x, 1.2, q.z);

      let found = "";
      let foundId = "";
      for (const d of destinations) {
        if (Math.hypot(q.x - d.x, q.z - d.z) < 5.2) {
          found = d.label;
          foundId = d.id;
          break;
        }
      }
      setNear(found ? `${found}|${foundId}` : "");

      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      renderer.domElement.removeEventListener("pointerup", click);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [h.id, on]);

  const joyMove = (e: React.PointerEvent) => {
    const a = joy.current;
    const b = knob.current;
    if (!a || !b) return;
    const r = a.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const max = 42;
    let x = e.clientX - cx;
    let y = e.clientY - cy;
    const len = Math.hypot(x, y);
    if (len > max) {
      x = (x / len) * max;
      y = (y / len) * max;
    }
    b.style.transform = `translate(${x}px, ${y}px)`;
    state.current.dx = x / max;
    state.current.dz = y / max;
  };

  const stopJoy = () => {
    if (knob.current) knob.current.style.transform = "translate(0,0)";
    state.current.dx = 0;
    state.current.dz = 0;
  };

  return (
    <div
      className="content mid3d-scene"
      ref={mount}
      style={{ touchAction: "none", userSelect: "none", WebkitUserSelect: "none" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="mid3d-ui mid3d-top">
        <div className="mid3d-pill"><b>МИДГАРД</b><span>Земля людей</span></div>
        <div className="mid3d-pill"><b>ᚠ</b><span>Путь начинается</span></div>
      </div>

      {near && (() => {
        const [label, id] = near.split("|");
        return (
          <div className="mid3d-ui mid3d-interact">
            <b>{label}</b>
            <span>Ты достаточно близко</span>
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => on(id)}
            >
              Взаимодействовать
            </button>
          </div>
        );
      })()}

      <div
        className="mid3d-ui mid3d-joy"
        ref={joy}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          joyMove(e);
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) joyMove(e);
        }}
        onPointerUp={stopJoy}
        onPointerCancel={stopJoy}
      >
        <div className="mid3d-knob" ref={knob} />
      </div>

      <button
        className="mid3d-ui mid3d-action"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => on("event")}
      >
        ᚠ
      </button>

      <div className="mid3d-ui mid3d-hint">
        {moving ? "Герой идёт по земле" : "Исследуй Мидгард • подойди к месту"}
      </div>
    </div>
  );
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
    setRes(ai);
    if (ai === q.c) { haptic("success"); const add = 12 + idx * 3 + (heroDef?.id === "dwarf" ? 6 : 0); say("Верно! Сундук хозяина: +" + add + " ✨"); finishTrial(id, idx, add); }
    else { haptic(); setFlog(MASTERS[id].name + " мрачнеет: «Что ж — пусть решит сталь!»"); }
  };
  const useWhisper = (id: string) => { const idx = trialIdx(id); const q = QUESTS[id][idx]; const wrong = q.a.findIndex((_, i) => i !== q.c && i !== removed); setRemoved(wrong); setWhisper(true); haptic(); say("Шёпот ветров уносит один ответ..."); };
  const startFight = (id: string) => { const m = MASTERS[id]; setMhp(m.hp); setHhp(heroDef!.hp); setHen(heroDef!.en); setOver(""); setShield(false); setValk(false); setFlog(m.name + " поднимает оружие!"); setScreen({ t: "fight", id }); };
  const fightAct = (id: string, kind: "hit" | "rune" | "shield") => {
    if (over) return;
    const m = MASTERS[id]; const idx = trialIdx(id);
    let dmg = 0; let log = ""; let nhen = hen; let nshield = shield;
    if (kind === "hit") { dmg = heroDef!.str + rnd(4); if (heroDef!.id === "berserk" && hhp <= heroDef!.hp / 2) { dmg *= 2; log = "Медвежья ярость! "; } log += "Ты бьёшь: " + heroDef!.weapon + " — −" + dmg + " хозяину."; }
    if (kind === "rune") { if (hen < 4) { say("Мало энергии для заклинания!"); return; } nhen = hen - 4; dmg = heroDef!.en + 2 + rnd(5); log = "Руническое заклинание вспыхивает: −" + dmg + " хозяину."; }
    if (kind === "shield") { nshield = true; log = "Ты поднимаешь щит — удар ослабнет."; }
    const nm = mhp - dmg;
    if (nm <= 0) { setMhp(0); setHen(nhen); setOver("win"); const add = 8 + idx * 2; setFlog("Хозяин повержен! Награда: +" + add + " ✨"); finishTrial(id, idx, add); return; }
    let md = m.atk + rnd(3); let mlog = "";
    if (nshield) { md = Math.ceil(md * 0.3); mlog = " Щит принял большую часть удара."; }
    if (heroDef!.id === "dwarf") md = Math.ceil(md * 0.75);
    let nh = hhp;
    if (heroDef!.id === "viking" && !valk && nh - md <= 0) { setValk(true); md = 0; mlog = " Крылья бури поглотили смертельный удар!"; }
    nh = nh - md;
    setMhp(nm); setHhp(Math.max(0, nh)); setHen(nhen); setShield(false);
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
        say('Мимир: «Знание имеет цену. Слушай внимательно.»');
        return;
      }
      if (id === "forge") {
        say("Кузница ждёт. Здесь можно будет закалить оружие.");
        return;
      }
      if (id === "house") {
        say("Старейшина Мидгарда: «В деревне знают путь к лесу.»");
        return;
      }
      if (id === "rune") {
        say("Древний камень откликается руной ᚠ.");
        return;
      }
      if (id === "event") {
        say("Первое событие Мидгарда начинается здесь.");
      }
    };

    return <Midgard3D h={heroDef} on={interact} />;
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
