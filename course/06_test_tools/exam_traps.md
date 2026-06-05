# Chapter 6 — Exam Traps

---

## Trap 1: Automation Does NOT Replace Manual Testing

The exam will NEVER accept an answer that says automation replaces all manual testing. Automation complements manual testing; each has its place:

- Automation: repetitive regression, large volumes, CI feedback
- Manual: exploratory testing, usability evaluation, edge-case investigation, test activities requiring human creativity and judgment

**Trap:** "Test automation eliminates the need for manual testing" is ALWAYS wrong.

---

## Trap 2: Automation Does NOT Find Defects By Itself

Automated tests only detect failures when:
1. The test was designed to check the correct condition
2. The oracle (expected result) is correct
3. The test is executed

A passing automated test does NOT prove quality — it only proves that the specific checks coded into the test did not detect a deviation.

**Trap:** "Automated tests guarantee the software is defect-free" is wrong.

---

## Trap 3: Benefits vs Risks — Know Both Sides

The exam may ask for benefits OR risks. Be ready to identify which is which:

**Benefits:** faster execution, consistency, repeatability, regression coverage, fast feedback in CI, 24/7 execution, handling large data volumes.

**Risks:** high initial cost, maintenance burden, fragile/flaky tests, requires specialized skills, false confidence, wrong tool selection.

**Trap:** "Reduced execution time" is a BENEFIT. "High initial investment in framework and scripts" is a RISK. The exam may mix these in a list and ask you to separate them.

---

## Trap 4: Tool Categories — Match Tool to Activity

Know which tool category supports which test activity:

| Tool Category | Supports |
|---------------|----------|
| Test management | Planning, tracking, reporting |
| Static analysis | Static testing (Chapter 3) |
| Test design | Generating tests from models/requirements |
| Test execution | Running automated tests, CI triggers |
| Coverage | Measuring statement/branch coverage |
| Performance | Load testing, stress testing |
| Defect tracking | Defect lifecycle management |

**Trap:** A question may describe a specific testing activity and ask which tool category supports it. Match the description to the category.

---

## Trap 5: Not All Tests Are Worth Automating

Automation is NOT appropriate for:
- Tests run only once (the automation effort exceeds the benefit)
- Tests requiring frequent changes (maintenance cost too high)
- Tests requiring human judgment (usability, look-and-feel)
- Tests in early exploration phase (the system and tests are still unstable)

**Trap:** "All tests should be automated" is always wrong. The decision depends on frequency, stability, ROI, and nature of the test.

---

## Trap 6: CI/CD Is a DevOps Practice, Not Just a Tool

The exam connects CI/CD to both Chapter 2 (DevOps) and Chapter 6 (tools). Know that:
- CI/CD is an APPROACH (continuous integration, continuous delivery)
- Tools support that approach (Jenkins, GitHub Actions, GitLab CI, etc.)
- The approach requires both the tool AND the practices (automated tests, frequent commits, fast builds)

**Trap:** Having a CI tool installed does NOT mean you are doing CI. You must also have automated tests running on every commit and teams integrating frequently.

---

## Trap 7: Static Analysis Finds Issues Without Execution

Static analysis tools:
- Examine code without running it
- Find coding standard violations, potential null pointers, unreachable code, complexity issues
- Are a form of STATIC testing (Chapter 3)
- Provide automated checks that complement manual reviews

**Trap:** Static analysis is NOT dynamic testing. It does not execute the code.

---

## Trap 8: Flaky Tests Erode Confidence

A "flaky" test passes sometimes and fails sometimes without any code change. This is a known risk of automation:
- Developers start ignoring test results ("it's probably just flaky")
- Real failures get lost in the noise
- Investigation effort is wasted on false alarms

**Trap:** If a question asks about a risk of test automation, "flaky/unstable tests that produce inconsistent results" is a valid risk.
