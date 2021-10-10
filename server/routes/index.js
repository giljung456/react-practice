import express from "express";
import userRouter from "./apis/user/index.js";
import authRouter from "./apis/auth/index.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
