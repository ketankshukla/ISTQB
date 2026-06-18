# 🪤 Chapter 3 — Automotive Testing Process: Exam Traps

## 🪤 Trap 1: Vehicle Testing Replaces All Other Levels

**Trap:** Each test level serves a unique purpose; all are needed.

**Example question:**
> Vehicle testing alone is sufficient to validate automotive software. This is:
>
> A. Correct — real vehicle is the ultimate test
> B. Incorrect — vehicle testing is expensive and late; MIL, SIL, PIL, and HIL find issues earlier when they are cheaper to fix
> C. Only for simple systems
> D. Only for complex systems

**Correct answer:** B — Multiple levels needed.

---

## 🪤 Trap 2: Traceability is Only for Documentation

**Trap:** Traceability enables coverage analysis, impact analysis, and audit evidence.

**Example question:**
> Requirements traceability is only useful for creating documentation. This is:
>
> A. Correct — it's a paperwork exercise
> B. Incorrect — traceability enables coverage analysis, impact analysis when requirements change, and audit evidence for standards compliance
> C. Only for large projects
> D. Only for safety-critical projects

**Correct answer:** B — Traceability has multiple benefits.

---

## 🪤 Trap 3: SIL and HIL Test the Same Things

**Trap:** SIL tests software on PC; HIL tests ECU hardware with simulated environment.

**Example question:**
> SIL and HIL testing are interchangeable since both test software. This is:
>
> A. Correct — both find software bugs
> B. Incorrect — SIL tests software on a PC host; HIL tests real ECU hardware with simulated sensors/actuators and timing
> C. Only for non-safety systems
> D. Only for safety systems

**Correct answer:** B — SIL ≠ HIL.

---

## 🪤 Trap 4: Verification and Validation are the Same

**Trap:** Verification = did we build it right? Validation = did we build the right thing?

**Example question:**
> Verification and validation are synonyms in automotive testing. This is:
>
> A. Correct — both mean testing
> B. Incorrect — verification checks compliance with specification (did we build it right?); validation checks user needs are met (did we build the right thing?)
> C. Only for ISO 26262
> D. Only for ASPICE

**Correct answer:** B — Different purposes.

---

## 🪤 Trap 5: Static Testing is Optional for Low ASIL

**Trap:** Static testing (reviews, analysis) benefits all ASIL levels.

**Example question:**
> Static testing is only required for high ASIL (C and D) components. This is:
>
> A. Correct — low ASIL doesn't need reviews
> B. Incorrect — while rigor increases with ASIL, static testing (reviews, analysis) provides value at all ASIL levels including QM
> C. Only for brake systems
> D. Only for airbags

**Correct answer:** B — Static testing benefits all ASILs.
