import { flatDocs, getCourseFolders, readDoc } from "@/lib/content";
import Markdown from "@/components/Markdown";
import Pager from "@/components/Pager";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getCourseFolders().map((course) => ({ course }));
}

export default function CoursePage({ params }: { params: { course: string } }) {
  const docs = flatDocs(params.course);
  if (!docs.length) notFound();
  const first = docs[0];
  const content = readDoc(params.course, first.file);
  if (content == null) notFound();
  const next = docs[1] ? { title: docs[1].title, slug: docs[1].slug } : null;
  return (
    <>
      <Markdown content={content} />
      <Pager folder={params.course} prev={null} next={next} />
    </>
  );
}
