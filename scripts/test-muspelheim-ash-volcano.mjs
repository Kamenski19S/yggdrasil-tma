import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const code=buildSync({entryPoints:['src/muspelheimAshVolcano.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {createAshVolcano,ASH_VOLCANO_POSITION:at,ASH_VOLCANO_WIDTH}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new T.Texture())}));
const bytes=readFileSync('public/img/models/Muspelheim_Ash_Volcano.glb');assert(bytes.length<1400000);
const len=bytes.readUInt32LE(12),doc=JSON.parse(bytes.subarray(20,20+len));assert.match(doc.asset.extras.author,/Canary Games/);assert.match(doc.asset.extras.license,/CC-BY-4.0/);assert.equal(doc.images[0].mimeType,'image/png');
const g=await loader.parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
const volcano=createAshVolcano(g.scene);let solid=[],smoke=[];
volcano.root.traverse(o=>{if(o.isMesh)(o.material.name.includes('Smoke')?smoke:solid).push(o);});assert.equal(solid.length,1);assert.equal(smoke.length,1);
const b=new T.Box3().setFromObject(solid[0]);assert(Math.abs(b.max.x-b.min.x-ASH_VOLCANO_WIDTH)<.01);assert(Math.abs(b.min.y+1.8)<.01);assert(b.max.y>35&&b.max.y<45);
assert(b.min.x>50&&b.max.x<240);assert(b.min.z>-458.75); // between canyon and eastern volcano, inside rear wall
const ray=new T.Raycaster(),down=new T.Vector3(0,-1,0);let checks=0;
for(let x=b.min.x+1;x<b.max.x;x+=4)for(let z=b.min.z+1;z<b.max.z;z+=4){ray.set(new T.Vector3(x,250,z),down);const expected=ray.intersectObjects(solid,true)[0]?.point.y??null;const actual=volcano.floorAt(x,z);if(expected===null)assert.equal(actual,null);else{assert(Math.abs(actual-expected)<1e-4);checks++;}}
assert(checks>400);assert.equal(volcano.floorAt(0,0),null);assert(!smoke[0].material.depthWrite);assert(solid[0].material.depthWrite);assert(!solid[0].material.transparent);
const shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <alphamap_fragment>'};smoke[0].material.onBeforeCompile(shader);volcano.update(.5);assert.equal(shader.uniforms.ashTime.value,.5);assert.match(shader.vertexShader,/ashRise/);
console.log('Ash volcano passed',{bytes:bytes.length,checks,cone:b.getSize(new T.Vector3()).toArray(),plume:new T.Box3().setFromObject(smoke[0]).max.y});
if(process.argv.includes('--preview')){
 for(const [name,meshes] of [['solid',solid],['smoke',smoke]]){let verts=[];for(const o of meshes){const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry,p=geo.attributes.position,n=geo.attributes.normal,uv=geo.attributes.uv,mat=new T.Matrix3().getNormalMatrix(o.matrixWorld);for(let i=0;i<p.count;i++){const v=new T.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld),normal=new T.Vector3().fromBufferAttribute(n,i).applyMatrix3(mat).normalize();verts.push(...v.toArray(),...normal.toArray(),uv.getX(i),uv.getY(i));}}writeFileSync('../ash-'+name+'.bin',Buffer.from(new Float32Array(verts).buffer));}
 const bin=bytes.subarray(28+len);for(let i=0;i<doc.images.length;i++){const v=doc.bufferViews[doc.images[i].bufferView];writeFileSync('../ash-map-'+i+(i===0?'.png':'.jpg'),bin.subarray(v.byteOffset,v.byteOffset+v.byteLength));}
}
