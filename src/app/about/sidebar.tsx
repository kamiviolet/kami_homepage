import Figure from "@/components/Figure";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";

const styles = {
  sidebar:
    "dark:bg-gray-700 bg-gray-300 grid grid-cols-fill-150 justify-center md:grid-cols-1fr md:px-4 md:py-6 auto-rows-min",
  image: "mx-4 my-4 md:mx-0",
};

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Figure src="/photos/about_me.jpg" caption="Me" styles={styles.image} />
      <Figure
        src="/photos/about_me_1.jpg"
        caption="With family"
        styles={styles.image}
      />
      <Figure
        src="/photos/about_me_2.jpeg"
        caption="In Czech Republic"
        styles={styles.image}
      />
      <Figure
        src="/photos/pusi.jpg"
        caption="I like drawing"
        styles={styles.image}
      />
      <Figure
        src="/photos/baking.jpg"
        caption="And also baking for others :)"
        styles={styles.image}
      />
      <Link
        href="https://kamiviolet.github.io/tribute_page/"
        target="_blank"
        className="text-center shadow bg-red-200 my-4 p-2 hover:text-white hover:bg-red-400 flex justify-center items-center"
      >
        Tribute to my sister<IoMdOpen />
      </Link>
    </aside>
  );
}
