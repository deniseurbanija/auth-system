import { IUser } from "../models/User";
import { userDto } from "../dtos/userDto";
import { postDto } from "../dtos/postDto";
import Post, { IPost } from "../models/Post";
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
  const newUser = User.create({ username: username, password: password });
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

/**
 * Service to get all posts
 * @returns All posts
 */
export const getPostsService = async () => {
  const posts = await Post.find();
  return posts;
};

/**
 * Service to add a new post
 * @param postData Post data to add
 * @returns Newly added post
 */
export const addPostService = async (postData: postDto): Promise<IPost> => {
  const user = await User.findById(postData.userId);
  if (!user) {
    throw new Error("User not found");
  }

  const newPost = await Post.create({
    content: postData.content,
    imageUrl: postData.imageUrl,
    user: user.username,
    createdAt: new Date(),
    updatedAt: null,
  });

  user.posts.push(newPost._id);
  user.save();

  return newPost;
};

/* EXTRAS */

/**
 * Service to get all users
 * @returns All users with their posts populated
 */
export const getUsersService = async (): Promise<IUser[]> => {
  const users = await User.find().populate("posts");
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
