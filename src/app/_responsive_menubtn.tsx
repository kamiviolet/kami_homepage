import React, { useState } from "react";

const styles = {
  menu_btn: "w-[45px] h-[45px] mx-6 z-30 cursor-pointer block md:hidden ",
  bar: "bg-black dark:bg-white rounded w-full h-[5px] mt-3 transition-[300ms] first-of-type:mt-0 ",
  top: "origin-center translate-y-2  rotate-45 ",
  mid: "hidden ",
  bottom: "origin-center -translate-y-2 -rotate-45 ",
};

export default function ResponsiveMenuBtn({
  setOnMenu,
  onMenu,
}: {
  onMenu: boolean;
  setOnMenu: (val: boolean | ((prevVal: boolean) => boolean)) => void;
}) {
  const [buttonPress, setbuttonPress] = useState(true);

  const turnBtnToCross = (): void => {
    setbuttonPress((buttonPress) => !buttonPress);
    setOnMenu((onMenu) => !onMenu);
  };

  return (
    <div
      className={onMenu ? styles.menu_btn + " fixed top-8 right-0" : styles.menu_btn}
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
