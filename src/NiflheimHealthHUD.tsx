import React,{useEffect,useRef,useState} from 'react';
import {FantasyHealthBar} from './FantasyHealthBar';
/** Field encounters do not use the seal battle panel, so keep their HP visible here. */
export function NiflheimHealthHUD({hp,maxHp}:{hp:number;maxHp:number}){
 const previous=useRef(hp),[hit,setHit]=useState(false);
 useEffect(()=>{const injured=hp<previous.current;previous.current=hp;if(!injured){setHit(false);return;}setHit(true);const timer=window.setTimeout(()=>setHit(false),240);return()=>window.clearTimeout(timer);},[hp]);
 const current=Math.max(0,Math.min(maxHp,hp));
 return <div className="mid3d-ui nifl-field-health" style={{position:'absolute',top:86,left:'50%',right:'auto',transform:'translateX(-50%)',width:'calc(100% - 150px)',maxWidth:160,boxSizing:'border-box',zIndex:9,pointerEvents:'none',padding:'3px 6px',border:'1px solid #ae925a88',borderRadius:6,background:'#14242cdd',color:hit?'#ffc7bd':'#fff1d5',fontSize:10,lineHeight:'12px',textShadow:'0 1px 2px #000'}} data-hit={hit} aria-label="Здоровье Vicki в Нифльхейме"><span>Vicki · {current}/{maxHp}</span><FantasyHealthBar value={current} max={maxHp}/></div>;
}
