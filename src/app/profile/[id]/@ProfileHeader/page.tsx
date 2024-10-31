"use client";
import ProfileEditModal from "@/components/modal/ProfileEditModal";
import ProfileNavbar from "@/components/shared/Navbar/ProfileNavbar";
import PremiumUserToolTip from "@/components/tooltips/PremiumUserToolTip";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/Loader";
import { useUser } from "@/context/userProvider";
import useMakePremiumMutation from "@/hooks/payment/useMakePremiumMutation";
import useGetUserByIdQuery from "@/hooks/user/useGetUserByIdQuery";
import {
  BriefcaseBusiness,
  CalendarPlus,
  Crown,
  Ellipsis,
  MapPinCheckInside,
} from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import FollowerLists from "./FollowerList";
import FollowingLists from "./FollowingLists";

const ProfileHeader = () => {
  const { id } = useParams();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedUser, setIsLoggedUser] = useState(false);
  const { data: userData } = useGetUserByIdQuery(id as string);

  const { showSection } = useUser();

  const {
    mutate: makePremium,
    data,
    isPending,
    error,
    isError,
    isSuccess: makePremiumSuccess,
  } = useMakePremiumMutation();

  useEffect(() => {
    if (isError) {
      //@ts-ignore
      toast.warning(error?.response?.data?.message);
    } else if (makePremiumSuccess) {
      window.location.href = data?.data?.payment_url;
    }
  }, [data, error, isError, makePremiumSuccess]);

  const handleMakePremium = () => {
    setIsLoading(true);
    makePremium(user?._id as string);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (id === user?._id) {
      setIsLoggedUser(true);
    }
    setIsLoading(false);
  }, [id, user]);

  return (
    <>
      {isPending || (isLoading && <Loader />)}

      <div className="mt-6 bg-white rounded-md common-shadow">
        <Image
          src={userData?.coverImage || "/images/cover.jpg"}
          alt="cover"
          width={800}
          height={200}
          className="rounded-t-md w-full md:h-52 h-32 object-center object-cover"
        />
        <div className="px-5 py-3 flex flex-wrap items-center justify-between md:-mt-[3.5rem] -mt-[3rem]">
          <figure className="flex items-center gap-x-5">
            <Image
              src={userData?.profileImage || "/icons/avatar.png"}
              alt="avator"
              width={120}
              height={120}
              className="rounded-full ring ring-white md:size-32 size-24 bg-blue-100"
            />
            <div className="mt-8">
              <h2 className="font-semibold text-xl text-gray-800 flex items-center gap-1">
                {userData?.name}{" "}
                {userData?.status === "Premium" && <PremiumUserToolTip />}
                {/* <Check absoluteStrokeWidth /> */}
              </h2>
              <p className=" text-gray-500">250 connections</p>
            </div>
          </figure>
          <div className="flex flex-wrap items-center gap-x-2 mt-6">
            {isLoggedUser && userData?.status === "Basic" && (
              <button
                onClick={handleMakePremium}
                className="flex items-center gap-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium px-3 py-2 rounded-md text-sm"
              >
                <Crown size={20} color="#FFD700" />
                Get Premium
              </button>
            )}

            {isLoggedUser && <ProfileEditModal />}
            <Button variant={"secondary"}>
              <Ellipsis size={20} />
            </Button>
          </div>
        </div>
        <div className="border-b border-gray-300 text-sm flex flex-wrap px-5 py-4 mb-2 items-center gap-4 ">
          <p className="flex items-center gap-x-1 text-gray-700 ">
            <BriefcaseBusiness size={18} />
            Travel Enthusiast
          </p>
          <p className="flex items-center gap-x-1 text-gray-700 ">
            <MapPinCheckInside size={18} />
            {userData?.address || "N/A"}
          </p>
          <p className="flex items-center gap-x-1 text-gray-700 ">
            <CalendarPlus size={18} />
            {/* Joined on Jan 01, 2020 */}
            Joined on {moment(userData?.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
        <ProfileNavbar />
      </div>
      {showSection === "followers" && <FollowerLists id={id as string} />}
      {showSection === "following" && <FollowingLists id={id as string} />}
    </>
  );
};

export default ProfileHeader;
