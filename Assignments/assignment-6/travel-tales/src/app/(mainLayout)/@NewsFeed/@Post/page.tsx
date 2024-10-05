"use client";
import PostCard from "@/components/cards/PostCard";
import PostCardSkeleton from "@/components/skeletor/PostCardSkeleton";
import useGetPosts from "@/hooks/post/useGetPosts";
import { IPost } from "@/type/post";

const Post = () => {
  const { data: posts, isLoading } = useGetPosts();

  if (isLoading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <PostCardSkeleton key={index} />
    ));
  }

  return posts?.data?.data?.map((post: IPost) => (
    <PostCard key={post._id} post={post} />
  ));
};

export default Post;
