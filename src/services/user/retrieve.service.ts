import { prisma } from "../../server";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

export const retrieveUserService = async (
  userId: number
): Promise<TUserResponse> => {
  const user = await prisma.users.findFirst({
    where: {
      id: userId,
    },
  });

  return userSchemaResponse.parse(user);
};
