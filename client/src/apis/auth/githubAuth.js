import route from "../../commons/constants/route";

const githubAuth = async (code) => {
  const rawReuslt = await fetch(`${route.SERVER_URL}/api/auth`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ code }),
  });
  const result = await rawReuslt.json();
  return result;
};

export default githubAuth;
