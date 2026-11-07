# Jotunheim bone boundary

Historical prototype, disabled at the user's request. The current game mounts the stone boundary documented in `jotunheim-stone-boundary.md`; these bone assets are not loaded by the world.

The edge of the playable mountain country is marked by petrified remains of ancient giants and primordial monsters. Rib windows reveal unreachable distant peaks. The story draws on the image of Ymir's bones becoming mountains.

## Assets

Five self-contained GLBs live in `public/img/models/`:

- `Jotunheim_Bone_Ribs.glb`: the supplied row of tied, carved ribs.
- `Jotunheim_Bone_Spine.glb`: the supplied chain of enormous vertebrae.
- `Jotunheim_Bone_Barricade.glb`: the supplied crossed bone barricade.
- `Jotunheim_Bone_Skull.glb`: the supplied ancient monster skull.
- `Jotunheim_Bone_Arch.glb`: a pair of curved, tapered spatial ribs with a central viewing window.

The four image-derived assets are sealed, two-sided **relief meshes**, not full anatomical reconstructions. Rounded depth, closed side walls and separate bone-grain side UVs prevent them from becoming invisible from behind. Their embedded WebP textures preserve the supplied artwork. The arch is built from closed three-dimensional tube geometry. Models use normalized dimensions; placement determines their game size.

`src/jotunheimBoundary.ts` places 28 skeletal sections around the four edges with varied heights, angles and slight leans. Rib heights are 185–250 game units, roughly 17–23 metres using Vicki's 19.25-unit height as a 1.75 m reference. Four skulls are occasional landmarks. Stones fill intervals and cosmetic mountain silhouettes stand outside the playable world.

Geometry and materials are shared through per-edge `InstancedMesh` batches. Ground height comes from the visible mountain GLB after the entrance terrace is formed. Meshes are bedded into the lower of three local terrain samples so the bases do not float over slopes.

## Collision and entry

The continuous invisible perimeter is at ±552 units. The southern side has a recess from x = -200 to -80 up to z = 580 for the existing entrance, stairs and spawn at (-140, 571). The original outer map limit remains ±580. Decorative windows and apparent gaps never permit leaving the map. Saved positions outside the new perimeter return to the entrance.

## Build and validation

With the four original user-supplied PNGs in a source directory:

```sh
python scripts/build-jotunheim-bones.py SOURCE_DIRECTORY
```

Source names are recorded in the build script. Python requires NumPy, Pillow, SciPy and Matplotlib. Run the existing `optimizeGlbLossless` helper on the generated GLBs to compress their buffers without changing geometry. The report in `scripts/assets/jotunheim-bones-report.json` records the final asset sizes.

```sh
node scripts/test-jotunheim-boundary.mjs
node scripts/test-jotunheim-gateway.mjs
npx tsc --noEmit
npx vite build
```

Boundary validation decodes the production GLBs, checks closed geometric edges and finite data, budgets asset size/geometry/batches, verifies the continuous perimeter, and checks every instance against the entrance corridor. Gateway regression checks retain the rear terrace, headroom and portrait framing.
