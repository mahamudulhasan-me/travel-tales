"use client";
import { useUser } from "@/context/userProvider";
import Image from "next/image";
import Link from "next/link";

const ProfileInfo = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="">
      <Image
        src={"/images/cover.jpg"}
        width={800}
        height={20}
        alt="user"
        className="rounded-t-md w-full h-16 object-center object-cover z-10"
      />
      <figure className="size-16 mx-auto -mt-6  rounded-sm flex justify-center items-center bg-white  cursor-pointer z-20">
        <>
          <Image
            src={"/icons/avatar.png"}
            width={60}
            height={60}
            alt="avatar"
            className=" rounded-md ring ring-white bg-gray-300"
          />
        </>
      </figure>
      <div className="text-center p-5 text-gray-700">
        <Link
          href={"/"}
          className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors"
        >
          {user?.name}
        </Link>
        <p>{user?.email}</p>
        <p className="mt-5">
          I&apos;d love to change the world, but they won’t give me the source
          code.
        </p>
        <div className="grid grid-cols-3 divide-x divide-gray-300 border-b pb-4 border-gray-300 mt-5 text-center">
          <p>
            <span className="font-semibold text-gray-900">256</span> <br />{" "}
            Posts
          </p>
          <p>
            <span className="font-semibold text-gray-900">2.5K</span> <br />{" "}
            Followers
          </p>
          <p>
            <span className="font-semibold text-gray-900">365</span> <br />{" "}
            Following
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
