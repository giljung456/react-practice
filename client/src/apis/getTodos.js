import route from "../commons/constants/route";

const getTodos = async () => {
  const rawResult = await fetch(`${route.SERVER_URL}/users/my/todos`, {
    method: "get",
    headers: {
      Accept: "application/json",
    },
  });
  const result = await rawResult.json();
  return result;
};

export default getTodos;
