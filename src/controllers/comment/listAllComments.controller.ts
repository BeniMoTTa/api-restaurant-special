import { Request, Response } from "express";
import { TCommentResponse } from "../../interfaces/comment.interfaces";
import { listAllUserCommentsService } from "../../services/comment/listUserAllComments.service";

export const listAllCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const allComments: TCommentResponse[] = await listAllUserCommentsService(
    userId
  );

  return res.json(allComments);
};
