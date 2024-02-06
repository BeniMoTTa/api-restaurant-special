import { Request, Response } from "express";
import {
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import { retrieveUserService } from "../../services/user/retrieve.service";

export const retrieveUserByTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserRequestWithColor[] = await retrieveUserService();

  return res.json(user);
};
