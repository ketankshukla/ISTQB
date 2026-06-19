"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { title: string; slug: string[] };
type Group = { section: string; items: Item[] };
type CourseNode = { folder: string; title: string; level: string; groups: Group[] };
type Hit = { folder: string; course: string; section: string; title: string; slug: string[] };

const LEVEL_ORDER = [
  "Foundation Level (Core)",
  "Foundation Level — Extensions",
  "Advanced Level",
  "Specialist Modules",
];

function href(folder: string, slug: string[]) {
  return `/${folder}/${slug.map(encodeURIComponent).join("/")}`;
}

export default function MasterShell({ tree }: { tree: CourseNode[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<Hit[] | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      const term = q.trim().toLowerCase();
      if (!term) {
        setHits(null);
        return;
      }
      const res: Hit[] = [];
      for (const c of tree) {
        for (const g of c.groups) {
          for (const it of g.items) {
            if (
              it.title.toLowerCase().includes(term) ||
              g.section.toLowerCase().includes(term) ||
              c.title.toLowerCase().includes(term)
            ) {
              res.push({ folder: c.folder, course: c.title, section: g.section, title: it.title, slug: it.slug });
            }
          }
        }
      }
      setHits(res.slice(0, 250));
    }, 200);
    return () => clearTimeout(t);
  }, [q, tree]);

  const byLevel: Record<string, CourseNode[]> = {};
  for (const c of tree) (byLevel[c.level] = byLevel[c.level] || []).push(c);

  return (
    <div className="app">
      <header className="topbar">
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          ☰
        </button>
        <span className="logo">📚</span>
        <h1>ISTQB Study Hub</h1>
        <span className="crumb">All Courses</span>
      </header>

      <aside className={"sidebar" + (open ? " open" : "")}>
        <div className="search-wrap">
          <input
            className="search-box"
            type="search"
            placeholder="🔎 Search all courses…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setQ("");
            }}
          />
        </div>

        {hits === null ? (
          <nav>
            {LEVEL_ORDER.filter((l) => byLevel[l]).map((level) => (
              <div className="level" key={level}>
                <div className="level-head">{level}</div>
                {byLevel[level].map((c) => (
                  <div key={c.folder} className={"nav-section" + (expanded[c.folder] ? "" : " collapsed")}>
                    <button
                      className="nav-head course-head"
                      onClick={() => setExpanded((e) => ({ ...e, [c.folder]: !e[c.folder] }))}
                    >
                      <span>📘 {c.title}</span>
                      <span className="chev">▾</span>
                    </button>
                    <div className="course-body">
                      {c.groups.map((g, gi) => (
                        <div key={gi}>
                          <div className="grp-head">{g.section}</div>
                          <ul className="nav-items">
                            {g.items.map((it, ii) => (
                              <li key={ii}>
                                <Link href={href(c.folder, it.slug)} onClick={() => setOpen(false)}>
                                  {it.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </nav>
        ) : (
          <div className="results">
            {hits.length === 0 ? (
              <div className="no-results">No matches for “{q}”.</div>
            ) : (
              <>
                <div className="results-head">
                  {hits.length} result{hits.length > 1 ? "s" : ""}
                </div>
                {hits.map((h, i) => (
                  <Link key={i} className="result" href={href(h.folder, h.slug)} onClick={() => setOpen(false)}>
                    <div className="r-title">{h.title}</div>
                    <div className="r-section">
                      {h.course} • {h.section}
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </aside>

      <main className="content-wrap">
        <article className="content">
          <h1>📚 ISTQB Study Hub</h1>
          <p>
            Select a course from the menu on the left to start reading. Use the <strong>search box</strong> to find
            any topic across all courses. Everything is in <strong>dark mode</strong>.
          </p>
          <div className="card-grid">
            {tree.map((c) => (
              <Link className="course-card" key={c.folder} href={`/${c.folder}`}>
                <div className="cc-title">📘 {c.title}</div>
                <div className="cc-level">{c.level}</div>
              </Link>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
