# Kraken respawn

The lake guardian returns with full HP ten real minutes after each defeat. Defeat time is stored separately from the permanent mine quest flag, so exiting the mine and restarting the game preserve the deadline. Old saves whose guardian was permanently hidden revive him immediately on the next mine entry.

The actor resets its sinking timer when alive, allowing later defeat/respawn cycles to render correctly. The minimap shows current life rather than permanent quest completion. The first victory still opens the lake route permanently, and existing one-time quest rewards remain unchanged.

Validation covers the exact 600,000 ms boundary, checkpoint restoration, exit/reentry, migration of old zero-HP saves and repeated actor death/appearance cycles.
