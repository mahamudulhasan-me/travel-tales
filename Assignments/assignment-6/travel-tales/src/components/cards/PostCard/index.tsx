import { useUser } from "@/context/userProvider";
import useGetCommentQuery from "@/hooks/comment/useGetPostQuery";
import useVoteMutation from "@/hooks/post/useVoteMutation";
import { IComment } from "@/type/comment";
import { IPost, IVoteInfo } from "@/type/post";
import { ArrowBigDown, ArrowBigUp, Dot, MessageSquare } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { ThreeDotPopover } from "./ThreeDotPopover";

const PostCard = ({ post }: { post: IPost }) => {
  const { user } = useUser();
  const [voteCount, setVoteCount] = useState(post?.voteCount || 0);
  const [myVote, setMyVote] = useState<IVoteInfo | undefined>(undefined);
  const { _id, content, images, author, createdAt, votes } = post;

  const { mutate: vote, data, isPending } = useVoteMutation(_id as string);
  const { data: comments = [], isLoading: commentsLoading } =
    useGetCommentQuery(_id as string);

  useEffect(() => {
    const userVote = votes?.find((vote) => vote.userId === user?._id);
    setMyVote(userVote);
  }, [votes, user]);

  const handleVote = (voteType: "upvote" | "downvote") => {
    const voteInfo: IVoteInfo = {
      postId: _id,
      userId: user?._id,
      voteType,
    };
    vote(voteInfo);
  };

  useEffect(() => {
    if (data) {
      setVoteCount(data?.data?.voteCount);
      const updatedVote = data?.data?.votes?.find(
        (vote: IVoteInfo) => vote.userId === user?._id
      );
      setMyVote(updatedVote);
    }
  }, [data, user]);

  const isUpvoted = myVote?.voteType === "upvote";
  const isDownvoted = myVote?.voteType === "downvote";

  return (
    <div className="bg-white common-shadow rounded-md my-4 p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Image
            src={author?.profilePhoto || "/icons/avatar.png"}
            width={60}
            height={60}
            alt="avatar"
            className="rounded-full ring ring-primary p-0.5 size-12"
          />
          <div>
            <h5 className="flex items-center gap-x-1">
              <span className="font-semibold">{author?.name}</span>{" "}
              <Dot color="gray" />
              <p className="text-sm text-gray-700">
                {moment(createdAt).startOf("minute").fromNow()}
              </p>
            </h5>
            <p className="text-gray-700 text-xs">Web Developer at Webestica</p>
          </div>
        </div>

        <ThreeDotPopover />
      </div>
      <article>
        <div
          className="text-sm text-gray-700 mt-3"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {images?.length > 0 && (
          <Image
            src={images[0]}
            width={600}
            height={300}
            alt="post"
            className="rounded-md mt-3 object-cover object-center w-full h-72"
          />
        )}
        <div className="border-y border-gray-300 mt-4 pb-1 flex gap-x-4 items-center">
          <div
            className={`flex items-center gap-x-2 mt-1 bg-gray-200 rounded-xl w-fit h-9 ${
              (isUpvoted && "bg-blue-300") || (isDownvoted && "bg-red-300")
            }`}
          >
            <button
              onClick={() => handleVote("upvote")}
              disabled={isPending || isUpvoted}
              className={`size-9 flex items-center justify-center rounded-full transition-colors ${
                isUpvoted
                  ? "bg-blue-600 text-white hover:text-white"
                  : "bg-gray-300 hover:text-primary"
              }`}
            >
              <ArrowBigUp />
            </button>
            <span className="font-semibold">{voteCount}</span>
            <button
              onClick={() => handleVote("downvote")}
              disabled={isPending || isDownvoted}
              className={`size-9 flex items-center justify-center rounded-full hover:text-primary transition-colors ${
                isDownvoted ? "bg-rose-600 text-white" : "bg-gray-300 "
              }`}
            >
              <ArrowBigDown />
            </button>
          </div>
          <div className="flex items-center gap-x-2 mt-1 bg-gray-200 rounded-xl w-fit px-2 text-sm h-9">
            <MessageSquare size={20} />
            <span className="font-semibold">
              {commentsLoading ? "Loading..." : comments.length || 0}
            </span>
          </div>
        </div>
      </article>
      <div className="mt-5">
        <CommentForm postId={_id} userId={user?._id} />
        {comments?.data?.length > 0 ? (
          comments?.data?.map((comment: IComment) => {
            if (comment.postId === _id) {
              return (
                <div key={comment._id} className="flex mt-3 gap-x-3">
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
                        {/*@ts-ignore */}
                        {comment?.author?.name}
                      </Link>
                      <span className="text-xs text-gray-500">
                        {moment(comment?.createdAt).startOf("minute").fromNow()}
                      </span>
                    </h1>
                    <p className="text-gray-700 mt-1">{comment?.content}</p>
                  </div>
                </div>
              );
            }
            return null; // Return null for comments that do not match
          })
        ) : (
          <div className="mt-3 text-gray-500">No comments yet.</div>
        )}
      </div>

      {/* <CommentCard comments={comments?.data} /> */}
      {/* {comments?.data?.length === 0 && !commentsLoading && (
        <div className="mt-3 text-gray-500">No comments yet.</div>
      )} */}
    </div>
  );
};

export default PostCard;
