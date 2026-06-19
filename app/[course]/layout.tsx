import { buildManifest, getCourseFolders } from "@/lib/content";
import CourseShell from "@/components/CourseShell";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return getCourseFolders().map((course) => ({ course }));
}

export default function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { course: string };
}) {
  const m = buildManifest(params.course);
  const groups = m.groups.map((g) => ({
    section: g.section,
    items: g.items.map((i) => ({ title: i.title, slug: i.slug })),
  }));
  return (
    <CourseShell folder={params.course} title={m.course} groups={groups}>
      {children}
    </CourseShell>
  );
}
