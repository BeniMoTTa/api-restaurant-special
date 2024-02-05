import { Comment } from "@prisma/client";
import { prisma } from "../../server";
import { TCommentResponse } from "../../interfaces/comment.interfaces";
import { manyCommentSchemaResponse } from "../../schemas/comment.schema";

export const listAllAdService = async (): Promise<TCommentResponse[]> => {
  const ads: Comment[] = await prisma.comment.findMany({
    include: {
      user: true,
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return manyCommentSchemaResponse.parse(ads);
};
