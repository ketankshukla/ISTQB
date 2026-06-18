# ♟️ CTFL-MBT Exam Strategy

## 🎓 Exam Format

| Parameter | Value |
|-----------|-------|
| Total questions | 40 |
| Duration | 60 minutes |
| Pass mark | 65% (26 points) |
| Format | Closed book, single best answer |
| Negative marking | No |

---

## ⭐ Chapter Weighting

| Chapter | Focus | Weight | Questions |
|---------|-------|--------|---------|
| 1 — Introduction to MBT | Benefits, terminology, process overview | ~20% | ~8 |
| 2 — MBT Modeling | State machines, decision tables, models from requirements | ~25% | ~10 |
| 3 — Selection Criteria | Coverage criteria, transition coverage, path coverage | ~25% | ~10 |
| 4 — Execution and Analysis | Test execution, defect detection, coverage measurement | ~15% | ~6 |
| 5 — Tools and Automation | Tool categories, selection, automation integration | ~15% | ~6 |

**Key insight:** Chapters 2 and 3 together are ~50% of the exam. Master modeling concepts and coverage criteria.

---

## 🪜 K-Level Patterns

### 🔷 K2 (Understand)
- Pattern: "Which statement BEST describes...?" or "What is the MAIN benefit of...?"
- Strategy: Focus on distinctions and relationships between concepts

### 🔷 K3 (Apply)
- Pattern: Given a model or specification, determine coverage or generate tests
- Strategy: Practice calculating coverage percentages and identifying test cases from models

---

## ⭐ Time Budgeting

- **Available:** 60 minutes / 40 questions = 90 seconds per question
- **K2 questions:** 60-75 seconds each
- **K3 model-based questions:** 2 minutes each (may require analyzing a diagram)
- **Always answer every question** — no penalty for guessing

---

## 🎓 Chapter Tactics

**Chapter 1 — Introduction to MBT**
- Know the benefits: systematic coverage, early defect detection, maintainability
- Understand the MBT process: model creation → selection criteria → test generation → execution → analysis
- Know when MBT is appropriate vs. not cost-effective

**Chapter 2 — MBT Modeling**
- State machines: states, transitions, events, guards, actions
- Decision tables: conditions, actions, rules
- How to derive models from requirements
- Common modeling notations (UML state diagrams, decision tables)

**Chapter 3 — Selection Criteria**
- State transition coverage: 0-switch, 1-switch, 2-switch
- Transition pair coverage, full state coverage
- Boundary testing on models
- Know how to calculate coverage percentages

**Chapter 4 — Execution and Analysis**
- Mapping generated tests to executable tests
- Handling unreachable states or infeasible paths
- Coverage measurement and reporting
- Defect classification from MBT perspective

**Chapter 5 — Tools and Automation**
- Tool categories: model editors, test generators, execution frameworks
- Tool selection criteria
- Integration with CI/CD and test management tools

---

## ⭐ Common Distractors

1. **MBT replaces all other testing:** MBT is a supplement, not a replacement for other techniques
2. **Models must be formal and mathematical:** Models can be informal (state diagrams, tables)
3. **MBT is only for large projects:** MBT can be applied to projects of any size where appropriate
4. **100% coverage is always achievable:** Unreachable states and infeasible paths may prevent 100% coverage
5. **Any model is better than no model:** A bad model can generate bad tests; model quality matters

---

## 📋 Day-Before Checklist

- [ ] Review all `exam_traps.md` files
- [ ] Skim `GLOSSARY.md`
- [ ] Review model types and coverage criteria
- [ ] Confirm exam time, location, and ID
- [ ] Get adequate rest
