import axios from "axios";
import { getUser, createUser } from "../../../../services/user/index.js";
import { createSession } from "../../../../services/session/index.js";

export default async (req, res) => {
  const { code } = req.body;
  const clientId = "973842d0d0be4f973835";
  const secret = "a67ca9fd1f05d191b5693b455a8f4032ec196bbb";
  const TOKEN_URL = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${secret}&code=${code}`;

  const { data } = await axios.post(TOKEN_URL);
  const searchParams = new URLSearchParams(data);
  const accessToken = searchParams.get("access_token");
  const USER_PROFILE_URL = "https://api.github.com/user";
  const { data: userInformation } = await axios.get(USER_PROFILE_URL, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  const { name } = userInformation;

  const user = getUser(accessToken);
  if (!user) {
    createUser(accessToken, name);
  }

  createSession(req.session, accessToken);
  res.cookie("name", name);
  res.status(201).end();
};
