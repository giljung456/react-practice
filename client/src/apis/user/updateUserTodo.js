import route from "../../commons/constants/route";

const updateUserTodo = (todoId, content, isFinished) => {
  fetch(`${route.SERVER_URL}/api/users/my/todos/${todoId}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, isFinished }),
  });
};

export default updateUserTodo;
