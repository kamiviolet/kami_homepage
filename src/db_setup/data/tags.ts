import * as fs from "fs/promises";
import Tagtype from "@/types/tag.type";

const tags = [
  { tag: "algorithm" },
  { tag: "javascript" },
  { tag: "ecma2015" },
  { tag: "node" },
  { tag: "typescript" },
  { tag: "express" },
  { tag: "testing" },
];

const stringifiedTags = JSON.stringify(tags, null, 4);

try {
  fs.writeFile("./src/db_setup/data/tags.json", stringifiedTags);
  console.log("Initial tags uploaded successfully.");
} catch (error: unknown) {
  console.error(error);
}