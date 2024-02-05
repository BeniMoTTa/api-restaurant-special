import { Router } from "express";
import {
  createCommentController,
  deleteCommentController,
  listAllCommentController,
} from "../controllers/comment";
import { listAllUserCommentsController } from "../controllers/comment/listAdComments.controller";
import { ensureAuthMiddleware } from "../middlewares";
import { ensureCommentExistsMiddleware } from "../middlewares/ensureCommentExist.middleware";

export const commentRoutes: Router = Router();

commentRoutes.get("", listAllCommentController);
commentRoutes.get(
  "/user/:id",
  ensureAuthMiddleware,
  listAllUserCommentsController
);
commentRoutes.post(
  "",
  ensureCommentExistsMiddleware,
  ensureAuthMiddleware,
  createCommentController
);
commentRoutes.delete(
  "/comment/:id",
  ensureAuthMiddleware,
  ensureCommentExistsMiddleware,
  deleteCommentController
);
