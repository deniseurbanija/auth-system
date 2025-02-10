"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../middlewares/validateToken"));
const postController_1 = require("../controllers/postController");
const postRouter = (0, express_1.Router)();
postRouter.get("/", validateToken_1.default, postController_1.getPostsController);
postRouter.post("/", validateToken_1.default, postController_1.addPostController);
postRouter.delete("/:id", validateToken_1.default, postController_1.deletePostController);
exports.default = postRouter;
