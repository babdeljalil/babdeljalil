// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "markdowns"));
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const filePath = path.join(process.cwd(), "markdowns", `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="prose prose-lg mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 mb-6">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
