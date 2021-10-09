import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import { todos } from "./models/dummy.js";

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/users/my/todos", (req, res) => res.status(200).json(todos));

app.listen(port);
