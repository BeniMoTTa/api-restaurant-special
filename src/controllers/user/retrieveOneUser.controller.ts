import { Request, Response } from "express";
import { retrieveUserService } from "../../services/user/retrieve.service";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { retrieveOneUserService } from "../../services/user/retrieveOneUser.service";

export const retrieveOneUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const user: TUserResponse = await retrieveOneUserService(userId);

  return res.json(user);
};
