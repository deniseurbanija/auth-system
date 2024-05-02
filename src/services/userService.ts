import { IUser } from "../Interfaces/IUser";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";
import bcrypt from "bcryptjs";


export const registerService = async (userData: IUser): Promise<IUser> => {
  const { username, password } = userData;
  const newUser = User.create({ username: username, password: password });
  return newUser;
};

export const loginService = async (userData: IUser): Promise<string> => {
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

// export const getUsersService = async (): Promise<IUser[]> => {
//   const users = await User.find();
//   return users;
// };

// export const getUserByIdService = async (id: string) => {
//   const foundUserById: IUser | null = await User.findById(id);

//   if (!foundUserById) throw new Error("User not found");

//   return foundUserById;
// };

// export const deleteUserService = async (id: string) => {
//   const deletedUser = await User.deleteOne({ _id: id });
//   return deletedUser;
// };
