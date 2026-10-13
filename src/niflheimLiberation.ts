import type {Save} from './core';
import {RUNE_CATALOG,POTION_CATALOG} from './world';

/** Niflheim has no coins: rewards use the same shared inventory as Midgard. */
const PREFIX='niflheim:liberation:';
export const LIBERATION_TRIALS=[
 {id:'shelter',title:'Приют хранителей',kind:'riddle',name:'Сломанная клятва',
  intro:'Хранители забыли, зачем охраняли северные рубежи. Какая руна возвращает клятву защиты?',
  options:['ᚠ — Феху','ᛉ — Альгиз','ᛁ — Иса'],answer:1,
  outcome:'Свет Альгиз возвращает клятву. Хранители вспоминают своё предназначение.'},
 {id:'echoCave',title:'Пещера ледяного эха',kind:'riddle',name:'Голос за туманом',
  intro:'Туман обещает лёгкую победу и сокровища. Как отличить настоящую подсказку от ловушки?',
  options:['Поверить обещанию награды','Следовать за каждым голосом','Слушать голос, который не требует награды'],answer:2,
  outcome:'Ложные голоса стихают. Одинокий хранитель благодарит Vicki за благоразумие.'},
 {id:'memoryCave',title:'Пещера воспоминаний',kind:'battle',name:'Ледяной страж памяти',
  intro:'Охранник забыл своё имя и считает каждого пришельца врагом. Освободи его от ледяного морока.',
  hp:82,attack:12,outcome:'Страж опускает оружие: забытые воспоминания вернулись.'},
 {id:'frozenRiver',title:'Замёрзшее русло',kind:'existing',name:'Три осколка памяти',
  intro:'Собери посох, амулет и плитку с руной у русла, затем поговори с девушкой у чаши.',
  outcome:'Все три вещи найдены.'},
 {id:'crossing',title:'Разрушенная переправа',kind:'existing',name:'Три опорных камня',
  intro:'Найди опоры и восстанови мост, чтобы открыть путь к забытым именам.',outcome:'Мост восстановлен.'},
 {id:'vampire',title:'Озеро у приюта хранителей',kind:'vampire',name:'Морвейн — узник водоворота',
  intro:'Водная спираль — тюрьма вампира. Сначала найди верный порядок водных рун, затем усмири его тёмную ярость.',
  hp:96,attack:15,outcome:'Морвейн освобождён и передаёт Сердце водоворота. Теперь он союзник Vicki.'},
 {id:'iceLake',title:'Озеро подо льдом',kind:'riddle',name:'Путевой знак экспедиции',
  intro:'Лёд скрывает знак пропавшей экспедиции. Что укажет путь через озеро?',
  options:['Руна Райдо — путь','Руна Иса — неподвижность','Руна Хагалаз — разрушение'],answer:0,
  outcome:'Древний указатель засиял: экспедиция нашла путь. На берегу найдены припасы.'},
 {id:'roots',title:'Сплетение корней',kind:'battle',name:'Осквернённый хранитель корней',
  intro:'За корнями бродит страж, пленённый тьмой дракона. Разбей чары, не разрушая корней.',
  hp:108,attack:16,outcome:'Тёмные нити на корнях истончаются, хранитель свободен.'},
 {id:'namesHall',title:'Зал забытых имён',kind:'riddleBattle',name:'Имена подо льдом',
  intro:'Сначала назови стёртое имя хранителя. Затем победи Тень забытых.',
  options:['Скульд','Мимир','Нидхёгг'],answer:1,hp:94,attack:14,
  outcome:'Имя Мимира снова звучит в зале. Тень рассеялась.'},
 {id:'snowMountain',title:'Снежная гора',kind:'battle',name:'Осквернённый великан',
  intro:'Древний великан охраняет каменный зал. Победи его, чтобы очистить горный проход.',
  hp:123,attack:17,outcome:'Великан вспомнил свою клятву и открыл путь через гору.'},
 {id:'threeNornsWell',title:'Колодец трёх норн',kind:'riddleBattle',name:'Три нити судьбы',
  intro:'Три норны знают прошлое, настоящее и грядущее. Чья нить указывает на будущее?',
  options:['Урд','Верданди','Скульд'],answer:2,hp:103,attack:16,
  outcome:'Испытание судьбы пройдено. Страж колодца передаёт древнюю руну.'},
 {id:'lookout',title:'Пересохшее русло',kind:'existing',name:'Три печати сухого русла',
  intro:'Сними руны Иса, Наутиз и Хагалаз с трёх древних камней.',outcome:'Три печати сняты.'},
 {id:'hvergelmir',title:'Хвергельмир',kind:'existing',name:'Возвращение памяти источника',
  intro:'После трёх находок активируй Ансуз, Лагуз и Беркану у источника.',
  outcome:'Память источника восстановлена.'}
] as const;
export type TrialId=typeof LIBERATION_TRIALS[number]['id'];
export type LiberationEvent=`victory:${string}`|`riddle:${string}`|`vampire:rune:${string}`|'vampire:reveal'|`shadow:defeated:${number}`|`guardian:defeated:${string}:${'orc'|'troll'}`;
export const COMBAT_TRIALS=new Set<TrialId>(['memoryCave','vampire','roots','namesHall','snowMountain','threeNornsWell']);
const complete=(done:readonly string[],id:string)=>done.includes(PREFIX+'cleared:'+id);
export const trialById=(id:string)=>LIBERATION_TRIALS.find(t=>t.id===id);
export function liberationProgress(done:readonly string[]){
 const found=['staff','medallion','tablet'].every(x=>done.includes('niflheim:memory:'+x));
 // Reuse the established quest's definitive find flags rather than duplicating items.
 const memoryFinds=['staff','medallion','tablet'].filter(x=>done.includes('niflheim:memory:'+x)).length;
 const bridge=done.includes('niflheim:bridge:restored');
 const dry=['isa','nauthiz','hagalaz'].every(x=>done.includes('niflheim:dry:'+x));
 const source=done.includes('niflheim:memory:restored');
 const flags=new Set<string>();
 for(const trial of LIBERATION_TRIALS){
  if(complete(done,trial.id))flags.add(trial.id);
  if(trial.id==='frozenRiver'&&(found||source||done.includes('niflheim:memory:ready')))flags.add(trial.id);
  if(trial.id==='crossing'&&bridge)flags.add(trial.id);
  if(trial.id==='lookout'&&dry)flags.add(trial.id);
  if(trial.id==='hvergelmir'&&source)flags.add(trial.id);
 }
 return {cleared:flags,total:LIBERATION_TRIALS.length,count:flags.size,
   finished:flags.size===LIBERATION_TRIALS.length,
   vampireFreed:flags.has('vampire'),
   vampireRunes:done.filter(x=>x.startsWith(PREFIX+'vampire:rune:')).map(x=>x.slice((PREFIX+'vampire:rune:').length)),
   vampireUnbound:done.includes(PREFIX+'vampire:unbound'),
   has:(id:string)=>flags.has(id),
   memoryFinds};
}
export function applyLiberationEvent(save:Save,event:LiberationEvent):Save{
 const progress=liberationProgress(save.done);
 const addFlag=(flag:string)=>({...save,done:[...new Set([...save.done,PREFIX+flag])]});
 if(event.startsWith('shadow:defeated:')){
  const site=Number(event.slice('shadow:defeated:'.length));
  if(!Number.isInteger(site)||site<0||site>14)return save;
  const cooldownKey=PREFIX+'shadow:'+site,now=Date.now();
  if((save.locationCooldowns[cooldownKey]||0)>now)return save;
  const victoryCount=(save.lootCounts.niflheimShadowVictories||0)+1;
  const drops=80+(site%5)*35;
  const supplies=combatSupplies(save,1+Math.floor(site/5));
  const rune=RUNE_CATALOG[(site+victoryCount)%RUNE_CATALOG.length].id;
  return {...save,immortalityDrops:save.immortalityDrops+drops,
    runeSteel:save.runeSteel+(site>=10?1:0),
    ...supplies,
    runes:[...new Set([...save.runes,rune])],
    locationCooldowns:{...save.locationCooldowns,[cooldownKey]:now+15*60*1000},
    lootCounts:{...supplies.lootCounts,niflheimShadowVictories:victoryCount,
      [rune]:Math.max(save.runes.includes(rune)?1:0,save.lootCounts[rune]||0)+1}};
 }
 if(event.startsWith('guardian:defeated:')){
  const data=event.slice('guardian:defeated:'.length);
  const split=data.lastIndexOf(':');
  if(split<0)return save;
  const id=data.slice(0,split),role=data.slice(split+1);
  if(!['orc','troll'].includes(role)||!/^[-a-zA-Z0-9]+$/.test(id))return save;
  const key=PREFIX+'guardian:reward:'+id,now=Date.now();
  if((save.locationCooldowns[key]||0)>now)return save;
  const firstFlag=PREFIX+'guardian:weapon:'+id;
  const first=!save.done.includes(firstFlag);
  const prize:Record<string,'swordStar'|'axeGiant'|'hammerRune'|'bladeObsidian'|'sword2'|'axeDouble'>={
   memoryCave:'swordStar',roots:'axeGiant',namesHall:'bladeObsidian',
   snowMountain:'hammerRune',threeNornsWell:'swordStar',
   shelterOrc:'sword2',forgeOrc:'swordStar',towerOrc:'hammerRune',
   crossingTroll:'axeGiant',rootsTroll:'axeDouble',
   hallOrc:'bladeObsidian',memoryOrc:'swordStar',
   mountainOrc:'axeGiant',echoOrc:'sword2'
  };
  const weapon=prize[id]||(role==='troll'?'axeGiant':'swordStar');
  const supplies=combatSupplies(save,role==='troll'?3:2);
  const rune=RUNE_CATALOG[(save.lootCounts.niflheimCombatSupplies||0)%RUNE_CATALOG.length].id;
  const drops=role==='troll'?190:125;
  const firstVictory=first?PREFIX+'cleared:'+id:'';
  return {...save,
    done:[...new Set([...save.done,...(first?[firstFlag]:[]),...(firstVictory&&trialById(id)?[firstVictory]:[])])],
    immortalityDrops:save.immortalityDrops+drops,
    runeSteel:save.runeSteel+(role==='troll'?2:1),
    ...supplies,
    runes:[...new Set([...save.runes,rune])],
    ownedWeapons:first?[...new Set([...save.ownedWeapons,weapon])]:save.ownedWeapons,
    locationCooldowns:{...save.locationCooldowns,[key]:now+15*60*1000},
    lootCounts:{...supplies.lootCounts,
      [rune]:Math.max(save.runes.includes(rune)?1:0,save.lootCounts[rune]||0)+1,
      ...(first?{[weapon]:(save.lootCounts[weapon]||0)+1}:{})}};
 }
 if(event.startsWith('vampire:rune:')){
  if(progress.vampireFreed||progress.vampireUnbound)return save;
  const expected=['laguz','ansuz','algiz'];
  const id=event.slice('vampire:rune:'.length);
  const step=progress.vampireRunes.length;
  if(id!==expected[step])return {...save,done:save.done.filter(flag=>!flag.startsWith(PREFIX+'vampire:rune:'))};
  return addFlag('vampire:rune:'+id);
 }
 if(event==='vampire:reveal'){
  if(progress.vampireFreed||progress.vampireRunes.length!==3)return save;
  return addFlag('vampire:unbound');
 }
 if(event.startsWith('riddle:')){
  const id=event.slice(7),trial=trialById(id);
  if(!trial||trial.kind!=='riddle'||progress.has(id))return save;
  return reward(save,id,false);
 }
 if(event.startsWith('victory:')){
  const id=event.slice(8);
  if(!COMBAT_TRIALS.has(id as TrialId))return save;
  if(id==='vampire'&&!progress.vampireUnbound)return save;
  if(!progress.has(id))return reward(save,id,false);
  if(id==='vampire')return save; // the freed vampire never attacks again
  // Ordinary guardians can be challenged again after 15 min. Smaller reward.
  const key=PREFIX+'repeat:'+id,now=Date.now();
  if((save.locationCooldowns[key]||0)>now)return save;
  return reward({...save,locationCooldowns:{...save.locationCooldowns,[key]:now+15*60*1000}},id,true);
 }
 return save;
}
// One shared rotation includes all seven elixirs and survives realm changes.
function combatSupplies(save:Save,ashWood:number){
 const count=save.lootCounts.niflheimCombatSupplies||0;
 const potion=POTION_CATALOG[count%POTION_CATALOG.length].id;
 return {stock:{...save.stock,ashWood:save.stock.ashWood+ashWood},
   potions:[...save.potions,potion],
   lootCounts:{...save.lootCounts,[potion]:(save.lootCounts[potion]||0)+1,niflheimCombatSupplies:count+1}};
}
function reward(save:Save,id:string,repeat:boolean):Save{
 const prefix=PREFIX+'cleared:'+id;
 const index=LIBERATION_TRIALS.findIndex(t=>t.id===id);
 const drops=repeat?4:12+index*2;
 const rune=RUNE_CATALOG[(index+Math.floor((save.lootCounts.niflheimTrialRunes||0)/2))%RUNE_CATALOG.length].id;
 const supplies=combatSupplies(save,repeat?1:3);
 const steel=repeat?0:1;
 const lootCounts={...supplies.lootCounts,[rune]:Math.max(save.runes.includes(rune)?1:0,save.lootCounts[rune]||0)+1,
   niflheimTrialRunes:(save.lootCounts.niflheimTrialRunes||0)+1,
   ...(id==='vampire'?{whirlpoolHeart:1}:{})};
 return {...save,
  done:repeat?save.done:[...new Set([...save.done,prefix])],
  immortalityDrops:save.immortalityDrops+drops,runeSteel:save.runeSteel+steel,
  ...supplies,runes:[...new Set([...save.runes,rune])],lootCounts};
}
