import {readFileSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const input=process.argv[2];if(!input)throw Error('Provide original manor_torch.glb');
const source=readFileSync(input),length=source.readUInt32LE(12),doc=JSON.parse(source.subarray(20,20+length)),bin=source.subarray(28+length),chunks=[];let offset=0;
const imageViews=new Map(doc.images.map((image,i)=>[image.bufferView,i]));
for(let i=0;i<doc.bufferViews.length;i++){
 const view=doc.bufferViews[i];let bytes=bin.subarray(view.byteOffset||0,(view.byteOffset||0)+view.byteLength);
 if(imageViews.has(i)){
  const index=imageViews.get(i),alpha=index===0,size=index===2?768:512;
  bytes=execFileSync('python',['-c',`import sys,io\nfrom PIL import Image\nim=Image.open(io.BytesIO(sys.stdin.buffer.read())).convert('${alpha?'RGBA':'RGB'}');im.thumbnail((${size},${size}));im.save(sys.stdout.buffer,format='${alpha?'PNG':'JPEG'}',${alpha?'optimize=True':'quality=88,optimize=True'})`],{input:bytes,maxBuffer:8e6});
  doc.images[index].mimeType=alpha?'image/png':'image/jpeg';
 }
 const pad=(4-offset%4)%4;chunks.push(Buffer.alloc(pad));offset+=pad;view.byteOffset=offset;view.byteLength=bytes.length;chunks.push(bytes);offset+=bytes.length;
}
doc.buffers=[{byteLength:offset}];doc.asset.extras={...doc.asset.extras,modifications:'Yggdrasil: texture sizes reduced, flame alpha and emissive texture preserved; runtime scale, column mounting, flame flicker and glow.'};
let json=Buffer.from(JSON.stringify(doc));json=Buffer.concat([json,Buffer.alloc((4-json.length%4)%4,32)]);let binary=Buffer.concat(chunks);binary=Buffer.concat([binary,Buffer.alloc((4-binary.length%4)%4)]);
const head=Buffer.alloc(20);head.writeUInt32LE(0x46546c67);head.writeUInt32LE(2,4);head.writeUInt32LE(28+json.length+binary.length,8);head.writeUInt32LE(json.length,12);head.writeUInt32LE(0x4e4f534a,16);const bh=Buffer.alloc(8);bh.writeUInt32LE(binary.length);bh.writeUInt32LE(0x004e4942,4);const output=Buffer.concat([head,json,bh,binary]);writeFileSync('public/img/models/Muspelheim_Manor_Torch.glb',output);console.log('Torch bytes',source.length,'->',output.length);
