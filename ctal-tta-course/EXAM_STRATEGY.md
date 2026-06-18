# ♟️ CTAL-TTA Exam Strategy

## 🎓 Exam Format

- **45 multiple-choice questions** in 120 minutes
- **65% pass mark** (29 correct answers)
- **Closed book** — no notes or materials allowed
- Many questions present code snippets, control flow graphs, or test scenarios

---

## 🔢 Chapter Weighting (Estimated)

| Chapter | Topic | Estimated Weight | Questions |
|---------|-------|-----------------|-----------|
| 1 | Risk-Based Testing (Technical) | 10% | ~4-5 |
| 2 | White-Box Test Techniques | 25% | ~11-12 |
| 3 | Static Analysis | 15% | ~7 |
| 4 | Dynamic Analysis | 10% | ~4-5 |
| 5 | Test Tools and Automation | 15% | ~7 |
| 6 | Non-Functional Testing | 25% | ~11-12 |

**Chapters 2 (White-Box) and 6 (Non-Functional) carry the most weight.**

---

## ❓ K-Level Question Patterns

| K-Level | What It Tests | Question Style | Example |
|---------|--------------|----------------|---------|
| **K2 (Understand)** | Explain concepts, compare approaches | "Which statement is TRUE..." | "Which statement about statement coverage is TRUE?" |
| **K3 (Apply)** | Apply techniques to scenarios | Scenario with code/graph | "Given this control flow graph, what is the statement coverage of these test cases?" |
| **K4 (Analyze)** | Analyze code and evaluate coverage | Complex scenario | "Analyze the code and identify the minimum test cases needed for branch coverage." |

**Pattern on this exam:**
- K2: ~15 questions
- K3: ~20 questions
- K4: ~10 questions

---

## ⭐ Time Budgeting

| Section | Time | Action |
|---------|------|--------|
| Questions 1-15 | ~30 min | K2 concept questions |
| Questions 16-30 | ~40 min | K3 scenario questions (white-box, coverage) |
| Questions 31-45 | ~35 min | K4 analysis questions (code, metrics, non-functional) |
| Review | ~15 min | Check flagged questions |

**Pace target:** ~2.5 minutes per question. White-box coverage questions may take 3-4 minutes.

---

## 🎓 Chapter-Specific Tactics

### ⚠️ Chapter 1 — Risk-Based Testing

- **K2 trap:** Technical risks (code complexity, technology) vs. business risks
- **K3 trap:** Selecting appropriate technical test techniques based on risk
- **Tactic:** Focus on which white-box technique addresses which type of risk

### 🎯 Chapter 2 — White-Box Test Techniques

- **K3 trap:** Calculating statement, branch, and MC/DC coverage
- **K4 trap:** Drawing control flow graphs and determining minimum test cases
- **Tactic:** Practice drawing CFGs and calculating coverage for simple code. This is the most technical chapter.

### 🔍 Chapter 3 — Static Analysis

- **K2 trap:** Cyclomatic complexity calculation and interpretation
- **K3 trap:** Interpreting static analysis tool output
- **Tactic:** Know the formula for cyclomatic complexity and what different values mean

### 🔬 Chapter 4 — Dynamic Analysis

- **K2 trap:** Memory leaks vs. memory corruption vs. buffer overflow
- **K3 trap:** Selecting appropriate dynamic analysis technique for a problem
- **Tactic:** Match the symptom (crash, slowdown, memory growth) to the technique

### 🛠️ Chapter 5 — Test Tools and Automation

- **K2 trap:** Tool categories and their purposes
- **K3 trap:** Selecting the right tool for a technical testing need
- **Tactic:** Know which tools support white-box testing, static analysis, dynamic analysis, and non-functional testing

### 🔷 Chapter 6 — Non-Functional Testing

- **K2 trap:** Performance vs. load vs. stress vs. scalability testing
- **K3 trap:** Security testing techniques (SAST, DAST, penetration testing)
- **K4 trap:** Designing performance or security test scenarios
- **Tactic:** Know the difference between each non-functional test type and when to use each

---

## ⭐ Common Distractor Patterns

1. **Confusing statement and branch coverage** — Statement coverage = every statement executed at least once. Branch coverage = every decision outcome (true/false) executed at least once.
2. **Confusing cyclomatic complexity with lines of code** — Complexity is about decision points, not code length.
3. **Thinking 100% statement coverage means no defects** — Coverage measures what was executed, not correctness.
4. **Confusing static and dynamic analysis** — Static = no execution. Dynamic = execution required.
5. **Confusing SAST and DAST** — SAST analyzes source code. DAST analyzes running application.
6. **Thinking performance testing is just load testing** — Performance = speed. Load = many users. Stress = beyond capacity. Scalability = growth capability.

---

## 📋 Day-Before Checklist

- [ ] Review all `exam_traps.md` files (45 min)
- [ ] Skim `GLOSSARY.md` (15 min)
- [ ] Re-read `EXAM_STRATEGY.md` (10 min)
- [ ] No new content — only review
- [ ] Get adequate sleep
- [ ] Arrive early with required ID and CTFL certificate proof

---

## 🎓 During the Exam

1. **Read the code/graph first** — For white-box questions, examine the code or graph before reading the question
2. **Calculate coverage step-by-step** — Write out the paths; don't try to do it mentally
3. **For tool selection questions:** — Match the problem (memory leak, slow response, code vulnerability) to the tool category
4. **For non-functional questions:** — Identify the specific quality characteristic being tested
5. **Flag uncertain questions** — Mark them and come back later
6. **Trust your first instinct** — Unless you find clear evidence of error
