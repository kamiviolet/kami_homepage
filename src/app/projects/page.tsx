import React from "react";
import projectList from "@/lib/constants/projects";
import ProjectContainer from "./ProjectContainer";

export default function Projects(): React.ReactNode {
  return (
    <section className="section projects">
      <h2>Projects</h2>
      <p>
        Below is some of my projects since the beginning of my journey. If you
        are interested to explore more of my works, you are welcomed to visit my
        little nest in Github :D
      </p>
      <div className="projects_wrapper">
        {projectList.map((project, i) => {
          return <ProjectContainer key={project + "_" + i} project={project} />;
        })}
      </div>
    </section>
  );
}
