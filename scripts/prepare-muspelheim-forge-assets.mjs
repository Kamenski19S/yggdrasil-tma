// Usage: node scripts/prepare-muspelheim-forge-assets.mjs /path/to/uploads
// Keeps source geometry and colors; splits the chosen swords and repacks only used assets.
import {NodeIO} from '@gltf-transform/core';
import {prune,transformPrimitive} from '@gltf-transform/functions';
import * as THREE from 'three';
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const input=process.argv[2],output='public/img/models';if(!input)throw Error('Upload directory required');await fs.mkdir(output,{recursive:true});const io=new NodeIO();
const jobs=[['10_genshin_impact_inspired_sword_3d_models.glb','Sword_Bakufu.glb','Bakufu_mesh'],['10_genshin_impact_inspired_sword_3d_models.glb','Sword_LionsRoar.glb','Lions Roar_mesh'],['10_genshin_impact_inspired_sword_3d_models.glb','Sword_PrototypeRancour.glb','Prototype Rancour_mesh'],['stylized_shield.glb','Shield_Stylized.glb'],['gil-galads_shield.glb','Shield_GilGalad.glb'],['skyrim_glass_shield.glb','Shield_Glass.glb']];
for(const [source,dest,selected]of jobs){const doc=await io.read(path.join(input,source)),root=doc.getRoot(),scene=doc.createScene('Forge equipment');root.setDefaultScene(scene);
 const identity=new THREE.Matrix4().toArray(),nodes=root.listNodes().filter(n=>n.getMesh());
 const chosen=selected?root.listNodes().find(n=>n.getName()===selected):null;
 const include=new Set();if(chosen)chosen.traverse(n=>include.add(n));
 const parts=[];
 for(const node of nodes){if(selected&&!include.has(node))continue;
  const mesh=node.getMesh();const matrix=selected?new THREE.Matrix4().makeRotationZ(Math.PI).toArray():node.getWorldMatrix();
  for(const primitive of [...mesh.listPrimitives()]){
   if(primitive.getMaterial()?.getName().startsWith('Outline')){mesh.removePrimitive(primitive);continue;}
   transformPrimitive(primitive,matrix);parts.push(primitive);
  }
  node.setMatrix(identity);scene.addChild(node);
 }
 for(const old of root.listScenes())if(old!==scene)old.dispose();
 // The selected nodes now have baked transforms; discard old empty parents and unused textures.
 await doc.transform(prune());
 const bounds=()=>{const b=new THREE.Box3();for(const p of parts){const a=p.getAttribute('POSITION').getArray();for(let i=0;i<a.length;i+=3)b.expandByPoint(new THREE.Vector3(a[i],a[i+1],a[i+2]));}return b;};
 if(!selected){const size=bounds().getSize(new THREE.Vector3()),a=[size.x,size.y,size.z],long=a.indexOf(Math.max(...a)),thin=a.indexOf(Math.min(...a));const up=new THREE.Vector3().setComponent(long,1),front=new THREE.Vector3().setComponent(thin,1),right=new THREE.Vector3().crossVectors(up,front);const rot=new THREE.Matrix4().set(right.x,right.y,right.z,0,up.x,up.y,up.z,0,front.x,front.y,front.z,0,0,0,0,1);for(const p of parts)transformPrimitive(p,rot.toArray());}
 const b=bounds(),size=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3()),span=Math.max(size.x,size.y,size.z),grip=selected?b.min.y+size.y*({Sword_Bakufu:.125,Sword_LionsRoar:.115,Sword_PrototypeRancour:.12}[dest.replace('.glb','')]):c.y;
 const normalize=new THREE.Matrix4().makeScale(1/span,1/span,1/span).multiply(new THREE.Matrix4().makeTranslation(-c.x,-grip,-c.z));for(const p of parts)transformPrimitive(p,normalize.toArray());
 for(const t of root.listTextures()){const bytes=t.getImage();if(bytes){t.setImage(await sharp(bytes).resize({width:1024,height:1024,fit:'inside',withoutEnlargement:true}).webp({quality:94,alphaQuality:100}).toBuffer()).setMimeType('image/webp');}}
 await doc.transform(prune());await io.write(path.join(output,dest),doc);console.log(dest,(await fs.stat(path.join(output,dest))).size);
}
