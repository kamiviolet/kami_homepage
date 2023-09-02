import SkillType from "@/types/skill.type";
import Image from "next/image";

const defaultStyle = "bg-white p-2 rounded shadow";

export default function SkillIcon({
  s,
  styles = defaultStyle,
}: {
  s: SkillType;
  styles?: string;
}): React.ReactNode {
  return (
    <Image
      className={styles}
      src={s.path}
      alt={s.name}
      width={75}
      height={75}
    />
  );
}
