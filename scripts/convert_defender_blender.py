import bpy
import os
import sys

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
print("MESHES", [o.name for o in meshes])

actions = list(bpy.data.actions)
for action in actions:
    action.use_fake_user = True
    fcurves = getattr(action, "fcurves", [])
    print("ACTION", action.name, "fcurves", len(fcurves), "range", tuple(action.frame_range))

if not actions:
    raise RuntimeError("No Blender actions imported from FBX")
if not any(len(getattr(a, "fcurves", [])) > 0 for a in actions):
    raise RuntimeError("All imported Blender actions are empty")

# Clear any importer-created NLA setup. We'll export all Actions directly where
# supported; older exporters will still have the active action available.
for arm in armatures:
    if arm.animation_data is None:
        arm.animation_data_create()

# Put a sensible idle action on the armature for exporters that require one.
idle = next((a for a in actions if "Idle_Sword" in a.name), None) or next((a for a in actions if "Idle" in a.name), None) or actions[0]
for arm in armatures:
    arm.animation_data.action = idle

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
}
for key, value in optional.items():
    if key in prop_names:
        kwargs[key] = value

if "export_animation_mode" in prop_names:
    enum_ids = {item.identifier for item in props["export_animation_mode"].enum_items}
    print("ANIMATION_MODE_OPTIONS", sorted(enum_ids))
    if "ACTIONS" in enum_ids:
        kwargs["export_animation_mode"] = "ACTIONS"
    elif "NLA_TRACKS" in enum_ids:
        # Build one NLA track per imported action if ACTIONS isn't available.
        for arm in armatures:
            arm.animation_data.action = None
            for old_track in list(arm.animation_data.nla_tracks):
                arm.animation_data.nla_tracks.remove(old_track)
            for action in actions:
                track = arm.animation_data.nla_tracks.new()
                track.name = action.name
                start = float(action.frame_range[0])
                strip = track.strips.new(action.name, start, action)
                strip.action_frame_start = action.frame_range[0]
                strip.action_frame_end = action.frame_range[1]
        kwargs["export_animation_mode"] = "NLA_TRACKS"

print("EXPORT_KWARGS", kwargs)
result = op(**kwargs)
print("EXPORT_RESULT", result)

if not os.path.exists(DST) or os.path.getsize(DST) < 100000:
    raise RuntimeError("GLB export missing or unexpectedly small")
print("GLB_BYTES", os.path.getsize(DST))
