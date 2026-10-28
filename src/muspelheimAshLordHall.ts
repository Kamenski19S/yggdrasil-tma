import * as THREE from 'three';
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
 // Basalt basin and floating molten heart next to the lord.
 const basin=new THREE.Mesh(new THREE.CylinderGeometry(6.6,7,2.8,32),stone);basin.position.set(ASH_SOURCE.x,1.4,ASH_SOURCE.z);root.add(basin);
 const molten=new THREE.MeshStandardMaterial({color:'#500907',emissive:'#ff3509',emissiveIntensity:2.6,roughness:.38});
 const pool=new THREE.Mesh(new THREE.CircleGeometry(5.7,48),molten);pool.rotation.x=-Math.PI/2;pool.position.set(ASH_SOURCE.x,2.82,ASH_SOURCE.z);root.add(pool);
 const core=new THREE.Mesh(new THREE.IcosahedronGeometry(2.7,2),molten);core.position.set(ASH_SOURCE.x,8,ASH_SOURCE.z);root.add(core);
 const rings:THREE.Mesh[]=[];for(let i=0;i<3;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(3.5+i*.6,.09,6,64),new THREE.MeshBasicMaterial({color:i===1?'#ffb25d':'#ed3916',transparent:true,opacity:.7,blending:THREE.AdditiveBlending,depthWrite:false}));ring.position.copy(core.position);ring.rotation.set(i*.8,0,.6+i);root.add(ring);rings.push(ring);}
 const glow=new THREE.PointLight('#ff5a20',480,70,1.5);glow.position.copy(core.position);root.add(glow);const chestLight=new THREE.PointLight('#ff3e18',180,32,1.4);chestLight.position.set(ASH_LORD.x,15,ASH_LORD.z+2);root.add(chestLight);
 // All stream particles run from the heart into the commander's chest.
 const streamPoint=(t:number,phase=0)=>{const a=new THREE.Vector3(ASH_SOURCE.x,8,ASH_SOURCE.z),b=new THREE.Vector3(ASH_LORD.x,15,ASH_LORD.z+1),p=a.lerp(b,t),envelope=Math.sin(Math.PI*t);p.y+=Math.sin(t*Math.PI*3+phase)*envelope*1.15;p.z+=Math.cos(t*Math.PI*3+phase)*envelope*1.45;return p;};
 const streams:THREE.Line[]=[];for(let j=0;j<3;j++){const points=Array.from({length:65},(_,i)=>streamPoint(i/64,j*2*Math.PI/3));const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:j===0?'#ffcc77':'#ff4622',transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false}));root.add(line);streams.push(line);}
 const count=96,positions=new Float32Array(count*3),sparkGeometry=new THREE.BufferGeometry();sparkGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));const sparks=new THREE.Points(sparkGeometry,new THREE.PointsMaterial({color:'#ffb45b',size:.45,transparent:true,opacity:.9,blending:THREE.AdditiveBlending,depthWrite:false}));sparks.frustumCulled=false;root.add(sparks);
 const mistTime={value:0};const mistMaterial=new THREE.ShaderMaterial({uniforms:{time:mistTime},transparent:true,depthWrite:false,side:THREE.DoubleSide,
 vertexShader:'varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
 fragmentShader:`uniform float time;varying vec3 p;void main(){vec2 q=p.xy;float n=sin(q.x*.11+time*.14+sin(q.y*.09))*sin(q.y*.12-time*.12);float veil=.08+.055*n;float edge=smoothstep(0.,12.,min(49.-abs(q.x),63.-abs(q.y)));gl_FragColor=vec4(.44,.48,.52,veil*edge);}`});
 for(let i=0;i<4;i++){const veil=new THREE.Mesh(new THREE.PlaneGeometry(98,126,1,1),mistMaterial);veil.rotation.x=-Math.PI/2;veil.position.set(0,1+i*1.1,-12);veil.name='Движущийся низкий туман';root.add(veil);}
 let time=0;const update=(dt:number,_hero:{x:number;z:number})=>{if(dt<=0)return;time+=dt;mistTime.value=time;mixer.update(dt);if(!idle)fit.scale.y=scale*(1+Math.sin(time*1.2)*.006);core.position.y=8+Math.sin(time*1.3)*.35;core.rotation.y=time*.2;rings.forEach((r,i)=>{r.rotation.y=time*(.22+i*.07);r.rotation.z=.6+i+time*.16;r.position.y=core.position.y;});glow.intensity=480*(.9+.12*Math.sin(time*2));chestLight.intensity=180*(.9+.15*Math.sin(time*2-1));molten.emissiveIntensity=2.6+Math.sin(time*2)*.4;
 for(let j=0;j<streams.length;j++){const a=streams[j].geometry.getAttribute('position') as THREE.BufferAttribute;for(let i=0;i<65;i++){const p=streamPoint(i/64,j*2*Math.PI/3+time*.7);a.setXYZ(i,p.x,p.y,p.z);}a.needsUpdate=true;}
 for(let i=0;i<count;i++){const t=(i/count+time*.28)%1,p=streamPoint(t,(i%3)*2*Math.PI/3+time*.7);positions.set([p.x,p.y,p.z],i*3);}sparkGeometry.attributes.position.needsUpdate=true;};update(.001,{x:0,z:43});
 return {root,lord:actor,source:basin,streams,sparks,mistTime,update,dispose(){mixer.stopAllAction();mixer.uncacheRoot(lord);const skeletons=new Set<THREE.Skeleton>();lord.traverse(o=>{if(o instanceof THREE.SkinnedMesh)skeletons.add(o.skeleton);});skeletons.forEach(s=>s.dispose());}};
}
