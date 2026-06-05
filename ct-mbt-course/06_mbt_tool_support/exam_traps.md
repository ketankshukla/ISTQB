# Chapter 6 — MBT Tool Support: Exam Traps

## Trap 1: Thinking Tool Cost Is the Only Selection Criterion

**Trap:** Fit for purpose, integration capabilities, and support quality are equally or more important than price.

**Example question:**
> A team selects the cheapest MBT tool without checking whether it supports their modeling notation. The likely result is:
>
> A. Perfect integration at low cost
> B. The tool may not support their models, requiring expensive workarounds or migration
> C. They saved money, which is the only important factor
> D. Cheap tools are always the best tools

**Correct answer:** B — Price alone is insufficient. The tool must fit the team's modeling notation and integration needs.

---

## Trap 2: Confusing Modeling Tools and Test Generation Tools

**Trap:** Modeling tools create/edit models. Test generation tools derive tests from models. They are different categories and may be separate products.

**Example question:**
> A team uses Enterprise Architect to create UML models and then manually writes test cases. They are missing:
>
> A. A better modeling tool
> B. A test generation tool to automatically derive tests from the models
> C. More training on Enterprise Architect
> D. A different modeling notation

**Correct answer:** B — Modeling tools create models; test generation tools derive tests. The team needs the latter.

---

## Trap 3: Thinking Generated Tests Should Be Versioned

**Trap:** The model is the source of truth. Generated tests are artifacts that can be reproduced. Version the model, not the generated tests.

**Example question:**
> A team versions both their models and their generated test scripts in git. The BEST practice is:
>
> A. Version everything to be safe
> B. Version the models (source of truth) but not the generated tests (reproducible artifacts)
> C. Only version generated tests
> D. Do not version anything

**Correct answer:** B — Models are the source of truth. Generated tests are reproducible from models and should not be versioned separately.

---

## Trap 4: Thinking MBT Tools Replace Test Execution Tools

**Trap:** MBT tools generate tests. Test execution tools (Selenium, JUnit, etc.) run them. They work together.

**Example question:**
> A team expects their MBT generation tool to also execute UI tests against the browser. This expectation is:
>
> A. Reasonable — all MBT tools include test execution
> B. Often incorrect — generation and execution are typically separate tools that integrate
> C. Required by ISTQB
> D. Only true for open-source tools

**Correct answer:** B — Generation and execution are often separate. Integration between them is key.

---

## Trap 5: Ignoring CI/CD Integration Requirements

**Trap:** MBT tools must integrate with existing CI/CD pipelines. A tool that cannot run in a pipeline may be unusable for continuous testing.

**Example question:**
> A team selects an MBT tool with an excellent GUI but no command-line interface or API. Their CI/CD pipeline cannot trigger test generation automatically. The problem is:
>
> A. They should manually run the GUI every night
> B. The tool lacks CI/CD integration, which is critical for continuous testing
> C. CI/CD pipelines are not needed for MBT
> D. They should buy more monitors to keep the GUI open

**Correct answer:** B — CI/CD integration (command-line, API) is essential for continuous testing and automation.
