import { prisma } from "../../server";
import {
  TUser,
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import {
  manyUserResponse,
  userSchemaResponse,
} from "../../schemas/user.schema";
import { Users } from "@prisma/client";

export const retrieveUserService = async (): Promise<
  TUserRequestWithColor[]
> => {
  try {
    const users: TUserResponse[] = await prisma.users.findMany({
      orderBy: [
        {
          id: "asc",
        },
      ],
      include: {
        comments: true,
      },
    });

    const usersWithComments: TUserResponse[] = users.map((user) => ({
      ...user,
      comments: (user as any).Comment || [],
    }));

    return manyUserResponse.parse(usersWithComments);
  } catch (error) {
    console.error("Erro na validação do usuário:", error);
    throw error;
  }
};
