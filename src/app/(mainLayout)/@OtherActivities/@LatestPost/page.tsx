"use client";
import { InfiniteSlider } from "@/components/core/InfiniteSlider";
import { useUser } from "@/context/userProvider";
import useGetPosts from "@/hooks/post/useGetPosts";
import { IPost } from "@/type/post";
import { Ellipsis } from "lucide-react";
import moment from "moment";
import Link from "next/link";

const LatestPost = () => {
  const { user } = useUser();
  const { data: posts, isLoading } = useGetPosts(
    10,
    "default",
    "default",
    user?._id as string
  );

  return (
    <div className="bg-white rounded-md common-shadow p-5">
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
        Latest Posts
      </h2>
      <div className="mt-4 ">
        <InfiniteSlider
          direction="vertical"
          className="space-y-3 h-[50vh] overflow-hidden"
        >
          {posts?.data?.posts?.map((post: IPost) => (
            <div key={post._id}>
              <article
                className="font-semibold text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content.slice(0, 180) }}
              />

              <span className="text-gray-500 text-sm">
                {moment(post?.createdAt).startOf("minute").fromNow()}
              </span>
            </div>
          ))}
        </InfiniteSlider>
        <Link
          href={"/"}
          className="flex text-gray-700 mt-4 gap-x-1 text-sm hover:text-primary transition-colors"
        >
          <Ellipsis /> View all latest posts
        </Link>
      </div>
    </div>
  );
};

export default LatestPost;
