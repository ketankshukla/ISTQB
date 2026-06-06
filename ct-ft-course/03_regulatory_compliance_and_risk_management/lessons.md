# Chapter 3 — Regulatory Compliance and Risk Management: Lessons

---

## 3.1 Major Financial Regulations

### SOX (Sarbanes-Oxley Act) — US

**Scope:** Public companies in the US
**Key provisions:**
- Section 302: CEOs/CFOs must certify financial reports
- Section 404: Internal controls over financial reporting must be documented and tested
- Section 409: Real-time disclosure of material changes

**Testing implications:**
- All financial reporting systems must have documented controls
- Changes to financial systems require change management approval
- Access controls must prevent unauthorized modifications
- Segregation of duties must be enforced

### MiFID II (Markets in Financial Instruments Directive) — EU

**Scope:** Investment firms and trading venues in the EU
**Key provisions:**
- Transaction reporting to regulators
- Best execution requirements
- Market data transparency
- Investor protection

**Testing implications:**
- All trades must be reported with required fields
- Timestamp precision must be in microseconds
- Best execution algorithms must be validated
- Order rejection reasons must be logged

### Basel III

**Scope:** Banks globally
**Key provisions:**
- Capital adequacy ratios (minimum capital reserves)
- Liquidity coverage ratio (LCR)
- Net stable funding ratio (NSFR)
- Leverage ratio limits

**Testing implications:**
- Risk-weighted asset calculations must be accurate
- Stress test scenarios must model extreme conditions
- Liquidity reports must be generated correctly
- Counterparty credit risk must be calculated

### EMIR (European Market Infrastructure Regulation)

**Scope:** OTC derivatives in the EU
**Key provisions:**
- Central clearing of standardized derivatives
- Trade reporting to trade repositories
- Risk mitigation for non-cleared derivatives

**Testing implications:**
- Derivative trades must be reported within T+1
- Collateral calculations must be accurate
- Clearing eligibility must be determined correctly

---

## 3.2 AML and KYC

### KYC (Know Your Customer)

**Process:**
1. **Customer Identification Program (CIP):** Verify identity using documents
2. **Customer Due Diligence (CDD):** Assess risk profile
3. **Enhanced Due Diligence (EDD):** Additional checks for high-risk customers

**Testing focus:**
- Identity verification workflows
- Risk scoring accuracy
- PEP (Politically Exposed Person) screening
- Sanctions list screening (OFAC, UN)

### AML (Anti-Money Laundering)

**Monitoring:**
- Transaction threshold alerts ($10,000+ in US)
- Suspicious Activity Reports (SARs)
- Pattern detection (structuring, layering)

**Testing focus:**
- Alert generation at correct thresholds
- False positive rates
- SAR filing workflow
- Audit trail of investigator decisions

---

## 3.3 PCI-DSS for Financial Systems

**12 Requirements:**
1. Install and maintain firewall configurations
2. Remove default passwords
3. Protect stored cardholder data
4. Encrypt transmission of cardholder data
5. Use and update antivirus
6. Develop secure systems and applications
7. Restrict access by need-to-know
8. Assign unique user IDs
9. Restrict physical access
10. Track and monitor network access
11. Regularly test security systems
12. Maintain an information security policy

**Testing focus:**
- Card number encryption and masking
- Access control enforcement
- Network segmentation validation
- Vulnerability scanning results

---

## 3.4 Types of Financial Risk

| Risk Type | Description | Testing Focus |
|-----------|-------------|---------------|
| **Credit Risk** | Borrower may default | Credit scoring models, exposure calculations |
| **Market Risk** | Loss from price movements | VaR models, stress testing, scenario analysis |
| **Operational Risk** | Loss from failed processes | Business continuity, error detection, controls |
| **Liquidity Risk** | Inability to meet obligations | Cash flow forecasting, LCR calculations |
| **Compliance Risk** | Penalties from regulation violations | Control testing, reporting accuracy |
| **Cyber Risk** | Data breaches, fraud | Penetration testing, encryption, access controls |

---

## 3.5 Compliance Testing Approaches

### Control Testing

Verify that internal controls are designed and operating effectively:
- **Design effectiveness:** Does the control address the risk?
- **Operating effectiveness:** Does the control work in practice?

### Regression Testing for Regulatory Changes

When regulations change:
1. Identify affected systems and reports
2. Map new requirements to test cases
3. Update test data to reflect new scenarios
4. Execute and validate

### Audit Support Testing

- Reproduce system behavior for auditors
- Provide traceability from requirements to tests
- Generate evidence of control operation

---

## Worked Examples

### Worked Example 1: SOX Control Testing

**Scenario:** A SOX control requires that only authorized users can post journal entries to the general ledger.

**Tests:**
1. **Design test:** Verify the system has a role-based access control that separates journal entry creation from approval
2. **Operating test:**
   - Attempt to post as unauthorized user → should be blocked
   - Post as authorized user with approval → should succeed
   - Attempt to post without approval → should be blocked
   - Verify audit log records who created and who approved

### Worked Example 2: MiFID II Transaction Reporting

**Scenario:** An investment firm must report all executed trades to the regulator within T+1.

**Required fields:**
- Trade ID, instrument identification, price, quantity
- Buyer/seller identifiers, venue, timestamp (microsecond)
- Order ID linked to the trade

**Tests:**
1. Verify all required fields are populated for every trade
2. Check timestamp precision is to the microsecond
3. Validate that rejected orders are not reported as trades
4. Confirm reports are generated and transmitted within T+1
5. Test that instrument identifiers use the correct format (ISIN, LEI)

### Worked Example 3: AML Alert Testing

**Scenario:** A bank's AML system flags cash deposits over $10,000 within a 24-hour period.

**Test cases:**
| Scenario | Expected Result |
|----------|-----------------|
| Customer deposits $6,000 and $5,000 on the same day | Alert generated (total $11,000) |
| Customer deposits $6,000 on Monday and $5,000 on Tuesday | No alert (different days) |
| Customer deposits $10,000 exactly | Alert generated (threshold met) |
| Joint account holders each deposit $6,000 | Alert generated (same account) |
| Exempt customer (registered business) deposits $15,000 | No alert (exemption applied) |
