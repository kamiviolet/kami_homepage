import Header from "./_header";
import skillList from "@/lib/constants/skills";
import SkillIcon from "@/components/SkillIcon";

const styles = {
  skillset: "grid grid-cols-fill-50 gap-4 my-8",
};

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <p>My current skill set includes:</p>
        <div className={styles.skillset}>
          {skillList.map((s, i) => (
            <SkillIcon s={s} key={s + "_list_" + i} />
          ))}
        </div>
      </section>
    </>
  );
}
