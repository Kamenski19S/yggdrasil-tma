import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';
import * as T from 'three';
async function mod(file){const code=buildSync({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',external:['three','three/*']}).outputFiles[0].text.replaceAll(/from "(three[^\"]*)"/g,(_,p)=>`from ${JSON.stringify(import.meta.resolve(p))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const m=await mod('src/shadowStrike.ts'),{createGateMagic}=await mod('src/muspelheimGateMagic.ts'),{createShadowStrikeVfx}=await mod('src/shadowStrikeVfx.ts');
for(const fps of [10,20,60,120]){
 const s=m.createShadowDrain();m.applyShadowDrain(s,false);let loss=0;
 for(let i=0;i<fps*6;i++)loss+=m.stepShadowDrain(s,1/fps);
 assert.equal(loss,5,'Exactly five drops at '+fps+' FPS');assert.equal(s.remaining,0);
 const caster=createGateMagic({x:0,y:0,z:0},{},m.SHADOW_STRIKE);let release=null,hit=null;
 for(let i=0;i<fps*2;i++){const e=caster.step(1/fps,{x:0,y:0,z:24},true,{x:0,y:7,z:0},true);if(e.released)release=i/fps;if(e.impact)hit=i/fps;}
 assert.notEqual(hit,null);assert(hit-release<=.2,'Fast swept shadow impact');
 const wall=createGateMagic({x:0,y:0,z:0},{},m.SHADOW_STRIKE);let hits=0;
 for(let i=0;i<fps*3;i++)hits+=+wall.step(1/fps,{x:0,y:0,z:24},true,{x:0,y:7,z:0},true,(x,z)=>z>10&&z<10.5?null:0).impact;
 assert.equal(hits,0,'No travel through walls');
}
const s=m.createShadowDrain();assert.equal(m.applyShadowDrain(s,true),false);assert.equal(m.stepShadowDrain(s,10),0);
m.applyShadowDrain(s,false);m.stepShadowDrain(s,.5);const paused=JSON.stringify(s);m.stepShadowDrain(s,0);assert.equal(JSON.stringify(s),paused);
m.applyShadowDrain(s,false);assert.equal(m.stepShadowDrain(s,.5),1,'Refresh retains the partial tick instead of stacking or delaying drain');assert.equal(m.stepShadowDrain(s,10),4,'Overshoot stops at expiry');
assert.equal(m.drainImmortalityDrops(2,5),0);assert.equal(m.drainImmortalityDrops(0,1),0);for(const bad of [-3,NaN,Infinity])assert.equal(m.drainImmortalityDrops(12,bad),12);
let wallet=7;m.applyShadowDrain(s,false);wallet=m.drainImmortalityDrops(wallet,m.stepShadowDrain(s,5));assert.equal(wallet,2);assert.equal(m.stepShadowDrain(s,50),0);
const fx=createShadowStrikeVfx(),camera=new T.PerspectiveCamera();fx.charge({x:0,y:7,z:0});for(let i=0;i<100;i++)fx.bolt(String(i),{x:i,y:7,z:0});assert(fx.root.children.length<=10,'Projectile pool stays bounded');fx.impact();assert.equal(fx.root.children.length,2);fx.update(.1,camera,{x:10,y:3,z:-20},5);const fog=fx.root.getObjectByName('Тёмно-фиолетовый туман вокруг Vicki');assert(fog.visible);assert.deepEqual(fog.position.toArray(),[10,3,-20]);assert.equal(fog.children.length,24);fx.update(0,camera,{x:20,y:3,z:-30},5);assert.deepEqual(fog.position.toArray(),[20,3,-30]);fx.update(1,camera,{x:0,y:0,z:0},0);assert(!fog.visible);fx.clear();fx.dispose();fx.dispose();
console.log('Shadow strike passed: fast flight/walls at 10/20/60/120 FPS, five timed drops, refresh without stacking, pause, shield, expiry, nonnegative wallet, following fog and bounded VFX.');
