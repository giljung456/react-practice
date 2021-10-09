import { updateUserTodo } from "../../../../services/user/index.js";

export default (req, res) => {
  const { todoId } = req.params;
  updateUserTodo(todoId);
  res.status(200).end();
};
