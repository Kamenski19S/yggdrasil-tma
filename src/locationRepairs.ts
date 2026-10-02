import type {Save,GatherKind} from './core';
import {CHAOS_GATES,chaosKey} from './chaosProgression';
export const REPAIR_RESIDENTS={herbalist:'Травница Сигрид',carpenter:'Плотник Бьёрн',craftsman:'Ремесленник Торвальд',fisher:'Рыбак Эйнар',fisher2:'Рыбак Халли',hunter:'Ульв',hunter2:'Рандви',family:'Семья Торстейна',warriorHouse:'Дружинник',blacksmith:'Кузнец Вёлунд',elder:'Старейшина Хальвдан'};
export type RepairResident=keyof typeof REPAIR_RESIDENTS;
export const REPAIR_GOODS={fish:'Рыбные припасы',wool:'Шерсть для утепления',rope:'Плетёные верёвки',boards:'Доски для ремонта',fittings:'Крепления',remedy:'Защитный настой',cloth:'Ткань и перевязки',tools:'Инструменты',plan:'План восстановления'};
type Goods=keyof typeof REPAIR_GOODS;
type Work={resident:RepairResident;goods:Goods;cost:Partial<Record<GatherKind,number>>};
const works:Record<RepairResident,Work>={
 herbalist:{resident:'herbalist',goods:'remedy',cost:{herbs:3}},carpenter:{resident:'carpenter',goods:'boards',cost:{wood:3,twigs:1}},craftsman:{resident:'craftsman',goods:'fittings',cost:{wood:2,twigs:2}},
 fisher:{resident:'fisher',goods:'fish',cost:{twigs:3}},fisher2:{resident:'fisher2',goods:'rope',cost:{twigs:3,wood:1}},hunter:{resident:'hunter',goods:'wool',cost:{herbs:2,twigs:2}},hunter2:{resident:'hunter2',goods:'wool',cost:{herbs:3,wood:1}},
 family:{resident:'family',goods:'cloth',cost:{herbs:2,twigs:2}},warriorHouse:{resident:'warriorHouse',goods:'tools',cost:{wood:2,twigs:2}},blacksmith:{resident:'blacksmith',goods:'fittings',cost:{wood:3}},elder:{resident:'elder',goods:'plan',cost:{herbs:1,twigs:1}}
};
const teams:RepairResident[][]=[['elder','carpenter','fisher'],['herbalist','hunter','family'],['craftsman','hunter2','fisher2'],['elder','carpenter','family','fisher'],['herbalist','blacksmith','warriorHouse'],['craftsman','fisher2','hunter'],['elder','herbalist','blacksmith','family'],['warriorHouse','carpenter','hunter2','fisher'],['elder','craftsman','fisher2','hunter','family']];
const damage=['Расколото основание камня. Нужно укрепить площадку и снабдить рабочих.','Магия иссушила корни. Нужны защитный настой и утепление молодых деревьев.','Повреждены колонны и нити. Требуются крепления, шерсть и верёвки.','Источник засорён, настил разбит. Нужно очистить воду и восстановить подход.','Трещины в камне опасны. Нужны инструменты, крепления и очищающий настой.','Рунические камни расшатаны. Нужно укрепить основание и связать опоры.','Повреждены края источника. Нужны защитный настой, крепления и перевязки для рабочих.','Расколот ритуальный настил. Нужны новые доски, инструменты и припасы.','Лес пострадал от хаоса. Нужно укрепить тропы и защитить молодые деревья.'];
export const repairKey=(id:string)=>'repair:'+id+':restored';
export const workKey=(id:string,resident:RepairResident)=>'repair:'+id+':work:'+resident;
export const REPAIR_PROJECTS=CHAOS_GATES.filter(g=>g.location).map((g,i)=>({id:g.id,name:g.name,damage:damage[i],reward:35+i*10,jobs:teams[i].map(r=>({...works[r],quantity:1+Math.floor(i/3),cost:Object.fromEntries(Object.entries(works[r].cost).map(([k,n])=>[k,n!+Math.floor(i/3)])) as Work['cost']}))}));
export type RepairProject=typeof REPAIR_PROJECTS[number];
export type RepairJob=RepairProject['jobs'][number];
export const repaired=(s:Save,id:string)=>s.done.includes(repairKey(id));
export const projectAvailable=(s:Save,p:RepairProject)=>s.done.includes(chaosKey(p.id))&&!repaired(s,p.id);
export const nextRepairJob=(s:Save,resident:RepairResident)=>{for(const project of REPAIR_PROJECTS){if(!projectAvailable(s,project))continue;const job=project.jobs.find(j=>j.resident===resident&&!s.done.includes(workKey(project.id,resident)));if(job)return {project,job};}return null;};
export const canPrepareRepair=(s:Save,p:RepairProject,j:RepairJob)=>projectAvailable(s,p)&&p.jobs.includes(j)&&!s.done.includes(workKey(p.id,j.resident))&&Object.entries(j.cost).every(([k,n])=>s.stock[k as GatherKind]>=n!);
export function prepareRepair(s:Save,p:RepairProject,j:RepairJob):Save{
 if(!canPrepareRepair(s,p,j))return s;const stock={...s.stock};for(const [k,n] of Object.entries(j.cost))stock[k as GatherKind]-=n!;
 return {...s,stock,repairStock:{...s.repairStock,[j.goods]:(s.repairStock[j.goods]||0)+j.quantity},done:[...s.done,workKey(p.id,j.resident)]};
}
export const repairNeeds=(p:RepairProject)=>{const needs:Partial<Record<Goods,number>>={};for(const j of p.jobs)needs[j.goods]=(needs[j.goods]||0)+j.quantity;return needs;};
export const canRestore=(s:Save,p:RepairProject)=>projectAvailable(s,p)&&p.jobs.every(j=>s.done.includes(workKey(p.id,j.resident)))&&Object.entries(repairNeeds(p)).every(([k,n])=>(s.repairStock[k]||0)>=n!);
export function restoreLocation(s:Save,p:RepairProject):Save{
 if(!canRestore(s,p))return s;const repairStock={...s.repairStock};for(const [k,n] of Object.entries(repairNeeds(p)))repairStock[k]-=n!;
 return {...s,repairStock,done:[...s.done,repairKey(p.id)],immortalityDrops:s.immortalityDrops+p.reward};
}
export const residentRepairIntro=(id:RepairResident)=>id==='hunter'||id==='hunter2'?'Шерсть собираем при уходе за животными, без охоты. Принеси материалы для ухода и упаковки.':id==='fisher'?'Принеси ветки для ремонта сетей — подготовлю рыбные припасы рабочим.':id==='elder'?'Я отмечу повреждения и подготовлю план восстановления. Затем проверю работу жителей.':'Принеси материалы — подготовлю всё для восстановления локации.';
