import React,{useEffect,useRef,useState} from 'react';
import {FantasyHealthBar} from './FantasyHealthBar';
/** Field encounters do not use the seal battle panel, so keep their HP visible here. */
export function NiflheimHealthHUD({hp,maxHp}:{hp:number;maxHp:number}){
 const previous=useRef(hp),[hit,setHit]=useState(false);
 useEffect(()=>{const injured=hp<previous.current;previous.current=hp;if(!injured){setHit(false);return;}setHit(true);const timer=window.setTimeout(()=>setHit(false),240);return()=>window.clearTimeout(timer);},[hp]);
 const current=Math.max(0,Math.min(maxHp,hp));
 return <div className="nifl-field-health" data-hit={hit} aria-label="Здоровье Vicki в Нифльхейме"><span>Vicki · {current}/{maxHp}</span><FantasyHealthBar value={current} max={maxHp}/></div>;
}
