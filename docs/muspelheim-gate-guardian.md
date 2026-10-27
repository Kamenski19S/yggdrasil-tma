# Magma guardian of Surt's castle gate

The supplied **Volcanic Stone Lava Magma Golem — Pigcraft**, CC BY 4.0, replaces the dwarf keeper visual beside the castle entrance. Source: https://sketchfab.com/3d-models/volcanic-stone-lava-magma-golem-751d9b868f8a4c5d96deae299a70b98c

The source is a static 55.44 MB mesh without bones or animations. UV-aware reduction brings 971,932 triangles to 24,000. The new weighted 23-bone rig includes torso, head, arms, hands, palm sockets and legs. Authored procedural clips cover idle, magic cast, walking, recoil and falling. The final rigged GLB is 1.31 MB, with source attribution retained and the unused static byte ranges removed.

The guardian is 22 units tall at (-299, 40.05, -366), beside the gate. Vicki's passage through the doorway stays clear. Existing keeper dialogue and fire-gold progression are preserved. Map attribution lists Pigcraft and the CC BY 4.0 license, with the rig/optimization changes described.

The prepared attack charges both palms, then fires a non-homing magma projectile. Movement can dodge it; swept collision prevents tunneling through walls or through Vicki at low frame rates. It follows the existing shield/damage path when enabled. No weapon is attached. Independent health and defeat cooldown use the existing enemy lifecycle.

`GATE_GUARDIAN_COMBAT_ENABLED=false` keeps the encounter peaceful while Surt is being tested. The already-open test gate remains open. The paused orc encounter before the tunnel remains a separate actor.

Validation: real skinned idle/cast/walk renders; normalized weights and 23 valid joints; claw vertices remain attached to hands; real foot vertices stay grounded; spell hit, dodge, pause and thin-wall checks at 5/20/60/120 FPS; disabled actor cannot fire; doorway clearance; TypeScript and production JavaScript/CSS bundle build.

Preparation: run the existing `optimize-muspelheim-orc.mjs` on the supplied golem with a 24,000 triangle target, writing `Muspelheim_Surt_Guard_Static.glb`; then run `rig-muspelheim-gate-golem.mjs` to produce the final rigged file. Both scripts use Three.js and meshoptimizer for the offline preparation only.
