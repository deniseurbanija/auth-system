import { Request, Response } from "express";
import { registerService, loginService } from "../services/authService";

// Controller to register a new user
export const registerController = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const newUser = await registerService(userData);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json("Error registering new user " + error.message);
      // This type of checking within the catch block is crucial to ensure we are
      // handling the error correctly and not encountering any unexpected issues.
    }
  }
};

// Controller to login/ authenticate user
export const loginController = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const token = await loginService(userData);
    res
      .header("authorization", token)
      .json({ message: "Authenticated", token: token });
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(res.statusCode)
        .json("Incorrect password or username " + error.message);
    }
  }
};
