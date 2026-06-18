# 🪤 Chapter 2 — Automotive Standards and Regulations: Exam Traps

## 🪤 Trap 1: ISO 26262 is Only for Hardware

**Trap:** ISO 26262 covers the entire system including software (Part 6).

**Example question:**
> ISO 26262 applies only to vehicle hardware, not software. This is:
>
> A. Correct
> B. Incorrect — Part 6 specifically addresses software development for functional safety
> C. Only true for ASIL A
> D. Only true for ASIL D

**Correct answer:** B — ISO 26262 includes software safety.

---

## 🪤 Trap 2: Higher ASIL Means Less Testing

**Trap:** Higher ASIL means MORE rigorous testing, not less.

**Example question:**
> ASIL A requires more thorough testing than ASIL D. This is:
>
> A. Correct — A comes before D alphabetically
> B. Incorrect — ASIL D (highest risk) requires the most rigorous testing; ASIL A (lowest) requires the least
> C. Only true for hardware
> D. Only true for software

**Correct answer:** B — ASIL D = most rigorous.

---

## 🪤 Trap 3: ASPICE is a Test Tool

**Trap:** ASPICE is a process assessment model, not a tool.

**Example question:**
> ASPICE is a test automation framework for automotive software. This is:
>
> A. Correct
> B. Incorrect — ASPICE is a process assessment model evaluating development process capability
> C. Only true for Level 3
> D. Only true for large organizations

**Correct answer:** B — ASPICE = process assessment, not tool.

---

## 🪤 Trap 4: AUTOSAR Eliminates the Need for Testing

**Trap:** AUTOSAR standardizes architecture but testing is still required for SWC logic, integration, and system behavior.

**Example question:**
> AUTOSAR compliance means the software is inherently safe and doesn't need testing. This is:
>
> A. Correct — standardization ensures safety
> B. Incorrect — AUTOSAR standardizes architecture; application logic still requires thorough testing
> C. Only for BSW
> D. Only for RTE

**Correct answer:** B — AUTOSAR ≠ no testing needed.

---

## 🪤 Trap 5: ASIL Decomposition Means Lower Safety

**Trap:** ASIL decomposition maintains safety through redundancy and independence, not by reducing safety.

**Example question:**
> ASIL D decomposed into two ASIL B(D) elements reduces the overall safety level. This is:
>
> A. Correct — lower ASIL means lower safety
> B. Incorrect — decomposition maintains safety through redundant, independent elements; the "(D)" indicates the original ASIL target
> C. Only for hardware
> D. Only for software

**Correct answer:** B — Decomposition maintains safety via redundancy.
