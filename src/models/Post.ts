import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  content: { type: String, required: true },
  imageUrl: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
