import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {MeshoptSimplifier} from 'meshoptimizer';
await MeshoptSimplifier.ready;
MeshoptSimplifier.useExperimentalFeatures=true;
const inputs=process.argv.slice(2);
if(inputs.length!==1)throw Error('Provide original volcano.glb');
const names=['Muspelheim_Ice_Sanctuary.glb'];
mkdirSync('public/img/models',{recursive:true});
for(let file=0;file<1;file++){
 const original=readFileSync(inputs[file]),length=original.readUInt32LE(12),doc=JSON.parse(original.subarray(20,20+length)),bin=original.subarray(28+length);
 const sourceViews=doc.bufferViews,sourceAccessors=doc.accessors;
 function accessor(index){const a=sourceAccessors[index],v=sourceViews[a.bufferView],n={SCALAR:1,VEC2:2,VEC3:3,VEC4:4}[a.type],bytes=a.componentType===5126||a.componentType===5125?4:2;const values=[];for(let i=0;i<a.count;i++)for(let k=0;k<n;k++){const o=(v.byteOffset||0)+(a.byteOffset||0)+i*(v.byteStride||n*bytes)+k*bytes;values.push(a.componentType===5126?bin.readFloatLE(o):bytes===4?bin.readUInt32LE(o):bin.readUInt16LE(o));}return a.componentType===5126?new Float32Array(values):new Uint32Array(values);}
 const chunks=[],views=[],accessors=[];let offset=0;
 function append(data,target){const pad=(4-offset%4)%4;if(pad){chunks.push(Buffer.alloc(pad));offset+=pad;}const i=views.length;views.push({buffer:0,byteOffset:offset,byteLength:data.length,...(target?{target}:{})});chunks.push(data);offset+=data.length;return i;}
 for(const mesh of doc.meshes)for(const primitive of mesh.primitives){
  const pos=accessor(primitive.attributes.POSITION);let indices=accessor(primitive.indices);
  if(doc.meshes.indexOf(mesh)===21||sourceAccessors[primitive.attributes.POSITION].max[0]<-300||primitive.mode===1||primitive.material===1){mesh.primitives=[];continue;}
  const reps=new Map(),weld=new Uint32Array(pos.length/3);for(let i=0;i<weld.length;i++){const key=[0,1,2].map(k=>Math.round(pos[i*3+k]/.5)).join(',');if(!reps.has(key))reps.set(key,i);weld[i]=reps.get(key);}indices=Uint32Array.from(indices,i=>weld[i]);const clean=[],seen=new Set();for(let i=0;i<indices.length;i+=3){const tri=[indices[i],indices[i+1],indices[i+2]];if(new Set(tri).size<3)continue;const key=[...tri].sort((a,b)=>a-b).join(',');if(seen.has(key))continue;seen.add(key);clean.push(...tri);}indices=Uint32Array.from(clean);
  const target=Math.min(indices.length,Math.max(64,Math.min(4000,Math.round(indices.length/3*.045))))*3;
  const [reduced,error]=indices.length>300?MeshoptSimplifier.simplify(indices,pos,3,target,.012,[]):[indices,0];
  const used=[...new Set(reduced)],remap=new Map(used.map((n,i)=>[n,i]));
  const attrs={};
  for(const [key,index] of Object.entries(primitive.attributes)){
   if(key.startsWith('TEXCOORD'))continue;
   const a=sourceAccessors[index],n={VEC2:2,VEC3:3,VEC4:4}[a.type],values=accessor(index),compact=new Float32Array(used.length*n);
   for(let i=0;i<used.length;i++)for(let k=0;k<n;k++)compact[i*n+k]=values[used[i]*n+k];
   const entry={bufferView:append(Buffer.from(compact.buffer),34962),componentType:5126,count:used.length,type:a.type};
   if(key==='POSITION'){entry.min=[0,1,2].map(k=>Math.min(...used.map(i=>values[i*n+k])));entry.max=[0,1,2].map(k=>Math.max(...used.map(i=>values[i*n+k])));}
   attrs[key]=accessors.length;accessors.push(entry);
  }
  const compactIndices=new Uint16Array(Array.from(reduced,i=>remap.get(i)));
  primitive.attributes=attrs;primitive.indices=accessors.length;accessors.push({bufferView:append(Buffer.from(compactIndices.buffer),34963),componentType:5123,count:compactIndices.length,type:'SCALAR'});
  console.log(names[file],Math.round(indices.length/3),'->',reduced.length/3,'triangles','error',error);
 }
 for(let i=0;i<(doc.images?.length??0);i++){
  const image=doc.images[i],v=sourceViews[image.bufferView],data=bin.subarray(v.byteOffset||0,(v.byteOffset||0)+v.byteLength);
  const jpeg=execFileSync('python',['-c',`import sys,io\nfrom PIL import Image\nim=Image.open(io.BytesIO(sys.stdin.buffer.read())).convert('RGB');im.thumbnail((${i===1?512:1024},${i===1?512:1024}));im.save(sys.stdout.buffer,format='JPEG',quality=${i===1?80:90},optimize=True)\n`],{input:data,maxBuffer:8e6});
  image.bufferView=append(jpeg);image.mimeType='image/jpeg';
 }
 for(const node of doc.nodes)if(node.mesh!=null&&!doc.meshes[node.mesh].primitives.length)delete node.mesh;
 const meshRemap=new Map();doc.meshes=doc.meshes.filter((m,i)=>{if(!m.primitives.length)return false;meshRemap.set(i,meshRemap.size);return true;});for(const node of doc.nodes)if(node.mesh!=null)node.mesh=meshRemap.get(node.mesh);
 for(const m of doc.materials){m.pbrMetallicRoughness.metallicFactor=0;m.pbrMetallicRoughness.roughnessFactor=.5;}
 doc.asset.extras={...doc.asset.extras,modifications:'Yggdrasil: simplified temple geometry, omitted detached distant study props, removed unused UVs. Rescaled and recolored as an ice sanctuary; original author and license retained.'};
 doc.accessors=accessors;doc.bufferViews=views;doc.buffers=[{byteLength:offset}];
 let json=Buffer.from(JSON.stringify(doc));json=Buffer.concat([json,Buffer.alloc((4-json.length%4)%4,32)]);let binary=Buffer.concat(chunks);binary=Buffer.concat([binary,Buffer.alloc((4-binary.length%4)%4)]);
 const header=Buffer.alloc(20);header.writeUInt32LE(0x46546c67);header.writeUInt32LE(2,4);header.writeUInt32LE(28+json.length+binary.length,8);header.writeUInt32LE(json.length,12);header.writeUInt32LE(0x4e4f534a,16);const bh=Buffer.alloc(8);bh.writeUInt32LE(binary.length);bh.writeUInt32LE(0x004e4942,4);
 const output=Buffer.concat([header,json,bh,binary]);writeFileSync('public/img/models/'+names[file],output);console.log('bytes',original.length,'->',output.length);
}
