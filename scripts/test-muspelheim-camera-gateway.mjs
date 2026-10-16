import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){let code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {screenMoveToWorld,updateFollowCamera,safeCameraOffset}=await moduleAt('src/muspelheimCamera.ts');
assert.ok(Math.abs(screenMoveToWorld(0,-1,Math.PI).z-1)<1e-8);
assert.ok(Math.abs(screenMoveToWorld(0,-1,-Math.PI/2).x-1)<1e-8);
for(const fps of [20,60,120]){
 const state={yaw:0,targetYaw:0,turnTime:0};let old=state.yaw;
 for(let i=0;i<fps*4;i++){updateFollowCamera(state,0,1,1/fps);assert.ok(Math.abs(state.yaw-old)<=1.35/fps+1e-8);old=state.yaw;}
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
const {chasmBlocks}=await moduleAt('src/muspelheimChasm.ts');
const {rockWallLayout,rockWallBlocks}=await moduleAt('src/muspelheimRockWalls.ts');
const rocks=rockWallLayout({x:GATEWAY_POSITION.x,z,halfWidth:41*GATEWAY_SCALE});
function canReachWorld(){
 const size=531,limit=265,seen=new Uint8Array(size*size),queue=new Int32Array(size*size);let head=0,tail=0;
 const id=(x,z)=>(x+limit)*size+z+limit,start=id(0,109),target=id(0,45);queue[tail++]=start;seen[start]=1;
 while(head<tail){const cell=queue[head++];if(cell===target)return true;const gx=Math.floor(cell/size)-limit,gz=cell%size-limit;
  for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=gx+dx,nz=gz+dz;if(Math.abs(nx)>limit||Math.abs(nz)>limit)continue;const next=id(nx,nz);if(seen[next])continue;seen[next]=1;if(chasmBlocks(nx*2,nz*2)||rockWallBlocks(rocks,nx*2,nz*2)||entrance.blocks(nx*2,nz*2))continue;queue[tail++]=next;}
 }
 return false;
}
assert.equal(canReachWorld(),false,'Closed entrance must not be bypassed around either curved wall');
assert.equal(entrance.blocks(x,z),true);entrance.update(.5,true);assert.equal(entrance.blocks(x,z),true);entrance.update(.6,true);assert.equal(entrance.opening,1);assert.equal(entrance.blocks(x,z),false);assert.equal(canReachWorld(),true,'Open gateway must retain a walkable central route');
assert.ok(entrance.group.getObjectByName('DoorLeft').rotation.y>1.5);assert.ok(entrance.group.getObjectByName('DoorRight').rotation.y< -1.5);
assert.equal(entrance.blocks(x+25*GATEWAY_SCALE,z),true);assert.ok(entrance.floorAt(x,z,0)>6*GATEWAY_SCALE);assert.equal(entrance.floorAt(100,z,0),0);
for(let p=100;p<185;p+=.25){const y=entrance.floorAt(0,p,0);assert.ok(Number.isFinite(y)&&y>=0&&y<12);}
entrance.update(2,false);assert.equal(entrance.opening,0);assert.equal(entrance.blocks(x,z),true);
// The crystal unlocks proximity control; it does not leave the leaves permanently open.
for(const side of [-1,1]){
 entrance.update(2,false);entrance.updateProximity(2,false,0,z+side*15);assert.equal(entrance.opening,0,'Locked gate must ignore proximity');
 entrance.updateProximity(2,true,0,z+side*45);assert.equal(entrance.opening,0,'Unlocked distant gate starts shut');
 entrance.updateProximity(1,true,0,z+side*26);assert.equal(entrance.opening,1,'Approach from either direction opens');
 entrance.updateProximity(1,true,0,z+side*29);assert.equal(entrance.opening,1,'Hysteresis prevents closing at trigger boundary');
 entrance.updateProximity(2,true,0,z);assert.equal(entrance.opening,1,'Door remains open while Vicki is in passage');
 entrance.updateProximity(1,true,0,z-side*40);assert.equal(entrance.opening,0,'Door closes after Vicki leaves on opposite side');
}
for(const side of [-1,1])for(const fps of [20,60,120]){
 entrance.update(2,false);let position=z+side*45;
 for(let i=0;i<fps*5;i++){
  entrance.updateProximity(1/fps,true,0,position);
  const next=position-side*18/fps;if(!entrance.blocks(0,next))position=next;
 }
 assert.ok(side*(position-z)<-35,'Actual collision-controlled movement must pass in both directions');
}
const runeGroup=entrance.group.getObjectByName('Procedural blue rune circle');assert.ok(runeGroup);assert.equal(runeGroup.children.length,2);
for(const mesh of runeGroup.children){assert.ok(mesh.geometry.attributes.position.count>500);assert.equal(mesh.material.toneMapped,false);}
const app=readFileSync('src/Muspelheim3D.tsx','utf8');assert.match(app,/gateIsOpen.current=props.gateOpen/);assert.match(app,/controlYaw.current=viewYaw.current/);
console.log('Muspelheim camera/gateway: smooth reversal at 20/60/120 FPS, stable input basis, camera obstacles, hinged opening, sealed passage and cached stair heights passed');
entrance.update(2,false);entrance.group.updateWorldMatrix(true,true);
const visibilityRay=new THREE.Raycaster(),strokePositions=runeGroup.getObjectByName('Blue rune strokes').geometry.attributes.position;
let visible=0;for(let i=0;i<strokePositions.count;i+=4){const local=new THREE.Vector3().fromBufferAttribute(strokePositions,i),side=Math.sign(local.z),point=runeGroup.localToWorld(local);visibilityRay.set(new THREE.Vector3(point.x,point.y,point.z+side*100),new THREE.Vector3(0,0,-side));const hit=visibilityRay.intersectObject(models[0],true)[0];if(!hit||side*(hit.point.z-point.z)<.3)visible++;}
assert.ok(visible/(strokePositions.count/4)>.9,'Runes must be placed on the visible stone surface rather than behind the arch');
console.log('Bidirectional proximity passage at 20/60/120 FPS, locked crystal, hysteresis, safe closure and visible rune placement passed');

const {runeCenter,RUNE_ANGLES}=await moduleAt('src/muspelheimRunes.ts');
for(const angle of RUNE_ANGLES){const p=runeCenter(angle);assert.ok(p.y>1.1,'Lower runes must stay on the jambs above the stair flight');if(p.y<5)assert.ok(Math.abs(p.x)>14,'No runes may float in front of the threshold or passage');}

const {TORCH_ASSET}=await moduleAt('src/muspelheimTorches.ts');const torchData=readFileSync('public/img/models/'+TORCH_ASSET);assert.ok(torchData.length<800000);const torchDoc=JSON.parse(torchData.subarray(20,20+torchData.readUInt32LE(12)));assert.ok(torchDoc.asset.extras.author.startsWith('Chenchanchong'));assert.ok(torchDoc.asset.extras.license.startsWith('CC-BY-4.0'));assert.equal(torchDoc.images[0].mimeType,'image/png');assert.equal(torchDoc.materials[0].alphaMode,'BLEND');assert.ok(torchDoc.materials[0].emissiveTexture);
const torchModel=await loader.parseAsync(torchData.buffer.slice(torchData.byteOffset,torchData.byteOffset+torchData.byteLength),'');entrance.mountTorches(torchModel.scene);entrance.group.updateWorldMatrix(true,true);const mounts=entrance.group.getObjectByName('Two small column torches');assert.equal(mounts.children.length,2);for(const torch of mounts.children){const b=new THREE.Box3();torch.traverse(o=>{if(o instanceof THREE.Mesh)b.expandByObject(o);});assert.ok(Math.abs(b.max.y-b.min.y-5)<.001,'Small torch must be five world units high');assert.ok(Math.abs(Math.abs((b.max.x+b.min.x)/2)-13.5)<.01);assert.ok(torch.children.some(o=>o instanceof THREE.PointLight));assert.ok(torch.children.some(o=>o instanceof THREE.Sprite));}
const lights=[];mounts.traverse(o=>{if(o instanceof THREE.PointLight)lights.push(o);});entrance.update(.1,false);assert.equal(lights.length,2);assert.ok(lights.every(l=>l.intensity>60&&l.intensity<80&&!l.castShadow));console.log('Lower rune fit on both faces, two reduced column torches, flame alpha/emission, warm light and attribution passed');
