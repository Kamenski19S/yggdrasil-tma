import * as THREE from 'three';
export const COBBLE_CREDIT={author:'NinjaNinJosh',title:'Cobble Material',url:'https://sketchfab.com/3d-models/cobble-material-1bebeecbcd204c8c87f230542ab3a121'};
/** One shared texture set for every road; packed surface is AO / roughness / metalness. */
export function loadCobbleTextures(assetBase:string,maxAnisotropy:number){
 const loader=new THREE.TextureLoader(),textures:THREE.Texture[]=[],pending:Promise<void>[]=[];
 for(const name of ['color','surface','normal']){
  pending.push(new Promise<void>((resolve,reject)=>{
   const texture=loader.load(`${assetBase}muspelheim-cobble-${name}.webp`,()=>resolve(),undefined,()=>reject(new Error('Cobble texture failed: '+name)));
   texture.flipY=false;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
   texture.anisotropy=Math.min(8,maxAnisotropy);
   if(name==='color')texture.colorSpace=THREE.SRGBColorSpace;
   textures.push(texture);
  }));
 }
 return {color:textures[0],surface:textures[1],normal:textures[2],ready:Promise.all(pending).then(()=>{}),dispose:()=>textures.forEach(t=>t.dispose())};
}
