"use client";
import PostCard from "@/components/cards/PostCard";
import PostCardSkeleton from "@/components/skeletor/PostCardSkeleton";
import useGetPosts from "@/hooks/post/useGetPosts";
import { IPost } from "@/type/post";
import { Smile } from "lucide-react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Post = () => {
  const [limit, setLimit] = useState(5); // Start with a limit of 5 posts
  const { data: postsData, isLoading, isFetching } = useGetPosts(limit); // Pass limit to the hook

  // Infinite scroll load more function
  const loadMorePosts = () => {
    setLimit((prevLimit) => prevLimit + 3); // Increase the limit by 3
  };

  // Loading state for initial load
  if (isLoading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <PostCardSkeleton key={index} />
    ));
  }

  return (
    <InfiniteScroll
      dataLength={postsData?.data?.posts?.length || 0} // Current number of loaded posts
      next={loadMorePosts} // Function to load more posts
      hasMore={postsData?.data?.posts?.length < postsData?.data?.totalPosts} // Check if more posts are available
      loader={isFetching && <PostCardSkeleton />} // Show skeleton loader while fetching
      endMessage={
        <div className="flex items-center justify-center mt-2">
          <p className="text-gray-700 font-semibold my-2 flex items-center gap-x-1">
            You&apos;ve caught all the posts! <Smile color="#f59e0b" />
          </p>
        </div>
      }
    >
      {postsData?.data?.posts?.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default Post;
