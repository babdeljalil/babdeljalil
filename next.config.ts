import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    /* otherOptions… */
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["images.pexels.com"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [["rehype-katex", { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);
