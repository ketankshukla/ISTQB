# 📘 Chapter 2 — Game Development Lifecycle: Lessons

---

## ⭐ 2.1 Development Phases

### 🔷 Pre-Production

| Activity | Testing Role |
|----------|-------------|
| Concept and prototype | Evaluate prototype feasibility |
| Design document | Review for testability |
| Technical planning | Plan test architecture, tools |

### 🔷 Production

| Activity | Testing Role |
|----------|-------------|
| Core gameplay implementation | Core mechanics testing |
| Content creation (levels, art) | Content verification |
| Feature development | Feature testing |
| Integration | System integration testing |

### 🔷 Post-Production

| Activity | Testing Role |
|----------|-------------|
| Polish and optimization | Performance, usability testing |
| Certification | Compliance testing |
| Day-one patch | Final regression testing |

---

## ⭐ 2.2 Milestones

### 🔷 Vertical Slice

- Polished demo representing final quality
- Used to secure funding or publisher approval
- Testing: Core mechanics, visual quality, performance target

### 🔷 First Playable / Alpha

- All core features implemented
- Playable from start to finish (with bugs)
- Testing: Full playthrough, major bug finding

### 🔷 Feature Complete / Beta

- All features implemented, content may be incomplete
- Focus on fixing bugs, not adding features
- Testing: Regression, balance, polish

### 🔷 Release Candidate / Gold

- Build that could be released
- Submitted to platform holder for certification
- Testing: Final verification, cert pass

### 🔷 Post-Launch

- Day-one patch
- Live updates, DLC
- Testing: Patch verification, live ops

---

## ⭐ 2.3 Testing Activities by Phase

| Phase | Testing Focus | Deliverable |
|-------|-------------|-------------|
| **Pre-production** | Prototype evaluation, risk analysis | Test plan, strategy |
| **Production start** | Core mechanics, build verification | BVT suite |
| **Mid-production** | Feature testing, integration | Feature test reports |
| **Late production** | Full playthrough, balance | Bug metrics, coverage |
| **Alpha** | End-to-end, major paths | Alpha test report |
| **Beta** | Regression, edge cases, polish | Beta test report |
| **Cert** | Compliance, platform requirements | Cert pass report |
| **Post-launch** | Patch testing, live ops | Patch verification |

---

## 🏃 2.4 Agile in Game Development

### 🔷 Scrum Adaptations

| Standard Scrum | Game Adaptation |
|---------------|-----------------|
| 2-week sprints | May use longer sprints for content |
| Potentially shippable increment | Vertical slice per milestone |
| Product owner | Game director / lead designer |
| Daily standup | Often includes playtest feedback |

### 🔷 Kanban for Live Ops

- Continuous flow of updates
- No fixed sprints
- Testing: Rapid patch verification, hotfix testing

### 🔷 Hybrid Approaches

- Pre-production: Agile (iterative prototype)
- Production: Milestone-driven
- Post-launch: Kanban (live service)

---

## 🗂️ 2.5 Build Management

### 🧪 Build Types

| Build | Purpose | Testing |
|-------|---------|---------|
| **Dev build** | Daily development | Smoke test, affected areas |
| **Test build** | QA testing | Full functional testing |
| **Staging build** | Internal release candidate | Regression, cert prep |
| **Release build** | Public release | Final verification |

### 🎮 Version Control for Games

| Challenge | Solution |
|-----------|----------|
| Large binary files (art, audio) | Perforce, Git LFS |
| Branch per feature | Feature branches with merge testing |
| Cross-discipline collaboration | Locking for non-mergeable assets |

---

## 🎮 2.6 Live Service Games

### 🔷 Characteristics

- Continuous updates (seasons, events)
- Player retention focus
- Monetization (battle pass, cosmetics)

### 🔷 Testing Implications

| Aspect | Testing |
|--------|---------|
| **New content** | Feature testing each update |
| **Balance changes** | Regression on existing content |
| **Economy** | Verify pricing, rewards, progression |
| **Events** | Time-limited content testing |
| **Server stability** | Load testing for concurrent players |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Milestone Test Planning

**Scenario:** Plan testing for an RPG reaching alpha.

| Activity | Tests |
|----------|-------|
| Core combat | All weapon types, enemy types, damage calculation |
| Quest system | Main quest chain, side quests, branching dialogue |
| Inventory | Add, remove, equip, drop, trade |
| Save/load | All locations, all states |
| Performance | Stable 30 FPS in all areas |

### 💡 Worked Example 2: Build Verification

**Scenario:** BVT for a new daily build.

| Check | Time | Pass Criteria |
|-------|------|---------------|
| Boot to title | < 30 sec | No crash |
| Start new game | < 10 sec | Tutorial loads |
| Complete tutorial | < 5 min | Achieves first objective |
| Save and load | < 5 sec | State preserved |
| Quit to title | < 5 sec | Clean exit |

### 💡 Worked Example 3: Live Service Patch

**Scenario:** Test a balance patch for a multiplayer shooter.

| Test | Verification |
|------|-------------|
| Weapon damage changes | Damage values match patch notes |
| Regression | Other weapons unaffected |
| Leaderboard | Stats recalculate correctly |
| Client update | Old clients rejected or updated |
| Server compatibility | New clients connect to updated servers |
