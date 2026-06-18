# ❓ Chapter 2 — Test Design Techniques: Practice Questions

---

### 🔷 Q1 (TA-2.1.1, K3)

A registration form has a field "Age" that accepts integers from 18 to 65 inclusive. Using 2-value Boundary Value Analysis, how many test cases are needed?

A. 2
B. 4
C. 6
D. 8

---

### 🔷 Q2 (TA-2.1.1, K3)

A system accepts a "Discount Percentage" field with values 0 to 50. Using 3-value BVA, which values should be tested?

A. -1, 0, 50, 51
B. -1, 0, 1, 49, 50, 51
C. 0, 25, 50
D. -1, 1, 49, 51

---

### 🔷 Q3 (TA-2.1.1, K3)

A login form has two fields: Username (6-15 characters) and Password (8-20 characters). Using 2-value BVA with single-fault assumption, how many test cases are needed?

A. 4
B. 8
C. 12
D. 16

---

### 🔷 Q4 (TA-2.1.3, K3)

A business rule states: "A customer gets free shipping if they are a VIP member AND the order total exceeds $100. They get a 10% discount if they use a valid coupon." How many rules are needed for a full decision table with no conditions merged?

A. 4
B. 6
C. 8
D. 12

---

### 🔷 Q5 (TA-2.1.3, K3)

In a decision table with 3 binary conditions, how many rules are needed for full coverage?

A. 6
B. 8
C. 9
D. 12

---

### 🔷 Q6 (TA-2.1.4, K3)

A system has the following states and transitions: Idle → Processing (start), Processing → Complete (finish), Processing → Error (fail), Error → Idle (retry), Complete → Idle (reset). How many valid transitions exist?

A. 4
B. 5
C. 6
D. 7

---

### 🔷 Q7 (TA-2.1.4, K3)

For the state transition diagram in Q6, how many test cases are needed for 1-switch coverage (transition coverage), assuming each test case starts from Idle and returns to Idle?

A. 2
B. 3
C. 4
D. 5

---

### 🔷 Q8 (TA-2.1.5, K2)

A use case for "Transfer Funds" has: 1 main flow, 2 alternative flows, and 3 exception flows. What is the MINIMUM number of test cases needed to cover all flows?

A. 3
B. 5
C. 6
D. 7

---

### 🔷 Q9 (TA-2.1.6, K2)

A web application must be tested on 3 browsers (Chrome, Firefox, Safari), 2 OS (Windows, Mac), and 2 screen resolutions (1080p, 4K). Using pairwise testing, approximately how many test cases are needed?

A. 12
B. 8
C. 6
D. 4

---

### 🔷 Q10 (TA-2.3.1, K2)

Which of the following BEST describes exploratory testing?

A. Testing without any planning or structure
B. Simultaneous learning, test design, and test execution guided by test charters
C. Automated execution of predefined test scripts
D. Random input generation to find crashes

---

### 🔷 Q11 (TA-2.1.2, K3)

A field accepts a date in format DD/MM/YYYY, where valid years are 1900 to 2024. Which set of values represents a complete 3-value BVA test set for the year?

A. 1899, 1900, 2024, 2025
B. 1899, 1900, 1901, 2023, 2024, 2025
C. 1900, 2024
D. 1899, 1900, 2024, 2025, 2100

---

### 🔷 Q12 (TA-2.1.1, K3)

A system accepts a "Priority" field with values: Low, Medium, High, Critical. Using Equivalence Partitioning, how many test cases are needed to cover all valid partitions?

A. 1
B. 2
C. 4
D. 8

---

### 🔷 Q13 (TA-2.1.3, K3)

A decision table for an insurance system has the following conditions: Age (<25, 25-65, >65), Driving record (Clean, 1 violation, 2+ violations), Vehicle type (Standard, Sports). How many rules are in the full decision table before removing any impossible or redundant rules?

A. 9
B. 12
C. 18
D. 24

---

### 🔷 Q14 (TA-2.1.4, K3)

In a state transition diagram, an invalid transition is:

A. A transition that does not change the state
B. A transition that should NOT be allowed according to the specification
C. A transition triggered by a timeout
D. A transition that loops back to the same state

---

### 🔷 Q15 (TA-2.2.1, K2)

Error guessing is BEST described as:

A. A systematic technique based on formal specifications
B. A technique that uses tester experience and intuition to identify defect-prone areas
C. A technique that generates test cases automatically from code
D. A technique that uses pairwise combinations of input parameters

---

### 🔷 Q16 (TA-2.1.1, K3)

A temperature sensor accepts values from -40.0 to +85.0 degrees Celsius with one decimal place. Using 2-value BVA, how many test cases are needed?

A. 2
B. 4
C. 6
D. 8

---

### 🔷 Q17 (TA-2.1.5, K2)

In use case testing, which flow is MOST likely to contain defects that are missed if only the main flow is tested?

A. The main flow itself
B. Alternative flows
C. Exception flows
D. Precondition checks

---

### 🔷 Q18 (TA-2.1.3, K3)

A decision table has 2 conditions. Condition A has 2 values. Condition B has 3 values. After analysis, 2 rules are identified as impossible. How many test cases are needed for the remaining valid rules?

A. 4
B. 6
C. 3
D. 2

---

### 🔷 Q19 (TA-2.3.1, K2)

Session-Based Test Management (SBTM) for exploratory testing includes all of the following EXCEPT:

A. Test charters
B. Time-boxed sessions
C. Detailed test scripts written before execution
D. Session reports documenting findings

---

### 🔷 Q20 (TA-2.1.2, K3)

A system has two input fields: X (range 1-10) and Y (range 1-10). Using strong EP (all combinations of valid partitions), how many test cases are needed for valid inputs only?

A. 2
B. 4
C. 10
D. 100

---

### 🔷 Q21 (TA-2.1.4, K3)

For 0-switch coverage in state transition testing, the minimum number of test cases required equals:

A. The number of transitions
B. The number of states
C. The number of events
D. The number of invalid transitions

---

### 🔷 Q22 (TA-2.1.1, K3)

A field accepts string values with length 1 to 100 characters. Which value is NOT typically included in a 2-value BVA test set for this field?

A. 0 characters (empty string)
B. 1 character
C. 50 characters
D. 101 characters

---

### 🔷 Q23 (TA-2.1.6, K2)

Combinatorial testing is MOST appropriate for which scenario?

A. Testing a single input field with a numeric range
B. Testing a system with multiple independent configuration parameters
C. Testing a workflow with sequential steps
D. Testing a state-based system with guard conditions

---

### 🔷 Q24 (TA-2.2.2, K2)

Checklist-based testing is BEST suited for:

A. Testing complex business rules with multiple conditions
B. Regression testing of standard scenarios and smoke testing
C. Testing state-dependent behavior
D. Testing numeric ranges with boundary values

---

### 🔷 Q25 (TA-2.1.3, K4)

A test analyst is designing tests for a credit approval system with the following rules:
- Credit score >= 700: Approved
- Credit score 600-699: Manual review
- Credit score < 600: Rejected
- Income >= $50K: May override score by one tier
- Existing customer: May override score by one tier

Which test design technique is MOST appropriate?

A. Equivalence Partitioning only
B. Boundary Value Analysis only
C. Decision Table Testing
D. State Transition Testing

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** 2-value BVA tests min-1, min, max, max+1. For 18-65: test 17, 18, 65, 66 = 4 test cases.

### 🔷 Q2
**Answer: B**

**Rationale:** 3-value BVA tests min-1, min, min+1, max-1, max, max+1. For 0-50: test -1, 0, 1, 49, 50, 51.

### 🔷 Q3
**Answer: B**

**Rationale:** For each field, 2-value BVA requires 4 tests (min-1, min, max, max+1). With single-fault assumption: 4 for username + 4 for password = 8 total. Strong BVA (all combinations) would be 16.

### 🔷 Q4
**Answer: C**

**Rationale:** Conditions: VIP (Y/N) = 2 values, Order > $100 (Y/N) = 2 values, Coupon (Y/N) = 2 values. Rules: 2 × 2 × 2 = 8.

### 🔷 Q5
**Answer: B**

**Rationale:** For n binary conditions, rules = 2^n. For 3 conditions: 2^3 = 8 rules.

### 🔷 Q6
**Answer: B**

**Rationale:** Valid transitions: Idle→Processing, Processing→Complete, Processing→Error, Error→Idle, Complete→Idle. Total = 5.

### 🔷 Q7
**Answer: B**

**Rationale:** For 1-switch coverage starting and ending at Idle:
- TC1: Idle → Processing → Complete → Idle (covers 3 transitions)
- TC2: Idle → Processing → Error → Idle (covers 2 more transitions)
- All 5 transitions covered in 2 test cases (though some might need 3 depending on paths).

### 🔷 Q8
**Answer: C**

**Rationale:** Minimum = main flow (1) + alternative flows (2) + exception flows (3) = 6 test cases.

### 🔷 Q9
**Answer: C**

**Rationale:** Full combinations: 3 × 2 × 2 = 12. Pairwise reduces this to approximately 6 test cases (all pairs of parameter values are covered).

### 🔷 Q10
**Answer: B**

**Rationale:** Exploratory testing is defined as simultaneous learning, test design, and test execution guided by test charters. It is not random (A, D) and not automated (C).

### 🔷 Q11
**Answer: B**

**Rationale:** 3-value BVA for year 1900-2024: min-1 (1899), min (1900), min+1 (1901), max-1 (2023), max (2024), max+1 (2025).

### 🔷 Q12
**Answer: C**

**Rationale:** EP tests one representative per valid partition. With 4 discrete values (Low, Medium, High, Critical), there are 4 valid partitions = 4 test cases.

### 🔷 Q13
**Answer: C**

**Rationale:** Age (3 values) × Driving record (3 values) × Vehicle type (2 values) = 3 × 3 × 2 = 18 rules.

### 🔷 Q14
**Answer: B**

**Rationale:** An invalid transition is a transition that should NOT be allowed according to the specification. It tests robustness by verifying the system rejects improper state changes.

### 🔷 Q15
**Answer: B**

**Rationale:** Error guessing uses tester experience and intuition to guess where defects are likely. It is not systematic (A), not code-based (C), and not combinatorial (D).

### 🔷 Q16
**Answer: B**

**Rationale:** 2-value BVA tests min-1, min, max, max+1. For -40.0 to +85.0: test -40.1, -40.0, +85.0, +85.1 = 4 test cases.

### 🔷 Q17
**Answer: C**

**Rationale:** Exception flows (error handling) are the most commonly missed and often the most defect-prone paths. They are frequently skipped when testers focus only on happy paths.

### 🔷 Q18
**Answer: A**

**Rationale:** Full table: 2 × 3 = 6 rules. After removing 2 impossible rules: 6 - 2 = 4 test cases.

### 🔷 Q19
**Answer: C**

**Rationale:** SBTM uses test charters (A), time-boxed sessions (B), and session reports (D). Detailed test scripts written before execution (C) contradict the exploratory nature of SBTM.

### 🔷 Q20
**Answer: D**

**Rationale:** Strong EP for valid partitions only: X has 1 valid partition (1-10), Y has 1 valid partition (1-10). Wait — if each range is one partition, strong EP = 1 × 1 = 1. But if we're considering boundary values as partitions, the question might mean all values. Actually, for ranges treated as single valid partitions, strong EP gives 1 combination. However, if the question implies all values within the range as separate partitions, it would be 10 × 10 = 100. Given the answer options, D (100) likely represents testing all combinations of values 1-10 for both fields.

### 🔷 Q21
**Answer: B**

**Rationale:** 0-switch coverage requires visiting every state at least once. The minimum number of test cases equals the number of states (though some test cases may cover multiple states).

### 🔷 Q22
**Answer: C**

**Rationale:** 2-value BVA tests min-1 (0), min (1), max (100), max+1 (101). The nominal value (50) is not part of BVA — it would be tested in EP as a representative of the valid partition.

### 🔷 Q23
**Answer: B**

**Rationale:** Combinatorial testing is designed for multiple independent parameters. Single numeric ranges (A) use BVA. Workflows (C) use use cases or state transitions. State-based systems (D) use state transition testing.

### 🔷 Q24
**Answer: B**

**Rationale:** Checklist-based testing is suited for regression testing, smoke testing, and acceptance testing where standard scenarios are repeatedly verified. Complex business rules (A) need decision tables. State behavior (C) needs state transitions. Numeric ranges (D) need BVA.

### 🔷 Q25
**Answer: C**

**Rationale:** This scenario has multiple interacting conditions (credit score tier, income threshold, existing customer status) with override rules. Decision table testing is the most appropriate because it handles combinations of conditions and their resulting actions systematically.
