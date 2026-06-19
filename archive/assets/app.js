/* ===== ISTQB Master Hub — choose a course (left), read content (right) ===== */

let COURSES = [];
const MANIFEST_CACHE = {};   // folder -> manifest
const DOC_CACHE = {};        // "folder::path" -> text
let CURRENT_FOLDER = null;
let CURRENT_FLAT = [];       // flat list for current course (next/prev)

const LEVEL_ORDER = [
  "Foundation Level (Core)",
  "Foundation Level — Extensions",
  "Advanced Level",
  "Specialist Modules",
];

function stripEmbeddedStyle(text) {
  return text.replace(/^\uFEFF?\s*<!-- ISTQB-BEAUTIFY-V1 -->[\s\S]*?<\/style>\s*/, "");
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function key(folder, path) { return folder + "::" + path; }
function parseHash() {
  const raw = location.hash.replace(/^#/, "");
  if (!raw) return null;
  const i = raw.indexOf("::");
  if (i < 0) return null;
  return { folder: decodeURIComponent(raw.slice(0, i)), path: decodeURIComponent(raw.slice(i + 2)) };
}
function makeHash(folder, path) { return "#" + encodeURIComponent(folder) + "::" + encodeURIComponent(path); }

async function getManifest(folder) {
  if (MANIFEST_CACHE[folder]) return MANIFEST_CACHE[folder];
  const res = await fetch(folder + "/manifest.json", { cache: "no-cache" });
  const m = await res.json();
  MANIFEST_CACHE[folder] = m;
  return m;
}
async function getDoc(folder, path) {
  const k = key(folder, path);
  if (DOC_CACHE[k] != null) return DOC_CACHE[k];
  const res = await fetch(folder + "/" + path, { cache: "no-cache" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = stripEmbeddedStyle(await res.text());
  DOC_CACHE[k] = text;
  return text;
}

function buildSidebar() {
  const nav = document.getElementById("nav");
  nav.innerHTML = "";
  const byLevel = {};
  COURSES.forEach((c) => { (byLevel[c.level] = byLevel[c.level] || []).push(c); });

  LEVEL_ORDER.filter((l) => byLevel[l]).forEach((level) => {
    const lvl = document.createElement("div");
    lvl.className = "level";
    const lh = document.createElement("div");
    lh.className = "level-head";
    lh.textContent = level;
    lvl.appendChild(lh);

    byLevel[level].forEach((c) => {
      const sec = document.createElement("div");
      sec.className = "nav-section collapsed";
      const head = document.createElement("button");
      head.className = "nav-head course-head";
      head.innerHTML = `<span>📘 ${escapeHtml(c.title)}</span><span class="chev">▾</span>`;
      const body = document.createElement("div");
      body.className = "course-body";
      body.dataset.loaded = "0";
      body.dataset.folder = c.folder;

      head.addEventListener("click", async () => {
        sec.classList.toggle("collapsed");
        if (body.dataset.loaded === "0" && !sec.classList.contains("collapsed")) {
          body.innerHTML = '<div class="loading mini">⏳ Loading…</div>';
          try {
            const m = await getManifest(c.folder);
            body.innerHTML = "";
            m.groups.forEach((g) => {
              const gh = document.createElement("div");
              gh.className = "grp-head";
              gh.textContent = g.section;
              body.appendChild(gh);
              const ul = document.createElement("ul");
              ul.className = "nav-items";
              g.items.forEach((it) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = it.title;
                a.href = makeHash(c.folder, it.path);
                a.dataset.k = key(c.folder, it.path);
                li.appendChild(a);
                ul.appendChild(li);
              });
              body.appendChild(ul);
            });
            body.dataset.loaded = "1";
          } catch (e) {
            body.innerHTML = '<div class="error mini">⚠️ manifest.json missing</div>';
          }
        }
      });

      sec.appendChild(head);
      sec.appendChild(body);
      lvl.appendChild(sec);
    });
    nav.appendChild(lvl);
  });
}

function setActive(k) {
  document.querySelectorAll(".nav-items a").forEach((a) => a.classList.toggle("active", a.dataset.k === k));
}

async function ensureCourseExpanded(folder) {
  const body = document.querySelector(`.course-body[data-folder="${folder}"]`);
  if (body && body.dataset.loaded === "0") {
    const head = body.previousElementSibling;
    body.closest(".nav-section").classList.remove("collapsed");
    head.click();
    // wait briefly for manifest render
    await getManifest(folder).catch(() => {});
  } else if (body) {
    body.closest(".nav-section").classList.remove("collapsed");
  }
}

function renderNextPrev(folder, path) {
  const idx = CURRENT_FLAT.findIndex((d) => d.path === path);
  if (idx < 0) return "";
  const prev = idx > 0 ? CURRENT_FLAT[idx - 1] : null;
  const next = idx < CURRENT_FLAT.length - 1 ? CURRENT_FLAT[idx + 1] : null;
  let html = '<nav class="pager">';
  html += prev ? `<a class="pager-btn prev" href="${makeHash(folder, prev.path)}"><span class="lbl">◀ Previous</span><span class="ttl">${escapeHtml(prev.title)}</span></a>` : `<span class="pager-btn disabled"></span>`;
  html += next ? `<a class="pager-btn next" href="${makeHash(folder, next.path)}"><span class="lbl">Next ▶</span><span class="ttl">${escapeHtml(next.title)}</span></a>` : `<span class="pager-btn disabled"></span>`;
  html += "</nav>";
  return html;
}

async function loadDoc(folder, path) {
  const content = document.getElementById("content");
  content.innerHTML = '<div class="loading">⏳ Loading…</div>';
  try {
    const m = await getManifest(folder);
    CURRENT_FOLDER = folder;
    CURRENT_FLAT = [];
    m.groups.forEach((g) => g.items.forEach((it) => CURRENT_FLAT.push(it)));
    document.getElementById("crumb").textContent = m.course;
    const text = await getDoc(folder, path);
    content.innerHTML = marked.parse(text) + renderNextPrev(folder, path);
    await ensureCourseExpanded(folder);
    setActive(key(folder, path));
    document.querySelector(".content-wrap").scrollTo({ top: 0 });
    document.getElementById("sidebar").classList.remove("open");
  } catch (err) {
    content.innerHTML = `<div class="error">⚠️ Could not load <code>${escapeHtml(folder + "/" + path)}</code> (${escapeHtml(err.message)}).</div>`;
  }
}

function showWelcome() {
  document.getElementById("crumb").textContent = "All Courses";
  const cards = COURSES.map(
    (c) => `<a class="course-card" href="${c.folder}/index.html"><div class="cc-title">📘 ${escapeHtml(c.title)}</div><div class="cc-level">${escapeHtml(c.level)}</div></a>`
  ).join("");
  document.getElementById("content").innerHTML =
    `<h1>📚 ISTQB Study Hub</h1>` +
    `<p>Select a course from the menu on the left to start reading, or open a course in its own dedicated site below. Use the <strong>search box</strong> to find any topic across all courses.</p>` +
    `<div class="card-grid">${cards}</div>`;
}

async function ensureAllManifests() {
  await Promise.all(COURSES.map((c) => getManifest(c.folder).catch(() => { MANIFEST_CACHE[c.folder] = { course: c.title, groups: [] }; })));
}

async function runSearch(term) {
  term = term.trim();
  const nav = document.getElementById("nav");
  const results = document.getElementById("results");
  if (!term) { results.style.display = "none"; results.innerHTML = ""; nav.style.display = ""; return; }
  results.style.display = ""; nav.style.display = "none";
  results.innerHTML = '<div class="loading mini">🔎 Searching…</div>';
  await ensureAllManifests();
  const t = term.toLowerCase();
  const hits = [];
  COURSES.forEach((c) => {
    const m = MANIFEST_CACHE[c.folder];
    if (!m) return;
    m.groups.forEach((g) => g.items.forEach((it) => {
      if (it.title.toLowerCase().includes(t) || g.section.toLowerCase().includes(t) || c.title.toLowerCase().includes(t)) {
        hits.push({ c, g, it });
      }
    }));
  });
  if (!hits.length) { results.innerHTML = `<div class="no-results">No matches for “${escapeHtml(term)}”.</div>`; return; }
  results.innerHTML = `<div class="results-head">${hits.length} result${hits.length > 1 ? "s" : ""}</div>` +
    hits.slice(0, 200).map((h) =>
      `<a class="result" href="${makeHash(h.c.folder, h.it.path)}">` +
      `<div class="r-title">${escapeHtml(h.it.title)}</div>` +
      `<div class="r-section">${escapeHtml(h.c.title)} • ${escapeHtml(h.g.section)}</div></a>`
    ).join("");
}

function routeFromHash() {
  const r = parseHash();
  if (r) loadDoc(r.folder, r.path);
  else showWelcome();
}

document.addEventListener("DOMContentLoaded", async () => {
  marked.setOptions({ gfm: true, breaks: false });
  try {
    const res = await fetch("courses.json", { cache: "no-cache" });
    COURSES = (await res.json()).courses;
  } catch (e) {
    document.getElementById("content").innerHTML = '<div class="error">⚠️ Could not load <code>courses.json</code>. Run via a local server.</div>';
    return;
  }
  buildSidebar();

  const box = document.getElementById("searchBox");
  let timer = null;
  box.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(() => runSearch(box.value), 200); });
  box.addEventListener("keydown", (e) => { if (e.key === "Escape") { box.value = ""; runSearch(""); } });
  document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
});
