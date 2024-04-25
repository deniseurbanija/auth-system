import { Router } from "express";
import {
  deleteUserController,
  getUserController,
  getUsersController,
  loginController,
  registerController,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.get("/:id", getUserController);
userRouter.delete("/:id", deleteUserController);
userRouter.post("/register", registerController);
userRouter.post("/login", loginController);

export default userRouter;
