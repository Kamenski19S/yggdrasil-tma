 import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const tg: any = (window as any).Telegram?.WebApp;
const BASE: string = (import.meta as any).env?.BASE_URL || "/";

type Rune = { id: string; sym: string; name: string; meaning: string; task: string; reward: number };
type Realm = {
  id: string; name: string; emoji: string; tag: string; color: string; glow: string; runeSym: string;
  x: number; y: number; runes?: Rune[];
};

const REALMS: Realm[] = [
  { id: "asgard", name: "Асгард", emoji: "🏛️", tag: "Золотой чертог богов", color: "#ffd76a", glow: "rgba(255,215,106,0.7)", runeSym: "ᛟ", x: 50, y: 8, runes: [
    { id: "algiz", sym: "ᛉ", name: "Альгиз", meaning: "Защита богов", task: "Поблагодари высшие силы за защиту.", reward: 8 },
    { id: "ingwaz", sym: "ᛜ", name: "Ингуз", meaning: "Новый цикл", task: "Заверши этап и начни новый.", reward: 9 },
    { id: "dagaz", sym: "ᛞ", name: "Дагаз", meaning: "Рассвет", task: "Сделай шаг к прорыву.", reward: 10 },
  ]},
  { id: "alfheim", name: "Альфхейм", emoji: "✨", tag: "Мир светлых эльфов", color: "#e8f4ff", glow: "rgba(232,244,255,0.7)", runeSym: "ᚹ", x: 25, y: 22, runes: [
    { id: "wunjo", sym: "ᚹ", name: "Вуньо", meaning: "Радость", task: "Сделай что-то для радости.", reward: 6 },
    { id: "laguz", sym: "ᛚ", name: "Лагуз", meaning: "Интуиция", task: "Доверься интуиции.", reward: 7 },
    { id: "mannaz", sym: "ᛗ", name: "Манназ", meaning: "Человечность", task: "Прояви доброту.", reward: 7 },
  ]},
  { id: "vanaheim", name: "Ванахейм", emoji: "🌿", tag: "Дикий мир природы", color: "#b8e986", glow: "rgba(184,233,134,0.7)", runeSym: "ᛒ", x: 75, y: 22, runes: [
    { id: "berkanan", sym: "ᛒ", name: "Беркана", meaning: "Рост", task: "Позаботься о теле.", reward: 6 },
    { id: "perthro", sym: "ᛈ", name: "Пертро", meaning: "Тайна", task: "Прими неопределённость.", reward: 7 },
    { id: "jera", sym: "ᛃ", name: "Йера", meaning: "Урожай", task: "Награди себя за труды.", reward: 8 },
  ]},
  { id: "midgard", name: "Мидгард", emoji: "🏡", tag: "Земля людей", color: "#7ee787", glow: "rgba(126,231,135,0.7)", runeSym: "ᚠ", x: 50, y: 38, runes: [
    { id: "fehu", sym: "ᚠ", name: "Феху", meaning: "Богатство", task: "Запиши 3 вещи для благодарности.", reward: 5 },
    { id: "uruz", sym: "ᚢ", name: "Уруз", meaning: "Сила", task: "Прогулка или зарядка.", reward: 5 },
    { id: "thurisaz", sym: "ᚦ", name: "Турисаз", meaning: "Защита", task: "Откажись от истощающего дела.", reward: 6 },
    { id: "ansuz", sym: "ᚨ", name: "Ансуз", meaning: "Мудрость", task: "Узнай новое и передай другу.", reward: 6 },
  ]},
  { id: "jotunheim", name: "Ётунхейм", emoji: "⛰️", tag: "Мир великанов", color: "#c9b49a", glow: "rgba(201,180,154,0.7)", runeSym: "ᚺ", x: 25, y: 55, runes: [
    { id: "hagalaz", sym: "ᚺ", name: "Хагалаз", meaning: "Разрушение", task: "Избавься от старого.", reward: 7 },
    { id: "othala", sym: "ᛟ", name: "Одал", meaning: "Дом", task: "Удели время семье.", reward: 8 },
    { id: "tiwaz_alt", sym: "ᛏ", name: "Тюр", meaning: "Жертва", task: "Малая жертва ради цели.", reward: 8 },
  ]},
  { id: "svartalfheim", name: "Свартальфхейм", emoji: "⚒️", tag: "Кузни дварфов", color: "#ff9d5c", glow: "rgba(255,157,92,0.7)", runeSym: "ᚷ", x: 75, y: 55, runes: [
    { id: "gebo", sym: "ᚷ", name: "Гебо", meaning: "Дар", task: "Сделай подарок.", reward: 7 },
    { id: "ehwaz", sym: "ᛖ", name: "Эваз", meaning: "Движение", task: "Сдвинься с мёртвой точки.", reward: 7 },
    { id: "raido", sym: "ᚱ", name: "Райдо", meaning: "Ритм", task: "Выстрой ритм дня.", reward: 8 },
  ]},
  { id: "niflheim", name: "Нифльхейм", emoji: "❄️", tag: "Мир льдов", color: "#7ec8ff", glow: "rgba(126,200,255,0.7)", runeSym: "ᛁ", x: 25, y: 75, runes: [
    { id: "isa", sym: "ᛁ", name: "Иса", meaning: "Лёд", task: "10 минут тишины.", reward: 5 },
    { id: "nauthiz", sym: "ᚾ", name: "Наутиз", meaning: "Нужда", task: "Откажись от привычки.", reward: 6 },
    { id: "eihwaz", sym: "ᛇ", name: "Эйваз", meaning: "Стойкость", task: "Доделай отложенное.", reward: 7 },
  ]},
  { id: "muspelheim", name: "Муспельхейм", emoji: "🔥", tag: "Мир огня", color: "#ff6b4a", glow: "rgba(255,107,74,0.7)", runeSym: "ᚲ", x: 75, y: 75, runes: [
    { id: "kenaz", sym: "ᚲ", name: "Кеназ", meaning: "Творчество", task: "Создай что-то.", reward: 5 },
    { id: "sowilo", sym: "ᛊ", name: "Совило", meaning: "Победа", task: "Шаг к смелой цели.", reward: 6 },
    { id: "teiwaz", sym: "ᛏ", name: "Тейваз", meaning: "Справедливость", task: "Восстанови справедливость.", reward: 7 },
  ]},
  { id: "helheim", name: "Хельхейм", emoji: "🕯️", tag: "Подземный мир", color: "#b678ff", glow: "rgba(182,120,255,0.7)", runeSym: "ᛉ", x: 50, y: 92, runes: [
    { id: "calc", sym: "ᚲ", name: "Кальк", meaning: "Трансформация", task: "Прими изменение.", reward: 8 },
    { id: "gar", sym: "ᚷ", name: "Гар", meaning: "Судьба", task: "Энергия в одну цель.", reward: 9 },
    { id: "yggdrasil", sym: "ᛉ", name: "Иггдрасиль", meaning: "Единство", task: "Осознай связь действий.", reward: 10 },
  ]},
];

const ALL_RUNES = REALMS.flatMap(r => (r.runes || []).map(x => ({ ...x, realm: r.id })));
const NAV = [{ id: "tree", ic: "🌲", t: "Путь" }, { id: "quests", ic: "📜", t: "Испытания" }, { id: "gift", ic: "🎁", t: "Дар" }, { id: "hall", ic: "🏛️", t: "Чертог" }];
type Screen = { t: "tree" } | { t: "realm"; id: string } | { t: "quests" } | { t: "gift" } | { t: "hall" };
type Save = { sparks: number; done: string[]; gift: string };
const DEF: Save = { sparks: 25, done: [], gift: "" };
const loadSave = (): Save => { try { return { ...DEF, ...JSON.parse(localStorage.getItem("yggdrasil") || "") }; } catch { return { ...DEF }; } };
const today = () => new Date().toISOString().slice(0, 10);
const rank = (n: number) => (n >= 20 ? "Всеотец" : n >= 14 ? "Мудрец Древа" : n >= 8 ? "Хранитель рун" : n >= 3 ? "Странник рун" : "Путник");
const stonePos = (i: number, total: number) => ({ x: i % 2 === 0 ? 30 : 70, y: total > 1 ? 25 + i * (50 / (total - 1)) : 45 });

function BgImg({ name, className }: { name: string; className: string }) {
  const list = [BASE+"img/"+name+".jpg", BASE+"img/"+name+".jpeg", BASE+"img/"+name+".png", BASE+"img/"+name+".webp"];
  const [i, setI] = useState(0);
  if (i >= list.length) return null;
  return <img className={className} src={list[i]} alt="" onError={() => setI(i + 1)} />;
}const CSS = `
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body,#root{height:100%}
body{background:#0b0f0c;color:#e8f0e8;font-family:system-ui,sans-serif;overflow:hidden}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.app{height:100vh;display:flex;flex-direction:column}
.hdr{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:rgba(8,10,9,.92);border-bottom:1px solid #1e2a20;z-index:6}
.title{font-size:15px;font-weight:600}.back{color:#6db3ff;font-size:15px}.sparks{color:#ffb35c;font-weight:700;font-size:15px}
.maparea{flex:1;position:relative;overflow:hidden;background:#0b0f0c}
.mapwrap{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;scrollbar-width:none}
.mapwrap::-webkit-scrollbar{display:none}
.mapcanvas{width:100%;min-height:100%;position:relative;margin:0 auto}
.mapimg{width:100%;height:auto;display:block}
.marker{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:6px;z-index:3}
.amulet-wrap{position:relative;width:44px;height:44px;display:flex;align-items:center;justify-content:center}
.amulet-ring{position:absolute;inset:0;border-radius:50%;border:1px dashed;opacity:.5;animation:spin 15s linear infinite;pointer-events:none}
.amulet-core{position:relative;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;clip-path:polygon(50% 0%,85% 15%,100% 50%,85% 85%,50% 100%,15% 85%,0% 50%,15% 15%);background:linear-gradient(135deg,rgba(255,255,255,.15),rgba(0,0,0,.85));border:1.5px solid;backdrop-filter:blur(4px);animation:amuletPulse 3s ease-in-out infinite;transition:transform .2s;z-index:2;text-shadow:0 0 6px currentColor}
.marker:active .amulet-core{transform:scale(.85)}
.mname{font-size:9px;font-weight:700;letter-spacing:.5px;padding:3px 8px;border-radius:6px;background:linear-gradient(180deg,rgba(20,25,22,.92),rgba(10,12,11,.96));border:1px solid;text-shadow:0 0 4px currentColor;box-shadow:0 2px 6px rgba(0,0,0,.6);white-space:nowrap;text-transform:uppercase}
.fadeT,.fadeB{position:absolute;left:0;right:0;height:26px;pointer-events:none;z-index:4}
.fadeT{top:0;background:linear-gradient(180deg,#0b0f0c,transparent)}.fadeB{bottom:0;background:linear-gradient(0deg,#0b0f0c,transparent)}
.hint{position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:11px;color:rgba(207,227,210,.7);z-index:5;pointer-events:none}
.content{flex:1;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 30%,#182420,#0b0f0c)}
.bgimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.veil{position:absolute;inset:0;background:linear-gradient(rgba(5,8,6,.6),transparent 30%,transparent 65%,rgba(5,8,6,.85));pointer-events:none}
.banner{position:absolute;top:12px;left:12px;right:12px;z-index:4;display:flex;gap:10px;align-items:center;padding:12px;border-radius:16px;background:rgba(8,12,10,.72);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(6px)}
.bemoji{font-size:30px}.bname{font-size:16px;font-weight:700}.btag{font-size:12px;color:#a9bfae}
.pathline{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
.stone{position:absolute;transform:translate(-50%,-50%);width:50px;height:50px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;background:rgba(10,14,12,.85);border:2px solid #55605a;color:#93a89b;z-index:3}
.stone.avail{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 16px rgba(255,215,106,.5);animation:pulseT 2s ease-in-out infinite}
.stone.done{border-color:#7ee787;color:#7ee787;box-shadow:0 0 12px rgba(126,231,135,.4)}.stone.lock{opacity:.4}
.snum{position:absolute;top:-6px;right:-6px;background:rgba(0,0,0,.8);border:1px solid rgba(255,255,255,.2);border-radius:6px;font-size:9px;padding:1px 4px}
.scroll{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px}
.card{background:#121a15;border:1px solid #223028;border-radius:16px;padding:14px}.center{text-align:center}.big{font-size:44px}
.qhead{display:flex;justify-content:space-between;align-items:center;font-size:15px;font-weight:700;padding-bottom:6px}.qhead .go{color:#6db3ff}
.qhead2{font-size:16px;font-weight:700;margin:6px 0 4px}.dim{color:#8fa39a;font-size:13px;margin:6px 0 12px}
.qrow{display:flex;align-items:center;gap:10px;padding:10px 2px;border-top:1px solid #1c2822}
.qsym{font-size:20px;width:38px;height:38px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0d130f;border:1px solid #223028}
.qn{flex:1;font-size:14px;display:flex;flex-direction:column}.qd{font-size:11px;color:#8fa39a}.qst{font-size:16px}
.stats{display:flex;gap:10px;justify-content:center;margin:12px 0}
.stat{flex:1;background:#0d130f;border:1px solid #223028;border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:4px;align-items:center}.stat b{font-size:15px}.stat span{font-size:11px;color:#8fa39a}
.rank{font-size:14px;color:#ffd76a}
.nav{display:flex;background:rgba(10,13,11,.96);border-top:1px solid #1e2a20;padding:8px 6px calc(8px + env(safe-area-inset-bottom));z-index:6}
.navbtn{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 0;color:#8fa39a;font-size:11px}.navbtn .ic{font-size:20px}.navbtn.on{color:#6db3ff}
.sheet{position:fixed;left:0;right:0;bottom:0;z-index:20;background:rgba(14,20,16,.97);border-top:1px solid #2a3a2e;border-radius:20px 20px 0 0;padding:18px 16px calc(16px + env(safe-area-inset-bottom));animation:up .25s ease}
.shead{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.ssym{font-size:34px;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:14px;background:#0d130f;border:1px solid rgba(255,215,106,.33);color:#ffd76a}
.sinfo{flex:1}.sname{font-size:17px;font-weight:700}.smean{font-size:12px;color:#a9bfae}.srew{color:#ffb35c;font-weight:700}
.stask{background:#0d130f;border:1px solid #223028;border-radius:12px;padding:12px;font-size:14px;line-height:1.45;margin-bottom:12px}
.btn{width:100%;padding:14px;border-radius:14px;background:linear-gradient(135deg,#2ea6ff,#1f7fd6);color:#fff;font-size:16px;font-weight:600}
.btn.gold{background:linear-gradient(135deg,#ffd76a,#e0a53f);color:#231a05}.btn.ok{background:#17301d;color:#7ee787;border:1px solid rgba(126,231,135,.33)}
.btn.ghost{background:transparent;border:1px solid #2a3a2e;color:#9ab0a2;margin-top:8px}.btn:disabled{opacity:.55}
.toast{position:fixed;top:60px;left:50%;transform:translateX(-50%);z-index:30;background:rgba(0,0,0,.85);border:1px solid rgba(255,215,106,.4);color:#ffd76a;padding:8px 14px;border-radius:12px;font-size:13px;animation:fade .3s}
@keyframes amuletPulse{0%,100%{filter:brightness(1)}50%{filter:brightness(1.4)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes pulseT{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.08)}}
@keyframes up{from{transform:translateY(50px);opacity:0}}@keyframes fade{from{opacity:0}}
`;

function App() {
  const [screen, setScreen] = useState<Screen>({ t: "tree" });
  const [save, setSave] = useState<Save>(loadSave);
  const [modal, setModal] = useState<{ realm: Realm; rune: Rune } | null>(null);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<number>(0);

  useEffect(() => { localStorage.setItem("yggdrasil", JSON.stringify(save)); }, [save]);
  useEffect(() => { tg?.ready?.(); tg?.expand?.(); tg?.setHeaderColor?.("#0b0f0c"); tg?.setBackgroundColor?.("#0b0f0c"); }, []);
  useEffect(() => {
    if (!tg?.BackButton) return;
    const back = () => setScreen({ t: "tree" });
    if (screen.t !== "tree") { tg.BackButton.show(); tg.BackButton.onClick(back); } else tg.BackButton.hide();
    return () => { tg.BackButton?.offClick?.(back); };
  }, [screen]);
  useEffect(() => { setModal(null); }, [screen]);

  const say = (m: string) => { setToast(m); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToast(""), 1800); };
  const haptic = (k: "light" | "success" = "light") => { try { if (k === "success") tg?.HapticFeedback?.notificationOccurred?.("success"); else tg?.HapticFeedback?.impactOccurred?.("light"); } catch {} };
  const go = (s: Screen) => setScreen(s);
  const openRealm = (r: Realm) => { haptic(); setScreen({ t: "realm", id: r.id }); };
  const doneCount = (r: Realm) => (r.runes || []).filter(x => save.done.includes(x.id)).length;
  const stoneState = (r: Realm, i: number) => { const id = (r.runes || [])[i].id; if (save.done.includes(id)) return "done"; return i === doneCount(r) ? "avail" : "lock"; };
  const openStone = (r: Realm, i: number) => { const st = stoneState(r, i); if (st === "lock") { say("Сначала пройди предыдущую руну 🔒"); return; } haptic(); setModal({ realm: r, rune: (r.runes || [])[i] }); };
  const complete = (rune: Rune) => { if (save.done.includes(rune.id)) return; setSave(s => ({ ...s, sparks: s.sparks + rune.reward, done: [...s.done, rune.id] })); haptic("success"); say("Руна " + rune.name + " пройдена! +" + rune.reward + " ✨"); setModal(null); };
  const claimGift = () => { if (save.gift === today()) return; setSave(s => ({ ...s, sparks: s.sparks + 3, gift: today() })); haptic("success"); say("Дар Древа получен! +3 ✨"); };
  const isNav = (id: string) => (id === "tree" ? screen.t === "tree" || screen.t === "realm" : screen.t === id);
  const navScreen = (id: string): Screen => (id === "tree" ? { t: "tree" } : ({ t: id } as Screen));

  return (
    <div className="app">
      <style>{CSS}</style>
      <div className="hdr">
        {screen.t === "tree" && <div className="title">🌳 Мировое Древо Иггдрасиль</div>}
        {screen.t === "realm" && <button className="back" onClick={() => go({ t: "tree" })}>← На Древо</button>}
        {screen.t === "quests" && <div className="title">📜 Испытания</div>}
        {screen.t === "gift" && <div className="title">🎁 Дар</div>}
        {screen.t === "hall" && <div className="title">🏛️ Чертог</div>}
        <div className="sparks">✨ {save.sparks} Искр</div>
      </div>

      {screen.t === "tree" && (
        <div className="maparea">
          <div className="mapwrap">
            <div className="mapcanvas">
              <BgImg name="tree" className="mapimg" />
              {REALMS.map(r => (
                <button key={r.id} className="marker" style={{ left: r.x + "%", top: r.y + "%" }} onClick={() => openRealm(r)}>
                  <div className="amulet-wrap">
                    <div className="amulet-ring" style={{ borderColor: r.color }} />
                    <div className="amulet-core" style={{ borderColor: r.color, color: r.color, boxShadow: `0 0 14px ${r.glow}` }}>
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

      {screen.t === "realm" && (() => {
        const realm = REALMS.find(r => r.id === screen.id)!;
        const runes = realm.runes || [];
        const pts = runes.map((_, i) => { const p = stonePos(i, runes.length); return p.x + "," + p.y; }).join(" ");
        return (
          <div className="content">
            <BgImg name={realm.id} className="bgimg" />
            <div className="veil" />
            <div className="banner"><span className="bemoji">{realm.emoji}</span><div><div className="bname">{realm.name}</div><div className="btag">{realm.tag}</div></div></div>
            <svg className="pathline" viewBox="0 0 100 100" preserveAspectRatio="none"><polyline points={pts} fill="none" stroke="#ffd76a" strokeOpacity=".6" strokeWidth=".7" strokeDasharray="2.5 2" /></svg>
            {runes.map((rn, i) => {
              const p = stonePos(i, runes.length); const st = stoneState(realm, i);
              return (<button key={rn.id} className={"stone " + st} style={{ left: p.x + "%", top: p.y + "%" }} onClick={() => openStone(realm, i)}>{rn.sym}<span className="snum">{st === "done" ? "✓" : i + 1}</span></button>);
            })}
            <div className="hint">Путь рун: нажимай на светящиеся камни</div>
          </div>
        );
      })()}

      {screen.t === "quests" && (
        <div className="scroll">
          {REALMS.map(r => (
            <div className="card" key={r.id}>
              <div className="qhead" onClick={() => openRealm(r)}>{r.emoji} {r.name} <span className="go">→</span></div>
              {(r.runes || []).map((rn, i) => {
                const st = stoneState(r, i);
                return (<div className="qrow" key={rn.id} onClick={() => openRealm(r)}><span className="qsym" style={{ color: st === "done" ? "#7ee787" : st === "avail" ? "#ffd76a" : "#5a6a62" }}>{rn.sym}</span><span className="qn">{rn.name}<span className="qd">{rn.meaning}</span></span><span className="qst">{st === "done" ? "✅" : st === "avail" ? "🔥" : "🔒"}</span></div>);
              })}
            </div>
          ))}
        </div>
      )}

      {screen.t === "gift" && (
        <div className="scroll"><div className="card center"><div className="big">🎁</div><div className="qhead2">Дар Древа</div><p className="dim">Раз в день Древо делится искрами.</p>{save.gift !== today() ? <button className="btn gold" onClick={claimGift}>Забрать дар +3 ✨</button> : <button className="btn" disabled>Дар получен • вернись завтра</button>}</div></div>
      )}

      {screen.t === "hall" && (
        <div className="scroll"><div className="card center"><div className="big">🏛️</div><div className="qhead2">Чертог путника</div><div className="stats"><div className="stat"><b>✨ {save.sparks}</b><span>Искр</span></div><div className="stat"><b>🧿 {save.done.length}/{ALL_RUNES.length}</b><span>рун</span></div></div><div className="rank">🏆 Ранг: {rank(save.done.length)}</div></div></div>
      )}

      <div className="nav">
        {NAV.map(n => (<button key={n.id} className={"navbtn" + (isNav(n.id) ? " on" : "")} onClick={() => go(navScreen(n.id))}><span className="ic">{n.ic}</span>{n.t}</button>))}
      </div>

      {modal && (
        <div className="sheet">
          <div className="shead"><span className="ssym">{modal.rune.sym}</span><div className="sinfo"><div className="sname">{modal.rune.name}</div><div className="smean">{modal.rune.meaning}</div></div><span className="srew">+{modal.rune.reward} ✨</span></div>
          <div className="stask">⚔️ Испытание: {modal.rune.task}</div>
          {save.done.includes(modal.rune.id) ? <button className="btn ok" disabled>Руна пройдена ✓</button> : <button className="btn gold" onClick={() => complete(modal.rune)}>Пройти испытание</button>}
          <button className="btn ghost" onClick={() => setModal(null)}>Закрыть</button>
        </div>
      )}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
