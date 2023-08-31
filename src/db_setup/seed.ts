import mongoose from "mongoose";
import connectDB from "./connection";
import Post from "./models/post.model";
import Tag from "./models/tag.model";
import rawPosts from "./data/posts.json";
import rawTags from "./data/tags.json";
import PostType from "@/types/post.type";
import TagType from "@/types/tag.type";

connectDB();

const seedDB = async (): Promise<void> => {
  await Post.deleteMany({});
  await Tag.deleteMany({});

  const formattedPosts = rawPosts.map((p: PostType) => {
    return { ...p, _id: new mongoose.mongo.ObjectId() };
  });

  const formattedTags = rawTags.map((t: TagType) => {
    return { ...t, _id: new mongoose.mongo.ObjectId() };
  });

  await Post.insertMany({ formattedPosts });
  await Tag.insertMany({ formattedTags });
};

seedDB().then(() => mongoose.disconnect());
