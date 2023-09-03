import React from "react";
import SVGContainer from "./svg_container";
import { GallerySubsectionType } from "@/types/gallery_subsection.type";

export default function SVGCollection({
  svgList,
  size = 75,
}: {
  svgList: GallerySubsectionType;
  size?: number;
}) {
  const { name, description, list } = svgList;

  const styles = {
    svg_wrapper: "w-inherit",
    svg_container: {
      svg_container: "w-inherit grid gap-4 place-items-center ",
      svg_icon: `bg-white p-2 rounded `,
    },
  };

  const gridSize = size <= 150 ? " grid-cols-fill-50" : " grid-cols-fill-250";

  styles.svg_container.svg_container += gridSize;
  styles.svg_container.svg_icon += `w-[${size}px] h-[${size}px]`;

  return (
    <section className={styles.svg_wrapper}>
      <h3>{name}</h3>
      <p>{description}</p>
      <SVGContainer list={list} styles={styles.svg_container} />
    </section>
  );
}
