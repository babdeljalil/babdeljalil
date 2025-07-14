import React from "react";
import ThemeToggle from "./ThemeToggle";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full justify-between items-center flex py-5 px-3 border-b-2 max-md:px-0"
      id="home"
    >
      <nav className="text-lg font-bold">
        <Link href="/blog" className="mr-1.5 border-b-2">
          Blog
        </Link>
        {/* <span className="mx-1.5 border-b-2">Project</span>
        <span className="mx-1.5 border-b-2">Portfolio</span> */}
        {/* <span className="mx-1.5 border-b-2">
          <a href="#Links">Links</a>
        </span> */}
      </nav>
      <div className="flex justify-center items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
