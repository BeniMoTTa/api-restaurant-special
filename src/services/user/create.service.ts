import { prisma } from "../../server";
import {
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (
  data: TUserRequestWithColor
): Promise<TUserResponse> => {
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
  const user = await prisma.users.create({ data });

  return userSchemaResponse.parse(user);
};
