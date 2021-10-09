import { createUserTodo } from "../../../../services/user/index.js";

export default (req, res) => {
  const { content } = req.body;
  createUserTodo(content);
  res.status(201).end();
};
