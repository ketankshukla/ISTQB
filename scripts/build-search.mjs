// Builds per-course full-text search indexes into public/search/<folder>.json
// Mirrors lib/content.ts ordering/titles so search results match the nav.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "search");

const ACRONYMS = {
  sdlc: "SDLC", atm: "ATM", api: "API", ai: "AI", ml: "ML", ci: "CI", cd: "CD",
  bdd: "BDD", tdd: "TDD", ui: "UI", ux: "UX", qa: "QA", devops: "DevOps", ecommerce: "E-commerce",
};
const prettify = (name) =>
  name.replace(/[_-]/g, " ").split(/\s+/).filter(Boolean)
    .map((w) => ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const ITEM_EMOJI = [
  ["cheat", "📄"], ["flashcard", "🃏"], ["cram", "⏰"], ["glossary", "📖"],
  ["progress", "📈"], ["coverage", "📋"], ["strategy", "♟️"], ["study", "🗓️"],
  ["course overview", "🌟"], ["overview", "🌟"], ["lesson", "📘"], ["worked", "💡"],
  ["trap", "🪤"], ["practice", "❓"], ["question", "❓"], ["answer", "✔️"],
  ["mock", "📝"], ["case", "📂"],
];
const itemEmoji = (t) => { const l = t.toLowerCase(); for (const [k, e] of ITEM_EMOJI) if (l.includes(k)) return e; return "📄"; };

const SECTION_EMOJI = [
  ["fundamental", "🏗️"], ["sdlc", "🔁"], ["lifecycle", "🔁"], ["static", "🔍"],
  ["analysis", "🎯"], ["design", "🎯"], ["manag", "🗂️"], ["tool", "🛠️"],
  ["automation", "⚙️"], ["process", "🔄"], ["technique", "🎯"], ["quality", "💎"],
  ["review", "🔎"], ["introduction", "🌟"], ["ai", "🤖"], ["ml", "🤖"],
  ["machine", "🤖"], ["performance", "⚡"], ["security", "🔒"], ["mobile", "📱"],
  ["agile", "🏃"], ["model", "📐"], ["risk", "⚠️"], ["test", "🧪"],
];
const sectionEmoji = (n) => { const l = n.toLowerCase(); for (const [k, e] of SECTION_EMOJI) if (l.includes(k)) return e; return "📚"; };

function docTitle(fileName, isRoot) {
  const base = fileName.replace(/\.md$/i, "");
  const low = base.toLowerCase();
  if (low === "readme") return isRoot ? "Course Overview" : "Overview";
  if (low === "study_plan") return "Study Plan";
  if (low === "progress_tracker") return "Progress Tracker";
  if (low === "exam_strategy") return "Exam Strategy";
  if (low === "coverage_report") return "Coverage Report";
  if (low === "glossary") return "Glossary";
  if (low.includes("cheat")) return "Exam Cheat Sheet";
  if (low.includes("flashcard")) return "Flashcards";
  if (low.includes("cram")) return "Week-Before Cram";
  let m = low.match(/^case_study_(\d+)_(.*)$/);
  if (m) return `Case ${m[1]} - ${prettify(m[2])}`;
  m = low.match(/^mock_exam_(\d+)/);
  if (m) return low.includes("answer") ? `Mock Exam ${m[1]} - Answer Key` : `Mock Exam ${m[1]}`;
  if (low === "lessons") return "Lessons";
  if (low === "exam_traps") return "Exam Traps";
  if (low === "practice_questions") return "Practice Questions";
  if (low === "worked_examples") return "Worked Examples";
  return prettify(base);
}

const stripStyle = (t) => t.replace(/^\uFEFF?\s*<!-- ISTQB-BEAUTIFY-V1 -->[\s\S]*?<\/style>\s*/, "");
const toSlug = (rel) => rel.replace(/\.md$/i, "").split("/");
const fileToTitle = (rel) => {
  const isRoot = !rel.includes("/");
  return `${itemEmoji(docTitle(path.basename(rel), isRoot))} ${docTitle(path.basename(rel), isRoot)}`;
};

const CHAPTER_ORDER = ["readme", "lessons", "worked_examples", "exam_traps", "practice_questions"];
const chapterRank = (f) => { const i = CHAPTER_ORDER.indexOf(f.replace(/\.md$/i, "").toLowerCase()); return i < 0 ? 99 : i; };

const listMd = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".md")) : []);

function buildItems(folder) {
  const dir = path.join(ROOT, folder);
  const out = []; // { file, title, section }
  const rootFiles = listMd(dir).sort();
  const startNames = ["readme", "study_plan", "progress_tracker", "exam_strategy", "coverage_report"];
  for (const n of startNames) {
    const f = rootFiles.find((x) => x.replace(/\.md$/i, "").toLowerCase() === n);
    if (f) out.push({ file: f, title: fileToTitle(f), section: "🏁 Start Here" });
  }
  for (const f of rootFiles) {
    const low = f.replace(/\.md$/i, "").toLowerCase();
    if (startNames.includes(low)) continue;
    out.push({ file: f, title: fileToTitle(f), section: "🎓 Reference" });
  }
  const subdirs = fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "assets").map((d) => d.name).sort();
  for (const name of subdirs) {
    const files = listMd(path.join(dir, name));
    if (!files.length) continue;
    if (name === "case_studies") {
      for (const f of files.sort()) out.push({ file: `${name}/${f}`, title: fileToTitle(`${name}/${f}`), section: "📂 Case Studies" });
    } else if (name === "mock_exams") {
      const sorted = files.slice().sort((a, b) => {
        const na = parseInt((a.match(/(\d+)/) || ["0"])[1], 10);
        const nb = parseInt((b.match(/(\d+)/) || ["0"])[1], 10);
        if (na !== nb) return na - nb;
        const aa = a.toLowerCase().includes("answer") ? 1 : 0;
        const ab = b.toLowerCase().includes("answer") ? 1 : 0;
        if (aa !== ab) return aa - ab;
        return a.localeCompare(b);
      });
      for (const f of sorted) out.push({ file: `${name}/${f}`, title: fileToTitle(`${name}/${f}`), section: "📝 Mock Exams" });
    } else {
      const sorted = files.slice().sort((a, b) => chapterRank(a) - chapterRank(b) || a.localeCompare(b));
      const m = name.match(/^(\d+)[_-](.*)$/);
      const section = m ? `${sectionEmoji(m[2])} Ch.${parseInt(m[1], 10)} - ${prettify(m[2])}` : `${sectionEmoji(name)} ${prettify(name)}`;
      for (const f of sorted) out.push({ file: `${name}/${f}`, title: fileToTitle(`${name}/${f}`), section });
    }
  }
  return out;
}

fs.mkdirSync(OUT, { recursive: true });
const folders = fs.readdirSync(ROOT).filter((n) => {
  try { return /-course$/.test(n) && fs.statSync(path.join(ROOT, n)).isDirectory(); } catch { return false; }
});

let total = 0;
for (const folder of folders) {
  const items = buildItems(folder).map((it) => {
    const raw = stripStyle(fs.readFileSync(path.join(ROOT, folder, it.file), "utf8"));
    return { title: it.title, section: it.section, slug: toSlug(it.file), text: raw };
  });
  fs.writeFileSync(path.join(OUT, `${folder}.json`), JSON.stringify(items));
  total += items.length;
}
console.log(`Search index built: ${folders.length} courses, ${total} docs -> public/search/`);
