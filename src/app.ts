import cors from "cors";
import express, { Application } from "express";
import { handleErrors } from "./errors/errors";

export const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/users");
app.use("/login");
app.use("/pictures");
app.use("/clients");

app.use(handleErrors);
