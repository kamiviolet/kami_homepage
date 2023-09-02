import MenuCategoryType from "@/types/menu_category.type";
import Link from "next/link";
import { Ref, forwardRef } from "react";
import { IoMdOpen } from "react-icons/io";

const styles = {
  menu_link:
    "font-display-0 bg-inherit p-4 font-semibold text-lg tracking-[2px] flex md:min-w-[100px] md:flex-col md:place-items-center md:p-initial",
  menu_icon: "hidden md:block",
  menu_text: "flex place-items-center",
};

const MenuItem = forwardRef(function MenuItem(
  {
    category,
  }: {
    category: MenuCategoryType;
  },
  ref: Ref<HTMLAnchorElement>
): React.ReactNode {
  return (
    <>
      {category.target == "articles" ? (
        <Link
          className={styles.menu_link}
          href="https://medium.com/@kamiviolet"
          target="_blank"
          ref={ref}
        >
          <div className={styles.menu_icon}>{category.icon}</div>
          <span className={styles.menu_text}>
            {category.target.toUpperCase()} <IoMdOpen />
          </span>
        </Link>
      ) : (
        <Link className={styles.menu_link} href={category.link}>
          <div className={styles.menu_icon}>{category.icon}</div>
          <span className={styles.menu_text}>
            {category.target.toUpperCase()}
          </span>
        </Link>
      )}
    </>
  );
});

export default MenuItem;
