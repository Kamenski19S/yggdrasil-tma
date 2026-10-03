import * as THREE from 'three';

// Two small, shared, seamless maps per scene; no additional asset requests.
export function createBuildingTextures(anisotropy=4){
  const make=(wood:boolean)=>{
    const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
    const ctx=canvas.getContext('2d')!,pixels=ctx.createImageData(256,256);
    let seed=wood?719:913;
    const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
    for(let y=0;y<256;y++)for(let x=0;x<256;x++){
      const i=(y*256+x)*4;
      const grain=wood?Math.sin(x*Math.PI/16+Math.sin(y*Math.PI/128)*.7)*7+Math.sin(x*Math.PI/4)*3:Math.sin(x*Math.PI/32)*Math.cos(y*Math.PI/32)*3;
      const noise=(random()-.5)*(wood?15:24);
      const seam=wood&&x%64<2?-30:0;
      const base=wood?[125,87,53]:[174,172,165];
      for(let k=0;k<3;k++)pixels.data[i+k]=base[k]+grain+noise+seam;
      pixels.data[i+3]=255;
    }
    ctx.putImageData(pixels,0,0);
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=anisotropy;
    return texture;
  };
  const wood=make(true),concrete=make(false);
  return {wood,concrete,dispose:()=>{wood.dispose();concrete.dispose();}};
}

export function textureBuildingPart(mesh:THREE.Mesh,texture:THREE.Texture,wood=false){
  // Clone geometry and material: cached GLBs and other parts retain their maps.
  const geometry=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();
  const positions=geometry.getAttribute('position'),uv=new Float32Array(positions.count*2);
  const pts=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
  const normal=new THREE.Vector3(),a=new THREE.Vector3(),b=new THREE.Vector3();
  const scale=new THREE.Vector3();mesh.updateWorldMatrix(true,false);mesh.getWorldScale(scale);
  for(let i=0;i+2<positions.count;i+=3){
    for(let k=0;k<3;k++)pts[k].fromBufferAttribute(positions,i+k).multiply(scale);
    normal.crossVectors(a.subVectors(pts[1],pts[0]),b.subVectors(pts[2],pts[0]));
    const top=Math.abs(normal.y)>Math.max(Math.abs(normal.x),Math.abs(normal.z));
    const side=Math.abs(normal.x)>Math.abs(normal.z),tile=wood?1.5:2;
    for(let k=0;k<3;k++){const p=pts[k];uv[(i+k)*2]=(top?p.x:side?p.z:p.x)/tile;uv[(i+k)*2+1]=(top?p.z:p.y)/tile;}
  }
  geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));mesh.geometry=geometry;
  const adapt=(source:THREE.Material)=>{
    const m=source.clone() as THREE.MeshStandardMaterial;
    m.map=texture;m.color?.setHex(0xffffff);m.vertexColors=false;
    m.normalMap=null;m.bumpMap=null;m.roughnessMap=null;m.metalnessMap=null;
    m.emissiveMap=null;m.emissive?.setHex(0);m.roughness=wood?.91:1;m.metalness=0;m.needsUpdate=true;
    return m;
  };
  mesh.material=Array.isArray(mesh.material)?mesh.material.map(adapt):adapt(mesh.material);
}

export function applyBuildingDetails(root:THREE.Object3D,textures:ReturnType<typeof createBuildingTextures>){
  root.updateWorldMatrix(true,true);
  root.traverse(part=>{
    const mesh=part as THREE.Mesh;if(!mesh.isMesh)return;
    const tag=mesh.name.toLowerCase();
    const door=/(^|_)door$/.test(tag);
    const concrete=/foundation|stonebase|stone_base|platform|porch|steps?|stairs?|threshold|plinth|paving|pavement|paver|door_?frame|door_?jamb|door_?lintel|door_[lr]$/.test(tag)&&!/beam|post|rail|roof/.test(tag);
    if(door||concrete)textureBuildingPart(mesh,door?textures.wood:textures.concrete,door);
  });
}
