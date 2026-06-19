import Link from "next/link";

type Ref = { title: string; slug: string[] } | null;

function href(folder: string, slug: string[]) {
  return `/${folder}/${slug.map(encodeURIComponent).join("/")}`;
}

export default function Pager({ folder, prev, next }: { folder: string; prev: Ref; next: Ref }) {
  return (
    <nav className="pager">
      {prev ? (
        <Link className="pager-btn prev" href={href(folder, prev.slug)}>
          <span className="lbl">◀ Previous</span>
          <span className="ttl">{prev.title}</span>
        </Link>
      ) : (
        <span className="pager-spacer" />
      )}
      {next ? (
        <Link className="pager-btn next" href={href(folder, next.slug)}>
          <span className="lbl">Next ▶</span>
          <span className="ttl">{next.title}</span>
        </Link>
      ) : (
        <span className="pager-spacer" />
      )}
    </nav>
  );
}
