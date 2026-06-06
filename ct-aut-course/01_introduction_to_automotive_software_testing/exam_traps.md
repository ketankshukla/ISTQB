# Chapter 1 — Introduction to Automotive Software Testing: Exam Traps

## Trap 1: Treating Automotive Software Like Enterprise Software

**Trap:** Automotive software has real-time, safety, and long-lifecycle requirements that enterprise software doesn't.

**Example question:**
> A tester applies enterprise web testing practices directly to brake control software. The risk is:
>
> A. No risk — testing is testing
> B. Missing real-time deadlines, safety requirements, and deterministic behavior validation
> C. Only slower execution
> D. Only more documentation

**Correct answer:** B — Automotive testing must address real-time and safety requirements.

---

## Trap 2: Thinking All Vehicle Networks are the Same

**Trap:** CAN, LIN, FlexRay, and Ethernet have different speeds, topologies, and use cases.

**Example question:**
> A team uses CAN bus for an infotainment system streaming video. The issue is:
>
> A. CAN is appropriate for all vehicle communication
> B. CAN bandwidth (1 Mbps) is insufficient for video; Ethernet is appropriate
> C. Only that CAN is too expensive
> D. Only that CAN is too complex

**Correct answer:** B — Match network to bandwidth and latency needs.

---

## Trap 3: Confusing the V-Model with Waterfall

**Trap:** The V-Model is a framework showing test/development correspondence, not necessarily a rigid sequential process.

**Example question:**
> The V-Model in automotive means:
>
> A. Testing only happens at the end
> B. Each development phase has a corresponding test phase; testing activities begin when requirements are written
> C. Only for waterfall projects
> D. Only for hardware

**Correct answer:** B — V-Model shows correspondence; test planning starts early.

---

## Trap 4: Ignoring Traceability

**Trap:** Without traceability, you can't prove coverage or manage changes in safety-critical systems.

**Example question:**
> A team tests without maintaining requirement traceability. In an audit:
>
> A. No issue — tests pass
> B. They cannot demonstrate that all safety requirements have been tested
> C. Only that documentation is incomplete
> D. Only that management is unhappy

**Correct answer:** B — Traceability is required for safety compliance.

---

## Trap 5: Assuming All ECUs are Equally Critical

**Trap:** Body control (windows, seats) has different safety requirements than brake or steering control.

**Example question:**
> A team applies the same test rigor to seat position control and brake control. The issue is:
>
> A. No issue — consistency is good
> B. Different ASIL levels require different rigor; brake control needs more thorough testing
> C. Only that seat control is over-tested
> D. Only that brake control is under-tested

**Correct answer:** B — Match test rigor to safety criticality (ASIL).
