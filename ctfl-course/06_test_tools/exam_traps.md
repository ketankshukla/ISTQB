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
# 🪤 Chapter 6 — Exam Traps

---

## 🪤 Trap 1: Automation Does NOT Replace Manual Testing

The exam will NEVER accept an answer that says automation replaces all manual testing. Automation complements manual testing; each has its place:

- Automation: repetitive regression, large volumes, CI feedback
- Manual: exploratory testing, usability evaluation, edge-case investigation, test activities requiring human creativity and judgment

**Trap:** "Test automation eliminates the need for manual testing" is ALWAYS wrong.

---

## 🪤 Trap 2: Automation Does NOT Find Defects By Itself

Automated tests only detect failures when:
1. The test was designed to check the correct condition
2. The oracle (expected result) is correct
3. The test is executed

A passing automated test does NOT prove quality — it only proves that the specific checks coded into the test did not detect a deviation.

**Trap:** "Automated tests guarantee the software is defect-free" is wrong.

---

## 🪤 Trap 3: Benefits vs Risks — Know Both Sides

The exam may ask for benefits OR risks. Be ready to identify which is which:

**Benefits:** faster execution, consistency, repeatability, regression coverage, fast feedback in CI, 24/7 execution, handling large data volumes.

**Risks:** high initial cost, maintenance burden, fragile/flaky tests, requires specialized skills, false confidence, wrong tool selection.

**Trap:** "Reduced execution time" is a BENEFIT. "High initial investment in framework and scripts" is a RISK. The exam may mix these in a list and ask you to separate them.

---

## 🪤 Trap 4: Tool Categories — Match Tool to Activity

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

## 🪤 Trap 5: Not All Tests Are Worth Automating

Automation is NOT appropriate for:
- Tests run only once (the automation effort exceeds the benefit)
- Tests requiring frequent changes (maintenance cost too high)
- Tests requiring human judgment (usability, look-and-feel)
- Tests in early exploration phase (the system and tests are still unstable)

**Trap:** "All tests should be automated" is always wrong. The decision depends on frequency, stability, ROI, and nature of the test.

---

## ❓ Trap 6: CI/CD Is a DevOps Practice, Not Just a Tool

The exam connects CI/CD to both Chapter 2 (DevOps) and Chapter 6 (tools). Know that:
- CI/CD is an APPROACH (continuous integration, continuous delivery)
- Tools support that approach (Jenkins, GitHub Actions, GitLab CI, etc.)
- The approach requires both the tool AND the practices (automated tests, frequent commits, fast builds)

**Trap:** Having a CI tool installed does NOT mean you are doing CI. You must also have automated tests running on every commit and teams integrating frequently.

---

## 🪤 Trap 7: Static Analysis Finds Issues Without Execution

Static analysis tools:
- Examine code without running it
- Find coding standard violations, potential null pointers, unreachable code, complexity issues
- Are a form of STATIC testing (Chapter 3)
- Provide automated checks that complement manual reviews

**Trap:** Static analysis is NOT dynamic testing. It does not execute the code.

---

## 🪤 Trap 8: Flaky Tests Erode Confidence

A "flaky" test passes sometimes and fails sometimes without any code change. This is a known risk of automation:
- Developers start ignoring test results ("it's probably just flaky")
- Real failures get lost in the noise
- Investigation effort is wasted on false alarms

**Trap:** If a question asks about a risk of test automation, "flaky/unstable tests that produce inconsistent results" is a valid risk.
