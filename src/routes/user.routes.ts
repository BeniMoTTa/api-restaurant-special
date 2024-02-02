import { Router } from "express";
import { userSchemaRequest } from "../schemas/user.schema";
import {
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
} from "../middlewares";
import {
  createUserController,
  retrieveUserController,
} from "../controllers/user";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  createUserController
);

userRoutes.get("", retrieveUserController);
