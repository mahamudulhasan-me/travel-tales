/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "./user.type";
export interface IVoteInfo {
  postId: string | undefined;
  userId: string | undefined;
  voteType: "upvote" | "downvote";
}
export interface IPost {
  data?: any;
  _id?: string;
  author?: IUser;
  content: string;
  images: string[];
  isPremium: boolean;
  voteCount: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  votes: IVoteInfo[];
}
