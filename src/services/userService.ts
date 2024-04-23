import { IUser } from "../Interfaces/IUser";
import User from "../models/User";
import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.SECRET as String;

const generateAccessToken = (user: any): string => {
  return jwt.sign(user, secret as string, { expiresIn: "10m" });
};

export const getUsersService = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdService = async (id: string) => {
  const foundUserById: IUser | null = await User.findById(id);

  if (!foundUserById) throw new Error("User not found");

  return foundUserById;
};

export const registerService = async (userData: IUser): Promise<IUser> => {
  const { username, password } = userData;
  const newUser = new User({ username: username, password: password });
  await newUser.save();
  return newUser;
};

export const loginService = async (userData: IUser): Promise<string> => {
  const { username, password } = userData;
  const foundUser = await User.findOne({ username: username });
  if (!foundUser) throw new Error("User not found");

  if (foundUser.password !== password) {
    throw new Error("Incorrect password");
  } else {
    const token = generateAccessToken({ username: foundUser.username });
    return token;
  }
};
