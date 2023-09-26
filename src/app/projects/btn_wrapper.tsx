import { BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import ProjectButton from "./project_btn";

export default function BtnWrapper({
  demo,
  code,
}: {
  demo: string;
  code: string|undefined;
}): React.ReactNode {
  return (
    <div className="flex">
      {
        (demo) ? (
            <ProjectButton
            link={demo}
            styles="bg-information hover:text-text hover:bg-highlight-bg"
            innerText="Live Demo"
            >
              <IoMdOpen />
            </ProjectButton>
        ) : <></>
      }{
        (code) ? (
            <ProjectButton
            link={code}
            styles="bg-background-mid hover:text-text hover:bg-highlight-bg"
            innerText="Code"
            >
              <BsGithub />
            </ProjectButton>
          ) : <></>
      }
    </div>
  );
}
