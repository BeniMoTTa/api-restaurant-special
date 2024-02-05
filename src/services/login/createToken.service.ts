import { compare } from "bcryptjs";
import { login } from "../../interfaces/login.interfaces";
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createTokenService = async ({
  email,
  password,
}: login): Promise<{}> => {
  const user = await prisma.users.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }
  const passwordMatch: boolean = await compare(
    password.trim(),
    user.password.trim()
  );
  console.log("Password (input):", password);
  console.log("Password (database):", user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token: string = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: user.id.toString(),
  });

  return { token: token, user_id: user.id };
};
