# ❓ Chapter 2 — White-Box Test Techniques: Practice Questions

---

### 🔷 Q1 (TTA-2.1, K2)

What does statement coverage measure?

A. Whether every decision outcome (true/false) has been executed
B. Whether every executable statement has been executed at least once
C. Whether every path through the code has been executed
D. Whether every function has been called at least once

---

### 🔷 Q2 (TTA-2.1, K3)

A function contains:
```
if (x > 0) {
    y = 1;
} else {
    y = 2;
}
return y;
```
A test suite with only the test case `x = 5` achieves what coverage?

A. 100% statement coverage and 100% branch coverage
B. 100% statement coverage and 50% branch coverage
C. 50% statement coverage and 50% branch coverage
D. 50% statement coverage and 100% branch coverage

---

### 🔷 Q3 (TTA-2.3, K3)

What is the cyclomatic complexity of a function with 3 `if` statements and no loops?

A. 3
B. 4
C. 6
D. 8

---

### 🔷 Q4 (TTA-2.1, K2)

Which coverage criterion is stronger than branch coverage but weaker than path coverage?

A. Statement coverage
B. MC/DC
C. Data flow coverage
D. There is no such criterion

---

### 🔷 Q5 (TTA-2.1, K3)

For the decision `(A OR B)`, which set of test cases achieves MC/DC?

A. A=T, B=T and A=F, B=F
B. A=F, B=F and A=F, B=T and A=T, B=F
C. A=T, B=T and A=T, B=F and A=F, B=T
D. A=F, B=F and A=T, B=T

---

### 🔷 Q6 (TTA-2.3, K3)

A control flow graph has 8 nodes and 10 edges. The cyclomatic complexity is:

A. 2
B. 3
C. 4
D. 5

---

### 🔷 Q7 (TTA-2.1, K2)

Which statement about code coverage is TRUE?

A. 100% path coverage implies 100% branch coverage
B. 100% statement coverage implies 100% branch coverage
C. 100% branch coverage implies 100% path coverage
D. Coverage percentage is directly proportional to the number of defects found

---

### 🔷 Q8 (TTA-2.2, K3)

In data flow testing, a "definition-use pair" (DU pair) is:

A. A pair of test cases that define and use the same input
B. A pair of locations where a variable is assigned a value and later used
C. A pair of functions that call each other
D. A pair of decisions that depend on each other

---

### 🔷 Q9 (TTA-2.5, K2)

MC/DC (Modified Condition/Decision Coverage) is required for:

A. All software systems
B. Safety-critical systems such as aviation and automotive
C. Web applications only
D. Mobile applications only

---

### 🔷 Q10 (TTA-2.3, K3)

A function has a cyclomatic complexity of 15. According to common guidelines, this indicates:

A. Low risk, simple function
B. Moderate risk, manageable complexity
C. High risk, complex function requiring careful testing
D. Very high risk, function should be refactored immediately

---

### 🔷 Q11 (TTA-2.1, K4)

For the decision `(A AND B AND C)`, what is the MINIMUM number of test cases needed for MC/DC?

A. 3
B. 4
C. 6
D. 8

---

### 🔷 Q12 (TTA-2.2, K3)

In data flow testing, an "all-uses" coverage criterion requires:

A. Every variable to be used at least once
B. Every definition-use pair to be exercised at least once
C. Every path to be executed at least once
D. Every statement to be executed at least once

---

### 🔷 Q13 (TTA-2.1, K3)

A test suite achieves 100% branch coverage. Which of the following is guaranteed?

A. 100% statement coverage
B. 100% path coverage
C. No defects remain in the code
D. All boundary conditions have been tested

---

### 🔷 Q14 (TTA-2.3, K3)

The cyclomatic complexity of a simple sequential function with no decisions is:

A. 0
B. 1
C. 2
D. Cannot be determined

---

### 🔷 Q15 (TTA-2.1, K3)

For the code:
```
if (x > 0) {
    if (y > 0) {
        z = 1;
    } else {
        z = 2;
    }
} else {
    z = 3;
}
```
What is the MINIMUM number of test cases needed for 100% branch coverage?

A. 2
B. 3
C. 4
D. 6

---

### 🔷 Q16 (TTA-2.5, K2)

Which coverage criterion is the MOST rigorous (most test cases required)?

A. Statement coverage
B. Branch coverage
C. MC/DC
D. Path coverage

---

### 🔷 Q17 (TTA-2.3, K3)

A control flow graph has 5 nodes, 6 edges, and 1 connected component. The cyclomatic complexity is:

A. 2
B. 3
C. 4
D. 5

---

### 🔷 Q18 (TTA-2.2, K3)

In the code:
```
x = 5;       // line 1
y = x + 1;   // line 2
if (y > 5) { // line 3
    z = y;   // line 4
}
```
Which is a valid DU pair for variable `y`?

A. DEF at line 1, USE at line 3
B. DEF at line 2, USE at line 3
C. DEF at line 3, USE at line 4
D. DEF at line 2, USE at line 1

---

### 🔷 Q19 (TTA-2.1, K2)

A test suite with 100% statement coverage but only 50% branch coverage indicates:

A. The code has no decisions
B. Some decision outcomes were never executed
C. The test suite is too large
D. The code cannot be fully tested

---

### 🔷 Q20 (TTA-2.5, K3)

For the decision `(A OR (B AND C))`, what is the MINIMUM number of test cases for MC/DC?

A. 3
B. 4
C. 5
D. 6

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Statement coverage measures whether every executable statement was executed at least once.

### 🔷 Q2
**Answer: B**

**Rationale:** With x=5, the true branch (y=1) and return are executed. The false branch (y=2) is never executed. All 3 statements are executed, but only 1 of 2 branches.

### 🔷 Q3
**Answer: B**

**Rationale:** Cyclomatic complexity = number of decisions + 1 = 3 + 1 = 4.

### 🔷 Q4
**Answer: B**

**Rationale:** MC/DC is stronger than branch coverage (requires independent condition effect) but weaker than path coverage (doesn't require all paths).

### 🔷 Q5
**Answer: B**

**Rationale:** For MC/DC of (A OR B): Need A=F,B=F (base F), A=F,B=T (B affects outcome), A=T,B=F (A affects outcome). Tests 2 (F,F), 3 (F,T), 4 (T,F) — actually the question says option B is F,F / F,T / T,F which covers MC/DC.

### 🔷 Q6
**Answer: C**

**Rationale:** V(G) = E - N + 2P = 10 - 8 + 2(1) = 4.

### 🔷 Q7
**Answer: A**

**Rationale:** Path coverage implies branch coverage (all paths include all branches). Statement coverage does NOT imply branch coverage.

### 🔷 Q8
**Answer: B**

**Rationale:** A DU pair is where a variable is defined (assigned) and later used, with no intervening redefinition.

### 🔷 Q9
**Answer: B**

**Rationale:** MC/DC is required for safety-critical systems (DO-178C for aviation, ISO 26262 for automotive).

### 🔷 Q10
**Answer: C**

**Rationale:** Complexity 11-20 = moderate risk. Complexity 15 falls in the moderate-to-high range (often classified as high risk at 15+).

### 🔷 Q11
**Answer: B**

**Rationale:** For n conditions, MC/DC minimum is n+1 = 3+1 = 4.

### 🔷 Q12
**Answer: B**

**Rationale:** All-uses coverage requires every definition-use pair to be exercised at least once.

### 🔷 Q13
**Answer: A**

**Rationale:** 100% branch coverage implies 100% statement coverage (all branches contain statements). It does not imply path coverage or zero defects.

### 🔷 Q14
**Answer: B**

**Rationale:** A simple sequential function has cyclomatic complexity = 1 (no decisions + 1 = 0 + 1 = 1).

### 🔷 Q15
**Answer: B**

**Rationale:** Decisions: x>0 (T/F) and y>0 (T/F). Need: x>0=T,y>0=T (z=1); x>0=T,y>0=F (z=2); x>0=F (z=3). That's 3 test cases.

### 🔷 Q16
**Answer: D**

**Rationale:** Path coverage is the most rigorous because it requires every path through the code, which can be exponential.

### 🔷 Q17
**Answer: B**

**Rationale:** V(G) = 6 - 5 + 2(1) = 3.

### 🔷 Q18
**Answer: B**

**Rationale:** y is defined at line 2 (y = x + 1) and used at line 3 (y > 5).

### 🔷 Q19
**Answer: B**

**Rationale:** 100% statement but only 50% branch means some decision outcomes were never executed.

### 🔷 Q20
**Answer: B**

**Rationale:** For 3 conditions, MC/DC minimum is n+1 = 4. However, some sources say it can be done in 4 for (A OR (B AND C)).
