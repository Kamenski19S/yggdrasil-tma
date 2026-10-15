import type {Save} from './core';

/** Victory is authoritative, including saves from before the artifact was awarded. */
export function settleNiflheimArtifact(save:Save):Save{
 if(!save.done.includes('niflheim:dragon:defeated'))return save;
 const flag='world:complete:niflheim';
 if(save.done.includes(flag)&&save.artifacts.includes('niflheim'))return save;
 return {...save,done:[...new Set([...save.done,flag])],artifacts:[...new Set([...save.artifacts,'niflheim'])]};
}
