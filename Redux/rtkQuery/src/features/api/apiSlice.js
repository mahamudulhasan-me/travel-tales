import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      keepUnusedDataFor: 5,
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const splitTitle = title.split(" ");
        const likes =
          splitTitle.map((tag) => `title_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit=5`;
        const finalQuery = `/videos?${likes}`;
        return finalQuery;
      },
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } =
  apiSlice;
