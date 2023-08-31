import React from "react";
import Figure from "@/components/Figure";
import skillList from "@/lib/constants/skills";
import MyBackground from "./_subsection/background";
import MyVision from "./_subsection/vision";
import MySkills from "./_subsection/skills";

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
      </div>
    </>
  );
}
