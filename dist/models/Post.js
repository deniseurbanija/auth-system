"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
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
const Post = (0, mongoose_1.model)("Post", postSchema);
exports.default = Post;
