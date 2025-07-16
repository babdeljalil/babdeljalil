'use client';

import Link from 'next/link';
import { Calendar, Clock, FileText, Search, X } from 'lucide-react';
import { useState, useMemo } from 'react';

// This would typically come from your MDX files or CMS
const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 13: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 13, including the new app directory, server components, and more.',
    content: 'Next.js 13 introduces revolutionary changes that make building React applications faster, more intuitive, and more powerful than ever before. In this comprehensive guide, we\'ll explore the new features and learn how to leverage them effectively.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'React', 'Development'],
  },
  {
    slug: 'design-systems-best-practices',
    title: 'Building Scalable Design Systems',
    excerpt: 'Discover the key principles and best practices for creating design systems that scale with your organization.',
    content: 'A well-designed design system is the backbone of consistent, efficient product development. It serves as a single source of truth for design decisions and enables teams to build cohesive user experiences at scale.',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['Design', 'Systems', 'UI/UX'],
  },
  {
    slug: 'typescript-tips-and-tricks',
    title: 'TypeScript Tips and Tricks for Better Code',
    excerpt: 'Advanced TypeScript techniques that will help you write more maintainable and type-safe code.',
    content: 'TypeScript has become an essential tool for modern JavaScript development. Here are some advanced techniques to help you write better, more maintainable code.',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['TypeScript', 'Development', 'Best Practices'],
  },
  {
    slug: 'minimal-design-principles',
    title: 'The Art of Minimal Design',
    excerpt: 'Exploring the principles of minimalism in digital design and how less can truly be more.',
    content: 'Minimalism in design is not about removing everything until nothing is left. It\'s about removing everything until only the essential remains. In digital design, this philosophy can create powerful, focused experiences that truly serve the user.',
    date: '2024-01-01',
    readTime: '5 min read',
    tags: ['Design', 'Minimalism', 'UI'],
  },
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn essential techniques to optimize your React applications for better performance and user experience.',
    content: 'Performance optimization in React applications is crucial for delivering smooth user experiences. This guide covers essential techniques including memoization, code splitting, and virtual scrolling.',
    date: '2023-12-28',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Development'],
  },
  {
    slug: 'css-grid-mastery',
    title: 'Mastering CSS Grid Layout',
    excerpt: 'A comprehensive guide to CSS Grid, from basic concepts to advanced layout techniques.',
    content: 'CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. This comprehensive guide will take you from basic grid concepts to advanced layout techniques.',
    date: '2023-12-20',
    readTime: '15 min read',
    tags: ['CSS', 'Grid', 'Frontend'],
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('');
  };

  const hasActiveFilters = searchQuery !== '' || selectedTag !== '';

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
              Thoughts, tutorials, and insights on development, design, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row gap-4 animate-in" style={{ animationDelay: '100ms' }}>
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
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-500 animate-in" style={{ animationDelay: '200ms' }}>
            {filteredPosts.length === blogPosts.length 
              ? `Showing all ${blogPosts.length} articles`
              : `Found ${filteredPosts.length} of ${blogPosts.length} articles`
            }
            {hasActiveFilters && (
              <span className="ml-2">
                {searchQuery && `matching "${searchQuery}"`}
                {searchQuery && selectedTag && ' and '}
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
                              <span>{new Date(post.date).toLocaleDateString()}</span>
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
                                    ? 'bg-black dark:bg-white text-white dark:text-black'
                                    : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300'
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
            <div className="text-center py-16 animate-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-2">No articles found</h3>
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

      {/* Newsletter CTA */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-6 animate-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-3xl font-light text-black dark:text-white">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Get notified when I publish new articles. No spam, just quality content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-200"
              />
              <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:scale-105 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}