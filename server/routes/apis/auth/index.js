import express from "express";
import * as controller from "./controllers/index.js";
const router = express.Router();

router.post("/", controller.login);
router.post("/logout", controller.logout);

export default router;
