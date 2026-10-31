import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replace(/from "(three[^"]*)"/g,(_m,id)=>`from ${JSON.stringify(import.meta.resolve(id))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {createMuspelheimArmy}=await mod('src/muspelheimArmy.ts');
const {createPlayerFireball}=await mod('src/playerFireball.ts');
const {recoveryHealth,createRecoveryAura}=await mod('src/sanctuaryRecovery.ts');
const {createIceSanctuary}=await mod('src/muspelheimIceSanctuary.ts');
const nodes=[];for(let x=-500;x<=500;x+=10)for(let z=-440;z<=100;z+=10)nodes.push({x,y:0,z});
const nav={nodes,nearest:p=>nodes.reduce((a,b)=>Math.hypot(a.x-p.x,a.z-p.z)<Math.hypot(b.x-p.x,b.z-p.z)?a:b),route:(_a,b)=>[b]};
const source=new T.Group(),mesh=new T.Mesh(new T.BoxGeometry(2,14,2),new T.MeshStandardMaterial());mesh.position.y=7;source.add(mesh);
const animations=['sword_attack','fall'].map(n=>new T.AnimationClip(n,1,[]));
const army=createMuspelheimArmy(Array.from({length:3},()=>({scene:source.clone(),animations})),nav,()=>10000);
assert.equal(army.actors.length,71);assert(army.actors.every(a=>a.combatEnabled),'All field and camp soldiers must be damageable');
for(const fps of [5,30,60]){
 const enemy=army.actors[0];enemy.reset();const body=enemy.body,hero=new T.Group();hero.position.set(body.x,body.y,body.z-30);
 const camera=new T.PerspectiveCamera();camera.updateMatrixWorld();let hits=0;
 const fire=createPlayerFireball(()=>army.actors.filter(a=>a.combatEnabled).map(a=>({body:()=>a.body,alive:()=>a.combat.hp>0,hit:(damage,seconds)=>{if(a.hurt(damage)){a.combat.interrupt(seconds);if(a===enemy)hits++;}}})));
 assert(fire.cast(hero,37,0));assert.equal(enemy.combat.hp,420,'HP drops on contact, not cast');
 for(let i=0;i<fps;i++)fire.update(1/fps,camera);
 assert.equal(enemy.combat.hp,383,'Real army actor receives the projectile damage');assert.equal(hits,1);
 const before={...enemy.combat.position};for(let i=0;i<19;i++){const event=enemy.combat.step(.1,hero.position,true,()=>0);assert(!event.impact&&!event.started);}assert.deepEqual(enemy.combat.position,before,'Hit soldier is interrupted for two seconds');fire.dispose();
}
for(const max of [1,100,286,1000]){assert(recoveryHealth(1,max,7)<max||max===1);assert(recoveryHealth(1,max,14.99)<max||max===1);assert.equal(recoveryHealth(1,max,15),max);assert.equal(recoveryHealth(1,max,18),max);}
const aura=createRecoveryAura(),hero=new T.Group();hero.position.set(-444,8,15);aura.update(.1,hero,true);assert(aura.root.visible);assert(aura.root.position.equals(hero.position));assert(aura.root.children.length>=3);aura.update(.1,hero,false);assert(!aura.root.visible);aura.dispose();
const bytes=readFileSync(process.env.SANCTUARY_MODEL??'public/img/models/Muspelheim_Ice_Sanctuary.glb');const g=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.length),'');
const sanctuary=createIceSanctuary(g.scene),spawn=sanctuary.respawnPosition();assert(sanctuary.resting(spawn.x,spawn.z,spawn.y),'Respawn is on the actual temple floor');assert(!sanctuary.blocks(spawn.x,spawn.z,spawn.y,3),'Respawn clears columns and walls');
army.actors.forEach(a=>a.dispose());console.log('PASS: 71 damageable soldiers; real fireball HP/interrupt at 5/30/60 FPS; 15-second recovery; aura lifecycle; actual sanctuary spawn',spawn.toArray());
