import * as THREE from 'three';
import type {Save} from './core';
export type ArmorAppearance={armor:number;helmet:number;boots:number;shield:number};
export const armorTemperFlag=(key:string)=>'muspelheim:tempered:'+key;
export function muspelheimArmorAppearance(save:Save):ArmorAppearance{
 const value=(id:'armor'|'helmet'|'boots'|'shield')=>{const key=id==='shield'?(save.shieldAsset==='Shield_Round.glb'?'shield':'shield:'+save.shieldAsset):id;return save.equippedGear.includes(id)&&save.done.includes(armorTemperFlag(key))?Math.max(0,save.forgeLevels[key]||0):0;};
 return {armor:value('armor'),helmet:value('helmet'),boots:value('boots'),shield:value('shield')};
}
/** Texture details remain intact; only cloth/metal on equipment is warmed, not skin. */
export function createMuspelheimArmorAppearance(model:THREE.Object3D){
 const uniforms={value:new THREE.Vector3()};
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position');if(!p)return;let min=Infinity,max=-Infinity;for(let i=0;i<p.count;i++){min=Math.min(min,p.getY(i));max=Math.max(max,p.getY(i));}
  const materials=(Array.isArray(o.material)?o.material:[o.material]).map(original=>{if(!(original instanceof THREE.MeshStandardMaterial))return original;const m=original.clone();const compile=original.onBeforeCompile,baseKey=original.customProgramCacheKey();
   m.onBeforeCompile=(shader,renderer)=>{compile.call(m,shader,renderer);shader.uniforms.forgeArmor=uniforms;
    shader.vertexShader='varying vec3 forgePosition;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nforgePosition=vec3(position.x,(position.y-(${min.toFixed(8)}))/${Math.max(.001,max-min).toFixed(8)},position.z);`);
    shader.fragmentShader='varying vec3 forgePosition;uniform vec3 forgeArmor;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
     float lum=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
     float hi=max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b));float lo=min(diffuseColor.r,min(diffuseColor.g,diffuseColor.b));
     float metal=1.-smoothstep(.20,.38,(hi-lo)/max(.01,hi));
     float cloth=step(diffuseColor.g*2.1,diffuseColor.r)*step(diffuseColor.b*2.1,diffuseColor.r);
     float front=step(-.012,forgePosition.z);
     float amount=forgePosition.y<.23?forgeArmor.z:forgePosition.y>.89?forgeArmor.y*metal*front*step(diffuseColor.r-.015,diffuseColor.b):forgePosition.y>.29&&forgePosition.y<.81?forgeArmor.x*max(cloth,metal*front):0.;
     vec3 ember=mix(vec3(.72,.035,.008),vec3(1.,.43,.045),metal);
     diffuseColor.rgb=mix(diffuseColor.rgb,ember*max(.16,lum*2.0),min(.85,amount));
    `);
   };m.customProgramCacheKey=()=>baseKey+'muspelheim-tempered-armor-v1:'+min+':'+max;return m;});o.material=Array.isArray(o.material)?materials:materials[0];
 });
 return {update:(look:ArmorAppearance)=>{uniforms.value.set(look.armor?Math.min(.85,.55+look.armor*.01):0,look.helmet?Math.min(.85,.55+look.helmet*.01):0,look.boots?Math.min(.85,.55+look.boots*.01):0);}};
}
export function styleTemperedShield(item:THREE.Object3D,level:number){if(level<=0)return;item.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const array=Array.isArray(o.material),materials=(array?o.material:[o.material]) as THREE.Material[];const next=materials.map(original=>{const m=original.clone();if(m instanceof THREE.MeshStandardMaterial){m.color.lerp(new THREE.Color('#ff8a28'),.6);m.emissive.set('#7c1604');m.emissiveIntensity=.12+Math.min(40,level)*.003;}return m;});o.material=array?next:next[0];});}
