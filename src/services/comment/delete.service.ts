import { prisma } from "../../server";

export const deleteCommentService = async (
  commentId: number
): Promise<void> => {
  await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });
  return;
};
