import db from "../../models/index.js";

const createUser = async ({ id, password, accessToken, nickname, profileURL }) => {
  await db.user.create({ id, password, accessToken, nickname, profileURL });
};

export default createUser;
