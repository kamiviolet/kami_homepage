import React, { useRef, ChangeEvent } from "react";
import categoryList from "@/lib/constants/menu_categories";
import ThemeToggler from "./_themetoggler";
import MenuCategoryType from "@/types/menu_category.type";
import MenuItem from "./_menuitem";

const styles = {
  menu_wrapper:
    "bg-background-end fixed flex flex-col justify-center items-center top-0 left-0 w-screen h-screen md:pe-8 z-10 md:flex md:flex-row md:justify-between md:items-center md:h-min",
  menu_container:
    "flex flex-col place-items-center text-center md:flex-row md:justify-between md:items-center md:h-min",
};

export default function MenuWrapper({
  onMenu,
  setOnMenu,
}: {
  onMenu: boolean;
  setOnMenu: (val: boolean | ((prevVal: boolean) => boolean)) => void;
}): React.ReactNode {
  const validZone = useRef(null);
  const checkClick = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLTextAreaElement;
    if (target.nodeName == "A" || target.parentElement?.nodeName == "A")
      setOnMenu((onMenu) => !onMenu);
  };
  return (
    <div
      className={onMenu ? styles.menu_wrapper : styles.menu_wrapper + " hidden"}
      onClick={checkClick}
    >
      <div className={styles.menu_container}>
        {categoryList.map((category: MenuCategoryType, i: number) => (
          <MenuItem
            ref={validZone}
            category={category}
            key={category.target + "_link_" + i}
          />
        ))}
      </div>
      <ThemeToggler />
    </div>
  );
}
