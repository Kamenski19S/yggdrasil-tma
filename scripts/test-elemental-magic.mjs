import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';
import fs from 'node:fs';
async function mod(p){const c=buildSync({entryPoints:[p],bundle:true,write:false,format:'esm',platform:'node'}).outputFiles[0].text;return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const m=await mod('src/elementalMagic.ts'),{createGateMagic}=await mod('src/muspelheimGateMagic.ts');
assert.equal(new Set(Object.values(m.MINE_ELEMENTS)).size,4);
assert.equal(new Set(m.RAVINE_ELEMENTS.map(e=>m.ELEMENTS[e].damage)).size,4);
for(const fps of [20,60,120]){
 const s=m.createAilments();m.applyElement(s,'ice',false);assert.equal(m.magicMoveScale(s),0);for(let i=0;i<fps;i++)m.stepAilments(s,1/fps);assert.equal(m.magicMoveScale(s),0,'Freeze remains visible for a full second');for(let i=0;i<fps*.5;i++)m.stepAilments(s,1/fps);assert.equal(m.magicMoveScale(s),.55);m.applyElement(s,'lightning',false);assert.equal(s.stun,0,'Control immunity prevents stun lock');for(let i=0;i<fps*4;i++)m.stepAilments(s,1/fps);assert.equal(m.magicMoveScale(s),1);
 const fire=m.createAilments();m.applyElement(fire,'fire',false);let damage=0;for(let i=0;i<fps*4;i++)damage+=m.stepAilments(fire,1/fps);assert.equal(damage,12,'Burn total independent of frame rate');
 for(const e of m.RAVINE_ELEMENTS){const shield=m.createAilments();m.applyElement(shield,e,true);assert.deepEqual(shield,m.createAilments(),'Shield prevents '+e);}
 const shadow=m.createAilments();m.applyElement(shadow,'shadow',false);assert.equal(m.magicRawDamage(100,shadow),120);m.stepAilments(shadow,4);assert.equal(m.magicRawDamage(100,shadow),100);
 for(const dodge of [false,true]){const state=m.createWaterBurst(),hero={x:26,y:0,z:-305};let seen=false,hits=0,blasts=0;for(let i=0;i<fps*8;i++){const e=m.stepWaterBurst(state,1/fps,seen&&dodge?{...hero,x:hero.x+10}:hero,true);if(e.started)seen=true;hits+=+e.hit;blasts+=+e.impact;}assert(seen);assert.equal(blasts,1);assert.equal(hits,dodge?0:1);}
 const state=m.createWaterBurst(),hero={x:26,y:0,z:-305};m.stepWaterBurst(state,5,hero,true);const before=JSON.stringify(state);m.stepWaterBurst(state,0,hero,true);assert.equal(JSON.stringify(state),before);m.stepWaterBurst(state,.1,hero,false);assert.equal(state.target,null,'Leaving range or killing guardian cancels pending water blast');
 for(const dodge of [false,true]){const home={x:0,y:0,z:0},hero={x:0,y:0,z:24},caster=createGateMagic(home);let released=false,hits=0;for(let i=0;i<fps*4;i++){const target=released&&dodge?{...hero,x:12}:hero;const e=caster.step(1/fps,target,true,{x:0,y:7,z:0},true);released||=e.released;hits+=+e.impact;}assert(released);assert.equal(hits,dodge?0:1);}
 const caster=createGateMagic({x:0,y:0,z:0});let wallHits=0;for(let i=0;i<fps*5;i++)wallHits+=+caster.step(1/fps,{x:0,y:0,z:24},true,{x:0,y:7,z:0},true,(x,z)=>z>10&&z<10.6?null:0).impact;assert.equal(wallHits,0,'Projectiles stop at walls');
}
for(const p of ['spell/fire_bolt','spell/fire_impact','spell/ice_bolt','spell/ice_impact','spell/arcane_bolt','spell/arcane_impact','elemental/lightning','elemental/water_splash'])assert(fs.statSync('public/img/vfx/elemental/'+p+'.webp').size>0);
console.log('Elemental magic passed: unique elements/damage, shields, finite control, burn totals, debuff recovery, pause, water telegraph/dodge/cancel, projectile collision at 20/60/120 FPS, all atlases present.');
