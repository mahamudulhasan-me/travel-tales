"use client";
import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import { useUser } from "@/context/userProvider";
import { Bell, MessageSquareText, Settings } from "lucide-react";
import { ProfileUtilsPopover } from "./ProfileUtilsPopover";

const ProtectedNavItems = () => {
  const { user } = useUser();
  return user ? (
    <>
      <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer ">
        <MessageSquareText size={18} strokeWidth={1} />
      </li>
      <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer ">
        <Settings size={18} strokeWidth={1} />
      </li>
      <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer relative">
        <Bell strokeWidth={1} size={18} />
        <span className="absolute top-0 right-0 inline-block w-2 h-2 transition-all duration-500 ease-in-out bg-red-700 rounded"></span>
      </li>
      <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer">
        <ProfileUtilsPopover />
      </li>
    </>
  ) : (
    <li>
      <SignInFormModal />
    </li>
  );
};

export default ProtectedNavItems;
