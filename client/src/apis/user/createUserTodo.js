import route from "../../commons/constants/route";

const createUserTodo = (content) => {
  fetch(`${route.SERVER_URL}/api/users/my/todos`, {
    method: "post",
    headers: {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    },
  });
};

export default createUserTodo;
