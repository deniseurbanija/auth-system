import { Request, Response } from "express";
import {
  addPostService,
  deletePostService,
  getPostsService,
} from "../services/postService";
import User from "../models/User";

// Controller to get all posts
export const getPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsService();
    res.status(200).json(posts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json("Error geting post " + error.message);
    }
  }
};

// Controller to add new post
export const addPostController = async (req: Request, res: Response) => {
  const postData = req.body;
  try {
    const newPost = await addPostService(postData);
    res.status(201).json(newPost);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json("Error adding post " + error.message);
    }
  }
};


// Controller to delete post
export const deletePostController = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const deletedPost = await deletePostService(postId);  
    res.status(200).json(deletedPost);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json("Error deleting post " + error.message);
    }
  }
  // SHOULD ONLY DELETE IF POST.USER = USER.USERNAME !!!
};
