"use client";

// import { turnBtnToCross } from "../utils/utils";
import React from "react";

export default function ResponsiveMenuBtn(): React.ReactNode {
  return (
    <div className="menu_btn menu_btn_bar" onClick={(e) => {}}>
      <div className="bar menu_btn_bar bar_1"></div>
      <div className="bar menu_btn_bar bar_2"></div>
      <div className="bar menu_btn_bar bar_3"></div>
    </div>
  );
}
