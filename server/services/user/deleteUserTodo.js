import { todos } from "../../models/dummy.js";

const deleteUserTodo = (todoId) => {
  const targetIdx = todos.findIndex((todo) => todo.id === todoId);
  todos.splice(targetIdx, 1);
};

export default deleteUserTodo;
