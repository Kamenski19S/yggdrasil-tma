import * as THREE from 'three';

/** Keep the authored ornament; replace only its small upper front section with chiseled rune relief. */
export function createYmirPillarRunes(pillar:THREE.Object3D){
 pillar.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(pillar),center=bounds.getCenter(new THREE.Vector3()),ray=new THREE.Raycaster();
 const root=new THREE.Group();root.name='Резные руны в камне Имира';
 const clock={value:0},pulse={value:1},materials=new Set<THREE.MeshStandardMaterial>();
 const carving=`
 varying vec3 carvedWorld;
 uniform float runeClock,runePulse;
 float patchMask(vec3 world){vec3 q=world-vec3(${center.x},${bounds.min.y},${center.z});return smoothstep(3.,5.,q.x)*(1.-smoothstep(2.6,3.4,abs(q.z)))*(1.-smoothstep(2.65,3.2,abs(q.y-20.5)));}
 float channelSegment(vec2 p,vec2 a,vec2 b){vec2 scale=vec2(2.7,5.6);p*=scale;a*=scale;b*=scale;vec2 delta=b-a;float len=length(delta);vec2 axis=delta/len;float along=dot(p-a,axis),t=clamp(along/len,0.,1.);float across=abs(dot(p-a,vec2(-axis.y,axis.x)));float chiselWidth=.145+.12*pow(abs(t*2.-1.),5.);return max(across-chiselWidth,max(-along,along-len));}
 float runeChannel(vec3 world){
  vec3 q=world-vec3(${center.x},${bounds.min.y},${center.z});
  if(q.x<3.)return 100.;
  vec2 p=vec2((-q.z+1.4)/2.7+.5,(23.3-q.y)/5.6);
  float d=channelSegment(p,vec2(.2,.12),vec2(.2,.88));
  d=min(d,channelSegment(p,vec2(.2,.12),vec2(.58,.34)));d=min(d,channelSegment(p,vec2(.58,.34),vec2(.83,.14)));
  d=min(d,channelSegment(p,vec2(.2,.88),vec2(.58,.66)));d=min(d,channelSegment(p,vec2(.58,.66),vec2(.83,.86)));
  p.x=(-q.z-1.4)/2.7+.5;
  d=min(d,channelSegment(p,vec2(.22,.1),vec2(.22,.9)));d=min(d,channelSegment(p,vec2(.22,.1),vec2(.8,.38)));d=min(d,channelSegment(p,vec2(.22,.39),vec2(.8,.67)));
  return d;
 }
 `;
 pillar.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  for(const material of Array.isArray(object.material)?object.material:[object.material]){
   if(!(material instanceof THREE.MeshStandardMaterial)||materials.has(material))continue;materials.add(material);
   // Preserve every authored texture. Only a small, feathered front patch replaces the ornament.
   material.needsUpdate=true;
   material.onBeforeCompile=shader=>{
    shader.uniforms.runeClock=clock;shader.uniforms.runePulse=pulse;
    shader.vertexShader='varying vec3 carvedWorld;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n carvedWorld=(modelMatrix*vec4(position,1.)).xyz;');
    shader.fragmentShader=carving+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
     float ornamentPatch=patchMask(carvedWorld);
     float channelDistance=runeChannel(carvedWorld);
     vec3 patchStone=diffuse;
     #ifdef USE_MAP
      // Sample undecorated stone from the original atlas, retaining its colour.
      patchStone*=texture2D(map,vec2(.25,.5)).rgb;
     #endif
     float grain=sin(carvedWorld.y*9.1+sin(carvedWorld.z*4.7))*sin(carvedWorld.z*12.3);
     patchStone*=.98+.02*grain;
     diffuseColor.rgb=mix(diffuseColor.rgb,patchStone,ornamentPatch);
     float carvedEdge=exp(-pow((channelDistance-.015)/.055,2.));
     diffuseColor.rgb*=1.-carvedEdge*.32*ornamentPatch;
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`vec3 originalStoneNormal=normal;
     #include <normal_fragment_maps>
     normal=normalize(mix(normal,originalStoneNormal,ornamentPatch));
     float channelDepth=.22*(1.-smoothstep(-.105,.055,channelDistance))*ornamentPatch;
     vec3 q0=dFdx(-vViewPosition),q1=dFdy(-vViewPosition);
     vec3 r1=cross(q1,normal),r2=cross(normal,q0);float determinant=dot(q0,r1);
     vec3 surfaceGradient=sign(determinant)*(dFdx(channelDepth)*r1+dFdy(channelDepth)*r2);
     normal=normalize(max(abs(determinant),1e-8)*normal-surfaceGradient);
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
     float goldCore=1.-smoothstep(-.08,.005,channelDistance);
     float goldHalo=exp(-pow(max(0.,channelDistance)/.10,2.))*.035;
     // One emission value and phase for both carvings, including after memory release.
     float sameGlow=(.94+.06*sin(runeClock*2.))*runePulse;
     totalEmissiveRadiance*=1.-ornamentPatch;
     totalEmissiveRadiance+=vec3(1.,.61,.13)*(goldCore*.30+goldHalo)*sameGlow*ornamentPatch;
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\n roughnessFactor=mix(roughnessFactor,.85,ornamentPatch);');
    const ao=THREE.ShaderChunk.aomap_fragment.replace(/(float ambientOcclusion = )([^;]+);/,'$1mix($2,1.,ornamentPatch);');
    shader.fragmentShader=shader.fragmentShader.replace('#include <aomap_fragment>',ao);
   };material.customProgramCacheKey=()=> 'ymir-local-ornament-chiseled-relief-v2';
  }
 });
 return {root,materials,
  canStrike(hero:{x:number;y:number;z:number},yaw:number){if(hero.x<center.x||Math.abs(hero.y-bounds.min.y)>7)return false;ray.set(new THREE.Vector3(hero.x,hero.y+9,hero.z),new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw)));const hit=ray.intersectObject(pillar,true)[0];return !!hit&&hit.distance<=13&&!!hit.face&&hit.face.normal.clone().transformDirection(hit.object.matrixWorld).x>.3;},
  strike(){pulse.value=1.25;},update(dt:number,_released:boolean){clock.value+=dt;pulse.value=Math.max(1,pulse.value-dt*.6);},dispose(){},
 };
}
