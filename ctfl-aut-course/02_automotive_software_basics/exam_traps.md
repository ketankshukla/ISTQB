# 🪤 Chapter 2 — Automotive Software Basics: Exam Traps

## 🪤 Trap 1: All Vehicle Networks are Interchangeable

**Trap:** CAN, LIN, FlexRay, and Ethernet serve different purposes.

**Example question:**
> Any vehicle network can be used for any application. This is:
>
> A. Correct — all networks communicate between ECUs
> B. Incorrect — each network has specific characteristics (speed, cost, determinism) suited to different applications
> C. Only for luxury vehicles
> D. Only for electric vehicles

**Correct answer:** B — Networks have different purposes.

---

## 🪤 Trap 2: ASIL is Determined by Function Complexity

**Trap:** ASIL is determined by severity, exposure, and controllability, not complexity.

**Example question:**
> ASIL level is determined by how complex the software function is. This is:
>
> A. Correct — complex = higher ASIL
> B. Incorrect — ASIL is determined by severity, exposure, and controllability of potential hazards, not software complexity
> C. Only for German cars
> D. Only for Japanese cars

**Correct answer:** B — ASIL = S x E x C, not complexity.

---

## 🪤 Trap 3: QM Means No Testing Needed

**Trap:** QM still requires standard testing; it just doesn't have safety-critical rigor.

**Example question:**
> QM (Quality Management) components require no testing since they have no safety relevance. This is:
>
> A. Correct — QM = no testing
> B. Incorrect — QM still requires standard functional testing; it just doesn't need the additional safety-critical rigor (MC/DC, formal reviews)
> C. Only for infotainment
> D. Only for body control

**Correct answer:** B — QM needs standard testing.

---

## 🪤 Trap 4: FlexRay Replaces CAN

**Trap:** FlexRay and CAN coexist; FlexRay is for deterministic safety-critical, CAN for general.

**Example question:**
> FlexRay has replaced CAN in modern vehicles. This is:
>
> A. Correct — FlexRay is newer and better
> B. Incorrect — CAN and FlexRay coexist; CAN is cost-effective for general communication while FlexRay is used for deterministic safety-critical functions
> C. Only for autonomous vehicles
> D. Only for sports cars

**Correct answer:** B — They coexist.

---

## 🪤 Trap 5: ASIL D Requires Only More Test Cases

**Trap:** ASIL D requires MC/DC coverage, formal reviews, extensive traceability, not just more tests.

**Example question:**
> Achieving ASIL D only requires writing more test cases than ASIL A. This is:
>
> A. Correct — more tests = higher ASIL
> B. Incorrect — ASIL D requires MC/DC code coverage, formal inspections, full requirements traceability, and rigorous fault analysis, not just more tests
> C. Only for brake systems
> D. Only for airbags

**Correct answer:** B — ASIL D = rigorous process, not just quantity.
