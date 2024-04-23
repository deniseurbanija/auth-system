import { Request, Response } from "express";
import {
  registerService,
  loginService,
  getUsersService,
  getUserByIdService,
} from "../services/userService";
import { IUser } from "../Interfaces/IUser";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("Error finding users");
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user: IUser = await getUserByIdService(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Error finding user");
  }
};

export const loginController = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const token = await loginService(userData);
    res
      .header("authorization", token)
      .json({ message: "Authenticated", token: token });
  } catch (error) {
    res.status(401).json("error");
  }
};

export const registerController = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const newUser = await registerService(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json("error");
  }
};
