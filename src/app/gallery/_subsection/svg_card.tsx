export default function SVGCard({
  icon,
}: {
  icon: { file: string; name: string };
}) {
  return (
    <div className="icons" key={icon.file}>
      <img loading="lazy" src={icon.file} alt={icon.name} />
    </div>
  );
}
