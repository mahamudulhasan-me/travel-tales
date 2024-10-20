"use client";
import envConfig from "@/config/envConfig";
import axios from "axios";

// Create a client-side axios instance
const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // For client-side, fetch accessToken from document.cookie or localStorage
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken"))
      ?.split("=")[1];

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error) {
//     const config = error.config;

//     if (error?.response?.status === 401 && !config?.sent) {
//       config.sent = true;
//       const res = await getNewAccessToken();
//       const accessToken = res.data.accessToken;

//       config.headers["Authorization"] = accessToken;
//       cookies().set("accessToken", accessToken);

//       return axiosInstance(config);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default axiosInstance;
