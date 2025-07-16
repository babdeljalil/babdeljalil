import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, FileText } from 'lucide-react';

// This would typically come from your MDX files or CMS
const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 13: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 13, including the new app directory, server components, and more.',
    content: `
# Getting Started with Next.js 13: A Complete Guide

Next.js 13 introduces revolutionary changes that make building React applications faster, more intuitive, and more powerful than ever before. In this comprehensive guide, we'll explore the new features and learn how to leverage them effectively.

## What's New in Next.js 13?

The most significant change in Next.js 13 is the introduction of the **app directory**, which brings:

- **Server Components by default**
- **Improved routing system**
- **Better data fetching patterns**
- **Enhanced performance optimizations**

## The App Directory

The new app directory represents a paradigm shift in how we structure Next.js applications. Unlike the traditional pages directory, the app directory uses:

\`\`\`
app/
  layout.tsx
  page.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx
\`\`\`

### Server Components

Server Components are the default in the app directory. They run on the server and can directly access databases, file systems, and other server-side resources.

## Best Practices

1. **Use Server Components by default** - Only use Client Components when you need interactivity
2. **Leverage the new routing system** - Take advantage of layouts and nested routes
3. **Optimize data fetching** - Use the new patterns for better performance
4. **Implement proper error boundaries** - Handle errors gracefully with error.tsx files

## Conclusion

Next.js 13 represents a major step forward in React development. The new app directory, Server Components, and improved data fetching patterns make it easier than ever to build fast, scalable applications.

Start experimenting with these new features today and see how they can improve your development experience!
    `,
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'React', 'Development'],
    author: 'Your Name',
  },
  {
    slug: 'design-systems-best-practices',
    title: 'Building Scalable Design Systems',
    excerpt: 'Discover the key principles and best practices for creating design systems that scale with your organization.',
    content: `
# Building Scalable Design Systems

A well-designed design system is the backbone of consistent, efficient product development. It serves as a single source of truth for design decisions and enables teams to build cohesive user experiences at scale.

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

## Key Components

### 1. Design Tokens
Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

### 2. Component Library
A comprehensive set of UI components that follow consistent patterns and behaviors.

### 3. Documentation
Clear guidelines on how to use components, when to use them, and how they should behave.

## Best Practices

1. **Start Small** - Begin with the most commonly used components
2. **Involve Everyone** - Include designers, developers, and product managers
3. **Document Everything** - Clear documentation is crucial for adoption
4. **Version Control** - Treat your design system like any other product

Building a design system is an iterative process that requires ongoing maintenance and evolution.
    `,
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['Design', 'Systems', 'UI/UX'],
    author: 'Your Name',
  },
  {
    slug: 'typescript-tips-and-tricks',
    title: 'TypeScript Tips and Tricks for Better Code',
    excerpt: 'Advanced TypeScript techniques that will help you write more maintainable and type-safe code.',
    content: `
# TypeScript Tips and Tricks for Better Code

TypeScript has become an essential tool for modern JavaScript development. Here are some advanced techniques to help you write better, more maintainable code.

## Advanced Type Patterns

### Conditional Types
\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };
\`\`\`

### Mapped Types
\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## Utility Types

TypeScript provides many built-in utility types that can help you write more expressive code:

- \`Pick<T, K>\` - Select specific properties
- \`Omit<T, K>\` - Exclude specific properties  
- \`Record<K, T>\` - Create object types with specific keys

## Best Practices

1. Use strict mode
2. Leverage type inference
3. Create custom utility types
4. Use const assertions

These techniques will help you write more robust TypeScript code.
    `,
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['TypeScript', 'Development', 'Best Practices'],
    author: 'Your Name',
  },
  {
    slug: 'minimal-design-principles',
    title: 'The Art of Minimal Design',
    excerpt: 'Exploring the principles of minimalism in digital design and how less can truly be more.',
    content: `
# The Art of Minimal Design

Minimalism in design is not about removing everything until nothing is left. It's about removing everything until only the essential remains. In digital design, this philosophy can create powerful, focused experiences that truly serve the user.

## Core Principles

### 1. Clarity Over Cleverness
Every element should have a clear purpose. If you can't explain why something is there, it probably shouldn't be.

### 2. White Space is Your Friend
White space (or negative space) gives your content room to breathe and helps users focus on what matters.

### 3. Typography as a Design Element
In minimal design, typography often carries the visual weight. Choose fonts carefully and use hierarchy to guide the eye.

## Practical Applications

- **Reduce cognitive load** - Fewer choices lead to better decisions
- **Improve performance** - Less code means faster loading times
- **Enhance accessibility** - Simpler layouts are easier to navigate
- **Timeless appeal** - Minimal designs age better than trendy ones

## Common Mistakes

1. **Confusing minimal with empty** - Minimal doesn't mean boring
2. **Removing too much** - Don't sacrifice usability for aesthetics
3. **Ignoring context** - Consider your audience and their needs

Remember: Minimalism is achieved not when there is nothing more to add, but when there is nothing left to take away.
    `,
    date: '2024-01-01',
    readTime: '5 min read',
    tags: ['Design', 'Minimalism', 'UI'],
    author: 'Your Name',
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Header */}
      <header className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="space-y-6 animate-in">
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
            
            <h1 className="text-4xl sm:text-5xl font-light text-black dark:text-white leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div 
            className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-4xl font-light mb-8 text-black dark:text-white">${line.slice(2)}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-medium mb-6 text-black dark:text-white mt-12">${line.slice(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-medium mb-4 text-black dark:text-white mt-8">${line.slice(4)}</h3>`;
                  }
                  if (line.startsWith('```')) {
                    return line.includes('```') && !line.includes('```typescript') && !line.includes('```javascript')
                      ? '<pre class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded-lg overflow-x-auto mb-6 mt-6 font-mono text-sm"><code>'
                      : '</code></pre>';
                  }
                  if (line.startsWith('- ')) {
                    return `<li class="mb-2 text-gray-700 dark:text-gray-300">${line.slice(2)}</li>`;
                  }
                  if (line.includes('**') && line.includes('**')) {
                    return `<p class="mb-6 leading-relaxed">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-black dark:text-white">$1</strong>')}</p>`;
                  }
                  if (line.includes('`') && line.includes('`')) {
                    return `<p class="mb-6 leading-relaxed">${line.replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">$1</code>')}</p>`;
                  }
                  if (line.trim() && !line.startsWith('#') && !line.startsWith('```') && !line.startsWith('- ')) {
                    return `<p class="mb-6 leading-relaxed">${line}</p>`;
                  }
                  return line;
                })
                .join('')
            }}
          />
        </div>
      </article>

      {/* Related Posts CTA */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-black dark:text-white">
              More Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore more insights and tutorials on my blog.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:scale-105 transition-all duration-200"
            >
              <FileText className="w-4 h-4 mr-2" />
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}