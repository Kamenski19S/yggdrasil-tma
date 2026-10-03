import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";


export const CSS = `
.chaos-panel{max-height:50dvh;overflow-y:auto;position:fixed;z-index:120;bottom:145px;left:50%;transform:translateX(-50%);width:min(280px,82vw);padding:12px;background:linear-gradient(150deg,#15140f,#030504);border:1px solid #c29b4a;border-radius:12px;box-shadow:0 0 0 3px #13100a,0 8px 25px #0009;color:#e5d7b9;font-size:11px;line-height:1.4}
.chaos-panel-title{display:flex;justify-content:space-between;align-items:center;color:#edc76f;font-size:14px}.chaos-panel-title button{font-size:22px;line-height:1;padding:0 5px}.chaos-panel p{margin:7px 0}.chaos-runes{display:flex;gap:7px}.chaos-runes button{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:5px;border:1px solid #70603c;border-radius:7px;background:#0a0d0a}.chaos-runes button.chosen{border-color:#f0ce7a;background:#302714}.chaos-runes strong{font-size:25px;color:#eaca76}.chaos-runes small{font-size:9px}.chaos-panel button:disabled{opacity:.38;cursor:default}.chaos-recipes{display:flex;flex-direction:column;gap:6px}.chaos-recipes button{padding:5px 8px;text-align:left;display:flex;flex-wrap:wrap;gap:5px;border:1px solid #70603c;border-radius:7px;background:#0a0d0a}.chaos-recipes button.chosen{border-color:#f0ce7a;background:#302714}.chaos-recipes span{flex:1;min-width:100px}.chaos-recipes strong{font-size:20px;color:#edc76f}.chaos-recipes small{display:block;font-size:9px;color:#b4aa93}
.chaos-cleanse{width:100%;padding:7px;background:#b58c39!important;color:#100f09;border-radius:6px;font-weight:700}

*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body,#root{height:100%}
body{background:#0b0f0c;color:#e8f0e8;font-family:system-ui,sans-serif;overflow:hidden}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.app{height:100vh;display:flex;flex-direction:column}
.hdr{display:flex;justify-content:space-between;align-items:center;padding:7px 12px;background:rgba(8,10,9,.92);border-bottom:1px solid #1e2a20;z-index:6}
.title{font-size:14px;font-weight:600}.back{color:#6db3ff;font-size:13px}.sparks{color:#ffb35c;font-weight:700;font-size:13px;display:flex;align-items:center;gap:4px;min-height:34px;overflow:visible;white-space:nowrap}
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
.hdr,.nav{
  background-color:#171c22;
  background-image:
    linear-gradient(115deg,rgba(221,234,246,.10),transparent 28%,rgba(0,0,0,.22) 62%,rgba(198,214,232,.06)),
    repeating-linear-gradient(0deg,rgba(215,228,241,.045) 0 1px,transparent 1px 3px),
    repeating-linear-gradient(132deg,rgba(0,0,0,.14) 0 1px,transparent 1px 7px),
    linear-gradient(180deg,#29313a,#10151b);
}
.hdr{flex-shrink:0;border-bottom:1px solid #4a5663;box-shadow:inset 0 1px rgba(226,239,251,.14),inset 0 -1px #080b10,0 3px 9px #0005}
.nav{display:flex;flex-shrink:0;border-top:1px solid #536271;box-shadow:inset 0 1px rgba(226,239,251,.12),inset 0 -1px #080b10,0 -3px 9px #0005;padding:3px 4px calc(3px + env(safe-area-inset-bottom));z-index:6}
.navbtn{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:2px;padding:2px 0;color:#a8b6c5;font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.navbtn .ic{width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#a5d9f5;transition:transform .2s,filter .2s;filter:drop-shadow(0 2px 3px #0009)}
.navbtn .nav-art{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none}
.navbtn .nav-art[hidden]{display:none}
.navbtn:active .ic{transform:scale(.88)}
.navbtn.on{color:#c6ecff}
.navbtn.on .ic{filter:drop-shadow(0 0 5px rgba(77,188,255,.65))}
.navbtn:focus-visible{outline:1px solid #94d7ff;outline-offset:-1px;border-radius:6px}
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
@keyframes battleFlash{0%{opacity:0;transform:scale(.7) rotate(-24deg)}32%{opacity:1}100%{opacity:0;transform:scale(1.18) rotate(-24deg)}}
/* Дуэльная пластина боя */
.duel{position:relative;overflow:hidden;display:flex;align-items:center;gap:8px;padding:12px 12px 10px;background:linear-gradient(180deg,rgba(20,28,23,.92),rgba(10,14,11,.96));border:1px solid #26342a;border-radius:20px;box-shadow:0 6px 18px rgba(0,0,0,.45)}
.battle-fx{position:absolute;inset:-25%;z-index:4;pointer-events:none;opacity:0;transform:rotate(-24deg);animation:battleFlash .48s ease-out}.battle-fx.hit{background:linear-gradient(105deg,transparent 42%,rgba(255,244,205,.96) 48%,rgba(255,119,40,.9) 51%,transparent 58%)}.battle-fx.rune{background:radial-gradient(circle,rgba(159,113,255,.92),rgba(74,158,255,.42) 22%,transparent 58%);filter:drop-shadow(0 0 12px #91dfff)}.battle-fx.guard{background:radial-gradient(circle at 28% 50%,rgba(231,69,45,.72),transparent 35%)}
.guard-face{background:radial-gradient(circle at 50% 38%,#725735 0 20%,#342b25 22% 39%,#101512 41%);box-shadow:0 0 12px #ff9a43,inset 0 0 10px rgba(0,0,0,.8)}
.dside{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;min-width:0}
.dface{position:relative;width:54px;height:54px;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;overflow:hidden;background:#0d130f;text-shadow:0 0 6px currentColor;box-shadow:0 0 10px currentColor}
.dhp{width:100%;height:6px;border-radius:4px;background:#0a0f0b;border:1px solid #223028;overflow:hidden}
.dhpfill{display:block;height:100%;border-radius:4px;transition:width .35s}
.dname{font-size:10px;font-weight:700;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dnum{font-size:9px;color:#8fa39a}
.dvs{font-size:15px;font-weight:700;color:#ffd76a;text-shadow:0 0 8px rgba(255,215,106,.55)}
.denergy{display:flex;gap:5px;justify-content:center;align-items:center;flex-wrap:nowrap;margin-top:3px}.energy-label{font-size:7px;color:#84968a;text-transform:uppercase;letter-spacing:.6px}
.pip{width:11px;height:11px;border-radius:50%;background:#1c2420;border:1px solid #344039;transition:background .25s,box-shadow .25s,opacity .25s}.pip.on{border-color:rgba(255,255,255,.48)}
.flog{min-height:34px;font-size:12px;font-style:italic;color:#cfe3d2;line-height:1.45;text-align:center;margin:8px 4px}
.acts{display:flex;flex-direction:column;gap:8px;padding:0 6px}
.btn.rune{background:linear-gradient(135deg,#b678ff,#8a4fd6);color:#fff}
.btn.shield{background:linear-gradient(135deg,#7ec8ff,#4a9fd6);color:#06202f}
.btn{width:100%;padding:12px;border-radius:12px;background:linear-gradient(135deg,#2ea6ff,#1f7fd6);color:#fff;font-size:15px;font-weight:600}
.btn.gold{background:linear-gradient(135deg,#ffd76a,#e0a53f);color:#231a05}.btn.ok{background:#17301d;color:#7ee787;border:1px solid rgba(126,231,135,.33)}
.btn.ghost{background:transparent;border:1px solid #2a3a2e;color:#9ab0a2;margin-top:8px}.btn:disabled{opacity:.55}
.toast{position:fixed;top:60px;left:50%;transform:translateX(-50%);z-index:30;background:#fff;border:1px solid #d9d9d9;color:#111;padding:8px 14px;border-radius:12px;font-size:13px;animation:fade .3s}
.house-dialog-backdrop{position:fixed;inset:0;z-index:80;background:rgba(4,9,7,.64);display:flex;align-items:center;justify-content:center;padding:20px}
.house-dialog-panel{max-height:64dvh;overflow-y:auto;width:min(360px,100%);border:1px solid #af8248;border-radius:18px;background:linear-gradient(145deg,#243126,#111a16);color:#fff3d8;padding:14px;box-shadow:0 18px 50px rgba(0,0,0,.55)}
.house-dialog-panel h3{margin:0 0 12px;color:#f3ca77;font-size:19px}.house-dialog-panel p{font-size:13px;line-height:1.4;margin:0 0 12px}.house-dialog-panel button{width:100%;padding:12px;border:1px solid #cfaa64;border-radius:11px;background:#765331;color:#fff7e5;font-weight:700}
.house-quest-status{margin:0 0 18px;padding:12px;border-radius:11px;background:rgba(190,151,82,.13);border:1px solid rgba(211,177,105,.36)}
.house-quest-status b{display:block;color:#f3d99b;margin-bottom:6px}.house-quest-status span{display:block;font-size:13px;line-height:1.45;margin:4px 0}
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
@keyframes heroRunePulse{0%,100%{opacity:.48;transform:scale(.9);filter:drop-shadow(0 0 5px rgba(255,215,106,.45))}50%{opacity:1;transform:scale(1.09);filter:drop-shadow(0 0 15px rgba(255,215,106,.95))}}
@keyframes forgePortal{0%{opacity:0;transform:scale(.35) rotate(-18deg)}55%{opacity:1;transform:scale(1.08) rotate(3deg)}100%{opacity:.9;transform:scale(1) rotate(0)}}

.mid3d-scene{background:#8da894;overflow:hidden;position:relative;isolation:isolate;touch-action:none}
.mid3d-scene canvas{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;user-select:none;-webkit-user-select:none}
.mid3d-ui{position:absolute;z-index:8;user-select:none;-webkit-user-select:none}
.mid3d-top{top:10px;left:10px;right:10px;display:grid;grid-template-columns:68px minmax(0,1fr) 92px;gap:8px;align-items:stretch;pointer-events:none}
.mid3d-top-btn,.mid3d-realm-title{position:relative;min-height:50px;border:0;background:transparent!important;box-shadow:none!important;isolation:isolate;overflow:visible}
.mid3d-top-btn{display:flex;align-items:center;justify-content:center;padding:0;appearance:none;-webkit-appearance:none;color:#ffd76a;pointer-events:auto;touch-action:manipulation}
.mid3d-top-btn::before,.mid3d-realm-title::before{content:"";position:absolute;z-index:0;inset:1px 2px;background:linear-gradient(180deg,#070b09 0%,#020403 58%,#000 100%);clip-path:polygon(8% 1%,92% 1%,96% 7%,98.5% 17%,98.5% 83%,96% 93%,92% 99%,8% 99%,4% 93%,1.5% 83%,1.5% 17%,4% 7%);box-shadow:inset 0 0 20px rgba(0,0,0,.72),inset 0 0 9px rgba(190,142,55,.08)}
.mid3d-top-btn:active{transform:translateY(1px) scale(.985)}
.mid3d-realm-title{display:flex;align-items:center;justify-content:center;color:#ffd76a;font-size:16px;font-weight:900;letter-spacing:1.4px;text-shadow:0 0 10px rgba(255,199,73,.22)}
.mid3d-frame-img{position:absolute;inset:0;width:100%;height:100%;object-fit:fill;pointer-events:none;z-index:1;filter:drop-shadow(0 3px 5px rgba(0,0,0,.42))}
.mid3d-top-art{position:relative;z-index:2;display:block;object-fit:contain;pointer-events:none;filter:drop-shadow(0 2px 3px rgba(0,0,0,.55))}
.mid3d-map-art{width:52px;height:42px}
.mid3d-mill-art{width:76px;height:42px}
.mid3d-realm-title>span{position:relative;z-index:2}
@media(max-width:380px){.mid3d-top{grid-template-columns:62px minmax(0,1fr) 84px;gap:6px}.mid3d-top-btn,.mid3d-realm-title{min-height:46px}.mid3d-realm-title{font-size:14px;letter-spacing:1px}.mid3d-map-art{width:47px;height:38px}.mid3d-mill-art{width:69px;height:38px}}
.mid3d-top{grid-template-columns:58px minmax(0,1fr) 58px;align-items:center}
.mid3d-top-btn{width:58px;height:58px;min-height:0}
.mid3d-realm-title{padding:0;min-height:0;width:min(100%,160px);justify-self:center;aspect-ratio:768/357}
.mid3d-top-btn::before,.mid3d-realm-title::before{display:none}
.mid3d-top-button-art{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none;filter:drop-shadow(0 3px 5px rgba(0,0,0,.42))}
@media(max-width:380px){.mid3d-top{grid-template-columns:50px minmax(0,1fr) 50px;gap:6px}.mid3d-top-btn{width:50px;height:50px;min-height:0}.mid3d-realm-title{min-height:0}}
.mid3d-joy{left:14px;bottom:52px;width:132px;height:132px;border-radius:50%;background:rgba(7,14,9,.46);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 0 25px rgba(0,0,0,.22);touch-action:none}
.mid3d-joy:before,.mid3d-joy:after{content:"";position:absolute;left:50%;top:50%;background:rgba(255,255,255,.08);transform:translate(-50%,-50%);pointer-events:none}
.mid3d-joy:before{width:82px;height:1px}.mid3d-joy:after{height:82px;width:1px}
.mid3d-knob{position:absolute;left:41px;top:41px;width:50px;height:50px;border-radius:50%;background:rgba(219,231,221,.28);border:1px solid rgba(255,255,255,.42);box-shadow:0 5px 15px rgba(0,0,0,.35);touch-action:none}
.mid3d-action{right:16px;top:74px;width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,247,191,.8);background:rgba(255,215,106,.92);color:#241b06;font-size:18px;font-weight:900;box-shadow:0 5px 16px rgba(0,0,0,.35);touch-action:none}
.mid3d-strike{right:22px;bottom:112px;width:52px;height:52px;border-radius:50%;border:1px solid rgba(255,225,174,.66);background:radial-gradient(circle at 38% 30%,rgba(255,155,75,.98),rgba(126,38,20,.96));color:#fff4df;font-size:22px;font-weight:900;text-shadow:0 1px 4px rgba(0,0,0,.85);box-shadow:0 5px 15px rgba(0,0,0,.42),0 0 12px rgba(255,99,43,.25);touch-action:none}
.mid3d-strike:active{transform:scale(.88);box-shadow:0 2px 8px rgba(0,0,0,.45),0 0 18px rgba(255,114,54,.55)}
.mid3d-block{right:22px;bottom:178px;width:52px;height:52px;border-radius:50%;border:1px solid rgba(178,230,255,.83);background:radial-gradient(circle at 38% 30%,#89c2da,#284966);color:#fff;font-size:23px;box-shadow:0 5px 15px rgba(0,0,0,.42);touch-action:none}.mid3d-block:active{transform:scale(.91);filter:brightness(1.25)}.mid3d-block:disabled{opacity:.46}
/* Transparent artwork supplies the gold frame and button face. */
.mid3d-control-art{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none}
.mid3d-action,.mid3d-strike,.mid3d-block{padding:0;border:0;background:transparent;box-shadow:none;text-shadow:none;filter:drop-shadow(0 4px 6px rgba(0,0,0,.45))}
.mid3d-joy{border:0;background:transparent;box-shadow:none}
.mid3d-joy:before,.mid3d-joy:after{display:none}
.mid3d-knob{background:rgba(245,202,96,.18);border-color:rgba(255,222,145,.55);pointer-events:none}
.whisper-combat-icon.custom-art{border:0;background:transparent;box-shadow:none;text-shadow:none}
.whisper-combat-icon.custom-art:after{display:none}
.whisper-combat-icon.custom-art img{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none;transform:translateY(4%) scale(1.28)}
.whisper-combat-action.rune .whisper-combat-icon.custom-art img{transform:translateY(-1%) scale(1.025)}
.whisper-combat-action.rest .whisper-combat-icon.custom-art{overflow:visible;border-radius:50%}
.whisper-combat-action.rest .whisper-combat-icon.custom-art img{transform:translateY(2.5%) scale(1.11)}
.whisper-combat-action.rest b{margin-top:0}
.mid3d-hero-load{left:50%;top:58%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:3px;pointer-events:none;color:#f4d36d;text-shadow:0 2px 8px rgba(0,0,0,.85)}
.mid3d-hero-load b{font-size:34px;line-height:1;animation:heroRunePulse 1.05s ease-in-out infinite}.mid3d-hero-load span{font-size:9px;letter-spacing:.8px;padding:3px 7px;border-radius:8px;background:rgba(4,9,6,.55)}
.mid3d-hint{left:50%;bottom:9px;transform:translateX(-50%);padding:6px 10px;border-radius:9px;background:rgba(5,10,7,.68);border:1px solid rgba(126,231,135,.18);color:#d0dfd3;font-size:10px;line-height:1.2;white-space:nowrap;pointer-events:none}
.mid3d-interact{left:50%;bottom:112px;transform:translateX(-50%);width:210px;text-align:center;padding:10px;border-radius:14px;background:rgba(5,11,7,.91);border:1px solid rgba(255,215,106,.55);box-shadow:0 8px 22px rgba(0,0,0,.35)}
.mid3d-interact b{display:block;color:#ffd76a;font-size:13px;line-height:1.2}
.mid3d-interact span{display:block;color:#aebfb2;font-size:10px;line-height:1.2;margin:3px 0 7px}
.mid3d-interact button{width:100%;padding:8px;border-radius:9px;background:#ffd76a;color:#241b06;font-weight:800;font-size:12px}
.mid3d-rematch{left:10px;top:72px;max-width:168px;padding:9px 11px;border-radius:13px;border:1px solid rgba(255,203,105,.72);background:linear-gradient(145deg,rgba(72,39,20,.94),rgba(28,20,14,.96));color:#ffe5a6;font-size:10px;font-weight:900;line-height:1.25;text-align:left;box-shadow:0 7px 20px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.12);z-index:34;animation:cloudin .24s ease-out}.mid3d-rematch small{display:block;margin-top:3px;color:#d8cbb4;font-size:8px;font-weight:600}.mid3d-rematch:active{transform:scale(.97);filter:brightness(1.12)}
.whisper-cloud{left:50%;bottom:8%;transform:translateX(-50%);width:min(90vw,390px);padding:14px;border-radius:24px;background:linear-gradient(180deg,#fffef9,#e8ece8);color:#211e18;border:1px solid rgba(104,76,37,.26);box-shadow:0 14px 36px rgba(0,0,0,.48),inset 0 -8px 16px rgba(83,103,91,.12);text-align:center;z-index:35;touch-action:auto}.whisper-cloud:before{content:"";position:absolute;left:26px;bottom:-15px;border-width:15px 18px 0 0;border-style:solid;border-color:#e8ece8 transparent transparent transparent}.whisper-cloud h3{margin:0 0 5px;color:#9a4d1e;font-size:15px}.whisper-cloud p{margin:0 0 9px;font-size:10px;line-height:1.4;color:#4c4a43}.whisper-question{font-size:13px;font-weight:900;line-height:1.38;margin:7px 0 8px}.whisper-answer,.whisper-action{width:100%;padding:9px;margin-top:6px;border-radius:11px;border:1px solid rgba(61,77,66,.25);background:rgba(255,255,255,.82);color:#242b26;font-size:11px;font-weight:800}.whisper-answer.good{background:#d9f3df;color:#1c7137;border-color:#54a66d}.whisper-answer.bad{background:#f5d8d1;color:#9b3022;border-color:#d56a58}.whisper-answer.off{opacity:.45}.whisper-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px}.whisper-action{margin:0;min-height:48px;background:linear-gradient(145deg,#fff9e8,#ded4bc);border-color:#a68248}.whisper-action.rune{background:linear-gradient(145deg,#eadcff,#b99ae9);color:#382059}.whisper-action.shield{background:linear-gradient(145deg,#dff3ff,#9bcbe5);color:#173d50}.whisper-action.rest{background:linear-gradient(145deg,#dff0d7,#9dc590);color:#24451e}.whisper-action:disabled{opacity:.48}.whisper-log{min-height:28px;margin:0 0 8px;font-size:10px;line-height:1.35;color:#5b4935;font-style:italic}.whisper-close{width:100%;padding:10px;border-radius:11px;background:linear-gradient(145deg,#c47a31,#793b1d);color:#fff7e8;font-size:11px;font-weight:900}.whisper-bars{left:8px;right:8px;top:18%;display:flex;justify-content:space-between;align-items:flex-start;z-index:32;pointer-events:none}.whisper-unit{width:44%;display:flex;flex-direction:column;align-items:center;padding:6px;border-radius:12px;background:rgba(5,9,7,.72);border:1px solid rgba(255,255,255,.22);box-shadow:0 6px 18px rgba(0,0,0,.32)}.whisper-unit b{font-size:10px;color:#fff3d6}.whisper-unit small{font-size:8px;color:#cfddd2;margin-top:2px}.whisper-pips{display:flex;gap:5px;margin-bottom:4px}.whisper-pip{width:12px;height:12px;border-radius:50%;background:#1e2822;border:1px solid rgba(255,255,255,.25)}.whisper-reward-icon{font-size:38px;filter:drop-shadow(0 0 10px #ff9d3e)}.whisper-reward-name{font-size:14px;font-weight:900;color:#8f3d18;margin:4px 0}.whisper-reward-rarity{display:inline-block;padding:3px 8px;border-radius:8px;background:#4e2618;color:#ffc873;font-size:9px;text-transform:uppercase;letter-spacing:.8px}.whisper-battle-fx{position:absolute;inset:-15%;z-index:34;pointer-events:none;opacity:0;animation:battleFlash .48s ease-out}.whisper-battle-fx.hit{background:linear-gradient(110deg,transparent 43%,rgba(255,242,195,.95) 49%,rgba(255,106,35,.88) 52%,transparent 58%)}.whisper-battle-fx.rune{background:radial-gradient(circle,rgba(171,118,255,.82),rgba(81,182,255,.38) 22%,transparent 57%)}.whisper-battle-fx.guard{background:radial-gradient(circle at 30% 48%,rgba(218,53,35,.58),transparent 38%)}
/* Combat HUD: health remains above the world; actions sit directly over the scene. */
.whisper-bars{top:10px;left:10px;right:10px;gap:12px}
.whisper-unit{width:min(42%,168px);min-height:42px;padding:7px 5px;background:rgba(7,13,10,.82);border-color:rgba(223,201,151,.27);border-radius:13px;backdrop-filter:blur(5px)}
.whisper-unit b{font-size:clamp(11px,3.3vw,14px);color:#e6b76f;line-height:1.15}
.whisper-unit small{font-size:11px;color:#d9dfd9;line-height:1.2}
.whisper-combat-hud{left:50%;bottom:47px;transform:translateX(-50%);width:min(calc(100% - 16px),420px);z-index:36;touch-action:auto}
.whisper-combat-energy{display:flex;align-items:center;justify-content:space-between;padding:0 15% 8px;pointer-events:none}
.whisper-combat-energy .whisper-pips{margin:0;gap:5px}
.whisper-combat-energy .whisper-pip{display:block;width:10px;height:10px;border-color:rgba(195,245,208,.55);box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}
.whisper-combat-actions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;align-items:start}
.whisper-combat-action{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:0;padding:0;border:0;background:none;color:#fff6e5;text-align:center;font:inherit;touch-action:manipulation;cursor:pointer}
.whisper-combat-icon{position:relative;display:grid;place-items:center;width:min(100%,64px);aspect-ratio:1;border:3px ridge #d6a352;border-radius:50%;background:radial-gradient(circle at 48% 40%,#55402a 0%,#241d17 65%,#100e0d 100%);box-shadow:inset 0 0 0 2px #5d3b20,inset 0 0 16px rgba(0,0,0,.75),0 4px 9px rgba(0,0,0,.6),0 0 0 1px #281709;color:#ffd06d;font-size:34px;line-height:1;text-shadow:0 0 11px #ffb341,0 2px 3px #211008}
.whisper-combat-icon:after{content:"";position:absolute;inset:4px;border:1px solid rgba(252,204,112,.25);border-radius:50%;pointer-events:none}
.whisper-combat-action.rune .whisper-combat-icon{font-family:serif;font-size:48px;color:#ffd071}
.whisper-combat-action.rest .whisper-combat-icon{font-size:31px}
.whisper-combat-action b{font-size:clamp(9px,2.6vw,12px);line-height:1.12;white-space:nowrap;text-shadow:0 2px 3px #060807,0 0 6px #060807}
.whisper-combat-action small{font-size:clamp(9px,2.6vw,11px);color:#e5e6df;line-height:1.1;text-shadow:0 2px 3px #060807,0 0 6px #060807}
.whisper-combat-action:active .whisper-combat-icon{transform:scale(.94);filter:brightness(1.25)}
.whisper-combat-action:focus-visible .whisper-combat-icon{outline:2px solid #fff4ca;outline-offset:3px}
.whisper-combat-action:disabled{opacity:.55;cursor:default}
.whisper-combat-log{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);width:max-content;max-width:90%;margin-bottom:13px;padding:6px 10px;border:1px solid rgba(231,194,124,.35);border-radius:9px;background:rgba(8,15,11,.84);color:#f3e5c9;font-size:10px;line-height:1.25;text-align:center;text-shadow:0 1px 2px #000;box-shadow:0 3px 12px rgba(0,0,0,.35);pointer-events:none}
@media(max-width:360px){.whisper-combat-hud{width:calc(100% - 12px)}.whisper-combat-actions{gap:3px}.whisper-combat-icon{width:min(100%,54px);font-size:28px}.whisper-combat-action.rune .whisper-combat-icon{font-size:41px}.whisper-combat-action b,.whisper-combat-action small{font-size:9px}.whisper-combat-energy{padding-left:12%;padding-right:12%}.whisper-combat-energy .whisper-pips{gap:4px}}
@media(max-height:480px){.whisper-combat-hud{bottom:37px}.whisper-combat-icon{width:min(100%,50px)}.whisper-combat-log{margin-bottom:6px}}
.mid3d-door-prompt{right:15px;top:43%;width:142px;padding:10px 10px 9px;border-radius:15px;background:#fffdf7;color:#17130e;border:1px solid rgba(82,51,23,.28);box-shadow:0 8px 24px rgba(0,0,0,.32);text-align:left}.mid3d-door-prompt:before{content:"";position:absolute;left:-10px;top:25px;border-width:8px 10px 8px 0;border-style:solid;border-color:transparent #fffdf7 transparent transparent}.mid3d-door-prompt b{display:block;margin-bottom:8px;color:#17130e;font-size:12px;line-height:1.15}.mid3d-door-prompt button{width:100%;padding:8px 6px;border-radius:9px;border:1px solid #77451f;background:linear-gradient(145deg,#d4924d,#8d5127);color:#fff8e9;font-size:10px;font-weight:900;box-shadow:inset 0 1px rgba(255,255,255,.3),0 3px 8px rgba(66,31,8,.25)}.mid3d-door-prompt button:active{transform:scale(.96);filter:brightness(1.1)}
.mid3d-map-shade{position:absolute;inset:0;z-index:40;background:rgba(3,7,5,.72);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:14px}
.mid3d-map-panel{position:relative;width:min(92vw,390px);max-height:86%;padding:14px;border-radius:18px;background:linear-gradient(145deg,#f7f0dc,#d8c8a6);border:2px solid #ba8d43;color:#322716;box-shadow:0 18px 42px rgba(0,0,0,.65),inset 0 0 28px rgba(112,75,31,.14);overflow:auto;touch-action:auto}
.mid3d-map-title{text-align:center;font-size:17px;font-weight:900;letter-spacing:1px;color:#65451e}.mid3d-map-sub{text-align:center;font-size:10px;color:#806944;margin:3px 0 9px}
.mid3d-map-canvas{position:relative;width:100%;aspect-ratio:1.28;border-radius:13px;overflow:hidden;border:1px solid rgba(94,65,29,.45);background:radial-gradient(circle at 48% 46%,#eee2c4,#cbb88f)}
.mid3d-map-canvas svg{position:absolute;inset:0;width:100%;height:100%}
.map-landmark{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-size:13px;font-weight:900;color:#4b371c;text-shadow:0 1px #f8edd2}.map-landmark small{font-size:7px;white-space:nowrap;background:rgba(246,236,210,.82);padding:1px 3px;border-radius:3px}
.map-landmark.goal{color:#a33b1f;animation:mapPulse 1.45s ease-in-out infinite}.map-landmark.hero{z-index:3;color:#155b76;font-size:18px}.map-landmark.hero small{color:#155b76}
.mid3d-map-goal{margin-top:9px;padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.45);border:1px solid rgba(139,80,28,.34);font-size:11px;line-height:1.35}.mid3d-map-goal b{color:#9b321a}
.mid3d-map-close{width:100%;margin-top:9px;padding:9px;border-radius:10px;background:linear-gradient(135deg,#8c5a28,#543319);color:#fff4dc;font-weight:800}
@keyframes mapPulse{0%,100%{filter:drop-shadow(0 0 2px #f6b144);transform:translate(-50%,-50%) scale(1)}50%{filter:drop-shadow(0 0 8px #ff7a36);transform:translate(-50%,-50%) scale(1.15)}}

.hall-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.hall-section{min-height:126px;padding:12px;border-radius:15px;text-align:left;background:linear-gradient(145deg,#18221b,#0d130f);border:1px solid #2b3c30;box-shadow:0 7px 16px rgba(0,0,0,.28)}
.inventory-hall{grid-column:1/-1}.inventory-section h3{font-size:14px;margin:4px 0 9px;color:#e9c16c}.inventory-list{display:grid;gap:7px}.inventory-item{display:grid;grid-template-columns:32px 1fr auto;align-items:center;gap:8px;padding:7px 8px;border:1px solid rgba(184,150,94,.34);border-radius:10px;background:rgba(10,17,14,.82);color:#f5ead4}.inventory-item.empty{opacity:.48}.inventory-symbol{font-size:23px;text-align:center;color:#e9ca74}.inventory-detail b{display:block;font-size:12px}.inventory-detail small{display:block;font-size:10px;color:#aabaad;line-height:1.3;margin-top:2px}.inventory-item button{border-radius:8px;border:1px solid #bda272;background:#4b3725;color:#fff3d8;padding:6px 8px;font-size:11px;white-space:nowrap}.inventory-item button:disabled{opacity:.45}.inventory-item button.active{background:#426345;border-color:#a6cf92}
.hall-section:active{transform:scale(.98)}.hall-section h3{font-size:13px;color:#ffd76a;margin:4px 0}.hall-section p{font-size:9px;line-height:1.35;color:#91a598}.hall-section .hall-icon{font-size:29px;display:block}.hall-count{display:inline-block;margin-top:7px;padding:3px 6px;border-radius:7px;background:#0a0e0b;border:1px solid #34473a;font-size:9px;color:#d6e3d8}
.hall-slots{display:flex;flex-wrap:wrap;gap:4px;margin-top:10px}.hall-slot{position:relative;width:42px;height:42px;flex:0 0 42px;border-radius:10px;border:1px solid #4b5d4e;background:#090d0a;display:flex;align-items:center;justify-content:center;font-size:20px}.hall-slot small{position:absolute;right:-3px;top:-5px;min-width:17px;padding:1px 3px;border-radius:8px;background:#6b3b18;border:1px solid #ffd76a;color:#fff4cf;font-size:8px;font-weight:900}.hall-slot.on{border-color:#ffd76a;box-shadow:0 0 9px rgba(255,215,106,.42)}.hall-slot:active{transform:scale(.91);background:#1b271e}
.inventory-actions{display:flex;flex-direction:column;gap:4px;min-width:72px}.inventory-actions button{width:100%}.inventory-actions .fuse{background:#3e2f54;border-color:#9f86c8}.inventory-actions .fuse:disabled{opacity:.4}
.artifact-hall{grid-column:1/-1}.artifact-slots{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}.artifact-slot{position:relative;min-width:48px;height:48px;padding:4px 7px;border:1px solid #4b5d4e;border-radius:11px;background:#090d0a;color:#f5ead4;font-size:22px}.artifact-slot small{position:absolute;right:-4px;top:-5px;padding:1px 4px;border-radius:7px;background:#5f421a;border:1px solid #ffd76a;color:#fff2c2;font-size:7px}.artifact-slot.on{border-color:#ffd76a;box-shadow:0 0 10px rgba(255,215,106,.42)}.artifact-detail{margin-top:10px;padding:10px;border:1px solid #526052;border-radius:11px;background:#0b100c}.artifact-detail b{display:block;color:#ffe19a;font-size:12px}.artifact-detail small{display:block;color:#a7b8aa;font-size:9px;line-height:1.4;margin-top:3px}.artifact-detail button{margin-top:8px;padding:7px 10px;border-radius:8px;border:1px solid #c3a55c;background:#503d20;color:#fff0c4;font-size:10px}.artifact-detail button.active{background:#34543b;border-color:#86bc90}
.vial{position:relative;width:13px;height:21px;border:1px solid rgba(235,249,255,.72);border-radius:3px 3px 7px 7px;background:linear-gradient(180deg,rgba(255,255,255,.35) 0 35%,var(--vial) 38% 100%);box-shadow:0 0 8px var(--vial)}
.craft-entry{width:100%;padding:13px;border-radius:15px;background:linear-gradient(135deg,#5f321b,#1c1712);border:1px solid #d68b38;text-align:left;box-shadow:inset 0 0 18px rgba(255,119,37,.12)}.craft-entry b{display:block;color:#ffc45e;font-size:14px}.craft-entry span{font-size:10px;color:#d7b891}
.craft-screen{background:radial-gradient(circle at 50% 28%,#62331d,#18120e 58%,#090b09);padding-top:18px}.craft-fire{font-size:48px;filter:drop-shadow(0 0 15px #ff6a21)}.craft-recipe{display:grid;grid-template-columns:1fr 34px 1fr 34px 1fr;align-items:center;gap:5px;margin:16px 0}.craft-slot{aspect-ratio:1;border-radius:12px;border:1px solid #725336;background:rgba(8,10,8,.72);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#8e806c;font-size:9px;padding:4px}.craft-slot b{font-size:24px;color:#d7b06a}.craft-slot.selected{border-color:#ffc45e;color:#ffe2a6;box-shadow:0 0 10px rgba(255,166,48,.28)}.craft-slot.result{border-color:#7fa56b;color:#d8f2c7}.craft-slot small{display:block;margin-top:3px;font-size:7px;line-height:1.2;color:#c8b79d}.craft-op{text-align:center;color:#ffbe55;font-size:20px;font-weight:900}.craft-picker{margin:8px 0 12px;padding:9px;border:1px solid #7c5732;border-radius:12px;background:rgba(12,10,8,.82);display:grid;gap:6px}.craft-picker-title{font-size:10px;color:#f2c777;font-weight:800;text-align:left}.craft-choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.craft-choice{display:flex;align-items:center;gap:7px;min-height:42px;padding:7px;border:1px solid #59442d;border-radius:9px;background:#17130f;color:#f1dfbf;text-align:left}.craft-choice b{font-size:10px}.craft-choice small{display:block;color:#aa9a83;font-size:8px}.craft-choice:disabled{opacity:.43}.craft-choice.on{border-color:#f2bd58;background:#2b1d10}.craft-cost{margin:9px 0;padding:8px;border-radius:9px;background:#18130e;border:1px solid #5c452d;color:#d7c4a8;font-size:9px;line-height:1.4}.craft-recipes{margin-top:9px;text-align:left;font-size:8px;line-height:1.45;color:#9f907b}.craft-recipes b{color:#e9bd6b}.steel-wallet{margin:12px 0;padding:10px 12px;border-radius:12px;border:1px solid #7f8490;background:linear-gradient(135deg,#24292e,#111416);color:#e9edf2;font-size:11px}.steel-wallet b{color:#dce8f6;font-size:14px}.steel-section{margin-top:14px;padding-top:12px;border-top:1px solid #5d4933;text-align:left}.steel-section h3{margin:0 0 5px;color:#e6c27d;font-size:12px}.steel-section p{margin:0 0 9px;color:#9e9383;font-size:8px;line-height:1.4}.steel-list{display:grid;gap:6px}.steel-row{display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px;padding:8px 9px;border-radius:9px;border:1px solid #4e4a43;background:#111311}.steel-row b{display:block;color:#eee2ca;font-size:10px}.steel-row small{display:block;color:#9d968a;font-size:8px;margin-top:2px}.steel-row button{padding:6px 8px;border-radius:7px;border:1px solid #a58a5b;background:#3c3020;color:#fff0ce;font-size:8px}.steel-row button:disabled{opacity:.42}.steel-recipe{display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px;padding:9px;border-radius:10px;border:1px solid #52605b;background:linear-gradient(135deg,#17201c,#101411)}.steel-recipe.locked{opacity:.48}.steel-recipe b{display:block;color:#dbe9df;font-size:10px}.steel-recipe small{display:block;color:#9fb0a5;font-size:8px;line-height:1.35;margin-top:2px}.steel-recipe button{padding:6px 8px;border-radius:7px;border:1px solid #89a48f;background:#294032;color:#eefbed;font-size:8px}.steel-recipe button:disabled{opacity:.45}
.forge-screen{background:radial-gradient(circle at 50% 8%,rgba(239,100,27,.32),transparent 34%),linear-gradient(180deg,#21140d,#0b0d0b 72%);padding-top:14px}
.forge-head{position:relative;flex:0 0 auto;min-height:166px;overflow:hidden;padding:14px 16px;border-radius:18px;border:1px solid #9a5a27;background:linear-gradient(145deg,rgba(82,42,19,.95),rgba(17,15,12,.96));box-shadow:inset 0 0 28px rgba(255,107,31,.13),0 8px 20px rgba(0,0,0,.35);text-align:center}.forge-head:before{content:"ᚲ";position:absolute;right:-3px;top:-22px;font-size:105px;color:rgba(255,146,53,.07);transform:rotate(10deg)}
.forge-title{color:#ffc66c;font-size:18px;font-weight:900;letter-spacing:.7px;margin-top:1px}.forge-master{color:#d9c5a6;font-size:10px;line-height:1.35;margin:4px auto 8px;max-width:310px}.forge-advice{position:relative;margin:0 auto 9px;padding:7px 10px;max-width:310px;border-radius:10px;background:rgba(255,232,176,.09);border:1px solid rgba(255,199,92,.30);color:#ffe3a6;font-size:9px;line-height:1.35}.forge-wallet{display:inline-flex;align-items:center;gap:7px;padding:6px 10px;border-radius:11px;background:rgba(4,7,5,.72);border:1px solid rgba(255,196,94,.34);font-size:11px;color:#ffe0a0}.forge-wallet b{color:#ffb34d;font-size:13px}
.forge-free{margin:10px 0 5px;padding:7px 9px;border-radius:10px;background:rgba(255,224,132,.09);border:1px dashed rgba(255,215,106,.42);color:#e9d4a4;font-size:9px;line-height:1.35}.forge-free.ready{color:#fff0b2;box-shadow:inset 0 0 13px rgba(255,174,57,.1)}
.forge-wall{position:relative;flex:0 0 auto;overflow:hidden;width:100%;aspect-ratio:5/4.5;margin:6px 0 4px;border:5px ridge #76502b;border-radius:13px;background:repeating-linear-gradient(0deg,#35251a 0 10px,#432e1c 11px 64px,#251b14 65px 68px);box-shadow:inset 0 0 32px #100c0a,0 7px 18px #0008}
.forge-wall canvas{display:block;width:100%;height:100%}
.forge-wall-labels{position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(4,1fr)}
.forge-wall-label{display:flex;align-items:flex-end;justify-content:center;padding:0 1px 2px;border:1px solid #b9873c66;background:linear-gradient(180deg,transparent 58%,#21170eca);color:#ffe6ad;font-size:6px;font-weight:800;text-align:center;text-shadow:0 1px 3px #000,0 0 6px #000;line-height:1.1}
.forge-wall-label.owned{color:#b8f0b4}
.forge-wall-label.equipped{border:2px solid #93e697;box-shadow:inset 0 0 11px #59d97790}.forge-wall-label:active{background:#bb783955}
.spark-drop{display:inline-block;width:18px;height:28px;margin:0 2px;object-fit:contain;object-position:center;filter:drop-shadow(0 0 5px #ffac34aa);flex:0 0 auto}
.sparks .spark-drop{width:20px;height:31px;margin:-1px 1px 0 0}
.forge-wallet .spark-drop{width:17px;height:26px}
.forge-equipped{display:flex;align-items:center;justify-content:space-between;gap:7px;padding:8px 9px;border:1px solid #d9a749;border-radius:10px;background:#352314;color:#ffe6a7;font-size:9px;font-weight:800}.forge-equipped button{padding:6px 7px;background:#b97e32;border:1px solid #ffe5a2;border-radius:7px;color:#1b1208;font-size:8px;font-weight:900}
.forge-gear-actions{display:flex;gap:5px;width:100%}.forge-gear-actions button{flex:1;min-height:25px;padding:3px 1px;border-radius:6px;border:1px solid #bf914f;background:#44301a;color:#ffe6a7;font-size:7px;font-weight:800}.forge-gear-actions button.on{background:#31704a;border-color:#a6e0a5}.forge-gear-actions button:disabled{opacity:.58}
.forge-wall-note{font-size:10px;line-height:1.4;color:#e5cdaa;margin:5px 2px 9px}
.forge-group-title{display:flex;align-items:center;gap:7px;margin:15px 2px 7px;color:#eacb91;font-size:11px;font-weight:900;letter-spacing:.8px;text-transform:uppercase}.forge-group-title:after{content:"";height:1px;flex:1;background:linear-gradient(90deg,rgba(226,165,80,.42),transparent)}
.forge-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}.forge-item{position:relative;min-height:49px;padding:3px 2px;border-radius:8px;border:1px solid #9c7535;background:linear-gradient(145deg,#6f4b1d,#271b0e 56%,#11100d);color:#fff0c5;box-shadow:inset 0 0 9px rgba(255,207,91,.09),0 2px 5px rgba(0,0,0,.25);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;touch-action:manipulation}.forge-item:active{transform:scale(.96);filter:brightness(1.18)}.forge-item .fi-icon{font-size:16px;line-height:1;filter:drop-shadow(0 0 6px rgba(255,188,72,.42))}.forge-item .fi-name{font-size:7px;font-weight:800;line-height:1.12}.forge-item .fi-level{font-size:6px;color:#f3cb78}.forge-item .fi-cost{padding:1px 3px;border-radius:5px;background:rgba(7,7,5,.56);font-size:6px;color:#ffbd58}.forge-item.free{border-color:#ffd76a;box-shadow:inset 0 0 10px rgba(255,213,90,.16),0 0 6px rgba(255,166,47,.18)}.forge-item.selected{border-color:#ffe18a;box-shadow:inset 0 0 10px rgba(255,220,119,.2),0 0 8px rgba(255,135,37,.35)}.forge-item.locked{filter:saturate(.25);opacity:.56}.forge-item.locked .fi-cost{color:#9e9582}.forge-item.maxed{border-color:#9cdaae;background:linear-gradient(145deg,#37583f,#15241a 60%,#0b100c)}
.forge-note{margin:14px 0 6px;padding:10px 12px;border-radius:12px;border:1px solid rgba(213,155,75,.25);background:rgba(5,7,5,.62);font-size:9px;line-height:1.45;color:#bba98e}.forge-note b{color:#f1c979}.forge-exit{width:100%;margin-top:8px;padding:12px;border-radius:12px;border:1px solid #ff765a;background:radial-gradient(circle at 50% 0,rgba(255,201,96,.42),transparent 42%),linear-gradient(135deg,#b31f27,#5d0711 64%,#260207);color:#fff0db;font-size:11px;font-weight:900;box-shadow:inset 0 0 18px rgba(255,133,48,.23),0 0 14px rgba(198,28,27,.28);text-shadow:0 1px 4px #350006}.forge-exit:active{transform:scale(.98);filter:brightness(1.12)}
.forge-transition{position:fixed;inset:0;z-index:80;background:radial-gradient(circle,rgba(255,151,46,.32),rgba(5,5,4,.94) 58%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#ffd47b;pointer-events:all}.forge-transition b{display:flex;align-items:center;justify-content:center;width:104px;height:104px;border-radius:50%;border:2px solid rgba(255,198,89,.72);background:radial-gradient(circle,rgba(255,178,56,.3),rgba(68,29,9,.42) 55%,transparent 57%);font-size:54px;box-shadow:0 0 26px rgba(255,116,25,.65),inset 0 0 25px rgba(255,188,77,.35);animation:forgePortal .72s ease-out}.forge-transition span{font-size:10px;letter-spacing:1.3px;text-transform:uppercase;text-shadow:0 2px 8px #000}
/* ===== Mill of Immortality: independent lightweight scene ===== */
.mill-scene{flex:1;position:relative;overflow:hidden;background:linear-gradient(180deg,#b9d5eb,#d9e8ef 68%,#d9e8d4);isolation:isolate}
.mill-scene canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.mill-vignette{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,rgba(255,255,255,.03),transparent 32%,transparent 76%,rgba(28,49,33,.16)),radial-gradient(circle at 50% 48%,transparent 52%,rgba(46,73,53,.08) 100%)}
.mill-title{position:absolute;z-index:4;top:9px;left:50%;transform:translateX(-50%);width:min(76vw,290px);height:38px;display:flex;align-items:center;justify-content:center;border:0;background:transparent;isolation:isolate;padding:8px 15px}
.mill-title b{position:relative;z-index:2;display:block;color:#f0c866;font-size:11px;letter-spacing:.6px;text-align:center}
.mill-frame-card,.mill-icon-btn,.mill-sluice{position:absolute;z-index:4;background:transparent;border:0;isolation:isolate}
.mill-title::before,.mill-frame-card::before,.mill-icon-btn::before,.mill-sluice::before{content:"";position:absolute;z-index:0;inset:2px;background:#010302;clip-path:polygon(7% 0%,93% 0%,97% 6%,100% 15%,100% 85%,97% 94%,93% 100%,7% 100%,3% 94%,0% 85%,0% 15%,3% 6%)}
.mill-frame-img{position:absolute;inset:0;width:100%;height:100%;object-fit:fill;z-index:1;pointer-events:none;filter:drop-shadow(0 3px 4px rgba(0,0,0,.4))}
.mill-top-stats{position:absolute;z-index:4;top:53px;left:12px;right:12px;height:52px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.mill-frame-card{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:5px 11px;color:#ffd478}
.mill-frame-card b{position:relative;z-index:2;font-size:18px;line-height:1}.mill-stat-icon{position:relative;z-index:2;width:38px;height:32px;display:block;filter:drop-shadow(0 2px 3px rgba(0,0,0,.5))}
.mill-sluice{left:50%;bottom:72px;transform:translateX(-50%);width:min(82vw,315px);height:66px;display:grid;grid-template-columns:42px 1fr 42px;align-items:center;gap:4px;padding:8px 9px}
.mill-sluice .mill-frame-img{z-index:1}
.mill-sluice button{position:relative;z-index:2;width:34px;height:32px;margin:auto;border-radius:9px;border:1px solid #6f5730;background:linear-gradient(180deg,#2b2416,#17140e);color:#ffd677;font-size:17px;font-weight:900}.mill-sluice button:disabled{opacity:.35}
.mill-flow-readout{position:relative;z-index:2;text-align:center;min-width:0}.mill-flow-readout small{display:block;color:#8fa197;font-size:7px;letter-spacing:.45px;text-transform:uppercase}.mill-flow-readout b{display:block;margin-top:1px;color:#e9d39b;font-size:9px}.mill-flow-readout b.good{color:#ffd76d;text-shadow:0 0 8px rgba(255,192,58,.28)}.mill-flow-readout b.warn{color:#d6b07b}
.mill-flow-bars{display:flex;justify-content:center;gap:3px;margin-top:3px}.mill-flow-bars i{display:block;width:16px;height:3px;border-radius:4px;background:#27342b;border:1px solid #405047}.mill-flow-bars i.on{background:#d5a63f;border-color:#f1cc6f;box-shadow:0 0 4px rgba(235,180,62,.35)}
.mill-rate-pill{position:absolute;z-index:4;left:50%;bottom:139px;transform:translateX(-50%);display:flex;align-items:center;gap:7px;padding:4px 8px;border-radius:11px;background:rgba(5,10,7,.82);border:1px solid rgba(205,160,67,.36);color:#aebcaf;font-size:8px;white-space:nowrap}.mill-rate-pill b{color:#e8c36e;font-size:9px}
.mill-controls{position:absolute;z-index:4;left:50%;bottom:12px;transform:translateX(-50%);display:flex;align-items:center;justify-content:center;gap:9px}
.mill-icon-btn{position:relative;width:58px;height:48px;display:flex;align-items:center;justify-content:center;padding:0;overflow:visible}.mill-icon-btn .mill-frame-img{z-index:1}.mill-icon-btn svg{position:relative;z-index:2;width:31px;height:31px;overflow:visible;filter:drop-shadow(0 2px 3px rgba(0,0,0,.6))}.mill-icon-btn.home svg{width:34px;height:30px}.mill-icon-btn.collect svg{width:34px;height:32px}.mill-icon-btn:disabled{opacity:1}.mill-icon-btn:disabled svg{opacity:.38;filter:saturate(.55)}.mill-icon-btn:active{transform:translateY(1px) scale(.975)}
.mill-load{position:absolute;z-index:5;left:50%;top:48%;transform:translate(-50%,-50%);padding:8px 11px;border-radius:12px;background:rgba(4,8,6,.82);border:1px solid rgba(224,176,77,.42);color:#e6c46f;font-size:10px;pointer-events:none}
.mill-collected{position:absolute;z-index:6;left:50%;top:29%;transform:translate(-50%,-50%);padding:8px 12px;border-radius:16px;background:rgba(15,20,13,.9);border:1px solid #e2b04c;color:#ffdf83;font-size:11px;font-weight:900;animation:millCollected .9s ease-out forwards;pointer-events:none}
.mill-river-hint{position:absolute;z-index:5;left:50%;bottom:174px;transform:translateX(-50%);max-width:72%;padding:4px 8px;border-radius:9px;background:rgba(2,7,6,.88);border:1px solid #806735;color:#f0d493;font-size:9px;line-height:1.3;text-align:center;pointer-events:none}
.mill-net-btn{position:absolute;z-index:5;right:12px;bottom:153px;width:48px;height:43px}
@keyframes millCollected{0%{opacity:0;transform:translate(-50%,-40%) scale(.8)}25%{opacity:1;transform:translate(-50%,-50%) scale(1.06)}100%{opacity:0;transform:translate(-50%,-72%) scale(1)}}
@media(max-width:380px){.mill-title{top:7px;width:min(80vw,270px);height:36px;padding:7px 12px}.mill-top-stats{left:8px;right:8px;top:49px;height:48px}.mill-frame-card b{font-size:16px}.mill-stat-icon{width:34px;height:29px}.mill-sluice{bottom:67px;width:min(86vw,300px);height:62px}.mill-rate-pill{bottom:132px}.mill-icon-btn{width:54px;height:45px}.mill-controls{bottom:9px;gap:7px}}

.battle-potion-panel{bottom:12px;width:min(94vw,390px);max-height:calc(100% - 24px);height:min(62dvh,460px);padding:10px;z-index:45;display:flex;flex-direction:column;overflow:hidden;box-sizing:border-box}
.battle-potion-panel:before{display:none}
.battle-potion-panel h3{font-size:16px;margin:0 0 5px;flex-shrink:0}
.battle-potion-panel>p{font-size:11px;line-height:1.3;margin:0 0 7px;flex-shrink:0}
.battle-potion-panel .inventory-list{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;gap:5px;padding:0 2px 4px}
.battle-potion-panel .inventory-item{grid-template-columns:24px minmax(0,1fr) auto;gap:5px;padding:6px;border-radius:9px;text-align:left}
.battle-potion-panel .inventory-symbol{font-size:20px}
.battle-potion-panel .inventory-detail{min-width:0}
.battle-potion-panel .inventory-detail b{font-size:11px;line-height:1.2}
.battle-potion-panel .inventory-detail small{font-size:10px;line-height:1.25}
.battle-potion-panel .inventory-item button{font-size:10px;padding:9px 6px;min-height:36px}
.battle-potion-panel .whisper-close{flex-shrink:0;font-size:12px;margin-top:6px;padding:9px}
/* Scene messages share a light surface; controls have a separate lower lane. */
.mid3d-interact,.mid3d-door-prompt,.mid3d-hint{left:50%;right:auto;top:auto;bottom:10px;transform:translateX(-50%);width:min(calc(100% - 24px),340px);max-height:90px;box-sizing:border-box;padding:8px 10px;border:1px solid #d9d9d9;border-radius:12px;background:#fff;color:#111;box-shadow:0 4px 16px rgba(0,0,0,.22);text-align:center;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;z-index:31}
.mid3d-interact b,.mid3d-door-prompt b{color:#111;font-size:12px;line-height:1.2;margin:0 0 4px}
.mid3d-interact span{color:#111;font-size:10px;line-height:1.25;margin:3px 0 6px}
.mid3d-interact button,.mid3d-door-prompt button{padding:7px 8px;min-height:32px;font-size:11px;line-height:1.2;background:#f2f2f2;color:#111;border:1px solid #bdbdbd;box-shadow:none}
.mid3d-door-prompt:before{display:none}
.mid3d-hint{font-size:10px;line-height:1.3;white-space:normal;pointer-events:auto;cursor:pointer}
.mid3d-joy{bottom:110px}
.mid3d-strike{bottom:140px}
.mid3d-block{bottom:206px}
.mid3d-choice-panel{max-height:min(62%,360px)}
.mid3d-choice-panel button+button{margin-top:5px}
.mid3d-scene:has(.mid3d-choice-panel) .mid3d-joy,.mid3d-scene:has(.mid3d-choice-panel) .mid3d-strike,.mid3d-scene:has(.mid3d-choice-panel) .mid3d-block{display:none}
.whisper-combat-log{top:calc(100% + 6px);bottom:auto;margin:0;max-width:calc(100% - 12px);max-height:38px;box-sizing:border-box;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;padding:4px 8px;background:#fff;color:#111;border-color:#d9d9d9;font-size:9px;line-height:1.25;text-shadow:none;pointer-events:auto}
.whisper-unit{background:#fff;color:#111;border-color:#d9d9d9}
.whisper-unit b,.whisper-unit small{color:#111}
.whisper-cloud{background:#fff;color:#111}
.whisper-cloud:before{border-top-color:#fff}
.whisper-cloud h3,.whisper-cloud p,.whisper-log,.whisper-reward-name{color:#111}
.mid3d-rematch{background:#fff;color:#111;border-color:#d9d9d9;text-shadow:none}
.mid3d-rematch small{color:#111}
@media(max-height:480px){.mid3d-interact,.mid3d-door-prompt,.mid3d-hint{max-height:56px;bottom:6px;padding:6px 8px}.mid3d-joy{bottom:72px}.mid3d-strike{bottom:102px}.mid3d-block{bottom:168px}.mid3d-choice-panel{max-height:calc(100% - 12px)}.whisper-combat-hud{bottom:47px}}

.whisper-reward-rarity{background:#fff;color:#111;border:1px solid #d9d9d9}
`;

