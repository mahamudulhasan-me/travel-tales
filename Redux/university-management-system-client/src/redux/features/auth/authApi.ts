import { jwtDecode } from "jwt-decode";
import baseApi from "../../api/baseApi";
import { userLoggedIn } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const decodedUserInfo = jwtDecode(data?.data?.accessToken);

          dispatch(
            userLoggedIn({
              user: decodedUserInfo,
              token: data?.data?.accessToken,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
