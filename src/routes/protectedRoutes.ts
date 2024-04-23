import { Router } from "express";
import { privateController } from "../controllers/protectedController";
import validateToken from "../middlewares/validateToken";

const protectedRouter = Router();

protectedRouter.get("/private", validateToken, privateController);

export default protectedRouter;
