"use client";
import ProfileEditModal from "@/components/modal/ProfileEditModal";
import ProfileNavbar from "@/components/shared/Navbar/ProfileNavbar";
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
import { useEffect, useState } from "react";

const ProfileHeader = () => {
  const { user, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { data: userData, isSuccess } = useGetUserByIdQuery(
    user?._id as string
  );
  const {
    mutate: makePremium,
    data,
    isPending,
    isSuccess: makePremiumSuccess,
  } = useMakePremiumMutation(user?._id as string);
  console.log(data?.data?.payment_url);
  useEffect(() => {
    setIsLoading(true);
    if (isSuccess) {
      setUser(userData);
    }
    setIsLoading(false);
  }, [isSuccess, setUser, userData]);

  useEffect(() => {
    if (makePremiumSuccess) {
      window.location.href = data?.data?.payment_url;
    }
  }, [data, makePremiumSuccess]);

  const handleMakePremium = () => {
    setIsLoading(true);
    makePremium();
    setIsLoading(false);
  };
  return (
    <>
      {isPending || (isLoading && <Loader />)}

      <div className="mt-6 bg-white rounded-md common-shadow">
        <Image
          src={user?.coverImage || "/images/cover.jpg"}
          alt="cover"
          width={800}
          height={200}
          className="rounded-t-md w-full h-52 object-center object-cover"
        />
        <div className="px-5 py-3 flex items-center justify-between -mt-[3.5rem] ">
          <figure className="flex items-center gap-x-5">
            <Image
              src={user?.profileImage || "/icons/avatar.png"}
              alt="avator"
              width={120}
              height={120}
              className="rounded-full ring ring-white size-32 bg-blue-100"
            />
            <div className="mt-8">
              <h2 className="font-semibold text-xl text-gray-800">
                {user?.name}
              </h2>
              <p className=" text-gray-500">250 connections</p>
            </div>
          </figure>
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handleMakePremium}
              className="flex items-center gap-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium px-3 py-2 rounded-md text-sm"
            >
              <Crown size={20} color="#FFD700" />
              Get Premium
            </button>

            <ProfileEditModal />
            <Button variant={"secondary"}>
              <Ellipsis size={20} />
            </Button>
          </div>
        </div>
        <div className="border-b border-gray-300 text-sm flex px-5 py-4 mb-2 items-center gap-x-4 ">
          <p className="flex items-center gap-x-1 text-gray-700 ">
            <BriefcaseBusiness size={18} />
            Lead Developer
          </p>
          <p className="flex items-center gap-x-1 text-gray-700 ">
            <MapPinCheckInside size={18} />
            {user?.address || "N/A"}
          </p>
          <p className="flex items-center gap-x-1 text-gray-700 ">
            <CalendarPlus size={18} />
            {/* Joined on Jan 01, 2020 */}
            Joined on {moment(user?.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
        <ProfileNavbar />
      </div>
    </>
  );
};

export default ProfileHeader;
