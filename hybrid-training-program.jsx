import { useState } from "react";

const COLORS = {
  bg: "#0a0a0a",
  surface: "#111111",
  card: "#181818",
  border: "#252525",
  accent: "#c8922a",
  accentDim: "#7a5718",
  accentGlow: "rgba(200,146,42,0.15)",
  text: "#e8e0d4",
  textMuted: "#7a7068",
  textSub: "#a09488",
  huberman: "#3a6b8a",
  cavaliere: "#6b3a3a",
  both: "#3a6b4a",
  mobility: "#6b4a8a",
};

const Tag = ({ label, color }) => (
  <span style={{
    fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
    textTransform: "uppercase", padding: "2px 7px", borderRadius: 4,
    background: color + "33", color: color, border: `1px solid ${color}55`,
    whiteSpace: "nowrap"
  }}>{label}</span>
);

const days = [
  {
    day: 1,
    label: "SUNDAY",
    title: "Zone 2 Endurance + Morning Mobility",
    type: "Cardio + Mobility",
    typeColor: COLORS.both,
    icon: "🚴",
    duration: "60–75 min",
    equipment: ["Stationary Bike", "Slant Board", "Resistance Band", "Kettlebell"],
    philosophy: ["Huberman: Zone 2 builds mitochondrial density & longevity", "Cavaliere: Mobility work prevents imbalances & injury"],
    sections: [
      {
        label: "ZONE 2 CARDIO",
        tag: "huberman",
        tagColor: COLORS.huberman,
        note: "65–75% max HR. Nasal breathing. Maintain conversational pace. 45–60 min.",
        exercises: [
          { name: "Stationary Bike — Zone 2", sets: "1 continuous", reps: "45–60 min", cue: "Nasal breathing throughout. HR: ~130–150 bpm (220 minus age × 0.70). You should be able to speak in full sentences." }
        ]
      },
      {
        label: "MORNING MOBILITY FLOW",
        tag: "mobility",
        tagColor: COLORS.mobility,
        note: "Complete after the bike. Do not rush — this is active recovery with a purpose.",
        exercises: [
          { name: "Slant Board Calf Stretch", sets: "2", reps: "90 sec each side", cue: "Stand on board, lean forearms into wall, knees straight. Deep Achilles + calf release." },
          { name: "Slant Board Jefferson Curl", sets: "2", reps: "8 slow reps", cue: "Light DB or bodyweight. Roll down vertebra-by-vertebra. Decompresses spine, opens posterior chain." },
          { name: "Slant Board Hip Flexor Stretch", sets: "2", reps: "45 sec each side", cue: "One foot on high end of board, other knee on ground. Push hips forward. Keep ribs stacked over hips." },
          { name: "90/90 Hip Switch", sets: "2", reps: "10 transitions", cue: "Sit on floor, legs at 90°. Rotate hips side to side. Opens internal & external hip rotation." },
          { name: "Thoracic Rotation (quadruped)", sets: "2", reps: "12 each side", cue: "Hand behind head. Rotate elbow to ceiling. Primary antidote to desk posture." },
          { name: "KB Turkish Get-Up", sets: "2", reps: "3 each side (light KB)", cue: "The single best full-body mobility + stability drill in existence. Move slowly — each transition is the work. Trains shoulder stability, hip mobility, spinal control, and balance simultaneously. If you can do this well, your body is functioning." },
          { name: "Dead Hang", sets: "2", reps: "60–90 sec", cue: "Passive hang. Spinal decompression + shoulder mobility. Grip health marker. Cavaliere's #1 daily non-negotiable." }
        ]
      }
    ]
  },
  {
    day: 2,
    label: "MONDAY",
    title: "Legs — Slant Board Protocol",
    type: "Resistance Training",
    typeColor: COLORS.cavaliere,
    icon: "🦵",
    duration: "55–70 min",
    equipment: ["Slant Board", "Dumbbells", "Kettlebell", "Bench", "Loop Bands"],
    philosophy: ["Huberman: Alternate monthly between 4–8 reps (strength) and 8–15 reps (hypertrophy)", "Cavaliere: Primer first, compound movements, full ROM, joint-safe loading"],
    sections: [
      {
        label: "WARM-UP PRIMER",
        tag: "cavaliere",
        tagColor: COLORS.cavaliere,
        note: "2 sets each. Sub-maximal. Prepares VMO, glutes, and hip stabilizers.",
        exercises: [
          { name: "KB Swing (hip hinge primer)", sets: "2", reps: "10", cue: "Light-moderate KB. This is a hip HINGE, not a squat — hike the bell back between legs, snap hips forward explosively. Primes the glutes and hamstrings perfectly before loading. Cavaliere-approved hip hinge activation pattern." },
          { name: "Loop Band Hip Circles (standing)", sets: "2", reps: "15 each direction", cue: "Band just above knees. Activate glute med before any loading." },
          { name: "Slant Board ATG Hold (deep squat)", sets: "2", reps: "30–45 sec hold", cue: "Feet on board, drop into deepest comfortable squat. Hands in front for balance. Assess your range." },
          { name: "Leg Swings (forward/lateral)", sets: "1", reps: "10 each direction per leg", cue: "Dynamic. Hip joint mobilization before loading." }
        ]
      },
      {
        label: "MAIN WORK",
        tag: "both",
        tagColor: COLORS.both,
        note: "Month A: 3–4 sets × 4–8 reps, 2–4 min rest, heavy. Month B: 3 sets × 8–15 reps, 90 sec rest, moderate.",
        exercises: [
          { name: "Slant Board Goblet Squat", sets: "3–4", reps: "Per phase", cue: "Hold DB at chest. Heels elevated on slant board. Drive knees out over toes. Full depth. Pause at bottom for max quad recruitment." },
          { name: "Bulgarian Split Squat (front foot on slant board)", sets: "3–4/leg", reps: "Per phase", cue: "Rear foot elevated on bench, front foot on slant board. Targets VMO aggressively. Keep torso upright. Cavaliere: slow eccentric (3 sec down)." },
          { name: "Romanian Deadlift (DBs or KB)", sets: "3–4", reps: "Per phase", cue: "Hip hinge, soft knee bend. Feel hamstring stretch at bottom. Two DBs, one heavier DB, or a heavy KB. Full hip lock at top. KB option: hold one heavy KB with both hands — actually superior for forcing a neutral spine." },
          { name: "KB Goblet Squat (slant board option)", sets: "2", reps: "10–12 slow", cue: "Hold KB at chest. Use slant board for deeper range or flat ground for more ankle challenge. Excellent technique builder — the weight counterbalances your torso and teaches upright positioning. Use as a technique primer or accessory set." },
          { name: "Slant Board ATG Split Squat", sets: "3/leg", reps: "8–12", cue: "Back knee drops close to floor. Pure quad + knee tendon strengthening. Light load or bodyweight. This is the longevity movement." },
          { name: "Nordic Hamstring Curl (bench anchor)", sets: "3", reps: "4–8 (assisted as needed)", cue: "Feet anchored under bench. Lower body toward floor with control. Use hands to assist up. Unrivaled eccentric hamstring strength." },
          { name: "Slant Board Calf Raises", sets: "3", reps: "15–20 slow", cue: "Full range — deep stretch at bottom, full contraction at top. 2-sec hold at peak." },
          { name: "Loop Band Lateral Walks", sets: "2", reps: "15 steps each direction", cue: "Band above knees. Hips back, knees out. Glute med isolation. Cavaliere staple for knee alignment." }
        ]
      },
      {
        label: "CONDITIONING FINISHER",
        tag: "cavaliere",
        tagColor: COLORS.cavaliere,
        note: "Cavaliere PHAT protocol — tracks cardiovascular recovery speed.",
        exercises: [
          { name: "KB Swing Finisher", sets: "4 rounds", reps: "15 swings / 30 sec rest", cue: "Moderate-heavy KB. All hip drive, no arm pull. This is a ballistic movement — maximum power per rep. Excellent cardiovascular + posterior chain finisher. Elevates HR rapidly for conditioning effect." },
          { name: "Stationary Bike PHAT Circuit", sets: "2–3 rounds", reps: "30 sec hard / 60 sec easy", cue: "Measure resting HR first. Sprint at 85–90% max HR for 30 sec, recover on easy pedal. Track how quickly HR returns to within 10% of resting." }
        ]
      }
    ]
  },
  {
    day: 3,
    label: "TUESDAY",
    title: "Recovery: Cold Plunge + Deep Mobility",
    type: "Recovery",
    typeColor: COLORS.both,
    icon: "🧊",
    duration: "45–60 min",
    equipment: ["Cold Plunge", "Slant Board", "Resistance Band", "Kettlebell"],
    philosophy: ["Huberman: Cold exposure 6–8 hrs post-resistance training — NOT immediately after, to preserve hypertrophy signal", "Cavaliere: Active recovery days preserve athleticism & movement quality"],
    sections: [
      {
        label: "DELIBERATE COLD EXPOSURE",
        tag: "huberman",
        tagColor: COLORS.huberman,
        note: "2–3 rounds. Start conservatively. Never cold plunge within 6–8 hrs of finishing a resistance session.",
        exercises: [
          { name: "Hot Shower → Cold Plunge", sets: "2–3 rounds", reps: "3–5 min cold / 5 min warm", cue: "Cold: aim for 50–60°F. Huberman protocol: try to stay still, use physiological sigh (double inhale through nose, full exhale) to regulate stress response. Do NOT use cold to 'numb out' — stay present." },
          { name: "Physiological Sigh Practice", sets: "5–10", reps: "Between cold rounds", cue: "2 sharp nasal inhales followed by one long, complete exhale. Fastest known way to downregulate the nervous system." }
        ]
      },
      {
        label: "DEEP MOBILITY SESSION",
        tag: "mobility",
        tagColor: COLORS.mobility,
        note: "This is intentional therapeutic work, not a throwaway stretch. Move slowly and breathe into each position.",
        exercises: [
          { name: "KB Halo", sets: "2", reps: "8 each direction", cue: "Light KB. Circle the bell slowly around your head, keeping core braced. Trains shoulder mobility through full circumduction, thoracic rotation, and grip. Perfect recovery-day shoulder work." },
          { name: "KB Windmill", sets: "2", reps: "5 each side (light KB)", cue: "KB pressed overhead, push hip out, slide free hand down inner leg. Combines hip mobility, shoulder stability, and thoracic rotation in one movement. One of the best corrective exercises you can do. Move extremely slowly." },
          { name: "World's Greatest Stretch", sets: "2", reps: "5 each side", cue: "Lunge forward, same-side elbow to floor, rotate open. Opens hip flexor, thoracic spine, and hamstring simultaneously." },
          { name: "Pigeon Pose", sets: "2", reps: "90 sec each side", cue: "Sink hips evenly. Breathe into external hip rotation. Addresses piriformis tightness that causes knee + low back issues." },
          { name: "Couch Stretch", sets: "2", reps: "90 sec each side", cue: "Rear shin elevated against wall or couch. Most people's #1 hip flexor deficiency. Squeeze glute of rear leg." },
          { name: "Shoulder CARs (Controlled Articular Rotations)", sets: "2", reps: "5 each direction per shoulder", cue: "Slow, full-range shoulder circles. Move through end range with control. Cavaliere-endorsed joint maintenance." },
          { name: "Thoracic Extension over Bench", sets: "2", reps: "10–12", cue: "Sit in front of bench, drape upper back over edge, arms crossed on chest. Segment by segment extension. Reverses kyphosis from sitting." },
          { name: "Slant Board Hamstring Stretch", sets: "2", reps: "30–45 sec each side", cue: "Toes on top of board, lean toward toes with neutral spine. Hip hinge, not spinal flexion." },
          { name: "Ankle Circles on Slant Board", sets: "2", reps: "15 circles each direction per foot", cue: "Standing on board, slow ankle circles. Ankle mobility is the foundation of squat depth and knee health." },
          { name: "Dead Hang", sets: "2", reps: "60–90 sec", cue: "Full shoulder elevation at top. Decompresses spine, opens lats, trains grip. Cavaliere: do this every single day." }
        ]
      }
    ]
  },
  {
    day: 4,
    label: "WEDNESDAY",
    title: "Push — Chest, Shoulders, Triceps",
    type: "Resistance Training",
    typeColor: COLORS.cavaliere,
    icon: "💪",
    duration: "55–65 min",
    equipment: ["Dumbbells", "Kettlebell", "Bench", "Resistance Bands", "Z-Bar"],
    philosophy: ["Huberman: Choose 2 exercises per muscle — one at peak contraction, one at full stretch position", "Cavaliere: Warm the shoulder joint BEFORE any pressing — never load cold"],
    sections: [
      {
        label: "SHOULDER PRIMER",
        tag: "cavaliere",
        tagColor: COLORS.cavaliere,
        note: "Non-negotiable. Cavaliere: almost every chest injury happens in a shoulder that wasn't warmed up first.",
        exercises: [
          { name: "KB Halo", sets: "2", reps: "8 each direction", cue: "Light KB. Slow circles around the head. Warms up the entire shoulder girdle and cervical spine. Far superior to generic arm circles for pre-press preparation." },
          { name: "Band Pull-Aparts", sets: "2", reps: "15–20", cue: "Arms straight, pull band apart to chest level. Activates posterior deltoid + rhomboids. Counteracts internal rotation from pressing." },
          { name: "Band Face Pulls", sets: "2", reps: "15", cue: "Elbow high, pull to forehead level. External rotation of the shoulder. Cavaliere's #1 corrective exercise for long-term shoulder health." },
          { name: "Arm Circles + Shoulder CARs", sets: "1", reps: "10 each direction", cue: "Dynamic. Gets synovial fluid flowing in joint before loading." }
        ]
      },
      {
        label: "CHEST + SHOULDERS",
        tag: "both",
        tagColor: COLORS.both,
        note: "Month A: 3–4 sets × 4–8 reps, heavy, 2–4 min rest. Month B: 3 sets × 8–15 reps, 90 sec rest.",
        exercises: [
          { name: "KB Single-Arm Clean & Press", sets: "3", reps: "6–8 each side", cue: "Clean the KB to rack position (fist at chest, elbow tucked), then press overhead. Full-body power movement — hip drive into shoulder strength. Trains shoulder stability under load in a way dumbbells cannot replicate. Cavaliere-approved: athletic, functional, injury-resilient pressing pattern." },
          { name: "DB Flat Bench Press", sets: "3–4", reps: "Per phase", cue: "Full ROM — let DBs stretch your chest at the bottom. Drive through heels. Leg drive stabilizes everything above it. Touch DBs at top for peak contraction." },
          { name: "DB Incline Press (30–45°)", sets: "3–4", reps: "Per phase", cue: "Emphasizes upper chest + anterior delt. Slow eccentric (3 sec down). Feel the stretch at bottom, not just the press." },
          { name: "DB Overhead Press", sets: "3–4", reps: "Per phase", cue: "Seated or standing. Full lockout overhead for peak contraction. Elbows slightly forward — not flared wide (reduces shoulder impingement)." },
          { name: "DB Lateral Raise (slow eccentric)", sets: "3", reps: "12–15", cue: "Raise to just below shoulder height. 3-second lower. 'Pinky high' technique for better medial delt isolation. Cavaliere: lateral raises done wrong = shoulder pain waiting to happen." },
          { name: "DB Rear Delt Row (Urlacher variation)", sets: "3", reps: "12–15", cue: "Elbow drives back and behind your body. This is what lights up the rear delt — elbow extension behind the body, not just a standard row. Critical for shoulder balance." },
          { name: "Band Face Pulls (working sets)", sets: "3", reps: "15–20", cue: "Same as primer but heavier band. Every push day should have this. Non-negotiable for long-term shoulder health." }
        ]
      },
      {
        label: "TRICEPS + BURNOUT",
        tag: "cavaliere",
        tagColor: COLORS.cavaliere,
        note: "Indirect tricep work from pressing is significant — supplemental work here is focused and brief.",
        exercises: [
          { name: "Z-Bar Skull Crusher (on bench)", sets: "3", reps: "10–12", cue: "Lower bar behind head slightly (overhead position) to hit the long head of the tricep — largest portion. Z-bar reduces wrist strain vs. straight bar." },
          { name: "Diamond Push-Up (to failure)", sets: "2", reps: "AMRAP", cue: "Hands close together, elbows track back. Lockout is king here — full extension at top. This is your burnout. Go to honest failure." }
        ]
      }
    ]
  },
  {
    day: 5,
    label: "THURSDAY",
    title: "Moderate Cardio + Athletic Conditioning",
    type: "Cardio + Conditioning",
    typeColor: COLORS.both,
    icon: "🔥",
    duration: "50–60 min",
    equipment: ["Stationary Bike", "Dumbbells", "Kettlebell", "Resistance Bands"],
    philosophy: ["Huberman: Moderate cardio (75–80% max HR) for 35 min bridges Zone 2 and Zone 5 adaptations", "Cavaliere: PHAT circuits build cardiovascular fitness AND muscular endurance simultaneously"],
    sections: [
      {
        label: "MODERATE CARDIO",
        tag: "huberman",
        tagColor: COLORS.huberman,
        note: "Faster than Zone 2 — you should NOT be able to hold a conversation comfortably here.",
        exercises: [
          { name: "Stationary Bike — Moderate Intensity", sets: "1 continuous", reps: "30–35 min", cue: "75–80% max HR. Steady, sustained effort. Not a sprint, not a stroll. Bridges aerobic and anaerobic systems." }
        ]
      },
      {
        label: "PHAT CONDITIONING CIRCUIT",
        tag: "cavaliere",
        tagColor: COLORS.cavaliere,
        note: "Cavaliere's Peripheral Heart Action Training. Alternates upper/lower to keep blood moving throughout. 30 sec per exercise, no rest between exercises. Rest 90 sec between rounds. 5–6 rounds.",
        exercises: [
          { name: "DB Squat to Press", sets: "5–6 rounds", reps: "30 sec", cue: "Squat, then drive DBs overhead as you stand. Full body. Keeps heart rate elevated." },
          { name: "DB Bent-Over Row", sets: "5–6 rounds", reps: "30 sec", cue: "Elbow drives back. Upper back focus. Immediate after lower body movement." },
          { name: "Reverse Lunge (alternating)", sets: "5–6 rounds", reps: "30 sec", cue: "Step back, knee hovers, drive through front heel to return. Lower body again." },
          { name: "DB Push-Up (hands on DBs)", sets: "5–6 rounds", reps: "30 sec", cue: "DBs as handles. Deeper push-up range at bottom. Upper body again. Squeeze at top." },
          { name: "Band Pull-Apart + Overhead Reach", sets: "5–6 rounds", reps: "30 sec", cue: "Pull apart at chest height, then reach band overhead. Active recovery movement that trains shoulders and scapular health." },
          { name: "KB Swing (ballistic lower body)", sets: "5–6 rounds", reps: "30 sec", cue: "This replaces jump squats and is superior for conditioning. Pure hip explosion. Keeps HR maximal while training the posterior chain. The kettlebell swing is arguably the single best conditioning tool available." },
          { name: "KB Single-Arm Farmer Carry", sets: "5–6 rounds", reps: "30 sec each side", cue: "Heavy KB in one hand, walk with control. Trains grip, anti-lateral-flexion core stability, shoulder packing, and gait mechanics simultaneously. Cavaliere loves loaded carries for functional strength." }
        ]
      },
      {
        label: "COOL-DOWN",
        tag: "huberman",
        tagColor: COLORS.huberman,
        note: "3–5 min. Downregulate intentionally.",
        exercises: [
          { name: "Physiological Sigh Breathing", sets: "5", reps: "Double inhale + full exhale", cue: "The fastest way to shift from sympathetic to parasympathetic. Do this at end of every session." }
        ]
      }
    ]
  },
  {
    day: 6,
    label: "FRIDAY",
    title: "HIIT + Pull — Back, Biceps, Triceps",
    type: "HIIT + Resistance",
    typeColor: COLORS.cavaliere,
    icon: "⚡",
    duration: "65–75 min",
    equipment: ["Stationary Bike", "Dumbbells", "Kettlebell", "Z-Bar", "Resistance Bands", "Bench"],
    philosophy: ["Huberman: HIIT (Zone 5) targets VO2 max — single greatest predictor of longevity. Do 8–12 rounds of 20–30 sec all-out + 10 sec rest", "Cavaliere: Dead hang daily for grip, decompression, and shoulder longevity"],
    sections: [
      {
        label: "HIIT — ZONE 5",
        tag: "huberman",
        tagColor: COLORS.huberman,
        note: "Do HIIT first, while fresh. All-out means ALL out. Perfect form only. Huberman: 8–12 rounds.",
        exercises: [
          { name: "Stationary Bike Sprints", sets: "8–12 rounds", reps: "20–30 sec sprint / 10 sec rest", cue: "Sprint at 90–100% max HR. The 10-second rest is active (slow pedal), not stopped. This is zone 5 — VO2 max training. Uncomfortable is the point." }
        ]
      },
      {
        label: "REST TRANSITION",
        tag: "both",
        tagColor: COLORS.both,
        note: "Rest 5–10 min after HIIT before starting resistance work. Let HR come down. This also tests your cardiovascular recovery rate.",
        exercises: [
          { name: "Dead Hang (grip + spinal decompression)", sets: "2", reps: "90 sec each", cue: "Cavaliere recommends this every single morning for 1–2 min. It trains grip strength, decompresses the spine, and opens the lats and shoulder capsule. Non-negotiable longevity habit." }
        ]
      },
      {
        label: "BACK",
        tag: "both",
        tagColor: COLORS.both,
        note: "Month A: 3–4 sets × 4–8 reps heavy. Month B: 3 sets × 8–15 reps. Cavaliere: choose one exercise that hits peak contraction (bent row) and one that hits the stretch (pullover).",
        exercises: [
          { name: "KB Single-Arm Row", sets: "3–4/arm", reps: "Per phase", cue: "KB's offset center of mass demands more rotational stability than a DB — the lats and rotator cuff work harder to control it. Drive elbow back and high. Full scapular retraction at peak." },
          { name: "DB Bent-Over Row (elbows wide)", sets: "3–4", reps: "Per phase", cue: "Elbows flared slightly out — targets upper traps and rhomboids. Squeeze at top, full depression of scapula. Not a jerking movement." },
          { name: "DB Single-Arm Row (elbow tight)", sets: "3–4/arm", reps: "Per phase", cue: "Elbow tracks body — hits lats. Support on bench. Big pull with full elbow retraction. Feel the lat contract at peak." },
          { name: "DB Pullover (on bench)", sets: "3", reps: "12–15", cue: "Arms slightly bent. Take DB back overhead until you feel a deep lat + serratus stretch. Pullover trains the lat in a fully lengthened position — the stretch-side exercise Huberman recommends." },
          { name: "Resistance Band Scap Pulldown (primer/burnout)", sets: "2", reps: "15", cue: "Arms straight, pull band down by depressing scapulas. Warms up the back's ability to initiate movement from the scap — Cavaliere's essential primer before any back work." }
        ]
      },
      {
        label: "ARMS + CALVES + NECK",
        tag: "huberman",
        tagColor: COLORS.huberman,
        note: "Huberman's Day 7 protocol — arms trained at end of the week, after they've been indirectly trained all week. Huberman: train biceps in stretched position (incline curl) AND contracted (hammer).",
        exercises: [
          { name: "Z-Bar Curl", sets: "3–4", reps: "Per phase", cue: "Z-bar reduces wrist supination stress. Full ROM — don't cheat the top or bottom. Squeeze hard at peak, slow on the way down." },
          { name: "DB Incline Curl (lengthened position)", sets: "3", reps: "10–12", cue: "Recline on incline bench, arms hang straight. Curl from full stretch. This is the lengthened-position bicep exercise — highest muscle fiber recruitment." },
          { name: "DB Hammer Curl", sets: "2", reps: "12–15", cue: "Neutral grip. Trains brachialis (underlying muscle that pushes bicep up). Alternating or simultaneous." },
          { name: "Z-Bar Overhead Tricep Extension", sets: "3–4", reps: "Per phase", cue: "Targets long head of tricep (biggest portion). Full stretch overhead, full lockout. Don't let elbows flare wide." },
          { name: "Resistance Band Tricep Pressdown", sets: "2", reps: "15–20 to burnout", cue: "Anchor band overhead. Elbows pinned to sides. Full extension at bottom. Great peak contraction finisher." },
          { name: "KB Double Farmer Carry", sets: "3", reps: "30–40 sec", cue: "Heavy KBs. Walk tall, shoulders packed, core braced. Cavaliere and Huberman both cite grip strength as a top longevity biomarker. This is the most functional grip strength builder you can do at home." },
          { name: "Slant Board Calf Raises", sets: "3", reps: "15–20", cue: "Full stretch at bottom, full contraction at top. 2-sec pause at peak." },
          { name: "Resistance Band Neck Flexion + Extension", sets: "2", reps: "15 each direction", cue: "Huberman staple — neck training improves posture, reduces injury risk, supports CNS health. Go slowly with control." }
        ]
      }
    ]
  },
  {
    day: 7,
    label: "SATURDAY",
    title: "Full Rest + Circadian Reset",
    type: "Rest & Recovery",
    typeColor: COLORS.both,
    icon: "☀️",
    duration: "Optional 20 min",
    equipment: [],
    philosophy: ["Huberman: Morning sunlight within 30 min of waking synchronizes circadian rhythm — this is foundational, not optional", "Cavaliere: Adequate rest is when adaptation happens. Honor it."],
    sections: [
      {
        label: "HUBERMAN MORNING PROTOCOL",
        tag: "huberman",
        tagColor: COLORS.huberman,
        note: "The rest day is not passive — it's a biological reset day. These habits compound your training results.",
        exercises: [
          { name: "Morning Sunlight Exposure", sets: "1", reps: "10–30 min", cue: "Outside within 30 min of waking. No sunglasses. Eyes toward (not at) the sun. Sets cortisol pulse, anchors sleep timing, boosts morning alertness and testosterone." },
          { name: "Hydration on Waking", sets: "1", reps: "16–32 oz water", cue: "Before coffee. Replenishes fluid lost during sleep. Simple but underestimated." },
          { name: "Optional: 20 min Walk Outside", sets: "1", reps: "20 min easy", cue: "Not training — just movement. NSDR (non-sleep deep rest) level activity. Maintain Zone 1. Speeds glycogen replenishment." },
          { name: "Physiological Sigh + Breathwork", sets: "5–10 min", reps: "As needed", cue: "Use your rest day to practice the calming technique so it becomes automatic during hard workouts." }
        ]
      },
      {
        label: "OPTIONAL GENTLE STRETCH",
        tag: "mobility",
        tagColor: COLORS.mobility,
        note: "Only if the body calls for it. 10–15 min max.",
        exercises: [
          { name: "Dead Hang", sets: "1–2", reps: "90 sec", cue: "Daily. Always. Even on rest days." },
          { name: "Hip Flexor Stretch + 90/90", sets: "1 per side", reps: "60–90 sec each", cue: "Gentle. Not aggressive. Just maintenance." }
        ]
      }
    ]
  }
];

const periodization = {
  title: "Monthly Periodization",
  phaseA: {
    label: "Month A — Strength Phase",
    sets: "3–4 sets",
    reps: "4–8 reps",
    weight: "Heavy (near max)",
    rest: "2–4 min between sets",
    focus: "Neural adaptation, tendon strength, raw force production"
  },
  phaseB: {
    label: "Month B — Hypertrophy Phase",
    sets: "3 sets",
    reps: "8–15 reps",
    weight: "Moderate (challenging but controlled)",
    rest: "90 sec between sets",
    focus: "Muscle fiber recruitment, metabolic stress, size"
  }
};

const principles = [
  { icon: "🧠", label: "Huberman", text: "Choose 2 exercises per muscle: one at peak contraction, one at full stretch" },
  { icon: "📴", label: "Huberman", text: "Phone off during training. Full presence = full adaptation" },
  { icon: "😤", label: "Huberman", text: "Train hard to near-failure. Final reps should feel like a struggle" },
  { icon: "🧊", label: "Huberman", text: "Cold plunge 6–8+ hrs after lifting — NOT immediately after (blunts hypertrophy)" },
  { icon: "💨", label: "Huberman", text: "Physiological sigh between sets to manage stress and recover faster" },
  { icon: "🔥", label: "Cavaliere", text: "Always prime the target muscle before loading it. Never train cold" },
  { icon: "🦴", label: "Cavaliere", text: "Full range of motion builds more muscle AND prevents injury. No half reps" },
  { icon: "🫀", label: "Cavaliere", text: "Dead hang 1–2 min daily: grip strength + spinal decompression + shoulder health" },
  { icon: "👁️", label: "Cavaliere", text: "Mind-muscle connection: feel the target muscle, not just move the weight" },
  { icon: "↕️", label: "Cavaliere", text: "Band face pulls every push day. Non-negotiable for long-term shoulder health" }
];

export default function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const [showPrinciples, setShowPrinciples] = useState(false);
  const [showPeriodization, setShowPeriodization] = useState(false);

  const day = days[selectedDay];

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: COLORS.text,
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, #0d0d0d 0%, #141208 100%)`,
        borderBottom: `1px solid ${COLORS.border}`,
        padding: "28px 20px 20px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: 200, height: 200,
          background: `radial-gradient(circle, ${COLORS.accentGlow} 0%, transparent 70%)`,
          transform: "translate(30%, -30%)"
        }}/>
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <div style={{
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
            color: COLORS.accent, fontFamily: "'Georgia', serif", marginBottom: 6
          }}>
            HUBERMAN × ATHLEAN-X HYBRID PROTOCOL
          </div>
          <h1 style={{
            fontSize: 26, fontWeight: 400, margin: 0, lineHeight: 1.2,
            fontFamily: "'Georgia', serif", color: COLORS.text,
            letterSpacing: "-0.01em"
          }}>
            The Home Performance Program
          </h1>
          <p style={{
            color: COLORS.textSub, fontSize: 13, marginTop: 8, marginBottom: 0,
            lineHeight: 1.5, maxWidth: 500
          }}>
            Science-backed training for strength, longevity & athleticism — built for your home setup.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            <Tag label="Zone 2 + Zone 5 Cardio" color={COLORS.huberman} />
            <Tag label="Injury-Prevention First" color={COLORS.cavaliere} />
            <Tag label="Slant Board Mobility" color={COLORS.mobility} />
            <Tag label="Monthly Periodization" color={COLORS.accent} />
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 20px 0" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button
            onClick={() => setShowPeriodization(!showPeriodization)}
            style={{
              flex: 1, background: showPeriodization ? COLORS.accentGlow : COLORS.surface,
              border: `1px solid ${showPeriodization ? COLORS.accent : COLORS.border}`,
              borderRadius: 8, padding: "10px 12px", cursor: "pointer",
              color: showPeriodization ? COLORS.accent : COLORS.textSub,
              fontSize: 12, fontFamily: "Georgia, serif", letterSpacing: "0.05em",
              textTransform: "uppercase", textAlign: "left"
            }}>
            📊 Monthly Phases
          </button>
          <button
            onClick={() => setShowPrinciples(!showPrinciples)}
            style={{
              flex: 1, background: showPrinciples ? COLORS.accentGlow : COLORS.surface,
              border: `1px solid ${showPrinciples ? COLORS.accent : COLORS.border}`,
              borderRadius: 8, padding: "10px 12px", cursor: "pointer",
              color: showPrinciples ? COLORS.accent : COLORS.textSub,
              fontSize: 12, fontFamily: "Georgia, serif", letterSpacing: "0.05em",
              textTransform: "uppercase", textAlign: "left"
            }}>
            ⚡ Key Principles
          </button>
        </div>

        {showPeriodization && (
          <div style={{
            background: COLORS.surface, border: `1px solid ${COLORS.border}`,
            borderRadius: 10, padding: 16, marginBottom: 16
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: COLORS.accent, textTransform: "uppercase", marginBottom: 12 }}>
              HUBERMAN MONTHLY ALTERNATION
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[periodization.phaseA, periodization.phaseB].map((phase, i) => (
                <div key={i} style={{
                  flex: "1 1 200px", background: COLORS.card, borderRadius: 8,
                  padding: 14, border: `1px solid ${COLORS.border}`
                }}>
                  <div style={{ color: COLORS.accent, fontSize: 12, fontWeight: 700, marginBottom: 8 }}>{phase.label}</div>
                  {[["Sets", phase.sets], ["Reps", phase.reps], ["Weight", phase.weight], ["Rest", phase.rest]].map(([k, v]) => (
                    <div key={k} style={{ marginBottom: 5 }}>
                      <span style={{ color: COLORS.textMuted, fontSize: 11 }}>{k}: </span>
                      <span style={{ color: COLORS.text, fontSize: 12 }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 8, color: COLORS.textSub, fontSize: 11, fontStyle: "italic" }}>{phase.focus}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showPrinciples && (
          <div style={{
            background: COLORS.surface, border: `1px solid ${COLORS.border}`,
            borderRadius: 10, padding: 16, marginBottom: 16
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: COLORS.accent, textTransform: "uppercase", marginBottom: 12 }}>
              CORE TRAINING PRINCIPLES
            </div>
            {principles.map((p, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0",
                borderBottom: i < principles.length - 1 ? `1px solid ${COLORS.border}` : "none"
              }}>
                <span style={{ fontSize: 16, width: 24, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <Tag label={p.label} color={p.label === "Huberman" ? COLORS.huberman : COLORS.cavaliere} />
                  <span style={{ color: COLORS.textSub, fontSize: 12, marginLeft: 8 }}>{p.text}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Day Selector */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
            WEEKLY SCHEDULE
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {days.map((d, i) => (
              <button
                key={i}
                onClick={() => { setSelectedDay(i); setExpandedSection(null); }}
                style={{
                  background: selectedDay === i ? COLORS.accent : COLORS.surface,
                  border: `1px solid ${selectedDay === i ? COLORS.accent : COLORS.border}`,
                  borderRadius: 8, padding: "8px 10px", cursor: "pointer",
                  color: selectedDay === i ? "#000" : COLORS.textSub,
                  fontSize: 11, fontFamily: "Georgia, serif",
                  fontWeight: selectedDay === i ? 700 : 400,
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: 2, minWidth: 60
                }}>
                <span style={{ fontSize: 14 }}>{d.icon}</span>
                <span style={{ letterSpacing: "0.04em" }}>{d.label.split("").slice(0, 3).join("")}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Header */}
        <div style={{
          background: COLORS.surface, borderRadius: 10, padding: 18,
          border: `1px solid ${COLORS.border}`, marginBottom: 12,
          borderLeft: `3px solid ${day.typeColor}`
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>
                {day.label} · DAY {day.day}
              </div>
              <div style={{ fontSize: 20, fontWeight: 400, color: COLORS.text, lineHeight: 1.2 }}>
                {day.icon} {day.title}
              </div>
              <div style={{ marginTop: 6, display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                <Tag label={day.type} color={day.typeColor} />
                <span style={{ color: COLORS.textMuted, fontSize: 11 }}>⏱ {day.duration}</span>
              </div>
            </div>
          </div>
          {day.equipment.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 4 }}>Equipment:</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {day.equipment.map(e => (
                  <span key={e} style={{
                    fontSize: 11, background: COLORS.card, border: `1px solid ${COLORS.border}`,
                    borderRadius: 4, padding: "2px 8px", color: COLORS.textSub
                  }}>{e}</span>
                ))}
              </div>
            </div>
          )}
          <div style={{ marginTop: 12, borderTop: `1px solid ${COLORS.border}`, paddingTop: 10 }}>
            {day.philosophy.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4, alignItems: "flex-start" }}>
                <span style={{ color: COLORS.accent, fontSize: 11, marginTop: 1 }}>▸</span>
                <span style={{ color: COLORS.textSub, fontSize: 11, lineHeight: 1.4 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        {day.sections.map((section, si) => (
          <div key={si} style={{
            background: COLORS.surface, borderRadius: 10, marginBottom: 10,
            border: `1px solid ${COLORS.border}`,
            overflow: "hidden"
          }}>
            <button
              onClick={() => setExpandedSection(expandedSection === `${selectedDay}-${si}` ? null : `${selectedDay}-${si}`)}
              style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                padding: "14px 16px", display: "flex", justifyContent: "space-between",
                alignItems: "center", textAlign: "left"
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Tag label={section.tag} color={section.tagColor} />
                <span style={{ color: COLORS.text, fontSize: 13, fontFamily: "Georgia, serif", letterSpacing: "0.03em" }}>
                  {section.label}
                </span>
              </div>
              <span style={{
                color: COLORS.accent, fontSize: 16, fontWeight: 300,
                transform: expandedSection === `${selectedDay}-${si}` ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s"
              }}>▾</span>
            </button>

            {expandedSection === `${selectedDay}-${si}` && (
              <div style={{ borderTop: `1px solid ${COLORS.border}` }}>
                <div style={{
                  padding: "10px 16px 12px",
                  background: COLORS.card,
                  borderBottom: `1px solid ${COLORS.border}`
                }}>
                  <span style={{ fontSize: 11, color: COLORS.textSub, fontStyle: "italic", lineHeight: 1.4 }}>
                    {section.note}
                  </span>
                </div>

                {section.exercises.map((ex, ei) => (
                  <div key={ei} style={{
                    padding: "14px 16px",
                    borderBottom: ei < section.exercises.length - 1 ? `1px solid ${COLORS.border}` : "none"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 14, color: COLORS.text, fontFamily: "Georgia, serif" }}>{ex.name}</span>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <span style={{
                          fontSize: 11, color: COLORS.accent, background: COLORS.accentGlow,
                          border: `1px solid ${COLORS.accentDim}`, borderRadius: 4, padding: "2px 7px"
                        }}>{ex.sets}</span>
                        <span style={{
                          fontSize: 11, color: COLORS.textSub, background: COLORS.card,
                          border: `1px solid ${COLORS.border}`, borderRadius: 4, padding: "2px 7px"
                        }}>{ex.reps}</span>
                      </div>
                    </div>
                    <p style={{ margin: 0, fontSize: 12, color: COLORS.textSub, lineHeight: 1.6 }}>
                      {ex.cue}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div style={{
          textAlign: "center", padding: "20px 0 30px",
          color: COLORS.textMuted, fontSize: 11, letterSpacing: "0.08em"
        }}>
          <div style={{ color: COLORS.accent, marginBottom: 6 }}>
            HUBERMAN × ATHLEAN-X HYBRID · HOME PROTOCOL
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ color: COLORS.huberman }}>● Huberman Protocol</span>
            <span style={{ color: COLORS.cavaliere }}>● Cavaliere Method</span>
            <span style={{ color: COLORS.mobility }}>● Mobility Work</span>
            <span style={{ color: COLORS.both }}>● Hybrid Element</span>
          </div>
        </div>
      </div>
    </div>
  );
}
