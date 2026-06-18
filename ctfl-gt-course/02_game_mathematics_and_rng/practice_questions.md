# ❓ Chapter 2 — Game Mathematics and RNG Testing: Practice Questions

---

### 🔷 Q1 (GT-2.1, K2)

A fair six-sided die is rolled. What is the probability of rolling a 4?

A. 1/3
B. 1/6
C. 1/2
D. 1/12

---

### 🔷 Q2 (GT-2.1, K3)

Two fair six-sided dice are rolled. What is the probability of rolling a total of 7?

A. 1/6
B. 1/12
C. 1/18
D. 1/36

---

### 🔷 Q3 (GT-2.2, K3)

A slot machine costs $1 per spin. Over 1,000,000 spins, it pays out $960,000 in winnings. The RTP is:

A. 4%
B. 96%
C. 104%
D. $40,000

---

### 🔷 Q4 (GT-2.2, K2)

Which formula correctly calculates RTP?

A. (Total Wagered / Total Payout) × 100
B. (Total Payout / Total Wagered) × 100
C. (Total Wagered - Total Payout) × 100
D. Total Payout - Total Wagered

---

### 🔷 Q5 (GT-2.3, K2)

Which of the following is a REQUIRED property of a suitable RNG for gambling?

A. The sequence must be reproducible without a seed
B. Unpredictability of future outputs
C. The algorithm must be publicly available
D. Outputs must follow a predictable pattern for testing

---

### 🔷 Q6 (GT-2.3, K2)

A PRNG that passes chi-square tests, diehard tests, and uniformity testing is:

A. Guaranteed to be truly random
B. Statistically suitable for gambling if properly seeded
C. Only suitable for non-gambling applications
D. Automatically certified by all regulators

---

### 🔷 Q7 (GT-2.2, K3)

A game has a house edge of 3.5%. The RTP is:

A. 3.5%
B. 96.5%
C. 103.5%
D. Cannot be calculated

---

### 🔷 Q8 (GT-2.3, K2)

The PRIMARY purpose of seeding a PRNG is to:

A. Make the output sequence predictable for players
B. Provide initial entropy so the sequence is unpredictable
C. Reduce the speed of number generation
D. Ensure the sequence repeats every 100 numbers

---

### 🔷 Q9 (GT-2.1, K3)

A card is drawn from a standard 52-card deck. What is the probability of drawing a heart OR a king?

A. 16/52
B. 17/52
C. 4/52
D. 13/52

---

### 🔷 Q10 (GT-2.4, K2)

A PAR sheet (Probability Accounting Report) is:

A. A player's gambling history report
B. The mathematical blueprint of a gambling game
C. A regulatory license application
D. A marketing document describing game features

---

### 🔷 Q11 (GT-2.3, K2)

Which statistical test is commonly used to verify that an RNG produces uniformly distributed outputs?

A. Regression test
B. Chi-square test
C. Integration test
D. Load test

---

### 🔷 Q12 (GT-2.2, K3)

A slot machine has the following paytable for a $1 spin:

| Combination | Probability | Payout |
|-------------|------------|--------|
| 3 Sevens | 0.001 | $100 |
| 3 Bars | 0.01 | $20 |
| 3 Cherries | 0.05 | $5 |

What is the expected return from these three combinations?

A. $0.35
B. $0.45
C. $0.55
D. $1.25

---

### 🔷 Q13 (GT-2.3, K2)

A sequence of numbers from an RNG is perfectly uniform (each number appears exactly equally often) but follows a repeating pattern every 100 numbers. This RNG:

A. Passes all gambling suitability tests
B. Is uniform but not random
C. Is random but not uniform
D. Is both random and uniform

---

### 🔷 Q14 (GT-2.5, K3)

In European roulette, betting $1 on a single number pays 35:1. The expected value per $1 bet is approximately:

A. +$0.027
B. -$0.027
C. $0
D. -$1.00

---

### 🔷 Q15 (GT-2.3, K2)

Which statement about the Gambler's Fallacy is TRUE?

A. It is a valid strategy for winning at gambling
B. It is the belief that past independent events affect future probabilities
C. It is a type of RNG test
D. It describes the house edge in a casino

---

### 🔷 Q16 (GT-2.4, K2)

Reel strip testing involves:

A. Testing the visual appearance of slot machine reels
B. Verifying that the symbol order and frequency match the PAR sheet
C. Testing the sound effects during reel spins
D. Testing the animation speed of spinning reels

---

### 🔷 Q17 (GT-2.2, K2)

Theoretical RTP differs from actual RTP because:

A. They are always exactly the same
B. Actual RTP fluctuates over time and converges to theoretical RTP over large numbers of plays
C. Theoretical RTP is always higher
D. Actual RTP is calculated incorrectly

---

### 🔷 Q18 (GT-2.3, K2)

Diehard tests are:

A. Tests of physical gaming machines
B. A battery of statistical tests for RNG randomness
C. Regulatory compliance audits
D. Tests of game graphics and sound

---

### 🔷 Q19 (GT-2.1, K3)

A sports bet offers decimal odds of 4.00. The implied probability of this outcome is:

A. 4%
B. 25%
C. 40%
D. 75%

---

### 🔷 Q20 (GT-2.5, K2)

The overround in sports betting represents:

A. The total amount wagered
B. The operator's profit margin built into the odds
C. The player's expected winnings
D. The probability of all outcomes combined

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** A fair die has 6 equally likely outcomes. P(4) = 1/6.

### 🔷 Q2
**Answer: A**

**Rationale:** Combinations that total 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 combinations out of 36 total. P = 6/36 = 1/6.

### 🔷 Q3
**Answer: B**

**Rationale:** RTP = (Total Payout / Total Wagered) × 100 = ($960,000 / $1,000,000) × 100 = 96%.

### 🔷 Q4
**Answer: B**

**Rationale:** RTP = (Total Payout / Total Wagered) × 100.

### 🔷 Q5
**Answer: B**

**Rationale:** Unpredictability is a required property. Reproducibility without a seed (A) would make it predictable. Public availability (C) is not required. Predictable patterns (D) would fail randomness.

### 🔷 Q6
**Answer: B**

**Rationale:** Passing statistical tests makes a PRNG statistically suitable IF properly seeded. It is not guaranteed truly random (A) — PRNGs are deterministic by definition.

### 🔷 Q7
**Answer: B**

**Rationale:** RTP = 100% - House Edge = 100% - 3.5% = 96.5%.

### 🔷 Q8
**Answer: B**

**Rationale:** Seeding provides initial entropy to make the sequence unpredictable. Predictability for players (A) would be a defect.

### 🔷 Q9
**Answer: A**

**Rationale:** P(Heart) = 13/52. P(King) = 4/52. P(Heart AND King) = 1/52 (King of Hearts). P(Heart OR King) = 13/52 + 4/52 - 1/52 = 16/52.

### 🔷 Q10
**Answer: B**

**Rationale:** A PAR sheet is the mathematical blueprint showing reel strips, probabilities, and payouts.

### 🔷 Q11
**Answer: B**

**Rationale:** Chi-square tests compare observed vs. expected frequency distributions — used for uniformity testing.

### 🔷 Q12
**Answer: B**

**Rationale:** Expected return = (0.001 × $100) + (0.01 × $20) + (0.05 × $5) = $0.10 + $0.20 + $0.25 = $0.55. Wait — let me recalculate: 0.001 × 100 = 0.10; 0.01 × 20 = 0.20; 0.05 × 5 = 0.25. Total = 0.10 + 0.20 + 0.25 = 0.55. Answer is C.

### 🔷 Q13
**Answer: B**

**Rationale:** Perfectly uniform means each number appears equally. Repeating pattern means predictable, therefore not random.

### 🔷 Q14
**Answer: B**

**Rationale:** EV = (1/37 × $35) + (36/37 × -$1) = $0.946 - $0.973 = -$0.027. House edge ≈ 2.7%.

### 🔷 Q15
**Answer: B**

**Rationale:** Gambler's Fallacy = belief that past independent events influence future probabilities (e.g., "red is due after black streak").

### 🔷 Q16
**Answer: B**

**Rationale:** Reel strip testing verifies symbol order and frequency match the mathematical design (PAR sheet).

### 🔷 Q17
**Answer: B**

**Rationale:** Actual RTP fluctuates and converges to theoretical only over very large numbers of plays (Law of Large Numbers).

### 🔷 Q18
**Answer: B**

**Rationale:** Diehard tests are a battery of statistical tests for RNG randomness developed by George Marsaglia.

### 🔷 Q19
**Answer: B**

**Rationale:** Implied probability = 1 / decimal odds = 1/4.00 = 0.25 = 25%.

### 🔷 Q20
**Answer: B**

**Rationale:** Overround = sum of implied probabilities minus 1. It represents the operator's built-in profit margin.
