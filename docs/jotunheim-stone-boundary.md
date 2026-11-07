# Jotunheim stone perimeter

The current boundary uses **Dunga Stone** by **Francesco Coldesina** (topfrank2013), licensed under **CC BY 4.0**.

- Model: https://sketchfab.com/3d-models/dunga-stone-506e4d2755cb4c64bb9d863636c41486
- Author: https://sketchfab.com/topfrank2013
- License: https://creativecommons.org/licenses/by/4.0/

Attribution is visible on the world map and in its information panel. The prepared GLB also retains the original author, source, license and title metadata, and records the modifications.

## Preparation

The original user-supplied model is left untouched. `public/img/models/Jotunheim_Dunga_Stone.glb` is a prepared copy: deduplicated/welded mesh, simplification with target ratio 0.35 and relative error limit 0.0005, quantized attributes, mesh buffer compression, and lossless normal-texture compression. Both textures retain their 1024×1024 dimensions. The original file is 5,191,060 bytes; the prepared copy is 2,747,164 bytes.

```sh
node scripts/prepare-jotunheim-stone.mjs PATH_TO_ORIGINAL.glb
```

Pass the actual `.glb` path as one argument. Runtime placement adapts scale and deforms each section vertically to the visible terrain after the gateway approach is formed. The scan's texture coordinates and normal map remain in use. Integer mesh attributes are converted to writable floating point attributes before world-space deformation.

## Layout

`src/jotunheimStoneBoundary.ts` builds five wall sections: one on the north, east and west sides, plus two southern sections separated by the gateway opening. The centreline is at ±577 game units. Height is 28 units before the 3.5-unit ground embed; Vicki is 19.25 units tall. Ground embedding hides the scan's irregular lower edges. Sections retain local height above terrain instead of hovering horizontally across mountain slopes.

A continuous invisible perimeter keeps Vicki inside the wall. The southern entrance corridor, spawn at (-140, 571), stairs, rear landing and gateway are open. Camera sampling also accounts for wall height, preventing the follow camera from passing through the scan. The earlier bone boundary remains inactive.

## Validation

```sh
node scripts/test-jotunheim-stone.mjs
node scripts/test-jotunheim-gateway.mjs
npx tsc --noEmit
npx vite build
```

The checks decode the prepared GLB with the production mesh decoder; verify attribution and file size; check finite floating point geometry, terrain conformance, continuous wall layout, collision, entrance clearance and camera height; and retain the existing entrance/headroom regression checks.
