import React from "react";
import SideBar from "./sidebar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[auto_275px] gap-8">
      {children}
      <SideBar />
    </div>
  );
}
