import ProfileNavbar from "@/components/shared/Navbar/ProfileNavbar";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  CalendarPlus,
  Ellipsis,
  MapPinCheckInside,
  UserPen,
} from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-6 bg-white rounded-md common-shadow">
      <Image
        src="/images/cover.jpg"
        alt="cover"
        width={800}
        height={200}
        className="rounded-t-md w-full h-52 object-center object-cover"
      />
      <div className="px-5 py-3 flex items-center justify-between -mt-[3.5rem] ">
        <figure className="flex items-center gap-x-5">
          <Image
            src={"/images/avator.jpg"}
            alt="avator"
            width={120}
            height={120}
            className="rounded-full ring ring-white size-32 "
          />
          <div className="mt-8">
            <h2 className="font-semibold text-xl text-gray-800">
              Mahamudul Hasan
            </h2>
            <p className=" text-gray-500">250 connections</p>
          </div>
        </figure>
        <div className="flex items-center gap-4 mt-6">
          <button className="flex items-center gap-x-2 bg-rose-100 text-rose-600 font-medium px-4 py-2 rounded-md text-sm">
            <UserPen size={20} /> Edit Profile
          </button>
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
          Uttara, Dhaka-1230
        </p>
        <p className="flex items-center gap-x-1 text-gray-700 ">
          <CalendarPlus size={18} />
          Joined on Jan 01, 2020
        </p>
      </div>
      <ProfileNavbar />
    </div>
  );
};

export default page;
