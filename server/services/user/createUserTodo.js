import { todos } from "../../models/dummy.js";

const createUserTodo = (content) => {
  todos.push({
    content,
    isFinished: false,
    id: todos.length,
  });
};

export default createUserTodo;
