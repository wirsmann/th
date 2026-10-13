# Handy Lounge Timer

A small web app that runs timed sessions on a **The Handy** device through the Handy cloud API. It has an optional "tease mode" driven by personalities in a simulated chat room called The Lounge.

There's no build step, no server and no dependencies. Open `index.html` in a browser, enter your Handy connection key, and press Start.

## Files

| File | What it holds |
|---|---|
| `index.html` | The app: layout, styles, device control, tease engine, lounge logic (about 170 KB) |
| `dialogue.js` | Everything the personalities say. It's pure data, loaded by `index.html` before the main script. |

Keep the two files in the same folder. `index.html` loads `dialogue.js` with a plain `<script src="dialogue.js">` tag, so double-clicking `index.html` still works with no server.

## Requirements

You don't need a device to try it out (see Simulation mode below). For real sessions you need:

- A Handy device that's online and connected to Wi-Fi
- Its **connection key** (from the Handy app or onboarding)
- A modern browser (Chrome, Firefox, Edge or Safari)

## How it talks to the device

All control goes through the Handy REST API v2:

- Base URL: `https://www.handyfeeling.com/api/handy/v2`
- Auth: the `X-Connection-Key` header
- Endpoints used:
  - `GET /connected` checks that the device is online.
  - `PUT /mode` sets the mode: `0` is HAMP (stroking) and `2` is HDSP (position control, used to park the device for lube breaks).
  - `PUT /slide` sets the stroke range (`min`/`max`, 0 to 100).
  - `PUT /hamp/velocity`, `/hamp/start` and `/hamp/stop` set the speed and start or stop the device.
  - `PUT /hdsp/xpvp` moves the device slowly to the park position.

Speed updates are throttled: a new value is only sent when it changes by 3 or more points, and at most every 1.5 seconds. Stop commands retry up to 5 times. Closing the tab sends a `keepalive` stop request.

## Simulation mode

Press the **Simulation** button under the Tease mode button on the dashboard to run without a Handy. Everything works as normal: timers, tease mode, personalities, demands, lube breaks and the graph. The difference is that every API call is answered by a fake device in the page, and nothing goes over the network.

- The button turns orange and a **Simulation** badge appears next to the title.
- A "Simulated Handy" box sits at the right of the lounge header, beside the heat bar and the names. It shows the stroke range, a moving position marker, the current state (stroking, stopped, moving to park, parked) and strokes per second. It stays visible all the time.
- When a personality asks you something or offers a choice, the simulated user answers after a short pause (usually the main option, sometimes a refusal, sometimes no answer), so the session runs without anyone clicking.
- No connection key is needed.
- Simulated sessions aren't written to the log, and they don't count toward the daily limit, cooldown or lockouts. An active limit or lockout still blocks Start.
- You can't switch simulation on or off while a session is running.

The fake device roughly follows the real one: speed is a share of the maximum travel speed, so a shorter stroke range gives more strokes per second.

## Layout

- **The Lounge** (left) has, from top to bottom: the header with the message count and **Clear chat**, the crowd/hype bar, the names of who's in the room, and the chat log. Next to the header, heat bar and names is the simulated Handy box. Below them is an activity graph showing speed and stroke length, colored by who was in control, with markers for events like moves, fake-outs, refusals, lube breaks and private shows.
  - The graph shows a one-minute window. Slide the scrollbar left to look back through history, and press **Live** to jump back to the current activity.
- **Timer** (right) has the countdown dial, Start / Pause / Stop, the tease mode toggle, live speed and stroke sliders, Live settings and, at the very bottom, "Your actions". Any choice that needs an answer appears there, never inside chat messages.
- **Settings drawer** (top menu) has these panels:
  - **Session:** connection key, length and presets, beeps, tease session options (fully stop during rests, random hidden length), and vibration bursts (on/off and width).
  - **Tease:** the **Active persona** dropdown (with **Surprise me**), then the tease timing (low and peak speeds, build, hold and rest times, special moves, fake-outs, escalation). Changing the active persona here loads her own tease timing and turns tease mode on.
  - **Personas:** a personality dropdown that only configures (it doesn't put anyone in the lounge). For the selected personality you can set:
    - her tease timing, including whether she fully stops during rests
    - her nicknames for you (up to three, each picked from a dropdown)
    - how readily she gives up control
    - her vibration length and vibration chance
    - her chance per tease cycle for each special move, including vibration (some can be 0% if she dislikes a move)
    - behaviour switches (questions and demands, storming off, private shows, real-life interruptions)

    Only the selected personality's settings are shown.
  - **Speed:** ramp, pattern and end slowdown for regular sessions.
  - **Customize:** percentages for ramp and slowdown, speed cap, start delay, beep volume, the lounge audience, how control requests are aimed, and hiding the clock.
  - **Lube**, **Limits**, **Profiles** and **Log**.

Every setting in these panels saves as you change it and is remembered when you come back.

## Modes

### Regular session
Runs at a constant speed from the slider. Optional extras are a ramp-up, an alternating fast/slow pattern, and a slowdown at the end of the session. A global speed cap applies to every mode.

### Tease mode
A cycle engine that builds, holds and rests with randomized timings. It also has:
- **Fake-outs:** a build that backs off early.
- **Special moves:** push, stairs, pulse, surge, cliff, wave, flutter and slow burn. Each personality has her own chance for each move per tease cycle, set under Personas. The defaults follow her personality: her favorites are more likely and the moves she dislikes are 0%.
- **Vibration bursts:** now and then, the personality in control narrows the stroke to a tiny band in the middle of your range (6% wide by default) and runs it at your full speed slider, so it buzzes instead of strokes. It lasts a few seconds, then she rests and your normal range comes back. Vibration is one of the special moves, so each personality's chance and length are set per personality under Personas. The on/off switch and the burst width are under Session.
- **Escalation:** peaks can rise by a set percentage each cycle.
- **Random hidden length:** picks a session length between two values and hides the clock.
- **Failing:** in tease mode, Stop or Pause ends the session as a failure. The device still stops immediately, and a lockout can follow.

Low and peak values are percentages of the speed slider, so the slider is always the ceiling.

### Personalities
There are 31 personalities. Their settings live in `index.html`:
- tease timing presets (`PERSONAS`, including whether she fully stops during rests)
- color (`PCOL`), short name (`SHORT`), name key (`NAMEKEY`), reactions (`REACT`), stubbornness (`STUBBORN`), nicknames (`NICKS`, `NICKRATE`), special-move chances (`MOVE_FAV` and `MOVE_OFF` as the defaults), how readily she gives up control (`YIELD_DEF`), vibration defaults (`VIB_DEF`), demand targets (`TARGETS`), mercy (`MERCY`) and refusal tolerance (`TOL`)

Her lines live in `dialogue.js` (see below).

Picking a personality in the Tease panel's **Active persona** dropdown fills in her tease timing and turns tease mode on. **Surprise me** picks one at random and jitters her settings slightly. The Personas panel's dropdown only changes which personality you're configuring; it never changes the active one.

### Lounge interactions (toggles under Customize)
- A simulated audience that grows with activity and can nudge tease intensity. The audience only joins and leaves. It never chats.
- Personalities ask questions and make speed and stroke demands, with Do it / Match her target / Refuse buttons.
- When your stroke is short, the one in control asks for a longer one. Besides "Use the full stroke", you can answer "I can't take a full stroke". Your current length becomes a stroke limit for this session only, and she replies in character. While it's set, her target, her stroke demands and "Match her target" never go past it, and every 2 to 3 minutes she checks in: "Give me the full stroke", "A little more (+10%)" or "Still can't", each with an in-character reply. The limit clears when the session ends, when you give her free rein ("Do what you want"), which lets her set the length herself, or when you move a stroke slider yourself. Lines: `STROKE_LIMIT`, `STROKE_ASK`, `STROKE_MORE` and `STROKE_STILL` in `dialogue.js`.
- A personality storms off after too many refusals.
- Personalities challenge each other for control (Grant / Deny / Deny all) and can hand control over on their own (Personas panel).
- Private shows lock the room and raise the intensity.
- Teases: the persona swaps her picture (chat avatars, timer portrait) for one of her reward shots (`images/<key>_reward.png`, `_reward2`...) for 15 to 50 seconds, with a glow and a line from her (`TEASE_SHOW` / `TEASE_END` in `dialogue.js`). Going private always triggers one, asking to go private has a 25% chance of a preview, and a private show may bring more. In the open room it only happens when the crowd is Packed or bigger (2, 4 or 7% a minute at Packed, Hot, Legendary), after 4 minutes in control, with a 6 to 10 minute cooldown. An open-room tease hypes the room and draws viewers. Each tease she gives is counted in her Friends blackbook ("Teases given"). Tuning: `TEASE_RATE` and `TEASE_PREVIEW` in `index.html`.
- Prize picture: `images/<key>_prize.png` is reserved for a real unlock reward. It's found (`avPrize`) but never used for teases and not shown in the profile.
- Real-life interruptions (cat on the keyboard, doorbell, phone call, dozing off, passing out) come with wake-up or hand-off options.

## Dialogue (`dialogue.js`)

Lines are grouped by **category** (for example `build`, `hold`, `fake`, `challenge`, `dmdSpeedUp`, `privAsk`). The engine picks a random line from the category for the personality who's speaking.

Placeholders that get filled in when a line is shown:

| Placeholder | Becomes |
|---|---|
| `{nick}` / `{Nick}` | the nickname she uses for you (from her nickname dropdowns under Personas) |
| `{other}` | the other personality in the exchange |
| `{ctrl}` | the personality currently in control |
| `{left}` | time left (hidden when the timer is hidden) |
| `{n}` | the current tease round |
| `{viewers}` | audience size |
| `{answer}` | your answer to her question |
| `{step}` / `{to}` | the size and target of a demand |

How the blocks combine:
- `LINES` holds the base lines for the original 8 personalities.
- `MORE` through `MORE13` add categories. `index.html` merges each one into `LINES`. Most append to the existing lines, but `MORE7`, `IDLE`, `LIFE_OV` and `MORE13` replace them.
- `PERSONA_LINES` holds the complete dialogue for every personality added later. The first group is Margot, Veronica, Camille, Gigi, Isadora, Bella, Helena, Colleen, Delphine, Juliet, Valentina, Penelope, Fiona and Simone. The second group, in the block marked "more personalities" at the end of the file, is Chef Gianna, Inspector Vale, Unit Nine, Captain Sable, Madame Zara, Madame Olenka, Glitch, Nurse Ingrid and Lilith.
- `SHARED` has fallback lines any personality can use (real-life events).
- `VIBE_LINES` has what each personality says when a vibration burst starts (`act_vibrate`).
- `__M`, `__QC` and `__QS` are comments on manual runs and reactions when you quit.

The order of the merges in `index.html` matters, so add new lines to existing blocks rather than moving merge code around.

### Adding a personality
1. Add her to `PERSONA_LINES` in `dialogue.js`, plus an entry in `__M`, `__QC`, `__QS` and `VIBE_LINES`.
2. In `index.html`, add `LINES["Her Name"] = PERSONA_LINES["Her Name"];` next to the others, and add her to `PERSONAS`, `PCOL`, `SHORT`, `NAMEKEY`, `REACT`, `STUBBORN`, `NICKS`, `NICKRATE`, `MOVE_FAV`, `MOVE_OFF`, `YIELD_DEF`, `TARGETS`, `MERCY`, `TOL` and `VIB_DEF`.

## Safety features

- **Esc** stops the device immediately at any time.
- The speed cap limits every mode.
- Lube breaks: a break starts automatically after N minutes of running, and there's also a manual button. The device stops and parks slowly, and the clock freezes.
- Daily limit, cooldown and failure lockout (Limits). These are stored in `localStorage`, so clearing site data or switching browsers gets around them.
- An optional screen wake lock while running.

## Data storage

Everything is stored in the browser's `localStorage`:
- `handyKey` is the connection key, stored in plain text.
- `h_*` keys are individual settings, including every per-persona tease timing, nickname and move chance.
- `handyPresets`, `handyLog` (the last 200 sessions), `handyLockUntil`, `handyFame` and `handyPeak`.
- Saved profiles cover every setting except the key and the limits.

The session log can be exported as CSV.

## Code map (`index.html`)

| Section | What it does |
|---|---|
| `store` / `FIELDS` / `BOOLS` | load and save settings |
| `api`, `sendStop`, `sendStroke` | Handy API calls |
| `simApi`, `simFrame`, `simUI`, `simUserPick` | simulation mode: fake device, its on-screen display, and the simulated user's answers |
| `newCycle`, `queueMove`, `teaseValue`, `pickMove`, `moveChance`, `moveDef` | tease engine and per-persona move chances |
| `strokeRange`, `syncVibe`, `VIB_DEF` | vibration bursts: narrow stroke band and per-persona chance/length |
| `velocityAt`, `pushVelocity` | the final speed for each tick, with caps and throttling |
| `drawGraph`, `viewBounds`, `syncScroll`, `sample`, `mark` | activity graph with its one-minute window and history scrollback |
| `start`, `update`, `finish`, `togglePause` | run control |
| `startBreak`, `lubeNowState` | lube breaks |
| `PERSONAS`, `personaCfg`, `applyPersona`, `renderPersCfg`, `setActive` | personality presets and the per-persona settings |
| `sayAs`, `fillLine`, `withNick` | picking and filling in dialogue |
| `addOffer`, `pruneOffers` | action cards |
| `crowdTick`, `addFan`, `renderCrowd` | audience size, fame and levels |
| `beginChallenge`, `beginDirect`, `giveUpTick` | control battles and handovers |
| `requestPrivate`, `privTick` | private shows |
| `startLife`, `endLife`, `handOff` | real-life interruptions |
| `makeDemand`, `askQuestion`, `interactTick` | demands and questions |

## Changelog

- **2026-10-12:** Teases: personas swap their picture for a reward shot now and then (always when going private, sometimes when asking, rarely in a hot open room), hyping the room. `<key>_prize.png` is reserved for a future unlock.
- **2026-10-12:** The short-stroke prompt has an "I can't take a full stroke" answer. It sets a stroke limit for the session that every persona respects. While it's set, the one in control checks in every few minutes to ask if you can take more. Every persona replies in character.
- **2026-10-11:** Lounge header is tighter. The simulated Handy box sits beside the header, heat bar and names, and is always visible.
- **2026-10-11:** The graph shows a one-minute window. Slide left to look back at history, and press Live to return to the current activity.
- **2026-10-11:** Simulated users now answer offers and questions after a short pause.
- **2026-10-11:** Active persona dropdown and Surprise me moved to the Tease panel. Changing it loads that persona's tease timing.
- **2026-10-11:** The Personas dropdown only configures. Each persona keeps her own tease timing, fully-stop-during-rests setting, and up to three nicknames chosen from dropdowns. The nickname override was removed.
- **2026-10-11:** Each persona has her own chance for each special move, including vibration, with defaults based on her personality. Some moves can be 0%. Vibration length and chance sit under Personas.
- **2026-10-11:** Nine new personalities added (31 in total): Chef Gianna, Inspector Vale, Unit Nine, Captain Sable, Madame Zara, Madame Olenka, Glitch, Nurse Ingrid and Lilith.
- **2026-10-11:** Personas panel shows only the selected personality's settings. Vibration on/off and width moved to Session.
- **2026-10-11:** Added vibration bursts to tease mode.
- **2026-10-11:** New Personas panel (personality picker, nickname, behaviour, giving up control) replaces Handover. Tease session options moved to Session. Simulation is now a dashboard button.
- **2026-10-11:** Added simulation mode for running without a device.
- **2026-10-11:** Moved all dialogue into `dialogue.js` (`index.html` went from 427 KB to 148 KB). Removed the unused audience chat code (`fanSay`, `fansReact`, `FANPOOL`, `FMAP`) and the `fanReply` lines it used. The audience still joins and leaves silently, as before.
