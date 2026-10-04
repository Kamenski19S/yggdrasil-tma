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
export const niflGroundY=(x:number,z:number)=>{
  const height=Math.sin(x/NIFL_SCALE*.075)*.18+Math.cos(z/NIFL_SCALE*.06)*.18;
  const waters=[...NIFL_LAKES,NIFL_SOURCE];
  const edge=Math.min(...waters.map(l=>Math.hypot((x-l.x)/l.rx,(z-l.z)/l.rz)));
  return height*Math.max(0,Math.min(1,(edge-1)/.35));
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
const inEntranceWard=(p:{x:number;z:number})=>NIFL_ENTRANCE_ARCS.some(arc=>arc.slice(1).some((b,i)=>wardDistance(p,arc[i],b)<.55));
export const moveThroughNiflEntrance=(from:{x:number;z:number},x:number,z:number)=>{
  const target=clampNiflPosition(x,z),steps=Math.max(1,Math.ceil(Math.hypot(target.x-from.x,target.z-from.z)/.18));
  let current={...from};const dx=(target.x-from.x)/steps,dz=(target.z-from.z)/steps;
  for(let i=0;i<steps;i++){
    const next={x:current.x+dx,z:current.z+dz};
    // Let an old saved position inside a ward escape rather than trapping it.
    if(!inEntranceWard(next)||inEntranceWard(current)){current=next;continue;}
    const slideX={x:next.x,z:current.z},slideZ={x:current.x,z:next.z};
    if(!inEntranceWard(slideX))current=slideX;
    else if(!inEntranceWard(slideZ))current=slideZ;
  }
  return clampNiflPosition(current.x,current.z);
};
