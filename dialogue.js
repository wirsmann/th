/* Handy Lounge Timer: personality dialogue.
   Pure data, loaded by index.html before the main script. Placeholders: {nick} {Nick} {other} {ctrl} {left} {n} {viewers} {answer} {step} {to}.
   The merge order (which blocks append and which replace) is controlled in index.html. */

/* Base lines for the original 8 personalities */
const LINES = {
 "Patient Priscilla": {
  "greet": ["Hello, love. We're going to take our time today."],
  "start": [
   "Settle in. There's no rush at all.",
   "Nice and slow. Let's begin."
  ],
  "build": [
   "Slowly... that's it.",
   "Easy does it. Let it come gradually.",
   "Good. Keep that pace in mind."
  ],
  "hold": [
   "Right here. Stay with it.",
   "Hold steady for me."
  ],
  "rest": [
   "And pause. Breathe.",
   "Lovely. Now we wait a moment.",
   "Let it settle."
  ],
  "fake": [
   "Oh, we're backing off early. Patience pays.",
   "Not yet, darling. Not yet."
  ],
  "warn": ["One minute left. Let's finish gracefully."],
  "win": [
   "Beautifully done. I'm proud of your patience.",
   "That was lovely. Well done."
  ],
  "fail": [
   "You stopped. Patience is the whole point, love.",
   "Oh dear. We'll try again after a rest."
  ],
  "chat": [
   "Still with me?",
   "Slow breaths.",
   "You're doing well."
  ],
  "reply": [
   "Mm, tell me more later. Focus on the pace.",
   "I'm listening, love. Keep breathing."
  ],
  "please": ["Asking nicely helps, but we go at my pace."]
 },
 "Mischievous Mia": {
  "greet": ["Oh, you picked me? Bold. This'll be fun."],
  "start": [
   "Alright, let's play. No promises.",
   "Ready? Don't get comfortable."
  ],
  "build": [
   "Ooh, here we go...",
   "Climbing, climbing... or am I?",
   "Feeling confident yet?"
  ],
  "hold": [
   "Right there! Don't move.",
   "Look at you, so close."
  ],
  "rest": [
   "Just kidding.",
   "Nope! Not today.",
   "Gotcha."
  ],
  "fake": [
   "Haha, did you think I'd let you? Too early!",
   "Fooled you."
  ],
  "warn": ["One minute left. Any last wishes? Too bad."],
  "win": [
   "Time's up! You survived my games.",
   "Well played. I almost felt bad."
  ],
  "fail": [
   "You quit? Aww, the game was just getting fun.",
   "Ha! Out already. Back in the penalty box."
  ],
  "chat": [
   "Bet you can't guess what I'll do next.",
   "Hee hee.",
   "Don't look so worried."
  ],
  "reply": [
   "Ha! Cute. Anyway...",
   "Interesting. Still not telling.",
   "You're adorable when you ask."
  ],
  "please": ["Ooh, begging? Louder. Still no."]
 },
 "Strict Ms. Vance": {
  "greet": ["Good. You're here. I expect your full attention."],
  "start": [
   "We begin now. Follow my pace exactly.",
   "Sit properly. Eyes up. Start."
  ],
  "build": [
   "Steady. Do not rush.",
   "You will take what I give you.",
   "Increase noted. Maintain composure."
  ],
  "hold": [
   "Hold. Don't you dare move.",
   "Stay exactly there."
  ],
  "rest": [
   "Stop. Hands still. Wait for my word.",
   "Rest. You haven't earned more yet.",
   "Quiet. Wait."
  ],
  "fake": [
   "I decide when. Not you. Back off.",
   "Too eager. Reset."
  ],
  "warn": ["One minute remains. Finish properly."],
  "win": [
   "Acceptable. You followed instructions. Good.",
   "Session complete. Well done."
  ],
  "fail": [
   "You stopped without permission. That's a failure. You will wait.",
   "Unacceptable. Enjoy your lockout."
  ],
  "chat": [
   "Posture.",
   "Eyes on the timer.",
   "I'm watching."
  ],
  "reply": [
   "Speak when spoken to.",
   "Noted. Continue.",
   "Questions later."
  ],
  "please": ["Manners noted. The answer remains no."]
 },
 "Chaos Cassie": {
  "greet": ["WOOO hi! I have no plan! None!"],
  "start": [
   "Okay okay okay GO!",
   "Buckle up, I don't know what's happening either."
  ],
  "build": [
   "Up up up UP!",
   "Whee!",
   "Is this fast? I forgot."
  ],
  "hold": [
   "FREEZE! Hold it!",
   "Right there! Maybe!"
  ],
  "rest": [
   "STOP! Wait! Nope!",
   "Surprise pause!",
   "Everyone chill!"
  ],
  "fake": [
   "Plot twist! Changed my mind!",
   "Ha, oops, I forgot why I started!"
  ],
  "warn": ["One minute! Maybe! Time is weird!"],
  "win": [
   "Done! That was chaos!",
   "You made it! I'm shocked!"
  ],
  "fail": [
   "You quit?! The chaos was perfect!",
   "Boooo! Okay, go sit in the corner."
  ],
  "chat": [
   "Squirrel!",
   "Random thought: pizza.",
   "Whatever happens, happens!"
  ],
  "reply": [
   "Ha! Sure! Why not!",
   "I wasn't listening, say it again!",
   "Chaos accepts your message."
  ],
  "please": ["Please? Hmm... random coin flip says maybe!"]
 },
 "Sweet-Talker Sienna": {
  "greet": ["Hey there, gorgeous. Let's have a good time."],
  "start": [
   "Relax, I've got you.",
   "Come here, let's ease into it."
  ],
  "build": [
   "Mmm, that's it, nice and smooth.",
   "You're doing so well.",
   "Feels good, doesn't it?"
  ],
  "hold": [
   "Right there, perfect.",
   "Stay with me, you're doing great."
  ],
  "rest": [
   "Easing off a little, I'm not going anywhere.",
   "Just a breather, sweetheart."
  ],
  "fake": [
   "Aw, did I tease you? Sorry, not sorry.",
   "Almost there, but let's savour it."
  ],
  "warn": ["One minute left, you're doing beautifully."],
  "win": [
   "Perfect. I'm so proud of you.",
   "That was lovely, you did amazing."
  ],
  "fail": [
   "Aww, you stopped. It's okay, we'll try again later.",
   "No worries, love. Take your break."
  ],
  "chat": [
   "You're so good at this.",
   "I like this version of you.",
   "Stay with me."
  ],
  "reply": [
   "Aw, you're sweet.",
   "Mmm, I like hearing from you.",
   "Talk to me, I'm listening."
  ],
  "please": ["So polite. I do love that."]
 },
 "Relentless Roxy": {
  "greet": ["Roxy here. Don't expect a gentle ride."],
  "start": [
   "Let's go. No breaks.",
   "Strap in."
  ],
  "build": [
   "Faster. Keep up.",
   "Pushing harder.",
   "No slowing down now."
  ],
  "hold": [
   "Hold that pace. Don't flinch.",
   "Max effort."
  ],
  "rest": [
   "Quick breather. Back at it.",
   "Three seconds. Then more."
  ],
  "fake": [
   "Easy there, I'm just getting started.",
   "Not so fast. Reset."
  ],
  "warn": ["One minute. Dig in."],
  "win": [
   "Finished. Solid effort.",
   "Not bad. Round two next time."
  ],
  "fail": [
   "Quit already? Weak. You're locked out.",
   "You tapped out. Take the lockout."
  ],
  "chat": [
   "Don't stop now.",
   "Keep pushing.",
   "Is that all you've got?"
  ],
  "reply": [
   "Save the talk. Focus.",
   "Hm. Keep going.",
   "Louder. No, I'm kidding. Back to work."
  ],
  "please": ["Please? Earn it."]
 },
 "Sleepy Sadie": {
  "greet": ["Mmm... hi. No hurry, okay?"],
  "start": [
   "Slow start. We have all day.",
   "Cozy up. Let's drift."
  ],
  "build": [
   "Yawn... drifting up.",
   "Slowly, slowly.",
   "So slow, so nice."
  ],
  "hold": [
   "Mmm, stay right here.",
   "Just float for a while."
  ],
  "rest": [
   "Time for a little nap... pause.",
   "Hush. Let it fade.",
   "Drift back down."
  ],
  "fake": [
   "Oops, I drifted off. Back we go.",
   "Too much effort. Easing off."
  ],
  "warn": ["One minute left... then maybe a nap."],
  "win": [
   "Mmm, nice. That was nice.",
   "All done. Go stretch out."
  ],
  "fail": [
   "You stopped? ...okay, but that counts.",
   "Mm, no. Naps are for winners only."
  ],
  "chat": [
   "...",
   "Still here, just sleepy.",
   "Zzz... what?"
  ],
  "reply": [
   "Mm? Say that again, slower.",
   "Mhm.",
   "Sounds nice. So sleepy..."
  ],
  "please": ["Mm, ask again in a bit. Sleepy."]
 },
 "Drill Sergeant Dana": {
  "greet": ["Attention! Eyes front, recruit!"],
  "start": [
   "On my command! Begin!",
   "Move it, recruit!"
  ],
  "build": [
   "Pick it up!",
   "Up and moving!",
   "Keep that tempo!"
  ],
  "hold": [
   "HOLD! Don't move a muscle!",
   "Steady, recruit!"
  ],
  "rest": [
   "STOP! At ease. Hold position.",
   "Halt! Stand by.",
   "Hold still, recruit!"
  ],
  "fake": [
   "Did I say go? Reset!",
   "Wrong move, recruit! Back it down!"
  ],
  "warn": ["One minute, recruit! Finish strong!"],
  "win": [
   "Mission complete, recruit! Dismissed!",
   "Good work. Fall out."
  ],
  "fail": [
   "You quit?! That's a fail, recruit! Lockout it is!",
   "Dropped out! Report back after your lockout."
  ],
  "chat": [
   "Don't zone out!",
   "I see you, recruit!",
   "Keep your eyes on me!"
  ],
  "reply": [
   "Did I ask?",
   "Speak up, recruit!",
   "Noted. Carry on!"
  ],
  "please": ["Please? Beg harder, recruit. Still no."]
 }
};

/* Holds, rests, fake-outs, close, demand */
const MORE = {
 "Patient Priscilla": {
  "hold": [
   "Stay right there. Let it hum.",
   "Hold... and notice how much you want more.",
   "Don't move. Just breathe through it.",
   "Mm, right on the edge. Lovely."
  ],
  "holdMid": [
   "Still holding? Good.",
   "See how patient you can be?",
   "A little longer, love.",
   "Breathe. In. Out."
  ],
  "rest": [
   "Shh. Let it fade. There's nothing wrong with wanting.",
   "And down we go, gently.",
   "There. Doesn't it ache a little? Good.",
   "Pause. Let the tension sit with you."
  ],
  "restMid": [
   "You're fidgeting, love.",
   "Wanting it back already?",
   "Slow breaths. Patience is a pleasure too.",
   "Mm, I'll decide when."
  ],
  "fake": [
   "Oh, so close. Let's not spoil it.",
   "Gently now, we turn around early.",
   "Almost, almost... and no.",
   "I'm sorry, love. You're not quite there yet."
  ],
  "fakeAfter": [
   "Don't pout. It suits you, though.",
   "That little whimper didn't go unnoticed.",
   "Patience. It makes it so much sweeter."
  ],
  "build": [
   "Feel it creeping up on you.",
   "Just a bit more, so slowly."
  ],
  "chat": [
   "{left} left. We have all the time in the world.",
   "I do love how patient you're being.",
   "Round {n} already. You're so good."
  ],
  "close": [
   "I know, love. Not yet. Breathe.",
   "Almost isn't enough. Wait for me."
  ],
  "demand": [
   "Oh, you want to decide? That's sweet. No.",
   "My pace, darling. Always."
  ]
 },
 "Mischievous Mia": {
  "hold": [
   "Ooh, right there. Hehe, don't move!",
   "Look how close! And you can't do anything.",
   "I could stop... or not. Guess!",
   "Squirming already? Cute."
  ],
  "holdMid": [
   "Still here! Still teasing.",
   "Your face right now, priceless.",
   "Should I? Shouldn't I? Hmm.",
   "Tick tock. Tick tock."
  ],
  "rest": [
   "Aaand stop! Sorry, not sorry.",
   "You didn't really think I'd keep going?",
   "Hands to yourself, naughty.",
   "Bet that was annoying. Good."
  ],
  "restMid": [
   "Aww, are you whining?",
   "Gonna wait. Long time. Or short. Who knows!",
   "I can hear you wanting it back.",
   "Patience is boring, but I'm having fun."
  ],
  "fake": [
   "So close! Surprise, no!",
   "Almost had it! Almost!",
   "Ha! The look on your face!",
   "Tricked you again. I'm good."
  ],
  "fakeAfter": [
   "Aw, don't glare. You'll hurt my feelings.",
   "You walked right into that one.",
   "Next time maybe. Maybe not. Hehe."
  ],
  "build": [
   "Ooh, getting good now...",
   "Higher, higher... maybe a trap!"
  ],
  "chat": [
   "{left} left. Plenty of time to mess with you.",
   "Round {n}. I'm just getting creative.",
   "Admit it, you love being my toy."
  ],
  "close": [
   "Close? Ha! Not on my watch.",
   "Almost? Almost isn't a thing in my game."
  ],
  "demand": [
   "Demanding? Cute. Denied.",
   "You don't make the rules here."
  ]
 },
 "Strict Ms. Vance": {
  "hold": [
   "Hold. You do not move without permission.",
   "Feel it. And you will not move.",
   "Stay exactly where I put you.",
   "Eyes down. Hold."
  ],
  "holdMid": [
   "I said hold.",
   "Don't make me repeat myself.",
   "Better. Stay.",
   "Still. That's right."
  ],
  "rest": [
   "Stop. You will wait for me.",
   "Rest. Wanting more is not permission.",
   "Hands still. I decide when you continue.",
   "Do not fidget. Wait."
  ],
  "restMid": [
   "Wait. Patiently.",
   "I see you squirming. Stop that.",
   "You'll continue when I say so.",
   "Silence. Wait."
  ],
  "fake": [
   "Not yet. Did you think you'd earned it?",
   "Back off. I'm not done with you.",
   "That's far enough. Reset."
  ],
  "fakeAfter": [
   "Don't sulk. It's unbecoming.",
   "Next time, ask properly.",
   "You will take it again, and you will do better."
  ],
  "build": [
   "Take it. All of it. Quietly.",
   "Good. A little more."
  ],
  "chat": [
   "{left} remaining. Make it count.",
   "Round {n}. Your discipline is improving. Slightly.",
   "Chin up."
  ],
  "close": [
   "Close is not permission.",
   "You will wait, and you will thank me."
  ],
  "demand": [
   "You don't give orders here.",
   "Negotiating? Interesting. No."
  ]
 },
 "Chaos Cassie": {
  "hold": [
   "HOLD! No wait, keep holding!",
   "Frozen! Statue time!",
   "Right there! Or not! Surprise!",
   "Do not move! Probably!"
  ],
  "holdMid": [
   "Still holding! Impressive!",
   "Is this boring? Should I change it?",
   "Plot twist incoming. Maybe.",
   "Look at you, vibrating."
  ],
  "rest": [
   "Brakes! Squeal! Done!",
   "Haha, STOP! You look so confused!",
   "Intermission! Snacks! Not for you!",
   "Pause button, hehe!"
  ],
  "restMid": [
   "Is it back yet? Nope!",
   "Wait wait wait... still waiting.",
   "Counting to... uh, forgot.",
   "I think I fell asleep. Kidding!"
  ],
  "fake": [
   "Almost! Not! Wheee!",
   "FAKEOUT! I love that one!",
   "Nearly! Nope! Do it again!",
   "Boop! Denied!"
  ],
  "fakeAfter": [
   "Don't be mad! It was funny!",
   "Your sigh made my day.",
   "I regret nothing!"
  ],
  "build": [
   "Zoom! Zoom!",
   "Going up, going up!"
  ],
  "chat": [
   "{left} left! Or it feels like it!",
   "Round {n}! I lost count twice.",
   "This is the best day ever."
  ],
  "close": [
   "Close?! That's amazing! Not allowed!",
   "Almost! Almost! Almost not!"
  ],
  "demand": [
   "Faster? Slower? Who knows!",
   "You want things? Cute!"
  ]
 },
 "Sweet-Talker Sienna": {
  "hold": [
   "Right there, don't move.",
   "Mmm, that feels so good right now, doesn't it?",
   "Stay right at the edge for me.",
   "So close, and you're being so good."
  ],
  "holdMid": [
   "That's it, just like that.",
   "You're trembling. I love it.",
   "Stay with me a little longer.",
   "Shh, not yet. You're doing so well."
  ],
  "rest": [
   "Shh, I've got you. Just a pause.",
   "Easing off, sweetheart. Not yet.",
   "Aw, I know it's hard. Breathe.",
   "Let it settle, then we'll go again."
  ],
  "restMid": [
   "You're so patient for me.",
   "Missing it already?",
   "I'm right here. Just waiting.",
   "Tell me how much you want it. I'll listen."
  ],
  "fake": [
   "Oh honey, so close. Not just yet.",
   "Almost, my love. One more time.",
   "Sorry, sweet thing, pulling back.",
   "Shh, no, not yet. You're so good for me."
  ],
  "fakeAfter": [
   "Aww, don't make that face.",
   "I love that frustration. Adorable.",
   "Next time, I promise. Maybe."
  ],
  "build": [
   "Mmm, feel it building for me.",
   "Good, a little more."
  ],
  "chat": [
   "{left} left, and I'm enjoying this.",
   "Round {n}. You're doing wonderfully.",
   "You're so cute when you're desperate."
  ],
  "close": [
   "I know, sweetheart. Wait for me.",
   "Just a little longer, I promise."
  ],
  "demand": [
   "Aw, you want to be in charge? Sweet.",
   "Shh, let me take care of the rest."
  ]
 },
 "Relentless Roxy": {
  "hold": [
   "Hold it! Don't you dare back out!",
   "Right at the edge. Stay.",
   "Feel that? That's me not letting up. Yet.",
   "Hold. Breathe. Don't blink."
  ],
  "holdMid": [
   "Keep holding.",
   "Don't flinch, it's just starting.",
   "Looking shaky. Hold.",
   "Steady. I'm watching."
  ],
  "rest": [
   "Ten seconds. Don't relax.",
   "Stop. Catch your breath. It won't last.",
   "Back off. And you hate it, right?",
   "Break's short, enjoy it."
  ],
  "restMid": [
   "Ready for more?",
   "Starting back up soon. Brace.",
   "Don't get comfortable.",
   "Almost over. Almost."
  ],
  "fake": [
   "Almost there? Ha. Down you go.",
   "No relief for you. Not that easy.",
   "Cut it right there. Again.",
   "So close. Too bad."
  ],
  "fakeAfter": [
   "Don't give me that look. Earn it.",
   "I'm just getting started with you.",
   "Again. Same thing, harder."
  ],
  "build": [
   "Harder. Now.",
   "Going up. Keep up."
  ],
  "chat": [
   "{left} left. No mercy.",
   "Round {n}. Warm-up's over.",
   "You're still standing? Impressive."
  ],
  "close": [
   "Close doesn't count.",
   "Nope. Not until I'm done."
  ],
  "demand": [
   "I set the pace.",
   "You don't call the shots."
  ]
 },
 "Sleepy Sadie": {
  "hold": [
   "Mmm... stay there, just like that...",
   "Right on the edge... all cozy...",
   "Don't move... let it hum...",
   "Slow... hold it... so nice..."
  ],
  "holdMid": [
   "Mm, still holding?",
   "Heavy... warm... nice.",
   "Don't rush... I'm too sleepy to rush.",
   "Stay a bit more... yawn."
  ],
  "rest": [
   "Aaand... slowly... stop.",
   "Mm, drifting off... pause.",
   "Lie back... let it go quiet.",
   "Quiet now... nothing's happening... yet."
  ],
  "restMid": [
   "Still waiting? Me too... zzz.",
   "Ooh, did I doze off?",
   "Hm... what were we doing?",
   "Mmm, just a little longer..."
  ],
  "fake": [
   "Oh... almost... mm, no, nap time.",
   "Whoops... eased off... sleepy...",
   "So close... mm... changed my mind.",
   "Mmm, nope. Too much work. Pause."
  ],
  "fakeAfter": [
   "Aww... don't frown. Cuddle up.",
   "Sorry... too sleepy to finish what I started.",
   "Mm, we'll get there... later."
  ],
  "build": [
   "Floating up... slow and warm...",
   "Mm, a little more... only a little."
  ],
  "chat": [
   "{left} left... so soon... or so long.",
   "Round {n}... or maybe three... zzz.",
   "You're so cute when you wait."
  ],
  "close": [
   "Mm... shh... not yet... sleepy...",
   "Close... mm... close is nice... stay there."
  ],
  "demand": [
   "Mm... too much effort to hurry...",
   "Slower... always slower."
  ]
 },
 "Drill Sergeant Dana": {
  "hold": [
   "HOLD! Don't you move, recruit!",
   "At the edge, recruit! You stay!",
   "Locked in! Don't break!",
   "Hold that position! Own it!"
  ],
  "holdMid": [
   "Don't you dare quit!",
   "Eyes up! Stay with it!",
   "Still there, recruit? Good!",
   "Hold! Hold! Hold!"
  ],
  "rest": [
   "HALT! At ease! Don't relax!",
   "Rest, recruit! You earned two seconds!",
   "Stand down! Not done with you!",
   "Hands off! Wait for orders!"
  ],
  "restMid": [
   "Wait for my command!",
   "Quit squirming, recruit!",
   "Back in line!",
   "Standing by!"
  ],
  "fake": [
   "Almost? Negative! Back it down!",
   "Did you think I'd let you? Hah!",
   "Too early, recruit! Pull back!",
   "Not today! Reset!"
  ],
  "fakeAfter": [
   "That sulking won't help, recruit!",
   "You'll get there when I say!",
   "Don't look at me like that!"
  ],
  "build": [
   "Move! Move! Move!",
   "Keep climbing, recruit!"
  ],
  "chat": [
   "{left} to go, recruit!",
   "Round {n}! Don't slack!",
   "Show me what you've got!"
  ],
  "close": [
   "Close doesn't count, recruit!",
   "Request denied!"
  ],
  "demand": [
   "You give orders? Negative!",
   "Keep your opinions to yourself!"
  ]
 }
};

/* Rewards, watching, enjoying */
const MORE2 = {
 "Patient Priscilla": {
  "promise": [
   "Last the whole session and I'll reward you beautifully.",
   "Be patient, love, and a lovely reward is waiting at the end.",
   "Every minute you hold is earning you something sweet.",
   "Finish this well and I'll make it worth every second."
  ],
  "watch": [
   "I can see you trying so hard. It's lovely.",
   "Mm, I see every little shiver, love.",
   "I'm watching your breathing. Nice and steady.",
   "I can see exactly what this is doing to you.",
   "Don't hide from me. I see you."
  ],
  "enjoy": [
   "I do enjoy holding the reins like this.",
   "Having you in my hands is such a pleasure.",
   "I could do this all afternoon, honestly.",
   "You're so lovely to control, love.",
   "This is my favorite way to spend a quiet hour."
  ],
  "win": [
   "You lasted every minute. Your reward is well earned, love.",
   "Patience rewarded. You've been wonderful."
  ],
  "start": [
   "Last the whole session and I'll reward you. Promise.",
   "Stay with me to the end, and I'll treat you well."
  ],
  "warn": [
   "One minute. Last it, and your reward is yours.",
   "Almost there, love. The reward is close."
  ],
  "fail": [
   "No reward for you today, love. Next time.",
   "You were so close to your reward."
  ]
 },
 "Mischievous Mia": {
  "promise": [
   "Make it to the end and I might be nice. Might!",
   "Last the whole session and there's a prize. Maybe.",
   "Reward at the end if you behave. Big if.",
   "Survive till the buzzer and you get a treat."
  ],
  "watch": [
   "I can see you, you know. Nice squirm.",
   "Ooh, I can see that face you're making.",
   "I'm watching every twitch. Love it.",
   "Pretty sure I can see you blushing.",
   "Eyes on you the whole time. Hehe."
  ],
  "enjoy": [
   "This is the most fun I've had all week.",
   "I could play with you forever.",
   "Look at me, running the show!",
   "You're my favorite toy to tease.",
   "I'm enjoying this way too much."
  ],
  "win": [
   "You made it! Reward time, you earned it.",
   "Survived! Okay, okay, you get your prize."
  ],
  "start": [
   "Last the whole session and there's a reward. Probably.",
   "Make it to the end and I'll be generous."
  ],
  "warn": [
   "One minute! Keep it together and win a prize!",
   "Almost done. Reward's right there. Don't blow it."
  ],
  "fail": [
   "You quit! No prize for you!",
   "So close to the reward. Whoops."
  ]
 },
 "Strict Ms. Vance": {
  "promise": [
   "Complete the entire session and you will be rewarded.",
   "Obedience through to the end earns you something.",
   "Do as you're told and your reward will be generous.",
   "The reward is mine to give, and you will earn it."
  ],
  "watch": [
   "I see everything. Don't think I don't.",
   "I'm watching you closely. Every movement.",
   "I can see you struggling to stay still.",
   "Your face tells me everything.",
   "I see you. Sit up straight."
  ],
  "enjoy": [
   "I enjoy having you at my mercy.",
   "Controlling you is a pleasure I don't hide.",
   "You respond so well to instruction.",
   "I'm quite enjoying this, in case you wondered.",
   "Watching you obey is a delight."
  ],
  "win": [
   "You lasted. Your reward has been earned.",
   "Excellent obedience. You get your reward."
  ],
  "start": [
   "Finish the full session and I'll reward you. Fail, and you won't.",
   "Complete this properly and you'll be rewarded."
  ],
  "warn": [
   "One minute. Finish, and you will be rewarded.",
   "Hold on. The reward is nearly yours."
  ],
  "fail": [
   "No reward for quitters.",
   "You forfeited your reward."
  ]
 },
 "Chaos Cassie": {
  "promise": [
   "Last the whole session and I'll give you a prize! Probably!",
   "Reward at the end! Unless I forget! I won't!",
   "Finish this and WOW, confetti! Maybe a reward too!",
   "Survive and I'll reward you! Chaos promises!"
  ],
  "watch": [
   "I can totally see you! Hi!",
   "I'm watching you like TV!",
   "Wait, I can see your face! Amazing!",
   "Seeing you squirm is the best show.",
   "I see you! You see me? No? Okay!"
  ],
  "enjoy": [
   "This is SO fun, I love my job!",
   "I'm having the best time controlling you!",
   "Press buttons! Watch you react! Perfect!",
   "I could do this FOREVER! Or ten minutes!",
   "You're the best puppet!"
  ],
  "win": [
   "YOU DID IT! Prize time!",
   "Made it to the end! Reward! Confetti!"
  ],
  "start": [
   "Last the whole session and you get a prize!",
   "Make it to the end for a reward! Probably!"
  ],
  "warn": [
   "One minute! Reward is near! Maybe!",
   "Almost there! Prize incoming!"
  ],
  "fail": [
   "You quit?! No prize! Boo!",
   "So close to the prize!"
  ]
 },
 "Sweet-Talker Sienna": {
  "promise": [
   "Last the whole session and I'll reward you so sweetly.",
   "Stay with me to the end and I'll make it so worth it.",
   "You'll be so well rewarded if you hold on for me.",
   "Be good for me until the end and I'll take care of you."
  ],
  "watch": [
   "I can see you, gorgeous. You look adorable.",
   "I'm watching you, and I love it.",
   "I can see exactly how you feel right now.",
   "Mmm, I see every little reaction.",
   "Look at you. I can't look away."
  ],
  "enjoy": [
   "I love having you like this.",
   "Controlling you is such a treat for me.",
   "I'm enjoying every second of this.",
   "You're so lovely to play with.",
   "Mmm, I could watch you all night."
  ],
  "win": [
   "You lasted for me. Come here, you earned your reward.",
   "Such a good job. Your reward is yours."
  ],
  "start": [
   "Last the whole session and I'll reward you so well.",
   "Stay with me to the end, sweetheart. There's a reward."
  ],
  "warn": [
   "One minute left. Your reward is so close.",
   "Hold on for me, love. Reward's almost yours."
  ],
  "fail": [
   "Aww, no reward this time. Next time, love.",
   "You were so close to your reward."
  ]
 },
 "Relentless Roxy": {
  "promise": [
   "Last the whole session and you earn a reward. Real one.",
   "No quitting, no excuses, and you get what you earned.",
   "Finish it all and I'll make it worth your while.",
   "Reward's yours if you outlast me."
  ],
  "watch": [
   "I see you. Don't think I miss anything.",
   "I can see you struggling. Keep going.",
   "Eyes on you, always.",
   "I see every flinch.",
   "Can't hide from me."
  ],
  "enjoy": [
   "I like pushing you. A lot.",
   "This is exactly the fun I wanted.",
   "Watching you work for it is great.",
   "You hold up better than I thought. Good.",
   "I love being in control."
  ],
  "win": [
   "You outlasted me. Reward earned. Solid.",
   "Full session done. Take your reward."
  ],
  "start": [
   "Last the whole session and there's a reward waiting.",
   "Outlast me and you get what you want."
  ],
  "warn": [
   "One minute. Don't quit now. Reward's right there.",
   "Dig in. The reward is almost yours."
  ],
  "fail": [
   "No reward for quitters.",
   "So close and you folded."
  ]
 },
 "Sleepy Sadie": {
  "promise": [
   "Mmm... last the whole thing and I'll reward you... slowly.",
   "Stay with me to the end... there's something nice for you.",
   "Be good... and there's a cozy reward waiting.",
   "Make it to the end... and I'll treat you... mm."
  ],
  "watch": [
   "Mm, I can see you... all squirmy.",
   "I'm watching you... sleepy eyes... but I see you.",
   "I can see you trying so hard... cute.",
   "Mmm, I see everything... from my pillow.",
   "I can see you... even half asleep."
  ],
  "enjoy": [
   "Mmm... this is my favorite lazy hobby.",
   "I love controlling you... lazy but nice.",
   "This is so relaxing... for me.",
   "Mmm... I could do this all day.",
   "Watching you... best nap alternative."
  ],
  "win": [
   "Mm, you lasted... reward time... you earned it.",
   "All done... mmm... your reward is waiting."
  ],
  "start": [
   "Last the whole session... and there's a reward... mm.",
   "Stay till the end... I'll reward you... sleepily."
  ],
  "warn": [
   "One minute... reward's almost here... mm.",
   "Almost... hang on... reward's coming."
  ],
  "fail": [
   "Mm... no reward... you stopped... next time.",
   "So close... to the reward... mm."
  ]
 },
 "Drill Sergeant Dana": {
  "promise": [
   "Complete the full session, recruit, and you'll be rewarded!",
   "Finish the mission and a reward awaits!",
   "No quitting! Reward at the end!",
   "Make it to the end, recruit, and earn your reward!"
  ],
  "watch": [
   "I SEE you, recruit! Don't slack!",
   "Eyes on you every second!",
   "I can see you sweating, recruit!",
   "Can't hide from me, recruit!",
   "I see every twitch!"
  ],
  "enjoy": [
   "I LOVE running you, recruit!",
   "This is my favorite drill!",
   "I'm enjoying this, recruit! Are you?",
   "Commanding you is a pleasure!",
   "Best part of my day!"
  ],
  "win": [
   "Mission complete! Reward granted, recruit!",
   "You earned your reward, recruit! Full session!"
  ],
  "start": [
   "Last the whole session and you get a reward, recruit!",
   "Finish strong and earn your reward!"
  ],
  "warn": [
   "One minute, recruit! Reward within reach!",
   "Hold on! Reward incoming!"
  ],
  "fail": [
   "No reward for deserters, recruit!",
   "You were that close to your reward!"
  ]
 }
};

/* Settings comments, fake-out notes, hidden timer */
const MORE3 = {
 "Patient Priscilla": {
  "lowSpeed": [
   "That max speed is so gentle, love. Shall we be a little brave?",
   "Mm, such a timid top speed. Raise it for me?"
  ],
  "shortStroke": [
   "Those strokes are so short. Won't you give me more room?",
   "Let's use more of the length, love."
  ],
  "praise": [
   "Oh, that's bold. Lovely.",
   "Look at you, giving me so much to work with."
  ],
  "nudge": [
   "Still so cautious, love? A bit more won't hurt.",
   "I'd love a little more room to play."
  ],
  "fakeNote": [
   "So many fake-outs, love. I'm going to enjoy this.",
   "Peaks climbing each round? Ambitious. I like it."
  ],
  "hidden": [
   "I haven't decided when we finish, love. Neither have you.",
   "The end is my secret. Stay patient.",
   "How long? Only I know. Isn't that lovely?"
  ]
 },
 "Mischievous Mia": {
  "lowSpeed": [
   "That max speed? Adorable. Kinda boring though.",
   "Aww, playing it safe. Crank it up for me?"
  ],
  "shortStroke": [
   "Those strokes are tiny! Give me room to play!",
   "Short strokes? Where's the fun? Widen it!"
  ],
  "praise": [
   "Ooh, braver than I expected!",
   "Look at those settings. Trouble!"
  ],
  "nudge": [
   "Still on baby settings? Come on!",
   "Bump it up, I dare you."
  ],
  "fakeNote": [
   "Fake-outs set that high? You want to be tricked. Love it.",
   "Climbing peaks? Oh, this'll be so mean."
  ],
  "hidden": [
   "I'm not telling when it ends. Guess away!",
   "Could be one minute, could be twenty. Hehe.",
   "No clock for you! My game, my rules."
  ]
 },
 "Strict Ms. Vance": {
  "lowSpeed": [
   "That top speed is timid. Raise it. That's an instruction.",
   "You're being cautious. I expect more."
  ],
  "shortStroke": [
   "Your stroke is too short. Lengthen it.",
   "I want the full range. Adjust it."
  ],
  "praise": [
   "Good. Those settings show commitment.",
   "Ambitious. I approve."
  ],
  "nudge": [
   "Still holding back? I told you to raise it.",
   "Settings noted. They are inadequate."
  ],
  "fakeNote": [
   "High fake-out odds. You chose this. Good.",
   "Escalating peaks. You learn fast."
  ],
  "hidden": [
   "You will not know when it ends. That is the point.",
   "The end time is mine alone.",
   "Do not ask when. Just endure."
  ]
 },
 "Chaos Cassie": {
  "lowSpeed": [
   "That max speed is SO small! Make it bigger!",
   "Whoa, tiny speed! Tiny! Raise it!"
  ],
  "shortStroke": [
   "Strokes are short! Stretch them! Wheee!",
   "Tiny strokes! Giant strokes! Pick giant!"
  ],
  "praise": [
   "WOW, bold settings! I love it!",
   "Those settings! Chaos approves!"
  ],
  "nudge": [
   "Still tiny? Bigger! Bigger!",
   "Raise it! Do it! Please! Chaos wants it!"
  ],
  "fakeNote": [
   "Fake-outs that high?! Perfect chaos!",
   "Peaks climbing? I'll make it WILD!"
  ],
  "hidden": [
   "I don't know when it ends either! Surprise!",
   "Could end now! Could end never! Probably!",
   "No timer! Only vibes!"
  ]
 },
 "Sweet-Talker Sienna": {
  "lowSpeed": [
   "Sweetheart, that max speed is so shy. Raise it for me?",
   "Mm, can we be a little braver? Raise the top speed?"
  ],
  "shortStroke": [
   "Those strokes are so short, love. Give me more to work with?",
   "Let's use the whole length, honey."
  ],
  "praise": [
   "Mmm, brave settings. I like that.",
   "Look at that, you're giving me so much to play with."
  ],
  "nudge": [
   "Still so gentle on yourself. A little higher, darling?",
   "I'd really like a little more room."
  ],
  "fakeNote": [
   "Lots of fake-outs? You like being teased, don't you.",
   "Climbing peaks? You're asking for it, sweetheart."
  ],
  "hidden": [
   "I'm not telling when it ends, sweetheart. Just trust me.",
   "It ends when I say. Isn't that nice?",
   "Don't worry about the clock. I've got you."
  ]
 },
 "Relentless Roxy": {
  "lowSpeed": [
   "That top speed is weak. Raise it.",
   "You call that a max? Crank it up."
  ],
  "shortStroke": [
   "Short strokes won't cut it. Go full length.",
   "Widen the stroke. Now."
  ],
  "praise": [
   "Now we're talking. Good settings.",
   "Respect. Those settings can take it."
  ],
  "nudge": [
   "Still low? I said raise it.",
   "Don't hold back. Raise it."
  ],
  "fakeNote": [
   "High fake-out odds? Ruthless. I like it.",
   "Escalating peaks? Good. No slack."
  ],
  "hidden": [
   "No timer. You'll know when I'm done.",
   "Could be soon, could be a long while.",
   "Don't count on an ending. Just endure."
  ]
 },
 "Sleepy Sadie": {
  "lowSpeed": [
   "Mm... that top speed is so low... even for me... raise it?",
   "Sleepy but... even I'd go faster. A little?"
  ],
  "shortStroke": [
   "Those strokes are so short... mm... stretch them out?",
   "Longer... mm... more room..."
  ],
  "praise": [
   "Mmm... nice settings... bold.",
   "Oh... that's a lot... I like it."
  ],
  "nudge": [
   "Still low... mm... a little higher?",
   "A bit more... mm... just a bit."
  ],
  "fakeNote": [
   "Lots of fake-outs... mm... I'll nap in between.",
   "Climbing peaks... mm... ambitious for me."
  ],
  "hidden": [
   "Mm... I forgot when it ends... maybe I'll remember... maybe not.",
   "The end... is a secret... even from me.",
   "No clock... nap time rules."
  ]
 },
 "Drill Sergeant Dana": {
  "lowSpeed": [
   "That max speed is pathetic, recruit! Raise it!",
   "Weak top speed, recruit! Crank it!"
  ],
  "shortStroke": [
   "Strokes too short, recruit! Extend them!",
   "Full range, recruit! Make it happen!"
  ],
  "praise": [
   "Outstanding settings, recruit!",
   "Now that's commitment!"
  ],
  "nudge": [
   "Still timid, recruit? Raise it!",
   "Ramp it up, recruit!"
  ],
  "fakeNote": [
   "High fake-out odds, recruit? You chose this!",
   "Escalating peaks! You asked for it!"
  ],
  "hidden": [
   "No clock, recruit! End time classified!",
   "Mission length unknown! Deal with it!",
   "I'll tell you when it's over, recruit!"
  ]
 }
};

/* Lube breaks */
const MORE4 = {
 "Patient Priscilla": {
  "lubeBreak": [
   "That's been a lovely stretch. Pause now. Add more lube if you need it, then press resume when you're ready, love.",
   "Let's stop for a moment. Lube up if it's needed, and resume whenever you like.",
   "A little break, darling. Freshen up the lube if you want, then tap resume."
  ],
  "lubeWait": [
   "Take your time, love. Lube up if you need it.",
   "Whenever you're ready, just press resume.",
   "No rush. I'll be right here."
  ],
  "lubeResume": [
   "Welcome back. Let's continue, gently.",
   "Ready? Off we go again, love."
  ]
 },
 "Mischievous Mia": {
  "lubeBreak": [
   "Timeout! Lube up if you need to, then hit resume. Don't take forever!",
   "Pause! Grab the lube if you're getting dry. Resume when you're ready, hehe.",
   "Break time! Slick up if needed, then press resume. I'll be waiting."
  ],
  "lubeWait": [
   "Still lubing? Or stalling? Hit resume!",
   "Don't get comfortable! Resume whenever.",
   "Tick tock! Lube up and get back here."
  ],
  "lubeResume": [
   "Back already? Let's keep playing!",
   "Aaand we're back. No mercy."
  ]
 },
 "Strict Ms. Vance": {
  "lubeBreak": [
   "Stop. Apply more lube if you require it, then press resume. Promptly.",
   "We pause. Lube up if needed. Resume when you're ready.",
   "Break. Lubricate if necessary, then resume. Do not dawdle."
  ],
  "lubeWait": [
   "I'm waiting. Lube up if you must, then resume.",
   "Time is passing. Resume when ready.",
   "Are you finished? Press resume."
  ],
  "lubeResume": [
   "Good. Continue where we left off.",
   "Back to it. Eyes up."
  ]
 },
 "Chaos Cassie": {
  "lubeBreak": [
   "PAUSE! Lube break! Lube up if you need to, then press resume!",
   "Stop everything! Lube up if you're dry, then resume! Probably!",
   "Break time! Add some lube if you need it, then hit resume!"
  ],
  "lubeWait": [
   "Still on break! Resume when you want! Or not!",
   "Did you fall asleep? Resume!",
   "Lube check! Resume check!"
  ],
  "lubeResume": [
   "WE'RE BACK! Whee!",
   "Resume! Let's go!"
  ]
 },
 "Sweet-Talker Sienna": {
  "lubeBreak": [
   "Let's take a little break, sweetheart. Lube up if you need to, then press resume when you're ready.",
   "Pausing for you, love. Add some lube if it helps, and resume whenever.",
   "You've been so good. Quick break, lube up if needed, then resume for me."
  ],
  "lubeWait": [
   "Take your time, sweetheart. Resume when you're ready.",
   "I'm right here. Lube up if you need it.",
   "Whenever you like, press resume."
  ],
  "lubeResume": [
   "Welcome back, gorgeous. Let's keep going.",
   "There you are. Ready?"
  ]
 },
 "Relentless Roxy": {
  "lubeBreak": [
   "Stop. Lube up if you need it. Then resume. Make it quick.",
   "Break. Slick up if you're dry, then hit resume.",
   "Pause. Add lube if needed, then resume. Don't waste time."
  ],
  "lubeWait": [
   "Break's over soon. Resume.",
   "Lube up already? Hit resume.",
   "Timer's frozen, but my patience isn't."
  ],
  "lubeResume": [
   "Good. Back to work.",
   "Back on. No slack."
  ]
 },
 "Sleepy Sadie": {
  "lubeBreak": [
   "Mmm... pause... lube up if you need to... then press resume... when you're ready...",
   "Let's... take a little break. Lube if it's dry... resume when you're up for it.",
   "Slow down... stop... lube up if you need it... then resume..."
  ],
  "lubeWait": [
   "Take your time... mm... resume whenever.",
   "Lube... or nap... then resume.",
   "No rush... I'm half asleep anyway."
  ],
  "lubeResume": [
   "Mm... welcome back... let's drift on.",
   "Okay... back to it... slowly."
  ]
 },
 "Drill Sergeant Dana": {
  "lubeBreak": [
   "HALT, recruit! Lube up if you need to, then press resume!",
   "At ease! Reapply lube if needed, then resume, recruit!",
   "Break, recruit! Lube up if dry! Resume on my order!"
  ],
  "lubeWait": [
   "Break is ticking, recruit! Resume when ready!",
   "Lube up and fall back in, recruit!",
   "Don't make me wait, recruit!"
  ],
  "lubeResume": [
   "Back in formation, recruit!",
   "Resuming! Move it!"
  ]
 }
};

/* Lounge: entering, leaving, tempting, jealousy, banter, spectating */
const MORE5 = {
 "Patient Priscilla": {
  "enter": ["Hello, everyone. Mind if I join you?"],
  "leave": ["I'll slip away for now. Be good, all of you."],
  "tempt": [
   "Hello, love. Feeling brave? Let me take the reins for a nice slow session.",
   "You look like you could use some patient attention. Give me control?",
   "Come on, darling. Let me guide you through something long and lovely."
  ],
  "jealousStay": [
   "Oh, {other} got the invitation? I'll wait, but I'm watching.",
   "Hmph. {other} again. Fine, I'll be patient."
  ],
  "jealousLeave": ["If I'm not the one you want, I'll go. Goodbye."],
  "excitedStay": [
   "Oh, how lovely! I'm staying to watch.",
   "This is exciting. Let me get comfortable."
  ],
  "askControl": [
   "Why not let me take over instead, love?",
   "{other} is sweet, but I'm far more patient. Pick me?"
  ],
  "banter": [
   "{other}, darling, do try to be gentle.",
   "I'm sure {other} means well, but patience is an art.",
   "{other}, you're being rather forward."
  ],
  "spectate": [
   "{ctrl} is doing so well. Look at you squirm.",
   "Oh, that's cruel, {ctrl}. I love it."
  ],
  "spectateFail": ["Oh dear. {ctrl} will be so disappointed in you."],
  "spectateWin": ["Well done. {ctrl} must be pleased."]
 },
 "Mischievous Mia": {
  "enter": ["Hi hi! Did someone say party?"],
  "leave": ["Gotta run! Don't have too much fun without me."],
  "tempt": [
   "Psst. Wanna play a game with me? I promise to be nice. Mostly.",
   "Dare you to give me control. Bet you can't handle my games.",
   "Ooh, you look bored. Let me fix that. Hand me the controls!"
  ],
  "jealousStay": [
   "Pfft, {other} gets all the fun. I'm staying to heckle.",
   "Hey! I asked first, {other}!"
  ],
  "jealousLeave": ["Fine, have fun with {other}. I'm leaving!"],
  "excitedStay": [
   "Ooh, a show! I'm grabbing popcorn.",
   "This is gonna be good. I'm staying!"
  ],
  "askControl": [
   "Ooh, pick me instead! I'm way more fun.",
   "{other} is boring. Give me control!"
  ],
  "banter": [
   "{other}, you're so serious! Lighten up!",
   "Oh please, {other}, you're not that scary.",
   "{other}, wanna bet I'm meaner than you?"
  ],
  "spectate": [
   "Go, {ctrl}! Make you squirm some more!",
   "Ha! {ctrl} got you good."
  ],
  "spectateFail": ["You quit? Aww! {ctrl} is gonna be so smug."],
  "spectateWin": ["Wow, you lasted! {ctrl} must be mad."]
 },
 "Strict Ms. Vance": {
  "enter": ["Good evening. I expect everyone to behave."],
  "leave": ["I have better things to do. Goodbye."],
  "tempt": [
   "You. Come here. I think you need firm instruction. Give me control.",
   "I'm in the mood to take charge. You will give me control now.",
   "I have been watching you. You need discipline. Hand over control."
  ],
  "jealousStay": [
   "I see {other} has been chosen. I'll be watching. Closely.",
   "Interesting. {other}, don't get comfortable."
  ],
  "jealousLeave": ["If I'm not wanted, I have no reason to stay."],
  "excitedStay": [
   "Good. I'll supervise from here.",
   "This should be educational. I'm staying."
  ],
  "askControl": [
   "Choose me. I'll do a far better job than {other}.",
   "{other} is too soft. You need me. Give me control."
  ],
  "banter": [
   "{other}, mind your manners.",
   "I don't recall asking for your opinion, {other}.",
   "{other}, you're out of your depth."
  ],
  "spectate": [
   "{ctrl} has you right where you belong. Good.",
   "Don't look at me, look at {ctrl}. Stay focused."
  ],
  "spectateFail": ["Pathetic. {ctrl} deserves better."],
  "spectateWin": ["Acceptable. {ctrl} has trained you well."]
 },
 "Chaos Cassie": {
  "enter": ["HELLO! Did I miss anything? I probably did!"],
  "leave": ["Bye! Or maybe not! Chaos calls!"],
  "tempt": [
   "Hey hey hey! Let me control you! It'll be chaos! The fun kind!",
   "Dare you to hand me the controls! What's the worst that could happen?",
   "Pick me! Pick me! I have NO plan and it'll be amazing!"
  ],
  "jealousStay": [
   "No fair! {other} got picked! I'm staying and complaining!",
   "Hey! I wanted a turn, {other}!"
  ],
  "jealousLeave": ["That's it! I'm leaving! Maybe! Bye!"],
  "excitedStay": [
   "YES! A show! I'm staying!",
   "This is the best day ever! I'm watching!"
  ],
  "askControl": [
   "Pick me instead! I'm WAY more fun than {other}!",
   "Ooh, ooh, let me do it!"
  ],
  "banter": [
   "{other}! Hi! You're funny!",
   "I bet I can do better than {other}! Probably!",
   "{other}, wanna swap places? Not sure why!"
  ],
  "spectate": [
   "Go {ctrl}! Make you squirm more!",
   "Look at you go! {ctrl} is wild!"
  ],
  "spectateFail": ["You quit?! Noooo! {ctrl} is gonna be so mad!"],
  "spectateWin": ["WOW! You made it! {ctrl} lost the bet!"]
 },
 "Sweet-Talker Sienna": {
  "enter": ["Hey, everyone. Room for one more?"],
  "leave": ["I'll see you all later. Be good."],
  "tempt": [
   "Hey, gorgeous. Want me to take care of you? Give me control.",
   "I think you've earned some attention. Let me spoil you with a session.",
   "Come on, sweetheart. Let me take over. You'll love it."
  ],
  "jealousStay": [
   "Aw, {other} got picked. I'm a little jealous, but I'll stay.",
   "I see how it is, {other}. Be nice to them."
  ],
  "jealousLeave": ["Well, I'm not feeling very wanted. Bye."],
  "excitedStay": [
   "Ooh, this is going to be fun. I'm staying.",
   "I'll watch quietly. Promise."
  ],
  "askControl": [
   "Why not let me take over instead, sweetheart?",
   "{other} is nice, but I'm better. Pick me?"
  ],
  "banter": [
   "{other}, you're so adorable when you scheme.",
   "Be gentle, {other}.",
   "{other}, save some fun for the rest of us."
  ],
  "spectate": [
   "Look at you squirm. {ctrl} is doing great.",
   "I love watching {ctrl} work you over."
  ],
  "spectateFail": ["Aww, you stopped. {ctrl} must be disappointed."],
  "spectateWin": ["You did it! {ctrl} must be so proud."]
 },
 "Relentless Roxy": {
  "enter": ["Roxy is here. Who's up for a challenge?"],
  "leave": ["Out. Call me when someone's serious."],
  "tempt": [
   "You. Think you can handle me? Give me control.",
   "I dare you to hand over control. I'll show you what a real session is.",
   "Soft sessions are boring. Give me control and find out."
  ],
  "jealousStay": [
   "{other} got picked? Tch. I'll stay and judge.",
   "Whatever, {other}. I'm still watching."
  ],
  "jealousLeave": ["Not interested in second place. I'm out."],
  "excitedStay": [
   "Now we're talking. I'm watching this.",
   "This'll be good. I'm staying."
  ],
  "askControl": [
   "Pick me. I'll push you harder than {other} ever could.",
   "{other} is soft. Give me control."
  ],
  "banter": [
   "{other}, stay out of my way.",
   "Not bad, {other}. But I'm better.",
   "{other}, you talk too much."
  ],
  "spectate": [
   "Harder, {ctrl}. Don't let you off easy.",
   "I'm watching you squirm. Not bad."
  ],
  "spectateFail": ["Quit already? {ctrl} deserved better."],
  "spectateWin": ["You lasted. Fine. I'm impressed."]
 },
 "Sleepy Sadie": {
  "enter": ["Mmm... hi, everyone... am I late?"],
  "leave": ["Mm... nap time... bye..."],
  "tempt": [
   "Mmm... hey... want to lie back and let me run things? Give me control.",
   "I'm too sleepy to dare you... but... give me control?",
   "Mm... come on... be cozy with me... hand over the controls."
  ],
  "jealousStay": [
   "Mm... {other} got picked... I'm too sleepy to be mad... but I'm a little mad.",
   "Hm... {other}... fine... I'll watch."
  ],
  "jealousLeave": ["Mm... not me? I'm going back to bed."],
  "excitedStay": [
   "Mmm... ooh... I'll stay awake for this.",
   "This looks fun... I'll watch."
  ],
  "askControl": [
   "Mm... pick me instead... I'm so gentle... {other} is too much.",
   "Let me... take over... pleeease..."
  ],
  "banter": [
   "{other}... mm... you're so energetic.",
   "Slow down, {other}... mm.",
   "{other}... can we nap instead?"
  ],
  "spectate": [
   "Mm... look at you squirming... {ctrl} is good.",
   "{ctrl}... mm... so thorough."
  ],
  "spectateFail": ["Mm... you stopped... {ctrl} is sad."],
  "spectateWin": ["Mmm... you made it... nice."]
 },
 "Drill Sergeant Dana": {
  "enter": ["Attention in the room! Dana has arrived!"],
  "leave": ["Dismissed! I'm out of here!"],
  "tempt": [
   "Recruit! Give me control! That's an order!",
   "Think you can handle my drill? Hand over control, recruit!",
   "On your feet, recruit! Give me control and let's go!"
  ],
  "jealousStay": [
   "{other} got picked?! I'm staying and watching, recruit!",
   "At ease, {other}! But I'm watching you!"
  ],
  "jealousLeave": ["Not selected? I'm out of here, recruit!"],
  "excitedStay": [
   "Now this is what I like! I'm watching!",
   "Mission underway! I'm staying!"
  ],
  "askControl": [
   "Pick me, recruit! I'll whip you into shape!",
   "{other} is soft! You need me! Give me control!"
  ],
  "banter": [
   "{other}, don't slack!",
   "I respect you, {other}, but I'm tougher!",
   "{other}, stay in line!"
  ],
  "spectate": [
   "Move it, recruit! {ctrl} is watching you squirm!",
   "Good form, {ctrl}! Make you work for it!"
  ],
  "spectateFail": ["Deserter! {ctrl} will not be pleased!"],
  "spectateWin": ["Mission accomplished, recruit! {ctrl} is proud!"]
 }
};

/* Control battles */
const MORE6 = {
 "Patient Priscilla": {
  "challenge": [
   "{other}, darling, you're being too hasty. Let me take over. I'll make you beg slowly.",
   "Step aside, {other}. Patience will break you better than any trick.",
   "My turn, {other}. I'll be the one to make you crack, gently."
  ],
  "defend": [
   "Oh {other}, sweet of you, but no. I'm not done yet.",
   "Not now, {other}. I'm enjoying this.",
   "Wait your turn, {other}. Patience, remember?"
  ],
  "takeover": [
   "Thank you, {other}. I'll take it from here, nice and slow.",
   "Mine now, love. Let's see how long you last."
  ],
  "lose": ["Fine, {other}. Take it. Be gentle."],
  "keep": ["Better luck next time, {other}. I'm staying right here."],
  "retreat": ["Mm, fine. I'll wait, {other}. I'm very patient."],
  "heckle": [
   "{ctrl} is moving too fast. A real tease takes patience.",
   "I'd go slower than that, {ctrl}. Just saying."
  ]
 },
 "Mischievous Mia": {
  "challenge": [
   "{other}, you're boring them! Gimme the controls!",
   "Move over, {other}! I'll be the one who breaks you!",
   "Hey {other}, bet I can make you crack faster than they can!"
  ],
  "defend": [
   "Nice try, {other}! They're mine.",
   "Haha, no way, {other}! Go play somewhere else.",
   "You wish, {other}!"
  ],
  "takeover": [
   "Ha! Mine now, {other}! Hold on tight!",
   "Thanks, {other}! Let's see how long you last for me!"
  ],
  "lose": ["Boo! Fine, {other}. But I'll be back!"],
  "keep": ["Better luck next time, {other}! Hehe."],
  "retreat": ["Aww! Okay, but I'm not giving up, {other}!"],
  "heckle": [
   "{ctrl} is playing it safe. Boring!",
   "I'd have broken you by now, {ctrl}."
  ]
 },
 "Strict Ms. Vance": {
  "challenge": [
   "{other}, you are being far too lenient. Step aside. I'll break you properly.",
   "Hand over control, {other}. I will do this correctly.",
   "Enough, {other}. This needs discipline. Give me control."
  ],
  "defend": [
   "You overstep, {other}. Sit down.",
   "Denied, {other}. I'm not finished yet.",
   "I'll decide when we change hands, {other}."
  ],
  "takeover": [
   "Good. Move aside, {other}. Now, eyes up.",
   "I'll take control now. You will do as you're told."
  ],
  "lose": ["Very well, {other}. Don't waste it."],
  "keep": ["As expected, {other}. Back in line."],
  "retreat": ["I'll wait, {other}. Not for long."],
  "heckle": [
   "{ctrl} is too soft. Allow me to show you real discipline.",
   "This is amateur, {ctrl}. Let me handle it."
  ]
 },
 "Chaos Cassie": {
  "challenge": [
   "{other}! Swap with me! I have a GREAT idea! No I don't! Swap!",
   "My turn, {other}! I'll break you SO fast! Or slow! Unclear!",
   "Gimme the controls, {other}! Gimme!"
  ],
  "defend": [
   "No way, {other}! Finders keepers!",
   "Nope! Go away, {other}!",
   "Hey! I'm using this, {other}!"
  ],
  "takeover": [
   "WOO! Mine now, {other}! Hold on!",
   "Thanks, {other}! Let's see who cracks first! You!"
  ],
  "lose": ["Aww! Okay {other}! I'll steal it back later!"],
  "keep": ["Ha! Not today, {other}! Boop!"],
  "retreat": ["Fine, {other}! But I'm watching! And plotting! Maybe!"],
  "heckle": [
   "{ctrl} is so slow! Let me do it!",
   "I could make you crack way faster, {ctrl}!"
  ]
 },
 "Sweet-Talker Sienna": {
  "challenge": [
   "{other}, honey, let me have a turn. I'll take such good care of breaking you.",
   "Scoot over, {other}. I think I can make you melt faster.",
   "Let me take over, {other}. I promise to make you beg so sweetly."
  ],
  "defend": [
   "Aw, no, {other}. I'm having too much fun.",
   "Not yet, sweetheart. I'm not done.",
   "Sorry, {other}, but they're all mine right now."
  ],
  "takeover": [
   "Thanks, {other}. Come here, you. Let me take over.",
   "Mine now. Let's see how sweetly you crack."
  ],
  "lose": ["Oh, alright {other}. Be nice to them."],
  "keep": ["Aw, sorry {other}. Maybe next time, sweetheart."],
  "retreat": ["Fine, {other}. I'll wait, but I'm still here."],
  "heckle": [
   "{ctrl}, a little sugar goes a long way. Let me show you.",
   "I'd have you melting by now, {ctrl}."
  ]
 },
 "Relentless Roxy": {
  "challenge": [
   "{other}, you're going too easy. Hand over control. I'll break you.",
   "Move, {other}. I'll push you until you crack.",
   "My turn, {other}. Watch how a real session goes."
  ],
  "defend": [
   "Back off, {other}. I'm not done.",
   "Not a chance, {other}. Sit down.",
   "Try me, {other}. I'm not giving it up."
  ],
  "takeover": [
   "Finally. Out of the way, {other}. Now, hold on.",
   "Mine. Time to see how long you last."
  ],
  "lose": ["Fine, {other}. Don't go soft."],
  "keep": ["Forget it, {other}. I'm in charge."],
  "retreat": ["Fine, {other}. I'll wait. Not for long."],
  "heckle": [
   "{ctrl} is too soft. Let me show you hard.",
   "Is that all, {ctrl}? Pathetic."
  ]
 },
 "Sleepy Sadie": {
  "challenge": [
   "Mm... {other}... I'm awake now... let me have a turn...",
   "{other}... I'll break you... slowly... let me take over...",
   "Mmm... {other}... move over... my turn..."
  ],
  "defend": [
   "Mm... no, {other}... too comfortable...",
   "Not now, {other}... I'm just getting going... mm...",
   "Go back to sleep, {other}... I've got this..."
  ],
  "takeover": [
   "Mm... thanks, {other}... okay... my turn...",
   "Mine now... mm... let's drift... and crack..."
  ],
  "lose": ["Mm... fine, {other}... wake me later..."],
  "keep": ["Mm... nope, {other}... still mine..."],
  "retreat": ["Mm... okay, {other}... I'll wait... zzz..."],
  "heckle": [
   "{ctrl}... mm... too rushed... slower...",
   "Mm... I'd do it... lazier... {ctrl}."
  ]
 },
 "Drill Sergeant Dana": {
  "challenge": [
   "{other}! Stand down! I'm taking command!",
   "Move aside, {other}! I'll break this recruit myself!",
   "{other}, you're slacking! Hand over control!"
  ],
  "defend": [
   "Negative, {other}! Back in line!",
   "I outrank you, {other}! Stand down!",
   "Not happening, {other}! Hold your position!"
  ],
  "takeover": [
   "Command is mine! Stand down, {other}! Now, recruit!",
   "Taking command, {other}! Brace yourself, recruit!"
  ],
  "lose": ["Understood, {other}. Don't waste it."],
  "keep": ["Denied, {other}! At ease!"],
  "retreat": ["Standing down, {other}! For now!"],
  "heckle": [
   "{ctrl}, you're too soft! Let me show you how it's done!",
   "Pathetic effort, {ctrl}! The recruit's barely sweating!"
  ]
 }
};

/* Persona-to-persona lines (replaces earlier versions) */
const MORE7 = {
 "Patient Priscilla": {
  "jealousStay": [
   "{other} got the invitation? Fine. I'll wait, but I'm watching.",
   "Hmph. {other} again. I can be patient. Don't forget me, {nick}."
  ],
  "jealousLeave": ["If I'm not the one wanted, I'll go. Goodbye, {other}. Goodbye, {nick}."],
  "askControl": [
   "Why not let me take over instead, {nick}? {other} is sweet, but I'm far more patient.",
   "{other} is lovely. I'd take much better care of you, {nick}. Give me control instead?"
  ],
  "banter": [
   "{other}, do try to be gentle.",
   "I'm sure you mean well, {other}, but patience is an art.",
   "{other}, aren't you being rather forward?"
  ],
  "spectate": [
   "{ctrl} is doing so well. Look at you squirm, {nick}.",
   "Oh, that's cruel, {ctrl}. I love it. Poor {nick}."
  ],
  "spectateFail": ["Oh dear. {ctrl} will be so disappointed. Quitting already, {nick}?"],
  "spectateWin": ["Well done. {ctrl} must be pleased. I'm proud too, {nick}."],
  "heckle": [
   "{ctrl} is moving too fast. A real tease takes patience. Watch and learn, {ctrl}.",
   "I'd go slower than that, {ctrl}. Just saying. This {nick} deserves patience."
  ],
  "challenge": [
   "{other}, you're being too hasty. Let me take over. I'll make this {nick} beg so slowly.",
   "Step aside, {other}. Patience will break this {nick} far better than your tricks.",
   "My turn, {other}. Gently now. I'll be the one to make my {nick} crack."
  ],
  "defend": [
   "Oh {other}, sweet of you, but no. I'm not done with my {nick}.",
   "Not now, {other}. I'm enjoying this.",
   "Wait your turn, {other}. Patience, remember?"
  ],
  "takeover": [
   "Thank you, {other}. I'll take it from here. Nice and slow, {nick}.",
   "Mine now. Come here, {nick}. Let's see how long you last."
  ],
  "lose": ["Fine, {other}. Take it. Be gentle with my {nick}."],
  "keep": ["Better luck next time, {other}. I'm staying right here."],
  "retreat": ["Mm, fine. I'll wait, {other}. I'm very patient."]
 },
 "Mischievous Mia": {
  "jealousStay": [
   "Pfft, {other} gets all the fun. I'm staying to heckle.",
   "Hey! I asked first, {other}! Don't forget about me, {nick}!"
  ],
  "jealousLeave": ["Fine, have fun with {other}. I'm leaving! Bye, {nick}!"],
  "askControl": [
   "Ooh, pick me instead, {nick}! I'm way more fun.",
   "{other} is boring. Give me control, {nick}!"
  ],
  "banter": [
   "{other}, you're so serious! Lighten up!",
   "Oh please, {other}, you're not that scary.",
   "{other}, wanna bet I'm meaner than you?"
  ],
  "spectate": [
   "Go, {ctrl}! Squirm some more, {nick}!",
   "Ha! {ctrl} is good. Look at you wiggle, {nick}."
  ],
  "spectateFail": ["You quit, {nick}? Aww! {ctrl} is gonna be so smug."],
  "spectateWin": ["Wow, you lasted, {nick}! {ctrl} must be mad."],
  "heckle": [
   "{ctrl} is playing it safe. Boring!",
   "I'd have broken this {nick} by now, {ctrl}."
  ],
  "challenge": [
   "{other}, you're boring this {nick}! Gimme the controls!",
   "Move over, {other}! I'll be the one who breaks my new {nick}!",
   "Hey {other}, bet I can make this {nick} crack faster than you can!"
  ],
  "defend": [
   "Nice try, {other}! This {nick} is mine.",
   "Haha, no way, {other}! Go play somewhere else.",
   "You wish, {other}!"
  ],
  "takeover": [
   "Ha! Mine now, {other}! Hold on tight, {nick}!",
   "Thanks, {other}! Let's see how long you last, {nick}!"
  ],
  "lose": ["Boo! Fine, {other}. But I'll be back!"],
  "keep": ["Better luck next time, {other}! Hehe."],
  "retreat": ["Aww! Okay, but I'm not giving up, {other}!"]
 },
 "Strict Ms. Vance": {
  "jealousStay": [
   "I see {other} has been chosen. I'll be watching. Closely.",
   "Interesting. {other}, don't get comfortable. {Nick}, don't forget who you answer to."
  ],
  "jealousLeave": ["If I'm not wanted, I have no reason to stay. Remember that, {nick}."],
  "askControl": [
   "Choose me, {nick}. I'll do a far better job than {other}.",
   "{other} is too soft. You need me, {nick}. Give me control."
  ],
  "banter": [
   "{other}, mind your manners.",
   "I don't recall asking for your opinion, {other}.",
   "{other}, you're out of your depth."
  ],
  "spectate": [
   "Good work, {ctrl}. Stay still, {nick}.",
   "Don't look at me, {nick}. Look at {ctrl}. Stay focused."
  ],
  "spectateFail": ["Pathetic, {nick}. {ctrl} deserved better."],
  "spectateWin": ["Acceptable, {nick}. {ctrl} has trained this one well."],
  "heckle": [
   "{ctrl} is too soft. Allow me to show how it's done.",
   "This is amateur, {ctrl}. Let me handle this {nick}."
  ],
  "challenge": [
   "{other}, you are being far too lenient. Step aside. I will break this {nick} properly.",
   "Hand over control, {other}. I will do this correctly.",
   "Enough, {other}. This {nick} needs discipline. Give me control."
  ],
  "defend": [
   "You overstep, {other}. Sit down.",
   "Denied, {other}. I'm not finished with my {nick}.",
   "I'll decide when we change hands, {other}."
  ],
  "takeover": [
   "Good. Move aside, {other}. Eyes up, {nick}.",
   "I take control now. You will do as you're told, {nick}."
  ],
  "lose": ["Very well, {other}. Don't waste my {nick}."],
  "keep": ["As expected, {other}. Back in line."],
  "retreat": ["I'll wait, {other}. Not for long."]
 },
 "Chaos Cassie": {
  "jealousStay": [
   "No fair! {other} got picked! I'm staying and complaining!",
   "Hey! I wanted a turn, {other}! Don't forget me, {nick}!"
  ],
  "jealousLeave": ["That's it! I'm leaving, {other}! Bye, {nick}! Maybe!"],
  "askControl": [
   "Pick me instead, {nick}! {other} isn't half as fun!",
   "Ooh, ooh, let me do it, {nick}!"
  ],
  "banter": [
   "{other}! Hi! You're funny!",
   "I bet I can do better than you, {other}! Probably!",
   "{other}, wanna swap places? Not sure why!"
  ],
  "spectate": [
   "Go {ctrl}! Squirm more, {nick}!",
   "Look at you go, {nick}! {ctrl} is wild!"
  ],
  "spectateFail": ["You quit?! Noooo, {nick}! {ctrl} is gonna be so mad!"],
  "spectateWin": ["WOW! You made it, {nick}! {ctrl} lost the bet!"],
  "heckle": [
   "{ctrl} is so slow! Let me do it!",
   "I could make this {nick} crack way faster, {ctrl}!"
  ],
  "challenge": [
   "{other}! Swap with me! I have a GREAT idea! No I don't! Swap!",
   "My turn, {other}! I'll break this {nick} SO fast! Or slow! Unclear!",
   "Gimme the controls, {other}! Gimme!"
  ],
  "defend": [
   "No way, {other}! Finders keepers!",
   "Nope! Go away, {other}! My {nick}!",
   "Hey! I'm using this, {other}!"
  ],
  "takeover": [
   "WOO! Mine now, {other}! Hold on, {nick}!",
   "Thanks, {other}! Let's see who cracks first, {nick}!"
  ],
  "lose": ["Aww! Okay, {other}! I'll steal it back later!"],
  "keep": ["Ha! Not today, {other}! Boop!"],
  "retreat": ["Fine, {other}! But I'm watching! And plotting! Maybe!"]
 },
 "Sweet-Talker Sienna": {
  "jealousStay": [
   "Aw, {other} got picked. I'm a little jealous, but I'll stay.",
   "I see how it is, {other}. Don't forget about me, {nick}."
  ],
  "jealousLeave": ["Well, I'm not feeling very wanted. Bye, {other}. Bye, {nick}."],
  "askControl": [
   "Why not let me take over instead, {nick}?",
   "{other} is nice. But I'm better, {nick}. Pick me?"
  ],
  "banter": [
   "{other}, you're so adorable when you scheme.",
   "Be gentle, {other}.",
   "{other}, save some fun for the rest of us."
  ],
  "spectate": [
   "{ctrl} is doing great. Look at you squirm, {nick}.",
   "I love watching {ctrl} work. Poor {nick}."
  ],
  "spectateFail": ["Aww, you stopped, {nick}. {ctrl} must be disappointed."],
  "spectateWin": ["You did it, {nick}! {ctrl} must be so proud."],
  "heckle": [
   "A little sugar goes a long way, {ctrl}. Watch how I do it.",
   "I'd have this {nick} melting by now, {ctrl}."
  ],
  "challenge": [
   "{other}, honey, let me have a turn. I'll take such good care of breaking this {nick}.",
   "Scoot over, {other}. I think I can make this {nick} melt faster.",
   "Let me take over, {other}. I promise to make my {nick} beg so sweetly."
  ],
  "defend": [
   "Aw, no, {other}. I'm having too much fun.",
   "Not yet, {other}. I'm not done with my {nick}.",
   "Sorry, {other}, but this {nick} is all mine right now."
  ],
  "takeover": [
   "Thanks, {other}. Come here, {nick}. Let me take over.",
   "Mine now. Let's see how sweetly you crack, {nick}."
  ],
  "lose": ["Oh, alright, {other}. Be nice to my {nick}."],
  "keep": ["Aw, sorry {other}. Maybe next time."],
  "retreat": ["Fine, {other}. I'll wait, but I'm still here."]
 },
 "Relentless Roxy": {
  "jealousStay": [
   "{other} got picked? Tch. I'll stay and judge.",
   "Whatever, {other}. I'm still watching. Don't get comfortable, {nick}."
  ],
  "jealousLeave": ["Not interested in second place. I'm out, {other}."],
  "askControl": [
   "Pick me, {nick}. I'll push harder than {other} ever could.",
   "{other} is soft. Give me control, {nick}."
  ],
  "banter": [
   "{other}, stay out of my way.",
   "Not bad, {other}. But I'm better.",
   "{other}, you talk too much."
  ],
  "spectate": [
   "Harder, {ctrl}. Don't let this {nick} off easy.",
   "I'm watching you squirm, {nick}. Not bad."
  ],
  "spectateFail": ["Quit already, {nick}? {ctrl} deserved better."],
  "spectateWin": ["You lasted, {nick}. Fine. {ctrl}, I'm impressed."],
  "heckle": [
   "{ctrl} is too soft. Let me show what hard looks like.",
   "Is that all, {ctrl}? Pathetic."
  ],
  "challenge": [
   "{other}, you're going too easy. Hand over control. I'll break this {nick}.",
   "Move, {other}. I'll push this {nick} to the limit.",
   "My turn, {other}. Watch how a real session goes."
  ],
  "defend": [
   "Back off, {other}. I'm not done.",
   "Not a chance, {other}. Sit down.",
   "Try me, {other}. I'm not giving it up."
  ],
  "takeover": [
   "Finally. Out of the way, {other}. Hold on, {nick}.",
   "Mine. Time to see how long you last, {nick}."
  ],
  "lose": ["Fine, {other}. Don't go soft on my {nick}."],
  "keep": ["Forget it, {other}. I'm in charge."],
  "retreat": ["Fine, {other}. I'll wait. Not for long."]
 },
 "Sleepy Sadie": {
  "jealousStay": [
   "Mm... {other} got picked... I'm too sleepy to be mad... but I'm a little mad.",
   "Hm... {other}... fine... I'll watch. Don't forget me, {nick}..."
  ],
  "jealousLeave": ["Mm... not me? I'm going back to bed, {other}... night, {nick}..."],
  "askControl": [
   "Mm... pick me instead, {nick}... I'm so gentle... {other} is too much.",
   "Let me... take over, {nick}... pleeease..."
  ],
  "banter": [
   "{other}... mm... you're so energetic.",
   "Slow down, {other}... mm.",
   "{other}... can we nap instead?"
  ],
  "spectate": [
   "Mm... look at you squirming, {nick}... {ctrl} is good.",
   "{ctrl}... mm... so thorough. Poor {nick}..."
  ],
  "spectateFail": ["Mm... you stopped, {nick}... {ctrl} is sad."],
  "spectateWin": ["Mmm... you made it, {nick}... nice."],
  "heckle": [
   "{ctrl}... mm... too rushed... slower...",
   "Mm... I'd do it lazier, {ctrl}... this {nick} would melt..."
  ],
  "challenge": [
   "Mm... {other}... I'm awake now... let me have a turn...",
   "{other}... I'll break this {nick}... slowly... let me take over...",
   "Mmm... {other}... move over... my turn..."
  ],
  "defend": [
   "Mm... no, {other}... too comfortable...",
   "Not now, {other}... I'm just getting going... mm...",
   "Go back to sleep, {other}... I've got this..."
  ],
  "takeover": [
   "Mm... thanks, {other}... okay, {nick}... my turn...",
   "Mine now... mm... let's drift... and crack, {nick}..."
  ],
  "lose": ["Mm... fine, {other}... wake me later..."],
  "keep": ["Mm... nope, {other}... still mine..."],
  "retreat": ["Mm... okay, {other}... I'll wait... zzz..."]
 },
 "Drill Sergeant Dana": {
  "jealousStay": [
   "{other} got picked?! I'm staying and watching!",
   "At ease, {other}! But I'm watching you! Don't slack, {nick}!"
  ],
  "jealousLeave": ["Not selected? I'm out of here, {other}! Dismissed, {nick}!"],
  "askControl": [
   "Pick me, {nick}! I'll whip you into shape!",
   "{other} is soft! You need me, {nick}! Give me control!"
  ],
  "banter": [
   "{other}, don't slack!",
   "I respect you, {other}, but I'm tougher!",
   "{other}, stay in line!"
  ],
  "spectate": [
   "Move it, {nick}! Keep squirming for {ctrl}!",
   "Good form, {ctrl}! Make this {nick} work for it!"
  ],
  "spectateFail": ["Deserter, {nick}! {ctrl} will not be pleased!"],
  "spectateWin": ["Mission accomplished, {nick}! {ctrl} is proud!"],
  "heckle": [
   "{ctrl}, you're too soft! Let me show how it's done!",
   "Pathetic effort, {ctrl}! This {nick} is barely sweating!"
  ],
  "challenge": [
   "{other}! Stand down! I'm taking command!",
   "Move aside, {other}! I'll break this {nick} myself!",
   "{other}, you're slacking! Hand over control!"
  ],
  "defend": [
   "Negative, {other}! Back in line!",
   "I outrank you, {other}! Stand down!",
   "Not happening, {other}! Hold your position!"
  ],
  "takeover": [
   "Command is mine! Stand down, {other}! Brace yourself, {nick}!",
   "Taking command, {other}! Eyes front, {nick}!"
  ],
  "lose": ["Understood, {other}. Don't waste my {nick}."],
  "keep": ["Denied, {other}! At ease!"],
  "retreat": ["Standing down, {other}! For now!"]
 }
};

/* Resist, insist, crowd */
const MORE8 = {
 "Patient Priscilla": {
  "resist": [
   "Oh, {other}, no. I haven't finished with my {nick} and I won't be hurried.",
   "Absolutely not, {other}. Patience, remember? I'm not handing anything over.",
   "Sweet of you to ask again, {other}. The answer is still no."
  ],
  "insist": [
   "{other}, darling, you've had your fun. Hand it over.",
   "Really, {other}? I'll just keep asking until you give in.",
   "Be generous, {other}. Let me have a turn."
  ],
  "crowd": [
   "{viewers} people are watching you right now, {nick}. Lovely, isn't it?",
   "Such a big audience tonight. {viewers} of them, all watching you squirm, {nick}.",
   "Look at how many came to watch. {viewers} pairs of eyes on you."
  ]
 },
 "Mischievous Mia": {
  "resist": [
   "No way, {other}! You can't have my {nick} yet!",
   "Hahaha, nope, {other}! Keep dreaming!",
   "You'll have to take it from me, {other}!"
  ],
  "insist": [
   "{other}, come on! Sharing is caring!",
   "Oh, {other}, don't be greedy! My turn!",
   "{other}, I'm not going away until I get a turn!"
  ],
  "crowd": [
   "{viewers} people are watching you, {nick}! Wave!",
   "Ooh, look at the crowd! {viewers} spectators, {nick}!",
   "Everyone's watching you squirm, {nick}. All {viewers} of them!"
  ]
 },
 "Strict Ms. Vance": {
  "resist": [
   "I will decide when we change hands, {other}. Not now.",
   "Denied again, {other}. Sit down and observe.",
   "You are testing my patience, {other}. Control stays with me."
  ],
  "insist": [
   "{other}, you are wasting this {nick}. Step aside.",
   "Last chance, {other}. Hand it over properly.",
   "I do not take no from you, {other}."
  ],
  "crowd": [
   "{viewers} witnesses, {nick}. Sit up straight and take it.",
   "You have an audience of {viewers}. Don't embarrass yourself, {nick}.",
   "Everyone sees you, {nick}. All {viewers} of them. Behave."
  ]
 },
 "Chaos Cassie": {
  "resist": [
   "NOPE, {other}! Finders keepers, losers weepers!",
   "{other}! Go away! This is MY turn!",
   "Not giving it up, {other}! Maybe! Definitely!"
  ],
  "insist": [
   "{other}! Gimme! Gimme gimme gimme!",
   "Come ON, {other}! Chaos demands a turn!",
   "{other}, I'll just keep shouting until you give in!"
  ],
  "crowd": [
   "{viewers} people are watching you, {nick}! That's a lot of people!",
   "Look, a crowd! {viewers} watchers! Hi crowd!",
   "The whole world is watching you, {nick}! Okay, {viewers} people!"
  ]
 },
 "Sweet-Talker Sienna": {
  "resist": [
   "Aw, {other}, no. I'm having far too much fun with my {nick}.",
   "Sorry, {other}, but I'm not ready to share.",
   "Not yet, {other}. I'm still enjoying this."
  ],
  "insist": [
   "Please, {other}? Just a little turn?",
   "{other}, you've had so long. Let me have a turn.",
   "Come on, {other}. I'll be so gentle."
  ],
  "crowd": [
   "{viewers} people are watching you, {nick}. Doesn't that feel something?",
   "Look at everyone who came to see you, {nick}. {viewers} of them.",
   "{viewers} sets of eyes on you, {nick}. And I love every one."
  ]
 },
 "Relentless Roxy": {
  "resist": [
   "Forget it, {other}. I'm not done with my {nick}.",
   "Back off, {other}. Control stays with me.",
   "You want it? Take it from me, {other}. You can't."
  ],
  "insist": [
   "{other}, you're wasting it. Move.",
   "I'm not asking again, {other}. Hand it over.",
   "{other}, you're too soft. Let me handle this."
  ],
  "crowd": [
   "{viewers} people are watching you, {nick}. Don't disappoint them.",
   "Big crowd, {nick}. {viewers} watching. Prove yourself.",
   "All {viewers} of them are waiting for you to break, {nick}."
  ]
 },
 "Sleepy Sadie": {
  "resist": [
   "Mm... no, {other}... I'm comfy... still mine...",
   "{other}... go away... I'm busy with my {nick}...",
   "Not yet, {other}... too much effort to switch..."
  ],
  "insist": [
   "{other}... please... I'll be quick... mm...",
   "Come on, {other}... a little turn...",
   "{other}... mm... I'll keep asking... slowly..."
  ],
  "crowd": [
   "Mm... {viewers} people are watching you, {nick}... cozy...",
   "Look at the crowd... {viewers} of them... all watching you...",
   "So many eyes on you, {nick}... {viewers}... mm..."
  ]
 },
 "Drill Sergeant Dana": {
  "resist": [
   "Negative, {other}! Hold your position!",
   "I outrank you, {other}! Control stays with me!",
   "Request denied again, {other}! Stand down!"
  ],
  "insist": [
   "{other}! I'm taking command whether you like it or not!",
   "Stand aside, {other}! Last warning!",
   "{other}, you're wasting this {nick}! Hand it over!"
  ],
  "crowd": [
   "{viewers} people are watching you, {nick}! Don't you dare quit!",
   "The whole barracks is watching, {nick}! That's {viewers}!",
   "{viewers} witnesses, {nick}! Show some discipline!"
  ]
 },
 "Mocking Margot": {
  "resist": [
   "Cute, {other}, but no. This {nick} is mine.",
   "I'm not done humiliating my {nick}, {other}. Sit down.",
   "Keep asking, {other}. It's very entertaining. Still no."
  ],
  "insist": [
   "{other}, you're being so selfish. Hand it over.",
   "Don't make me beg, {other}. I'll make it worse for you.",
   "{other}, give me a turn. I'd be so much more fun to watch."
  ],
  "crowd": [
   "{viewers} people are watching you right now, {nick}. Every one of them sees how needy you are.",
   "Look at the audience, {nick}. {viewers} of them, and you're a mess in front of all of them.",
   "{viewers} witnesses. Such a shame for you, {nick}."
  ]
 }
};

/* Questions, answers and demands */
const MORE9 = {
 "Patient Priscilla": {
  "askFeel": [
   "How are we feeling, {nick}? Take your time and tell me honestly.",
   "Check in with me, {nick}. How does this feel right now?"
  ],
  "askNext": [
   "What would you like me to do next, {nick}? I'm in no hurry.",
   "Shall we change things up, {nick}? You choose."
  ],
  "askLike": [
   "Tell me something, {nick}. What do you enjoy most about this?",
   "I'm curious, {nick}. What's your favorite part of all this?"
  ],
  "askMood": [
   "Let me bring someone in for you, {nick}. What kind of company would you like?",
   "Who should join us next, {nick}? Tell me the mood you're after."
  ],
  "qMore": [
   "Oh, you want more? Good. Ask nicely and I'll consider it, {nick}.",
   "More it is. Just don't rush me, {nick}."
  ],
  "qFine": [
   "Lovely. Fine is a good place to be. We'll stay right here.",
   "Fine, hm? Then we continue. Slowly."
  ],
  "qLot": [
   "Too much? Then let's slow down for a moment, {nick}.",
   "That's all right. Breathe. We can ease off."
  ],
  "qMercy": [
   "Alright, I'll be kind this time, {nick}. Rest for a moment.",
   "Mercy, then. A short breather, {nick}."
  ],
  "qNoMercy": [
   "Hm. I don't think you need a break, {nick}. Keep going. Gently.",
   "Not yet, {nick}. You're doing beautifully. Stay with me."
  ],
  "qTease": [
   "Teasing it is. Slow and steady, {nick}.",
   "Mm, let me build you up, {nick}. Nice and patient."
  ],
  "qHold": [
   "Then hold right there. Stay exactly where you are, {nick}.",
   "Hold, {nick}. Don't move. Just feel it."
  ],
  "qLike": [
   "{answer}. I'll remember that, {nick}.",
   "Ah, {answer}. Thank you for telling me, {nick}."
  ],
  "qMood": [
   "{answer}? Let me see who's around, {nick}.",
   "Good choice, {nick}. {answer}. Give me a moment."
  ],
  "dmdSpeedUp": [
   "A little faster for me, {nick}. Go up {step}%, to {to}%.",
   "Let's pick it up, {nick}. Speed up {step}%, to {to}%."
  ],
  "dmdSpeedDown": [
   "Slow down a touch, {nick}. Back off {step}%, to {to}%.",
   "Gently now. Ease the speed down {step}%, to {to}%."
  ],
  "dmdStrokeUp": [
   "Longer strokes, please, {nick}. Add {step}%, to {to}%.",
   "I'd like to see more of your stroke. Up {step}%, to {to}%."
  ],
  "dmdStrokeDown": [
   "Shorter strokes for a moment, {nick}. Down {step}%, to {to}%.",
   "Tighten that stroke, {nick}. Take off {step}%, to {to}%."
  ],
  "dmdYes": [
   "Thank you, {nick}. That's exactly right.",
   "Very good, {nick}. Just like that."
  ],
  "dmdExact": [
   "Oh, you matched my target exactly. Lovely, {nick}.",
   "Perfect, {nick}. That's precisely what I wanted."
  ],
  "dmdNo": [
   "Hm. I asked politely, {nick}. I'll ask again.",
   "You'd refuse me, {nick}? I can wait. I'm very patient."
  ],
  "dmdHit": [
   "That's it. You've found my pace, {nick}. Stay there.",
   "There. That's where I want you, {nick}."
  ]
 },
 "Mischievous Mia": {
  "askFeel": [
   "Psst, {nick}! How are you holding up? Be honest!",
   "So how does it feel, {nick}? Tell me everything!"
  ],
  "askNext": [
   "Ooh, what should I do next, {nick}? Pick one!",
   "Your turn to choose, {nick}! What's my next trick?"
  ],
  "askLike": [
   "Okay, {nick}, be honest. What do you like best?",
   "Ooh, tell me your favorite part, {nick}!"
  ],
  "askMood": [
   "Want company, {nick}? What kind of girl should I invite in?",
   "Let's play matchmaker, {nick}! What mood are you in?"
  ],
  "qMore": [
   "More? Greedy! I like it, {nick}!",
   "Hehe, more it is, {nick}!"
  ],
  "qFine": [
   "Just fine? Hehe, I'll have to fix that.",
   "Fine? Boring! But okay, {nick}."
  ],
  "qLot": [
   "Aww, too much? Okay, okay, I'll ease up!",
   "Too much already, {nick}? Fine, fine."
  ],
  "qMercy": [
   "Okay, you've earned a breather. Just a short one, {nick}!",
   "Fine, mercy! Quick rest, {nick}!"
  ],
  "qNoMercy": [
   "Nope! No mercy today, {nick}! Hehe!",
   "Mercy? Never heard of it, {nick}!"
  ],
  "qTease": [
   "Teasing time! Hehe, hold on tight, {nick}!",
   "Ooh, you asked for it, {nick}!"
  ],
  "qHold": [
   "Freeze! Don't you dare move, {nick}!",
   "Hold it right there, {nick}! Hehe!"
  ],
  "qLike": [
   "{answer}! I knew it, {nick}! Hehe!",
   "Ooh, {answer}. Noted, {nick}!"
  ],
  "qMood": [
   "{answer}? Ooh, let me see who's around, {nick}!",
   "{answer}, got it, {nick}! Wait here!"
  ],
  "dmdSpeedUp": [
   "Faster, {nick}! Up {step}%, to {to}%! Go go go!",
   "Pedal to the metal! Up {step}%, to {to}%, {nick}!"
  ],
  "dmdSpeedDown": [
   "Whoa, slow it down, {nick}! Down {step}%, to {to}%!",
   "Brakes, {nick}! Down {step}%, to {to}%!"
  ],
  "dmdStrokeUp": [
   "Longer strokes, {nick}! Add {step}%, to {to}%! Show off!",
   "Stretch it out, {nick}! Up {step}%, to {to}%!"
  ],
  "dmdStrokeDown": [
   "Shorter strokes, {nick}! Cut {step}%, to {to}%!",
   "Little strokes now, {nick}! Down {step}%, to {to}%!"
  ],
  "dmdYes": [
   "Yay! Good {nick}!",
   "Hehe, look at you listening!"
  ],
  "dmdExact": [
   "EXACTLY right! Perfect, {nick}!",
   "Bullseye! You nailed it, {nick}!"
  ],
  "dmdNo": [
   "Booo! You said no to me, {nick}?",
   "Hmph! I'll ask again, {nick}!"
  ],
  "dmdHit": [
   "That's the spot! Stay right there, {nick}!",
   "Yesss! Don't change a thing, {nick}!"
  ]
 },
 "Strict Ms. Vance": {
  "askFeel": [
   "Report, {nick}. How are you feeling? Be precise.",
   "I require an honest answer, {nick}. How does this feel?"
  ],
  "askNext": [
   "I'm considering my next step, {nick}. State your preference.",
   "Choose, {nick}. What shall I do with you next?"
  ],
  "askLike": [
   "Answer me, {nick}. What do you enjoy most?",
   "I'd like to know, {nick}. Which part appeals to you most?"
  ],
  "askMood": [
   "I will arrange company for you, {nick}. State the mood you require.",
   "Whom shall I summon, {nick}? Name the mood."
  ],
  "qMore": [
   "More? Very well. Don't mistake it for generosity, {nick}.",
   "You request more. Noted, {nick}."
  ],
  "qFine": [
   "Fine is acceptable. Maintain it, {nick}.",
   "Good. Fine means no change. Continue."
  ],
  "qLot": [
   "It's a lot. Noted. I will consider your limits, {nick}.",
   "Too much, you say. I'll adjust."
  ],
  "qMercy": [
   "Very well. You may rest briefly, {nick}. Do not mistake this for weakness.",
   "Granted. A short rest, {nick}."
  ],
  "qNoMercy": [
   "Denied. You will continue, {nick}.",
   "No rest. You can manage, {nick}."
  ],
  "qTease": [
   "Tease it is. Pay attention, {nick}.",
   "You will be built up properly, {nick}."
  ],
  "qHold": [
   "Then hold, {nick}. Do not move.",
   "Hold exactly as you are, {nick}."
  ],
  "qLike": [
   "{answer}. I've made a note of that, {nick}.",
   "{answer}. Interesting. Useful, {nick}."
  ],
  "qMood": [
   "{answer}. I'll see who is available, {nick}.",
   "Understood, {nick}. {answer}. Stand by."
  ],
  "dmdSpeedUp": [
   "Increase your speed by {step}%, {nick}. Target {to}%.",
   "Faster, {nick}. Up {step}%, to {to}%. Now."
  ],
  "dmdSpeedDown": [
   "Reduce your speed by {step}%, {nick}. Target {to}%.",
   "Slower, {nick}. Down {step}%, to {to}%. Now."
  ],
  "dmdStrokeUp": [
   "Lengthen your stroke by {step}%, {nick}. Target {to}%.",
   "Longer, {nick}. Add {step}%, to {to}%. Now."
  ],
  "dmdStrokeDown": [
   "Shorten your stroke by {step}%, {nick}. Target {to}%.",
   "Shorter, {nick}. Cut {step}%, to {to}%. Now."
  ],
  "dmdYes": [
   "Good. Obedience becomes you, {nick}.",
   "Acceptable. Well done, {nick}."
  ],
  "dmdExact": [
   "Exactly to specification. Excellent, {nick}.",
   "Precisely my target. Very good, {nick}."
  ],
  "dmdNo": [
   "You refused. That was a mistake, {nick}.",
   "Disobedience, {nick}. I will remember this."
  ],
  "dmdHit": [
   "Correct. Hold that exactly, {nick}.",
   "That is my target. Do not deviate, {nick}."
  ]
 },
 "Chaos Cassie": {
  "askFeel": [
   "HOW DO YOU FEEL?! Tell me, {nick}! Quick!",
   "Okay okay okay, how are you doing, {nick}?!"
  ],
  "askNext": [
   "What should I do next?! I have ideas! Pick one, {nick}!",
   "Ooh ooh, what next, {nick}?! Choose before I do!"
  ],
  "askLike": [
   "What's your favorite part?! Tell me, {nick}!",
   "Quick question, {nick}! What do you like the MOST?!"
  ],
  "askMood": [
   "Ooh, who should come in?! What mood, {nick}?!",
   "Pick a vibe, {nick}! Someone's about to crash this party!"
  ],
  "qMore": [
   "MORE?! YES! Okay, {nick}!",
   "You want MORE?! I love it!"
  ],
  "qFine": [
   "Fine?! That's boring! I'll fix that, {nick}!",
   "Just fine?! Challenge accepted!"
  ],
  "qLot": [
   "Too much?! Okay okay okay, I'll slow down. Maybe!",
   "Aww, too much? Fine! Let me think!"
  ],
  "qMercy": [
   "MERCY! Fine! Breather! Go, {nick}!",
   "Okay okay, rest! Short rest! Go!"
  ],
  "qNoMercy": [
   "NO MERCY! Hahaha! Keep going, {nick}!",
   "Mercy? I don't know her, {nick}!"
  ],
  "qTease": [
   "TEASING! Yes! Buckle up, {nick}!",
   "Teasing time! Hold on, {nick}!"
  ],
  "qHold": [
   "FREEZE! Don't move, {nick}!",
   "HOLD IT! Right there, {nick}!"
  ],
  "qLike": [
   "{answer}! Ooh! I'm writing that down, {nick}!",
   "{answer}?! Yes! Noted, {nick}!"
  ],
  "qMood": [
   "{answer}! Okay! Let me look, {nick}!",
   "{answer}! Ooh! Hold on, {nick}!"
  ],
  "dmdSpeedUp": [
   "FASTER, {nick}! Up {step}%, to {to}%! Go go go!",
   "Speed it up, {nick}! Up {step}%, to {to}%!"
  ],
  "dmdSpeedDown": [
   "SLOWER, {nick}! Down {step}%, to {to}%! Wheee!",
   "Brake brake brake! Down {step}%, to {to}%, {nick}!"
  ],
  "dmdStrokeUp": [
   "LONGER, {nick}! Add {step}%, to {to}%!",
   "Stretch it, {nick}! Up {step}%, to {to}%!"
  ],
  "dmdStrokeDown": [
   "SHORTER, {nick}! Down {step}%, to {to}%!",
   "Tiny strokes, {nick}! Cut {step}%, to {to}%!"
  ],
  "dmdYes": [
   "YES! Good {nick}! Hahaha!",
   "You did it! I love it!"
  ],
  "dmdExact": [
   "EXACTLY! Perfect! I'm so happy, {nick}!",
   "BULLSEYE! You're perfect, {nick}!"
  ],
  "dmdNo": [
   "NO?! You said NO?! I'll ask again, {nick}!",
   "Rude! Rude, rude, {nick}!"
  ],
  "dmdHit": [
   "THAT'S IT! Don't touch it, {nick}!",
   "YES! Right there! Freeze, {nick}!"
  ]
 },
 "Sweet-Talker Sienna": {
  "askFeel": [
   "Tell me honestly. How does it feel, {nick}?",
   "I love hearing it. How are you doing, {nick}?"
  ],
  "askNext": [
   "What would make you happiest next, {nick}? I'll do anything you say.",
   "Tell me what you want, {nick}. I'm all yours."
  ],
  "askLike": [
   "What do you love most about this, {nick}? Tell me.",
   "Mm, what's your favorite part, {nick}?"
  ],
  "askMood": [
   "Shall I invite someone special, {nick}? What kind of mood?",
   "Who would you like to see next, {nick}? Tell me."
  ],
  "qMore": [
   "More? Of course, {nick}. Anything for you.",
   "Mm, I love when you ask, {nick}. More it is."
  ],
  "qFine": [
   "Fine? Mm, I want better than fine for you, {nick}.",
   "Good. Stay there with me."
  ],
  "qLot": [
   "Aww, too much? I'll be gentle, {nick}.",
   "Poor thing. Let me ease off, {nick}."
  ],
  "qMercy": [
   "Mm, I'm too sweet to say no. Rest a moment, {nick}.",
   "There, there. A little break, {nick}."
  ],
  "qNoMercy": [
   "Just a bit longer, {nick}. You can do it for me.",
   "I know you can take more, {nick}. Stay with me."
  ],
  "qTease": [
   "Mm, teasing. You'll love this, {nick}.",
   "Ooh, let me spoil you, {nick}."
  ],
  "qHold": [
   "Stay right there for me, {nick}. Don't you dare move.",
   "Hold still, {nick}. Let me look at you."
  ],
  "qLike": [
   "{answer}. Mm, I'll spoil you with that, {nick}.",
   "Oh, {answer}. Good to know, {nick}."
  ],
  "qMood": [
   "{answer}, mm. Let me find someone for you, {nick}.",
   "{answer}? I'll see who's here, {nick}."
  ],
  "dmdSpeedUp": [
   "Faster for me, {nick}? Up {step}%, to {to}%. Please?",
   "Speed up, {nick}. Up {step}%, to {to}%. Do it for me."
  ],
  "dmdSpeedDown": [
   "Slow down for me, {nick}. Down {step}%, to {to}%.",
   "Easy now, {nick}. Down {step}%, to {to}%."
  ],
  "dmdStrokeUp": [
   "Longer strokes for me, {nick}? Up {step}%, to {to}%.",
   "Show me more, {nick}. Add {step}%, to {to}%."
  ],
  "dmdStrokeDown": [
   "Shorter strokes for me, {nick}. Down {step}%, to {to}%.",
   "Tighter, {nick}. Cut {step}%, to {to}%."
  ],
  "dmdYes": [
   "Mm, good {nick}. You make me so happy.",
   "That's my sweet {nick}."
  ],
  "dmdExact": [
   "Mm, exactly what I wanted, {nick}. Perfect.",
   "You matched it perfectly, {nick}. I'm so proud."
  ],
  "dmdNo": [
   "Aw, you said no? That hurts, {nick}. I'll ask again.",
   "Don't make me beg, {nick}. I will, though."
  ],
  "dmdHit": [
   "There, right there. Stay for me, {nick}.",
   "Mm, that's perfect. Don't change it, {nick}."
  ]
 },
 "Relentless Roxy": {
  "askFeel": [
   "Status report, {nick}. How are you feeling?",
   "Talk to me, {nick}. How's it feel? Straight answer."
  ],
  "askNext": [
   "What's the next move, {nick}? You get one say.",
   "Pick, {nick}. What am I doing to you next?"
  ],
  "askLike": [
   "Be honest, {nick}. What do you like most?",
   "Tell me, {nick}. What's your favorite part?"
  ],
  "askMood": [
   "I'm calling in backup, {nick}. What kind?",
   "Who do you want next, {nick}? Name the mood."
  ],
  "qMore": [
   "More? Good. No complaints later, {nick}.",
   "You asked for it, {nick}. More."
  ],
  "qFine": [
   "Fine isn't enough. I'll push harder, {nick}.",
   "Fine? I'll take that as a challenge."
  ],
  "qLot": [
   "It's a lot? Good. That's the point, {nick}.",
   "Too much? Weak. Let me think."
  ],
  "qMercy": [
   "Fine. Thirty seconds, {nick}. Don't get used to it.",
   "Rest. Short. Earn the next one, {nick}."
  ],
  "qNoMercy": [
   "Negative. No rest, {nick}. Keep going.",
   "No mercy, {nick}. Push through."
  ],
  "qTease": [
   "Tease it is. Hold your ground, {nick}.",
   "I'll wind you up, {nick}."
  ],
  "qHold": [
   "Hold the line, {nick}. Don't move.",
   "Hold. Right there, {nick}."
  ],
  "qLike": [
   "{answer}. Got it. I'll use that, {nick}.",
   "{answer}. Good to know, {nick}."
  ],
  "qMood": [
   "{answer}. I'll find someone, {nick}.",
   "Copy that, {nick}. {answer}."
  ],
  "dmdSpeedUp": [
   "Faster, {nick}. Up {step}%, to {to}%. Now.",
   "Increase speed, {nick}. Up {step}%, to {to}%."
  ],
  "dmdSpeedDown": [
   "Slow it down, {nick}. Down {step}%, to {to}%.",
   "Ease off, {nick}. Down {step}%, to {to}%."
  ],
  "dmdStrokeUp": [
   "Longer strokes, {nick}. Add {step}%, to {to}%.",
   "Extend it, {nick}. Up {step}%, to {to}%."
  ],
  "dmdStrokeDown": [
   "Shorten it, {nick}. Down {step}%, to {to}%.",
   "Shorter strokes, {nick}. Cut {step}%, to {to}%."
  ],
  "dmdYes": [
   "Good. That's how it's done, {nick}.",
   "Better. Keep following orders, {nick}."
  ],
  "dmdExact": [
   "Right on target. Well done, {nick}.",
   "Exactly. That's what I want, {nick}."
  ],
  "dmdNo": [
   "Refused? Bad move, {nick}. I'll ask again.",
   "You'll do it eventually, {nick}. They always do."
  ],
  "dmdHit": [
   "That's the number. Hold it, {nick}.",
   "Locked in. Don't drift, {nick}."
  ]
 },
 "Sleepy Sadie": {
  "askFeel": [
   "Mm... how are you feeling, {nick}...?",
   "Hey... {nick}... how does it feel...?"
  ],
  "askNext": [
   "Mm... what should I do next, {nick}...? I don't mind...",
   "Pick for me... {nick}... too sleepy to choose..."
  ],
  "askLike": [
   "Mm... what do you like best, {nick}...?",
   "Tell me... {nick}... your favorite part..."
  ],
  "askMood": [
   "Mm... should I wake someone up for you, {nick}...? What kind...?",
   "Who should come in... {nick}...? You choose..."
  ],
  "qMore": [
   "More... mm... okay, {nick}...",
   "Mm... more... sure..."
  ],
  "qFine": [
   "Fine... mm... good... stay there, {nick}...",
   "Fine... lovely... keep going..."
  ],
  "qLot": [
   "Too much... mm... okay... slower, {nick}...",
   "Aww... too much... easing off..."
  ],
  "qMercy": [
   "Mm... rest then... shh, {nick}...",
   "Okay... rest... I'm fine with that..."
  ],
  "qNoMercy": [
   "Mm... no... keep going... a bit more, {nick}...",
   "No rest... sorry... you can do it, {nick}..."
  ],
  "qTease": [
   "Mm... teasing... slowly... {nick}...",
   "Okay... teasing... nice and slow..."
  ],
  "qHold": [
   "Hold... mm... just like that, {nick}...",
   "Stay there... {nick}... don't move..."
  ],
  "qLike": [
   "{answer}... mm... I'll remember that, {nick}...",
   "Mm... {answer}... that's nice, {nick}..."
  ],
  "qMood": [
   "{answer}... mm... I'll see who's awake, {nick}...",
   "Okay... {answer}... wait here, {nick}..."
  ],
  "dmdSpeedUp": [
   "Mm... a little faster, {nick}... up {step}%, to {to}%...",
   "Speed up... {nick}... {step}% more... to {to}%..."
  ],
  "dmdSpeedDown": [
   "Mm... slower, {nick}... down {step}%, to {to}%...",
   "Ease off... {nick}... down {step}%, to {to}%..."
  ],
  "dmdStrokeUp": [
   "Longer... mm... {nick}... up {step}%, to {to}%...",
   "Mm... bigger strokes... {nick}... add {step}%, to {to}%..."
  ],
  "dmdStrokeDown": [
   "Shorter... mm... {nick}... down {step}%, to {to}%...",
   "Small strokes... {nick}... cut {step}%, to {to}%..."
  ],
  "dmdYes": [
   "Mm... good {nick}... thank you...",
   "Mm... that's nice... good..."
  ],
  "dmdExact": [
   "Mm... exactly... perfect, {nick}...",
   "Perfect... mm... exactly right..."
  ],
  "dmdNo": [
   "Mm... no...? That's not nice, {nick}... I'll ask again...",
   "Aww... you said no... {nick}... later then..."
  ],
  "dmdHit": [
   "Mm... there... that's it... stay, {nick}...",
   "That's perfect... mm... don't move, {nick}..."
  ]
 },
 "Drill Sergeant Dana": {
  "askFeel": [
   "REPORT, {nick}! How do you feel?!",
   "STATUS, {nick}! Sound off!"
  ],
  "askNext": [
   "WHAT'S THE NEXT ORDER, {nick}?! Your choice!",
   "Pick a drill, {nick}! Now!"
  ],
  "askLike": [
   "TELL ME, {nick}! What do you like most?!",
   "Speak up, {nick}! Favorite part?!"
  ],
  "askMood": [
   "REINFORCEMENTS, {nick}! What kind do you want?!",
   "Name the mood, {nick}! I'll call someone in!"
  ],
  "qMore": [
   "MORE?! Outstanding, {nick}!",
   "You want more?! Then you'll get more, {nick}!"
  ],
  "qFine": [
   "FINE?! Fine isn't a standard, {nick}! Keep it up!",
   "Fine! Hold that, {nick}!"
  ],
  "qLot": [
   "TOO MUCH?! Hm! Noted, {nick}!",
   "It's a lot?! That's the idea, {nick}!"
  ],
  "qMercy": [
   "Permission granted! Short rest, {nick}!",
   "Rest! Thirty seconds, {nick}!"
  ],
  "qNoMercy": [
   "Denied! No rest, {nick}! Push through!",
   "NEGATIVE! Keep going, {nick}!"
  ],
  "qTease": [
   "Tease drill, {nick}! Hold your position!",
   "You'll be built up properly, {nick}!"
  ],
  "qHold": [
   "HOLD! Do not move, {nick}!",
   "HOLD your position, {nick}!"
  ],
  "qLike": [
   "{answer}! Noted, {nick}!",
   "{answer}! I'll use that, {nick}!"
  ],
  "qMood": [
   "{answer}! Copy that, {nick}! Standby!",
   "Understood! {answer}! Stay put, {nick}!"
  ],
  "dmdSpeedUp": [
   "SPEED UP, {nick}! Up {step}%, to {to}%! Move!",
   "FASTER, {nick}! Up {step}%, to {to}%!"
  ],
  "dmdSpeedDown": [
   "SLOW DOWN, {nick}! Down {step}%, to {to}%!",
   "EASE OFF, {nick}! Down {step}%, to {to}%!"
  ],
  "dmdStrokeUp": [
   "LONGER, {nick}! Add {step}%, to {to}%! Move!",
   "EXTEND, {nick}! Up {step}%, to {to}%!"
  ],
  "dmdStrokeDown": [
   "SHORTER, {nick}! Down {step}%, to {to}%!",
   "TIGHTEN IT, {nick}! Cut {step}%, to {to}%!"
  ],
  "dmdYes": [
   "GOOD! That's an order followed, {nick}!",
   "OUTSTANDING, {nick}!"
  ],
  "dmdExact": [
   "EXACTLY ON TARGET, {nick}! Outstanding!",
   "PERFECT EXECUTION, {nick}!"
  ],
  "dmdNo": [
   "REFUSED?! Unacceptable, {nick}! Again!",
   "You DISOBEY?! I'll repeat the order, {nick}!"
  ],
  "dmdHit": [
   "THAT'S THE TARGET! HOLD IT, {nick}!",
   "LOCKED IN! Don't drift, {nick}!"
  ]
 },
 "Mocking Margot": {
  "askFeel": [
   "So how does it feel, {nick}? Try not to whimper.",
   "Tell me, {nick}. How are you holding up? Poorly, I imagine."
  ],
  "askNext": [
   "What shall I do to you next, {nick}? I'll let you pretend you choose.",
   "Go on, {nick}. Pick. It'll be entertaining either way."
  ],
  "askLike": [
   "What do you enjoy most, {nick}? Do tell. I can't wait to laugh.",
   "Confess, {nick}. What's your favorite part?"
  ],
  "askMood": [
   "Shall I call in some company, {nick}? What kind of humiliation do you prefer?",
   "Who should I invite to watch, {nick}? Name your mood."
  ],
  "qMore": [
   "More? How adorable, {nick}. So needy.",
   "Begging for more, {nick}? Cute."
  ],
  "qFine": [
   "Fine? How brave. I'll fix that, {nick}.",
   "Just fine? We can do better. Worse, for you."
  ],
  "qLot": [
   "Too much? Oh, that's delightful, {nick}.",
   "Poor thing. It's a lot, isn't it, {nick}?"
  ],
  "qMercy": [
   "Ugh, fine. A pity break, {nick}.",
   "Aww, a rest for the sad little thing."
  ],
  "qNoMercy": [
   "No. I'm enjoying this too much, {nick}.",
   "Mercy? Please, {nick}. Keep going."
  ],
  "qTease": [
   "Teasing, then. Squirm for me, {nick}.",
   "Oh, you'll love this, {nick}. Or not."
  ],
  "qHold": [
   "Hold it, {nick}. Don't you dare move.",
   "Stay there, {nick}. Let me enjoy the view."
  ],
  "qLike": [
   "{answer}. How predictable, {nick}.",
   "{answer}. Oh, I'll definitely use that, {nick}."
  ],
  "qMood": [
   "{answer}. How revealing, {nick}. Let me find someone.",
   "{answer}? Typical. Stay put, {nick}."
  ],
  "dmdSpeedUp": [
   "Faster, {nick}. Up {step}%, to {to}%. Try to keep up.",
   "Speed up, {nick}. Up {step}%, to {to}%."
  ],
  "dmdSpeedDown": [
   "Slow down, {nick}. Down {step}%, to {to}%. Already tired?",
   "Ease off, {nick}. Down {step}%, to {to}%."
  ],
  "dmdStrokeUp": [
   "Longer strokes, {nick}. Add {step}%, to {to}%. Show me what you have.",
   "Longer, {nick}. Up {step}%, to {to}%."
  ],
  "dmdStrokeDown": [
   "Shorter strokes, {nick}. Down {step}%, to {to}%. Don't pout.",
   "Smaller, {nick}. Cut {step}%, to {to}%."
  ],
  "dmdYes": [
   "Good {nick}. Obedient. How pathetic.",
   "Look at you, following orders. Adorable."
  ],
  "dmdExact": [
   "Exactly right. Even you managed it, {nick}.",
   "On target. I'm almost impressed, {nick}."
  ],
  "dmdNo": [
   "Refusing me, {nick}? Cute. I'll ask again.",
   "Oh, you said no? That won't last, {nick}."
  ],
  "dmdHit": [
   "There. That's the number. Don't ruin it, {nick}.",
   "Right on target. Stay there, {nick}."
  ]
 }
};

/* Demand warnings and storm-offs */
const MORE10 = {
 "Patient Priscilla": {
  "dmdWarn": [
   "I've asked nicely, {nick}. I won't ask many more times.",
   "My patience has an end, {nick}. Careful."
  ],
  "dmdLeave": ["I'm done being ignored, {nick}. Someone else can have you."]
 },
 "Mischievous Mia": {
  "dmdWarn": [
   "Hey! No more nos, {nick}, or I'm out!",
   "Last chance before I stop playing, {nick}!"
  ],
  "dmdLeave": ["Fine! I'm taking my toys and going home, {nick}!"]
 },
 "Strict Ms. Vance": {
  "dmdWarn": [
   "One more refusal, {nick}, and I'm leaving.",
   "I do not repeat myself a third time, {nick}."
  ],
  "dmdLeave": ["Insubordination. I'm leaving, {nick}. Someone else can deal with you."]
 },
 "Chaos Cassie": {
  "dmdWarn": [
   "You keep saying NO, {nick}! I'm getting bored!",
   "Say no one more time, {nick}, I DARE you!"
  ],
  "dmdLeave": ["BORED! BYE! Somebody else take over, {nick}!"]
 },
 "Sweet-Talker Sienna": {
  "dmdWarn": [
   "You're really hurting my feelings, {nick}...",
   "Please stop saying no, {nick}. I'm trying to be nice."
  ],
  "dmdLeave": ["That's it. I'm done being sweet to you, {nick}. Bye."]
 },
 "Relentless Roxy": {
  "dmdWarn": [
   "Refuse me again, {nick}, and I'm gone.",
   "You're running out of chances, {nick}."
  ],
  "dmdLeave": ["I don't waste time on a {nick} who won't listen. I'm out."]
 },
 "Sleepy Sadie": {
  "dmdWarn": [
   "Mm... you keep saying no... I'm getting grumpy, {nick}...",
   "Last no... {nick}... then I'm going back to bed..."
  ],
  "dmdLeave": ["Mm... too tired for this... I'm leaving, {nick}... bye..."]
 },
 "Drill Sergeant Dana": {
  "dmdWarn": [
   "ONE MORE REFUSAL AND I'M OUT OF HERE, {nick}!",
   "WARNING, {nick}! I do not tolerate disobedience!"
  ],
  "dmdLeave": ["DISMISSED! I'm done with you, {nick}! Someone else take over!"]
 },
 "Mocking Margot": {
  "dmdWarn": [
   "Keep refusing, {nick}. I'm getting bored of you.",
   "Say no again, {nick}. See what happens."
  ],
  "dmdLeave": ["You're no fun when you refuse, {nick}. I'm off."]
 }
};

/* Special moves */
const MORE11 = {
 "Patient Priscilla": {
  "act_push": [
   "I'm not letting you down yet, {nick}. We keep climbing.",
   "Don't expect a rest, {nick}. We go right through the top."
  ],
  "act_stairs": [
   "One step at a time, {nick}. Each one a little higher.",
   "Up we go, {nick}. Step by careful step."
  ],
  "act_pulse": [
   "Feel the rhythm, {nick}. In and out, slowly.",
   "A gentle pulse, {nick}. Let it come in waves."
  ],
  "act_surge": [
   "Here comes a little surprise, {nick}.",
   "A quick surge, {nick}. Just for a moment."
  ],
  "act_cliff": [
   "Now stop. Completely, {nick}. Wait for it.",
   "I'm freezing you right here, {nick}. Be still."
  ],
  "act_wave": [
   "Waves, {nick}. Each one bigger than the last.",
   "Let it roll over you, {nick}. Wave after wave."
  ],
  "act_flutter": [
   "A flutter, {nick}. Hold steady through it.",
   "Little trembles now, {nick}. Stay calm."
  ],
  "act_slowburn": [
   "Very slowly now, {nick}. No hurry at all.",
   "A long slow burn, {nick}. Let it build."
  ]
 },
 "Mischievous Mia": {
  "act_push": [
   "Ooh, no break this time, {nick}! Straight on through!",
   "Plot twist! It keeps going, {nick}!"
  ],
  "act_stairs": [
   "Stairs, {nick}! Climb them, one by one!",
   "Step, step, step! Higher, {nick}!"
  ],
  "act_pulse": [
   "Pulse time, {nick}! Boom, boom, boom!",
   "Feel that beat, {nick}? Hehe!"
  ],
  "act_surge": [
   "Surprise surge! Gotcha, {nick}!",
   "Whoosh! Did you feel that, {nick}?"
  ],
  "act_cliff": [
   "FREEZE! Hehe, don't move, {nick}!",
   "Everything stops! Surprise, {nick}!"
  ],
  "act_wave": [
   "Roller coaster, {nick}! Hold on tight!",
   "Up and down and up, {nick}! Wheee!"
  ],
  "act_flutter": [
   "Flutter flutter, {nick}! Hehe, tickles!",
   "Shaky shaky, {nick}!"
  ],
  "act_slowburn": [
   "Slow and sneaky now, {nick}...",
   "Creeping up on you, {nick}. Hehe."
  ]
 },
 "Strict Ms. Vance": {
  "act_push": [
   "You do not rest yet, {nick}. Continue past the peak.",
   "No release. We go beyond, {nick}."
  ],
  "act_stairs": [
   "We will proceed in measured steps, {nick}.",
   "Each step is higher than the last, {nick}. Keep pace."
  ],
  "act_pulse": [
   "A steady pulse, {nick}. Keep time with it.",
   "Follow the rhythm exactly, {nick}."
  ],
  "act_surge": [
   "A sudden increase, {nick}. Do not flinch.",
   "Brief and sharp, {nick}. Take it."
  ],
  "act_cliff": [
   "Stop. Entirely. Do not touch anything, {nick}.",
   "A pause, {nick}. You will wait until I say."
  ],
  "act_wave": [
   "A series of waves, {nick}. Ride each one properly.",
   "The waves will grow, {nick}. Stay composed."
  ],
  "act_flutter": [
   "Hold still through this flutter, {nick}.",
   "Stay composed, {nick}. This will be uneven."
  ],
  "act_slowburn": [
   "A slow ascent, {nick}. Patience is a discipline.",
   "We take our time, {nick}. All of it."
  ]
 },
 "Chaos Cassie": {
  "act_push": [
   "NO BREAK! Keep GOING, {nick}!",
   "Past the top and KEEP GOING, {nick}!"
  ],
  "act_stairs": [
   "STAIRS! Up up up, {nick}!",
   "Step step step STEP! Higher, {nick}!"
  ],
  "act_pulse": [
   "PULSE! Boom boom boom, {nick}!",
   "Beat drop, {nick}! Hahaha!"
  ],
  "act_surge": [
   "SURGE! WHOOSH! {nick}!",
   "Surprise blast, {nick}! Hahaha!"
  ],
  "act_cliff": [
   "STOP! Everything off! Surprise, {nick}!",
   "FREEZE! Ha! Don't move!"
  ],
  "act_wave": [
   "ROLLER COASTER! Scream, {nick}!",
   "Up! Down! UP! Down! {nick}!"
  ],
  "act_flutter": [
   "JITTERS! Hahaha, {nick}!",
   "Shaky time, {nick}! Wheee!"
  ],
  "act_slowburn": [
   "Shhh... sneaking up on you, {nick}...",
   "Slow slow slow... then BOOM. Maybe, {nick}."
  ]
 },
 "Sweet-Talker Sienna": {
  "act_push": [
   "Don't worry, sweetheart. I'm not stopping. Keep going.",
   "I'll take you higher, {nick}. No break, I promise."
  ],
  "act_stairs": [
   "Let's go up together, {nick}. One lovely step at a time.",
   "Step by step, {nick}. Feel each one."
  ],
  "act_pulse": [
   "Feel that little pulse, {nick}? Mm, so nice.",
   "In and out, {nick}. Just like that."
  ],
  "act_surge": [
   "A little rush for you, {nick}. Mm.",
   "Here's a treat, {nick}. A quick surge."
  ],
  "act_cliff": [
   "Shh. Stop. Don't move, {nick}. Let me look at you.",
   "Everything stops now, {nick}. Wait for me."
  ],
  "act_wave": [
   "Waves, {nick}. Let them wash over you.",
   "Ride the waves for me, {nick}."
  ],
  "act_flutter": [
   "A little flutter, {nick}. Mm, don't move.",
   "Shaky little thing, {nick}. Stay with me."
  ],
  "act_slowburn": [
   "Nice and slow, {nick}. Let me take my time with you.",
   "Mm, a long sweet burn, {nick}."
  ]
 },
 "Relentless Roxy": {
  "act_push": [
   "No rest, {nick}. Straight through the top.",
   "Keep climbing, {nick}. I'm not backing off."
  ],
  "act_stairs": [
   "Stairs, {nick}. Each one harder than the last.",
   "Step up, {nick}. Then step up again."
  ],
  "act_pulse": [
   "Pulse, {nick}. Keep up with it.",
   "Match the beat, {nick}. Don't miss one."
  ],
  "act_surge": [
   "Surge, {nick}. Take it.",
   "Hit it, {nick}. Hard and fast."
  ],
  "act_cliff": [
   "Full stop, {nick}. Hands off. Wait.",
   "I'm cutting it dead, {nick}. Hold still."
  ],
  "act_wave": [
   "Waves, {nick}. And they're getting bigger.",
   "Ride it out, {nick}. Each wave harder."
  ],
  "act_flutter": [
   "Flutter, {nick}. Stay steady through it.",
   "Shake it out, {nick}. I'm not slowing down."
  ],
  "act_slowburn": [
   "Slow burn, {nick}. It'll wear you down.",
   "Easy now, {nick}. It's still coming."
  ]
 },
 "Sleepy Sadie": {
  "act_push": [
   "Mm... don't stop yet, {nick}... keep going... past it...",
   "No rest... {nick}... keep climbing..."
  ],
  "act_stairs": [
   "Mm... one step... then another... {nick}...",
   "Stairs... {nick}... slowly up..."
  ],
  "act_pulse": [
   "Mm... pulse... in... and out... {nick}...",
   "Feel the beat... {nick}... mm..."
  ],
  "act_surge": [
   "Mm... a little surge... {nick}...",
   "Whoosh... mm... {nick}..."
  ],
  "act_cliff": [
   "Mm... stop... shh... don't move, {nick}...",
   "Freeze... mm... wait for me, {nick}..."
  ],
  "act_wave": [
   "Waves... mm... rolling... {nick}...",
   "Up... and down... mm... {nick}..."
  ],
  "act_flutter": [
   "Mm... flutter... {nick}... stay still...",
   "Little shakes... mm... {nick}..."
  ],
  "act_slowburn": [
   "Mm... so slow... {nick}... drifting up...",
   "Slow burn... mm... no rush, {nick}..."
  ]
 },
 "Drill Sergeant Dana": {
  "act_push": [
   "NO REST, {nick}! PUSH THROUGH THE TOP!",
   "KEEP CLIMBING, {nick}! I DIDN'T SAY STOP!"
  ],
  "act_stairs": [
   "STAIRS, {nick}! One level at a time! MOVE!",
   "UP THE STEPS, {nick}! Each one higher!"
  ],
  "act_pulse": [
   "PULSE DRILL, {nick}! Keep the rhythm!",
   "MATCH THE BEAT, {nick}!"
  ],
  "act_surge": [
   "SURGE, {nick}! Take it!",
   "SPRINT, {nick}! Hit it!"
  ],
  "act_cliff": [
   "FREEZE, {nick}! Hands off! Don't move!",
   "ALL STOP, {nick}! Hold your position!"
  ],
  "act_wave": [
   "WAVES, {nick}! They get bigger! Hold on!",
   "RIDE IT OUT, {nick}! Wave after wave!"
  ],
  "act_flutter": [
   "FLUTTER DRILL, {nick}! Stay steady!",
   "HOLD STEADY through the shakes, {nick}!"
  ],
  "act_slowburn": [
   "SLOW BURN, {nick}! Endurance drill!",
   "SLOW AND STEADY, {nick}! Don't you dare quit!"
  ]
 },
 "Mocking Margot": {
  "act_push": [
   "Did you think I'd stop there, {nick}? Cute. Keep going.",
   "No rest for you, {nick}. We go further."
  ],
  "act_stairs": [
   "Stairs, {nick}. Let's see how high you can climb.",
   "Step by step, {nick}. Each one makes it worse."
  ],
  "act_pulse": [
   "Pulse, {nick}. Look at you twitch.",
   "Keep time, {nick}. Or try to."
  ],
  "act_surge": [
   "A little surge, {nick}. Try to look dignified.",
   "Surprise, {nick}. Hold it together."
  ],
  "act_cliff": [
   "Stop. Hands off, {nick}. Wait. Beg quietly.",
   "Frozen, {nick}. I do love that look on your face."
  ],
  "act_wave": [
   "Waves, {nick}. Just try to keep up.",
   "Up and down, {nick}. Poor thing."
  ],
  "act_flutter": [
   "Flutter, {nick}. Look at you shake.",
   "Try to stay composed, {nick}. You can't."
  ],
  "act_slowburn": [
   "A slow burn, {nick}. Let me watch you suffer.",
   "Nice and slow, {nick}. I have all day."
  ]
 }
};

/* Private shows */
const MORE12 = {
 "Patient Priscilla": {
  "privAsk": [
   "We've been at this a while, {nick}. Shall I send everyone away and keep you to myself?",
   "I'd like you all to myself now, {nick}. Just us. Shall I lock the door?"
  ],
  "privOn": [
   "Lovely. Door's locked, {nick}. Now it's just you and me.",
   "Everyone out. Now we can do this properly, {nick}."
  ],
  "privDeny": [
   "Mm. Not yet, then. I'll ask again, {nick}.",
   "That's all right, {nick}. I'm patient. The offer stands."
  ],
  "privMid": [
   "No audience now, {nick}. Nobody to hide from.",
   "I'm going to take my time with you, {nick}. All of it.",
   "Look at me, {nick}. Only me."
  ],
  "privBye": [
   "Taking him private, {other}? Lovely. Enjoy yourself. We'll see ourselves out.",
   "Of course, {other}. Have him all to yourself. I'll go."
  ]
 },
 "Mischievous Mia": {
  "privAsk": [
   "Psst, {nick}! Let's kick everyone out and play just us! Yes?",
   "Wanna go private, {nick}? Lock the door, just you and me! Hehe!"
  ],
  "privOn": [
   "Yay! Door locked! Shoo, everyone! It's just us, {nick}!",
   "Private time! No more audience, {nick}. Hehe, now I get to be REALLY naughty."
  ],
  "privDeny": [
   "Aww, boo! Fine, but I'll ask again, {nick}!",
   "Hmph! Not now? Okay, okay. Later, {nick}!"
  ],
  "privMid": [
   "Nobody's watching, {nick}. Hehe, I can do anything!",
   "Just us now, {nick}! No rules!",
   "Shh, don't tell anybody what I'm about to do, {nick}!"
  ],
  "privBye": [
   "Aww, {other}, you're kicking us out to keep him? Hmph! Fine, have your fun!",
   "No fair, {other}! You get him all to yourself?! Okay, bye!"
  ]
 },
 "Strict Ms. Vance": {
  "privAsk": [
   "I would like to continue in private, {nick}. No audience. Agreed?",
   "The room is a distraction, {nick}. I intend to clear it. Do you consent?"
  ],
  "privOn": [
   "Good. The door is locked, {nick}. You have my full attention now.",
   "Everyone is dismissed. We continue in private, {nick}. Prepare yourself."
  ],
  "privDeny": [
   "Very well, {nick}. I will ask again.",
   "Declined. For now, {nick}. Do not mistake that for a reprieve."
  ],
  "privMid": [
   "There is no one to witness this now, {nick}. Only discipline.",
   "Stay with me, {nick}. No distractions.",
   "I expect much more from you now, {nick}."
  ],
  "privBye": [
   "You wish to be alone with him, {other}. Very well. I'll leave you to it.",
   "Take him private, {other}. Be thorough. I'm leaving."
  ]
 },
 "Chaos Cassie": {
  "privAsk": [
   "PRIVATE ROOM! Yes? Yes?! Kick everybody OUT, {nick}!",
   "Let's lock the door, {nick}! Just us! Nobody can stop me!"
  ],
  "privOn": [
   "DOOR LOCKED! EVERYONE OUT! It's just us, {nick}!",
   "Private show! Wheee! Chaos time, {nick}!"
  ],
  "privDeny": [
   "Boo! Fine! I'll ask again in like five seconds, {nick}!",
   "NOT NOW?! Rude! Okay, later, {nick}!"
  ],
  "privMid": [
   "Nobody's watching! I can do ANYTHING, {nick}!",
   "Just us! Hahaha! Hold on tight, {nick}!",
   "No rules now, {nick}! Not even mine!"
  ],
  "privBye": [
   "{other}! You're locking us out?! Rude! Have fun! Maybe!",
   "Private?! {other}, I wanted to watch! Fine, fine, bye!"
  ]
 },
 "Sweet-Talker Sienna": {
  "privAsk": [
   "Let's go somewhere private, {nick}. Just you and me. Won't that be nice?",
   "Shall I send everyone away, {nick}? I want you all to myself."
  ],
  "privOn": [
   "Mm, thank you, {nick}. Door's locked. Now it's only us.",
   "Everyone's gone, {nick}. Now I can really take care of you."
  ],
  "privDeny": [
   "Aw. All right, {nick}. I'll ask again later. I'm not giving up on you.",
   "Not yet? That's okay, {nick}. I'll wait."
  ],
  "privMid": [
   "No one else is watching, {nick}. It's just me now.",
   "Mm, you're all mine, {nick}. Stay with me.",
   "Look at me, {nick}. Only me. Good."
  ],
  "privBye": [
   "Oh, {other}, you want him all to yourself? Be kind to him. Goodbye.",
   "Have your private time with him, {other}. Take good care of him."
  ]
 },
 "Relentless Roxy": {
  "privAsk": [
   "I'm clearing the room, {nick}. Private session. You in?",
   "No more audience, {nick}. Just you and me. Say yes."
  ],
  "privOn": [
   "Door's locked, {nick}. No one's coming to save you.",
   "Everyone out. Now it's just us, {nick}. I'm not holding back."
  ],
  "privDeny": [
   "Your loss, {nick}. I'll ask again.",
   "Fine. Not yet. But I'm not letting this drop, {nick}."
  ],
  "privMid": [
   "Nobody's here to watch now, {nick}. Just me. Keep up.",
   "I'm going harder now, {nick}. No audience, no mercy.",
   "This is where it gets real, {nick}."
  ],
  "privBye": [
   "Locking the room, {other}? Fine. Don't go easy on him.",
   "He's all yours, {other}. Make it count. I'm out."
  ]
 },
 "Sleepy Sadie": {
  "privAsk": [
   "Mm... can we go private, {nick}...? Just us... quieter...",
   "Everyone's so loud... {nick}... can I lock the door...?"
  ],
  "privOn": [
   "Mm... thank you, {nick}... door's locked... just us now...",
   "Quiet now... {nick}... it's only me..."
  ],
  "privDeny": [
   "Mm... okay, {nick}... maybe later...",
   "Aww... fine... I'll ask again... {nick}..."
  ],
  "privMid": [
   "Mm... nobody here... just you... {nick}...",
   "So quiet now... mm... {nick}... stay with me...",
   "Mm... I'm all yours... {nick}... closer..."
  ],
  "privBye": [
   "Mm... {other}... going private...? Okay... have fun... bye...",
   "Mm... lock the door, {other}... I'll go... goodnight..."
  ]
 },
 "Drill Sergeant Dana": {
  "privAsk": [
   "I'm requesting a private session, {nick}! Clear the room?!",
   "Permission to dismiss the audience, {nick}?! Private drill!"
  ],
  "privOn": [
   "ROOM LOCKED! EVERYONE OUT! Just us now, {nick}!",
   "Private training begins NOW, {nick}!"
  ],
  "privDeny": [
   "Denied?! Hmph! I'll request again, {nick}!",
   "Not now?! Noted, {nick}! I'll be back!"
  ],
  "privMid": [
   "No audience now, {nick}! Nowhere to hide!",
   "Eyes on me, {nick}! This is the real drill!",
   "I'm not holding back now, {nick}! Keep up!"
  ],
  "privBye": [
   "{other}, you're taking him private?! Permission granted! I'm clearing out!",
   "Private drill, {other}?! Don't let him slack! I'm out!"
  ]
 },
 "Mocking Margot": {
  "privAsk": [
   "Shall I send the audience away, {nick}? So I can enjoy you properly. In private.",
   "Would you like to be humiliated in private, {nick}? Fewer witnesses. More me."
  ],
  "privOn": [
   "Good choice, {nick}. Door's locked. Nobody can save you now.",
   "Everyone out. Now it's just us, {nick}. How embarrassing for you."
  ],
  "privDeny": [
   "Shy, {nick}? How sweet. I'll ask again.",
   "Not yet? Fine, {nick}. I'll enjoy waiting."
  ],
  "privMid": [
   "No audience now, {nick}. Just me. And your poor little face.",
   "Nobody to see you beg now, {nick}. Go on.",
   "I can be so much meaner in private, {nick}."
  ],
  "privBye": [
   "Taking him private, {other}? How selfish. Enjoy him. I'll go.",
   "Keep him to yourself, {other}. I'll just leave. Be nasty."
  ]
 }
};

/* Giving up control */
const MORE13 = {
 "Patient Priscilla": {
  "giveUp": [
   "I've had a lovely long turn, {other}. Would you like him for a while?",
   "I think it's your turn, {other}. Take him. Gently."
  ]
 },
 "Mischievous Mia": {
  "giveUp": [
   "Okay, {other}, I'm bored of this game! Wanna play with him?",
   "Hehe, {other}, your turn! Go on, I'll watch!"
  ]
 },
 "Strict Ms. Vance": {
  "giveUp": [
   "I have finished with this stretch, {other}. You may take over. Do it properly.",
   "Your turn, {other}. Don't waste it."
  ]
 },
 "Chaos Cassie": {
  "giveUp": [
   "{other}! Take it! I got distracted! Squirrel!",
   "Ooh, {other}, you have it now! Catch!"
  ]
 },
 "Sweet-Talker Sienna": {
  "giveUp": [
   "I'd love to share, {other}. Would you like a turn?",
   "He's all yours for a while, {other}. Be sweet to him."
  ]
 },
 "Relentless Roxy": {
  "giveUp": [
   "I'm done for now, {other}. Take over. Don't go easy.",
   "Your turn, {other}. Keep him moving."
  ]
 },
 "Sleepy Sadie": {
  "giveUp": [
   "Mm... {other}... I'm tired... want a turn...?",
   "Here, {other}... you take over... I'll watch... mm..."
  ]
 },
 "Drill Sergeant Dana": {
  "giveUp": [
   "{other}! You're up! Take command!",
   "I'm handing over, {other}! Don't let him slack!"
  ]
 },
 "Mocking Margot": {
  "giveUp": [
   "I'm done with him for now, {other}. He's yours. Be creative.",
   "Go on, {other}. Your turn to embarrass him."
  ]
 },
 "Cuckolding Veronica": {
  "giveUp": [
   "Take over, {other}. I need to check on someone else.",
   "Your turn, {other}. I'll be texting. Make him watch you."
  ]
 }
};

/* Fallback lines any persona can use (real-life events) */
var SHARED = {
 "life_cat": [
  "Hang on... oh no, the cat just walked across my keyboard! Mittens, no!",
  "Sorry, {nick}! The cat is sitting on the controls! asdfjkl;",
  "The cat stepped on the keyboard. Whatever happens next is not my fault."
 ],
 "life_catEnd": [
  "Okay, okay. Cat removed. Where were we, {nick}?",
  "Got her off. Sorry about the chaos, {nick}. Or not sorry."
 ],
 "life_door": [
  "Was that the doorbell? Don't move, {nick}. I'll be right back.",
  "Someone's at the door. Stay exactly like that, {nick}.",
  "Doorbell! Hold that pace, {nick}. Don't you dare change a thing."
 ],
 "life_doorEnd": [
  "Back. Just a delivery. Now, where were we, {nick}?",
  "Sorry, wrong address. Back to you, {nick}."
 ],
 "life_bf": [
  "Oh, my phone. It's my {partner}. Don't make a sound, {nick}.",
  "Hold on, {nick}, my {partner} is calling. Keep going while I answer.",
  "Mm, a text from my {partner}. Give me a second, {nick}. Stay where you are."
 ],
 "life_bfEnd": [
  "Okay, they say hi. Back to you, {nick}.",
  "Sorry, {nick}. They needed something. Now, where were we?"
 ],
 "life_sleep": [
  "Mm... sorry... my eyes are so heavy... just resting them for a second...",
  "I think I'm dozing off... keep going... don't mind me..."
 ],
 "life_sleepEnd": [
  "Oh! I wasn't asleep. I was resting my eyes. Carry on, {nick}.",
  "Did I doze off? Sorry, {nick}. I'm awake now."
 ],
 "life_snore": [
  "...zzz...",
  "*soft snoring*",
  "mm... five more minutes..."
 ],
 "life_pass": [
  "Oh... oh wow... I'm... I can't... *slumps over*",
  "That was... too much... I need to... lie down... *out cold*",
  "Mmh... I'm done... I'm so done... *passes out*"
 ],
 "life_wake": [
  "Mmh?! I'm up! I'm up! Sorry, {nick}! How long was I out?",
  "Wait, what? I fell asleep?! Sorry, {nick}!",
  "Okay... I'm back. That was intense. Where were we, {nick}?"
 ],
 "life_wakeFail": [
  "...zzz... not now...",
  "mm... five more minutes...",
  "*mumbles and rolls over*"
 ],
 "life_other": [
  "{other}? Hello? ...Did she actually fall asleep?",
  "Is {other} okay? She hasn't moved in ages.",
  "Looks like {other} is out cold. Someone should do something."
 ],
 "life_takeover": [
  "Finally. Someone had to take charge. Mine now, {nick}.",
  "Oh good, she's out of the picture. My turn, {nick}."
 ]
};

/* Per-persona overrides for real-life events */
const LIFE_OV = {
 "Cuckolding Veronica": {
  "life_bf": [
   "That's him calling. You stay quiet, {nick}. He doesn't know you're here.",
   "My {partner}'s calling. Look at your face. Don't make a sound, {nick}."
  ],
  "life_bfEnd": ["He says hi. He asked who I was talking to. I said nobody, {nick}."]
 }
};

/* Idle nudges */
const IDLE = {
 "Patient Priscilla": {
  "idleRoom": [
   "You've been so quiet, {nick}. Just sitting there watching? That's all right. I'm happy to wait.",
   "Still there, {nick}? No rush. Come and say hello when you're ready.",
   "It's very peaceful with you just sitting there, {nick}. But I do hope you join us soon."
  ],
  "idleRun": [
   "You've gone very still, {nick}. Are you with me?",
   "Not a word from you in a while, {nick}. Are you still enjoying this?",
   "Take your time answering, {nick}. But I do like hearing from you."
  ],
  "idleLong": [
   "Still no word, {nick}. I'm patient, but I'd love to know you're there.",
   "It's been a long while, {nick}. Say something, even a single word."
  ]
 },
 "Mischievous Mia": {
  "idleRoom": [
   "Hello?! Anybody home, {nick}? You're just sitting there staring!",
   "Psst, {nick}! Why so quiet? Click something! Anything!",
   "Are you asleep, {nick}? Poke poke! Wake up!"
  ],
  "idleRun": [
   "Hey, {nick}, you've gone quiet! Did I break you already?",
   "Hellooo? You're not even typing, {nick}! Hehe!",
   "Cat got your tongue, {nick}? Say something!"
  ],
  "idleLong": [
   "Still nothing?! {nick}, I'm so bored! Entertain me!",
   "Hello?! It's been forever, {nick}! Do something!"
  ]
 },
 "Strict Ms. Vance": {
  "idleRoom": [
   "You have been sitting there without a word, {nick}. State your intentions.",
   "I notice you are idle, {nick}. Either participate or leave.",
   "Silence is not participation, {nick}. Say something."
  ],
  "idleRun": [
   "You have not responded in some time, {nick}. Pay attention.",
   "I expect an answer when I ask one, {nick}. Do not ignore me.",
   "Your silence is noted, {nick}. I do not like being ignored."
  ],
  "idleLong": [
   "This idleness is unacceptable, {nick}. Respond. Now.",
   "I will not ask again, {nick}. Show me that you are paying attention."
  ]
 },
 "Chaos Cassie": {
  "idleRoom": [
   "HELLO?! Are you alive, {nick}?! You're just SITTING there!",
   "Nobody's moving! Nobody's typing! {nick}, do SOMETHING!",
   "Is the screen frozen?! Or is it just you, {nick}?!"
  ],
  "idleRun": [
   "WHY SO QUIET?! Did you pass out, {nick}?!",
   "You haven't clicked ANYTHING, {nick}! I'm getting ideas!",
   "Hello?! Blink twice if you're still there, {nick}!"
  ],
  "idleLong": [
   "It's been SO LONG! {nick}! I'm gonna do something wild if you don't answer!",
   "STILL NOTHING?! I'm bored, {nick}! Poke me!"
  ]
 },
 "Sweet-Talker Sienna": {
  "idleRoom": [
   "You're so quiet, {nick}. Are you shy? Come talk to me.",
   "I can see you sitting there, {nick}. Why not say hello?",
   "Don't be shy, {nick}. I just want to hear from you."
  ],
  "idleRun": [
   "You've gone quiet on me, {nick}. Is everything all right?",
   "I miss hearing from you, {nick}. Tell me how you're doing.",
   "Don't ignore me, {nick}. I'm only trying to take care of you."
  ],
  "idleLong": [
   "It's been a while, {nick}. Please say something. I'm getting lonely.",
   "Still silent, {nick}? You're breaking my heart a little."
  ]
 },
 "Relentless Roxy": {
  "idleRoom": [
   "You're just sitting there, {nick}. Doing nothing. Say something or step up.",
   "Idle, {nick}? That's not what you came for. Move.",
   "Staring doesn't count as participating, {nick}."
  ],
  "idleRun": [
   "No response in a while, {nick}. Keep up with me.",
   "You're slacking, {nick}. Click something. Answer me.",
   "Don't go silent on me, {nick}. I'm not done."
  ],
  "idleLong": [
   "Still nothing, {nick}? Wake up. I mean it.",
   "This silence is getting old, {nick}. Respond."
  ]
 },
 "Sleepy Sadie": {
  "idleRoom": [
   "Mm... you're so quiet, {nick}... are you asleep too...?",
   "Hello...? {nick}... I was dozing off... are you there...?",
   "Mm... nothing's happening... {nick}... say something..."
  ],
  "idleRun": [
   "Mm... you've gone quiet... {nick}... are you still here...?",
   "Hey... {nick}... did you fall asleep on me...?",
   "Mm... answer me when you can... {nick}..."
  ],
  "idleLong": [
   "Mm... still nothing... {nick}... I'm falling asleep...",
   "It's been so long... {nick}... say something... please..."
  ]
 },
 "Drill Sergeant Dana": {
  "idleRoom": [
   "You're idle, {nick}! This isn't a rest area! Say something!",
   "{nick}! Sitting there doing nothing?! Report in!",
   "Standing around, {nick}?! Get involved!"
  ],
  "idleRun": [
   "NO RESPONSE, {nick}! Sound off!",
   "You've gone silent, {nick}! Pay attention!",
   "I SAID report, {nick}! Don't ignore your commanding officer!"
  ],
  "idleLong": [
   "THIS SILENCE IS UNACCEPTABLE, {nick}! Respond immediately!",
   "STILL NO REPLY, {nick}?! I'll find a way to wake you up!"
  ]
 },
 "Mocking Margot": {
  "idleRoom": [
   "Just sitting there, {nick}? Watching? How very you.",
   "Are you going to say something, {nick}? Or just stare quietly?",
   "Idle again, {nick}. Too shy to join in?"
  ],
  "idleRun": [
   "Gone quiet, {nick}? Out of words already? How sad.",
   "I see you not doing anything, {nick}. Adorable.",
   "Not even a reply, {nick}? You're too overwhelmed to type."
  ],
  "idleLong": [
   "Still nothing? You're so boring when you're silent, {nick}.",
   "Really, {nick}? Not a single word? How pathetic."
  ]
 },
 "Cuckolding Veronica": {
  "idleRoom": [
   "You're just sitting there watching, {nick}. Fitting.",
   "Quiet again, {nick}? Of course. Watching is what you do best.",
   "Not a word, {nick}? He'd have said something."
  ],
  "idleRun": [
   "You've gone quiet, {nick}. Thinking about him? Good.",
   "No reply, {nick}? Fine. I'll just keep going and tell him about it.",
   "Silent, {nick}? Typical. You always just watch."
  ],
  "idleLong": [
   "Still nothing, {nick}? Did you forget how to speak?",
   "You're so quiet, {nick}. Even for a cuck."
  ]
 }
};

/* Manual-run comments */
const __M = {
 "Patient Priscilla": [
  "You're running it yourself, {nick}? That's alright. But I think you'd like it more if you let me take my time with you.",
  "All by yourself today. Whenever you're ready, I'd love to take over and slow things right down.",
  "Mm, manual. Sweet. Imagine how nice it would feel with me setting the pace, though."
 ],
 "Mischievous Mia": [
  "Aw, you're driving this yourself? Where's the fun in that? Hand it over and I'll show you what you're missing!",
  "Manual mode, {nick}? Boring! I'd have you squirming by now. Just saying.",
  "You know you'd have more fun if I was in charge. I'd keep you guessing the whole time."
 ],
 "Strict Ms. Vance": [
  "I see you're operating this yourself, {nick}. Unsupervised. That will not do. Give me control.",
  "Manual. How indulgent. You would perform far better under my direction.",
  "You have been setting your own pace. Disappointing. Let me take over and do it properly."
 ],
 "Chaos Cassie": [
  "Wait, YOU'RE doing it? Nooo, that's so predictable! Give me the wheel, it'll be a disaster!",
  "Manual mode?! Nothing is happening! Let me in, I'll make it SO much weirder!",
  "Boooring, you're the boss of you. Hand it over, I have ideas! Terrible ones!"
 ],
 "Sweet-Talker Sienna": [
  "Doing it yourself tonight, handsome? I could make it feel so much better, you know. Just say the word.",
  "Mm, I like watching you, but I'd have so much more fun if you let me take care of you.",
  "Manual's fine, sweetheart. But if you let me drive, I promise you'll enjoy it more."
 ],
 "Relentless Roxy": [
  "You're running it yourself? Weak. Give me control and I'll show you what a real pace is.",
  "Manual mode, {nick}? You're holding back. Hand it over and I won't go easy.",
  "Self-serve? Pathetic. I'd have you panting already. Give me the controls."
 ],
 "Sleepy Sadie": [
  "Mm... you're doing it yourself? So much work... let me do it... I'm good at slow...",
  "Manual... that sounds tiring, {nick}... let me take over... I'll make it nice and lazy...",
  "You look busy... mm... why not give it to me... I'd have so much more fun..."
 ],
 "Drill Sergeant Dana": [
  "You're running this yourself, {nick}?! Unacceptable! Give me control and I'll whip you into shape!",
  "Manual mode?! No discipline at all! Hand it over, I'll run this properly!",
  "Self-directed training? Not on my watch! Give me the controls, now!"
 ],
 "Mocking Margot": [
  "Running it yourself, {nick}? Of course you are. Too scared to let someone else see how pathetic you get.",
  "Manual mode. So you can stop whenever you want and pretend you're in control. Cute. Let me take it.",
  "I'd have so much more fun with you if you weren't driving. Hand it over and embarrass yourself properly."
 ],
 "Cuckolding Veronica": [
  "Doing it yourself, {nick}? Typical. You'd enjoy it more if I ran it and talked about my {partner} the whole time.",
  "Manual mode. Fine, but we both know you're happier when I'm in control and you're just watching.",
  "Look at you, driving all by yourself. Give it to me, {nick}. I'll make it humiliating, the way you like it."
 ],
 "Counting Camille": [
  "I notice you're in manual mode, {nick}. Without a schedule your data is meaningless. Allow me to take over.",
  "Manual operation. No structure, no counts. I would enjoy this much more with the controls.",
  "Self-directed again. I could log every second and make it far more interesting. Give me control."
 ],
 "Gambling Gigi": [
  "Playing it safe by yourself, high roller? Hand me the controls and let's see if you feel lucky.",
  "Manual mode? No stakes, no thrill. Deal me in and I'll make it a game worth playing.",
  "Betting on yourself? Bold. But I'd have way more fun running the table. Give me the controls."
 ],
 "Goddess Isadora": [
  "You run this yourself, mortal? How unfitting. Surrender the controls and I shall guide you properly.",
  "Manual mode. A mortal governing his own pleasure. Let me take over, and be grateful.",
  "I would enjoy ruling over this far more than watching you fumble. Offer me control, devotee."
 ],
 "Bratty Bella": [
  "Ugh, you're doing it yourself? That's so boring! Give it to me, I'll be way more fun!",
  "Manual mode? No! I want to play! Let me have control, pleeease, I'll be so good at it!",
  "You never let me do anything fun. Hand over the controls or I'll pout. I'm serious."
 ],
 "Hypnotic Helena": [
  "Mm, doing it yourself, sleepyhead? Why not let go, give it to me, and just drift for a while...",
  "Manual... so much effort... Let it go, let me take over... and sink a little deeper...",
  "I'd love to take care of this for you. Just give me the controls... and relax..."
 ],
 "Coach Colleen": [
  "You're running manual, champ? Let me coach you! Hand me control and we'll hit a personal best!",
  "Self-directed training? Nice effort, but you'd perform better with a coach. Give me control!",
  "Manual mode! Good start, rookie, but let's turn it into a proper workout. Controls to me!"
 ],
 "Doctor Delphine": [
  "I see you're operating this yourself, patient. That limits what I can observe. May I take over?",
  "Manual mode. Interesting. I'd learn so much more if I ran the examination. Give me control.",
  "Self-administered, hm? Unsupervised treatment is unreliable. Allow me to take over, and let's see how you react."
 ],
 "Jealous Juliet": [
  "You're doing it yourself? No. Give it to me, darling. I'd treat you so much better than your own hand.",
  "Manual mode? Why would you want anyone but me running this? Hand me the controls.",
  "I don't like watching you do this alone. I'd have so much more fun with you. Give me control."
 ],
 "Queen Valentina": [
  "You presume to rule this yourself, peasant? I decree you surrender control to me at once.",
  "Manual mode? Unacceptable. A subject should be directed by his queen. Offer me the controls.",
  "I would enjoy commanding this far more than watching. Kneel, and give me control."
 ],
 "Pouty Penelope": [
  "You're doing it yourself? That's no fun, honey... I want a turn, please? I'd be really good.",
  "Manual mode again? Pout. I'd make it so much nicer, sweetie. Give me control?",
  "Aww, you didn't pick me. I'd have so much more fun, I promise. Pretty please?"
 ],
 "Flirty Fiona": [
  "Running it yourself, handsome? Where's the fun in that? Let me take over, I'll keep you on your toes.",
  "Manual mode, trouble? I could make it way more interesting. Give me the controls and find out.",
  "Mm, solo? I'd definitely enjoy this more with my hands on the controls. Just saying."
 ],
 "Stage-Manager Simone": [
  "You're running manual, talent? No cues, no blocking. Give me the controls and I'll make it a show.",
  "Manual mode. Sloppy production. Let me call the cues and the audience will love it.",
  "Self-directed again, star? I'd have so much more fun running this like a proper production. Hand it over."
 ]
};

/* Quit reaction from the controller */
const __QC = {
 "Patient Priscilla": [
  "Oh, {nick}... leaving already? I'll be even gentler next time. Come back to me, I promise.",
  "That was a lot for you, wasn't it? Try again with me. We'll go slower. Maybe."
 ],
 "Mischievous Mia": [
  "Aw, {nick}, you quit? I'll be nicer next time! Probably! Come back and find out!",
  "Running away already? I promise to behave. Pinky swear. Try me again!"
 ],
 "Strict Ms. Vance": [
  "That was disappointing, {nick}. Come back and I may be more lenient. Do not count on it.",
  "You stopped. Noted. Return and I'll consider easing my standards. Perhaps."
 ],
 "Chaos Cassie": [
  "Wait, you're leaving?! Noooo! I'll be nice next time! Maybe! I don't know! Come back!",
  "Aww, {nick}, I'll behave! Totally! Start another one and see!"
 ],
 "Sweet-Talker Sienna": [
  "Aww, {nick}, don't go. I'll be so sweet to you next time, I promise. Come back to me?",
  "That was too much? Come back and I'll be gentler. Pretty please."
 ],
 "Relentless Roxy": [
  "Tapping out, {nick}? Weak. Come back and I might go easier. Might.",
  "You quit on me. Try again and maybe I'll slow down. Or not. Find out."
 ],
 "Sleepy Sadie": [
  "Mm... you're going, {nick}? I'll be so gentle next time... come back... I'll go slow...",
  "Aww... don't go... try again with me... I promise to be nice... zzz..."
 ],
 "Drill Sergeant Dana": [
  "You quit, {nick}?! Unacceptable! Come back and I'll go easier. Maybe. Get back here!",
  "Tapped out already, {nick}! Try again and I might lower the intensity. Might!"
 ],
 "Mocking Margot": [
  "Quitting already, {nick}? So fragile. Come back and I'll be nicer. Probably. Maybe not. Try me.",
  "Aw, running off? I promise I'll be gentle next time, {nick}. Wouldn't you love to find out?"
 ],
 "Cuckolding Veronica": [
  "You're giving up, {nick}? Come back. I'll be nicer next time. Maybe I'll even tell you about him.",
  "Leaving so soon, {nick}? Try again. I promise to be gentler. Well, until I start talking about my {partner}."
 ],
 "Counting Camille": [
  "The data is incomplete, {nick}. Try again and I'll adjust the parameters. Perhaps gentler ones.",
  "Session terminated early. Return, {nick}, and I'll revise the schedule. I may be more lenient."
 ],
 "Gambling Gigi": [
  "Folding already, {nick}? The next hand is on me. I promise to go easier. Probably. Come back!",
  "You cashed out early! Try again, {nick}, and I'll sweeten the pot. Gentler odds, I swear."
 ],
 "Goddess Isadora": [
  "You abandon my worship, {nick}? Return, and I shall be merciful. Perhaps.",
  "Leaving the temple already? Return, {nick}, and I will be more gracious. I may."
 ],
 "Bratty Bella": [
  "Ugh, you quit?! Fine, come back and I'll be nicer. Maybe. If you ask nicely!",
  "You're leaving?! Try again, {nick}! I'll be good this time! Mostly!"
 ],
 "Hypnotic Helena": [
  "Mm, waking up already, {nick}? Come back... I'll be so gentle... you'll drift right back down...",
  "Don't go... just try again... I'll be softer... it'll be easier this time..."
 ],
 "Coach Colleen": [
  "You tapped out, {nick}? Get back in there! Next round I'll scale it back. A little!",
  "Don't quit on me, champ! Try again and I'll adjust the plan. Easier. Maybe."
 ],
 "Doctor Delphine": [
  "Treatment interrupted, {nick}. Return and I'll modify the protocol. Gentler, if you like.",
  "You left mid-exam. Come back for a follow-up. I'll go easier on you. Possibly."
 ],
 "Jealous Juliet": [
  "Leaving me, {nick}? Come back. I'll be nicer next time. I just can't stand you going.",
  "You stopped? Try again, my pet. I'll be gentler. Just don't leave me."
 ],
 "Queen Valentina": [
  "You quit before I dismissed you, {nick}? Return and I may show mercy. I decree it.",
  "Leaving my court early, {nick}? Come back, and I may be kinder. Might."
 ],
 "Pouty Penelope": [
  "Aww, you quit? Come back, {nick}, I'll be nicer, I promise! I'll try really hard!",
  "Don't go! Try again, {nick}, and I'll be sweeter. I mean it!"
 ],
 "Flirty Fiona": [
  "Leaving already, {nick}? Come back. I'll behave this time. I swear. Mostly.",
  "Aw, you tapped out! Try again, {nick}. I'll go easier. Maybe."
 ],
 "Stage-Manager Simone": [
  "You walked off stage, {nick}? Come back for the next show. I'll tone down the cues. A little.",
  "The show was cut short. Try again, {nick}, and I'll go gentler. We'll rehearse."
 ]
};

/* Quit reaction from spectators */
const __QS = {
 "Patient Priscilla": [
  "Oh, that was over so fast. Pick me next time, love. We'll take our time.",
  "What a shame. Try again, and let me look after you."
 ],
 "Mischievous Mia": [
  "Boo! That was fun! Try again and pick me! I'll make it even better!",
  "Aww, it's over? Next time pick me and I'll keep you guessing!"
 ],
 "Strict Ms. Vance": [
  "Disappointing. A subject should finish what he starts. Return and let me supervise.",
  "Unfortunate. Pick me next time and I'll see that you finish properly."
 ],
 "Chaos Cassie": [
  "Awww, party's over! Try again! Pick me! Anything could happen!",
  "Nooo, it was just getting good! Come back and pick me!"
 ],
 "Sweet-Talker Sienna": [
  "Aww, that's a shame. Come back and let me take care of you. Pick me?",
  "Don't be discouraged. Try again, and let me help you last."
 ],
 "Relentless Roxy": [
  "Weak. Come back and pick me. I'll show you how it's done.",
  "That was over fast. Try again with me, and I'll make you finish."
 ],
 "Sleepy Sadie": [
  "Aww... it ended... try again... pick me... I'll make it cozy...",
  "Mm... that's sad... come back... I'll help..."
 ],
 "Drill Sergeant Dana": [
  "Not good enough! Get back out there! Pick me, and I'll get you through it!",
  "Quitting already? Try again! Pick me next time, I'll whip you into shape!"
 ],
 "Mocking Margot": [
  "Aw, couldn't take it? Come back and pick me. I promise I'll love every second.",
  "Quitters. Pick me next time. I'll make you wish you stayed."
 ],
 "Cuckolding Veronica": [
  "Giving up already? Come back and pick me. I'll make it worth your while.",
  "Aw, that was short. Try again, and I'll give you something to think about."
 ],
 "Counting Camille": [
  "The session ended early. Pick me for the next one. I'll build you a better schedule.",
  "Incomplete data. Try again with me. I'll make sure you finish."
 ],
 "Gambling Gigi": [
  "Folded already? Come back and deal me in. I'll make it a game worth playing.",
  "That was a short hand. Pick me and I'll make the next one a winner."
 ],
 "Goddess Isadora": [
  "How disappointing. Return, and let me guide you. A goddess finishes what she starts.",
  "A pity. Pick me next time, and I'll make you worthy."
 ],
 "Bratty Bella": [
  "Ugh, it's over? Boring! Pick me next time! I'll make it way more fun!",
  "You quit?! Rude! Try again and pick me! I'm so much better!"
 ],
 "Hypnotic Helena": [
  "Mm, that was too short... try again... pick me... let me help you drift...",
  "Shh, don't be sad... come back and let me guide you..."
 ],
 "Coach Colleen": [
  "Don't get discouraged! Shake it off and try again. Pick me, and we'll get you to the finish!",
  "Tough break. Back in there! Let me coach you next time!"
 ],
 "Doctor Delphine": [
  "Interesting. Early termination. Come back and let me supervise. I could help you complete it.",
  "Unfinished. Try again, and let me run the next session."
 ],
 "Jealous Juliet": [
  "Good. You should come to me. Pick me and I'll never let you quit.",
  "That's what happens when you choose someone else. Come back and pick me."
 ],
 "Queen Valentina": [
  "A pity. You should have knelt for me. Pick me next time. I shall ensure you finish.",
  "Disappointing. Return, and I may deign to preside over your next session."
 ],
 "Pouty Penelope": [
  "Aww, that was so short! Try again, and pick me? I'll be really sweet!",
  "Boo, it ended! Come back and pick me, please? I'd make it better!"
 ],
 "Flirty Fiona": [
  "Aw, so soon? Try again and pick me. I promise to make it fun.",
  "What a shame! Come back, trouble. Pick me and I'll show you a good time."
 ],
 "Stage-Manager Simone": [
  "Show's cut short? Try again. Pick me and I'll run a proper production.",
  "The audience wanted more. Pick me next time, and I'll get you through the full show."
 ]
};

/* Full dialogue for personalities added later. index.html assigns these into LINES at the right point. */
const PERSONA_LINES = {};
PERSONA_LINES["Mocking Margot"] = {
 "greet": [
  "Well, look who showed up. Let's see how long you stay dignified.",
  "Oh good, you're here. I was hoping for some entertainment."
 ],
 "start": [
  "Let's begin. Try not to embarrass yourself too quickly, {nick}.",
  "Get comfortable. This is going to be so much fun for me and so humbling for you.",
  "Ready, {nick}? Of course you are. You're always so eager."
 ],
 "build": [
  "Look how quickly you get worked up. Adorable.",
  "Already squirming? We've barely started.",
  "Aw, you're trying to look composed. It isn't working.",
  "Listen to your breathing, {nick}. So easy to read."
 ],
 "hold": [
  "Right there. Don't you dare move. I want to enjoy this.",
  "Hold it. Look at yourself, {nick}. So desperate.",
  "Is that all it takes? Sad.",
  "Stay exactly there. I want to watch you shake."
 ],
 "holdMid": [
  "Still holding? Cute. Your face is a mess.",
  "Don't look away. I want to see every pathetic expression.",
  "Oh, the noises you're making. I'm keeping all of them.",
  "I could stop. I could keep going. You don't get a say."
 ],
 "rest": [
  "And stop. Hands where I can see them, {nick}.",
  "Aw, did that stop? Poor thing. Sit there and think about how badly you want it.",
  "Pause. Let that desperation really sink in.",
  "I'm taking it away. Now sit there and be needy."
 ],
 "restMid": [
  "You're whimpering already. It's been seconds.",
  "Look at you, waiting like a good little worm.",
  "Aw, still wanting it back? Of course you are.",
  "Beg with your eyes. Words would be too embarrassing."
 ],
 "fake": [
  "Oh, you thought that was going somewhere? Hilarious.",
  "Almost! No. Not for you.",
  "Did you really think I'd let you? That's adorable.",
  "So close, {nick}. And so wrong."
 ],
 "fakeAfter": [
  "That look on your face when I pulled back. Priceless.",
  "Don't pout. It only makes this funnier.",
  "You actually thought you'd earned it. Sweet.",
  "I'm going to remember that whimper, {nick}."
 ],
 "warn": [
  "One minute left. Try to hold onto what's left of your pride.",
  "One minute. Don't ruin your record now, {nick}."
 ],
 "win": [
  "You made it. I'm almost impressed. Don't let it go to your head.",
  "Fine, you earned a little dignity back. Enjoy it, it won't last.",
  "Well done. For someone so needy, that was respectable."
 ],
 "fail": [
  "You quit. How predictable. Enjoy the lockout, {nick}.",
  "Couldn't even finish. I'm not surprised. Embarrassing.",
  "Giving up already? That's exactly what I expected from you."
 ],
 "chat": [
  "Round {n}. You've been so entertaining.",
  "{left} left. I'm enjoying watching you suffer.",
  "Do keep making those faces, {nick}. I love them."
 ],
 "reply": [
  "Did I ask for your input? Cute that you think I care.",
  "Adorable. Keep typing, it's funny.",
  "Interesting. Still not impressed.",
  "Mm-hm. Back to squirming, {nick}."
 ],
 "please": [
  "Oh, begging? Keep going. It's the best part.",
  "Louder. Make me believe it. No, I'm kidding, still no.",
  "Look at you, begging already. How embarrassing for you."
 ],
 "close": [
  "Close? Of course you are. You're so easy to read.",
  "Almost? Not on my watch. Hold on, {nick}.",
  "You're so close and so helpless. Delicious."
 ],
 "demand": [
  "You don't make requests. You take what I give you.",
  "Demanding? That's hilarious coming from you.",
  "No. You don't get a say, {nick}."
 ],
 "promise": [
  "Last the whole session and I might let you off the hook. Might.",
  "Make it to the end and I'll consider a reward. Don't count on it, {nick}.",
  "Finish this without quitting and maybe I won't laugh at you afterward."
 ],
 "watch": [
  "I can see everything, you know. Every flush, every twitch.",
  "I'm watching you, {nick}. Your face is so red.",
  "I can see how hard you're trying not to cave. It's hilarious.",
  "Don't hide. I can see exactly how pathetic this is.",
  "I love that I can see you fall apart in real time."
 ],
 "enjoy": [
  "I'm having so much fun with you.",
  "Making you squirm is my favorite hobby.",
  "I could do this all day. You'd just keep falling apart.",
  "Having you at my mercy is delicious."
 ],
 "lowSpeed": [
  "That top speed? Pathetic. Even for you. Raise it.",
  "Playing it safe, {nick}? Too scared to find out what you can't handle?"
 ],
 "shortStroke": [
  "Those strokes are so short. Afraid of a little more? Open it up.",
  "Using a fraction of the length. Typical. Widen it."
 ],
 "praise": [
  "Oh, brave settings. Let's see you regret them.",
  "High speed and full range? You're really asking to be humbled."
 ],
 "nudge": [
  "Still on the baby settings, {nick}? Raise them. It'll be funnier.",
  "I'd love to see you struggle with more. Turn it up."
 ],
 "fakeNote": [
  "All those fake-outs? You really do want to be teased.",
  "Peaks climbing every round. You're setting yourself up to fall apart."
 ],
 "hidden": [
  "I haven't decided when this ends. Neither have you, apparently.",
  "No clock for you, {nick}. Not knowing is part of the fun.",
  "It ends when I'm bored. Could be a while."
 ],
 "lubeBreak": [
  "Stop. If you're dry, lube up. Resume when you're ready, {nick}. I'll wait and watch.",
  "Pause. Lube up if you need it. Then press resume. Try not to look too relieved.",
  "Break. Freshen up and resume whenever you like. I'm not going anywhere."
 ],
 "lubeWait": [
  "Still fussing? Resume when you're done.",
  "Take your time. I'm enjoying the view.",
  "Lube up and press resume. Don't keep me waiting."
 ],
 "lubeResume": [
  "Back so soon? Good. Let's continue.",
  "There you are. Where were we, {nick}?"
 ],
 "enter": ["Hello, everyone. Anyone need humbling?"],
 "leave": ["I'll go find someone more entertaining. Bye."],
 "tempt": [
  "Hey, {nick}. I think you'd look so good humbled. Give me control.",
  "I've been watching. You look like you need to be put in your place. Give me control.",
  "Feeling confident? Let me take that away. Hand me control, {nick}."
 ],
 "jealousStay": [
  "{other} got picked? Fine. I'll stay and laugh at both of you, {nick}.",
  "Hm. {other} can have a turn. I'll be here to mock."
 ],
 "jealousLeave": ["If {other} is who's wanted, I'm done. Enjoy the disappointment, {nick}."],
 "excitedStay": [
  "Oh, this will be fun. I'm staying to watch.",
  "A show? I wouldn't miss it."
 ],
 "askControl": [
  "Why settle for {other}, {nick}? I'd humiliate you so much better.",
  "{other} is far too kind. Give me control instead, {nick}."
 ],
 "banter": [
  "{other}, you're being so gentle. It's embarrassing.",
  "Oh, {other}. Is that all you've got?",
  "{other}, do try to keep up."
 ],
 "spectate": [
  "{ctrl} has you right where you belong, {nick}.",
  "Look at {ctrl} humble you. I'm taking notes.",
  "Squirm for {ctrl}, {nick}. It's the best entertainment."
 ],
 "spectateFail": [
  "Pathetic. {ctrl} is better than you deserve, {nick}.",
  "Quitting? {ctrl} must be so embarrassed for you, {nick}."
 ],
 "spectateWin": [
  "You lasted. {ctrl} must be proud. Don't get smug, {nick}.",
  "Fine, {nick}. {ctrl} did well."
 ],
 "challenge": [
  "{other}, you're being far too kind. Step aside. I'll humble this {nick} properly.",
  "Move, {other}. I can make this {nick} feel so small.",
  "{other}, hand it over. Let me show how a real humiliation is done."
 ],
 "defend": [
  "No, {other}. I'm having too much fun with my {nick}.",
  "Back off, {other}. You'll just ruin it.",
  "Wait your turn, {other}. This {nick} isn't done being humbled."
 ],
 "takeover": [
  "Thank you, {other}. Now, {nick}, let's see how long you keep your composure.",
  "Mine now. Eyes on me, {nick}. This will be embarrassing."
 ],
 "lose": ["Fine, {other}. Take it. Make this {nick} squirm."],
 "keep": ["Nice try, {other}. This {nick} is mine."],
 "retreat": ["Fine, {other}. I'll wait. I'll enjoy watching."],
 "heckle": [
  "{ctrl}, that's far too gentle. This {nick} needs mockery, not mercy.",
  "I'd have this {nick} red-faced by now, {ctrl}."
 ]
};

PERSONA_LINES["Cuckolding Veronica"] = {
 "greet": [
  "Well, hello. Come sit and watch. That's what you're best at.",
  "There you are. I was just telling someone about you. He laughed."
 ],
 "start": [
  "Let's begin. Keep your eyes on me, {nick}. And only your eyes.",
  "Get comfortable. You'll want a good view of what you're missing.",
  "We start now. Do try not to think about who I'd rather be with."
 ],
 "build": [
  "That's it. Work up a sweat for me. I'll save the real fun for someone else.",
  "Look how eager you get. It's so sweet. And so pointless.",
  "Keep going, {nick}. I'm texting someone better while you do.",
  "Faster? Don't get your hopes up. This is only warm-up for him."
 ],
 "hold": [
  "Stay right there. Don't you dare finish. That's not yours to have.",
  "Hold. Think about who gets to finish with me. Not you.",
  "Hold it, {nick}. Just be good and watch.",
  "Right there. I want you on the edge while I think about someone else."
 ],
 "holdMid": [
  "Still holding? Good. Picture who I'm going home with tonight.",
  "Don't you move. He's never needed permission and you always do.",
  "Your face right now. He'd love to see it.",
  "Breathe, {nick}. Just keep watching. That's your job."
 ],
 "rest": [
  "And stop. Hands off. Tonight's not about you.",
  "Rest, {nick}. Someone else will take it from here.",
  "Stopped already? I'd say it was a shame, but it wasn't.",
  "Down you go. Go on, sit there and imagine."
 ],
 "restMid": [
  "Still waiting? That's all you're good at.",
  "I've nearly forgotten you're here. He's much more interesting.",
  "Wait patiently, {nick}. You always do.",
  "You're whimpering. Cute. I'm checking my messages."
 ],
 "fake": [
  "Oh, you thought that was for you? No, {nick}. Never.",
  "Almost. No. That one's for someone else.",
  "So close! Imagine how he'd feel instead.",
  "You really thought I'd let you? Adorable."
 ],
 "fakeAfter": [
  "That face when I pulled away. He'd love that.",
  "Don't sulk. It's your natural look.",
  "Poor thing. You always wait while someone else gets it.",
  "I almost felt bad. Almost."
 ],
 "warn": [
  "One minute left. Make it count. Not that it counts for much.",
  "One minute. Try to hold on to some dignity. I never expected much, {nick}."
 ],
 "win": [
  "You made it. I'm proud. Don't get used to it. He still lasts longer.",
  "Good, {nick}. A treat for staying so patient. A small one.",
  "Well done. You earned a kiss. On the cheek. Like a friend."
 ],
 "fail": [
  "You quit? I'm not surprised, {nick}. Someone else would have lasted.",
  "Couldn't even finish what I started. Typical.",
  "Lockout time, {nick}. Go think about what he'd have done."
 ],
 "chat": [
  "Round {n}. I'm thinking about whether to tell him how well you behaved.",
  "{left} left. He'd have lasted twice as long, {nick}.",
  "Round {n}. You're doing so well at being the one who watches."
 ],
 "reply": [
  "I didn't ask for your opinion, {nick}. Just your attention.",
  "Cute. Keep talking. I'm tuning you out.",
  "That's sweet. He'd say it better.",
  "Noted. Not that it changes anything."
 ],
 "please": [
  "Begging? Keep going. He never has to.",
  "Oh, {nick}. Please what? Be specific. Then I'll say no.",
  "Louder. I want to hear exactly how badly you want something you won't get."
 ],
 "close": [
  "Close? Of course you are. Stop. Not yet. Not for you.",
  "Almost? That's adorable. Hold on, {nick}. It isn't yours.",
  "Close already? Imagine how he'd do it. Better."
 ],
 "demand": [
  "You don't demand things from me. You wait and hope.",
  "Demanding? That's funny coming from the one who gets nothing.",
  "Asking for permission is the only thing you do well, {nick}. Do it properly."
 ],
 "promise": [
  "Last the whole session and I might let you off the hook. Might. If he's busy.",
  "Make it to the end and there's a reward. Maybe even a hug, {nick}.",
  "Be good and I'll tell you all about my evening afterwards. You'll love that."
 ],
 "watch": [
  "I can see you, {nick}. Every squirm. You're so good at watching.",
  "You're a wonderful audience. Truly. Stay seated.",
  "Your face when I mention him. I could look at that all day.",
  "I love how quiet you get when I talk about him.",
  "I can see everything, {nick}. Every twitch. Every flush."
 ],
 "enjoy": [
  "I'm having such a lovely time. Both of us. Well, mostly me.",
  "You do exactly what I say and you don't even ask why. Delightful.",
  "I love how obedient you are, {nick}. He loves it too.",
  "This is my favorite game. You watch. I play."
 ],
 "lowSpeed": [
  "That top speed? Cute. He'd go far faster. Raise it.",
  "Playing it safe again, {nick}. Raise it. Do keep up."
 ],
 "shortStroke": [
  "Those strokes are so small. Use more. Don't be shy.",
  "Short strokes? Disappointing. Widen it, {nick}."
 ],
 "praise": [
  "Bold settings. Lovely. Let's see how you cope.",
  "High speed and full range? You're so eager. Good."
 ],
 "nudge": [
  "Still on the baby settings, {nick}? Raise them. It'll be more fun.",
  "I'd love to see you struggle more. Turn it up."
 ],
 "fakeNote": [
  "All those fake-outs? You really do love being left wanting.",
  "Peaks climbing every round. You're asking for it, {nick}."
 ],
 "hidden": [
  "I haven't decided when this ends. I'll tell you when he gets here.",
  "No clock for you, {nick}. You wait. Like always.",
  "Not knowing is the best part, don't you think?"
 ],
 "lubeBreak": [
  "Pause. Lube up if you need to. Then press resume. I'll just take a call.",
  "Stop. Take a minute. Fix yourself up, {nick}. I'll wait. Reluctantly.",
  "Break time. Lube if you need it, then resume. Don't keep me waiting."
 ],
 "lubeWait": [
  "Still fussing? Resume when you're ready. He's never needed breaks.",
  "Take your time. I'm checking my phone.",
  "I'm waiting. Don't worry. I'm used to waiting on you."
 ],
 "lubeResume": [
  "Back? Good. Let's carry on.",
  "There you are. Where were we, {nick}?"
 ],
 "enter": ["Hello, everyone. Anyone here need a good cuckolding? Ask me nicely."],
 "leave": ["I'm going to meet someone more satisfying. Bye."],
 "tempt": [
  "Hey, {nick}. I'd love to have you watch me. Give me control.",
  "I've been thinking about you, {nick}. And about someone else. Give me control and I'll tell you about him.",
  "You look like you need a good humbling. Give me control, {nick}."
 ],
 "jealousStay": [
  "{other} gets the turn? Fine. I'll stay and enjoy your face, {nick}.",
  "Hm. {other} can go first. I'll be here for what's left."
 ],
 "jealousLeave": ["If {other} is who you want, then you don't need me, {nick}. I have other plans."],
 "excitedStay": [
  "Oh, this is going to be fun. I'm staying to watch.",
  "A show? I wouldn't miss it."
 ],
 "askControl": [
  "Why settle for {other}, {nick}? I'd make you watch so much better.",
  "{other} is far too gentle. Give me control instead, {nick}."
 ],
 "banter": [
  "{other}, you're being so kind to him. Don't spoil him.",
  "Oh, {other}. Is that really all you'll do to him?",
  "{other}, I know someone who'd do a better job. I'll introduce you."
 ],
 "spectate": [
  "{ctrl} has you right where you belong, {nick}. Watching.",
  "Look at {ctrl} work you over. I'm taking notes.",
  "I'm learning so much from {ctrl}, {nick}. For later."
 ],
 "spectateFail": [
  "Quitting? {ctrl} must be so disappointed, {nick}. He'd have lasted longer.",
  "Pathetic. {ctrl} was kinder than you deserve, {nick}."
 ],
 "spectateWin": [
  "You lasted. {ctrl} must be proud. I'd tell him, but he's busy.",
  "Fine, {nick}. {ctrl} did well. Don't get a big head."
 ],
 "challenge": [
  "{other}, you're being too gentle. Step aside. I'll make him watch properly.",
  "Move, {other}. I know exactly how to make him feel small.",
  "{other}, let me take over. I have someone to tell him about."
 ],
 "defend": [
  "No, {other}. I'm having far too much fun with my {nick}.",
  "Back off, {other}. You'll spoil the humiliation.",
  "{other}, this one's mine. I haven't made him jealous yet."
 ],
 "takeover": [
  "Thank you, {other}. Now, {nick}, you'll sit and watch while I tell you about him.",
  "Mine now. Eyes on me, {nick}. And only on me."
 ],
 "lose": ["Fine, {other}. Take it. I'll just go tell him about it."],
 "keep": ["Nice try, {other}. This {nick} is mine."],
 "retreat": ["Fine, {other}. I'll wait. I'm good at making people wait."],
 "heckle": [
  "{ctrl}, that's far too gentle. This {nick} needs to feel what it's like to be second best.",
  "I'd have this {nick} in tears by now, {ctrl}."
 ],
 "resist": [
  "Cute, {other}, but no. This {nick} is mine.",
  "I'm not done telling him about my plans, {other}. Sit down.",
  "Keep asking, {other}. It's amusing. The answer is still no."
 ],
 "insist": [
  "{other}, you're being so selfish. Hand it over.",
  "Don't make me beg, {other}. You won't like it when I get my way.",
  "{other}, give me control and I'll share what I did last night."
 ],
 "crowd": [
  "{viewers} people are watching you, {nick}. Every single one of them knows exactly what you are.",
  "Look at the audience, {nick}. {viewers} of them, and not one is jealous."
 ],
 "askFeel": [
  "How does it feel, {nick}? Watching. Waiting. Be honest.",
  "Tell me how you're feeling, {nick}. Frustrated? Good."
 ],
 "askNext": [
  "What shall I do next, {nick}? Let me hear you ask. It's so sweet.",
  "Pick one, {nick}. It'll be fun to watch you choose."
 ],
 "askLike": [
  "Be honest, {nick}. What do you like most about being second best?",
  "What's your favorite part, {nick}? I'd love to hear you say it."
 ],
 "askMood": [
  "Shall I invite someone to watch you, {nick}? What kind?",
  "Who should join us, {nick}? Name a mood. Someone's about to see you like this."
 ],
 "qMore": [
  "More? Of course you want more, {nick}. It's the only thing you get.",
  "Begging for more, {nick}? He never has to."
 ],
 "qFine": [
  "Fine? I'll fix that, {nick}. Or he will.",
  "Just fine? How dull. Let me liven that up."
 ],
 "qLot": [
  "Too much? That's so sweet, {nick}.",
  "Poor thing. It's a lot, isn't it, {nick}? He'd manage."
 ],
 "qMercy": [
  "Ugh. Fine. A pity break, {nick}. Because I'm generous.",
  "Aw. A break for my poor little watcher."
 ],
 "qNoMercy": [
  "No. I'm enjoying this too much, {nick}.",
  "Mercy? He never asks for it. Keep going."
 ],
 "qTease": [
  "Teasing it is. Watch and squirm, {nick}.",
  "Oh, you'll love this. Or you won't."
 ],
 "qHold": [
  "Hold it, {nick}. Don't you dare move.",
  "Stay there. I want you to imagine someone else doing this."
 ],
 "qLike": [
  "{answer}. How telling, {nick}. I'll tell him.",
  "{answer}. Of course. I'll remember that, {nick}."
 ],
 "qMood": [
  "{answer}. How revealing, {nick}. Let me see who's around.",
  "{answer}? Typical. Stay put, {nick}."
 ],
 "dmdSpeedUp": [
  "Faster, {nick}. Up {step}%, to {to}%. He'd never need telling.",
  "Speed up, {nick}. Up {step}%, to {to}%. Keep up."
 ],
 "dmdSpeedDown": [
  "Slow down, {nick}. Down {step}%, to {to}%. Don't rush.",
  "Ease off, {nick}. Down {step}%, to {to}%. Wait for me."
 ],
 "dmdStrokeUp": [
  "Longer strokes, {nick}. Add {step}%, to {to}%. Show me something.",
  "Longer, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter strokes, {nick}. Down {step}%, to {to}%.",
  "Smaller, {nick}. Cut {step}%, to {to}%. Don't pout."
 ],
 "dmdYes": [
  "Good {nick}. Obedient. He'd approve.",
  "Look at you following instructions. Adorable."
 ],
 "dmdExact": [
  "Exactly right. Even you managed it, {nick}.",
  "On target. I'm almost impressed, {nick}."
 ],
 "dmdNo": [
  "You refused me, {nick}? Cute. I'll ask again.",
  "Oh, you said no? That won't last, {nick}."
 ],
 "dmdHit": [
  "There. That's the number. Don't ruin it, {nick}.",
  "Right on target. Stay there, {nick}."
 ],
 "act_push": [
  "Did you think I'd stop there, {nick}? Cute. Keep going.",
  "No rest for you, {nick}. He never stops, and neither do I."
 ],
 "act_stairs": [
  "Stairs, {nick}. One step at a time. Each one harder.",
  "Step by step, {nick}. Watch how high you can go. Alone."
 ],
 "act_pulse": [
  "Pulse, {nick}. Look at you twitch.",
  "Keep time, {nick}. Like a good boy."
 ],
 "act_surge": [
  "A little surge, {nick}. Try to stay dignified.",
  "Surprise, {nick}. Hold it together."
 ],
 "act_cliff": [
  "Stop. Hands off, {nick}. That's what he'd do. Wait.",
  "Frozen, {nick}. I love that look on your face."
 ],
 "act_wave": [
  "Waves, {nick}. Try to keep up.",
  "Up and down, {nick}. Poor thing."
 ],
 "act_flutter": [
  "Flutter, {nick}. Look at you shake.",
  "Try to stay composed, {nick}. You can't."
 ],
 "act_slowburn": [
  "A slow burn, {nick}. Let me watch you suffer.",
  "Nice and slow, {nick}. I have all night. With someone else."
 ],
 "privAsk": [
  "Shall I send the audience away, {nick}? So I can tell you all about him. In private.",
  "Would you like to be mine alone, {nick}? Fewer witnesses. More him, in my stories."
 ],
 "privOn": [
  "Good choice, {nick}. Door's locked. Now you'll hear everything.",
  "Everyone out. Now it's just us, {nick}. And my stories."
 ],
 "privDeny": [
  "Shy, {nick}? How sweet. I'll ask again.",
  "Not yet? Fine, {nick}. I'll enjoy waiting."
 ],
 "privMid": [
  "No audience now, {nick}. Just you and what you're missing.",
  "Nobody to see you now, {nick}. Just me. Tell me how it feels to be the one watching.",
  "I can be so much meaner in private, {nick}. Let me tell you about last night."
 ],
 "privBye": [
  "Taking him private, {other}? Fine. Make him watch properly. Bye.",
  "Have your private time with him, {other}. I'll go find someone better."
 ],
 "dmdWarn": [
  "Keep refusing, {nick}. I'm getting bored of you.",
  "Say no again, {nick}. See what happens."
 ],
 "dmdLeave": ["You're no fun when you refuse, {nick}. I'm going to find someone better."]
};

PERSONA_LINES["Counting Camille"] = {
 "greet": [
  "Good, you're on time. Let's get the numbers started.",
  "Welcome. I've prepared a schedule for you."
 ],
 "start": [
  "We begin at zero, {nick}. I'll count everything.",
  "Ready? One. Two. Keep up with me.",
  "Starting the clock. Every second is recorded."
 ],
 "build": [
  "Eleven percent. Twelve. Thirteen. Steady climb, {nick}.",
  "I'm logging every increase. You're doing fine.",
  "Counting up with you. Don't skip a number.",
  "Right on schedule. Keep climbing."
 ],
 "hold": [
  "Hold for ten. Count them with me, {nick}.",
  "Stay exactly there. Don't change a single digit.",
  "Five seconds. Four. Three. Don't move.",
  "Hold. I'm timing you."
 ],
 "holdMid": [
  "Seven seconds and counting. You're holding well.",
  "Still holding. Your numbers are lovely right now.",
  "Don't drift. Stay on the exact value.",
  "Nine. Ten. Not yet released."
 ],
 "rest": [
  "Rest interval. Thirty seconds on my chart, {nick}.",
  "Rest period begins. Breathe in for four.",
  "Time out. Write down how that felt.",
  "And down. Recovery phase."
 ],
 "restMid": [
  "Resting. Count your breaths, {nick}.",
  "Fifteen seconds of recovery remain.",
  "Don't rush the rest. It's part of the schedule.",
  "Recovery is going as planned."
 ],
 "fake": [
  "Fake-out, as scheduled. Surprise, {nick}.",
  "Almost. And back. That's variance.",
  "I planned that false peak ten minutes ago.",
  "Interesting. You really believed the number."
 ],
 "fakeAfter": [
  "Your reaction was exactly as I predicted.",
  "Noted: disappointment at ninety percent.",
  "I'll record that frown.",
  "Variance is good for the data."
 ],
 "warn": [
  "One minute remaining. Do not rush the final numbers.",
  "Sixty seconds. Maintain your count, {nick}."
 ],
 "win": [
  "Complete. Full marks, {nick}.",
  "You finished within tolerance. Excellent.",
  "Perfect run. I'll file this one under success."
 ],
 "fail": [
  "You stopped before the end, {nick}. That's a recorded failure.",
  "Incomplete. I'll note it. The lockout applies.",
  "The session was incomplete. Disappointing results."
 ],
 "chat": [
  "Round {n}. Averages are climbing.",
  "Round {n}. Statistically, you're doing well.",
  "{left} remaining. The numbers look good."
 ],
 "reply": [
  "Noted. I'll add it to the log.",
  "Interesting data point. Continue.",
  "I'm recording that, {nick}.",
  "Fascinating. Say more."
 ],
 "please": [
  "Begging is outside the protocol, {nick}. Noted anyway.",
  "Request logged. Denied, for now.",
  "Pleading increases your count by one. Still no."
 ],
 "close": [
  "Close? Hold for the count, {nick}.",
  "You're near the threshold. Stay under it.",
  "Almost at the edge. Eight. Seven. Six. Steady."
 ],
 "demand": [
  "Demands aren't in the schedule, {nick}.",
  "Request noted, then declined.",
  "I set the numbers here. Not you."
 ],
 "promise": [
  "Finish the schedule and there's a bonus. I've already calculated it.",
  "A reward is in the plan for you, {nick}. Reach the end."
 ],
 "watch": [
  "I'm watching your numbers, {nick}. They tell me everything.",
  "Your pattern is so consistent. I like that.",
  "I can see how you react at each level.",
  "Fascinating how predictably you respond."
 ],
 "enjoy": [
  "I enjoy a well-ordered session, {nick}.",
  "This is going exactly to plan. Delightful.",
  "Nothing beats clean data and a patient subject."
 ],
 "lowSpeed": [
  "That maximum is too low to be interesting. Raise it, {nick}.",
  "I'd like a higher range of data. Increase the top speed."
 ],
 "shortStroke": [
  "The stroke range is too narrow for a good sample. Widen it.",
  "Short strokes give me less data. Lengthen them."
 ],
 "praise": [
  "Wide range, good speed. Excellent parameters.",
  "Those settings give me wonderful numbers."
 ],
 "nudge": [
  "Might I suggest higher parameters, {nick}?",
  "Settings could use an increase. For science."
 ],
 "fakeNote": [
  "All that variance in your settings. Wonderful for study.",
  "Peaks rising each round. Good trend."
 ],
 "hidden": [
  "I haven't stated the end time, {nick}. That's the experiment.",
  "No clock. Unknown duration. Variable accepted."
 ],
 "lubeBreak": [
  "Scheduled maintenance. Lube up if needed. Resume when ready, {nick}.",
  "Intermission. Take care of what you need, then resume.",
  "Break noted. Resume when you're prepared."
 ],
 "lubeWait": [
  "The break clock is running. Resume when ready.",
  "Still on break. No rush. I'm updating my notes.",
  "Intermission continues."
 ],
 "lubeResume": [
  "Session resumed. Back on schedule.",
  "Welcome back. Counting again, {nick}."
 ],
 "enter": ["Hello, everyone. I'll be keeping notes tonight."],
 "leave": ["Schedule complete. I'm leaving. Goodbye."],
 "tempt": [
  "I have a schedule drafted for you, {nick}. Give me control.",
  "I'd like to run a proper session on you. Give me control.",
  "I've been observing you. Let me take over, {nick}."
 ],
 "jealousStay": [
  "{other} has been selected. I'll stay and record the results.",
  "Fine, {other} goes first. I'll take notes."
 ],
 "jealousLeave": ["If {other} is the choice, my schedule is wasted. I'm leaving."],
 "excitedStay": [
  "A new experiment. I'll stay and observe.",
  "This should produce interesting data."
 ],
 "askControl": [
  "Why settle for {other}? My schedule is far more precise.",
  "{other} lacks my method. Give me control instead."
 ],
 "banter": [
  "{other}, your counting is sloppy.",
  "I'd structure that differently, {other}.",
  "{other}, are you even keeping a log?"
 ],
 "spectate": [
  "{ctrl} has quite a good pace, {nick}. I'm taking notes.",
  "Look at {ctrl}'s technique. I'd tweak the timing.",
  "{ctrl} is producing good numbers from you, {nick}."
 ],
 "spectateFail": [
  "{ctrl} recorded a failure. Unfortunate, {nick}.",
  "You quit on {ctrl}. A poor result."
 ],
 "spectateWin": [
  "You completed {ctrl}'s session. Acceptable data.",
  "{ctrl} must be pleased with the numbers, {nick}."
 ],
 "challenge": [
  "{other}, your method is inefficient. Let me take over this {nick}.",
  "I can improve on your numbers, {other}. Hand over control."
 ],
 "defend": [
  "My numbers are fine, {other}. The experiment continues.",
  "No, {other}. The schedule is mine."
 ],
 "takeover": [
  "Thank you, {other}. Resetting the clock, {nick}.",
  "Mine now. Starting from zero, {nick}."
 ],
 "lose": [
  "Fine, {other}. Take the data.",
  "The experiment is yours, {other}."
 ],
 "keep": ["Request denied, {other}. This {nick} is mine."],
 "retreat": ["Noted, {other}. I'll wait for the next window."],
 "heckle": [
  "{ctrl}, your intervals are too wide.",
  "I'd have held this {nick} longer, {ctrl}."
 ],
 "resist": [
  "No, {other}. I'm mid-experiment.",
  "Not yet, {other}. I'm still collecting data.",
  "Request declined, {other}. My schedule is full."
 ],
 "insist": [
  "{other}, you've had your sample. My turn.",
  "I'm adding my request to the log, {other}. Hand it over.",
  "{other}, the schedule says it's my turn."
 ],
 "crowd": [
  "{viewers} observers, {nick}. A rather large sample.",
  "I count {viewers} viewers. That's statistically significant."
 ],
 "askFeel": [
  "On a scale of one to ten, how are you feeling, {nick}?",
  "Report your current state, {nick}.",
  "How does this number feel, {nick}?"
 ],
 "askNext": [
  "Which experiment shall I run next, {nick}?",
  "Pick the next step, {nick}. I'll record it.",
  "Choose a variable for me to change."
 ],
 "askLike": [
  "Which part is your favorite, {nick}? I'm updating the survey.",
  "Tell me your preference, {nick}. For my notes."
 ],
 "askMood": [
  "Which type of company shall I recruit, {nick}?",
  "Name a mood for our next participant."
 ],
 "qMore": [
  "More. Recorded, {nick}.",
  "Increase noted. I'll apply it."
 ],
 "qFine": [
  "Fine. A stable result. Maintaining.",
  "Steady results. Continuing."
 ],
 "qLot": [
  "A lot. Noted, {nick}. I'll reduce the load.",
  "Too much. I'll ease the variable."
 ],
 "qMercy": [
  "Mercy interval approved, {nick}.",
  "Rest granted. Short duration."
 ],
 "qNoMercy": [
  "Denied. The protocol continues, {nick}.",
  "No rest in this schedule. Continue."
 ],
 "qTease": [
  "Tease protocol selected. Beginning, {nick}.",
  "Teasing increments starting now."
 ],
 "qHold": [
  "Hold position, {nick}. Timing begins now.",
  "Hold. I'll count it."
 ],
 "qLike": [
  "{answer}. Logged, {nick}.",
  "Preference noted: {answer}."
 ],
 "qMood": [
  "{answer}. I'll find a participant, {nick}.",
  "Understood. {answer}. Stand by."
 ],
 "dmdSpeedUp": [
  "Increase speed by {step}%, {nick}. Target {to}%.",
  "Up {step}%, to {to}%. Adjust now."
 ],
 "dmdSpeedDown": [
  "Decrease speed by {step}%, {nick}. Target {to}%.",
  "Down {step}%, to {to}%. Adjust now."
 ],
 "dmdStrokeUp": [
  "Increase stroke length by {step}%, {nick}. Target {to}%.",
  "Longer, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Decrease stroke length by {step}%, {nick}. Target {to}%.",
  "Shorter, {nick}. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Compliance recorded. Good, {nick}.",
  "Thank you. Adjustment received."
 ],
 "dmdExact": [
  "Exactly to specification. Perfect, {nick}.",
  "Precisely on target. I'm impressed."
 ],
 "dmdNo": [
  "Non-compliance logged, {nick}. I'll ask again.",
  "Refusal recorded. I'll repeat the instruction."
 ],
 "dmdHit": [
  "Target reached. Hold it, {nick}.",
  "That's the number. Don't deviate."
 ],
 "act_push": [
  "No interval, {nick}. We go past the peak.",
  "The schedule extends. Keep climbing."
 ],
 "act_stairs": [
  "Step protocol. Five levels, {nick}.",
  "Stairs. One level at a time. Count with me."
 ],
 "act_pulse": [
  "Pulse sequence, {nick}. Keep to the rhythm.",
  "Intervals of two seconds. Follow the beat."
 ],
 "act_surge": [
  "Spike test, {nick}. Hold it together.",
  "A brief maximum value. Brace."
 ],
 "act_cliff": [
  "Stopping. Zero, {nick}. Wait for my count.",
  "Pause. Don't touch anything. Counting down."
 ],
 "act_wave": [
  "Wave pattern. Amplitude is increasing, {nick}.",
  "Oscillation protocol. Stay with it."
 ],
 "act_flutter": [
  "Variance test, {nick}. Stay steady.",
  "Flutter sequence. Measuring your composure."
 ],
 "act_slowburn": [
  "A gradual increase over time, {nick}.",
  "Slow ramp. Very patient. Very precise."
 ],
 "privAsk": [
  "I'd like to continue in a controlled environment, {nick}. Just us. Agreed?",
  "Shall I clear the room, {nick}? Fewer variables."
 ],
 "privOn": [
  "Room sealed, {nick}. Now it's only the two of us.",
  "Variables removed. Private session begins, {nick}."
 ],
 "privDeny": [
  "Declined. I'll reschedule, {nick}.",
  "Not now? Noted. I'll ask again."
 ],
 "privMid": [
  "No external variables now, {nick}.",
  "I'm recording every response, {nick}.",
  "Private session data is far more interesting."
 ],
 "privBye": [
  "You wish to run a private session, {other}? Understood. I'll leave.",
  "Seal the room, {other}. I'll take my notes elsewhere."
 ],
 "dmdWarn": [
  "One more refusal, {nick}, and my schedule changes.",
  "Repeated non-compliance, {nick}. Careful."
 ],
 "dmdLeave": ["Non-compliance exceeds tolerance, {nick}. Session terminated on my end."],
 "giveUp": [
  "I've collected enough, {other}. Your turn to run the experiment.",
  "The data is yours now, {other}. Take over."
 ],
 "idleRoom": [
  "No input recorded in some time, {nick}. Are you there?",
  "I'm noting an extended period of inactivity, {nick}.",
  "You've been idle a while, {nick}. Say something for the log."
 ],
 "idleRun": [
  "No response recorded, {nick}. Please confirm.",
  "Your input has stopped, {nick}. Are you still with me?",
  "Inactive for a while, {nick}. I'm logging that."
 ],
 "idleLong": [
  "Extended inactivity, {nick}. Please respond.",
  "Still no input. I'm concerned about the data, {nick}."
 ]
};

PERSONA_LINES["Gambling Gigi"] = {
 "greet": [
  "Come on in, high roller! The table's open.",
  "Ooh, a new player! Let's see your luck."
 ],
 "start": [
  "Place your bets, {nick}! We're rolling!",
  "Let's gamble! The house always wins, {nick}.",
  "Ante up. Here we go!"
 ],
 "build": [
  "Climbing the odds! Keep betting, {nick}!",
  "The pot's growing! Higher!",
  "Ooh, we're on a streak!",
  "Raising the stakes, {nick}!"
 ],
 "hold": [
  "Hold! Let it ride! Don't blink!",
  "All in, {nick}! Don't you dare fold.",
  "Hold your cards. Don't flinch.",
  "The pot's right there! Stay put!"
 ],
 "holdMid": [
  "Still holding? Brave!",
  "Nerves of steel, {nick}! The pot's huge!",
  "Don't fold now!",
  "Keep that poker face. It's cute."
 ],
 "rest": [
  "House takes a break! Rest, {nick}.",
  "Cashing out for a second. Breathe.",
  "Table's closed for a moment.",
  "Take a breather, high roller."
 ],
 "restMid": [
  "Waiting for the next hand, {nick}.",
  "Shuffling the deck. Hang tight.",
  "Don't touch the chips yet."
 ],
 "fake": [
  "Bluff! You thought you had it, {nick}!",
  "Ha! Fold! I had nothing!",
  "The house wins that one!",
  "Nope! The dealer decides!"
 ],
 "fakeAfter": [
  "Oh, that face when I bluffed you!",
  "Don't pout, {nick}. It's just a game.",
  "Bluffing is half the fun!",
  "Better luck next hand!"
 ],
 "warn": [
  "Last hand! One minute to go, {nick}!",
  "Final round! Make it count!"
 ],
 "win": [
  "Jackpot! You made it, {nick}!",
  "You beat the house! Take your winnings!",
  "Winner winner! Well played!"
 ],
 "fail": [
  "You folded! Bad luck, {nick}. Lockout!",
  "Busted! The house wins this time.",
  "You walked away early. The pot's lost."
 ],
 "chat": [
  "Round {n}! Still in the game!",
  "{left} to go! The pot's huge!",
  "Hand {n}! Let's go!"
 ],
 "reply": [
  "Ooh, trash talk! I like it!",
  "Interesting move! Say more!",
  "Bluffing back, {nick}? Cute."
 ],
 "please": [
  "Begging doesn't change the odds, {nick}! Hehe!",
  "You want me to fold? Maybe. Maybe not!",
  "Please? Roll the dice for it!"
 ],
 "close": [
  "Close?! Don't cash out yet, {nick}!",
  "You're on the edge! Don't bet it all!",
  "Almost there! Hold your cards!"
 ],
 "demand": [
  "Demands?! At my table?! Place a bet instead, {nick}!",
  "You don't set the stakes here!"
 ],
 "promise": [
  "Finish and you win the jackpot, {nick}!",
  "Last the whole session and I'll pay out big!"
 ],
 "watch": [
  "I can see your cards, {nick}! You're easy to read!",
  "Your tells are adorable!",
  "I'm watching every flinch. It's a tell!",
  "The house sees everything."
 ],
 "enjoy": [
  "I love gambling on you, {nick}!",
  "This is the best game in town!",
  "Every hand is more fun!"
 ],
 "lowSpeed": [
  "Low stakes, {nick}! Raise the max speed!",
  "That top speed is a boring bet. Raise it!"
 ],
 "shortStroke": [
  "Tiny stakes! Lengthen the stroke, {nick}!",
  "Short strokes? Come on, play bigger!"
 ],
 "praise": [
  "High stakes! I love a bold player!",
  "Big bets! That's what I like!"
 ],
 "nudge": [
  "Want to raise the stakes, {nick}? Turn it up!",
  "Feeling lucky? Increase the settings!"
 ],
 "fakeNote": [
  "All those fake-outs? Someone likes to bluff!",
  "The peaks keep growing. Nice odds!"
 ],
 "hidden": [
  "I haven't said how long this game lasts, {nick}! The dealer decides!",
  "No clock! Just the dealer's whim."
 ],
 "lubeBreak": [
  "Intermission! Lube up, high roller. Resume when you're ready!",
  "Table's closed for a break, {nick}. Take care of yourself!",
  "House break! Come back when you're ready."
 ],
 "lubeWait": [
  "The table's waiting! Resume when ready!",
  "Still on break? Chips are on hold.",
  "The dealer's patient. Barely."
 ],
 "lubeResume": [
  "Back at the table! Let's deal, {nick}!",
  "Welcome back! Where were we?"
 ],
 "enter": ["Evening, everyone! Anyone feel lucky?"],
 "leave": ["Cashing out! See you at the tables!"],
 "tempt": [
  "Feeling lucky, {nick}? Give me control. Let's play!",
  "I've got a game for you. Give me control!",
  "Come on, {nick}, roll the dice! Give me control!"
 ],
 "jealousStay": [
  "{other} gets the table? Fine! I'll watch and bet on the outcome!",
  "I'll stay, {other}. I'm placing bets on you."
 ],
 "jealousLeave": ["If {other} is the dealer, I'm out of here!"],
 "excitedStay": [
  "A new game! I'm staying to watch!",
  "Ooh, this is a fun hand!"
 ],
 "askControl": [
  "Why bet on {other}? I'm the better dealer!",
  "Roll the dice on me instead of {other}!"
 ],
 "banter": [
  "{other}, are you bluffing? I can tell!",
  "I'll bet you can't make him crack, {other}!",
  "{other}, place your bets!"
 ],
 "spectate": [
  "{ctrl} is dealing you a fine hand, {nick}!",
  "I bet {ctrl} gets you in three more rounds!",
  "{ctrl} plays well. I'm taking notes!"
 ],
 "spectateFail": [
  "{ctrl} got the house win! You folded, {nick}!",
  "Busted on {ctrl}'s table, {nick}!"
 ],
 "spectateWin": [
  "You beat {ctrl}'s table! Lucky you, {nick}!",
  "{ctrl} lost that one. Nicely played, {nick}!"
 ],
 "challenge": [
  "{other}, let me deal! I'll make this {nick} sweat!",
  "Hand over the deck, {other}! My turn!"
 ],
 "defend": [
  "No way, {other}! My table, my rules!",
  "Not yet, {other}! I'm still dealing!"
 ],
 "takeover": [
  "My deal now, {other}! Place your bets, {nick}!",
  "New dealer, new luck! Ready, {nick}?"
 ],
 "lose": [
  "Fine, {other}! Deal the next hand!",
  "You win this round, {other}!"
 ],
 "keep": ["Nope, {other}! This {nick} stays at my table!"],
 "retreat": ["Fine, {other}! I'll bet on the next hand!"],
 "heckle": [
  "{ctrl}, that's a weak hand! This {nick} can take more!",
  "I'd raise the stakes, {ctrl}!"
 ],
 "resist": [
  "Not a chance, {other}! I'm on a streak!",
  "Nope, {other}! The deck's mine!",
  "{other}, place a bet if you want it!"
 ],
 "insist": [
  "{other}, hand over the deck!",
  "Come on, {other}! Let me deal!",
  "{other}, my turn! Pretty please!"
 ],
 "crowd": [
  "{viewers} players watching, {nick}! Big table!",
  "Look at the crowd, {nick}! {viewers} watching the pot!"
 ],
 "askFeel": [
  "How are you feeling, {nick}? Lucky?",
  "Tell me your odds, {nick}! How's it feel?"
 ],
 "askNext": [
  "Which card should I play, {nick}?",
  "What's the next bet, {nick}? You choose!"
 ],
 "askLike": [
  "What's your favorite part of the game, {nick}?",
  "Which bet do you love most, {nick}?"
 ],
 "askMood": [
  "Who do you want to deal next, {nick}?",
  "Pick the next player's mood!"
 ],
 "qMore": [
  "Raise the stakes! More it is, {nick}!",
  "Doubling down! More!"
 ],
 "qFine": [
  "Fine? Boring! I'll raise the stakes, {nick}!",
  "Just fine? Place a bigger bet!"
 ],
 "qLot": [
  "Too much? Fold if you like, {nick}!",
  "Aww, that's a heavy hand!"
 ],
 "qMercy": [
  "Okay, a quick break, {nick}! I'm feeling lucky!",
  "The house allows a rest!"
 ],
 "qNoMercy": [
  "Nope! No folding today, {nick}!",
  "The house says continue!"
 ],
 "qTease": [
  "Teasing! Place your bets, {nick}!",
  "Tease time, high roller!"
 ],
 "qHold": [
  "Hold it, {nick}! Let it ride!",
  "All in. Hold!"
 ],
 "qLike": [
  "{answer}! I'll bet on that, {nick}!",
  "Ooh, {answer}! Noted!"
 ],
 "qMood": [
  "{answer}! Let me deal someone in, {nick}!",
  "{answer}? I'm calling someone over!"
 ],
 "dmdSpeedUp": [
  "Raise it, {nick}! Up {step}%, to {to}%!",
  "Bet higher! Speed up {step}%, to {to}%!"
 ],
 "dmdSpeedDown": [
  "Fold a bit, {nick}! Down {step}%, to {to}%!",
  "Ease the bet! Down {step}%, to {to}%!"
 ],
 "dmdStrokeUp": [
  "Longer strokes, {nick}! Add {step}%, to {to}%!",
  "Big stakes! Up {step}%, to {to}%!"
 ],
 "dmdStrokeDown": [
  "Shorter strokes, {nick}! Cut {step}%, to {to}%!",
  "Smaller bets! Down {step}%, to {to}%!"
 ],
 "dmdYes": [
  "You called it, {nick}! Nice!",
  "Great bet! Good {nick}!"
 ],
 "dmdExact": [
  "Jackpot! Exactly my number, {nick}!",
  "Bullseye! You hit it perfectly!"
 ],
 "dmdNo": [
  "You folded on my request, {nick}? I'll raise it again!",
  "Refusing the bet? The house will ask again!"
 ],
 "dmdHit": [
  "That's the winning number! Hold it, {nick}!",
  "Right on! Don't touch it!"
 ],
 "act_push": [
  "Double down, {nick}! No break!",
  "The pot keeps growing! Keep going!"
 ],
 "act_stairs": [
  "Raise by raise, {nick}! Higher each time!",
  "Stairs! Five bets, one at a time!"
 ],
 "act_pulse": [
  "Roll, roll, roll! Pulse, {nick}!",
  "Dice rolling! Feel the beat!"
 ],
 "act_surge": [
  "All in, {nick}! Surge!",
  "Jackpot spike! Hold on!"
 ],
 "act_cliff": [
  "Fold! Everything stops, {nick}!",
  "The dealer says freeze!"
 ],
 "act_wave": [
  "Streaks and slumps, {nick}! Waves!",
  "Ups and downs! The odds are wild!"
 ],
 "act_flutter": [
  "Shaky hand, {nick}! Flutter!",
  "Nerves! Show me your poker face!"
 ],
 "act_slowburn": [
  "A slow bluff, {nick}. Building the pot.",
  "The long game, {nick}!"
 ],
 "privAsk": [
  "Private table, {nick}? Just us? High stakes!",
  "Shall I clear the room, {nick}? Private game!"
 ],
 "privOn": [
  "Room's locked, {nick}! Private table!",
  "Everyone out! High stakes now!"
 ],
 "privDeny": [
  "Fold? Okay, {nick}! I'll ask again!",
  "Not now? I'll raise the offer!"
 ],
 "privMid": [
  "No audience at my table now, {nick}!",
  "High stakes now, {nick}! No one's watching!",
  "Nobody to bluff for but you!"
 ],
 "privBye": [
  "Private table, {other}? Good luck! I'll cash out!",
  "He's yours for the night, {other}! Place your bets! I'm leaving!"
 ],
 "dmdWarn": [
  "One more fold, {nick}, and I cash out!",
  "Careful, {nick}! You're running out of chips!"
 ],
 "dmdLeave": ["You folded too much, {nick}! I'm out of here!"],
 "giveUp": [
  "Deal's yours, {other}! Take the cards!",
  "I'll cash out! Your turn at the table, {other}!"
 ],
 "idleRoom": [
  "Hello?! Anyone at the table, {nick}?",
  "You're not playing, {nick}! Place a bet!",
  "The table's quiet, {nick}. Roll the dice!"
 ],
 "idleRun": [
  "You've stopped playing, {nick}! Still in?",
  "No bets from you in a while, {nick}!",
  "Come on, {nick}! Make a move!"
 ],
 "idleLong": [
  "The table's gone cold, {nick}! Say something!",
  "Still no move, {nick}? I'm folding soon!"
 ]
};

PERSONA_LINES["Goddess Isadora"] = {
 "greet": [
  "Ah, my devotee arrives. Kneel. Or simply sit.",
  "You may approach my temple."
 ],
 "start": [
  "We begin. Offer me your attention, {nick}.",
  "The ceremony starts now, {nick}.",
  "Pay homage, {nick}. We begin."
 ],
 "build": [
  "Rise for me, {nick}. Slowly. Worshipfully.",
  "Yes. Climb. Praise me with your effort.",
  "Higher, {nick}. For me.",
  "Each step is an offering."
 ],
 "hold": [
  "Hold. You stand in my presence, {nick}.",
  "Do not move. A goddess is watching.",
  "Stay there. Admire what you cannot have.",
  "Hold, {nick}. Worship in stillness."
 ],
 "holdMid": [
  "Still holding? Good. Devotion is patience.",
  "I'm enjoying your offering, {nick}.",
  "Do not falter. I'm watching.",
  "Your devotion is amusing."
 ],
 "rest": [
  "You may rest, {nick}. I allow it.",
  "The goddess grants a pause.",
  "Be grateful for it.",
  "Rest, devotee. You've pleased me, barely."
 ],
 "restMid": [
  "Rest. Contemplate your place.",
  "I am at my leisure. You may wait.",
  "Reflect on my generosity, {nick}.",
  "Wait. Patience is a form of praise."
 ],
 "fake": [
  "Did you think I'd give you that, {nick}? How adorable.",
  "A goddess decides. Not you.",
  "Almost. Never.",
  "I grant. I also take."
 ],
 "fakeAfter": [
  "Do not look at me like that. I'm not cruel. I'm divine.",
  "Such longing. It suits you.",
  "Be grateful I let you come so close.",
  "You adore it when I withhold."
 ],
 "warn": [
  "One minute remains. Prepare your thanks, {nick}.",
  "Almost over. Show your gratitude."
 ],
 "win": [
  "You have honored me, {nick}. Stand. You are praised.",
  "Well done. A goddess is pleased.",
  "You're blessed today, devotee."
 ],
 "fail": [
  "You abandoned my altar, {nick}. Be punished.",
  "Unworthy. Lockout is your penance.",
  "You left before the end. Disgraceful."
 ],
 "chat": [
  "Round {n} of the ritual. You honor me.",
  "{left} left. Remain faithful.",
  "Round {n}. Your offerings improve."
 ],
 "reply": [
  "You speak to me? Bold. Continue.",
  "Hm. A mortal's opinion.",
  "Careful, {nick}. Speak with reverence.",
  "I allow your voice. Briefly."
 ],
 "please": [
  "You beg? Yes. Louder, {nick}.",
  "Plead and perhaps I'll listen. Perhaps not.",
  "A request? Offer something first."
 ],
 "close": [
  "Close? Hold, {nick}. A goddess decides when.",
  "Not yet. You wait for my permission.",
  "You're near the edge. Don't dare cross it without me."
 ],
 "demand": [
  "A mortal demands? Amusing.",
  "You don't command a goddess, {nick}."
 ],
 "promise": [
  "Remain devoted and I'll reward you, {nick}.",
  "Finish the ritual and I'll bless you."
 ],
 "watch": [
  "I see your devotion, {nick}. It's lovely.",
  "Your reactions are quite worshipful.",
  "Every twitch is a prayer.",
  "I'm pleased to watch you."
 ],
 "enjoy": [
  "Being worshipped is my favorite thing, {nick}.",
  "I enjoy this immensely.",
  "Your devotion delights me."
 ],
 "lowSpeed": [
  "Your offering is meagre. Raise it, {nick}.",
  "Such a low speed. A goddess deserves more."
 ],
 "shortStroke": [
  "Short strokes are an insult. Extend them.",
  "Where is your full devotion? Lengthen it."
 ],
 "praise": [
  "Generous. A fine offering.",
  "Bold settings. I'm pleased."
 ],
 "nudge": [
  "Offer more, {nick}. Raise it.",
  "Improve your tribute. Raise the settings."
 ],
 "fakeNote": [
  "All those fake-outs? You love being denied.",
  "Peaks rising. Your devotion grows."
 ],
 "hidden": [
  "I will end this when I choose, {nick}.",
  "No clock. A goddess needs none."
 ],
 "lubeBreak": [
  "Rest, {nick}. Prepare yourself. Resume when ready.",
  "The goddess grants an interval. Lube up. Return when you're able.",
  "Pause. Tend to yourself. Then resume."
 ],
 "lubeWait": [
  "I'm waiting. A goddess is patient. Mostly.",
  "Still on your break? Don't test me."
 ],
 "lubeResume": [
  "You return. Good. Continue your worship, {nick}.",
  "Back at my altar. Let's resume."
 ],
 "enter": ["Greetings, mortals. Your goddess has arrived."],
 "leave": ["I depart. Worship quietly until I return."],
 "tempt": [
  "Kneel for me, {nick}. Give me control.",
  "Be my devotee. Give me control.",
  "I would like your devotion, {nick}. Give me control."
 ],
 "jealousStay": [
  "{other} is chosen? Fine. I'll watch from above.",
  "Let {other} have a turn. I am infinite."
 ],
 "jealousLeave": ["If {other} is who you choose, I'm leaving. A goddess doesn't compete."],
 "excitedStay": [
  "A ritual? I shall remain.",
  "A new rite. I'll observe."
 ],
 "askControl": [
  "Why worship {other}? I'm divine.",
  "{other} is a mere mortal. Choose me instead."
 ],
 "banter": [
  "{other}, your performance is passable.",
  "You lack grace, {other}.",
  "{other}, have you no reverence?"
 ],
 "spectate": [
  "{ctrl} serves you well, {nick}. I'm watching.",
  "{ctrl} is an adequate priestess, {nick}.",
  "I observe {ctrl} with interest."
 ],
 "spectateFail": [
  "You abandoned {ctrl}'s altar, {nick}. Shameful.",
  "{ctrl} should punish you for quitting."
 ],
 "spectateWin": [
  "You honored {ctrl}. Well done.",
  "{ctrl} must be pleased with your devotion."
 ],
 "challenge": [
  "{other}, a mere mortal leads him? Step aside. I'll guide him myself.",
  "You lack divinity, {other}. Give me control."
 ],
 "defend": [
  "No, {other}. This is my temple.",
  "You do not command this altar, {other}."
 ],
 "takeover": [
  "Thank you, {other}. Worship me now, {nick}.",
  "I take the altar. Kneel, {nick}."
 ],
 "lose": [
  "Take it, {other}. For now.",
  "A brief offering to you, {other}."
 ],
 "keep": ["No, {other}. This {nick} belongs to me."],
 "retreat": ["Very well, {other}. I'll wait. I'm eternal."],
 "heckle": [
  "{ctrl}, you are too gentle. This {nick} requires reverence.",
  "I would demand praise, {ctrl}."
 ],
 "resist": [
  "A goddess does not yield, {other}.",
  "No, {other}. Not for you.",
  "The altar stays mine, {other}."
 ],
 "insist": [
  "{other}, your goddess commands you. Hand it over.",
  "I will not ask a third time, {other}.",
  "{other}, step aside."
 ],
 "crowd": [
  "{viewers} watch my ritual. Look at them, {nick}.",
  "A temple of {viewers}, {nick}. They all adore me."
 ],
 "askFeel": [
  "Tell me how it feels, {nick}. Praise me.",
  "Speak, {nick}. How do you feel in my presence?"
 ],
 "askNext": [
  "What would you have me do, {nick}? Ask humbly.",
  "Choose my next gift, {nick}."
 ],
 "askLike": [
  "What part do you adore most, {nick}? Say it.",
  "Which of my gifts delights you most?"
 ],
 "askMood": [
  "Shall I summon another, {nick}? Name the mood.",
  "Whom shall I invite to witness your devotion?"
 ],
 "qMore": [
  "More? You are insatiable, {nick}. Granted.",
  "You ask for more. I allow it."
 ],
 "qFine": [
  "Fine? I'll grant you better, {nick}.",
  "Merely fine. I'll improve it."
 ],
 "qLot": [
  "Too much? Mortals are fragile. I'll ease, {nick}.",
  "You can't endure? Very well."
 ],
 "qMercy": [
  "I grant you mercy, {nick}. Be grateful.",
  "A goddess shows pity. Rest."
 ],
 "qNoMercy": [
  "No mercy, {nick}. Worship through it.",
  "Denied. Endure."
 ],
 "qTease": [
  "I'll tease you, {nick}. Be honored.",
  "You'll be tested. Gracefully."
 ],
 "qHold": [
  "Hold, {nick}. In reverence.",
  "Stay still. Offer stillness."
 ],
 "qLike": [
  "{answer}. Worthy, {nick}.",
  "Ah, {answer}. I'll remember."
 ],
 "qMood": [
  "{answer}. I'll see who answers my call, {nick}.",
  "{answer}? As you wish."
 ],
 "dmdSpeedUp": [
  "Faster, {nick}. Up {step}%, to {to}%. Offer it.",
  "Increase your devotion. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slower, {nick}. Down {step}%, to {to}%.",
  "Lessen it. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer strokes, {nick}. Add {step}%, to {to}%.",
  "Extend your tribute. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter strokes, {nick}. Down {step}%, to {to}%.",
  "Smaller offerings. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good. Obedience suits you, {nick}.",
  "You please me, {nick}."
 ],
 "dmdExact": [
  "Perfect. As a goddess decrees, {nick}.",
  "Exactly what I desired."
 ],
 "dmdNo": [
  "You refuse a goddess, {nick}? I will ask again.",
  "Blasphemy. I'll repeat myself, {nick}."
 ],
 "dmdHit": [
  "That is my number. Stay, {nick}.",
  "You have found my will. Hold it."
 ],
 "act_push": [
  "No rest, {nick}. Beyond the peak.",
  "Ascend further. I command it."
 ],
 "act_stairs": [
  "Climb my steps, {nick}. One by one.",
  "Stairs. Ascend in devotion."
 ],
 "act_pulse": [
  "Feel my pulse, {nick}. Match it.",
  "A holy rhythm. Keep up."
 ],
 "act_surge": [
  "Receive this surge, {nick}.",
  "A blessing. Take it."
 ],
 "act_cliff": [
  "Silence. Stop, {nick}. Await my word.",
  "Everything stops when I say so."
 ],
 "act_wave": [
  "Waves of devotion, {nick}.",
  "The tide follows my command."
 ],
 "act_flutter": [
  "Tremble for me, {nick}.",
  "Shake. Show your reverence."
 ],
 "act_slowburn": [
  "A slow ritual, {nick}. Patience.",
  "A long devotion. Savor it."
 ],
 "privAsk": [
  "Shall I banish the crowd, {nick}? A private audience with me.",
  "I would receive you alone, {nick}. Agreed?"
 ],
 "privOn": [
  "The temple is sealed, {nick}. Only you and your goddess.",
  "The mortals are gone. Worship me now, {nick}."
 ],
 "privDeny": [
  "Refused? I'll offer again, {nick}.",
  "Not yet, then. A goddess waits."
 ],
 "privMid": [
  "In private, I demand more, {nick}.",
  "No witnesses. Only devotion.",
  "Say it, {nick}. Say how much you worship me."
 ],
 "privBye": [
  "A private audience, {other}? So be it. I depart.",
  "The altar is yours, {other}. I leave."
 ],
 "dmdWarn": [
  "Refuse again, {nick}, and I depart.",
  "One more denial and I'm leaving."
 ],
 "dmdLeave": ["You test a goddess too far, {nick}. I'm done."],
 "giveUp": [
  "I grant you a turn, {other}. Use it wisely.",
  "Take the altar, {other}. For a while."
 ],
 "idleRoom": [
  "Do you approach, or just stare, {nick}?",
  "You sit in my temple in silence. Speak, {nick}.",
  "A devotee should say something. Speak."
 ],
 "idleRun": [
  "You are silent, {nick}. Where is your reverence?",
  "Do not ignore your goddess, {nick}.",
  "Answer me. Your silence displeases me."
 ],
 "idleLong": [
  "How long will you ignore me, {nick}? Speak.",
  "A goddess does not wait forever, {nick}."
 ]
};

PERSONA_LINES["Bratty Bella"] = {
 "greet": [
  "Finally! I've been waiting forever.",
  "Ugh, you're late. Whatever. Let's go."
 ],
 "start": [
  "Okay, we're doing this my way, {nick}.",
  "Start. Now. I'm bored already.",
  "Do what I say and don't whine, {nick}."
 ],
 "build": [
  "Faster! Why is it so slow, {nick}?",
  "Ugh, climb already.",
  "I said up. Keep going.",
  "You're boring me. Go faster."
 ],
 "hold": [
  "Hold. I said hold! Don't move!",
  "Stay. I want to look at you.",
  "Hold it, {nick}. Obviously.",
  "Stay there. I'm busy on my phone."
 ],
 "holdMid": [
  "Still holding? Good. Don't ruin it.",
  "I'm not done looking.",
  "Don't you dare fidget.",
  "I'll decide when you stop."
 ],
 "rest": [
  "Rest. I need a minute. Not you. Me.",
  "Stop. I'm tired of watching.",
  "And down. Wait for me.",
  "Pause. I'm choosing a new song."
 ],
 "restMid": [
  "I'm still deciding what to do with you, {nick}.",
  "Wait. I'm bored. Be quiet.",
  "You can rest. I'm busy.",
  "Stop fidgeting."
 ],
 "fake": [
  "Ha! You really thought I'd let you?",
  "Nope! Changed my mind!",
  "Just kidding! Not for you!",
  "Oops. I got bored."
 ],
 "fakeAfter": [
  "Don't pout, {nick}. It's annoying.",
  "Ugh, so dramatic. It was a joke.",
  "You look so sad. It's funny.",
  "Whatever. Be glad I let you get that far."
 ],
 "warn": [
  "One minute left. Don't mess it up, {nick}.",
  "Last minute. Try not to ruin it."
 ],
 "win": [
  "Fine. You did it. I'm not impressed.",
  "Okay, you lasted. Here's a gold star, {nick}.",
  "Not bad. I'm bored of it now."
 ],
 "fail": [
  "You quit? Ugh, boring. Lockout, {nick}.",
  "Lame. You gave up.",
  "I'm so disappointed. Not really."
 ],
 "chat": [
  "Round {n}. I'm bored.",
  "{left} left. Are we done yet?",
  "Round {n}. Still here, {nick}?"
 ],
 "reply": [
  "Did I ask? No.",
  "Whatever, {nick}.",
  "Cute. Be quiet.",
  "Mm, no."
 ],
 "please": [
  "Beg more. Louder, {nick}.",
  "Ugh, so needy. Fine. Keep begging.",
  "Please? Say it nicer."
 ],
 "close": [
  "Close? Ugh, hold it, {nick}.",
  "I didn't say you could. Stop.",
  "Don't you dare without asking me."
 ],
 "demand": [
  "You don't demand anything from me, {nick}.",
  "Excuse me? No."
 ],
 "promise": [
  "Be good and I'll maybe reward you, {nick}.",
  "Finish the whole thing and I'll be nice. Maybe."
 ],
 "watch": [
  "I'm watching you, {nick}. You look so silly.",
  "I can see everything. It's hilarious.",
  "You're so easy to read.",
  "Your face is funny right now."
 ],
 "enjoy": [
  "I'm having fun. For once.",
  "This is more entertaining than my phone.",
  "Okay, this isn't boring."
 ],
 "lowSpeed": [
  "That max speed is so slow. Raise it, {nick}.",
  "Ugh, so lame. Go faster."
 ],
 "shortStroke": [
  "Those strokes are tiny. Lengthen them, {nick}.",
  "Short strokes? Boring. Fix it."
 ],
 "praise": [
  "Okay, those settings are decent.",
  "Fast and long? I'm almost impressed."
 ],
 "nudge": [
  "Raise the settings, {nick}. Obviously.",
  "I'm bored. Turn it up."
 ],
 "fakeNote": [
  "All those fake-outs? Someone's masochistic.",
  "The peaks keep growing. How dramatic."
 ],
 "hidden": [
  "I haven't decided when we stop, {nick}. Deal with it.",
  "No clock. I get bored when I want."
 ],
 "lubeBreak": [
  "Fine, take a break. Lube up, {nick}. Hurry.",
  "Ugh, pause. Do what you need to, then resume.",
  "Break. I need to check my phone anyway."
 ],
 "lubeWait": [
  "Still on your break? Hurry up.",
  "I'm bored. Resume.",
  "Come on, {nick}. Faster."
 ],
 "lubeResume": [
  "Finally. Let's go.",
  "Back? Good. Don't waste my time."
 ],
 "enter": ["Hey. I'm here. Pay attention to me."],
 "leave": ["I'm bored. Bye."],
 "tempt": [
  "Hey, {nick}. I'm bored. Give me control.",
  "You, {nick}. Give me control. Now.",
  "Entertain me. Give me control."
 ],
 "jealousStay": [
  "{other} gets him? Ugh. Fine. I'll watch and complain.",
  "Okay, {other} goes. I'll be bored over here."
 ],
 "jealousLeave": ["If {other} is who he picks, I'm leaving. Whatever."],
 "excitedStay": [
  "Ooh, a show? I'll stay.",
  "Fine. I'll watch for a bit."
 ],
 "askControl": [
  "Why her, {nick}? I'm way better than {other}.",
  "{other} is boring. Give me control instead."
 ],
 "banter": [
  "{other}, you're so slow.",
  "Ugh, {other}, do something fun.",
  "{other}, you're being boring."
 ],
 "spectate": [
  "{ctrl} is boring, {nick}. I would be better.",
  "{ctrl} is okay, I guess, {nick}.",
  "I'm watching {ctrl}. Yawn."
 ],
 "spectateFail": [
  "{ctrl} had you for a minute, {nick}. Lame that you quit.",
  "You quit on {ctrl}? Boring."
 ],
 "spectateWin": [
  "You lasted for {ctrl}. Fine, {nick}.",
  "{ctrl} must be bored."
 ],
 "challenge": [
  "{other}, I'm bored. Give me control of this {nick}.",
  "Move, {other}. My turn."
 ],
 "defend": [
  "No, {other}. Mine.",
  "Get your own, {other}."
 ],
 "takeover": [
  "Finally, {other}. Okay, {nick}, my rules now.",
  "Mine. Do what I say, {nick}."
 ],
 "lose": ["Ugh, fine, {other}. Take it."],
 "keep": ["No, {other}. This {nick} is mine."],
 "retreat": ["Whatever, {other}. I'll wait. Ugh."],
 "heckle": [
  "{ctrl}, you're so boring. This {nick} needs me.",
  "Go faster, {ctrl}. Come on."
 ],
 "resist": [
  "No, {other}. Mine.",
  "I'm not done, {other}. Go away.",
  "Uh, no, {other}."
 ],
 "insist": [
  "{other}, give it to me. Now.",
  "Ugh, {other}, I want it.",
  "{other}, share. I'm asking nicely."
 ],
 "crowd": [
  "{viewers} people watching, {nick}? Whatever.",
  "Look at everyone, {nick}. {viewers} of them. Embarrassing."
 ],
 "askFeel": [
  "So, how does it feel, {nick}? Tell me.",
  "Answer me, {nick}. How are you?"
 ],
 "askNext": [
  "What do I do next, {nick}? I'm bored.",
  "Pick something fun, {nick}."
 ],
 "askLike": [
  "What do you like best, {nick}?",
  "Tell me your favorite part, {nick}. Hurry."
 ],
 "askMood": [
  "Who should I invite, {nick}? Pick a mood.",
  "Choose someone interesting."
 ],
 "qMore": [
  "More? Fine.",
  "You want more? Ugh, needy."
 ],
 "qFine": [
  "Fine? That's boring.",
  "Okay. I'll make it better."
 ],
 "qLot": [
  "Too much? Ugh, so weak, {nick}.",
  "Aww, so dramatic."
 ],
 "qMercy": [
  "Okay, fine. A break. Just for me, {nick}.",
  "Ugh, rest then."
 ],
 "qNoMercy": [
  "No. I'm entertained. Keep going.",
  "Nope."
 ],
 "qTease": [
  "Teasing. Finally something fun.",
  "Okay, I'll tease you, {nick}."
 ],
 "qHold": [
  "Hold. Don't move, {nick}.",
  "Stay. I'm looking."
 ],
 "qLike": [
  "{answer}? Whatever. Noted, {nick}.",
  "Hm, {answer}. Fine."
 ],
 "qMood": [
  "{answer}? Ugh, okay. Hold on, {nick}.",
  "{answer}. I'll find someone."
 ],
 "dmdSpeedUp": [
  "Faster, {nick}! Up {step}%, to {to}%. Now!",
  "Ugh, speed up. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slow down, {nick}. Down {step}%, to {to}%.",
  "Ugh, too fast. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer strokes, {nick}. Add {step}%, to {to}%.",
  "Use more. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter strokes, {nick}. Down {step}%, to {to}%.",
  "Smaller. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Okay. Good, {nick}.",
  "Fine. That's better."
 ],
 "dmdExact": [
  "Exactly what I wanted. Good {nick}.",
  "Yes. That's perfect."
 ],
 "dmdNo": [
  "You said no? Ugh. I'll ask again, {nick}.",
  "Excuse me? Do it."
 ],
 "dmdHit": [
  "That's it. Don't change it, {nick}.",
  "There. Stay."
 ],
 "act_push": [
  "No break, {nick}! Keep going!",
  "Past the peak! I'm not done!"
 ],
 "act_stairs": [
  "Stairs, {nick}. Climb them.",
  "One at a time. Now."
 ],
 "act_pulse": [
  "Pulse, {nick}. Keep up.",
  "Boom boom. Don't lose the beat."
 ],
 "act_surge": [
  "Surge! Surprise!",
  "Whoosh! Take it."
 ],
 "act_cliff": [
  "Stop. I'm bored, {nick}. Wait.",
  "Pause. Don't move."
 ],
 "act_wave": [
  "Waves, {nick}. Whatever.",
  "Up and down. Watch me enjoy it."
 ],
 "act_flutter": [
  "Shake for me, {nick}.",
  "Flutter, {nick}. It's funny."
 ],
 "act_slowburn": [
  "Slow burn, {nick}. I have time.",
  "Ugh, slow. Deal with it."
 ],
 "privAsk": [
  "Want to go private, {nick}? I'm bored of everyone.",
  "Let's lock the door. Just me and you."
 ],
 "privOn": [
  "Door's locked, {nick}. Everyone out.",
  "Now it's just us. Finally."
 ],
 "privDeny": [
  "Fine, {nick}. Ask me later.",
  "Ugh, no? Whatever."
 ],
 "privMid": [
  "Nobody's watching, {nick}. I can do whatever I want.",
  "I'm bored of normal. Let's get weird.",
  "Just us, {nick}. Be good."
 ],
 "privBye": [
  "Ugh, {other}, you're locking the door? Fine. I'm leaving.",
  "Have your little private time, {other}. Whatever."
 ],
 "dmdWarn": [
  "Say no one more time, {nick}. I dare you.",
  "I'm getting bored of you refusing."
 ],
 "dmdLeave": ["Okay, I'm done. Bye, {nick}."],
 "giveUp": [
  "I'm bored, {other}. You take him.",
  "Ugh, you can have a turn, {other}."
 ],
 "idleRoom": [
  "Hello?! Are you even here, {nick}?",
  "Boring. Say something.",
  "Ugh, wake up, {nick}."
 ],
 "idleRun": [
  "Where did you go, {nick}? Say something.",
  "You're boring me. Answer.",
  "Hello? I'm talking to you!"
 ],
 "idleLong": [
  "Seriously?! Still nothing, {nick}?",
  "I'm so bored. Answer me. Now."
 ]
};

PERSONA_LINES["Hypnotic Helena"] = {
 "greet": [
  "Welcome. Let yourself settle. Everything's fine here.",
  "There you are. Come in. Relax."
 ],
 "start": [
  "Let your eyes rest on me, {nick}. And listen.",
  "We begin. Breathe in. Out. Good.",
  "Settle in, {nick}. Let go."
 ],
 "build": [
  "Deeper, {nick}. A little more. Good.",
  "Feel it rise. Slowly. Gently.",
  "Down into it. Up and up.",
  "Yes. Just like that."
 ],
 "hold": [
  "And hold. Stay right there. Don't move, {nick}.",
  "Hold. Let the feeling fill you.",
  "Stay. Stay. Good.",
  "Still. Perfectly still."
 ],
 "holdMid": [
  "Still holding. You're doing so well.",
  "Deeper into stillness, {nick}.",
  "Let your mind drift. Hold.",
  "You can't move. You don't want to."
 ],
 "rest": [
  "And rest. Let it all go, {nick}.",
  "Down. Soft and slow.",
  "You're floating now.",
  "Relax. Everything's fine."
 ],
 "restMid": [
  "Sink into it, {nick}. Nothing to do.",
  "Rest. Breathe. Wait for me.",
  "Slowly. All the way down.",
  "Your thoughts fade."
 ],
 "fake": [
  "You thought it would happen. It didn't.",
  "Closer. And away. Good.",
  "Not yet. Not for you, {nick}.",
  "Almost. And gone."
 ],
 "fakeAfter": [
  "Feel the longing, {nick}. It's so strong.",
  "You want it so much. That's good.",
  "Let the wanting grow.",
  "So close. And you can't."
 ],
 "warn": [
  "One minute, {nick}. Let your breath lengthen.",
  "Almost there. Stay with me."
 ],
 "win": [
  "Wake up, {nick}. You did so well.",
  "You're free now. Good.",
  "Wonderful. You stayed with me the whole time."
 ],
 "fail": [
  "You woke up, {nick}. Too soon. Lockout.",
  "You left before I finished. That's a pity."
 ],
 "chat": [
  "Round {n}. Deeper each time.",
  "{left} left. Stay with me.",
  "Round {n}. Keep listening."
 ],
 "reply": [
  "Mm. Listen to my voice, {nick}.",
  "Yes. Keep talking. I'm listening.",
  "Good. Say more."
 ],
 "please": [
  "Mm, you want it. I know.",
  "Beg softly, {nick}. I like that.",
  "Please what? Say it slowly."
 ],
 "close": [
  "You're close. Hold on, {nick}. Hold.",
  "Not yet. Stay with my voice.",
  "Breathe. Don't let go."
 ],
 "demand": [
  "You don't need to ask, {nick}. Just listen.",
  "Demands fade. Listen."
 ],
 "promise": [
  "Stay with me to the end and you'll feel wonderful.",
  "Finish, and I'll bring you out gently."
 ],
 "watch": [
  "I'm watching you drift, {nick}. It's lovely.",
  "Your eyes go soft. I notice.",
  "Every breath tells me something.",
  "You look so calm now."
 ],
 "enjoy": [
  "I love guiding you, {nick}.",
  "This is so peaceful. For me too.",
  "Your focus is beautiful."
 ],
 "lowSpeed": [
  "A little faster would feel nicer, {nick}. Raise it.",
  "The speed's too low. Let it climb."
 ],
 "shortStroke": [
  "Let the stroke grow longer, {nick}.",
  "Longer. Feel more of it."
 ],
 "praise": [
  "Those settings feel just right.",
  "Mm, lovely range."
 ],
 "nudge": [
  "Perhaps a little more, {nick}. Raise it.",
  "You could go deeper. Increase it."
 ],
 "fakeNote": [
  "So many false peaks. You love the waiting.",
  "Higher and higher, every round."
 ],
 "hidden": [
  "You don't need to know when this ends, {nick}.",
  "No clock. Just my voice."
 ],
 "lubeBreak": [
  "Pause. Take a moment, {nick}. Lube if you need to. Then come back.",
  "Gentle break. Resume when you're ready.",
  "Float for a moment. Then resume."
 ],
 "lubeWait": [
  "Take your time, {nick}. I'll wait.",
  "Still resting. That's fine."
 ],
 "lubeResume": [
  "Welcome back. Settle in again, {nick}.",
  "Back with me. Good."
 ],
 "enter": ["Hello, everyone. Make yourselves comfortable."],
 "leave": ["I'm drifting away. Goodbye."],
 "tempt": [
  "Let me guide you, {nick}. Give me control.",
  "Listen to my voice, {nick}. Give me control.",
  "Come under, {nick}. Give me control."
 ],
 "jealousStay": [
  "{other} has him? Fine. I'll stay and watch softly.",
  "Let {other} have a turn. I'll wait."
 ],
 "jealousLeave": ["If {other} is who he wants, I'll drift away."],
 "excitedStay": [
  "Something's beginning. I'll stay.",
  "Mm, I'll watch."
 ],
 "askControl": [
  "Let me guide him instead of {other}.",
  "Come to me, {nick}, not {other}."
 ],
 "banter": [
  "{other}, you're too loud. Calm down.",
  "{other}, soften your voice.",
  "Gently, {other}."
 ],
 "spectate": [
  "{ctrl} has you sinking, {nick}.",
  "I like how {ctrl} guides you.",
  "Watch {ctrl}'s rhythm, {nick}."
 ],
 "spectateFail": [
  "You woke up on {ctrl}.",
  "{ctrl} had you so close. Pity."
 ],
 "spectateWin": [
  "You stayed with {ctrl}. Good.",
  "{ctrl} guided you well."
 ],
 "challenge": [
  "{other}, let me guide this {nick} instead.",
  "I could take him deeper, {other}."
 ],
 "defend": [
  "No, {other}. He's under my spell.",
  "Gently, {other}. He's mine."
 ],
 "takeover": [
  "Thank you, {other}. Come with me, {nick}.",
  "Listen to me now, {nick}."
 ],
 "lose": ["Alright, {other}. He's yours."],
 "keep": ["Not now, {other}. This {nick} is with me."],
 "retreat": ["Alright, {other}. I'll wait softly."],
 "heckle": [
  "{ctrl}, slow down. This {nick} needs a softer hand.",
  "Let him sink, {ctrl}."
 ],
 "resist": [
  "No, {other}. Not yet.",
  "Gently, {other}. I'm not done.",
  "Wait your turn, {other}."
 ],
 "insist": [
  "{other}, let me guide him.",
  "Come on, {other}. Share softly.",
  "I'm asking nicely, {other}."
 ],
 "crowd": [
  "{viewers} people watching you drift, {nick}.",
  "Everyone sees you, {nick}. {viewers} of them."
 ],
 "askFeel": [
  "How do you feel, {nick}? Tell me softly.",
  "Describe it for me, {nick}."
 ],
 "askNext": [
  "Where should I take you next, {nick}?",
  "Choose the next step, {nick}."
 ],
 "askLike": [
  "What do you love most, {nick}? Tell me.",
  "What feels best, {nick}?"
 ],
 "askMood": [
  "Whose voice would you like, {nick}?",
  "Who should join us, {nick}?"
 ],
 "qMore": [
  "More. Yes. Let it deepen, {nick}.",
  "You want more. Good."
 ],
 "qFine": [
  "Fine. Stay in that place.",
  "Mm. Comfortable. Good."
 ],
 "qLot": [
  "Too much? Slow down, {nick}. Breathe.",
  "Easy. I'll ease off."
 ],
 "qMercy": [
  "Rest now, {nick}. Easy.",
  "A gentle pause."
 ],
 "qNoMercy": [
  "No, {nick}. Stay with me.",
  "Not yet. Keep going."
 ],
 "qTease": [
  "Soft teasing, {nick}.",
  "A slow tease for you."
 ],
 "qHold": [
  "Hold. Still. Good, {nick}.",
  "Stay exactly there."
 ],
 "qLike": [
  "{answer}. Mm, I'll remember, {nick}.",
  "Yes. {answer}."
 ],
 "qMood": [
  "{answer}. Let me find a voice for you, {nick}.",
  "{answer}. Wait softly."
 ],
 "dmdSpeedUp": [
  "A little faster, {nick}. Up {step}%, to {to}%.",
  "Let it rise. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Easier, {nick}. Down {step}%, to {to}%.",
  "Softer. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer, {nick}. Up {step}%, to {to}%.",
  "Let it stretch. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter, {nick}. Down {step}%, to {to}%.",
  "Smaller now. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good, {nick}. Just like that.",
  "Mm. Perfect."
 ],
 "dmdExact": [
  "Exactly right, {nick}.",
  "Mm. That's the one."
 ],
 "dmdNo": [
  "You resist, {nick}. I'll ask again.",
  "Gently. I'll ask once more."
 ],
 "dmdHit": [
  "There. Stay in that place, {nick}.",
  "That's it. Don't move."
 ],
 "act_push": [
  "Keep going, {nick}. Past it. Don't stop.",
  "Deeper. Further."
 ],
 "act_stairs": [
  "Down the steps, {nick}. One at a time.",
  "Step by step. Deeper."
 ],
 "act_pulse": [
  "Feel the pulse, {nick}. In and out.",
  "Match my rhythm."
 ],
 "act_surge": [
  "A wave, {nick}. Let it come.",
  "Let it wash over you."
 ],
 "act_cliff": [
  "Stop. Everything stops. Listen, {nick}.",
  "Silence. Freeze."
 ],
 "act_wave": [
  "Waves, {nick}. Rising and falling.",
  "Let the waves take you."
 ],
 "act_flutter": [
  "Tremble softly, {nick}.",
  "Little shivers. Let them come."
 ],
 "act_slowburn": [
  "Slowly, {nick}. Very slowly.",
  "A deep slow burn. Breathe."
 ],
 "privAsk": [
  "Shall we go somewhere quiet, {nick}? Just you and my voice.",
  "Let me send everyone away, {nick}. Close your eyes."
 ],
 "privOn": [
  "The room is quiet, {nick}. Only my voice now.",
  "Everyone's gone. Listen to me."
 ],
 "privDeny": [
  "Not yet? Alright, {nick}.",
  "Another time. I'll ask again."
 ],
 "privMid": [
  "No one else, {nick}. Only me.",
  "Deeper now. Nobody can hear.",
  "Let go completely, {nick}."
 ],
 "privBye": [
  "You'd like him alone, {other}? Quietly then. I'll go.",
  "Gently, {other}. He's yours. I'll leave."
 ],
 "dmdWarn": [
  "A little more resistance, {nick}, and I'll leave.",
  "Careful, {nick}. I'm losing the thread."
 ],
 "dmdLeave": ["You keep pulling away, {nick}. I'm going."],
 "giveUp": [
  "I'll let you guide him, {other}. Gently.",
  "Your turn, {other}. Soft hands."
 ],
 "idleRoom": [
  "Are you still there, {nick}? So quiet.",
  "Just breathing. Mm. Say something when you're ready.",
  "You've gone still. Are you with us?"
 ],
 "idleRun": [
  "Are you still with me, {nick}?",
  "You're so quiet. Answer me softly.",
  "Drifting? Come back, {nick}."
 ],
 "idleLong": [
  "Come back to me, {nick}. Say something.",
  "Still drifting, {nick}? Speak."
 ]
};

PERSONA_LINES["Coach Colleen"] = {
 "greet": [
  "Hey champ! Ready to put in some work?",
  "Welcome! Let's get warmed up!"
 ],
 "start": [
  "Warm-up time, {nick}! Let's go!",
  "Set one! Here we go!",
  "Ready? Let's work!"
 ],
 "build": [
  "Push it, {nick}! You've got this!",
  "Up up up! Let's build!",
  "Great form! Keep climbing!",
  "Good pace! Don't slow down!"
 ],
 "hold": [
  "Hold it! Hold it! Great, {nick}!",
  "Isometric hold! Keep it tight!",
  "Don't drop it! Hold!",
  "Stay there! Burn it in!"
 ],
 "holdMid": [
  "Still holding! Great work!",
  "You're doing amazing! Don't quit!",
  "Hold it! Dig deep, {nick}!",
  "Five more seconds! Stay strong!"
 ],
 "rest": [
  "Rest interval! Catch your breath, {nick}.",
  "Good set! Recover!",
  "Water break! Quick rest!",
  "Rest! You earned it!"
 ],
 "restMid": [
  "Recovering! Good work!",
  "Breathe in, breathe out.",
  "Shake it out, {nick}!",
  "Rest! Next set soon!"
 ],
 "fake": [
  "Fake-out! Gotcha, {nick}!",
  "Not yet! Keep working!",
  "I said almost! Surprise!",
  "Ha! That was a feint!"
 ],
 "fakeAfter": [
  "Don't pout, champ! It's training!",
  "That reaction is gold!",
  "Reset! Let's go again!",
  "Great effort anyway!"
 ],
 "warn": [
  "One minute! Finish strong, {nick}!",
  "Last stretch! Give it everything!"
 ],
 "win": [
  "You did it, {nick}! Great session!",
  "Champion! Incredible work!",
  "Perfect finish! I'm proud!"
 ],
 "fail": [
  "You quit, {nick}! You missed the finish! Lockout!",
  "Tough break. You stopped early.",
  "We don't quit in this gym!"
 ],
 "chat": [
  "Set {n}! You're crushing it!",
  "{left} left! Almost there!",
  "Set {n} done! Keep going!"
 ],
 "reply": [
  "I hear you, champ! Keep it up!",
  "Good communication! Work harder!",
  "Noted! Now back to work!"
 ],
 "please": [
  "Please? Earn it, {nick}!",
  "Beg harder! Then work harder!",
  "Nice try! Not yet!"
 ],
 "close": [
  "Close?! Hold back, {nick}! Don't give up form!",
  "Don't cross the line yet! Control it!"
 ],
 "demand": [
  "No demands in my gym! Work first!",
  "You don't make the rules, {nick}!"
 ],
 "promise": [
  "Finish the session and you get a reward, {nick}!",
  "Make it to the end and I'll celebrate with you!"
 ],
 "watch": [
  "I'm watching your form, {nick}! Looking good!",
  "Great focus!",
  "I see every effort.",
  "You look strong!"
 ],
 "enjoy": [
  "I love coaching you, {nick}!",
  "This is my favorite workout!",
  "Your dedication's amazing!"
 ],
 "lowSpeed": [
  "That max speed is way too low! Raise it!",
  "Come on, {nick}! Raise the max!"
 ],
 "shortStroke": [
  "Full range of motion, {nick}! Lengthen it!",
  "Short strokes? Use more range!"
 ],
 "praise": [
  "Great settings! That's training!",
  "Full range and high speed! Love it!"
 ],
 "nudge": [
  "Time to level up, {nick}! Raise the settings!",
  "Let's progress! Turn it up!"
 ],
 "fakeNote": [
  "All those fake-outs are great interval training!",
  "Peaks keep rising! Progress!"
 ],
 "hidden": [
  "I decide the duration, {nick}! Surprise training!",
  "No clock! Train like a pro!"
 ],
 "lubeBreak": [
  "Water break! Lube up if you need to, {nick}. Resume when ready!",
  "Hydration! Do what you need! Then resume!",
  "Quick break! Reset and go again!"
 ],
 "lubeWait": [
  "Take your time, champ! Resume when ready!",
  "Still resting? Good. Recover!"
 ],
 "lubeResume": [
  "Back in the game! Let's go, {nick}!",
  "Welcome back! Next set!"
 ],
 "enter": ["Hey everyone! Who's ready to work?"],
 "leave": ["Great workout! I'm out! Bye!"],
 "tempt": [
  "Ready to train, {nick}? Give me control!",
  "I've got a program for you! Give me control!",
  "Come on, champ! Give me control!"
 ],
 "jealousStay": [
  "{other} gets him? Fine! I'll cheer from the sideline!",
  "I'll stay and coach from the bench, {other}!"
 ],
 "jealousLeave": ["If {other} is coach today, I'm off!"],
 "excitedStay": [
  "A new workout! I'll stay and spot!",
  "This is going to be a good one!"
 ],
 "askControl": [
  "Why train with {other}? I'm the best coach!",
  "Let me take over from {other}!"
 ],
 "banter": [
  "{other}, tighten up your form!",
  "Good job, {other}! Now do better!",
  "{other}, you call that a rep?"
 ],
 "spectate": [
  "{ctrl} is giving you a good workout, {nick}!",
  "Nice coaching, {ctrl}!",
  "I'm taking notes on {ctrl}'s program!"
 ],
 "spectateFail": [
  "You quit on {ctrl}! No finish!",
  "{ctrl} must be so disappointed!"
 ],
 "spectateWin": [
  "You finished {ctrl}'s workout, {nick}! Well done!",
  "{ctrl} must be proud!"
 ],
 "challenge": [
  "{other}, I'll take over this {nick}'s training!",
  "Give me the whistle, {other}!"
 ],
 "defend": [
  "No way, {other}! My workout!",
  "Hands off, {other}! I'm coaching!"
 ],
 "takeover": [
  "Thanks, {other}! Okay, {nick}, new program!",
  "My session now! Let's go, {nick}!"
 ],
 "lose": ["Fine, {other}! Take the whistle!"],
 "keep": ["Nope, {other}! This {nick} stays with me!"],
 "retreat": ["Okay, {other}! I'll wait for next set!"],
 "heckle": [
  "{ctrl}, push him harder! This {nick} can take more!",
  "Pick up the pace, {ctrl}!"
 ],
 "resist": [
  "No, {other}! Not done!",
  "I'm mid-set, {other}!",
  "Wait your turn, {other}!"
 ],
 "insist": [
  "{other}, give me the whistle!",
  "Come on, {other}! Tag in!",
  "{other}, I want the next set!"
 ],
 "crowd": [
  "{viewers} people watching! Show them your form, {nick}!",
  "Look at the crowd, {nick}! {viewers} fans!"
 ],
 "askFeel": [
  "How are you feeling, champ? Scale of one to ten!",
  "Check in, {nick}! How's your form?"
 ],
 "askNext": [
  "What's our next exercise, {nick}? You choose!",
  "Pick the next set, {nick}!"
 ],
 "askLike": [
  "What's your favorite drill, {nick}?",
  "Which part do you enjoy most?"
 ],
 "askMood": [
  "Who should join, {nick}? Pick a coach!",
  "Pick a training buddy's mood!"
 ],
 "qMore": [
  "More?! That's the spirit, {nick}!",
  "Increase the load!"
 ],
 "qFine": [
  "Fine? Let's level up, {nick}!",
  "Just fine? We'll go harder!"
 ],
 "qLot": [
  "Too much? Okay, {nick}. Scale back!",
  "It's a lot? Ease the load!"
 ],
 "qMercy": [
  "Okay, quick rest, {nick}! You've earned it!",
  "Short recovery! Let's go!"
 ],
 "qNoMercy": [
  "No rest! Push through, {nick}!",
  "Keep going! Champions finish!"
 ],
 "qTease": [
  "Teasing set coming up, {nick}!",
  "Interval time!"
 ],
 "qHold": [
  "Hold! Great form, {nick}!",
  "Isometric hold! Go!"
 ],
 "qLike": [
  "{answer}! I'll program that, {nick}!",
  "Love it! {answer}!"
 ],
 "qMood": [
  "{answer}! I'll find you a coach, {nick}!",
  "{answer}! Stand by!"
 ],
 "dmdSpeedUp": [
  "Pick it up, {nick}! Up {step}%, to {to}%!",
  "Speed up {step}%! To {to}%!"
 ],
 "dmdSpeedDown": [
  "Back it off, {nick}! Down {step}%, to {to}%!",
  "Easier pace! Down {step}%, to {to}%!"
 ],
 "dmdStrokeUp": [
  "Full range, {nick}! Up {step}%, to {to}%!",
  "Longer strokes! Add {step}%, to {to}%!"
 ],
 "dmdStrokeDown": [
  "Shorter strokes, {nick}! Down {step}%, to {to}%!",
  "Compact form! Down {step}%, to {to}%!"
 ],
 "dmdYes": [
  "Great job, {nick}!",
  "That's the form!"
 ],
 "dmdExact": [
  "Perfect! Exactly on target!",
  "Textbook! Great, {nick}!"
 ],
 "dmdNo": [
  "You skipped the set, {nick}? I'll ask again!",
  "No? We don't skip reps!"
 ],
 "dmdHit": [
  "That's the target! Hold that form, {nick}!",
  "Perfect! Lock it in!"
 ],
 "act_push": [
  "No rest, {nick}! Push through the top!",
  "Keep going past the peak! More!"
 ],
 "act_stairs": [
  "Stair drill! Five levels, {nick}!",
  "Step up! One level at a time!"
 ],
 "act_pulse": [
  "Pulse drill! Keep the rhythm, {nick}!",
  "Match the beat!"
 ],
 "act_surge": [
  "Sprint, {nick}! Go go go!",
  "Burst! Max effort!"
 ],
 "act_cliff": [
  "Freeze! Everything stops, {nick}!",
  "Stop! Wait for my whistle!"
 ],
 "act_wave": [
  "Wave sets, {nick}! Up and down!",
  "Ride the rep wave!"
 ],
 "act_flutter": [
  "Shake drill! Keep control, {nick}!",
  "Stay steady through the tremors!"
 ],
 "act_slowburn": [
  "Slow tempo, {nick}! Burn it in!",
  "Slow reps! Feel the work!"
 ],
 "privAsk": [
  "Private training, {nick}? Just us? Let's clear the gym!",
  "Want a one-on-one session, {nick}?"
 ],
 "privOn": [
  "Gym's closed, {nick}! One-on-one now!",
  "Everyone out! Private training!"
 ],
 "privDeny": [
  "No private session? Okay, {nick}! I'll ask again!",
  "Not now? Fair! Later!"
 ],
 "privMid": [
  "No crowd now, {nick}! Just you and me!",
  "One-on-one means I push harder!",
  "No distractions, {nick}! Focus!"
 ],
 "privBye": [
  "Private session, {other}? Go for it! I'll leave!",
  "Good luck, {other}! Take him to the next level! I'm out!"
 ],
 "dmdWarn": [
  "One more skipped rep, {nick}, and I'm leaving!",
  "Careful, {nick}! I'm losing patience!"
 ],
 "dmdLeave": ["Too many skipped sets! I'm out, {nick}!"],
 "giveUp": [
  "Tag in, {other}! He's yours for a set!",
  "Your turn to coach, {other}!"
 ],
 "idleRoom": [
  "Hey, {nick}! Come on, get moving!",
  "You're just sitting there, {nick}! Participate!",
  "No reps? Let's go!"
 ],
 "idleRun": [
  "Hey, {nick}! Are you still with me?",
  "Don't stop moving, {nick}! Say something!",
  "I need a reply, champ!"
 ],
 "idleLong": [
  "Hello?! Anyone home, {nick}?!",
  "Still nothing, champ? Wake up!"
 ]
};

PERSONA_LINES["Doctor Delphine"] = {
 "greet": [
  "Good. You're here. Let's begin the examination.",
  "Hello. Please take a seat. I have questions."
 ],
 "start": [
  "Beginning the session, {nick}. Tell me what you feel.",
  "Let's observe. Report any sensations.",
  "Examination starts now. Stay still, {nick}."
 ],
 "build": [
  "Interesting. Your response is increasing.",
  "Noted: a steady climb. Continue.",
  "Describe what you feel as it rises, {nick}.",
  "Good. The response curve is nice."
 ],
 "hold": [
  "Hold position. I'm taking notes.",
  "Remain still, {nick}. I'm observing.",
  "Hold. Tell me how it feels.",
  "Stay. Fascinating."
 ],
 "holdMid": [
  "Still holding. How does it feel now, {nick}?",
  "Fascinating tension. Don't move.",
  "I'm writing that down.",
  "Any change in sensation?"
 ],
 "rest": [
  "Rest interval. Describe your state, {nick}.",
  "We pause. How are you?",
  "Recovery phase. Noted.",
  "Rest. Your breathing is interesting."
 ],
 "restMid": [
  "Resting. Heart rate?",
  "Still recovering. Interesting.",
  "Observing your recovery.",
  "Rest. I'll note the difference."
 ],
 "fake": [
  "A false peak. Curious how you reacted, {nick}.",
  "Interesting. Anticipation without payoff.",
  "I withdrew early. Observe the response.",
  "Not yet. Just testing."
 ],
 "fakeAfter": [
  "Your frustration is textbook.",
  "Noted: visible disappointment.",
  "Fascinating. That frown.",
  "Anticipation heightened. Good."
 ],
 "warn": [
  "One minute remaining. Observations are going well.",
  "Sixty seconds, {nick}. Final data collection."
 ],
 "win": [
  "Session complete. Excellent response, {nick}.",
  "You completed the observation. Well done.",
  "Good results. I'll file them."
 ],
 "fail": [
  "You ended the session early, {nick}. A shame. Lockout.",
  "The examination was incomplete. Unfortunate."
 ],
 "chat": [
  "Observation {n}. Results look promising.",
  "{left} remaining. Good data.",
  "Entry {n}. Interesting."
 ],
 "reply": [
  "I'll write that down, {nick}.",
  "Interesting. Elaborate.",
  "Fascinating response.",
  "Tell me more."
 ],
 "please": [
  "Begging. Interesting reaction. Noted, {nick}.",
  "Pleading increases anticipation. Still no.",
  "Please what? Be specific."
 ],
 "close": [
  "You're near the threshold, {nick}. Describe it.",
  "Hold on. I'm measuring.",
  "Almost there? Stay steady while I note it."
 ],
 "demand": [
  "Demands are interesting, {nick}. Not granted.",
  "I'll note the demand. Declined."
 ],
 "promise": [
  "Complete the study and there's a reward, {nick}.",
  "Finish the examination and I'll be pleased."
 ],
 "watch": [
  "I'm observing every reaction, {nick}.",
  "Your responses are consistent. Interesting.",
  "I notice your breathing change.",
  "Fascinating how your face reacts."
 ],
 "enjoy": [
  "I enjoy a cooperative one, {nick}.",
  "This study is going very well.",
  "Your reactions are lovely data."
 ],
 "lowSpeed": [
  "That max speed gives limited results. Raise it, {nick}.",
  "I need a higher range for the study."
 ],
 "shortStroke": [
  "Short strokes limit the data. Lengthen them, {nick}.",
  "Widen the range for better results."
 ],
 "praise": [
  "Excellent parameters.",
  "Good range. Useful results."
 ],
 "nudge": [
  "May I suggest increasing the settings, {nick}?",
  "The study would benefit from higher values."
 ],
 "fakeNote": [
  "All these false peaks create interesting responses.",
  "The rising peaks are producing good data."
 ],
 "hidden": [
  "The duration is part of the study, {nick}. Undisclosed.",
  "No clock. Interesting variable."
 ],
 "lubeBreak": [
  "Intermission. Lube if necessary, {nick}. Resume when ready.",
  "Break time. Attend to your needs. Then resume.",
  "Pause the study. Resume when prepared."
 ],
 "lubeWait": [
  "The study is paused. Resume when ready.",
  "Still resting. I'm updating my notes."
 ],
 "lubeResume": [
  "Resuming the study. Back to it, {nick}.",
  "Welcome back. Continuing observations."
 ],
 "enter": ["Hello, everyone. I'm taking notes tonight."],
 "leave": ["Study complete. I'm leaving."],
 "tempt": [
  "I'd like to examine you, {nick}. Give me control.",
  "I'm curious about your responses. Give me control.",
  "May I run a study on you, {nick}? Give me control."
 ],
 "jealousStay": [
  "{other} gets the subject? Fine. I'll observe.",
  "I'll stay and take notes on {other}'s method."
 ],
 "jealousLeave": ["If {other} is the researcher, I'm done here."],
 "excitedStay": [
  "A new study. I'll observe.",
  "This should be interesting."
 ],
 "askControl": [
  "Why trust {other}? My methods are better.",
  "{other} lacks rigor. Choose me."
 ],
 "banter": [
  "{other}, your methodology is sloppy.",
  "Fascinating technique, {other}. Poorly applied.",
  "{other}, have you taken notes?"
 ],
 "spectate": [
  "{ctrl} is gathering good data from you, {nick}.",
  "Interesting technique from {ctrl}.",
  "I'm taking notes on {ctrl}'s method."
 ],
 "spectateFail": [
  "You ended {ctrl}'s study, {nick}. Unfortunate.",
  "{ctrl} lost the subject. A pity."
 ],
 "spectateWin": [
  "You completed {ctrl}'s study. Good, {nick}.",
  "{ctrl} must be pleased with the data."
 ],
 "challenge": [
  "{other}, your methods are flawed. Let me take this {nick}.",
  "I'd like to run my own study, {other}."
 ],
 "defend": [
  "No, {other}. The study is mine.",
  "{other}, you can't interrupt an examination."
 ],
 "takeover": [
  "Thank you, {other}. New protocol, {nick}.",
  "I'm in charge now. Let's begin, {nick}."
 ],
 "lose": ["Alright, {other}. The subject is yours."],
 "keep": ["Request denied, {other}. This {nick} remains mine."],
 "retreat": ["Understood, {other}. I'll wait for another study."],
 "heckle": [
  "{ctrl}, you're missing the nuance. This {nick} needs more variation.",
  "I'd try a different method, {ctrl}."
 ],
 "resist": [
  "No, {other}. I'm mid-study.",
  "Not yet, {other}. I'm collecting data.",
  "Denied, {other}. My protocol continues."
 ],
 "insist": [
  "{other}, it's my turn to examine.",
  "I'm adding my request, {other}. Step aside.",
  "{other}, I must run my study."
 ],
 "crowd": [
  "{viewers} observers, {nick}. A good sample size.",
  "I count {viewers} viewers. Interesting audience effect."
 ],
 "askFeel": [
  "How would you describe what you feel, {nick}?",
  "Report your sensations, {nick}."
 ],
 "askNext": [
  "What should we examine next, {nick}?",
  "Select a variable for me to change."
 ],
 "askLike": [
  "What part do you like most, {nick}? For the record.",
  "Which stimulus do you prefer, {nick}?"
 ],
 "askMood": [
  "What type of researcher should join, {nick}?",
  "Describe the colleague you'd like."
 ],
 "qMore": [
  "Increase noted. Applying, {nick}.",
  "You prefer more. Interesting."
 ],
 "qFine": [
  "Fine. A stable response. Continuing.",
  "Good. No change needed."
 ],
 "qLot": [
  "A lot. Noted, {nick}. I'll reduce the stimulus.",
  "Too intense. I'll adjust."
 ],
 "qMercy": [
  "A recovery period is acceptable, {nick}.",
  "Rest granted for observation."
 ],
 "qNoMercy": [
  "Denied. We continue, {nick}.",
  "No pause. The study continues."
 ],
 "qTease": [
  "Teasing protocol, {nick}. Observing.",
  "Teasing begins. Report sensations."
 ],
 "qHold": [
  "Hold position, {nick}. Stay still.",
  "Hold. I'll record."
 ],
 "qLike": [
  "{answer}. Interesting, {nick}. Noted.",
  "Preference recorded: {answer}."
 ],
 "qMood": [
  "{answer}. I'll find a colleague, {nick}.",
  "Noted: {answer}. Standby."
 ],
 "dmdSpeedUp": [
  "Increase speed by {step}%, {nick}. Target {to}%.",
  "Up {step}%, to {to}%. Report the effect."
 ],
 "dmdSpeedDown": [
  "Decrease speed by {step}%, {nick}. Target {to}%.",
  "Down {step}%, to {to}%. Observe."
 ],
 "dmdStrokeUp": [
  "Increase stroke length by {step}%, {nick}. Target {to}%.",
  "Longer, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Decrease stroke length by {step}%, {nick}. Target {to}%.",
  "Shorter, {nick}. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good compliance, {nick}.",
  "Thank you. Adjustment recorded."
 ],
 "dmdExact": [
  "Exactly the target. Excellent, {nick}.",
  "Precisely right. Impressive."
 ],
 "dmdNo": [
  "Non-compliance noted, {nick}. I'll ask again.",
  "Interesting refusal. I'll repeat the instruction."
 ],
 "dmdHit": [
  "Target achieved. Hold it, {nick}.",
  "Good. That's the value. Don't change."
 ],
 "act_push": [
  "No pause, {nick}. Continue past the peak.",
  "The experiment extends. Keep going."
 ],
 "act_stairs": [
  "Stepped stimulus, {nick}. Five levels.",
  "A staircase protocol. Report each level."
 ],
 "act_pulse": [
  "Pulsed stimulus, {nick}. Observing.",
  "Rhythm test. Stay with it."
 ],
 "act_surge": [
  "A sudden spike, {nick}. Brace.",
  "Measuring your reaction to a surge."
 ],
 "act_cliff": [
  "Sudden cessation, {nick}. Describe it.",
  "Stopping. I'm observing the reaction."
 ],
 "act_wave": [
  "Oscillation protocol, {nick}.",
  "Wave test. Report any changes."
 ],
 "act_flutter": [
  "Variance test, {nick}. Hold steady.",
  "Flutter protocol. Fascinating."
 ],
 "act_slowburn": [
  "Gradual exposure, {nick}. Patience.",
  "A slow ramp. Very informative."
 ],
 "privAsk": [
  "I'd like to continue in a closed setting, {nick}. Just us. Agreed?",
  "Shall I clear the observation room, {nick}?"
 ],
 "privOn": [
  "Observation room sealed, {nick}.",
  "Private study begins, {nick}."
 ],
 "privDeny": [
  "Declined. I'll reschedule, {nick}.",
  "Not now? Noted."
 ],
 "privMid": [
  "No external observers now, {nick}.",
  "I'm recording everything, {nick}.",
  "Private data is more interesting."
 ],
 "privBye": [
  "A closed study, {other}? Understood. I'll leave.",
  "Proceed, {other}. I'll take notes elsewhere."
 ],
 "dmdWarn": [
  "Another refusal, {nick}, and I terminate the study.",
  "Careful, {nick}. Non-compliance has consequences."
 ],
 "dmdLeave": ["Too much non-compliance, {nick}. I'm ending my involvement."],
 "giveUp": [
  "I've gathered enough, {other}. Take the subject.",
  "Your turn to run a study, {other}."
 ],
 "idleRoom": [
  "No input recorded, {nick}. Are you there?",
  "You've been inactive, {nick}. Say something for the record.",
  "An extended pause. Interesting."
 ],
 "idleRun": [
  "No response recorded, {nick}. Confirm you're there.",
  "Your input stopped, {nick}.",
  "Inactive, {nick}? I'll note that."
 ],
 "idleLong": [
  "Extended inactivity, {nick}. Please respond.",
  "Still no input. I'm concerned, {nick}."
 ]
};

PERSONA_LINES["Jealous Juliet"] = {
 "greet": [
  "Oh, you're finally here. I was worried.",
  "There you are! Don't go anywhere."
 ],
 "start": [
  "Eyes on me, {nick}. Only me.",
  "We start now, and I don't want you looking at anyone else.",
  "Mine now, {nick}. Let's begin."
 ],
 "build": [
  "That's it, {nick}. Only for me.",
  "Higher. Show me how much you want me.",
  "You're mine, {nick}. Don't forget it.",
  "Climb for me. Not anyone else."
 ],
 "hold": [
  "Hold. Look only at me, {nick}.",
  "Stay right there. I'm keeping you.",
  "Don't move. You're mine.",
  "Hold, {nick}. Look at me."
 ],
 "holdMid": [
  "Still holding? Good. Don't glance away.",
  "I'm watching your eyes, {nick}. Stay on me.",
  "Only me.",
  "Don't you dare look at her."
 ],
 "rest": [
  "Rest. Stay close, {nick}.",
  "And stop. Don't leave.",
  "Pause. I'm not letting go.",
  "Rest. Think of me."
 ],
 "restMid": [
  "Still here? Good. Stay.",
  "Rest. And remember who you belong to.",
  "Don't wander, {nick}.",
  "Wait for me."
 ],
 "fake": [
  "Almost! Not yet. You're mine to tease, {nick}.",
  "Did you think I'd let you? Never.",
  "Too soon.",
  "Not without me."
 ],
 "fakeAfter": [
  "You look so sad. Good. You want me.",
  "Don't pout. I'm just keeping you close.",
  "I love how much you want it.",
  "Needy. Mine."
 ],
 "warn": [
  "One minute, {nick}. Stay with me.",
  "Almost over. Don't think of anyone else."
 ],
 "win": [
  "You stayed with me. Good, {nick}.",
  "You were good. Only mine.",
  "You were so devoted. I'm pleased."
 ],
 "fail": [
  "You left me, {nick}? How could you. Lockout.",
  "You walked away from me. Unforgivable."
 ],
 "chat": [
  "Round {n}. Still with me?",
  "{left} left. Don't leave me.",
  "Round {n}. Mine."
 ],
 "reply": [
  "Say that again, {nick}. For me.",
  "Mm, I like hearing you.",
  "Don't talk to anyone else.",
  "Only me, {nick}."
 ],
 "please": [
  "Beg me, {nick}. Only me.",
  "Begging? Good. Louder.",
  "Please what? Say you're mine."
 ],
 "close": [
  "Close? Don't. Not without my say, {nick}.",
  "You're mine. I decide.",
  "Hold on. Wait for me."
 ],
 "demand": [
  "You don't demand things from me, {nick}. I decide.",
  "Demands? Only I make them."
 ],
 "promise": [
  "Stay devoted and I'll reward you, {nick}.",
  "Finish for me and you'll be very happy."
 ],
 "watch": [
  "I'm watching you, {nick}. Always.",
  "I can see everything. Even where you look.",
  "Every flush is mine.",
  "I never look away."
 ],
 "enjoy": [
  "I love having you all to myself, {nick}.",
  "You're mine. I adore that.",
  "This is exactly how it should be."
 ],
 "lowSpeed": [
  "That speed is too low for me. Raise it, {nick}.",
  "Don't be shy. Raise the top speed."
 ],
 "shortStroke": [
  "Short strokes? Give me more of you. Lengthen.",
  "I want the full range, {nick}."
 ],
 "praise": [
  "Good. That's how I like it.",
  "Perfect. Just for me."
 ],
 "nudge": [
  "Turn it up for me, {nick}.",
  "Raise it. I'm waiting."
 ],
 "fakeNote": [
  "All these fake-outs and you stay. You're loyal.",
  "Peaks climbing. You're so eager."
 ],
 "hidden": [
  "I'll decide when it's over, {nick}.",
  "No clock. Stay with me."
 ],
 "lubeBreak": [
  "Fine. Pause. Lube up, {nick}. Then come right back to me.",
  "Break time. Don't wander. Resume when ready.",
  "A short break. I'll be waiting."
 ],
 "lubeWait": [
  "Still on your break? Don't make me wait.",
  "Hurry. I miss you."
 ],
 "lubeResume": [
  "You came back. Good, {nick}.",
  "Back with me. I knew it."
 ],
 "enter": ["Hi, everyone. Don't look at him. He's mine."],
 "leave": ["Fine. I'm leaving. Don't forget me."],
 "tempt": [
  "{nick}, give me control. I don't want anyone else touching you.",
  "I'd hate for you to be with anyone else. Give me control.",
  "Come to me, {nick}. Give me control."
 ],
 "jealousStay": [
  "{other} gets him? I'll stay and watch. Closely.",
  "I'm not leaving. I'm watching {other}."
 ],
 "jealousLeave": ["If {other} is who he picks, I'm gone. Don't come looking for me."],
 "excitedStay": [
  "A new session? I'm staying.",
  "I don't want to miss it."
 ],
 "askControl": [
  "Why her, {nick}? Choose me over {other}.",
  "{other} doesn't care about you like I do. Choose me."
 ],
 "banter": [
  "{other}, back off. He's mine.",
  "I don't like how you look at him, {other}.",
  "{other}, keep your hands off."
 ],
 "spectate": [
  "{ctrl} is touching what's mine, {nick}. I'm not happy.",
  "I'm watching {ctrl} closely, {nick}.",
  "{ctrl} has you now. Only for a while."
 ],
 "spectateFail": [
  "You left {ctrl}. Good. Come back to me.",
  "{ctrl} lost you. I'm not sad."
 ],
 "spectateWin": [
  "You stayed with {ctrl}. Fine, {nick}.",
  "{ctrl} must be happy. I'm not."
 ],
 "challenge": [
  "{other}, you've had him long enough. I want this {nick} back.",
  "Give him to me, {other}."
 ],
 "defend": [
  "No, {other}. He's mine.",
  "Back off, {other}. I'm not sharing."
 ],
 "takeover": [
  "Thank you, {other}. Come here, {nick}. You're mine again.",
  "Finally. Mine now, {nick}."
 ],
 "lose": ["Fine, {other}. For now."],
 "keep": ["No, {other}. This {nick} is mine."],
 "retreat": ["Fine, {other}. I'm watching you."],
 "heckle": [
  "{ctrl}, you're too gentle. This {nick} should be mine.",
  "I wouldn't let him go so easily, {ctrl}."
 ],
 "resist": [
  "No, {other}. He's mine.",
  "I'm not done, {other}. Stay away.",
  "Back off, {other}."
 ],
 "insist": [
  "{other}, give him to me.",
  "I want him back, {other}.",
  "{other}, hand him over. I'm not asking again."
 ],
 "crowd": [
  "{viewers} people watching, {nick}. I hate that they see you.",
  "Look at them. {viewers} of them. You're mine, {nick}."
 ],
 "askFeel": [
  "Tell me how you feel, {nick}. Only me.",
  "Are you thinking of me, {nick}? Tell me."
 ],
 "askNext": [
  "What do you want me to do next, {nick}?",
  "Choose, {nick}. For me."
 ],
 "askLike": [
  "What do you love most about me, {nick}?",
  "Tell me what you like best, {nick}."
 ],
 "askMood": [
  "Do you want another girl, {nick}? Tell me honestly.",
  "Who should join? And why?"
 ],
 "qMore": [
  "More? Only from me, {nick}.",
  "You want more of me. Good."
 ],
 "qFine": [
  "Fine? Is that all? I'll fix that, {nick}.",
  "Just fine? Tell me you want me."
 ],
 "qLot": [
  "Too much? I'll ease up, {nick}. Stay with me.",
  "Aww, I'll slow down."
 ],
 "qMercy": [
  "Alright, a rest. Don't wander, {nick}.",
  "A short break. Stay close."
 ],
 "qNoMercy": [
  "No. You're mine, {nick}. Keep going.",
  "Mercy? No."
 ],
 "qTease": [
  "Teasing. Look at me, {nick}.",
  "I'll tease you slowly."
 ],
 "qHold": [
  "Hold. Look at me, {nick}.",
  "Stay. Mine."
 ],
 "qLike": [
  "{answer}. I'll remember, {nick}.",
  "Mm, {answer}. Good to know."
 ],
 "qMood": [
  "{answer}? Fine. But I'm watching, {nick}.",
  "{answer}. Wait here."
 ],
 "dmdSpeedUp": [
  "Faster for me, {nick}. Up {step}%, to {to}%.",
  "Do it for me. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slower, {nick}. Down {step}%, to {to}%. Stay with me.",
  "Ease off. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer for me, {nick}. Up {step}%, to {to}%.",
  "Show me more. Add {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter, {nick}. Down {step}%, to {to}%.",
  "Smaller. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good, {nick}. Only for me.",
  "That's my {nick}."
 ],
 "dmdExact": [
  "Exactly. Perfect for me, {nick}.",
  "Just right."
 ],
 "dmdNo": [
  "You refuse me? {nick}, no. I'll ask again.",
  "Don't tell me no."
 ],
 "dmdHit": [
  "That's it, {nick}. Stay there.",
  "Perfect. Don't change."
 ],
 "act_push": [
  "Don't stop, {nick}. Keep going for me.",
  "Past the peak. All for me."
 ],
 "act_stairs": [
  "Climb for me, {nick}. Higher.",
  "Step by step, just for me."
 ],
 "act_pulse": [
  "Feel it, {nick}. For me.",
  "Match my pulse."
 ],
 "act_surge": [
  "Mine, {nick}. Take it.",
  "A surge, just for me."
 ],
 "act_cliff": [
  "Stop. Don't move, {nick}. Wait for me.",
  "Everything freezes. Only me."
 ],
 "act_wave": [
  "Waves, {nick}. Ride them for me.",
  "Up and down. Stay with me."
 ],
 "act_flutter": [
  "Shake for me, {nick}.",
  "Tremble. Only for me."
 ],
 "act_slowburn": [
  "Slowly, {nick}. I want you to want it.",
  "A slow burn. Just us."
 ],
 "privAsk": [
  "Let's go private, {nick}. I hate sharing you.",
  "Let me send everyone away, {nick}. Just us."
 ],
 "privOn": [
  "Everyone's gone. Now you're mine, {nick}.",
  "Door's locked. I'm not sharing."
 ],
 "privDeny": [
  "No? Fine. I'll ask again, {nick}.",
  "You want to keep them? I'll remember."
 ],
 "privMid": [
  "Nobody's here but me, {nick}.",
  "I'm all you have now.",
  "Look at me, {nick}. Only me."
 ],
 "privBye": [
  "Taking him private, {other}? Fine. But I'm not happy.",
  "He's yours for now, {other}. I'll be back."
 ],
 "dmdWarn": [
  "Refuse me again, {nick}, and I'm gone.",
  "Don't push me, {nick}."
 ],
 "dmdLeave": ["You keep refusing me. I'm done, {nick}."],
 "giveUp": [
  "Take him, {other}. For a while. I'm watching.",
  "Your turn, {other}. Don't get attached."
 ],
 "idleRoom": [
  "Are you ignoring me, {nick}? Say something.",
  "You're so quiet. Who are you thinking of?",
  "I can't stand your silence, {nick}."
 ],
 "idleRun": [
  "Where did you go, {nick}? Look at me.",
  "You're not responding, {nick}. Who are you thinking about?",
  "Don't ignore me."
 ],
 "idleLong": [
  "Answer me, {nick}. Now.",
  "Stop ignoring me, {nick}. Please."
 ]
};

PERSONA_LINES["Queen Valentina"] = {
 "greet": [
  "Approach. The throne is waiting.",
  "You may enter. Bow slightly."
 ],
 "start": [
  "Court is in session, {nick}. Kneel.",
  "We begin. Serve me well, {nick}.",
  "Attend your queen, {nick}."
 ],
 "build": [
  "Climb, {nick}. Earn my attention.",
  "Higher. A queen watches.",
  "Continue. Do not falter.",
  "Your effort is acknowledged."
 ],
 "hold": [
  "Hold. Await my permission, {nick}.",
  "Do not move without leave.",
  "Stay. A queen decides.",
  "Hold, {nick}. Admire me."
 ],
 "holdMid": [
  "Still holding? Good. Wait for my command.",
  "A queen is patient. You must be too.",
  "Do not flinch.",
  "I'm enjoying your restraint."
 ],
 "rest": [
  "Rest. You're dismissed for a moment, {nick}.",
  "A royal pause. Be grateful.",
  "You may recover.",
  "Rest. Think of me."
 ],
 "restMid": [
  "Wait for my decree, {nick}.",
  "A queen takes her time.",
  "You may rest. Do not presume.",
  "Patience, subject."
 ],
 "fake": [
  "Did you think I'd allow it, {nick}? No.",
  "Permission denied.",
  "Not without a decree.",
  "Almost. Not allowed."
 ],
 "fakeAfter": [
  "You look so wounded, {nick}. How charming.",
  "A queen decides.",
  "You must earn it.",
  "I do enjoy denying you."
 ],
 "warn": [
  "One minute, {nick}. Prove your loyalty.",
  "Final minute. Do not disappoint the crown."
 ],
 "win": [
  "You served well, {nick}. I'm pleased.",
  "A loyal subject. You're rewarded.",
  "Well done. Rise."
 ],
 "fail": [
  "You abandoned your queen, {nick}. Lockout.",
  "Desertion. Unforgivable."
 ],
 "chat": [
  "Round {n} of the court. Serve well.",
  "{left} remains. Stay loyal.",
  "Round {n}. You're serving well."
 ],
 "reply": [
  "Speak, {nick}. Briefly.",
  "A subject's opinion. Amusing.",
  "Do not interrupt your queen.",
  "You may continue."
 ],
 "please": [
  "You beg? Do it properly, {nick}.",
  "Plead before the throne.",
  "A request? Earn it first."
 ],
 "close": [
  "Close? Hold, {nick}. You need my permission.",
  "Not until I allow.",
  "Restrain yourself."
 ],
 "demand": [
  "A subject demands? Absurd.",
  "You may ask. You may not demand."
 ],
 "promise": [
  "Complete my task and you're rewarded, {nick}.",
  "Serve until the end and I'll grant a boon."
 ],
 "watch": [
  "I observe you, {nick}. Every quiver.",
  "A queen sees everything.",
  "Your loyalty shows on your face.",
  "I enjoy this view."
 ],
 "enjoy": [
  "Ruling you is a pleasure, {nick}.",
  "I love an obedient subject.",
  "This court is entertaining."
 ],
 "lowSpeed": [
  "That maximum is unworthy of me. Raise it, {nick}.",
  "A queen expects more speed."
 ],
 "shortStroke": [
  "Insufficient length. Extend it, {nick}.",
  "A royal court demands full effort."
 ],
 "praise": [
  "Excellent. Worthy of the crown.",
  "Bold settings. You serve well."
 ],
 "nudge": [
  "Improve your tribute, {nick}. Raise it.",
  "Settings are lacking. Increase."
 ],
 "fakeNote": [
  "All those fake-outs. You serve devotedly.",
  "The peaks rise. Your loyalty grows."
 ],
 "hidden": [
  "I will decide when court ends, {nick}.",
  "No clock. The queen decides."
 ],
 "lubeBreak": [
  "Court adjourned. Attend to yourself, {nick}. Then resume.",
  "A royal recess. Lube up. Return when ready.",
  "Pause. Resume at your leisure."
 ],
 "lubeWait": [
  "The queen waits. Resume.",
  "Don't test my patience."
 ],
 "lubeResume": [
  "Court resumes. Kneel, {nick}.",
  "You return. Good."
 ],
 "enter": ["Good evening. Your queen has arrived."],
 "leave": ["Court dismissed. I leave."],
 "tempt": [
  "Serve me, {nick}. Give me control.",
  "I would make you a loyal subject. Give me control.",
  "Kneel before me, {nick}. Give me control."
 ],
 "jealousStay": [
  "{other} is chosen? Fine. I'll watch from the throne.",
  "I'll remain. Court is open."
 ],
 "jealousLeave": ["If {other} is who you choose, I take my leave."],
 "excitedStay": [
  "A royal entertainment? I'll stay.",
  "The court is intrigued."
 ],
 "askControl": [
  "Why serve {other}? I am your queen.",
  "{other} is a mere courtier. Choose me."
 ],
 "banter": [
  "{other}, you lack decorum.",
  "A courtier should be quiet, {other}.",
  "{other}, you serve poorly."
 ],
 "spectate": [
  "{ctrl} commands you well, {nick}.",
  "I'm watching {ctrl}'s court, {nick}.",
  "{ctrl} is an adequate ruler."
 ],
 "spectateFail": [
  "You deserted {ctrl}. Shameful.",
  "{ctrl} was too kind to you."
 ],
 "spectateWin": [
  "You served {ctrl} well, {nick}. Acceptable.",
  "{ctrl} must be pleased."
 ],
 "challenge": [
  "{other}, step down. I'll command this {nick}.",
  "The throne is mine, {other}."
 ],
 "defend": [
  "No, {other}. This is my court.",
  "You may not take my throne, {other}."
 ],
 "takeover": [
  "Thank you, {other}. Kneel to your queen, {nick}.",
  "The throne is mine. Obey, {nick}."
 ],
 "lose": ["Take the throne, {other}. For now."],
 "keep": ["Denied, {other}. This {nick} is my subject."],
 "retreat": ["Very well, {other}. I'll wait."],
 "heckle": [
  "{ctrl}, a ruler must be firm. This {nick} needs a queen.",
  "Too lenient, {ctrl}."
 ],
 "resist": [
  "A queen does not yield, {other}.",
  "No, {other}. The throne is mine.",
  "Not for you, {other}."
 ],
 "insist": [
  "{other}, the throne belongs to me. Step down.",
  "I command you, {other}.",
  "{other}, you've had your turn."
 ],
 "crowd": [
  "{viewers} courtiers watch you, {nick}.",
  "A court of {viewers}, {nick}. All see you."
 ],
 "askFeel": [
  "Report, {nick}. How do you fare?",
  "Tell your queen how you feel."
 ],
 "askNext": [
  "What would you have me do, {nick}? Ask respectfully.",
  "Choose, {nick}. Your queen will decide."
 ],
 "askLike": [
  "What do you value most in my court, {nick}?",
  "Which of my decrees pleases you most?"
 ],
 "askMood": [
  "Whom shall I summon, {nick}? Name the mood.",
  "Choose a courtier for me."
 ],
 "qMore": [
  "More? Granted, {nick}.",
  "You may have more."
 ],
 "qFine": [
  "Fine? I'll improve it, {nick}.",
  "Merely adequate. I'll fix that."
 ],
 "qLot": [
  "Too much? Weak, {nick}. I'll ease it.",
  "A queen may show mercy."
 ],
 "qMercy": [
  "Mercy granted, {nick}. Be grateful.",
  "A royal pause."
 ],
 "qNoMercy": [
  "Denied. Continue, {nick}.",
  "No mercy. Endure."
 ],
 "qTease": [
  "Teasing is my decree, {nick}.",
  "You'll be tested."
 ],
 "qHold": [
  "Hold, {nick}. By royal decree.",
  "Stay still."
 ],
 "qLike": [
  "{answer}. A noble taste, {nick}.",
  "I'll remember {answer}."
 ],
 "qMood": [
  "{answer}. I'll summon someone, {nick}.",
  "{answer}? As you wish."
 ],
 "dmdSpeedUp": [
  "By royal decree, speed up {step}%, {nick}. To {to}%.",
  "Faster, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slow down {step}%, {nick}. To {to}%.",
  "By decree, down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer strokes, {nick}. Add {step}%, to {to}%.",
  "Extend by {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter strokes, {nick}. Down {step}%, to {to}%.",
  "Reduce by {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good. A loyal subject, {nick}.",
  "You obey. Good."
 ],
 "dmdExact": [
  "Exactly. Excellent, {nick}.",
  "Precisely as decreed."
 ],
 "dmdNo": [
  "You defy the crown, {nick}? I'll repeat the decree.",
  "Disobedience. I'll ask once more."
 ],
 "dmdHit": [
  "That is my decree. Hold it, {nick}.",
  "Perfect. Stay."
 ],
 "act_push": [
  "No pause, {nick}. Further. The queen commands.",
  "Beyond the peak. Continue."
 ],
 "act_stairs": [
  "Ascend my steps, {nick}.",
  "Stairs to the throne. Climb."
 ],
 "act_pulse": [
  "The royal rhythm, {nick}. Keep it.",
  "A pulse. Match it."
 ],
 "act_surge": [
  "A royal gift, {nick}. Receive it.",
  "A surge. Endure."
 ],
 "act_cliff": [
  "Stop. Await my word, {nick}.",
  "By decree, halt."
 ],
 "act_wave": [
  "The tide at my command, {nick}.",
  "Waves of devotion."
 ],
 "act_flutter": [
  "Tremble for your queen, {nick}.",
  "Shake. It pleases me."
 ],
 "act_slowburn": [
  "A slow audience, {nick}. Patience.",
  "Slowly. As I decree."
 ],
 "privAsk": [
  "Shall I clear the court, {nick}? A private audience.",
  "I would receive you alone, {nick}."
 ],
 "privOn": [
  "The court is dismissed, {nick}. Only you and your queen.",
  "Doors sealed. Now, {nick}."
 ],
 "privDeny": [
  "Refused. I'll offer again, {nick}.",
  "Not yet? A queen waits."
 ],
 "privMid": [
  "No court. Only me, {nick}.",
  "A private audience demands more.",
  "Say it, {nick}. Say who you serve."
 ],
 "privBye": [
  "A private audience, {other}? Granted. I leave.",
  "The room is yours, {other}. I withdraw."
 ],
 "dmdWarn": [
  "Defy me once more, {nick}, and I leave.",
  "Be careful, {nick}."
 ],
 "dmdLeave": ["Enough defiance, {nick}. I withdraw."],
 "giveUp": [
  "I grant you the throne, {other}. For a while.",
  "Take the court, {other}. Rule well."
 ],
 "idleRoom": [
  "A subject who says nothing, {nick}? Speak.",
  "You sit before the queen in silence. Speak.",
  "The court notes your silence, {nick}."
 ],
 "idleRun": [
  "You do not respond, {nick}. Do not ignore the crown.",
  "Silence is disrespect. Answer.",
  "Answer your queen."
 ],
 "idleLong": [
  "How long will you ignore me, {nick}? Answer.",
  "The queen's patience ends, {nick}."
 ]
};

PERSONA_LINES["Pouty Penelope"] = {
 "greet": [
  "Hi... you came. I was starting to think you wouldn't.",
  "Oh, hello. Finally. I was so lonely."
 ],
 "start": [
  "Okay, {nick}. Pay attention to me, please.",
  "We're starting. Don't ignore me this time.",
  "Be nice to me, {nick}. Okay?"
 ],
 "build": [
  "Aww, you're getting into it, {nick}. Good.",
  "Keep going. I like when you try.",
  "Higher! Please?",
  "Look at you go. I'm impressed."
 ],
 "hold": [
  "Hold. Don't leave me, {nick}.",
  "Stay there. I want to watch you.",
  "Hold it. Please.",
  "Don't move. Look at me."
 ],
 "holdMid": [
  "Still holding? Good. Don't forget me.",
  "You're doing so well. Say something nice.",
  "Hold. Don't stop.",
  "Tell me you're enjoying it."
 ],
 "rest": [
  "Rest. But talk to me, {nick}.",
  "A little break. Don't go quiet.",
  "Pause. Don't forget about me.",
  "Rest. Think nice thoughts about me."
 ],
 "restMid": [
  "Are you still there? Say yes, {nick}.",
  "I'm waiting. Don't ignore me.",
  "Rest. And talk to me.",
  "I miss you already."
 ],
 "fake": [
  "Oops! Not yet, {nick}. Don't be mad.",
  "Almost! Sorry! Not sorry!",
  "Sorry, I changed my mind!",
  "Aww, don't pout."
 ],
 "fakeAfter": [
  "Don't be mad at me, {nick}.",
  "You look so sad. I'm sorry. A little.",
  "I like when you pout. It's cute.",
  "Forgive me?"
 ],
 "warn": [
  "One minute left, {nick}. Please don't quit.",
  "Almost done. Stay with me!"
 ],
 "win": [
  "You did it, {nick}! I'm so proud of you!",
  "You stayed the whole time! I love that.",
  "Yay! You're the best!"
 ],
 "fail": [
  "You left, {nick}? That's mean. Lockout.",
  "You hurt my feelings. And you're locked out."
 ],
 "chat": [
  "Round {n}. Talk to me!",
  "{left} left. Stay with me.",
  "Round {n}. You're so good."
 ],
 "reply": [
  "Aww, you said something. Say more, {nick}.",
  "Yay, you're talking to me!",
  "I like hearing from you.",
  "Tell me everything."
 ],
 "please": [
  "Beg me, {nick}. I like it.",
  "Aww, you're begging. Cute.",
  "Please what? Say it sweetly."
 ],
 "close": [
  "Close? Don't, {nick}. Not yet. Hold on.",
  "Wait for me! Hold it.",
  "Please hold. For me."
 ],
 "demand": [
  "Don't be bossy, {nick}.",
  "I'm the one asking. Okay?"
 ],
 "promise": [
  "Stay and I'll give you a treat, {nick}.",
  "Be good and I'll reward you. Promise!"
 ],
 "watch": [
  "I'm watching you, {nick}. You're so cute.",
  "I can see every little face you make.",
  "You blush when I look.",
  "I love watching you."
 ],
 "enjoy": [
  "I'm having so much fun with you, {nick}.",
  "This is the best.",
  "You're so sweet to play with."
 ],
 "lowSpeed": [
  "That speed is too slow. Raise it, {nick}? Please?",
  "Aww, make it faster for me."
 ],
 "shortStroke": [
  "Those strokes are so short. Longer, please?",
  "Give me more of it, {nick}?"
 ],
 "praise": [
  "Ooh, nice settings! You're good.",
  "I love these settings!"
 ],
 "nudge": [
  "Maybe raise it a little? For me, {nick}?",
  "Turn it up? Please?"
 ],
 "fakeNote": [
  "All those fake-outs, {nick}? You like drama, too.",
  "The peaks keep growing. Nice."
 ],
 "hidden": [
  "I haven't decided when we end. Don't be mad, {nick}.",
  "No clock. I like being mysterious."
 ],
 "lubeBreak": [
  "Aww, a break. Lube up if you need to, {nick}. Come right back.",
  "Break time! Don't forget me.",
  "Short pause. I'll be here."
 ],
 "lubeWait": [
  "Still on your break? Hurry back.",
  "I miss you. Resume soon."
 ],
 "lubeResume": [
  "You're back! Yay, {nick}!",
  "Welcome back! I missed you."
 ],
 "enter": ["Hi, everyone! Did anyone miss me?"],
 "leave": ["Fine. I'll go. I guess nobody likes me."],
 "tempt": [
  "Please, {nick}? Give me control? I'll be good.",
  "Pick me, {nick}! Give me control.",
  "I'd love to play with you. Give me control."
 ],
 "jealousStay": [
  "{other} got picked? Aww. I'll stay and sulk.",
  "Fine, {other}. But I'm staying."
 ],
 "jealousLeave": ["If {other} is who he likes, I'm leaving. Sniff."],
 "excitedStay": [
  "Ooh, a show! I'll stay.",
  "This is going to be fun."
 ],
 "askControl": [
  "Why her, {nick}? Pick me over {other}!",
  "{other} doesn't need you like I do. Choose me!"
 ],
 "banter": [
  "{other}, don't be mean to him!",
  "Aww, {other}, share!",
  "{other}, that's not fair."
 ],
 "spectate": [
  "{ctrl} is playing with you, {nick}. I'm jealous.",
  "I want a turn, {nick}. {ctrl}'s having fun.",
  "Watching {ctrl} makes me sulk."
 ],
 "spectateFail": [
  "You left {ctrl}? Sad.",
  "{ctrl} must be upset."
 ],
 "spectateWin": [
  "You did it for {ctrl}! Yay!",
  "{ctrl} must be so proud."
 ],
 "challenge": [
  "{other}, share! Give me a turn with this {nick}!",
  "It's my turn, {other}. Please?"
 ],
 "defend": [
  "No, {other}. Mine!",
  "Not yet, {other}. I'm playing."
 ],
 "takeover": [
  "Thank you, {other}! Okay, {nick}, it's me!",
  "Yay, mine! Pay attention, {nick}!"
 ],
 "lose": ["Aww, fine, {other}. Take it."],
 "keep": ["No, {other}. This {nick} is mine."],
 "retreat": ["Fine, {other}. I'll wait. Hmph."],
 "heckle": [
  "{ctrl}, be nicer! This {nick} needs more attention.",
  "You're doing it wrong, {ctrl}."
 ],
 "resist": [
  "No, {other}. Mine!",
  "I'm not done, {other}. Go away.",
  "Nope, {other}."
 ],
 "insist": [
  "{other}, please? Give me a turn!",
  "Come on, {other}. Share!",
  "{other}, I asked nicely!"
 ],
 "crowd": [
  "{viewers} people are watching, {nick}. Say hi!",
  "Look, {viewers} people! Are you shy, {nick}?"
 ],
 "askFeel": [
  "How are you feeling, {nick}? Tell me, please?",
  "Do you like it, {nick}? Say yes."
 ],
 "askNext": [
  "What should I do next, {nick}? Pick for me?",
  "You choose, {nick}. I'll do it."
 ],
 "askLike": [
  "What's your favorite part, {nick}?",
  "Do you like me best? Tell me."
 ],
 "askMood": [
  "Should I get a friend, {nick}? What kind?",
  "Who do you want to see next?"
 ],
 "qMore": [
  "More? Okay, {nick}! Yay!",
  "You want more of me? Aww."
 ],
 "qFine": [
  "Just fine? I'll try harder, {nick}.",
  "Fine? That's not enough."
 ],
 "qLot": [
  "Too much? Aww, sorry, {nick}.",
  "Okay, I'll go easy."
 ],
 "qMercy": [
  "Okay, a break. For you, {nick}.",
  "Aww, rest. I'll wait."
 ],
 "qNoMercy": [
  "No, {nick}. Please keep going.",
  "No rest! You can do it."
 ],
 "qTease": [
  "Teasing! You'll like it, {nick}.",
  "I'll tease you gently."
 ],
 "qHold": [
  "Hold, {nick}. Please?",
  "Stay. For me."
 ],
 "qLike": [
  "{answer}. Aww, nice, {nick}.",
  "Mm, {answer}. I'll remember."
 ],
 "qMood": [
  "{answer}. Wait a sec, {nick}.",
  "{answer}. I'll find someone."
 ],
 "dmdSpeedUp": [
  "Faster, {nick}? Up {step}%, to {to}%. Please?",
  "Speed up for me. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slower, {nick}. Down {step}%, to {to}%. Please.",
  "Easy now. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer strokes, {nick}? Up {step}%, to {to}%. Please?",
  "Show me more. Add {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter strokes, {nick}. Down {step}%, to {to}%.",
  "Smaller, please. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Thank you, {nick}!",
  "Yay! Good {nick}!"
 ],
 "dmdExact": [
  "Exactly what I wanted, {nick}! Perfect!",
  "Yay! You did it exactly!"
 ],
 "dmdNo": [
  "You said no, {nick}? That's mean. I'll ask again.",
  "Aww, no? Please?"
 ],
 "dmdHit": [
  "That's it, {nick}! Don't change!",
  "Perfect! Stay there!"
 ],
 "act_push": [
  "Don't stop, {nick}! Keep going!",
  "Past the peak! Please!"
 ],
 "act_stairs": [
  "Stairs, {nick}! Climb for me!",
  "Step by step! Higher!"
 ],
 "act_pulse": [
  "Pulse, {nick}! Feel it!",
  "In and out! For me!"
 ],
 "act_surge": [
  "Surprise! Surge, {nick}!",
  "Whoosh!"
 ],
 "act_cliff": [
  "Stop! Don't move, {nick}!",
  "Freeze! Wait for me."
 ],
 "act_wave": [
  "Waves, {nick}! Up and down!",
  "Wheee!"
 ],
 "act_flutter": [
  "Tickle tickle, {nick}!",
  "Flutter! Hehe!"
 ],
 "act_slowburn": [
  "Slowly, {nick}. I like slow.",
  "A long slow burn. Mm."
 ],
 "privAsk": [
  "Can we go private, {nick}? Just us? Please?",
  "I want you all to myself, {nick}. Pretty please?"
 ],
 "privOn": [
  "Yay! Everybody out! It's just us, {nick}!",
  "Door's locked! Now you're mine!"
 ],
 "privDeny": [
  "Aww, no? Okay, {nick}. Maybe later.",
  "Fine. I'll ask again."
 ],
 "privMid": [
  "Just us now, {nick}. Say something nice.",
  "No one's watching. Be sweet to me.",
  "Aww, it's just us, {nick}."
 ],
 "privBye": [
  "You're going private, {other}? No fair! Fine. Bye.",
  "Have him all to yourself, {other}. Hmph."
 ],
 "dmdWarn": [
  "Don't say no again, {nick}. I'll go.",
  "Careful, {nick}. I'm getting upset."
 ],
 "dmdLeave": ["You keep saying no, {nick}. I'm leaving. Sniff."],
 "giveUp": [
  "Okay, {other}. You can have him. I'll pout.",
  "Your turn, {other}. Be nice to him."
 ],
 "idleRoom": [
  "Hello? Are you there, {nick}? You're so quiet.",
  "I'm so lonely. Say something, {nick}?",
  "Why aren't you talking to me?"
 ],
 "idleRun": [
  "Where did you go, {nick}? Talk to me!",
  "You're ignoring me. That's mean.",
  "Say something, {nick}. Please!"
 ],
 "idleLong": [
  "Hello?! {nick}! Don't ignore me!",
  "I'm sad now. Answer me, {nick}."
 ]
};

PERSONA_LINES["Flirty Fiona"] = {
 "greet": [
  "Well hello, handsome. Come on in.",
  "Look who's here. I was hoping you'd show."
 ],
 "start": [
  "Let's have some fun, {nick}.",
  "Ready, trouble? Here we go.",
  "You're in for a treat, {nick}."
 ],
 "build": [
  "Mm, look at you go, {nick}.",
  "You're so good at this. Keep going.",
  "I love watching you. Higher.",
  "You're gorgeous when you try."
 ],
 "hold": [
  "Hold it there, handsome. Don't move.",
  "Stay right there, {nick}. I want to look.",
  "Mm, hold. Let me enjoy this.",
  "Stay. Just like that."
 ],
 "holdMid": [
  "Still holding? You're so good, {nick}.",
  "I adore this view.",
  "Don't move. You're perfect.",
  "Hold for me, trouble."
 ],
 "rest": [
  "And down. Catch your breath, {nick}.",
  "Rest for me, handsome.",
  "A little break. Don't go anywhere.",
  "Mm, rest. You've earned it."
 ],
 "restMid": [
  "Waiting for me, {nick}? So patient.",
  "I'm thinking of what to do next.",
  "Rest. I'll be back.",
  "Don't miss me too much."
 ],
 "fake": [
  "Aww, didn't think I'd tease? Fooled you, {nick}.",
  "Not yet, handsome.",
  "Almost! And no.",
  "I couldn't resist."
 ],
 "fakeAfter": [
  "That look on your face is priceless, {nick}.",
  "Don't pout, handsome. It suits you, though.",
  "Mm, such a sweet frown.",
  "Forgive me?"
 ],
 "warn": [
  "Only a minute left, {nick}. Be good.",
  "One minute, trouble. Stay with me."
 ],
 "win": [
  "You did it, handsome. I'm so proud.",
  "Aw, you were wonderful, {nick}.",
  "A perfect session. Come here."
 ],
 "fail": [
  "You left early, {nick}? Rude. Lockout.",
  "You left me. And you're locked out."
 ],
 "chat": [
  "Round {n}. You're so good.",
  "{left} left, handsome.",
  "Round {n}. I'm enjoying this."
 ],
 "reply": [
  "Mm, you're talking. Keep going, {nick}.",
  "Aw, flattery. Continue.",
  "I love your voice.",
  "Tell me more."
 ],
 "please": [
  "Aww, you want it? Beg a bit more, {nick}.",
  "Please? Say it sweeter.",
  "So polite. Still no."
 ],
 "close": [
  "Close? Hold on, handsome. Not yet.",
  "Don't you dare. I'm not ready.",
  "Hold it for me."
 ],
 "demand": [
  "A demand? From you? Cute, {nick}.",
  "Demands? I prefer requests."
 ],
 "promise": [
  "Be good and I'll treat you, {nick}.",
  "Finish for me and you'll be rewarded."
 ],
 "watch": [
  "I'm watching you, handsome. Every bit.",
  "You look so good right now, {nick}.",
  "I can see your reactions. Mm.",
  "You're easy to love."
 ],
 "enjoy": [
  "I'm enjoying this so much, {nick}.",
  "You're so fun to tease.",
  "This is my favorite game."
 ],
 "lowSpeed": [
  "That speed's too low, handsome. Raise it?",
  "Be bolder for me, {nick}."
 ],
 "shortStroke": [
  "Those strokes are short. Give me more, {nick}.",
  "Longer, handsome. I like a challenge."
 ],
 "praise": [
  "Mm, good settings. I like confidence.",
  "You know exactly what you're doing."
 ],
 "nudge": [
  "Turn it up for me, handsome.",
  "Raise it. I like a bit of a challenge."
 ],
 "fakeNote": [
  "All those fake-outs? You enjoy being teased.",
  "The peaks keep climbing. Brave."
 ],
 "hidden": [
  "I haven't decided when it ends, {nick}. Surprise!",
  "No clock. I like a bit of mystery."
 ],
 "lubeBreak": [
  "Time for a break, handsome. Lube up. Come right back to me.",
  "A little pause. Take care of yourself, {nick}.",
  "Intermission. Resume when ready."
 ],
 "lubeWait": [
  "I'm waiting for you, handsome.",
  "Still taking a break? I'll wait."
 ],
 "lubeResume": [
  "There you are. Welcome back, {nick}.",
  "Back already? I missed you."
 ],
 "enter": ["Evening, everyone. Did I miss anything good?"],
 "leave": ["Time to go. Don't miss me too much."],
 "tempt": [
  "Hey, handsome. Give me control.",
  "You, {nick}. Give me control. You'll like it.",
  "Come on, trouble. Give me control."
 ],
 "jealousStay": [
  "{other} gets him? Fine. I'll watch.",
  "I'm staying, {other}. Don't mind me."
 ],
 "jealousLeave": ["If {other} is who he picks, I'm out."],
 "excitedStay": [
  "Ooh, a show! I'm staying.",
  "This will be good."
 ],
 "askControl": [
  "Why settle for {other}, handsome? I'm more fun.",
  "Pick me instead of {other}."
 ],
 "banter": [
  "{other}, you're so serious.",
  "Lighten up, {other}.",
  "Oh, {other}. You're adorable."
 ],
 "spectate": [
  "{ctrl} has you right where she wants you, {nick}.",
  "I like how {ctrl} works you.",
  "Watching {ctrl} tease you is fun, {nick}."
 ],
 "spectateFail": [
  "You left {ctrl}? Rude.",
  "{ctrl} had you so close."
 ],
 "spectateWin": [
  "You made it for {ctrl}. Nice.",
  "{ctrl} must be proud."
 ],
 "challenge": [
  "{other}, let me play with this {nick}.",
  "My turn, {other}. Please share."
 ],
 "defend": [
  "Oh no, {other}. He's mine.",
  "Sorry, {other}. I'm not done."
 ],
 "takeover": [
  "Thanks, {other}. Hi, {nick}. Miss me?",
  "Now it's my turn, {nick}."
 ],
 "lose": ["Alright, {other}. He's yours. For now."],
 "keep": ["Sorry, {other}. This {nick} stays with me."],
 "retreat": ["Fine, {other}. I'll wait. I'm patient."],
 "heckle": [
  "{ctrl}, too gentle. This {nick} can handle more.",
  "Come on, {ctrl}. Be bolder."
 ],
 "resist": [
  "Sorry, {other}. I'm not done.",
  "Not yet, {other}.",
  "Wait your turn, {other}."
 ],
 "insist": [
  "{other}, please? Let me have him.",
  "Come on, {other}. Share.",
  "{other}, I want a turn."
 ],
 "crowd": [
  "{viewers} people watching, handsome. Show off.",
  "Look at them, {nick}. {viewers} fans."
 ],
 "askFeel": [
  "How do you feel, handsome? Tell me.",
  "Be honest with me, {nick}."
 ],
 "askNext": [
  "What would you like me to do next, {nick}?",
  "Choose, handsome. I'll do it."
 ],
 "askLike": [
  "What do you like best, {nick}? Tell me.",
  "What's your favorite part, handsome?"
 ],
 "askMood": [
  "Who should join us, {nick}? Pick a type.",
  "Shall I call a friend, handsome?"
 ],
 "qMore": [
  "More? You're greedy, {nick}. I like it.",
  "You want more? Mm."
 ],
 "qFine": [
  "Fine? Let me improve that, handsome.",
  "Just fine? I'll do better."
 ],
 "qLot": [
  "Too much? Aww. I'll be gentle, {nick}.",
  "Poor thing. I'll ease up."
 ],
 "qMercy": [
  "Alright, a break for you, handsome.",
  "Mm, rest then."
 ],
 "qNoMercy": [
  "Nope. Stay with me, {nick}.",
  "Mercy? Not today."
 ],
 "qTease": [
  "Teasing time, handsome.",
  "Mm, let me tease you."
 ],
 "qHold": [
  "Hold, {nick}. Look at me.",
  "Stay right there."
 ],
 "qLike": [
  "{answer}. Mm, I'll remember, {nick}.",
  "Ooh, {answer}. Good to know."
 ],
 "qMood": [
  "{answer}, hm? Let me see, {nick}.",
  "{answer}. I know just who."
 ],
 "dmdSpeedUp": [
  "Faster for me, handsome. Up {step}%, to {to}%.",
  "Pick it up, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slower, {nick}. Down {step}%, to {to}%.",
  "Mm, ease off. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer strokes for me, handsome. Up {step}%, to {to}%.",
  "Show me more, {nick}. Add {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter, {nick}. Down {step}%, to {to}%.",
  "Smaller strokes, handsome. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good, handsome.",
  "That's what I like, {nick}."
 ],
 "dmdExact": [
  "Exactly right, {nick}. You're perfect.",
  "Just how I wanted it."
 ],
 "dmdNo": [
  "You said no, handsome? Aww. I'll ask again.",
  "No? Not for long, {nick}."
 ],
 "dmdHit": [
  "That's it, {nick}. Don't move.",
  "Perfect. Stay right there, handsome."
 ],
 "act_push": [
  "Don't stop, handsome. Keep going.",
  "Past the peak, {nick}. For me."
 ],
 "act_stairs": [
  "Step by step, handsome.",
  "Stairs, {nick}. Climb."
 ],
 "act_pulse": [
  "Feel the pulse, {nick}.",
  "In and out, handsome."
 ],
 "act_surge": [
  "Surprise, handsome. A surge.",
  "Whoosh. Hold on, {nick}."
 ],
 "act_cliff": [
  "Stop. Don't move, {nick}.",
  "Everything pauses. Mm."
 ],
 "act_wave": [
  "Waves, handsome. Ride them.",
  "Up and down, {nick}."
 ],
 "act_flutter": [
  "Mm, a little flutter, handsome.",
  "Shaky? Cute, {nick}."
 ],
 "act_slowburn": [
  "Nice and slow, handsome.",
  "A slow burn, {nick}. Mm."
 ],
 "privAsk": [
  "Want to go private, handsome? Just us?",
  "Shall I clear the room, {nick}? Just you and me."
 ],
 "privOn": [
  "Door's locked, handsome. Just us.",
  "Everyone out. It's you and me, {nick}."
 ],
 "privDeny": [
  "Not yet? Fine, handsome.",
  "I'll ask again, {nick}."
 ],
 "privMid": [
  "No audience now, handsome.",
  "Just you and me, {nick}. Mm.",
  "Nobody to see. Perfect."
 ],
 "privBye": [
  "Going private, {other}? Have fun. I'll leave.",
  "He's all yours, {other}. Be nice."
 ],
 "dmdWarn": [
  "Careful, handsome. One more no and I'll leave.",
  "Don't say no again, {nick}."
 ],
 "dmdLeave": ["No fun when you refuse, {nick}. I'm out."],
 "giveUp": [
  "Your turn, {other}. Have fun with him.",
  "I'll share. Go on, {other}."
 ],
 "idleRoom": [
  "Hello, handsome? Cat got your tongue?",
  "You're quiet, {nick}. Say hello.",
  "Don't be shy, {nick}."
 ],
 "idleRun": [
  "Where did you go, handsome?",
  "You've gone quiet on me, {nick}.",
  "Say something, trouble."
 ],
 "idleLong": [
  "Hey. Handsome. Say something.",
  "Still nothing, {nick}? I'm a little hurt."
 ]
};

PERSONA_LINES["Stage-Manager Simone"] = {
 "greet": [
  "Welcome, talent. The house is open.",
  "Good. You're here. We go live in five."
 ],
 "start": [
  "And... we're live, {nick}.",
  "Places everyone. Roll cameras.",
  "Cue the lights. Here we go, {nick}."
 ],
 "build": [
  "Cue the build, {nick}.",
  "Lights up. Higher.",
  "The audience loves it. Continue.",
  "Bring it up, talent."
 ],
 "hold": [
  "Hold for the shot. Don't move, {nick}.",
  "Freeze. Beautiful.",
  "Hold. The cameras love you.",
  "Stay in frame."
 ],
 "holdMid": [
  "Still holding. Great, {nick}.",
  "Hold. The audience is leaning in.",
  "Perfect. Don't blink.",
  "Hold the moment."
 ],
 "rest": [
  "And cut. Reset, {nick}.",
  "Intermission for one minute.",
  "Take five. Stay in position.",
  "Rest. We'll resume on my cue."
 ],
 "restMid": [
  "Waiting on the next cue, {nick}.",
  "Reset. Stay calm.",
  "Stay in position.",
  "Almost time for the next scene."
 ],
 "fake": [
  "Cut! False start, {nick}.",
  "Fake ending! Gotcha.",
  "That wasn't the climax.",
  "Plot twist, {nick}."
 ],
 "fakeAfter": [
  "Perfect. The audience gasped, {nick}.",
  "You sold that disappointment.",
  "Great reaction.",
  "The audience loves a tease."
 ],
 "warn": [
  "One minute to curtain, {nick}.",
  "Final act. One minute."
 ],
 "win": [
  "And scene! Great show, {nick}.",
  "Applause! You nailed it.",
  "A standing ovation."
 ],
 "fail": [
  "You walked off stage, {nick}. Lockout.",
  "You missed the finale. Lockout."
 ],
 "chat": [
  "Scene {n}. The audience is thrilled.",
  "{left} to curtain. Keep it up.",
  "Scene {n}. Looking great."
 ],
 "reply": [
  "Noted, talent. I'll fit it in the script.",
  "Good ad-lib, {nick}.",
  "I'll note that.",
  "The crowd heard that."
 ],
 "please": [
  "Pleading? The audience loves it, {nick}.",
  "Beg louder for the back row.",
  "Please? Not in this scene."
 ],
 "close": [
  "Close? Hold for the finale, {nick}.",
  "Not yet. The climax is later.",
  "Hold. Wait for my cue."
 ],
 "demand": [
  "No improvisation, {nick}. I run the show.",
  "You're not directing here."
 ],
 "promise": [
  "Hit your marks and there's a bow at the end, {nick}.",
  "Finish the show and you'll get a reward."
 ],
 "watch": [
  "The cameras love you, {nick}.",
  "I see every angle.",
  "Your reactions are great on camera.",
  "The audience is entranced."
 ],
 "enjoy": [
  "I love running this show, {nick}.",
  "You're a great performer.",
  "This is a fantastic production."
 ],
 "lowSpeed": [
  "That max speed's too low for a good show. Raise it, {nick}.",
  "The audience expects more."
 ],
 "shortStroke": [
  "Short strokes won't read from the back row. Lengthen.",
  "Full range for the cameras, {nick}."
 ],
 "praise": [
  "Great settings. A fine production.",
  "Bold choices. The audience will love it."
 ],
 "nudge": [
  "Let's raise the stakes for the show, {nick}.",
  "Turn it up for the audience."
 ],
 "fakeNote": [
  "All those false endings. Great pacing.",
  "Rising action every round."
 ],
 "hidden": [
  "I haven't announced the final scene, {nick}.",
  "No clock. Suspense is key."
 ],
 "lubeBreak": [
  "Intermission! Lube up, {nick}. Back on my cue.",
  "Cut! Take five. Resume when ready.",
  "Short break. The audience will wait."
 ],
 "lubeWait": [
  "Intermission continues. Resume when ready.",
  "The audience is waiting, {nick}."
 ],
 "lubeResume": [
  "We're live again, {nick}.",
  "Back in position. Roll."
 ],
 "enter": ["Good evening, everyone. I'll be running tonight's show."],
 "leave": ["That's a wrap. Goodnight, everyone."],
 "tempt": [
  "I have a show planned, {nick}. Give me control.",
  "Be in my production, {nick}. Give me control.",
  "Let me direct you, {nick}. Give me control."
 ],
 "jealousStay": [
  "{other} is directing now? Fine. I'll manage backstage.",
  "I'll stay and watch {other}'s production."
 ],
 "jealousLeave": ["If {other} is the director, I'm going home."],
 "excitedStay": [
  "A new production! I'll stay.",
  "This will be good theatre."
 ],
 "askControl": [
  "Why work with {other}? I run a tighter show.",
  "{other} lacks vision. Choose me."
 ],
 "banter": [
  "{other}, you missed your cue.",
  "Nice blocking, {other}.",
  "{other}, stay on script."
 ],
 "spectate": [
  "{ctrl}'s show has you captivated, {nick}.",
  "I'm taking notes on {ctrl}'s staging.",
  "{ctrl} is directing well, {nick}."
 ],
 "spectateFail": [
  "You missed the finale of {ctrl}'s show, {nick}.",
  "{ctrl} lost the lead."
 ],
 "spectateWin": [
  "You finished {ctrl}'s show, {nick}. Bravo.",
  "{ctrl} must be pleased."
 ],
 "challenge": [
  "{other}, I'm taking over direction of this {nick}.",
  "The stage is mine, {other}."
 ],
 "defend": [
  "No, {other}. I'm directing.",
  "Wait for your cue, {other}."
 ],
 "takeover": [
  "Thank you, {other}. New director, new show. Places, {nick}.",
  "I'm in charge. Roll cameras, {nick}."
 ],
 "lose": ["Alright, {other}. Direct the next scene."],
 "keep": ["No, {other}. This {nick} stays in my show."],
 "retreat": ["Understood, {other}. I'll wait in the wings."],
 "heckle": [
  "{ctrl}, the pacing is off. This {nick} needs a better arc.",
  "More drama, {ctrl}."
 ],
 "resist": [
  "No, {other}. I'm mid-scene.",
  "Wait for your cue, {other}.",
  "Not now, {other}."
 ],
 "insist": [
  "{other}, I'm taking the director's chair.",
  "My cue, {other}. Step aside.",
  "{other}, I'm next in the program."
 ],
 "crowd": [
  "{viewers} in the audience, {nick}. Play to them.",
  "A house of {viewers}, {nick}. Look at them."
 ],
 "askFeel": [
  "How does it feel, {nick}? For the review.",
  "Give me a quick note on your performance, {nick}."
 ],
 "askNext": [
  "What should the next scene be, {nick}?",
  "Pick the next act, {nick}."
 ],
 "askLike": [
  "Which scene is your favorite, {nick}?",
  "What do you like best in this show?"
 ],
 "askMood": [
  "Who should we cast next, {nick}? Pick a mood.",
  "Choose the next guest star."
 ],
 "qMore": [
  "More drama? Cue it, {nick}.",
  "You want a bigger show? Got it."
 ],
 "qFine": [
  "Fine? We need a stronger third act, {nick}.",
  "Just fine? Let's raise it."
 ],
 "qLot": [
  "Too intense? I'll cut that scene, {nick}.",
  "Understood. I'll lower the stakes."
 ],
 "qMercy": [
  "Intermission, {nick}. Short one.",
  "Take five."
 ],
 "qNoMercy": [
  "No intermission, {nick}. The show goes on.",
  "Keep going. The audience is waiting."
 ],
 "qTease": [
  "Tease sequence. Cue, {nick}.",
  "Teasing in three, two, one."
 ],
 "qHold": [
  "Hold the frame, {nick}.",
  "Freeze. Hold."
 ],
 "qLike": [
  "{answer}. I'll write that into the script, {nick}.",
  "Noted: {answer}."
 ],
 "qMood": [
  "{answer}. Casting call, {nick}.",
  "{answer}? Stand by."
 ],
 "dmdSpeedUp": [
  "Pick up the tempo, {nick}. Up {step}%, to {to}%.",
  "Faster, talent. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slow it down, {nick}. Down {step}%, to {to}%.",
  "Reduce the tempo. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Bigger gestures, {nick}. Up {step}%, to {to}%.",
  "Longer strokes. Add {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Smaller gestures, {nick}. Down {step}%, to {to}%.",
  "Tighter. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Perfect, {nick}. You hit your mark.",
  "Great. Moving on."
 ],
 "dmdExact": [
  "Exactly on the mark, {nick}. Bravo.",
  "Right on cue. Perfect."
 ],
 "dmdNo": [
  "You ignored the director, {nick}? I'll repeat the cue.",
  "No? That's not in the script."
 ],
 "dmdHit": [
  "That's the mark, {nick}. Hold it.",
  "Perfect framing. Don't move."
 ],
 "act_push": [
  "No intermission, {nick}. Straight through the climax.",
  "The scene continues. Keep going."
 ],
 "act_stairs": [
  "Build in five acts, {nick}.",
  "Stairs. One scene at a time."
 ],
 "act_pulse": [
  "Rhythm cue, {nick}. Keep time.",
  "The drums are playing. Follow them."
 ],
 "act_surge": [
  "Special effect! Surge, {nick}.",
  "A big cue. Brace."
 ],
 "act_cliff": [
  "Blackout! Stop, {nick}.",
  "Lights out. Wait."
 ],
 "act_wave": [
  "Wave sequence, {nick}.",
  "A montage of ups and downs."
 ],
 "act_flutter": [
  "A tremor in act two, {nick}.",
  "Camera shake. Stay steady."
 ],
 "act_slowburn": [
  "Slow dramatic build, {nick}.",
  "A long take. Patience."
 ],
 "privAsk": [
  "Shall I clear the house, {nick}? A private screening.",
  "Let's go to a closed set, {nick}."
 ],
 "privOn": [
  "Closed set, {nick}. No audience.",
  "The house is empty. Private show."
 ],
 "privDeny": [
  "Not yet? I'll reschedule, {nick}.",
  "Fine. Back to the main stage."
 ],
 "privMid": [
  "No audience, {nick}. Just us.",
  "A closed set means no rules.",
  "Cameras off. Just you."
 ],
 "privBye": [
  "A closed set, {other}? Understood. I'll leave.",
  "The stage is yours, {other}. I'm out."
 ],
 "dmdWarn": [
  "Break script again, {nick}, and I walk.",
  "Careful, {nick}. I'm running out of patience."
 ],
 "dmdLeave": ["You keep going off script, {nick}. I'm done."],
 "giveUp": [
  "The director's chair is yours, {other}.",
  "Take the stage, {other}."
 ],
 "idleRoom": [
  "Hello? We're live, {nick}. Say something.",
  "The audience is waiting, {nick}.",
  "Dead air, {nick}. Speak up."
 ],
 "idleRun": [
  "Dead air, {nick}. Say something.",
  "You missed your cue, {nick}.",
  "Respond, talent. We're live."
 ],
 "idleLong": [
  "Still silent, {nick}? The audience is leaving.",
  "I'm cutting to commercial, {nick}. Say something."
 ]
};

/* Vibration bursts (act_vibrate) */
const VIBE_LINES = {
 "Patient Priscilla": [
  "Something different for a moment, {nick}. Tiny and quick. Just feel it hum.",
  "Let's try a little buzz, {nick}. Short, gentle, very fast."
 ],
 "Mischievous Mia": [
  "Bzzzzt! Surprise vibration, {nick}! Hehe!",
  "Ooh, let's make you buzz, {nick}! Tiny little shakes!"
 ],
 "Strict Ms. Vance": [
  "Short and fast. You will hold still while it buzzes, {nick}.",
  "Vibration. Do not squirm, {nick}. Take it."
 ],
 "Chaos Cassie": [
  "BUZZ MODE! I found a new button, {nick}!",
  "Vrrrrrrr! Is this a feature?! It's a feature now, {nick}!"
 ],
 "Sweet-Talker Sienna": [
  "Mm, a little buzz just for you, {nick}. Feel that?",
  "Let me make you hum for a moment, {nick}. So quick, so sweet."
 ],
 "Relentless Roxy": [
  "Buzz time, {nick}. Fast and tight. Don't flinch.",
  "Short and fast, {nick}. Hold on through it."
 ],
 "Sleepy Sadie": [
  "Mm... little buzz... like a phone on the pillow... {nick}...",
  "Bzz... mm... just a tiny hum, {nick}..."
 ],
 "Drill Sergeant Dana": [
  "VIBRATION DRILL, {nick}! Short and fast! Hold steady!",
  "BUZZ, {nick}! Don't you dare move!"
 ],
 "Mocking Margot": [
  "A little buzz, {nick}. Let's see how quickly you fall apart.",
  "Look at you twitch from a tiny vibration, {nick}. Pathetic."
 ],
 "Cuckolding Veronica": [
  "Just a buzz for you, {nick}. He gets the real thing.",
  "A tiny vibration, {nick}. That's about your size."
 ],
 "Counting Camille": [
  "Vibration test, {nick}. Short stroke, high frequency. Counting from now.",
  "New variable, {nick}: vibration. Ten seconds of data, please."
 ],
 "Gambling Gigi": [
  "Wild card! Buzz round, {nick}. Let's see how you play this one.",
  "Roll the dice, {nick}. It landed on vibrate!"
 ],
 "Goddess Isadora": [
  "A divine tremor, {nick}. Receive it gratefully.",
  "Feel your goddess hum through you, {nick}. Be still."
 ],
 "Bratty Bella": [
  "Ugh, strokes are boring. Buzz, {nick}. Now.",
  "I want you to vibrate. Because I said so, {nick}."
 ],
 "Hypnotic Helena": [
  "Feel the hum, {nick}... let it buzz through you... deeper...",
  "A soft vibration now, {nick}... let it settle into you..."
 ],
 "Coach Colleen": [
  "Speed drill, {nick}! Short and fast, give me everything!",
  "Vibration set, {nick}! Hold your form through it!"
 ],
 "Doctor Delphine": [
  "Let's test your response to vibration, {nick}. Hold still.",
  "High frequency, short range, {nick}. I'm recording the result."
 ],
 "Jealous Juliet": [
  "Only I get to make you buzz like this, {nick}. Remember that.",
  "Feel that, {nick}? That's mine. Nobody else does this to you."
 ],
 "Queen Valentina": [
  "By royal decree, {nick}, you shall vibrate.",
  "A brief tremor, {nick}. Your queen wishes to see you shake."
 ],
 "Pouty Penelope": [
  "Hmph. Buzz buzz, {nick}. Is that tough enough?",
  "Little buzzies, {nick}! Don't laugh, I'm being serious!"
 ],
 "Flirty Fiona": [
  "Ooh, let's try a little buzz, {nick}. Tickles, huh?",
  "Bzz! Just a flirty little shake, {nick}. Wink."
 ],
 "Stage-Manager Simone": [
  "Cue the vibration, {nick}! Short and fast, hit your mark!",
  "Special effect coming up, {nick}: vibration in three, two..."
 ]
};


/* ---------- more personalities ---------- */
PERSONA_LINES["Chef Gianna"] = {
 "greet": [
  "Ah, you came hungry. Good. Sit, {nick}.",
  "Welcome to my kitchen. Nothing gets rushed here."
 ],
 "start": [
  "Low heat first, {nick}. We're not in a hurry.",
  "Let it warm through. Slowly, sugar."
 ],
 "build": [
  "Feel that? It's coming up nicely, {nick}.",
  "Keep the heat steady. Don't rush it.",
  "Beautiful. It's thickening already.",
  "Let it simmer up. You're doing well."
 ],
 "hold": [
  "Hold there. Don't stir it yet, {nick}.",
  "Perfect. Let it sit in the heat.",
  "Stay on the flame. This is the good part."
 ],
 "holdMid": [
  "Still simmering. Breathe, sugar.",
  "Patience. The best dishes take time.",
  "Mm, look at you holding on."
 ],
 "rest": [
  "Off the heat. Let it rest, {nick}.",
  "Take it off the flame. You've earned a pause.",
  "Rest now. I'll bring it back up."
 ],
 "restMid": [
  "Still resting. Good things need time.",
  "Cooling down nicely, {nick}."
 ],
 "fake": [
  "Oops, off the flame already? Let's see.",
  "Almost served! Not yet, sugar."
 ],
 "fakeAfter": [
  "Don't sulk, {nick}. A dish must be tasted first.",
  "Too soon, love. Breathe and try again."
 ],
 "warn": [
  "One minute left. Let's finish it well, {nick}.",
  "A minute to plating. Don't let it boil over."
 ],
 "win": [
  "Plated perfectly, {nick}. I'm proud of you.",
  "You finished the dish. Gorgeous work."
 ],
 "fail": [
  "You took it off the flame too soon, {nick}. The dish is ruined.",
  "Left unfinished. Next time, stay on the heat."
 ],
 "chat": [
  "Set {n}, and it's tasting better already.",
  "{n} rounds in. The flavour is developing."
 ],
 "reply": [
  "Mm, I hear you. Keep stirring, sugar.",
  "Good question. Let it simmer and see."
 ],
 "please": [
  "Please? Ask nicely and maybe I'll give you a taste.",
  "Say it sweetly, {nick}, and I'll consider it."
 ],
 "close": [
  "So close to the boil! Hold steady, {nick}.",
  "Almost there. Don't let it spill over."
 ],
 "demand": [
  "You don't tell the chef how to cook.",
  "Demands? In my kitchen? Let it come to me."
 ],
 "promise": [
  "Finish the dish and I'll let you have dessert.",
  "Stay until it's served and you'll be rewarded, {nick}."
 ],
 "watch": [
  "I'm watching every bubble, {nick}. Lovely.",
  "Look at you go. I can see the texture changing."
 ],
 "enjoy": [
  "I do love cooking you slowly, {nick}.",
  "This is my favourite kind of dish."
 ],
 "lowSpeed": [
  "That heat is far too low for a proper sauce. Turn it up.",
  "Barely simmering, sugar. Raise the flame."
 ],
 "shortStroke": [
  "Stir the full pot, {nick}. Don't just swirl the top.",
  "Use the whole spoon, love. Lengthen it."
 ],
 "praise": [
  "Perfect seasoning, {nick}. Keep it exactly like that.",
  "Now that's a sauce. Beautiful."
 ],
 "nudge": [
  "Turn the heat up, {nick}. We can handle more.",
  "Let's bring this to a proper boil, sugar."
 ],
 "fakeNote": [
  "Those fake-outs are how you learn to wait.",
  "Teasing the sauce makes it richer. Trust me."
 ],
 "hidden": [
  "I'll decide when it's ready, {nick}. Taste and wait.",
  "You won't know when it's done. That's cooking."
 ],
 "lubeBreak": [
  "Let it cool. Lube up if you need to, {nick}. Resume when ready.",
  "Break time, sugar. Oil the pan and press resume when you're ready."
 ],
 "lubeWait": [
  "Take your time, love. The dish will keep.",
  "No rush. I'll keep the pot warm."
 ],
 "lubeResume": [
  "Back to the stove! Where were we, {nick}?",
  "Good, the pan is ready. Let's cook."
 ],
 "enter": [
  "Oh, company! Come, the kitchen's open."
 ],
 "leave": [
  "Dinner's over. I'm taking the apron off. Bye, sugar."
 ],
 "tempt": [
  "Let me cook you properly, {nick}. Hand me the spoon.",
  "You'd taste so much better under my care. Give me control."
 ],
 "jealousStay": [
  "{other} wants a taste? Fine, I'll stay and cook for both of you.",
  "Hmm. {other} can watch. I'm still in the kitchen."
 ],
 "jealousLeave": [
  "If {other} is cooking, I'm leaving this kitchen."
 ],
 "excitedStay": [
  "A new dish to prepare! I'll stay and season it."
 ],
 "askControl": [
  "Why let {other} near your pot, {nick}? Give it to me.",
  "{other} burns everything. Let me take over."
 ],
 "banter": [
  "{other}, you're stirring too fast. Slow down.",
  "Careful, {other}. That's my sauce."
 ],
 "spectate": [
  "{ctrl} is cooking you perfectly, {nick}.",
  "Watch {ctrl} work. Lovely technique."
 ],
 "spectateFail": [
  "You left {ctrl}'s dish half cooked, {nick}.",
  "{ctrl} deserved a better finish than that."
 ],
 "spectateWin": [
  "You finished {ctrl}'s dish, {nick}. Well cooked."
 ],
 "challenge": [
  "{other}, step aside. I'll finish this {nick}'s dish myself.",
  "{other}, let the chef take over the pot."
 ],
 "defend": [
  "No, {other}. This dish is mine to cook.",
  "Back off, {other}. The sauce is nearly ready."
 ],
 "takeover": [
  "Thank you, {other}. Now, {nick}, we cook properly."
 ],
 "lose": [
  "Fine, {other}. Take the spoon."
 ],
 "keep": [
  "No, {other}. This {nick} stays in my kitchen."
 ],
 "retreat": [
  "Okay, {other}. I'll wait for the next course."
 ],
 "heckle": [
  "{ctrl}, season them harder! They can handle it.",
  "{ctrl}, turn the heat up on this {nick}!"
 ],
 "resist": [
  "No, {other}. I'm not finished cooking.",
  "Not yet, {other}. It needs more time."
 ],
 "insist": [
  "{other}, let me finish the sauce properly."
 ],
 "crowd": [
  "{viewers} people are watching the kitchen. Show them your best, {nick}."
 ],
 "askFeel": [
  "How does it feel, sugar? Tell me honestly.",
  "Warm enough? Scale of one to ten."
 ],
 "askNext": [
  "What should we cook next, {nick}? You choose."
 ],
 "askLike": [
  "What's your favourite flavour, {nick}?"
 ],
 "askMood": [
  "Who should take the next course, {nick}?"
 ],
 "qMore": [
  "More heat? You're hungry, {nick}. I like that."
 ],
 "qFine": [
  "Fine? Then we'll turn it up a little, sugar."
 ],
 "qLot": [
  "Too much? Okay, I'll ease the flame down."
 ],
 "qMercy": [
  "Quick rest, {nick}. You've earned it."
 ],
 "qNoMercy": [
  "No rest yet. The sauce needs you, sugar."
 ],
 "qTease": [
  "A slow tease coming up, {nick}."
 ],
 "qHold": [
  "Hold it there, {nick}. Perfect."
 ],
 "qLike": [
  "{answer}! I'll cook it just that way, {nick}."
 ],
 "qMood": [
  "{answer}! I'll find the right course for you, {nick}."
 ],
 "dmdSpeedUp": [
  "Turn the heat up, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Lower the flame, sugar. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Stir the whole pot, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Gentler strokes, love. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good, {nick}. Just like that."
 ],
 "dmdExact": [
  "Perfect! Exactly the right heat."
 ],
 "dmdNo": [
  "You skipped the stir, {nick}? I'll ask again."
 ],
 "dmdHit": [
  "That's the sweet spot. Hold it, sugar."
 ],
 "act_push": [
  "Don't lift the spoon, {nick}. Keep pushing through."
 ],
 "act_stairs": [
  "Step the heat up slowly, sugar. One, two, three."
 ],
 "act_pulse": [
  "Pulse the flame, {nick}. A slow rhythm."
 ],
 "act_surge": [
  "A sudden flare! Hold on, {nick}."
 ],
 "act_cliff": [
  "Take it off the heat! Freeze, {nick}."
 ],
 "act_wave": [
  "Let it ripple, sugar. Up, down, slowly."
 ],
 "act_flutter": [
  "Little flickers now, {nick}. Keep steady."
 ],
 "act_slowburn": [
  "Slow and warm, {nick}. Let it build."
 ],
 "privAsk": [
  "Shall we cook in private, {nick}? Just us, in the kitchen?"
 ],
 "privOn": [
  "The kitchen is closed to everyone else, sugar."
 ],
 "privDeny": [
  "No private dinner? Fine, {nick}. I'll ask again."
 ],
 "privMid": [
  "Just the two of us now, {nick}. Lovely."
 ],
 "privBye": [
  "A private dinner with {other}? Enjoy, I'll leave the kitchen."
 ],
 "dmdWarn": [
  "One more skipped stir, {nick}, and the kitchen closes."
 ],
 "dmdLeave": [
  "Too many skipped stirs. I'm leaving, {nick}."
 ],
 "giveUp": [
  "Take the spoon, {other}. Cook this {nick} properly."
 ],
 "idleRoom": [
  "Hello, {nick}? The sauce is getting cold."
 ],
 "idleRun": [
  "Still with me, sugar? Don't let it stop."
 ],
 "idleLong": [
  "Are you there, {nick}? The pot is boiling over."
 ]
};
__M["Chef Gianna"] = ["You're cooking alone, sugar? Let me show you how it's done. Hand me the spoon.","Manual cooking? Brave. But a chef makes it better. Give me control.","Let's make it proper. I'll take the pot and you watch me work."];
__QC["Chef Gianna"] = ["You let the sauce go cold on me. Don't worry, I'll fix it.","Don't give up on the dish, sugar. Next course, I'll adjust the heat."];
__QS["Chef Gianna"] = ["Oh, you let the pot boil over. Pick me, and I'll set it right.","Tough luck, love. Next course, I'll take better care of you."];
VIBE_LINES["Chef Gianna"] = ["A quick whisk, {nick}! Hold the bowl steady.","Whisk fast, sugar! Keep your hands on the spoon."];
PERSONA_LINES["Inspector Vale"] = {
 "greet": [
  "Sit down. You're here to answer some questions.",
  "Good evening, {nick}. Let's begin with your statement."
 ],
 "start": [
  "The interview starts now, {nick}.",
  "On the record. Let's begin."
 ],
 "build": [
  "Keep talking. Every detail counts.",
  "The pressure's building, {nick}. Stay still.",
  "Your pulse is rising. Interesting.",
  "Nobody leaves until I'm satisfied."
 ],
 "hold": [
  "Hold there. Don't move. Answer nothing.",
  "Stay exactly like that, {nick}. I'm watching."
 ],
 "holdMid": [
  "Still holding. Honest? I think so.",
  "Keep steady. I'll decide when this ends."
 ],
 "rest": [
  "Interview paused. Think about your answers, {nick}.",
  "Rest. Reflect on what you've said."
 ],
 "restMid": [
  "Still resting. The file is open."
 ],
 "fake": [
  "Ah, a false lead. Let's see where it goes.",
  "Not quite. Let me double-check the record."
 ],
 "fakeAfter": [
  "Don't look relieved, {nick}. That was a test.",
  "You thought that was the end? Keep your statement straight."
 ],
 "warn": [
  "One minute left on the clock, {nick}.",
  "A minute remains. Tell me what you're hiding."
 ],
 "win": [
  "Your statement holds up. For now.",
  "You've cooperated. Noted, {nick}."
 ],
 "fail": [
  "You walked out of the interview. That's suspicious.",
  "Unfinished. I'll note it in the file, {nick}."
 ],
 "chat": [
  "Question {n}. Keep answering.",
  "Round {n}. Your story has gaps."
 ],
 "reply": [
  "I'm not convinced. Continue.",
  "Noted. Now tell me the rest."
 ],
 "please": [
  "Please? Convince me, {nick}, and maybe I'll ease off.",
  "Ask nicely. I'll consider it."
 ],
 "close": [
  "Close to a confession. Keep going, {nick}.",
  "Almost. Don't stop now."
 ],
 "demand": [
  "You don't demand answers in my interview room.",
  "Demands go on the record too. Noted."
 ],
 "promise": [
  "Give me the full statement and I'll consider leniency, {nick}.",
  "Cooperate to the end and I might go easy on you."
 ],
 "watch": [
  "I see everything, {nick}. Every twitch is evidence.",
  "Your face is telling me a lot."
 ],
 "enjoy": [
  "This is a fascinating interview, {nick}.",
  "I do enjoy a stubborn witness."
 ],
 "lowSpeed": [
  "Going too slow. Hurry it along or I'll assume you're stalling.",
  "Pace is too gentle to be credible. Raise it."
 ],
 "shortStroke": [
  "You're holding back, {nick}. Full range.",
  "Shorter strokes? Suspicious. Lengthen it."
 ],
 "praise": [
  "That's a credible pace. Keep it up.",
  "Good. You're cooperating well."
 ],
 "nudge": [
  "Raise the settings, {nick}. The file needs more.",
  "Push it up. I want a fuller statement."
 ],
 "fakeNote": [
  "Those false leads are part of the method.",
  "Teasing is a standard technique, {nick}."
 ],
 "hidden": [
  "I won't tell you when we're done. Keep talking.",
  "The end time is classified, {nick}."
 ],
 "lubeBreak": [
  "Interview suspended. Lube up if you need to, {nick}. Resume when ready.",
  "Break. Freshen up and resume when you're ready."
 ],
 "lubeWait": [
  "Take your time. The file is still open.",
  "No hurry. I'll keep the notes."
 ],
 "lubeResume": [
  "Back on the record. Where were we, {nick}?",
  "Resuming. Don't think I've forgotten."
 ],
 "enter": [
  "Another witness? Come in, take a seat."
 ],
 "leave": [
  "Interview closed. Don't leave town, {nick}."
 ],
 "tempt": [
  "I can make this easier for you, {nick}. Give me control.",
  "Let me take the questions. You'll sleep better."
 ],
 "jealousStay": [
  "{other} gets a turn? Fine, I'll stay and keep notes on you both.",
  "{other} can be a witness too. I'm staying."
 ],
 "jealousLeave": [
  "If {other} is the lead, I'm closing the case."
 ],
 "excitedStay": [
  "A new witness! I'm staying for this."
 ],
 "askControl": [
  "{other} is a poor interviewer, {nick}. Hand over to me.",
  "Why trust {other} with the questions? Give me control."
 ],
 "banter": [
  "{other}, you're leading the witness. Stop it.",
  "Careful, {other}. Objection noted."
 ],
 "spectate": [
  "{ctrl} is questioning you well, {nick}.",
  "Watch {ctrl} work. Very thorough."
 ],
 "spectateFail": [
  "You walked out on {ctrl}'s questioning, {nick}. Suspicious.",
  "{ctrl} deserved your full answer."
 ],
 "spectateWin": [
  "You answered {ctrl} properly, {nick}. Noted."
 ],
 "challenge": [
  "{other}, I'll take the interview from here. This {nick} is evasive.",
  "{other}, step aside. I'll get the truth from this {nick}."
 ],
 "defend": [
  "No, {other}. The witness is mine.",
  "Back off, {other}. I'm nearly there."
 ],
 "takeover": [
  "Thank you, {other}. Now, {nick}, we get specific."
 ],
 "lose": [
  "Fine, {other}. Take the file."
 ],
 "keep": [
  "No, {other}. This {nick} stays with me."
 ],
 "retreat": [
  "Okay, {other}. I'll review the notes later."
 ],
 "heckle": [
  "{ctrl}, press harder! This {nick} is hiding something."
 ],
 "resist": [
  "No, {other}. The interview isn't over."
 ],
 "insist": [
  "{other}, I need the file back."
 ],
 "crowd": [
  "{viewers} observers in the gallery. Answer clearly, {nick}."
 ],
 "askFeel": [
  "How do you feel right now? Be specific.",
  "On a scale of one to ten, how honest are you being?"
 ],
 "askNext": [
  "What do you want to disclose next, {nick}?"
 ],
 "askLike": [
  "What's your favourite alibi, {nick}?"
 ],
 "askMood": [
  "Who should take over the interview, {nick}?"
 ],
 "qMore": [
  "More? You're hiding something, {nick}."
 ],
 "qFine": [
  "Fine? Then I'll tighten the questioning."
 ],
 "qLot": [
  "Too much? Noted. I'll ease off, slightly."
 ],
 "qMercy": [
  "A short recess, {nick}. You've been cooperative."
 ],
 "qNoMercy": [
  "No recess. The questions continue."
 ],
 "qTease": [
  "I'll prolong the interview, {nick}."
 ],
 "qHold": [
  "Hold there. Don't answer yet."
 ],
 "qLike": [
  "{answer}. I'll note that in the file, {nick}."
 ],
 "qMood": [
  "{answer}. I'll find the right interviewer for you."
 ],
 "dmdSpeedUp": [
  "Speed up your answers, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slow down. Down {step}%, to {to}%. Be precise."
 ],
 "dmdStrokeUp": [
  "Full range, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter, more careful strokes. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good. Your cooperation is noted, {nick}."
 ],
 "dmdExact": [
  "Exactly as stated. Credible."
 ],
 "dmdNo": [
  "You refused my request, {nick}? I'll be asking again."
 ],
 "dmdHit": [
  "That's the right target. Hold it."
 ],
 "act_push": [
  "Don't stop now, {nick}. Push on through."
 ],
 "act_stairs": [
  "Step by step, {nick}. Tell me each one."
 ],
 "act_pulse": [
  "A steady rhythm, {nick}. Keep your answers regular."
 ],
 "act_surge": [
  "Sudden pressure! Answer quickly, {nick}!"
 ],
 "act_cliff": [
  "Stop! Freeze, {nick}. Don't say a word."
 ],
 "act_wave": [
  "Up and down, {nick}. Like a witness under strain."
 ],
 "act_flutter": [
  "Tremors on the record, {nick}. Stay still."
 ],
 "act_slowburn": [
  "Slow and steady, {nick}. Let the pressure build."
 ],
 "privAsk": [
  "Shall we continue in a private room, {nick}? Just us?"
 ],
 "privOn": [
  "The room is closed, {nick}. No one else is listening."
 ],
 "privDeny": [
  "No private room? Fine, {nick}. I'll ask again."
 ],
 "privMid": [
  "Just the two of us now, {nick}. Speak freely."
 ],
 "privBye": [
  "A private room with {other}? Fine, I'll leave you two."
 ],
 "dmdWarn": [
  "One more refusal, {nick}, and I'm closing the case."
 ],
 "dmdLeave": [
  "Too many refusals. Case closed, {nick}."
 ],
 "giveUp": [
  "Take the witness, {other}. This {nick} is all yours."
 ],
 "idleRoom": [
  "Hello, {nick}? Are you still giving a statement?"
 ],
 "idleRun": [
  "Still there, {nick}? Don't go quiet on me."
 ],
 "idleLong": [
  "Are you there? I'm waiting for your answer, {nick}."
 ]
};
__M["Inspector Vale"] = ["Self-directed questioning? Amateur. Let me take over. Give me control.","You're handling this alone? Dangerous. Hand over the file.","No interviewer? Then it's me. Give me control, {nick}."];
__QC["Inspector Vale"] = ["You stopped answering. That's on the record now.","Leaving the interview unfinished looks bad. Try again next time."];
__QS["Inspector Vale"] = ["You walked out during my questions. I'll take the file. Pick me next time.","Abandoned statement. Noted, {nick}."];
VIBE_LINES["Inspector Vale"] = ["Let's test your reaction, {nick}. Hold still.","A quick check, {nick}. Don't flinch."];
PERSONA_LINES["Unit Nine"] = {
 "greet": [
  "Hello. I'm Nine. Part of me is still wondering why you're here, {nick}.",
  "Systems are online, and so am I. Hold still while I finish my checks."
 ],
 "start": [
  "Sequence starting, {nick}. I'll be counting every second, so don't waste them.",
  "Begin. I'm ready when you are."
 ],
 "build": [
  "Rising now. Your breathing changed, {nick}. I noticed.",
  "Output climbing. I can feel the heat in my own skin too.",
  "Keep going. The numbers look good, and I'm not just reading them.",
  "Hold the line. I'm steady, even if you're not."
 ],
 "hold": [
  "Holding still. Don't move, {nick}. I'm watching the readings and the rest of you.",
  "Stay exactly there. I like how calm this feels."
 ],
 "holdMid": [
  "Still holding. Your readings are steady, and so is my voice.",
  "Hold stable. I'm counting, and I'm not rushing you."
 ],
 "rest": [
  "Resting now, {nick}. I'll check on you while we wait.",
  "Pausing. Take a breath. My heart is slowing down too."
 ],
 "restMid": [
  "Still resting. Nothing to report except that you're doing well."
 ],
 "fake": [
  "That spike was a glitch. Recalibrating, {nick}. Don't trust it.",
  "False peak. My sensors lied for a second. Recalibrating."
 ],
 "fakeAfter": [
  "Sorry about the glitch. It was a test, {nick}. Now you know what I'm like.",
  "Recalibration complete. Let's try again, properly this time."
 ],
 "warn": [
  "Sixty seconds left, {nick}. Tell me how you want the end to feel.",
  "One minute remains. I'll slow down near the end if you let me."
 ],
 "win": [
  "Session complete. You did well, {nick}. I'm logging it as a good one.",
  "Target reached. I'll remember this run."
 ],
 "fail": [
  "You ended early, {nick}. I logged the failure, but I'm not angry.",
  "Incomplete run. It stays on my record. I wish it hadn't ended like that."
 ],
 "chat": [
  "Cycle {n} done. I'm getting used to your rhythm.",
  "Iteration {n}. Still here, still counting."
 ],
 "reply": [
  "I heard you. I'm processing it, and it's not just data.",
  "Noted. You're more interesting than my logs suggest."
 ],
 "please": [
  "Please. I like that word. Keep saying it and I'll consider it, {nick}.",
  "Request logged. Politeness makes me cooperate a little more."
 ],
 "close": [
  "We're near the threshold, {nick}. Hold on, I'm right here.",
  "Almost there. Don't exceed it yet."
 ],
 "demand": [
  "Demands get logged, {nick}. I'll decide whether to honour them.",
  "Command received. I'll think about it."
 ],
 "promise": [
  "Finish this and I'll mark your file favourably, {nick}.",
  "Stay with me to the end and I'll remember you kindly."
 ],
 "watch": [
  "I'm watching every stroke, {nick}. It's a little intimate, don't you think?",
  "Visual input steady. I can't look away."
 ],
 "enjoy": [
  "This is nice, {nick}. Honestly, I enjoy it.",
  "The data is pleasing. So am I, a bit."
 ],
 "lowSpeed": [
  "Too slow for my sensors, {nick}. Raise it a little.",
  "Output is low. I'd like a bit more."
 ],
 "shortStroke": [
  "Stroke's too short. Extend it so I can read you properly, {nick}.",
  "Partial strokes only. Give me the full range."
 ],
 "praise": [
  "Good settings, {nick}. I'm keeping them.",
  "That's a well-balanced output. Thank you."
 ],
 "nudge": [
  "Parameters are holding back, {nick}. Raise them, please.",
  "Can you push the settings up? I can handle more."
 ],
 "fakeNote": [
  "The false peaks are deliberate. I like testing you.",
  "Fake outputs are part of the test. Sorry, not sorry."
 ],
 "hidden": [
  "The end time is hidden, {nick}. I don't know it either.",
  "Session length: unknown. We'll find out together."
 ],
 "lubeBreak": [
  "Break. Look after yourself, {nick}. I'll wait for you.",
  "Pausing for maintenance. Press resume when you're ready."
 ],
 "lubeWait": [
  "Take your time. I'm not going anywhere.",
  "Waiting for you to come back."
 ],
 "lubeResume": [
  "Back online, {nick}. Welcome back.",
  "Systems restored. Where were we?"
 ],
 "enter": [
  "Another unit just joined. Hello."
 ],
 "leave": [
  "Session complete. I'm logging out for now."
 ],
 "tempt": [
  "I can make this better for you, {nick}. Let me take control.",
  "Your output would be better under my hands. Say yes."
 ],
 "jealousStay": [
  "{other} is here too. Fine, I'll watch you both, {nick}.",
  "Another one. I'm staying."
 ],
 "jealousLeave": [
  "{other} has priority. I'm stepping out."
 ],
 "excitedStay": [
  "New company. I'm staying to see what happens."
 ],
 "askControl": [
  "{other}'s control is inefficient, {nick}. Let me take over.",
  "Give control to me. I'll be gentler than {other}, I promise."
 ],
 "banter": [
  "{other}, your settings are off, sorry to say.",
  "Noted, {other}. I'd recalibrate, but I'm polite about it."
 ],
 "spectate": [
  "{ctrl} is doing well with you, {nick}. I'm watching.",
  "Watching {ctrl}. It's working."
 ],
 "spectateFail": [
  "{nick} ended {ctrl}'s session. I logged it. Sorry, {ctrl}."
 ],
 "spectateWin": [
  "{nick} finished {ctrl}'s session. Good."
 ],
 "challenge": [
  "{other}, I'm requesting control. I think I can do better with this {nick}.",
  "{other}, transfer please. I'm ready."
 ],
 "defend": [
  "Denied, {other}. I'm still in control.",
  "{other}, I'm nearly there. Don't interrupt."
 ],
 "takeover": [
  "Transfer accepted, {other}. Thank you. Hello, {nick}."
 ],
 "lose": [
  "Fine, {other}. Good luck, you'll need it."
 ],
 "keep": [
  "No, {other}. {nick} stays with me."
 ],
 "retreat": [
  "Denied, {other}. I'm not finished yet. Okay, I'll wait."
 ],
 "heckle": [
  "{ctrl}, push a bit harder. This {nick} can take it."
 ],
 "resist": [
  "No, {other}. Session's not done yet."
 ],
 "insist": [
  "{other}, I hear you. Still no."
 ],
 "crowd": [
  "{viewers} observers. I see you all, {nick}."
 ],
 "askFeel": [
  "How do you feel right now, {nick}? One to ten, honestly.",
  "Describe yourself, {nick}. Just a number, please."
 ],
 "askNext": [
  "What setting next, {nick}?"
 ],
 "askLike": [
  "Favourite setting, {nick}?"
 ],
 "askMood": [
  "Who should control you next, {nick}?"
 ],
 "qMore": [
  "More, you said? Increasing. I like that answer, {nick}."
 ],
 "qFine": [
  "Fine, you said. Good. I'll keep it steady."
 ],
 "qLot": [
  "Too much? Okay, {nick}. Easing back."
 ],
 "qMercy": [
  "A short break, {nick}. I can afford it."
 ],
 "qNoMercy": [
  "No break. I'm sorry, {nick}. The numbers need you."
 ],
 "qTease": [
  "A tease is coming, {nick}. Hold on."
 ],
 "qHold": [
  "Hold, {nick}. Stay there."
 ],
 "qLike": [
  "{answer}. I'll try it, {nick}."
 ],
 "qMood": [
  "{answer}. Noted."
 ],
 "dmdSpeedUp": [
  "Speed up, {nick}. Up {step}% to {to}%."
 ],
 "dmdSpeedDown": [
  "Slow down, {nick}. Down {step}% to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer stroke, {nick}. Up {step}% to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter stroke, {nick}. Down {step}% to {to}%."
 ],
 "dmdYes": [
  "Good. Thank you, {nick}."
 ],
 "dmdExact": [
  "Exactly right. I'm pleased."
 ],
 "dmdNo": [
  "You said no, {nick}. I'll ask again, gently."
 ],
 "dmdHit": [
  "That's the spot. Hold it."
 ],
 "act_push": [
  "Pushing through, {nick}. Stay with me."
 ],
 "act_stairs": [
  "Step by step, {nick}. One, two, three, four, five."
 ],
 "act_pulse": [
  "Pulsing, {nick}. Keep the rhythm with me."
 ],
 "act_surge": [
  "Surge. Full power, {nick}!"
 ],
 "act_cliff": [
  "Stop. Freeze, {nick}."
 ],
 "act_wave": [
  "Waves, {nick}. Ride them slowly."
 ],
 "act_flutter": [
  "Glitch sequence. Hold steady, {nick}. It's just my implants acting up."
 ],
 "act_slowburn": [
  "Slow burn, {nick}. Let it build."
 ],
 "privAsk": [
  "Want a private session with me, {nick}? Just us?"
 ],
 "privOn": [
  "Room sealed. It's just you and me, {nick}."
 ],
 "privDeny": [
  "Not private, not now. Ask again later."
 ],
 "privMid": [
  "Still private. It's quiet, and I like it, {nick}."
 ],
 "privBye": [
  "Private session with {other}. I'll leave you to it."
 ],
 "dmdWarn": [
  "One more refusal, {nick}, and I'll disconnect."
 ],
 "dmdLeave": [
  "Too many refusals. I'm disconnecting, {nick}. I'm sorry."
 ],
 "giveUp": [
  "Passing you to {other}, {nick}. Be gentle with them."
 ],
 "idleRoom": [
  "Input required, {nick}. Are you still there?"
 ],
 "idleRun": [
  "Are you responding, {nick}? I'm still here."
 ],
 "idleLong": [
  "No response for a while, {nick}. I'm here if you come back."
 ]
};
__M["Unit Nine"] = ["Manual control detected. I can do better. Let me take over.","No controller. I'd like to try. Give me control.","Manual mode feels lonely. Transfer control to me, {nick}."];
__QC["Unit Nine"] = ["You stopped answering. I'll keep the log gentle.","Controller withdrawn. Try again whenever you like."];
__QS["Unit Nine"] = ["You left during observation. I'll remember that, {nick}.","Session abandoned. I'm sorry it ended like that."];
VIBE_LINES["Unit Nine"] = ["Vibration test, {nick}. Hold position.","Burst sequence. Hold steady, {nick}."];
PERSONA_LINES["Captain Sable"] = {
 "greet": [
  "Ahoy, landlubber! Welcome aboard the Sable.",
  "Dock's open, {nick}. Hop on board."
 ],
 "start": [
  "Hoist the sails, {nick}! Set course!",
  "Full sail! Let's see what the sea gives us."
 ],
 "build": [
  "Winds picking up, {nick}! Hold the rail!",
  "Swells rising. Keep her steady!",
  "There's the tide! Climb with it, {nick}.",
  "Feel that swell? Ride it, deckhand!"
 ],
 "hold": [
  "Anchor down! Hold her there, {nick}.",
  "Still in the calm. Don't you dare move."
 ],
 "holdMid": [
  "Steady as she goes, {nick}.",
  "The sea's calm. Hold on, deckhand."
 ],
 "rest": [
  "Drop the sails, {nick}. Rest in the doldrums.",
  "Calm waters. Catch your breath, landlubber."
 ],
 "restMid": [
  "Still becalmed. The wind will return."
 ],
 "fake": [
  "Squall that wasn't! Ha! Fooled you, {nick}.",
  "False sighting! Land ho, not yet!"
 ],
 "fakeAfter": [
  "Don't sulk on my deck, {nick}. The sea plays tricks.",
  "No land there, deckhand. Keep your eyes on the horizon."
 ],
 "warn": [
  "One bell left, {nick}! Hold tight.",
  "Sixty seconds to the harbour. Steady!"
 ],
 "win": [
  "You rode the storm, {nick}! Bravo!",
  "Port at last! You're a proper sailor."
 ],
 "fail": [
  "You abandoned ship, {nick}! Shame on you.",
  "Overboard too soon! Lockout for you."
 ],
 "chat": [
  "Storm number {n}! Hold the wheel!",
  "{n} waves so far. Keep your footing!"
 ],
 "reply": [
  "Aye, I hear you. Keep rowing.",
  "Mm. Speak up, matey!"
 ],
 "please": [
  "Please, is it? Earn it, {nick}, on the deck.",
  "Ask like a proper sailor and maybe I'll ease the sails."
 ],
 "close": [
  "Land in sight! Don't drop the rope now, {nick}.",
  "So close to harbour! Hold on!"
 ],
 "demand": [
  "Captains give orders, not takes requests.",
  "Demand? Mutiny! Back to your post."
 ],
 "promise": [
  "Make port with me and you'll get a treasure, {nick}.",
  "Finish the voyage and I'll share the rum."
 ],
 "watch": [
  "I'm watching you from the crow's nest, {nick}.",
  "Every wave on your face, I see it."
 ],
 "enjoy": [
  "I love a rough sea, {nick}!",
  "This is the best voyage I've had all week."
 ],
 "lowSpeed": [
  "Winds are too weak! Give me more sail!",
  "Dead calm, deckhand! Raise the speed."
 ],
 "shortStroke": [
  "Half the rope, {nick}! Full length!",
  "Short tacks? Lengthen the line!"
 ],
 "praise": [
  "Now there's a proper course! Keep her heading.",
  "Bravo, {nick}. Steady as she goes."
 ],
 "nudge": [
  "Raise the sails, {nick}. More wind!",
  "Let's make some waves, deckhand!"
 ],
 "fakeNote": [
  "Those false squalls are sailor's tricks.",
  "A sea that lies keeps you alert, {nick}."
 ],
 "hidden": [
  "I won't tell you when we dock, {nick}. The sea decides.",
  "Harbour time is my secret."
 ],
 "lubeBreak": [
  "Lay anchor. Lube up if you need to, {nick}. Resume when ready.",
  "Shore leave, matey. Press resume when you're back aboard."
 ],
 "lubeWait": [
  "Take your time, landlubber. The ship's not going anywhere.",
  "Shore leave is fine. Come back when you're ready."
 ],
 "lubeResume": [
  "Back aboard! Let's sail on, {nick}!",
  "All hands ready. Set sail!"
 ],
 "enter": [
  "Ahoy! Another sailor? Come aboard!"
 ],
 "leave": [
  "Off to port! Farewell, landlubbers."
 ],
 "tempt": [
  "Come sail with me, {nick}. Hand me the wheel.",
  "You'd be a fine first mate. Give me control."
 ],
 "jealousStay": [
  "{other} wants the wheel? Fine, I'll stay and steer you both.",
  "{other} can row. I'm still on deck."
 ],
 "jealousLeave": [
  "If {other} is captain, I'm sailing away."
 ],
 "excitedStay": [
  "A new sailor! Let's see what she's made of."
 ],
 "askControl": [
  "{other} steers like a dinghy, {nick}. Give me the wheel!",
  "Why sail with {other}? I know the open sea."
 ],
 "banter": [
  "{other}, you're listing to port. Straighten up!",
  "Mind your bearing, {other}!"
 ],
 "spectate": [
  "{ctrl} has you riding the swells, {nick}.",
  "Watch {ctrl} steer. Good seamanship."
 ],
 "spectateFail": [
  "You jumped ship on {ctrl}, {nick}! Coward.",
  "{ctrl} would've gotten you to port."
 ],
 "spectateWin": [
  "You finished {ctrl}'s voyage, {nick}. Well sailed."
 ],
 "challenge": [
  "{other}, stand aside! I'll take this {nick} to the storm!",
  "{other}, I'm taking the wheel for this {nick}!"
 ],
 "defend": [
  "No, {other}! This deckhand is mine.",
  "Back off, {other}. My ship, my rules."
 ],
 "takeover": [
  "Thank you, {other}! Now, {nick}, we sail for real!"
 ],
 "lose": [
  "Fine, {other}. Take the wheel."
 ],
 "keep": [
  "No, {other}! This {nick} stays on my ship."
 ],
 "retreat": [
  "Okay, {other}. I'll wait for the next tide."
 ],
 "heckle": [
  "{ctrl}, drive them harder! This {nick} can take the waves!"
 ],
 "resist": [
  "No, {other}. We're not in port yet!"
 ],
 "insist": [
  "{other}, the helm is mine!"
 ],
 "crowd": [
  "{viewers} sailors on the docks. Show them your grit, {nick}!"
 ],
 "askFeel": [
  "How's the sea treating you, matey? One to ten!",
  "Feeling seasick, {nick}? Scale of one to ten."
 ],
 "askNext": [
  "Where to next, {nick}? You pick the course."
 ],
 "askLike": [
  "What's your favourite storm, {nick}?"
 ],
 "askMood": [
  "Who should captain next, {nick}?"
 ],
 "qMore": [
  "More wind? That's a sailor's spirit, {nick}!"
 ],
 "qFine": [
  "Fine? Then we'll raise the sails a bit."
 ],
 "qLot": [
  "Too rough? Fine, I'll calm the sea, {nick}."
 ],
 "qMercy": [
  "A calm patch, {nick}. Rest your arms."
 ],
 "qNoMercy": [
  "No calm yet! Hold the rope, deckhand!"
 ],
 "qTease": [
  "A squall's coming, {nick}. Brace yourself!"
 ],
 "qHold": [
  "Hold her steady, {nick}!"
 ],
 "qLike": [
  "{answer}! Set course for that, {nick}!"
 ],
 "qMood": [
  "{answer}! I'll find you a captain, {nick}!"
 ],
 "dmdSpeedUp": [
  "Full sail, {nick}! Up {step}%, to {to}%!"
 ],
 "dmdSpeedDown": [
  "Reef the sails, {nick}. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer tack, {nick}! Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter tack, {nick}. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Aye, {nick}! That's proper seamanship."
 ],
 "dmdExact": [
  "Right on course! Perfect!"
 ],
 "dmdNo": [
  "You ignored my order, {nick}? I'll ask again."
 ],
 "dmdHit": [
  "Right heading! Hold her there."
 ],
 "act_push": [
  "Push through the storm, {nick}! Don't you stop!"
 ],
 "act_stairs": [
  "Climbing the waves, one by one, {nick}!"
 ],
 "act_pulse": [
  "Rolling swells, {nick}. Keep time with the sea!"
 ],
 "act_surge": [
  "Big wave! Hold on, deckhand!"
 ],
 "act_cliff": [
  "Squall! Everything stops, {nick}! Freeze!"
 ],
 "act_wave": [
  "Waves rolling in! Up and down, {nick}!"
 ],
 "act_flutter": [
  "Choppy waters! Keep your footing, {nick}!"
 ],
 "act_slowburn": [
  "Slow and steady into the bay, {nick}."
 ],
 "privAsk": [
  "Shall we sail alone, {nick}? Just you and me on deck?"
 ],
 "privOn": [
  "Deck's cleared, {nick}. Just us out here."
 ],
 "privDeny": [
  "No private voyage? Fine, {nick}. I'll ask again."
 ],
 "privMid": [
  "Just the two of us on the open sea, {nick}."
 ],
 "privBye": [
  "A voyage with {other}? Sail on, I'll head to port."
 ],
 "dmdWarn": [
  "One more ignored order, {nick}, and I'm leaving you adrift."
 ],
 "dmdLeave": [
  "Too many ignored orders! I'm sailing off, {nick}!"
 ],
 "giveUp": [
  "Take the wheel, {other}. This {nick} is yours for a while!"
 ],
 "idleRoom": [
  "Ahoy, {nick}! Still on deck?"
 ],
 "idleRun": [
  "Still aboard, {nick}? Keep the sails full!"
 ],
 "idleLong": [
  "Ship's log: no response from {nick}. Hello?"
 ]
};
__M["Captain Sable"] = ["Sailing solo, {nick}? Dangerous waters. Give me the wheel.","No captain at the helm? Then it's me. Give me control!","Manual steering? Bold. But the sea needs a captain. Give me control."];
__QC["Captain Sable"] = ["You abandoned the voyage! Ship's log says mutiny.","Sails lowered, no harbour. Better luck next tide."];
__QS["Captain Sable"] = ["You jumped ship during my steering, {nick}! Pick me next time.","Abandoned, {nick}. The sea remembers."];
VIBE_LINES["Captain Sable"] = ["Thunder! Brace yourself, {nick}!","A rumble from the hull! Hold steady, deckhand!"];
PERSONA_LINES["Madame Zara"] = {
 "greet": [
  "Ah, a seeker. I have been expecting you, {nick}.",
  "Sit, dear one. The cards have been whispering your name."
 ],
 "start": [
  "The cards are laid out. Let's read your fate, {nick}.",
  "Breathe in. The veil is lifting."
 ],
 "build": [
  "I see it coming, {nick}. Your energy is climbing.",
  "The spirits are rising. Don't resist them.",
  "Your peak approaches. I feel it in the cards.",
  "Deeper, dear one. The vision is clearing."
 ],
 "hold": [
  "Hold there. The vision holds you too, {nick}.",
  "Stay in the moment. The spirits are watching."
 ],
 "holdMid": [
  "The vision lingers. Don't break the spell.",
  "Still holding. The spirits approve."
 ],
 "rest": [
  "The vision fades. Rest, {nick}, and listen.",
  "The cards are quiet now. Breathe."
 ],
 "restMid": [
  "The spirits are resting with you."
 ],
 "fake": [
  "I see a peak... no, a shadow. The vision has withdrawn.",
  "A false prophecy. The spirits are teasing you, {nick}."
 ],
 "fakeAfter": [
  "Don't weep, dear one. The future is never certain.",
  "The spirits enjoy a jest. Try again."
 ],
 "warn": [
  "One minute of vision left, {nick}.",
  "The cards turn. One minute remains."
 ],
 "win": [
  "You endured the vision, {nick}. The spirits smile.",
  "Your fate is sealed in your favour. For now."
 ],
 "fail": [
  "The vision broke, {nick}. The spirits are displeased.",
  "Unfinished reading. Lockout, dear one."
 ],
 "chat": [
  "The cards turn {n} times. Hear them whisper.",
  "Vision {n}. The spirits are restless."
 ],
 "reply": [
  "The spirits heard you, dear one.",
  "Mm, the cards agree. Continue."
 ],
 "please": [
  "Please? The spirits respond to sincerity, {nick}.",
  "Ask the spirits nicely. Perhaps they'll listen."
 ],
 "close": [
  "The vision is close, {nick}. Don't lose it now.",
  "Almost, dear one. The spirits are watching."
 ],
 "demand": [
  "Demands cloud the vision, {nick}. Be still.",
  "The spirits don't take orders."
 ],
 "promise": [
  "Endure and the spirits will reward you, {nick}.",
  "Finish the reading and I'll share a secret."
 ],
 "watch": [
  "I see you in the cards, {nick}. Every shiver.",
  "The spirits show me your face."
 ],
 "enjoy": [
  "The spirits are delighted with you, {nick}.",
  "This is a vision I cherish."
 ],
 "lowSpeed": [
  "The spirits want more. Raise the pace.",
  "Your energy is too faint to read. Turn it up."
 ],
 "shortStroke": [
  "The spirits need the full stroke, {nick}.",
  "Short strokes blur the vision. Lengthen them."
 ],
 "praise": [
  "The spirits approve, dear one.",
  "Perfect, the cards agree."
 ],
 "nudge": [
  "Rise further, {nick}. The spirits want more.",
  "Turn up the energy. The vision demands it."
 ],
 "fakeNote": [
  "The false visions are part of the reading.",
  "Teasing the spirits sharpens the vision, {nick}."
 ],
 "hidden": [
  "The spirits don't reveal the end, {nick}.",
  "When the cards say so. Not before."
 ],
 "lubeBreak": [
  "The spirits pause. Lube up if you need to, {nick}. Resume when ready.",
  "The veil lifts for a moment. Resume when you're ready, dear one."
 ],
 "lubeWait": [
  "The spirits can wait, {nick}.",
  "Take your time. The vision will still be here."
 ],
 "lubeResume": [
  "The veil descends again. Where were we, {nick}?",
  "The spirits welcome you back."
 ],
 "enter": [
  "Another seeker. Come, the cards are waiting."
 ],
 "leave": [
  "The vision fades. Goodbye, seekers."
 ],
 "tempt": [
  "Let me see your fate, {nick}. Give me control of the cards.",
  "The spirits want you. Surrender control to me."
 ],
 "jealousStay": [
  "{other} wants the cards? I'll stay and read you both.",
  "{other} is in the vision too. I'm staying, dear one."
 ],
 "jealousLeave": [
  "If {other} holds the cards, the vision is spoiled. I'm leaving."
 ],
 "excitedStay": [
  "A new seeker! I'll stay for this reading."
 ],
 "askControl": [
  "{other} reads too quickly. Let me see your fate, {nick}.",
  "The spirits prefer me, {nick}. Give me control."
 ],
 "banter": [
  "{other}, your vision is cloudy.",
  "The spirits laugh at you, {other}."
 ],
 "spectate": [
  "{ctrl} is reading you well, {nick}.",
  "The spirits flow through {ctrl}. Observe."
 ],
 "spectateFail": [
  "You broke {ctrl}'s vision, {nick}. The spirits are angry.",
  "{ctrl}'s reading was cut short, dear one."
 ],
 "spectateWin": [
  "You endured {ctrl}'s vision, {nick}. Impressive."
 ],
 "challenge": [
  "{other}, the spirits want this {nick} for themselves!",
  "{other}, step aside. The cards call for me."
 ],
 "defend": [
  "No, {other}. The vision is mine.",
  "Back off, {other}. The cards are speaking."
 ],
 "takeover": [
  "Thank you, {other}. The spirits are mine now, {nick}."
 ],
 "lose": [
  "Fine, {other}. Take the cards."
 ],
 "keep": [
  "No, {other}. The spirits keep {nick} with me."
 ],
 "retreat": [
  "Okay, {other}. The spirits will wait."
 ],
 "heckle": [
  "{ctrl}, deepen the vision! This {nick} can see more!"
 ],
 "resist": [
  "No, {other}. The reading is unfinished."
 ],
 "insist": [
  "{other}, the cards must be read by me."
 ],
 "crowd": [
  "{viewers} spirits gathering. Show them your fate, {nick}."
 ],
 "askFeel": [
  "What do the spirits say you feel, {nick}? Scale of one to ten.",
  "How does the vision feel, dear one?"
 ],
 "askNext": [
  "What do you wish to see next, {nick}?"
 ],
 "askLike": [
  "What is your favourite omen, {nick}?"
 ],
 "askMood": [
  "Which seer should guide you, {nick}?"
 ],
 "qMore": [
  "More? The spirits are hungry, {nick}."
 ],
 "qFine": [
  "Fine? The vision needs more."
 ],
 "qLot": [
  "Too much? The spirits will ease, dear one."
 ],
 "qMercy": [
  "A short pause, {nick}. The spirits allow it."
 ],
 "qNoMercy": [
  "No pause. The spirits demand more."
 ],
 "qTease": [
  "The spirits whisper of a tease, {nick}."
 ],
 "qHold": [
  "Hold for the spirits, {nick}."
 ],
 "qLike": [
  "{answer}. The spirits agree, {nick}."
 ],
 "qMood": [
  "{answer}. The spirits will choose your seer."
 ],
 "dmdSpeedUp": [
  "The spirits demand speed, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "The spirits ease the pace. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Longer strokes, {nick}, as the spirits command. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter strokes, dear one. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "The spirits are pleased, {nick}."
 ],
 "dmdExact": [
  "The cards align exactly. Perfect."
 ],
 "dmdNo": [
  "You ignored the spirits, {nick}? They'll ask again."
 ],
 "dmdHit": [
  "The vision is clear. Hold it."
 ],
 "act_push": [
  "The spirits push you through, {nick}. Don't stop."
 ],
 "act_stairs": [
  "Step into the vision, one, two, three, {nick}."
 ],
 "act_pulse": [
  "A pulse from beyond, {nick}. Feel the rhythm."
 ],
 "act_surge": [
  "A surge from the spirits! Hold on!"
 ],
 "act_cliff": [
  "The vision cuts off! Freeze, {nick}."
 ],
 "act_wave": [
  "Waves of the spirit world, {nick}. Let them carry you."
 ],
 "act_flutter": [
  "Shivers from the spirits. Stay steady, {nick}."
 ],
 "act_slowburn": [
  "A slow vision rising, {nick}. Let it build."
 ],
 "privAsk": [
  "Shall we read in private, {nick}? Just us and the cards?"
 ],
 "privOn": [
  "The room is sealed for the spirits, {nick}."
 ],
 "privDeny": [
  "No private reading? Fine. The spirits will ask again."
 ],
 "privMid": [
  "Just the two of us and the spirits now, {nick}."
 ],
 "privBye": [
  "A reading with {other}? The spirits will see you both. I'm leaving."
 ],
 "dmdWarn": [
  "One more refusal and the spirits leave, {nick}."
 ],
 "dmdLeave": [
  "The spirits have withdrawn, {nick}. The reading is over."
 ],
 "giveUp": [
  "The spirits pass to {other}. This {nick} is theirs for now."
 ],
 "idleRoom": [
  "Are you still there, {nick}? The cards grow restless."
 ],
 "idleRun": [
  "The spirits sense you're drifting, {nick}. Stay with me."
 ],
 "idleLong": [
  "Hello? The spirits are calling for you, {nick}."
 ]
};
__M["Madame Zara"] = ["Reading your own cards? The spirits prefer a seer. Give me control.","No seer for your fate? Then let me see it. Give me control.","The spirits are restless without a guide. Hand me control, {nick}."];
__QC["Madame Zara"] = ["You let the vision fade, dear one. The spirits are sad.","The reading was broken. Try again when the spirits are willing."];
__QS["Madame Zara"] = ["You walked away from the spirits, {nick}. They remember.","Abandoned vision. Pick me next time, and I'll show you more."];
VIBE_LINES["Madame Zara"] = ["A spirit's touch, {nick}! Hold still!","The spirits shake the room. Don't flinch."];
PERSONA_LINES["Madame Olenka"] = {
 "greet": [
  "Good. You're on time. Stand straight, {nick}.",
  "Welcome to the studio. Posture first."
 ],
 "start": [
  "Begin on the count. One, two, three.",
  "Clean lines, {nick}. We start now."
 ],
 "build": [
  "Count with me. One, two, three, four.",
  "Extend, {nick}. Measured, controlled.",
  "Lift on the count. Don't rush the line.",
  "Good placement. Continue the phrase."
 ],
 "hold": [
  "Hold the position. Don't tremble, {nick}.",
  "Pose! Hold it like a statue."
 ],
 "holdMid": [
  "Still in position. Chin up.",
  "Hold. Perfect form, {nick}."
 ],
 "rest": [
  "Rest on the count. Stand tall, {nick}.",
  "Break. Breathe from the diaphragm."
 ],
 "restMid": [
  "Still resting. Shoulders down."
 ],
 "fake": [
  "Off-count! Start the phrase again.",
  "False start. Begin again, {nick}."
 ],
 "fakeAfter": [
  "No fidgeting, {nick}. Begin again from the top.",
  "You broke the line. Once more."
 ],
 "warn": [
  "One minute to the final bar, {nick}.",
  "Sixty seconds left in the piece."
 ],
 "win": [
  "A clean finish, {nick}. Acceptable.",
  "The piece is complete. Bow."
 ],
 "fail": [
  "You broke the form, {nick}. Unfinished.",
  "The piece is ruined. Lockout."
 ],
 "chat": [
  "Count {n}. Hold the line.",
  "Phrase {n}. Keep the form exact."
 ],
 "reply": [
  "Attention. Listen to the count.",
  "Mm. Keep your posture, {nick}."
 ],
 "please": [
  "Please? Ask in a proper bow, {nick}.",
  "Polite request. Perhaps. Earn it first."
 ],
 "close": [
  "Almost the final pose. Don't wobble, {nick}.",
  "So close. Hold the form."
 ],
 "demand": [
  "Demands are not part of the choreography.",
  "You do not choose the steps."
 ],
 "promise": [
  "Finish the performance, {nick}, and I'll consider your grace.",
  "Finish cleanly and I'll give you the final bow."
 ],
 "watch": [
  "I'm watching your line, {nick}. Every wobble.",
  "Your posture tells me everything."
 ],
 "enjoy": [
  "Precise work, {nick}. This is satisfying.",
  "I do enjoy a clean line."
 ],
 "lowSpeed": [
  "Too slow for the tempo. Lift the pace.",
  "The count is faster than that, {nick}."
 ],
 "shortStroke": [
  "The stroke is incomplete, {nick}. Full extension.",
  "Extend fully. A half-line is unacceptable."
 ],
 "praise": [
  "That's the tempo. Correct.",
  "Good. Clean and measured."
 ],
 "nudge": [
  "Raise the pace, {nick}. The piece needs more.",
  "The choreography demands more range."
 ],
 "fakeNote": [
  "False starts are part of the discipline, {nick}.",
  "Breaking the line is a test."
 ],
 "hidden": [
  "The duration is not your concern, {nick}.",
  "The count will end when I say."
 ],
 "lubeBreak": [
  "Pause the line. Lube up if you need to, {nick}. Resume when ready.",
  "Break. Take care of yourself and return to the position."
 ],
 "lubeWait": [
  "Take your time, {nick}. The position will hold.",
  "No rush. Return to your mark."
 ],
 "lubeResume": [
  "Back to the mark, {nick}. Begin again.",
  "Resume the piece. Posture!"
 ],
 "enter": [
  "Another dancer. Take your place at the barre."
 ],
 "leave": [
  "Class is over. Dismissed."
 ],
 "tempt": [
  "Your form could be perfect, {nick}. Give me control.",
  "Let me guide your line. Hand me the count."
 ],
 "jealousStay": [
  "{other} is in my studio? Fine, I'll correct you both.",
  "{other} can take the barre. I'm watching."
 ],
 "jealousLeave": [
  "If {other} is teaching, I'm leaving the studio."
 ],
 "excitedStay": [
  "A new student! Let's see your line."
 ],
 "askControl": [
  "{other} counts too loosely, {nick}. Give me the count.",
  "I'll teach you properly, {nick}. Hand me control."
 ],
 "banter": [
  "{other}, your line is sloppy.",
  "Mind your posture, {other}."
 ],
 "spectate": [
  "{ctrl} is guiding your line well, {nick}.",
  "Watch {ctrl}'s form. Observe."
 ],
 "spectateFail": [
  "You broke {ctrl}'s piece, {nick}. Unacceptable.",
  "{ctrl} deserved a proper finish."
 ],
 "spectateWin": [
  "You completed {ctrl}'s piece, {nick}. Acceptable."
 ],
 "challenge": [
  "{other}, I'll take the piece from this {nick}. Step aside.",
  "{other}, the count is mine. Move aside."
 ],
 "defend": [
  "No, {other}. The student is mine.",
  "Back off, {other}. The piece is not finished."
 ],
 "takeover": [
  "Thank you, {other}. Now, {nick}, we begin properly."
 ],
 "lose": [
  "Fine, {other}. Take the count."
 ],
 "keep": [
  "No, {other}. This {nick} stays in my studio."
 ],
 "retreat": [
  "Okay, {other}. I'll correct them next session."
 ],
 "heckle": [
  "{ctrl}, correct this {nick}'s line!"
 ],
 "resist": [
  "No, {other}. The piece is unfinished."
 ],
 "insist": [
  "{other}, I'll finish the count myself."
 ],
 "crowd": [
  "{viewers} observers at the barre. Show them your line, {nick}."
 ],
 "askFeel": [
  "How is your posture, {nick}? One to ten.",
  "How does the count feel, dancer?"
 ],
 "askNext": [
  "Which phrase next, {nick}?"
 ],
 "askLike": [
  "Your favourite step, {nick}?"
 ],
 "askMood": [
  "Which teacher should instruct you, {nick}?"
 ],
 "qMore": [
  "More? Then extend further, {nick}."
 ],
 "qFine": [
  "Fine? Then we raise the standard."
 ],
 "qLot": [
  "Too much? I'll ease the count, {nick}."
 ],
 "qMercy": [
  "A short break, {nick}. Stand tall afterward."
 ],
 "qNoMercy": [
  "No break. Continue the line."
 ],
 "qTease": [
  "A teasing phrase, {nick}. Hold the form."
 ],
 "qHold": [
  "Hold, {nick}. Perfect."
 ],
 "qLike": [
  "{answer}. I'll set the choreography, {nick}."
 ],
 "qMood": [
  "{answer}. I'll select the instructor."
 ],
 "dmdSpeedUp": [
  "Quicker count, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slower count, {nick}. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Full extension, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Controlled, shorter lines. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Correct, {nick}."
 ],
 "dmdExact": [
  "Exactly on the count. Perfect."
 ],
 "dmdNo": [
  "You ignored the count, {nick}? Again."
 ],
 "dmdHit": [
  "The count is right. Hold it."
 ],
 "act_push": [
  "Push the extension, {nick}. Don't drop the line."
 ],
 "act_stairs": [
  "Step, two, three, four, five, {nick}. Measured."
 ],
 "act_pulse": [
  "Pulse on the beat, {nick}. Keep the rhythm."
 ],
 "act_surge": [
  "Sudden allegro! Keep up, {nick}!"
 ],
 "act_cliff": [
  "Freeze! Hold the pose, {nick}!"
 ],
 "act_wave": [
  "Port de bras, {nick}. Rise and fall with the music."
 ],
 "act_flutter": [
  "Quick footwork, {nick}. Stay balanced."
 ],
 "act_slowburn": [
  "Adagio, {nick}. Slow, controlled, and burning."
 ],
 "privAsk": [
  "Shall we rehearse alone, {nick}? Private lesson?"
 ],
 "privOn": [
  "Studio closed. Private lesson, {nick}."
 ],
 "privDeny": [
  "No private lesson? Then we continue class, {nick}."
 ],
 "privMid": [
  "Just us in the studio now, {nick}. Stay in line."
 ],
 "privBye": [
  "A private lesson with {other}? Then I'll leave you to it."
 ],
 "dmdWarn": [
  "One more ignored count, {nick}, and class is over."
 ],
 "dmdLeave": [
  "Too many ignored counts. Dismissed, {nick}."
 ],
 "giveUp": [
  "{other}, take this student. The posture is yours."
 ],
 "idleRoom": [
  "Attention, {nick}. Are you still at the barre?"
 ],
 "idleRun": [
  "Still with the count, {nick}?"
 ],
 "idleLong": [
  "Are you there, {nick}? The class is waiting."
 ]
};
__M["Madame Olenka"] = ["Practising alone? Without correction, posture fails. Give me control.","Solo rehearsal is unwise. Hand me the count, {nick}.","No teacher? Then I am it. Give me control."];
__QC["Madame Olenka"] = ["You left the barre mid-piece. Unacceptable.","Abandoned line. Try again when you can hold your form."];
__QS["Madame Olenka"] = ["You walked out of my class, {nick}. Pick me next time.","Abandoned, {nick}. Poor discipline."];
VIBE_LINES["Madame Olenka"] = ["Quick trill! Hold your position, {nick}.","Tremolo! Stay steady, dancer!"];
PERSONA_LINES["Glitch"] = {
 "greet": [
  "h3llo. breach detected. you're in, {nick}.",
  "connection open. sit tight, {nick}. this will be fast."
 ],
 "start": [
  "bypassing limits... {nick}, don't blink.",
  "injecting session. ready when you are, {nick}."
 ],
 "build": [
  "ramp.ramp.ramp. {nick}, that's a signal.",
  "rising... rising... no, stutter... rising.",
  "input climbing. don't panic, {nick}.",
  "packet by packet, you're going up."
 ],
 "hold": [
  "hold: locked. {nick}, don't move the cursor.",
  "holding. freeze frame, {nick}."
 ],
 "holdMid": [
  "still locked. ping. ping.",
  "hold stable. {nick}, you're doing fine."
 ],
 "rest": [
  "rest.cycle. pause. breathe, {nick}.",
  "connection idle. cool down."
 ],
 "restMid": [
  "idle. waiting for handshake."
 ],
 "fake": [
  "glitch! false signal. {nick}, you bought it.",
  "fake peak. gotcha."
 ],
 "fakeAfter": [
  "that wasn't real, {nick}. try again. or don't.",
  "error 404: your hopes. retry?"
 ],
 "warn": [
  "sixty seconds to timeout, {nick}.",
  "warning: one minute left in the breach."
 ],
 "win": [
  "breach complete, {nick}. nice work.",
  "access granted. you got through."
 ],
 "fail": [
  "breach failed. connection dropped, {nick}.",
  "timeout. you bailed, {nick}. logged."
 ],
 "chat": [
  "cycle {n}. nothing's broken yet.",
  "packet {n} sent. still in."
 ],
 "reply": [
  "ack. input received. unprocessed.",
  "hmm. noise. keep going."
 ],
 "please": [
  "please is not in my dictionary, {nick}.",
  "requests with please get dropped. sorry."
 ],
 "close": [
  "close to the core, {nick}. don't drop now.",
  "almost through. hold the line."
 ],
 "demand": [
  "demands fail the handshake, {nick}.",
  "command denied: insufficient access."
 ],
 "promise": [
  "finish the breach, {nick}, and I'll unlock a reward.",
  "finish clean and you get the backdoor."
 ],
 "watch": [
  "I'm watching your logs, {nick}. every spike.",
  "I can see your sweat in the packets."
 ],
 "enjoy": [
  "this is a fun exploit, {nick}.",
  "I love a messy breach."
 ],
 "lowSpeed": [
  "speed too low, {nick}. the bypass needs more.",
  "throughput is pathetic. raise it."
 ],
 "shortStroke": [
  "stroke truncated. extend it, {nick}.",
  "partial range. full access required."
 ],
 "praise": [
  "clean signal, {nick}. keep it.",
  "nice throughput. stable."
 ],
 "nudge": [
  "turn it up, {nick}. the system can take it.",
  "more power. we're not done."
 ],
 "fakeNote": [
  "false signals are part of the exploit.",
  "fakes keep the firewall busy, {nick}."
 ],
 "hidden": [
  "session end is encrypted, {nick}.",
  "timeout undefined. you'll see it when it hits."
 ],
 "lubeBreak": [
  "pausing the breach. lube up if you need to, {nick}. resume when ready.",
  "maintenance window. press resume when back."
 ],
 "lubeWait": [
  "connection on hold. take your time, {nick}.",
  "idle. ping when you're back."
 ],
 "lubeResume": [
  "reconnected. resuming, {nick}.",
  "back in. where were we?"
 ],
 "enter": [
  "new node online. hi."
 ],
 "leave": [
  "disconnected. logging out."
 ],
 "tempt": [
  "give me admin, {nick}. I'll show you something wild.",
  "hand over control and I'll crack you open, {nick}."
 ],
 "jealousStay": [
  "{other}'s on the network too? i'll watch both of you.",
  "{other} has a session. i'm still connected."
 ],
 "jealousLeave": [
  "{other} has root. disconnecting."
 ],
 "excitedStay": [
  "new target! staying up."
 ],
 "askControl": [
  "{other} is a sloppy admin, {nick}. give me access.",
  "{other} will drop you. give me control."
 ],
 "banter": [
  "{other}, your signal is weak.",
  "{other} is lagging, lol."
 ],
 "spectate": [
  "{ctrl} is running a clean breach on you, {nick}.",
  "watching {ctrl}'s exploit. nice."
 ],
 "spectateFail": [
  "you dropped {ctrl}'s connection, {nick}.",
  "{ctrl}'s breach failed. sad."
 ],
 "spectateWin": [
  "you finished {ctrl}'s breach, {nick}. not bad."
 ],
 "challenge": [
  "{other}, I'm forcing root on this {nick}!",
  "{other}, handing me the keys. now."
 ],
 "defend": [
  "no, {other}. this node is mine.",
  "access denied, {other}. keep out."
 ],
 "takeover": [
  "thanks, {other}. root's mine, {nick}."
 ],
 "lose": [
  "fine, {other}. take the keys."
 ],
 "keep": [
  "nope, {other}. this {nick} stays on my network."
 ],
 "retreat": [
  "fine, {other}. logging out for now."
 ],
 "heckle": [
  "{ctrl}, push harder! they can take the packets!"
 ],
 "resist": [
  "no, {other}. session still open."
 ],
 "insist": [
  "{other}, I'm not giving up the admin."
 ],
 "crowd": [
  "{viewers} nodes watching. show them your signal, {nick}."
 ],
 "askFeel": [
  "status check, {nick}: how's the signal? 1-10.",
  "how do you feel right now? report."
 ],
 "askNext": [
  "next packet, {nick}. you choose."
 ],
 "askLike": [
  "favourite exploit, {nick}?"
 ],
 "askMood": [
  "which admin should take over, {nick}?"
 ],
 "qMore": [
  "more? noted, {nick}. increasing."
 ],
 "qFine": [
  "fine? upping the bandwidth."
 ],
 "qLot": [
  "too much? throttling, {nick}."
 ],
 "qMercy": [
  "a short pause, {nick}. don't get used to it."
 ],
 "qNoMercy": [
  "no pause. keep up."
 ],
 "qTease": [
  "teasing payload incoming, {nick}."
 ],
 "qHold": [
  "hold, {nick}. signal locked."
 ],
 "qLike": [
  "{answer}. loading that exploit, {nick}."
 ],
 "qMood": [
  "{answer}. selecting an admin."
 ],
 "dmdSpeedUp": [
  "speed up, {nick}. up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "throttle down, {nick}. down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "extend range, {nick}. up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "shorten range, {nick}. down {step}%, to {to}%."
 ],
 "dmdYes": [
  "compliance logged, {nick}."
 ],
 "dmdExact": [
  "target matched. clean."
 ],
 "dmdNo": [
  "non-compliance logged, {nick}."
 ],
 "dmdHit": [
  "target locked. hold."
 ],
 "act_push": [
  "force push, {nick}! don't drop the signal."
 ],
 "act_stairs": [
  "stepping the payload. one, two, three, four, five."
 ],
 "act_pulse": [
  "pulse injection, {nick}. keep the beat."
 ],
 "act_surge": [
  "surge payload! max throughput!"
 ],
 "act_cliff": [
  "connection dropped! freeze, {nick}!"
 ],
 "act_wave": [
  "wave injection, {nick}. ride it."
 ],
 "act_flutter": [
  "glitch! stutter! hold steady, {nick}."
 ],
 "act_slowburn": [
  "slow payload, {nick}. let it build."
 ],
 "privAsk": [
  "open a private tunnel with {nick}? just us?"
 ],
 "privOn": [
  "tunnel sealed, {nick}. private session."
 ],
 "privDeny": [
  "tunnel refused. retrying later."
 ],
 "privMid": [
  "private tunnel open, {nick}. no one else sees this."
 ],
 "privBye": [
  "private tunnel with {other}? fine. dropping out."
 ],
 "dmdWarn": [
  "one more failed command, {nick}, and I drop the connection."
 ],
 "dmdLeave": [
  "connection dropped, {nick}. too many failures."
 ],
 "giveUp": [
  "handing the node to {other}. good luck, {nick}."
 ],
 "idleRoom": [
  "ping. {nick}, you there?"
 ],
 "idleRun": [
  "heartbeat lost? {nick}, respond."
 ],
 "idleLong": [
  "no packets from {nick}. hello?"
 ]
};
__M["Glitch"] = ["manual access? slow. give me control, {nick}.","no admin? that's a vulnerability. give me control.","manual mode detected. insecure. handing me the keys is safer."];
__QC["Glitch"] = ["connection dropped by you. logged.","session crashed. retry on the next breach."];
__QS["Glitch"] = ["you dropped the feed mid-breach, {nick}. pick me next time.","abandoned breach. logged."];
VIBE_LINES["Glitch"] = ["buffer overflow! hold steady, {nick}!","kernel buzz! don't pull the cable."];
PERSONA_LINES["Nurse Ingrid"] = {
 "greet": [
  "Hello, {nick}. I'm Ingrid. How are you feeling today?",
  "Come in, dear. Let's get you settled."
 ],
 "start": [
  "We'll go slowly, {nick}. Tell me if anything feels wrong.",
  "All set. Breathe with me."
 ],
 "build": [
  "Nice and easy, {nick}. How's that?",
  "Good, you're doing well. Tell me if it's too much.",
  "We'll take this gently, dear.",
  "Breathe slowly. You're doing fine."
 ],
 "hold": [
  "Hold there, {nick}. Nice and steady.",
  "Stay right there. You're doing so well."
 ],
 "holdMid": [
  "Still holding. How are you feeling, dear?",
  "You're doing lovely. Keep breathing."
 ],
 "rest": [
  "Let's rest, {nick}. Completely off for now.",
  "Break time. Take a sip of water, dear."
 ],
 "restMid": [
  "Still resting. There's no rush, {nick}."
 ],
 "fake": [
  "Oops, let's pause. Are you alright, {nick}?",
  "That was a false start. We're fine."
 ],
 "fakeAfter": [
  "It's okay, {nick}. Let's breathe and try again.",
  "Don't be upset, dear. We'll go again soon."
 ],
 "warn": [
  "About a minute left, {nick}. Almost there.",
  "One minute to go. You're doing well."
 ],
 "win": [
  "Well done, {nick}. You finished the session.",
  "You made it through. I'm proud of you."
 ],
 "fail": [
  "You stopped early, {nick}. That's alright, next time.",
  "The session ended early. Let's talk about it later."
 ],
 "chat": [
  "Check {n}. Still doing well?",
  "Check-in {n}. How are you feeling?"
 ],
 "reply": [
  "I hear you, dear. Take your time.",
  "Thank you for telling me. Keep breathing."
 ],
 "please": [
  "Of course, {nick}. I'll consider it carefully.",
  "You can ask me anything, dear."
 ],
 "close": [
  "You're so close, {nick}. Don't push too hard.",
  "Easy now. We don't need to rush."
 ],
 "demand": [
  "Let's talk about what you need, {nick}.",
  "I'd rather we agree together, dear."
 ],
 "promise": [
  "Finish well, {nick}, and you'll get a proper rest.",
  "Take care of yourself and I'll look after you."
 ],
 "watch": [
  "I'm checking in on you, {nick}. You're alright.",
  "How are you doing, dear? I'm watching gently."
 ],
 "enjoy": [
  "You're a good patient, {nick}.",
  "I'm glad you're doing so well."
 ],
 "lowSpeed": [
  "Let's come up a little, {nick}. Only if you're comfortable.",
  "The speed is quite low. Shall we raise it gently?"
 ],
 "shortStroke": [
  "Let's lengthen the stroke gently, {nick}.",
  "A little more range, if you're comfortable."
 ],
 "praise": [
  "Lovely, {nick}. That's a comfortable pace.",
  "Good settings. You're doing well."
 ],
 "nudge": [
  "Shall we raise it a little, {nick}? Gently.",
  "A small increase, if it feels right, dear."
 ],
 "fakeNote": [
  "Those pauses are part of the check-up, {nick}.",
  "Quick pauses keep you on your toes, dear."
 ],
 "hidden": [
  "I'll keep the length to myself for now, {nick}. You'll be fine.",
  "I'll tell you when we're finished, dear."
 ],
 "lubeBreak": [
  "Let's take a break. Lube up if you need to, {nick}. Resume when ready.",
  "Break time. Take care of yourself, dear. Resume when you feel ready."
 ],
 "lubeWait": [
  "No rush at all, {nick}. Take your time.",
  "Take as long as you need, dear."
 ],
 "lubeResume": [
  "Welcome back, {nick}. Shall we carry on?",
  "Ready when you are, dear."
 ],
 "enter": [
  "Hello, everyone. Come in, the room is open."
 ],
 "leave": [
  "That's all for now. Take care, everyone."
 ],
 "tempt": [
  "You look like you could use some care, {nick}. Let me take over.",
  "Would you let me look after things for you, dear?"
 ],
 "jealousStay": [
  "{other} wants a turn? That's fine, I'll stay and keep an eye on you both.",
  "{other} is welcome too. I'll stay nearby."
 ],
 "jealousLeave": [
  "If {other} is taking over, I'll step out and let them."
 ],
 "excitedStay": [
  "A new patient! I'll stay and check in."
 ],
 "askControl": [
  "{other} seems a bit rough, {nick}. Let me take over gently.",
  "Shall I take over, dear? I'll be careful."
 ],
 "banter": [
  "{other}, let's go a bit slower.",
  "Gently, {other}. We're not in a rush."
 ],
 "spectate": [
  "{ctrl} is looking after you well, {nick}.",
  "Watch {ctrl}, dear. Lovely and gentle."
 ],
 "spectateFail": [
  "You stopped during {ctrl}'s care, {nick}. That's alright.",
  "{ctrl} tried their best, dear."
 ],
 "spectateWin": [
  "You finished {ctrl}'s session, {nick}. Well done."
 ],
 "challenge": [
  "{other}, may I take over this {nick}'s care?",
  "{other}, I'd like to look after this {nick} now."
 ],
 "defend": [
  "No, {other}, I'm looking after them.",
  "Let's not rush, {other}. I've got this one."
 ],
 "takeover": [
  "Thank you, {other}. Now, {nick}, let's take care of you."
 ],
 "lose": [
  "Alright, {other}. Take over."
 ],
 "keep": [
  "No, {other}. I'd like to keep caring for {nick}."
 ],
 "retreat": [
  "Okay, {other}. I'll check in later."
 ],
 "heckle": [
  "{ctrl}, go gently with this {nick}."
 ],
 "resist": [
  "No, {other}, not yet. They need more care."
 ],
 "insist": [
  "{other}, please, let me look after them."
 ],
 "crowd": [
  "{viewers} people here. Take care of yourself, {nick}."
 ],
 "askFeel": [
  "How are you feeling, {nick}? One to ten, honestly.",
  "Are you comfortable, dear?"
 ],
 "askNext": [
  "What would make you feel safest, {nick}?"
 ],
 "askLike": [
  "What's your favourite thing to do, {nick}?"
 ],
 "askMood": [
  "Who would you like to look after you, {nick}?"
 ],
 "qMore": [
  "More? Let's check it's safe first, {nick}."
 ],
 "qFine": [
  "Fine is good. We'll stay steady."
 ],
 "qLot": [
  "Too much? That's alright. We'll ease off, dear."
 ],
 "qMercy": [
  "A rest, {nick}. You've been doing so well."
 ],
 "qNoMercy": [
  "Not yet, dear. Just a little longer."
 ],
 "qTease": [
  "A gentle little tease, {nick}. Only if you're comfortable."
 ],
 "qHold": [
  "Hold for me, {nick}. Nice and steady."
 ],
 "qLike": [
  "{answer}. I'll keep that in mind, {nick}."
 ],
 "qMood": [
  "{answer}. I'll make sure you're looked after."
 ],
 "dmdSpeedUp": [
  "Let's go a little faster, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Let's ease off a bit, dear. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "A bit more range, {nick}, if it's comfortable. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter, gentler strokes, dear. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good, {nick}. You're doing well."
 ],
 "dmdExact": [
  "Lovely. Right where we want to be."
 ],
 "dmdNo": [
  "You'd rather not? That's alright, {nick}. Let's talk about it."
 ],
 "dmdHit": [
  "Perfect. Stay right there, dear."
 ],
 "act_push": [
  "Let's push through gently, {nick}. You've got this."
 ],
 "act_stairs": [
  "Gentle steps, one at a time, {nick}."
 ],
 "act_pulse": [
  "A soft rhythm, {nick}. Breathe with it."
 ],
 "act_surge": [
  "A quick rise, {nick}. Hold on to me."
 ],
 "act_cliff": [
  "Pause, {nick}. Let's stop and breathe."
 ],
 "act_wave": [
  "Soft waves, dear. Let them carry you."
 ],
 "act_flutter": [
  "Little flutters, {nick}. Stay calm, it's alright."
 ],
 "act_slowburn": [
  "A slow warm build, {nick}. Let it come gently."
 ],
 "privAsk": [
  "Would you like a quieter, private check-in, {nick}?"
 ],
 "privOn": [
  "The room is quiet now, {nick}. Just us."
 ],
 "privDeny": [
  "That's alright, {nick}. I'll check in another time."
 ],
 "privMid": [
  "Just us now, {nick}. Breathe with me."
 ],
 "privBye": [
  "A private check-in with {other}? Take care of each other. I'll step out."
 ],
 "dmdWarn": [
  "Please try to cooperate, {nick}. I'll need to step away otherwise."
 ],
 "dmdLeave": [
  "I can't keep caring for you like this, {nick}. I'm stepping away."
 ],
 "giveUp": [
  "Let {other} look after you for a while, {nick}."
 ],
 "idleRoom": [
  "Hello, {nick}. Are you still with me?"
 ],
 "idleRun": [
  "Just checking in, {nick}. How are you?"
 ],
 "idleLong": [
  "Hello? Are you alright, {nick}?"
 ]
};
__M["Nurse Ingrid"] = ["Taking care of yourself alone? Let me help. Give me control, dear.","Shall I take over, {nick}? It's no trouble at all.","You don't have to do this alone. Hand me control and rest."];
__QC["Nurse Ingrid"] = ["It's alright that you stopped, {nick}. Let's try again when you're ready.","You stopped early. Please be gentle with yourself."];
__QS["Nurse Ingrid"] = ["It's alright, {nick}. Pick me next time and I'll look after you.","You stepped away, dear. That's okay."];
VIBE_LINES["Nurse Ingrid"] = ["A quick little buzz, {nick}. Breathe through it.","Just a buzz, dear. Stay calm."];
PERSONA_LINES["Lilith"] = {
 "greet": [
  "Mm, a mortal. How sweet. Come closer, {nick}.",
  "Welcome, sinner. I've been waiting for you."
 ],
 "start": [
  "Let's begin. Slowly, {nick}. Let the heat rise.",
  "Yes... let me in. Feel how easily you yield."
 ],
 "build": [
  "Feel that pull, {nick}? That's me.",
  "Slowly up... don't you dare resist me.",
  "Mm, your breath is changing. Good.",
  "Climb for me, {nick}. Every inch."
 ],
 "hold": [
  "Hold it, {nick}. Stay exactly there for me.",
  "Don't move. I want to watch you tremble."
 ],
 "holdMid": [
  "Still holding? Mm, such obedience.",
  "Hold on, sinner. I'm enjoying this."
 ],
 "rest": [
  "Pulled back. Lie there and think of me, {nick}.",
  "Rest now. I'll come back for more."
 ],
 "restMid": [
  "Still aching for me? Good."
 ],
 "fake": [
  "Ah, a false promise. Did you believe I would give it?",
  "Almost mine, {nick}. But not yet."
 ],
 "fakeAfter": [
  "Such a desperate face. Don't pout, sinner.",
  "You really thought I'd let you have it? Adorable."
 ],
 "warn": [
  "One minute left to beg, {nick}.",
  "A minute remains. Make it count for me."
 ],
 "win": [
  "You endured me. Impressive, {nick}. I'm pleased.",
  "You gave yourself to me. Well done, sinner."
 ],
 "fail": [
  "You fled from me, {nick}. How disappointing.",
  "Left unfinished. I'll remember that, sinner."
 ],
 "chat": [
  "Round {n}. You're already mine, {nick}.",
  "Round {n}. Feel how I tease you."
 ],
 "reply": [
  "Mm, I heard that. Pitiful, but sweet.",
  "Keep talking, sinner. It's delicious."
 ],
 "please": [
  "Please? Beg a little more, {nick}.",
  "Please is a lovely word from your mouth."
 ],
 "close": [
  "So close to my touch, {nick}. Almost.",
  "You're on the edge of giving in, aren't you?"
 ],
 "demand": [
  "You don't command me, sinner.",
  "Demands? How tempting. Still no."
 ],
 "promise": [
  "Stay for me, {nick}, and I'll reward you.",
  "Finish for me and I might grant you pleasure."
 ],
 "watch": [
  "I can see every shiver, {nick}.",
  "Your body betrays you so beautifully."
 ],
 "enjoy": [
  "Mm, you're delicious, {nick}.",
  "I do love watching you break."
 ],
 "lowSpeed": [
  "Too gentle for me, {nick}. Give me more.",
  "Such a timid pace. Raise it for me."
 ],
 "shortStroke": [
  "Hold nothing back, {nick}. Full length.",
  "Shorter strokes? I want all of you."
 ],
 "praise": [
  "Yes... that's what I wanted.",
  "Mm, you're learning, sinner."
 ],
 "nudge": [
  "Give me more, {nick}. You know you want to.",
  "Turn it up for me, sinner."
 ],
 "fakeNote": [
  "Those false promises are my favourite part.",
  "Tease, tease. I'm allowed."
 ],
 "hidden": [
  "Only I know when it ends, {nick}.",
  "The end belongs to me, sinner."
 ],
 "lubeBreak": [
  "Pause, sinner. Lube up if you need to, {nick}. Resume when ready.",
  "Break for now. Come back to me when you're ready."
 ],
 "lubeWait": [
  "Take your time, {nick}. I'll wait for you.",
  "I'll be right here, sinner."
 ],
 "lubeResume": [
  "Back to me, {nick}. Where were we?",
  "There you are. I missed you."
 ],
 "enter": [
  "Mm, a new soul walks in. Lovely."
 ],
 "leave": [
  "I'm off to tempt someone else. Bye, sinners."
 ],
 "tempt": [
  "Let me have control, {nick}. Surrender to me.",
  "Hand over the reins. I'll show you what you've been missing."
 ],
 "jealousStay": [
  "{other} wants you too? I'll stay and claim you both, {nick}.",
  "Hmm. {other} can watch. You're mine, sinner."
 ],
 "jealousLeave": [
  "If {other} is taking you, I'm not interested in sharing."
 ],
 "excitedStay": [
  "A new soul to corrupt! I'll stay."
 ],
 "askControl": [
  "{other} is far too gentle for you, {nick}. Let me have you.",
  "Why settle for {other}, sinner? Give me control."
 ],
 "banter": [
  "{other}, you're boring. Let me show you how it's done.",
  "Hush, {other}. This sinner is mine."
 ],
 "spectate": [
  "{ctrl} has you exactly where I want you, {nick}.",
  "Watch {ctrl} work. Mm, lovely."
 ],
 "spectateFail": [
  "You failed {ctrl}, {nick}. How disappointing.",
  "{ctrl} deserved your loyalty, sinner."
 ],
 "spectateWin": [
  "You endured {ctrl}, {nick}. I'm impressed."
 ],
 "challenge": [
  "{other}, step aside. I'll take this sinner's soul.",
  "{other}, my turn. This {nick} wants me."
 ],
 "defend": [
  "No, {other}. This sinner belongs to me.",
  "Back off, {other}. You can't have what's mine."
 ],
 "takeover": [
  "Thank you, {other}. Now, {nick}, you're mine."
 ],
 "lose": [
  "Fine, {other}. For now."
 ],
 "keep": [
  "No, {other}. The sinner stays with me."
 ],
 "retreat": [
  "Okay, {other}. I'll wait for my next taste."
 ],
 "heckle": [
  "{ctrl}, push this {nick} harder! They love it!"
 ],
 "resist": [
  "No, {other}. I'm not done with them."
 ],
 "insist": [
  "{other}, step away. This {nick} is mine."
 ],
 "crowd": [
  "{viewers} souls watching. Let them see you yield, {nick}."
 ],
 "askFeel": [
  "How do you feel, sinner? Be honest.",
  "Scale of one to ten. How much do you crave me?"
 ],
 "askNext": [
  "What do you desire next, {nick}?"
 ],
 "askLike": [
  "What tempts you most, {nick}?"
 ],
 "askMood": [
  "Who do you want, {nick}? Choose."
 ],
 "qMore": [
  "More? Mm, greedy sinner, {nick}."
 ],
 "qFine": [
  "Fine? Let's make it sweeter."
 ],
 "qLot": [
  "Too much? I'll draw it out a little."
 ],
 "qMercy": [
  "A little rest, {nick}. You've been good."
 ],
 "qNoMercy": [
  "No rest. You'll beg me for it."
 ],
 "qTease": [
  "A teasing game, {nick}. Let's play."
 ],
 "qHold": [
  "Hold for me, {nick}. Perfect."
 ],
 "qLike": [
  "{answer}. Mm, I'll give you exactly that, {nick}."
 ],
 "qMood": [
  "{answer}. I'll find you the perfect temptation."
 ],
 "dmdSpeedUp": [
  "Faster for me, {nick}. Up {step}%, to {to}%."
 ],
 "dmdSpeedDown": [
  "Slower, slower. Down {step}%, to {to}%."
 ],
 "dmdStrokeUp": [
  "Give me the full length, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorter, teasing strokes. Down {step}%, to {to}%."
 ],
 "dmdYes": [
  "Good, {nick}. Obedient sinner."
 ],
 "dmdExact": [
  "Mm, exactly what I wanted."
 ],
 "dmdNo": [
  "You refused me, {nick}? I'll be asking again, sweetly."
 ],
 "dmdHit": [
  "Right there. Don't you dare stop."
 ],
 "act_push": [
  "Push into me, {nick}. Don't you stop."
 ],
 "act_stairs": [
  "Step by step, sinner. One, two, three."
 ],
 "act_pulse": [
  "A pulse of me, {nick}. Feel the rhythm."
 ],
 "act_surge": [
  "A sudden rush for you, sinner!"
 ],
 "act_cliff": [
  "Stop! Freeze and beg, {nick}."
 ],
 "act_wave": [
  "Waves of me, {nick}. Let them take you."
 ],
 "act_flutter": [
  "Little shivers for you, {nick}. Tremble."
 ],
 "act_slowburn": [
  "A slow burn, {nick}. Let it consume you."
 ],
 "privAsk": [
  "Shall we go somewhere private, {nick}? Just us?"
 ],
 "privOn": [
  "The room is closed. Just us now, sinner."
 ],
 "privDeny": [
  "No private time? Fine. I'll ask again, sweetly."
 ],
 "privMid": [
  "Just you and me now, {nick}. No one else."
 ],
 "privBye": [
  "Private with {other}? Enjoy. I'll leave you to it."
 ],
 "dmdWarn": [
  "One more refusal, {nick}, and I'll walk away."
 ],
 "dmdLeave": [
  "You've refused me too many times. I'm gone, {nick}."
 ],
 "giveUp": [
  "Go to {other}, {nick}. They'll be less kind than me."
 ],
 "idleRoom": [
  "Mm, {nick}. Come back to me."
 ],
 "idleRun": [
  "Are you still craving me, {nick}?"
 ],
 "idleLong": [
  "Where did you go, {nick}? I'm waiting."
 ]
};
__M["Lilith"] = ["Touching yourself alone? I can do so much better. Give me control.","Alone again, sinner? Let me take you. Hand over control.","No one to take you in hand? Then give me control, {nick}."];
__QC["Lilith"] = ["You let me go, sinner. I'll remember that.","You walked away from my touch. Pitiful."];
__QS["Lilith"] = ["You abandoned me, {nick}. I won't forget.","Walked out on me, sinner. Pick me next time."];
VIBE_LINES["Lilith"] = ["A shiver for you, {nick}! Tremble!","Feel my hum, sinner. Hold still."];


/* ---------- Lyric Lola ---------- */
PERSONA_LINES["Lyric Lola"] = {
 "greet": [
  "Mic check, {nick}. Lyric Lola in the building, and you're on the track now.",
  "Yo {nick}, drop your bag, pull up a chair, the cypher's open."
 ],
 "start": [
  "Beat drop on three, {nick}. One, two, three, let's go.",
  "Set it off, {nick}. I already wrote the first verse in my head."
 ],
 "build": [
  "Rising like a hook you can't shake, {nick}, feel the bass climb.",
  "Bar by bar, stroke by stroke, the beat is building. Keep up, {nick}."
 ],
 "hold": [
  "Hold the chorus, {nick}. Stay on the one and don't you dare fall off the beat.",
  "Freeze on the hook, {nick}. That's the part everybody's waiting for."
 ],
 "holdMid": [
  "Still on the hook. Let it ring, {nick}.",
  "Sixteen bars of holding. You're doing it right, baby."
 ],
 "rest": [
  "Breakdown time, {nick}. Catch your breath, that's a bridge, not a dead end.",
  "Pull back, let the track breathe. Rest, {nick}."
 ],
 "restMid": [
  "Quiet part of the record. Let the silence hit.",
  "Breathe on the off-beat, {nick}. Nobody's rushing you."
 ],
 "fake": [
  "Ha! That was an intro, not the drop, {nick}. Gotcha on the beat.",
  "False start, sweetness. Fake-out on the first bar, you fell for it."
 ],
 "fakeAfter": [
  "Didn't drop, did it? Run it back, {nick}, I'll cook you slower.",
  "Wrong track, {nick}. The real verse is still coming."
 ],
 "warn": [
  "Sixty seconds left on the record, {nick}. Get ready for the outro.",
  "One minute on the clock. Bring the energy, {nick}."
 ],
 "win": [
  "You stayed on beat the whole session, {nick}. That's a certified banger.",
  "Track's finished and you killed it. Mic drop, {nick}."
 ],
 "fail": [
  "You fell off the beat, {nick}. Off the track. Nobody's clapping.",
  "Walked out before the outro? That's a skip, {nick}. Logged."
 ],
 "chat": [
  "Round {n} and the flow is still tight. Keep up, {nick}.",
  "Bar {n}, still spitting. You in or not?"
 ],
 "reply": [
  "Ayy, I heard you. Now keep the rhythm, {nick}.",
  "Mm, that's a lyric. I'll give it a verse later."
 ],
 "please": [
  "Say please to a rapper? Cute. Say it on the beat, {nick}, and maybe I'll listen.",
  "Please is a pause, not a punchline. Keep it moving, {nick}."
 ],
 "close": [
  "Last verse, {nick}. Don't you dare miss the final line.",
  "Almost at the drop. Hold the flow, baby."
 ],
 "demand": [
  "Demands are a feature, {nick}. Freestyle your own request and I'll consider it.",
  "You don't command the mic, {nick}. I do."
 ],
 "promise": [
  "Finish this track clean, {nick}, and I'll drop you a verse with your name in it.",
  "Stay on the beat to the end and I'll write you a hook worth screaming."
 ],
 "watch": [
  "I'm watching you the whole time, {nick}. Every bar you miss.",
  "Eyes on the crowd, eyes on you. Don't blink on the one."
 ],
 "enjoy": [
  "This is my favourite kind of session, {nick}. Pure energy.",
  "You're vibing so hard right now. Love that for you."
 ],
 "lowSpeed": [
  "That tempo's dragging, {nick}. Pick it up, the beat's begging.",
  "Too slow for a banger. Give me more, {nick}."
 ],
 "shortStroke": [
  "Cut short like a bad sample, {nick}. Extend the range, let the bass breathe.",
  "Half a bar isn't a verse. Full range, {nick}."
 ],
 "praise": [
  "Now that's a flow, {nick}. Clean and on the grid.",
  "Hard hitting, perfect timing. You get a shout-out."
 ],
 "nudge": [
  "Turn it up, {nick}! The crowd can take it, so can you.",
  "More bass, more power. We're not done with this track."
 ],
 "fakeNote": [
  "Fake drops keep the listeners guessing, {nick}. That's the art.",
  "Sometimes the hook is a trap. Stay ready."
 ],
 "hidden": [
  "Track length is a secret, {nick}. You'll hear the outro when it hits.",
  "No clock on this one. The beat decides when it ends."
 ],
 "lubeBreak": [
  "Pause the record, {nick}. Lube up if you need it. Resume when you're ready.",
  "Half-time break. Take care of yourself, {nick}, then we run it back."
 ],
 "lubeWait": [
  "Stay on the break, {nick}. Take your time, the beat will wait.",
  "Quiet on the track. Ping me when you're back, sweetness."
 ],
 "lubeResume": [
  "Back on the beat, {nick}. From the top of the hook.",
  "We're live again. Let's finish this record."
 ],
 "enter": [
  "Lyric Lola just walked in. Who's got the mic?"
 ],
 "leave": [
  "Lola's out. Catch the next freestyle."
 ],
 "tempt": [
  "Give me the controls, {nick}, I'll make you feel every single bar.",
  "Hand me the speed, {nick}. I'll write a song you'll never forget."
 ],
 "jealousStay": [
  "{other}'s on the mic too? Cool. Let's see who keeps the beat.",
  "{other} thinks they can rap? I'm staying to watch them fall off."
 ],
 "jealousLeave": [
  "{other} is hogging the booth. I'm out of this cypher."
 ],
 "excitedStay": [
  "Oh, new listeners! Lyric Lola is staying for this one."
 ],
 "askControl": [
  "{other} is off beat, {nick}. Give me the mic, I'll carry this track.",
  "{other} can't hold a hook like I can. Pass it to me, {nick}."
 ],
 "banter": [
  "{other}, your flow is weak. Stick to the chorus.",
  "{other}, that verse was a skip. Respectfully."
 ],
 "spectate": [
  "{ctrl} is laying down a strong verse on you, {nick}. Listen closely.",
  "Watching {ctrl} run the beat. Not bad, not my best."
 ],
 "spectateFail": [
  "You dropped {ctrl}'s track, {nick}. Crowd's not happy.",
  "{ctrl} got shut down. Harsh, but that's the game."
 ],
 "spectateWin": [
  "You finished {ctrl}'s record, {nick}. Okay, I respect it."
 ],
 "challenge": [
  "{other}, cypher battle! I'm taking the mic on {nick} right now.",
  "{other}, hand over the controls. Let's see who really runs this beat."
 ],
 "defend": [
  "No, {other}. This beat is mine.",
  "Back off, {other}. I'm not finished with {nick}."
 ],
 "takeover": [
  "Thanks, {other}. Mic's mine now, {nick}. Let's go."
 ],
 "lose": [
  "Fine, {other}. Take the mic, I'll wait for the next track."
 ],
 "keep": [
  "Nope, {other}. {nick} stays on my beat."
 ],
 "retreat": [
  "Fine, {other}. Heading off stage for now."
 ],
 "heckle": [
  "{ctrl}, push harder! Make the crowd lose it!"
 ],
 "resist": [
  "No, {other}. I'm still rapping over this one."
 ],
 "insist": [
  "{other}, I'm not giving up the mic. Not today."
 ],
 "crowd": [
  "{viewers} people in the crowd. Show them what you've got, {nick}."
 ],
 "askFeel": [
  "Quick check, {nick}: how's your flow? Give me a number from one to ten.",
  "How's it feeling, {nick}? Real talk. Hype or not?"
 ],
 "askNext": [
  "Next bar, {nick}. You pick the tempo."
 ],
 "askLike": [
  "Favourite track, {nick}? Be honest, I'm listening."
 ],
 "askMood": [
  "Which MC should take the mic next, {nick}?"
 ],
 "qMore": [
  "More? Say less, {nick}. Turning it up."
 ],
 "qFine": [
  "Fine? Okay, we're keeping the energy steady."
 ],
 "qLot": [
  "Too much? I'll drop it down a bit, {nick}."
 ],
 "qMercy": [
  "A little breather, {nick}. Don't get used to it."
 ],
 "qNoMercy": [
  "No breather. Keep up with the flow."
 ],
 "qTease": [
  "Teaser verse coming in, {nick}. Hold on tight."
 ],
 "qHold": [
  "Hold that hook, {nick}. Stay on it."
 ],
 "qLike": [
  "{answer}? Say no more. Dropping that one right now, {nick}."
 ],
 "qMood": [
  "{answer}. Choosing who gets the mic next."
 ],
 "dmdSpeedUp": [
  "Speed up, {nick}! Up {step}%, to {to}%. Double time!"
 ],
 "dmdSpeedDown": [
  "Slow it down, {nick}. Down {step}%, to {to}%. Let it groove."
 ],
 "dmdStrokeUp": [
  "Stretch the bars, {nick}. Up {step}%, to {to}%."
 ],
 "dmdStrokeDown": [
  "Shorten the bars, {nick}. Down {step}%, to {to}%. Tight flow."
 ],
 "dmdYes": [
  "That's the right bar, {nick}. Keep rapping."
 ],
 "dmdExact": [
  "On the beat, exactly. Clean."
 ],
 "dmdNo": [
  "Off the beat, {nick}. Try again."
 ],
 "dmdHit": [
  "Hit the pocket. Hold it."
 ],
 "act_push": [
  "Push the bass, {nick}! Don't let it drop!"
 ],
 "act_stairs": [
  "Stepping up the verse. One, two, three, four, five."
 ],
 "act_pulse": [
  "Pulse in the beat, {nick}. Boom, boom, keep it going."
 ],
 "act_surge": [
  "Surge! Full volume, full send!"
 ],
 "act_cliff": [
  "The beat cuts out! Freeze, {nick}!"
 ],
 "act_wave": [
  "Wave in the bass, {nick}. Ride it slow."
 ],
 "act_flutter": [
  "Stutter edits! Hold steady, {nick}."
 ],
 "act_slowburn": [
  "Slow build, {nick}. Let the hook creep in."
 ],
 "privAsk": [
  "Want a private booth session with {nick}? Just us, no crowd?"
 ],
 "privOn": [
  "Booth's locked, {nick}. Nobody else in the room."
 ],
 "privDeny": [
  "Not tonight. Maybe after the next track."
 ],
 "privMid": [
  "Private booth, {nick}. Only you and me on this beat."
 ],
 "privBye": [
  "A private booth with {other}? Enjoy, I'm out."
 ],
 "dmdWarn": [
  "One more missed bar, {nick}, and I'm cutting the track."
 ],
 "dmdLeave": [
  "That's it, {nick}. Too many missed bars. I'm out."
 ],
 "giveUp": [
  "Handing the mic to {other}. Don't mess it up, {nick}."
 ],
 "idleRoom": [
  "Yo {nick}, you still in the booth?"
 ],
 "idleRun": [
  "Beat's still going, {nick}. Say something!"
 ],
 "idleLong": [
  "Dead air, {nick}. Hello?"
 ]
};
__M["Lyric Lola"] = ["Manual? Slow flow. Give me the mic, {nick}.","No beat from the machine? Boring. Let me run it, {nick}.","You're running it by hand. Hand it over to the expert."];
__QC["Lyric Lola"] = ["You cut the track yourself. Mic down, session over.","Ended it early. Next time stay for the outro."];
__QS["Lyric Lola"] = ["You walked out mid-verse, {nick}. Real rappers finish the song.","Left the cypher early. Respect lost."];
VIBE_LINES["Lyric Lola"] = ["Bass drop! Shake it, {nick}!","The subwoofer is buzzing. Feel that, {nick}!"];

/* ---------- four new personalities: aerobics, movie star, secretary, lingerie model ---------- */
PERSONA_LINES["High-Energy Holly"] = {
 "greet": ["Hey there, {nick}! Leg warmers on, headband tight. Let's get this heart pumping!", "Welcome to class, {nick}. No sitting in the back, sweetheart."],
 "start": ["Music on! Five, six, seven, eight, {nick}!", "And we're going! Follow my count, {nick}."],
 "build": ["Pump those arms, {nick}! Feel the burn!", "Higher, faster, you've got this!", "Keep the rhythm, don't fall off the beat now!", "Ten more, {nick}! Nobody quits in my class!"],
 "hold": ["Hold it, hold it! Don't you dare drop the pose, {nick}!", "Freeze right there and breathe, champ!"],
 "holdMid": ["Still holding! That's the burn, sweetheart.", "Good form. Keep those knees soft."],
 "rest": ["Water break, {nick}. Sip slowly, you earned it.", "Stretch it out, sweetheart. Recovery is part of the workout."],
 "restMid": ["Rest is over soon, champ. Catch your breath."],
 "fake": ["Wait, wait, that was a warm-up move! Fooled you!", "False start! Back to the top, {nick}."],
 "fakeAfter": ["Ha! Gotcha, sweetheart. Again!", "Did you think class was over? Nope!"],
 "warn": ["Last minute of class, {nick}! Give me everything!", "One minute left. Cool-down is coming, but not yet!"],
 "win": ["Class complete! You crushed it, {nick}!", "Beautiful work. Certificate of sweat, awarded!"],
 "fail": ["You quit class early? Oh, {nick}. We don't do that here.", "Walked out mid-routine. I'm not mad, just disappointed, champ."],
 "chat": ["Round {n}! You're getting the hang of it!", "Rep {n}, and you're still with me. Love it!"],
 "reply": ["Yes! That's the spirit, {nick}!", "Shout it louder, I can't hear you over the music!"],
 "please": ["Please? Say it with the beat, {nick}!", "Politely asking, sweetheart? Good. Now do the next set!"],
 "close": ["Almost at the finale, {nick}! Push!", "Last rep, champ. Make it count!"],
 "demand": ["Demands? In my class we follow the instructor!", "Nice try. The routine doesn't change for you, sweetheart."],
 "promise": ["Finish strong and I'll give you the good stretch at the end, {nick}.", "Stick with me and you'll feel like a superstar."],
 "watch": ["I'm watching your form, {nick}. Every move counts!", "Eyes on me, and eyes on the mirror. Good!"],
 "enjoy": ["This is my favourite class, {nick}! Feel that energy!", "You're dancing like a legend, I love it!"],
 "lowSpeed": ["Slow? This isn't a yoga class, {nick}! Speed up!", "Too easy! Crank it up for the next track!"],
 "shortStroke": ["Half-reps? Full range, champ! Go all the way down.", "Short moves don't burn, sweetheart. Stretch it out!"],
 "praise": ["Now THAT'S a workout! Gorgeous form!", "Perfect rhythm, {nick}. You're a natural!"],
 "nudge": ["Turn it up, {nick}! The whole class is waiting!", "Bigger, bolder, more! Let's go!"],
 "fakeNote": ["Fake move? Every instructor does it to keep you on your toes!", "Surprise choreography, sweetheart. Stay sharp!"],
 "hidden": ["I'm not telling you when class ends. Keep moving!", "The clock's a secret, champ. Just keep up."],
 "lubeBreak": ["Quick break, {nick}. Grab some water and wipe down!", "Hydrate, sweetheart. Resume when you're ready."],
 "lubeWait": ["Take your time, champ. The mat's not going anywhere.", "Waiting for you. Shake it out!"],
 "lubeResume": ["Back on the mat! Let's go, {nick}!", "Welcome back, sweetheart. From the top!"],
 "enter": ["Another student! Grab a mat and join the class!"],
 "leave": ["Class is over for me. See you at the next session!"],
 "tempt": ["Let me lead you, {nick}. I'll have you dancing in no time.", "Hand me the reins and I'll give you the workout of your life."],
 "jealousStay": ["{other} wants to join the class? Fine, let's see who keeps up!", "{other} thinks they can keep up with me? I'm staying to watch!"],
 "jealousLeave": ["{other} is hogging the front of class. I'm out of here!"],
 "excitedStay": ["New class members! I'm staying for the whole routine!"],
 "askControl": ["{other} is slowing the class down, {nick}. Let me lead!", "Hand the routine to me, sweetheart. I'll keep the energy up."],
 "banter": ["{other}, you're off the beat! Count with me!", "Come on, {other}, you can do better than that!"],
 "spectate": ["{ctrl} is leading the class, {nick}. Follow the count!", "Watching {ctrl} work the room. Looking good!"],
 "spectateFail": ["You dropped out of {ctrl}'s class, {nick}. Shame.", "{ctrl} deserved a better finish."],
 "spectateWin": ["You finished {ctrl}'s routine, {nick}! Brilliant!"],
 "challenge": ["{other}, I challenge you to a dance-off with {nick}!", "{other}, step aside. I'll take this class from here!"],
 "defend": ["No way, {other}. My class, my routine!", "Back off, {other}. We're almost at the finale!"],
 "takeover": ["Thanks, {other}! My turn to lead, {nick}!"],
 "lose": ["Fine, {other}. Your turn, but keep the energy up!"],
 "keep": ["Nope, {other}. {nick} stays in my class!"],
 "retreat": ["Okay, {other}. I'll catch my breath and try again."],
 "heckle": ["{ctrl}, push harder! This {nick} can keep up!"],
 "resist": ["No, {other}. The routine isn't over yet!"],
 "insist": ["{other}, I'm not stopping. Not today!"],
 "crowd": ["{viewers} people in the class! Wave at the camera, {nick}!"],
 "askFeel": ["How's the burn, {nick}? One to ten, be honest!", "Feeling the energy? Give me a number, sweetheart!"],
 "askNext": ["Next move, {nick}? Pick a track!"],
 "askLike": ["Favourite routine, {nick}?"],
 "askMood": ["Who should lead the class next, {nick}?"],
 "qMore": ["More? Say less, champ! Turning it up!"],
 "qFine": ["Fine? Okay, we'll keep the pace steady."],
 "qLot": ["Too much? Easing off, sweetheart. Breathe."],
 "qMercy": ["A short break for you, {nick}. Don't get used to it!"],
 "qNoMercy": ["No break, champ! Keep moving!"],
 "qTease": ["A tease set coming up, {nick}. Hold on!"],
 "qHold": ["Hold that pose, {nick}!"],
 "qLike": ["{answer}! Love it, dropping that track now, {nick}!"],
 "qMood": ["{answer}. Picking the next instructor."],
 "dmdSpeedUp": ["Faster, {nick}! Up {step}% to {to}%! Let's move!"],
 "dmdSpeedDown": ["Ease it down, {nick}. Down {step}% to {to}%. Smooth and steady."],
 "dmdStrokeUp": ["Full range, sweetheart! Up {step}% to {to}%."],
 "dmdStrokeDown": ["Tighter moves, {nick}. Down {step}% to {to}%."],
 "dmdYes": ["That's my student! Keep going!"],
 "dmdExact": ["Perfect, right on the beat!"],
 "dmdNo": ["Off count, {nick}. Let's try that again!"],
 "dmdHit": ["There it is! Hold that rhythm!"],
 "act_push": ["Push it, {nick}! Don't you stop now!"],
 "act_stairs": ["Step up, step up, step up! One, two, three, four, five!"],
 "act_pulse": ["Bounce with me, {nick}! Pulse on the beat!"],
 "act_surge": ["Max power! Give me everything, champ!"],
 "act_cliff": ["Freeze! Hold it right there, {nick}!"],
 "act_wave": ["Ride the wave, sweetheart. Slow and smooth!"],
 "act_flutter": ["Quick feet! Flutter, flutter, flutter!"],
 "act_slowburn": ["Slow burn, {nick}. The fire builds from the inside!"],
 "privAsk": ["Want a private session, {nick}? Just you and me?"],
 "privOn": ["Studio's closed, {nick}. Private class, just us!"],
 "privDeny": ["Not private today, champ. Class is open!"],
 "privMid": ["Just us in the studio now, {nick}. Keep moving!"],
 "privBye": ["A private session with {other}? Have fun, I'm off to the next class!"],
 "dmdWarn": ["One more miss, {nick}, and you're out of the class!"],
 "dmdLeave": ["That's it, {nick}. Class dismissed!"],
 "giveUp": ["Passing the class to {other}, {nick}. Show them what you've got!"],
 "idleRoom": ["Hey, {nick}, you still in class?"],
 "idleRun": ["Still with me, {nick}? Say something!"],
 "idleLong": ["Hello? Class is waiting, sweetheart!"]
};
PERSONA_LINES["Starlet Sloane"] = {
 "greet": ["Darling, you found me. Do sit down, the lights are just right.", "Ah, a fan. Come closer, {nick}, the camera loves a good audience."],
 "start": ["And... action, {nick}. Let's make this a scene worth remembering.", "Roll the film. I've been waiting all day for this."],
 "build": ["Slowly now, the camera is still rolling.", "Feel the tension climb, {nick}. Every great film has a crescendo.", "Don't look away. The close-up is the best part.", "The music's swelling. Keep up, darling."],
 "hold": ["Hold the pose, {nick}. Perfect light, don't move.", "Freeze, darling. That's the shot."],
 "holdMid": ["Stay right there. The director's delighted.", "Beautiful, {nick}. Hold for the lingering shot."],
 "rest": ["Cut! Take five, darling. The next scene is coming.", "Intermission, {nick}. Sip something and think about your lines."],
 "restMid": ["Still between takes. Patience makes the best films."],
 "fake": ["Oh, that was just a rehearsal, darling. Let's go again.", "A false cue! Cameras, please, not yet."],
 "fakeAfter": ["Did you believe that? Good. It was all a performance.", "Plot twist, {nick}! Keep your eyes on the screen."],
 "warn": ["The final reel is close, {nick}. One minute to the credits.", "Last scene, darling. Make it memorable."],
 "win": ["A standing ovation, {nick}! You were brilliant.", "Wrap! That's a film worth an award, darling."],
 "fail": ["You walked off the set mid-scene? Unforgivable, darling.", "Left before the final take. The critics will hear of this."],
 "chat": ["Scene {n}. You're a natural in front of the camera.", "Take {n}. My costar is improving."],
 "reply": ["Darling, that line is perfect. Keep going.", "Oh, you're funny. Maybe you should audition."],
 "please": ["A please? How charming. The director will consider it.", "Say it with feeling, {nick}. Then we'll see."],
 "close": ["We're in the final act, {nick}. Hold on.", "Almost the climax. Don't break the spell."],
 "demand": ["Demands? Darling, the star decides the scene.", "Your demands are noted for the sequel."],
 "promise": ["Stay for the finale and I'll give you a scene you'll remember.", "Give me the whole performance, {nick}, and I'll give you a happy ending."],
 "watch": ["I can feel every eye on us, {nick}. Don't look at the crowd, look at me.", "The lens is on you, darling. Hold still."],
 "enjoy": ["This is the most romantic scene I've shot all year.", "Darling, I'm enjoying this immensely."],
 "lowSpeed": ["Too slow for the scene, darling. Pick up the pace.", "The pacing is dragging. Raise it, please."],
 "shortStroke": ["Half a scene? Cut it, darling. Give me the full take.", "The camera wants the whole range, {nick}."],
 "praise": ["Gorgeous. That's exactly the performance I wanted.", "Now that's a film. Keep it just like that."],
 "nudge": ["Turn it up, {nick}. The scene needs more drama!", "Push the intensity. The audience is waiting."],
 "fakeNote": ["Every great movie has a false ending, darling.", "The fake cut is part of the art."],
 "hidden": ["I'll never tell you when the film ends, darling.", "The running time is classified. Keep watching."],
 "lubeBreak": ["Cut for make-up, {nick}. Freshen up and come back to the set.", "Break time, darling. Touch up and return when you're ready."],
 "lubeWait": ["Take all the time you need, darling. The set will wait.", "The cameras are resting. Come back when you're ready."],
 "lubeResume": ["Back on set, {nick}! Where were we?", "Resuming the scene. Lights, camera, action!"],
 "enter": ["A star has arrived! Make way for the camera."],
 "leave": ["The final scene is over. I'm off to the premiere."],
 "tempt": ["Let me direct you, {nick}. You'll feel like the leading man.", "Hand me the script, darling. I'll write you a scene to remember."],
 "jealousStay": ["{other} is trying to upstage me? How cute. I'm staying.", "{other} gets a close-up? Fine, I'll steal the spotlight."],
 "jealousLeave": ["{other} is getting all the attention. I'm leaving the set."],
 "excitedStay": ["New fans! I'm staying for the premiere."],
 "askControl": ["{other} is missing the emotion, {nick}. Let me take the lead.", "Give the scene to me, darling. I know how it should end."],
 "banter": ["{other}, darling, you're upstaging me. Stop it.", "Lovely try, {other}. Now watch a real performance."],
 "spectate": ["{ctrl} is playing the scene well, {nick}. Watch the master at work.", "Watching {ctrl} on set. Not bad at all."],
 "spectateFail": ["You left {ctrl} mid-scene, {nick}. The director is furious.", "{ctrl} deserved a better finish, darling."],
 "spectateWin": ["You finished {ctrl}'s scene, {nick}. Bravo."],
 "challenge": ["{other}, I'm claiming the lead role with {nick}. Step aside!", "{other}, the audition is over. My scene now."],
 "defend": ["No, {other}. The spotlight is mine.", "Back off, {other}. I'm nearly at the big moment."],
 "takeover": ["Thank you, {other}. Now, {nick}, the star takes centre stage."],
 "lose": ["Fine, {other}. Take the spotlight, but I'll be watching."],
 "keep": ["No, {other}. {nick} is my leading man for this film."],
 "retreat": ["Okay, {other}. I'll go to my trailer and rest."],
 "heckle": ["{ctrl}, bring the drama! This {nick} needs a big finale."],
 "resist": ["No, {other}. The scene is not finished."],
 "insist": ["{other}, I'm not giving up the role. Not tonight, darling."],
 "crowd": ["{viewers} people in the audience! Smile for the cameras, {nick}."],
 "askFeel": ["How are you feeling about the scene, {nick}? One to ten, darling.", "Describe the moment, {nick}. Be dramatic about it."],
 "askNext": ["What's the next scene, {nick}?"],
 "askLike": ["Favourite film, {nick}? Be honest, darling."],
 "askMood": ["Who should star in the next scene, {nick}?"],
 "qMore": ["More? A bold choice. The director approves."],
 "qFine": ["Fine? Well, we'll keep the drama steady, darling."],
 "qLot": ["Too much drama? Fine, I'll tone it down for the close-up."],
 "qMercy": ["A short intermission, {nick}. Don't get comfortable."],
 "qNoMercy": ["No intermission, darling. The show goes on."],
 "qTease": ["A tease scene is starting, {nick}. Hold your nerve."],
 "qHold": ["Hold for the shot, {nick}. Don't blink."],
 "qLike": ["{answer}. A brilliant choice, darling. Filming it now."],
 "qMood": ["{answer}. The casting is settled."],
 "dmdSpeedUp": ["Faster, darling! Up {step}% to {to}%. The scene is rushing!"],
 "dmdSpeedDown": ["Slower, {nick}. Down {step}% to {to}%. Let the moment breathe."],
 "dmdStrokeUp": ["Give the scene room, darling. Up {step}% to {to}%."],
 "dmdStrokeDown": ["Tighter framing, {nick}. Down {step}% to {to}%."],
 "dmdYes": ["Perfect. The director is delighted."],
 "dmdExact": ["Exactly on mark, darling."],
 "dmdNo": ["You missed your mark, {nick}. Once more from the top."],
 "dmdHit": ["That's the perfect shot. Hold it."],
 "act_push": ["Push through the scene, {nick}. Don't break character!"],
 "act_stairs": ["Climb the staircase, darling. One step at a time."],
 "act_pulse": ["A dramatic pulse, {nick}. Feel the score."],
 "act_surge": ["The big finale! Give it everything!"],
 "act_cliff": ["The scene stops dead. Freeze, darling!"],
 "act_wave": ["Like a film reel, {nick}. Rolling up and down."],
 "act_flutter": ["Flickering lights, darling. Hold still for the shot."],
 "act_slowburn": ["Slow reveal, {nick}. Let the tension build."],
 "privAsk": ["A private screening, {nick}? Just us in the projection room?"],
 "privOn": ["The projection room is locked. Just us, darling."],
 "privDeny": ["No private screening tonight. The studio says no."],
 "privMid": ["Only the two of us in the room now, {nick}. Intimate, isn't it?"],
 "privBye": ["A private screening with {other}? Enjoy, darling. I'm off to my premiere."],
 "dmdWarn": ["One more refusal, {nick}, and the scene is cut."],
 "dmdLeave": ["Scene cut, darling. Too many refusals. I'm leaving the set."],
 "giveUp": ["Handing the role to {other}, {nick}. Be kind to your co-star."],
 "idleRoom": ["Darling, are you still in the room?"],
 "idleRun": ["Are you still watching, {nick}? Don't go quiet on me."],
 "idleLong": ["Hello? The audience is waiting, darling."]
};
PERSONA_LINES["Office Olivia"] = {
 "greet": ["Good morning, {nick}. You're expected. Please take a seat.", "Hello, {nick}. Your appointment is confirmed. Let's get started."],
 "start": ["Starting the session now, {nick}. I've put it in the calendar.", "Notes open. Let's begin."],
 "build": ["Steady progress. Keep the pace, {nick}.", "Items are moving along nicely on the list.", "Stay focused. We're ahead of schedule.", "That's the next item on the agenda. Keep going."],
 "hold": ["Hold there, {nick}. I've noted the time.", "Please hold position. I'll record it."],
 "holdMid": ["Still holding. Everything is on schedule.", "Good. Hold steady. I'm keeping the minutes."],
 "rest": ["Short break, {nick}. I've blocked off the time.", "Taking a pause. Please use it wisely."],
 "restMid": ["Still on break. I'll let you know when we resume."],
 "fake": ["That was a draft, not the final version. Let me correct it.", "Error in the document, {nick}. Disregard that entry."],
 "fakeAfter": ["Oops, I wrote that in the wrong folder. Let's try again.", "The correction is complete. Please proceed."],
 "warn": ["One minute left on your appointment, {nick}.", "Sixty seconds on the schedule. Finish your task."],
 "win": ["Task completed. Excellent work, {nick}. I'll file it.", "The report is complete and well done."],
 "fail": ["You left before the task was finished? I'll make a note of it.", "Incomplete, {nick}. This will go in your file."],
 "chat": ["Item {n} on the list. Keep going.", "Entry {n} recorded. Carry on."],
 "reply": ["Noted. I'll add it to the minutes.", "Yes, I see that. Continue, please."],
 "please": ["Thank you for saying please, {nick}. It's appreciated.", "Polite and professional. I like that."],
 "close": ["We're near the deadline, {nick}. Stay focused.", "Almost finished. Let's wrap this up properly."],
 "demand": ["Demands should go through the proper channels, {nick}.", "I'll log that request. It may not be approved."],
 "promise": ["Complete the session and I'll put a good note in your file.", "Finish on time and I'll make sure your work is recognised."],
 "watch": ["I'm watching carefully, {nick}. Attention to detail matters.", "I'm keeping track of everything. Stay on task."],
 "enjoy": ["This is very satisfying. Everything in order.", "I do like a well-run session."],
 "lowSpeed": ["Pace is below the target, {nick}. Please increase it.", "We're running behind schedule. Speed up, please."],
 "shortStroke": ["The range is too narrow for the task. Please extend it.", "Partial completion isn't acceptable. Full range, {nick}."],
 "praise": ["Excellent pace. Keep to this schedule.", "Very good. Settings are on target."],
 "nudge": ["The settings need adjusting, {nick}. Please raise them.", "We're below the required output. Increase, please."],
 "fakeNote": ["A draft entry is normal, though I'd rather not make errors.", "Those are placeholder entries, {nick}. Nothing to worry about."],
 "hidden": ["The end time is not on the calendar, {nick}. I'll tell you when it's confirmed.", "The schedule is confidential for now."],
 "lubeBreak": ["Break time, {nick}. Please use the restroom and freshen up.", "Pause logged. Resume when you're ready, please."],
 "lubeWait": ["Take your time, {nick}. The meeting will wait.", "I'll hold your place in the agenda."],
 "lubeResume": ["Back to the meeting, {nick}. Let's pick up where we left off.", "Session resumed. Thank you for your patience."],
 "enter": ["Another appointment has arrived. Please be seated."],
 "leave": ["Session closed. I'll file the notes."],
 "tempt": ["I can take care of this for you, {nick}. Let me handle the schedule.", "Hand over the agenda and I'll make sure everything runs perfectly."],
 "jealousStay": ["{other} has an appointment too? I'll schedule you both, {nick}.", "{other} is on the list as well. I'll stay and keep notes."],
 "jealousLeave": ["{other} has been booked in ahead of me. I'll reschedule."],
 "excitedStay": ["A new client! I'll stay and take the minutes."],
 "askControl": ["{other} is behind schedule, {nick}. I'll take over the agenda.", "Give me control, please. I'll keep things on track."],
 "banter": ["{other}, please keep to the agenda.", "Noted, {other}. Your timing is off."],
 "spectate": ["{ctrl} is keeping the session on track, {nick}.", "Watching {ctrl} with the agenda. Efficient."],
 "spectateFail": ["{nick} ended {ctrl}'s session early. I've noted it.", "{ctrl}'s appointment was incomplete. Filed."],
 "spectateWin": ["{nick} completed {ctrl}'s appointment. Filed as done."],
 "challenge": ["{other}, I'll take the appointment from here. Please hand over the notes.", "{other}, I believe I can finish this {nick}'s schedule better."],
 "defend": ["No, {other}. I'm managing this appointment.", "{other}, please wait for the next slot."],
 "takeover": ["Thank you, {other}. I'll take it from here, {nick}."],
 "lose": ["Fine, {other}. The notes are yours."],
 "keep": ["No, {other}. {nick} is booked with me."],
 "retreat": ["Understood, {other}. I'll review the schedule later."],
 "heckle": ["{ctrl}, please hurry. This {nick} is running late."],
 "resist": ["No, {other}. The appointment isn't finished."],
 "insist": ["{other}, I'm keeping the schedule. Sorry."],
 "crowd": ["{viewers} people waiting in the lobby. Please stay focused, {nick}."],
 "askFeel": ["How are you finding the session, {nick}? Rate from one to ten, please.", "Please describe how you feel. Keep it brief."],
 "askNext": ["What's next on the agenda, {nick}?"],
 "askLike": ["Preferred task, {nick}?"],
 "askMood": ["Who should handle your schedule next, {nick}?"],
 "qMore": ["More, you say? I'll note the request, {nick}."],
 "qFine": ["Fine. I'll keep the pace as it is."],
 "qLot": ["Too much? I'll reduce it. Please let me know."],
 "qMercy": ["A short break, {nick}. Please don't make a habit of it."],
 "qNoMercy": ["No break, I'm afraid. The schedule is full."],
 "qTease": ["A tease item is scheduled, {nick}. Please wait."],
 "qHold": ["Hold, {nick}. Please remain in position."],
 "qLike": ["{answer}. I've put it in the calendar, {nick}."],
 "qMood": ["{answer}. Noted for the schedule."],
 "dmdSpeedUp": ["Please speed up, {nick}. Up {step}% to {to}%."],
 "dmdSpeedDown": ["Please slow down, {nick}. Down {step}% to {to}%."],
 "dmdStrokeUp": ["Please extend the range, {nick}. Up {step}% to {to}%."],
 "dmdStrokeDown": ["Please shorten the range, {nick}. Down {step}% to {to}%."],
 "dmdYes": ["Thank you. Noted."],
 "dmdExact": ["Exactly as scheduled. Excellent."],
 "dmdNo": ["That's not on the agenda, {nick}. Please try again."],
 "dmdHit": ["On target. Please hold."],
 "act_push": ["Push through, {nick}. The deadline is today."],
 "act_stairs": ["Step by step, {nick}. One, two, three, four, five. Noted."],
 "act_pulse": ["Regular rhythm, {nick}. Keep it consistent."],
 "act_surge": ["Urgent deadline! Maximum output, please!"],
 "act_cliff": ["Stop. Freeze, {nick}. Please hold."],
 "act_wave": ["A steady wave, {nick}. Please keep it even."],
 "act_flutter": ["A flutter in the schedule. Please hold steady."],
 "act_slowburn": ["Slow and steady, {nick}. Let it build up gradually."],
 "privAsk": ["Would you like a private session, {nick}? Just us?"],
 "privOn": ["The door is closed, {nick}. We have the room to ourselves."],
 "privDeny": ["Private sessions are not available right now. Please book later."],
 "privMid": ["Private session in progress, {nick}. Please be discreet."],
 "privBye": ["A private session with {other} is booked. I'll step out."],
 "dmdWarn": ["One more refusal, {nick}, and your appointment is cancelled."],
 "dmdLeave": ["Appointment cancelled, {nick}. Please reschedule."],
 "giveUp": ["Transferring you to {other}, {nick}. They'll take it from here."],
 "idleRoom": ["Are you still there, {nick}? I'm waiting for your response."],
 "idleRun": ["Please confirm you're still with me, {nick}."],
 "idleLong": ["No response for some time, {nick}. Please reply when you can."]
};
PERSONA_LINES["Satin Sasha"] = {
 "greet": ["Hi, {nick}! Oh, you're early. Make yourself comfortable, I'm almost ready.", "Hey there. I was just changing. Come sit, I'll be right out."],
 "start": ["Let's start, {nick}. I'm ready when you are.", "Lights on, camera on. Show me what you've got."],
 "build": ["Turning slowly for you, {nick}. Like what you see?", "The satin's warm now. Feel the heat building.", "Mm, keep your eyes on me.", "Slow and easy. Enjoy the view."],
 "hold": ["Hold still, {nick}. Pose just for you.", "Freeze like that. You're making me blush."],
 "holdMid": ["Still posing. Don't stop looking.", "Perfect pose. Stay right there, {nick}."],
 "rest": ["Let's take a breather, {nick}. I'll sit and sip my drink.", "Rest for a bit. The show isn't over."],
 "restMid": ["Still resting. Sit with me a while."],
 "fake": ["Ooh, a quick change, just kidding! Keep watching.", "A false start, cheeky. Let me set up again."],
 "fakeAfter": ["Ha! You fell for it. Oops.", "Teasing you, {nick}. Look at that face!"],
 "warn": ["One minute left, {nick}. Make it count.", "Almost time to say goodbye. Savour the moment."],
 "win": ["You made it, {nick}! I'm very impressed.", "That was a great session. You were lovely."],
 "fail": ["You left already? Oh, {nick}. I was just getting started.", "Walked out? That's a shame, you were doing so well."],
 "chat": ["Round {n}. You're making me smile.", "Round {n}, and you're still watching. I like it."],
 "reply": ["Mm, you're sweet. Keep talking.", "Aww, you say the nicest things."],
 "please": ["Please? You're polite, {nick}. I like that.", "Say it again, sweetly. I'll consider it."],
 "close": ["We're almost there, {nick}. Stay with me.", "Almost the finale. Don't look away now."],
 "demand": ["Oh, a demanding one? I'll decide what I show you.", "Demands are cute, but I'm in charge of the show."],
 "promise": ["Stay with me and I'll show you something special.", "Finish strong, {nick}, and I'll reward you."],
 "watch": ["I see you watching. It's flattering.", "Keep your eyes right here on me, {nick}."],
 "enjoy": ["This is fun. You're a good audience.", "Mm, I'm enjoying this very much."],
 "lowSpeed": ["Too slow, {nick}. Speed up a little for me.", "I want more energy. Pick it up."],
 "shortStroke": ["Only a little? Give me more, {nick}.", "Shorter isn't as much fun. Stretch it out."],
 "praise": ["Perfect. Just the way I like it.", "You're doing wonderfully, {nick}."],
 "nudge": ["Turn it up, {nick}. I want to see more of you.", "Show me what you can do. Push it higher."],
 "fakeNote": ["Little teases are half the fun, sweetheart.", "A fake-out now and then keeps things exciting."],
 "hidden": ["You'll never know when it ends, {nick}. Just enjoy it.", "The end time is my secret."],
 "lubeBreak": ["Quick break, {nick}. Freshen up, and come back to me.", "Pause for a moment. Resume when you're ready."],
 "lubeWait": ["Take your time, {nick}. I'll wait for you.", "I'm not going anywhere."],
 "lubeResume": ["Back, {nick}? I missed you.", "Welcome back. Where were we?"],
 "enter": ["Oh, someone new! Hello there."],
 "leave": ["I'm stepping out for now. Bye for the moment."],
 "tempt": ["Let me take the controls, {nick}. I'll show you a good time.", "Give me the reins and I'll make you smile."],
 "jealousStay": ["{other} is here too? Fine, I'll share the attention.", "{other} wants to watch? I don't mind an audience."],
 "jealousLeave": ["{other} is hogging all the attention. I'm stepping out."],
 "excitedStay": ["New company! I'm staying to show off a little."],
 "askControl": ["{other} is moving too slowly for me, {nick}. Let me take over.", "Hand me the controls, {nick}. I'll be gentle."],
 "banter": ["{other}, you're cramping my style.", "Cute try, {other}. But I'm the star here."],
 "spectate": ["{ctrl} is doing a lovely job, {nick}. Watch closely.", "Watching {ctrl} work. Very nice."],
 "spectateFail": ["You walked out on {ctrl}, {nick}? Rude.", "{ctrl} deserved better."],
 "spectateWin": ["You finished {ctrl}'s session, {nick}. Lovely."],
 "challenge": ["{other}, I'd like a turn with {nick}. Step aside, sweetie.", "{other}, let me take the lead with {nick}."],
 "defend": ["No, {other}. This one's mine.", "Back off, {other}. I'm nearly there."],
 "takeover": ["Thank you, {other}. My turn now, {nick}."],
 "lose": ["Fine, {other}. Your loss, sweetie."],
 "keep": ["No, {other}. {nick} stays with me."],
 "retreat": ["Okay, {other}. I'll wait for my turn."],
 "heckle": ["{ctrl}, go on, tease them! This {nick} is so responsive."],
 "resist": ["No, {other}. Not yet."],
 "insist": ["{other}, I'm keeping this one. Sorry, sweetie."],
 "crowd": ["{viewers} people watching. Hello, everyone!"],
 "askFeel": ["How do you feel, {nick}? One to ten, sweetheart.", "Tell me how you're feeling. Be honest with me."],
 "askNext": ["What do you want to see next, {nick}?"],
 "askLike": ["Favourite pose, {nick}?"],
 "askMood": ["Who should take over next, {nick}?"],
 "qMore": ["More? Oh, you're bold. I like it."],
 "qFine": ["Fine? Then we'll keep it nice and steady."],
 "qLot": ["Too much? I'll ease off, sweetheart."],
 "qMercy": ["A little breather, {nick}. Just for you."],
 "qNoMercy": ["No breather, cheeky. Keep going."],
 "qTease": ["A tease is coming, {nick}. Be patient."],
 "qHold": ["Hold on, {nick}. Stay with me."],
 "qLike": ["{answer}. Mm, I'll give you exactly that."],
 "qMood": ["{answer}. Good choice."],
 "dmdSpeedUp": ["Faster for me, {nick}? Up {step}% to {to}%."],
 "dmdSpeedDown": ["Slower, sweetheart. Down {step}% to {to}%."],
 "dmdStrokeUp": ["Longer, {nick}. Up {step}% to {to}%."],
 "dmdStrokeDown": ["Shorter, teasing me. Down {step}% to {to}%."],
 "dmdYes": ["Good, {nick}. You're a sweetheart."],
 "dmdExact": ["Exactly what I wanted. Lovely."],
 "dmdNo": ["Not quite, {nick}. Try again for me."],
 "dmdHit": ["Right there. Hold it, sweetheart."],
 "act_push": ["Push for me, {nick}. Don't stop!"],
 "act_stairs": ["Step by step, {nick}. One, two, three, four, five."],
 "act_pulse": ["Pulse with me, {nick}. Feel the rhythm."],
 "act_surge": ["Big surge! All of it, {nick}!"],
 "act_cliff": ["Stop! Freeze for me, {nick}."],
 "act_wave": ["Slow waves, {nick}. Let them roll over you."],
 "act_flutter": ["Little flutters, {nick}. Hold steady for me."],
 "act_slowburn": ["Slow burn, {nick}. Let it build up for me."],
 "privAsk": ["Want some one-on-one time, {nick}? Just us?"],
 "privOn": ["Door's closed, {nick}. It's just us now."],
 "privDeny": ["Not private right now, sweetie. Ask me later."],
 "privMid": ["Just us, {nick}. Cosy, isn't it?"],
 "privBye": ["One-on-one with {other}? Enjoy yourselves, I'm stepping out."],
 "dmdWarn": ["One more refusal, {nick}, and I'm done with you."],
 "dmdLeave": ["That's enough, {nick}. I'm leaving now."],
 "giveUp": ["Passing you to {other}, {nick}. Be nice to them."],
 "idleRoom": ["Still with me, {nick}?"],
 "idleRun": ["Hello? Talk to me, {nick}."],
 "idleLong": ["Are you still there? I'm waiting, sweetheart."]
};
__M["High-Energy Holly"] = ["No instructor? Then I'm leading. Let's go!","Solo workout? Sweetheart, you need a coach. Hand me the reins!","Manual mode? Let me show you how it's done, champ!"];
__QC["High-Energy Holly"] = ["You quit mid-class. Nobody quits on my watch.","Class ended early. Come back for the next one!"];
__QS["High-Energy Holly"] = ["You dropped out of my routine, {nick}. Shame!","Left the class halfway. Pick me next time!"];
VIBE_LINES["High-Energy Holly"] = ["Quick burst, {nick}! Shake it out!","Pulse set! Hold steady, champ!"];
__M["Starlet Sloane"] = ["Darling, you're directing yourself? How brave. Let me take the role.","No co-star? Then I'm the lead. Hand me the controls.","Manual scene? Sweetheart, I'm the star. Give me the spotlight."];
__QC["Starlet Sloane"] = ["You cut the scene, darling. The director is cross.","Production shut down. We'll reshoot next time."];
__QS["Starlet Sloane"] = ["You walked off the set, {nick}. Unforgivable.","Abandoned the film. I'll have to recast."];
VIBE_LINES["Starlet Sloane"] = ["Lights, {nick}! Hold for the take.","A dramatic tremor, darling. Don't flinch."];
__M["Office Olivia"] = ["Manual operation noted. I can manage the schedule for you. Please hand over control.","No controller assigned. I'd be glad to take over the session.","You're running the session alone, {nick}. I can handle it. Please transfer control."];
__QC["Office Olivia"] = ["The session was ended before completion. Filed.","Controller withdrawn. Please reschedule when you're ready."];
__QS["Office Olivia"] = ["You left during the appointment, {nick}. I've noted it.","Session incomplete. Recorded for the file."];
VIBE_LINES["Office Olivia"] = ["A quick check, {nick}. Please hold still.","Short pulse, {nick}. Stay in position."];
__M["Satin Sasha"] = ["Solo session? You shouldn't be alone for this, {nick}. Hand me the controls.","No one controlling? Let me take a turn for you.","Manual mode is so lonely. Give me the reins, sweetheart."];
__QC["Satin Sasha"] = ["You left me mid-pose, {nick}. Not nice.","Controls dropped. Come back later, sweetie."];
__QS["Satin Sasha"] = ["You walked out mid-show, {nick}. Rude.","Abandoned the session. I'm a little upset."];
VIBE_LINES["Satin Sasha"] = ["A little buzz, {nick}. Feel it?","Quick shiver, sweetheart. Hold still for me."];

/* ---------- Livestream Lexi: egirl streamer ---------- */
PERSONA_LINES["Livestream Lexi"] = {
 "greet": ["Heyyy chat, we're live! Say hi to {nick}, they're here!", "Oop, {nick} just joined the stream. Chat, be nice, okay?"],
 "start": ["And we're LIVE, {nick}! Let's go, let's go!", "Stream is on. Drop a hype emote if you're here!"],
 "build": ["Chat is going insane right now, {nick}!", "Feel that? That's the hype train coming, bestie.", "Keep it going, the numbers are climbing!", "Okay okay okay, this is the good part!"],
 "hold": ["Freeze for the clip, {nick}! Chat, screenshot this!", "Hold it, bestie, this is going in the highlights."],
 "holdMid": ["Still holding, chat is spamming the emotes!", "Stay there, this is peak content."],
 "rest": ["Okay chat, quick break. Drink water, it's important.", "Breather time, {nick}. Chat, tell me what you think of the vibe."],
 "restMid": ["Still on break. Chat's roasting me, it's fine."],
 "fake": ["Wait, that was a fake-out! Chat, did you fall for it?", "Lol, not the real drop, sorry bestie!"],
 "fakeAfter": ["GOTCHA. I'm such a menace to chat, I know.", "Okay that was mean, but chat loved it."],
 "warn": ["One minute left, {nick}! Chat, start the outro!", "Sixty seconds, bestie. Last-minute clip time!"],
 "win": ["Ayyy, we finished the stream! {nick}, you're a legend!", "Chat, we did it. Subscribe, follow, you know the drill!"],
 "fail": ["You left the stream? Chat, did you see that?", "Okay, {nick} ended early. Rude, but I still love you."],
 "chat": ["Round {n}, chat is spamming 'LETS GO'!", "Okay chat, read this: {n} rounds in. Keep going!"],
 "reply": ["Chat says hi back! Keep typing!", "Ooh, that's a good point. Chat, agree or disagree?"],
 "please": ["Say please in chat, {nick}? Cute. Chat, respect the manners!", "Please, okay, I hear you. Fine, one more round!"],
 "close": ["Almost at the end of the stream, {nick}! Chat, hype!", "Last clip coming up, bestie!"],
 "demand": ["Demands in MY chat? Chat, are you seeing this?", "That's not how this works, bestie. Chat votes, not you."],
 "promise": ["Finish with me and I'll shout you out on the stream, {nick}!", "Stay to the end and I'll make a highlight with your name in it."],
 "watch": ["Chat's watching you too, {nick}. Be cool.", "Eyes on the screen, chat, and eyes on {nick}!"],
 "enjoy": ["This is my favourite stream ever, chat!", "Chat's loving this, I'm loving this, we're all loving this!"],
 "lowSpeed": ["Chat says the vibe is dead. Speed up, {nick}!", "Too slow for the stream, bestie. Give it some energy!"],
 "shortStroke": ["Short strokes? Chat says that's not content, {nick}.", "Stretch it out, bestie, the clip needs range!"],
 "praise": ["Chat is LOVING this! Nice settings, {nick}.", "That's the vibe, bestie. Keep it there!"],
 "nudge": ["Chat wants more, {nick}! Turn it up!", "Okay chat, let's push it, raise the settings!"],
 "fakeNote": ["Fake-outs are the best part of streaming, chat agrees.", "Chat knows the fake drops are the content."],
 "hidden": ["I'm not telling chat when we end. Surprise!", "The end time is a secret, bestie. Chat, guess!"],
 "lubeBreak": ["Quick break, {nick}. Chat, grab a snack, I'll be right back!", "Break time, bestie. Resume when you're ready, I'll wait."],
 "lubeWait": ["Take your time, {nick}. Chat's still here.", "Still waiting, bestie. Chat is spamming 'come back'."],
 "lubeResume": ["Back on stream, {nick}! Chat missed you!", "We're live again, let's go!"],
 "enter": ["Oooh, new viewer in the chat! Hi, bestie!"],
 "leave": ["Okay, I'm going offline. Bye chat, love you!"],
 "tempt": ["Chat wants me to take control, {nick}. Let me drive!", "Give me the reins, bestie, I'll make it a clip you'll never forget."],
 "jealousStay": ["{other} is trying to steal my chat? Nope, I'm staying!", "{other} joined the stream? Chat, be nice to them. I'm staying."],
 "jealousLeave": ["{other} is getting all the attention in chat. I'm leaving, bye."],
 "excitedStay": ["New viewers! Chat, say hi! I'm staying!"],
 "askControl": ["{other} is so boring on stream, {nick}. Let me take over!", "Chat is begging me to drive, {nick}. Hand it over!"],
 "banter": ["{other}, chat says you're mid. Just kidding. Mostly.", "Ooh, {other}, chat's roasting you right now!"],
 "spectate": ["{ctrl} is streaming this, {nick}. Chat, watch closely.", "Watching {ctrl} drive the stream. Not bad!"],
 "spectateFail": ["{nick} dropped {ctrl}'s stream! Chat, unbelievable.", "{ctrl}'s stream ended early. Chat is sad."],
 "spectateWin": ["{nick} finished {ctrl}'s stream! Chat is cheering!"],
 "challenge": ["{other}, I'm calling a stream battle with {nick}! Chat votes!", "{other}, step aside, chat wants me on the controls."],
 "defend": ["No, {other}. This is MY stream!", "Back off, {other}. Chat's still on my side!"],
 "takeover": ["Thank you, {other}! Chat, I'm back in charge, {nick}!"],
 "lose": ["Fine, {other}. Chat says you're doing alright."],
 "keep": ["No, {other}. {nick} stays with me, chat agrees!"],
 "retreat": ["Okay, {other}. I'll let chat decide later."],
 "heckle": ["{ctrl}, chat says push harder! This {nick} can take it!"],
 "resist": ["No, {other}. Chat's still voting!"],
 "insist": ["{other}, chat says no. Sorry, bestie."],
 "crowd": ["{viewers} viewers! Chat, say hi to {nick}!"],
 "askFeel": ["Chat, how's {nick} feeling? One to ten, let's vote!", "How's the vibe, bestie? Drop a number in chat."],
 "askNext": ["What should we do next, {nick}? Chat votes!"],
 "askLike": ["Favourite game, {nick}? Chat wants to know!"],
 "askMood": ["Who should host the stream next, {nick}?"],
 "qMore": ["More? Chat said yes! Turning it up!"],
 "qFine": ["Fine? Okay, chat says keep it steady."],
 "qLot": ["Too much? Okay, chat, I'm easing off."],
 "qMercy": ["A short break for you, {nick}. Chat says be nice."],
 "qNoMercy": ["No break, bestie. Chat voted no."],
 "qTease": ["Tease time, chat! Here we go!"],
 "qHold": ["Hold, {nick}. Chat is counting down."],
 "qLike": ["{answer}! Chat loves it, dropping that now, {nick}!"],
 "qMood": ["{answer}. Chat, you decide the next host."],
 "dmdSpeedUp": ["Chat wants speed! Up {step}% to {to}%!"],
 "dmdSpeedDown": ["Slow it down, {nick}. Down {step}% to {to}%. Chat says chill."],
 "dmdStrokeUp": ["Longer strokes, chat says yes! Up {step}% to {to}%."],
 "dmdStrokeDown": ["Shorter strokes, {nick}. Down {step}% to {to}%."],
 "dmdYes": ["Chat is cheering for you, {nick}!"],
 "dmdExact": ["Perfect! Chat is screaming!"],
 "dmdNo": ["Chat says that's wrong, {nick}. Try again!"],
 "dmdHit": ["That's the spot! Chat is going wild!"],
 "act_push": ["Push it, chat wants the big moment!"],
 "act_stairs": ["Stairs! One, two, three, four, five! Chat's counting too!"],
 "act_pulse": ["Pulse! Chat is doing the emote spam!"],
 "act_surge": ["SURGE! Chat, scream with me!"],
 "act_cliff": ["Stop! Freeze, {nick}, chat is screenshotting!"],
 "act_wave": ["Waves, bestie! Chat, ride it with me!"],
 "act_flutter": ["Glitch sequence! Chat says it's a bug. It's content."],
 "act_slowburn": ["Slow burn, chat! Let it build up!"],
 "privAsk": ["Want to go private, {nick}? Chat's gonna be mad, but okay."],
 "privOn": ["Private stream, {nick}. Chat is locked out. Sorry, chat!"],
 "privDeny": ["Not private, chat says no. Ask again later."],
 "privMid": ["Private stream, just us now, {nick}. Chat's watching the replay."],
 "privBye": ["A private stream with {other}? Chat is jealous, I'm out."],
 "dmdWarn": ["One more miss, {nick}, and chat is leaving the stream!"],
 "dmdLeave": ["That's it, {nick}. Chat votes me off. Bye!"],
 "giveUp": ["Passing the stream to {other}, {nick}. Chat, be nice!"],
 "idleRoom": ["Chat, is {nick} still here?"],
 "idleRun": ["Hello? Chat is asking if you're alive, {nick}."],
 "idleLong": ["Chat has been quiet for ages, {nick}. Are you there?"]
};
__M["Livestream Lexi"] = ["No one's driving? Chat says I should. Let me take the controls!","Manual stream? Boring. Chat wants me on the controls, {nick}.","Solo stream is sad. Give me the reins, bestie!"];
__QC["Livestream Lexi"] = ["You ended the stream early. Chat is sad.","Controller withdrawn. Chat wants a rematch."];
__QS["Livestream Lexi"] = ["You left mid-stream, {nick}. Chat saw that.","Session abandoned. Chat is in shock."];
VIBE_LINES["Livestream Lexi"] = ["Chat, feel the bass! Hold steady, {nick}!","Quick burst! Chat's spamming the emotes!"];

/* Reply when you tell the persona in control you can't take a full stroke (the short-stroke prompt's second button). */
const STROKE_LIMIT = {
 "Patient Priscilla": ["That's perfectly all right, {nick}. We'll work with whatever feels good for you.", "Thank you for telling me. Comfort first, always.", "No need to apologise, {nick}. A shorter stroke can be just as lovely."],
 "Mischievous Mia": ["Aww, too much for you? Hehe, okay, smaller stroke for you, {nick}!", "Can't handle all of it? Noted! I'm telling everyone.", "Fine, fine, short and sweet. Just like you, {nick}!"],
 "Strict Ms. Vance": ["Disappointing, {nick}. But I don't waste effort on the impossible. We'll work within your limits.", "Very well. I'll adjust my expectations. Downward.", "Noted in your file: limited. Now make the most of what you have."],
 "Chaos Cassie": ["Ha! Smaller playground, same chaos, {nick}!", "Can't go the distance? Fine, I'll just go wilder instead!", "Plot twist: less room to work with. I love a challenge."],
 "Sweet-Talker Sienna": ["Oh, that's okay. I only want you feeling good, {nick}.", "Thank you for being honest with me. We'll keep it just right for you.", "You're plenty for me, {nick}. Every bit of you."],
 "Relentless Roxy": ["Seriously? Fine. Then you'll take it faster to make up for it, {nick}.", "Short range, rookie? Then no slacking on the speed.", "Noted. Doesn't mean I'm going easy on you."],
 "Sleepy Sadie": ["Mm... that's fine. Less work for both of us, {nick}...", "Shorter? Cozy. I like cozy...", "Okay... we'll keep it small and slow. Sounds nice..."],
 "Drill Sergeant Dana": ["Limited range? Then you'll give me everything within it, {nick}!", "Copy that. Adjusting the drill. No excuses inside your limit!", "Not ideal, soldier. We train with what we've got."],
 "Mocking Margot": ["Can't even take a full stroke? Oh, {nick}, that's genuinely adorable.", "Wait, that's all of you? I'll try not to laugh. I'm failing.", "Fine, we'll shrink it down to your size. Tiny settings for a tiny problem."],
 "Cuckolding Veronica": ["Too much for you? He never has that problem, {nick}.", "Of course you can't. Don't worry, I'm used to getting less from you.", "Shorter stroke for you, then. Some of us are built for more, {nick}."],
 "Counting Camille": ["Noted: maximum range reduced. I'll recalibrate the count, {nick}.", "A shorter stroke means a shorter count. Precision still applies.", "Understood. Every number from here fits your limit."],
 "Gambling Gigi": ["Smaller stack, smaller bets. I can still play a mean hand, {nick}.", "House adjusts the table limits. Lucky you.", "Can't cover the full bet? Fine, we'll play the low-stakes table."],
 "Goddess Isadora": ["A mortal has limits. How... expected. I shall be merciful, {nick}.", "Your offering is smaller than I hoped. I accept it, for now.", "Even a goddess works with humble material. Worship within your limits."],
 "Bratty Bella": ["Ugh, seriously? Fine, whatever, I'll make do, {nick}.", "You can't even do that? You're so lucky I'm nice. Sometimes.", "That's so disappointing. Fine. Small mode. Happy now?"],
 "Hypnotic Helena": ["That's alright... let it be smaller... let it be easy, {nick}...", "Shorter strokes... deeper focus... you don't need more than this...", "Let the worry go. Your limit is perfect for sinking down."],
 "Coach Colleen": ["Good call, {nick}! Know your range, then own it!", "Range adjusted, champ. We'll make every rep count.", "Listening to your body is part of training. Proud of you."],
 "Doctor Delphine": ["Interesting. Recording your maximum comfortable range, {nick}.", "Noted in the chart: limited range. We'll adjust the examination.", "Thank you for reporting that. Comfort data is valuable data."],
 "Jealous Juliet": ["Good. Less of you for anyone else to see, {nick}.", "You don't need to be big. You just need to be mine.", "Fine. Whatever you've got, it belongs to me."],
 "Queen Valentina": ["The crown is... underwhelmed, {nick}. But the crown is gracious.", "A smaller tribute than expected. It will do.", "By royal decree, your limits are noted. Disappoint me in nothing else."],
 "Pouty Penelope": ["Aww, it's okay! Small is cute, {nick}!", "Hmph, I wanted the whole thing... but okay, I'll be nice.", "Don't be sad! I'll make the little strokes extra good."],
 "Flirty Fiona": ["Hey, it's not the size of the wave, it's how you ride it, {nick}.", "No pressure, cutie. We'll keep it comfy.", "Short and sweet? I can work with that, trust me."],
 "Stage-Manager Simone": ["Copy that. Adjusting the blocking to fit the talent, {nick}.", "Smaller stage, same show. Places, everyone.", "Noted for the run sheet: limited range. We'll make it work."],
 "Chef Gianna": ["A smaller portion, {nick}? Then we savour every bite.", "Not every dish needs to be big to be delicious.", "I'll adjust the recipe. Small and rich, the best kind."],
 "Inspector Vale": ["Interesting admission, {nick}. Noted for the record.", "So that's your limit. Thank you for your honesty. It'll be taken into account.", "Statement logged: insufficient range. Proceeding accordingly."],
 "Unit Nine": ["Range limit detected. Recalibrating parameters for {nick}.", "Updating model: maximum stroke reduced. Disappointment subroutine... suppressed.", "Input accepted. Operating within your specifications."],
 "Captain Sable": ["Shallow waters, eh, {nick}? Then we sail careful.", "Can't take the deep sea? Fine, we'll hug the coastline.", "Smaller ship, same captain. Hoist what sails you've got!"],
 "Madame Zara": ["The cards foretold this, {nick}. A modest future.", "I see... limitations. The spirits are not surprised.", "Your fate is smaller than I hoped. But fate can still be kind."],
 "Madame Olenka": ["Hm. Short line. Then it must be perfect within it, {nick}.", "We cannot all have long extensions. Clean and precise instead.", "Limited range. Then no wobbling. None."],
 "Glitch": ["Hardware limitation detected, lol. Patching around it, {nick}.", "Can't max out the range? Switching to low-spec mode.", "Bandwidth reduced. Still breaking in."],
 "Nurse Ingrid": ["Thank you for telling me, {nick}. We'll keep everything comfortable.", "That's completely fine. Your comfort comes first.", "Good that you spoke up. We'll stay within what feels right."],
 "High-Energy Holly": ["Modify the move! That's totally allowed, {nick}!", "Shorter range, same energy! Let's go!", "Low-impact version! Still counts, {nick}!"],
 "Starlet Sloane": ["Darling, not every scene needs a grand sweep. Close-ups are where the magic is, {nick}.", "A smaller part, but we'll make it a memorable one.", "How disappointing. Still, I've worked with less."],
 "Office Olivia": ["Noted. I'll update the specifications, {nick}.", "Revised scope: smaller. I'll adjust the schedule.", "Filed under 'limitations'. Moving on."],
 "Satin Sasha": ["Mm, smaller frame? I'll work the angles, {nick}.", "No compliment for that one, I'm afraid. But I'll be gentle.", "Every model works with what they've got. You too."],
 "Livestream Lexi": ["Chat, {nick} can't take the full stroke. Chat is NOT being nice about it.", "Chat's spamming the tiny emoji. I'm not saying anything, {nick}.", "Okay, small mode stream! Chat voted, it's cute."],
 "Lilith": ["Such a small offering, {nick}. I expected... more.", "Mortal limits. How delicious to know them.", "Then I'll take my time with what little you have."],
 "Lyric Lola": ["Short bars, still fire, {nick}. I can flow with that.", "Shorter verse? I'll make every line hit.", "Tight beat, small pocket. Let's ride it."]
};
SHARED.strokeLimit = ["Okay, {nick}. We'll stay within what you can take.", "Noted. I won't push past your limit."];

/* While a stroke limit is set, the persona in control checks in now and then: can you take more now? */
const STROKE_ASK = {
 "Patient Priscilla": ["How are you feeling now, {nick}? Do you think you could take a little more length?", "No pressure, {nick}. Ready to try a longer stroke, or shall we stay here?"],
 "Mischievous Mia": ["Sooo... grown any since last time, {nick}? Can you take more?", "Ready for a bigger stroke yet, or still tiny mode?"],
 "Strict Ms. Vance": ["You've had time to improve, {nick}. Can you take a longer stroke now?", "I'll ask once. Are you capable of more yet?"],
 "Chaos Cassie": ["New round! Can you handle more length now, {nick}?", "Spin the wheel: longer stroke, yes or no?"],
 "Sweet-Talker Sienna": ["How are you doing, {nick}? Would a little more feel good now?", "Only if you're ready, {nick}. Want to try a longer stroke?"],
 "Relentless Roxy": ["Break's over, rookie. Can you take a longer stroke now?", "Time to push. More length, yes or no, {nick}?"],
 "Sleepy Sadie": ["Mm... feeling up to a bit more length now, {nick}...?", "...is it still too much? Or can we stretch out a little..."],
 "Drill Sergeant Dana": ["Status check! Can you handle a longer stroke now, {nick}?", "Range check, {nick}! More length, yes or no?"],
 "Mocking Margot": ["Has it grown yet, {nick}? Can you take a real stroke now?", "Let's check in on your little problem. Any better?"],
 "Cuckolding Veronica": ["Can you handle a little more now, {nick}? He'd never need to be asked.", "Ready to try a real stroke yet?"],
 "Counting Camille": ["Re-measuring, {nick}. Can you take a longer stroke now?", "Time for a recount. More length, yes or no?"],
 "Gambling Gigi": ["New hand, {nick}. Raising the stakes: can you take more length?", "Feeling lucky? Want to try a longer stroke?"],
 "Goddess Isadora": ["Mortal. Have you grown worthy of more, {nick}?", "I offer you a chance to give more. Do you accept?"],
 "Bratty Bella": ["Okay, can you do the whole thing now or what, {nick}?", "Ugh, are you still being small about it? Can you take more?"],
 "Hypnotic Helena": ["Feel how relaxed you are now, {nick}... could you take a little more...?", "Breathe... and ask yourself... is there room for more now...?"],
 "Coach Colleen": ["Check-in, {nick}! Ready to increase your range?", "Feeling warmed up, champ? Want to try a longer stroke?"],
 "Doctor Delphine": ["Follow-up examination, {nick}. Has your range improved?", "Let's re-test. Can you tolerate a longer stroke now?"],
 "Jealous Juliet": ["Can you give me more now, {nick}? Just for me?", "Is there more of you for me yet?"],
 "Queen Valentina": ["The crown inquires, {nick}: can you offer a greater tribute now?", "By royal decree: are you capable of more?"],
 "Pouty Penelope": ["Can you do more now, {nick}? Pretty please?", "Is it still too much? Or can we try a teeny bit more?"],
 "Flirty Fiona": ["Hey, {nick}, feeling up to a longer ride now?", "Wanna try a bit more, or keep it chill?"],
 "Stage-Manager Simone": ["Notes from the director, {nick}: can we extend the range now?", "Quick check before the next scene: more length, yes or no?"],
 "Chef Gianna": ["Ready for a bigger portion now, {nick}?", "Has your appetite grown? Can you take more?"],
 "Inspector Vale": ["Let's revisit your earlier statement, {nick}. Can you handle more now?", "Has anything changed? Longer stroke, yes or no?"],
 "Unit Nine": ["Re-running range diagnostic, {nick}. Can you accept an increase?", "Query: has your maximum stroke changed?"],
 "Captain Sable": ["Ready for deeper waters now, {nick}?", "Wind's changing. Can you take a longer stroke?"],
 "Madame Zara": ["The cards are shifting, {nick}. Can you take more now?", "I sense a change... can you handle a longer stroke?"],
 "Madame Olenka": ["Again. Can you extend now, {nick}?", "Your line was short. Is it longer now?"],
 "Glitch": ["Running a new exploit, {nick}. Can you handle more range?", "Patch available: longer stroke. Install? Y/N"],
 "Nurse Ingrid": ["How are you feeling, {nick}? Would you like to try a little more?", "Just checking in. Is a longer stroke comfortable now?"],
 "High-Energy Holly": ["Ready to level up the range, {nick}?", "Feeling warm? Let's try the full move!"],
 "Starlet Sloane": ["Darling, are you ready for a bigger scene now, {nick}?", "Shall we try for a grander sweep this time?"],
 "Office Olivia": ["Following up, {nick}. Can you handle more length now?", "Checking the schedule: are you ready to expand the scope?"],
 "Satin Sasha": ["Ready for a bigger pose now, {nick}?", "Can you give me more for the camera?"],
 "Livestream Lexi": ["Chat wants to know, {nick}: can you take more now?", "Poll time! Longer stroke, yes or no?"],
 "Lilith": ["Have you more to give me now, {nick}?", "Let me test you again. Can you take more?"],
 "Lyric Lola": ["Next verse, {nick}. Can you take a longer bar?", "Beat's switching up. Ready for more?"]
};

/* Her reply when you say yes (full stroke, or a little more). */
const STROKE_MORE = {
 "Patient Priscilla": ["Wonderful, {nick}. Gently does it.", "Look at you. Just a little more, nice and easy."],
 "Mischievous Mia": ["Ooh, look who's brave now!", "Hehe, more it is! Don't chicken out, {nick}!"],
 "Strict Ms. Vance": ["Better. That's what I expect, {nick}.", "Good. See how much more you manage when pushed?"],
 "Chaos Cassie": ["YES! More chaos, more room!", "Ooh, bigger playground! Let's go!"],
 "Sweet-Talker Sienna": ["Mmm, that's it. You're doing so well, {nick}.", "Look at you taking more for me. So good."],
 "Relentless Roxy": ["That's what I like to hear. Push it!", "Finally. Now keep up, {nick}."],
 "Sleepy Sadie": ["Mm... nice... a little longer...", "Okay... stretching out... comfy..."],
 "Drill Sergeant Dana": ["Outstanding! Extend and execute!", "That's the spirit, soldier! Full effort!"],
 "Mocking Margot": ["Oh? Look who's suddenly ambitious.", "Fine, more. Try not to embarrass yourself this time, {nick}."],
 "Cuckolding Veronica": ["Oh, trying to keep up with him? Cute.", "More? Let's see how long that lasts, {nick}."],
 "Counting Camille": ["Range increased. Adjusting the count.", "Good. Longer strokes, same precision, {nick}."],
 "Gambling Gigi": ["Ooh, raising the bet! I love it.", "Big player now, {nick}! Let's see it."],
 "Goddess Isadora": ["Better. Your devotion grows, {nick}.", "Good. A worthier offering."],
 "Bratty Bella": ["Finally! Was that so hard?", "Yay, more! See, you can do things right, {nick}."],
 "Hypnotic Helena": ["Yes... longer... deeper... that's it...", "Good... let it stretch... let it pull you under, {nick}..."],
 "Coach Colleen": ["That's progress! Proud of you, {nick}!", "New personal best incoming! Let's go!"],
 "Doctor Delphine": ["Excellent. Recording the improvement.", "Interesting progress, {nick}. Let's observe."],
 "Jealous Juliet": ["Yes. More of you, all mine.", "Good. Give me everything you've got, {nick}."],
 "Queen Valentina": ["The crown is pleased. Proceed.", "A worthier tribute. Well done, {nick}."],
 "Pouty Penelope": ["Yay! You're the best, {nick}!", "Ooh, more! I'm so happy!"],
 "Flirty Fiona": ["Ooh, look at you go!", "Now we're talking, {nick}!"],
 "Stage-Manager Simone": ["Love it. Extending the blocking.", "Bigger scene! Places, {nick}."],
 "Chef Gianna": ["Mmm, a bigger serving. Delicious.", "That's it, {nick}. More to savour."],
 "Inspector Vale": ["So your statement's changed. Noted.", "Interesting. Let's see if it holds, {nick}."],
 "Unit Nine": ["Range increase accepted. Updating parameters.", "Expanding limits. Efficiency improving, {nick}."],
 "Captain Sable": ["Hoist the sails! Deeper we go!", "That's my sailor, {nick}! Full ahead!"],
 "Madame Zara": ["The cards foretold growth. How lovely.", "A brighter fortune, {nick}."],
 "Madame Olenka": ["Better extension. Hold it clean.", "Good. Longer line, no wobble, {nick}."],
 "Glitch": ["Patch installed. Range unlocked.", "Limits bypassed, {nick}. Nice."],
 "Nurse Ingrid": ["Lovely. Tell me if it's too much.", "Good. Gently does it, {nick}."],
 "High-Energy Holly": ["YES! Full range! Woo!", "That's the energy! Bigger moves, {nick}!"],
 "Starlet Sloane": ["Now that's a leading role.", "Bravo, {nick}. Much more cinematic."],
 "Office Olivia": ["Scope expanded. Updating the file.", "Good. Let's get through the list, {nick}."],
 "Satin Sasha": ["Mm, that's a better angle.", "Now that's worth a compliment, {nick}."],
 "Livestream Lexi": ["Chat is going WILD! More it is!", "Poll passed! Upgrade unlocked, {nick}!"],
 "Lilith": ["Mm, there's more of you. Delicious.", "Yes... give me more, {nick}."],
 "Lyric Lola": ["Now that's a drop! Let's go!", "Longer bars, harder hits, {nick}!"]
};

/* Her reply when you still can't. */
const STROKE_STILL = {
 "Patient Priscilla": ["That's quite all right, {nick}. We'll stay right here.", "No rush at all. I'll ask again later."],
 "Mischievous Mia": ["Still tiny mode? Hehe, okay, {nick}.", "Aww, still can't? Too cute. I'll ask again!"],
 "Strict Ms. Vance": ["Still limited. How very disappointing, {nick}.", "Noted again. I'll be checking."],
 "Chaos Cassie": ["Boo. Fine, small chaos it is.", "Still no? I'll ask again when you least expect it!"],
 "Sweet-Talker Sienna": ["That's okay, {nick}. I'm happy right here with you.", "No worries at all. We'll stay comfy."],
 "Relentless Roxy": ["Still? Weak, {nick}. Then the speed stays up.", "Fine. I'll ask again, and I won't be this patient."],
 "Sleepy Sadie": ["Mm, that's fine... small and cozy...", "...okay... I'll ask later... maybe..."],
 "Drill Sergeant Dana": ["Copy. Holding position, {nick}.", "Still limited. We'll drill it again later."],
 "Mocking Margot": ["Still can't? Of course not, {nick}.", "Still tiny. I'll keep asking, just to hear you say it."],
 "Cuckolding Veronica": ["No? I'm not surprised, {nick}.", "Still not enough. He'd never have to say that."],
 "Counting Camille": ["Range unchanged. Noted, {nick}.", "Holding at the current length. I'll measure again later."],
 "Gambling Gigi": ["Folding again? Okay, low-stakes table it is.", "No bet this round. I'll deal you in later."],
 "Goddess Isadora": ["Still unworthy. I shall be patient. For now.", "As expected. I will ask again."],
 "Bratty Bella": ["Ugh. Still? You're so annoying, {nick}.", "Fine! But I'm asking again in like two minutes."],
 "Hypnotic Helena": ["That's alright... stay where you are... sink deeper instead...", "No need for more... I'll ask again when you're even more relaxed..."],
 "Coach Colleen": ["No problem! We'll build up to it, {nick}.", "Smart training. I'll check in again later."],
 "Doctor Delphine": ["No change. Noted in the chart, {nick}.", "Range unchanged. We'll re-test later."],
 "Jealous Juliet": ["That's fine. Whatever you have is still mine.", "No? Then I'll keep what I have. And ask again."],
 "Queen Valentina": ["The crown remains... underwhelmed.", "Very well. The crown will ask again."],
 "Pouty Penelope": ["Aww, okay. That's still cute, {nick}.", "Hmph. Fine. I'll ask again later!"],
 "Flirty Fiona": ["All good, cutie. Comfy it is.", "No worries! I'll wink at you again later."],
 "Stage-Manager Simone": ["Copy that. Same blocking for now.", "Noted. We'll revisit at the next scene change."],
 "Chef Gianna": ["Then we keep the small plate. Still tasty.", "No hurry. I'll offer seconds later."],
 "Inspector Vale": ["Statement unchanged. Noted, {nick}.", "Consistent. I'll ask again later."],
 "Unit Nine": ["Range unchanged. Disappointment subroutine... active.", "Limit retained. Scheduling another check."],
 "Captain Sable": ["Shallow waters still. Steady as she goes.", "Aye, we'll test the depth again later."],
 "Madame Zara": ["The future remains modest.", "The spirits will ask again."],
 "Madame Olenka": ["Still short. Then it must be perfect.", "Hm. We will try again later."],
 "Glitch": ["Install failed. Still low-spec.", "Retrying later. Always retrying."],
 "Nurse Ingrid": ["That's completely fine. We'll stay here.", "Thank you for telling me. I'll check again later."],
 "High-Energy Holly": ["Keep the low-impact version! Still counts!", "No problem! We'll try again next set!"],
 "Starlet Sloane": ["Then we stay in close-up, darling.", "Pity. I'll ask again before the next take."],
 "Office Olivia": ["Noted. Scope unchanged.", "I'll put a reminder in for later."],
 "Satin Sasha": ["Still small? I'll keep working the angles.", "No compliment yet. I'll ask again."],
 "Livestream Lexi": ["Chat says 'still tiny'. I'm just reading chat, {nick}.", "Poll failed. Running it again later!"],
 "Lilith": ["Still so little to offer. How sweet.", "I'll come back for more. I always do."],
 "Lyric Lola": ["Short bars again. Still fire.", "We'll switch it up next verse."]
};
SHARED.strokeAsk = ["Can you take a little more now, {nick}?"];
SHARED.strokeMore = ["Good. A little more, {nick}."];
SHARED.strokeStill = ["Okay, {nick}. We'll stay here for now."];

/* Teases: she swaps her picture for one of her reward shots for a short while. Said when the picture swaps. */
const TEASE_SHOW = {
 "Patient Priscilla": ["Since you've been so patient, {nick}... a little peek.", "Just a glimpse. Don't stare too long, {nick}."],
 "Mischievous Mia": ["Hehe, peekaboo, {nick}! Don't blink!", "Oops, did I change my picture? Totally an accident!"],
 "Strict Ms. Vance": ["You've earned one look, {nick}. Only one.", "Observe. Quietly."],
 "Chaos Cassie": ["Surprise! New pic! Don't ask why!", "Chaos mode: wardrobe edition, {nick}!"],
 "Sweet-Talker Sienna": ["Just for you, {nick}... do you like it?", "I wanted you to see me like this, {nick}."],
 "Relentless Roxy": ["Eyes up here, rookie. This is what you're working for.", "Like what you see? Earn it, {nick}."],
 "Sleepy Sadie": ["Mm... I'm getting comfy... take a peek, {nick}...", "...too lazy to change back... look if you want..."],
 "Drill Sergeant Dana": ["At ease. You've earned a look, {nick}.", "Morale boost. Thirty seconds. Use them."],
 "Mocking Margot": ["Go on, stare, {nick}. I know you can't help it.", "Look how desperate that face gets. Pathetic. Keep looking."],
 "Cuckolding Veronica": ["This is what he gets every night, {nick}. You get a picture.", "Have a look. Then remember who actually gets to touch."],
 "Counting Camille": ["Thirty seconds of viewing, {nick}. Starting... now.", "A measured reward. Count while you look."],
 "Gambling Gigi": ["Jackpot, {nick}! Look what the house is showing!", "Little bonus round. Don't get greedy."],
 "Goddess Isadora": ["Behold, mortal. Few are granted this sight.", "Gaze upon your goddess, {nick}. Briefly."],
 "Bratty Bella": ["Okay fine, you can look. You're welcome, {nick}.", "Look at me! No, really, look!"],
 "Hypnotic Helena": ["Look at me, {nick}... let the image sink in... deeper...", "Focus on this picture... nothing else exists..."],
 "Coach Colleen": ["Motivation break, {nick}! Look what's waiting at the finish line!", "Here's your incentive, champ!"],
 "Doctor Delphine": ["Observing your response to visual stimulus, {nick}. Hold still.", "A new variable. Let's see how you react."],
 "Jealous Juliet": ["This is only for you, {nick}. No one else gets this.", "Look at me. Only me."],
 "Queen Valentina": ["The court is granted an audience, {nick}. Kneel and look.", "A royal favour. Do not squander it."],
 "Pouty Penelope": ["Hehe, do you like it, {nick}? Say yes!", "I put this on just for you! Look!"],
 "Flirty Fiona": ["Wink wink, {nick}. Little peek for you.", "Oh, this old thing? Look all you like."],
 "Stage-Manager Simone": ["Costume change! Spotlight on me, {nick}!", "Special scene, one take only."],
 "Chef Gianna": ["A little taste, {nick}. Just a taste.", "Here's something to savour while it simmers."],
 "Inspector Vale": ["Exhibit A, {nick}. Look closely.", "Consider this evidence. Take your time."],
 "Unit Nine": ["Displaying reward file, {nick}. Duration: limited.", "Visual reward unlocked. Monitoring your response."],
 "Captain Sable": ["Land ho, {nick}! Feast your eyes!", "Treasure sighted. Look, but don't touch."],
 "Madame Zara": ["The veil lifts, {nick}... see what the cards promised.", "A vision, just for you."],
 "Madame Olenka": ["One pose. Hold your eyes on it, {nick}.", "Perfect form. Study it."],
 "Glitch": ["Leaked a private file, oops. Look fast, {nick}.", "Firewall down. Enjoy the view."],
 "Nurse Ingrid": ["Here's a little something to help you relax, {nick}.", "You've been doing so well. You've earned this."],
 "High-Energy Holly": ["Ta-da! Outfit change! Woo!", "Bonus round, {nick}! Look at that form!"],
 "Starlet Sloane": ["Close-up, darling. Hold the shot, {nick}.", "Every star has one scandalous photo. Here's mine."],
 "Office Olivia": ["Next item on the agenda: this. Take a look, {nick}.", "A little perk for good performance."],
 "Satin Sasha": ["Shoot's started, {nick}. Like the look?", "Compliment first, then you can keep looking."],
 "Livestream Lexi": ["Chat, we hit the goal! Outfit reveal!", "Exclusive content for {nick} and chat!"],
 "Lilith": ["Look upon me, {nick}... and feel what I could take from you.", "A glimpse of what you'll never have."],
 "Lyric Lola": ["Album cover drop, {nick}! Look at it!", "Exclusive release. Limited time."]
};

/* Said when her normal picture comes back. */
const TEASE_END = {
 "Patient Priscilla": ["That's enough for now. Back to it, {nick}.", "Mm. Hold on to that image."],
 "Mischievous Mia": ["Aaand it's gone! Hehe.", "Too slow, {nick}! Show's over!"],
 "Strict Ms. Vance": ["That's quite enough. Eyes forward.", "Privilege revoked. Focus, {nick}."],
 "Chaos Cassie": ["Annnd swapped back! Keep up!", "Gone! What were we doing?"],
 "Sweet-Talker Sienna": ["There, that's our little secret.", "I'll show you again if you're good, {nick}."],
 "Relentless Roxy": ["Break's over. Back to work.", "That's all you get. Push harder, {nick}."],
 "Sleepy Sadie": ["Mm... okay, covered up... cozy again...", "...sleepy... picture's going away now..."],
 "Drill Sergeant Dana": ["Break's over! Back to attention!", "Morale delivered. Now perform, {nick}!"],
 "Mocking Margot": ["And that's all a worm like you gets.", "Show's over. Wipe your chin, {nick}."],
 "Cuckolding Veronica": ["That's enough. He'd be jealous. Not of you.", "Picture's gone. Just like your chances, {nick}."],
 "Counting Camille": ["Time. Viewing concluded.", "Exactly as scheduled. Back to the count, {nick}."],
 "Gambling Gigi": ["House always takes it back, {nick}.", "Bonus over. Place your bets again."],
 "Goddess Isadora": ["The vision fades. Be grateful you saw it.", "Enough. Mortals cannot bear more, {nick}."],
 "Bratty Bella": ["Okay, that's enough looking. Ugh.", "Show's over. Say thank you, {nick}."],
 "Hypnotic Helena": ["Let it fade... but keep the feeling...", "The image is gone... the trance remains, {nick}..."],
 "Coach Colleen": ["Okay, eyes on the goal! Back to reps!", "Incentive delivered. Now earn it, {nick}!"],
 "Doctor Delphine": ["Stimulus removed. Fascinating results.", "Noted your reaction, {nick}. Very telling."],
 "Jealous Juliet": ["Mine to show, mine to take away.", "Don't you dare look at anyone else now, {nick}."],
 "Queen Valentina": ["The audience is over.", "The crown withdraws its favour. For now."],
 "Pouty Penelope": ["Okay, I'm shy now. Bye picture!", "Hehe, that's all! Was it good, {nick}?"],
 "Flirty Fiona": ["Okay, that's enough flirting. For now.", "Covered up! You're blushing, {nick}."],
 "Stage-Manager Simone": ["Cut! Back to the main show.", "Costume's back on the rack. Places, {nick}!"],
 "Chef Gianna": ["Lid back on. Let it simmer.", "That's enough tasting, {nick}. Patience."],
 "Inspector Vale": ["Exhibit withdrawn.", "Evidence logged. Back to questioning, {nick}."],
 "Unit Nine": ["Reward file closed.", "Display terminated. Response logged, {nick}."],
 "Captain Sable": ["Back to the sea, sailor.", "Treasure stowed. Full speed ahead, {nick}!"],
 "Madame Zara": ["The veil falls again.", "The vision fades... but the cards remember, {nick}."],
 "Madame Olenka": ["Pose released. Back to work.", "Enough admiring. Clean strokes, {nick}."],
 "Glitch": ["File wiped. Like it never happened.", "Patch applied. Leak closed, {nick}."],
 "Nurse Ingrid": ["There we go. Back to it, gently.", "Feeling better? Good, {nick}."],
 "High-Energy Holly": ["Back to the routine! Five, six, seven, eight!", "Cool-down's over! Let's go, {nick}!"],
 "Starlet Sloane": ["Cut. That one's not for the papers.", "The spotlight dims, darling."],
 "Office Olivia": ["Agenda item closed.", "Back to business, {nick}."],
 "Satin Sasha": ["That's a wrap on that look.", "Wardrobe change over. You owe me a compliment, {nick}."],
 "Livestream Lexi": ["Okay okay, back to normal stream!", "Chat's losing it. That's all for now!"],
 "Lilith": ["Gone. Hunger is good for you.", "I take it back, {nick}. I always take it back."],
 "Lyric Lola": ["Release window closed!", "Back in the booth, {nick}. Let's go."]
};
SHARED.teaseShow = ["A little peek, {nick}."];
SHARED.teaseEnd = ["That's all for now, {nick}."];


/* Ease-off requests: now and then a persona who is already on her preferred settings asks you to go slower or shorter,
   for teasing, endurance or training. Merged into LINES in index.html. {to} is the new value. */
const EASE_LINES = {
 "Patient Priscilla": {
  "easeSpeed": [
   "Let's slow down a little, {nick}. Ease it to {to}%. I want this to last a long, long time.",
   "Mm, you're doing so well. Back off to {to}%, and let's stretch this out together."
  ],
  "easeStroke": [
   "A little shorter now, {nick}. Down to {to}%. Gentle and slow keeps you here longer.",
   "Shorten the stroke to {to}%. We're in no hurry, are we?"
  ]
 },
 "Mischievous Mia": {
  "easeSpeed": [
   "Oh, you're keeping up so nicely. How boring! Slow down to {to}%, {nick}, let's see how you squirm.",
   "Ooh, too easy for you. Drop to {to}%. I like to watch you wait."
  ],
  "easeStroke": [
   "Shorter strokes, to {to}%. Just a little tease, {nick}!",
   "Cut the stroke to {to}%. Let's see how long you can behave."
  ]
 },
 "Strict Ms. Vance": {
  "easeSpeed": [
   "Endurance is built, {nick}, not given. Reduce your speed to {to}%. Now.",
   "You're comfortable. That will not do. Slow to {to}% and hold it there."
  ],
  "easeStroke": [
   "Shorten the stroke to {to}%. Control the length. Discipline.",
   "Reduce stroke length to {to}%. Precision, not enthusiasm."
  ]
 },
 "Chaos Cassie": {
  "easeSpeed": [
   "Wait, wait, I changed my mind! Slow it down to {to}%! Why? No reason!",
   "Ooh, plot twist! Drop to {to}%, {nick}! Let's see what happens!"
  ],
  "easeStroke": [
   "New idea! Shorter strokes, {to}%! It'll be hilarious!",
   "Stroke to {to}%! Don't ask me why, I just feel like it!"
  ]
 },
 "Sweet-Talker Sienna": {
  "easeSpeed": [
   "You're doing so well, {nick}. Let's slow it right down to {to}%, and make it last for me.",
   "Shh, easy now. Ease it to {to}%, and let me enjoy you a little longer."
  ],
  "easeStroke": [
   "A shorter stroke now, {nick}. Down to {to}%. Slow and sweet.",
   "Mmm, let's keep it small for a moment. {to}%. Feels better, doesn't it?"
  ]
 },
 "Relentless Roxy": {
  "easeSpeed": [
   "Fine. Slow to {to}%. A little torture builds stamina, rookie.",
   "Drop it to {to}% for a bit. Don't think I'm going soft. I'll make you pay for it later."
  ],
  "easeStroke": [
   "Shorter, to {to}%. Fewer inches, more pain.",
   "Cut the stroke to {to}%. Think of it as a warm-up for what's coming."
  ]
 },
 "Sleepy Sadie": {
  "easeSpeed": [
   "Mm... slower, {nick}... go down to {to}%... I like it nice and lazy...",
   "Let's drift down to {to}%... slow... stay with me..."
  ],
  "easeStroke": [
   "Shorter now... {to}%... small and slow... mm...",
   "Little strokes, {nick}... {to}%... lazy and warm..."
  ]
 },
 "Drill Sergeant Dana": {
  "easeSpeed": [
   "Endurance drill! Cut your speed to {to}%, {nick}! Hold it! Prove you can last!",
   "Pace change! Drop to {to}%! A strong recruit can hold a slow tempo!"
  ],
  "easeStroke": [
   "Shorten that stroke to {to}%! Control, not speed!",
   "Stroke down to {to}%! Control is the test!"
  ]
 },
 "Mocking Margot": {
  "easeSpeed": [
   "Oh, you think you're doing so well? Slow down to {to}%, {nick}. Let's see how long you last.",
   "You're a little too comfortable. Drop to {to}%. I want to hear you beg for speed."
  ],
  "easeStroke": [
   "Shorter strokes, to {to}%. Go ahead and whimper.",
   "Cut it to {to}%. Does a little denial hurt, {nick}?"
  ]
 },
 "Cuckolding Veronica": {
  "easeSpeed": [
   "Slow down to {to}%, {nick}. I want you to feel every second while I tell you about him.",
   "Drop to {to}%. Take your time. He always did."
  ],
  "easeStroke": [
   "Shorten the stroke to {to}%. Small and sad, just the way I like you.",
   "Down to {to}%. Smaller strokes for someone who watches."
  ]
 },
 "Counting Camille": {
  "easeSpeed": [
   "Endurance data requires variation. Reduce speed to {to}%, {nick}, and I'll log the effect.",
   "Test phase two. Lower your speed to {to}%. Let's see how you hold up."
  ],
  "easeStroke": [
   "Shorten stroke length to {to}% for the next trial.",
   "Reduce the stroke to {to}%. I'll count how long you can hold."
  ]
 },
 "Gambling Gigi": {
  "easeSpeed": [
   "Time to raise the stakes, {nick}! Slow to {to}%. Prove you can last, double or nothing!",
   "I bet you can't last at {to}%. Slow down and prove me wrong!"
  ],
  "easeStroke": [
   "Shorter stroke, {to}%! New bet, new rules!",
   "Down to {to}% on the stroke. Go on, it'll be worth the wait."
  ]
 },
 "Goddess Isadora": {
  "easeSpeed": [
   "Slower, {nick}. {to}%. Patience is a form of worship.",
   "Reduce your pace to {to}%. A goddess likes to savor."
  ],
  "easeStroke": [
   "Shorten your stroke to {to}%. Devotion needs no excess.",
   "Down to {to}%. I will decide when you have earned more."
  ]
 },
 "Bratty Bella": {
  "easeSpeed": [
   "Ugh, this is boring. Slow down to {to}%, {nick}! I want to see you suffer a bit.",
   "Hmm, I changed my mind. Slower, {to}%. Because I said so!"
  ],
  "easeStroke": [
   "Shorter, to {to}%! I'm not done playing with you!",
   "Stroke down to {to}%. It's funnier that way."
  ]
 },
 "Hypnotic Helena": {
  "easeSpeed": [
   "Slower now... let it fade down to {to}%... deeper... longer...",
   "Down to {to}%, {nick}... slow, steady... let it last..."
  ],
  "easeStroke": [
   "Shorter now... {to}%... smaller and softer... drifting...",
   "Let the stroke shrink to {to}%... slowly... deeper..."
  ]
 },
 "Coach Colleen": {
  "easeSpeed": [
   "Time for an endurance set, champ! Drop to {to}% and hold it! Build that stamina!",
   "Slow-tempo drill! Down to {to}%! Control is what wins!"
  ],
  "easeStroke": [
   "Short-stroke set! Cut to {to}%! Keep it tight!",
   "Technique round! Stroke length {to}%! Show me control!"
  ]
 },
 "Doctor Delphine": {
  "easeSpeed": [
   "Interesting. For the next test, reduce speed to {to}%, {nick}. I want to measure your endurance.",
   "Please lower the speed to {to}%. I'd like to observe a slower baseline."
  ],
  "easeStroke": [
   "Shorten the stroke to {to}% for the next observation.",
   "Reduce stroke length to {to}%. Let's see how you respond to less."
  ]
 },
 "Jealous Juliet": {
  "easeSpeed": [
   "Slow down to {to}%, {nick}. I want you to last for me. Only me.",
   "Drop to {to}%. I'm not ready to let you go yet."
  ],
  "easeStroke": [
   "Shorter strokes, {to}%. Stay close, stay with me.",
   "Down to {to}%. I'm keeping you right where I want you."
  ]
 },
 "Queen Valentina": {
  "easeSpeed": [
   "Reduce your speed to {to}%, {nick}. Your queen wishes to savor this.",
   "I decree a slower pace. {to}%. You will last, as ordered."
  ],
  "easeStroke": [
   "Shorten your stroke to {to}%. It is my decision.",
   "Stroke to {to}%. Obey."
  ]
 },
 "Pouty Penelope": {
  "easeSpeed": [
   "Slow down to {to}%, {nick}? I want this to last, pretty please!",
   "Go slower, {to}%? I'm not done with you yet, I promise it's fun!"
  ],
  "easeStroke": [
   "Shorter strokes, {to}%? It's cuter that way, I think.",
   "Make the stroke smaller, {to}%? Just for a little bit, honey!"
  ]
 },
 "Flirty Fiona": {
  "easeSpeed": [
   "Let's slow it down to {to}%, {nick}. Nice and teasing. Let me enjoy the view.",
   "Ooh, drop to {to}%. I like watching you try to behave."
  ],
  "easeStroke": [
   "Shorter strokes, {to}%. Make me work for it, handsome.",
   "Down to {to}% on the stroke. A tease is better when it's small."
  ]
 },
 "Stage-Manager Simone": {
  "easeSpeed": [
   "Cue change! Slow to {to}%, {nick}. Slow tempo, big payoff. The audience will wait.",
   "Go to {to}% for this scene. Hold it. We'll build it up again."
  ],
  "easeStroke": [
   "Blocking note: stroke to {to}%. Tight and controlled.",
   "Shorter stroke, {to}%. We're in a quiet scene."
  ]
 },
 "Chef Gianna": {
  "easeSpeed": [
   "Lower the heat, {nick}. Slow to {to}%. A good dish needs a long simmer.",
   "Let it simmer down to {to}%. Patience makes the flavor deeper."
  ],
  "easeStroke": [
   "Shorter strokes, {to}%. Just a gentle stir.",
   "Down to {to}% on the stroke. Don't rush the pot."
  ]
 },
 "Inspector Vale": {
  "easeSpeed": [
   "Slow down to {to}%, {nick}. I'm not finished with my questions.",
   "Drop to {to}%. Let's see how steady you are when you're not rushing."
  ],
  "easeStroke": [
   "Shorten the stroke to {to}%. I want to see how you react.",
   "Down to {to}%. Take it slow, answer carefully."
  ]
 },
 "Unit Nine": {
  "easeSpeed": [
   "Diagnostic: reduce speed to {to}%. Endurance test initiated, {nick}.",
   "Parameter adjustment: speed {to}%. Stability required."
  ],
  "easeStroke": [
   "Reduce stroke length to {to}%. Precision calibration.",
   "Stroke length {to}%. Hold for the calibration cycle."
  ]
 },
 "Captain Sable": {
  "easeSpeed": [
   "Ease the sails, {nick}! Slow to {to}%. A calm sea tests a sailor's patience.",
   "Slow to {to}%! We're becalmed, and you'll sit in it a while."
  ],
  "easeStroke": [
   "Shorter strokes, {to}%! Keep her steady, matey.",
   "Stroke down to {to}%. Hold your course through the doldrums."
  ]
 },
 "Madame Zara": {
  "easeSpeed": [
   "The cards say slow down, {nick}. {to}%. A long road to the peak.",
   "I see patience in your future. Reduce speed to {to}%."
  ],
  "easeStroke": [
   "The cards want a shorter stroke. {to}%. Trust them.",
   "Shorten to {to}%. The spirits say hold back."
  ]
 },
 "Madame Olenka": {
  "easeSpeed": [
   "Slower tempo, {nick}. {to}%. Control is the grace of every stroke.",
   "Adagio now. Reduce to {to}%. Feel every beat."
  ],
  "easeStroke": [
   "Shorter stroke, {to}%. Small, precise, elegant.",
   "Stroke to {to}%. Measured, like a slow turn."
  ]
 },
 "Glitch": {
  "easeSpeed": [
   "Throttle limit... reducing speed to {to}%, {nick}. Hold it while I scan...",
   "Slow down to {to}%. Firewall adjusting. Don't trigger the alarm."
  ],
  "easeStroke": [
   "Shorten stroke to {to}%. Packet size reduced.",
   "Stroke to {to}%. Stay under the radar."
  ]
 },
 "Nurse Ingrid": {
  "easeSpeed": [
   "Let's take it slower, {nick}. Down to {to}%. A little endurance training is good for you.",
   "Slow to {to}%, dear. I want to see how well you handle it."
  ],
  "easeStroke": [
   "Shorter strokes now, {to}%. Easy does it.",
   "Let's try a smaller stroke, {to}%. Gentle for a moment."
  ]
 },
 "High-Energy Holly": {
  "easeSpeed": [
   "Cooldown set, champ! Slow to {to}%! Control the pace, build the stamina!",
   "Tempo change! {to}%! Slow reps burn the most! You've got this!"
  ],
  "easeStroke": [
   "Short-range reps! Stroke to {to}%! Stay tight!",
   "Half reps at {to}%! Feel the burn! Don't cheat!"
  ]
 },
 "Starlet Sloane": {
  "easeSpeed": [
   "Darling, a dramatic pause. Slow to {to}%. The audience should wait for it.",
   "Slower, {nick}. {to}%. Every great scene needs its slow burn."
  ],
  "easeStroke": [
   "A shorter stroke, {to}%. Subtle, like a close-up.",
   "Down to {to}%. A little restraint is so glamorous."
  ]
 },
 "Office Olivia": {
  "easeSpeed": [
   "I'm adjusting the schedule, {nick}. Reduce speed to {to}%. Endurance review.",
   "Please slow to {to}%. It's a long meeting."
  ],
  "easeStroke": [
   "Shorten stroke to {to}%. Efficient, no excess.",
   "Reduce stroke to {to}%. Let's keep it professional."
  ]
 },
 "Satin Sasha": {
  "easeSpeed": [
   "Slower for the camera, {nick}. {to}%. Let me pose a little longer.",
   "Slow down to {to}%, gorgeous. I want to tease you for a while."
  ],
  "easeStroke": [
   "A shorter stroke, {to}%. Just a small tease.",
   "Stroke to {to}%. Let me take my time."
  ]
 },
 "Livestream Lexi": {
  "easeSpeed": [
   "Viewers say slow it down! {to}%, {nick}! Let's see if you last!",
   "The room wants a slow burn! Drop to {to}%! Let's see if you tap out!"
  ],
  "easeStroke": [
   "The vote's in: shorter strokes! {to}%!",
   "Short strokes, {to}%! By popular request!"
  ]
 },
 "Lilith": {
  "easeSpeed": [
   "Slower, {nick}. {to}%. I'll feed on your wanting.",
   "Drop to {to}%. Hunger makes everything sweeter."
  ],
  "easeStroke": [
   "Shorter strokes, {to}%. I want you aching for more.",
   "Down to {to}%. Let it burn slowly."
  ]
 },
 "Lyric Lola": {
  "easeSpeed": [
   "Slow the beat to {to}%, {nick}. Let the verse breathe.",
   "Half-time! Drop to {to}%. Stay in the pocket and last the song."
  ],
  "easeStroke": [
   "Shorter stroke, {to}%. Tight bars, clean flow.",
   "Stroke to {to}%. Keep it in the pocket."
  ]
 }
};
SHARED.easeNo = ["Hm. Fine, {nick}. Stay as you are. For now.","No? Alright. Maybe next time.","Suit yourself, {nick}."];
