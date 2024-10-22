"use client";
import PremiumUserToolTip from "@/components/tooltips/PremiumUserToolTip";
import { Skeleton } from "@/components/ui/skeleton"; // Adjusted import for your Skeleton
import { useUser } from "@/context/userProvider";
import useGetPostByUserQuery from "@/hooks/post/useGetPostByUserQuery";
import useGetUserByIdQuery from "@/hooks/user/useGetUserByIdQuery";
import Image from "next/image";
import Link from "next/link";

const ProfileInfo = () => {
  const { user } = useUser();
  const { data: userData, isLoading: userLoading } = useGetUserByIdQuery(
    user?._id as string
  );
  const { data: posts, isLoading: postsLoading } = useGetPostByUserQuery(
    user?._id as string
  );

  // Combine loading states for user and posts
  const isLoading = userLoading || postsLoading;

  return (
    <div className="">
      {/* Cover Image */}
      <Image
        src={"/images/cover.jpg"}
        width={800}
        height={20}
        alt="user"
        className="rounded-t-md w-full h-16 object-center object-cover z-10 "
      />

      {/* Profile Picture */}
      <figure className="size-16 mx-auto -mt-6 rounded-sm flex justify-center items-center bg-white cursor-pointer z-20">
        {isLoading ? (
          <Skeleton className="h-16 w-16 rounded-full" /> // Skeleton for profile picture
        ) : (
          <Image
            src={userData?.profileImage || "/icons/avatar.png"}
            width={60}
            height={60}
            alt="avatar"
            className="rounded-md ring ring-white bg-blue-100"
          />
        )}
      </figure>

      {/* User Info */}
      <div className="text-center p-5 text-gray-700">
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-[150px] mx-auto mb-2" />{" "}
            {/* Name Skeleton */}
            <Skeleton className="h-5 w-[200px] mx-auto mb-4" />{" "}
            {/* Email Skeleton */}
            <Skeleton className="h-4 w-[250px] mx-auto mb-5" />{" "}
            {/* Quote Skeleton */}
          </>
        ) : (
          <>
            <Link
              href={"/"}
              className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors "
            >
              {userData?.name}{" "}
              {userData?.status === "Premium" && (
                <PremiumUserToolTip iconSize={14} />
              )}{" "}
            </Link>
            <p>{userData?.email}</p>
            <p className="mt-5">
              I&apos;d love to change the world, but they won’t give me the
              source code.
            </p>
          </>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-gray-300 border-b pb-4 border-gray-300 mt-5 text-center">
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-[50px] mx-auto mb-1" />{" "}
              {/* Posts Skeleton */}
              <Skeleton className="h-4 w-[50px] mx-auto mb-1" />{" "}
              {/* Followers Skeleton */}
              <Skeleton className="h-4 w-[50px] mx-auto mb-1" />{" "}
              {/* Following Skeleton */}
            </>
          ) : (
            <>
              <p>
                <span className="font-semibold text-gray-900">
                  {posts?.data?.length || 0}
                </span>{" "}
                <br /> Posts
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {userData?.followers?.length || 0}
                </span>{" "}
                <br /> Followers
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  {userData?.following?.length || 0}
                </span>{" "}
                <br /> Following
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
