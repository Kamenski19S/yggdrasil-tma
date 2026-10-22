"""Retain the authored terrain and attribution; convert legacy material for Three.js."""
import io,json,struct,sys
from pathlib import Path
from PIL import Image
b=Path(sys.argv[1]).read_bytes();n=struct.unpack_from('<I',b,12)[0];d=json.loads(b[20:20+n]);raw=bytearray(b[28+n:])
for material in d['materials']:
 legacy=material.pop('extensions',{}).get('KHR_materials_pbrSpecularGlossiness',{})
 material['pbrMetallicRoughness']={'baseColorTexture':legacy['diffuseTexture'],'baseColorFactor':legacy.get('diffuseFactor',[1,1,1,1]),'metallicFactor':0,'roughnessFactor':1}
d.pop('extensionsUsed',None);d.pop('extensionsRequired',None)
for image in d['images']:
 v=d['bufferViews'][image['bufferView']];start=v.get('byteOffset',0);im=Image.open(io.BytesIO(raw[start:start+v['byteLength']])).convert('RGB');out=io.BytesIO();im.save(out,'JPEG',quality=90,optimize=True);data=out.getvalue();raw.extend(bytes((-len(raw))%4));image['bufferView']=len(d['bufferViews']);d['bufferViews'].append({'buffer':0,'byteOffset':len(raw),'byteLength':len(data)});raw.extend(data);image['mimeType']='image/jpeg'
d['asset']['extras']['modifications']='Yggdrasil: legacy material converted to metallic-roughness; texture compressed. Authored terrain geometry and attribution preserved. Charcoal coloring and terrain blending applied at runtime.'
# Remove the replaced PNG bufferView instead of carrying unused source bytes.
used=sorted({a['bufferView'] for a in d['accessors']}|{im['bufferView'] for im in d['images']});compact=bytearray();views=[];remap={}
for old in used:
 v=d['bufferViews'][old];compact.extend(bytes((-len(compact))%4));remap[old]=len(views);views.append({**v,'byteOffset':len(compact)});start=v.get('byteOffset',0);compact.extend(raw[start:start+v['byteLength']])
for a in d['accessors']:a['bufferView']=remap[a['bufferView']]
for im in d['images']:im['bufferView']=remap[im['bufferView']]
d['bufferViews']=views;raw=compact
d['buffers']=[{'byteLength':len(raw)}];raw.extend(bytes((-len(raw))%4));j=json.dumps(d,separators=(',',':')).encode();j+=b' '*((-len(j))%4)
output=struct.pack('<5I',0x46546c67,2,28+len(j)+len(raw),len(j),0x4e4f534a)+j+struct.pack('<2I',len(raw),0x004e4942)+raw
Path('public/img/models/Muspelheim_Canyon_Ridge.glb').write_bytes(output);print('ridge bytes',len(b),'->',len(output))
