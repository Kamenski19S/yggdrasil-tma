import React, {useEffect,useRef,useState} from 'react';
import {CHAOS_GATES,routePhase,nextRouteGate} from './chaosProgression';
import {MAP_LOCATIONS,MAP_ROADS,MAP_WALLS,mapPosition,riverCenterX,locationState,nextMapGoal,type MapCategory,type MapProgress} from './midgardMapData';

type Props=MapProgress&{hero:{x:number;z:number};onClose:()=>void;onCredits:()=>void};
const GROUPS:Array<{id:'all'|MapCategory;name:string}>=[
 {id:'all',name:'Все'},{id:'trials',name:'Испытания'},{id:'village',name:'Поселение'},
 {id:'treasures',name:'Сундуки'},{id:'resources',name:'Припасы'},{id:'roads',name:'Переходы'}
];
const SHORT_NAMES:Record<string,string>={forge:'Кузница',herbalist:'Сигрид',carpenter:'Бьёрн',craftsman:'Торвальд',house:'Хальвдан',heroHome:'Дом героя',mimir:'Мимир',rune:'Феху',norns:'Норны',threeThreads:'Три Норны',whisperStone:'Шёпот',hoddmimir:'Ходдмимир'};
const COLORS:Record<MapCategory,string>={village:'#71503a',trials:'#715380',treasures:'#a26b19',resources:'#427052',roads:'#356b7b'};
const point=(x:number,z:number)=>{const p=mapPosition(x,z);return [p.x*10,p.y*10] as const;};
const roadPoints=(points:Array<[number,number]>)=>points.map(([x,z])=>point(x,z).join(',')).join(' ');
const riverPoints=Array.from({length:49},(_,i)=>{const z=90-i*3.75;return point(riverCenterX(z),z).join(',');}).join(' ');
export function MidgardMap(props:Props){
 const goal=nextMapGoal(props);
 const routeGate=nextRouteGate(props);
 const [selectedId,setSelectedId]=useState(goal||'forge');
 const [category,setCategory]=useState<'all'|MapCategory>('all');
 const [zoom,setZoom]=useState(1);
 const viewport=useRef<HTMLDivElement>(null),stage=useRef<HTMLDivElement>(null);
 const selected=MAP_LOCATIONS.find(p=>p.id===selectedId)||MAP_LOCATIONS[0];
 const selectedState=locationState(selected,props);
 const visible=MAP_LOCATIONS.filter(p=>category==='all'||p.category===category);
 const hero=mapPosition(props.hero.x,props.hero.z);
 const direction=(delta:number,positive:string,negative:string)=>Math.abs(delta)<8?'':delta>0?positive:negative;
 const bearing=[direction(selected.z-props.hero.z,'север','юг'),direction(selected.x-props.hero.x,'восток','запад')].filter(Boolean).join(' · ')||'рядом';
 const centerAt=(x:number,y:number)=>{const v=viewport.current,s=stage.current;if(v&&s)v.scrollTo({left:x/100*s.offsetWidth-v.clientWidth/2,top:y/100*s.offsetHeight-v.clientHeight/2,behavior:'auto'});};
 useEffect(()=>{const p=mapPosition(selected.x,selected.z);centerAt(p.x,p.y);},[selectedId,zoom]);
 const choose=(id:string)=>{setSelectedId(id);};
 return <div className="mid3d-map-panel midgard-atlas-panel">
  <header className="atlas-header"><div><h2>Карта Мидгарда</h2><p>{MAP_LOCATIONS.length} локаций · выбери метку или место из списка</p></div><button type="button" aria-label="Закрыть карту" onClick={props.onClose}>×</button></header>
  <div className="atlas-body">
   <div className="atlas-tools"><div role="group" aria-label="Масштаб карты"><button aria-label="Уменьшить карту" disabled={zoom===1} onClick={()=>setZoom(z=>z-1)}>−</button><span>{zoom}×</span><button aria-label="Увеличить карту" disabled={zoom===3} onClick={()=>setZoom(z=>z+1)}>+</button></div><button onClick={()=>centerAt(hero.x,hero.y)}>◆ Герой</button><span>Север ↑</span></div>
   <div className="atlas-viewport" ref={viewport} aria-label="Карта: выбери номер локации">
    <div className={'atlas-stage'+(zoom>1?' zoomed':'')} ref={stage} style={{width:zoom*100+'%'}}>
     <svg viewBox="0 0 1000 1000" aria-hidden="true">
      <defs><pattern id="atlas-grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M100 0H0V100" fill="none" stroke="#a7905e" strokeWidth="1" opacity=".2"/></pattern><pattern id="atlas-forest" width="36" height="40" patternUnits="userSpaceOnUse"><path d="M18 5L6 27H30Z" fill="#668166" opacity=".38"/><path d="M18 22V34" stroke="#668166" strokeWidth="3" opacity=".5"/></pattern></defs>
      <rect width="1000" height="1000" fill="#e9dfc2"/><rect width="1000" height="1000" fill="url(#atlas-grid)"/>
      <path d="M110 35Q170 0 280 25L330 185L215 245L135 225Z M410 0H555L590 180L440 175Z M690 0H985V250L810 240L700 160Z M850 315L990 290V505L875 525Z" fill="#c5d0ad"/>
      <path d="M110 35Q170 0 280 25L330 185L215 245L135 225Z M410 0H555L590 180L440 175Z M690 0H985V250L810 240L700 160Z M850 315L990 290V505L875 525Z" fill="url(#atlas-forest)"/>
      <rect x="326" y="252" width="348" height="430" rx="24" fill="#d6c3a0" opacity=".5"/>
      <polyline points={riverPoints} fill="none" stroke="#9abbba" strokeWidth="65" strokeLinecap="round"/>
      <polyline points={riverPoints} fill="none" stroke="#bed9d3" strokeWidth="15" opacity=".6"/>
      {MAP_ROADS.map((r,i)=><polyline key={i} points={roadPoints(r)} fill="none" stroke="#b08c5d" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>)}
      {MAP_WALLS.map(([x,z,xx,zz],i)=>{const a=point(x,z),b=point(xx,zz);return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#887f70" strokeWidth="14" strokeDasharray="14 4"/>;})}
      {MAP_LOCATIONS.filter(p=>p.category==='village').map(p=>{const [x,y]=point(p.x,p.z);return <g key={p.id} transform={`translate(${x},${y})`}><rect x="-17" y="-10" width="34" height="31" rx="3" fill="#ead9b6" stroke="#72563e" strokeWidth="4"/><path d="M-23-8L0-27L23-8Z" fill="#98715a" stroke="#72563e" strokeWidth="3"/></g>;})}
      {MAP_LOCATIONS.filter(p=>p.category==='trials').map(p=>{const [x,y]=point(p.x,p.z);return <g key={p.id} transform={`translate(${x},${y})`}><circle r="24" fill="#c8bbd0" stroke="#887293" strokeWidth="3"/><path d="M0-15L11 0L0 15L-11 0Z" fill="none" stroke="#887293" strokeWidth="4"/></g>;})}
      {MAP_LOCATIONS.filter(p=>p.category==='treasures').map(p=>{const [x,y]=point(p.x,p.z);return <g key={p.id} transform={`translate(${x},${y})`}><rect x="-18" y="-12" width="36" height="25" rx="4" fill="#dcb868" stroke="#87682e" strokeWidth="3"/><path d="M-18-2H18M0-12V13" stroke="#87682e" strokeWidth="3"/></g>;})}
      {MAP_LOCATIONS.filter(p=>p.id==='northBridge'||p.id==='port').map(p=>{const [x,y]=point(p.x,p.z);return <g key={p.id}><rect x={x-40} y={y-12} width="80" height="24" fill="#bdb2a0" stroke="#736b5f" strokeWidth="4"/>{p.id==='northBridge'&&!props.northBridgeRepaired&&<path d={`M${x-10} ${y-10}l20 20m-20 0l20-20`} stroke="#a34a38" strokeWidth="5"/>}</g>;})}
      <text x="500" y="604" textAnchor="middle" fontSize="23" letterSpacing="5" fill="#766348">ПОСЕЛЕНИЕ</text><text x="125" y="890" fontSize="23" fill="#5d7e81" transform="rotate(-90 125 890)">РЕКА</text>
     </svg>
     {visible.map(location=>{const p=mapPosition(location.x,location.z),n=MAP_LOCATIONS.indexOf(location)+1,status=locationState(location,props);return <button key={location.id} type="button" className={'atlas-pin '+status.kind+(selectedId===location.id?' selected':'')+(goal===location.id?' goal':'')+(p.y<14?' label-below':'')+(p.x>80?' label-right':p.x<20?' label-left':'')} style={{left:p.x+'%',top:p.y+'%','--pin-color':COLORS[location.category]} as React.CSSProperties} onClick={()=>choose(location.id)} aria-label={location.name+'. '+status.label} aria-pressed={selectedId===location.id} title={location.name}>
      <span>{n}</span>{(selectedId===location.id||zoom===3)&&<small>{selectedId===location.id?location.name:SHORT_NAMES[location.id]||location.name}</small>}
     </button>;})}
     <div className="atlas-hero" style={{left:hero.x+'%',top:hero.y+'%'}} aria-label="Ты здесь">◆</div>
    </div>
   </div>
   <div className="atlas-legend"><span className="atlas-you">◆ Ты здесь</span><span><i className="done"/>Пройдено</span><span><i className="locked"/>Закрыто</span><span><i className="goal"/>Следующая цель</span></div>
   <section className="atlas-location-detail" aria-live="polite"><div><b>{MAP_LOCATIONS.indexOf(selected)+1}. {selected.name}</b><span className={selectedState.kind}>{selectedState.label}</span></div><p>{selectedState.detail}</p><small>От героя: {bearing}</small></section>
   {goal&&<button className="atlas-next" onClick={()=>{setCategory('all');choose(goal);}}>Следующая цель: {MAP_LOCATIONS.find(p=>p.id===goal)?.name}{routeGate?' · '+routePhase(props,routeGate).label:''} →</button>}
   <details className="atlas-location-detail"><summary><b>Порядок прохождения · {CHAOS_GATES.filter(g=>routePhase(props,g).done).length} / {CHAOS_GATES.length}</b></summary>
    <p>Печать → ремонт с жителями → испытание → следующий этап.</p>
    <div className="atlas-location-list">{CHAOS_GATES.map((g,i)=>{const phase=routePhase(props,g),next=g.id===routeGate?.id;
     const target=g.id==='north'?(props.cleared.includes('north')?'northBridge':'northSeal'):g.id;
     return <button key={g.id} className={next?'selected':''} onClick={()=>{setCategory('all');choose(target);}}><span className={'atlas-number '+(phase.done?'done':next?'open':'locked')}>{i+1}</span><span><b>{g.name}</b><small>{phase.done?'✓ Пройдено':next?'Следующий шаг: '+phase.label:props.cleared.includes(g.id)?phase.label:'После предыдущих этапов'}</small></span></button>;
    })}</div>
   </details>
   <div className="atlas-categories" role="group" aria-label="Типы локаций">{GROUPS.map(g=><button key={g.id} aria-pressed={category===g.id} className={category===g.id?'active':''} onClick={()=>setCategory(g.id)}>{g.name}</button>)}</div>
   <div className="atlas-location-list" aria-label="Все локации">{visible.map(l=>{const st=locationState(l,props);return <button key={l.id} onClick={()=>{choose(l.id);viewport.current?.scrollIntoView({block:'nearest'});}} className={selectedId===l.id?'selected':''} aria-pressed={selectedId===l.id}><span className={'atlas-number '+st.kind}>{MAP_LOCATIONS.indexOf(l)+1}</span><span><b>{l.name}</b><small>{st.label}</small></span></button>;})}</div>
   <p className="atlas-progress">Испытания: {props.completed.length} / 9 · Печати сняты: {props.cleared.length} / 10</p>
  </div>
  <footer className="atlas-footer"><button onClick={props.onClose}>Закрыть карту</button><button onClick={props.onCredits}>Авторы</button></footer>
 </div>;
}
