# 📂 Case Study 3 — Distributed Agile Testing

## ⭐ Context

You are the Test Lead for GlobalBank, with teams in London, Mumbai, and New York building a trading platform.

**Challenges:**
- 8-hour time zone differences
- Teams have different agile maturity
- Integration testing difficult due to schedule conflicts
- Cultural differences in communication and decision-making

**Goal:** Effective quality practices across distributed teams.

---

## ⭐ Task 1: Communication Architecture

**Question:** Design communication for distributed quality.

**Model Answer:**

**Overlap Hours:**
- London-Mumbai: 9:30-11:30 AM London / 2:00-4:00 PM Mumbai
- Mumbai-New York: 7:00-9:00 AM New York / 5:30-7:30 PM Mumbai

**Synchronous (Overlap Hours):**
| Meeting | Participants | Purpose |
|---------|-------------|---------|
| Daily sync | Leads from each location | Blockers, dependencies |
| Sprint planning | All teams (rotating time) | Commitments |
| System demo | All teams (recorded) | Integrated validation |

**Asynchronous:**
- Detailed test plans in shared wiki
- Test results in shared dashboard
- Code review via pull requests with 24-hour SLA
- Retrospective board (Miro/Mural) open for 48 hours

---

## 📐 Task 2: Test Ownership Model

**Question:** Define test ownership across locations.

**Model Answer:**

| Location | Primary Ownership | Collaboration |
|----------|-------------------|---------------|
| London | Risk engine, compliance | Reviews from Mumbai |
| Mumbai | UI, API, integration | Reviews from London |
| New York | Market data, reporting | Reviews from both |

**Shared Responsibilities:**
- Integration tests: Rotating lead per sprint
- Regression suite: Distributed execution across time zones
- Environment management: Follow-the-sun support

---

## ⭐ Task 3: Cultural Adaptation

**Question:** Address cultural differences in quality practices.

**Model Answer:**

| Difference | Challenge | Adaptation |
|------------|-----------|------------|
| **Hierarchy** | Junior testers hesitant to raise issues | Anonymous feedback channels; leader models vulnerability |
| **Directness** | London direct feedback perceived as harsh by Mumbai | Establish feedback norms; written before verbal |
| **Decision-making** | Different expectations for authority | Clarify RACI for test decisions; document in wiki |
| **Work hours** | Mumbai works late to overlap with NY | Rotate late shifts; compensate with flexible hours |

---

## 📊 Task 4: Quality Metrics at Scale

**Question:** Track quality across distributed teams.

**Model Answer:**

**Unified Dashboard:**
| Metric | London | Mumbai | New York | Overall |
|--------|--------|----------|----------|---------|
| Sprint test pass rate | 96% | 94% | 97% | 95.7% |
| Defects found/sprint | 12 | 15 | 10 | 37 |
| Automation coverage | 70% | 55% | 75% | 66% |
| CI build success | 92% | 88% | 94% | 91% |

**Actions:**
- Mumbai automation coverage: Assign coach from New York
- CI build stability: System Team investigates common failures
- Monthly cross-location quality review
