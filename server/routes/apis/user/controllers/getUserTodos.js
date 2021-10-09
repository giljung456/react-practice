import { getUserTodos } from "../../../../services/user/index.js";

export default (req, res) => {
  const todos = getUserTodos();
  res.status(200).json(todos);
};
