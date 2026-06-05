# CTAL-AT Exam Strategy

## Exam Format

- **40 multiple-choice questions** in 90 minutes
- **65% pass mark** (26 correct answers)
- **Closed book** — no notes or materials allowed
- Many questions present agile scenarios and ask for the best technical testing approach

---

## Chapter Weighting (Estimated)

| Chapter | Topic | Estimated Weight | Questions |
|---------|-------|-----------------|-----------|
| 1 | Agile Principles and Context | 15% | ~6 |
| 2 | TDD, BDD, ATDD | 25% | ~10 |
| 3 | Test Automation in Agile | 20% | ~8 |
| 4 | CI/CD and DevOps | 20% | ~8 |
| 5 | Testing Techniques in Agile | 20% | ~8 |

**Chapters 2 (TDD/BDD/ATDD) and 3-4 (Automation/CI-CD) carry the most weight.**

---

## K-Level Question Patterns

| K-Level | What It Tests | Question Style | Example |
|---------|--------------|----------------|---------|
| **K2 (Understand)** | Explain concepts, compare approaches | "Which statement is TRUE..." | "Which statement about TDD is TRUE?" |
| **K3 (Apply)** | Apply techniques to scenarios | Scenario with context | "Given this sprint context, which automation approach is MOST appropriate?" |
| **K4 (Analyze)** | Analyze situations, evaluate options | Complex scenario | "Analyze the team's CI pipeline and identify the most significant weakness." |

**Pattern on this exam:**
- K2: ~15 questions
- K3: ~20 questions
- K4: ~5 questions

---

## Time Budgeting

| Section | Time | Action |
|---------|------|--------|
| Questions 1-15 | ~30 min | K2 concept questions |
| Questions 16-30 | ~35 min | K3 scenario questions |
| Questions 31-40 | ~20 min | K4 analysis questions |
| Review | ~5 min | Check flagged questions |

**Pace target:** ~2.25 minutes per question.

---

## Chapter-Specific Tactics

### Chapter 1 — Agile Principles and Context

- **K2 trap:** Know the difference between Scrum, Kanban, and XP roles for testers
- **K3 trap:** Identifying when a team is not truly agile (lack of collaboration, no automation)
- **Tactic:** Focus on the technical tester's role in agile ceremonies and practices

### Chapter 2 — TDD, BDD, ATDD

- **K3 trap:** Know the TDD cycle (Red-Green-Refactor) and when to apply it
- **K3 trap:** Distinguishing BDD (behavior) from TDD (unit) from ATDD (acceptance)
- **K4 trap:** Given a scenario, identify the most appropriate practice (TDD vs BDD vs ATDD)
- **Tactic:** Practice explaining the Red-Green-Refactor cycle

### Chapter 3 — Test Automation in Agile

- **K3 trap:** Pyramid vs. ice cream cone anti-pattern
- **K3 trap:** Selecting appropriate automation approach for different test levels
- **Tactic:** Know the test pyramid and the ice cream cone anti-pattern

### Chapter 4 — CI/CD and DevOps

- **K3 trap:** Distinguishing CI from CD (delivery vs. deployment)
- **K3 trap:** Pipeline design — what goes where in the pipeline
- **Tactic:** Draw the pipeline mentally: build → unit test → integration → deploy → e2e test

### Chapter 5 — Testing Techniques in Agile

- **K3 trap:** Exploratory testing charters and session-based testing
- **K3 trap:** Pairwise/combinatorial testing in agile
- **Tactic:** Know when exploratory testing is more appropriate than scripted testing

---

## Common Distractor Patterns

1. **Confusing TDD with BDD** — TDD = developer-focused unit tests. BDD = business-readable behavior scenarios.
2. **Confusing CI with CD** — CI = integrate code frequently. CD = deploy automatically after tests pass.
3. **Thinking automation replaces all manual testing** — Exploratory testing is still essential in agile.
4. **Confusing the test pyramid with the ice cream cone** — Pyramid = many unit, fewer integration, few e2e. Ice cream cone = too many e2e tests.
5. **Thinking agile means no documentation** — Agile values working software over docs, but some documentation (test cases, acceptance criteria) is still needed.
6. **Confusing Scrum and Kanban** — Scrum = sprints, ceremonies, roles. Kanban = continuous flow, WIP limits, no prescribed ceremonies.

---

## Day-Before Checklist

- [ ] Review all `exam_traps.md` files (45 min)
- [ ] Skim `GLOSSARY.md` for forgotten terms (15 min)
- [ ] Re-read `EXAM_STRATEGY.md` (10 min)
- [ ] No new content — only review
- [ ] Get adequate sleep
- [ ] Arrive early with required ID and CTFL certificate proof

---

## During the Exam

1. **Read the scenario first** — For scenario questions, understand the context before the question
2. **Identify the question type** — K2 (fact), K3 (apply), K4 (analyze)
3. **Eliminate obviously wrong answers first** — Often 1-2 distractors are clearly incorrect
4. **For TDD/BDD questions:** — Identify who writes the test and what level it targets
5. **For CI/CD questions:** — Trace the pipeline steps mentally
6. **Flag uncertain questions** — Mark them and come back later
7. **Trust your first instinct** — Unless you find clear evidence of error
