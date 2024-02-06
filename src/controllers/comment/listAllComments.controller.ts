import { Request, Response } from "express";
import { TCommentResponse } from "../../interfaces/comment.interfaces";
import { listAllCommentService } from "../../services/comment/listAllComments.service";

export const listAllCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allComments: TCommentResponse[] = await listAllCommentService();

  return res.json(allComments);
};
