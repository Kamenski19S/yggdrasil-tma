import io,json,struct,sys
from pathlib import Path
from PIL import Image
src,dst=map(Path,sys.argv[1:3]);b=src.read_bytes();n=struct.unpack_from('<I',b,12)[0];d=json.loads(b[20:20+n]);binary=b[28+n:]
parts=[];views=[];offset=0
for im_id,im in enumerate(d['images']):
 v=d['bufferViews'][im['bufferView']];q=Image.open(io.BytesIO(binary[v.get('byteOffset',0):v.get('byteOffset',0)+v['byteLength']])).convert('RGB');q.thumbnail((512,512));out=io.BytesIO();q.save(out,format='JPEG',quality=82,optimize=True);im['_bytes']=out.getvalue()
image_views={im['bufferView']:im for im in d['images']}
for i,v in enumerate(d['bufferViews']):
 p=(4-offset%4)%4;parts.append(bytes(p));offset+=p
 data=image_views[i]['_bytes']if i in image_views else binary[v.get('byteOffset',0):v.get('byteOffset',0)+v['byteLength']]
 views.append({**v,'byteOffset':offset,'byteLength':len(data)});parts.append(data);offset+=len(data)
for im in d['images']:del im['_bytes'];im['mimeType']='image/jpeg'
d['bufferViews']=views;d['buffers']=[{'byteLength':offset}];d['asset']['extras']['modifications']='Yggdrasil: original 730-triangle geometry and UVs retained; base color, packed PBR and normal textures resized to 512 px and compressed as JPEG. Original attribution and license preserved.'
j=json.dumps(d,separators=(',',':')).encode();j+=b' '*((4-len(j)%4)%4);bb=b''.join(parts);bb+=bytes((4-len(bb)%4)%4);out=struct.pack('<IIIII',0x46546c67,2,28+len(j)+len(bb),len(j),0x4e4f534a)+j+struct.pack('<II',len(bb),0x004e4942)+bb;dst.write_bytes(out);print(json.dumps({'input':len(b),'output':len(out)}))
