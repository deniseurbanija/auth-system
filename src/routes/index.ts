import { Router } from "express";
import apiRouter from "./apiRouter";

const router = Router();

router.use("/api", apiRouter);

export default router;
