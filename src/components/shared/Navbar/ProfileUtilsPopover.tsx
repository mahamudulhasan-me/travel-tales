"use client";
import PremiumUserToolTip from "@/components/tooltips/PremiumUserToolTip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@/context/userProvider";
import useGetUserByIdQuery from "@/hooks/user/useGetUserByIdQuery";
import { logout } from "@/services/authService";
import {
  BookText,
  HeartHandshake,
  Moon,
  Power,
  Settings,
  Sun,
  SunMoon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProfileUtilsPopover() {
  const { user, setUser } = useUser();
  const { data: userData } = useGetUserByIdQuery(user?._id as string);
  const [open, setOpen] = useState(false);
  const navigate = useRouter();

  const listItems = [
    {
      id: 1,
      title: "Settings & Privacy",
      icon: <Settings size={18} />,
    },
    {
      id: 2,
      title: "Support",
      icon: <HeartHandshake size={18} />,
    },
    {
      id: 3, // Changed from id: 1 to id: 3 for uniqueness
      title: "Documentations",
      icon: <BookText size={18} />,
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
          src={userData?.profilePicture || "/icons/avatar.png"}
          width={40}
          height={40}
          alt={userData?.name || "avatar"}
          className="rounded-sm cursor-pointer" // Added cursor-pointer for better UX
          onClick={() => setOpen((prev) => !prev)} // Toggle the open state
        />
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="start">
        <ul className="space-y-2">
          <li>
            <div className="flex items-center gap-x-2">
              <Image
                src={userData?.profilePicture || "/icons/avatar.png"}
                width={40}
                height={40}
                alt={userData?.name || "avatar"}
                className="rounded-full bg-slate-300 size-12 p-1"
              />
              <aside>
                <p className="font-medium flex items-center gap-1">
                  {userData?.name}{" "}
                  {userData?.status === "Premium" && (
                    <PremiumUserToolTip iconSize={14} />
                  )}{" "}
                </p>
                <p className="text-gray-500 text-xs">Blogger</p>
              </aside>
            </div>
            <Link
              href={`/profile/${userData?._id}`}
              onClick={() => setOpen(false)}
            >
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
            className="border-y border-gray-300 flex items-start gap-x-2 text-gray-700 w-full cursor-pointer py-3"
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
          <li className="flex items-center justify-between gap-x-2">
            Mode:
            <button className="bg-primary text-white px-2 py-1 rounded-sm">
              <Sun size={18} />
            </button>
            <button className="hover:bg-primary hover:text-white px-2 py-1 rounded-sm transition-colors">
              <Moon size={18} />
            </button>
            <button className="hover:bg-primary hover:text-white px-2 py-1 rounded-sm transition-colors">
              <SunMoon size={18} />
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
