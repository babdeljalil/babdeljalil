"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check if user prefers dark or if dark is already set
    const root = window.document.documentElement;
    const initialDark =
      root.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDark(initialDark);
    if (initialDark) root.classList.add("dark");
  }, []);

  const toggleDark = () => {
    const root = window.document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleDark}
      aria-label="Toggle Dark Mode"
      className="h-5 w-5 rounded-full bg-primary"
    ></button>
  );
}
