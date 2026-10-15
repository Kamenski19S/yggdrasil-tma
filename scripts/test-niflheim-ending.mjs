import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {fileURLToPath} from 'node:url';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
globalThis.window={};
const server=await createServer({root:fileURLToPath(new URL('../',import.meta.url)),server:{middlewareMode:true}});
try{
 const {DEF}=await server.ssrLoadModule('/src/core.tsx');
 const {applyCrystalEvent:apply,waterCrystalProgress:progress,CRYSTAL_PARTS}=await server.ssrLoadModule('/src/waterCrystalQuest.ts');
 const {NiflheimGuide}=await server.ssrLoadModule('/src/NiflheimGuide.tsx');
 assert.equal(apply(DEF,'stranger:muspelheim'),DEF);
 const parts=CRYSTAL_PARTS.map(p=>'niflheim:waterCrystal:'+p.id);
 const unbeaten={...DEF,done:parts};assert.equal(apply(unbeaten,'assemble'),unbeaten);
 const victory={...DEF,done:[...parts,'niflheim:dragon:defeated']};assert.equal(apply(victory,'stranger:muspelheim'),victory);
 const crystal=apply(victory,'assemble');assert(progress(crystal.done).assembled);assert.equal(crystal.lootCounts.waterCrystal,1);assert.equal(apply(crystal,'openGate'),crystal);
 const heard=apply(crystal,'stranger:muspelheim');assert(progress(heard.done).strangerBriefed);assert(progress(heard.done).canOpenGate);assert.equal(heard.lootCounts.waterCrystal,1);assert.equal(apply(heard,'stranger:muspelheim'),heard);
 const opened=apply(heard,'openGate');assert(progress(opened.done).gateOpen);assert.equal(opened.lootCounts.waterCrystal,0);assert.equal(apply(opened,'openGate'),opened);
 const old={...crystal,done:[...crystal.done,'muspelheim:firstGate:opened'],lootCounts:{...crystal.lootCounts,waterCrystal:0}};assert(progress(old.done).gateOpen);assert.equal(apply(old,'openGate'),old);assert(progress(apply(old,'stranger:muspelheim').done).gateOpen);
 const restored=JSON.parse(JSON.stringify(heard));assert(progress(restored.done).strangerBriefed);assert(progress(restored.done).canOpenGate);
 const text=renderToStaticMarkup(React.createElement(NiflheimGuide,{done:heard.done,onClose(){}}));assert(text.includes('готовый артефакт'));assert(text.includes('Осколок Хвергельмира'));assert(text.includes('Странница указала путь'));assert(text.includes('тёмные нити'));assert(text.includes('Муспельхейм'));
 console.log('PASS: ending award story, crystal before briefing, briefing before new gate, no duplicate events, persisted progress and existing gates preserved.');
}finally{await server.close();}
