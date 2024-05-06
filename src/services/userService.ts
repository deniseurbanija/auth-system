import { IUser } from "../models/User";
import User from "../models/User";

/**
 * Service to get all users
 * @returns All users with their posts populated
 */
export const getUsersService = async (): Promise<IUser[]> => {
  const users = await User.find().populate("posts");
  return users;
};

/**
 * Service to get user by id
 * @param id user id to find it
 * @returns found user
 */
export const getUserByIdService = async (id: string) => {
  const foundUserById: IUser | null = await User.findById(id);

  if (!foundUserById) throw new Error("User not found");

  return foundUserById;
};

/**
 * Service to delete one user
 * @param id user id to find it
 * @returns deleted user
 */
export const deleteUserService = async (id: string) => {
  const deletedUser = await User.deleteOne({ _id: id });
  return deletedUser;
};
