"""Generate the walking height grid from the checked-in GLB (node axis flip included)."""
import json, struct
from pathlib import Path
import numpy as np
from scipy.interpolate import LinearNDInterpolator
root=Path(__file__).resolve().parents[1]
b=(root/'public/img/models/Terrain_Optimized.glb').read_bytes()
n=struct.unpack_from('<I',b,12)[0]; d=json.loads(b[20:20+n]); start=28+n
a=d['accessors'][0]; v=d['bufferViews'][a['bufferView']]
p=np.frombuffer(b,dtype='<f4',count=a['count']*3,offset=start+v.get('byteOffset',0)+a.get('byteOffset',0)).reshape(-1,3)
x,z=np.meshgrid(np.linspace(0,1,97),np.linspace(-1,0,97))
y=LinearNDInterpolator(p[:,[0,2]]*[1,-1],-p[:,1])(x,z)
assert np.isfinite(y).all()
(root/'src/niflheimTerrainHeights.json').write_text(json.dumps(np.round(y,6).ravel().tolist(),separators=(',',':'))+'\n')
