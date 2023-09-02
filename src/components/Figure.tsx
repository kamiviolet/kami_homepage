import React from "react";

export default function Figure({
  src,
  caption,
  styles
}: {
  src: string;
  caption: string;
  styles?: string;
}) {
  return (
    <figure className={styles}>
      <img src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
