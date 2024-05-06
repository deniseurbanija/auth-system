import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import {
  deleteUserController,
  getUserByIdController,
  getUsersController,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", validateToken, getUsersController);
userRouter.get("/:id", validateToken, getUserByIdController);
userRouter.delete("/:id", validateToken, deleteUserController);

export default userRouter;
