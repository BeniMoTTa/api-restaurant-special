import { Request, Response } from "express";
import { retrieveUserService } from "../../services/user/retrieve.service";
import { TUser, TUserResponse } from "../../interfaces/user.interfaces";

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUser[] = await retrieveUserService();

  return res.json(user);
};
