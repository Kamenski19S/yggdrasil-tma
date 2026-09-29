import bpy
import os

SRC = os.path.abspath("public/img/models/Adventurer_Defender_Rigged.fbx")
DST = os.path.abspath("public/img/models/Adventurer_Defender_Rigged.glb")

bpy.ops.wm.read_factory_settings(use_empty=True)
print("BLENDER_VERSION", bpy.app.version_string)

try:
    bpy.ops.import_scene.fbx(
        filepath=SRC,
        use_anim=True,
        automatic_bone_orientation=False,
        use_custom_props=True,
    )
except Exception as exc:
    print("FBX_IMPORT_FIRST_ATTEMPT_FAILED", repr(exc))
    try:
        bpy.ops.preferences.addon_enable(module="io_scene_fbx")
    except Exception as enable_exc:
        print("FBX_ADDON_ENABLE", repr(enable_exc))
    bpy.ops.import_scene.fbx(
        filepath=SRC,
        use_anim=True,
        automatic_bone_orientation=False,
        use_custom_props=True,
    )

armatures = [o for o in bpy.context.scene.objects if o.type == "ARMATURE"]
meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
print("IMPORTED", "armatures", len(armatures), "meshes", len(meshes))
print("ARMATURES", [o.name for o in armatures])
for arm in armatures:
    print("BONES", [b.name for b in arm.data.bones])
print("MESHES", [o.name for o in meshes])

if len(armatures) != 1:
    raise RuntimeError(f"Expected exactly one armature, found {len(armatures)}")
if len(meshes) != 5:
    raise RuntimeError(f"Expected five skinned meshes, found {len(meshes)}")

actions = list(bpy.data.actions)
for action in actions:
    action.use_fake_user = True
    try:
        action.id_root = "OBJECT"
    except Exception:
        pass
    fcurves = getattr(action, "fcurves", [])
    print("ACTION", action.name, "fcurves", len(fcurves), "range", tuple(action.frame_range))

expected = ["Death", "HitRecieve", "HitRecieve_2", "Idle", "Idle_Neutral", "Idle_Sword",
            "Interact", "Run", "Sword_Slash", "Walk", "Wave"]
for name in expected:
    if not any(a.name.endswith("|" + name) for a in actions):
        raise RuntimeError(f"Missing imported action: {name}")
if not all(len(getattr(a, "fcurves", [])) > 0 for a in actions):
    raise RuntimeError("One or more imported Blender actions are empty")

# The FBX contains 11 independent takes. Blender imports them as Actions.
# Put each Action on its own NLA track so the glTF exporter serializes every take,
# rather than only the active Action.
for arm in armatures:
    if arm.animation_data is None:
        arm.animation_data_create()
    arm.animation_data.action = None
    for old_track in list(arm.animation_data.nla_tracks):
        arm.animation_data.nla_tracks.remove(old_track)
    for action in actions:
        track = arm.animation_data.nla_tracks.new()
        # Strip the doubled armature prefix for clean GLB clip names.
        clean_name = action.name.split("|")[-1]
        track.name = clean_name
        start = int(round(action.frame_range[0]))
        strip = track.strips.new(clean_name, start, action)
        strip.action_frame_start = action.frame_range[0]
        strip.action_frame_end = action.frame_range[1]
        strip.blend_type = "REPLACE"
        strip.extrapolation = "NOTHING"
        track.mute = False
        print("NLA_TRACK", track.name, tuple(action.frame_range))

op = bpy.ops.export_scene.gltf
props = op.get_rna_type().properties
prop_names = set(props.keys())
print("GLTF_EXPORT_PROPERTIES", sorted(prop_names))

kwargs = {
    "filepath": DST,
    "export_format": "GLB",
}
optional = {
    "use_selection": False,
    "export_animations": True,
    "export_skins": True,
    "export_morph": True,
    "export_yup": True,
    "export_apply": False,
    "export_force_sampling": True,
    "export_nla_strips": True,
    "export_def_bones": False,
    "export_optimize_animation_size": False,
    "export_anim_single_armature": True,
}
for key, value in optional.items():
    if key in prop_names:
        kwargs[key] = value

if "export_animation_mode" in prop_names:
    enum_ids = {item.identifier for item in props["export_animation_mode"].enum_items}
    print("ANIMATION_MODE_OPTIONS", sorted(enum_ids))
    if "NLA_TRACKS" not in enum_ids:
        raise RuntimeError("Blender glTF exporter does not support NLA_TRACKS")
    kwargs["export_animation_mode"] = "NLA_TRACKS"

print("EXPORT_KWARGS", kwargs)
result = op(**kwargs)
print("EXPORT_RESULT", result)

if not os.path.exists(DST) or os.path.getsize(DST) < 100000:
    raise RuntimeError("GLB export missing or unexpectedly small")
print("GLB_BYTES", os.path.getsize(DST))
