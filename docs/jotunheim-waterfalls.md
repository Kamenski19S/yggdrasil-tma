# Three waterfall landscapes — 9 November 2026

This step installs static scenery only. Moving water, new rivers, caves and their gameplay are deferred. The apparent water in the source scans is part of their photographed textures. The Digitise3D source's whole-object turntable animation is deliberately removed.

| Location | Source | Author | License | Prepared size |
| --- | --- | --- | --- | --- |
| West valley, x −300 / z 150 | [Waterfall](https://sketchfab.com/3d-models/waterfall-d2584b93416a4bf6b543e520a8583d5d) | [Digitise3D](https://sketchfab.com/Digitise3D) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 1,489,504 bytes |
| Eastern mountains, x 260 / z −230 | [Hengifoss waterfall](https://sketchfab.com/3d-models/hengifoss-waterfall-f522842a45114d208361423730607c74) | [matousekfoto](https://sketchfab.com/matousekfoto) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 1,279,296 bytes |
| Northern mountains, x −240 / z −570 | [Day 243: Waterfall](https://sketchfab.com/3d-models/day-243-waterfall-abc802469b564113b104b1323c4c7eee) | [alban](https://sketchfab.com/alban) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 526,228 bytes |

The supplied originals total 26,758,748 bytes; prepared files total 3,295,028 bytes (87.7% smaller). Full attribution is retained in each GLB and shown through the map's information button.

Framing rocks reuse [Cliff | Low-Poly | Game-ready](https://sketchfab.com/3d-models/cliff-low-poly-game-ready-918dc8e1b1f0443993a251c1302510bf) by [kEam](https://sketchfab.com/keam.wf), CC BY 4.0, already present in the repository as `Muspelheim_Basalt_Cliff.glb`. Its file is unchanged; Jotunheim creates its own materials with neutral stone grading and retained green moss.

Modifications: mesh simplification, coordinate quantization, buffer and texture compression; neutral stone grading with protected green vegetation and white water; individual scales, rotations and partial burial into terrain; overlapping rock shoulders and rear caps. Terrain is locally refined, raised behind the scans and blended into the valley at their feet. New steep mountain faces use rock rather than stretched grass. Original source UV placement is retained.

`Водопад 1`, `Водопад 2`, `Водопад 3` provide inspection viewpoints. Walking and camera height sampling includes the actual scan and framing-rock triangles, without changing the gateway.

Rebuild the prepared assets:

```sh
node scripts/prepare-jotunheim-waterfalls.mjs /path/to/waterfall.glb /path/to/hengifoss_waterfall.glb /path/to/day_243_waterfall.glb
```

Validation: `npx tsc --noEmit`, `npx vite build`, and `node scripts/test-jotunheim-waterfalls.mjs`; existing terrain, gateway and perimeter tests remain applicable. Local offscreen rendered compositions were inspected; this does not replace a final check inside Telegram on the player's device.

## Camera and third-site correction

The follow view now uses a 38-unit low boom, without waterfall-specific distance or elevation boosts. Obstacles shorten or turn the boom rather than lifting it into an aerial view. The downward viewing angle is limited; portrait projection checks keep Vicki fully visible at about 50% of viewport height at the three inspection positions. Teleport shortcuts snap directly to the follow view.

The entire third composition (scan, framing rocks, rear terrain mound and inspection viewpoint) is rotated by half a turn. Its opening is now to the north, with its rear slope on the south side. Its vertical placement is adjusted to the ground on that side. The first two compositions retain their direction.

Additional validation: `node scripts/test-jotunheim-camera.mjs`, including high banks, narrow canyons and portrait views of all three sites.

## Full-world map and grounded scan edges

The overview uses a separate orthographic camera fitted to the actual terrain, gateway, fence and waterfall bounds. Its frustum reserves space for the top controls and adapts on resize. Fog is disabled only for the map; the walking view retains its fog. A gold trace follows the real fence segments, with labels for the entry, three waterfalls and Vicki. Movement controls are hidden while viewing the map.

Open lower scan cuts are detected after welding positions across texture-atlas seams. Overlapping instances of the existing `Muspelheim_Basalt_Cliff.glb` support those cuts, with their bases buried below the surrounding terrain footprint. High waterfall and foliage silhouettes remain open. The foundations also participate in walking and camera collision sampling.

Validation: `node scripts/test-jotunheim-overview.mjs` checks complete bounds visibility in four portrait/landscape sizes and buried foundation bases and reuse of the existing cliff geometry. Offscreen geometry renders were inspected separately from the Telegram client.
