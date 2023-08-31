import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import ProjectType from "@/types/project.type";
import TechStack from "./tech_stack";

export default function ProjectContainer({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <div className="project_container">
      <div className="project image">
        <Link href={project.url.demo} target="_blank">
          <img
            loading="lazy"
            src={"projects" + project.images.web}
            className="thumbnail web_thumbnail"
          />
        </Link>
      </div>
      <div className="project details">
        <h3>{project.name}</h3>
        <span className="key">Description:</span>
        <pre className="value">{project.description}</pre>
        <span className="key">Tools:</span>
        <TechStack tools={project.tools} name={project.name} />
        <div className="btn_wrapper">
          <Link href={project.url.demo} target="_blank">
            Live demo
          </Link>
          <Link href={project.url.github} target="_blank">
            <BsGithub /> <span>Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
