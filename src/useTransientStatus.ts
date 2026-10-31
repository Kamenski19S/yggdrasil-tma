import {useCallback,useEffect,useRef,useState} from 'react';

export const STATUS_DURATION=2800;
/** Replace the deadline on every message, including repeated casts with identical text. */
export function useTransientStatus(initial:string){
 const [status,update]=useState(initial),timer=useRef<ReturnType<typeof setTimeout>>();
 const setStatus=useCallback((message:string,duration=STATUS_DURATION)=>{
  clearTimeout(timer.current);update(message);
  if(message&&!/загруз|не удалось|не загруз|не откры/i.test(message))timer.current=setTimeout(()=>update(''),duration);
 },[]);
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 return [status,setStatus] as const;
}
