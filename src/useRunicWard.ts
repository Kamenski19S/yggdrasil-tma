import {useContext,useRef} from 'react';
import {MuspelheimRuneSelection} from './MuspelheimRuneSelect';
import {createRunicWard,RUNIC_RECIPES,RUNE_HINT_PREFIX,THREAD_SECRET,ASH_SOURCE_SEALED,type RunicRitual,type RunicThreat} from './runicCombinations';
export function useRunicWard(){
 const data=useContext(MuspelheimRuneSelection),live=useRef(data);live.current=data;
 const ward=useRef(createRunicWard()).current,seen=useRef(new Set<string>());
 const cast=()=>{const d=live.current;return d?ward.activate(d.pair,d.owned):{ok:false,message:'Сначала выбери две руны.'};};
 const warn=(id:RunicThreat|'insight'|'seal',say:(message:string)=>void)=>{
  const d=live.current;if(!d||seen.current.has(id)||d.done.includes(RUNE_HINT_PREFIX+id))return;
  seen.current.add(id);d.onDiscover(id);const recipe=RUNIC_RECIPES.find(r=>r.id===id);if(recipe)say('Странница: «'+recipe.hint+'»');
 };
 const complete=(event:RunicRitual)=>{const d=live.current,key=event==='threads'?THREAD_SECRET:ASH_SOURCE_SEALED;if(!d||seen.current.has(key)||d.done.includes(key))return false;if(event==='source'&&!d.done.includes(THREAD_SECRET))return false;seen.current.add(key);d.onRitual(event);return true;};
 return {ward,cast,warn,complete};
}
