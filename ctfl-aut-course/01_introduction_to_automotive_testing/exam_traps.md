# Chapter 1 — Introduction to Automotive Testing: Exam Traps

## Trap 1: Automotive Testing is the Same as General Testing

**Trap:** Automotive has unique requirements: safety-critical, embedded, standards-driven, harsh environment.

**Example question:**
> Automotive software testing uses exactly the same approach as general software testing. This is:
>
> A. Correct — testing principles are universal
> B. Incorrect — automotive testing must address safety-criticality, embedded hardware, mandatory standards, and harsh environments
> C. Only for non-safety features
> D. Only for infotainment

**Correct answer:** B — Automotive has unique requirements.

---

## Trap 2: All ECUs are Equally Critical

**Trap:** ECUs range from QM (no safety relevance) to ASIL D (highest safety integrity).

**Example question:**
> An infotainment ECU and an ABS ECU require the same testing rigor. This is:
>
> A. Correct — all ECUs must be tested equally
> B. Incorrect — ABS is safety-critical (ASIL D) and requires much more rigorous testing than infotainment (QM)
> C. Only for luxury cars
> D. Only for economy cars

**Correct answer:** B — Criticality varies by ECU.

---

## Trap 3: CAN is Used for Everything

**Trap:** Different networks serve different purposes; CAN is not always the best choice.

**Example question:**
> CAN bus is the only vehicle network needed for all applications. This is:
>
> A. Correct — CAN handles all vehicle communication
> B. Incorrect — different networks serve different needs (LIN for low-cost, FlexRay for deterministic, Ethernet for high bandwidth)
> C. Only for electric vehicles
> D. Only for combustion engines

**Correct answer:** B — Multiple networks exist for a reason.

---

## Trap 4: Safety-Critical Only Means No Crashes

**Trap:** Safety-critical includes preventing injury, not just preventing crashes.

**Example question:**
> A seat heater failure is safety-critical because it could cause a crash. This is:
>
> A. Correct — any failure is safety-critical
> B. Incorrect — seat heater failure does not directly cause injury; airbag or brake failure is safety-critical because it directly affects occupant safety
> C. Only in cold climates
> D. Only for leather seats

**Correct answer:** B — Safety-critical = direct injury risk.

---

## Trap 5: Standards are Optional Guidelines

**Trap:** ISO 26262 and ASPICE are mandatory for automotive development.

**Example question:**
> ISO 26262 compliance is recommended but not required for automotive software. This is:
>
> A. Correct — it's just a best practice
> B. Incorrect — ISO 26262 is mandatory for functional safety in automotive; non-compliance can block production approval
> C. Only for German manufacturers
> D. Only for luxury brands

**Correct answer:** B — Standards are mandatory.
