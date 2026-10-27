export const NECRO_STRIKE={notice:27,radius:15,height:12,lift:.18,windup:1.15,downstroke:.16,recovery:.7,cooldown:3.5,attack:65};
type Point={x:number;y:number;z:number};
/** Stationary staff slam: one timed hit per ground contact, independent of frame rate. */
export function createNecromancerStrike(home:Point,initialDelay=0){
 let phase:'idle'|'raise'|'slam'|'recover'='idle',elapsed=0,cooldown=initialDelay;
 const valid=(hero:Point,r:number)=>Math.hypot(hero.x-home.x,hero.z-home.z)<r&&Math.abs(hero.y-home.y)<NECRO_STRIKE.height;
 return {get phase(){return phase;},get lift(){return phase==='raise'?NECRO_STRIKE.lift*Math.min(1,elapsed/NECRO_STRIKE.windup):phase==='slam'?NECRO_STRIKE.lift*Math.max(0,1-elapsed/NECRO_STRIKE.downstroke):0;},
  update(dt:number,hero:Point,available=true,contact=true){const event={started:false,impact:false,grounded:false};if(dt<=0)return event;
   if(phase==='idle'){cooldown=Math.max(0,cooldown-dt);if(!cooldown&&available&&contact&&valid(hero,NECRO_STRIKE.notice)){phase='raise';elapsed=0;event.started=true;}return event;}
   elapsed+=dt;
   if(phase==='raise'&&elapsed>=NECRO_STRIKE.windup){elapsed-=NECRO_STRIKE.windup;phase='slam';}
   if(phase==='slam'&&elapsed>=NECRO_STRIKE.downstroke){phase='recover';elapsed=0;event.grounded=true;event.impact=available&&contact&&valid(hero,NECRO_STRIKE.radius);}
   if(phase==='recover'&&elapsed>=NECRO_STRIKE.recovery){phase='idle';elapsed=0;cooldown=NECRO_STRIKE.cooldown;}
   return event;
  },
 };
}
