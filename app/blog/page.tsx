"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";

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
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

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

        {filteredPosts.map(({ slug, title, date, tags }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
            <p className="text-sm text-gray-500 mb-1">{date}</p>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-100 text-blue-700 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
