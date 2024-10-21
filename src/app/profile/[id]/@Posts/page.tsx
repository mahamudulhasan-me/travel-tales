"use client";
import PostCard from "@/components/cards/PostCard";
import PostCardSkeleton from "@/components/skeletor/PostCardSkeleton";
import useGetPostByUserQuery from "@/hooks/post/useGetPostByUserQuery";
import { IPost } from "@/type/post";
import { useParams } from "next/navigation";

const Posts = () => {
  const { id } = useParams();
  const { data: posts, isLoading } = useGetPostByUserQuery(id as string);
  if (isLoading) {
    return Array.from({ length: 2 }).map((_, index) => (
      <PostCardSkeleton key={index} />
    ));
  }
  if (!posts) {
    return (
      <div className="text-center w-full common-shadow text-red-600 bg-white rounded-md font-semibold p-2 mt-4">
        No Posts Yet...
      </div>
    );
  }
  return (
    <div>
      {posts?.data?.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
