import * as THREE from 'three';
/** Lightweight procedural finish: the existing steel mesh keeps its axle and silhouette. */
export function applyFireWheelMaterial(root:THREE.Object3D){
 const time={value:0};
 const material=new THREE.MeshStandardMaterial({color:'#292022',metalness:.82,roughness:.36,emissive:'#ff3d06',emissiveIntensity:.45});
 material.onBeforeCompile=shader=>{
  shader.uniforms.fireWheelTime=time;
  shader.vertexShader='varying vec3 wheelPoint;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nwheelPoint = position;');
  shader.fragmentShader='varying vec3 wheelPoint;\nuniform float fireWheelTime;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
   vec3 p = wheelPoint * 4.0;
   float seam = abs(sin(p.x*2.1 + sin(p.y*1.7)*1.2 + sin(p.z*2.4)));
   float veins = 1.0-smoothstep(0.035,0.15,seam);
   totalEmissiveRadiance = vec3(1.0,0.12+veins*0.25,0.015)* (0.12+veins*2.2)*(0.85+0.15*sin(fireWheelTime*2.6));`);
 };
 material.customProgramCacheKey=()=> 'fire-mill-wheel-v1';
 const old=new Set<THREE.Material>();
 root.traverse(o=>{if(o instanceof THREE.Mesh){for(const m of Array.isArray(o.material)?o.material:[o.material])old.add(m);o.material=material;}});
 old.forEach(m=>m.dispose());
 return {update:(seconds:number)=>{time.value=seconds;},material};
}
export function createFireWheelEffects(){
 const root=new THREE.Group();root.name='Огонь и искры мельничного колеса';
 const canvas=document.createElement('canvas');canvas.width=64;canvas.height=128;const ctx=canvas.getContext('2d')!;
 const glow=ctx.createRadialGradient(32,88,2,32,70,49);glow.addColorStop(0,'rgba(255,255,205,1)');glow.addColorStop(.23,'rgba(255,211,62,.95)');glow.addColorStop(.58,'rgba(255,69,4,.6)');glow.addColorStop(1,'rgba(255,25,0,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,64,128);ctx.globalCompositeOperation='destination-in';const edge=ctx.createLinearGradient(0,0,64,0);edge.addColorStop(0,'transparent');edge.addColorStop(.5,'white');edge.addColorStop(1,'transparent');ctx.fillStyle=edge;ctx.fillRect(0,0,64,128);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 const flameMat=new THREE.SpriteMaterial({map:texture,color:'#ffba65',transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
 const flames=Array.from({length:24},()=>{const sprite=new THREE.Sprite(flameMat);root.add(sprite);return sprite;});
 const data=new Float32Array(48*3),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(data,3));
 const sparkMat=new THREE.PointsMaterial({color:'#ffcf65',size:.09,transparent:true,opacity:.9,depthWrite:false,blending:THREE.AdditiveBlending});const sparks=new THREE.Points(geometry,sparkMat);root.add(sparks);
 const light=new THREE.PointLight('#ff650d',12,12,2);light.position.set(1,1,0);root.add(light);
 return {root,update(time:number,angle:number,running:boolean){flames.forEach((f,i)=>{const a=i*Math.PI/12+angle;f.position.set((i%2?1:-1)*.4,Math.sin(a)*3.05+.27,Math.cos(a)*3.05);const pulse=1+.22*Math.sin(time*8+i*2.3);f.scale.set(.65*pulse,(running?1.5:1.05)*pulse,1);});for(let i=0;i<48;i++){const life=(time*(running?.65:.3)+i/48)%1,a=i*2.39996+angle;data[i*3]=Math.sin(i*5.1)*(.4+life);data[i*3+1]=Math.sin(a)*2.7+life*3;data[i*3+2]=Math.cos(a)*2.7+Math.sin(i)*life;}geometry.attributes.position.needsUpdate=true;light.intensity=10+Math.sin(time*9)*2;},dispose(){texture.dispose();flameMat.dispose();geometry.dispose();sparkMat.dispose();root.removeFromParent();}};
}
