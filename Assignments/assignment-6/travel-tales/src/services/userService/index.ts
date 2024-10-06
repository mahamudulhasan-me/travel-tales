import axiosInstance from "@/lib/AxiosInstance";
import { IUser } from "@/type/user.type";

export const updateUser = async (data: IUser, userId: string) => {
  try {
    const { data: response } = await axiosInstance.patch(
      `/users/${userId}`,
      data
    );
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/users/${userId}`);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
