/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IComment } from "@/type/comment";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CommentCard = ({ comments }: { comments: any }) => {
  return (
    <div className="mt-5">
      <form className="flex items-center gap-x-3 justify-between">
        <Image
          src="/icons/avatar.png"
          width={56}
          height={56}
          alt="post"
          className="rounded-full size-10"
        />
        <input
          type="text"
          placeholder="Write a comment..."
          className="input-style bg-[#eff2f6] focus:bg-white transition-colors"
        />
        <button type="submit">
          <Send size={28} />
        </button>
      </form>
      {comments && comments.length > 0 ? (
        comments.map((comment: IComment) => (
          <div key={comment._id} className="flex mt-5 gap-x-3">
            <Image
              src="/icons/avatar.png"
              width={60}
              height={60}
              alt="post"
              className="size-9 rounded-full"
            />
            <div className="p-3 bg-gray-100 w-full rounded-md">
              <h1 className="flex items-center justify-between font-medium">
                <Link
                  href={"/"}
                  className="hover:text-primary transition-colors"
                >
                  {/* @ts-ignore */}
                  {comment?.author?.name}
                </Link>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </h1>
              <p className="text-gray-700 mt-1">{comment?.content}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500">No comments yet.</div>
      )}
    </div>
  );
};

export default CommentCard;
