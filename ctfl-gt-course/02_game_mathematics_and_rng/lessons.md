# Chapter 2 — Game Mathematics and RNG Testing: Lessons

---

## 2.1 Probability and Odds in Gambling

### Basic Probability

**Probability** is the measure of the likelihood that an event will occur. In gambling, probability determines the expected frequency of outcomes.

**Formula:**
```
Probability = Number of Favorable Outcomes / Total Number of Possible Outcomes
```

**Example:**
- A fair six-sided die: Probability of rolling a 3 = 1/6 ≈ 16.67%
- A standard deck of cards: Probability of drawing an Ace = 4/52 = 1/13 ≈ 7.69%

### Independent Events

Most gambling outcomes are **independent** — one outcome does not affect the next.

**Example:**
- Each spin of a slot machine is independent. Previous spins do not influence future spins.
- Each roll of a die is independent.
- Each shuffle of a deck in online blackjack (using RNG) is independent.

### Calculating Combined Probabilities

**AND (both events occur):**
```
P(A and B) = P(A) × P(B)
```

**Example:** Probability of rolling two 6s with two dice:
- P(6 on die 1) = 1/6
- P(6 on die 2) = 1/6
- P(two 6s) = 1/6 × 1/6 = 1/36 ≈ 2.78%

**OR (either event occurs):**
```
P(A or B) = P(A) + P(B)  [for mutually exclusive events]
```

**Example:** Probability of rolling a 1 or 6 on a die:
- P(1) = 1/6, P(6) = 1/6
- P(1 or 6) = 1/6 + 1/6 = 2/6 = 1/3 ≈ 33.33%

### Odds

**Odds** express the ratio of the probability of an event occurring to the probability of it not occurring.

**Formula:**
```
Odds = P(Event) : P(Not Event)
```

**Example:**
- Probability of rolling a 6 on a die = 1/6
- Probability of NOT rolling a 6 = 5/6
- Odds = 1:5 (or "1 to 5")

**Decimal Odds (common in Europe):**
```
Decimal Odds = 1 / Probability
```

**Example:**
- Probability of an outcome = 0.25 (25%)
- Decimal odds = 1 / 0.25 = 4.00
- A $1 bet at 4.00 odds returns $4.00 (including stake)

**Fractional Odds (common in UK):**
- Odds of 3/1 mean: for every $1 staked, you win $3 profit (plus your $1 stake back)

**American Odds:**
- Positive (+300): Win $300 on a $100 stake
- Negative (-200): Must stake $200 to win $100

---

## 2.2 Return to Player (RTP) Calculation

### From a Paytable

To calculate RTP from a slot machine paytable, you need:
1. The probability of each winning combination
2. The payout for each winning combination

**Formula:**
```
RTP = Σ (Probability of Combination × Payout for Combination) / (Cost per Spin) × 100
```

### Worked Example: Simple Slot Machine

**Game Rules:**
- 3 reels, each with 10 symbols
- 1 payline (middle row)
- Cost per spin: $1

**Reel Strip (same for all 3 reels):**
- Symbol A: 2 occurrences
- Symbol B: 3 occurrences
- Symbol C: 3 occurrences
- Symbol D: 2 occurrences

**Paytable:**
| Combination | Payout |
|-------------|--------|
| A-A-A | $50 |
| B-B-B | $20 |
| C-C-C | $10 |
| D-D-D | $5 |

**Step 1: Calculate total combinations**
- Each reel has 10 symbols
- Total combinations = 10 × 10 × 10 = 1,000

**Step 2: Calculate probability of each winning combination**

For A-A-A:
- P(A on reel 1) = 2/10
- P(A on reel 2) = 2/10
- P(A on reel 3) = 2/10
- P(A-A-A) = (2/10) × (2/10) × (2/10) = 8/1,000 = 0.008

For B-B-B:
- P(B-B-B) = (3/10) × (3/10) × (3/10) = 27/1,000 = 0.027

For C-C-C:
- P(C-C-C) = (3/10) × (3/10) × (3/10) = 27/1,000 = 0.027

For D-D-D:
- P(D-D-D) = (2/10) × (2/10) × (2/10) = 8/1,000 = 0.008

**Step 3: Calculate RTP**

| Combination | Probability | Payout | Contribution |
|-------------|------------|--------|-------------|
| A-A-A | 0.008 | $50 | 0.008 × 50 = $0.40 |
| B-B-B | 0.027 | $20 | 0.027 × 20 = $0.54 |
| C-C-C | 0.027 | $10 | 0.027 × 10 = $0.27 |
| D-D-D | 0.008 | $5 | 0.008 × 5 = $0.04 |
| **Total** | | | **$1.25** |

Wait — $1.25 exceeds the $1 stake. This would mean the player has an advantage. This is unrealistic for a commercial game.

Let me recalculate with a more realistic example:

### Realistic Worked Example

**Game Rules:**
- 3 reels, each with 20 symbols
- 1 payline
- Cost per spin: $1

**Reel Strip:**
- Symbol 7: 1 occurrence per reel
- Symbol Bar: 2 occurrences per reel
- Symbol Cherry: 5 occurrences per reel
- Other symbols: 12 occurrences per reel (no payout)

**Paytable:**
| Combination | Payout |
|-------------|--------|
| 7-7-7 | $100 |
| Bar-Bar-Bar | $25 |
| Cherry-Cherry-Cherry | $10 |
| Any 2 Cherries | $2 |

**Step 1: Total combinations = 20 × 20 × 20 = 8,000**

**Step 2: Probabilities**

7-7-7:
- P = (1/20) × (1/20) × (1/20) = 1/8,000 = 0.000125

Bar-Bar-Bar:
- P = (2/20) × (2/20) × (2/20) = 8/8,000 = 0.001

Cherry-Cherry-Cherry:
- P = (5/20) × (5/20) × (5/20) = 125/8,000 = 0.015625

Any 2 Cherries:
- This means exactly 2 cherries on any 2 reels, with non-cherry on the third
- Ways: Cherry-Cherry-NonCherry, Cherry-NonCherry-Cherry, NonCherry-Cherry-Cherry
- P(2 cherries) = 3 × (5/20) × (5/20) × (15/20) = 3 × 0.0625 × 0.75 = 0.140625
- But wait — Cherry-Cherry-Cherry is included in "any 2 cherries" if not careful
- Actually "Any 2 Cherries" typically means EXACTLY 2, or at least 2. Need to check game rules.
- For simplicity, let's say "Any 2 Cherries" means at least 2 (which includes 3)
- P(at least 2 cherries) = P(2 cherries) + P(3 cherries)
- P(exactly 2) = 3 × (5/20)² × (15/20) = 3 × 0.0625 × 0.75 = 0.140625
- P(3) = 0.015625
- P(at least 2) = 0.15625

**Step 3: RTP Calculation**

| Combination | Probability | Payout | Contribution |
|-------------|------------|--------|-------------|
| 7-7-7 | 0.000125 | $100 | $0.0125 |
| Bar-Bar-Bar | 0.001 | $25 | $0.025 |
| Cherry-Cherry-Cherry | 0.015625 | $10 | $0.15625 |
| At least 2 Cherries | 0.15625 | $2 | $0.3125 |
| **Total Expected Return** | | | **$0.50625** |

**RTP = $0.50625 / $1.00 × 100 = 50.625%**

This is very low for a real slot (typical is 92-98%). But the math method is correct.

### Theoretical vs. Actual RTP

**Theoretical RTP:**
- Calculated from the game's mathematical model (reel strips, paytable, rules)
- Fixed unless the game design changes
- The value advertised to players and regulators

**Actual RTP:**
- Observed over a period of play
- Will fluctuate around the theoretical RTP
- Approaches theoretical RTP over millions of plays (Law of Large Numbers)

**Example:**
- A game has 96% theoretical RTP
- Over 100,000 plays, actual RTP might be 94.5% or 97.2%
- Over 10,000,000 plays, actual RTP will be very close to 96%

---

## 2.3 Random Number Generators (RNG)

### What is an RNG?

A **Random Number Generator (RNG)** is a device or algorithm that produces a sequence of numbers that lacks any predictable pattern.

**Types:**
1. **Hardware RNG (HRNG / TRNG):** Uses physical phenomena (thermal noise, radioactive decay) to generate randomness. Truly random.
2. **Pseudo-Random Number Generator (PRNG):** Uses mathematical algorithms to generate sequences that appear random. Deterministic but unpredictable without knowing the seed.

**In Gambling:**
- Most online gambling uses PRNGs due to speed and reproducibility
- PRNGs must be cryptographically secure and properly seeded
- Physical casinos may use HRNGs for mechanical games or PRNGs for electronic games

### Properties of a Suitable RNG for Gambling

**1. Randomness:**
- The output sequence must pass statistical tests for randomness
- No discernible pattern or predictability

**2. Uniformity:**
- Each possible outcome must have an equal probability of occurring (or the specified non-uniform distribution must be accurate)
- For a fair die, each face 1-6 should appear with probability 1/6

**3. Unpredictability:**
- It must be computationally infeasible to predict the next number in the sequence
- Even knowing many previous outputs, the next output cannot be determined

**4. Independence:**
- Each number generated must be independent of all previous numbers
- Previous outcomes do not influence future outcomes

**5. Reproducibility (for testing):**
- With the same seed, the PRNG must produce the same sequence
- This allows testers to reproduce specific game outcomes for debugging

### RNG Testing Methods

**1. Statistical Randomness Tests:**

**Chi-Square Test:**
- Tests whether observed frequencies match expected frequencies
- Example: Roll a die 600 times. Expected: 100 of each face. Chi-square tests if observed counts deviate significantly from expected.

**Runs Test:**
- Tests for patterns in the sequence (too many consecutive increases or decreases would indicate non-randomness)

**Serial Test:**
- Tests the distribution of pairs, triplets, etc. of consecutive numbers

**2. Diehard Tests:**
- A battery of statistical tests developed by George Marsaglia
- Includes: birthday spacings, overlapping permutations, binary rank tests, etc.
- Rigorous standard for RNG certification

**3. Uniformity Testing:**
- Divide output range into bins and verify each bin receives approximately equal numbers of outputs
- Example: For numbers 0-99, each decade (0-9, 10-19, etc.) should receive ~10% of outputs

**4. Unpredictability Testing:**
- Verify that knowing the algorithm and previous outputs does not allow prediction of future outputs
- Requires cryptographically secure PRNGs (CSPRNGs)

**5. Long-Period Testing:**
- Verify the RNG does not repeat its sequence within operational use
- Modern PRNGs have periods of 2^19937 or larger (effectively infinite for gambling purposes)

### RNG Certification Process

**Step 1: Source Code Review**
- Independent lab reviews the RNG algorithm implementation
- Verifies correct use of standard algorithms (e.g., Mersenne Twister, xoshiro)

**Step 2: Statistical Testing**
- Generate millions of outputs
- Run statistical test suites (chi-square, diehard, etc.)
- Verify outputs pass all tests

**Step 3: Seeding Verification**
- Verify the RNG is seeded with sufficient entropy
- Verify seed values are unpredictable

**Step 4: Integration Testing**
- Verify the RNG is correctly integrated into the game logic
- Verify game outcomes match the mathematical model when using the RNG

**Step 5: Ongoing Monitoring**
- Operators monitor actual game outcomes for anomalies
- Regulators may require periodic re-certification

---

## 2.4 Game Mathematics Verification

### PAR Sheets

A **PAR Sheet (Probability Accounting Report)** is the mathematical blueprint of a slot machine or gambling game.

**Contents:**
- Reel strip definitions (symbol positions on each reel)
- Symbol frequencies
- Paytable
- Probability of each winning combination
- RTP calculation
- Hit frequency
- Volatility metrics
- Bonus feature probabilities and payouts

**Why PAR Sheets Matter for Testing:**
- Testers verify that the actual game behaves according to the PAR sheet
- Any deviation indicates a software defect or manipulation
- Regulators require PAR sheets for game approval

### Reel Strip Testing

**What is a Reel Strip?**
- The ordered list of symbols on each reel of a slot machine
- Determines which symbols can appear in each position

**Testing Approach:**
1. Extract the reel strip from the game software
2. Verify it matches the PAR sheet exactly
3. Verify the order of symbols is correct
4. Verify the number of each symbol matches the design

**Example Reel Strip:**
```
Reel 1: [7, Bar, Cherry, Cherry, Blank, Blank, Bar, 7, Blank, Cherry]
Reel 2: [Bar, 7, Cherry, Blank, Cherry, Bar, Blank, 7, Cherry, Blank]
Reel 3: [Cherry, Bar, 7, Blank, Blank, Cherry, Bar, 7, Cherry, Blank]
```

### Odds Verification in Sports Betting

**Testing Requirements:**
- Verify that displayed odds match the underlying probability model
- Verify that odds updates reflect real-time event changes
- Verify that payout calculations are mathematically correct
- Verify that the operator's margin (overround) is correctly applied

**Overround Calculation:**
```
Overround = (1 / Decimal Odds A + 1 / Decimal Odds B + ...) - 1
```

A typical overround is 5-10%, representing the operator's profit margin.

---

## 2.5 Expected Value and House Edge Calculation

### Expected Value (EV)

**Formula:**
```
EV = Σ (Probability of Outcome × Value of Outcome)
```

**Example: European Roulette**
- Bet $1 on a single number
- P(win) = 1/37 ≈ 0.0270
- P(lose) = 36/37 ≈ 0.9730
- Win value = +$35 (win $35, keep $1 stake = net +$35, but commonly described as 35:1 payout)
- Actually: if payout is 35:1, you get $35 profit + $1 stake back = $36 total on a $1 bet

**EV calculation:**
- EV = (1/37 × $35) + (36/37 × -$1)
- EV = $0.9459 - $0.9730
- EV = -$0.0271 per $1 bet
- House edge = 2.71%

### House Edge from Game Rules

**Blackjack (simplified):**
- Player wins even money on blackjack, beats dealer's non-blackjack
- Dealer wins ties (except blackjack)
- Optimal strategy reduces house edge to ~0.5%
- Without strategy, house edge can be 2-5%

**Testing implication:**
- Verify that game rules match the claimed house edge
- Verify that player strategy advice is mathematically correct
- Verify that side bets have correctly calculated house edges

---

## Worked Examples

### Worked Example 1: Calculating RTP

**Game:** 5-reel slot, cost $1 per spin
**Reels:** 20 symbols each
**Paytable:**
- 5 Wilds: $500
- 4 Wilds: $100
- 3 Wilds: $20
- 5 Scatters: $50 (anywhere, not on payline)

**Reel strips:** Wild appears 2 times per reel. Scatter appears 1 time per reel.

**Combinations:** 20^5 = 3,200,000

**5 Wilds:**
- P = (2/20)^5 = 32/3,200,000 = 0.00001
- Contribution = 0.00001 × $500 = $0.005

**4 Wilds:**
- Ways = 5 (which reel is non-wild)
- P = 5 × (2/20)^4 × (18/20) = 5 × 0.0001 × 0.9 = 0.00045
- Contribution = 0.00045 × $100 = $0.045

**3 Wilds:**
- Ways = C(5,3) = 10
- P = 10 × (2/20)^3 × (18/20)^2 = 10 × 0.001 × 0.81 = 0.0081
- Contribution = 0.0081 × $20 = $0.162

**5 Scatters (anywhere):**
- P = (1/20)^5 = 1/3,200,000 ≈ 0.0000003125
- Contribution ≈ 0.0000003125 × $50 ≈ $0.0000156 (negligible)

**Total Expected Return ≈ $0.005 + $0.045 + $0.162 = $0.212**
**RTP = 21.2%**

This is very low; in practice, many more winning combinations would exist.

### Worked Example 2: RNG Uniformity Test

An RNG generates integers from 1 to 100. Over 10,000 outputs:

| Range | Expected | Observed |
|-------|----------|----------|
| 1-10 | 1,000 | 980 |
| 11-20 | 1,000 | 1,015 |
| 21-30 | 1,000 | 1,002 |
| ... | ... | ... |

The chi-square test compares observed vs. expected. If chi-square exceeds the critical value, the RNG fails the uniformity test.

### Worked Example 3: Overround in Sports Betting

A football match offers:
- Home win: 2.10 decimal odds
- Draw: 3.40 decimal odds
- Away win: 3.50 decimal odds

**Overround calculation:**
- P(Home) = 1/2.10 = 0.4762
- P(Draw) = 1/3.40 = 0.2941
- P(Away) = 1/3.50 = 0.2857
- Total implied probability = 1.056
- Overround = 1.056 - 1 = 0.056 = 5.6%

**Testing implication:**
- Verify displayed odds produce the claimed overround
- Verify payout calculations include the correct overround
