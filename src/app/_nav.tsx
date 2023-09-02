"use client";

import ResponsiveMenuBtn from "./_responsive_menubtn";
import MenuWrapper from "./_menuwrapper";
import React, { useState } from "react";

const styles = {
  navbar:
    "row-start-1 row-end-2 w-full bg-background-end grid justify-end self-start py-4 z-20",
};

export default function Nav(): React.ReactNode {
  const [onMenu, setOnMenu] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <ResponsiveMenuBtn onMenu={onMenu} setOnMenu={setOnMenu} />
      <MenuWrapper onMenu={onMenu}  setOnMenu={setOnMenu} />
    </nav>
  );
}
