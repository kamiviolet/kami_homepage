import React from "react";
import categoryList from "@/lib/constants/menu_categories";
import ThemeToggler from "./_themetoggler";
import MenuCategoryType from "@/types/menu_category.type";
import MenuItem from "./_menuitem";

export default function MenuWrapper():React.ReactNode {
  return (
    <>
      <ul className="menu_wrapper">
        {categoryList.map((category: MenuCategoryType, i: number) => (
          <li key={category.target + "_link_" + i}>
            <MenuItem category={category} />
          </li>
        ))}
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </>
  );
}
