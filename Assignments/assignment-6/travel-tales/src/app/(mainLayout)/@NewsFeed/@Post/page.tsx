"use client";
import PostCard from "@/components/cards/PostCard";
import useGetPosts from "@/hooks/post/useGetPosts";
import { IPost } from "@/type/post";

const Post = () => {
  const { data: posts } = useGetPosts();
  console.log(posts?.data?.data);
  return posts?.data?.data?.map((post: IPost) => (
    <PostCard key={post._id} post={post} />
  ));
};

export default Post;
