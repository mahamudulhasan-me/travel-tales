/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useDeleteCommentMutation from "@/hooks/comment/useDeleteCommentMutaion";
import { Ellipsis, Flag, Pencil, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export function CommentThreeDotPopover({
  setUpdateCommentData,
  content,
  commentId,
}: {
  setUpdateCommentData: any;
  content: string;
  commentId: string;
}) {
  const { mutate: deleteComment, isSuccess } =
    useDeleteCommentMutation(commentId);
  const handleReadyForUpdate = () => {
    setUpdateCommentData({ updateMode: true, comment: content, commentId });
  };

  const handleDelete = () => {
    deleteComment();
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Comment deleted successfully");
    }
  }, [isSuccess]);

  const listItems = [
    {
      id: 1,
      title: <span onClick={handleReadyForUpdate}>Update Comment</span>,
      icon: <Pencil size={18} onClick={handleReadyForUpdate} />,
    },
    {
      id: 2,
      title: <span onClick={handleDelete}>Delete</span>,
      icon: <Trash2 size={18} onClick={handleDelete} />,
    },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"}>
          <Ellipsis size={18} className="text-gray-700" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="start">
        <ul className="space-y-2">
          {listItems.map((listItem) => (
            <li
              key={listItem.id}
              className="flex items-start gap-x-2 text-gray-700 w-full cursor-pointer   p-1"
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
