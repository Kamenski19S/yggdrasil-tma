import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {transformSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){let code=transformSync(readFileSync(path,'utf8'),{loader:'ts',format:'esm'}).code.replace('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {screenMoveToWorld,updateFollowCamera,safeCameraOffset}=await moduleAt('src/muspelheimCamera.ts');
assert.ok(Math.abs(screenMoveToWorld(0,-1,Math.PI).z-1)<1e-8);
assert.ok(Math.abs(screenMoveToWorld(0,-1,-Math.PI/2).x-1)<1e-8);
for(const fps of [20,60,120]){
 const state={yaw:0,targetYaw:0,turnTime:0};let old=state.yaw;
 for(let i=0;i<fps*4;i++){updateFollowCamera(state,0,1,1/fps);assert.ok(Math.abs(state.yaw-old)<=1.8/fps+1e-8);old=state.yaw;}
 assert.ok(Math.abs(Math.abs(state.yaw)-Math.PI)<.01);
 const basis=state.yaw,move=screenMoveToWorld(0,-1,basis);assert.ok(move.z>.999);
 for(let i=0;i<fps*3;i++)updateFollowCamera(state,move.x,move.z,1/fps);
 assert.ok(Math.abs(state.yaw-basis)<.01,'Held gesture must not feed camera rotation back into movement');
}
const shortTurn={yaw:Math.PI-.02,targetYaw:Math.PI-.02,turnTime:.2};for(let i=0;i<120;i++)updateFollowCamera(shortTurn,Math.sin(.04),Math.cos(.04),1/60);assert.ok(Math.abs(shortTurn.yaw-Math.PI)<.2);
assert.equal(safeCameraOffset(0,0,0,(x,z)=>z>=10&&z<=12).distance,8);
assert.equal(safeCameraOffset(0,0,0,()=>false).distance,32);
const {GATEWAY_ASSETS,createMuspelheimGateway,GATEWAY_POSITION,GATEWAY_SCALE}=await moduleAt('src/muspelheimGateway.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const models=[];for(const file of GATEWAY_ASSETS){const b=readFileSync('public/img/models/'+file);assert.equal(b.readUInt32LE(8),b.length);models.push((await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene);}
const entrance=createMuspelheimGateway(models[0],models[1],false),x=GATEWAY_POSITION.x,z=GATEWAY_POSITION.z-20*GATEWAY_SCALE;
assert.deepEqual(entrance.group.position.toArray(),[0,0,140]);
assert.equal(entrance.group.scale.x,.5);
const width=new THREE.Box3().setFromObject(entrance.group).getSize(new THREE.Vector3()).x;assert.ok(Math.abs(width-41)<.01);
assert.equal(entrance.blocks(x,z),true);entrance.update(.5,true);assert.equal(entrance.blocks(x,z),true);entrance.update(.6,true);assert.equal(entrance.opening,1);assert.equal(entrance.blocks(x,z),false);
assert.ok(entrance.group.getObjectByName('DoorLeft').rotation.y>1.5);assert.ok(entrance.group.getObjectByName('DoorRight').rotation.y< -1.5);
assert.equal(entrance.blocks(x+25*GATEWAY_SCALE,z),true);assert.ok(entrance.floorAt(x,z,0)>6*GATEWAY_SCALE);assert.equal(entrance.floorAt(100,z,0),0);
for(let p=100;p<185;p+=.25){const y=entrance.floorAt(0,p,0);assert.ok(Number.isFinite(y)&&y>=0&&y<12);}
entrance.update(2,false);assert.equal(entrance.opening,0);assert.equal(entrance.blocks(x,z),true);
const app=readFileSync('src/Muspelheim3D.tsx','utf8');assert.match(app,/gateIsOpen.current=props.gateOpen/);assert.match(app,/controlYaw.current=viewYaw.current/);
console.log('Muspelheim camera/gateway: smooth reversal at 20/60/120 FPS, stable input basis, camera obstacles, hinged opening, sealed passage and cached stair heights passed');
