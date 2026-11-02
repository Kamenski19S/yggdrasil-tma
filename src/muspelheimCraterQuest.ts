import {settleMuspelheimSwords} from './muspelheimForgeStock';
import {THREAD_SECRET,ASH_SOURCE_SEALED,findRunicRecipe} from './runicCombinations';
import type {Save} from './core';
import {CRATER_SWORD_KEY,CRATER_SWORD_ITEM} from './muspelheimCraterLayout';
/** A quest blade for the later tempering story; claiming never silently replaces equipped weapons. */
export function claimCraterSword(save:Save):Save{
 if(save.done.includes(CRATER_SWORD_KEY))return settleMuspelheimSwords(save);
 if(!craterTrialsComplete(save.done))return save;
 return settleMuspelheimSwords({...save,done:[...save.done,CRATER_SWORD_KEY],lootCounts:{...save.lootCounts,[CRATER_SWORD_ITEM]:1}});
}

export const CRATER_TRIALS=[
 {id:'foot',title:'Испытание света',request:'Покажи сочетание против тёмной магии: выбери Соулу и Альгиз под кнопкой управления, затем вернись ко мне.',question:'Что удержит тьму моего посоха?',answers:['Один лишь огонь','Свет Соулу под защитой Альгиз','Любые две руны'],correct:1},
 {id:'slope',title:'Испытание памяти',request:'Раскрой память колодца в Хранилище трёх нитей: Ансуз + Пертр, затем «Барьер» рядом с колодцем. Вернись с тайной чёрной нити.',question:'Как прочесть скрытую память нитей?',answers:['Соединить Ансуз и Пертр','Разрубить колодец мечом','Поднять любой защитный покров'],correct:0},
 {id:'summit',title:'Испытание воли',request:'Узнав тайну Хранилища, останови подпитку Владыки в резиденции: Кеназ + Турисаз и «Барьер» рядом с источником. Затем возвращайся.',question:'Зачем тебе меч двух стихий перед встречей с Суртом?',answers:['Чтобы уничтожить Сурта навсегда','Чтобы стать хозяином его войска','Чтобы выдержать его огонь, ослабить пламя и узнать тайну нитей'],correct:2},
] as const;
export const craterTrialKey=(id:string)=>'muspelheim:crater:trial:'+id;
export const craterAngerKey=(id:string)=>'muspelheim:crater:anger:'+id;
export const craterTrialsComplete=(done:readonly string[])=>CRATER_TRIALS.every(t=>done.includes(craterTrialKey(t.id)));
export function craterTaskReady(done:readonly string[],id:string,pair:readonly string[],owned:readonly string[]){
 return id==='foot'?findRunicRecipe(pair,owned)?.id==='shadow':id==='slope'?done.includes(THREAD_SECRET):id==='summit'?done.includes(ASH_SOURCE_SEALED):false;
}
export function answerCraterTrial(save:Save,id:string,answer:number):Save{
 const index=CRATER_TRIALS.findIndex(t=>t.id===id),trial=CRATER_TRIALS[index];
 if(!trial||save.done.includes(craterTrialKey(id))||!CRATER_TRIALS.slice(0,index).every(t=>save.done.includes(craterTrialKey(t.id)))||!craterTaskReady(save.done,id,save.muspelheimRunePair??[],save.runes)||!Number.isInteger(answer)||answer<0||answer>=trial.answers.length)return save;
 const correct=answer===trial.correct;
 return {...save,done:[...save.done.filter(k=>k!==craterAngerKey(id)),correct?craterTrialKey(id):craterAngerKey(id)]};
}
