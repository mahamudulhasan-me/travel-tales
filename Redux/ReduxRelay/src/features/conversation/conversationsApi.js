import apiSlice from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&page=1&_limit=${5}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetConversationsQuery } = conversationsApi;
