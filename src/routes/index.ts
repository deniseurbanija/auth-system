import { Router } from "express";
import authRouter from "./authRouter";
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/users", userRouter);
router.get("/try", async (req, res) => {
  res.json({ message: "trying" });
});

export default router;
