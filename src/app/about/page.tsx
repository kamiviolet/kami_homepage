import React from "react";
import MyBackground from "./_subsection/background";
import MyVision from "./_subsection/vision";
import MySkills from "./_subsection/skills";
import FunFact from "./_subsection/fun_fact";

const styles = {
  details: "",
  subsection: "",
};

export default function About() {
  return (
    <>
      <div className={styles.details}>
        <MyBackground />
        <MyVision />
        <MySkills />
        <FunFact />
      </div>
    </>
  );
}
