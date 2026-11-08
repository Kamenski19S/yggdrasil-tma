import fs from 'node:fs';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dedup,weld,simplify,quantize,prune} from '@gltf-transform/functions';
import {MeshoptSimplifier} from 'meshoptimizer';
import sharp from 'sharp';
import {optimizeGlbLossless,parseGlb} from './optimize-glb-lossless.mjs';
const inputs=process.argv.slice(2);if(inputs.length!==3)throw Error('Supply waterfall.glb, hengifoss_waterfall.glb, day_243_waterfall.glb');
const outputNames=['Jotunheim_Waterfall_Valley.glb','Jotunheim_Waterfall_Hengifoss.glb','Jotunheim_Waterfall_Mountain.glb'];
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);await MeshoptSimplifier.ready;
const report=[];
for(let i=0;i<inputs.length;i++){
 const input=fs.readFileSync(inputs[i]),{json}=parseGlb(input),doc=await io.read(inputs[i]);
 // Only the static scanned landscape is requested. The first source contains a
 // turntable rotation of the whole cliff, not flowing-water animation.
 for(const a of doc.getRoot().listAnimations())a.dispose();
 for(const t of doc.getRoot().listTextures()){
  const {data,info}=await sharp(t.getImage()).removeAlpha().raw().toBuffer({resolveWithObject:true});
  for(let p=0;p<data.length;p+=info.channels){
   const r=data[p]/255,g=data[p+1]/255,b=data[p+2]/255;
   const green=Math.max(0,Math.min(1,(g-Math.max(r,b)-.005)/.065));
   const white=Math.max(0,Math.min(1,(Math.min(r,g,b)-.62)/.18));
   const keep=Math.max(green,white),l=.2126*r+.7152*g+.0722*b;
   const neutral=[l*.94+.035,l*.98+.035,l*1.02+.035];
   for(let c=0;c<3;c++){const original=data[p+c]/255;data[p+c]=Math.round(Math.min(1,Math.max(0,original+(neutral[c]-original)*.65*(1-keep)))*255);}
  }
  t.setImage(await sharp(data,{raw:info}).jpeg({quality:90,chromaSubsampling:'4:4:4'}).toBuffer()).setMimeType('image/jpeg');
 }
 await doc.transform(dedup(),weld(),simplify({simplifier:MeshoptSimplifier,ratio:.22,error:.002}),prune(),quantize({quantizePosition:15,quantizeNormal:10,quantizeTexcoord:14}));
 Object.assign(doc.getRoot().getAsset(),{extras:{...json.asset.extras,modifications:'Yggdrasil: static scan; turntable animation removed; mesh simplified and quantized; neutral cool stone color grading with green vegetation and white water protected; original UV layout retained; runtime placement and terrain blending.'}});
 const raw=Buffer.from(await io.writeBinary(doc));const {output}=await optimizeGlbLossless(raw);
 fs.writeFileSync('public/img/models/'+outputNames[i],output);const triangles=doc.getRoot().listMeshes().reduce((sum,m)=>sum+m.listPrimitives().reduce((n,p)=>n+(p.getIndices()?.getCount()??p.getAttribute('POSITION').getCount())/3,0),0);
 report.push({file:outputNames[i],original:input.length,optimized:output.length,triangles,credit:json.asset.extras});
 console.log(report.at(-1));
}
fs.writeFileSync('scripts/assets/jotunheim-waterfalls-report.json',JSON.stringify(report,null,2)+'\n');
