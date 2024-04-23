import { privateService } from "../services/protectedService";
import { Request, Response } from "express";

export const privateController = (req: Request, res: Response) => {
  const text = privateService();
  res.send(text);
};
