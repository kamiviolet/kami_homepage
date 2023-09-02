"use client";

import React from "react";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes";

const styles = "my-4 md:my-0 md:-translate-y-1 flex justify-center text-3xl";

export default function ThemeToggler(): React.ReactNode {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button className={styles} onClick={() => toggleTheme()}>
      {theme === "dark" ? <BsMoonStarsFill /> : <BsMoonStars />}
    </button>
  );
}
