import { IUser } from "./user.type";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IVoteInfo {
  postId: string | undefined;
  userId: string | undefined;
  voteType: "upvote" | "downvote";
}
export interface IPost {
  data?: any;
  _id?: string;
  author?: string | IUser | undefined;
  content: string;
  images: string[];
  isPremium: boolean;
  category: string;
  voteCount?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  votes?: IVoteInfo[];
}
