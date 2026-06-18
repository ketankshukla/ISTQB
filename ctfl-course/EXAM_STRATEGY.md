<!-- ISTQB-BEAUTIFY-V1 -->
<style>
html, body {
  background-color: #000000 !important;
  color: #F5F5F5 !important;
}
body {
  font-size: 19px !important;
  line-height: 1.85 !important;
  font-family: 'Segoe UI', 'Trebuchet MS', Verdana, sans-serif !important;
  padding: 24px 44px !important;
  letter-spacing: 0.2px;
}
h1 { color: #FFD700 !important; font-size: 2.7em !important; font-weight: 800 !important; border-bottom: 3px solid #FF5252 !important; padding-bottom: 0.25em; }
h2 { color: #00E5FF !important; font-size: 2.05em !important; font-weight: 800 !important; border-bottom: 2px solid #00E5FF !important; padding-bottom: 0.2em; }
h3 { color: #69F0AE !important; font-size: 1.6em !important; font-weight: 700 !important; }
h4 { color: #FF80AB !important; font-size: 1.35em !important; font-weight: 700 !important; }
h5 { color: #FFAB40 !important; font-size: 1.2em !important; font-weight: 700 !important; }
h6 { color: #B388FF !important; font-size: 1.1em !important; font-weight: 700 !important; }
p, li, td, th, span, div { font-size: 1em !important; color: #F5F5F5 !important; }
strong, b { color: #FFEB3B !important; }
em, i { color: #FF8A65 !important; }
a { color: #40C4FF !important; text-decoration: underline; }
a:hover { color: #80D8FF !important; }
code { color: #FF4081 !important; background: transparent !important; font-size: 0.95em !important; }
pre { background: transparent !important; border: 1px solid #555 !important; border-radius: 8px; padding: 14px !important; }
pre code { color: #80CBC4 !important; }
blockquote { color: #B0BEC5 !important; border-left: 5px solid #FFD700 !important; background: transparent !important; padding-left: 18px; font-style: italic; }
table { border-collapse: collapse !important; background: transparent !important; }
th { color: #FFD700 !important; border: 2px solid #00E5FF !important; background: transparent !important; padding: 8px 12px !important; }
td { color: #F5F5F5 !important; border: 1px solid #607D8B !important; background: transparent !important; padding: 8px 12px !important; }
hr { border: none; border-top: 2px dashed #FF5252 !important; margin: 1.5em 0; }
ul li::marker { color: #69F0AE !important; font-size: 1.1em; }
ol li::marker { color: #00E5FF !important; font-weight: bold; }
</style>
# ♟️ CTFL v4.0 Exam Strategy

## 🎓 Exam Format at a Glance

| Parameter | Value |
|-----------|-------|
| Total questions | 40 |
| Duration | 60 minutes |
| Pass mark | 65% (26 correct) |
| Question types | Single best answer (majority); some "choose N of M" |
| Materials allowed | None (closed book) |
| Negative marking | No |

---

## ⭐ Chapter Weighting (approximate)

| Chapter | Questions | Percentage |
|---------|-----------|------------|
| 1 — Fundamentals of Testing | ~8 | 20% |
| 2 — Testing Throughout the SDLC | ~5 | 12.5% |
| 3 — Static Testing | ~5 | 12.5% |
| 4 — Test Analysis and Design | ~11-12 | 27.5-30% |
| 5 — Managing the Test Activities | ~8-9 | 20-22.5% |
| 6 — Test Tools | ~2 | 5% |

**Key insight:** Chapters 4 and 5 together account for roughly half the exam. Master these and you have a strong floor.

---

## ❓ K-Level Question Patterns

### 🔷 K1 (Remember)

- Tests recall of facts, definitions, and lists
- Pattern: "Which of the following is a testing principle?" or "What is the definition of X?"
- Strategy: Pure memorization. Use mnemonics and flashcards.

### 🔷 K2 (Understand)

- Tests comprehension and the ability to explain, classify, compare, or give examples
- Pattern: "Which statement BEST describes..." or "What is the MAIN difference between X and Y?"
- Strategy: Focus on distinctions (e.g., walkthrough vs inspection, verification vs validation). Know why things matter, not just what they are.

### 🔷 K3 (Apply)

- Tests the ability to use a technique or procedure in a given scenario
- Pattern: Provides a specification/requirement and asks you to derive test cases, count partitions, calculate coverage, identify risks, etc.
- Strategy: Practice the mechanics until automatic. These questions cannot be answered by elimination alone — you must be able to perform the technique.

---

## ⭐ Time Budgeting

- **Available:** 60 minutes for 40 questions = 90 seconds per question
- **K1/K2 questions:** Aim for 45-60 seconds each. These are read-and-recognize.
- **K3 questions:** Budget 2-3 minutes each. You may need to count partitions, draw a quick table, or trace code paths.
- **"Choose N" questions:** Budget 2 minutes. You must evaluate every option.
- **Bank time early.** Rush through easy K1 questions to accumulate buffer for K3 technique questions in Chapter 4.

### 🔷 Recommended Approach

1. First pass (0-40 min): Answer every question you can confidently answer. Mark uncertain ones.
2. Second pass (40-55 min): Return to marked questions. Eliminate distractors and commit.
3. Final check (55-60 min): Verify you have answered all 40. Do not change answers unless you find a clear error.

---

## ❓ How to Attack Technique Questions (K3)

### ➗ Equivalence Partitioning

- Count valid AND invalid partitions. ISTQB often asks "what is the MINIMUM number of test cases?"
- Minimum = one value from each partition (valid + invalid)
- Watch for: overlapping ranges, missing invalid partitions (below min, above max, wrong type)

### 📏 Boundary Value Analysis

- CTFL v4.0 uses **two-value BVA** (boundary value and its nearest neighbor outside the partition) unless stated otherwise
- Count boundaries: for a range [min, max], boundaries are min, min-1, max, max+1
- Watch for: off-by-one in counting; whether the question specifies two-value or three-value BVA

### 🗂️ Decision Table Testing

- Count conditions, identify rules (2^n maximum, then collapse where outcome is indifferent)
- Watch for: "don't care" conditions that reduce the table; the question asking for minimum test cases after collapsing

### 🔄 State Transition Testing

- Draw the diagram, identify valid and invalid transitions
- 0-switch coverage = cover every valid transition at least once
- Watch for: counting transitions vs states; invalid transitions in negative testing

### 📊 Statement and Branch Coverage

- Statement coverage: % of executable statements exercised
- Branch coverage: % of decision outcomes (true/false) exercised
- 100% branch coverage guarantees 100% statement coverage (but not vice versa)
- Watch for: unreachable code; short-circuit evaluation; confusing "number of test cases needed" with "coverage percentage achieved"

---

## 🎓 Distractor Elimination Tactics

1. **Absolute words are usually wrong.** "Always," "never," "guarantees," "eliminates all" — testing cannot guarantee absence of defects (Principle 7 in older versions; the concept remains in v4.0).
2. **Look for the ISTQB-official term.** If two options seem correct but one uses ISTQB glossary terminology exactly, prefer it.
3. **"Most appropriate" means BEST, not just valid.** Multiple options may be partially correct; pick the one that is most complete or most aligned with ISTQB definitions.
4. **Scope traps.** An answer might be true in general but not answer the specific question asked. Re-read the question stem.
5. **Negation traps.** Questions with "NOT" or "LEAST" — read carefully, underline the negative word.

---

## ❓ Handling "Choose N" Questions

- These typically say "Choose TWO" or "Choose THREE"
- You must get ALL correct selections to earn the point (no partial credit)
- Strategy: Evaluate each option independently as true/false, then select the N that are true
- If unsure between two options for the last slot, prefer the one using ISTQB-standard language

---

## 🎓 Pre-Exam Checklist (Day Before)

- [ ] Review all 7 testing principles — can you name and explain each?
- [ ] Review the 4 review types and their key differences
- [ ] Verify you can perform EP, BVA, decision table, and state-transition from a requirement
- [ ] Verify you can calculate statement and branch coverage from a code snippet
- [ ] Review the risk matrix approach (likelihood x impact)
- [ ] Review defect report mandatory fields
- [ ] Read through GLOSSARY.md one final time
- [ ] Confirm exam logistics (time, location/online setup, ID requirements)
- [ ] Get a good night of sleep

---

## 🎓 Common Exam Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| Running out of time on K3 questions | Do K1/K2 questions first and fast |
| Confusing error/defect/failure | Error = human mistake; Defect = bug in work product; Failure = observable incorrect behavior at runtime |
| Mixing up verification and validation | Verification = building the product right (does it meet spec?); Validation = building the right product (does it meet user needs?) |
| Forgetting invalid partitions in EP | Always include partitions for values outside valid ranges and wrong data types |
| Confusing test levels with test types | Levels = when/where (component, integration, system, acceptance); Types = what (functional, non-functional, structural, change-related) |
| Overthinking simple K1 recall questions | If you know the definition, pick it and move on. Do not second-guess. |
