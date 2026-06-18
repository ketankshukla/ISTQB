# 🪤 Chapter 2 — Performance Test Types and Objectives: Exam Traps

## 🪤 Trap 1: Load Testing Equals Performance Testing

**Trap:** Load testing is one type; performance testing is the umbrella term.

**Example question:**
> Load testing and performance testing are interchangeable terms. This is:
>
> A. Correct — they mean the same thing
> B. Incorrect — performance testing is the umbrella term; load testing is one specific type
> C. Only for web applications
> D. Only for databases

**Correct answer:** B — Performance testing includes multiple types.

---

## 🪤 Trap 2: Stress Testing is Only for Breaking the System

**Trap:** Stress testing also tests recovery, error handling, and graceful degradation.

**Example question:**
> The only purpose of stress testing is to crash the system. This is:
>
> A. Correct — crashing reveals the limit
> B. Incorrect — stress testing also evaluates recovery behavior, error handling, and data integrity under extreme load
> C. Only for new systems
> D. Only for legacy systems

**Correct answer:** B — Stress testing evaluates more than the breaking point.

---

## 🪤 Trap 3: Spike and Stress Testing are the Same

**Trap:** Spike = sudden increase; Stress = sustained overload. Different patterns, different purposes.

**Example question:**
> Spike testing and stress testing use the same load pattern. This is:
>
> A. Correct — both use high load
> B. Incorrect — spike testing uses sudden, short bursts; stress testing uses sustained overload
> C. Only for APIs
> D. Only for websites

**Correct answer:** B — Different load patterns.

---

## 🪤 Trap 4: Endurance Testing is the Same as Load Testing

**Trap:** Endurance tests for long durations to detect memory leaks and gradual degradation.

**Example question:**
> Endurance testing is just load testing run for a longer time. This is:
>
> A. Correct — duration is the only difference
> B. Incorrect — endurance testing specifically targets memory leaks, resource depletion, and gradual performance degradation not seen in short load tests
> C. Only for databases
> D. Only for memory-intensive apps

**Correct answer:** B — Endurance has specific objectives beyond load.

---

## 🪤 Trap 5: Scalability Testing Only Tests Adding Servers

**Trap:** Scalability includes both horizontal (more servers) and vertical (more power per server) scaling.

**Example question:**
> Scalability testing only evaluates adding more servers. This is:
>
> A. Correct — horizontal scaling is the only option
> B. Incorrect — scalability testing evaluates both horizontal (more servers) and vertical (upgrading existing servers) scaling
> C. Only for cloud
> D. Only for on-premise

**Correct answer:** B — Both horizontal and vertical scaling.
