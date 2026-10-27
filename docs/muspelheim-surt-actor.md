# Surt throne encounter

Surt uses the supplied **Character Free Golem Rock — OSCAR CREATIVO** (CC BY 4.0), with all 90 source skin joints retained. The supplied **FREE | Devil Sword — nodgerty** (CC BY 4.0) is rigidly parented to a palm anchor on the authored right hand. Both source URLs, authors and licenses are listed in the world map.

The giant is fitted to the existing throne at 30 world units tall. Two-bone IK produces seated, rising, standing, walking and sword-windup poses using the original skin. The walking and attack poses are prepared for later use; this encounter has no enemy AI, player targeting, damage or fight rewards.

When Vicki approaches from the front inside the castle, Surt rises for 2.8 seconds, raises the blade for 1.2 seconds, and drives its actual tip into the stone floor. A single 96-particle spark burst, flash and floor ring accompany the hit. A short greeting camera keeps the giant visible. The sequence holds, then Surt stands quietly. Leaving more than 80 units for eight seconds rearms the encounter for testing.

`SURT_TEST_GATE_OPEN` temporarily bypasses the tower gate's gold/keeper requirement. The existing disabled entrance-guard encounter stays disabled. Neither change marks quests complete or pays rewards.

Asset optimization preserves rig, hierarchy, original animation and attribution; UV/weight-aware geometry reduction, compressed textures and animation-key reduction shrink the golem from 67.02 MB to 4.62 MB and the sword from 11.03 MB to 1.40 MB.

Validation: rendered seated/standing/windup poses from front and side; rigid grip, real blade-floor contact, exactly one impact, phase ordering at 20/60/120 FPS, grounded real skinned vertices, prepared walk/attack poses, portrait greeting framing, TypeScript and production bundle build.
