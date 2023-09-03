import React from "react";
import SVGCard from "./svg_card";
import { ThumbnailType } from "@/types/gallery_subsection.type";

export default function SVGContainer({
  list,
  styles,
  size,
}: {
  list: ThumbnailType[];
  styles?: any;
  size: number;
}) {
  return (
    <div className={styles.svg_container}>
      {list.map((icon, i) => (
        <SVGCard
          icon={icon}
          size={size}
          styles={styles.svg_icon}
          key={icon.name + "_" + i}
        />
      ))}
    </div>
  );
}
