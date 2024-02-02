import { prisma } from "../../server";
import { TUser, TUserResponse } from "../../interfaces/user.interfaces";
import {
  manyUserResponse,
  userSchemaResponse,
} from "../../schemas/user.schema";

export const retrieveUserService = async (): Promise<TUser[]> => {
  const users = await prisma.users.findMany();

  return manyUserResponse.parse(users);
};
