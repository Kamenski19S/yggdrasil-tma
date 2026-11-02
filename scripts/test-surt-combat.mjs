import assert from 'node:assert/strict';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true}});
try{
 const {createSurtCombat,settleSurtVictory,SURT_CALMED}=await server.ssrLoadModule('/src/surtCombat.ts');
 const origin={x:0,y:50,z:0},hero={x:0,y:50,z:20};
 const c=createSurtCombat();assert(c.start(origin,hero));assert.equal(c.active,true);
 const frame=(ward=()=>false,h=hero)=>c.update(.1,h,ward);
 assert.equal(c.update(0,hero,()=>false).damage,0);assert.equal(c.elapsed,0);
 let hits=0;for(let i=0;i<32;i++)hits+=frame().damage;assert.equal(hits,95,'one blade impact');
 c.reset();c.start(origin,hero);hits=0;for(let i=0;i<32;i++)hits+=frame(k=>k==='physical').damage;assert.equal(hits,0);
 c.reset();c.start(origin,hero);hits=0;for(let i=0;i<32;i++)hits+=frame(()=>false,{...hero,x:20}).damage;assert.equal(hits,0,'leave telegraph');
 c.reset();c.start(origin,hero);let waves=0,fissures=0,damage=0,steps=0;
 assert.match(c.strike(hero,'swordPrototype',true,240),/Жди/);
 while(c.active&&steps++<3000){const before=c.phase;const event=frame(k=>k==='fire'||k==='physical');damage+=event.damage;if(c.attack==='fissure'&&event.damage)fissures++;
 if(c.phase==='opening'&&before!=='opening'){waves++;const old=c.flame;c.strike(hero,'default',true,240);assert.equal(c.flame,old);c.strike(hero,'swordPrototype',false,240);assert.equal(c.flame,old);c.strike({...hero,z:40},'swordPrototype',true,240);assert.equal(c.flame,old);c.strike(hero,'swordPrototype',true,240);assert(c.flame<old);const after=c.flame;c.strike(hero,'swordPrototype',true,240);assert.equal(c.flame,after,'one hit per opening');}}
 assert.equal(c.flame,0);assert(!c.active);assert(waves>=5);assert(fissures>0&&damage>0,'fissures bypass wards');
 c.start(origin,hero);assert(c.update(.1,{...hero,z:70},()=>false).retreated);assert(!c.active);assert.equal(c.flame,100);
 const save={done:[]};const won=settleSurtVictory(save);assert(won.done.includes(SURT_CALMED));assert.equal(settleSurtVictory(won),won);assert(JSON.parse(JSON.stringify(won)).done.includes(SURT_CALMED));
 const {createSurtCombatVfx}=await server.ssrLoadModule('/src/surtCombatVfx.ts');const vfx=createSurtCombatVfx();c.start(origin,hero);vfx.update(c,1);assert(vfx.root.visible);c.reset();vfx.update(c,2);assert(!vfx.root.visible);vfx.dispose();
 console.log('PASS: telegraphs, dodge, typed wards, fissures, pause, sword/cold/range checks, one strike per opening, rage progression, victory persistence, retreat and VFX lifecycle');
}finally{await server.close();}
