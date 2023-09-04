import SkillIcon from "@/components/SkillIcon";
import skillList from "@/lib/constants/skills";
import SkillType from "@/types/skill.type";

export default function TechStack({
  tools,
  name,
}: {
  tools: string[];
  name: string;
}) {
  const retrievedTechStack = tools.map((t: string) =>
    skillList.find((s) => s.name === t)
  );

  return retrievedTechStack.map((t, i) => {
    if (t) {
      return <SkillIcon s={t} key={name + "_" + i + "_" + t} />;
    }
  });
}
