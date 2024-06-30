import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTasksQuery } = apiSlice;

export default apiSlice;
