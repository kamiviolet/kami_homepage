import skillList from "@/lib/constants/skills";
import SkillType from "@/types/skill.type";

export default function TechStack({
  tools,
  name,
}: {
  tools: string;
  name: string;
}) {
  const techStack: string[] = tools.split(", ");

  const retrievedTechStack: any = techStack.map((t: string) =>
    skillList.find((s) => s.name === t)
  );

  return (
    <div className="value">
      {retrievedTechStack.map((t: SkillType, i: number) => {
        if (t) {
          <img
            src={t.path}
            className="icon"
            alt={t.name}
            key={name + "_" + i + "_" + t}
          />;
        }
      })}
    </div>
  );
}
