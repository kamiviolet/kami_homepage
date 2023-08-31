import mongoose from "mongoose";

const { Schema } = mongoose;

const TagSchema = new Schema({
  tags: {
    type: String,
    require: true,
  },
});

const Tag = mongoose.model("Tag", TagSchema);

export default Tag;
