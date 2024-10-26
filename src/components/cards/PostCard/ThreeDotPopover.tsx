import { UpdatePostModal } from "@/components/modal/UpdatePostModal";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IPost } from "@/type/post";
import {
  Bookmark,
  CircleOff,
  CircleX,
  Ellipsis,
  Flag,
  Pencil,
} from "lucide-react";

export function ThreeDotPopover({ post }: IPost) {
  const listItems = [
    {
      id: 11,
      title: "Save Post",
      icon: <Bookmark size={18} />,
    },
    {
      id: 1,
      title: <UpdatePostModal post={post} />,
      icon: <Pencil size={18} />,
    },
    {
      id: 2,
      title: "Hide Post",
      icon: <CircleOff size={18} />,
    },
    {
      id: 4,
      title: "Block",
      icon: <CircleX size={18} />,
    },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"}>
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="start">
        <ul className="space-y-2">
          {listItems.map((listItem) => (
            <li
              key={listItem.id}
              className="flex items-center gap-x-2 text-gray-700 w-full cursor-pointer   p-1"
            >
              <>
                {listItem.icon}
                <span className="hover:text-primary transition-colors text-sm">
                  {listItem.title}
                </span>
              </>
            </li>
          ))}
          <li className="border-t border-gray-300 flex items-start gap-x-2 text-gray-700 w-full cursor-pointer   pt-4">
            <>
              <Flag size={18} />
              <span className="hover:text-primary transition-colors text-sm">
                Report Post
              </span>
            </>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
