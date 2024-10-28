/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  handleForgetPassword,
  loginUser,
  signUpUser,
} from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

export const useUserSignIn = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["SIGNIN"],
    mutationFn: async (userData) => await loginUser(userData),
  });
};

export const useUserSignUp = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["SIGNUP"],
    mutationFn: async (userData) => await signUpUser(userData),
  });
};

export const useForgetPassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["FORGET_PASSWORD"],
    mutationFn: async (userData) => await handleForgetPassword(userData),
  });
};
