import { useState, useEffect } from "react";
import { TodoItem } from "../../molecules";
import { getUserTodos } from "../../../apis/user";
import "./index.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getUserTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const onItemChange = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const todoList = todos.map((todo) => {
    return <TodoItem id={todo.id} onItemChange={onItemChange} content={todo.content} key={String(todo.id)}></TodoItem>;
  });

  return <div className="todo-list">{todoList}</div>;
}

export default TodoList;
