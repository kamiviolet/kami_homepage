import Image from "next/image";

export default function SVGCard({
  icon,
  styles,
  size,
}: {
  icon: { file: string; name: string };
  styles: any;
  size: number;
}) {
  return (
    <Image
      loading="lazy"
      src={icon.file}
      alt={icon.name}
      width={size}
      height={size}
      className={styles}
    />
  );
}
