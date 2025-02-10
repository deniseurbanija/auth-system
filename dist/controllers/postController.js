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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostController = exports.addPostController = exports.getPostsController = void 0;
const postService_1 = require("../services/postService");
// Controller to get all posts
const getPostsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield (0, postService_1.getPostsService)();
        res.status(200).json(posts);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json("Error geting post " + error.message);
        }
    }
});
exports.getPostsController = getPostsController;
// Controller to add new post
const addPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postData = req.body;
    try {
        const newPost = yield (0, postService_1.addPostService)(postData);
        res.status(201).json(newPost);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json("Error adding post " + error.message);
        }
    }
});
exports.addPostController = addPostController;
// Controller to delete post
const deletePostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    try {
        const deletedPost = yield (0, postService_1.deletePostService)(postId);
        res.status(200).json(deletedPost);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json("Error deleting post " + error.message);
        }
    }
    // SHOULD ONLY DELETE IF POST.USER = USER.USERNAME !!!
});
exports.deletePostController = deletePostController;
