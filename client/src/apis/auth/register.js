import route from "../../commons/constants/route";

const register = async (id, password) => {
  const accessToken = window.localStorage.getItem("accessToken");
  const nickname = window.localStorage.getItem("nickname");
  const profileURL = window.localStorage.getItem("profileURL");
  await fetch(`${route.SERVER_URL}/api/users`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, password, accessToken, nickname, profileURL }),
  });
};

export default register;
