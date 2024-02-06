import { Request, Response } from "express";
import { listAllUserCommentsService } from "../../services/comment/listUserAllComments.service";

export const listAllUserCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = +req.params.id;
  const comments = await listAllUserCommentsService(userId);

  return res.json(comments);
};
