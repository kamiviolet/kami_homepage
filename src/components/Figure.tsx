import React from "react";

export default function Figure({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) {
  return (
    <figure className="intro_images">
      <img src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
