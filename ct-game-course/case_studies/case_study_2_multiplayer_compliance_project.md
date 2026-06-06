# Case Study 2 — Multiplayer Compliance Project

## Context

You are the Compliance Lead for a competitive multiplayer shooter.

**Game:** 5v5 team shooter with ranked mode
**Platforms:** PlayStation, Xbox, PC (cross-play)
**Rating Target:** ESRB T / PEGI 16
**Online:** Required for all modes

---

## Task 1: Multiplayer Test Architecture

**Question:** Design multiplayer testing architecture.

**Model Answer:**

**Server Types:**
| Type | Purpose | Tests |
|------|---------|-------|
| **Dedicated** | Ranked matches | Stability, anti-cheat, matchmaking |
| **Listen** | Custom games | Host migration, NAT traversal |
| **Relay** | Fallback | Latency tolerance, connection recovery |

**Network Tests:**
| Condition | Simulation | Expected |
|-----------|-----------|----------|
| 100ms latency | Network emulator | Fair hit detection |
| 10% packet loss | Packet drop | Smooth interpolation |
| Host quit | Kill host process | Migrate to new host |
| Client disconnect | Pull network cable | Graceful dropout, no crash |

---

## Task 2: Cross-Play Compliance

**Question:** Test cross-play functionality.

**Model Answer:**

| Feature | PS | Xbox | PC | Cross-Play Test |
|---------|-----|------|-----|-----------------|
| Matchmaking | Yes | Yes | Yes | Mixed platform lobby |
| Voice chat | Yes | Yes | Yes | All platforms hear each other |
| Friends/party | Yes | Yes | Yes | Invite across platforms |
| Progression | Yes | Yes | Yes | Shared account progress |
| Input | Controller | Controller | KB/M | Balanced matchmaking by input |

**Cert Requirements:**
- PS: Account linking, trophy sync
- Xbox: Gamerscore, presence
- PC: No platform-specific requirements

---

## Task 3: Anti-Cheat Testing

**Question:** Verify anti-cheat measures.

**Model Answer:**

| Cheat | Detection | Test |
|-------|-----------|------|
| **Aim bot** | Statistical analysis + report | Inject aim assist, verify kick/ban |
| **Speed hack** | Server-side movement validation | Modify client speed, verify server rejects |
| **Wall hack** | Server culls hidden enemies | Verify client only receives visible enemies |
| **Item duplication** | Server authoritative inventory | Attempt duplicate exploit, verify server blocks |
| **DDOS** | Rate limiting | Flood server, verify stability |

---

## Task 4: Submission Readiness

**Question:** Prepare submission checklist.

**Model Answer:**

| Platform | Requirement | Status |
|----------|-------------|--------|
| **PlayStation** | TRC pass | In progress |
| | Trophy implementation | Pass |
| | PSN integration | Pass |
| **Xbox** | XR pass | In progress |
| | Achievement sync | Pass |
| | Xbox Live sessions | Pass |
| **PC** | Steamworks (if applicable) | Pass |
| | EAC integration | Pass |

**Open risks:**
- Host migration fails in 2% of listen server games
- Action: Investigate and fix before submission
