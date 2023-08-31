import * as fs from "fs/promises";
import PostType from "@/types/post.type";

const initialPosts: PostType[] = [
  {
    title: "testing 01",
    author: "kami",
    content: "testing testing testing",
    tags: ["testing"],
  },
];

const stringifiedPosts:string = JSON.stringify(initialPosts, null, 4);

try {
  fs.writeFile("./src/db_setup/data/posts.json", stringifiedPosts);
  console.log("Created json for initial posts successfully.");
} catch (err:unknown) {
  console.error(err);
}
