import terrainHeights from './niflheimTerrainHeights.json';
export type NiflLocation={id:string;name:string;x:number;z:number;kind:'gate'|'shelter'|'river'|'cave'|'root'|'source'|'lair'|'lake'|'bridge'|'hall'|'lookout';text:string};
export const NIFL_SCALE=2;
export const NIFL_SOURCE={x:0,z:-49*NIFL_SCALE,rx:8*NIFL_SCALE,rz:7*NIFL_SCALE};
export const NIFL_LOCATIONS:NiflLocation[]=([
  {id:'threshold',name:'Порог туманов',x:0,z:62,kind:'gate',text:'За вратами Мидгарда начинается дорога среди льда. Чёрные нити уходят вдоль древних русел.'},
  {id:'shelter',name:'Приют хранителей',x:20,z:44,kind:'shelter',text:'Каменное укрытие защищает от ветра. Здесь Вика встретит хранителей и начнёт поиск пропавших воспоминаний.'},
  {id:'frozenRiver',name:'Замёрзшее русло',x:-10,z:24,kind:'river',text:'Под прозрачным льдом видна чёрная примесь. След ведёт к источнику, питающему эти воды.'},
  {id:'memoryCave',name:'Пещера воспоминаний',x:36,z:8,kind:'cave',text:'В ледяной пещере сохранились следы хранителей. Найденные здесь предметы помогут вспомнить путь к Хвергельмиру.'},
  {id:'roots',name:'Сплетение корней',x:5,z:-24,kind:'root',text:'Корни Иггдрасиля выходят из камня. Между ними тянутся тёмные нити, знакомые Вике по Мидгарду.'},
  {id:'hvergelmir',name:'Хвергельмир',x:0,z:-49,kind:'source',text:'Древний источник не затихает даже среди льдов. Отсюда расходятся три главных русла этой области.'},
  {id:'nidhogg',name:'Логово Нидхёгга',x:28,z:-63,kind:'lair',text:'Под повреждённым корнем открывается глубокая пещера. Из темноты доносится скрежет.'},
  {id:'iceLake',name:'Озеро подо льдом',x:-36,z:4,kind:'lake',text:'В глубине неподвижной воды мерцает путевой знак. На берегу видны следы исчезнувшей экспедиции.'},
  {id:'crossing',name:'Разрушенная переправа',x:-32,z:-18,kind:'bridge',text:'Через западное русло перекинуты остатки каменной переправы. Здесь предстоит восстановить древний путь.'},
  {id:'namesHall',name:'Зал забытых имён',x:-38,z:-39,kind:'hall',text:'Пустые плиты хранят имена, стёртые тьмой. Их возвращение поможет хранителям вспомнить своё прошлое.'},
  {id:'echoCave',name:'Пещера ледяного эха',x:41,z:32,kind:'cave',text:'Туман повторяет чужие голоса. Вике предстоит отличить настоящий зов о помощи от ловушки.'},
  {id:'lookout',name:'Площадка у корней',x:-18,z:-62,kind:'lookout',text:'Отсюда видны источник и заражённые потоки. Над льдом возвышаются древние корни Иггдрасиля.'}
] as NiflLocation[]).map(l=>({...l,x:l.x*NIFL_SCALE,z:l.z*NIFL_SCALE}));
export const NIFL_RIVERS=[
  [{x:0,z:-49},{x:-6,z:-30},{x:-10,z:-5},{x:-8,z:24},{x:-1,z:48},{x:-6,z:74}],
  [{x:0,z:-49},{x:-19,z:-35},{x:-32,z:-18},{x:-30,z:4},{x:-44,z:27},{x:-57,z:49}],
  [{x:0,z:-49},{x:23,z:-34},{x:34,z:-10},{x:29,z:12},{x:39,z:35},{x:57,z:54}]
].map(r=>r.map(p=>({x:p.x*NIFL_SCALE,z:p.z*NIFL_SCALE})));
export const NIFL_LAKES=[{x:-36,z:4,rx:11,rz:9},{x:26,z:51,rx:6,rz:4}].map(l=>({...l,x:l.x*NIFL_SCALE,z:l.z*NIFL_SCALE,rx:l.rx*NIFL_SCALE,rz:l.rz*NIFL_SCALE}));
export const NIFL_ROUTES=[['threshold','shelter'],['threshold','frozenRiver'],['shelter','echoCave'],['shelter','memoryCave'],['frozenRiver','iceLake'],['iceLake','crossing'],['crossing','namesHall'],['frozenRiver','roots'],['memoryCave','roots'],['namesHall','lookout'],['lookout','hvergelmir'],['roots','hvergelmir'],['hvergelmir','nidhogg']];
// GLB bounds mapped to the existing world; keep the entrance foundation level.
export const niflTerrainY=(x:number,z:number)=>{
  const gx=Math.max(0,Math.min(96,(x/240+.5)*96)),gz=Math.max(0,Math.min(96,(z/312+.5)*96));
  const ix=Math.min(95,Math.floor(gx)),iz=Math.min(95,Math.floor(gz)),tx=gx-ix,tz=gz-iz;
  const at=(dx:number,dz:number)=>terrainHeights[(iz+dz)*97+ix+dx];
  const h=((at(0,0)*(1-tx)+at(1,0)*tx)*(1-tz)+(at(0,1)*(1-tx)+at(1,1)*tx)*tz)*24;
  const entrance=Math.max(0,Math.min(1,(Math.hypot(x/1.4,z-130)-15)/12));
  return h*entrance;
};
const riverDistance=(x:number,z:number,a:{x:number;z:number},b:{x:number;z:number})=>{
  const dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz)));
  return Math.hypot(x-a.x-t*dx,z-a.z-t*dz);
};
export const niflGroundY=(x:number,z:number)=>{
  let channel=0;
  NIFL_RIVERS.forEach((r,index)=>{const half=(index===0?4.3:3.2)/2;
    for(let i=1;i<r.length;i++)channel=Math.max(channel,Math.max(0,Math.min(1,(half+4-riverDistance(x,z,r[i-1],r[i]))/3)));
  });
  for(const l of [...NIFL_LAKES,NIFL_SOURCE]){
    const edge=Math.hypot((x-l.x)/l.rx,(z-l.z)/l.rz);
    channel=Math.max(channel,Math.max(0,Math.min(1,(1.15-edge)/.15)));
  }
  // Frozen beds remain walkable; softened banks connect them to the snow.
  return niflTerrainY(x,z)*(1-channel)-1.05*channel;
};
export const clampNiflPosition=(x:number,z:number)=>({x:Math.max(-53*NIFL_SCALE,Math.min(53*NIFL_SCALE,x)),z:Math.max(-70*NIFL_SCALE,Math.min(70*NIFL_SCALE,z))});

export const NIFL_ENTRANCE_Z=65*NIFL_SCALE;
export const NIFL_ENTRANCE_HALF_WIDTH=4.2;
// Two short quarter-circle wards link the frame to its adjacent stones.
export const NIFL_ENTRANCE_ARCS=[-1,1].map(side=>Array.from({length:13},(_,i)=>{
  const angle=i/12*Math.PI/2;
  return {x:side*(NIFL_ENTRANCE_HALF_WIDTH+4.9*Math.sin(angle)),z:NIFL_ENTRANCE_Z-4.5+4.5*Math.cos(angle)};
}));
const wardDistance=(p:{x:number;z:number},a:{x:number;z:number},b:{x:number;z:number})=>{
  const dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz)));
  return Math.hypot(p.x-a.x-t*dx,p.z-a.z-t*dz);
};
// Include the adjacent stone footings so the ends of a ward cannot be slipped through.
const inEntranceWard=(p:{x:number;z:number})=>
  NIFL_ENTRANCE_ARCS.some(arc=>arc.slice(1).some((b,i)=>wardDistance(p,arc[i],b)<.85))||
  [-1,1].some(side=>Math.abs(p.x-side*8.1)<1.65&&Math.abs(p.z-125.5)<1.35);
export const moveThroughNiflEntrance=(from:{x:number;z:number},x:number,z:number)=>{
  const target=clampNiflPosition(x,z),steps=Math.max(1,Math.ceil(Math.hypot(target.x-from.x,target.z-from.z)/.18));
  let current={...from};const dx=(target.x-from.x)/steps,dz=(target.z-from.z)/steps;
  for(let i=0;i<steps;i++){
    const next={x:current.x+dx,z:current.z+dz};
    // Let an old saved position inside a ward escape rather than trapping it.
    if(!inEntranceWard(next)){current=next;continue;}
    if(inEntranceWard(current)){current=next;continue;}
    const slideX={x:next.x,z:current.z},slideZ={x:current.x,z:next.z};
    if(!inEntranceWard(slideX))current=slideX;
    else if(!inEntranceWard(slideZ))current=slideZ;
  }
  return clampNiflPosition(current.x,current.z);
};
