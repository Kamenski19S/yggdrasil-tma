import * as THREE from 'three';
export const TORCH_ASSET='Muspelheim_Manor_Torch.glb';
export const TORCH_CREDIT={title:'Manor torch',author:'Chenchanchong',url:'https://sketchfab.com/3d-models/manor-torch-ad8f41ca06314116816d9c4fb07f403c'};
export function createGatewayTorches(source:THREE.Object3D,surfaceAt:(x:number,y:number,face:number)=>number){
 source.updateWorldMatrix(true,true);const template=new THREE.Group();
 source.traverse(o=>{if(o instanceof THREE.Mesh){const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld),materials=(Array.isArray(o.material)?o.material:[o.material]).map(m=>m.clone());template.add(new THREE.Mesh(geometry,Array.isArray(o.material)?materials:materials[0]));}});
 const box=new THREE.Box3().setFromObject(template),center=box.getCenter(new THREE.Vector3()),scale=10/(box.max.y-box.min.y);
 template.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.translate(-center.x,-box.min.y,-center.z);o.geometry.scale(scale,scale,scale);}});
 const pixels=new Uint8Array(64*64*4);
 for(let y=0;y<64;y++)for(let x=0;x<64;x++){const radius=Math.hypot((x-31.5)/31.5,(y-31.5)/31.5),alpha=Math.exp(-radius*radius*4)*Math.max(0,1-radius);const i=(y*64+x)*4;pixels[i]=pixels[i+1]=pixels[i+2]=255;pixels[i+3]=Math.round(alpha*255);}
 const glowMap=new THREE.DataTexture(pixels,64,64);glowMap.minFilter=glowMap.magFilter=THREE.LinearFilter;glowMap.needsUpdate=true;
 const group=new THREE.Group();group.name='Gateway column torches';const lights:THREE.PointLight[]=[],halos:THREE.Sprite[]=[],flames:THREE.MeshStandardMaterial[]=[];
 for(const face of [1,-1])for(const side of [-1,1]){
  const torch=template.clone(true);torch.name=`${face>0?'Outer':'Inner'} ${side<0?'left':'right'} column torch`;torch.userData.face=face;
  torch.traverse(o=>{if(o instanceof THREE.Mesh){const materials=(Array.isArray(o.material)?o.material:[o.material]).map(original=>{
   const m=(original as THREE.MeshStandardMaterial).clone();
   if(m.transparent||m.name==='Flame'){m.depthWrite=false;m.alphaTest=.02;m.emissiveIntensity=2.4;m.toneMapped=false;flames.push(m);}else{m.roughness=.85;m.metalness=.3;}
   return m;
  });o.material=Array.isArray(o.material)?materials:materials[0];}});
  const x=side*27,bottom=face>0?22:28,surface=surfaceAt(x,bottom+5,face);torch.rotation.y=face>0?0:Math.PI;torch.position.set(x,bottom,surface+face*((box.max.z-box.min.z)*scale/2-.12));group.add(torch);
  const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowMap,color:'#ff7623',transparent:true,opacity:.65,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));glow.name='Warm torch halo';glow.position.set(0,8.3,.5);glow.scale.set(9,12,1);torch.add(glow);halos.push(glow);
  const light=new THREE.PointLight('#ff8437',70,18,2);light.name='Warm column light';light.position.set(0,8.3,1.2);torch.add(light);lights.push(light);
 }
 // Meshes share geometry/textures but own their animated flame materials.
 template.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();});
 let time=0;return {group,update(dt:number){time+=dt;for(let i=0;i<lights.length;i++){const flicker=1+.065*Math.sin(time*7+i*2)+.035*Math.sin(time*13.7+i);lights[i].intensity=70*flicker;halos[i].material.opacity=.65*flicker;}for(const m of flames)m.emissiveIntensity=2.4*(1+.06*Math.sin(time*8));}};
}
