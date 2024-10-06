"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@/context/userProvider";
import { logout } from "@/services/authService";
import { Bookmark, CircleOff, CircleX, Power, UserX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProfileUtilsPopover() {
  const { setUser, user } = useUser();
  const [open, setOpen] = useState(false);
  const navigate = useRouter();

  const listItems = [
    {
      id: 1,
      title: "Save Post",
      icon: <Bookmark size={18} />,
    },
    {
      id: 2,
      title: "Hide Post",
      icon: <CircleOff size={18} />,
    },
    {
      id: 3, // Changed from id: 1 to id: 3 for uniqueness
      title: "Unfollow Mahamudul",
      icon: <UserX size={18} />,
    },
    {
      id: 4, // Changed from id: 1 to id: 4 for uniqueness
      title: "Block",
      icon: <CircleX size={18} />,
    },
  ];
  const handleLogout = () => {
    logout();
    setUser(null);
    navigate.push("/explore");
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Image
          src={user?.profilePicture || "/icons/avatar.png"}
          width={40}
          height={40}
          alt={user?.name || "avatar"}
          className="rounded-sm cursor-pointer" // Added cursor-pointer for better UX
          onClick={() => setOpen((prev) => !prev)} // Toggle the open state
        />
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="start">
        <ul className="space-y-2">
          <li>
            <div className="flex items-center gap-x-2">
              <Image
                src={user?.profilePicture || "/icons/avatar.png"}
                width={40}
                height={40}
                alt={user?.name || "avatar"}
                className="rounded-full bg-slate-300 size-12 p-1"
              />
              <aside>
                <p className="font-medium ">{user?.name}</p>
                <p className="text-gray-500 text-xs">Blogger</p>
              </aside>
            </div>
            <Link href="/profile" onClick={() => setOpen(false)}>
              <button className="bg-blue-100 text-primary px-4 py-1 rounded-sm w-full mt-2 hover:bg-primary hover:text-white transition-colors outline-none">
                Profile
              </button>
            </Link>
          </li>
          {listItems.map((listItem) => (
            <li
              key={listItem.id}
              className="flex items-start gap-x-2 text-gray-700 w-full cursor-pointer p-1"
              onClick={() => setOpen(false)} // Close the popover on item click
            >
              {listItem.icon}
              <span className="hover:text-primary transition-colors text-sm">
                {listItem.title}
              </span>
            </li>
          ))}
          <li
            className="border-t border-gray-300 flex items-start gap-x-2 text-gray-700 w-full cursor-pointer pt-4"
            onClick={() => setOpen(false)}
          >
            <Power size={18} />
            <button
              onClick={handleLogout}
              className="hover:text-primary transition-colors text-sm"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
