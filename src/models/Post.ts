import { Schema, Types, model } from "mongoose";

export interface IPost {
  content: string;
  imageUrl?: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>({
  content: { type: String, required: true },
  imageUrl: { type: String },
  user: { type: String, required: true },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: null },
});

const Post = model<IPost>("Post", postSchema);

export default Post;
