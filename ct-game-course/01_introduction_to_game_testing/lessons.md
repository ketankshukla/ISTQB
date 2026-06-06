# Chapter 1 — Introduction to Game Testing: Lessons

---

## 1.1 Game Industry Overview

### Market Segments

| Segment | Description | Examples |
|---------|-------------|----------|
| **AAA** | High-budget, large team, major publisher | Call of Duty, FIFA, GTA |
| **AA** | Mid-budget, moderate team | Remakes, spin-offs |
| **Indie** | Small team, self-funded or small publisher | Hollow Knight, Stardew Valley |
| **Mobile** | Free-to-play or premium mobile games | Candy Crush, PUBG Mobile |
| **VR/AR** | Immersive reality experiences | Beat Saber, Half-Life: Alyx |

### Development Roles

| Role | Responsibility |
|------|-------------|
| **Game Designer** | Defines gameplay mechanics, systems, balance |
| **Programmer** | Implements gameplay, engine, tools |
| **Artist** | Creates visuals, animations, UI |
| **Sound Designer** | Creates audio, music, voice |
| **Producer** | Manages schedule, budget, milestones |
| **QA/Tester** | Finds and reports defects, verifies fixes |

---

## 1.2 Testing Roles in Games

### Functional QA

- Tests gameplay mechanics, features, levels
- Verifies game behaves as designed
- Documents bugs with reproduction steps

### Compliance QA

- Ensures game meets platform-holder requirements
- Tests memory usage, loading times, crash handling
- Verifies trophy/achievement integration

### Localization QA

- Tests translations, text display, cultural appropriateness
- Verifies audio dubbing and subtitles
- Checks date/currency/number formatting

### Certification QA

- Final pass before submission to platform holder
- Checks all compliance items
- Verifies no critical/blocker bugs remain

---

## 1.3 Game Genres

| Genre | Characteristics | Testing Focus |
|-------|----------------|---------------|
| **RPG** | Character progression, story, exploration | Save/load, quest logic, inventory |
| **FPS** | Shooting, fast-paced action | Hit detection, physics, multiplayer sync |
| **Puzzle** | Logic, pattern matching | Solution validation, hint system |
| **Strategy** | Resource management, tactics | AI behavior, balance, edge cases |
| **Racing** | Speed, vehicle handling | Physics, collision, time trials |
| **Sports** | Simulation of real sports | Stats accuracy, rule enforcement |
| **MMO** | Massive online world, persistent | Server load, persistence, economy |
| **Platformer** | Jumping, timing, level design | Collision, camera, checkpoint system |

---

## 1.4 Platform Types

| Platform | Characteristics | Testing Implications |
|----------|---------------|---------------------|
| **Console** | Fixed hardware, controlled ecosystem | Certification required, limited patching |
| **PC** | Variable hardware, open platform | Compatibility testing, many configurations |
| **Mobile** | Touch input, frequent OS updates | Device fragmentation, battery/heat, orientation |
| **Cloud** | Streaming, no local processing | Latency testing, network resilience |
| **VR/AR** | Immersive, motion controls | Comfort testing, motion sickness, tracking |

---

## 1.5 Player-Centric Testing

### Player Experience Attributes

| Attribute | What to Test |
|-----------|------------|
| **Fun** | Is the game engaging and enjoyable? |
| **Fairness** | Are rules applied consistently? |
| **Clarity** | Do players understand goals and controls? |
| **Feedback** | Do players know the result of their actions? |
| **Flow** | Is difficulty progression smooth? |

### Playtesting vs QA Testing

| Aspect | Playtesting | QA Testing |
|--------|-------------|------------|
| **Goal** | Gather player feedback, validate fun | Find bugs, verify requirements |
| **Participants** | Target audience, external players | Internal QA team |
| **Method** | Observation, surveys, interviews | Structured test cases, bug reports |
| **Timing** | Throughout development | Per build, per milestone |

---

## 1.6 Game-Specific Quality Attributes

| Attribute | Description | Example Test |
|-----------|-------------|-------------|
| **Gameplay** | Mechanics, balance, progression | Verify level-up system works correctly |
| **Visuals** | Graphics, animations, effects | Check texture pop-in, particle effects |
| **Audio** | Music, SFX, voice | Verify 3D audio positioning |
| **Performance** | Frame rate, loading times | Maintain 60 FPS during combat |
| **Stability** | Crashes, hangs, memory leaks | Play for 4 hours without crash |
| **Usability** | Controls, menus, tutorials | New player completes tutorial |
| **Compatibility** | Works on target hardware | Runs on minimum spec PC |
| **Compliance** | Meets platform requirements | Achievements unlock correctly |

---

## Worked Examples

### Worked Example 1: Genre-Specific Testing

**Scenario:** Test an RPG inventory system.

| Test | Focus |
|------|-------|
| Add item | Inventory updates, weight/space check |
| Remove item | Inventory updates, slot freed |
| Stack items | Correct max stack size enforced |
| Drop item | Item appears in world, removed from inventory |
| Trade item | Both inventories update atomically |
| Save/load | Inventory persists correctly |
| Overflow | Behavior when inventory full |

### Worked Example 2: Platform Testing

**Scenario:** Test a mobile puzzle game.

| Platform Aspect | Test |
|----------------|------|
| Touch controls | Tap, drag, multi-touch |
| Orientation | Portrait, landscape, rotation mid-game |
| Interruptions | Phone call, notification, low battery |
| Performance | Heat, battery drain after 30 min |
| Resolution | Different screen sizes and DPI |
| OS version | Minimum and latest supported |

### Worked Example 3: Player Experience

**Scenario:** Evaluate tutorial effectiveness.

| Metric | Measurement |
|--------|-------------|
| Completion rate | % of new players who finish tutorial |
| Time to complete | Average duration |
| Drop-off point | Where players quit |
| Help requests | How many players need assistance |
| Post-tutorial success | Can players perform basic actions? |
