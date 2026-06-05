# CT-BD Exam Strategy

## Exam Format

| Parameter | Value |
|-----------|-------|
| Total questions | 40 |
| Duration | 60 minutes |
| Time per question | 1.5 minutes |
| Pass mark | 65% (26/40) |
| Target score | 32+/40 (80%+) |

---

## Time Budget

| Phase | Time | Action |
|-------|------|--------|
| Quick pass | 45 min | Answer all easy/medium questions |
| Flagged review | 10 min | Return to flagged questions |
| Final check | 5 min | Verify no blanks, review uncertain answers |

**If stuck on a question:** Mark it, move on, return later. Never spend more than 2.5 minutes on one question.

---

## Chapter Weighting and Tactics

| Chapter | Weight | K-Levels | Tactics |
|---------|--------|----------|---------|
| 1 — Introduction | ~15% | K1-K2 | Memorize 5 Vs, characteristics, testing differences |
| 2 — Architecture | ~15% | K2-K3 | Know Hadoop/Spark components, data flow, layer responsibilities |
| 3 — Data Quality | ~20% | K2-K3 | Master data quality dimensions, validation rules, profiling |
| 4 — Functional Testing | ~20% | K2-K3 | Understand ETL/ELT testing, MapReduce/Spark job testing, report validation |
| 5 — Performance Testing | ~15% | K2-K3 | Know benchmarks, throughput, latency, cluster scaling |
| 6 — Tools and Automation | ~15% | K2 | Recognize tools, frameworks, and CI/CD integration |

---

## K-Level Patterns

**K1 (Remember):** Direct recall of definitions
- Example: "The 5 Vs of Big Data include Volume, Velocity, Variety, Veracity, and..."
- Strategy: Memorize glossary terms precisely

**K2 (Understand):** Comprehend concepts and explain
- Example: "Why is data quality testing more challenging in Big Data than in traditional databases?"
- Strategy: Focus on "why" and "how" in lessons

**K3 (Apply):** Use knowledge in a scenario
- Example: "Given an ETL pipeline with the following stages, which test types should be applied at each stage?"
- Strategy: Practice case studies and worked examples

---

## Common Distractor Patterns

1. **Traditional vs. Big Data assumptions**
   - Trap: Applying traditional database testing approaches directly to Big Data
   - Reality: Big Data requires different approaches (schema-on-read, distributed processing)

2. **Confusing ETL and ELT**
   - Trap: Thinking they are the same
   - Reality: ETL transforms before loading; ELT loads first then transforms

3. **Data quality dimension confusion**
   - Trap: Mixing up completeness, accuracy, consistency, timeliness
   - Reality: Each dimension has distinct meaning and test approach

4. **Tool misattribution**
   - Trap: Assigning wrong function to tools (e.g., Hive for real-time processing)
   - Reality: Know each tool's primary purpose

5. **Performance metric misinterpretation**
   - Trap: Confusing throughput with latency
   - Reality: Throughput = volume per time; Latency = time per unit

---

## Pre-Exam Checklist

- [ ] All 6 chapters completed with practice scores 75%+
- [ ] All 3 case studies completed with model answers reviewed
- [ ] All 3 mock exams completed with scores 28+/40 improving to 32+/40
- [ ] Glossary terms reviewed twice
- [ ] Exam traps from all chapters reviewed
- [ ] Weak areas identified and re-studied

---

## During the Exam

1. **Read the full question** before looking at answers
2. **Eliminate obviously wrong answers** first
3. **Look for key phrases** that distinguish similar concepts
4. **For scenario questions:** Identify the core issue before selecting
5. **Don't overthink** — first instinct is often correct for K1/K2
6. **Mark uncertain questions** and return with fresh perspective

## Post-Exam

- Note any unexpected topics for future learners
- Celebrate — you've prepared thoroughly!
