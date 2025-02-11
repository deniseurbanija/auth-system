import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.SECRET as string;

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.header("authorization");
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader || (req.query.token as string);

    if (!token) {
      return res
        .status(403)
        .json({ message: "Access denied: no token provided" });
    }

    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res
          .status(401)
          .json({ message: "Access denied: token expired or incorrect" });
      }
      (req as any).user = decoded; // Optionally attach the decoded user info to the request
      next();
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default validateToken;
