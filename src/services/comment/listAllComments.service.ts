import { Comment } from "@prisma/client";
import { prisma } from "../../server";
import { TCommentResponse } from "../../interfaces/comment.interfaces";
import { manyCommentSchemaResponse } from "../../schemas/comment.schema";

export const listAllCommentService = async (): Promise<TCommentResponse[]> => {
  const comment: Comment[] = await prisma.comment.findMany({
    include: {
      user: true,
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return manyCommentSchemaResponse.parse(comment);
};
