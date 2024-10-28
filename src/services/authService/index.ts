/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/lib/AxiosInstance";
import Cookies from "js-cookie"; // Client-side cookie handling
import { jwtDecode } from "jwt-decode"; // To decode JWT tokens
import { FieldValues } from "react-hook-form";

// Sign up user (Client Component version)
export const signUpUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/auth/signup`, userData);

    if (data.success) {
      // Set cookies on the client using js-cookie
      Cookies.set("accessToken", data?.accessToken);
      Cookies.set("refreshToken", data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    if (error.response) {
      // Handle server error
      const errorMessage = error.response.data.message || "Sign up failed";
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error("No response from server. Please try again.");
    } else {
      throw new Error(`Sign up error: ${error.message}`);
    }
  }
};

// Login user (Client Component version)
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/auth/login`, userData);

    if (data.success) {
      // Set cookies on the client using js-cookie
      Cookies.set("accessToken", data?.accessToken);
      Cookies.set("refreshToken", data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage = error.response.data.message || "Login failed";
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error("No response from server. Please try again.");
    } else {
      throw new Error(`Login error: ${error.message}`);
    }
  }
};

// Logout user (Client Component version)
export const logout = () => {
  // Remove cookies using js-cookie
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

// Get the current user (Client Component version)
export const getCurrentUser = async () => {
  const accessToken = Cookies.get("accessToken");

  if (accessToken) {
    try {
      // Decode JWT token
      const decodedToken = jwtDecode(accessToken);

      return decodedToken;
    } catch (error) {
      throw new Error("Failed to decode token");
    }
  }

  return null;
};

export const handleForgetPassword = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.post(
      `/auth/forget-password`,
      userData
    );
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

// Refresh token functionality (if needed)
// export const getNewAccessToken = async () => {
//   try {
//     const refreshToken = Cookies.get("refreshToken");

//     if (!refreshToken) {
//       throw new Error("No refresh token available");
//     }

//     const { data } = await axios.post(`${envConfig.baseApi}/auth/refresh-token`, {}, {
//       withCredentials: true,
//       headers: {
//         cookie: `refreshToken=${refreshToken}`,
//       },
//     });

//     // Set new tokens in cookies
//     Cookies.set("accessToken", data?.accessToken);
//     Cookies.set("refreshToken", data?.refreshToken);

//     return data;
//   } catch (error: any) {
//     if (error.response) {
//       const errorMessage = error.response.data.message || "Failed to refresh token";
//       throw new Error(errorMessage);
//     } else if (error.request) {
//       throw new Error("No response from server. Please try again.");
//     } else {
//       throw new Error(`Refresh token error: ${error.message}`);
//     }
//   }
// };
