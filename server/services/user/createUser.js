import { users } from "../../models/dummy.js";

const createUser = (accessToken, name) => {
  users.push({ accessToken, name });
};

export default createUser;
