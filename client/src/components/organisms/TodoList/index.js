import { useState, useEffect } from "react";
import { TodoItem } from "../../molecules";
import { getUserTodos, deleteUserTodo, updateUserTodo } from "../../../apis/user";
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

  const onItemDelete = (todoId) => {
    deleteUserTodo(todoId);
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const onItemChange = (todoId) => {
    updateUserTodo(todoId, todos.find((todo) => todo.id === todoId).content, true);
    const newTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, isFinished: true } : todo));
    setTodos(newTodos);
  };

  const unDoneTodoList = todos
    .filter((todo) => !Boolean(todo.isFinished))
    .map((todo) => {
      return <TodoItem id={todo.id} onItemDelete={onItemDelete} onItemChange={onItemChange} content={todo.content} key={String(todo.id)}></TodoItem>;
    });

  const doneTodoList = todos
    .filter((todo) => Boolean(todo.isFinished))
    .map((todo) => {
      return (
        <div className="todo-item" key={String(todo.id)}>
          {todo.content}
        </div>
      );
    });

  return (
    <div className="todo-list-wrapper">
      <div className="todo-undone">
        <div className="todo-count">{todos.every((todo) => todo.isFinished) ? "오늘의 할 일을 모두 끝냈습니다!!" : `오늘의 할 일이 ${unDoneTodoList.length}개 남았습니다.`}</div>
        <div className="todo-list">{unDoneTodoList}</div>
      </div>
      <div className="todo-done">
        <div className="todo-count">{todos.some((todo) => todo.isFinished) ? `오늘의 할 일을 ${doneTodoList.length}개 완료했습니다.` : ""}</div>
        <div className="todo-list">{doneTodoList}</div>
      </div>
    </div>
  );
}

export default TodoList;
