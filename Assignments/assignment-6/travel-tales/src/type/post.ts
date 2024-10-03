import { IUser } from "./user.type";

export interface IPost {
  _id?: string;
  author?: IUser;
  content: string;
  images: string[];
  isPremium: boolean;
  vote: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
