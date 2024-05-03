import { Router } from "express";
import {
  addPostsController,
  getPostsController,
  // deleteUserController,
  // getUserController,
  getUsersController,
  loginController,
  registerController,
} from "../controllers/apiController";
import validateToken from "../middlewares/validateToken";

const apiRouter = Router();

apiRouter.get("/", getUsersController);
// apiRouter.get("/:id", getUserController);
// apiRouter.delete("/:id", deleteUserController);
apiRouter.post("/register", registerController);
apiRouter.post("/login", loginController);
apiRouter.get("/posts", validateToken, getPostsController);
apiRouter.post("/posts", validateToken, addPostsController);

export default apiRouter;
