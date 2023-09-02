import React from "react";
import SVGCard from "./svg_card";
import { ThumbnailType } from "@/types/gallery_subsection.type";

export default function SVGContainer({
  list,
  styles,
}: {
  list: ThumbnailType[];
  styles?: any;
}) {
  return (
    <div className={styles["svg-container"]}>
      {list.map((icon, i) => (
        <SVGCard icon={icon} styles={styles["svg-icon"]} key={icon.name + "_" + i} />
      ))}
    </div>
  );
}
