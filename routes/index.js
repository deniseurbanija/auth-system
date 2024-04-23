const { Router } = require("express");
const authRouter = require("./authRoutes");

const router = Router();

router.use("/user", authRouter);

module.exports = router;
