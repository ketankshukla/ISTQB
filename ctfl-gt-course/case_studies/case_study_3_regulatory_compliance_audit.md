# Case Study 3 — Regulatory Compliance Audit

## Context

You are a Compliance Test Manager at Global Gaming Test Labs (GGTL). An operator, MegaCasino, operates in the UK, Malta, and Sweden. They are undergoing a routine compliance audit for all three jurisdictions.

## Operator Profile

- **UK:** Licensed by UKGC, 500+ games, 200,000 active players
- **Malta:** Licensed by MGA, shared platform with UK, additional 300 games
- **Sweden:** Licensed by Spelinspektionen, 200 games, 50,000 active players
- **Shared:** Single player account across all three markets

## Audit Scope

The audit must verify compliance in all three jurisdictions simultaneously.

---

## Task 1: Jurisdictional Requirement Mapping

Map the key differences between the three jurisdictions.

**Model Answer:**

| Requirement | UK (UKGC) | Malta (MGA) | Sweden (Spelinspektionen) |
|--------------|-----------|-------------|---------------------------|
| Self-exclusion register | GAMSTOP | Operator-specific | Spelpaus |
| Credit cards allowed | No | Yes | Yes |
| Bonus restrictions | Reasonable, clear terms | Reasonable, clear terms | ONE bonus per player, max SEK 100 value |
| Advertising | No targeting vulnerable | No targeting vulnerable | No targeting young adults (18-23), no bonuses in ads |
| Reality checks | Recommended | Recommended | Required |
| KYC timing | Before first deposit | Before first deposit | Before first deposit |
| Credit card ban | Yes | No | No |
| License type | B2C only | B2C and B2B | B2C only |

---

## Task 2: Cross-Jurisdiction Test Scenarios

Design tests that verify correct behavior for players in each jurisdiction.

**Model Answer:**

**Scenario 1: UK Player**
- Register with UK address → UKGC regulations apply
- Verify credit card deposit is blocked
- Verify GAMSTOP check occurs
- Verify bonus terms comply with UKGC standards
- Verify reality check is offered

**Scenario 2: Swedish Player**
- Register with Swedish address → Spelinspektionen regulations apply
- Verify Spelpaus check occurs
- Verify only one welcome bonus is offered
- Verify bonus value does not exceed SEK 100
- Verify no bonus advertising in promotions
- Verify reality check is mandatory

**Scenario 3: Maltese Player**
- Register with Maltese address → MGA regulations apply
- Verify credit card deposit is allowed
- Verify standard bonus terms apply
- Verify operator self-exclusion available
- Verify reality check is offered

**Scenario 4: Cross-Border Player**
- Player registered in UK travels to Sweden
- Player logs in from Swedish IP → which jurisdiction applies?
- **Correct behavior:** Account jurisdiction is determined at registration (UK), so UK rules apply
- Verify Spelpaus is NOT checked (player is UK-registered)
- Verify player can still use credit card (UK ban applies, not Swedish rules)

---

## Task 3: Common Compliance Failures

Identify the most common compliance failures in multi-jurisdiction operations.

**Model Answer:**

| Failure | Risk | Detection Method |
|---------|------|-----------------|
| Applying wrong jurisdiction rules to a player | Regulatory fine, license suspension | Automated geo-location + registration jurisdiction verification tests |
| Bonus offered to self-excluded player | Regulatory fine, reputational damage | Automated self-exclusion + bonus eligibility checks |
| RTP below advertised in one market | Regulatory fine, game withdrawal | Automated RTP monitoring per market |
| Marketing to self-excluded players | Regulatory fine, license review | Suppression list checks before every marketing campaign |
| Underage player in one market accessing another market's games | Criminal liability, license revocation | Strict KYC at registration, no cross-market play for unverified accounts |
| Credit card accepted in UK | Regulatory fine, mandatory remediation | Payment method blocking per jurisdiction |

---

## Task 4: Audit Test Plan

Design the overall audit test plan.

**Model Answer:**

**Phase 1: Documentation Review (1 week)**
- Review licenses and conditions for all three jurisdictions
- Review game certification documents (RNG certs, RTP verification)
- Review responsible gaming policies
- Review AML/KYC procedures
- Review marketing and advertising policies

**Phase 2: Functional Compliance Testing (2 weeks)**
- Execute jurisdiction-specific test cases for each market
- Test self-exclusion, deposit limits, reality checks
- Test KYC workflows
- Test payment method restrictions
- Test bonus eligibility and terms
- Test game fairness (sample of games from each market)

**Phase 3: Data Integrity Testing (1 week)**
- Verify player accounts are correctly assigned to jurisdictions
- Verify self-exclusion lists are enforced across all touchpoints
- Verify marketing suppression lists are accurate
- Verify transaction records are complete and auditable

**Phase 4: Reporting (1 week)**
- Document all findings
- Classify as critical, major, or minor
- Provide remediation recommendations
- Issue compliance certificate (if all critical and major items resolved)
