# ❓ Chapter 4 — Practice Questions

22 original ISTQB-style questions. This chapter has extra questions due to its high exam weight and K3 content.

---

## ❓ Questions

### 🔷 Q1 (FL-4.1.1, K2)

Which statement BEST distinguishes black-box techniques from white-box techniques?

A. Black-box techniques require knowledge of the source code; white-box techniques do not
B. Black-box techniques derive tests from specifications without code knowledge; white-box techniques derive tests from the internal structure
C. Black-box techniques are used only at component level; white-box techniques are used only at system level
D. Black-box techniques always find more defects than white-box techniques

---

### 🔷 Q2 (FL-4.2.1, K3)

A form field accepts an integer quantity between 5 and 50 (inclusive). Identify the equivalence partitions and determine the minimum number of test cases for EP coverage.

A. 2 test cases (one valid, one invalid)
B. 3 test cases (below range, in range, above range)
C. 4 test cases (below range, in range, above range, non-integer)
D. 1 test case (any value in the valid range)

---

### 🔷 Q3 (FL-4.2.1, K3)

An input field accepts a person's name. The valid rule is: 2 to 40 alphabetic characters (no digits, no special characters). Which of the following is NOT a valid equivalence partition for invalid inputs?

A. Name with fewer than 2 characters
B. Name containing digits
C. Name with exactly 20 characters (all alphabetic)
D. Name with more than 40 characters

---

### 🔷 Q4 (FL-4.2.2, K3)

A field accepts integer values from 10 to 99 (inclusive). Using two-value boundary value analysis, which set of test values should be used?

A. 9, 10, 99, 100
B. 10, 50, 99
C. 0, 10, 99, 999
D. 9, 10, 11, 98, 99, 100

---

### 🔷 Q5 (FL-4.2.2, K3)

An online store offers free shipping for orders of $75.00 or more. The minimum order value is $1.00. Using two-value BVA on the free-shipping boundary, which values test that specific boundary?

A. $74.99 and $75.00
B. $0.99 and $1.00
C. $1.00 and $75.00
D. $74.00 and $76.00

---

### 🔷 Q6 (FL-4.2.3, K3)

A decision table has 4 binary conditions. Before any simplification, what is the maximum number of rules (columns) in the full decision table?

A. 4
B. 8
C. 16
D. 32

---

### 🔷 Q7 (FL-4.2.3, K3)

Consider the following business rules for a flight booking discount:

- If the passenger is a frequent flyer AND books more than 14 days in advance: 15% discount
- If the passenger is a frequent flyer AND books 14 days or less in advance: 5% discount
- If NOT a frequent flyer: no discount (regardless of booking time)

How many test cases are needed to cover this decision table after collapsing?

A. 2
B. 3
C. 4
D. 8

---

### 🔷 Q8 (FL-4.2.4, K3)

A media player has 3 states: Stopped, Playing, Paused. The valid transitions are:
- Stopped -> Playing (press Play)
- Playing -> Paused (press Pause)
- Playing -> Stopped (press Stop)
- Paused -> Playing (press Play)
- Paused -> Stopped (press Stop)

How many test cases are needed for 0-switch (all-transitions) coverage?

A. 3
B. 4
C. 5
D. 2

---

### 🔷 Q9 (FL-4.2.4, K3)

Using the same media player from Q8, which of the following is an INVALID transition that should be tested as a negative test case?

A. Playing -> Paused
B. Paused -> Playing
C. Stopped -> Paused
D. Paused -> Stopped

---

### 🔷 Q10 (FL-4.3.1, K3)

Consider the following code:

```
1: function applyFee(amount, isExpress) {
2:     fee = 0
3:     if (amount > 1000) {
4:         fee = 50
5:     }
6:     if (isExpress) {
7:         fee = fee + 25
8:     }
9:     return fee
10: }
```

What is the minimum number of test cases needed to achieve 100% statement coverage?

A. 1
B. 2
C. 3
D. 4

---

### 🔷 Q11 (FL-4.3.2, K3)

Using the same code from Q10, what is the minimum number of test cases needed to achieve 100% branch coverage?

A. 1
B. 2
C. 3
D. 4

---

### 🔷 Q12 (FL-4.3.2, K3)

Consider the following code:

```
1: function classify(x) {
2:     if (x > 0) {
3:         if (x > 100) {
4:             return "high"
5:         } else {
6:             return "medium"
7:         }
8:     } else {
9:         return "low"
10:    }
11: }
```

How many branches exist in this code?

A. 2
B. 3
C. 4
D. 6

---

### 🔷 Q13 (FL-4.3.2, K3)

Using the code from Q12, which set of test inputs achieves 100% branch coverage?

A. x = 50
B. x = 150, x = -5
C. x = 150, x = 50, x = -5
D. x = 0

---

### 🔷 Q14 (FL-4.3.3, K2)

Which statement BEST describes the value of white-box testing?

A. It replaces the need for black-box testing
B. It provides an objective measure of code coverage and can find defects in paths not specified in requirements
C. It is only useful for safety-critical systems
D. It guarantees that all defects will be found

---

### 🔷 Q15 (FL-4.4.1, K2)

A tester knows from past experience that the login module of a similar system had problems handling usernames with leading/trailing spaces. The tester specifically creates test cases with spaces around the username.

Which test technique is the tester using?

A. Equivalence partitioning
B. Boundary value analysis
C. Error guessing
D. State transition testing

---

### 🔷 Q16 (FL-4.4.2, K2)

A tester is given a 90-minute time-box and the charter: "Explore the payment processing module with various credit card types, focusing on error handling for declined transactions."

Which test technique is being used?

A. Checklist-based testing
B. Decision table testing
C. Exploratory testing
D. Ad hoc testing

---

### 🔷 Q17 (FL-4.4.3, K2)

Which statement about checklist-based testing is CORRECT?

A. Checklists provide detailed step-by-step test procedures
B. Checklists provide high-level items to verify, and the tester uses judgment to determine how to test each item
C. Checklists can only be used for non-functional testing
D. Checklists eliminate the need for any other testing technique

---

### 🔷 Q18 (FL-4.5.1, K2)

In collaborative user story writing, the "Three Amigos" approach involves which three roles?

A. Project manager, architect, database administrator
B. Business representative, developer, tester
C. Scrum master, product owner, stakeholder
D. Test manager, test lead, test analyst

---

### 🔷 Q19 (FL-4.5.2, K2)

Which of the following is an example of scenario-oriented acceptance criteria?

A. "The password must be at least 8 characters long"
B. "Given the user is logged in, When they click 'Logout', Then they are redirected to the login page"
C. "The system must support 100 concurrent users"
D. "All input fields must be validated"

---

### 🔷 Q20 (FL-4.5.3, K3)

In ATDD, when are the acceptance tests created relative to the development of the feature?

A. After the feature is fully developed and deployed
B. During system testing phase
C. Before development begins, based on acceptance criteria defined collaboratively
D. Only after defects are found in production

---

### 🔷 Q21 (FL-4.2.1, K3)

A field accepts a percentage discount between 0% and 50% (inclusive, whole numbers only). A tester identifies these equivalence partitions:
- P1: values less than 0
- P2: values 0 to 50
- P3: values greater than 50
- P4: non-integer values (e.g., 10.5)
- P5: non-numeric input

The tester writes 5 test cases, one for each partition. However, the test for P1 uses the value -5, and the test for P2 uses the value 25. Another tester argues that an additional test with value 0 is needed for the valid partition.

According to EP principles, is the additional test necessary for EP coverage?

A. Yes, because 0 is a boundary value and must be tested separately
B. No — EP requires only one representative value per partition; 25 adequately represents P2
C. Yes, because 0 is in a different partition than 25
D. No, because 0 is an invalid value

---

### 🔷 Q22 (FL-4.3.1, K3)

Consider the following code:

```
1: function process(a, b) {
2:     result = a + b
3:     if (result > 50) {
4:         log("high")
5:     }
6:     if (result < 0) {
7:         log("negative")
8:     }
9:     return result
10: }
```

A test suite has one test case: a=30, b=25 (result=55). What statement coverage does this single test achieve?

A. 100%
B. 83% (5 out of 6 executable statements)
C. 67%
D. 50%

---

---

## ✔️ Answers and Rationales

### ✔️ Q1 — Answer: B

- **B is correct.** Black-box techniques use specifications (external behavior); white-box uses internal code structure.
- A is wrong: It is exactly backwards.
- C is wrong: Both can be used at multiple levels.
- D is wrong: Neither always finds more; they are complementary.

### ✔️ Q2 — Answer: C

- **C is correct.** Partitions: below 5 (invalid), 5-50 (valid), above 50 (invalid), non-integer (invalid) = 4 partitions = 4 minimum test cases.
- A is wrong: Misses invalid partitions.
- B is wrong: Misses non-integer invalid partition.
- D is wrong: Only covers the valid partition.

### ✔️ Q3 — Answer: C

- **C is correct.** A name with exactly 20 alphabetic characters falls WITHIN the valid range (2-40) and is therefore a VALID partition, not an invalid one.
- A is wrong: Fewer than 2 chars is a valid invalid partition.
- B is wrong: Digits in name is a valid invalid partition.
- D is wrong: More than 40 chars is a valid invalid partition.

### ✔️ Q4 — Answer: A

- **A is correct.** Two-value BVA for range [10, 99]: lower boundary pair = 9 (invalid), 10 (valid); upper boundary pair = 99 (valid), 100 (invalid). Test values: {9, 10, 99, 100}.
- B is wrong: Missing the values just outside boundaries (9, 100).
- C is wrong: 0 and 999 are not the nearest neighbors to the boundaries.
- D is wrong: This is three-value BVA (6 values), not two-value (4 values).

### ✔️ Q5 — Answer: A

- **A is correct.** The free-shipping boundary is at $75.00. Two-value BVA tests the boundary ($75.00 = free shipping) and its nearest neighbor below ($74.99 = no free shipping).
- B is wrong: These test the minimum order boundary, not the free-shipping boundary.
- C is wrong: $1.00 is the min order boundary; this pair skips the critical neighbor.
- D is wrong: $74.00 and $76.00 are not the nearest neighbors to the $75.00 boundary.

### ✔️ Q6 — Answer: C

- **C is correct.** 4 binary conditions -> 2^4 = 16 maximum rules.
- A, B, D are incorrect calculations.

### ✔️ Q7 — Answer: B

- **B is correct.** 
  - Rule 1: Frequent flyer = T, > 14 days = T -> 15% discount
  - Rule 2: Frequent flyer = T, > 14 days = F -> 5% discount
  - Rule 3: Frequent flyer = F, > 14 days = - (don't care) -> no discount
  - After collapsing: 3 rules -> 3 test cases.
- A is wrong: Undercounts.
- C is wrong: This would be the full table without collapsing.
- D is wrong: 2^3 would be for 3 conditions; there are only 2 here.

### ✔️ Q8 — Answer: A

- **A is correct.** 5 valid transitions can be covered by 3 test paths:
  - Path 1: Stopped -> Playing -> Paused -> Playing (covers transitions 1, 2, 4)
  - Path 2: Playing -> Stopped (covers transition 3) — need to start from Stopped->Playing first
  - Path 3: Paused -> Stopped (covers transition 5)
  - Minimum 3 test cases cover all 5 transitions.
- Actually let's recount: Path 1: Stopped->Playing->Paused->Stopped covers transitions 1,2,5. Path 2: Stopped->Playing->Stopped covers 1,3 (transition 1 already covered). Path 3: Paused->Playing covers 4 (need to reach Paused first).
  - Optimally: TC1: Stopped->Playing->Paused->Playing->Stopped covers 1,2,4,3. TC2: Paused->Stopped covers 5 (but need to reach Paused).
  - Minimum is 3 paths.
- B, C, D are incorrect.

### ✔️ Q9 — Answer: C

- **C is correct.** "Stopped -> Paused" is not listed as a valid transition. You cannot pause from the Stopped state (nothing is playing).
- A, B, D are all valid transitions listed in the specification.

### ✔️ Q10 — Answer: A

- **A is correct.** One test case with amount=1500, isExpress=true executes ALL statements (lines 2,3,4,6,7,9). Both if-conditions are true, so both bodies execute. 100% statement coverage with 1 test case.
- B, C, D overestimate for statement coverage.

### ✔️ Q11 — Answer: B

- **B is correct.** Branches: line 3 T/F (2) + line 6 T/F (2) = 4 branches.
  - TC1: amount=1500, isExpress=true -> line 3 TRUE, line 6 TRUE (covers 2 branches)
  - TC2: amount=500, isExpress=false -> line 3 FALSE, line 6 FALSE (covers 2 branches)
  - 2 test cases -> 4/4 = 100% branch coverage.
- A is wrong: One test case covers at most 2 of 4 branches.
- C, D overestimate.

### ✔️ Q12 — Answer: C

- **C is correct.** 
  - Line 2 decision: TRUE (x>0), FALSE (x<=0) = 2 branches
  - Line 3 decision (only reached if line 2 is TRUE): TRUE (x>100), FALSE (x<=100) = 2 branches
  - Total: 4 branches.
- A, B, D are incorrect counts.

### ✔️ Q13 — Answer: C

- **C is correct.** To cover all 4 branches:
  - x=150: line 2 TRUE, line 3 TRUE -> "high"
  - x=50: line 2 TRUE, line 3 FALSE -> "medium"
  - x=-5: line 2 FALSE -> "low"
  - 3 test cases cover all 4 branches.
- A covers only 2 branches.
- B covers 3 branches (misses line 3 FALSE).
- D covers only 1 branch (line 2 FALSE — note: x=0 means x>0 is false).

### ✔️ Q14 — Answer: B

- **B is correct.** White-box testing measures coverage objectively and can detect defects in code paths not explicitly described in requirements.
- A is wrong: White-box complements, does not replace, black-box.
- C is wrong: Useful in all contexts, not only safety-critical.
- D is wrong: No technique guarantees finding all defects.

### ✔️ Q15 — Answer: C

- **C is correct.** The tester is using past knowledge of specific error patterns to guess where defects might occur — this is error guessing.
- A is wrong: EP partitions the entire domain systematically.
- B is wrong: BVA focuses on boundaries of ranges.
- D is wrong: State transition models state changes.

### ✔️ Q16 — Answer: C

- **C is correct.** A time-boxed session with a test charter where the tester explores dynamically is exploratory testing.
- A is wrong: No checklist is mentioned.
- B is wrong: No decision table is being constructed.
- D is wrong: Ad hoc testing has no charter or structure; this session has both.

### ✔️ Q17 — Answer: B

- **B is correct.** Checklists provide high-level guidance (what to check), and the tester determines the specific approach for each item.
- A is wrong: Checklists are high-level, not detailed procedures.
- C is wrong: Checklists can be used for any type of testing.
- D is wrong: Checklists complement other techniques.

### ✔️ Q18 — Answer: B

- **B is correct.** The Three Amigos are: business representative (product owner), developer, and tester.
- A, C, D do not match the Three Amigos concept.

### ✔️ Q19 — Answer: B

- **B is correct.** Given/When/Then format is the scenario-oriented (Gherkin) format for acceptance criteria.
- A is wrong: This is a rule-oriented criterion (declarative statement).
- C is wrong: This is a non-functional requirement, rule-oriented.
- D is wrong: This is a rule-oriented criterion.

### ✔️ Q20 — Answer: C

- **C is correct.** In ATDD, acceptance tests are created BEFORE development begins, based on collaboratively defined acceptance criteria.
- A is wrong: Creating tests after development is not ATDD.
- B is wrong: System testing phase is too late for ATDD.
- D is wrong: ATDD is proactive, not reactive to production defects.

### ✔️ Q21 — Answer: B

- **B is correct.** EP requires one representative value per partition. Since 0 and 25 are both in the same valid partition P2 (0-50), only one is needed. Testing 0 separately would be BVA (boundary testing), not an EP requirement.
- A is wrong: Boundary values are a BVA concern, not an EP concern.
- C is wrong: 0 is in the same partition as 25 (P2: 0-50).
- D is wrong: 0 is within the valid range and is therefore valid.

### ✔️ Q22 — Answer: B

- **B is correct.** Executable statements: lines 2, 3, 4, 6, 7, 9 = 6 total.
  - With a=30, b=25: result=55.
  - Line 2: executed (result = 55)
  - Line 3: executed (55 > 50 is TRUE)
  - Line 4: executed (log "high")
  - Line 6: executed (55 < 0 is FALSE)
  - Line 7: NOT executed (condition false)
  - Line 9: executed (return 55)
  - Executed: 5 out of 6 = 83.3%
- A is wrong: Line 7 is not executed.
- C, D are incorrect calculations.
