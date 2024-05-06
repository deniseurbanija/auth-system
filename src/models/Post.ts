import { Schema, model } from "mongoose";

export interface IPost {
  content: string;
  imageUrl?: string;
  user: string;
  likes?: number;
  comments?: number;
  status?: "active" | "deleted" | "pending";
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>({
  content: { type: String, required: true },
  imageUrl: { type: String },
  user: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["active", "deleted", "pending"],
    default: "active",
  },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: null },
});

const Post = model<IPost>("Post", postSchema);

export default Post;
