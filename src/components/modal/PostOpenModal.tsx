"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PostCard from "../cards/PostCard";

const PostOpenModal = ({ post }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-primary font-semibold w-24">
          View Details
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[40rem] max-h-screen overflow-auto custom-scrollbar">
        <PostCard post={post} />
      </DialogContent>
    </Dialog>
  );
};

export default PostOpenModal;
