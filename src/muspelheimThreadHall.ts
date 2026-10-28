import * as THREE from 'three';
export const THREAD_HALL={halfWidth:60,back:-85,front:55,height:58,doorHalfWidth:8,exitZ:65};
export const THREAD_WELL_ASSET='Good_Ol_Well_Optimized.glb';
export const THREAD_KEEPER_ASSET='Muspelheim_Stationary_Necromancer.glb';
export const THREAD_WELL_POSITION={x:0,z:-25};
export const THREAD_KEEPER_POSITION={x:22,z:-8};
export const THREAD_WELL_CREDIT={title:"Good Ol' Well",author:'mikelkel2',url:'https://sketchfab.com/3d-models/good-ol-well-9eadcb31e4b445c8978e791fcce548fe'};
export const THREAD_KEEPER_CREDIT={title:'Dark Necromancer - Corrupted Staff & Skulls',author:'Pigcraft',url:'https://sketchfab.com/3d-models/dark-necromancer-corrupted-staff-skulls-10c3bef4113b4e128ad41c9fdcab74e3'};
export const THREAD_COLORS=['#f2faff','#ee182d','#050407'] as const;
const hashGLSL=`float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}float flow(vec2 p){return noise(p)*.57+noise(p*2.03)*.28+noise(p*4.01)*.15;}`;
/** Three crossed sheets per flame: rising, rippling threads with a dark opaque core. */
export function createThreadFlames(openingY:number){
 const root=new THREE.Group();root.name='Белая, красная и чёрная огненные нити';
 const time={value:0},materials:THREE.ShaderMaterial[]=[];
 for(let i=0;i<3;i++){
  const group=new THREE.Group();group.name=['Белое пламя','Красное пламя','Чёрное пламя'][i];group.position.set((i-1)*1.1,openingY,-1.5);root.add(group);
  const material=new THREE.ShaderMaterial({uniforms:{time,color:{value:new THREE.Color(THREAD_COLORS[i])},dark:{value:i===2?1:0},phase:{value:i*2.17}},transparent:true,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,
   vertexShader:`uniform float time,phase;varying vec2 flameUV;void main(){flameUV=uv;vec3 p=position;float h=uv.y;p.x+=sin(h*8.-time*1.8+phase)*h*.38+sin(h*17.-time*2.4)*h*.12;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
   fragmentShader:`uniform float time,dark,phase;uniform vec3 color;varying vec2 flameUV;${hashGLSL}void main(){vec2 uv=flameUV;float n=flow(vec2(uv.x*4.+phase,uv.y*8.-time*1.35));float width=mix(.48,.025,pow(uv.y,.8))*(.7+n*.55);float distance=abs(uv.x-.5+sin(uv.y*13.-time*2.+phase)*uv.y*.06);float shape=1.-smoothstep(width*.62,width,distance);float tip=1.-smoothstep(.7,1.,uv.y+(n-.5)*.22);float alpha=shape*tip*smoothstep(0.,.045,uv.y);if(alpha<.025)discard;float ripple=pow(.5+.5*sin(uv.y*46.-time*6.+n*5.),7.);float edge=smoothstep(width*.35,width*.85,distance);vec3 lightColor=mix(color*.75,vec3(1.),(1.-uv.y)*.2)+color*(ripple*.3+.15);vec3 soot=mix(vec3(.004,.003,.007),vec3(.56,.49,.65),edge*.8+ripple*.12);vec3 result=mix(lightColor,soot,dark);gl_FragColor=vec4(result,alpha*mix(.78,.97,dark));}`});materials.push(material);
  const geometry=new THREE.PlaneGeometry(1.2,11,4,20);geometry.translate(0,5.5,0);
  for(let j=0;j<3;j++){const sheet=new THREE.Mesh(geometry,material);sheet.rotation.y=j*Math.PI/3;group.add(sheet);}
  const glow=new THREE.PointLight(i===0?'#cfedff':i===1?'#ff2346':'#a39bb8',i===2?20:75,42,1.5);glow.position.set(0,3.5,0);group.add(glow);
 }
 return {root,materials,update(dt:number){time.value+=Math.max(0,dt);}};
}
export function threadHallWalkable(x:number,z:number,radius=2.3){
 const h=THREAD_HALL;
 if(z>h.front-radius){if(Math.abs(x)>h.doorHalfWidth-radius||z>h.exitZ+4)return false;}else if(Math.abs(x)>h.halfWidth-radius||z<h.back+radius)return false;
 if(Math.hypot(x-THREAD_WELL_POSITION.x,z-THREAD_WELL_POSITION.z)<11+radius)return false;
 if(Math.hypot(x-THREAD_KEEPER_POSITION.x,z-THREAD_KEEPER_POSITION.z)<2.8+radius)return false;
 for(const side of [-1,1])for(const zz of [-61,-10,35])if(Math.abs(x-side*45)<4+radius&&Math.abs(z-zz)<4+radius)return false;
 return true;
}
export function threadHallNearKeeper(x:number,z:number){return Math.hypot(x-THREAD_KEEPER_POSITION.x,z-THREAD_KEEPER_POSITION.z)<17;}
export function threadHallExit(x:number,z:number){return Math.abs(x)<5.7&&z>THREAD_HALL.exitZ;}
export function createThreadHall(well:THREE.Object3D,keeper:THREE.Object3D,assetBase:string){
 const root=new THREE.Group();root.name='Зал Хранителя трёх нитей';
 const texture=new THREE.TextureLoader().load(assetBase+'muspelheim-basalt-wall.jpg');texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(4,3);
 const stone=new THREE.MeshStandardMaterial({map:texture,color:'#6e6773',roughness:.92}),floorMaterial=new THREE.MeshStandardMaterial({color:'#8b8490',roughness:.85});
 floorMaterial.onBeforeCompile=shader=>{shader.vertexShader='varying vec3 hallPoint;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nhallPoint=position;');shader.fragmentShader='varying vec3 hallPoint;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 vec2 tile=abs(fract(hallPoint.xz/8.)-.5);float joint=smoothstep(.465,.49,max(tile.x,tile.y));diffuseColor.rgb*=mix(.9, .35,joint);diffuseColor.rgb*=.91+.09*sin(dot(floor(hallPoint.xz/8.),vec2(13.7,6.3)));`);};floorMaterial.customProgramCacheKey=()=> 'thread-hall-floor-v1';
 const box=(w:number,h:number,d:number,x:number,y:number,z:number,material=stone)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.receiveShadow=true;root.add(mesh);return mesh;};
 box(120,2,140,0,-1,-15,floorMaterial);box(16,2,18,0,-1,64,floorMaterial);
 box(3,58,143,-61.5,29,-15);box(3,58,143,61.5,29,-15);box(120,58,3,0,29,-86.5);
 for(const side of [-1,1]){box(52,58,3,side*34,29,56.5);box(3,28,18,side*9.5,14,64);}
 box(16,30,3,0,43,56.5);box(120,2,140,0,59,-15);box(16,2,18,0,29,64);
 const rim=new THREE.Mesh(new THREE.TorusGeometry(15,.2,6,96),new THREE.MeshBasicMaterial({color:'#958aa5'}));rim.rotation.x=-Math.PI/2;rim.position.set(0,.035,-25);root.add(rim);
 for(const side of [-1,1])for(const z of [-61,-10,35]){
  const column=new THREE.Mesh(new THREE.CylinderGeometry(2.8,3.8,55,12),stone);column.position.set(side*45,27.5,z);root.add(column);box(8,2,8,side*45,1,z);box(8,2,8,side*45,54,z);
  const lamp=new THREE.Mesh(new THREE.OctahedronGeometry(.8),new THREE.MeshBasicMaterial({color:side<0?'#9ad5e8':'#c87c92'}));lamp.position.set(side*45,22,z);root.add(lamp);
 }
 // Exact imported well from Niflheim; retain its stone, wooden roof and original textures.
 well.updateWorldMatrix(true,true);let bounds=new THREE.Box3().setFromObject(well);const scale=28/(bounds.max.y-bounds.min.y),center=bounds.getCenter(new THREE.Vector3());
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(well);const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);fit.position.set(THREAD_WELL_POSITION.x,0,THREAD_WELL_POSITION.z);root.add(fit);
 well.traverse(o=>{if(o instanceof THREE.Mesh)o.receiveShadow=true;});
 const openingY=28/6.67*2.05,flames=createThreadFlames(openingY);flames.root.position.set(0,0,THREAD_WELL_POSITION.z);root.add(flames.root);
 const water=new THREE.Mesh(new THREE.CircleGeometry(.83*28/6.67,48),new THREE.MeshStandardMaterial({color:'#514b81',emissive:'#3f376a',emissiveIntensity:.7,roughness:.25,metalness:.1,side:THREE.DoubleSide}));water.rotation.x=-Math.PI/2;water.position.set(0,openingY-.12,-25);root.add(water);
 // Same blue/rose inner glow as the Niflheim well, now supplemented by the three flames.
 const glowPixels=new Uint8Array(64*64*4);for(let y=0;y<64;y++)for(let x=0;x<64;x++){const a=Math.pow(Math.max(0,1-Math.hypot(x-31.5,y-31.5)/32),2),k=(y*64+x)*4;glowPixels.set([255,255,255,Math.round(a*255)],k);}const glowMap=new THREE.DataTexture(glowPixels,64,64);glowMap.needsUpdate=true;
 for(const [i,color] of ['#277eff','#b71959'].entries()){const halo=new THREE.Sprite(new THREE.SpriteMaterial({map:glowMap,color,transparent:true,opacity:.32,depthWrite:false,blending:THREE.AdditiveBlending}));halo.name='Свечение колодца Нифльхейма';halo.position.set(i?1.3:-1.3,openingY+3,-28);halo.scale.set(9,15,1);root.add(halo);}
 const innerLights=['#277eff','#b71959'].map((color,i)=>{const light=new THREE.PointLight(color,32,25,1.5);light.position.set(i?1.3:-1.3,openingY+1,-25);root.add(light);return light;});
 keeper.updateWorldMatrix(true,true);bounds=new THREE.Box3().setFromObject(keeper);const keeperScale=18/(bounds.max.y-bounds.min.y),keeperCenter=bounds.getCenter(new THREE.Vector3());keeper.position.set(-keeperCenter.x,-bounds.min.y,-keeperCenter.z);
 const keeperFit=new THREE.Group();keeperFit.scale.setScalar(keeperScale);keeperFit.add(keeper);const keeperRoot=new THREE.Group();keeperRoot.position.set(THREAD_KEEPER_POSITION.x,0,THREAD_KEEPER_POSITION.z);keeperRoot.add(keeperFit);root.add(keeperRoot);keeper.traverse(o=>{if(o instanceof THREE.SkinnedMesh)o.frustumCulled=false;});
 // A visible doorway with pale exterior light marks the same route back.
 const outside=new THREE.Mesh(new THREE.PlaneGeometry(16,28),new THREE.MeshBasicMaterial({color:'#d5a072',transparent:true,opacity:.2,side:THREE.DoubleSide}));outside.position.set(0,14,69);root.add(outside);
 let time=0;return {root,well:fit,keeper:keeperRoot,flames,openingY,update(dt:number,hero:{x:number;z:number}){time+=Math.max(0,dt);flames.update(dt);innerLights.forEach((light,i)=>light.intensity=29+Math.sin(time*1.7+i*2)*5);keeperFit.scale.y=keeperScale*(1+Math.sin(time*1.2)*.006);if(threadHallNearKeeper(hero.x,hero.z))keeperRoot.rotation.y=Math.atan2(hero.x-keeperRoot.position.x,hero.z-keeperRoot.position.z);},dispose(){const skeletons=new Set<THREE.Skeleton>();keeper.traverse(o=>{if(o instanceof THREE.SkinnedMesh)skeletons.add(o.skeleton);});skeletons.forEach(s=>s.dispose());}};
}
