import ResponsiveMenuBtn from "./_responsive_menubtn";
import MenuWrapper from "./_menuwrapper";
import React from "react";

const styles={
  navbar: "row-start-1 row-end-2 justify-self-end w-inherit grid justify-end top-0",
}

export default function Nav():React.ReactNode {
  return (
    <nav className={styles.navbar}>
      <ResponsiveMenuBtn />
      <MenuWrapper />
    </nav>
  );
}
