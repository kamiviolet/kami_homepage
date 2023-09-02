import SkillIcon from "@/components/SkillIcon";
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

  return retrievedTechStack.map((t: SkillType, i: number) => {
    if (t) {
      return <SkillIcon s={t} key={name + "_" + i + "_" + t} />;
    }
  });
}
