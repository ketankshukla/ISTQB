# CT-PT Exam Strategy

This document contains tactics, time management advice, and trap-avoidance strategies for the CT-PT exam.

---

## Exam Format Overview

| Parameter | Value |
|-----------|-------|
| Questions | 40 multiple choice |
| Duration | 60 minutes |
| Pass mark | 65% (26 correct) |
| Question style | Single best answer |
| Book type | Closed book |

---

## Time Budget

| Strategy | Time |
|----------|------|
| Total time | 60 minutes |
| Per question (average) | 1.5 minutes |
| Time for 40 questions | 50 minutes |
| Buffer for review | 10 minutes |

**Tactic:** If a question takes more than 2 minutes, flag it and move on. Return during the buffer time.

---

## Chapter Weighting and Focus Areas

| Chapter | Weight | Approx. Questions | Key Focus |
|---------|--------|-------------------|-----------|
| 1. Introduction to Performance Testing | ~15% | ~6 | Definitions, objectives, performance characteristics |
| 2. Types of Performance Testing | ~20% | ~8 | Load, stress, endurance, spike, volume, scalability |
| 3. Performance Test Planning and Design | ~20% | ~8 | Strategy, workloads, KPIs, test data, environment |
| 4. Performance Test Execution and Monitoring | ~15% | ~6 | Ramp-up, steady state, ramp-down, monitoring, bottlenecks |
| 5. Performance Test Analysis and Reporting | ~15% | ~6 | Interpreting results, root cause analysis, tuning |
| 6. Performance Testing Tools and Automation | ~15% | ~6 | Tool categories, scripting, CI/CD, cloud testing |

**Study priority:** Chapters 2 and 3 carry the most weight.

---

## K-Level Patterns

| K-Level | Definition | How It Appears | Strategy |
|---------|-----------|----------------|----------|
| K2 | Understand, explain | "Which of the following is...?" | Recall concepts accurately |
| K3 | Apply | "Given a scenario, which test type...?" | Match scenario to appropriate test type |
| K4 | Analyze | "Analyze results and recommend..." | Evaluate data, eliminate weaker options |

**Tip:** K3 and K4 questions often present scenarios with metrics or graphs. Read carefully and match to the correct concept.

---

## Chapter-Specific Tactics

### Chapter 1: Introduction to Performance Testing
- Know the definition: evaluating speed, scalability, and stability under workload
- Understand performance as a non-functional characteristic
- Know the difference between performance testing and functional testing
- Understand stakeholders: business (response time), operations (resource usage), developers (code optimization)

### Chapter 2: Types of Performance Testing
- **Load testing:** Normal expected load, validates performance under expected conditions
- **Stress testing:** Beyond normal load, finds breaking point, tests recovery
- **Endurance (soak) testing:** Sustained load over time, finds memory leaks, resource exhaustion
- **Spike testing:** Sudden extreme load increase, tests reaction to unexpected surges
- **Volume testing:** Large data volumes, tests database performance with big datasets
- **Scalability testing:** Adding resources/users, measures how system scales
- **Configuration testing:** Different hardware/software configurations
- **Isolation testing:** Single component under test, isolates performance issues

**Exam trap:** Many questions mix up these types. Know the trigger (what condition defines each test type).

### Chapter 3: Performance Test Planning and Design
- Know how to define test objectives and scope
- Understand workload modeling: user profiles, transaction mix, think time
- Know KPIs: response time, throughput, resource utilization, error rate, concurrent users
- Understand test data requirements: realistic data, data volume, data variation
- Know environment sizing: production-like, scaled-down, scaled-up considerations

### Chapter 4: Performance Test Execution and Monitoring
- Know the test phases: initialization, ramp-up, steady state, ramp-down, teardown
- Understand what to monitor: CPU, memory, disk I/O, network, database, application metrics
- Know bottleneck indicators: CPU > 80%, memory growing unbounded, disk queue length, network saturation
- Understand test execution constraints: time windows, environment availability, data reset needs

### Chapter 5: Performance Test Analysis and Reporting
- Know how to compare results against acceptance criteria
- Understand root cause analysis: code, database, network, infrastructure
- Know tuning categories: hardware, software, configuration, architecture
- Understand reporting audiences: technical (developers, ops) vs. business (management)
- Know the difference between average, median, and percentile (90th, 95th, 99th) response times

### Chapter 6: Performance Testing Tools and Automation
- Know tool categories: commercial (LoadRunner, NeoLoad), open-source (JMeter, Gatling), cloud (BlazeMeter, k6 Cloud)
- Understand scripting: record/playback vs. hand-coding, parameterization, correlation
- Know CI/CD integration: automated performance gates, trend analysis
- Understand cloud-based testing: on-demand load generation, geographic distribution, cost considerations

---

## Distractor Patterns

| Pattern | Example | How to Spot It |
|---------|---------|--------------|
| Load vs. Stress confusion | "Load testing finds the breaking point" | Load = normal; Stress = beyond normal/breaking point |
| Endurance vs. Spike confusion | "Endurance tests sudden load increases" | Endurance = sustained; Spike = sudden |
| Average vs. percentile | "Average response time is the best metric for SLAs" | Percentiles (90th/95th) better for SLAs |
| One tool does everything | "A single tool handles all performance test types" | Different tools may be needed for different types |
| Performance testing replaces functional | "Performance testing validates correctness" | Performance = speed/stability; Functional = correctness |
| Monitoring is optional | "Monitoring during tests is not necessary" | Monitoring is essential for bottleneck identification |

---

## Before the Exam

**1 Week Before:**
- Re-read all `exam_traps.md` files
- Re-do all questions you previously missed
- Take Mock Exam 3 under timed conditions

**1 Day Before:**
- Light review only — no new material
- Review glossary terms
- Read the `exam_traps.md` summaries
- Get 7-8 hours of sleep

**Morning Of:**
- Eat a balanced breakfast
- Arrive early / set up your exam space
- Bring ID, water, and confidence

---

## During the Exam

**Question Reading:**
1. Read the question stem completely
2. Identify what is being asked (best test type, first step, most appropriate)
3. Read all four options before selecting
4. Eliminate clearly wrong answers first
5. Choose the best remaining answer

**Scenario Questions:**
- Underline key facts: load profile, duration, metrics observed
- Identify the chapter/concept being tested
- Eliminate answers that contradict the scenario
- Pick the most appropriate answer (not the perfect one)

**Metric Questions:**
- Check units (seconds vs. milliseconds, MB vs. GB)
- Consider whether average or percentile is more appropriate
- Think about what the metric tells you about system behavior

**Flagging Strategy:**
- Flag questions you are uncertain about
- Never leave a question blank (there is no negative marking)
- Use the 10-minute buffer to review flagged questions
- Change an answer only if you find clear evidence — first instinct is often correct

---

## Post-Exam

Whether you pass or not:
- Note which questions were difficult
- Identify weak chapters for future study
- Update the `PROGRESS_TRACKER.md` with your score

If you did not pass, use the feedback report to target your weak areas and re-take.
