"use client";
import { Skeleton } from "@/components/ui/skeleton";

const PostCardSkeleton = () => {
  return (
    <div className="bg-white common-shadow rounded-md my-4 p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div>
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px] mt-2" />
          </div>
        </div>
        <Skeleton className="h-6 w-6" />
      </div>
      <div className="mt-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
      </div>
      <Skeleton className="h-72 w-full rounded-md mt-4" />
      <div className="border-y border-gray-300 mt-4 pb-1 flex gap-x-4 items-center">
        <Skeleton className="h-9 w-[60px] rounded-lg" />
        <Skeleton className="h-9 w-[60px] rounded-lg" />
      </div>
      <div className="mt-5">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
