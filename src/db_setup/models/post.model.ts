import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  content: String,
  data: {
    type: Date,
    default: Date.now(),
  },
  tags: [{ type: String }],
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
