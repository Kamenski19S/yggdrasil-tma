"""Bake biome weights from the terrain's original atlas; extract XY01's sand.
Usage: python scripts/prepare-jotunheim-ground.py /path/to/tiled_pbr_material__-_sand.glb
Requires Pillow and numpy. Original geometry and UVs are not changed.
"""
import json, struct, sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter
from io import BytesIO

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/img/terrain'
OUT.mkdir(exist_ok=True)

def images(path):
    data = Path(path).read_bytes()
    length = struct.unpack_from('<I', data, 12)[0]
    doc = json.loads(data[20:20 + length])
    binary = data[28 + length:]
    result = []
    for image in doc['images']:
        view = doc['bufferViews'][image['bufferView']]
        start = view.get('byteOffset', 0)
        result.append(Image.open(BytesIO(binary[start:start + view['byteLength']])).convert('RGB'))
    return result

def smoothstep(lo, hi, x):
    t = np.clip((x - lo) / (hi - lo), 0, 1)
    return t * t * (3 - 2 * t)

atlas = images(ROOT / 'public/img/models/Jotunheim_Mountain_Range.glb')[0]
rgb = np.asarray(atlas).astype(float) / 255
r, g, b = rgb.transpose(2, 0, 1)
# Green valleys, warm sandy ground, neutral rock. Blur weights, never the detail maps.
grass = smoothstep(.012, .095, g - (r + b) / 2) * smoothstep(.01, .07, g - b)
sand = smoothstep(.045, .15, r - b) * (1 - smoothstep(-.01, .035, g - r))
sand *= 1 - grass
rock = 1 - sand - grass
mask = Image.fromarray(np.uint8(np.clip(np.stack([sand, grass, rock], axis=-1), 0, 1) * 255))
mask.filter(ImageFilter.GaussianBlur(2.5)).save(OUT / 'jotunheim-biomes.png', optimize=True)
images(sys.argv[1])[0].save(OUT / 'sand-color.webp', quality=90)
# A neutral rock surface, already used by the Norns well; not a packed rock UV atlas.
Image.open(ROOT / 'public/img/models/T_Norns_Stone.jpg').convert('RGB').resize((1024, 576), Image.Resampling.LANCZOS).save(OUT / 'rock-color.webp', quality=88)
print('Prepared sand, neutral stone and smooth biome weights.')
