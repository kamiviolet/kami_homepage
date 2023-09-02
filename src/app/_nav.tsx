"use client"

import ResponsiveMenuBtn from "./_responsive_menubtn";
import MenuWrapper from "./_menuwrapper";
import React from "react";

const styles={
  navbar: "row-start-1 row-end-2 justify-self-end w-inherit grid justify-end top-0",
}

export default function Nav():React.ReactNode {
  const clickMenuItems = () => {
    // const menuWrapper = document.querySelector(".menu_wrapper");
    // const menuBtn = document.querySelector(".menu_btn");
  
    //   if (e.target.classList.contains("menu_btn_bar") && menuWrapper.classList.contains("hidden")) {
    //     menuWrapper.classList.remove("hidden");
    //     menuBtn.classList.add('open')
    //   }
    //   else if (e.target.classList.contains("menu_btn_bar") && !menuWrapper.classList.contains("hidden")) {
    //     menuWrapper.classList.add("hidden");
    //     menuBtn.classList.remove('open')
    //   }
    //   else if (!menuWrapper.classList.contains("hidden")) {
    //     menuWrapper.classList.add("hidden");
    //     menuBtn.classList.remove('open')
    //   }
  }

  return (
    <nav className={styles.navbar} onClick={(e)=>clickMenuItems()}>
      <ResponsiveMenuBtn />
      <MenuWrapper />
    </nav>
  );
}
