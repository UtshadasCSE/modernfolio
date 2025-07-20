"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      suppressHydrationWarning
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 overflow-hidden cursor-pointer max-sm:w-full max-md:w-full justify-center flex"
    >
      {/* Sun */}
      <Sun
        className={`absolute h-5 w-5 transition-transform duration-300 ${
          theme === "dark"
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      />

      {/* Moon */}
      <Moon
        className={`absolute h-5 w-5 transition-transform duration-300 ${
          theme === "dark"
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
