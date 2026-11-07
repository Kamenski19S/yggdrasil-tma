# Йотунхейм: материалы поверхности

- `sand-color.webp`: **Tiled PBR material - Sand**, **XY01**
  - Source: https://sketchfab.com/3d-models/tiled-pbr-material-sand-fdd6f27663c049638afbbe30f9e9c93d
  - Author: https://sketchfab.com/XY01
  - License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/
  - Changes: extracted diffuse map from the supplied GLB, converted to WebP.
- `jotunheim-biomes.png`: derived from the base-color atlas of **Mountain Range 01**, **solararchitect**
  - Source: https://sketchfab.com/3d-models/mountain-range-01-6dff907d427f4c9f8d301075f8019c82
  - Author: https://sketchfab.com/solararchitect
  - License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/
  - Changes: RGB biome weights inferred from the original terrain colors and blurred for soft boundaries.
- `rock-color.webp`: resized WebP copy of the existing project asset `../models/T_Norns_Stone.jpg`.
- Grass uses the existing project asset `../models/T_Grass_Green.jpg`.

Generate the new maps with `scripts/prepare-jotunheim-ground.py <path-to-original-sand.glb>`.
The original terrain GLB and its UV coordinates remain unchanged. Textures use world-space triplanar projection; the mask uses the original glTF UV orientation. Area-weighted smooth normals improve lighting without changing walking heights or collision.
