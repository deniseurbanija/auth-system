import { Router } from "express";
import {
    getUser,
    getUsers,
  loginController,
  registerController,
} from "../controllers/userController";
// import validateToken from "../middlewares/validateToken";

const userRouter = Router();

userRouter.get("/", getUsers)
userRouter.get("/:id", getUser)
userRouter.post("/register", registerController);
userRouter.post("/login", loginController);


export default userRouter;
