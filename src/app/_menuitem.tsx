import MenuCategoryType from "@/types/menu_category.type";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";

export default function MenuItem({ category }: { category: MenuCategoryType }):React.ReactNode {
  return (
    <>
      {category.target == "articles" ? (
        <Link
          className="menu_link"
          href="https://medium.com/@kamiviolet"
          target="_blank"
        >
          <div className="menu_icon">{category.icon}</div>
          <p className="menu_text">
            {category.target.toUpperCase()} <IoMdOpen />
          </p>
        </Link>
      ) : (
        <Link className="menu_link" href={category.link}>
          <div className="menu_icon">{category.icon}</div>
          <p className="menu_text">{category.target.toUpperCase()}</p>
        </Link>
      )}
    </>
  );
}
