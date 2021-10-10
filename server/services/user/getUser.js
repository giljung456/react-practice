import { users } from "../../models/dummy.js";

const getUser = (accessToken) => {
  return users.find((user) => user.accessToken === accessToken);
};

export default getUser;
