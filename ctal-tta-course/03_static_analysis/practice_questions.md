# Chapter 3 — Static Analysis: Practice Questions

---

### Q1 (TTA-3.1, K2)

Which of the following is a characteristic of static analysis?

A. It requires executing the code
B. It examines code without executing it
C. It measures runtime performance
D. It tests user interactions

---

### Q2 (TTA-3.2, K3)

What is the cyclomatic complexity of the following code?
```
if (a > 0) {
    if (b > 0) {
        x = 1;
    } else {
        x = 2;
    }
} else {
    x = 3;
}
```

A. 2
B. 3
C. 4
D. 5

---

### Q3 (TTA-3.1, K2)

Which defect is LEAST likely to be found by static analysis?

A. Unreachable code
B. Memory leak during runtime
C. Unused variable
D. Potential null pointer dereference

---

### Q4 (TTA-3.3, K2)

A static analysis tool reports an issue that is not actually a defect. This is called:

A. A true positive
B. A false positive
C. A false negative
D. A true negative

---

### Q5 (TTA-3.2, K3)

A function has cyclomatic complexity of 25. According to common guidelines, this indicates:

A. Low risk
B. Moderate risk
C. High risk
D. Very high risk, refactor recommended

---

### Q6 (TTA-3.1, K2)

SAST (Static Application Security Testing) is used to:

A. Test application performance under load
B. Find security vulnerabilities by analyzing source code
C. Test the user interface
D. Monitor application behavior in production

---

### Q7 (TTA-3.3, K3)

A code file has 200 physical lines: 50 blank lines, 40 comment lines, and the rest are executable statements. The approximate logical LOC is:

A. 200
B. 160
C. 110
D. 90

---

### Q8 (TTA-3.2, K2)

Which of the following increases cyclomatic complexity by 1?

A. Adding a variable declaration
B. Adding an if statement
C. Adding a comment
D. Adding a blank line

---

### Q9 (TTA-3.1, K2)

Which of the following CANNOT be detected by static analysis?

A. Coding standard violations
B. Unreachable code
C. Runtime performance bottlenecks
D. Potential buffer overflows

---

### Q10 (TTA-3.2, K3)

The formula for cyclomatic complexity V(G) = E - N + 2P uses:

A. E = edges, N = nodes, P = paths
B. E = edges, N = nodes, P = connected components
C. E = errors, N = nodes, P = paths
D. E = edges, N = numbers, P = predicates

---

### Q11 (TTA-3.3, K2)

A maintainability index of 90 indicates:

A. Very difficult to maintain
B. Moderately maintainable
C. Highly maintainable
D. Unmaintainable

---

### Q12 (TTA-3.2, K3)

A control flow graph has 12 edges, 10 nodes, and 1 connected component. The cyclomatic complexity is:

A. 2
B. 3
C. 4
D. 5

---

### Q13 (TTA-3.1, K2)

Which tool category performs real-time code analysis as the developer types?

A. Build-integrated static analysis
B. IDE-integrated static analysis
C. Dynamic analysis profiler
D. Load testing tool

---

### Q14 (TTA-3.3, K3)

A developer is deciding whether to fix a static analysis finding. Which severity should be fixed BEFORE release?

A. Info
B. Minor
C. Major
D. Blocker

---

### Q15 (TTA-3.2, K2)

Cyclomatic complexity measures:

A. The number of lines of code
B. The number of linearly independent paths through code
C. The execution speed of the code
D. The number of bugs in the code

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Static analysis examines code without executing it. Execution is required for dynamic analysis.

### Q2
**Answer: B**

**Rationale:** Two if statements = 2 decision points. V(G) = 2 + 1 = 3.

### Q3
**Answer: B**

**Rationale:** Memory leaks occur at runtime and cannot be detected without executing the code.

### Q4
**Answer: B**

**Rationale:** A false positive is when the tool reports a finding that is not a real defect.

### Q5
**Answer: C**

**Rationale:** Complexity 21-50 is high risk. At 25, the function is complex and requires careful testing.

### Q6
**Answer: B**

**Rationale:** SAST finds security vulnerabilities by analyzing source code without execution.

### Q7
**Answer: C**

**Rationale:** Logical LOC = 200 - 50 blanks - 40 comments = 110 executable lines.

### Q8
**Answer: B**

**Rationale:** An if statement adds a decision point, increasing cyclomatic complexity by 1.

### Q9
**Answer: C**

**Rationale:** Runtime performance bottlenecks require execution to measure. Static analysis cannot detect them.

### Q10
**Answer: B**

**Rationale:** E = edges, N = nodes, P = connected components in the control flow graph.

### Q11
**Answer: C**

**Rationale:** MI > 85 is highly maintainable. MI <= 65 is difficult to maintain.

### Q12
**Answer: C**

**Rationale:** V(G) = 12 - 10 + 2(1) = 4.

### Q13
**Answer: B**

**Rationale:** IDE-integrated tools provide real-time feedback as developers type.

### Q14
**Answer: D**

**Rationale:** Blocker severity indicates critical issues that must be fixed before release.

### Q15
**Answer: B**

**Rationale:** Cyclomatic complexity measures the number of linearly independent paths through the code.
