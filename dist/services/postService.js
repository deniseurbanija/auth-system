"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostService = exports.addPostService = exports.getPostsService = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const User_1 = __importDefault(require("../models/User"));
/**
 * Service to get all posts
 * @returns All posts
 */
const getPostsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield Post_1.default.find();
    return posts;
});
exports.getPostsService = getPostsService;
/**
 * Service to add a new post
 * @param postData Post data to add
 * @returns Newly added post
 */
const addPostService = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(postData.userId);
    if (!user) {
        throw new Error("User not found");
    }
    const newPost = yield Post_1.default.create({
        content: postData.content,
        imageUrl: postData.imageUrl,
        user: user.username,
        createdAt: new Date(),
        updatedAt: null,
    });
    user.posts.push(newPost._id);
    user.save();
    return newPost;
});
exports.addPostService = addPostService;
/**
 * Service to delete one post
 * @param id post id to find it
 * @returns deleted post
 */
const deletePostService = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post_1.default.findById(postId);
    if (!post)
        throw new Error("Post not found");
    const deletedPost = yield post.deleteOne();
    return deletedPost;
});
exports.deletePostService = deletePostService;
