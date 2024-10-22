/* eslint-disable @typescript-eslint/ban-ts-comment */
import PremiumUserToolTip from "@/components/tooltips/PremiumUserToolTip";
import { useUser } from "@/context/userProvider";
import useGetCommentQuery from "@/hooks/comment/useGetPostQuery";
import useVoteMutation from "@/hooks/post/useVoteMutation";
import { IComment } from "@/type/comment";
import { IPost, IVoteInfo } from "@/type/post";
import {
  ArrowBigDown,
  ArrowBigUp,
  Crown,
  Dot,
  Loader,
  MessageSquare,
  Reply,
} from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CommentThreeDotPopover } from "../CommentCard/ThreeDotPopover";
import CommentForm from "./CommentForm";
import { ThreeDotPopover } from "./ThreeDotPopover";

const PostCard = ({ post }: { post: IPost }) => {
  const { user } = useUser();
  const [voteCount, setVoteCount] = useState(post?.voteCount || 0);
  const [myVote, setMyVote] = useState<IVoteInfo | undefined>(undefined);
  const [updateCommentData, setUpdateCommentData] = useState({
    updateMode: false,
    comment: "",
    readyForUpdate: false,
  });
  const {
    _id,
    content,
    images,
    author,
    createdAt,
    votes,
    category,
    isPremium,
  } = post;
  console.log(author);
  const { mutate: vote, data, isPending } = useVoteMutation(_id as string);
  const { data: comments, isLoading: commentsLoading } = useGetCommentQuery(
    _id as string
  );

  console.log({ updateCommentData });

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
            //@ts-ignore
            src={author?.profileImage || "/icons/avatar.png"}
            width={60}
            height={60}
            alt="avatar"
            className="rounded-full ring-1 ring-primary p-0.5 size-12"
          />
          <div>
            <aside className="flex items-center gap-x-1">
              {/* @ts-ignore */}
              <h5 className="font-semibold flex items-center gap-1">
                {author?.name}{" "}
                {author?.status === "Premium" && (
                  <PremiumUserToolTip iconSize={14} />
                )}
              </h5>
              <Dot color="gray" />
              <p className="text-sm text-gray-700">
                {moment(createdAt).startOf("minute").fromNow()}
              </p>
            </aside>
            <div className="flex items-center gap-x-0.5">
              {" "}
              {category ? (
                <p className="text-gray-700 text-xs">{category}</p>
              ) : (
                <p className="text-gray-700 text-xs">
                  Adventurer & Travel Enthusiast
                </p>
              )}
              {isPremium && (
                <>
                  <Dot color="gray" />
                  <p className="text-primary text-xs font-semibold flex items-center">
                    {"Premium"} <Crown size={14} />
                  </p>
                </>
              )}
            </div>
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
              {commentsLoading ? (
                <Loader className="animate-spin" size={14} />
              ) : (
                comments?.data?.length || 0
              )}
            </span>
          </div>
        </div>
      </article>
      <div className="mt-5">
        <CommentForm
          postId={_id}
          userId={user?._id}
          updateCommentData={updateCommentData}
          setUpdateCommentData={setUpdateCommentData}
        />
        {comments?.data?.length > 0 ? (
          comments?.data?.map((comment: IComment) => {
            if (comment.postId === _id) {
              return (
                <>
                  <div key={comment._id} className="flex mt-3 gap-x-3">
                    <Image
                      src={comment?.author?.profileImage || "/icons/avatar.png"}
                      width={60}
                      height={60}
                      alt="post"
                      className="size-9 rounded-full"
                    />
                    <div className="pl-2 pb-2 bg-gray-100 w-full rounded-md ">
                      <h1 className="flex items-center justify-between font-medium">
                        <Link
                          href={"/"}
                          className="hover:text-primary transition-colors"
                        >
                          {/*@ts-ignore */}
                          {comment?.author?.name}
                        </Link>
                        <p className="flex items-center gap-x-1">
                          <span className="text-xs text-gray-500 mr-1">
                            {moment(comment?.createdAt)
                              .startOf("minute")
                              .fromNow()}
                          </span>
                          {user?._id === comment?.author?._id && (
                            <CommentThreeDotPopover
                              setUpdateCommentData={setUpdateCommentData}
                              content={comment?.content}
                              commentId={comment?._id as string}
                            />
                          )}
                        </p>
                      </h1>
                      <p className="text-gray-700 ">{comment?.content}</p>
                    </div>
                  </div>
                  <div className="ml-12 pb-1 flex gap-x-4 items-center mt-0.5">
                    <div
                      className={`flex items-center gap-x-2  bg-gray-200 rounded-xl w-fit h-6`}
                    >
                      <button
                        className={`size-6 flex items-center justify-center rounded-full hover:text-primary transition-colors bg-gray-300"
                        `}
                      >
                        <ArrowBigUp size={16} />
                      </button>
                      <span className="font-semibold text-sm">{0}</span>
                      <button
                        className={`size-6 flex items-center justify-center rounded-full hover:text-primary transition-colors bg-gray-300`}
                      >
                        <ArrowBigDown size={16} />
                      </button>
                    </div>
                    <button className="flex items-center gap-x-1  bg-gray-200 rounded-xl w-fit px-2 text-sm h-6">
                      <Reply size={14} />
                      <span className="text-xs font-semibold">Reply</span>
                    </button>
                  </div>
                </>
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
