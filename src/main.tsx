import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const tg: any = (window as any).Telegram?.WebApp;
const BASE: string = (import.meta as any).env?.BASE_URL || "/";

type Rune = { id: string; sym: string; name: string; meaning: string; task: string; reward: number };
type Realm = {
  id: string; name: string; emoji: string; tag: string; color: string;
  x: number; y: number; locked?: boolean; runes?: Rune[];
};

const REALMS: Realm[] = [
  { id: "asgard", name: "Асгард", emoji: "🏛️", tag: "Чертог богов • запечатан", color: "#ffd76a", x: 52, y: 7, locked: true },
  { id: "alfheim", name: "Альфхейм", emoji: "🏰", tag: "Мир светлых эльфов • спит", color: "#e8f4ff", x: 29, y: 24, locked: true },
  { id: "vanaheim", name: "Ванахейм", emoji: "🛖", tag: "Мир ванов • спит", color: "#b8e986", x: 72, y: 20, locked: true },
  {
    id: "midgard", name: "Мидгард", emoji: "🏡", tag: "Домики у реки • Путь рун", color: "#7ee787", x: 58, y: 35, runes: [
      { id: "fehu", sym: "ᚠ", name: "Феху", meaning: "Искра богатства и изобилия", task: "Запиши 3 вещи, за которые благодарен сегодня. Это твоя первая искра.", reward: 5 },
      { id: "uruz", sym: "ᚢ", name: "Уруз", meaning: "Сила дикой природы", task: "Сделай сегодня одно дело для тела: прогулка, зарядка, холодная вода.", reward: 5 },
      { id: "thurisaz", sym: "ᚦ", name: "Турисаз", meaning: "Молот защиты и границ", task: "Защити границы: откажись от одного дела, которое тебя истощает.", reward: 6 },
      { id: "ansuz", sym: "ᚨ", name: "Ансуз", meaning: "Слово Одина, мудрость", task: "Узнай сегодня что-то новое и передай это другу.", reward: 6 },
    ]
  },
  { id: "jotunheim", name: "Ётунхейм", emoji: "⛰️", tag: "Мир великанов • спит", color: "#c9b49a", x: 26, y: 60, locked: true },
  { id: "svartalfheim", name: "Свартальфхейм", emoji: "⚒️", tag: "Кузни дварфов • спят", color: "#ff9d5c", x: 68, y: 57, locked: true },
  {
    id: "niflheim", name: "Нифльхейм", emoji: "❄️", tag: "Мир льдов и туманов", color: "#7ec8ff", x: 28, y: 73, runes: [
      { id: "isa", sym: "ᛁ", name: "Иса", meaning: "Лёд неподвижности", task: "Проведи 10 минут в тишине без телефона. Услышь холод мыслей.", reward: 5 },
      { id: "nauthiz", sym: "ᚾ", name: "Наутиз", meaning: "Нужда, что учит", task: "Откажись сегодня от одной вредной привычки.", reward: 6 },
      { id: "eihwaz", sym: "ᛇ", name: "Эйваз", meaning: "Столп Древа, стойкость", task: "Доделай одно дело, которое давно откладывал.", reward: 7 },
    ]
  },
  {
    id: "muspelheim", name: "Муспельхейм", emoji: "🔥", tag: "Мир огня и искр", color: "#ff6b4a", x: 67, y: 69, runes: [
      { id: "kenaz", sym: "ᚲ", name: "Кеназ", meaning: "Факел творчества", task: "Создай сегодня что-то своими руками или словами.", reward: 5 },
      { id: "sowilo", sym: "ᛊ", name: "Совило", meaning: "Солнце победы", task: "Сделай один шаг к своей самой смелой цели.", reward: 6 },
      { id: "teiwaz", sym: "ᛏ", name: "Тейваз", meaning: "Меч справедливости", task: "Восстанови справедливость в одном малом деле.", reward: 7 },
    ]
  },
  { id: "helheim", name: "Хельхейм", emoji: "🕯️", tag: "Врата подземного мира • спят", color: "#b678ff", x: 45, y: 86, locked: true },
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
const rank = (n: number) => (n >= 9 ? "Мудрец Древа" : n >= 6 ? "Хранитель рун" : n >= 3 ? "Странник рун" : "Путник");
const stonePos = (i: number, total: number) => ({ x: i % 2 === 0 ? 30 : 70, y: total > 1 ? 30 + i * (48 / (total - 1)) : 45 });

function BgImg({ name, className }: { name: string; className: string }) {
  const list = [
    BASE + "img/" + name + ".png", BASE + "img/" + name + ".jpg",
    BASE + "img/" + name + ".jpeg", BASE + "img/" + name + ".webp",
    BASE + "images/" + name + ".png", BASE + "images/" + name + ".jpg",
    BASE + name + ".png", BASE + name + ".jpg",
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
.maparea{flex:1;position:relative;overflow:hidden;background:linear-gradient(#241b3a,#141d24 55%,#0b0f0c)}
.mapwrap{position:absolute;inset:0;overflow-x:auto;overflow-y:hidden;scrollbar-width:none}
.mapwrap::-webkit-scrollbar{display:none}
.mapcanvas{height:100%;width:max-content;min-width:100%;position:relative;margin:0 auto}
.mapimg{height:100%;width:auto;max-width:none;display:block}
.marker{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:4px;z-index:3}
.dot{position:relative;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.28),rgba(0,0,0,.6));border:2px solid;animation:pulse 2.4s ease-in-out infinite}
.marker.locked .dot{filter:grayscale(1);opacity:.5;animation:none}
.lb{position:absolute;right:-6px;bottom:-6px;font-size:14px}
.mname{font-size:11px;padding:3px 8px;border-radius:10px;background:rgba(0,0,0,.68);border:1px solid rgba(255,255,255,.16)}
.marker.locked .mname{opacity:.55}
.fadeL,.fadeR{position:absolute;top:0;bottom:0;width:26px;pointer-events:none;z-index:4}
.fadeL{left:0;background:linear-gradient(90deg,#0b0f0c,transparent)}
.fadeR{right:0;background:linear-gradient(-90deg,#0b0f0c,transparent)}
.content{flex:1;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 30%,#182420,#0b0f0c)}
.bgimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.veil{position:absolute;inset:0;background:linear-gradient(rgba(5,8,6,.55),transparent 30%,transparent 65%,rgba(5,8,6,.75));pointer-events:none}
.banner{position:absolute;top:12px;left:12px;right:12px;z-index:4;display:flex;gap:10px;align-items:center;padding:12px;border-radius:16px;background:rgba(8,12,10,.72);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(6px)}
.bemoji{font-size:30px}
.bname{font-size:16px;font-weight:700}
.btag{font-size:12px;color:#a9bfae}
.pathline{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
.stone{position:absolute;transform:translate(-50%,-50%);width:54px;height:54px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;background:rgba(10,14,12,.82);border:2px solid #55605a;color:#93a89b;z-index:3}
.stone.avail{border-color:#ffd76a;color:#ffd76a;box-shadow:0 0 18px rgba(255,215,106,.55);animation:pulseT 2s ease-in-out infinite}
.stone.done{border-color:#7ee787;color:#7ee787;box-shadow:0 0 14px rgba(126,231,135,.4)}
.stone.lock{opacity:.45}
.snum{position:absolute;top:-8px;right:-8px;background:rgba(0,0,0,.7);border:1px solid rgba(255,255,255,.2);border-radius:8px;font-size:10px;padding:2px 5px}
.hint{position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:11px;color:rgba(207,227,210,.7);z-index:5;pointer-events:none}
.scroll{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px}
.card{background:#121a15;border:1px solid #223028;border-radius:16px;padding:14px}
.center{text-align:center}
.big{font-size:44px}
.qhead{display:flex;justify-content:space-between;align-items:center;font-size:15px;font-weight:700;padding-bottom:6px}
.qhead .go{color:#6db3ff}
.qhead2{font-size:16px;font-weight:700;margin:6px 0 4px}
.dim{color:#8fa39a;font-size:13px;margin:6px 0 12px}
.qrow{display:flex;align-items:center;gap:10px;padding:10px 2px;border-top:1px solid #1c2822}
.qsym{font-size:20px;width:38px;height:38px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0d130f;border:1px solid #223028}
.qn{flex:1;font-size:14px;display:flex;flex-direction:column}
.qd{font-size:11px;color:#8fa39a}
.qst{font-size:16px}
.stats{display:flex;gap:10px;justify-content:center;margin:12px 0}
.stat{flex:1;background:#0d130f;border:1px solid #223028;border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:4px;align-items:center}
.stat b{font-size:15px}
.stat span{font-size:11px;color:#8fa39a}
.rank{font-size:14px;color:#ffd76a}
.nav{display:flex;background:rgba(10,13,11,.96);border-top:1px solid #1e2a20;padding:8px 6px calc(8px + env(safe-area-inset-bottom));z-index:6}
.navbtn{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 0;color:#8fa39a;font-size:11px}
.navbtn .ic{font-size:20px}
.navbtn.on{color:#6db3ff}
.sheet{position:fixed;left:0;right:0;bottom:0;z-index:20;background:rgba(14,20,16,.97);border-top:1px solid #2a3a2e;border-radius:20px 20px 0 0;padding:18px 16px calc(16px + env(safe-area-inset-bottom));animation:up .25s ease}
.shead{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.ssym{font-size:34px;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:14px;background:#0d130f;border:1px solid rgba(255,215,106,.33);color:#ffd76a}
.sinfo{flex:1}
.sname{font-size:17px;font-weight:700}
.smean{font-size:12px;color:#a9bfae}
.srew{color:#ffb35c;font-weight:700}
.stask{background:#0d130f;border:1px solid #223028;border-radius:12px;padding:12px;font-size:14px;line-height:1.45;margin-bottom:12px}
.btn{width:100%;padding:14px;border-radius:14px;background:linear-gradient(135deg,#2ea6ff,#1f7fd6);color:#fff;font-size:16px;font-weight:600}
.btn.gold{background:linear-gradient(135deg,#ffd76a,#e0a53f);color:#231a05}
.btn.ok{background:#17301d;color:#7ee787;border:1px solid rgba(126,231,135,.33)}
.btn.ghost{background:transparent;border:1px solid #2a3a2e;color:#9ab0a2;margin-top:8px}
.btn:disabled{opacity:.55}
.toast{position:fixed;top:60px;left:50%;transform:translateX(-50%);z-index:30;background:rgba(0,0,0,.85);border:1px solid rgba(255,215,106,.4);color:#ffd76a;padding:8px 14px;border-radius:12px;font-size:13px;animation:fade .3s}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}
@keyframes pulseT{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.07)}}
@keyframes up{from{transform:translateY(50px);opacity:0}}
@keyframes fade{from{opacity:0}}
`;

function App() {
  const [screen, setScreen] = useState<Screen>({ t: "tree" });
  const [save, setSave] = useState<Save>(loadSave);
  const [modal, setModal] = useState<{ realm: Realm; rune: Rune } | null>(null);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => { localStorage.setItem("yggdrasil", JSON.stringify(save)); }, [save]);
  useEffect(() => {
    tg?.ready?.(); tg?.expand?.();
    tg?.setHeaderColor?.("#0b0f0c"); tg?.setBackgroundColor?.("#0b0f0c");
  }, []);
  useEffect(() => {
    if (!tg?.BackButton) return;
    const back = () => setScreen({ t: "tree" });
    if (screen.t !== "tree") { tg.BackButton.show(); tg.BackButton.onClick(back); }
    else tg.BackButton.hide();
    return () => { tg.BackButton?.offClick?.(back); };
  }, [screen]);
  useEffect(() => {
    setModal(null);
    if (screen.t === "tree" && mapRef.current) {
      const w = mapRef.current;
      w.scrollLeft = (w.scrollWidth - w.clientWidth) / 2;
    }
  }, [screen]);

  const say = (m: string) => { setToast(m); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToast(""), 1800); };
  const haptic = (k: "light" | "success" = "light") => {
    try {
      if (k === "success") tg?.HapticFeedback?.notificationOccurred?.("success");
      else tg?.HapticFeedback?.impactOccurred?.("light");
    } catch {}
  };
  const go = (s: Screen) => setScreen(s);

  const openRealm = (r: Realm) => {
    haptic();
    if (r.locked) { say(r.name + ": чертог ещё спит 🌫️"); return; }
    setScreen({ t: "realm", id: r.id });
  };
  const doneCount = (r: Realm) => (r.runes || []).filter(x => save.done.includes(x.id)).length;
  const stoneState = (r: Realm, i: number) => {
    const id = (r.runes || [])[i].id;
    if (save.done.includes(id)) return "done";
    return i === doneCount(r) ? "avail" : "lock";
  };
  const openStone = (r: Realm, i: number) => {
    const st = stoneState(r, i);
    if (st === "lock") { say("Сначала пройди предыдущую руну 🔒"); return; }
    haptic(); setModal({ realm: r, rune: (r.runes || [])[i] });
  };
  const complete = (rune: Rune) => {
    if (save.done.includes(rune.id)) return;
    setSave(s => ({ ...s, sparks: s.sparks + rune.reward, done: [...s.done, rune.id] }));
    haptic("success"); say("Руна " + rune.name + " пройдена! +" + rune.reward + " ✨");
    setModal(null);
  };
  const claimGift = () => {
    if (save.gift === today()) return;
    setSave(s => ({ ...s, sparks: s.sparks + 3, gift: today() }));
    haptic("success"); say("Дар Древа получен! +3 ✨");
  };
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
          <div className="mapwrap" ref={mapRef}>
            <div className="mapcanvas">
              <BgImg name="tree" className="mapimg" />
              {REALMS.map(r => (
                <button key={r.id} className={"marker" + (r.locked ? " locked" : "")}
                  style={{ left: r.x + "%", top: r.y + "%" }} onClick={() => openRealm(r)}>
                  <span className="dot" style={{ borderColor: r.color, boxShadow: r.locked ? "none" : "0 0 16px " + r.color }}>
                    {r.emoji}{r.locked && <span className="lb">🔒</span>}
                  </span>
                  <span className="mname">{r.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="fadeL" /><div className="fadeR" />
          <div className="hint">← листай Древо • нажми на чертог →</div>
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
            <div className="banner">
              <span className="bemoji">{realm.emoji}</span>
              <div>
                <div className="bname">{realm.name}</div>
                <div className="btag">{realm.tag}</div>
              </div>
            </div>
            <svg className="pathline" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline points={pts} fill="none" stroke="#ffd76a" strokeOpacity=".6" strokeWidth=".7" strokeDasharray="2.5 2" />
            </svg>
            {runes.map((rn, i) => {
              const p = stonePos(i, runes.length);
              const st = stoneState(realm, i);
              return (
                <button key={rn.id} className={"stone " + st} style={{ left: p.x + "%", top: p.y + "%" }}
                  onClick={() => openStone(realm, i)}>
                  {rn.sym}<span className="snum">{st === "done" ? "✓" : i + 1}</span>
                </button>
              );
            })}
            <div className="hint">Путь рун: нажимай на светящиеся камни</div>
          </div>
        );
      })()}

      {screen.t === "quests" && (
        <div className="scroll">
          {REALMS.filter(r => (r.runes || []).length > 0).map(r => (
            <div className="card" key={r.id}>
              <div className="qhead" onClick={() => openRealm(r)}>{r.emoji} {r.name} <span className="go">→</span></div>
              {(r.runes || []).map((rn, i) => {
                const st = stoneState(r, i);
                return (
                  <div className="qrow" key={rn.id} onClick={() => openRealm(r)}>
                    <span className="qsym" style={{ color: st === "done" ? "#7ee787" : st === "avail" ? "#ffd76a" : "#5a6a62" }}>{rn.sym}</span>
                    <span className="qn">{rn.name}<span className="qd">{rn.meaning}</span></span>
                    <span className="qst">{st === "done" ? "✅" : st === "avail" ? "🔥" : "🔒"}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {screen.t === "gift" && (
        <div className="scroll">
          <div className="card center">
            <div className="big">🎁</div>
            <div className="qhead2">Дар Древа</div>
            <p className="dim">Раз в день Древо делится искрами с путником.</p>
            {save.gift !== today()
              ? <button className="btn gold" onClick={claimGift}>Забрать дар +3 ✨</button>
              : <button className="btn" disabled>Дар получен • вернись завтра</button>}
          </div>
        </div>
      )}

      {screen.t === "hall" && (
        <div className="scroll">
          <div className="card center">
            <div className="big">🏛️</div>
            <div className="qhead2">Чертог путника</div>
            <div className="stats">
              <div className="stat"><b>✨ {save.sparks}</b><span>Искр</span></div>
              <div className="stat"><b>🧿 {save.done.length}/{ALL_RUNES.length}</b><span>рун пройдено</span></div>
            </div>
            <div className="rank">🏆 Ранг: {rank(save.done.length)}</div>
          </div>
        </div>
      )}

      <div className="nav">
        {NAV.map(n => (
          <button key={n.id} className={"navbtn" + (isNav(n.id) ? " on" : "")} onClick={() => go(navScreen(n.id))}>
            <span className="ic">{n.ic}</span>{n.t}
          </button>
        ))}
      </div>

      {modal && (
        <div className="sheet">
          <div className="shead">
            <span className="ssym">{modal.rune.sym}</span>
            <div className="sinfo">
              <div className="sname">{modal.rune.name}</div>
              <div className="smean">{modal.rune.meaning}</div>
            </div>
            <span className="srew">+{modal.rune.reward} ✨</span>
          </div>
          <div className="stask">⚔️ Испытание: {modal.rune.task}</div>
          {save.done.includes(modal.rune.id)
            ? <button className="btn ok" disabled>Руна пройдена ✓</button>
            : <button className="btn gold" onClick={() => complete(modal.rune)}>Пройти испытание</button>}
          <button className="btn ghost" onClick={() => setModal(null)}>Закрыть</button>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
