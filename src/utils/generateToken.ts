import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.SECRET as String;

export const generateToken = (user: any): string => {
  return jwt.sign(user, secret as string, { expiresIn: "10m" });
};
