import ResponsiveMenuBtn from "./_responsive_menubtn";
import MenuWrapper from "./_menuwrapper";
import React from "react";

export default function Nav():React.ReactNode {
  return (
    <nav className="navbar">
      <ResponsiveMenuBtn />
      <MenuWrapper />
    </nav>
  );
}
