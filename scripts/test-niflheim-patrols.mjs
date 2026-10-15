import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createServer} from 'vite';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
const server=await createServer({root:fileURLToPath(new URL('../',import.meta.url)),server:{middlewareMode:true}});
const originalFetch=globalThis.fetch,originalNow=Date.now;
try{
 const {staticTriangleCollision}=await server.ssrLoadModule('/src/staticTriangleCollision.ts');
 const walls=[-5,5].map(x=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(6,8,30,30),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));m.position.x=x;m.updateMatrixWorld();return m;});
 const collision=staticTriangleCollision(walls);
 assert(collision(new THREE.Vector3(5,1,2),new THREE.Vector3(5,1,-2)));
 assert(!collision(new THREE.Vector3(0,1,2),new THREE.Vector3(0,1,-2)),'Open doorway must stay passable');
 assert(!collision(new THREE.Vector3(100,1,2),new THREE.Vector3(100,1,-2)));
 assert(!collision(new THREE.Vector3(0,1,2),new THREE.Vector3(0,1,2)));
 const raycaster=new THREE.Raycaster();
 for(let x=-10;x<=10;x+=.2){const from=new THREE.Vector3(x,1,2),to=new THREE.Vector3(x,1,-2);raycaster.set(from,new THREE.Vector3(0,0,-1));raycaster.far=4.45;assert.equal(collision(from,to),raycaster.intersectObjects(walls).length>0,'Indexed shell matches full raycast at '+x);}
 const bytes=await readFile(new URL('../public/img/models/Niflheim_Cave_Troll_Lite.glb',import.meta.url));
 globalThis.window={location:{href:'http://patrol.test/'}};globalThis.self=globalThis;
 globalThis.createImageBitmap=async()=>({width:512,height:512,close(){}});
 globalThis.ProgressEvent=class {constructor(type,options){Object.assign(this,options);}};
 const storage=new Map();globalThis.localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)};
 // A future legacy wave clock must not suppress living, unclaimed patrols.
 let clock=originalNow();Date.now=()=>clock;storage.set('yggdrasil-niflheim-shadow-next',String(clock+899000));
 globalThis.fetch=(url,...args)=>String(url).startsWith('http://patrol.test/')?Promise.resolve(new Response(String(url).includes('Axe_Double')?new Uint8Array():bytes)):originalFetch(url,...args);
 const {installNiflheimRiggedEnemies,NIFLHEIM_EXTRA_GUARDS}=await server.ssrLoadModule('/src/niflheimEnemyActors.ts');
 assert(NIFLHEIM_EXTRA_GUARDS.filter(g=>g.role==='orc').length>=11);
 const create=async()=>{
  const scene=new THREE.Scene();let alive=true;
  const handle=installNiflheimRiggedEnemies(scene,[],()=>alive,()=>0,()=>{},()=>1,()=>{},()=>{},()=>true,()=>{},()=>999999);
  for(let i=0;i<100&&!scene.children.some(o=>o.name.startsWith('Тень забытых 15 '));i++)await new Promise(r=>setTimeout(r,10));
  assert.equal(scene.children.filter(o=>o.name.startsWith('Тень забытых ')).length,15);
  return {scene,handle,close(){alive=false;handle.dispose();}};
 };
 let world=await create();world.handle.tick(.016,1000,{x:20,z:114},false,false);
 const first=world.scene.children.find(o=>o.name.startsWith('Тень забытых 1 '));assert(first.visible,'Unclaimed undead spawns immediately despite old wave timer');
 world.scene.children.filter(o=>!o.name.startsWith('Тень забытых ')).forEach(o=>o.visible=false);
 assert(world.handle.strikeEnemy({x:20,z:114},'default',2000));assert(!first.visible);world.close();
 world=await create();const next=world.scene.children.find(o=>o.name.startsWith('Тень забытых 1 '));world.handle.tick(.016,3000,{x:20,z:114},false,false);assert(!next.visible,'Defeated undead stays on cooldown after reentry');
 clock+=14*60000;world.handle.tick(.016,4000,{x:20,z:114},false,false);assert(!next.visible);
 clock+=60001;world.handle.tick(.016,5000,{x:20,z:114},false,false);assert(next.visible,'Undead respawns after its own 15 minutes');world.close();
 console.log('PASS: 15 undead sites, immediate living spawns, persisted 15-minute defeated cooldown, 11 road orcs, indexed collisions match raycasts and preserve doorway.');
}finally{globalThis.fetch=originalFetch;Date.now=originalNow;await server.close();}
