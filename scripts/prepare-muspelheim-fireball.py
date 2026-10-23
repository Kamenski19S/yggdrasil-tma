"""Pack Cethiel's CC0 Fireball Effect (28 frames) into a padded 7x4 atlas.
Source: https://opengameart.org/content/fireball-effect
Usage: python scripts/prepare-muspelheim-fireball.py <Fireball-Effect.zip>
"""
import io,sys,zipfile
from PIL import Image
z=zipfile.ZipFile(sys.argv[1]);files=sorted(n for n in z.namelist() if n.endswith('.png'))
assert len(files)==28
atlas=Image.new('RGBA',(192*7,112*4))
for i,name in enumerate(files):
 image=Image.open(io.BytesIO(z.read(name))).convert('RGBA')
 assert image.width<=188 and image.height<=108
 atlas.paste(image,((i%7)*192+(192-image.width)//2,(i//7)*112+(112-image.height)//2))
atlas.save('public/img/muspelheim-fireball.png',optimize=True)
