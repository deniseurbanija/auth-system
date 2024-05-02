import { Request, Response } from "express";
import {
  registerService,
  loginService,
  getUsersService,
  getUserByIdService,
  deleteUserService,
} from "../services/userService";
import { IUser } from "../Interfaces/IUser";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.log(error); //log the error
    res.status(500).json("Error finding users");
  }
};

export const getUserController = async (req: Request, res: Response) => {
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
    res.status(401).json("Incorrect password or username");
  }
};

export const registerController = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const newUser = await registerService(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json("Error registering new user");
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const idk = await deleteUserService(userId);
    res.status(200).send(idk);
  } catch (error) {
    res.status(404).send("Error deleting user");
  }
};
