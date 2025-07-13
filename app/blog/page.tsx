// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const files = fs.readdirSync(path.join(process.cwd(), "markdowns"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join("markdowns", file), "utf8");
    const { data } = matter(content);
    return { slug, ...data };
  });

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
