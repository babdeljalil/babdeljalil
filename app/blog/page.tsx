"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Types
type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  icon?: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  // Fetch posts from API
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        // Remove duplicates by slug
        const unique = Array.from(
          new Map(data.map((p) => [p.slug, p])).values()
        );
        setPosts(unique);
      });
  }, []);

  // Extract all tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags?.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesTag =
        selectedTag === "all" || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, searchTerm, selectedTag]);

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>

      <Input
        type="text"
        placeholder="Search posts by title or tags..."
        className="w-full h-11 text-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Select
        value={selectedTag}
        onValueChange={(value) => setSelectedTag(value)}
      >
        <SelectTrigger className="w-52">
          <SelectValue placeholder="Filter by tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Tags</SelectItem>
            {allTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <ul className="space-y-4">
        {filteredPosts.length === 0 && (
          <p className="text-muted-foreground">No posts found.</p>
        )}

        {filteredPosts.map(({ slug, title, date, tags, icon }) => (
          <Card
            key={slug}
            className="transition-all duration-200 hover:shadow-lg hover:scale-[1.01] hover:border-primary"
          >
            <CardContent>
              <Link
                href={`/blog/${slug}`}
                className="text-xl font-semibold flex items-center gap-2 hover:underline"
              >
                <span className="text-4xl mr-6">{icon ?? "📝"}</span>
                <div>
                  <span>{title}</span>
                  <p className="text-sm text-muted-foreground mt-1">{date}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags?.map((tag) => (
                      <Badge key={tag} className={getColorClass(tag)}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </ul>
    </main>
  );
}

// Optional colored badges
const tagColors = [
  "bg-red-200 text-red-800",
  "bg-green-200 text-green-800",
  "bg-blue-200 text-blue-800",
  "bg-yellow-200 text-yellow-800",
  "bg-purple-200 text-purple-800",
  "bg-pink-200 text-pink-800",
  "bg-indigo-200 text-indigo-800",
  "bg-teal-200 text-teal-800",
];

function getColorClass(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % tagColors.length;
  return tagColors[index];
}
