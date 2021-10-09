import express from "express";
import * as controller from "./controllers/index.js";
const router = express.Router();

router.get("/my/todos", controller.getUserTodos);
router.post("/my/todos", controller.createUserTodo);
router.delete("/my/todos/:todoId", controller.deleteUserTodo);
router.put("/my/todos/:todoId", controller.updateUserTodo);

export default router;
