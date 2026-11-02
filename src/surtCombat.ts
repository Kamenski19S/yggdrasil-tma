import type {Save} from './core';
export const SURT_CALMED='muspelheim:surt:calmed';
export type SurtAttack='blade'|'wave'|'fissure';
type Point={x:number;y:number;z:number};
export const SURT_HINTS={blade:'Меч сверху: уйди из круга или подними Уруз + Альгиз.',wave:'Волна огня: Иса + Альгиз, затем «Барьер». Защита — 5 секунд.',fissure:'Разломы: покинь красные круги. Барьер не остановит жар земли.',opening:'Пламя открыто! Подойди с Прототипом и ударь, пока действует Иса + Альгиз.'};
export const settleSurtVictory=(s:Save):Save=>s.done.includes(SURT_CALMED)?s:{...s,done:[...s.done,SURT_CALMED]};
export function createSurtCombat(){
 let active=false,flame=100,phase:'warn'|'impact'|'opening'|'rest'='rest',attack:SurtAttack='blade',elapsed=0,step=0,spent=false,pulse=0;
 let origin:Point={x:0,y:0,z:0},targets:Point[]=[];
 const order:SurtAttack[]=['blade','wave','fissure','wave'];
 const warn=(hero:Point)=>{attack=order[step++%order.length];phase='warn';elapsed=0;spent=false;pulse=0;targets=[{...hero}];if(attack==='fissure')targets.push({...hero,x:hero.x+9,z:hero.z-4},{...hero,x:hero.x-9,z:hero.z+4});return SURT_HINTS[attack];};
 return {
  get active(){return active;},get flame(){return flame;},get phase(){return phase;},get attack(){return attack;},get elapsed(){return elapsed;},get targets(){return targets;},get origin(){return origin;},
  start(at:Point,hero:Point){if(active)return '';active=true;flame=100;step=0;origin={...at};return warn(hero);},
  reset(){active=false;flame=100;targets=[];phase='rest';elapsed=0;},
  strike(hero:Point,weapon:string,cold:boolean,power:number){
   if(!active||Math.abs(hero.y-origin.y)>8||Math.hypot(hero.x-origin.x,hero.z-origin.z)>26)return '';
   if(phase!=='opening')return 'Пламя закрывает Сурта. Жди окончания огненной волны.';
   if(weapon!=='swordPrototype'||!cold)return 'Нужен Прототип и действующий покров Иса + Альгиз.';
   if(spent)return 'Сурт закрыл брешь. Приготовься к следующей атаке.';
   spent=true;flame=Math.max(0,flame-Math.min(20,Math.max(8,Math.floor(power/15))));
   if(!flame){active=false;phase='rest';targets=[];return 'Довольно. Ты удержала мой огонь. Теперь я отвечу.';}
   return `Холод ослабил пламя Сурта: осталось ${flame}%.`;
  },
  update(dt:number,hero:Point,ward:(kind:'physical'|'fire')=>boolean){
   const event={damage:0,hint:'',slam:false,retreated:false};if(!active||dt<=0)return event;
   if(Math.abs(hero.y-origin.y)>12||Math.hypot(hero.x-origin.x,hero.z-origin.z)>65){this.reset();event.retreated=true;event.hint='Испытание прервано. Вернись к Сурту, когда будешь готова.';return event;}
   elapsed+=dt;const enraged=flame<=40;
   if(phase==='warn'&&elapsed>=(attack==='wave'?3:enraged?2:2.6)){phase='impact';elapsed=0;event.slam=true;}
   if(phase==='impact'){
    const contact=attack==='wave'||targets.some(t=>Math.hypot(hero.x-t.x,hero.z-t.z)<(attack==='blade'?7:5));
    if(pulse===0||attack==='fissure'&&elapsed>=pulse*.65){pulse++;if(contact&&(attack==='fissure'||!ward(attack==='blade'?'physical':'fire')))event.damage=attack==='blade'?95:attack==='wave'?110:90;}
    if(elapsed>=(attack==='fissure'?2:.5)){phase=attack==='wave'?'opening':'rest';elapsed=0;if(phase==='opening')event.hint=SURT_HINTS.opening;}
   }else if(phase==='opening'&&elapsed>=(enraged?3:4)){phase='rest';elapsed=0;}
   else if(phase==='rest'&&elapsed>=(enraged?2:3))event.hint=warn(hero);
   return event;
  }
}

}
