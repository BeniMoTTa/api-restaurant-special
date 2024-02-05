import "express-async-errors";
import "reflect-metadata";

import cors from "cors";
import express, { Application } from "express";
import { handleErrors } from "./errors/errors";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { commentRoutes } from "./routes/comment.routes";

export const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/comment", commentRoutes);

app.use(handleErrors);
