import Sequelize from "sequelize";
import user from "./user.js";
import todo from "./todo.js";
import configs from "../config/config.js";

const env = process.env.NODE_ENV || "development";
const config = configs[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = user(sequelize, Sequelize);
db.todo = todo(sequelize, Sequelize);

db.user.hasMany(db.todo);
db.todo.belongsTo(db.user);

export default db;
