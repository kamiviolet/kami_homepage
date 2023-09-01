import React from "react";
import categoryList from "@/lib/constants/menu_categories";
import ThemeToggler from "./_themetoggler";
import MenuCategoryType from "@/types/menu_category.type";
import MenuItem from "./_menuitem";

const styles = {
  menu_wrapper:
    "absolute flex flex-col justify-center items-center top-0 left-0 w-full h-full overflow-y-auto pt-4 pe-8 z-10 md:flex-row md:justify-between md:items-center md:h-min",
  menu_container:
    "flex flex-col place-items-center text-center md:flex-row md:justify-between md:items-center md:h-min",
  menu_item: {
    menu_link:
      "block font-display-0 bg-inherit p-4 font-semibold text-lg tracking-[2px] md:flex md:min-w-[100px] md:flex-col md:place-items-center md:p-initial",
    menu_icon: "hidden md:block",
    menu_text: "flex place-items-center",
  },
  toggle_container: "my-4 md:my-0 md:-translate-y-1 flex justify-center text-3xl"
};

export default function MenuWrapper(): React.ReactNode {
  return (
    <ul className={styles.menu_wrapper}>
      <li>
        <ul className={styles.menu_container}>
          {categoryList.map((category: MenuCategoryType, i: number) => (
            <li key={category.target + "_link_" + i}>
              <MenuItem category={category} styles={styles.menu_item} />
            </li>
          ))}
        </ul>
      </li>
      <li>
        <ThemeToggler styles={styles.toggle_container} />
      </li>
    </ul>
  );
}
