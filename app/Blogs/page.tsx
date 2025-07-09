import Link from "next/link"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogsPage() {
  const allPostsData = getSortedPostsData()

  return (
    <main className="pt-5">
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Blog</h1>

      {allPostsData.map(({ slug, title, date, tags }) => (
        <Link
          key={slug}
          href={`/blogs/${slug}`}
          style={{ textDecoration: "none" }} // Remove underline from link itself
        >
          <span
            style={{
              display: "block", // make <a> behave like a div wrapper
              borderRadius: "0.75rem",
              marginBottom: "1.5rem",
              color: "#333", // text color
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            {title}
            <div className="flex items-center">
              <span style={{ fontSize: "0.9rem", color: "#666" }} className="flex">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>

              <span
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  fontWeight: "500",
                }}
              >
                {Array.isArray(tags) &&
                  tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        color: "#0369a1",
                        fontSize: "1rem",
                        borderRadius: "9999px",
                      }}
                      className="font-bold ml-2"
                    >
                      #{tag}
                    </span>
                  ))}
              </span></div>

          </span>
        </Link>
      ))}
    </main>
  )
}
