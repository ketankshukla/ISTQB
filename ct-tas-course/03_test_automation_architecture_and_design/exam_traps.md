# Chapter 3 — Test Automation Architecture and Design: Exam Traps

## Trap 1: Confusing TAA with TAF

**Trap:** TAA = architecture (design). TAF = framework (implementation). Strategy defines TAA; engineers build TAF.

**Example question:**
> A team decides to use Page Object Model and separate test data into JSON files. This describes:
>
> A. The TAF only
> B. The TAA (architectural decisions) that will guide the TAF implementation
> C. Only the tool selection
> D. Only the test cases

**Correct answer:** B — POM and data separation are architectural decisions (TAA).

---

## Trap 2: Selecting Tools Based on Popularity Alone

**Trap:** Tool must fit the tech stack and team skills. Popular tools can be wrong choices.

**Example question:**
> A team selects Cypress for testing a legacy Java applet application. The issue is:
>
> A. Cypress is the best tool
> B. Cypress doesn't support Java applets; tool selection must match technology
> C. Only that it's too expensive
> D. Only that it's too new

**Correct answer:** B — Tool selection must match the technology under test.

---

## Trap 3: Using Record-and-Playback for Production

**Trap:** Recorded scripts are unmaintainable. Use them for prototyping, not production automation.

**Example question:**
> A team records 100 UI tests and plans to run them in CI. The risk is:
>
> A. No risk — recording is efficient
> B. Recorded scripts break with every UI change and cannot be easily maintained
> C. Only slower execution
> D. Only more storage

**Correct answer:** B — Record-and-playback creates unmaintainable scripts.

---

## Trap 4: Hard-Coding All Test Data

**Trap:** Hard-coded data makes tests brittle and prevents data-driven execution.

**Example question:**
> Every test script contains its own username and password. The problem is:
>
> A. No problem — self-contained tests are good
> B. Changing credentials requires editing every script; data should be externalized
> C. Only that tests are longer
> D. Only that tests run slower

**Correct answer:** B — Data should be externalized for maintainability.

---

## Trap 5: Ignoring Configuration Management

**Trap:** Tests must run across environments. Hard-coded URLs and credentials break portability.

**Example question:**
> A test connects to `https://prod.example.com` directly in the script. When run in staging:
>
> A. It works correctly
> B. It connects to production from staging, which is dangerous and incorrect
> C. Only runs slower
> D. Only needs more memory

**Correct answer:** B — Environment-specific values must be configurable, not hard-coded.
