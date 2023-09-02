import Image from "next/image";
import skillList from "@/lib/constants/skills";
import Header from "./_header";

const styles = {
  "self-intro": "",
  skillset: "flex flex-wrap",
  skillicon: "bg-white p-2 mx-2 rounded first-of-type:m-0 first-of-type:me-2 last-of-type:mx-0 last-of-type:ms-2"
}

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles["self-intro"]}>
        <p>
          Here is my little vault to store my works and things that I like to
          share with you.
        </p>
        <p>It is my portfolio but more than just a portfolio.</p>
        <p>
          Everyone has their own unique story to tell and I think mine is pretty
          interesting. Born in Hong Kong, having the second family in Tokyo
          Japan, currently based in London UK, I am a web developer embracing
          various culture, taking a people-centric approach.
        </p>
        <p>
          From my early age, I have been interested in science, a subject
          combined logic, creativity and practicality, however I ended up in
          humanities for higher education. From sociology to psychoanalysis, it
          equipped me with a better understanding about people and society.
        </p>
        <p>
          Eager to learn more about the real world, I took up the challenge of
          travelling from the East to the West by land, via Tran-Siberia
          Railway, following with countless encounters, working in several
          positions across industries, making connections with people from
          different background.
        </p>
        <p>
          I build things on the web, and I am determined not just things I will
          build, but things that can help people to connect with each other, to
          help them to have a more comfortable life.
        </p>
        <p>My current skill set includes:</p>
        <div className={styles.skillset}>
          {skillList.map((s, i) => (
            <Image key={s + "_list_" + i} className={styles.skillicon} src={s.path} alt={s.name} width={75} height={75} />
          ))}
        </div>
      </section>
    </>
  );
}
