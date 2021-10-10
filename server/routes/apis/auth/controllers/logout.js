import { deleteSession } from "../../../../services/session/index.js";

export default (req, res) => {
  deleteSession(req.session);
  res.status(200).end();
};
