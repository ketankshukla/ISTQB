# ❓ Chapter 5 — Test Tools and Automation: Practice Questions

---

### 🔷 Q1 (TA-5.2, K2)

In a keyword-driven automation framework, test cases are typically written as:

A. Program code in a programming language
B. A table of keywords, objects, and values
C. Recorded user interactions
D. SQL queries against a test database

---

### 🔷 Q2 (TA-5.2, K2)

Which automation approach is MOST appropriate when testers have limited programming skills but need to create and maintain automated tests?

A. Linear scripting with record and playback
B. Keyword-driven framework
C. Pure programmatic framework with custom libraries
D. Manual testing with detailed documentation

---

### 🔷 Q3 (TA-5.7, K2)

A team spends 150 hours developing automated regression tests. For each subsequent release, approximately how much time should be budgeted for test maintenance?

A. 0 hours
B. 5-15 hours
C. 30-75 hours
D. 150+ hours

---

### 🔷 Q4 (TA-5.5, K2)

A tool examines source code to identify unreachable code, null pointer dereferences, and violations of coding standards without executing the code. This tool performs:

A. Dynamic Testing
B. Static Analysis
C. Performance Testing
D. Penetration Testing

---

### 🔷 Q5 (TA-5.7, K3)

Which factor is MOST important to evaluate FIRST when selecting a test automation tool?

A. The tool's user interface aesthetics
B. Whether the tool supports the technologies under test
C. The vendor's social media presence
D. The tool's price alone

---

### 🔷 Q6 (TA-5.7, K2)

A team calculates that automating regression tests will save 300 hours per year but requires 400 hours of initial development. In the first year:

A. ROI will definitely be positive
B. ROI may be negative due to high initial costs
C. ROI is irrelevant for test automation
D. ROI will be exactly 300%

---

### 🔷 Q7 (TA-5.2, K2)

In a data-driven framework, what is typically stored in external files?

A. Test scripts
B. Test data (input values and expected results)
C. The automation tool itself
D. Bug reports

---

### 🔷 Q8 (TA-5.3, K2)

Which tool category is MOST appropriate for simulating 10,000 concurrent users accessing a web application?

A. Static Analysis Tool
B. Load Testing Tool
C. Test Management Tool
D. Defect Tracking Tool

---

### 🔷 Q9 (TA-5.7, K2)

What is the PRIMARY risk of using record-and-playback automation for long-term regression testing?

A. It requires too much programming skill
B. Scripts are brittle and break easily when the UI changes
C. It cannot generate any test reports
D. It is always more expensive than manual testing

---

### 🔷 Q10 (TA-5.4, K2)

Which function is typically provided by a test management tool?

A. Generating load on the application under test
B. Managing test cases, test execution, and defect tracking
C. Analyzing source code for security vulnerabilities
D. Recording user interactions for replay

---

### 🔷 Q11 (TA-5.7, K3)

A team wants to automate UI tests for a rapidly changing web application. Which framework design principle is MOST important for minimizing maintenance effort?

A. Hard-coding element locators in each test script
B. Using a page object model to separate UI locators from test logic
C. Recording tests without any abstraction layer
D. Writing all tests in a single monolithic script

---

### 🔷 Q12 (TA-5.2, K2)

Which of the following is a characteristic of a modular automation framework?

A. Tests are recorded as a single continuous playback
B. Tests are broken into reusable modules that can be called by test scripts
C. Tests are written entirely in SQL
D. Tests require no programming knowledge

---

### 🔷 Q13 (TA-5.7, K2)

The recommended first step when introducing a new test tool into an organization is:

A. Purchase licenses for the entire organization immediately
B. Conduct a proof of concept (POC) with a small set of tests
C. Mandate that all teams use the tool without training
D. Build a custom tool from scratch

---

### 🔷 Q14 (TA-5.3, K2)

Which metric is MOST relevant when evaluating the effectiveness of a performance testing tool?

A. Number of spelling errors found in code
B. Ability to simulate virtual users and measure response times
C. Number of test cases created per day
D. Code coverage percentage

---

### 🔷 Q15 (TA-5.7, K2)

Which of the following is a COMMON risk in test automation implementation?

A. Automated tests run too fast
B. Underestimating the maintenance effort required for automated scripts
C. Automated tests find too many defects
D. Test automation eliminates the need for testers

---

### 🔷 Q16 (TA-5.7, K3)

A team has 3 testers: 1 senior tester with programming experience, 2 junior testers without programming experience. They need to automate UI regression tests. Which approach is MOST appropriate?

A. Have junior testers learn programming before starting automation
B. Use a keyword-driven framework where the senior tester builds keywords and junior testers compose tests
C. Use only record-and-playback for all tests
D. Outsource all automation to a third party

---

### 🔷 Q17 (TA-5.4, K2)

Requirements traceability (linking requirements to test cases) is a feature typically provided by:

A. Performance testing tools
B. Test management tools
C. Static analysis tools
D. Data generation tools

---

### 🔷 Q18 (TA-5.7, K2)

When calculating ROI for test automation, which of the following should be included as a COST?

A. Time saved by not running manual tests
B. Faster time-to-market due to quicker feedback
C. Initial script development effort and tool licensing
D. Improved test coverage

---

### 🔷 Q19 (TA-5.6, K2)

A tool that anonymizes production data by replacing real names and addresses with synthetic values for use in test environments is a:

A. Performance testing tool
B. Test data preparation tool
C. Test execution tool
D. Static analysis tool

---

### 🔷 Q20 (TA-5.7, K2)

Which statement about test automation is MOST accurate?

A. Automated tests can completely replace all manual testing
B. Automation is most valuable for frequently executed regression tests
C. Automation should only be used for one-time tests
D. Automated tests never require maintenance

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Keyword-driven frameworks use tables with keywords (actions), objects (UI elements), and values (data) to define test cases.

### 🔷 Q2
**Answer: B**

**Rationale:** Keyword-driven frameworks allow testers with limited programming skills to write tests using predefined keywords. Linear scripting (A) is too brittle. Pure programmatic (C) requires programming skills.

### 🔷 Q3
**Answer: C**

**Rationale:** Maintenance is typically 20-50% of initial development effort per release. 20-50% of 150 hours = 30-75 hours.

### 🔷 Q4
**Answer: B**

**Rationale:** Static analysis examines code without execution to find code-level issues. Dynamic testing (A) requires execution. Performance testing (C) measures runtime behavior. Penetration testing (D) is a security activity.

### 🔷 Q5
**Answer: B**

**Rationale:** Technical fit is the most important first criterion. If the tool doesn't support the technologies under test, it cannot be used regardless of other factors.

### 🔷 Q6
**Answer: B**

**Rationale:** With 400 hours of initial development and 300 hours of annual savings, first-year ROI may be negative (depending on when during the year automation is completed). ROI typically becomes positive in subsequent years.

### 🔷 Q7
**Answer: B**

**Rationale:** In data-driven frameworks, test data (inputs and expected results) is stored in external files. Test scripts read the data and execute the same logic with different data sets.

### 🔷 Q8
**Answer: B**

**Rationale:** Load testing tools simulate concurrent virtual users to generate load on the application. Static analysis (A) examines code. Test management (C) organizes tests. Defect tracking (D) logs bugs.

### 🔷 Q9
**Answer: B**

**Rationale:** Recorded scripts are tightly coupled to the exact UI state at recording time. Any UI change (button moved, ID changed) breaks the script. Programmatic frameworks with abstraction layers are more maintainable.

### 🔷 Q10
**Answer: B**

**Rationale:** Test management tools manage test cases, execution, and defect tracking. Load generation (A) is performance testing. Code analysis (C) is static analysis. Recording interactions (D) is capture/replay.

### 🔷 Q11
**Answer: B**

**Rationale:** The page object model separates UI locators from test logic. When the UI changes, only the page objects need updating, not every test script. Hard-coding locators (A) and recording without abstraction (C) create high maintenance.

### 🔷 Q12
**Answer: B**

**Rationale:** Modular frameworks break tests into reusable modules or functions that can be called by multiple test scripts. Recorded playback (A) is linear scripting. SQL (C) is not an automation framework. No programming (D) describes keyword-driven.

### 🔷 Q13
**Answer: B**

**Rationale:** A proof of concept (POC) evaluates tools against real needs with a small investment before full commitment. Immediate purchase (A) risks mismatch. Mandating without training (C) ensures failure. Building from scratch (D) is rarely justified.

### 🔷 Q14
**Answer: B**

**Rationale:** Performance testing tools simulate virtual users and measure response times, throughput, and resource utilization under load.

### 🔷 Q15
**Answer: B**

**Rationale:** Underestimating maintenance is the most common automation risk. Teams budget for development but not ongoing maintenance. Automated tests running fast (A) is a benefit. Finding defects (C) is a benefit. Eliminating testers (D) is false.

### 🔷 Q16
**Answer: B**

**Rationale:** A keyword-driven approach allows the senior tester to build and maintain the technical layer (keywords, page objects) while junior testers compose tests using the keywords. This leverages both skill sets effectively.

### 🔷 Q17
**Answer: B**

**Rationale:** Test management tools provide requirements traceability, linking requirements to test cases and test results. Performance tools (A) measure speed. Static analysis (C) examines code. Data generation (D) creates test data.

### 🔷 Q18
**Answer: C**

**Rationale:** Initial script development and tool licensing are costs. Time saved (A), faster feedback (B), and improved coverage (D) are benefits, not costs.

### 🔷 Q19
**Answer: B**

**Rationale:** Anonymizing production data for testing is a test data preparation function. Performance tools (A) generate load. Execution tools (C) run tests. Static analysis (D) examines code.

### 🔷 Q20
**Answer: B**

**Rationale:** Automation is most valuable for regression tests that are executed frequently. It cannot replace all manual testing (A). One-time tests (C) are poor automation candidates. Automated tests always require maintenance (D).
