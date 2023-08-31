import React, { useContext } from "react";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
// import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggler(): React.ReactNode {
  // const { theme, setTheme } = useContext(ThemeContext);

  // const toggleTheme = (theme) => {
  //   if (theme === "dark") {
  //     setTheme("light");
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     setTheme("dark");
  //     localStorage.setItem("theme", "dark");
  //   }
  // };

  return (
    <button className="theme_toggler" onClick={(e) => {}}>
      {/* {theme === "dark" ? <BsMoonStarsFill /> : <BsMoonStars />} */}
    </button>
  );
}
