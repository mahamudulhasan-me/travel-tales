"use client";
import PostCard from "@/components/cards/PostCard";
import useGetPosts from "@/hooks/post/useGetPosts";
import { IPost } from "@/type/post";

const Post = () => {
  const { data: posts } = useGetPosts();
  console.log(posts?.data?.data?.length);
  if (posts?.data?.data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-2xl font-semibold text-gray-600">No Post Found</h1>
      </div>
    );
  }
  console.log(posts?.data?.data);
  return posts?.data?.data?.map((post: IPost) => (
    <PostCard key={post._id} post={post} />
  ));
};

export default Post;
