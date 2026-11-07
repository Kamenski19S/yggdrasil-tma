import fs from 'node:fs';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dedup,weld,simplify,quantize} from '@gltf-transform/functions';
import {MeshoptSimplifier} from 'meshoptimizer';
import {optimizeGlbLossless,parseGlb} from './optimize-glb-lossless.mjs';
const input=process.argv[2];if(!input)throw Error('Usage: node scripts/prepare-jotunheim-stone.mjs source.glb');
const source=fs.readFileSync(input),{json}=parseGlb(source);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),document=await io.read(input);
await MeshoptSimplifier.ready;
await document.transform(dedup(),weld(),simplify({simplifier:MeshoptSimplifier,ratio:.35,error:.0005}),quantize({quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12}));
// Keep the full CC BY attribution alongside the precision/placement changes.
Object.assign(document.getRoot().getAsset(),{extras:{...json.asset.extras,modifications:'Deduplicated and simplified mesh (target 35%, relative error 0.0005); 14-bit position, 10-bit normal/tangent and 12-bit UV precision; compressed buffers and normal texture. Runtime scale and terrain adaptation.'}});
const result=await optimizeGlbLossless(Buffer.from(await io.writeBinary(document)));
fs.writeFileSync('public/img/models/Jotunheim_Dunga_Stone.glb',result.output);
console.log(JSON.stringify({before:source.length,after:result.output.length,encodedViews:result.encodedViews,convertedImages:result.convertedImages}));
