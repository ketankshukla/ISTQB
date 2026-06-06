# Chapter 5 — Test Environment and Tools: Exam Traps

## Trap 1: Using Only HIL for All Testing

**Trap:** HIL is expensive and slow. Use appropriate environment for each test level.

**Example question:**
> A team uses HIL for all unit tests because "it's the most realistic." The better approach is:
>
> A. Continue — realism is good
> B. Use SIL for unit tests (faster, cheaper) and HIL for system integration
> C. Only use MIL
> D. Only use the vehicle

**Correct answer:** B — Match environment to test level.

---

## Trap 2: Skipping PIL for Timing-Critical Code

**Trap:** SIL runs on host PC with different timing. PIL verifies real-time behavior on target processor.

**Example question:**
> A team verifies real-time deadlines using SIL tests. The risk is:
>
> A. No risk — SIL is accurate
> B. Host PC timing differs from target processor; PIL is needed for timing verification
> C. Only that tests are too fast
> D. Only that tests are too slow

**Correct answer:** B — PIL verifies target timing.

---

## Trap 3: Testing Without Proper Calibration Version

**Trap:** Different calibration data produces different behavior. Tests must use known calibration.

**Example question:**
> A test fails after a calibration update but the team doesn't track calibration versions. The problem is:
>
> A. The software is broken
> B. Calibration changes affect behavior; test environments must control calibration versions
> C. Only that the test is wrong
> D. Only that the vehicle is wrong

**Correct answer:** B — Calibration is a configuration item.

---

## Trap 4: Using Production Flashing for Development

**Trap:** Production flashing has security checks that may not be needed for development and slow iteration.

**Example question:**
> Development flashing fails repeatedly because production signature verification rejects unsigned builds. The solution is:
>
> A. Sign all development builds
> B. Use a development flashing procedure that bypasses signature checks in controlled environments
> C. Only flash in production
> D. Only use OTA

**Correct answer:** B — Development and production flashing differ.

---

## Trap 5: Ignoring Network Database Versions

**Trap:** DBC/LDF files define signal meaning. Version mismatch causes misinterpretation.

**Example question:**
> A test reads vehicle speed from CAN but gets a value 10x too high. The likely cause is:
>
> A. The sensor is broken
> B. The DBC file version doesn't match the ECU software, causing wrong scaling factor
> C. Only that the test is wrong
> D. Only that the bus is overloaded

**Correct answer:** B — DBC version must match ECU software.
