import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const tg: any = (window as any).Telegram?.WebApp;
const BASE: string = (import.meta as any).env?.BASE_URL || "/";

type Rune = { id: string; sym: string; name: string; meaning: string; task: string; reward: number };
type Realm = {
  id: string; name: string; emoji: string; tag: string; color: string; glow: string; runeSym: string;
  x: number; y: number; runes?: Rune[];
};

/* ==== 9 МИРОВ. color — цвет, glow — свечение, runeSym — руна внутри амулета. ==== */
const REALMS: Realm[] = [
  {
    id: "asgard", name: "Асгард", emoji: "🏛️", tag: "Золотой чертог богов", color: "#ffd76a", glow: "rgba(255, 215, 106, 0.7)", runeSym: "ᛟ", x: 50, y: 8, runes: [
      { id: "algiz", sym: "ᛉ", name: "Альгиз", meaning: "Защита богов", task: "Поблагодари высшие силы за защиту в твоей жизни.", reward: 8 },
      { id: "ingwaz", sym: "ᛜ", name: "Ингуз", meaning: "Плодородие и новый цикл", task: "Заверши один важный этап и начни новый.", reward: 9 },
      { id: "dagaz", sym: "ᛞ", name: "Дагаз", meaning: "Рассвет и прорыв", task: "Сделай шаг навстречу своему главному прорыву.", reward: 10 },
    ]
  },
  {
    id: "alfheim", name: "Альфхейм", emoji: "✨", tag: "Мир светлых эльфов", color: "#e8f4ff", glow: "rgba(232, 244, 255, 0.7)", runeSym: "ᚹ", x: 25, y: 22, runes: [
      { id: "wunjo", sym: "ᚹ", name: "Вуньо", meaning: "Радость и гармония", task: "Сделай сегодня что-то, что принесёт тебе чистую радость.", reward: 6 },
      { id: "laguz", sym: "ᛚ", name: "Лагуз", meaning: "Поток и интуиция", task: "Доверься своей интуиции в одном важном решении.", reward: 7 },
      { id: "mannaz", sym: "ᛗ", name: "Манназ", meaning: "Человечность", task: "Прояви искреннюю доброту к случайному человеку.", reward: 7 },
    ]
  },
  {
    id: "vanaheim", name: "Ванахейм", emoji: "🌿", tag: "Дикий мир природы", color: "#b8e986", glow: "rgba(184, 233, 134, 0.7)", runeSym: "ᛒ", x: 75, y: 22, runes: [
      { id: "berkanan", sym: "ᛒ", name: "Беркана", meaning: "Рост и исцеление", task: "Позаботься о своём теле или вырасти что-то живое.", reward: 6 },
      { id: "perthro", sym: "ᛈ", name: "Пертро", meaning: "Тайна и судьба", task: "Прими неопределённость в одном деле, не пытайся всё контролировать.", reward: 7 },
      { id: "jera", sym: "ᛃ", name: "Йера", meaning: "Урожай и награда", task: "Подведи итоги недели и награди себя за труды.", reward: 8 },
    ]
  },
  {
    id: "midgard", name: "Мидгард", emoji: "🏡", tag: "Земля людей", color: "#7ee787", glow: "rgba(126, 231, 135, 0.7)", runeSym: "ᚠ", x: 50, y: 38, runes: [
      { id: "fehu", sym: "ᚠ", name: "Феху", meaning: "Искра богатства", task: "Запиши 3 вещи, за которые благодарен сегодня.", reward: 5 },
      { id: "uruz", sym: "ᚢ", name: "Уруз", meaning: "Сила природы", task: "Сделай одно дело для тела: прогулка или зарядка.", reward: 5 },
      { id: "thurisaz", sym: "ᚦ", name: "Турисаз", meaning: "Молот защиты", task: "Откажись от одного дела, которое тебя истощает.", reward: 6 },
      { id: "ansuz", sym: "ᚨ", name: "Ансуз", meaning: "Мудрость Одина", task: "Узнай что-то новое и передай это другу.", reward: 6 },
    ]
  },
  {
    id: "jotunheim", name: "Ётунхейм", emoji: "⛰️", tag: "Мир великанов", color: "#c9b49a", glow: "rgba(201, 180, 154, 0.7)", runeSym: "ᚺ", x: 25, y: 55, runes: [
      { id: "hagalaz", sym: "ᚺ", name: "Хагалаз", meaning: "Разрушение старого", task: "Избавься от одной старой вещи или привычки, которая мешает.", reward: 7 },
      { id: "othala", sym: "ᛟ", name: "Одал", meaning: "Наследие и дом", task: "Удели время семье или наведи порядок в доме.", reward: 8 },
      { id: "tiwaz_alt", sym: "ᛏ", name: "Тюр", meaning: "Жертва ради победы", task: "Пойди на малую жертву ради большой цели.", reward: 8 },
    ]
  },
  {
    id: "svartalfheim", name: "Свартальфхейм", emoji: "⚒️", tag: "Кузни дварфов", color: "#ff9d5c", glow: "rgba(255, 157, 92, 0.7)", runeSym: "ᚷ", x: 75, y: 55, runes: [
      { id: "gebo", sym: "ᚷ", name: "Гебо", meaning: "Дар и партнёрство", task: "Сделай искренний подарок или помоги партнёру.", reward: 7 },
      { id: "ehwaz", sym: "ᛖ", name: "Эваз", meaning: "Движение вперёд", task: "Сдвинься с мёртвой точки в одном застоявшемся деле.", reward: 7 },
      { id: "raido", sym: "ᚱ", name: "Райдо", meaning: "Путешествие и ритм", task: "Выстрой правильный ритм дня и следуй ему.", reward: 8 },
    ]
  },
  {
    id: "niflheim", name: "Нифльхейм", emoji: "❄️", tag: "Мир льдов и туманов", color: "#7ec8ff", glow: "rgba(126, 200, 255, 0.7)", runeSym: "ᛁ", x: 25, y: 75, runes: [
      { id: "isa", sym: "ᛁ", name: "Иса", meaning: "Лёд неподвижности", task: "Проведи 10 минут в тишине без телефона.", reward: 5 },
      { id: "nauthiz", sym: "ᚾ", name: "Наутиз", meaning: "Нужда, что учит", task: "Откажись сегодня от одной вредной привычки.", reward: 6 },
      { id: "eihwaz", sym: "ᛇ", name: "Эйваз", meaning: "Столп Древа", task: "Доделай одно дело, которое давно откладывал.", reward: 7 },
    ]
  },
  {
    id: "muspelheim", name: "Муспельхейм", emoji: "🔥", tag: "Мир огня и искр", color: "#ff6b4a", glow: "rgba(255, 107, 74, 0.7)", runeSym: "ᚲ", x: 75, y: 75, runes: [
      { id: "kenaz", sym: "ᚲ", name: "Кеназ", meaning: "Факел творчества", task: "Создай сегодня что-то своими руками или словами.", reward: 5 },
      { id: "sowilo", sym: "ᛊ", name: "Совило", meaning: "Солнце победы", task: "Сделай один шаг к своей самой смелой цели.", reward: 6 },
      { id: "teiwaz", sym: "ᛏ", name: "Тейваз", meaning: "Меч справедливости", task: "Восстанови справедливость в одном малом деле.", reward: 7 },
    ]
  },
  {
    id: "helheim", name: "Хельхейм", emoji: "🕯️", tag: "Врата подземного мира", color: "#b678ff", glow: "rgba(182, 120, 255, 0.7)", runeSym: "ᛉ", x: 50, y: 92, runes: [
      { id: "calc", sym: "ᚲ", name: "Кальк", meaning: "Трансформация", task: "Прими одно неизбежное изменение в своей жизни.", reward: 8 },
      { id: "gar", sym: "ᚷ", name: "Гар", meaning: "Копьё судьбы", task: "Направь свою энергию точно в одну главную цель.", reward: 9 },
      { id: "yggdrasil", sym: "ᛉ", name: "Иггдрасиль", meaning: "Единство всего", task: "Осознай связь всех своих действий в единое целое.", reward: 10 },
    ]
  },
];

const ALL_RUNES = REALMS.flatMap(r => (r.runes || []).map(x => ({ ...x, realm: r.id })));
const NAV = [
  { id: "tree", ic: "🌲", t: "Путь" },
  { id: "quests", ic: "📜", t: "Испытания" },
  { id: "gift", ic: "🎁", t: "Дар" },
  { id: "hall", ic: "🏛️", t: "Чертог" },
];

type Screen = { t: "tree" } | { t: "realm"; id: string } | { t: "quests" } | { t: "gift" } | { t: "hall" };
type Save = { sparks: number; done: string[]; gift: string };
const DEF: Save = { sparks: 25, done: [], gift: "" };

const loadSave = (): Save => { try { return { ...DEF, ...JSON.parse(localStorage.getItem("yggdrasil") || "") }; } catch { return { ...DEF }; } };
const today = () => new Date().toISOString().slice(0, 10);
const rank = (n: number) => (n >= 20 ? "Всеотец" : n >= 14 ? "Мудрец Древа" : n >= 8 ? "Хранитель рун" : n >= 3 ? "Странник рун" : "Путник");
const stonePos = (i: number, total: number) => ({ x: i % 2 === 0 ? 30 : 70, y: total > 1 ? 25 + i * (50 / (total - 1)) : 45 });

function BgImg({ name, className }: { name: string; className: string }) {
  const list = [
    BASE + "img/" + name + ".jpg", BASE + "img/" + name + ".jpeg",
    BASE + "img/" + name + ".png", BASE + "img/" + name + ".webp",
  ];
  const [i, setI] = useState(0);
  if (i >= list.length) return null;
  return <img className={className} src={list[i]} alt="" onError={() => setI(i + 1)} />;
}

const CSS = `
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body,#root{height:100%}
body{background:#0b0f0c;color:#e8f0e8;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;overflow:hidden}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.app{height:100vh;display:flex;flex-direction:column}
.hdr{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;background:rgba(8,10,9,.92);border-bottom:1px solid #1e2a20;z-index:6}
.title{font-size:15px;font-weight:600}
.back{color:#6db3ff;font-size:15px}
.sparks{color:#ffb35c;font-weight:700;font-size:15px;white-space:nowrap}

/* ==== ГЛАВНЫЙ ЭКРАН: ДРЕВО ==== */
.maparea{flex:1;position:relative;overflow:hidden;background:#0b0f0c}
.mapwrap{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;scrollbar-width:none}
.mapwrap::-webkit-scrollbar{display:none}
.mapcanvas{width:100%;min-height:100%;position:relative;margin:0 auto}
.mapimg{width:100%;height:auto;display:block}

/* ==== МАГИЧЕСКИЕ АМУЛЕТЫ ==== */
.marker{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:6px;z-index:3}
.amulet-wrap{
  position:relative;
  width:44px;height:44px;
  display:flex;align-items:center;justify-content:center;
}
/* Вращающийся рунический ободок */
.amulet-ring{
  position:absolute;
  inset:0;
  border-radius:50%;
  border:1px dashed;
  opacity:0.5;
  animation:spin 15s linear infinite;
  pointer-events:none;
}
/* Сам амулет: восьмиугольная форма кристалла */
.amulet-core{
  position:relative;
  width:36px;height:36px;
  display:flex;align-items:center;justify-content:center;
  font-size:18px;
  font-weight:bold;
  /* Форма восьмиконечной звезды/руны */
  clip-path:polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%);
  background:linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.85));
  border:1.5px solid;
  backdrop-filter:blur(4px);
  -webkit-backdrop-filter:blur(4px);
  animation:amuletPulse 3s ease-in-out infinite;
  transition:transform 0.2s;
  z-index:2;
  text-shadow:0 0 6px currentColor;
}
.marker:active .amulet-core{transform:scale(0.85)}

/* ====
