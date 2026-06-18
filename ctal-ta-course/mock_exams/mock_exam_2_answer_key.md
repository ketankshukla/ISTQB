# 📝 Mock Exam 2 — Answer Key

| Q | Answer | Rationale |
|---|--------|-----------|
| 1 | B | Test analysis identifies what to test (test conditions). Test design defines how to test. |
| 2 | C | Valid: 1-100 (1 partition). Invalid: <1, >100, non-integer, empty = 4 invalid. Strong EP = 1 valid + 4 invalid = 5 minimum. |
| 3 | B | Rules with identical conditions and actions are redundant and can be merged. |
| 4 | B | 1-switch coverage requires every valid transition to be exercised at least once. There are 7 transitions. |
| 5 | A | Use case tests validate user interactions. Login with valid password is a user scenario. |
| 6 | B | The manager decides whether to review and allocates resources. The moderator leads the meeting. |
| 7 | B | Exchanging data with external systems is interoperability. |
| 8 | B | `<script>alert('xss')</script>` is a classic XSS payload testing for script injection. |
| 9 | B | Recoverability is the ability to restore after failure. Fault tolerance is operating during failure. |
| 10 | B | Stress testing exceeds expected load (150%) to find breaking points. |
| 11 | B | Keywords are implemented in code by automation engineers or developers. Manual testers use keywords to write tests. |
| 12 | B | SonarQube performs static analysis. JMeter is for load testing. Selenium is for UI automation. Postman is for API testing. |
| 13 | B | 2-value BVA: min-1, min, max, max+1 = -11, -10, 10, 11. |
| 14 | C | Minimum = main (1) + alternative (1) + exceptions (2) + precondition test (1) = 5. Or 4 if excluding precondition. |
| 15 | B | Defect detection rate measures effectiveness (defects found per unit of effort). |
| 16 | B | In walkthroughs, the author leads the session, presenting and explaining the document. |
| 17 | B | 3-value BVA: min-1, min, min+1, max-1, max, max+1 = 9, 10, 11, 29, 30, 31. |
| 18 | B | Page object model reduces maintenance by separating locators from test logic. |
| 19 | B | Running on different OS versions is portability. |
| 20 | B | Load testing validates at expected load. Stress testing exceeds expected load. |
| 21 | B | Correctness of calculations is accuracy. |
| 22 | A | Availability = MTBF / (MTBF + MTTR). |
| 23 | B | Proof of concept evaluates tools with sample tests before full commitment. |
| 24 | A | Data-driven frameworks separate data from scripts, allowing the same logic to run with multiple data sets. |
| 25 | B | Simulating virtual users is load generation, a performance testing activity. |
| 26 | C | Informal reviews have no formal process, minimal documentation, and are used for quick feedback. |
| 27 | C | Sudden load increases are tested with spike testing. |
| 28 | C | With 4 discrete valid values, EP requires 4 test cases (one per valid partition). |
| 29 | C | Combinatorial testing is designed for multiple independent parameters. |
| 30 | C | Rules = 2 × 2 × 4 = 16. Multiply condition values. |
| 31 | B | When close to criteria with low remaining risk, assess risk and discuss with stakeholders. |
| 32 | B | Defending is counterproductive because it shifts focus from finding defects to justifying the document. |
| 33 | B | Operating during a failure without interruption is fault tolerance. |
| 34 | B | ROI is typically negative in year 1 due to initial development costs, becoming positive later. |
| 35 | A | Smoke tests verify basic functionality, ensuring the build is stable enough for formal testing. |
| 36 | A | 2-value BVA: min-1, min, max, max+1 = 49, 50, 150, 151. |
| 37 | B | Supporting multiple formats for integration with reporting tools is interoperability. |
| 38 | C | Rework is when the author fixes identified defects. |
| 39 | D | 15 characters is a nominal valid value, not a boundary. BVA tests boundaries: 4, 5, 20, 21. |
| 40 | B | Time saved = 300 - (200 + 40) = 60 hours in first year. After year 1, savings = 300 - 40 = 260 hours/year. |

## ⭐ Score Interpretation

| Score | Interpretation |
|-------|-------------|
| 36-40 | Excellent — ready for the exam |
| 30-35 | Good — review weak areas and practice more |
| 24-29 | Fair — significant study needed in weak chapters |
| Below 24 | Needs improvement — re-study the full course |

**Target for exam readiness: 32+ correct answers (80%+)**
