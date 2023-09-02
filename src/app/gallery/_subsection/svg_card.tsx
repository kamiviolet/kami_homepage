import Image from "next/image";

export default function SVGCard({
  icon,
  styles,
}: {
  icon: { file: string; name: string };
  styles: any;
}) {
  return (
    <Image
      loading="lazy"
      src={icon.file}
      alt={icon.name}
      width="75"
      height="75"
      className={styles}
    />
  );
}
