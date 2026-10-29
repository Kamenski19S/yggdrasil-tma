/** Temporary visual playtest. Set this one flag to false to restore normal health. */
export const MAGIC_PLAYTEST_INVULNERABLE=true;
export const playtestHealth=(value:number,maxHp:number)=>MAGIC_PLAYTEST_INVULNERABLE?maxHp:Math.max(0,Math.min(value,maxHp));
export const ICE_STRIKE={charge:.24,speed:160,recover:.55,pause:1.15};
