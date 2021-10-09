import { deleteUserTodo } from "../../../../services/user/index.js";

export default (req, res) => {
  const { todoId } = req.params;
  deleteUserTodo(todoId);
  res.status(200).end();
};
