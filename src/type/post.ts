/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IVoteInfo {
  postId: string | undefined;
  userId: string | undefined;
  voteType: "upvote" | "downvote";
}
export interface IPost {
  data?: any;
  _id?: string;
  author: {
    _id: string;
    name: string;
    email: string;
    profileImage: string;
    coverImage: string;
    status: string;
    dateOfBirth: string;
    bio: string;
  };

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

export interface IPostCreate {
  content: string;
  author?: string;
  images: string[];
  isPremium: boolean;
  category: string;
}
