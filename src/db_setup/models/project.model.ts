import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectScheme = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tools: {
    type: [String],
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  url: {
    demo: { type: String, trim: true },
    github: { type: String, trim: true },
  },
});

const ProjectModel = mongoose.model("ProjectModel", ProjectScheme);

export default ProjectModel;
