import React from "react";

export default function Header() {
  return (
    <header className="w-full justify-between items-center flex py-5 px-3 border-b-2 max-md:px-0">
      <nav className="text-lg font-bold">
        <span className="mr-1.5 border-b-2">Blog</span>
        <span className="mx-1.5 border-b-2">Project</span>
        <span className="mx-1.5 border-b-2">Portfolio</span>
        <span className="mx-1.5 border-b-2">Links</span>
      </nav>
      <div>
        <div className="rounded-full h-5 w-5 bg-black"></div>
      </div>
    </header>
  );
}
