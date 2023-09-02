import Figure from "@/components/Figure";

const styles = {
  sidebar: "dark:bg-gray-700 bg-gray-300 grid grid-cols-fill-150 justify-center md:grid-cols-1fr md:px-4 md:py-6 ",
  image: "mx-4 my-4 md:mx-0 first-of-type:my-0 first-of-type:mb-4"
}

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Figure src="/photos/about_me.jpg" caption="Me" styles={styles.image} />
      <Figure src="/photos/about_me_1.jpg" caption="With family" styles={styles.image} />
      <Figure src="/photos/about_me_2.jpeg" caption="In Czech Republic" styles={styles.image} />
      <Figure src="/photos/pusi.jpg" caption="I likw drawing" styles={styles.image} />
      <Figure
        src="/photos/baking.jpg"
        caption="And also baking for others :)"
        styles={styles.image}
      />
    </aside>
  );
}
