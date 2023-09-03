const styles = {
  ul: "list-disc pl-4",
  li: "pl-4 pb-4",
};

export default function FunFact() {
  return (
    <section>
      <h2>Fun Facts about Me</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          My favourite gaming console was: Gameboy =&gt; Super Nintendo (SNES)
          =&gt; Saturn =&gt; PC
        </li>
        <li className={styles.li}>
          I chose SEGA Saturn over PlayStation and after half a year, SEGA
          announced that they would stop making gaming console.. I could not
          believe the news back then.
        </li>
        <li className={styles.li}>
          When I was 10, my summer holiday was from 10am to 2am playing TV
          games, for a whole month.
        </li>
        <li className={styles.li}>
          The House of Zombies is one of few horror games I can play without
          having an urge to commit suicide.
        </li>
      </ul>
    </section>
  );
}
