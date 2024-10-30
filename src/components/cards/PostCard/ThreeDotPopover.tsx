import { DeletePostModal } from "@/components/modal/DeletePostModal";
import { UpdatePostModal } from "@/components/modal/UpdatePostModal";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@/context/userProvider";
import { IPost } from "@/type/post";
import { handleDownload } from "@/utils/handlePostDownload";
import {
  Bookmark,
  CircleOff,
  CircleX,
  Download,
  Ellipsis,
  Flag,
  Pencil,
  Trash2,
} from "lucide-react";

export function ThreeDotPopover({ post }: { post: IPost }) {
  const { user } = useUser();

  // Filter list items based on whether the user is the author of the post
  const listItems = [
    {
      id: 11,
      secure: false,
      title: "Save Post",
      icon: <Bookmark size={18} />,
    },
    {
      id: 1,
      secure: true,
      title: <UpdatePostModal post={post} />,
      icon: <Pencil size={18} />,
    },
    {
      id: 2,
      title: "Hide Post",
      icon: <CircleOff size={18} />,
    },
    {
      id: 5,
      secure: true,
      title: <DeletePostModal id={post._id as string} />,
      icon: <Trash2 size={18} />,
    },
    {
      id: 4,
      secure: false,
      title: `Block ${post?.author?.name}`,
      icon: <CircleX size={18} />,
    },
    {
      id: 5,
      secure: false,
      title: (
        <span onClick={() => handleDownload(post)} className="cursor-pointer">
          Download
        </span>
      ),
      icon: <Download size={18} />,
    },
  ].filter((listItem) => {
    // Show secure items only if the user is the post author
    if (listItem.secure) {
      return user?._id === post?.author?._id;
    }
    // Always show non-secure items
    return true;
  });

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
              className="flex items-center gap-x-2 text-gray-700 w-full cursor-pointer p-1"
            >
              <>
                {listItem.icon}
                <span className="hover:text-primary transition-colors text-sm">
                  {listItem.title}
                </span>
              </>
            </li>
          ))}
          <li className="border-t border-gray-300 flex items-start gap-x-2 text-gray-700 w-full cursor-pointer pt-4">
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
