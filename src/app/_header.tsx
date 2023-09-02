import Image from "next/image";
import React from "react";

const styles = {
  header: "justify-self-center gap-14 mt-4 mb-12",
  "my-name": "text-6xl font-bold py-8 pe-4",
};

export default function Header(): React.ReactNode {
  return (
    <header className={styles.header}>
      <p className="text-xl">Welcome to my homepage,</p>{" "}
      <Image
        src="/lazy_uranus.svg"
        alt="kami's logo: lazy uranus"
        width="400"
        height="450"
        className="uranus"
      />
      <h1 className={styles["my-name"]}>I&apos;m Kami</h1>{" "}
      <p>
        Here is my little vault to store my works and things that I like to
        share with you.
      </p>
      <p>It is my portfolio but more than just a portfolio.</p>
      <p>
        Everyone has their own unique story to tell and I think mine is pretty
        interesting.
      </p>
      <p>
        Born in Hong Kong, having the second family in Tokyo Japan, currently
        based in London UK, I am a web developer embracing various culture,
        taking a people-centric approach.
      </p>
      <p>
        From my early age, I have been interested in science, a subject combined
        logic, creativity and practicality, however I ended up in humanities for
        higher education. From sociology to psychoanalysis, it equipped me with
        a better understanding about people and society.
      </p>
      <p>
        Eager to learn more about the real world, I took up the challenge of
        travelling from the East to the West by land, via Tran-Siberia Railway,
        following with countless encounters, working in several positions across
        industries, making connections with people from different background.
      </p>
      <p>
        I build things on the web, and I am determined not just things I will
        build, but things that can help people to connect with each other, to
        help them to have a more comfortable life.
      </p>
    </header>
  );
}
