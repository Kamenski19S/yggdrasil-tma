import React,{createContext,useContext,useEffect,useId,useRef,useState} from 'react';
import {findRunicRecipe,type RunicRitual} from './runicCombinations';
import {RUNE_CATALOG} from './world';
import {normalizeRunePair,selectPairRune,type RunePair} from './runePairSelection';

export type RuneSelection={done:readonly string[];onDiscover:(id:string)=>void;onRitual:(event:RunicRitual)=>void;owned:readonly string[];pair:RunePair;onChange:(pair:RunePair)=>void};
export const MuspelheimRuneSelection=createContext<RuneSelection|null>(null);

/** Two thumb-sized slots below the joystick, shared by every Muspelheim scene. */
export function MuspelheimRuneSelect({onOpen}:{onOpen:()=>void}){
 const data=useContext(MuspelheimRuneSelection),[slot,setSlot]=useState<0|1|null>(null);
 const root=useRef<HTMLDivElement>(null),id=useId(),slotButtons=useRef<(HTMLButtonElement|null)[]>([]);
 const close=()=>{setSlot(null);if(slot!==null)slotButtons.current[slot]?.focus();};
 useEffect(()=>{
  if(slot===null)return;
  const outside=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setSlot(null);};
  const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){e.preventDefault();close();}};
  document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);
  root.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"],.muspelheim-rune-options button')?.focus();
  return ()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[slot]);
 if(!data)return null;
 const available=RUNE_CATALOG.filter(r=>data.owned.includes(r.id));
 const owned=available.map(r=>r.id),pair=normalizeRunePair(data.pair,owned);
 const choose=(rune:string)=>{if(slot===null)return;data.onChange(selectPairRune(pair,slot,rune,owned));close();};
 return <div ref={root} className="mid3d-ui muspelheim-rune-select" onPointerDown={e=>e.stopPropagation()}>
  <div className="muspelheim-rune-slots" role="group" aria-label="Выбор двух рун">
   {pair.map((rune,i)=>{const entry=available.find(r=>r.id===rune),index=i as 0|1;return <button key={i} ref={el=>{slotButtons.current[i]=el;}} type="button" className="muspelheim-rune-slot" aria-label={`Руна ${i+1}: ${entry?.name??'выбрать'}`} aria-expanded={slot===i} aria-controls={slot===i?id:undefined} onClick={()=>{if(slot===i)close();else{onOpen();setSlot(index);}}}><span aria-hidden="true">{entry?.symbol??'+'}</span><small>{entry?.name??`Руна ${i+1}`}</small></button>;})}
  </div>
  {slot!==null&&<section id={id} className="muspelheim-rune-picker" aria-label={`Выбрать руну ${slot+1}`}>
   <div className="muspelheim-rune-picker-title"><b>Руна {slot+1}</b><button type="button" onClick={close} aria-label="Закрыть выбор рун">×</button></div>
   {available.length?<div className="muspelheim-rune-options">{available.map(r=><button type="button" key={r.id} aria-pressed={pair[slot]===r.id} onClick={()=>choose(r.id)}><span aria-hidden="true">{r.symbol}</span><small>{r.name}</small></button>)}</div>:<p>Получи руны в боях или найди их в мире.</p>}
   <p>{findRunicRecipe(pair,owned)?.name??'Выбери сочетание'} · Нажми «Барьер», чтобы пробудить руны.</p>
   {pair[slot]&&<button type="button" className="muspelheim-rune-clear" onClick={()=>choose('')}>Очистить ячейку</button>}
  </section>}
 </div>;
}
