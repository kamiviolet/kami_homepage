import React from "react";
import SideBar from "./sidebar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SideBar />
    </>
  );
}
