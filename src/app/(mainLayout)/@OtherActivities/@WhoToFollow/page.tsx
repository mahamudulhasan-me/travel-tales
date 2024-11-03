"use client";
import { UserSkeleton } from "@/components/skeletor/UserSkeleton";
import PremiumUserToolTip from "@/components/tooltips/PremiumUserToolTip";
import { useUser } from "@/context/userProvider";
import useGetAllUsersQuery from "@/hooks/user/useGetAllUsersQuery";
import useHandleFollow from "@/hooks/user/useHandleFollow";
import useHandleUnfollow from "@/hooks/user/useHandleUnfollowUser";
import { IUser } from "@/type/user.type";
import { convertNameToUsername } from "@/utils/convertNameToUsername";
import { Plus, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhoToFollow = () => {
  const { user: currentUser } = useUser();
  const { data: users, isLoading } = useGetAllUsersQuery();
  const { mutate: handleFollow } = useHandleFollow();
  const { mutate: handleUnfollow } = useHandleUnfollow();

  const handleFollowUser = (user: IUser) => {
    handleFollow({
      userId: currentUser?._id as string,
      followerId: user._id as string,
    });
  };

  const handleUnfollowUser = (user: IUser) => {
    handleUnfollow({
      userId: currentUser?._id as string,
      followerId: user._id as string,
    });
  };

  return (
    <div className="bg-white rounded-md common-shadow p-5">
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
        Who to Follow
      </h2>
      <div className="mt-4 space-y-5">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <UserSkeleton key={index} />
            ))
          : users?.slice(0, 10)?.map((user: IUser) => {
              if (user?._id !== currentUser?._id) {
                return (
                  <div
                    key={user._id}
                    className="flex justify-between items-center"
                  >
                    <aside className="flex items-center gap-x-3">
                      <Image
                        src={user?.profileImage || "/icons/avatar.png"}
                        width={60}
                        height={60}
                        alt="avatar"
                        className="rounded-full  ring-primary ring-1 p-0.5 size-10"
                      />
                      <Link href={`/profile/${user?._id}`}>
                        <h1 className="font-medium flex items-center gap-x-1">
                          {user.name}{" "}
                          {user?.status === "Premium" && (
                            <PremiumUserToolTip iconSize={14} />
                          )}
                        </h1>
                        <p className="text-sm text-gray-500">
                          {convertNameToUsername(user?.name as string)}
                        </p>
                      </Link>
                    </aside>
                    {user?.followers!.includes(currentUser?._id as string) ? (
                      <button
                        onClick={() => handleUnfollowUser(user)}
                        className="size-10 rounded-full flex justify-center items-center bg-primary text-white transition-colors"
                      >
                        <UserCheck />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleFollowUser(user)}
                        className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <Plus />
                      </button>
                    )}
                  </div>
                );
              }
            })}
        <Link
          href={"/"}
          className="block text-primary mt-4 gap-x-1 text-sm hover:text-white hover:bg-primary w-full transition-colors bg-blue-100 p-1.5 rounded-md text-center font-semibold"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default WhoToFollow;
