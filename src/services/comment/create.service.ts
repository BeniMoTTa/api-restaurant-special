import { Comment } from "@prisma/client";
import {
  TCommentRequest,
  TCommentResponse,
} from "../../interfaces/comment.interfaces";
import { prisma } from "../../server";
import { commentSchemaResponse } from "../../schemas/comment.schema";

export const createCommentService = async (
  data: TCommentRequest,
  userId: number
): Promise<TCommentResponse> => {
  const comment: Comment = await prisma.comment.create({
    data: {
      ...data,
      userId: userId,
    },
    include: {
      user: true,
    },
  });

  return commentSchemaResponse.parse(comment);
};
