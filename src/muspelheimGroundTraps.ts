import * as THREE from 'three';
type Point={x:number;y:number;z:number};
export type GroundTrap=Point&{kind:'fire'|'sand';radius:number;age:number;cooldown:number;damageTime:number};
export const GROUND_TRAP_COUNTS={fire:15,sand:15};
/** Fixed, spaced locations; placement adapts only to geometry, never to the player. */
export function groundTrapLayout(floor:(x:number,z:number)=>number|null,allowed:(x:number,y:number,z:number)=>boolean){
 const traps:GroundTrap[]=[];
 const place=(x:number,z:number,kind:GroundTrap['kind'])=>{const y=floor(x,z);if(y==null||!Number.isFinite(y)||!allowed(x,y,z)||traps.some(t=>Math.hypot(t.x-x,t.z-z)<24))return false;
  for(let i=0;i<8;i++){const a=i*Math.PI/4,px=x+Math.cos(a)*6,pz=z+Math.sin(a)*6,py=floor(px,pz);if(py==null||Math.abs(py-y)>1.2||!allowed(px,py,pz))return false;}
  traps.push({x,y,z,kind,radius:5,age:-1,cooldown:0,damageTime:0});return true;};
 for(let i=0;i<30;i++){const kind=i%2?'sand':'fire',ax=-430+(i%6)*172,az=70-Math.floor(i/6)*110;let placed=false;
  for(let r=0;r<=120&&!placed;r+=12)for(let k=0;k<(r?16:1)&&!placed;k++){const a=k*Math.PI/8;placed=place(ax+Math.cos(a)*r,az+Math.sin(a)*r,kind);}
  if(!placed)for(let z=80;z>=-420&&!placed;z-=18)for(let x=-480;x<=480&&!placed;x+=18)placed=place(x,z,kind);
 }
 return traps;
}
export function createGroundTraps(traps:GroundTrap[],floor:(x:number,z:number)=>number|null){
 const root=new THREE.Group();root.name='Скрытые огненные и песчаные ловушки';let capture:{trap:GroundTrap;time:number;x:number;z:number;y:number}|null=null;
 const vertex='varying vec2 uvTrap;void main(){uvTrap=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
 const views=traps.map(t=>{const group=new THREE.Group();group.visible=false;group.position.set(t.x,t.y+.12,t.z);root.add(group);
  const surface=new THREE.ShaderMaterial({transparent:true,depthWrite:true,side:THREE.DoubleSide,uniforms:{time:{value:0},sand:{value:t.kind==='sand'?1:0}},vertexShader:vertex,fragmentShader:'varying vec2 uvTrap;uniform float time;uniform float sand;void main(){vec2 p=(uvTrap-.5)*2.;float r=length(p);float a=atan(p.y,p.x);float grain=fract(sin(dot(p,vec2(127.1,311.7))+floor(time*16.))*43758.54);float swirl=.5+.5*sin(a*8.+r*25.-time*9.);vec3 fire=mix(vec3(.55,.003,0.),vec3(1.,.12,.008),grain*.4+.3+.3*sin(time*8.+r*8.));vec3 dust=mix(vec3(.018,.008,.003),vec3(.48,.29,.1),smoothstep(.1,.85,r)*(.4+.6*swirl));gl_FragColor=vec4(mix(fire,dust,sand),1.-smoothstep(.85,1.,r));}' });
  const diskGeometry=new THREE.CircleGeometry(5.7,48);diskGeometry.rotateX(-Math.PI/2);const positions=diskGeometry.getAttribute('position');for(let i=0;i<positions.count;i++){const x=positions.getX(i),z=positions.getZ(i);positions.setY(i,(floor(t.x+x,t.z+z)??t.y)-t.y);}diskGeometry.computeVertexNormals();group.add(new THREE.Mesh(diskGeometry,surface));
  const flame=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:{time:{value:0}},vertexShader:vertex,fragmentShader:'varying vec2 uvTrap;uniform float time;void main(){float y=uvTrap.y;float bend=sin(y*11.-time*9.)*.11+sin(y*25.+time*7.)*.04;float width=(1.-y)*(.36+.12*sin(time*13.+y*16.));float f=1.-smoothstep(width*.4,width,abs(uvTrap.x-.5+bend));float alpha=f*(1.-smoothstep(.65,1.,y));if(alpha<.025)discard;gl_FragColor=vec4(mix(vec3(1.,.85,.22),vec3(1.,.035,0.),y),alpha*.85);}' });
  if(t.kind==='fire')for(let j=0;j<4;j++){const plane=new THREE.Mesh(new THREE.PlaneGeometry(10,15),flame);plane.position.y=7.5;plane.rotation.y=j*Math.PI/4;group.add(plane);}
  else{const points=Array.from({length:80},(_,i)=>{const a=i*2.4,r=2+(i%10)*.35;return [Math.cos(a)*r,(i%7)*.12+.08,Math.sin(a)*r];}).flat(),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));const dust=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#b89456',size:.3,transparent:true,opacity:.7,depthWrite:false}));group.add(dust);}
  return {group,surface,flame};});
 return {root,traps,get captured(){return capture;},reset(){capture=null;traps.forEach((t,i)=>{t.age=-1;views[i].group.visible=false;});},
  update(dt:number,hero:Point){const event={fireHits:0,caught:false,swallowed:false};if(dt<=0)return event;
   for(let i=0;i<traps.length;i++){const t=traps[i],v=views[i];t.cooldown=Math.max(0,t.cooldown-dt);const inside=Math.hypot(hero.x-t.x,hero.z-t.z)<t.radius&&Math.abs(hero.y-t.y)<2.5;
    if(t.age<0&&t.cooldown===0&&inside&&!capture){t.age=0;t.damageTime=0;t.cooldown=t.kind==='sand'?90:35;v.group.visible=true;if(t.kind==='sand'){capture={trap:t,time:0,x:hero.x,z:hero.z,y:t.y};event.caught=true;}}
    if(t.age>=0){t.age+=dt;v.surface.uniforms.time.value=t.age;v.flame.uniforms.time.value=t.age;v.group.rotation.y=t.kind==='sand'?t.age*.35:0;
     if(t.kind==='fire'){t.damageTime-=dt;if(inside&&t.damageTime<=0){event.fireHits++;t.damageTime=.45;}if(t.age>=7){t.age=-1;v.group.visible=false;}}
     else if(!capture&&t.age>3){t.age=-1;v.group.visible=false;}
    }
   }
   if(capture){capture.time+=dt;if(capture.time>=2.8){event.swallowed=true;capture=null;}}
   return event;
  },
  sinkPose(){if(!capture)return null;const t=Math.min(1,capture.time/2.8);return {x:THREE.MathUtils.lerp(capture.x,capture.trap.x,t*.7),z:THREE.MathUtils.lerp(capture.z,capture.trap.z,t*.7),y:capture.y-24*t*t,tilt:Math.sin(t*Math.PI)*.22};}
 };
}
