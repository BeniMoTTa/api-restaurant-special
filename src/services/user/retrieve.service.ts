import { prisma } from "../../server";
import { TUser, TUserResponse } from "../../interfaces/user.interfaces";
import {
  manyUserResponse,
  userSchemaResponse,
} from "../../schemas/user.schema";
import { Users } from "@prisma/client";

export const retrieveUserService = async (): Promise<TUser[]> => {
  try {
    const users: Users[] = await prisma.users.findMany({
      orderBy: [
        {
          id: "asc",
        },
      ],
      include: {
        Comment: true,
      },
    });

    const usersWithComments: TUser[] = users.map((user) => ({
      ...user,
      comments: (user as any).Comment || [],
    }));

    return manyUserResponse.parse(usersWithComments);
  } catch (error) {
    console.error("Erro na validação do usuário:", error);
    throw error;
  }
};
