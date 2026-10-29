import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
import {MeshoptEncoder,MeshoptDecoder} from 'meshoptimizer';

const EXT='EXT_meshopt_compression';
const widths={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16};
const bytes={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4};
export function parseGlb(input){
 if(input.readUInt32LE(0)!==0x46546c67||input.readUInt32LE(4)!==2||input.readUInt32LE(8)!==input.length)throw Error('Invalid GLB');
 const length=input.readUInt32LE(12),json=JSON.parse(input.toString('utf8',20,20+length));
 if(input.readUInt32LE(24+length)!==0x004e4942)throw Error('Missing BIN chunk');
 return {json,binary:input.subarray(28+length,28+length+input.readUInt32LE(20+length))};
}
function writeGlb(json,binary){
 let text=Buffer.from(JSON.stringify(json));text=Buffer.concat([text,Buffer.alloc((4-text.length%4)%4,32)]);
 binary=Buffer.concat([binary,Buffer.alloc((4-binary.length%4)%4)]);const header=Buffer.alloc(20),chunk=Buffer.alloc(8);
 header.writeUInt32LE(0x46546c67);header.writeUInt32LE(2,4);header.writeUInt32LE(28+text.length+binary.length,8);header.writeUInt32LE(text.length,12);header.writeUInt32LE(0x4e4f534a,16);chunk.writeUInt32LE(binary.length);chunk.writeUInt32LE(0x004e4942,4);
 return Buffer.concat([header,text,chunk,binary]);
}
/** No quantization, vertex reordering, simplification, resampling or animation changes. */
export async function optimizeGlbLossless(input){
 await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready]);
 const {json:original,binary}=parseGlb(input);
 if(original.extensionsUsed?.includes(EXT)||original.buffers?.length!==1||original.buffers[0].uri)return {output:input,skipped:'already compressed or external buffers'};
 const json=structuredClone(original),chunks=[],offsets=new Map();let offset=0,fallback=0,encodedViews=0,convertedImages=0;
 const append=data=>{const hash=createHash('sha256').update(data).digest('hex');if(offsets.has(hash))return offsets.get(hash);const pad=(4-offset%4)%4;if(pad){chunks.push(Buffer.alloc(pad));offset+=pad;}const at=offset;chunks.push(data);offset+=data.length;offsets.set(hash,at);return at;};
 const imageViews=new Set((json.images??[]).map(i=>i.bufferView).filter(i=>i!==undefined)),convertedViews=new Map();
 for(const image of json.images??[]){
  if(image.mimeType!=='image/png'||image.bufferView===undefined)continue;
  const view=original.bufferViews[image.bufferView],source=binary.subarray(view.byteOffset??0,(view.byteOffset??0)+view.byteLength);
  if(!convertedViews.has(image.bufferView)){
   const meta=await sharp(source).metadata();let result=null;
   // Keep unusual colour profiles and orientation in their original container.
   if(!meta.icc&&(!meta.orientation||meta.orientation===1)){
    const candidate=await sharp(source).webp({lossless:true,effort:6}).toBuffer();
    if(candidate.length+128<source.length){const before=await sharp(source).ensureAlpha().raw().toBuffer(),after=await sharp(candidate).ensureAlpha().raw().toBuffer();if(before.equals(after))result=candidate;}
   }
   convertedViews.set(image.bufferView,result);
  }
  const result=convertedViews.get(image.bufferView);if(result){image.mimeType='image/webp';convertedImages++;}
 }
 const indexAccessors=new Set((json.meshes??[]).flatMap(m=>m.primitives.map(p=>p.indices)).filter(i=>i!==undefined));
 for(let i=0;i<(json.bufferViews??[]).length;i++){
  const view=json.bufferViews[i],old=original.bufferViews[i];if(old.buffer!==0)throw Error('Unexpected buffer');
  let data=convertedViews.get(i)??binary.subarray(old.byteOffset??0,(old.byteOffset??0)+old.byteLength);
  const accessors=(original.accessors??[]).map((a,j)=>({a,j})).filter(({a})=>a.bufferView===i);
  let encoded=null,stride=4,mode='ATTRIBUTES',count=0;
  if(!imageViews.has(i)&&data.length>=256&&!old.extensions){
   const index=accessors.length&&accessors.every(({a,j})=>indexAccessors.has(j)&&!(a.byteOffset??0)&&a.type==='SCALAR'&&a.count*bytes[a.componentType]===data.length&&a.componentType===accessors[0].a.componentType);
   if(index&&[5123,5125].includes(accessors[0].a.componentType)){stride=bytes[accessors[0].a.componentType];mode='INDICES';}
   else {const candidate=old.byteStride??(accessors.length?widths[accessors[0].a.type]*bytes[accessors[0].a.componentType]:4);stride=candidate>=4&&candidate<=256&&candidate%4===0&&data.length%candidate===0?candidate:4;}
   if(data.length%stride===0){count=data.length/stride;const candidate=Buffer.from(MeshoptEncoder.encodeGltfBuffer(data,count,stride,mode));
    if(candidate.length+192<data.length){const restored=new Uint8Array(data.length);MeshoptDecoder.decodeGltfBuffer(restored,count,stride,candidate,mode);if(!Buffer.from(restored).equals(data))throw Error('Meshopt round-trip mismatch');encoded=candidate;}
   }
  }
  if(encoded){const at=append(encoded);fallback=(fallback+3)&~3;view.buffer=1;view.byteOffset=fallback;fallback+=data.length;view.extensions={...view.extensions,[EXT]:{buffer:0,byteOffset:at,byteLength:encoded.length,byteStride:stride,count,mode}};encodedViews++;}
  else {view.buffer=0;view.byteOffset=append(data);view.byteLength=data.length;}
 }
 if(convertedImages){
  const converted=new Set(json.images.map((im,i)=>im.mimeType==='image/webp'?i:-1));
  for(const texture of json.textures??[])if(converted.has(texture.source)){texture.extensions={...texture.extensions,EXT_texture_webp:{source:texture.source}};delete texture.source;}
  json.extensionsUsed=[...new Set([...(json.extensionsUsed??[]),'EXT_texture_webp'])];json.extensionsRequired=[...new Set([...(json.extensionsRequired??[]),'EXT_texture_webp'])];
 }
 json.buffers=[{...json.buffers[0],byteLength:offset}];
 if(encodedViews){json.buffers.push({byteLength:fallback,extensions:{[EXT]:{fallback:true}}});json.extensionsUsed=[...new Set([...(json.extensionsUsed??[]),EXT])];json.extensionsRequired=[...new Set([...(json.extensionsRequired??[]),EXT])];}
 const output=writeGlb(json,Buffer.concat(chunks));
 return output.length<input.length?{output,encodedViews,convertedImages}:{output:input,skipped:'no saving'};
}
export async function optimizeModelDirectory(directory,{minBytes=262144}={}){
 const report=[];
 async function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory()){await walk(file);continue;}if(!file.endsWith('.glb'))continue;const input=fs.readFileSync(file);if(input.length<minBytes)continue;const start=performance.now(),result=await optimizeGlbLossless(input);if(result.output!==input)fs.writeFileSync(file,result.output);const row={file:path.relative(directory,file),before:input.length,after:result.output.length,encodedViews:result.encodedViews??0,convertedImages:result.convertedImages??0,ms:Math.round(performance.now()-start)};report.push(row);console.log(`${row.file}: ${(row.before/1e6).toFixed(2)} → ${(row.after/1e6).toFixed(2)} MB`);}}
 await walk(directory);return report;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const directory=process.argv[2]??'public/img/models';const report=await optimizeModelDirectory(directory);
 if(process.argv[3])fs.writeFileSync(process.argv[3],JSON.stringify(report,null,2));
 const before=report.reduce((s,r)=>s+r.before,0),after=report.reduce((s,r)=>s+r.after,0);console.log(`Lossless GLB: ${report.length} models, ${(before/1e6).toFixed(2)} → ${(after/1e6).toFixed(2)} MB; saved ${((1-after/before)*100).toFixed(1)}%.`);
}
