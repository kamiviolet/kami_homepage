import skillList from "@/lib/constants/skills";

export default function MySkills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skillList.map((s, i) => (
          <li className="capitalize" key={s + "_list_" + i}>{s.name}</li>
        ))}
      </ul>
    </section>
  );
}
