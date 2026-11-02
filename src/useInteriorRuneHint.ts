import {useEffect,useRef,useState} from 'react';
const HINTS:Record<string,string>={lightning:'Молния: Эйваз + Альгиз → «Барьер».',fire:'Огонь: Иса + Альгиз → «Барьер».',shadow:'Тьма: Соулу + Альгиз → «Барьер».',insight:'У колодца: Ансуз + Пертр → «Барьер».',seal:'У источника: Кеназ + Турисаз → «Барьер».',secret:'Сначала раскрой память колодца в Хранилище: Ансуз + Пертр.'};
/** Each clue gets three uninterrupted seconds, once per visit. Combat messages use another lane. */
export function useInteriorRuneHint(){
 const [hint,setHint]=useState(''),seen=useRef(new Set<string>()),queue=useRef<string[]>([]),timer=useRef<ReturnType<typeof setTimeout>>(),busy=useRef(false);
 const next=()=>{const message=queue.current.shift();busy.current=!!message;setHint(message??'');if(message)timer.current=setTimeout(next,3000);};
 const show=(id:string)=>{if(seen.current.has(id)||!HINTS[id])return;seen.current.add(id);queue.current.push(HINTS[id]);if(!busy.current)next();};
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 return [hint,show] as const;
}
