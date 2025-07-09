import Link from "next/link"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogsPage() {
  const allPostsData = getSortedPostsData()

  return (
    <main className="pt-5 px-28">
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Blog</h1>

      {allPostsData.map(({ slug, title, date, tags, icon }) => (
        <div
          key={slug}
          className="my-3 hover:opacity-70 transition-all duration-500">
          <Link

            href={`/blogs/${slug}`}
            style={{ textDecoration: "none" }} // Remove underline from link itself
            className="flex items-center gap-4"
          >
            <div>
              <span className="w-[3rem] h-[3rem] flex justify-center items-center text-2xl rounded-md bg-[#ffedd5]">{icon}</span>
            </div>
            <span
              style={{
                display: "block", // make <a> behave like a div wrapper
                borderRadius: "0.75rem",

                color: "#333", // text color

                fontWeight: "bold",
              }}
              className="text-lg"
            >
              {title}
              <div className="flex items-center text-md">
                <span style={{ color: "#666" }} className="flex text-sm mr-2">
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
                          borderRadius: "9999px",
                        }}
                        className="font-bold text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                </span></div>

            </span>
          </Link></div>

      ))}
    </main>
  )
}
