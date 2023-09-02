import React from "react";
import SVGContainer from "./svg_container";
import svgList from "@/lib/constants/svg_collection";

const styles = {
  svg_wrapper: "w-inherit",
  svg_container: {
    svg_container:
      "w-inherit grid gap-4 grid-cols-fill-50 place-items-center",
    svg_icon: "bg-white p-2 rounded w-[75px] h-[75px]",
  },
};

export default function SVGCollection() {
  const { name, description, list } = svgList;
  return (
    <section className={styles.svg_wrapper}>
      <h3>{name}</h3>
      <p>{description}</p>
      <SVGContainer list={list} styles={styles.svg_container} />
    </section>
  );
}
