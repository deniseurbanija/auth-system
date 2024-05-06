import { postDto } from "../dtos/postDto";
import Post, { IPost } from "../models/Post";
import User from "../models/User";

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

/**
 * Service to delete one post
 * @param id post id to find it
 * @returns deleted post
 */
export const deletePostService = async (postId: string) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");
  const deletedPost = await post.deleteOne();
  return deletedPost;
};
