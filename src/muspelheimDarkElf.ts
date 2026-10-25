import type * as THREE from 'three';
import {createShadowAssassin} from './muspelheimShadowAssassin';
export const DARK_ELF_ASSET='Muspelheim_Dark_Elf.glb';
export const DARK_ELF_POSITION={x:75,z:72};
export const DARK_ELF_CREDIT={title:'Dark Elf Spellblade in Obsidian Armor',author:'Pigcraft',url:'https://sketchfab.com/3d-models/dark-elf-spellblade-in-obsidian-armor-02a8d62e2a1b465581a8c715131a38ea'};
/** Same melee/respawn rules as the assassin, with independent health and saved cooldown. */
export function createDarkElf(model:THREE.Object3D,animations:THREE.AnimationClip[],clock=Date.now){
 return createShadowAssassin(model,animations,0,clock,{position:DARK_ELF_POSITION,height:14.5,name:'Тёмная эльфийка',cooldownKey:'yggdrasil:muspelheim:dark-elf:defeatedAt'});
}
