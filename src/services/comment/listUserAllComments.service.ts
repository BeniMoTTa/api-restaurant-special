import { TCommentResponse } from "../../interfaces/comment.interfaces";
import { manyCommentSchemaResponse } from "../../schemas/comment.schema";
import { prisma } from "../../server";
import { Comment } from "@prisma/client";

export const listAllUserCommentsService = async (
  userId: number
): Promise<TCommentResponse[]> => {
  const comments: Comment[] = await prisma.comment.findMany({
    where: {
      userId: userId,
    },
    include: {
      user: true,
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return manyCommentSchemaResponse.parse(comments);
};
