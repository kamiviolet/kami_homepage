import MenuCategoryType from "@/types/menu_category.type";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";

export default function MenuItem({
  category,
  styles,
}: {
  category: MenuCategoryType;
  styles: { menu_link: string; menu_icon: string; menu_text: string };
}): React.ReactNode {
  return (
    <>
      {category.target == "articles" ? (
        <Link
          className={styles.menu_link}
          href="https://medium.com/@kamiviolet"
          target="_blank"
        >
          <div className={styles.menu_icon}>{category.icon}</div>
          <p className={styles.menu_text}>
            {category.target.toUpperCase()} <IoMdOpen />
          </p>
        </Link>
      ) : (
        <Link className={styles.menu_link} href={category.link}>
          <div className={styles.menu_icon}>{category.icon}</div>
          <p className={styles.menu_text}>{category.target.toUpperCase()}</p>
        </Link>
      )}
    </>
  );
}
