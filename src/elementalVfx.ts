import * as THREE from 'three';
import {ELEMENTS,type Element} from './elementalMagic';
type Atlas={columns:number;rows:number;frames:number;fps:number;file:string};
const atlases:Record<string,Atlas>={};
for(const e of ['fire','ice','arcane']){atlases[e+'_bolt']={columns:8,rows:2,frames:16,fps:24,file:'spell/'+e+'_bolt.webp'};atlases[e+'_impact']={columns:8,rows:3,frames:24,fps:30,file:'spell/'+e+'_impact.webp'};}
for(const e of ['lightning','water_splash'])atlases[e]={columns:4,rows:4,frames:16,fps:12,file:'elemental/'+e+'.webp'};
/** Shared atlas/material per effect, independent UVs per billboard; bounded transient pool. */
export function createElementalVfx(base:string){
 const root=new THREE.Group();root.name='Магия стихий';let disposed=false;
 const cache=new Map<string,{material:THREE.MeshBasicMaterial;ready:boolean}>();
 const live:Array<{mesh:THREE.Mesh<THREE.PlaneGeometry,THREE.MeshBasicMaterial>;atlas:Atlas;age:number;life:number;angle:number;key?:string;resource:{material:THREE.MeshBasicMaterial;ready:boolean};direction?:THREE.Vector3}>=[];
 function resource(id:string){let r=cache.get(id);if(r)return r;r={material:new THREE.MeshBasicMaterial({transparent:true,depthWrite:false,toneMapped:false,side:THREE.DoubleSide}),ready:false};cache.set(id,r);const ref=r;
  if(typeof document!=='undefined')new THREE.TextureLoader().load(base+atlases[id].file,t=>{if(disposed){t.dispose();return;}t.colorSpace=THREE.SRGBColorSpace;t.generateMipmaps=false;t.minFilter=THREE.LinearFilter;t.magFilter=THREE.LinearFilter;ref.material.map=t;ref.material.needsUpdate=true;ref.ready=true;},undefined,()=>{});
  return r;
 }
 function remove(i:number){const [v]=live.splice(i,1);root.remove(v.mesh);v.mesh.geometry.dispose();}
 function spawn(id:string,p:{x:number;y:number;z:number},size:number,life?:number,key?:string,angle=0){
  if(disposed)return;let v=key?live.find(v=>v.key===key):undefined;
  if(!v){if(live.length>=64)remove(0);const atlas=atlases[id],r=resource(id),mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1),r.material);mesh.frustumCulled=false;mesh.visible=false;root.add(mesh);v={mesh,atlas,age:0,life:life??atlas.frames/atlas.fps,angle,key,resource:r};live.push(v);}
  if(key)v.life=v.age+.12;v.mesh.position.set(p.x,p.y,p.z);v.mesh.scale.set(size,size*(id.endsWith('_bolt')?.5:1),1);v.angle=angle;
 }
 return {root,
  impact(e:Element,p:{x:number;y:number;z:number},size=14){spawn(ELEMENTS[e].impact,p,size);},
  bolt(key:string,e:Element,p:{x:number;y:number;z:number;vx?:number;vy?:number;vz?:number},size=7){spawn(ELEMENTS[e].bolt,p,size,.12,key);const v=live.find(v=>v.key===key);if(v&&p.vx!==undefined)v.direction=new THREE.Vector3(p.vx,p.vy??0,p.vz??0);},
  charge(key:string,e:Element,p:{x:number;y:number;z:number}){spawn(ELEMENTS[e].impact,p,6,.12,key);},
  update(dt:number,camera:THREE.Camera){for(let i=live.length-1;i>=0;i--){const v=live[i];v.age+=dt;if(v.age>=v.life){remove(i);continue;}v.mesh.visible=v.resource.ready;const a=v.atlas,f=Math.floor(v.age*a.fps)%a.frames,x=f%a.columns,y=Math.floor(f/a.columns),uv=v.mesh.geometry.getAttribute('uv');uv.setXY(0,x/a.columns,1-y/a.rows);uv.setXY(1,(x+1)/a.columns,1-y/a.rows);uv.setXY(2,x/a.columns,1-(y+1)/a.rows);uv.setXY(3,(x+1)/a.columns,1-(y+1)/a.rows);uv.needsUpdate=true;v.mesh.quaternion.copy(camera.quaternion);if(v.direction){const d=v.direction.clone().applyQuaternion(camera.quaternion.clone().invert());v.mesh.rotateZ(Math.atan2(d.y,d.x));}else if(v.angle)v.mesh.rotateZ(v.angle);}},
  clear(){while(live.length)remove(live.length-1);},
  dispose(){disposed=true;this.clear();for(const r of cache.values()){r.material.map?.dispose();r.material.dispose();}cache.clear();},
 };
}
