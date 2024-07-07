import apiSlice from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&page=1&_limit=${5}`,
        method: "GET",
      }),
    }),
    getConversation: builder.query({
      query: ({ userEmail, partnerEmail }) => ({
        url: `/conversations?participants_like=${userEmail}-${partnerEmail}&&participants_like=${partnerEmail}-${userEmail}`,
        method: "GET",
      }),
    }),

    createConversation: builder.mutation({
      query: (data) => ({
        url: "/conversations",
        method: "POST",
        body: data,
      }),
    }),

    updateConversation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useCreateConversationMutation,
  useUpdateConversationMutation,
  useGetConversationQuery,
} = conversationsApi;
