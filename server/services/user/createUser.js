import db from "../../models/index.js";

const createUser = async (accessToken, name) => {
  await db.user.create({ accessToken, name });
};

export default createUser;
