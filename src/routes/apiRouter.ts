import { Router } from "express";
import {
  // deleteUserController,
  // getUserController,
  // getUsersController,
  loginController,
  registerController,
} from "../controllers/userController";
import validateToken from "../middlewares/validateToken";

const apiRouter = Router();

// apiRouter.get("/", getUsersController);
// apiRouter.get("/:id", getUserController);
// apiRouter.delete("/:id", deleteUserController);
apiRouter.post("/register", registerController);
apiRouter.post("/login", loginController);

export default apiRouter;
