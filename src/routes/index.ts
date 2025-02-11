import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerConfig } from "../docs/swagger";
import authRouter from "./authRouter";
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const router = Router();

const swaggerSpec = swaggerJSDoc(swaggerConfig);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/users", userRouter);

export default router;
