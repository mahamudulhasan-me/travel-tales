import apiSlice from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => ({
        url: `/messages?conversationId=${id}&_sort=timestamp&_order=desc&&page=1&_limit=5`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMessagesQuery } = messagesApi;
