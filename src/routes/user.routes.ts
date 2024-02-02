import { Router } from "express";
import { userSchemaRequest } from "../schemas/user.schema";
import {
  ensureCpfExistsMiddleware,
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureIsOwnerUserMiddleware,
  ensureUserExistsMiddleware,
  ensureAuthMiddleware,
} from "../middlewares";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
  forgotPasswordController,
  newPasswordController,
} from "../controllers/user";
import { retrieveUserByTokenController } from "../controllers/user/retrieveUserByToken.controller";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  ensureCpfExistsMiddleware,
  createUserController
);
