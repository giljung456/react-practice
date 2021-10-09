import { TodoItem } from "../../molecules";
import "./index.scss";

function TodoList({ todos }) {
  const todoList = todos.map((todo) => {
    return <TodoItem title={todo.title} key={String(todo.id)}></TodoItem>;
  });
  return <div className="todo-list">{todoList}</div>;
}

export default TodoList;
