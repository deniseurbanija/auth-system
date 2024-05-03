import { Schema, Types, model } from "mongoose";

export interface IPost {
  _id: Types.ObjectId;
  content: string;
  imageUrl: string;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>({
  _id: { type: Schema.Types.ObjectId },
  content: { type: String, required: true },
  imageUrl: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: null },
});

const Post = model<IPost>("Post", postSchema);

export default Post;
