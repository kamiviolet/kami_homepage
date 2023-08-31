import Figure from "@/components/Figure";

export default function SideBar() {
  return (
    <aside>
      <Figure src="/photos/about_me.jpg" caption="Me" />
      <Figure src="/photos/about_me_1.jpg" caption="With family" />
      <Figure src="/photos/about_me_2.jpeg" caption="In Czech Republic" />
      <Figure src="/photos/pusi.jpg" caption="I likw drawing" />
      <Figure
        src="/photos/baking.jpg"
        caption="And also baking for others :)"
      />
    </aside>
  );
}
