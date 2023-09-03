import React from "react";
import SVGContainer from "./svg_container";
import { GallerySubsectionType } from "@/types/gallery_subsection.type";

const styles = {
  svg_wrapper: "w-inherit",
};

type NestedStyle = {
  svg_container: string | null;
  svg_icon: string | null;
};

export default function SVGCollection({
  svgList,
  size,
}: {
  svgList: GallerySubsectionType;
  size?: number;
}) {
  const { name, description, list } = svgList;
  const svg_container: NestedStyle = {
    svg_container: "w-inherit grid gap-4 place-items-center ",
    svg_icon: "bg-white p-2 rounded",
  };

  if (size && size < 100) {
    svg_container.svg_container += `grid-cols-fill-50 `;
    svg_container.svg_icon += ` w-[75px] h-[75px]`;
  } else if (size && size >= 100) {
    svg_container.svg_container += `grid-cols-fill-250 `;
    svg_container.svg_icon += ` w-[350px] h-[250px]`;
  }

  return (
    <section className={styles.svg_wrapper}>
      <h3>{name}</h3>
      <p>{description}</p>
      <SVGContainer size={size} list={list} styles={svg_container} />
    </section>
  );
}
