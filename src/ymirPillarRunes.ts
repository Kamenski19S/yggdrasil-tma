import * as THREE from 'three';

/** Replace the pillar's painted ornament with stone and recessed, luminous rune channels. */
export function createYmirPillarRunes(pillar:THREE.Object3D){
 pillar.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(pillar),center=bounds.getCenter(new THREE.Vector3()),ray=new THREE.Raycaster();
 const root=new THREE.Group();root.name='Резные руны в камне Имира';
 const clock={value:0},pulse={value:1},materials=new Set<THREE.MeshStandardMaterial>(),oldTextures=new Set<THREE.Texture>();
 const carving=`
 varying vec3 carvedWorld;
 uniform float runeClock,runePulse;
 float channelSegment(vec2 p,vec2 a,vec2 b){vec2 scale=vec2(4.,8.);p*=scale;a*=scale;b*=scale;vec2 d=b-a;return length(p-a-d*clamp(dot(p-a,d)/dot(d,d),0.,1.));}
 float runeChannel(vec3 world){
  vec3 q=world-vec3(${center.x},${bounds.min.y},${center.z});
  if(q.x<3.)return 100.;
  vec2 p=vec2((-q.z+2.6)/4.+.5,(16.5-q.y)/8.);
  float d=channelSegment(p,vec2(.2,.12),vec2(.2,.88));
  d=min(d,channelSegment(p,vec2(.2,.12),vec2(.58,.34)));d=min(d,channelSegment(p,vec2(.58,.34),vec2(.83,.14)));
  d=min(d,channelSegment(p,vec2(.2,.88),vec2(.58,.66)));d=min(d,channelSegment(p,vec2(.58,.66),vec2(.83,.86)));
  p.x=(-q.z-2.6)/4.+.5;
  d=min(d,channelSegment(p,vec2(.22,.1),vec2(.22,.9)));d=min(d,channelSegment(p,vec2(.22,.1),vec2(.8,.38)));d=min(d,channelSegment(p,vec2(.22,.39),vec2(.8,.67)));
  return d;
 }
 `;
 pillar.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  for(const material of Array.isArray(object.material)?object.material:[object.material]){
   if(!(material instanceof THREE.MeshStandardMaterial)||materials.has(material))continue;materials.add(material);
   // The old swirls are baked into these maps. Remove them, rather than covering them with another decal.
   for(const key of ['map','normalMap','bumpMap','roughnessMap','metalnessMap','aoMap','emissiveMap'] as const){const texture=material[key];if(texture)oldTextures.add(texture);material[key]=null;}
   material.color.set('#ded2b9');material.roughness=.88;material.metalness=0;material.emissive.set(0);material.needsUpdate=true;
   material.onBeforeCompile=shader=>{
    shader.uniforms.runeClock=clock;shader.uniforms.runePulse=pulse;
    shader.vertexShader='varying vec3 carvedWorld;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n carvedWorld=(modelMatrix*vec4(position,1.)).xyz;');
    shader.fragmentShader=carving+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
     float grain=sin(carvedWorld.x*9.7+sin(carvedWorld.z*6.3))*sin(carvedWorld.y*13.1+carvedWorld.z*5.7);
     float vein=sin(carvedWorld.y*.9+sin(carvedWorld.z*.6+carvedWorld.x*.45)*1.8);
     diffuseColor.rgb*=.94+.025*grain+.035*vein;
     float channelDistance=runeChannel(carvedWorld);
     float recess=1.-smoothstep(.025,.19,channelDistance);
     diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.105,.065,.022),recess*.88);
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
     float channelDepth=-.24*pow(max(0.,1.-channelDistance/.20),1.35);
     vec3 q0=dFdx(-vViewPosition),q1=dFdy(-vViewPosition);
     vec3 r1=cross(q1,normal),r2=cross(normal,q0);float determinant=dot(q0,r1);
     vec3 surfaceGradient=sign(determinant)*(dFdx(channelDepth)*r1+dFdy(channelDepth)*r2);
     normal=normalize(max(abs(determinant),1e-8)*normal-surfaceGradient);
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
     float goldCore=1.-smoothstep(.018,.078,channelDistance);
     float goldHalo=exp(-channelDistance*channelDistance/.022)*.12;
     // One emission value and phase for both carvings, including after memory release.
     float sameGlow=(.94+.06*sin(runeClock*2.))*runePulse;
     totalEmissiveRadiance+=vec3(1.,.57,.075)*(goldCore*1.25+goldHalo)*sameGlow;
    `);
   };material.customProgramCacheKey=()=> 'ymir-replaced-ornament-recessed-runes-v1';
  }
 });
 oldTextures.forEach(texture=>texture.dispose());
 return {root,materials,
  canStrike(hero:{x:number;y:number;z:number},yaw:number){if(hero.x<center.x||Math.abs(hero.y-bounds.min.y)>7)return false;ray.set(new THREE.Vector3(hero.x,hero.y+9,hero.z),new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw)));const hit=ray.intersectObject(pillar,true)[0];return !!hit&&hit.distance<=13&&!!hit.face&&hit.face.normal.clone().transformDirection(hit.object.matrixWorld).x>.3;},
  strike(){pulse.value=1.25;},update(dt:number,_released:boolean){clock.value+=dt;pulse.value=Math.max(1,pulse.value-dt*.6);},dispose(){},
 };
}
