"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-secondary border-2 border-border" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full bg-secondary border-2 border-border transition-all duration-300 hover:scale-105 animate-scale-in"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center ${
          isDark
            ? "translate-x-7 gradient-purple animate-pulse-glow"
            : "translate-x-0 gradient-blue"
        }`}
      >
        {isDark ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </div>
    </button>
  );
}
