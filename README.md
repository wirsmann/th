# Handy Lounge Timer

A small web app that runs timed sessions on a **The Handy** device through the Handy cloud API. It has an optional "tease mode" driven by personalities in a simulated chat room called The Lounge.

There's no build step, no server and no dependencies. Open `index.html` in a browser, enter your Handy connection key, and press Start.

## Files

| File | What it holds |
|---|---|
| `index.html` | The app: layout, styles, device control, tease engine, lounge logic (about 170 KB) |
| `dialogue.js` | Everything the personalities say. It's pure data, loaded by `index.html` before the main script. |
| `images/` | Persona pictures, one folder per persona named by her key: `images/lola/lola.png`, `lola2.png`..., `lola_reward.png`, `lola_reward2.png`..., `lola_prize.png`. Loose files (`images/lola.png`) still work for a persona with no folder. |

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
There are 48 personalities. Their settings live in `index.html`:
- tease timing presets (`PERSONAS`, including whether she fully stops during rests)
- color (`PCOL`), short name (`SHORT`), name key (`NAMEKEY`), reactions (`REACT`), stubbornness (`STUBBORN`), nicknames (`NICKS`, `NICKRATE`), special-move chances (`MOVE_FAV` and `MOVE_OFF` as the defaults), how readily she gives up control (`YIELD_DEF`), vibration defaults (`VIB_DEF`), demand targets (`TARGETS`), mercy (`MERCY`), refusal tolerance (`TOL`) and how often she claims you (`OWN_DEF`)

Her lines live in `dialogue.js` (see below).

Picking a personality in the Tease panel's **Active persona** dropdown fills in her tease timing and turns tease mode on. **Surprise me** picks one at random and jitters her settings slightly. The Personas panel's dropdown only changes which personality you're configuring; it never changes the active one.

### Lounge interactions (toggles under Customize)
- A simulated audience that grows with activity and can nudge tease intensity. The audience only joins and leaves. It never chats.
- Personalities ask questions and make speed and stroke demands, with Do it / Match her target / Refuse buttons.
- When your stroke is short, the one in control asks for a longer one. Besides "Use the full stroke", you can answer "I can't take a full stroke". Your current length becomes a stroke limit for this session only, and she replies in character. While it's set, her target, her stroke demands and "Match her target" never go past it, and every 2 to 3 minutes she checks in: "Give me the full stroke", "A little more (+10%)" or "Still can't", each with an in-character reply. The limit clears when the session ends, when you give her free rein ("Do what you want"), which lets her set the length herself, or when you move a stroke slider yourself. Lines: `STROKE_LIMIT`, `STROKE_ASK`, `STROKE_MORE` and `STROKE_STILL` in `dialogue.js`.
- A personality storms off after too many refusals.
- Personalities challenge each other for control (Grant / Deny / Deny all) and can hand control over on their own (Personas panel).
- Private shows lock the room and raise the intensity.
- Teases: the persona swaps her picture (chat avatars, timer portrait) for one of her reward shots (`images/<key>/<key>_reward.png`, `_reward2`...) for 15 to 50 seconds, with a glow and a line from her (`TEASE_SHOW` / `TEASE_END` in `dialogue.js`). Going private always triggers one, asking to go private has a 25% chance of a preview, and a private show may bring more. In the open room it only happens when the crowd is Packed or bigger (2, 4 or 7% a minute at Packed, Hot, Legendary), after 4 minutes in control, with a 6 to 10 minute cooldown. An open-room tease hypes the room and draws viewers. Each tease she gives is counted in her Friends blackbook ("Teases given"). Tuning: `TEASE_RATE` and `TEASE_PREVIEW` in `index.html`.
- Prize picture: `images/<key>/<key>_prize.png` is the top unlock (see Picture sets). It's never used for teases, and it stays out of her profile until it's earned.

### Picture sets and unlocking
A persona's profile (blackbook thumbnail and the portrait viewer) shows her own pictures first, then each picture set that's open, in this order: reward, bikini, 80s workout, fall, pageant, night club, topless, prize. A set is `images/<key>/<key>_<set>.png`, `_<set>2.png`... plus its angled views (`_<set>_side`, `_rear34`, `_back`, `_shoulder`, `_mirror`, `_mirrorback`), the names `make_avatars.py --tidy` gives them. Each sequence holds up to 60 pictures (`AV_MAX`), and it stops at the first missing number.

Sets unlock from her blackbook stats, counted per persona:

| Set | Unlocks at |
|---|---|
| Reward | always open |
| Bikini | 3 sessions |
| 80s workout | 6 sessions |
| Fall | 2 wins |
| Pageant | 5 wins |
| Night club | owned you once |
| Topless | 30 minutes owned in total |
| Prize | 10 wins and 60 minutes owned |

- **Locking is off for now.** The "Lock picture sets until earned" switch in the Friends panel is off by default, so every set shows. The prize is the exception: it stays hidden until earned, whatever the switch says.
- **Unlocks are recorded either way** (`handyUnlocked` in `localStorage`). When you turn locking on, whatever you've already earned stays open, and clearing the blackbook doesn't take unlocks away.
- **While locking is on,** reaching a threshold posts "🔓 Priscilla's Night club set unlocked..." in chat, and the pictures appear in her profile straight away. Her blackbook entry lists each set she has pictures for, with a ✓ or what's left (for example "🔒 12/30 minutes owned").
- **Changing the rules:** edit `SETS` in `index.html`. Each set's `need` can list `sess`, `wins`, `owned` and `ownMins`, and every number listed has to be reached. An empty `need` is always open. `always: true` makes a set ignore the lock switch.
- **Teases** still use every reward shot, locked or not.
- **Lookups:** the browser can't list a folder, so it checks each name. Her first picture loads first. The sets and views are checked afterwards, a few at a time, so a big friends list can take a few seconds to fill in its picture counts.
- "I own you": the longer a persona stays in control, the more likely she is to claim you. There's no chance for her first 5 minutes in control, then it ramps up to her full rate at 20 minutes (her "Claims you" setting under Personas, in % per minute; dominant personas default to 4 to 6, gentle ones to 1 or 2), and a busy crowd raises it a little. While she owns you, your speed, stroke and tease timing are locked (outlined in her colour) and she sets them herself every 25 to 50 seconds, moving up to 15 points toward her target with some variation. She also throws in her favourite moves or holds you, stops asking questions, making demands and offering private shows, and nobody else can take control. Teases become much more likely (10% a minute plus extra for the crowd size, about 60% straight away), and a claim hypes the room. Press **Break free** on her card: she pouts and leaves the lounge, your controls unlock, and the others can take control or ask for it again. Ownership also ends when the session ends. Stop, Pause and Esc work as always, and the max speed cap and your stroke limit still apply. Her blackbook counts "Owned you", "You broke free" and "Minutes owning you". The toggle is under Customize, the lines are `OWN_LINES` in `dialogue.js` (`ownClaim`, `ownAdjust`, `ownMid`, `ownFree`), and onlookers use `SHARED.ownSpec` and `SHARED.ownFreeSpec`. Tuning: `OWN_DEF`, `OWN_RAMP` and `OWN_TEASE` in `index.html`. In simulation, the simulated user breaks free after 2 to 5 minutes.
- Pranks (Prankster Piper only, `PRANKS` in `index.html`): after 2 minutes in control she pulls one about every few minutes (5% a minute, with a 3 to 6 minute cooldown). A fake finish ("Time is up. You made it!"), a fake handoff to another persona, a fake "max speed lowered to 20%", a wedgie (she warns you, then snaps: a short burst at full speed, capped by your max speed), or a trick offer of a break that ends in a wedgie whichever button you press. Fair play: if you press Stop or Pause within 12 seconds of her fake finish, the session ends without counting as a fail. Her prank lines are the `prank...` categories in her `PERSONA_LINES`.
- Real-life interruptions (cat on the keyboard, doorbell, phone call, dozing off, passing out) come with wake-up or hand-off options. While it lasts, she stays silent apart from the event's own lines (snoring, waking up).

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
- `OWN_LINES` has each personality's "I own you" lines: claiming you, changing your settings, taunts while she owns you, and her reaction when you break free.

The order of the merges in `index.html` matters, so add new lines to existing blocks rather than moving merge code around.

### Adding a personality
1. Add her to `PERSONA_LINES` in `dialogue.js`, plus an entry in `__M`, `__QC`, `__QS`, `VIBE_LINES` and `OWN_LINES`.
2. In `index.html`, add `LINES["Her Name"] = PERSONA_LINES["Her Name"];` next to the others, and add her to `PERSONAS`, `PCOL`, `SHORT`, `NAMEKEY`, `REACT`, `STUBBORN`, `NICKS`, `NICKRATE`, `MOVE_FAV`, `MOVE_OFF`, `YIELD_DEF`, `TARGETS`, `MERCY`, `TOL`, `VIB_DEF` and `OWN_DEF`.

## Safety features

- **Esc** stops the device immediately at any time, including while a persona owns you ("I own you" locks the speed and stroke sliders, never Stop, Pause or Esc).
- The speed cap limits every mode.
- Lube breaks: a break starts automatically after N minutes of running, and there's also a manual button. The device stops and parks slowly, and the clock freezes. The park position (Lube panel) counts from the rest end: 0 parks fully there, and it's sent to the device as 100 minus the setting.
- Daily limit, cooldown and failure lockout (Limits). These are stored in `localStorage`, so clearing site data or switching browsers gets around them.
- An optional screen wake lock while running.

## Data storage

Everything is stored in the browser's `localStorage`:
- `handyKey` is the connection key, stored in plain text.
- `h_*` keys are individual settings, including every per-persona tease timing, nickname and move chance.
- `handyPresets`, `handyLog` (the last 200 sessions), `handyLockUntil`, `handyFame` and `handyPeak`.
- `handyBlackbook` (per-persona stats) and `handyUnlocked` (which picture sets each persona has unlocked, and when).
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
| `prankTick`, `startPrank`, `wedgieSnap`, `prankFooled` | Piper's pranks and the fake-finish grace |
| `SETS`, `findAvBase`, `findAvImgs`, `avVisible`, `setOpen`, `checkUnlocks`, `setsGrid` | persona pictures, picture sets and unlocking |
| `ownTick`, `claimOwn`, `ownAdjust`, `ownMove`, `breakFree`, `lockControls` | "I own you" and breaking free |

## Changelog

- **2026-10-16:** Picture sets: profiles now show every set (reward, bikini, workout, fall, pageant, night club, topless and their angled views), up to 60 pictures per sequence instead of 20. Each set has an unlock rule based on her blackbook (sessions, wins, times owned, minutes owned). Locking is off by default; turn it on with "Lock picture sets until earned" in the Friends panel. The prize unlocks at 10 wins and 60 minutes owned.
- **2026-10-16:** New personality: Prankster Piper, 29, a Greek-Australian joke shop owner from Melbourne who does stand-up and roller derby, and is into wedgies. She plays fake system messages on you (a fake finish, a fake handoff, a fake speed cap) and gives wedgies: a warning, then a sudden snap to full speed. Stopping because of her fake finish isn't counted as a fail. She loves surges, cliffs and flutters, calls you dork, sucker or mate, and is hard to take control from. Lime green chat colour (readable in light and dark mode). Her dialogue is `PERSONA_LINES["Prankster Piper"]` at the end of `dialogue.js`.
- **2026-10-16:** New personality: Obedient Ophelia, 31, a pale gothic woman who restores old books and always dresses in black. She's submissive even while she leads: she asks permission constantly, calls you Sir, Master or my lord, phrases demands as requests, gives long holds and gentle strokes that never fully stop, and hands control away easily. Smoky ash-mauve chat colour (readable in light and dark mode), and a black velvet choker on her drawn avatar. Her dialogue is `PERSONA_LINES["Obedient Ophelia"]` at the end of `dialogue.js`.
- **2026-10-16:** New personality: Blushing Bethany, 38, engaged and devout, still waiting for her wedding night. She finds the lounge deeply taboo and can't stop being curious: timid and apologetic at first, bolder every round (her peaks climb 12% a round). White and pearl look with a bridal veil, and a readable pearl-blush chat colour. Her dialogue is `PERSONA_LINES["Blushing Bethany"]` at the end of `dialogue.js`.
- **2026-10-16:** Enthroned Elodie has a new look so she no longer resembles Madame Zara: sleek platinum-blonde updo, pale skin, grey-blue eyes, and ivory and black outfits. Her chat colour and drawn avatar match. Zara's pictures now show her real age (51, as in her profile).
- **2026-10-15:** During a real-life event (dozing off, passing out, at the door, distracted, cat on the keyboard), the persona it happens to says nothing except that event's own lines (snoring, waking up). A message she was still typing when it started never arrives. The others in the lounge keep chatting.
- **2026-10-14:** "I own you": after a long stretch in control, a persona may claim you. She locks your speed and stroke, sets them herself, stops asking, teases more, and no one else can take control until you press Break free. She then pouts and leaves. Every persona has her own lines and claim rate. Stats are in the blackbook.
- **2026-10-14:** Each persona's pictures live in her own folder (`images/<key>/`). The app looks there first and falls back to loose files in `images/`. `make_avatars.py --tidy` sorts the folder.
- **2026-10-14:** Lube break park position flipped so 0 is the rest end (the default). A saved 20, the old default, becomes 0.
- **2026-10-14:** New personality: Heartbreaker Jenna, 38, your friend since your twenties. She knows about your crush, never felt the same, and leads you on anyway. Works as a paid flirt on VelvetLine.
- **2026-10-14:** New personality: Family-Friend Nancy, 55, divorced, a longtime friend of your family. The flirting started at the family New Year's parties when you were both adults, and she's done waiting.
- **2026-10-14:** New personality: Old Flame Bobbi, your college sweetheart, now 45, married and a real estate agent back in your hometown. She talks to you like the one that got away and wants to rekindle it.
- **2026-10-12:** Teases: personas swap their picture for a reward shot now and then (always when going private, sometimes when asking, rarely in a hot open room), hyping the room. `<key>_prize.png` is reserved for a future unlock.
- **2026-10-12:** The short-stroke prompt has an "I can't take a full stroke" answer. It sets a stroke limit for the session that every persona respects. While it's set, the one in control checks in every few minutes to ask if you can take more. Every persona replies in character.
- **2026-10-11:** Lounge header is tighter. The simulated Handy box sits beside the header, heat bar and names, and is always visible.
- **2026-10-13:** New personality Pampered Paloma (38 in total): languid and indulgent, loves having her feet worshipped, and wants slow, devoted strokes. Her dialogue is `PALOMA_LINES` at the end of `dialogue.js`.
- **2026-10-13:** New personality Makeover Marisol (39 in total): a bubbly stylist who loves dressing you up and making you pretty, and wants soft, graceful, dainty strokes. Her dialogue is `MARISOL_LINES` at the end of `dialogue.js`.
- **2026-10-13:** New personality Turnabout Tamsin (40 in total): a confident, playful dominant who loves turning the tables and being in charge, with a firm steady rhythm. Her dialogue is `TAMSIN_LINES` at the end of `dialogue.js`.
- **2026-10-13:** New personality Enthroned Elodie (41 in total): a regal, smug queen who likes to lounge on her throne and be served from beneath, with steady strokes and long holds. Her dialogue is `ELODIE_LINES` at the end of `dialogue.js`.
- **2026-10-13:** New personality Mighty Magda (42 in total): a strongwoman who treats the session as a heavy workout, wants hard, fast, full-length strokes and shows little mercy. Her dialogue is `MAGDA_LINES` at the end of `dialogue.js`.
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
