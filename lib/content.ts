import "server-only";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

export type DocItem = { title: string; file: string; slug: string[] };
export type Group = { section: string; items: DocItem[] };
export type Manifest = { course: string; folder: string; groups: Group[] };
export type Course = { folder: string; code: string; title: string; level: string };

// ---------- helpers ----------
const ACRONYMS: Record<string, string> = {
  sdlc: "SDLC", atm: "ATM", api: "API", ai: "AI", ml: "ML", ci: "CI", cd: "CD",
  bdd: "BDD", tdd: "TDD", ui: "UI", ux: "UX", qa: "QA", devops: "DevOps", ecommerce: "E-commerce",
};
function prettify(name: string): string {
  return name
    .replace(/[_-]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const ITEM_EMOJI: [string, string][] = [
  ["cheat", "📄"], ["flashcard", "🃏"], ["cram", "⏰"], ["glossary", "📖"],
  ["progress", "📈"], ["coverage", "📋"], ["strategy", "♟️"], ["study", "🗓️"],
  ["course overview", "🌟"], ["overview", "🌟"], ["lesson", "📘"], ["worked", "💡"],
  ["trap", "🪤"], ["practice", "❓"], ["question", "❓"], ["answer", "✔️"],
  ["mock", "📝"], ["case", "📂"],
];
function itemEmoji(title: string): string {
  const l = title.toLowerCase();
  for (const [k, e] of ITEM_EMOJI) if (l.includes(k)) return e;
  return "📄";
}

const SECTION_EMOJI: [string, string][] = [
  ["fundamental", "🏗️"], ["sdlc", "🔁"], ["lifecycle", "🔁"], ["static", "🔍"],
  ["analysis", "🎯"], ["design", "🎯"], ["manag", "🗂️"], ["tool", "🛠️"],
  ["automation", "⚙️"], ["process", "🔄"], ["technique", "🎯"], ["quality", "💎"],
  ["review", "🔎"], ["introduction", "🌟"], ["ai", "🤖"], ["ml", "🤖"],
  ["machine", "🤖"], ["performance", "⚡"], ["security", "🔒"], ["mobile", "📱"],
  ["agile", "🏃"], ["model", "📐"], ["risk", "⚠️"], ["test", "🧪"],
];
function sectionEmoji(name: string): string {
  const l = name.toLowerCase();
  for (const [k, e] of SECTION_EMOJI) if (l.includes(k)) return e;
  return "📚";
}

function docTitle(fileName: string, isRoot: boolean): string {
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

function fileToSlug(relFile: string): string[] {
  return relFile.replace(/\.md$/i, "").split("/");
}
export function slugToFile(slug: string[]): string {
  return slug.join("/") + ".md";
}

function makeItem(relFile: string, fileName: string, isRoot: boolean): DocItem {
  const t = docTitle(fileName, isRoot);
  return { title: `${itemEmoji(t)} ${t}`, file: relFile, slug: fileToSlug(relFile) };
}

export function stripEmbeddedStyle(text: string): string {
  return text.replace(/^\uFEFF?\s*<!-- ISTQB-BEAUTIFY-V1 -->[\s\S]*?<\/style>\s*/, "");
}

// ---------- filesystem ----------
function isCourseFolder(name: string): boolean {
  return /-course$/.test(name) && fs.statSync(path.join(ROOT, name)).isDirectory();
}
export function getCourseFolders(): string[] {
  return fs.readdirSync(ROOT).filter((n) => {
    try { return isCourseFolder(n); } catch { return false; }
  }).sort();
}

function listMd(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".md"));
}

export function getCourseTitle(folder: string): string {
  const readme = path.join(ROOT, folder, "README.md");
  if (fs.existsSync(readme)) {
    let raw = fs.readFileSync(readme, "utf8");
    raw = stripEmbeddedStyle(raw);
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^#\s+(.+)$/);
      if (m) {
        const t = m[1].trim().replace(/^[^\x00-\x7F]+\s*/, "").trim();
        if (t) return t;
      }
    }
  }
  return prettify(folder.replace(/-course$/, ""));
}

export function getLevel(folder: string): string {
  if (folder === "ctfl-course") return "Foundation Level (Core)";
  if (folder.startsWith("ctfl-")) return "Foundation Level — Extensions";
  if (folder.startsWith("ctal-")) return "Advanced Level";
  return "Specialist Modules";
}

const CHAPTER_ORDER = ["readme", "lessons", "worked_examples", "exam_traps", "practice_questions"];
function chapterRank(fileName: string): number {
  const i = CHAPTER_ORDER.indexOf(fileName.replace(/\.md$/i, "").toLowerCase());
  return i < 0 ? 99 : i;
}

const manifestCache = new Map<string, Manifest>();
export function buildManifest(folder: string): Manifest {
  const cached = manifestCache.get(folder);
  if (cached) return cached;
  const courseDir = path.join(ROOT, folder);
  const groups: Group[] = [];

  // root files
  const rootFiles = listMd(courseDir).sort();
  const startNames = ["readme", "study_plan", "progress_tracker", "exam_strategy", "coverage_report"];
  const start: DocItem[] = [];
  const ref: DocItem[] = [];
  for (const n of startNames) {
    const f = rootFiles.find((x) => x.replace(/\.md$/i, "").toLowerCase() === n);
    if (f) start.push(makeItem(f, f, true));
  }
  for (const f of rootFiles) {
    const low = f.replace(/\.md$/i, "").toLowerCase();
    if (startNames.includes(low)) continue;
    ref.push(makeItem(f, f, true));
  }
  if (start.length) groups.push({ section: "🏁 Start Here", items: start });
  if (ref.length) groups.push({ section: "🎓 Reference", items: ref });

  // subfolders
  const subdirs = fs.readdirSync(courseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "assets")
    .map((d) => d.name).sort();

  for (const name of subdirs) {
    const files = listMd(path.join(courseDir, name));
    if (!files.length) continue;

    if (name === "case_studies") {
      const items = files.sort().map((f) => makeItem(`${name}/${f}`, f, false));
      groups.push({ section: "📂 Case Studies", items });
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
      const items = sorted.map((f) => makeItem(`${name}/${f}`, f, false));
      groups.push({ section: "📝 Mock Exams", items });
    } else {
      const sorted = files.slice().sort((a, b) => chapterRank(a) - chapterRank(b) || a.localeCompare(b));
      const items = sorted.map((f) => makeItem(`${name}/${f}`, f, false));
      const m = name.match(/^(\d+)[_-](.*)$/);
      const section = m
        ? `${sectionEmoji(m[2])} Ch.${parseInt(m[1], 10)} - ${prettify(m[2])}`
        : `${sectionEmoji(name)} ${prettify(name)}`;
      groups.push({ section, items });
    }
  }

  const manifest = { course: getCourseTitle(folder), folder, groups };
  manifestCache.set(folder, manifest);
  return manifest;
}

let coursesCache: Course[] | null = null;
export function getCourses(): Course[] {
  if (coursesCache) return coursesCache;
  coursesCache = getCourseFolders()
    .map((folder) => ({
      folder,
      code: folder.replace(/-course$/, "").toUpperCase(),
      title: getCourseTitle(folder),
      level: getLevel(folder),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
  return coursesCache;
}

export function flatDocs(folder: string): (DocItem & { section: string })[] {
  const out: (DocItem & { section: string })[] = [];
  for (const g of buildManifest(folder).groups)
    for (const it of g.items) out.push({ ...it, section: g.section });
  return out;
}

export function readDoc(folder: string, relFile: string): string | null {
  const full = path.join(ROOT, folder, relFile);
  const resolved = path.resolve(full);
  if (!resolved.startsWith(path.resolve(path.join(ROOT, folder)))) return null; // path traversal guard
  if (!fs.existsSync(resolved)) return null;
  return stripEmbeddedStyle(fs.readFileSync(resolved, "utf8"));
}

export type SearchHit = { title: string; section: string; slug: string[]; snippet: string };
export function searchCourse(folder: string, query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: SearchHit[] = [];
  for (const d of flatDocs(folder)) {
    const body = (readDoc(folder, d.file) || "").toLowerCase();
    const inTitle = d.title.toLowerCase().includes(q);
    const idx = body.indexOf(q);
    if (inTitle || idx >= 0) {
      let snippet = "";
      if (idx >= 0) {
        const raw = readDoc(folder, d.file) || "";
        const start = Math.max(0, idx - 40);
        const end = Math.min(raw.length, idx + q.length + 80);
        snippet = (start > 0 ? "…" : "") + raw.slice(start, end).replace(/\s+/g, " ") + (end < raw.length ? "…" : "");
      }
      hits.push({ title: d.title, section: d.section, slug: d.slug, snippet });
    }
  }
  return hits;
}

export type MasterDoc = { folder: string; course: string; level: string; section: string; title: string; slug: string[] };
export function masterIndex(): MasterDoc[] {
  const out: MasterDoc[] = [];
  for (const c of getCourses()) {
    for (const g of buildManifest(c.folder).groups)
      for (const it of g.items)
        out.push({ folder: c.folder, course: c.title, level: c.level, section: g.section, title: it.title, slug: it.slug });
  }
  return out;
}
