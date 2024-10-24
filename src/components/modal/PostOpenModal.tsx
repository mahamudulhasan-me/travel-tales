"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PostCard from "../cards/PostCard";

const PostOpenModal = () => {
  const post = {
    _id: "6710a1e973a4e8c10144758c",
    author: "670f8308c51b664c57bba2d4",
    content:
      "<p><strong style='background-color: rgb(255, 255, 255); color: rgb(55, 55, 55);'>Sample content for the post</strong></p>",
    images: ["https://i.ibb.co/drFrjsd/378.jpg"],
    isPremium: false,
    voteCount: 2,
    votes: [
      {
        userId: "670f8308c51b664c57bba2d4",
        voteType: "upvote",
        postId: "6710a1e973a4e8c10144758c",
        _id: "6710a39b73a4e8c1014475cd",
      },
      {
        userId: "67109f2a73a4e8c101447575",
        voteType: "upvote",
        postId: "6710a1e973a4e8c10144758c",
        _id: "6710a56573a4e8c1014475e2",
      },
    ],
    createdAt: "2024-10-17T05:34:33.204+00:00",
    updatedAt: "2024-10-17T05:49:25.606+00:00",
    category: "General",
    __v: 0,
  };

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
