import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
// Exercise the shared preload/realm path with the real hero bytes and animations.
const bytes=readFileSync('public/img/models/Vika-3d-animated-optimized.glb');
const buffer=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);
const stored=new Map();
globalThis.caches={open:async()=>({match:async url=>stored.get(url),put:async(url,response)=>stored.set(url,response)})};
globalThis.window={location:{href:'https://example.com/yggdrasil-tma/'},caches};
let requests=0;
globalThis.fetch=async()=>{requests++;return {ok:true,arrayBuffer:async()=>buffer,clone(){return this;}};};
const code=buildSync({stdin:{contents:"export {cachedGlbBuffer} from './src/core';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node',packages:'external'}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`).replaceAll('from "react/jsx-runtime"',`from ${JSON.stringify(import.meta.resolve('react/jsx-runtime'))}`).replaceAll('from "react"',`from ${JSON.stringify(import.meta.resolve('react'))}`);
const {cachedGlbBuffer}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const url='/yggdrasil-tma/img/models/Vika-3d-animated-optimized.glb';
const preload=cachedGlbBuffer(url),realm=cachedGlbBuffer(url);
const [a,b]=await Promise.all([preload,realm]);
assert.equal(requests,1,'Entering the realm must reuse the in-flight hero preload');
assert.notEqual(a,b,'Parsers receive independent buffers');
assert.deepEqual(new Uint8Array(a),new Uint8Array(b));
await cachedGlbBuffer(url);assert.equal(requests,1,'Returning from another world reuses the loaded hero');
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const hero=await loader.parseAsync(b,'');
const bounds=new THREE.Box3().setFromObject(hero.scene),height=bounds.max.y-bounds.min.y;
assert.ok(Number.isFinite(height)&&height>0);
hero.scene.scale.setScalar(13.94/height);hero.scene.position.y=-bounds.min.y*13.94/height;
const mixer=new THREE.AnimationMixer(hero.scene);
for(const name of ['idle','walk_loop']){
 const clip=THREE.AnimationClip.findByName(hero.animations,name);assert.ok(clip);mixer.stopAllAction();mixer.clipAction(clip).play();
 for(let i=0;i<60;i++)mixer.update(1/60);
 hero.scene.updateMatrixWorld(true);hero.scene.traverse(o=>assert.ok(o.matrixWorld.elements.every(Number.isFinite)));
}
console.log('Muspelheim hero: shared preload and cross-world reuse, valid GLB, finite scale, idle and walking passed');
