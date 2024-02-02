import { prisma } from "../../server";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

export const retrieveUserService = async (): // userId: number
Promise<TUserResponse> => {
  const users = await prisma.users.findMany();

  return userSchemaResponse.parse(users);
};
