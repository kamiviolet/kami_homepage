import React from "react";

const styles = {
  header: "justify-self-center grid place-items-center gap-8 mt-4 mb-12 md:grid-cols-[auto_minmax(250px,400px)]",
  description: "md:col-start-1 text-xl",
  "my-name": "text-6xl font-bold py-8",
  logo: "md:col-start-2"
}

export default function Header(): React.ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.description}>
        <p>Welcome to my homepage,</p>
        <h1 className={styles["my-name"]}>I&apos;m Kami</h1>
      </div>
      <div className={styles.logo}>
        <img src="/lazy_uranus.svg" alt="kami's logo: lazy uranus" />
      </div>
    </header>
  );
}
