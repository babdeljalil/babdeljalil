"use client";

import Link from "next/link";
import { Calendar, Clock, FileText, Search, X } from "lucide-react";
import { useState, useMemo } from "react";

// This would typically come from your MDX files or CMS
const blogPosts = [];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag("");
  };

  const hasActiveFilters = searchQuery !== "" || selectedTag !== "";

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Header */}
      <section className="py-24 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center space-y-4 animate-in">
            <h1 className="text-4xl sm:text-5xl font-light text-black dark:text-white tracking-tight">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Thoughts, tutorials, and insights on development, design, and
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-8">
          <div
            className="flex flex-col sm:flex-row gap-4 animate-in"
            style={{ animationDelay: "100ms" }}
          >
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-200 placeholder-gray-400"
              />
            </div>

            {/* Tag Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="appearance-none bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-200 cursor-pointer min-w-[140px]"
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-black dark:hover:border-white"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            )}
          </div>

          {/* Results Count */}
          <div
            className="mt-4 text-sm text-gray-500 dark:text-gray-500 animate-in"
            style={{ animationDelay: "200ms" }}
          >
            {filteredPosts.length === blogPosts.length
              ? `Showing all ${blogPosts.length} articles`
              : `Found ${filteredPosts.length} of ${blogPosts.length} articles`}
            {hasActiveFilters && (
              <span className="ml-2">
                {searchQuery && `matching "${searchQuery}"`}
                {searchQuery && selectedTag && " and "}
                {selectedTag && `tagged with "${selectedTag}"`}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0 animate-in"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="space-y-4 hover:translate-x-2 transition-transform duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <h2 className="text-2xl font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200">
                            {post.title}
                          </h2>

                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                                  selectedTag === tag
                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                    : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="ml-6 flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors duration-200">
                            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div
              className="text-center py-16 animate-in"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or clearing the filters.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:scale-105 transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
