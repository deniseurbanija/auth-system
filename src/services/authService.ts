import { IUser } from "../models/User";
import { userDto } from "../dtos/userDto";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";
import bcrypt from "bcryptjs";

/**
 * Service to register a new user
 * @param userData User data to register
 * @returns Newly registered user
 */
export const registerService = async (userData: userDto): Promise<IUser> => {
  const { username, password } = userData;
  const newUser = await User.create({ username: username, password: password });
  return newUser;
};

/**
 * Service to authenticate a user
 * @param userData User data for login
 * @returns JWT token if authentication is successful
 */
export const loginService = async (userData: userDto): Promise<string> => {
  const { username, password } = userData;
  const foundUser = await User.findOne({ username });
  if (!foundUser) throw new Error("Incorrect username or password");

  const compare = await bcrypt.compare(password, foundUser.password);
  if (!compare) {
    throw new Error("Incorrect password");
  } else {
    const token = generateToken({ username: foundUser.username });
    return token;
  }
};
