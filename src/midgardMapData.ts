import { MIDGARD_GUARDIANS, MIDGARD_GUARDIAN_ORDER } from './core';
import { CHAOS_GATES } from './chaosProgression';
export type MapCategory='village'|'trials'|'treasures'|'resources'|'roads';
export type MapLocation={id:string;name:string;category:MapCategory;x:number;z:number;description:string};
export type MapProgress={completed:string[];cleared:string[];restored:string[];openedChests:string[];northBridgeRepaired:boolean;northBridgeReady:boolean;eventDone:boolean};
export const riverCenterX=(z:number)=>-57+Math.sin(((z+94)/6)*.42)*4.2;
const NORTH_BRIDGE_Z=52,NORTH_BRIDGE_X=riverCenterX(52),BRIDGE_SPAN=13.6;
export const mapPosition=(x:number,z:number)=>({x:Math.max(2,Math.min(98,(x+90)/180*100)),y:Math.max(2,Math.min(98,(90-z)/180*100))});
export const MAP_ROADS:Array<Array<[number,number]>>=[
[[0,43.5],[0,35],[0,27],[1,18],[1,9],[1,2]],
[[1,2],[0,-6],[0,-17],[0,-27],[0,-36]],
[[0,-36],[0,-43],[-8,-49],[-24,-48],[-35,-48],[-42,-48],[-50,-48]],
[[0,1],[-5,1],[-10,-2.55]],
[[0,44.5],[0,50],[0,58],[-2,67],[-5,75]],
[[0,49],[-10,49],[-20,49],[-28,48],[-34,44],[-35,36]],
[[0,49],[10,52],[18,55]],
[[18,55],[32,58],[42,59],[50,60]],
[[0,49],[6,45],[16,44],[26,46],[31,52],[32,58]],
[[50,60],[55,68],[62,78]],
[[0,49],[14,49],[27,48],[34,44],[35,36]],
[[35,36],[39,34],[43,32],[57,33],[68,36],[75,36],[80,36]],
[[35,36],[35,25],[35,14],[35,3],[35,-10],[35,-23],[35,-32]],
[[35,20],[46,15],[57,11],[68,8]],
[[35,-32],[43,-34],[51,-31],[58,-28]],
[[35,-32],[32,-42],[25,-52],[15,-62],[5,-70]],
[[-35,36],[-42,37],[-48,38],[-49,42],[-49,47],[NORTH_BRIDGE_X+BRIDGE_SPAN/2+1.8,NORTH_BRIDGE_Z]],
[[-35,36],[-41,43],[-46,48],[NORTH_BRIDGE_X+BRIDGE_SPAN/2+1.8,NORTH_BRIDGE_Z]],
[[-35,44],[-39,54],[-43,64],[-45,75]],
[[-45,75],[-47,67],[-48,59],[NORTH_BRIDGE_X+BRIDGE_SPAN/2+.15,NORTH_BRIDGE_Z]],
[[-35,36],[-35,24],[-35,14],[-35,2],[-35,-10],[-35,-23],[-35,-32],[-40,-38],[-48,-44],[-50,-48]],
[[-35,14],[-32,15],[-31,15],[-29,21],[-31,28],[-35,36]],
[[-50,-48],[-51,-48],[-52.5,-48]],
[[-64,-48],[-63,-48],[-61.5,-48]],
[[-64,-48],[-70,-48],[-72,-48]],
[[-64,-48],[-67,-40],[-68,-27],[-68,-11],[-65,8]],
[[-65,8],[-68,24],[-70,37],[-72,48]],
[[-35,44],[-42,49],[NORTH_BRIDGE_X+BRIDGE_SPAN/2+1.8,NORTH_BRIDGE_Z],[NORTH_BRIDGE_X+BRIDGE_SPAN/2-1.3,NORTH_BRIDGE_Z]],
[[NORTH_BRIDGE_X-BRIDGE_SPAN/2-.15,NORTH_BRIDGE_Z],[-72,52],[-72,48]]
];
export const MAP_WALLS:Array<[number,number,number,number]>=[[-30,-31,-6,-31],[6,-31,30,-31],[-30,-31,-30,44],[30,-31,30,44],[-30,44,-6,44],[6,44,30,44]];
export const MAP_LOCATIONS:MapLocation[]=[
 ...MIDGARD_GUARDIAN_ORDER.map(id=>{const g=MIDGARD_GUARDIANS[id];return {id,name:g.location,category:'trials' as const,x:g.x,z:g.z,description:g.title+' — '+g.name+'. Испытание мудрости или бой.'};}),
 {id:'forge',name:'Кузница Вёлунда',category:'village',x:-10,z:-2.55,description:'Оружие, щиты и закалка снаряжения.'},
 {id:'welund',name:'Дом Велунда',category:'village',x:17,z:34,description:'Дом кузнеца возле ворот. Открой дверь, чтобы поговорить с Велундом.'},
 {id:'herbalist',name:'Дом Сигрид',category:'village',x:-8,z:-21,description:'Травница: задания, эликсиры и восстановление локаций.'},
 {id:'carpenter',name:'Дом Бьёрна',category:'village',x:-20,z:22,description:'Плотник: материалы для моста и ремонта.'},
 {id:'craftsman',name:'Дом Торвальда',category:'village',x:-22,z:-6,description:'Ремесленник: крепления и ремонт локаций.'},
 {id:'house',name:'Дом Хальвдана',category:'village',x:16,z:-21,description:'Старейшина: помощь в восстановлении Мидгарда.'},
 {id:'heroHome',name:'Дом героя',category:'village',x:80,z:30,description:'Безопасный отдых и полное восстановление здоровья.'},
 {id:'oldfarm',name:'Старый хутор',category:'village',x:-64.4,z:10.8,description:'Старый дом на западном берегу.'},
 {id:'forestCache',name:'Золотой сундук',category:'treasures',x:-72,z:48,description:'Награды на другом берегу Северного моста.'},
 {id:'nornsChest',name:'Красный сундук Норн',category:'treasures',x:63,z:-31,description:'Открывается после выбора нити у колодца Трёх Норн.'},
 {id:'angelicChest',name:'Серебряный сундук',category:'treasures',x:68.2,z:74.6,description:'Редкие награды после последнего испытания в Лесу Ходдмимира.'},
 {id:'deepGrove',name:'Глубокая роща',category:'resources',x:-45,z:75,description:'Редкие лечебные травы. Запас обновляется раз в 15 минут.'},
 {id:'fallenAsh',name:'Поверженный ясень',category:'resources',x:-30,z:15,description:'Место сбора ясеневой древесины.'},
 {id:'hunterCamp',name:'Забытая стоянка',category:'resources',x:68,z:8,description:'Запасы веток и древесины. Обновляются раз в 15 минут.'},
 {id:'northBridge',name:'Северный мост',category:'roads',x:NORTH_BRIDGE_X,z:52,description:'Переход к золотому сундуку; нужна подготовка жителей и ремонт.'},
 {id:'port',name:'Речной мост',category:'roads',x:-57,z:-48,description:'Переход к Камню Шёпота. У реки можно восстановить до 20 здоровья.'},
 {id:'gate',name:'Передние ворота',category:'roads',x:0,z:44,description:'Северный выход из поселения.'},
 {id:'gateRear',name:'Задние ворота',category:'roads',x:0,z:-31,description:'Южный выход из поселения.'}
];
export type LocationState={label:string;kind:'open'|'locked'|'done';detail:string};
export function locationState(location:MapLocation,p:MapProgress):LocationState{
 const id=location.id;
 if(location.category==='trials'){
  const g=CHAOS_GATES.find(x=>x.location===id);
  if(p.completed.includes(id))return {label:'Испытание пройдено',kind:'done',detail:'Можно вернуться для повторного боя.'};
  if(g&&!p.cleared.includes(g.id))return {label:'Печать хаоса',kind:'locked',detail:'Врата хаоса: '+g.cost+' Капель бессмертия и руны. Подойди к вратам, чтобы увидеть рецепты.'};
  if(g&&!p.restored.includes(g.id))return {label:'Нужен ремонт',kind:'locked',detail:'Печать снята. Жители поселения помогут восстановить локацию.'};
  const i=MIDGARD_GUARDIAN_ORDER.findIndex(x=>x===id);
  const prev=MIDGARD_GUARDIAN_ORDER[i-1];
  if(prev&&!p.completed.includes(prev))return {label:'Предыдущее испытание',kind:'locked',detail:'Сначала пройди: '+MIDGARD_GUARDIANS[prev].location+'.'};
  return {label:'Доступно',kind:'open',detail:'Подойди к стражу, чтобы начать испытание.'};
 }
 if(location.category==='treasures'){
  if(p.openedChests.includes(id))return {label:'Сундук открыт',kind:'done',detail:'Награды уже получены.'};
  if(id==='forestCache'&&!p.northBridgeRepaired)return {label:'Мост закрыт',kind:'locked',detail:'Сначала восстанови Северный мост.'};
  if(id==='nornsChest'&&!p.eventDone)return {label:'Нужен выбор нити',kind:'locked',detail:'Сначала выбери нить у колодца Трёх Норн.'};
  if(id==='angelicChest'&&!p.completed.includes('hoddmimir'))return {label:'Серебряная печать',kind:'locked',detail:'Сначала пройди последнее испытание в Лесу Ходдмимира.'};
  return {label:'Награда ждёт',kind:'open',detail:location.description};
 }
 if(id==='northBridge')return p.northBridgeRepaired?{label:'Проход открыт',kind:'done',detail:'Можно перейти на западный берег.'}:{label:p.northBridgeReady?'Готов к ремонту':'Проход закрыт',kind:'locked',detail:p.northBridgeReady?'Заверши ремонт у моста за 300 Капель бессмертия.':'Подготовь материалы у Сигрид, Бьёрна и Торвальда.'};
 return {label:'Место на карте',kind:'open',detail:location.description};
}
export function nextMapGoal(p:MapProgress):string|undefined{
 const trial=MIDGARD_GUARDIAN_ORDER.find(id=>!p.completed.includes(id));
 if(trial)return trial;
 if(!p.openedChests.includes('forestCache'))return p.northBridgeRepaired?'forestCache':'northBridge';
 if(!p.openedChests.includes('nornsChest'))return p.eventDone?'nornsChest':'threeThreads';
 if(!p.openedChests.includes('angelicChest'))return 'angelicChest';
}
