"""Prepare SJunior3d's CC BY 4.0 Troll without changing the mesh or skeleton.
Usage: python scripts/prepare-troll.py source.glb output.glb
Requires Pillow and numpy. Keeps all eight clips; reduces texture size and redundant keys.
"""
import sys, json, struct, io
from pathlib import Path
import numpy as np
from PIL import Image
src, dst=map(Path,sys.argv[1:3]); raw=src.read_bytes()
n=struct.unpack_from('<I',raw,12)[0]; doc=json.loads(raw[20:20+n]); binary=raw[28+n:]
views=[binary[v.get('byteOffset',0):v.get('byteOffset',0)+v['byteLength']] for v in doc['bufferViews']]
def read(index):
 a=doc['accessors'][index]; v=doc['bufferViews'][a['bufferView']]; size={'SCALAR':1,'VEC3':3,'VEC4':4}[a['type']]
 assert a['componentType']==5126 and not a.get('sparse')
 return np.ndarray((a['count'],size),dtype='<f4',buffer=views[a['bufferView']],offset=a.get('byteOffset',0),strides=(v.get('byteStride',size*4),4)).copy()
def write(data,kind):
 data=np.asarray(data,dtype='<f4'); view=len(views);views.append(data.tobytes());doc['bufferViews'].append({'buffer':0,'byteLength':data.nbytes})
 a={'bufferView':view,'componentType':5126,'count':len(data),'type':kind}
 if kind=='SCALAR':a.update(min=[float(data.min())],max=[float(data.max())])
 idx=len(doc['accessors']);doc['accessors'].append(a);return idx
for anim in doc['animations']:
 start=min(float(read(s['input'])[0,0]) for s in anim['samplers'])
 for s in anim['samplers']:
  assert s.get('interpolation','LINEAR')=='LINEAR'
  times=read(s['input'])-start; values=read(s['output']); kind=doc['accessors'][s['output']]['type']
  # Retain every other sampled frame plus both endpoints; constant tracks need one key.
  selected=[0] if np.max(np.abs(values-values[0]))<1e-7 else sorted(set([*range(0,len(times),2),len(times)-1]))
  s['input']=write(times[selected],'SCALAR');s['output']=write(values[selected],kind)
for im in doc['images']:
 image=Image.open(io.BytesIO(views[im['bufferView']])).convert('RGBA');image.thumbnail((512,512),Image.Resampling.LANCZOS)
 out=io.BytesIO()
 if image.getchannel('A').getextrema()[0]<255:
  image.save(out,format='PNG',optimize=True);im['mimeType']='image/png'
 else:
  image.convert('RGB').save(out,format='JPEG',quality=82,optimize=True);im['mimeType']='image/jpeg'
 views[im['bufferView']]=out.getvalue()
# Remove obsolete animation accessors and their buffers rather than retaining source bytes.
used=set()
for mesh in doc['meshes']:
 for p in mesh['primitives']:
  used.update(p['attributes'].values())
  if 'indices' in p:used.add(p['indices'])
  for target in p.get('targets',[]):used.update(target.values())
for skin in doc.get('skins',[]):
 if 'inverseBindMatrices' in skin:used.add(skin['inverseBindMatrices'])
for anim in doc['animations']:
 for s in anim['samplers']:used.update([s['input'],s['output']])
remap={old:new for new,old in enumerate(sorted(used))};doc['accessors']=[doc['accessors'][i] for i in sorted(used)]
for mesh in doc['meshes']:
 for p in mesh['primitives']:
  p['attributes']={k:remap[v] for k,v in p['attributes'].items()}
  if 'indices' in p:p['indices']=remap[p['indices']]
  for target in p.get('targets',[]):
   for k in target:target[k]=remap[target[k]]
for skin in doc.get('skins',[]):
 if 'inverseBindMatrices' in skin:skin['inverseBindMatrices']=remap[skin['inverseBindMatrices']]
for anim in doc['animations']:
 for s in anim['samplers']:s['input']=remap[s['input']];s['output']=remap[s['output']]
used_views=sorted({a['bufferView'] for a in doc['accessors']}|{im['bufferView'] for im in doc['images']}); remap={old:new for new,old in enumerate(used_views)}
packed=bytearray(); new_views=[]
for i in used_views:
 while len(packed)%4:packed.append(0)
 v={**doc['bufferViews'][i],'byteOffset':len(packed),'byteLength':len(views[i])};new_views.append(v);packed.extend(views[i])
for a in doc['accessors']:a['bufferView']=remap[a['bufferView']]
for im in doc['images']:im['bufferView']=remap[im['bufferView']]
doc['bufferViews']=new_views;doc['buffers']=[{'byteLength':len(packed)}]
doc['asset']['generator']='Yggdrasil: textures 512px, animation keys reduced, clip times normalized; original Sketchfab'
j=json.dumps(doc,separators=(',',':'),ensure_ascii=False).encode();j+=b' '*((-len(j))%4);packed+=b'\0'*((-len(packed))%4)
result=struct.pack('<III',0x46546c67,2,28+len(j)+len(packed))+struct.pack('<II',len(j),0x4e4f534a)+j+struct.pack('<II',len(packed),0x004e4942)+packed
dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(result);print(f'{src.stat().st_size:,} -> {len(result):,} bytes; all 8 clips and mesh preserved')
