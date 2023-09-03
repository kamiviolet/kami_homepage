import mongoose from "mongoose";

const { Schema } = mongoose;

const TagSchema = new Schema({
  tags: {
    type: String,
    require: true,
  },
});

const TagModel = mongoose.model("Tag", TagSchema);

export default TagModel;
