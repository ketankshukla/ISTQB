# Case Study 2 — Healthcare API Security Assessment

## Context

You are the Security Test Consultant for HealthConnect, a healthcare provider implementing a new REST API for patient data exchange between hospitals, clinics, and mobile apps.

**API Functionality:**
- GET /patients/{id} — Retrieve patient record
- POST /patients — Create patient record
- PUT /patients/{id} — Update patient record
- DELETE /patients/{id} — Delete patient record (soft delete)
- GET /patients/{id}/prescriptions — Get prescriptions
- POST /patients/{id}/prescriptions — Add prescription

**Authentication:** OAuth 2.0 with JWT tokens, scoped to specific patient IDs

**Constraints:**
- HIPAA compliance required
- All PHI must be encrypted at rest and in transit
- Audit log of every data access required
- Patient consent must be verified before data sharing

---

## Task 1: API Security Test Design

**Question:** Design security tests for the patient API.

**Model Answer:**

**Authentication and Authorization Tests:**

| Endpoint | Test | Expected Result |
|----------|------|-----------------|
| GET /patients/123 | Valid JWT with scope `patient:123:read` | Return patient 123 data |
| GET /patients/123 | Valid JWT with scope `patient:456:read` | 403 Forbidden |
| GET /patients/123 | Valid JWT with scope `patient:123:write` | 403 Forbidden (read vs write scope) |
| GET /patients/123 | Expired JWT | 401 Unauthorized |
| GET /patients/123 | Tampered JWT (signature changed) | 401 Unauthorized |
| GET /patients/123 | No JWT | 401 Unauthorized |
| GET /patients/123 | JWT from different application | 401 Unauthorized |

**IDOR (Insecure Direct Object Reference) Tests:**

| Test | Request | Expected Result |
|------|---------|-----------------|
| Sequential ID access | GET /patients/124 (doctor authorized for 123 only) | 403 Forbidden |
| GUID enumeration | GET /patients/{random-guid} | 404 Not Found (no information leak) |
| Bulk ID access | GET /patients?id[]=123&id[]=124 | 403 for unauthorized IDs |

**Input Validation Tests:**

| Field | Malicious Input | Expected Result |
|-------|---------------|-----------------|
| name | `<script>alert(1)</script>` | Sanitized or rejected |
| ssn | `123-45-6789'; DROP TABLE patients; --` | Rejected, parameterized |
| dob | `1970-01-01 OR 1=1` | Rejected, date validation |
| email | `attacker@evil.com<script>` | Rejected, email validation |
| phone | `555-1234; rm -rf /` | Rejected, format validation |
| address | `A"B); SELECT * FROM passwords` | Rejected, parameterized |

**Business Logic Tests:**

| Test | Scenario | Expected Result |
|------|----------|-----------------|
| Consent check | Request data for patient who revoked consent | 403 with consent error |
| Role escalation | Doctor tries to access admin endpoints | 403 Forbidden |
| Time-based access | Access outside approved hours (if policy) | 403 Forbidden |
| Data minimization | Request all fields when only diagnosis needed | Only diagnosis returned |
| Audit completeness | Access patient record | Audit log entry with user, timestamp, patient, action |

---

## Task 2: HIPAA Compliance Testing

**Question:** How do you test HIPAA compliance for the API?

**Model Answer:**

**Technical Safeguards (45 CFR 164.312):**

| Requirement | Test | Method |
|-------------|------|--------|
| Access Control | Verify unique user IDs | Each API call has identifiable, authenticated user |
| Access Control | Emergency access | Break-glass procedure tested; audit trail complete |
| Audit Controls | All PHI access logged | Query audit database; verify every API access logged |
| Integrity | Data not altered in transit | TLS 1.3 enforced; certificate validation |
| Integrity | Data not altered at rest | Hash verification on stored records |
| Person/Entity Authentication | Verify API consumer identity | JWT validation, certificate validation for mTLS |
| Transmission Security | Encryption in transit | TLS scan; no unencrypted endpoints |

**Audit Log Verification:**

```
Test: GET /patients/123
Expected audit log entry:
  timestamp: 2024-06-15T10:30:00Z
  user_id: doctor_456
  user_role: physician
  action: patient_read
  patient_id: 123
  patient_consent: valid
  ip_address: 10.0.1.50
  user_agent: HealthConnect-Mobile/2.1
  result: success
```

**Breach Notification Simulation:**
- Simulate unauthorized access to 500+ patient records
- Verify automated alert triggers within 1 hour
- Verify breach assessment workflow initiates
- Verify notification procedure documented and tested

---

## Task 3: JWT Security Testing

**Question:** The API uses JWT tokens. Design specific JWT security tests.

**Model Answer:**

| Test | Attack | Expected Result |
|------|--------|-----------------|
| Algorithm confusion | Change `alg: RS256` to `alg: none` | Rejected (don't accept `none`) |
| Algorithm confusion | Change `alg: RS256` to `alg: HS256` | Rejected (key confusion) |
| Key ID manipulation | Invalid `kid` pointing to attacker key | Rejected |
| Token expiration | Use expired token | Rejected (check `exp` claim) |
| Not before | Use token with future `nbf` | Rejected |
| Signature stripping | Remove signature portion | Rejected |
| Payload tampering | Modify `sub` claim, keep signature | Rejected (signature mismatch) |
| Weak secret (if HS256) | Brute force JWT secret with jwt_tool | Secret should be uncrackable (128+ bits) |
| Key extraction | Attempt to extract signing key from API | No key exposure |
| Token leakage | Check logs, error messages for tokens | No token exposure |

**Scope Escalation Test:**
```
Valid token scope: "patient:123:read patient:124:read"
Attacker modifies payload to: "patient:123:read patient:999:read"
Expected: Signature verification fails → 401
```

---

## Task 4: Third-Party Integration Security

**Question:** The API integrates with an external pharmacy system. How do you test this integration's security?

**Model Answer:**

**Integration Architecture:**
```
HealthConnect API → mTLS → Pharmacy API
  ↓
Shared patient data with consent
```

**Test Scenarios:**

| Test | Description | Expected Result |
|------|-------------|-----------------|
| mTLS validation | Attempt connection without client cert | Connection refused |
| mTLS validation | Use self-signed certificate | Connection refused (require trusted CA) |
| Certificate expiry | Use expired client certificate | Connection refused |
| Certificate revocation | Use revoked certificate (CRL/OCSP check) | Connection refused |
| Consent propagation | Request prescription for patient without pharmacy consent | 403 Forbidden |
| Data minimization | Pharmacy receives only prescription data, not full record | Verify response contains only necessary fields |
| Audit chain | Verify audit log shows both systems' access | Complete audit trail |
| Timeout handling | Pharmacy API timeout | Graceful degradation, no data corruption |
| Replay attack | Replay valid prescription request | Rejected (nonce/timestamp check) |
| Man-in-the-middle | Intercept traffic between systems | Detected (mTLS prevents) |

**Data Flow Verification:**
```
HealthConnect: Patient 123, consent for pharmacy sharing = true
Pharmacy receives: Patient ID (pseudonymized), medication, dosage, instructions
Pharmacy does NOT receive: SSN, full medical history, unrelated diagnoses
```
