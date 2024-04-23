import { Router } from "express";
import userRouter from "./userRoutes";
import protectedRouter from "./protectedRoutes";

const router = Router();

router.use("/user", userRouter);
router.use("/api", protectedRouter);

export default router;
