import type {Save} from './core';
export const MUSPELHEIM_SWORDS=[['Sword_Bakufu.glb','Бакуфу · №1','swordBakufu'],['Sword_LionsRoar.glb','Львиный рык · №7','swordLionsRoar'],['Sword_PrototypeRancour.glb','Прототип · №9','swordPrototype']] as const;
export const MUSPELHEIM_SHIELDS=[['Shield_Stylized.glb','Щит воителя',''],['Shield_GilGalad.glb','Щит Гиль-галада',''],['Shield_Glass.glb','Стеклянный щит','']] as const;
export const MUSPELHEIM_FORGE_MODELS=[...MUSPELHEIM_SWORDS,...MUSPELHEIM_SHIELDS];
/** The six supplied examples become available once when visiting this forge. */
export function grantMuspelheimForgeStock(save:Save):Save{
 const key='muspelheim:forge:arsenal:v1';if(save.done.includes(key))return save;
 const weapons=MUSPELHEIM_SWORDS.map(x=>x[2]),shields=MUSPELHEIM_SHIELDS.map(x=>x[0]),counts={...save.lootCounts};
 for(const id of [...weapons,...shields])counts[id]=Math.max(1,counts[id]||0);
 return {...save,done:[...save.done,key],ownedWeapons:[...new Set([...save.ownedWeapons,...weapons])],ownedShields:[...new Set([...save.ownedShields,...shields])],lootCounts:counts};
}
export const MUSPELHEIM_EQUIPMENT_CREDITS=[
 {title:'10 Genshin Impact Inspired Sword 3D Models',author:'Anime 3D',url:'https://sketchfab.com/3d-models/10-genshin-impact-inspired-sword-3d-models-a25cde4706d04e4cb5ea7ff89ceb5dd9'},
 {title:'Stylized Shield',author:'Arnold Konrad',url:'https://sketchfab.com/3d-models/stylized-shield-233d6ebc5cda4549b6bc85b97b19e1be'},
 {title:"Gil-Galad’s Shield",author:'PaulCarstens',url:'https://sketchfab.com/3d-models/gil-galads-shield-76a5f135cf2746c2a4425f5bd6af8021'},
 {title:'Skyrim Glass Shield',author:'Kommander Karl',url:'https://sketchfab.com/3d-models/skyrim-glass-shield-726cefb9a53b4c35b462a6e96ac9ae3d'}
];
