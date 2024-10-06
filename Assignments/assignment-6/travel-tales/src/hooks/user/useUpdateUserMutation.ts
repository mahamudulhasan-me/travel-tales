/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateUser } from "@/services/userService";
import { IUser } from "@/type/user.type";
import { useMutation } from "@tanstack/react-query";

const useUpdateUserMutation = (userId: string) => {
  return useMutation<any, Error, IUser, unknown>({
    mutationKey: ["UPDATE_USER"],
    mutationFn: async (userData) => await updateUser(userData, userId),
  });
};

export default useUpdateUserMutation;
