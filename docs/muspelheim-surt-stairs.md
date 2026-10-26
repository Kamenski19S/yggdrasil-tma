# Surt tunnel stair replacement

The old 269 small generated treads are replaced by four fitted flights (44 larger treads) from **Stairs — FantasyDragon**, CC BY 4.0:
https://sketchfab.com/3d-models/stairs-e2d8248414b74116b6e351142887593e

The lower flight is extracted with its original curved handrails, balusters and step geometry, welded and fitted to the existing two ascent runs. The prepared GLB is 1.64 MB (source 6.03 MB). Stone texture matches the surrounding tunnel; small threshold blocks close the module entrances. Endpoints and the turning landing retain the existing continuous route.

Walking heights are cached from the actual stair geometry; the camera follows those same heights. Known passage surfaces bypass the ravine's natural-slope limit so the larger risers remain traversable in both directions. Existing passage walls still prevent leaving the route.

For temporary route testing, `SURT_GUARD_COMBAT_ENABLED` in `Muspelheim3D.tsx` is false. The orc before the tunnel stays idle and is excluded from targeting, damage, HUD and body collision. Other enemies and saved cooldowns remain intact. Set the flag to true to restore the encounter.

Validation: TypeScript, production Vite build, and passage traversal test (2,144 forward/reverse samples, 1,871 camera samples and 1,830 off-centre entrance approach samples).

## Movement and door follow-up

The runtime's separate 3-unit movement-height gate still rejected larger risers despite the passage slope bypass. Passage-owned movement now accepts an 8-unit step; the stair-floor continuity window also covers a running frame plus the model's tread offset. Natural-terrain limits are unchanged. Regression traversals cover 18/29 unit movement at 10, 20, 30 and 60 FPS, forward and backward, down the centre and both sides. Largest observed frame rise: 5.42 units.

Both room doors close after passage in either direction, with a short delay. Closure waits until the hero clears the doorway and the full leaf swing; returning into that area reverses a closing door. Manual opening remains available from both sides.
