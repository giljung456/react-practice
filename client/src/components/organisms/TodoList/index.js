import { useState, useEffect } from "react";
import { TodoItem } from "../../molecules";
import getTodos from "../../../apis/getTodos";
import "./index.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);
  const todoList = todos.map((todo) => {
    return <TodoItem title={todo.content} key={String(todo.id)}></TodoItem>;
  });
  return <div className="todo-list">{todoList}</div>;
}

export default TodoList;
