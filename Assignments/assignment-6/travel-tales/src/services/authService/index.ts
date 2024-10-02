/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { IUserSignInResponse } from "@/type/user.type";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const signUpUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", userData);

    if (data.success) {
      cookies().set("accessToken", data?.accessToken);
      cookies().set("refreshToken", data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = (await axiosInstance.post(
      "/auth/login",
      userData
    )) as IUserSignInResponse;
    if (data.success) {
      cookies().set("accessToken", data?.accessToken);
      cookies().set("refreshToken", data?.refreshToken);
    }
    console.log("from service", data);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

// export const getCurrentUser = async () => {
//   const accessToken = cookies().get("accessToken")?.value;

//   let decodedToken = null;

//   if (accessToken) {
//     decodedToken = await jwtDecode(accessToken);

//     return {
//       _id: decodedToken._id,
//       name: decodedToken.name,
//       email: decodedToken.email,
//       mobileNumber: decodedToken.mobileNumber,
//       role: decodedToken.role,
//       status: decodedToken.status,
//       profilePhoto: decodedToken.profilePhoto,
//     };
//   }

//   return decodedToken;
// };

// export const getNewAccessToken = async () => {
//   try {
//     const refreshToken = cookies().get("refreshToken")?.value;

//     const res = await axiosInstance({
//       url: "/auth/refresh-token",
//       method: "POST",
//       withCredentials: true,
//       headers: {
//         cookie: `refreshToken=${refreshToken}`,
//       },
//     });

//     return res.data;
//   } catch (error) {
//     throw new Error("Failed to get new access token");
//   }
// };
