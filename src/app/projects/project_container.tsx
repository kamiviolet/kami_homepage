import React from "react";
import Link from "next/link";
import ProjectType from "@/types/project.type";
import TechStack from "./tech_stack";
import Image from "next/image";
import BtnWrapper from "./btn_wrapper";

const styles = {
  skillset: "grid grid-cols-fill-10 gap-4 my-2",
  key: "font-bold after:content-[':']",
};

export default function ProjectContainer({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <>
      <div>
        <Link href={project.url.demo} target="_blank">
          <Image
            loading="lazy"
            src={"/projects" + project.image}
            alt={project.name}
            className="thumbnail web_thumbnail"
            width="350"
            height="300"
          />
        </Link>
      </div>
      <div>
        <h3>{project.name}</h3>
        <p className={styles.key}>Description</p>
        <p>{project.description}</p>
        <p className={styles.key}>Tools</p>
        <div className={`${styles.skillset}`}>
          <TechStack tools={project.tools} name={project.name} />
        </div>
        <BtnWrapper demo={project.url.demo} code={project.url.github} />
      </div>
    </>
  );
}
