import type {Element} from './elementalMagic';
import type {RunePair} from './runePairSelection';
import type {Save} from './core';
export type RunicThreat=Element|'physical';
export const RUNIC_RECIPES=[
 {id:'fire',pair:['isaGuard','algizGuard'],name:'Ледяной покров',hint:'Иса + Альгиз удержат огонь. Подними барьер перед попаданием.',color:'#8ceaff',element:'fire'},
 {id:'ice',pair:['kenazShard','algizGuard'],name:'Тёплый покров',hint:'Кеназ + Альгиз защитят от ледяного удара и заморозки.',color:'#ff914a',element:'ice'},
 {id:'lightning',pair:['eihwazResilience','algizGuard'],name:'Корни грома',hint:'Эйваз + Альгиз отведут молнию. Другие стихии этот покров пропустит.',color:'#ffe887',element:'lightning'},
 {id:'shadow',pair:['sowiloLight','algizGuard'],name:'Солнечный покров',hint:'Соулу + Альгиз остановят тёмную магию и кражу капель.',color:'#fff2bd',element:'shadow'},
 {id:'water',pair:['laguzFlow','algizGuard'],name:'Тихая волна',hint:'Лагуз + Альгиз удержат водный взрыв Кракена и его толчок.',color:'#49dfcf',element:'water'},
 {id:'physical',pair:['uruzStrength','algizGuard'],name:'Каменный покров',hint:'Уруз + Альгиз остановят удар оружием. От ловушек со стрелами и секирами уходи с линии огня.',color:'#d9b38b',element:'physical'},
 {id:'insight',pair:['ansuzWisdom','perthroFate'],name:'Зрение нитей',hint:'Ансуз + Пертр раскроют скрытое: нажимные плиты и память колодца в Хранилище.',color:'#d8adff',element:null},
 {id:'seal',pair:['kenazShard','thurisazStrike'],name:'Печать жара',hint:'Кеназ + Турисаз разорвут подпитку Владыки. Сначала узнай тайну чёрной нити в Хранилище.',color:'#ff593b',element:null},
] as const;
export type RunicRecipe=typeof RUNIC_RECIPES[number];
export const RUNE_WARD_SECONDS=5;
export const RUNE_COOLDOWN_SECONDS=6;
export function findRunicRecipe(pair:readonly string[],owned:readonly string[]){
 if(pair.length!==2||!pair.every(id=>owned.includes(id)))return undefined;
 return RUNIC_RECIPES.find(r=>r.pair.every(id=>pair.includes(id)));
}
export function createRunicWard(){
 let recipe:RunicRecipe|undefined,remaining=0,cooldown=0;
 return {
  get recipe(){return remaining>0?recipe:undefined;},get remaining(){return remaining;},get cooldown(){return cooldown;},
  protects(element:RunicThreat){return remaining>0&&recipe?.element===element;},
  has(id:RunicRecipe['id']){return remaining>0&&recipe?.id===id;},
  activate(pair:RunePair,owned:readonly string[]){
   const next=findRunicRecipe(pair,owned);
   if(!next)return {ok:false,message:'Сочетание не откликнулось. Подсказки знает Странница у колодца норн.'};
   if(cooldown>0)return {ok:false,message:`Руны восстанавливаются: ${Math.ceil(cooldown)} с.`};
   recipe=next;remaining=RUNE_WARD_SECONDS;cooldown=RUNE_COOLDOWN_SECONDS;
   return {ok:true,message:`${next.name} · ${remaining} с. ${next.element?'Защита только от одного вида атаки.':'Сила сочетания пробуждена.'}`};
  },
  update(dt:number){if(dt<=0)return;remaining=Math.max(0,remaining-dt);cooldown=Math.max(0,cooldown-dt);},
  reset(){recipe=undefined;remaining=cooldown=0;},
 };
}
export const RUNE_HINT_PREFIX='muspelheim:runeHint:';
export const THREAD_SECRET='muspelheim:threads:secret';
export const ASH_SOURCE_SEALED='muspelheim:ashLord:sourceSealed';
export type RunicRitual='threads'|'source';
export function applyRunicRitual(save:Save,event:RunicRitual):Save{
 const flag=event==='threads'?THREAD_SECRET:ASH_SOURCE_SEALED;
 if(save.done.includes(flag)||event==='source'&&!save.done.includes(THREAD_SECRET))return save;
 return {...save,done:[...save.done,flag],immortalityDrops:save.immortalityDrops+(event==='threads'?20000:25000)};
}
export function strangerRuneHints(done:readonly string[]){
 const next=!done.includes(THREAD_SECRET)?'В Хранилище у колодца соедини Ансуз и Пертр, затем нажми «Барьер». Узнаешь, куда ведёт чёрная нить.':!done.includes(ASH_SOURCE_SEALED)?'Теперь найди источник рядом с Владыкой в резиденции. Кеназ и Турисаз, пробуждённые рядом с ним, остановят подпитку легиона.':'Подпитка Владыки остановлена. Для огня Сурта помни сочетание Иса и Альгиз.';
 const known=RUNIC_RECIPES.filter(r=>done.includes(RUNE_HINT_PREFIX+r.id));
 return [next,...known.map(r=>r.hint)];
}
