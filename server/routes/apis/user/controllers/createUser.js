import { createUser } from "../../../../services/user/index.js";

export default async (req, res) => {
  const { id, password, accessToken, nickname, profileURL } = req.body;
  await createUser({ id, password, accessToken, nickname, profileURL });
  res.status(201).end();
};
