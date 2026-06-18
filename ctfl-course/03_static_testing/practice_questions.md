# ❓ Chapter 3 — Practice Questions

15 original ISTQB-style questions covering Chapter 3 learning objectives.

---

## ❓ Questions

### 🔷 Q1 (FL-3.1.1, K1)

Which of the following work products can be examined using static testing?

A. Only source code
B. Only requirements documents
C. Any work product that can be read, including requirements, designs, code, test plans, and user manuals
D. Only work products that can be executed

---

### 🔷 Q2 (FL-3.1.2, K2)

What is a key benefit of static testing compared to dynamic testing?

A. Static testing executes code faster than dynamic testing
B. Static testing can find defects in requirements and designs before any code is written, making them cheaper to fix
C. Static testing guarantees all defects will be found
D. Static testing replaces the need for dynamic testing

---

### 🔷 Q3 (FL-3.1.3, K2)

Which statement BEST describes a difference between static and dynamic testing?

A. Static testing finds failures; dynamic testing finds defects
B. Static testing finds defects directly in work products without execution; dynamic testing finds failures during software execution
C. Static testing can only be performed by tools; dynamic testing can only be performed by people
D. Static testing is performed after dynamic testing

---

### 🔷 Q4 (FL-3.1.3, K2)

A tester uses a code analysis tool that checks the source code for violations of coding standards and identifies unreachable statements. No part of the code is executed during this process.

This is an example of:

A. Dynamic testing using white-box techniques
B. Static testing (static analysis)
C. Component testing
D. Regression testing

---

### 🔷 Q5 (FL-3.1.2, K2)

A requirements specification contains the statement: "The system shall respond quickly to user requests."

During a review, a tester identifies that "quickly" is ambiguous and cannot be tested. Which benefit of static testing does this illustrate?

A. Static testing finds performance defects during execution
B. Static testing can identify ambiguities and omissions in requirements that dynamic testing cannot detect
C. Static testing measures response time
D. Static testing replaces performance testing

---

### 🔷 Q6 (FL-3.2.1, K1)

Which of the following is a benefit of early and frequent stakeholder feedback through reviews?

A. It guarantees that no defects will exist in the final product
B. It reduces the risk of misunderstanding requirements and allows faster course correction
C. It eliminates the need for acceptance testing
D. It replaces all other testing activities

---

### 🔷 Q7 (FL-3.2.2, K2)

During which activity of the review process are most defects typically found?

A. Planning
B. Review initiation (kick-off)
C. Individual review (preparation)
D. Fixing and reporting

---

### 🔷 Q8 (FL-3.2.2, K2)

Which is the correct sequence of activities in a formal review process?

A. Individual review -> Planning -> Meeting -> Fixing
B. Planning -> Initiation -> Individual review -> Meeting -> Fixing and reporting
C. Meeting -> Individual review -> Planning -> Fixing
D. Fixing -> Meeting -> Individual review -> Planning

---

### 🔷 Q9 (FL-3.2.3, K1)

In a formal review, who is responsible for leading the review meeting and ensuring the review process is followed correctly?

A. The author
B. The facilitator (moderator)
C. The scribe
D. Management

---

### 🔷 Q10 (FL-3.2.3, K1)

After a review meeting identifies several defects in a design document, who is responsible for fixing those defects?

A. The moderator
B. The reviewers
C. The author
D. The scribe

---

### 🔷 Q11 (FL-3.2.4, K2)

A team member asks the developer sitting next to them to quickly look over a piece of code. There is no formal meeting, no defined roles, and no documented process. What type of review is this?

A. Inspection
B. Technical review
C. Walkthrough
D. Informal review

---

### 🔷 Q12 (FL-3.2.4, K2)

In a scheduled meeting, the author of a system design document presents the design to the team, explaining each section and answering questions. The team members note potential issues as the author guides them through the material.

What type of review is this?

A. Inspection
B. Walkthrough
C. Informal review
D. Static analysis

---

### 🔷 Q13 (FL-3.2.4, K2)

Which review type uses a trained moderator, has formal entry and exit criteria, requires mandatory individual preparation, and collects metrics for process improvement?

A. Informal review
B. Walkthrough
C. Technical review
D. Inspection

---

### 🔷 Q14 (FL-3.2.4, K2)

What is the PRIMARY distinguishing feature of a technical review compared to a walkthrough?

A. A technical review is led by technically qualified peers or a facilitator (not the author), focusing on technical quality and conformance
B. A technical review has no meeting
C. A technical review is always performed by external auditors
D. A technical review does not produce any documentation

---

### 🔷 Q15 (FL-3.2.5, K1)

Which of the following is a factor that contributes to successful reviews?

A. Reviewing very large documents in a single session to save time
B. Treating defect findings as constructive feedback rather than personal criticism of the author
C. Skipping individual preparation to reduce total review effort
D. Having only one reviewer to minimize disagreements

---

### 🔷 Q16 (FL-3.1.3, K2)

A tester reviews a test plan document and identifies that the exit criteria are vague and unmeasurable. This activity is:

A. Dynamic testing because the tester is evaluating a test artifact
B. Static testing because the work product is examined without execution
C. Not testing — reviewing a test plan is a management activity
D. Regression testing

---

### 🔷 Q17 (FL-3.2.4, K2)

Which of the following statements about walkthroughs is CORRECT?

A. Walkthroughs are led by a trained moderator who is not the author
B. Walkthroughs require mandatory individual preparation with checklists
C. Walkthroughs are led by the author, who guides participants through the work product
D. Walkthroughs always collect formal metrics for process improvement

---

---

## ✔️ Answers and Rationales

### ✔️ Q1 — Answer: C

- **C is correct.** Static testing can be applied to any readable work product — requirements, designs, code, test plans, user manuals, contracts, and more.
- A is wrong: Not limited to source code.
- B is wrong: Not limited to requirements.
- D is wrong: Static testing specifically applies to work products that do NOT need execution. Some (like requirements) cannot be executed at all.

### ✔️ Q2 — Answer: B

- **B is correct.** Static testing catches defects in early lifecycle artifacts (requirements, designs) before code exists, when fixes are cheapest.
- A is wrong: Static testing does not execute code at all.
- C is wrong: No technique guarantees finding all defects.
- D is wrong: Static testing complements dynamic testing; it does not replace it.

### ✔️ Q3 — Answer: B

- **B is correct.** Static testing finds defects directly in work products without execution. Dynamic testing runs the software and detects failures.
- A is wrong: This is backwards (static finds defects, dynamic finds failures).
- C is wrong: Both can involve people and tools.
- D is wrong: Static testing is typically performed BEFORE or alongside dynamic testing.

### ✔️ Q4 — Answer: B

- **B is correct.** A tool checking code for standard violations and unreachable statements without executing it is static analysis — a form of static testing.
- A is wrong: No execution occurs, so this is not dynamic testing.
- C is wrong: Component testing executes the code.
- D is wrong: Regression testing re-executes previously passing tests.

### ✔️ Q5 — Answer: B

- **B is correct.** Identifying that "quickly" is ambiguous demonstrates static testing's ability to find requirements defects (ambiguities) that dynamic testing cannot directly detect.
- A is wrong: Static testing does not execute code or measure response time.
- C is wrong: Static testing does not measure runtime performance.
- D is wrong: Static testing does not replace performance testing.

### ✔️ Q6 — Answer: B

- **B is correct.** Early feedback catches misunderstandings and allows quick correction before heavy investment.
- A is wrong: Nothing guarantees zero defects.
- C is wrong: Reviews complement but do not eliminate acceptance testing.
- D is wrong: Reviews complement but do not replace all testing.

### ✔️ Q7 — Answer: C

- **C is correct.** Most defects are found during individual preparation, when each reviewer studies the work product alone before the meeting.
- A is wrong: Planning sets up the review but does not find defects.
- B is wrong: Initiation distributes materials but does not find defects.
- D is wrong: Fixing addresses already-found defects.

### ✔️ Q8 — Answer: B

- **B is correct.** The standard formal review sequence is: Planning -> Initiation -> Individual review -> Meeting (communication/analysis) -> Fixing and reporting.
- A, C, D have incorrect orderings.

### ✔️ Q9 — Answer: B

- **B is correct.** The facilitator (moderator) leads the review meeting and ensures the process is followed.
- A is wrong: The author presents in a walkthrough, but in formal reviews the moderator leads.
- C is wrong: The scribe records findings.
- D is wrong: Management supports reviews but does not lead meetings.

### ✔️ Q10 — Answer: C

- **C is correct.** The author is always responsible for fixing defects identified in their work product.
- A is wrong: The moderator facilitates; does not fix.
- B is wrong: Reviewers find defects; they do not fix them.
- D is wrong: The scribe records findings; does not fix.

### ✔️ Q11 — Answer: D

- **D is correct.** No formal process, no defined roles, no meeting — this describes an informal review (buddy check).
- A is wrong: Inspections are the most formal type.
- B is wrong: Technical reviews have facilitators and documented findings.
- C is wrong: Walkthroughs involve the author leading a meeting.

### ✔️ Q12 — Answer: B

- **B is correct.** The author leads participants through the work product in a meeting — this is the defining characteristic of a walkthrough.
- A is wrong: Inspections are led by a trained moderator, not the author.
- C is wrong: There is a scheduled meeting with a structured presentation.
- D is wrong: Static analysis uses tools on code, not author presentations.

### ✔️ Q13 — Answer: D

- **D is correct.** All these features (trained moderator, formal entry/exit criteria, mandatory individual preparation, metrics for process improvement) are characteristics of an inspection.
- A is wrong: Informal reviews have no formal process.
- B is wrong: Walkthroughs are author-led with no formal criteria.
- C is wrong: Technical reviews may have some of these features but not all at the mandatory level.

### ✔️ Q14 — Answer: A

- **A is correct.** A technical review is led by technically qualified peers or a facilitator (not the author), focusing on technical conformance and quality.
- B is wrong: Technical reviews do have meetings.
- C is wrong: Technical reviews are peer reviews, not external audits.
- D is wrong: Technical reviews produce documented findings.

### ✔️ Q15 — Answer: B

- **B is correct.** A supportive culture where findings are treated as constructive feedback (not criticism) is a key success factor.
- A is wrong: Reviewing very large documents in one session reduces effectiveness.
- C is wrong: Skipping preparation reduces the number of defects found.
- D is wrong: Multiple reviewers with different perspectives find more defects.

### ✔️ Q16 — Answer: B

- **B is correct.** Examining a test plan document without executing anything is static testing. Test plans are valid work products for static testing.
- A is wrong: No execution occurs.
- C is wrong: Reviewing test artifacts is a legitimate testing activity.
- D is wrong: Regression testing executes previously passing tests.

### ✔️ Q17 — Answer: C

- **C is correct.** In a walkthrough, the author leads/guides participants through the work product.
- A is wrong: That describes an inspection.
- B is wrong: Mandatory individual preparation with checklists describes an inspection.
- D is wrong: Formal metrics collection is an inspection characteristic.
