import React from "react";
import SVGCollection from "./_subsection/svg_wrapper";
import svgList from "@/lib/constants/svg_collection";
import miscList from "@/lib/constants/misc_collection";

export default function Gallery() {
  return (
    <>
      <h2>SVG Collection</h2>
      <SVGCollection svgList={svgList} size={75}/>
      <SVGCollection svgList={miscList} size={550} />
    </>
  );
}
