import * as THREE from 'three';
import {MUSPELHEIM_LOCATION_SEALS,locationIsOpen} from './muspelheimLocationSeals';
export const LOCATION_RING_ASSET='Muspelheim_Location_Seal_Ring.glb';
export const LOCATION_RING_CREDIT={title:'Magic Ring - Red',author:'Noob Model :D',url:'https://sketchfab.com/3d-models/magic-ring-red-08b6d10747ae4319a5d6fb1c2a47be92',license:'CC-BY-4.0'};
/** Shared geometry/textures; two counter-rotating rings, no point lights or per-frame allocations. */
export function createLocationSealVfx(){
 const root=new THREE.Group();root.name='Платные рунические преграды Муспельхейма';
 const textures=new Map<string,THREE.CanvasTexture>();
 // Stroke paths avoid missing Runic Unicode glyphs on Android and other devices.
 const strokes:Record<string,number[][]>={
 'ᚠ':[[40,112,40,16],[40,42,88,16],[40,68,88,42]],
 'ᚢ':[[30,112,30,16,90,34,90,112]],
 'ᚦ':[[40,112,40,16],[40,36,92,61,40,85]],
 'ᚨ':[[40,112,40,16],[40,20,90,46],[40,48,90,74]],
 'ᚱ':[[36,112,36,16,88,42,36,66,92,112]],
 'ᚲ':[[92,20,34,64,92,108]],
 'ᚷ':[[28,20,100,108],[100,20,28,108]],
 'ᚹ':[[36,112,36,16,92,42,36,66]],
 'ᚺ':[[30,16,30,112],[98,16,98,112],[30,34,98,90]],
 'ᚾ':[[64,16,64,112],[28,40,100,86]],
 'ᛁ':[[64,16,64,112]],
 'ᛃ':[[60,16,28,48,60,72],[68,56,100,80,68,112]],
 'ᛇ':[[64,112,64,16,96,40],[64,112,32,88]],
 'ᛈ':[[32,16,32,112],[32,16,64,42,96,16],[32,112,64,86,96,112]],
 'ᛉ':[[64,112,64,16],[28,30,64,64,100,30]],
 'ᛋ':[[94,16,36,48,92,78,32,112]],
 'ᛏ':[[64,112,64,16],[28,52,64,16,100,52]],
 'ᛒ':[[36,112,36,16,92,40,36,64,92,88,36,112]],
 'ᛖ':[[28,112,28,16,64,55,100,16,100,112]],
 'ᛗ':[[28,112,28,16,100,84],[100,112,100,16,28,84]],
 'ᛚ':[[40,112,40,16,94,54]],
 'ᛜ':[[64,22,100,64,64,106,28,64,64,22]],
 'ᛞ':[[28,16,28,112,100,16,100,112,28,16]],
 'ᛟ':[[28,112,94,48,64,16,34,48,100,112]]
 };
 const glyph=(symbol:string)=>{let t=textures.get(symbol);if(t)return t;const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d')!;
  const draw=()=>{ctx.beginPath();for(const path of strokes[symbol]??[]){ctx.moveTo(path[0],path[1]);for(let i=2;i<path.length;i+=2)ctx.lineTo(path[i],path[i+1]);}ctx.stroke();};
  ctx.lineJoin='round';ctx.lineCap='round';ctx.shadowColor='#ff3822';ctx.shadowBlur=16;ctx.strokeStyle='#ff7145';ctx.lineWidth=8;draw();ctx.shadowBlur=4;ctx.strokeStyle='#fff1cf';ctx.lineWidth=3.5;draw();
  t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;textures.set(symbol,t);return t;};
 const fallbackGeometry=new THREE.TorusGeometry(1,.025,6,64),veilGeometry=new THREE.CircleGeometry(.89,48),runeGeometry=new THREE.PlaneGeometry(.22,.3);
 const rimMaterial=new THREE.MeshBasicMaterial({color:'#ff442b',transparent:true,opacity:.85,blending:THREE.AdditiveBlending,depthWrite:false});
 const veilMaterial=new THREE.MeshBasicMaterial({color:'#9b1026',side:THREE.DoubleSide,transparent:true,opacity:.16,depthWrite:false});
 const runeMaterials=new Map<string,THREE.MeshBasicMaterial>();
 const entries=MUSPELHEIM_LOCATION_SEALS.map(seal=>{const group=new THREE.Group();group.name=seal.name+' · печать';group.rotation.y=seal.yaw;root.add(group);const fit=new THREE.Group(),runes=new THREE.Group();group.add(fit,runes);const fallback=new THREE.Mesh(fallbackGeometry,rimMaterial);fit.add(fallback);const veil=new THREE.Mesh(veilGeometry,veilMaterial);group.add(veil);
  for(let i=0;i<12;i++){const symbol=seal.runes[i%3].symbol;let material=runeMaterials.get(symbol);if(!material){material=new THREE.MeshBasicMaterial({map:glyph(symbol),transparent:true,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending});runeMaterials.set(symbol,material);}const mesh=new THREE.Mesh(runeGeometry,material),a=i*Math.PI/6;mesh.position.set(Math.cos(a)*.79,Math.sin(a)*.79,.12);mesh.rotation.z=a-Math.PI/2;runes.add(mesh);}group.scale.setScalar(seal.radius);return {seal,group,fit,runes,fallback,mixer:undefined as THREE.AnimationMixer|undefined};});
 let model:THREE.Object3D|undefined;
 return {root,
  attach(source:THREE.Object3D,clips:THREE.AnimationClip[]){model=source;source.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material]){m.depthWrite=false;if(m instanceof THREE.MeshStandardMaterial)m.emissiveIntensity=1.7;}});source.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(source),size=box.getSize(new THREE.Vector3());
   for(const e of entries){const clone=source.clone(true),plane=new THREE.Group();plane.add(clone);if(size.y<=size.x&&size.y<=size.z)plane.rotation.x=Math.PI/2;else if(size.x<=size.y&&size.x<=size.z)plane.rotation.y=Math.PI/2;plane.updateWorldMatrix(true,true);const b=new THREE.Box3().setFromObject(plane),center=b.getCenter(new THREE.Vector3()),dims=b.getSize(new THREE.Vector3()),scale=2/Math.max(dims.x,dims.y);const offset=new THREE.Group();offset.add(plane);plane.position.sub(center);offset.scale.set(scale,scale,scale*.04);e.fit.add(offset);e.fallback.visible=false;e.mixer=new THREE.AnimationMixer(clone);for(const clip of clips)e.mixer.clipAction(clip).play();}
  },
  update(dt:number,done:readonly string[],floor:(x:number,z:number)=>number|null,door?:THREE.Vector3){
   for(const e of entries){e.group.visible=!locationIsOpen(done,e.seal.id);if(!e.group.visible)continue;const p=e.seal.id==='residence'&&door?door:e.seal;const y=e.seal.id==='residence'&&door?door.y:(floor(p.x,p.z)??0)+e.seal.radius;e.group.position.set(p.x,y,p.z);e.mixer?.update(dt);e.fit.rotation.z+=dt*.13;e.runes.rotation.z-=dt*.24;}
  },
  dispose(){for(const e of entries)e.mixer?.stopAllAction();root.removeFromParent();fallbackGeometry.dispose();veilGeometry.dispose();runeGeometry.dispose();rimMaterial.dispose();veilMaterial.dispose();for(const m of runeMaterials.values())m.dispose();for(const t of textures.values())t.dispose();if(model){const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),maps=new Set<THREE.Texture>();model.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);for(const v of Object.values(m))if(v instanceof THREE.Texture)maps.add(v);}}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());maps.forEach(t=>t.dispose());}}
 };
}
