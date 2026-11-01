import React,{useEffect,useRef,useState} from 'react';
type Props={base:string;shieldEquipped:boolean;onAttack:()=>void;onShield:()=>void;onMagic:()=>void;onBarrier:()=>void;onRunChange:(running:boolean)=>void;doorReady?:boolean;onDoor?:()=>void};
/** Five fixed actions around the contextual door button; holding the boot keeps sprint active. */
export function MuspelheimActionWheel(p:Props){
 const [running,setRunning]=useState(false),runCallback=useRef(p.onRunChange);runCallback.current=p.onRunChange;
 useEffect(()=>()=>runCallback.current(false),[]);
 const run=(value:boolean)=>{setRunning(value);runCallback.current(value);};
 const actions=[{key:'attack',label:'Удар',art:'models/ui_attack.png',action:p.onAttack},{key:'magic',label:'Магия',art:'ui/magic.webp',action:p.onMagic},{key:'barrier',label:'Барьер',art:'ui/barrier.webp',action:p.onBarrier},{key:'run',label:'Бег',art:'ui/run.webp',action:()=>{}},{key:'shield',label:'Щит',art:'models/ui_shield.png',action:p.onShield}];
 return <div className="muspelheim-action-wheel is-open" role="group" aria-label="Круг действий Vicki">
  <button className={`muspelheim-wheel-hub door-hub${p.doorReady?' door-ready':''}`} aria-label="Открыть дверь" disabled={!p.doorReady} onClick={()=>{run(false);p.onDoor?.();}}><img src={`${p.base}img/ui/door.webp`} alt="" draggable={false}/></button>
  <div>{actions.map((a,i)=><button key={a.key} className={`muspelheim-wheel-action wheel-${a.key}`} style={{'--wheel-x':`${Math.cos((-90+i*72)*Math.PI/180)*62}px`,'--wheel-y':`${Math.sin((-90+i*72)*Math.PI/180)*62}px`} as React.CSSProperties} aria-label={a.key==='attack'?'Удар оружием':a.key==='shield'?'Прикрыться щитом':a.key==='magic'?'Огненная магия':a.key==='barrier'?'Магический барьер от заклинаний':'Бег: удерживай кнопку'} disabled={a.key==='shield'&&!p.shieldEquipped} aria-pressed={a.key==='run'?running:undefined} onClick={a.action} onPointerDown={a.key==='run'?e=>{e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);run(true);}:undefined} onPointerUp={a.key==='run'?()=>run(false):undefined} onPointerCancel={a.key==='run'?()=>run(false):undefined} onLostPointerCapture={a.key==='run'?()=>run(false):undefined} onKeyDown={a.key==='run'?e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();run(true);}}:undefined} onKeyUp={a.key==='run'?()=>run(false):undefined} onBlur={a.key==='run'?()=>run(false):undefined}><img src={`${p.base}img/${a.art}`} alt="" draggable={false}/><span>{a.label}</span></button>)}</div>
 </div>;
}
