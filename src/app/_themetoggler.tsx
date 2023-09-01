"use client";

import React from "react";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeToggler(): React.ReactNode {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button className="theme_toggler" onClick={() => toggleTheme()}>
      {theme === "dark" ? <BsMoonStarsFill /> : <BsMoonStars />}
    </button>
  );
}
