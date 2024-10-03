"use client";
import UserProvider from "@/context/userProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "sonner";
const queryClient = new QueryClient();
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster richColors />
        {children}
      </UserProvider>
    </QueryClientProvider>
  );
};

export default Providers;
