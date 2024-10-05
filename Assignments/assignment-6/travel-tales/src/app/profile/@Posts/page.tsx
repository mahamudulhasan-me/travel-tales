"use client";
import PostCard from "@/components/cards/PostCard";
import useGetPostByUserQuery from "@/hooks/post/useGetPostByUserQuery";
import { IPost } from "@/type/post";

const Posts = () => {
  const { data: posts, isLoading } = useGetPostByUserQuery();
  if (isLoading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <PostCardSkeleton key={index} />
    ));
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
