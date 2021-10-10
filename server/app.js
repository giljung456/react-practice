import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import session from "express-session";
import sessionStore from "session-file-store";
import apiRouter from "./routes/index.js";

const __dirname = path.resolve();
const app = express();
const SessionStore = sessionStore(session);
const port = process.env.PORT || 9000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: new SessionStore(),
  })
);

app.use("/api", apiRouter);

app.listen(port);
