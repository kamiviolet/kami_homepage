import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import SKILLS from "../constants/Skills";
import React from "react";

export default function ProjectContainer({ project }) {
  return (
    <div className="project_container">
      <div className="project image">
        <Link to={project.url.demo} target="_blank">
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
        <div className="value">
          {project.tools
            .split(", ")
            .map((t) => {
              return SKILLS.find((s) => s.name === t);
            })
            .map((t,i) => (
              <img src={t.path} className="icon" alt={t.name} key={project.name+"_"+i+"_"+t} />
            ))}
        </div>
        <div className="btn_wrapper">
          <Link to={project.url.demo} target="_blank">
            Live demo
          </Link>
          <Link to={project.url.github} target="_blank">
            <BsGithub /> <span>Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
