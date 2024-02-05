import { Request, Response } from "express";
import { retrieveUserService } from "../../services/user/retrieve.service";
import {
  TUser,
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserRequestWithColor[] = await retrieveUserService();

  return res.json(user);
};
