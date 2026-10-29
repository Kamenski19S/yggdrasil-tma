import {createAssassinCombat,type AssassinPoint} from './muspelheimAssassinCombat';
export const GATE_MAGIC={notice:34,charge:.95,recover:1.2,pause:1.2,speed:27,radius:.8,lifetime:3};
export type MagmaProjectile={id:number;x:number;y:number;z:number;vx:number;vy:number;vz:number;age:number};
/** Stationary caster: telegraphed charge, then a non-homing, dodgeable magma projectile. */
export function createGateMagic(home:AssassinPoint,options:Parameters<typeof createAssassinCombat>[1]={},profile:Partial<typeof GATE_MAGIC>={}){
 const tuning={...GATE_MAGIC,...profile};
 const life=createAssassinCombat(home,options);let stage:'idle'|'charge'|'recover'='idle',elapsed=0,cooldown=1.2,nextId=0;const projectiles:MagmaProjectile[]=[];
 const clear=()=>{stage='idle';elapsed=0;cooldown=1.2;projectiles.length=0;};
 const segmentHits=(a:AssassinPoint,b:AssassinPoint,hero:AssassinPoint)=>{const dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,length=dx*dx+dy*dy+dz*dz;let t=length?((hero.x-a.x)*dx+(hero.y+7-a.y)*dy+(hero.z-a.z)*dz)/length:0;for(let i=0;i<2;i++){t=Math.max(0,Math.min(1,t));const y=a.y+dy*t,cy=Math.max(hero.y+3,Math.min(hero.y+12,y));t=length?((hero.x-a.x)*dx+(cy-a.y)*dy+(hero.z-a.z)*dz)/length:0;}t=Math.max(0,Math.min(1,t));const x=a.x+dx*t,y=a.y+dy*t,z=a.z+dz*t,cy=Math.max(hero.y+3,Math.min(hero.y+12,y));return Math.hypot(x-hero.x,y-cy,z-hero.z)<=2.1+tuning.radius;};
 return {life,projectiles,get stage(){return stage;},reset:clear,
  step(dt:number,hero?:AssassinPoint,available=true,origin:AssassinPoint={x:home.x,y:home.y+14,z:home.z+5},contact=true,floor:(x:number,z:number,y:number)=>number|null=()=>home.y){
   const event={impact:false,started:false,walking:false,dying:false,respawned:false,released:false};if(dt<=0)return event;
   if(life.phase==='dead'){clear();return {...event,...life.step(dt,hero??{x:home.x+100,y:home.y,z:home.z},false,floor)};}
   if(!hero||!available){clear();return event;}
   const near=Math.hypot(hero.x-home.x,hero.z-home.z)<tuning.notice&&Math.abs(hero.y-home.y)<6;
   for(let i=projectiles.length-1;i>=0;i--){const p=projectiles[i],previous={x:p.x,y:p.y,z:p.z};p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;p.age+=dt;let remove=false,from=previous;const samples=Math.max(1,Math.ceil(Math.hypot(p.x-previous.x,p.y-previous.y,p.z-previous.z)/.25));
    for(let j=1;j<=samples;j++){const t=j/samples,point={x:previous.x+(p.x-previous.x)*t,y:previous.y+(p.y-previous.y)*t,z:previous.z+(p.z-previous.z)*t},ground=floor(point.x,point.z,home.y);if(ground===null||point.y<ground+.4){remove=true;break;}if(contact&&segmentHits(from,point,hero)){event.impact=true;remove=true;break;}from=point;}
    if(remove||p.age>=tuning.lifetime)projectiles.splice(i,1);
   }
   if(stage==='idle'){cooldown=Math.max(0,cooldown-dt);if(near&&contact&&!cooldown){stage='charge';elapsed=0;event.started=true;}}
   else if(stage==='charge'){if(!near||!contact){clear();return event;}elapsed+=dt;if(elapsed>=tuning.charge){const dx=hero.x-origin.x,dy=hero.y+7-origin.y,dz=hero.z-origin.z,d=Math.hypot(dx,dy,dz)||1;projectiles.push({id:++nextId,...origin,vx:dx/d*tuning.speed,vy:dy/d*tuning.speed,vz:dz/d*tuning.speed,age:0});stage='recover';elapsed=0;event.released=true;}}
   else{elapsed+=dt;if(elapsed>=tuning.recover){stage='idle';elapsed=0;cooldown=tuning.pause;}}
   return event;
  },
 };
}
