import React from "react";
import ProjectContainer from "./project_container";
import { fetchAllProjectsFromDb } from "./utils";
import ProjectType from "@/types/project.type";

const styles = {
  project_section: "w-inherit",
  project_wrapper:
    "w-inherit grid my-8 gap-8 md:grid-cols-[350px_auto] w-inherit",
};

export default async function Projects() {
  try {
    const projectList: ProjectType[] = await fetchAllProjectsFromDb();

  return (
    <section className={styles.project_section}>
      <h2>Projects</h2>
      <p>
        Below is some of my projects since the beginning of my journey. If you
        are interested to explore more of my works, you are welcomed to visit my
        little nest in Github :D
      </p>

      <div className={styles.project_wrapper}>
        {projectList.map((project: ProjectType, i: number) => {
          return <ProjectContainer key={project + "_" + i} project={project} />;
        })}
      </div>
    </section>
  );} catch (e) {
    console.log("Err", e);
  }
}
