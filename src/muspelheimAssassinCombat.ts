export const ASSASSIN_COMBAT={maxHp:420,attack:65,notice:36,leash:64,reach:11,speed:16,impact:.65,swing:1.55,recovery:.65,disappearMs:2200,respawnMs:120000};
export type AssassinPoint={x:number;y:number;z:number};
type Phase='idle'|'chase'|'attack'|'return'|'dead';
/** Pursuit and attacks use simulation time; defeat cooldown uses a persistent wall-clock deadline. */
export function createAssassinCombat(home:AssassinPoint,options:{now?:()=>number;spawnClearance?:number;defeatedAt?:number;respawnMs?:number;leash?:number;notice?:number;speed?:number;navigate?:(from:AssassinPoint,to:AssassinPoint)=>AssassinPoint;onDefeated?:(at:number|null)=>void}={}){
 const respawnMs=options.respawnMs??ASSASSIN_COMBAT.respawnMs;const now=options.now??Date.now;let defeatedAt=options.defeatedAt;
 const position={...home};let stun=0;let hp=ASSASSIN_COMBAT.maxHp,phase:Phase='idle',elapsed=0,cooldown=.5,impacted=false,target={...home};
 const distance=(a:AssassinPoint,b:AssassinPoint)=>Math.hypot(a.x-b.x,a.z-b.z);
 const reset=()=>{stun=0;Object.assign(position,home);hp=ASSASSIN_COMBAT.maxHp;phase='idle';elapsed=0;cooldown=.5;impacted=false;defeatedAt=undefined;options.onDefeated?.(null);};
 if(defeatedAt!==undefined&&now()-defeatedAt<respawnMs){hp=0;phase='dead';}
 const move=(to:AssassinPoint,dt:number,floor:(x:number,z:number,y:number)=>number|null)=>{
  to=options.navigate?.(position,to)??to;const d=distance(position,to);if(d<.2)return;const step=Math.min(d,(options.speed??ASSASSIN_COMBAT.speed)*dt),dx=(to.x-position.x)/d*step,dz=(to.z-position.z)/d*step;
  for(const [x,z] of [[position.x+dx,position.z+dz],[position.x+dx,position.z],[position.x,position.z+dz]]){const y=floor(x,z,position.y);if(y!=null&&Math.abs(y-position.y)<=3){Object.assign(position,{x,y,z});break;}}
 };
 return {
  position,get hidden(){return phase==='dead'&&defeatedAt!==undefined&&now()-defeatedAt>=ASSASSIN_COMBAT.disappearMs;},get hp(){return hp;},get phase(){return phase;},reset,
  interrupt(seconds=2){if(phase==='dead')return;stun=Math.max(stun,seconds);phase='chase';elapsed=0;impacted=false;cooldown=0;},
  hurt(damage:number){if(phase==='dead'||damage<=0)return false;hp=Math.max(0,hp-damage);if(!hp){phase='dead';elapsed=0;defeatedAt=now();options.onDefeated?.(defeatedAt);}else if(phase==='idle'||phase==='return')phase='chase';return true;},
  step(dt:number,hero:AssassinPoint,available:boolean,floor:(x:number,z:number,y:number)=>number|null,contact:()=>boolean=()=>true){
   const event={impact:false,started:false,walking:false,dying:false,respawned:false};
   if(phase==='dead'){if(defeatedAt!==undefined&&now()-defeatedAt>=respawnMs&&(distance(hero,home)>(options.spawnClearance??6)||Math.abs(hero.y-home.y)>6)){reset();event.respawned=true;}else{elapsed+=dt;event.dying=true;}return event;}
   if(dt<=0)return event;
   if(stun>0){stun=Math.max(0,stun-dt);return event;}
   const near=distance(position,hero),valid=available&&Math.abs(hero.y-position.y)<6&&distance(home,hero)<=(options.leash??ASSASSIN_COMBAT.leash);
   if(!valid&&phase!=='idle'&&phase!=='return'){phase='return';elapsed=0;}
   if(phase==='return'){move(home,dt,floor);event.walking=distance(position,home)>.3;if(!event.walking)reset();return event;}
   if(phase==='idle'){if(valid&&near<=(options.notice??ASSASSIN_COMBAT.notice)){phase='chase';cooldown=.5;}else return event;}
   if(phase==='attack'){
    elapsed+=dt;
    if(!impacted&&elapsed>=ASSASSIN_COMBAT.impact){impacted=true;event.impact=valid&&near<=ASSASSIN_COMBAT.reach+1&&distance(hero,target)<7&&contact();}
    if(elapsed>=ASSASSIN_COMBAT.swing){phase='chase';elapsed=0;cooldown=ASSASSIN_COMBAT.recovery;}
    return event;
   }
   cooldown=Math.max(0,cooldown-dt);
   if(near>ASSASSIN_COMBAT.reach-2){move(hero,dt,floor);event.walking=true;}
   else if(!cooldown&&contact()){phase='attack';elapsed=0;impacted=false;target={...hero};event.started=true;}
   return event;
  }
 };
}
