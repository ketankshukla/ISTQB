# 🪤 Chapter 3 — Quality Characteristics: Exam Traps

## 🪤 Trap 1: Confusing Accuracy with Suitability

**Trap:** Accuracy tests whether results are CORRECT. Suitability tests whether all needed FUNCTIONS are present.

**Example question:**
> A requirement states: "The system shall calculate sales tax at 8% for California residents." A test verifies that an order for $100 from California produces $8.00 tax. This test primarily validates which quality characteristic?
>
> A. Suitability
> B. Accuracy
> C. Security
> D. Efficiency

**Wrong answer:** A — "Suitability" — because the tax calculation is a function.

**Why it's wrong:** The test is verifying the correctness of the calculation ($100 × 8% = $8.00), not whether the tax function exists.

**Correct answer:** B — Accuracy.

**Defense strategy:** Accuracy = correctness of results. Suitability = completeness and appropriateness of functions. Ask: "Is this about correct output (Accuracy) or having the right features (Suitability)?"

---

## 🪤 Trap 2: Confusing Confidentiality with Integrity

**Trap:** Confidentiality means data is not seen by unauthorized users. Integrity means data is not modified by unauthorized users.

**Example question:**
> A tester verifies that a user cannot modify another user's profile information. This test validates which security sub-characteristic?
>
> A. Confidentiality
> B. Integrity
> C. Availability
> D. Authenticity

**Wrong answer:** A — "Confidentiality" — because it involves access to user data.

**Why it's wrong:** Preventing modification is about data integrity, not confidentiality. Confidentiality would be preventing the reading of another user's data.

**Correct answer:** B — Integrity.

**Defense strategy:** Confidentiality = unauthorized READING. Integrity = unauthorized MODIFICATION. Availability = authorized ACCESS when needed.

---

## 🪤 Trap 3: Thinking Fault Tolerance and Recoverability Are the Same

**Trap:** Fault tolerance means the system continues operating during a failure. Recoverability means the system can be restored after a failure.

**Example question:**
> A database cluster continues to serve read requests when one node fails because other nodes take over. This demonstrates:
>
> A. Recoverability
> B. Fault Tolerance
> C. Maturity
> D. Portability

**Wrong answer:** A — "Recoverability" — because the system recovered from failure.

**Why it's wrong:** The system continues operating DURING the failure without interruption. That is fault tolerance. Recoverability would involve restoring the failed node and data after the failure.

**Correct answer:** B — Fault Tolerance.

**Defense strategy:** Fault tolerance = operates DURING failure. Recoverability = restores AFTER failure. Fault tolerance is about continuity; recoverability is about restoration.

---

## 🪤 Trap 4: Confusing Load Testing with Stress Testing

**Trap:** Load testing tests at expected load. Stress testing tests beyond expected load.

**Example question:**
> A test team wants to find the maximum number of concurrent users the system can handle before it fails. Which test type is MOST appropriate?
>
> A. Load Testing
> B. Stress Testing
> C. Endurance Testing
> D. Volume Testing

**Wrong answer:** A — "Load Testing" — because it involves users.

**Why it's wrong:** Load testing validates performance at EXPECTED load. Finding the maximum before failure requires pushing BEYOND expected load — that's stress testing.

**Correct answer:** B — Stress Testing.

**Defense strategy:** Load = expected capacity. Stress = beyond capacity to find breaking point. Endurance = sustained over time. Volume = large data amounts.

---

## 🪤 Trap 5: Thinking Maintainability Is Only About Code

**Trap:** Maintainability includes documentation, architecture, testability, and configuration — not just clean code.

**Example question:**
> Which of the following is MOST relevant to maintainability testing?
>
> A. Verifying that users can complete a purchase in under 30 seconds
> B. Verifying that code changes take minimal time and don't cause unexpected side effects
> C. Verifying that the system is accessible to users with disabilities
> D. Verifying that the system cannot be accessed without authentication

**Wrong answer:** A, C, or D — confusing other quality characteristics.

**Why it's wrong:** A is efficiency. C is usability/accessibility. D is security. Maintainability is about ease of modification.

**Correct answer:** B — Ease of code changes without side effects.

**Defense strategy:** Maintainability = can we change/fix/extend it easily? Look for keywords: change, modify, adapt, fix, extend, test.

---

## 🪤 Trap 6: Forgetting Availability Is a Reliability Sub-characteristic

**Trap:** Availability is often confused with efficiency or treated as a separate top-level characteristic.

**Example question:**
> A system guarantees 99.9% uptime. This requirement addresses which quality characteristic?
>
> A. Efficiency
> B. Reliability
> C. Security
> D. Maintainability

**Wrong answer:** A — "Efficiency" — because uptime relates to performance.

**Why it's wrong:** Uptime and availability are sub-characteristics of Reliability, not Efficiency. Efficiency is about resource usage and speed.

**Correct answer:** B — Reliability.

**Defense strategy:** Availability = operational when needed = Reliability. Efficiency = fast and resource-light = Performance Efficiency.

---

## 🪤 Trap 7: Confusing Interoperability with Portability

**Trap:** Interoperability is about exchanging data with OTHER systems. Portability is about running on DIFFERENT environments.

**Example question:**
> A mobile app must run on iOS 15, iOS 16, and Android 13. This requirement addresses:
>
> A. Interoperability
> B. Portability
> C. Reliability
> D. Suitability

**Wrong answer:** A — "Interoperability" — because it involves different platforms.

**Why it's wrong:** Running on different platforms is portability. Interoperability would be exchanging data with another app or system.

**Correct answer:** B — Portability.

**Defense strategy:** Interoperability = talking to other systems. Portability = running on different environments. If it's about data exchange, it's interoperability. If it's about platform independence, it's portability.

---

## 🪤 Trap 8: Thinking Non-Functional Testing Doesn't Use Black-Box Techniques

**Trap:** Many non-functional tests use the same specification-based techniques as functional tests.

**Example question:**
> Which test design technique is MOST appropriate for testing a system's response time under various user loads?
>
> A. Decision Table Testing
> B. Equivalence Partitioning (partitioning load levels)
> C. State Transition Testing
> D. Use Case Testing

**Wrong answer:** A — "Decision Table Testing" — because efficiency testing is complex.

**Why it's wrong:** While load testing is complex, the test design for selecting load levels can use EP (light, normal, peak, stress loads). Decision tables are for business rules with conditions.

**Correct answer:** B — Equivalence Partitioning applied to load levels.

**Defense strategy:** Non-functional testing often uses the same techniques as functional testing but applied to different attributes (load levels, data volumes, user counts).
