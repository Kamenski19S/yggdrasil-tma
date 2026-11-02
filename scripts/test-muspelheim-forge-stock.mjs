import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildSync} from 'esbuild';
import {NodeIO} from '@gltf-transform/core';
import * as T from 'three';
const source=buildSync({stdin:{contents:`export * from './src/muspelheimForgeStock';export * from './src/muspelheimHeroEquipment';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {MUSPELHEIM_SWORDS:swords,MUSPELHEIM_SHIELDS:shields,grantMuspelheimForgeStock:grant,createMuspelheimHeroEquipment:create}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const old={done:['old'],ownedWeapons:['axe'],ownedShields:['Shield_Round.glb'],lootCounts:{axe:7},heroWeapon:'axe',shieldAsset:'Shield_Round.glb'};
const added=grant(old);assert.equal(added.heroWeapon,'axe');assert.equal(added.shieldAsset,old.shieldAsset);assert.equal(added.lootCounts.axe,7);assert.equal(added.ownedWeapons.length,4);assert.equal(added.ownedShields.length,4);assert.equal(grant(added),added);
const io=new NodeIO(),models=new Map();
for(const [asset] of [...swords,...shields]){const file='public/img/models/'+asset;assert(fs.statSync(file).size<2*1024*1024);const doc=await io.read(file),group=new T.Group();for(const n of doc.getRoot().listNodes()){const m=n.getMesh();if(!m)continue;for(const p of m.listPrimitives()){const a=p.getAttribute('POSITION'),geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(a.getArray().slice(),3));group.add(new T.Mesh(geo,new T.MeshBasicMaterial()));}}group.updateWorldMatrix(true,true);const b=new T.Box3().setFromObject(group),size=b.getSize(new T.Vector3());assert(Math.abs(Math.max(size.x,size.y,size.z)-1)<1e-5,asset+' is normalized');if(asset.startsWith('Sword_')){assert(b.min.y<0&&b.max.y>0,'Grip origin lies within the handle');}models.set(asset,group);}
const model=new T.Group(),hand=new T.Bone(),arm=new T.Bone();hand.name='mixamorigRightHand';arm.name='mixamorigLeftForeArm';model.add(hand,arm);
const eq=create(model,{load:async asset=>models.get(asset).clone(),weaponAsset:id=>swords.find(x=>x[2]===id)[0],prepare:()=>{},dispose:()=>{}});
for(let i=0;i<3;i++){await eq.update({weapon:swords[i][2],shieldAsset:shields[i][0],shieldEquipped:true});assert.equal(hand.children.length,1);assert.equal(arm.children.length,1);const sword=hand.children[0].children[0];assert.deepEqual(sword.position.toArray(),[0,0,0],'Prepared grip stays in the palm, no bottom-centering');const start=sword.getWorldPosition(new T.Vector3());hand.position.x+=1;assert(Math.abs(sword.getWorldPosition(new T.Vector3()).x-start.x-1)<1e-5);}
eq.dispose();assert.equal(hand.children.length,0);assert.equal(arm.children.length,0);
console.log('PASS: six actual GLBs load, compact files and normalized bounds, grip origins, all three loadout swaps follow hand bones, forge grant once preserves previous inventory and selection.');
