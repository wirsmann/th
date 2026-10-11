# Handy Lounge Timer

A small web app that runs timed sessions on a **The Handy** device through the Handy cloud API. It has an optional "tease mode" driven by personalities in a simulated chat room called The Lounge.

There's no build step, no server and no dependencies. Open `index.html` in a browser, enter your Handy connection key, and press Start.

## Files

| File | What it holds |
|---|---|
| `index.html` | The app: layout, styles, device control, tease engine, lounge logic (about 150 KB) |
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
- A "Simulated Handy" box under the speed readout shows the stroke range, a moving position marker, the current state (stroking, stopped, moving to park, parked) and strokes per second.
- No connection key is needed.
- Simulated sessions aren't written to the log, and they don't count toward the daily limit, cooldown or lockouts. An active limit or lockout still blocks Start.
- You can't switch simulation on or off while a session is running.

The fake device roughly follows the real one: speed is a share of the maximum travel speed, so a shorter stroke range gives more strokes per second.

## Layout

- **The Lounge** (left) has the chat log, the crowd/hype bar, who's in the room, and an activity graph. The graph shows speed and stroke length colored by who was in control, with markers for events like moves, fake-outs, refusals, lube breaks and private shows.
- **Timer** (right) has the countdown dial, Start / Pause / Stop, the tease mode toggle, live speed and stroke sliders, and "Your actions". Any choice that needs an answer appears there, never inside chat messages.
- **Settings drawer** (top menu) has these panels:
  - **Session:** connection key, length and presets, beeps, and tease session options (fully stop during rests, random hidden length).
  - **Tease:** tease timing (low and peak speeds, build, hold and rest times, special moves, fake-outs, escalation).
  - **Personas:** which personality is in control, nickname override, behaviour (questions and demands, storming off, private shows, real-life interruptions) and how readily each one gives up control.
  - **Speed:** ramp, pattern and end slowdown for regular sessions.
  - **Customize:** percentages for ramp and slowdown, speed cap, start delay, beep volume, the lounge audience, how control requests are aimed, and hiding the clock.
  - **Lube**, **Limits**, **Profiles** and **Log**.

## Modes

### Regular session
Runs at a constant speed from the slider. Optional extras are a ramp-up, an alternating fast/slow pattern, and a slowdown at the end of the session. A global speed cap applies to every mode.

### Tease mode
A cycle engine that builds, holds and rests with randomized timings. It also has:
- **Fake-outs:** a build that backs off early.
- **Special moves:** push, stairs, pulse, surge, cliff, wave, flutter and slow burn. Each personality has favorites.
- **Escalation:** peaks can rise by a set percentage each cycle.
- **Random hidden length:** picks a session length between two values and hides the clock.
- **Failing:** in tease mode, Stop or Pause ends the session as a failure. The device still stops immediately, and a lockout can follow.

Low and peak values are percentages of the speed slider, so the slider is always the ceiling.

### Personalities
There are 22 personalities. Their settings live in `index.html`:
- tease timing presets (`PERSONAS`)
- color (`PCOL`), short name (`SHORT`), name key (`NAMEKEY`), reactions (`REACT`), stubbornness (`STUBBORN`), nicknames (`NICKS`, `NICKRATE`), favorite moves (`MOVE_FAV`), how readily she gives up control (`YIELD_DEF`), demand targets (`TARGETS`), mercy (`MERCY`) and refusal tolerance (`TOL`)

Their lines live in `dialogue.js` (see below).

Picking a personality (Personas panel) fills in the Tease timing and turns tease mode on. "Surprise me" picks one at random and jitters her settings slightly.

### Lounge interactions (toggles under Customize)
- A simulated audience that grows with activity and can nudge tease intensity. The audience only joins and leaves. It never chats.
- Personalities ask questions and make speed and stroke demands, with Do it / Match her target / Refuse buttons.
- A personality storms off after too many refusals.
- Personalities challenge each other for control (Grant / Deny / Deny all) and can hand control over on their own (Personas panel).
- Private shows lock the room and raise the intensity.
- Real-life interruptions (cat on the keyboard, doorbell, phone call, dozing off, passing out) come with wake-up or hand-off options.

## Dialogue (`dialogue.js`)

Lines are grouped by **category** (for example `build`, `hold`, `fake`, `challenge`, `dmdSpeedUp`, `privAsk`). The engine picks a random line from the category for the personality who's speaking.

Placeholders that get filled in when a line is shown:

| Placeholder | Becomes |
|---|---|
| `{nick}` / `{Nick}` | the nickname she uses for you (or your override under Customize) |
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
- `PERSONA_LINES` holds the complete dialogue for every personality added later (Margot, Veronica, Camille, Gigi, Isadora, Bella, Helena, Colleen, Delphine, Juliet, Valentina, Penelope, Fiona and Simone).
- `SHARED` has fallback lines any personality can use (real-life events).
- `__M`, `__QC` and `__QS` are comments on manual runs and reactions when you quit.

The order of the merges in `index.html` matters, so add new lines to existing blocks rather than moving merge code around.

### Adding a personality
1. Add her to `PERSONA_LINES` in `dialogue.js`, plus an entry in `__M`, `__QC` and `__QS`.
2. In `index.html`, add `LINES["Her Name"] = PERSONA_LINES["Her Name"];` next to the others, and add her to `PERSONAS`, `PCOL`, `SHORT`, `NAMEKEY`, `REACT`, `STUBBORN`, `NICKS`, `NICKRATE`, `MOVE_FAV`, `YIELD_DEF`, `TARGETS`, `MERCY` and `TOL`.

## Safety features

- **Esc** stops the device immediately at any time.
- The speed cap limits every mode.
- Lube breaks: a break starts automatically after N minutes of running, and there's also a manual button. The device stops and parks slowly, and the clock freezes.
- Daily limit, cooldown and failure lockout (Limits). These are stored in `localStorage`, so clearing site data or switching browsers gets around them.
- An optional screen wake lock while running.

## Data storage

Everything is stored in the browser's `localStorage`:
- `handyKey` is the connection key, stored in plain text.
- `h_*` keys are individual settings.
- `handyPresets`, `handyLog` (the last 200 sessions), `handyLockUntil`, `handyFame` and `handyPeak`.
- Saved profiles cover every setting except the key and the limits.

The session log can be exported as CSV.

## Code map (`index.html`)

| Section | What it does |
|---|---|
| `store` / `FIELDS` / `BOOLS` | load and save settings |
| `api`, `sendStop`, `sendStroke` | Handy API calls |
| `simApi`, `simFrame`, `simUI` | simulation mode: fake device and its on-screen display |
| `newCycle`, `queueMove`, `teaseValue` | tease engine |
| `velocityAt`, `pushVelocity` | the final speed for each tick, with caps and throttling |
| `drawGraph`, `sample`, `mark` | activity graph |
| `start`, `update`, `finish`, `togglePause` | run control |
| `startBreak`, `lubeNowState` | lube breaks |
| `PERSONAS`, `applyPersona` | personality presets |
| `sayAs`, `fillLine`, `withNick` | picking and filling in dialogue |
| `addOffer`, `pruneOffers` | action cards |
| `crowdTick`, `addFan`, `renderCrowd` | audience size, fame and levels |
| `beginChallenge`, `beginDirect`, `giveUpTick` | control battles and handovers |
| `requestPrivate`, `privTick` | private shows |
| `startLife`, `endLife`, `handOff` | real-life interruptions |
| `makeDemand`, `askQuestion`, `interactTick` | demands and questions |

## Changelog

- **2026-10-11:** New Personas panel (personality picker, nickname, behaviour, giving up control) replaces Handover. Tease session options moved to Session. Simulation is now a dashboard button.
- **2026-10-11:** Added simulation mode for running without a device.
- **2026-10-11:** Moved all dialogue into `dialogue.js` (`index.html` went from 427 KB to 148 KB). Removed the unused audience chat code (`fanSay`, `fansReact`, `FANPOOL`, `FMAP`) and the `fanReply` lines it used. The audience still joins and leaves silently, as before.
