export interface IUser {
  _id?: string;
  name?: string;
  role: string;
  email: string;
  status: string;
  phone?: string;

  profileImage?: string;
  coverImage?: string;
  createdAt?: string;
  updatedAt?: string;
  address?: string;
  __v?: number;
  dateOfBirth?: string;
  bio?: string;
}

export interface IUserSignInResponse {
  data: {
    success: boolean;
    message: string;
    accessToken: string;
    refreshToken: string;
    data: IUser;
  };
}
