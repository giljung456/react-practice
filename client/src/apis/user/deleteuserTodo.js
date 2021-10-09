import route from "../../commons/constants/route";

const deleteUserTodo = (todoId) => {
  fetch(`${route.SERVER_URL}/api/users/my/todos/${todoId}`, {
    method: "delete",
  });
};

export default deleteUserTodo;
