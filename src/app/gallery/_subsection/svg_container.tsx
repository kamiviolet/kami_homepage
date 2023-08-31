import React from "react";
import SVGCard from "./svg_card";
import { ThumbnailType } from "@/types/gallery_subsection.type";

export default function SVGContainer({ list }: { list: ThumbnailType[] }) {
  return (
    <div className="svgicons_wrapper">
      {list.map((icon, i) => (
        <SVGCard icon={icon} key={icon.name + "_" + i} />
      ))}
    </div>
  );
}
