import type {Save,GatherKind} from './core';
export type VillageResident='herbalist'|'carpenter'|'craftsman';
export const VILLAGE_RESIDENTS:VillageResident[]=['herbalist','carpenter','craftsman'];
export const VILLAGE_WARD_COST=300;
const ORDER_COOLDOWN=15*60*1000;
export const resourceName=(kind:GatherKind)=>({wood:'древесина',twigs:'ветки',herbs:'травы',ashWood:'ясеневая древесина'})[kind];
type Order={title:string;cost:Partial<Record<GatherKind,number>>;drops:number;potion?:string;legacy?:string};
const FIRST:Record<VillageResident,Order>={
 herbalist:{title:'Настой для рабочих моста',cost:{herbs:4},drops:30,potion:'northernMoss',legacy:'gather:herbalist'},
 carpenter:{title:'Основание и доски для моста',cost:{wood:3,twigs:3},drops:30,legacy:'gather:carpenter'},
 craftsman:{title:'Крепления Северного моста',cost:{wood:2,twigs:2},drops:30,legacy:'bridge:fittings'}
};
const REPEAT:Record<VillageResident,Order[]>={
 herbalist:[{title:'Пополнить запас лечебных трав',cost:{herbs:4},drops:20,potion:'northernMoss'},{title:'Материалы для сушки трав',cost:{herbs:3,twigs:2},drops:25,potion:'northernMoss'}],
 carpenter:[{title:'Ремонт деревенских домов',cost:{wood:6,twigs:2},drops:35},{title:'Доски для деревенских построек',cost:{wood:4},drops:25},{title:'Починка ограды',cost:{wood:2,twigs:4},drops:30}],
 craftsman:[{title:'Заготовки для щитов',cost:{wood:5,twigs:2},drops:35},{title:'Рукояти для инструментов',cost:{wood:2,twigs:3},drops:25},{title:'Материалы для новых креплений',cost:{wood:3,twigs:2},drops:30}]
};
export const preparationDone=(s:Save,id:VillageResident)=>s.done.includes('bridge:north:repaired')||s.done.includes('defense:'+id);
export const wardPrepared=(s:Save)=>VILLAGE_RESIDENTS.every(id=>preparationDone(s,id));
export function villageOrder(s:Save,id:VillageResident){
 const initial=!preparationDone(s,id);
 const order=initial?FIRST[id]:REPEAT[id][(s.villageOrders[id]||0)%REPEAT[id].length];
 const legacy=initial&&!!order.legacy&&s.done.includes(order.legacy);
 return {...order,cost:legacy?{}:order.cost,potion:legacy?undefined:order.potion,initial};
}
export function orderMaterials(s:Save,id:VillageResident){
 const order=villageOrder(s,id);
 return (Object.entries(order.cost) as [GatherKind,number][]).map(([kind,count])=>`${resourceName(kind)} ${s.stock[kind]}/${count}`).join(' · ')||'Материалы уже сданы ранее';
}
export function canCompleteOrder(s:Save,id:VillageResident,now=Date.now()){
 const order=villageOrder(s,id);
 return (order.initial||now>=(s.locationCooldowns['village:'+id]||0))&&
 (Object.entries(order.cost) as [GatherKind,number][]).every(([kind,count])=>s.stock[kind]>=count);
}
export function completeVillageOrder(s:Save,id:VillageResident,now=Date.now()):Save{
 if(!canCompleteOrder(s,id,now))return s;
 const order=villageOrder(s,id),stock={...s.stock};
 for(const [kind,count] of Object.entries(order.cost) as [GatherKind,number][])stock[kind]-=count;
 const markers=order.initial?['defense:'+id,...(order.legacy?[order.legacy]:[])]:[];
 return {...s,stock,immortalityDrops:s.immortalityDrops+order.drops,
 done:[...new Set([...s.done,...markers])],
 villageOrders:{...s.villageOrders,[id]:(s.villageOrders[id]||0)+1},
 locationCooldowns:{...s.locationCooldowns,['village:'+id]:now+ORDER_COOLDOWN},
 potions:order.potion?[...s.potions,order.potion]:s.potions,
 lootCounts:order.potion?{...s.lootCounts,[order.potion]:(s.lootCounts[order.potion]||0)+1}:s.lootCounts};
}
export function restoreVillageWard(s:Save):Save{
 if(s.done.includes('bridge:north:repaired')||!wardPrepared(s)||s.immortalityDrops<VILLAGE_WARD_COST)return s;
 return {...s,immortalityDrops:s.immortalityDrops-VILLAGE_WARD_COST,
 done:[...new Set([...s.done,'defense:village:restored','bridge:north:repaired'])]};
}
