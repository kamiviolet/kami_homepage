const styles = {
  ul: "list-disc pl-4",
  li: "pl-4 pb-4",
};

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className={styles.li}>{children}</li>;
}

export default function FunFact() {
  return (
    <section>
      <h2>Fun Facts about Me</h2>
      <ul className={styles.ul}>
        <ListItem>
          My first homepage was hosted in Geocities Hong Kong in 2001.
        </ListItem>
        <ListItem>
          I self learned HTML soon after being introduced Dreamweaver, was
          amazed how much more effective compared with using GUI.
        </ListItem>
        <ListItem>
          My favourite gaming console was: Gameboy =&gt; Super Nintendo (SNES)
          =&gt; Saturn =&gt; PC
        </ListItem>
        <ListItem>
          I chose SEGA Saturn over PlayStation and after half a year, SEGA
          announced that they would stop making gaming console.. I could not
          believe the news back then.
        </ListItem>
        <ListItem>
          When I was 10, my summer holiday was from 10am to 2am playing TV
          games, for a whole month.
        </ListItem>
        <ListItem>
          The House of Zombies is one of few horror games I can play without
          having an urge to commit suicide.
        </ListItem>
      </ul>
    </section>
  );
}
