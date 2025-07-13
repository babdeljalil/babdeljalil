"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Post = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  icon?: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

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

  // Load posts once on mount (client side)
  useEffect(() => {
    async function loadPosts() {
      // Since we can't use fs in client, fetch from an API route or embed posts at build time
      // For simplicity, embed posts as JSON via fetch or import (if small)
      // For now, we simulate by fetching from /api/posts (you'll create it next)
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    }
    loadPosts();
  }, []);

  // Get unique tags from posts
  const allTags = useMemo(() => {
    const tags = posts.flatMap((p) => p.tags || []);
    return Array.from(new Set(tags)).sort();
  }, [posts]);

  // Filter posts by search + tag
  const filteredPosts = useMemo(() => {
    return posts.filter(({ title, tags }) => {
      const matchesSearch =
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (tags?.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase())
        ) ??
          false);
      const matchesTag =
        selectedTag === "all" || !selectedTag
          ? true
          : tags?.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, searchTerm, selectedTag]);

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search posts by title or tags..."
        className="w-full h-11 mb-5"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Tag Filter Dropdown */}
      <Select
        value={selectedTag}
        onValueChange={(value) => setSelectedTag(value)}
      >
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder="All Tags" />
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

      {/* Posts List */}
      <ul className="space-y-6 mt-5">
        {filteredPosts.length === 0 && <p>No posts found.</p>}

        {filteredPosts.map(({ slug, title, date, tags, icon }) => (
          <ul className="space-y-4">
            {filteredPosts.map(({ slug, title, date, tags, icon }) => (
              <Card key={slug}>
                <CardContent className="pt-6">
                  <Link
                    href={`/blog/${slug}`}
                    className="text-2xl font-semibold flex items-center gap-2 hover:underline"
                  >
                    <span className="text-3xl">{icon ?? "📝"}</span>
                    <span>{title}</span>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{date}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags?.map((tag) => (
                      <Badge
                        key={tag}
                        className={getColorClass(tag)} // optional, if you want colored badges
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </ul>
        ))}
      </ul>
    </main>
  );
}
