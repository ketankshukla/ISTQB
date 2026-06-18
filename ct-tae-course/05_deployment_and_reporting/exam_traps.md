# 🪤 Chapter 5 — Deployment and Reporting: Exam Traps

## 📊 Trap 1: Thinking High Coverage Means High Quality

**Trap:** Code coverage measures what code was executed, not whether it behaves correctly. 100% coverage with poor assertions is worthless.

**Example question:**
> A team achieves 100% code coverage. This means:
>
> A. All defects have been found
> B. All code was executed by tests, but defects may still exist
> C. No further testing is needed
> D. The software is guaranteed to be correct

**Correct answer:** B — Coverage = executed, not correct. Defects in logic that was executed will still be missed if assertions are inadequate.

---

## 🪤 Trap 2: Confusing Big-Bang with Pilot Deployment

**Trap:** Big-bang = everyone at once. Pilot = small group first. Incremental = gradual expansion.

**Example question:**
> A team deploys a new TAS to one project team first, gathers feedback, then plans to expand to other teams. This is:
>
> A. Big-bang deployment
> B. Pilot deployment
> C. Incremental deployment
> D. Phased retirement

**Correct answer:** B — Deploying to one team first for feedback is a pilot. Incremental would be gradual expansion without the explicit feedback loop.

---

## 🪤 Trap 3: Reporting the Same Dashboard to All Stakeholders

**Trap:** Different stakeholders need different information. Management needs ROI and trends. Testers need failure details. Developers need build status.

**Example question:**
> A TAE creates one detailed technical dashboard for all stakeholders. Management finds it confusing. The problem is:
>
> A. Management does not understand testing
> B. The dashboard is not tailored to the audience's needs
> C. The dashboard has too much data
> D. The automation is not working

**Correct answer:** B — Dashboards must be stakeholder-specific. Management needs high-level metrics, not technical details.

---

## 🪤 Trap 4: Ignoring Flakiness as "Just Part of Automation"

**Trap:** Flaky tests are a serious problem. They erode trust, waste investigation time, and mask real defects. They should be fixed, not tolerated.

**Example question:**
> A team has 10% flaky tests and says "that's normal for UI automation." The BEST response is:
>
> A. Agree — UI tests are always flaky
> B. Disagree — flaky tests undermine trust and should be fixed; target < 1%
> C. Ignore it since the tests mostly pass
> D. Remove all UI tests to eliminate flakiness

**Correct answer:** B — Flakiness is not acceptable. It wastes time, erodes trust, and can mask real defects. The target should be < 1%.

---

## 🪤 Trap 5: Calculating ROI Without Including All Costs

**Trap:** ROI must include TCO (license, training, infrastructure, maintenance). Ignoring maintenance makes ROI look better than it is.

**Example question:**
> A TAE reports ROI based only on initial tool purchase and development time. The reported ROI is likely:
>
> A. Accurate
> B. Overestimated because maintenance costs are excluded
> C. Underestimated
> D. Irrelevant to management

**Correct answer:** B — Maintenance is typically 30-70% of automation effort. Excluding it makes ROI unrealistically high.
