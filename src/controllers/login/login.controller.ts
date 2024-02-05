import { Request, Response } from "express";
import { login } from "../../interfaces/login.interfaces";
import { createTokenService } from "../../services/login/createToken.service";

export const createTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: login = req.body;

  const token = await createTokenService(data);

  return res.json(token);
};
