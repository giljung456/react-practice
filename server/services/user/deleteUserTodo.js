import { todos } from "../../models/dummy.js";

const deleteUserTodo = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId);
};

export default deleteUserTodo;
