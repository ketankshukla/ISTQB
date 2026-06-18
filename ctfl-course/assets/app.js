/* ===== ISTQB CTFL Static Site — navigation + markdown rendering ===== */

const NAV = [
  {
    section: "🚀 Get Started",
    items: [
      { title: "🌟 Course Overview", path: "README.md" },
      { title: "🗓️ Study Plan", path: "STUDY_PLAN.md" },
      { title: "📈 Progress Tracker", path: "PROGRESS_TRACKER.md" },
      { title: "♟️ Exam Strategy", path: "EXAM_STRATEGY.md" },
      { title: "📋 Coverage Report", path: "COVERAGE_REPORT.md" },
    ],
  },
  {
    section: "🏗️ Ch.1 — Fundamentals of Testing",
    items: [
      { title: "🌟 Overview", path: "01_fundamentals_of_testing/README.md" },
      { title: "📘 Lessons", path: "01_fundamentals_of_testing/lessons.md" },
      { title: "🪤 Exam Traps", path: "01_fundamentals_of_testing/exam_traps.md" },
      { title: "❓ Practice Questions", path: "01_fundamentals_of_testing/practice_questions.md" },
    ],
  },
  {
    section: "🔁 Ch.2 — Testing Throughout the SDLC",
    items: [
      { title: "🌟 Overview", path: "02_testing_throughout_sdlc/README.md" },
      { title: "📘 Lessons", path: "02_testing_throughout_sdlc/lessons.md" },
      { title: "🪤 Exam Traps", path: "02_testing_throughout_sdlc/exam_traps.md" },
      { title: "❓ Practice Questions", path: "02_testing_throughout_sdlc/practice_questions.md" },
    ],
  },
  {
    section: "🔍 Ch.3 — Static Testing",
    items: [
      { title: "🌟 Overview", path: "03_static_testing/README.md" },
      { title: "📘 Lessons", path: "03_static_testing/lessons.md" },
      { title: "🪤 Exam Traps", path: "03_static_testing/exam_traps.md" },
      { title: "❓ Practice Questions", path: "03_static_testing/practice_questions.md" },
    ],
  },
  {
    section: "🎯 Ch.4 — Test Analysis & Design",
    items: [
      { title: "🌟 Overview", path: "04_test_analysis_and_design/README.md" },
      { title: "📘 Lessons", path: "04_test_analysis_and_design/lessons.md" },
      { title: "💡 Worked Examples", path: "04_test_analysis_and_design/worked_examples.md" },
      { title: "🪤 Exam Traps", path: "04_test_analysis_and_design/exam_traps.md" },
      { title: "❓ Practice Questions", path: "04_test_analysis_and_design/practice_questions.md" },
    ],
  },
  {
    section: "🗂️ Ch.5 — Managing Test Activities",
    items: [
      { title: "🌟 Overview", path: "05_managing_test_activities/README.md" },
      { title: "📘 Lessons", path: "05_managing_test_activities/lessons.md" },
      { title: "💡 Worked Examples", path: "05_managing_test_activities/worked_examples.md" },
      { title: "🪤 Exam Traps", path: "05_managing_test_activities/exam_traps.md" },
      { title: "❓ Practice Questions", path: "05_managing_test_activities/practice_questions.md" },
    ],
  },
  {
    section: "🛠️ Ch.6 — Test Tools",
    items: [
      { title: "🌟 Overview", path: "06_test_tools/README.md" },
      { title: "📘 Lessons", path: "06_test_tools/lessons.md" },
      { title: "🪤 Exam Traps", path: "06_test_tools/exam_traps.md" },
      { title: "❓ Practice Questions", path: "06_test_tools/practice_questions.md" },
    ],
  },
  {
    section: "📂 Case Studies",
    items: [
      { title: "🛒 1 — E-commerce Checkout", path: "case_studies/case_study_1_ecommerce_checkout.md" },
      { title: "🏧 2 — ATM", path: "case_studies/case_study_2_atm.md" },
      { title: "🏦 3 — Loan Application", path: "case_studies/case_study_3_loan_application.md" },
      { title: "🔐 4 — Login Lockout", path: "case_studies/case_study_4_login_lockout.md" },
    ],
  },
  {
    section: "📝 Mock Exams",
    items: [
      { title: "📝 Mock Exam 1", path: "mock_exams/mock_exam_1.md" },
      { title: "✔️ Mock Exam 1 — Answers", path: "mock_exams/mock_exam_1_answers.md" },
      { title: "📝 Mock Exam 2", path: "mock_exams/mock_exam_2.md" },
      { title: "✔️ Mock Exam 2 — Answers", path: "mock_exams/mock_exam_2_answers.md" },
      { title: "📝 Mock Exam 3", path: "mock_exams/mock_exam_3.md" },
      { title: "✔️ Mock Exam 3 — Answers", path: "mock_exams/mock_exam_3_answers.md" },
    ],
  },
  {
    section: "🎓 Exam Prep & Reference",
    items: [
      { title: "📄 Exam Cheat Sheet", path: "CTFL_Exam_Cheat_Sheet.md" },
      { title: "🃏 Flashcards", path: "CTFL_Flashcards.md" },
      { title: "⏰ Week-Before Cram", path: "CTFL_Week_Before_Cram.md" },
      { title: "📖 Glossary", path: "GLOSSARY.md" },
    ],
  },
];

const DEFAULT_PATH = "README.md";

/* Remove the embedded <style> block (the site supplies its own styling). */
function stripEmbeddedStyle(text) {
  return text.replace(/^\uFEFF?\s*<!-- ISTQB-BEAUTIFY-V1 -->[\s\S]*?<\/style>\s*/, "");
}

function buildSidebar() {
  const nav = document.getElementById("nav");
  NAV.forEach((group, gi) => {
    const section = document.createElement("div");
    section.className = "nav-section";

    const head = document.createElement("button");
    head.className = "nav-head";
    head.innerHTML = `<span>${group.section}</span><span class="chev">▾</span>`;
    head.addEventListener("click", () => section.classList.toggle("collapsed"));

    const ul = document.createElement("ul");
    ul.className = "nav-items";
    group.items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = item.title;
      a.href = "#" + encodeURIComponent(item.path);
      a.dataset.path = item.path;
      li.appendChild(a);
      ul.appendChild(li);
    });

    section.appendChild(head);
    section.appendChild(ul);
    nav.appendChild(section);
  });
}

function setActive(path) {
  document.querySelectorAll(".nav-items a").forEach((a) => {
    a.classList.toggle("active", a.dataset.path === path);
  });
}

async function loadDoc(path) {
  const content = document.getElementById("content");
  content.innerHTML = '<div class="loading">⏳ Loading…</div>';
  try {
    const res = await fetch(path, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let text = await res.text();
    text = stripEmbeddedStyle(text);
    content.innerHTML = marked.parse(text);
    setActive(path);
    document.querySelector(".content-wrap").scrollTo({ top: 0 });
    // close mobile sidebar after selection
    document.getElementById("sidebar").classList.remove("open");
  } catch (err) {
    content.innerHTML =
      `<div class="error">⚠️ Could not load <code>${path}</code> (${err.message}).<br>` +
      `If you opened this file directly, run it through a local server (see README).</div>`;
  }
}

function routeFromHash() {
  const raw = location.hash.replace(/^#/, "");
  const path = raw ? decodeURIComponent(raw) : DEFAULT_PATH;
  loadDoc(path);
}

document.addEventListener("DOMContentLoaded", () => {
  marked.setOptions({ gfm: true, breaks: false });
  buildSidebar();

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
});
