import { todos } from "../../models/dummy.js";

const updateUserTodos = (todoId, content, isFinished) => {
  const targetIdx = todos.findIndex((todo) => todo.id === todoId);
  todos[targetIdx] = {
    content,
    isFinished,
    id: todoId,
  };
};

export default updateUserTodos;
