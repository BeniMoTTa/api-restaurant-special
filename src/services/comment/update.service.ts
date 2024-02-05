import {
  TCommentResponse,
  TCommentsUpdateRequest,
} from "../../interfaces/comment.interfaces";
import { prisma } from "../../server";
import { Comment } from "@prisma/client";
import { commentSchemaResponse } from "../../schemas/comment.schema";
export const updateCommentService = async (
  data: TCommentsUpdateRequest,
  commentId: number
): Promise<TCommentResponse> => {
  const updatedComments: Comment = await prisma.comment.update({
    where: { id: commentId },
    data: {
      ...data,
      edited: true,
    },
    include: {
      user: true,
    },
  });

  return commentSchemaResponse.parse(updatedComments);
};
