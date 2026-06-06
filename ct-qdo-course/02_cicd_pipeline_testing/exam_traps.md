# Chapter 2 — CI/CD Pipeline Testing: Exam Traps

## Trap 1: Running All Tests at Every Stage

**Trap:** Unit tests are fast; integration and acceptance tests are slow. Run fast tests early, slow tests later.

**Example question:**
> A pipeline runs unit tests, integration tests, and end-to-end tests in parallel at the first stage. The issue is:
>
> A. Tests are too fast
> B. Slow tests delay feedback; unit tests should run first for quick failure detection
> C. There are too few tests
> D. Parallel execution is always wrong

**Correct answer:** B — Fast tests first; slow tests later in pipeline.

---

## Trap 2: Confusing Blue-Green with Canary

**Trap:** Blue-green = two full environments, instant switch. Canary = gradual traffic shift to new version.

**Example question:**
> A deployment routes 5% of users to the new version, monitors for 30 minutes, then increases to 25%. This is:
>
> A. Blue-green deployment
> B. Canary deployment
> C. Rolling deployment
> D. Feature flag release

**Correct answer:** B — Gradual percentage increase = canary.

---

## Trap 3: Thinking Quality Gates Are Optional

**Trap:** Quality gates prevent defective code from progressing. Bypassing them defeats the purpose.

**Example question:**
> A developer overrides a failing quality gate because "the change is small and safe." The risk is:
>
> A. No risk — small changes are always safe
> B. Defective code reaches production, undermining pipeline reliability
> C. Only slower deployments
> D. Only more documentation

**Correct answer:** B — Overriding gates risks production defects.

---

## Trap 4: Ignoring Rollback Testing

**Trap:** Rollback must be tested, not just documented. Failed rollbacks can be worse than the original issue.

**Example question:**
> A team tests deployment but never tests rollback. The risk is:
>
> A. No risk — rollbacks always work
> B. If deployment fails, recovery may be slower or impossible, extending downtime
> C. Only cosmetic issues
> D. Only performance issues

**Correct answer:** B — Untested rollbacks may fail when needed most.

---

## Trap 5: Confusing Feature Flags with Deployment

**Trap:** Deploying code behind a flag is not the same as releasing the feature. Both states (on/off) must be tested.

**Example question:**
> Code with a feature flag is deployed to production with the flag OFF. The feature:
>
> A. Is fully released to all users
> B. Is deployed but not yet released; only users with flag ON see it
> C. Cannot be tested
> D. Is automatically enabled after 24 hours

**Correct answer:** B — Deployment ≠ release with feature flags.
