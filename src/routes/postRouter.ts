import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import {
  addPostController,
  deletePostController,
  getPostsController,
} from "../controllers/postController";

const postRouter = Router();

postRouter.get("/", validateToken, getPostsController);
postRouter.post("/", validateToken, addPostController);
postRouter.delete("/:id", validateToken, deletePostController);

export default postRouter;
