# 🪤 Chapter 4 — Automotive Testing Techniques: Exam Traps

## 📊 Trap 1: Statement Coverage is Sufficient for All ASIL

**Trap:** Higher ASIL requires branch and MC/DC coverage.

**Example question:**
> Statement coverage is sufficient for all ASIL levels. This is:
>
> A. Correct — statement coverage is the standard
> B. Incorrect — ASIL B-D require branch coverage, and ASIL C-D require MC/DC for compound conditions
> C. Only for QM
> D. Only for infotainment

**Correct answer:** B — Higher ASIL needs more coverage.

---

## 🪤 Trap 2: Fault Injection is Only for Hardware

**Trap:** Fault injection applies to software, hardware, communication, and environment.

**Example question:**
> Fault injection testing only applies to hardware failures. This is:
>
> A. Correct — it's a hardware test technique
> B. Incorrect — fault injection includes software (corrupt variables), hardware (sensor failures), communication (message corruption), and environment (temperature)
> C. Only for safety-critical systems
> D. Only for non-safety systems

**Correct answer:** B — Multiple fault types.

---

## 🪤 Trap 3: Back-to-Back Testing is Only for MIL vs SIL

**Trap:** Back-to-back can compare any reference and implementation.

**Example question:**
> Back-to-back testing only compares MIL models to SIL code. This is:
>
> A. Correct — that's the standard use
> B. Incorrect — back-to-back can compare any reference (specification, model, previous version) to implementation
> C. Only for new development
> D. Only for legacy systems

**Correct answer:** B — Any reference vs implementation.

---

## 🪤 Trap 4: Regression Testing is the Same as Retesting

**Trap:** Retesting verifies a fix; regression testing checks for unintended side effects.

**Example question:**
> Regression testing and retesting are the same activity. This is:
>
> A. Correct — both test after changes
> B. Incorrect — retesting verifies a specific fix; regression testing ensures changes didn't break unrelated functionality
> C. Only for agile
> D. Only for waterfall

**Correct answer:** B — Different purposes.

---

## 🪤 Trap 5: Boundary Value Testing is Only for Numeric Inputs

**Trap:** Boundary values apply to any range: time, speed, temperature, counts.

**Example question:**
> Boundary value analysis only applies to numeric input fields. This is:
>
> A. Correct — it's for numbers
> B. Incorrect — boundaries apply to any range: time delays, speed limits, temperature thresholds, buffer sizes, and state transitions
> C. Only for web forms
> D. Only for databases

**Correct answer:** B — Boundaries apply to many domains.
