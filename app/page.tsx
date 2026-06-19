import { buildManifest, getCourses } from "@/lib/content";
import MasterShell from "@/components/MasterShell";

export const dynamic = "force-static";

export default function Home() {
  const courses = getCourses();
  const tree = courses.map((c) => ({
    folder: c.folder,
    title: c.title,
    level: c.level,
    groups: buildManifest(c.folder).groups.map((g) => ({
      section: g.section,
      items: g.items.map((i) => ({ title: i.title, slug: i.slug })),
    })),
  }));
  return <MasterShell tree={tree} />;
}
