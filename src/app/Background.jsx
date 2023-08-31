import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Background() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return <div className={"sky " + theme}></div>;
}
