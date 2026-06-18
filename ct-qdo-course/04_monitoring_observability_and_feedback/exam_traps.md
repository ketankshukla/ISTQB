# 🪤 Chapter 4 — Monitoring, Observability, and Feedback: Exam Traps

## 🪤 Trap 1: Confusing Monitoring with Observability

**Trap:** Monitoring = predefined metrics. Observability = ability to explore unknown issues. Observability requires monitoring but goes beyond it.

**Example question:**
> A team has dashboards showing CPU, memory, and request rates. When an unknown issue occurs, they cannot determine the root cause. They lack:
>
> A. More dashboards
> B. Observability — the ability to explore unknown issues through correlated logs, metrics, and traces
> C. More monitoring tools
> D. More servers

**Correct answer:** B — Observability = exploring unknown issues, not just predefined metrics.

---

## 🪤 Trap 2: Alerting on Symptoms, Not Causes

**Trap:** Alert on user-impacting symptoms (high error rate, slow responses). Don't alert on every internal metric.

**Example question:**
> A team pages the on-call engineer every time any server CPU exceeds 70%. The problem is:
>
> A. They are monitoring effectively
> B. Alert fatigue — CPU alone doesn't indicate user impact; should alert on symptoms like error rate or latency
> C. They need more servers
> D. They need fewer dashboards

**Correct answer:** B — Alert on user-impacting symptoms, not every metric threshold.

---

## 🪤 Trap 3: Thinking Error Budgets Mean Lower Quality

**Trap:** Error budgets accept some unreliability to enable faster innovation. They don't excuse poor quality.

**Example question:**
> A 99.9% SLO means the team:
>
> A. Can ignore all errors
> B. Has an error budget of 0.1% and should pause releases if the budget is exhausted
> C. Doesn't need monitoring
> D. Should aim for 100% anyway

**Correct answer:** B — Error budget = allowed unreliability; manage it consciously.

---

## 🪤 Trap 4: Treating Chaos Engineering as Reckless

**Trap:** Chaos engineering is controlled, measured, and safe. It has hypotheses, abort criteria, and blast radius controls.

**Example question:**
> Chaos engineering in production is:
>
> A. Reckless and dangerous
> B. A disciplined practice with controlled experiments, abort criteria, and minimal blast radius
> C. Only for small companies
> D. Only for testing, never production

**Correct answer:** B — Chaos engineering = controlled, safe, disciplined experiments.

---

## 🪤 Trap 5: Ignoring Production Feedback

**Trap:** Production data is the ultimate validation. Ignoring it misses real-world issues.

**Example question:**
> A team passes all automated tests but users report frequent timeouts in production. The issue is:
>
> A. Users are wrong
> B. Tests missed real-world conditions (network latency, load patterns); production feedback is essential
> C. Tests are too fast
> D. Only UI tests matter

**Correct answer:** B — Production feedback validates real-world behavior tests may miss.
