import assert from 'node:assert/strict';import fs from 'node:fs';import {buildSync} from 'esbuild';import * as T from 'three';
const file=new URL('./.enemy-visibility-test.mjs',import.meta.url);
buildSync({stdin:{contents:`export {selectVisibleEnemy} from './src/muspelheimEnemyHud';export {createAssassinCombat} from './src/muspelheimAssassinCombat';export {createMuspelheimArmy} from './src/muspelheimArmy';`,resolveDir:process.cwd()},bundle:true,format:'esm',platform:'node',packages:'external',outfile:file.pathname,logLevel:'silent'});
try{
 const {selectVisibleEnemy:select,createAssassinCombat:combat,createMuspelheimArmy:create}=await import(file.href);
 const camera=new T.PerspectiveCamera(60,1,.1,650);camera.position.set(0,15,25);camera.lookAt(0,7,0);const hero={x:0,y:0,z:0};
 const enemy=(x,y,z,visible=true)=>({combatEnabled:true,root:Object.assign(new T.Group(),{visible}),body:{height:14},combat:{hp:140,position:{x,y,z},phase:'chase'}});
 const near=enemy(0,0,-8),far=enemy(0,0,-300),hidden=enemy(0,0,-5,false),below=enemy(0,-82,-8),behind=enemy(0,0,35),side=enemy(30,0,0);
 assert.equal(select([far],hero,camera,()=>true),undefined,'Remote chase/burn cannot put health on HUD');assert.equal(select([hidden,below,behind,side],hero,camera,()=>true),undefined,'Hidden, below ground or out-of-view enemies are excluded');assert.equal(select([near],hero,camera,()=>false),undefined,'Walls block HUD');assert.equal(select([far,near],hero,camera,()=>true),near);near.combat.hp=0;assert.equal(select([near],hero,camera,()=>true),undefined);
 const burned=combat(hero);burned.hurt(140);burned.interrupt(1);for(let i=0;i<50;i++)burned.step(.1,{x:300,y:0,z:0},true,()=>0);assert.equal(burned.phase,'idle','A distant trap victim does not track Vicki');assert.deepEqual(burned.position,hero);
 const blocked=combat(hero);for(let i=0;i<50;i++)blocked.step(.1,{x:10,y:0,z:0},true,()=>0,()=>false);assert.equal(blocked.phase,'idle','An unseen enemy does not engage through a wall');blocked.step(.1,{x:10,y:0,z:0},true,()=>0,()=>true);assert.notEqual(blocked.phase,'idle');
 // Lightweight rig fixture isolates navigation from renderer and texture availability.
 const template=()=>({scene:new T.Mesh(new T.BoxGeometry(2,14,1),new T.MeshStandardMaterial()),animations:['sword_attack','fall'].map(name=>new T.AnimationClip(name,1,[]))});
 const nodes=[];for(let x=-480;x<=480;x+=20)for(let z=-420;z<=100;z+=20)nodes.push({x,y:0,z});const nearest=p=>nodes.slice().sort((a,b)=>Math.hypot(a.x-p.x,a.z-p.z)-Math.hypot(b.x-p.x,b.z-p.z))[0];const nav={nodes,nearest,route:(a,b)=>[b]};
 const army=create([template(),template(),template()],nav);assert.equal(army.actors.length,71);const elf=army.actors[1],home={...elf.combat.position};assert(elf.name.startsWith('Тёмная эльфийка'));
 for(let i=0;i<900;i++)elf.update(.1,{x:1000,y:0,z:1000},true,()=>0);assert(Math.hypot(elf.combat.position.x-home.x,elf.combat.position.z-home.z)<=41,'Entrance elf stays within her local patrol');assert(elf.root.visible===false,'Only distance culling hides her far away');elf.update(.1,{...elf.combat.position,z:elf.combat.position.z+18},true,()=>0);assert(elf.root.visible,'Elf becomes visible when approached');army.actors.forEach(a=>a.dispose());
 console.log('PASS: HUD requires visible nearby live enemies and clear line of sight; trap victims do not aggro across the map; elf patrol stays local and becomes visible nearby.');
}finally{fs.unlinkSync(file);}
