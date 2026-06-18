# 📂 Case Study 3 — Microservices Testing Strategy

## ⭐ Context

You are the Test Architect for HealthHub, a healthcare platform with 20+ microservices. The monolith was broken down last year, but testing hasn't adapted.

**Current Testing:**
- End-to-end tests through UI take 6 hours
- 40% of tests fail intermittently (flaky)
- Integration tests require all 20 services running
- Test environments are expensive and unstable

**Services:**
- Patient Service, Appointment Service, Billing Service
- Notification Service, Analytics Service, Integration Service (EHR)

**Constraints:**
- HIPAA compliance required
- PHI (Protected Health Information) must not leak to test environments
- EHR integration only available in production-like environment

---

## ♟️ Task 1: Test Strategy

**Question:** Design a testing strategy for the microservices.

**Model Answer:**

**Test Pyramid:**

| Level | % of Tests | Scope | Execution |
|-------|-----------|-------|-----------|
| **Unit** | 60% | Individual service, mocked dependencies | < 1 min per service |
| **Contract** | 20% | API consumer/provider agreements | < 5 min |
| **Integration** | 10% | Small groups of related services | < 15 min |
| **E2E** | 10% | Critical user journeys only | < 30 min |

**Service Test Isolation:**
- Each service tested independently with mocked dependencies
- Contract tests verify inter-service communication
- Integration tests run related services only (e.g., Patient + Appointment)

---

## ⭐ Task 2: Contract Testing

**Question:** Implement contract tests for Patient Service and Appointment Service.

**Model Answer:**

**Consumer:** Appointment Service (needs patient data)

```python
@pact.consumer('appointment-service')
@pact.provider('patient-service')
def test_get_patient():
    pact.given('patient 123 exists').upon_receiving('get patient by id').with_request(
        method='GET',
        path='/patients/123',
        headers={'Authorization': 'Bearer token'}
    ).will_respond_with(200, body={
        'id': '123',
        'name': 'John Doe',
        'dateOfBirth': '1980-01-15'
    })
    
    patient = patient_client.get_patient('123')
    assert patient.name == 'John Doe'
```

**Provider verification:** Patient Service CI runs pact verification against all consumers.

---

## 🗃️ Task 3: Test Data and Compliance

**Question:** Handle HIPAA-compliant test data.

**Model Answer:**

**Data Strategy:**
| Data Type | Approach |
|-----------|----------|
| Patient demographics | Synthetic data (Faker library) |
| Medical records | De-identified production subset (remove names, SSN, DOB) |
| Appointment schedules | Generated synthetic data |
| Billing codes | Real CPT/ICD codes (public data) |

**Compliance checks:**
- Automated scan for PHI in test data (regex for SSN, names)
- Test environment access restricted to authorized personnel
- Audit log of all test data access
- Test data deletion after 30 days

---

## ♟️ Task 4: Environment Strategy

**Question:** Design cost-effective test environments.

**Model Answer:**

| Environment | Services | Data | Duration |
|-------------|----------|------|----------|
| **Local dev** | Single service + mocks | Synthetic | Always on |
| **CI** | Service under test + Testcontainers | Synthetic per run | 15 min |
| **Staging** | All services (scaled down) | De-identified subset | Always on |
| **Pre-prod** | All services (production-like) | De-identified subset | On-demand |
| **E2E** | All services + EHR simulator | Synthetic | On-demand |

**Cost optimization:**
- CI environments use ephemeral Kubernetes pods
- Staging runs on spot instances (70% cost reduction)
- Pre-prod shuts down overnight, starts on demand
- EHR integration uses simulator in test; real EHR only in pre-prod

**Environment parity:**
- Same base Docker images across all environments
- Same Helm charts, different values.yaml (replicas, resources)
- Terraform modules shared between staging and pre-prod
