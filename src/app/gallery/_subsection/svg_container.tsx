import React from "react";
import SVGContainer from "../svg_container";
import svgList from "@/lib/constants/svg_collection";

export default function SVGCollection() {
  const { name, description, list } = svgList;
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="svgicons_wrapper">
        <SVGContainer list={list} />
      </div>
    </>
  );
}
