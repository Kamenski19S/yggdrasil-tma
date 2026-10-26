import assert from 'node:assert/strict';import fs from 'node:fs';import {buildSync} from 'esbuild';import * as T from 'three';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(file){const c=buildSync({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {createGuardianState,stepGuardian,releaseGuardian,OCEAN_GUARDIAN:G}=await mod('src/ashMineGuardianCombat.ts');const hero={x:G.shoreX,y:0,z:G.shoreZ};
for(const fps of [20,60,120]){
 const s=createGuardianState();let impacts=0;for(let i=0;i<fps*5;i++){const r=stepGuardian(s,1/fps,hero,false);if(r.impact)impacts++;}assert.equal(impacts,1,'One damage event per strike at every FPS');
 for(const kind of ['slam','grab','sweep','wrap']){const d=createGuardianState();d.phase='windup';d.kind=kind;d.target={...hero};let hit=0;for(let i=0;i<fps*2;i++)hit+=+stepGuardian(d,1/fps,{...hero,x:hero.x+10},false).impact;assert.equal(hit,0,'Moving outside the marked point dodges '+kind);}
 const grab=createGuardianState();grab.phase='strike';grab.kind='grab';grab.target={...hero};const r=stepGuardian(grab,.3,hero,false);assert.ok(r.caught);assert.equal(grab.phase,'hold');for(let i=0;i<fps*3;i++)stepGuardian(grab,1/fps,hero,false);assert.notEqual(grab.phase,'hold','Capture expires');
 const shield=createGuardianState();shield.phase='strike';shield.kind='wrap';shield.target={...hero};assert.ok(stepGuardian(shield,.3,hero,true).blocked);assert.notEqual(shield.phase,'hold','Shield prevents wrapping');grab.phase='hold';assert.ok(stepGuardian(grab,1/fps,hero,true).released,'Shield breaks capture');grab.phase='hold';releaseGuardian(grab);assert.equal(grab.phase,'recover','Sword can break capture');const frozen=JSON.stringify(grab);stepGuardian(grab,0,hero,false);assert.equal(JSON.stringify(grab),frozen,'Paused combat does not advance');
}
const {createOceanGuardian,OCEAN_GUARDIAN_ASSET}=await mod('src/ashMineGuardian.ts');const loader=new GLTFLoader();loader.register(()=>({name:'EXT_texture_webp',loadTexture:()=>Promise.resolve(new T.Texture())}));const bytes=fs.readFileSync('public/img/models/'+OCEAN_GUARDIAN_ASSET),g=await loader.parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');const actor=createOceanGuardian(g.scene,g.animations),h=new T.Vector3(hero.x,hero.y,hero.z),hand=h.clone().add(new T.Vector3(1.5,8,0));const s=createGuardianState();actor.update(.01,s,h,hand);const idleTip=actor.tip.clone();s.phase='strike';s.kind='grab';s.target={...hero};s.elapsed=.3;for(let i=0;i<10;i++)actor.update(1/60,s,h,hand);assert.ok(actor.tip.distanceTo(idleTip)>2,'Actual skinned tentacle moves for reach');console.log('Tentacle reach:',actor.tip.toArray(),'hand:',hand.toArray(),'distance:',actor.tip.distanceTo(hand));assert.ok(actor.tip.distanceTo(hand)<4.5,'Tentacle reaches the hand on the bank');const bones=[];actor.root.traverse(o=>{if(o.isBone)bones.push(o)});assert.ok(bones.length>=130,'Rig preserved by optimization');assert.equal(g.animations[0].duration,8);
const {capsuleContact,guardianAllowsMove}=await mod('src/ashMineGuardianCollision.ts');
const wall={a:new T.Vector3(0,0,-6),b:new T.Vector3(0,12,-6),radius:2,kind:'body'};
assert.equal(guardianAllowsMove([wall],new T.Vector3(-10,0,-6),new T.Vector3(10,0,-6)),false,'Swept movement cannot tunnel through a solid body');
assert.equal(guardianAllowsMove([wall],new T.Vector3(-10,0,-6),new T.Vector3(-10,0,6)),true,'Walking alongside the guardian remains free');
assert.equal(guardianAllowsMove([wall],new T.Vector3(-3,0,-6),new T.Vector3(-5,0,-6)),true,'A player can escape an existing overlap');
assert.equal(guardianAllowsMove([{...wall,kind:'tentacle',radius:.9}],new T.Vector3(-6,0,-6),new T.Vector3(6,0,-6)),false,'Tentacles also block passage');
const live=createGuardianState(),hits=new Set();for(let i=0;i<30*45;i++){const p=actor.update(1/30,live,h,hand);const step=stepGuardian(live,1/30,hero,false,p.contact);if(step.impact)hits.add(live.kind);}assert.equal(hits.size,4,'All four attacks still connect on an idle player');
for(const offset of [[0,0],[-5,0],[5,0],[0,6],[0,-6],[-5,-4]]){
 const person=h.clone().add(new T.Vector3(offset[0],0,offset[1])),palm=person.clone().add(new T.Vector3(1.5,8,0));
 for(const kind of ['slam','grab','sweep','wrap']){const pose=createGuardianState();pose.kind=kind;pose.target={x:person.x,y:person.y,z:person.z};
 for(const phase of ['idle','windup','strike','hold','recover']){pose.phase=phase;
 for(let frame=0;frame<8;frame++){pose.elapsed=frame/30;actor.update(1/30,pose,person,palm);}
 const deep=Math.max(...actor.colliders.map(c=>capsuleContact(c,person).depth));
 assert.ok(deep<.1,'Every solid bone segment stays outside Vicki');
 let meshDepth=0;actor.root.traverse(o=>{if(!o.isSkinnedMesh)return;o.skeleton.update();const v=new T.Vector3();for(let i=0;i<o.geometry.getAttribute('position').count;i+=4){o.getVertexPosition(i,v);v.applyMatrix4(o.matrixWorld);const dy=v.y-T.MathUtils.clamp(v.y,person.y+3,person.y+11);meshDepth=Math.max(meshDepth,2.6-Math.hypot(v.x-person.x,dy,v.z-person.z));}});
 assert.ok(meshDepth<.15,'The animated skin stays outside the torso: '+meshDepth);

 }
 }
}
console.log('Solid body and six tentacles: swept movement, escape, all attacks, all phases and animated skin separation passed.');
const body=actor.colliders.find(c=>c.kind==='body');const middle=body.a.clone().add(body.b).multiplyScalar(.5);const from=middle.clone().add(new T.Vector3(-12,-7,0)),to=from.clone().add(new T.Vector3(24,0,0));assert.equal(actor.canMove(from,to),false,'Movement checks use the live animated body');
actor.update(3,s,h,hand,true);assert.equal(actor.canMove(from,to),true,'Defeated creature no longer blocks movement');assert.equal(actor.root.visible,false,'Defeated creature sinks');console.log('Lake guardian: shield, dodging, one hit, finite capture, sword escape, pause at 20/60/120 FPS; real optimized rig and hand reach passed.');

const {applyMineEvent,mineProgress,MINE_GUARDS}=await mod('src/muspelheimMineQuest.ts');let save={done:[],lootCounts:{},immortalityDrops:0};assert.equal(applyMineEvent(save,'guardian'),save);save=applyMineEvent(save,'enter');for(const g of MINE_GUARDS)save=applyMineEvent(save,'guard:'+g.id);assert.equal(applyMineEvent(save,'gold'),save,'Gold waits for the lake guardian');save=applyMineEvent(save,'guardian');assert.equal(applyMineEvent(save,'guardian'),save,'No repeat guardian reward');save=JSON.parse(JSON.stringify(save));assert.ok(mineProgress(save.done).guardianDefeated);save=applyMineEvent(save,'gold');assert.equal(save.lootCounts.muspelheimFireGold,1000);assert.equal(applyMineEvent(save,'gold'),save);console.log('Guardian completion and one-time rewards persist; gold requires the guardian.');

const {GUARDIAN_RESPAWN_MS,guardianRespawnDue,restoreGuardianLife,readGuardianDefeat,writeGuardianDefeat}=await mod('src/ashMineGuardianRespawn.ts');
assert.equal(GUARDIAN_RESPAWN_MS,600000);const deathAt=1700000000000;
const storage=new Map();globalThis.localStorage={getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value),removeItem:key=>storage.delete(key)};
writeGuardianDefeat(deathAt);assert.equal(readGuardianDefeat(deathAt+1),deathAt);
assert.equal(guardianRespawnDue(deathAt,deathAt+599999),false);assert.equal(guardianRespawnDue(deathAt,deathAt+600000),true);
assert.equal(restoreGuardianLife(0,readGuardianDefeat(deathAt+599999),deathAt+599999).hp,0,'Reload before deadline stays defeated');
assert.equal(restoreGuardianLife(undefined,deathAt,deathAt+600000).hp,G.maxHp,'Leaving the mine does not reset the wall-clock timer');
assert.equal(restoreGuardianLife(0,deathAt,deathAt+600001).hp,G.maxHp,'Expired zero-HP checkpoint revives');
assert.equal(restoreGuardianLife(0,null,deathAt).hp,G.maxHp,'Legacy permanently defeated saves revive immediately');assert.equal(restoreGuardianLife(320,null,deathAt).hp,320,'Live damaged checkpoint keeps its HP');
writeGuardianDefeat(null);assert.equal(readGuardianDefeat(deathAt+600001),null);
// The same actor must reappear and sink again on every later death.
actor.update(.1,createGuardianState(),h,hand,false);assert.equal(actor.root.visible,true);assert(actor.root.position.y>G.y-1);
actor.update(.1,createGuardianState(),h,hand,true);assert.equal(actor.root.visible,true,'Second death restarts the sinking animation');actor.update(3,createGuardianState(),h,hand,true);assert.equal(actor.root.visible,false);
actor.update(.1,createGuardianState(),h,hand,false);assert.equal(actor.root.visible,true,'Another respawn restores visibility');
console.log('Kraken respawn: exact ten-minute deadline, reload, exit/reentry, legacy saves and repeated visual deaths passed.');
