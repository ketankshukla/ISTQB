/* ===== ISTQB Course Site — manifest-driven, search + next/prev ===== */

let MANIFEST = null;
let FLAT = [];          // flat ordered list of {title, path, section}
let DOC_CACHE = {};     // path -> raw text (style stripped)
let ALL_LOADED = false;
let SEARCH_TERM = "";

/* Remove the embedded <style> block injected into the markdown files. */
function stripEmbeddedStyle(text) {
  return text.replace(/^\uFEFF?\s*<!-- ISTQB-BEAUTIFY-V1 -->[\s\S]*?<\/style>\s*/, "");
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

async function loadManifest() {
  const res = await fetch("manifest.json", { cache: "no-cache" });
  MANIFEST = await res.json();
  document.title = MANIFEST.course + " — Study Hub";
  document.getElementById("courseTitle").textContent = MANIFEST.course;
  FLAT = [];
  MANIFEST.groups.forEach((g) => g.items.forEach((it) => FLAT.push({ ...it, section: g.section })));
}

function buildSidebar() {
  const nav = document.getElementById("nav");
  nav.innerHTML = "";
  MANIFEST.groups.forEach((group) => {
    const section = document.createElement("div");
    section.className = "nav-section";
    const head = document.createElement("button");
    head.className = "nav-head";
    head.innerHTML = `<span>${escapeHtml(group.section)}</span><span class="chev">▾</span>`;
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
    const on = a.dataset.path === path;
    a.classList.toggle("active", on);
    if (on) a.scrollIntoView({ block: "nearest" });
  });
}

async function getDoc(path) {
  if (DOC_CACHE[path] != null) return DOC_CACHE[path];
  const res = await fetch(path, { cache: "no-cache" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = stripEmbeddedStyle(await res.text());
  DOC_CACHE[path] = text;
  return text;
}

function highlightMatches(term) {
  if (!term) return;
  const re = new RegExp(escapeReg(term), "gi");
  const root = document.getElementById("content");
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentNode && /^(SCRIPT|STYLE|MARK)$/.test(n.parentNode.nodeName)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
  });
  const targets = [];
  let node;
  while ((node = walker.nextNode())) if (re.test(node.nodeValue)) targets.push(node);
  targets.forEach((n) => {
    const span = document.createElement("span");
    span.innerHTML = escapeHtml(n.nodeValue).replace(re, (m) => `<mark>${escapeHtml(m)}</mark>`);
    n.parentNode.replaceChild(span, n);
  });
  const first = root.querySelector("mark");
  if (first) first.scrollIntoView({ block: "center" });
}

function renderNextPrev(path) {
  const idx = FLAT.findIndex((d) => d.path === path);
  if (idx < 0) return "";
  const prev = idx > 0 ? FLAT[idx - 1] : null;
  const next = idx < FLAT.length - 1 ? FLAT[idx + 1] : null;
  let html = '<nav class="pager">';
  html += prev
    ? `<a class="pager-btn prev" href="#${encodeURIComponent(prev.path)}"><span class="lbl">◀ Previous</span><span class="ttl">${escapeHtml(prev.title)}</span></a>`
    : `<span class="pager-btn disabled"></span>`;
  html += next
    ? `<a class="pager-btn next" href="#${encodeURIComponent(next.path)}"><span class="lbl">Next ▶</span><span class="ttl">${escapeHtml(next.title)}</span></a>`
    : `<span class="pager-btn disabled"></span>`;
  html += "</nav>";
  return html;
}

async function loadDoc(path) {
  const content = document.getElementById("content");
  content.innerHTML = '<div class="loading">⏳ Loading…</div>';
  try {
    const text = await getDoc(path);
    content.innerHTML = marked.parse(text) + renderNextPrev(path);
    setActive(path);
    if (SEARCH_TERM) highlightMatches(SEARCH_TERM);
    else document.querySelector(".content-wrap").scrollTo({ top: 0 });
    document.getElementById("sidebar").classList.remove("open");
  } catch (err) {
    content.innerHTML =
      `<div class="error">⚠️ Could not load <code>${escapeHtml(path)}</code> (${escapeHtml(err.message)}).<br>` +
      `Run the site through a local server (e.g. <code>python -m http.server</code>).</div>`;
  }
}

async function ensureAllDocs() {
  if (ALL_LOADED) return;
  await Promise.all(
    FLAT.map((d) => getDoc(d.path).catch(() => { DOC_CACHE[d.path] = ""; }))
  );
  ALL_LOADED = true;
}

function snippet(text, term) {
  const i = text.toLowerCase().indexOf(term.toLowerCase());
  if (i < 0) return "";
  const start = Math.max(0, i - 40);
  const end = Math.min(text.length, i + term.length + 60);
  const re = new RegExp(escapeReg(term), "gi");
  return (start > 0 ? "…" : "") +
    escapeHtml(text.slice(start, end)).replace(re, (m) => `<mark>${escapeHtml(m)}</mark>`) +
    (end < text.length ? "…" : "");
}

async function runSearch(term) {
  SEARCH_TERM = term.trim();
  const nav = document.getElementById("nav");
  const results = document.getElementById("results");
  if (!SEARCH_TERM) {
    results.style.display = "none";
    results.innerHTML = "";
    nav.style.display = "";
    return;
  }
  results.style.display = "";
  nav.style.display = "none";
  results.innerHTML = '<div class="loading">🔎 Searching…</div>';
  await ensureAllDocs();
  const t = SEARCH_TERM.toLowerCase();
  const hits = [];
  FLAT.forEach((d) => {
    const body = DOC_CACHE[d.path] || "";
    const inTitle = d.title.toLowerCase().includes(t);
    const inBody = body.toLowerCase().includes(t);
    if (inTitle || inBody) hits.push({ d, snip: inBody ? snippet(body, SEARCH_TERM) : "" });
  });
  if (!hits.length) {
    results.innerHTML = `<div class="no-results">No matches for “${escapeHtml(SEARCH_TERM)}”.</div>`;
    return;
  }
  results.innerHTML =
    `<div class="results-head">${hits.length} result${hits.length > 1 ? "s" : ""}</div>` +
    hits
      .map(
        (h) =>
          `<a class="result" href="#${encodeURIComponent(h.d.path)}">` +
          `<div class="r-title">${escapeHtml(h.d.title)}</div>` +
          `<div class="r-section">${escapeHtml(h.d.section)}</div>` +
          (h.snip ? `<div class="r-snippet">${h.snip}</div>` : "") +
          `</a>`
      )
      .join("");
}

function routeFromHash() {
  const raw = location.hash.replace(/^#/, "");
  const path = raw ? decodeURIComponent(raw) : (FLAT[0] && FLAT[0].path);
  if (path) loadDoc(path);
}

document.addEventListener("DOMContentLoaded", async () => {
  marked.setOptions({ gfm: true, breaks: false });
  try {
    await loadManifest();
  } catch (e) {
    document.getElementById("content").innerHTML =
      '<div class="error">⚠️ Could not load <code>manifest.json</code>. Run via a local server.</div>';
    return;
  }
  buildSidebar();

  const box = document.getElementById("searchBox");
  let timer = null;
  box.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => runSearch(box.value), 180);
  });
  box.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { box.value = ""; runSearch(""); }
  });

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
});
