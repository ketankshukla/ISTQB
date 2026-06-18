# 🪤 Chapter 1 — Introduction to DevOps and Quality: Exam Traps

## 🪤 Trap 1: Thinking DevOps is Only About Tools

**Trap:** DevOps is primarily a cultural movement. Tools enable it, but culture (CALMS) is foundational.

**Example question:**
> A company buys Jenkins, Docker, and Kubernetes but keeps separate dev and ops teams with blame-oriented post-mortems. They have:
>
> A. Full DevOps
> B. Tools without culture; not true DevOps
> C. Faster deployments automatically
> D. No need for testers

**Correct answer:** B — DevOps requires cultural change, not just tools.

---

## 🪤 Trap 2: Confusing CI with CD

**Trap:** Continuous Integration = build and test. Continuous Delivery/Deployment = release to production. Different concepts.

**Example question:**
> A team automatically builds and tests code on every commit but requires manual approval for production release. They have:
>
> A. Continuous Integration only
> B. Continuous Delivery (to staging) but not Continuous Deployment (to production)
> C. Full Continuous Deployment
> D. No automation

**Correct answer:** B — CI = automatic build/test. CD = automatic deployment. Manual approval means not full CD.

---

## 🪤 Trap 3: Thinking DevOps Eliminates Testing

**Trap:** DevOps shifts testing left and automates it, but does not eliminate the need for quality assurance.

**Example question:**
> In a mature DevOps team, the role of testers becomes:
>
> A. Unnecessary — developers do everything
> B. Evolved into quality coaches, automation engineers, and exploratory testers
> C. Only manual UI testing
> D. Only documentation

**Correct answer:** B — Testers evolve their role; quality remains critical.

---

## 🪤 Trap 4: Confusing Shift-Left with Shift-Right

**Trap:** Shift-left = testing earlier in lifecycle. Shift-right = testing and monitoring in production.

**Example question:**
> Running production A/B tests and analyzing real user behavior is an example of:
>
> A. Shift-left testing
> B. Shift-right testing
> C. Unit testing
> D. Static analysis

**Correct answer:** B — Production monitoring and A/B testing = shift-right.

---

## 🪤 Trap 5: Ignoring the Three Ways

**Trap:** The Three Ways (Flow, Feedback, Learning) are core to DevOps. Each has specific testing implications.

**Example question:**
> Implementing blameless post-mortems after production incidents supports:
>
> A. The First Way (Flow)
> B. The Second Way (Feedback)
> C. The Third Way (Continual Learning)
> D. None of the above

**Correct answer:** C — Blameless post-mortems = continual learning and improvement.
