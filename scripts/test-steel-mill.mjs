import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const server=await createServer({root:fileURLToPath(new URL('../',import.meta.url)),server:{middlewareMode:true}});
try{
 const {STEEL_MILL_ASSET,prepareSteelWheel,steelMillMaterial,steelMillHouseFrame}=await server.ssrLoadModule('/src/steelMill.ts');
 const bytes=await readFile(new URL('../public/img/models/'+STEEL_MILL_ASSET,import.meta.url));assert(bytes.length<350000);
 const json=JSON.parse(bytes.subarray(20,20+bytes.readUInt32LE(12)).toString());assert(json.asset.extras.author.includes('rabiiwattar1'));assert.equal(json.asset.extras.license,'CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)');assert.equal(json.nodes.length,1);assert(!json.cameras);
 const parts=new URL('../assets/ice-source/'+STEEL_MILL_ASSET+'.gz.b64.parts/',import.meta.url);const encoded=(await Promise.all((await readdir(parts)).sort().map(f=>readFile(new URL(f,parts),'utf8')))).join('');assert(gunzipSync(Buffer.from(encoded,'base64')).equals(bytes));
 const gltf=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
 const rotor=prepareSteelWheel(gltf.scene),pivot=new THREE.Group();pivot.position.set(-2.9,1.35,-3.2);pivot.add(rotor);pivot.updateMatrixWorld(true);
 let triangles=0;rotor.traverse(o=>{if(o.isMesh){triangles+=o.geometry.index.count/3;assert(o.material.metalness>=.7);}});assert.equal(triangles,12472);
 const box=new THREE.Box3().setFromObject(pivot),size=box.getSize(new THREE.Vector3());assert(size.x<2,'Shaft is aligned with X');assert(Math.abs(size.y-6)<.01);assert(Math.abs(size.z-6)<.15);
 const center=box.getCenter(new THREE.Vector3());assert(center.distanceTo(pivot.position)<.01,'Pivot lies on the axle');
 const waterFraction=(.12-box.min.y)/size.y;assert(waterFraction>.27&&waterFraction<.34,'Lower third of the wheel stays in water');
 for(const angle of [Math.PI/4,Math.PI/2,Math.PI]){pivot.rotation.x=angle;pivot.updateMatrixWorld(true);const spinning=new THREE.Box3().setFromObject(pivot);assert(Math.abs(spinning.min.x-box.min.x)<.001);assert(Math.abs(spinning.max.x-box.max.x)<.001,'No axle wobble');}
 const frame=new THREE.Group(),beam=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial()),wall=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial());beam.name='timber_beam';wall.name='house_wall';frame.add(beam,wall);const original=wall.material;steelMillHouseFrame(frame);assert(beam.material.metalness>.7);assert.equal(wall.material,original);assert(steelMillMaterial().metalness>.7);
 console.log('PASS: single 300 KB wheel, preserved credit/license, asset materialization, 12472 triangles, stable X axle, lower-third immersion, steel frame and unchanged masonry.');
}finally{await server.close();}
