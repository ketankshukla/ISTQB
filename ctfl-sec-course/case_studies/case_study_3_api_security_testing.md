# 📂 Case Study 3 — API Security Testing

## 🎬 Scenario

A public REST API provides access to a SaaS platform. It supports:
- API key authentication for basic endpoints
- OAuth2 for user-specific endpoints
- Webhook callbacks to customer URLs
- File upload for document processing

## ❓ Questions

1. What API-specific security tests are needed?
2. How should authentication and authorization be tested?
3. What input validation tests apply?
4. How should webhook security be verified?

## ✔️ Model Answers

### 🔷 Q1
API-specific tests:
- **Broken Object Level Authorization (BOLA):** Access other users' data by changing IDs
- **Broken Authentication:** Weak API keys, token expiration
- **Excessive Data Exposure:** More data returned than needed
- **Rate limiting:** Bypass or absence of throttling
- **Injection:** SQL, NoSQL, OS command in API parameters
- **Mass assignment:** Update fields that should be read-only

### 🔷 Q2
Authentication and authorization testing:
- API key entropy and transmission (header vs URL)
- OAuth2 token scope validation
- JWT token validation (signature, expiration, claims)
- Horizontal privilege escalation (IDOR)
- Vertical privilege escalation (admin endpoints)
- Token refresh mechanism security

### 🔷 Q3
Input validation tests:
- Content-Type manipulation (send JSON as XML)
- Parameter pollution (duplicate parameters)
- Size limits (oversized payloads)
- Special characters and encoding
- File upload (malicious file types, path traversal)
- SQL injection in query parameters

### 🔷 Q4
Webhook security verification:
- Signature validation (HMAC verification)
- HTTPS enforcement for callback URLs
- Replay attack prevention (timestamp/nonce)
- IP allowlisting validation
- Payload size limits
- Timeout handling for unresponsive endpoints
