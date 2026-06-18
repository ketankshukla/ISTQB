# 🪤 Chapter 4 — Exam Traps

## 🪤 Trap 1: Fine-Tuning as Default Solution

**Trap:** Answers that recommend fine-tuning for every testing scenario, especially when requirements change frequently or data is limited.

**Defense:** Fine-tuning is powerful but expensive and slow. RAG is usually better for dynamic knowledge. Prompt engineering is usually better for quick experiments. Choose the simplest adequate solution.

## 🪤 Trap 2: Ignoring Data Sensitivity in Architecture Choice

**Trap:** Answers that recommend public LLM APIs for highly sensitive testing data without mentioning privacy mitigations or alternative architectures.

**Defense:** Architecture choice must consider data sensitivity. Public APIs for sensitive data require anonymization or organizational approval. On-premise or private endpoints may be required.

## 🪤 Trap 3: Treating LLMOps as Optional

**Trap:** Answers that treat LLMOps as "nice to have" rather than essential for production GenAI use in testing.

**Defense:** The syllabus treats LLMOps as a core component. Without LLMOps, teams cannot ensure quality consistency, auditability, cost control, or continuous improvement.

## 🪤 Trap 4: Confusing RAG with Fine-Tuning

**Trap:** Answers that describe RAG as a form of fine-tuning, or suggest that RAG updates the model's weights.

**Defense:** RAG does not change model weights. It retrieves relevant documents and includes them in the prompt context. Fine-tuning actually updates the model's parameters. They are fundamentally different approaches.

## 🪤 Trap 5: Overlooking Catastrophic Forgetting

**Trap:** Answers that present fine-tuning as having no downsides.

**Defense:** Catastrophic forgetting, overfitting, and maintenance burden are real fine-tuning risks. The syllabus expects you to know these trade-offs.

## 🪤 Trap 6: Architecture Over-Engineering

**Trap:** Answers that propose multi-model hybrid architectures for simple, low-volume testing tasks.

**Defense:** Match architecture complexity to the problem. A simple API call may be sufficient for many testing tasks. Complexity should be justified by requirements (scale, latency, validation needs).

## 🪤 Trap 7: Ignoring Provenance Requirements

**Trap:** Answers that recommend fine-tuning when the organization needs to trace answers back to specific source documents.

**Defense:** RAG provides provenance through retrieved chunks. Fine-tuned models embed knowledge opaquely into weights and cannot cite sources. Choose RAG when traceability matters.
