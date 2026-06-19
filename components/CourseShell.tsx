"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Item = { title: string; slug: string[] };
type Group = { section: string; items: Item[] };
type IndexDoc = { title: string; section: string; slug: string[]; text: string };
type Hit = { title: string; section: string; slug: string[]; snip: string };

function href(folder: string, slug: string[]) {
  return `/${folder}/${slug.map(encodeURIComponent).join("/")}`;
}

export default function CourseShell({
  folder,
  title,
  groups,
  children,
}: {
  folder: string;
  title: string;
  groups: Group[];
  children: ReactNode;
}) {
  const pathname = decodeURIComponent(usePathname());
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<Hit[] | null>(null);
  const indexRef = useRef<IndexDoc[] | null>(null);

  const isActive = (slug: string[]) => pathname === `/${folder}/${slug.join("/")}`;

  async function ensureIndex(): Promise<IndexDoc[]> {
    if (indexRef.current) return indexRef.current;
    try {
      const r = await fetch(`/search/${folder}.json`, { cache: "force-cache" });
      const j = (await r.json()) as IndexDoc[];
      indexRef.current = j;
      return j;
    } catch {
      indexRef.current = [];
      return [];
    }
  }

  useEffect(() => {
    const t = setTimeout(async () => {
      const term = q.trim().toLowerCase();
      if (!term) {
        setHits(null);
        return;
      }
      const idx = await ensureIndex();
      const res: Hit[] = [];
      for (const d of idx) {
        const inTitle = d.title.toLowerCase().includes(term);
        const pos = d.text ? d.text.toLowerCase().indexOf(term) : -1;
        if (inTitle || pos >= 0) {
          let snip = "";
          if (pos >= 0) {
            const s = Math.max(0, pos - 40);
            const e = Math.min(d.text.length, pos + term.length + 80);
            snip = (s > 0 ? "…" : "") + d.text.slice(s, e).replace(/\s+/g, " ") + (e < d.text.length ? "…" : "");
          }
          res.push({ title: d.title, section: d.section, slug: d.slug, snip });
        }
      }
      setHits(res);
    }, 180);
    return () => clearTimeout(t);
  }, [q, folder]);

  return (
    <div className="app">
      <header className="topbar">
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          ☰
        </button>
        <span className="logo">🎓</span>
        <h1>{title}</h1>
        <Link className="home" href="/">
          📚 All Courses
        </Link>
      </header>

      <aside className={"sidebar" + (open ? " open" : "")}>
        <div className="search-wrap">
          <input
            className="search-box"
            type="search"
            placeholder="🔎 Search this course…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setQ("");
            }}
          />
        </div>

        {hits === null ? (
          <nav>
            {groups.map((g, gi) => (
              <div key={gi} className={"nav-section" + (collapsed[gi] ? " collapsed" : "")}>
                <button className="nav-head" onClick={() => setCollapsed((c) => ({ ...c, [gi]: !c[gi] }))}>
                  <span>{g.section}</span>
                  <span className="chev">▾</span>
                </button>
                <ul className="nav-items">
                  {g.items.map((it, ii) => (
                    <li key={ii}>
                      <Link
                        className={isActive(it.slug) ? "active" : ""}
                        href={href(folder, it.slug)}
                        onClick={() => setOpen(false)}
                      >
                        {it.title}
                      </Link>
                    </li>
                  ))}
                </ul>
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
                  <Link key={i} className="result" href={href(folder, h.slug)} onClick={() => setOpen(false)}>
                    <div className="r-title">{h.title}</div>
                    <div className="r-section">{h.section}</div>
                    {h.snip && <div className="r-snippet">{h.snip}</div>}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </aside>

      <main className="content-wrap">{children}</main>
    </div>
  );
}
