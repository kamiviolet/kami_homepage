import mongoose from "mongoose";

const { Schema } = mongoose;

const TagSchema = new Schema({
  tag: {
    type: String,
    require: true,
  },
});

const TagModel = mongoose.model("Tags", TagSchema);

export default TagModel;
