import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed left-6 bottom-6 z-[60] bg-background text-foreground border border-border p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center outline-none ring-2 ring-transparent focus:ring-primary/20 cursor-pointer"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-200" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
