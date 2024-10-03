export interface IUser {
  _id?: string;
  name?: string;
  role: string;
  email: string;
  status: string;
  mobileNumber?: string;
  profilePhoto?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
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
