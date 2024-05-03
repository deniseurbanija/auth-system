import { IUser } from "../models/User";
import { postDto } from "../dtos/postDto";
import Post from "../models/Post";
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

export const getPostsService = async () => {
  const posts = await Post.find();
  return posts;
};

export const addPostService = async (postData: postDto) => {
  const user = await User.findOne({ _id: postData.authorId });
  if (!user) {
    throw new Error("User not found");
  }

  const newPost = await Post.create({
    content: postData.content,
    imageUrl: postData.imageUrl,
    author: user?._id,
    createdAt: Date.now(),
    updatedAt: null,
  });
  await newPost.populate("author");
  return newPost;
};

export const getUsersService = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

// export const getUserByIdService = async (id: string) => {
//   const foundUserById: IUser | null = await User.findById(id);

//   if (!foundUserById) throw new Error("User not found");

//   return foundUserById;
// };

// export const deleteUserService = async (id: string) => {
//   const deletedUser = await User.deleteOne({ _id: id });
//   return deletedUser;
// };
