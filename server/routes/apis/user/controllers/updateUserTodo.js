import { updateUserTodo } from "../../../../services/user/index.js";

export default (req, res) => {
  const { todoId } = req.params;
  const { content, isFinished } = req.body;
  updateUserTodo(+todoId, content, +isFinished);
  res.status(200).end();
};
