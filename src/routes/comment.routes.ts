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
commentRoutes.get("/user/:id", listAllUserCommentsController);
commentRoutes.post("", ensureAuthMiddleware, createCommentController);
commentRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureCommentExistsMiddleware,
  deleteCommentController
);
