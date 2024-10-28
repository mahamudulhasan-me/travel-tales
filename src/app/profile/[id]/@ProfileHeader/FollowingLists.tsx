import PremiumUserToolTip from "@/components/tooltips/PremiumUserToolTip";
import { useUser } from "@/context/userProvider";
import useGetUserByIdQuery from "@/hooks/user/useGetUserByIdQuery";
import useHandleFollow from "@/hooks/user/useHandleFollow";
import useHandleUnfollow from "@/hooks/user/useHandleUnfollowUser";
import { IUser } from "@/type/user.type";
import Image from "next/image";
import Link from "next/link";
const FollowingLists = ({ id }: { id: string }) => {
  const { user: currentUser } = useUser();
  const { data: userInfo, isLoading } = useGetUserByIdQuery(id as string);
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
      <div className="grid grid-cols-2 gap-5">
        {userInfo?.following?.length > 0 ? (
          userInfo?.following?.map((user: IUser) => (
            <div key={user._id} className="flex justify-between items-center">
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
                </Link>
              </aside>
              {/* {currentUser?._id === user._id ? (
                <Button variant={"outline"}>Unfollow</Button>
              ) : (
                <Button variant={"outline"}>Follow</Button>
              )} */}
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center w-full common-shadow text-red-600 bg-white rounded-md font-semibold p-2 mt-4">
            No Following Yet...
          </p>
        )}
      </div>
    </div>
  );
};

export default FollowingLists;
