import { IUser } from "./user.type";

export interface IComment {
  _id?: string; // Optional when creating new comments
  postId: string; // ID of the post this comment is related to
  author: IUser | string; // ID of the user who created the comment
  content: string; // The content of the comment
  createdAt?: Date; // Automatically set when the comment is created
  updatedAt?: Date; // Automatically set when the comment is updated
  __v?: number; // Version key for Mongoose documents (optional)
}

export interface IUpdateComment {
  commentId: string;
  content: string;
}
