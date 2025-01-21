import mongoose from "mongoose";
import connectDB from "./connection";
import PostModel from "./models/post.model";
import ProjectModel from "./models/project.model";
import TagModel from "./models/tag.model";
import rawPosts from "./data/posts.json";
import rawTags from "./data/tags.json";
import rawProjects from "./data/projects.json";
import PostType from "@/types/post.type";
import TagType from "@/types/tag.type";
import ProjectType from "@/types/project.type";

const seedDB = async (): Promise<void> => {
  await connectDB();

  await PostModel.deleteMany({});
  await TagModel.deleteMany({});
  await ProjectModel.deleteMany({});

  const formattedPosts = rawPosts.map((p: PostType) => {
    return { ...p, _id: new mongoose.mongo.ObjectId() };
  });

  const formattedTags = rawTags.map((t: TagType) => {
    return { ...t, _id: new mongoose.mongo.ObjectId() };
  });

  const formattedProjects = rawProjects.map((t: ProjectType) => {
    return { ...t, _id: new mongoose.mongo.ObjectId() };
  });

  await PostModel.insertMany(formattedPosts);
  await TagModel.insertMany(formattedTags);
  await ProjectModel.insertMany(formattedProjects);
};

seedDB().then(() => mongoose.disconnect());
