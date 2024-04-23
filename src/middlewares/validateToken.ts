import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.SECRET as string;

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("authorization") || req.query.token;

  if (!token) res.status(403).send("Access denied");
  jwt.verify(token as string, secret, (error: any, user: any) => {
    if (error) {
      res.status(401).send("Access denied: token expired or incorrect");
    } else {
      next();
    }
  });
};

export default validateToken;
