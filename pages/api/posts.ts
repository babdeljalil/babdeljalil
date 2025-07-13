// pages/api/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NextApiRequest, NextApiResponse } from "next";

type Post = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const dir = path.join(process.cwd(), "markdowns");
  const files = fs.readdirSync(dir);

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(content);
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags ?? [],
    };
  });

  res.status(200).json(posts);
}
