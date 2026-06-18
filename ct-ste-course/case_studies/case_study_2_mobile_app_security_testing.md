# 📂 Case Study 2 — Mobile App Security Testing

## ⭐ Context

You are testing SecureBank, a mobile banking app for iOS and Android.

**Features:**
- Account balance and transactions
- Mobile check deposit
- Biometric authentication
- Push notifications

**Concerns:**
- Sensitive financial data on device
- Jailbroken/rooted devices
- API communication security
- Local data storage

---

## ⭐ Task 1: Test Scope

**Question:** Define security test scope for the mobile app.

**Model Answer:**

**In-scope:**
- iOS and Android apps
- API communication
- Local data storage (Keychain, SharedPreferences)
- Biometric authentication
- Certificate pinning
- Deep linking

**Out-of-scope:**
- Backend infrastructure (separate assessment)
- Third-party SDK internals
- Physical device theft recovery

---

## ⭐ Task 2: Testing Approach

**Question:** Select techniques for mobile security testing.

**Model Answer:**

| Area | Technique | Tool |
|------|-----------|------|
| Static analysis | SAST (MobSF) | MobSF, Semgrep |
| Dynamic analysis | Runtime manipulation (Frida) | Frida, Objection |
| Network | Traffic interception (MitM) | Burp Suite, OWASP ZAP |
| Storage | Data extraction | iMazing, adb |
| Reverse engineering | APK/IPA analysis | JADX, Ghidra |

---

## ⭐ Task 3: Findings and Remediation

**Question:** Handle common mobile security findings.

**Model Answer:**

| Finding | Risk | Fix | Verification |
|---------|------|-----|--------------|
| Sensitive data in logs | High | Remove PII from logs | Log review |
| No certificate pinning | Medium | Implement pinning | MITM test fails |
| Weak Keychain protection | Medium | Use appropriate protection class | Extraction test |
| Debug build in production | High | Remove debug symbols | APK analysis |
| No root detection | Low | Implement root/jailbreak detection | Test on rooted device |
| Hard-coded API keys | High | Move to server or secure storage | Code review + SAST |

---

## 🔒 Task 4: API Security

**Question:** Test API security for mobile-backend communication.

**Model Answer:**

**Tests:**
- Authentication: Token refresh, expiration, replay
- Authorization: Access other users' data
- Input validation: SQL injection, command injection via API
- Rate limiting: Brute force, abuse
- Data leakage: Sensitive fields in API responses

**Findings:**
- API returns full account object including internal ID
- Fix: Return only fields needed by mobile app
