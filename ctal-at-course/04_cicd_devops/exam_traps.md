# Chapter 4 — CI/CD, DevOps: Exam Traps

## Trap 1: Confusing Continuous Delivery with Continuous Deployment

**Trap:** Continuous Delivery = code is always releasable, but deployment may require manual approval. Continuous Deployment = every passing commit goes to production automatically.

**Example question:**
> A pipeline automatically builds, tests, and deploys to staging. A human approves before production deployment. This is:
>
> A. Continuous Integration only
> B. Continuous Delivery
> C. Continuous Deployment
> D. Manual deployment

**Correct answer:** B — Automated through staging with human approval for production is Continuous Delivery.

---

## Trap 2: Thinking CI Is Just Automated Builds

**Trap:** CI includes automated testing, not just compilation. A build that compiles but has failing tests is not "integrated."

**Example question:**
> A team runs automated compilation on every commit but does not run tests. This is:
>
> A. Full Continuous Integration
> B. Automated compilation only, not CI
> C. Continuous Deployment
> D. DevOps

**Correct answer:** B — CI requires automated builds AND automated tests. Compilation alone is not CI.

---

## Trap 3: Confusing DevOps with a Tool or Role

**Trap:** DevOps is a culture and set of practices, not a job title or a specific tool. Saying "we use Jenkins, so we do DevOps" is incorrect.

**Example question:**
> A company hires a "DevOps Engineer" to manage Jenkins and deployments but keeps development and operations teams separate with no collaboration. This is:
>
> A. True DevOps
> B. Using DevOps tools without DevOps culture
> C. Continuous Deployment
> D. Agile transformation

**Correct answer:** B — DevOps requires cultural change (collaboration, shared responsibility), not just tools.

---

## Trap 4: Thinking Production Deployment Means Testing Is Done

**Trap:** Testing continues in production through monitoring, synthetic tests, and feature flags. Production is not the end of testing.

**Example question:**
> After deploying to production, the team should:
>
> A. Consider testing complete and move to the next feature
> B. Monitor production metrics and run smoke tests
> C. Delete all test environments to save costs
> D. Disable all automated tests

**Correct answer:** B — Production monitoring and smoke tests are part of continuous testing.

---

## Trap 5: Setting Quality Gates That Are Too Strict or Too Lenient

**Trap:** Gates that block on every minor issue slow teams down. Gates that allow critical issues through defeat the purpose.

**Example question:**
> A team blocks production deployment if any code style violation is found. The MOST likely consequence is:
>
> A. Higher code quality
> B. Developers will bypass or ignore the pipeline
> C. Fewer production defects
> D. Faster delivery

**Correct answer:** B — Overly strict gates on minor issues encourage bypassing. Block on critical issues; warn on minor ones.
