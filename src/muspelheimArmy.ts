import * as THREE from 'three';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {createShadowAssassin} from './muspelheimShadowAssassin';
import {SHADOW_ASSASSIN_POSITION} from './muspelheimShadowAssassin';
import {DARK_ELF_POSITION} from './muspelheimDarkElf';
import {roadLines} from './muspelheimRoads';
import {clampMuspelheimPosition} from './muspelheimTerrain';
export const FEMALE_ASSASSIN_CREDIT={title:'Fantasy female assassin',author:'FrandProductions',url:'https://sketchfab.com/3d-models/fantasy-female-assassin-c52cbc2903ae4658aa465dd7078d82b9'};
export const ARMY_ASSETS=['Muspelheim_Female_Assassin.glb','Muspelheim_Army_Elf.glb','Muspelheim_Army_Shadow.glb'] as const;
export const ARMY_RESPAWN={field:15*60*1000,camp:5*60*60*1000};
type Point={x:number;y:number;z:number};
type Template={scene:THREE.Object3D;animations:THREE.AnimationClip[]};
const distance=(a:Point,b:Point)=>Math.hypot(a.x-b.x,a.z-b.z);
/** Ground graph uses real floors and solid obstacles, including open fortress gates. */
export function createArmyNavigation(floor:(x:number,z:number,y:number)=>number|null,blocked:(x:number,z:number,y:number)=>boolean){
 const nodes=new Map<string,Point>(),step=8,key=(x:number,z:number)=>`${x},${z}`;
 for(let x=-512;x<=512;x+=step)for(let z=-448;z<=104;z+=step){const c=clampMuspelheimPosition(x,z);if(c.x!==x||c.z!==z)continue;const y=floor(x,z,0);if(y==null||blocked(x,z,y))continue;nodes.set(key(x,z),{x,y,z});}
 const edges=new Map<Point,Point[]>();for(const p of nodes.values())edges.set(p,[]);
 for(const p of nodes.values())for(const [dx,dz] of [[step,0],[0,step]]){const q=nodes.get(key(p.x+dx,p.z+dz));if(!q||Math.abs(q.y-p.y)>4)continue;let clear=true;for(let i=1;i<4;i++){const t=i/4,x=p.x+dx*t,z=p.z+dz*t,y=THREE.MathUtils.lerp(p.y,q.y,t);if(blocked(x,z,y)){clear=false;break;}}if(clear){edges.get(p)!.push(q);edges.get(q)!.push(p);}}

 const nearest=(to:Point,pool:Iterable<Point>=nodes.values())=>{let best:Point|undefined,d=Infinity;for(const p of pool){const n=distance(p,to)+Math.abs(p.y-to.y)*2;if(n<d){best=p;d=n;}}return best;};
 const start=nearest({x:240,y:0,z:-100});if(!start)throw Error('Army ground is unavailable');const connected=new Set<Point>([start]),queue=[start];for(let i=0;i<queue.length;i++)for(const p of edges.get(queue[i])??[])if(!connected.has(p)){connected.add(p);queue.push(p);}
 const route=(from:Point,to:Point)=>{const a=nearest(from,connected),b=nearest(to,connected);if(!a||!b)return [];const open=new Set([a]),cost=new Map([[a,0]]),parent=new Map<Point,Point>();let found=false;
  while(open.size){let current:Point|undefined,score=Infinity;for(const p of open){const f=cost.get(p)!+distance(p,b);if(f<score){score=f;current=p;}}if(!current)break;if(current===b){found=true;break;}open.delete(current);for(const q of edges.get(current)??[]){const next=cost.get(current)!+distance(current,q);if(next<(cost.get(q)??Infinity)){cost.set(q,next);parent.set(q,current);open.add(q);}}}
  if(!found)return [];const path=[b];while(path[0]!==a){const p=parent.get(path[0]);if(!p)return [];path.unshift(p);}return path;
 };
 return {nodes:[...connected],nearest:(p:Point)=>nearest(p,connected),route};
}
/** Three cached assets, shared geometry/textures, separate bones, hit flash and persistent timers. */
export function createMuspelheimArmy(templates:Template[],nav:ReturnType<typeof createArmyNavigation>,clock=Date.now){
 const root=new THREE.Group();root.name='Пепельное войско — 21 патрульный и 50 лагерных';
 const field:Point[]=[SHADOW_ASSASSIN_POSITION,DARK_ELF_POSITION].map(p=>nav.nearest({...p,y:0})).filter((p):p is Point=>!!p);const chosen:Point[]=[...field];
 const candidates=roadLines().flatMap(line=>line.filter((_,i)=>i%8===0)).map(p=>nav.nearest({...p,y:0})).filter((p):p is Point=>!!p&&p.z<95&&!(p.x>85&&p.z>-205&&p.z<-12));
 // Farthest-point sampling spreads mixed soldiers across walkable routes.
 while(field.length<21){const p=candidates.filter(p=>!chosen.includes(p)).sort((a,b)=>Math.min(...chosen.map(p=>distance(b,p)),1000)-Math.min(...chosen.map(p=>distance(a,p)),1000))[0];if(!p)throw Error('Not enough field patrol positions');field.push(p);chosen.push(p);}
 const camp:Point[]=[];for(let row=0;row<5;row++)for(let col=0;col<10;col++){const target={x:140+col*22,y:0,z:-160+row*25},p=nav.nodes.filter(p=>p.x>110&&p.x<370&&p.z>-175&&p.z<-40&&!chosen.some(q=>distance(p,q)<7)).sort((a,b)=>distance(a,target)-distance(b,target))[0];if(!p)throw Error('Not enough camp positions');camp.push(p);chosen.push(p);}
 const actors=[...field,...camp].map((home,index)=>{
  const kind=index===0?2:index===2?0:index%3,source=templates[kind],model=clone(source.scene);model.traverse(o=>{if(o instanceof THREE.Mesh){o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();o.castShadow=false;}});
  const respawnMs=index<21?ARMY_RESPAWN.field:ARMY_RESPAWN.camp;
  let tickTime=(index%10)*.03;let path:Point[]=[],destination:Point|undefined,repath=0,wait=(index%7)*.4,patrolTime=0,patrolTarget:Point|undefined;
  const navigate=(from:Point,to:Point)=>{if(!destination||distance(destination,to)>12||repath<=0){path=nav.route(from,to);destination={...to};repath=1.2+(index%5)*.1;}while(path.length&&distance(from,path[0])<2)path.shift();return path[0]??from;};
  const patrol=(p:Point,dt:number,floor:(x:number,z:number,y:number)=>number|null)=>{
   wait-=dt;patrolTime+=dt;if(wait>0)return false;
   if(!patrolTarget||distance(p,patrolTarget)<3||patrolTime>50){const pool=index<21?field:nav.nodes;patrolTarget=pool[(index*139+Math.floor(clock()/60000)*97)%pool.length];destination=undefined;patrolTime=0;}
   const to=navigate(p,patrolTarget),d=distance(p,to);if(d<.1)return false;const step=Math.min(d,dt*6),x=p.x+(to.x-p.x)*step/d,z=p.z+(to.z-p.z)*step/d,y=floor(x,z,p.y);
   if(y==null||Math.abs(y-p.y)>3){destination=undefined;wait=.5;return false;}Object.assign(p,{x,y,z});return true;
  };
  const actor=createShadowAssassin(model,source.animations,home.y,clock,{position:home,height:13.8+(index%3)*.35,radius:1.8,name:['Воительница','Тёмная эльфийка','Теневой воин'][kind]+` · ${index<21?'патруль':'лагерь'} ${index<21?index+1:index-20}`,cooldownKey:`yggdrasil:muspelheim:army:v1:${index}:defeatedAt`,respawnMs,leash:1600,notice:25,speed:10,navigate,patrol,animationDistance:220});
  const update=actor.update;actor.update=(dt,hero,available=true,floor=()=>home.y,contact)=>{
   tickTime+=dt;
   const near=hero?distance(actor.combat.position,hero):Infinity,interval=near<65?0:near<180?.1:.3;
   if(dt>0&&tickTime<interval)return {impact:false,started:false,walking:false,dying:false,respawned:false};
   const advance=dt>0?Math.min(tickTime,.35):0;if(dt>0)tickTime=0;repath-=advance;const before=actor.combat.phase;
   const event=update(advance,hero,available,floor,contact);
   if(before==='idle'&&actor.combat.phase!=='idle'){destination=undefined;patrolTarget=undefined;}
   // Animation remains independent; distant actors keep simulation but avoid rendering outside the view.
   actor.root.visible=!actor.combat.hidden&&(!hero||distance(actor.combat.position,hero)<340);
   return event;
  };root.add(actor.root);return actor;
 });
 return {root,actors,field,camp};
}
