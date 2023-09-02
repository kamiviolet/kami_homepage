import { useTheme } from "next-themes";
import React, { useState } from "react";

const styles = {
  menu_btn: "w-[45px] h-[45px] mx-6 z-30 cursor-pointer block md:hidden ",
  bar: "bg-black dark:bg-white rounded w-full h-[5px] mt-3 transition-[300ms] first-of-type:mt-0 ",
  top: "origin-center translate-y-2  rotate-45 ",
  mid: "hidden ",
  bottom: "origin-center -translate-y-2 -rotate-45 ",
};

export default function ResponsiveMenuBtn() {
  const [buttonPress, setbuttonPress] = useState(true);
  const { theme } = useTheme();

  const turnBtnToCross = (): void => {
    setbuttonPress((buttonPress) => !buttonPress);
  };

  return (
    <div
      className={styles.menu_btn}
      onClick={() => {
        turnBtnToCross();
      }}
    >
      <div
        className={!buttonPress ? styles.bar : styles.bar + styles.top}
      ></div>
      <div className={!buttonPress ? styles.bar : styles.top}></div>
      <div
        className={!buttonPress ? styles.bar : styles.bar + styles.bottom}
      ></div>
    </div>
  );
}
