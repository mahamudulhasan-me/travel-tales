"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

import envConfig from "@/config/envConfig";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const signUpUser = async (userData: FieldValues) => {
  const { data } = await axios.post(
    `${envConfig.baseApi}/auth/signup`,
    userData
  );
  console.log(data);
  if (data.success) {
    cookies().set("accessToken", data?.accessToken);
    cookies().set("refreshToken", data?.refreshToken);
  }
  // try {
  //   const { data } = await axios.post(
  //     `${envConfig.baseApi}/auth/signup`,
  //     userData
  //   );
  //   console.log(data);
  //   if (data.success) {
  //     cookies().set("accessToken", data?.accessToken);
  //     cookies().set("refreshToken", data?.refreshToken);
  //   }

  //   return data;
  // } catch (error: any) {
  //   throw new Error(error);
  // }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axios.post(
      `${envConfig.baseApi}/auth/login`,
      userData
    );
    if (data.success) {
      cookies().set("accessToken", data?.accessToken);
      cookies().set("refreshToken", data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }
  return decodedToken;
};

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
