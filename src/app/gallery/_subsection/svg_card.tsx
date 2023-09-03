import Image from "next/image";

export default function SVGCard({
  icon,
  styles,
  size=75
}: {
  icon: { file: string; name: string };
  styles: any;
  size?: number
}) {

  // const num = 75;
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
