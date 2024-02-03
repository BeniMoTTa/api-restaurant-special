import { Router } from "express";
import { userSchemaRequest } from "../schemas/user.schema";
import {
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
} from "../middlewares";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user";
import { retrieveOneUserController } from "../controllers/user/retrieveOneUser.controller";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  createUserController
);

userRoutes.get("", retrieveUserController);
userRoutes.get("/:id", retrieveOneUserController);

userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  updateUserController
);

userRoutes.delete("/:id", deleteUserController);
