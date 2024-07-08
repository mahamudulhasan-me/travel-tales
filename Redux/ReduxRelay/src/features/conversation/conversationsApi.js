import apiSlice from "../api/apiSlice";
import { messagesApi } from "../message/messagesApi";

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
      query: ({ sender, data }) => ({
        url: "/conversations",
        method: "POST",
        body: data,
      }),
    }),

    updateConversation: builder.mutation({
      query: ({ id, sender, data }) => ({
        url: `/conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        const { data: conversation } = await queryFulfilled;
        if (conversation?.id) {
          const users = args.data.users;
          const sender = users.find((user) => user.email === args.sender);
          const receiver = users.find((user) => user.email !== args.sender);

          dispatch(
            messagesApi.endpoints.addMessage.initiate({
              conversationId: conversation.id,
              sender,
              receiver,
              message: args.data.message,
              timestamp: args.data.timestamp,
            })
          );
        }
      },
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useCreateConversationMutation,
  useUpdateConversationMutation,
  useGetConversationQuery,
} = conversationsApi;
