import terrainHeights from './niflheimTerrainHeights.json';
export type NiflLocation={id:string;name:string;x:number;z:number;kind:'gate'|'shelter'|'river'|'cave'|'root'|'source'|'lair'|'lake'|'bridge'|'hall'|'lookout'|'forge'|'mountain';text:string};
export const NIFL_SCALE=2;
export const NIFL_SOURCE={x:0,z:-49*NIFL_SCALE,rx:8*NIFL_SCALE,rz:7*NIFL_SCALE};
export const NIFL_LOCATIONS:NiflLocation[]=([
  {id:'threshold',name:'Порог туманов',x:0,z:62,kind:'gate',text:'За вратами Мидгарда начинается дорога среди льда. Чёрные нити уходят вдоль древних русел.'},
  {id:'shelter',name:'Приют хранителей',x:20,z:44,kind:'shelter',text:'Каменное укрытие защищает от ветра. Здесь Вика встретит хранителей и начнёт поиск пропавших воспоминаний.'},
  {id:'frozenRiver',name:'Замёрзшее русло',x:-10,z:24,kind:'river',text:'Под прозрачным льдом видна чёрная примесь. След ведёт к источнику, питающему эти воды.'},
  {id:'memoryCave',name:'Пещера воспоминаний',x:45,z:8,kind:'cave',text:'В ледяной пещере сохранились следы хранителей. Найденные здесь предметы помогут вспомнить путь к Хвергельмиру.'},
  {id:'roots',name:'Сплетение корней',x:5,z:-24,kind:'root',text:'Корни Иггдрасиля выходят из камня. Между ними тянутся тёмные нити, знакомые Вике по Мидгарду.'},
  {id:'hvergelmir',name:'Хвергельмир',x:0,z:-49,kind:'source',text:'Древний источник не затихает даже среди льдов. Отсюда расходятся три главных русла этой области.'},
  {id:'nidhogg',name:'Логово Нидхёгга',x:28,z:-63,kind:'lair',text:'Под повреждённым корнем открывается глубокая пещера. Из темноты доносится скрежет.'},
  {id:'iceLake',name:'Озеро подо льдом',x:-36,z:4,kind:'lake',text:'В глубине неподвижной воды мерцает путевой знак. На берегу видны следы исчезнувшей экспедиции.'},
  {id:'crossing',name:'Разрушенная переправа',x:-36,z:-6,kind:'bridge',text:'Старый мост пересекает озеро подо льдом, но не достаёт до противоположного берега. Последний пролёт утрачен; здесь предстоит восстановить переправу.'},
  {id:'namesHall',name:'Зал забытых имён',x:-38,z:-39,kind:'hall',text:'Пустые плиты хранят имена, стёртые тьмой. Их возвращение поможет хранителям вспомнить своё прошлое.'},
  {id:'echoCave',name:'Пещера ледяного эха',x:41,z:32,kind:'cave',text:'Туман повторяет чужие голоса. Вике предстоит отличить настоящий зов о помощи от ловушки.'},
  {id:'forge',name:'Кузница хранителей',x:-9,z:45,kind:'forge',text:'В скальной пещере горит горн великана-кузнеца. Здесь можно выбрать золотой меч и золотой щит и укрепить снаряжение.'},
  {id:'snowMountain',name:'Снежная гора',x:-43,z:48,kind:'mountain',text:'За заснеженной аркой открывается просторный каменный зал. Здесь тихо: под сводом горы укрываются от ледяного ветра.'},
  {id:'lookout',name:'Пересохшее русло',x:-18,z:-62,kind:'lookout',text:'Третья река ушла на северо-запад и пересохла. На дне глубокого русла остались трещины; древние корни нависают над пустым ложем.'}
] as NiflLocation[]).map(l=>({...l,x:l.x*NIFL_SCALE,z:l.z*NIFL_SCALE}));
// One centreline drives both the carved bed and its water/ice surface.
const smoothRiver=(points:{x:number;z:number}[])=>{
  const result:{x:number;z:number}[]=[];
  for(let i=0;i<points.length-1;i++){
    const a=points[Math.max(0,i-1)],b=points[i],c=points[i+1],d=points[Math.min(points.length-1,i+2)];
    const steps=Math.ceil(Math.hypot(c.x-b.x,c.z-b.z)/2);
    for(let j=0;j<steps;j++){
      const t=j/steps,t2=t*t,t3=t2*t;
      const at=(key:'x'|'z')=>.5*(2*b[key]+(-a[key]+c[key])*t+(2*a[key]-5*b[key]+4*c[key]-d[key])*t2+(-a[key]+3*b[key]-3*c[key]+d[key])*t3);
      result.push({x:at('x'),z:at('z')});
    }
  }
  result.push(points[points.length-1]);return result;
};
export const NIFL_RIVER_WIDTHS=[7.2,5.4,6.8];
export const NIFL_LIVING_RIVER=1;
export const NIFL_DRY_RIVER=2;
export const NIFL_RIVERS=[
  [{x:0,z:-49},{x:-6,z:-30},{x:-10,z:-5},{x:-8,z:24},{x:-1,z:48},{x:-6,z:74}],
  [{x:0,z:-49},{x:23,z:-34},{x:34,z:-10},{x:29,z:12},{x:39,z:35},{x:57,z:54}],
  [{x:0,z:-49},{x:-18,z:-62},{x:-32,z:-65},{x:-46,z:-60},{x:-51,z:-46},{x:-50,z:-32},{x:-52,z:-20}]
].map(r=>smoothRiver(r.map(p=>({x:p.x*NIFL_SCALE,z:p.z*NIFL_SCALE}))));
export const NIFL_LAKES=[{x:-36,z:4,rx:11,rz:9},{x:26,z:51,rx:6,rz:4}].map(l=>({...l,x:l.x*NIFL_SCALE,z:l.z*NIFL_SCALE,rx:l.rx*NIFL_SCALE,rz:l.rz*NIFL_SCALE}));
export const NIFL_ROUTES=[['threshold','forge'],['forge','shelter'],['threshold','shelter'],['threshold','frozenRiver'],['shelter','echoCave'],['shelter','memoryCave'],['frozenRiver','iceLake'],['iceLake','crossing'],['crossing','namesHall'],['frozenRiver','roots'],['memoryCave','roots'],['namesHall','lookout'],['lookout','hvergelmir'],['roots','hvergelmir'],['hvergelmir','nidhogg']];
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
  let channel=0,dryChannel=0;
  NIFL_RIVERS.forEach((r,index)=>{const half=NIFL_RIVER_WIDTHS[index]/2;
    for(let i=1;i<r.length;i++){
      const a=r[i-1],b=r[i],reach=half+4;
      if(x<Math.min(a.x,b.x)-reach||x>Math.max(a.x,b.x)+reach||z<Math.min(a.z,b.z)-reach||z>Math.max(a.z,b.z)+reach)continue;
      const carved=Math.max(0,Math.min(1,(reach-riverDistance(x,z,a,b))/3));
      if(index===NIFL_DRY_RIVER)dryChannel=Math.max(dryChannel,carved);else channel=Math.max(channel,carved);
    }
  });
  for(const l of [...NIFL_LAKES,NIFL_SOURCE]){
    const edge=Math.hypot((x-l.x)/l.rx,(z-l.z)/l.rz);
    channel=Math.max(channel,Math.max(0,Math.min(1,(1.15-edge)/.15)));
  }
  // Frozen beds remain walkable; softened banks connect them to the snow.
  const wetBed=niflTerrainY(x,z)*(1-channel)-1.05*channel;
  return wetBed*(1-dryChannel)-2.8*dryChannel;
};
export const clampNiflPosition=(x:number,z:number)=>({x:Math.max(-53*NIFL_SCALE,Math.min(53*NIFL_SCALE,x)),z:Math.max(-70*NIFL_SCALE,Math.min(70*NIFL_SCALE,z))});

export const NIFL_ENTRANCE_Z=65*NIFL_SCALE;
export const NIFL_ENTRANCE_HALF_WIDTH=4.2;
// The entrance funnel runs back to the stone boundary at the start of the map.
// Its far ends sit beyond the walkable Z limit, so there is no route around them.
export const NIFL_ENTRANCE_ARCS=[-1,1].map(side=>Array.from({length:33},(_,i)=>{
  const angle=i/32*Math.PI/2;
  return {x:side*(5.4+6.6*Math.sin(angle)),z:NIFL_ENTRANCE_Z+20*(1-Math.cos(angle))};
}));
const wardDistance=(p:{x:number;z:number},a:{x:number;z:number},b:{x:number;z:number})=>{
  const dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz)));
  return Math.hypot(p.x-a.x-t*dx,p.z-a.z-t*dz);
};
const inEntranceWard=(p:{x:number;z:number})=>
  NIFL_ENTRANCE_ARCS.some(arc=>arc.slice(1).some((b,i)=>wardDistance(p,arc[i],b)<.85));
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

// Bank barriers follow the same river centre lines used by the visible ribbons.
export const niflRiverBlocked=(x:number,z:number)=>{
  const frozen=NIFL_RIVERS[0];
  const nearFind=[.72,.53,.34].some(t=>{const p=frozen[Math.floor((frozen.length-1)*t)];return Math.hypot(x-p.x,z-p.z)<NIFL_RIVER_WIDTHS[0]/2+1.5;});
  if(nearFind)return false;
  return NIFL_RIVERS.some((river,index)=>river.slice(1).some((b,i)=>riverDistance(x,z,river[i],b)<NIFL_RIVER_WIDTHS[index]/2+.55));
};
