import route from "../../commons/constants/route";

const login = (code) => {
  fetch(`${route.SERVER_URL}/api/auth`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ code }),
  });
};

export default login;
