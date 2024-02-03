import { prisma } from "../../server";
import {
  TUser,
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";
import { Users } from "@prisma/client";

export const createUserService = async (
  data: TUser
): Promise<TUserResponse> => {
  try {
    const colors = [
      "#349974",
      "#000080",
      "#34D8AC",
      "#D3D3D3",
      "#F5F5DC",
      "#654321",
      "#FFC0CB",
      "#C8A2C8",
      "#DC143C",
      "#FF91A4",
      "#FFBF00",
      "#B2FFFF",
      "#40E0D0",
      "#006400",
      "#FF7256",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    data.user_color = colors[randomIndex];
    data.reset_password = "";

    // Extrair a propriedade 'comments' do objeto 'data'

    const user = await prisma.users.create({
      data,
    });
    const formattedUser: TUserResponse = userSchemaResponse.parse(user);

    console.log("colors");
    return formattedUser;
  } catch (error) {
    console.error("Erro na criação do usuário:", error);
    throw error;
  }
};
