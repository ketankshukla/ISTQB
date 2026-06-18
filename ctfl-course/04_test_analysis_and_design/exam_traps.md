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
# 🪤 Chapter 4 — Exam Traps

---

## 🪤 Trap 1: Counting EP Partitions — Do Not Forget Invalid Partitions

The exam often asks "What is the minimum number of test cases to achieve full EP coverage?"

**Rule:** Count ALL partitions — valid AND invalid. The minimum = number of partitions (assuming one invalid per test case).

**Common mistake:** Only counting valid partitions and forgetting invalid ones (below range, above range, wrong type).

**Example:** Field accepts 1-99.
- P1: < 1 (invalid)
- P2: 1-99 (valid)
- P3: > 99 (invalid)
- Minimum: 3 (not 1!)

If the question specifies additional invalid types (e.g., non-numeric), add those partitions too.

---

## 🪤 Trap 2: Two-Value vs Three-Value BVA

CTFL v4.0 defaults to **two-value BVA**:
- Test the boundary AND its nearest neighbor outside the partition
- For range [1, 10]: test values are 0, 1, 10, 11 (4 values total)

Three-value BVA tests boundary, neighbor inside, AND neighbor outside:
- For range [1, 10]: test values are 0, 1, 2, 9, 10, 11 (6 values total)

**Trap:** If the question does not specify, assume two-value BVA. If it says "three-value" or "three-point," use the expanded set.

---

## 🪤 Trap 3: BVA Requires EP First

BVA is NOT an independent technique — it EXTENDS equivalence partitioning. You must:
1. First identify equivalence partitions
2. Then identify boundaries BETWEEN partitions
3. Then select boundary values

**Trap:** A question may ask "Which technique is BVA typically used together with?" Answer: EP.

---

## 🪤 Trap 4: Decision Table — Maximum Rules vs Actual Rules

- Maximum possible rules = 2^n (where n = number of binary conditions)
- Actual required rules may be LESS if "don't care" conditions allow collapsing
- Minimum test cases = number of rules in the FINAL (possibly collapsed) table

**Trap:** The exam gives you 3 conditions and asks "maximum possible rules?" Answer: 2^3 = 8. But if it asks "minimum test cases after collapsing?" you must identify which conditions are irrelevant to certain outcomes.

---

## 🪤 Trap 5: State Transition — Transitions vs States

- **0-switch coverage** = cover all valid TRANSITIONS (not states)
- The minimum test cases for 0-switch = minimum paths needed to traverse all transitions

**Trap:** The exam asks "How many test cases for 0-switch coverage?" Count TRANSITIONS (arrows), not states (circles). Then find minimum paths covering all arrows.

**Common mistake:** Confusing "cover all states" (which requires fewer tests) with "cover all transitions" (which usually requires more).

---

## 📊 Trap 6: Statement Coverage vs Branch Coverage

| | Statement Coverage | Branch Coverage |
|---|---|---|
| Measures | % of executable statements exercised | % of decision outcomes exercised |
| 100% branch -> 100% statement? | Yes (guaranteed) | N/A |
| 100% statement -> 100% branch? | NO (not guaranteed) | N/A |

**Trap:** "Achieving 100% statement coverage guarantees 100% branch coverage" — this is FALSE. The reverse is true: 100% branch guarantees 100% statement.

**Why?** Consider: `if (x > 0) { doSomething(); }` — If you test only x=5, you execute the statement inside (100% statement coverage of that block), but you never test the FALSE branch (x <= 0).

---

## 🪤 Trap 7: Counting Branches

Each decision point creates branches:
- Simple `if` (no else): 2 branches (true path + implicit false path that skips the body)
- `if-else`: 2 branches
- `if-elif-else`: count the number of terminal paths
- `switch` with N cases: N branches (including default)
- Loop: 2 branches (enter body, skip/exit body)

**Trap:** Do NOT forget the implicit "else" (fall-through) branch when there is no explicit `else` block.

---

## 🪤 Trap 8: Experience-Based vs Systematic Techniques

- Experience-based techniques (error guessing, exploratory, checklist) **complement** systematic techniques — they do NOT replace them
- The exam will never accept "use only exploratory testing" as a best answer when systematic coverage is needed
- However, systematic techniques alone may miss defects that experience-based techniques find

**Trap:** Any answer suggesting experience-based techniques are sufficient on their own is wrong. Any answer suggesting they are unnecessary is also wrong.

---

## 🪤 Trap 9: Exploratory Testing Is NOT Ad Hoc

Key ISTQB distinction:
- **Exploratory testing** = structured by test charters and time-boxes; results are documented
- **Ad hoc testing** = truly unstructured with no guidance or documentation

**Trap:** A question describing chartered, time-boxed testing sessions with documented results is EXPLORATORY (not ad hoc).

---

## 🪤 Trap 10: ATDD — Tests Are Written BEFORE Development

The defining feature of ATDD:
- Acceptance tests are created BEFORE the code is written
- They serve as executable specifications
- They drive development (similar to how TDD drives unit code)

**Trap:** If tests are written AFTER development, it is NOT ATDD — it is just acceptance testing.

---

## 🪤 Trap 11: Acceptance Criteria Formats

Two formats are recognized:
- **Rule-oriented:** Bullet-point conditions (declarative)
- **Scenario-oriented:** Given/When/Then (Gherkin)

**Trap:** Both are valid. The exam will not say one is better than the other. But Given/When/Then is the format associated with BDD and ATDD automation tools.

---

## 🪤 Trap 12: EP Partition Independence

When testing multiple invalid partitions, **test only ONE invalid partition per test case** while keeping all other inputs valid.

**Why?** If you combine two invalid inputs in one test, you cannot tell which caused the rejection. You might mask a defect.

**Trap:** A question asks "How should invalid partitions be tested?" Answer: One invalid partition per test case, with all other inputs being valid values.

---

## 🪤 Trap 13: Decision Table — "Don't Care" Is Not "False"

In a decision table:
- "T" means the condition must be TRUE for this rule
- "F" means the condition must be FALSE for this rule
- "-" (don't care) means the condition can be either TRUE or FALSE — it does not affect the outcome

**Trap:** "-" does NOT mean "not applicable" or "false." It means the outcome is the same regardless of this condition's value, allowing rule collapsing.

---

## 🪤 Trap 14: Invalid Transitions in State Testing

State transition testing should include tests for INVALID transitions:
- Attempting events that should NOT be possible in the current state
- Verifying the system rejects them gracefully (stays in current state, shows error)

**Trap:** A question about "negative testing with state transition diagrams" refers to testing invalid transitions. The state transition TABLE (not just the diagram) explicitly shows which state-event combinations are invalid.

---

## 📊 Trap 15: Coverage Metrics Are Percentages, Not Absolutes

When the exam asks "What is the statement coverage achieved?":
- Formula: (statements exercised / total executable statements) x 100%
- Comments, blank lines, and declarations are NOT executable statements
- The answer is always a percentage

**Trap:** Make sure you count only EXECUTABLE statements in both numerator and denominator. Do not count declaration-only lines or brace-only lines.
