import * as THREE from 'three';
import {createLinkedThreadFlames} from './muspelheimThreadHall';
import {ORC_WARCHIEF_ASSET,ORC_WARCHIEF_CREDIT} from './muspelheimOrcWarchief';
export const ASH_LORD_ASSET=ORC_WARCHIEF_ASSET;
export const ASH_LORD_CREDIT=ORC_WARCHIEF_CREDIT;
export const ASH_SOURCE={x:-14,z:-32,radius:7};
export const ASH_LORD={x:13,z:-32,radius:5,height:24};
export function ashLordWalkable(x:number,z:number,radius=2.3){
 if(z>55-radius){if(Math.abs(x)>8-radius||z>69)return false;}else if(Math.abs(x)>52-radius||z<-80+radius)return false;
 if(Math.hypot(x-ASH_SOURCE.x,z-ASH_SOURCE.z)<ASH_SOURCE.radius+radius||Math.hypot(x-ASH_LORD.x,z-ASH_LORD.z)<ASH_LORD.radius+radius)return false;
 for(const xx of [-41,41])for(const zz of [-58,-8,34])if(Math.abs(x-xx)<4+radius&&Math.abs(z-zz)<4+radius)return false;
 return true;
}
export function ashLordNear(x:number,z:number){return Math.hypot(x-ASH_LORD.x,z-ASH_LORD.z)<20;}
export function ashLordExit(x:number,z:number){return Math.abs(x)<5.7&&z>65;}
/** A peaceful preview of the commander's hall; no combat or quest progression yet. */
export function createAshLordHall(lord:THREE.Object3D,clips:THREE.AnimationClip[],assetBase:string){
 const root=new THREE.Group();root.name='Туманный зал Владыки Пепельного легиона';
 const texture=new THREE.TextureLoader().load(assetBase+'muspelheim-basalt-wall.jpg');texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(5,3);
 const stone=new THREE.MeshStandardMaterial({color:'#41474c',map:texture,roughness:.96}),floor=new THREE.MeshStandardMaterial({color:'#383d43',map:texture,roughness:.86});
 const box=(w:number,h:number,d:number,x:number,y:number,z:number,m=stone)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);root.add(o);return o;};
 box(104,2,135,0,-1,-12.5,floor);box(16,2,18,0,-1,64,floor);box(3,54,138,-53.5,27,-12.5);box(3,54,138,53.5,27,-12.5);box(104,54,3,0,27,-81.5);box(104,2,135,0,55,-12.5);
 for(const side of [-1,1]){box(44,54,3,side*30,27,56.5);box(3,28,18,side*9.5,14,64);}box(16,26,3,0,41,56.5);box(16,2,18,0,29,64);
 for(const x of [-41,41])for(const z of [-58,-8,34]){box(8,2,8,x,1,z);box(6,50,6,x,27,z);box(8,2,8,x,53,z);const lamp=new THREE.Mesh(new THREE.OctahedronGeometry(.7),new THREE.MeshBasicMaterial({color:'#9eb7c9'}));lamp.position.set(x,18,z);root.add(lamp);}
 const exit=new THREE.Mesh(new THREE.PlaneGeometry(16,28),new THREE.MeshBasicMaterial({color:'#b9c6d2',transparent:true,opacity:.23,side:THREE.DoubleSide}));exit.position.set(0,14,69);root.add(exit);const exitLight=new THREE.PointLight('#9fb8cb',95,42,1.4);exitLight.position.set(0,15,49);root.add(exitLight);
 // Fit a separate crowned commander without mutating any outdoor model.
 lord.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(lord),centre=bounds.getCenter(new THREE.Vector3()),scale=ASH_LORD.height/(bounds.max.y-bounds.min.y);
 lord.position.set(-centre.x,-bounds.min.y,-centre.z);const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(lord);const actor=new THREE.Group();actor.position.set(ASH_LORD.x,0,ASH_LORD.z);actor.add(fit);root.add(actor);
 lord.traverse(o=>{if(o instanceof THREE.SkinnedMesh)o.frustumCulled=false;if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.color.multiply(new THREE.Color('#8d8b8d'));m.roughness=.88;}});
 const mixer=new THREE.AnimationMixer(lord),idle=clips.find(c=>/idle|standing|breath/i.test(c.name));if(idle)mixer.clipAction(idle).play();
 // House masonry, real rippling water and a veined volcanic sphere use separate materials.
 const loadTexture=(file:string,x=1,y=1)=>{const t=new THREE.TextureLoader().load(assetBase+file);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(x,y);return t;};
 const brickMap=loadTexture('models/T_Elder_SandBrick.webp',4,1),wellStone=new THREE.MeshStandardMaterial({map:brickMap,color:'#77777d',roughness:.9});
 const basin=new THREE.Mesh(new THREE.CylinderGeometry(6.6,7,2.8,64,1,true),wellStone);basin.position.set(ASH_SOURCE.x,1.4,ASH_SOURCE.z);root.add(basin);
 const inner=new THREE.Mesh(new THREE.CylinderGeometry(5.7,5.7,2.8,64,1,true),new THREE.MeshStandardMaterial({map:brickMap,color:'#62626a',roughness:.9,side:THREE.BackSide}));inner.position.copy(basin.position);root.add(inner);
 const lip=new THREE.Mesh(new THREE.RingGeometry(5.7,6.6,64),wellStone);lip.rotation.x=-Math.PI/2;lip.position.set(ASH_SOURCE.x,2.81,ASH_SOURCE.z);root.add(lip);
 const waterMap=loadTexture('models/T_Mimir_Water.jpg',1.5,1.5);waterMap.center.set(.5,.5);
 const waterMaterial=new THREE.MeshStandardMaterial({map:waterMap,bumpMap:waterMap,bumpScale:.16,color:'#d41724',emissive:'#690309',emissiveIntensity:.28,roughness:.23,metalness:.12});
 waterMaterial.customProgramCacheKey=()=> 'ash-source-red-mimir-water-v1';
 waterMaterial.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
 vec4 waterSample=texture2D(map,vMapUv);float waterLuma=dot(waterSample.rgb,vec3(.2126,.7152,.0722));diffuseColor.rgb*=.24+waterLuma*2.2;
 #endif`);};
 const pool=new THREE.Mesh(new THREE.CircleGeometry(5.7,64),waterMaterial);pool.rotation.x=-Math.PI/2;pool.position.set(ASH_SOURCE.x,2.57,ASH_SOURCE.z);root.add(pool);
 const lavaMap=loadTexture('muspelheim-cooled-lava.jpg',2,1);
 const molten=new THREE.MeshStandardMaterial({map:lavaMap,bumpMap:lavaMap,bumpScale:.12,color:'#b40913',emissive:'#c9111c',emissiveIntensity:.9,roughness:.55});
 molten.customProgramCacheKey=()=> 'ash-veined-red-sphere-v1';
 molten.onBeforeCompile=shader=>{
 shader.vertexShader='varying vec3 ashPoint;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nashPoint=position;');
 shader.fragmentShader=`varying vec3 ashPoint;
 vec3 ashHash(vec3 p){return fract(sin(vec3(dot(p,vec3(127.1,311.7,74.7)),dot(p,vec3(269.5,183.3,246.1)),dot(p,vec3(113.5,271.9,124.6))))*43758.5453);}
 float ashVeins(vec3 p){vec3 cell=floor(p),f=fract(p);float a=10.,b=10.;for(int x=-1;x<=1;x++)for(int y=-1;y<=1;y++)for(int z=-1;z<=1;z++){vec3 n=vec3(float(x),float(y),float(z));float d=length(n+ashHash(cell+n)-f);if(d<a){b=a;a=d;}else if(d<b)b=d;}return smoothstep(.025,.095,b-a);}
 `+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 float ashVeinMask=ashVeins(ashPoint*1.25+sin(ashPoint.zxy*1.8)*.15);float ashRelief=clamp(dot(diffuseColor.rgb,vec3(.333)),.01,1.);diffuseColor.rgb=mix(vec3(.003,.002,.004),vec3(.58,.008,.015)*(.58+ashRelief*4.),ashVeinMask);`);
 shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance*=ashVeinMask*(.38+ashRelief*2.);');};
 const core=new THREE.Mesh(new THREE.SphereGeometry(2.7,48,32),molten);core.position.set(ASH_SOURCE.x,8,ASH_SOURCE.z);root.add(core);
 const rings:THREE.Mesh[]=[];for(let i=0;i<3;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(3.5+i*.6,.2,10,96),new THREE.MeshBasicMaterial({color:i===1?'#ffc25c':i===0?'#ff3624':'#f92355',toneMapped:false}));ring.position.copy(core.position);ring.rotation.set(i*.8,0,.6+i);root.add(ring);rings.push(ring);}
 const glow=new THREE.PointLight('#ff5a20',480,70,1.5);glow.position.copy(core.position);root.add(glow);const chestLight=new THREE.PointLight('#ff3e18',180,32,1.4);chestLight.position.set(ASH_LORD.x,15,ASH_LORD.z+2);root.add(chestLight);
 // Identical white/red/black threads to the keeper's well, now linking the water to the lord.
 const threads=createLinkedThreadFlames(new THREE.Vector3(ASH_SOURCE.x,2.9,ASH_SOURCE.z),new THREE.Vector3(ASH_LORD.x,15,ASH_LORD.z+1));root.add(threads.root);
 const mistTime={value:0};const mistMaterial=new THREE.ShaderMaterial({uniforms:{time:mistTime},transparent:true,depthWrite:false,side:THREE.DoubleSide,
 vertexShader:'varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
 fragmentShader:`uniform float time;varying vec3 p;void main(){vec2 q=p.xy;float n=sin(q.x*.11+time*.14+sin(q.y*.09))*sin(q.y*.12-time*.12);float veil=.08+.055*n;float edge=smoothstep(0.,12.,min(49.-abs(q.x),63.-abs(q.y)));gl_FragColor=vec4(.44,.48,.52,veil*edge);}`});
 for(let i=0;i<4;i++){const veil=new THREE.Mesh(new THREE.PlaneGeometry(98,126,1,1),mistMaterial);veil.rotation.x=-Math.PI/2;veil.position.set(0,1+i*1.1,-12);veil.name='Движущийся низкий туман';root.add(veil);}
 let time=0;const update=(dt:number,_hero:{x:number;z:number})=>{if(dt<=0)return;time+=dt;mistTime.value=time;mixer.update(dt);if(!idle)fit.scale.y=scale*(1+Math.sin(time*1.2)*.006);core.position.y=8+Math.sin(time*1.3)*.35;core.rotation.y=time*.2;rings.forEach((r,i)=>{r.rotation.y=time*(.22+i*.07);r.rotation.z=.6+i+time*.16;r.position.y=core.position.y;});glow.intensity=480*(.9+.12*Math.sin(time*2));chestLight.intensity=180*(.9+.15*Math.sin(time*2-1));molten.emissiveIntensity=.9+Math.sin(time*2)*.12;waterMap.offset.y=(time*.035)%1;waterMap.rotation=time*.025;threads.update(dt);
 };update(.001,{x:0,z:43});
 return {root,lord:actor,source:basin,pool,core,rings,threads,mistTime,update,dispose(){mixer.stopAllAction();mixer.uncacheRoot(lord);const skeletons=new Set<THREE.Skeleton>();lord.traverse(o=>{if(o instanceof THREE.SkinnedMesh)skeletons.add(o.skeleton);});skeletons.forEach(s=>s.dispose());}};
}
