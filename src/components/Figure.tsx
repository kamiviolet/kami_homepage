import Image from "next/image";
import React from "react";

export default function Figure({
  src,
  caption,
  styles,
}: {
  src: string;
  caption: string;
  styles?: string;
}) {
  return (
    <figure className={styles}>
      <Image src={src} alt={caption} width="350" height="400" quality={80} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
