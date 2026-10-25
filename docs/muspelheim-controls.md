# Muspelheim controls

The outdoor world reuses the shared Niflheim control artwork, sizes and responsive positions: map, mill, tasks, joystick, shield, attack and inventory. The central title opens Muspelheim's chronicle; the first-gate dialog and held sprint remain available.

Inventory uses the existing shared save callbacks for potion consumption, rune equipment and fusion. Its HP comes from the outdoor health state. Opening panels clears movement/sprint and pauses the world, fire and hero animation. The task journal reads actual gate and ash-mine progress without granting rewards. The mill saves the outdoor position and returns to Muspelheim through the existing realm navigation.

Weapon attack plays Vicki's actual sword_attack clip once, rejects repeated taps until completion, and returns to locomotion. Shield uses the same timed procedural arm lift as Niflheim. The nearby shadow assassin now engages Vicki; weapon contact is timed once per swing, and the raised shield reduces his strike damage. Environmental fire still bypasses armor and shield.

Validation: TypeScript, Vite build, and scripts/test-muspelheim-hero-actions.mjs using the actual Vicki GLB to verify attack, pause, recovery, shield reset and running. No manual Telegram device test.
