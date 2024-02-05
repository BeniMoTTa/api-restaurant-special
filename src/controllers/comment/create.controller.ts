import { Request, Response } from "express";
import { TCommentResponse } from "../../interfaces/comment.interfaces";
import { createCommentService } from "../../services/comment/create.service";

export const createCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentData = req.body;
  const userId: number = Number(res.locals.userId);

  const newComment: TCommentResponse = await createCommentService(
    commentData,
    userId
  );

  return res.status(201).json(newComment);
};
