import {readFileSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import * as THREE from 'three';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';
import {mergeVertices} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {MeshoptSimplifier} from 'meshoptimizer';
await MeshoptSimplifier.ready;MeshoptSimplifier.useExperimentalFeatures=true;
globalThis.window={URL:globalThis.URL};const blobs=new Map();let serial=0;
URL.createObjectURL=blob=>{const id='embedded:'+serial++;blobs.set(id,blob);return id;};
THREE.TextureLoader.prototype.load=function(url){const t=new THREE.Texture();t.userData.url=url;return t;};
const source=readFileSync(process.argv[2]);const model=new FBXLoader().parse(source.buffer.slice(source.byteOffset,source.byteOffset+source.byteLength),'');model.updateMatrixWorld(true);
const objects=[];model.traverse(o=>{if(o instanceof THREE.Mesh)objects.push(o);});
const frame=objects.find(o=>o.name==='Boole_1'),panel=objects.find(o=>o.name==='Symmetry_2');if(!frame||!panel)throw Error('Unexpected round door structure');
const fp=frame.geometry.clone().applyMatrix4(frame.matrixWorld).attributes.position;
let xx=0,zz=0,xz=0;for(let i=0;i<fp.count;i++){xx+=fp.getX(i)**2;zz+=fp.getZ(i)**2;xz+=fp.getX(i)*fp.getZ(i);}
const theta=.5*Math.atan2(2*xz,xx-zz),hx=Math.cos(theta),hz=Math.sin(theta),align=new THREE.Matrix4().set(hx,0,hz,0,0,1,0,0,-hz,0,hx,0,0,0,0,1);
const pg=panel.geometry.clone().applyMatrix4(panel.matrixWorld).applyMatrix4(align);pg.computeBoundingBox();const pb=pg.boundingBox,centerX=(pb.min.x+pb.max.x)/2,sx=34/(pb.max.x-pb.min.x),sy=32/(pb.max.y-pb.min.y);
const chunks=[],views=[],accessors=[],meshes=[],nodes=[{name:'DoorFrame',children:[]},{name:'DoorLeft',translation:[-17,0,0],children:[]},{name:'DoorRight',translation:[17,0,0],children:[]}],materials=[],images=[],textures=[];let offset=0;
function append(data,target){const pad=(4-offset%4)%4;if(pad){chunks.push(Buffer.alloc(pad));offset+=pad;}const i=views.length;views.push({buffer:0,byteOffset:offset,byteLength:data.length,...(target?{target}:{})});chunks.push(data);offset+=data.length;return i;}
async function tex(t,normal){if(!t)return undefined;const blob=blobs.get(t.userData.url);if(!blob)throw Error('Missing embedded texture');const bytes=Buffer.from(await blob.arrayBuffer());const jpeg=execFileSync('python',['-c',`import sys,io\nfrom PIL import Image\nim=Image.open(io.BytesIO(sys.stdin.buffer.read())).convert('RGB');im.thumbnail((${normal?512:1024},${normal?512:1024}));im.save(sys.stdout.buffer,format='JPEG',quality=85,optimize=True)`],{input:bytes,maxBuffer:8e6});const index=images.length;images.push({bufferView:append(jpeg),mimeType:'image/jpeg'});textures.push({source:index});return {index};}
function clippedGeometry(g,side,pivot){
 const geo=g.index?g.toNonIndexed():g,p=geo.attributes.position,n=geo.attributes.normal,uv=geo.attributes.uv,out=[];
 const read=i=>[p.getX(i),p.getY(i),p.getZ(i),n.getX(i),n.getY(i),n.getZ(i),uv.getX(i),1-uv.getY(i)];
 for(let i=0;i<p.count;i+=3){let polygon=[read(i),read(i+1),read(i+2)];if(side){const q=[];for(let j=0;j<polygon.length;j++){const a=polygon[j],b=polygon[(j+1)%polygon.length],inside=a[0]*side>=0,other=b[0]*side>=0;if(inside)q.push(a);if(inside!==other){const t=-a[0]/(b[0]-a[0]);q.push(a.map((v,k)=>v+(b[k]-v)*t));}}polygon=q;}
  for(let j=1;j+1<polygon.length;j++)for(const v of [polygon[0],polygon[j],polygon[j+1]])out.push(v);
 }
 const result=new THREE.BufferGeometry();for(const [name,start,size] of [['position',0,3],['normal',3,3],['uv',6,2]]){const values=[];for(const v of out){for(let k=0;k<size;k++)values.push(v[start+k]-(name==='position'&&k===0?pivot:0));}result.setAttribute(name,new THREE.Float32BufferAttribute(values,size));}return mergeVertices(result,1e-4);
}
function storeMesh(g,material,name,target){
 const index=new Uint32Array(g.index.array),pos=new Float32Array(g.attributes.position.array),uv=new Float32Array(g.attributes.uv.array);
 const [reduced]=MeshoptSimplifier.simplifyWithAttributes(index,pos,3,uv,2,[.03,.03],null,Math.min(index.length,target*3),.015);
 const used=[...new Set(reduced)],remap=new Map(used.map((n,i)=>[n,i])),attributes={};
 for(const [key,name] of [['POSITION','position'],['NORMAL','normal'],['TEXCOORD_0','uv']]){const attr=g.attributes[name],size=attr.itemSize,values=new Float32Array(used.length*size);used.forEach((old,i)=>{for(let k=0;k<size;k++)values[i*size+k]=attr.array[old*size+k];});const entry={bufferView:append(Buffer.from(values.buffer),34962),componentType:5126,count:used.length,type:size===3?'VEC3':'VEC2'};if(key==='POSITION'){entry.min=[0,1,2].map(k=>Math.min(...used.map((_,i)=>values[i*3+k])));entry.max=[0,1,2].map(k=>Math.max(...used.map((_,i)=>values[i*3+k])));}attributes[key]=accessors.length;accessors.push(entry);}
 const ids=new Uint16Array(Array.from(reduced,i=>remap.get(i))),indices=accessors.length;accessors.push({bufferView:append(Buffer.from(ids.buffer),34963),componentType:5123,count:ids.length,type:'SCALAR'});const mesh=meshes.length;meshes.push({name,primitives:[{attributes,indices,material,mode:4}]});console.log(name,reduced.length/3,'triangles');return mesh;
}
for(const object of objects){
 const material=Array.isArray(object.material)?object.material[0]:object.material;const matIndex=materials.length;materials.push({name:material.name,doubleSided:true,pbrMetallicRoughness:{baseColorTexture:await tex(material.map,false),metallicFactor:0,roughnessFactor:.9},normalTexture:await tex(material.normalMap,true)});
 const g=object.geometry.clone().applyMatrix4(object.matrixWorld).applyMatrix4(align);g.translate(-centerX,-pb.min.y,0);g.scale(sx,sy,sx);
 const moving=object!==frame;
 for(const side of moving?[-1,1]:[0]){const parent=side<0?1:side>0?2:0,pivot=side*17,geometry=clippedGeometry(g,side,pivot),mesh=storeMesh(geometry,matIndex,object.name+'_'+side,moving?object===panel?3000:1000:6000),node=nodes.length;nodes.push({name:object.name+'_'+side,mesh});nodes[parent].children.push(node);}
}
const d={asset:{version:'2.0',generator:'Yggdrasil FBX converter',extras:{title:'Entrance Door to Chamber',source:'https://www.cgtrader.com/items/1933395/download-page',modifications:'Optimized geometry and JPEG textures; door geometry split into hinged leaves; normalized for Ancient Gateway; runtime basalt and amber recoloring.'}},scene:0,scenes:[{nodes:[0,1,2]}],nodes,meshes,materials,textures,images,accessors,bufferViews:views,buffers:[{byteLength:offset}]};let json=Buffer.from(JSON.stringify(d));json=Buffer.concat([json,Buffer.alloc((4-json.length%4)%4,32)]);let bin=Buffer.concat(chunks);bin=Buffer.concat([bin,Buffer.alloc((4-bin.length%4)%4)]);const head=Buffer.alloc(20);head.writeUInt32LE(0x46546c67);head.writeUInt32LE(2,4);head.writeUInt32LE(28+json.length+bin.length,8);head.writeUInt32LE(json.length,12);head.writeUInt32LE(0x4e4f534a,16);const bh=Buffer.alloc(8);bh.writeUInt32LE(bin.length);bh.writeUInt32LE(0x004e4942,4);const output=Buffer.concat([head,json,bh,bin]);writeFileSync('public/img/models/Muspelheim_Round_Door.glb',output);console.log('bytes',source.length,'->',output.length);
