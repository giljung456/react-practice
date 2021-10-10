import axios from "axios";

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
  const { name: nickname, avatar_url: profileURL } = userInformation;

  res.status(201).json({ accessToken, nickname, profileURL });
};
