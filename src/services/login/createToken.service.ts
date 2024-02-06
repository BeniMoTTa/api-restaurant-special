import bcrypt from "bcryptjs";
import { login } from "../../interfaces/login.interfaces";
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";
import "dotenv/config";
import { Users } from "@prisma/client";
import jwt from "jsonwebtoken";

export const createTokenService = async ({
  email,
  password,
}: login): Promise<{}> => {
  const user: Users | null = await prisma.users.findFirst({
    where: {
      email,
    },
  });
  console.log(user?.password);
  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }
  if (password.toString() !== user.password.toString()) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: user.id.toString(),
  });

  return { token: token, user_id: user.id };
};
