import { Request, Response } from "express";
import {
  deleteUserService,
  getUserByIdService,
  getUsersService,
} from "../services/userService";
import { IUser } from "../models/User";

// Controller to get all users
export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.log(error); //log the error
    res.status(500).json("Error finding users");
  }
};

// Controller to get one user by id
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user: IUser = await getUserByIdService(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Error finding user");
  }
};

// Controller to delete one use by id
export const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const deletedUser = await deleteUserService(userId);
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(500).send("Error deleting user");
  }
};
