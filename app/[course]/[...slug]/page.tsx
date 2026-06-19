import { flatDocs, getCourseFolders, readDoc, slugToFile } from "@/lib/content";
import Markdown from "@/components/Markdown";
import Pager from "@/components/Pager";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { course: string; slug: string[] }[] = [];
  for (const course of getCourseFolders()) {
    for (const doc of flatDocs(course)) {
      params.push({ course, slug: doc.slug });
    }
  }
  return params;
}

export function generateMetadata({ params }: { params: { course: string; slug: string[] } }): Metadata {
  const docs = flatDocs(params.course);
  const file = slugToFile(params.slug);
  const doc = docs.find((d) => d.file === file);
  return { title: doc ? `${doc.title.replace(/^[^\x00-\x7F]+\s*/, "")} — ISTQB` : "ISTQB Study Hub" };
}

export default function DocPage({ params }: { params: { course: string; slug: string[] } }) {
  const file = slugToFile(params.slug);
  const content = readDoc(params.course, file);
  if (content == null) notFound();

  const docs = flatDocs(params.course);
  const idx = docs.findIndex((d) => d.file === file);
  const prev = idx > 0 ? { title: docs[idx - 1].title, slug: docs[idx - 1].slug } : null;
  const next = idx >= 0 && idx < docs.length - 1 ? { title: docs[idx + 1].title, slug: docs[idx + 1].slug } : null;

  return (
    <>
      <Markdown content={content} />
      <Pager folder={params.course} prev={prev} next={next} />
    </>
  );
}
