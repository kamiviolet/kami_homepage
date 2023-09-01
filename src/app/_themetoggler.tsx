"use client";

import React from "react";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeToggler({
  styles,
}: {
  styles: string;
}): React.ReactNode {
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
