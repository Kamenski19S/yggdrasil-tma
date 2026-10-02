import * as THREE from 'three';
import type { Save } from './core';
import { cleanseGate } from './chaosProgression';
export const CHAOS_GATE_KEY='chaos:north:cleared';
export const CHAOS_GATE_COST=300;
export const CHAOS_GATE_RUNES=['fehuWealth','algizGuard','thurisazStrike'];
export function cleanseChaosGate(s:Save,rune:string):Save {return cleanseGate(s,'north',CHAOS_GATE_RUNES.indexOf(rune));}
const floorProfiles=new WeakMap<THREE.BufferGeometry,Array<{z:number;y:number}>>();
// The veil and inscriptions are separate from the stone frame and dissolve together.
export function createChaosGate(scene:THREE.Scene,x:number,y:number,z:number,load:(callback:(asset:any)=>void)=>void,options:{rotation?:number;color?:number;seal?:string[];ward?:{x:number;z:number;y:number;radius:number}}={}){
  const group=new THREE.Group();group.position.set(x,y,z);group.rotation.y=options.rotation??Math.PI/2;scene.add(group);
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;
  const ctx=canvas.getContext('2d')!;ctx.clearRect(0,0,512,512);ctx.strokeStyle='#'+(options.color??0xc5a3e8).toString(16).padStart(6,'0');ctx.lineWidth=4;ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=16;
  ctx.beginPath();ctx.arc(256,245,148,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(256,245,125,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle=ctx.strokeStyle;ctx.font='92px serif';ctx.textAlign='center';ctx.textBaseline='middle';const seal=options.seal||['ᚺ','ᚾ','ᛁ'];ctx.font='68px serif';seal.forEach((sym,i)=>{const a=-Math.PI/2+i*Math.PI*2/seal.length;ctx.fillText(sym,256+Math.cos(a)*80,245+Math.sin(a)*80);});
  for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(256+Math.cos(a)*132,245+Math.sin(a)*132);ctx.lineTo(256+Math.cos(a)*158,245+Math.sin(a)*158);ctx.stroke();}
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const ink=new THREE.MeshBasicMaterial({map:texture,transparent:true,side:THREE.DoubleSide,depthWrite:false,opacity:.85});
  const marks=new THREE.Mesh(new THREE.PlaneGeometry(4.4,4.4),ink);marks.position.set(0,3,-1.29);group.add(marks);
  const veilMaterials:THREE.Material[]=[];let progress=1;
  const coloredTextures:THREE.Texture[]=[];
  // Additive halos provide visible fire glow without extra shadow-casting lights.
  const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;
  const gc=glowCanvas.getContext('2d')!;const gradient=gc.createRadialGradient(32,32,0,32,32,32);
  gradient.addColorStop(0,'rgba(255,110,65,.8)');gradient.addColorStop(.3,'rgba(255,40,20,.35)');gradient.addColorStop(1,'rgba(255,10,0,0)');gc.fillStyle=gradient;gc.fillRect(0,0,64,64);
  const glowTexture=new THREE.CanvasTexture(glowCanvas);glowTexture.colorSpace=THREE.SRGBColorSpace;coloredTextures.push(glowTexture);
  const glowMaterial=new THREE.SpriteMaterial({map:glowTexture,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false,opacity:.75});
  const halos=[-1,1].map(side=>{const sprite=new THREE.Sprite(glowMaterial);sprite.position.set(side*2.7,3.4,.2);sprite.scale.set(2.1,2.1,1);group.add(sprite);return sprite;});
  let ward:THREE.Mesh|undefined;
  if(options.ward){const w=options.ward;ward=new THREE.Mesh(new THREE.CylinderGeometry(w.radius,w.radius,3.4,48,1,true),new THREE.MeshBasicMaterial({color:options.color??0x998899,transparent:true,opacity:.09,side:THREE.DoubleSide,depthWrite:false}));ward.position.set(w.x,w.y+1.6,w.z);scene.add(ward);}

  const floorSamples:Array<{z:number;y:number}>=[];
  load(asset=>{
    if(!group.parent){asset.scene.traverse((o:any)=>{if(o.material)for(const m of [].concat(o.material)) (m as any).dispose();});return;}
    const model=asset.scene;const bounds=new THREE.Box3().setFromObject(model);const center=bounds.getCenter(new THREE.Vector3());const size=bounds.getSize(new THREE.Vector3());const scale=9.1/size.x;
    model.scale.multiplyScalar(scale);model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);group.add(model);
    // Recolor the sampled atlas in the shader. GLTF ImageBitmap orientation and
    // its three UV channels stay exactly as loaded; never redraw the atlas.
    model.traverse((o:any)=>{
      if(!o.isMesh||o.name==='ChaosVeil')return;
      for(const material of [].concat(o.material) as THREE.MeshStandardMaterial[]){
        material.onBeforeCompile=shader=>{
          shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
            float fireMax = max(diffuseColor.g, diffuseColor.b);
            if (fireMax > diffuseColor.r * 1.35 && fireMax - min(diffuseColor.r, min(diffuseColor.g, diffuseColor.b)) > 0.08) {
              diffuseColor.rgb = vec3(1.0, 0.025, 0.012) * fireMax;
            }`);
          shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
            float glowMax = max(totalEmissiveRadiance.g, totalEmissiveRadiance.b);
            if (glowMax > totalEmissiveRadiance.r * 1.35 && glowMax - min(totalEmissiveRadiance.r, min(totalEmissiveRadiance.g, totalEmissiveRadiance.b)) > 0.08) {
              totalEmissiveRadiance = vec3(1.0, 0.025, 0.012) * glowMax * 1.6;
            }`);
        };
        material.customProgramCacheKey=()=> 'chaos-red-fire-v2';
        material.needsUpdate=true;
      }
    });
    model.traverse((o:any)=>{if(o.name==='ChaosVeil'&&o.isMesh){const mat=o.material as THREE.Material;mat.depthWrite=false;mat.transparent=true;veilMaterials.push(mat);}});
    // Sample the central stone stair profile once; no per-frame triangle raycasts.
    model.updateWorldMatrix(true,true);
    const stones:THREE.Object3D[]=[];model.traverse((o:any)=>{if(o.isMesh&&o.name!=='ChaosVeil')stones.push(o);});
    const geometry=(stones[0] as THREE.Mesh|undefined)?.geometry;
    const profile=geometry?floorProfiles.get(geometry):undefined;
    if(profile){floorSamples.push(...profile.map(p=>({z:p.z,y:p.y+y})));}
    else {
      const ray=new THREE.Raycaster();ray.far=4;
      for(let i=0;i<=28;i++){
        const localZ=-3.5+i*.25;const point=group.localToWorld(new THREE.Vector3(0,2.4,localZ));
        ray.set(point,new THREE.Vector3(0,-1,0));
        const hit=ray.intersectObjects(stones,false).find(hit=>!hit.face||hit.face.normal.y>.25);
        floorSamples.push({z:localZ,y:hit?hit.point.y:y-.12});
      }
      if(geometry)floorProfiles.set(geometry,floorSamples.map(p=>({z:p.z,y:p.y-y})));
    }
    // Canvas marks sit just in front of the supplied veil, in its actual plane.
    const veil=model.getObjectByName('ChaosVeil');if(veil){veil.updateWorldMatrix(true,false);const p=group.worldToLocal(new THREE.Box3().setFromObject(veil).getCenter(new THREE.Vector3()));marks.position.z=p.z+.015;}
  });
  return {
    floorAt(wx:number,wz:number,base:number){
      if(Math.abs(wx-x)>6||Math.abs(wz-z)>6)return base;
      const p=group.worldToLocal(new THREE.Vector3(wx,y,wz));
      if(Math.abs(p.x)>1.85||Math.abs(p.z)>3.5||!floorSamples.length)return base;
      const i=Math.min(floorSamples.length-2,Math.max(0,Math.floor((p.z+3.5)/.25)));
      const a=floorSamples[i],b=floorSamples[i+1],t=(p.z-a.z)/.25;
      return Math.max(base,THREE.MathUtils.lerp(a.y,b.y,t));
    },
    sealedAt(wx:number,wz:number){if(Math.abs(wx-x)>6||Math.abs(wz-z)>6)return false;const p=group.worldToLocal(new THREE.Vector3(wx,y,wz));return Math.abs(p.x)<2.5&&Math.abs(p.z-marks.position.z)<.3;},
    blocks(wx:number,wz:number){if(Math.abs(wx-x)>6||Math.abs(wz-z)>6)return false;const p=group.worldToLocal(new THREE.Vector3(wx,y,wz));return Math.abs(p.z)<2.45&&Math.abs(p.x)>1.9&&Math.abs(p.x)<3.5;},
    update(dt:number,cleared:boolean,time:number,wx?:number,wz?:number){glowMaterial.opacity=.68+Math.sin(time*.004)*.1;halos.forEach(h=>h.scale.setScalar(2.1+Math.sin(time*.003)*.06));group.visible=wx===undefined||Math.hypot(wx-x,(wz??0)-z)<65;if(ward){ward.visible=progress>0&&group.visible;(ward.material as THREE.Material).opacity=.09*progress;}progress=Math.max(0,Math.min(1,progress+(cleared?-dt:dt)));marks.visible=progress>0;ink.opacity=progress*(.78+Math.sin(time*.0018)*.12);for(const material of veilMaterials){material.opacity=.8*progress;material.visible=progress>0;}},
    dispose(){scene.remove(group);texture.dispose();marks.geometry.dispose();coloredTextures.forEach(t=>t.dispose());if(ward){scene.remove(ward);ward.geometry.dispose();(ward.material as THREE.Material).dispose();}group.traverse((o:any)=>{if(o.material)for(const m of [].concat(o.material))(m as any).dispose();});}
  };
}
