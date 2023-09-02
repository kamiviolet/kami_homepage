import React from "react";
import SVGContainer from "./svg_container";
import svgList from "@/lib/constants/svg_collection";

const styles = {
  "svg-wrapper": "",
  "svg-container": {
    "svg-container":
      "w-full max-w-[1024px] grid gap-4 grid-cols-fill-50 place-items-center",
    "svg-icon": "bg-white p-2 rounded w-[75px] h-[75px]",
  },
};

export default function SVGCollection() {
  const { name, description, list } = svgList;
  return (
    <section className={styles["svg-wrapper"]}>
      <h3>{name}</h3>
      <p>{description}</p>
      <SVGContainer list={list} styles={styles["svg-container"]} />
    </section>
  );
}
