# Case Study 1 — Slot Game Testing

## Context

You are a Senior Test Analyst at SpinVerify, an independent testing laboratory. You have been assigned to test a new video slot game called "Dragon's Gold" before it can be certified for release in the UK market.

## Game Specifications

**Game Type:** 5-reel, 3-row video slot with 20 paylines
**Cost per spin:** $0.20 to $100.00
**Theoretical RTP:** 96.5%
**Volatility:** Medium
**Jackpot:** Local progressive, seeds at $10,000, increments by 0.5% of each bet

**Symbols:**
- Dragon (Wild): substitutes for all except Scatter
- Treasure Chest (Scatter): triggers free spins
- Crown, Ring, Gem: High-value symbols
- A, K, Q, J, 10: Low-value symbols

**Paytable (per payline, for max bet $100):**
- 5 Dragons: $5,000
- 5 Crowns: $2,000
- 5 Rings: $1,000
- 5 Gems: $500
- 5 Aces: $200
- 5 Kings: $150
- 5 Queens: $100
- 5 Jacks: $75
- 5 Tens: $50

**Free Spins:**
- 3 Scatters: 10 free spins
- 4 Scatters: 15 free spins
- 5 Scatters: 20 free spins
- During free spins, all wins multiplied by 3x

---

## Task 1: Functional Test Plan

Design a functional test plan for Dragon's Gold covering game mechanics, payouts, and bonus features.

**Model Answer:**

**Game Mechanics Tests:**
- Verify game loads correctly on desktop and mobile
- Verify bet selection ($0.20, $1.00, $10.00, $100.00)
- Verify spin button initiates reel spin
- Verify reels stop and display symbols
- Verify win calculation for each payline
- Verify balance updates correctly after win/loss

**Paytable Verification Tests:**
- For each symbol, test 3-of-a-kind, 4-of-a-kind, and 5-of-a-kind on payline 1
- Verify payouts scale correctly with bet size
- Test wild substitution for all standard symbols
- Test that wild does not substitute for scatter
- Test multiple simultaneous wins on different paylines
- Test maximum win cap if applicable

**Free Spins Tests:**
- Trigger free spins with 3, 4, and 5 scatters
- Verify correct number of free spins awarded
- Verify 3x multiplier applies to all free spin wins
- Verify free spins can re-trigger
- Verify balance updates correctly after free spins complete
- Verify free spin win total is displayed

**Jackpot Tests:**
- Verify jackpot meter displays correctly
- Verify jackpot increments by 0.5% of qualifying bets
- Verify jackpot win triggers at designed probability
- Verify correct payout amount on jackpot win
- Verify jackpot resets to $10,000 after win

---

## Task 2: RTP Verification Plan

Design an RTP verification test.

**Model Answer:**

**Test Approach:**
- Simulate 5,000,000 spins at $1.00 per spin using the certified RNG
- Record every wager and payout
- Calculate observed RTP
- Compare to theoretical RTP of 96.5%

**Acceptance Criteria:**
- Observed RTP should be within ±0.5% of theoretical RTP
- Target range: 96.0% to 97.0%

**Risks:**
- 5,000,000 spins may still show variance; if outside tolerance, increase to 10,000,000
- Rare bonus features may not trigger enough times in 5M spins for reliable bonus RTP verification

**If RTP is outside tolerance:**
- Investigate reel strips and paytable implementation
- Check for software defects in win calculation
- Verify RNG integration is correct
- Compare PAR sheet to actual game code

---

## Task 3: Compliance Testing for UK Market

What UK-specific compliance tests are required?

**Model Answer:**

**UKGC Compliance Tests:**
- Verify RTP is displayed to players (required by UKGC)
- Verify responsible gaming information is prominent
- Verify reality checks can be configured (if operator offers them)
- Verify game cannot be played with credit cards (UK banned credit card gambling)
- Verify game is compatible with GAMSTOP self-exclusion
- Verify game does not target vulnerable persons in advertising
- Verify bonus terms are clear and fair (no hidden max win restrictions that contradict advertised RTP)
- Verify game history is available to players

---

## Task 4: Identify Risks and Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| RTP below advertised | High | Low | Extensive mathematical verification before live test |
| Jackpot win triggers too frequently | High | Low | Verify jackpot probability against PAR sheet |
| Free spins multiplier not applied | High | Low | Explicit test case for multiplier on every free spin win |
| Mobile display issues | Medium | Medium | Test on multiple devices and screen sizes |
| Responsible gaming features missing | High | Low | Compliance checklist review before testing starts |
