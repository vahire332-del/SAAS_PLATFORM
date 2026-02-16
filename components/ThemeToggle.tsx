"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!theme) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggle() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  if (!theme) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200"
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
