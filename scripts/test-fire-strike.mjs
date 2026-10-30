import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';
import * as T from 'three';
async function mod(file){const code=buildSync({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',external:['three','three/*']}).outputFiles[0].text.replaceAll(/from "(three[^\"]*)"/g,(_,p)=>`from ${JSON.stringify(import.meta.resolve(p))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {createFireStrikeVfx,FIRE_STRIKE}=await mod('src/fireStrikeVfx.ts'),{createGateMagic}=await mod('src/muspelheimGateMagic.ts'),m=await mod('src/elementalMagic.ts'),{playtestHealth}=await mod('src/magicPlaytest.ts');
for(const fps of [10,20,60,120]){
 const caster=createGateMagic({x:0,y:0,z:0},{},FIRE_STRIKE);let released=null,hit=null,hits=0;
 for(let i=0;i<fps*2;i++){const e=caster.step(1/fps,{x:0,y:0,z:24},true,{x:0,y:7,z:0},true);if(e.released)released=i/fps;if(e.impact){hit=i/fps;hits++;}}
 assert.equal(hits,1);assert(hit-released<=.21,'Fire travels quickly at '+fps+' FPS');
 const wall=createGateMagic({x:0,y:0,z:0},{},FIRE_STRIKE);let through=0;for(let i=0;i<fps*3;i++)through+=+wall.step(1/fps,{x:0,y:0,z:24},true,{x:0,y:7,z:0},true,(x,z)=>z>10&&z<10.4?null:0).impact;assert.equal(through,0);
 const s=m.createAilments();m.applyElement(s,'fire',false);assert.equal(m.magicMoveScale(s),1,'Burn does not interrupt running or fighting');let hp=286,raw=0;for(let i=0;i<fps*4;i++){const damage=m.stepAilments(s,1/fps);raw+=damage;hp=playtestHealth(hp-damage,286);}assert.equal(raw,12);assert.equal(hp,286,'HP stays protected throughout the burn');assert.equal(s.burn,0);
 const shield=m.createAilments();m.applyElement(shield,'fire',true);assert.deepEqual(shield,m.createAilments());
}
const fx=createFireStrikeVfx(),camera=new T.PerspectiveCamera();
fx.charge({x:0,y:7,z:0});for(let i=0;i<100;i++)fx.bolt(String(i),{x:i,y:7,z:0,vx:0,vy:0,vz:-160});assert(fx.root.children.length<=13,'Bounded projectile pool');fx.impact({x:0,y:0,z:0});
const body=fx.root.getObjectByName('Пламя на теле Vicki'),smoke=fx.root.getObjectByName('Дым после огненного удара'),flash=fx.root.getObjectByName('Короткая вспышка огненного попадания');
fx.update(.01,camera,{x:10,y:3,z:-20},3);assert(body.visible);assert.deepEqual(body.position.toArray(),[10,3,-20]);assert(flash.visible);assert.equal(body.children.length,22);
fx.update(.3,camera,{x:25,y:3,z:-35},2.7);assert.deepEqual(body.position.toArray(),[25,3,-35]);assert(!flash.visible,'Impact is brief');
fx.update(.1,camera,{x:25,y:3,z:-35},0);assert(!body.visible);assert(smoke.visible,'Smoke remains after flames');fx.update(1.3,camera,{x:25,y:3,z:-35},0);assert(!smoke.visible);
fx.update(.1,camera,{x:0,y:0,z:0},3);const before=body.children.map(x=>x.position.toArray());fx.update(0,camera,{x:0,y:0,z:0},3);assert.deepEqual(body.children.map(x=>x.position.toArray()),before,'Visual pause freezes flame animation');
fx.clear();assert(!body.visible);assert(!smoke.visible);fx.dispose();fx.dispose();
console.log('Fire strike passed: fast flight and thin walls at 10/20/60/120 FPS, shield, full movement, burn expiry and protected HP, bounded flames/trails, body tracking, brief impact, residual smoke, pause and cleanup.');
