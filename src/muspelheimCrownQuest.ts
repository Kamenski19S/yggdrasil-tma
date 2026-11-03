import type {Save} from './core';
export const CROWN_ASSEMBLED='muspelheim:crown:assembled';
export const CROWN_PARTS=[{id:'memory',name:'Осколок памяти',flag:'muspelheim:crown:memory',source:'Имир'},{id:'knowledge',name:'Осколок знания',flag:'muspelheim:crown:knowledge',source:'Хранилище трёх нитей'},{id:'will',name:'Осколок воли',flag:'muspelheim:crown:will',source:'Резиденция Владыки'}] as const;
export type CrownEvent='memory'|'assemble';
export function settleCrownFragments(save:Save):Save{
 const flags=[...(save.done.includes('muspelheim:threads:secret')?[CROWN_PARTS[1].flag]:[]),...(save.done.includes('muspelheim:ashLord:sourceSealed')?[CROWN_PARTS[2].flag]:[])].filter(f=>!save.done.includes(f));
 return flags.length?{...save,done:[...save.done,...flags]}:save;
}
export const crownReady=(done:readonly string[])=>CROWN_PARTS.every(p=>done.includes(p.flag))&&done.includes('muspelheim:surt:calmed');
export function applyCrownEvent(save:Save,event:CrownEvent):Save{
 save=settleCrownFragments(save);
 if(event==='memory')return save.done.includes(CROWN_PARTS[0].flag)?save:{...save,done:[...save.done,CROWN_PARTS[0].flag]};
 if(!crownReady(save.done)||save.done.includes(CROWN_ASSEMBLED))return save;
 return {...save,done:[...new Set([...save.done,CROWN_ASSEMBLED,'world:complete:muspelheim'])],artifacts:[...new Set([...save.artifacts,'muspelheim'])]};
}
/** Restore the owner's already-earned fragment, never the assembled artifact or Surt victory. */
export function recoverOwnerCrown(save:Save,username:string,ymirReleased:boolean):Save{
 const next=settleCrownFragments(save);
 return username.replace(/^@/,'').toLowerCase()==='ars_fortunae'&&ymirReleased?applyCrownEvent(next,'memory'):next;
}
