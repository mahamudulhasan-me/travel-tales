"use client";
import PostWritingDialog from "@/components/cards/PostWritingDialog";
import { useUser } from "@/context/userProvider";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

const ProfileLayout = ({
  Posts,
  ProfileHeader,
  Sidebar,
}: {
  Posts: ReactNode;
  ProfileHeader: ReactNode;
  Sidebar: ReactNode;
}) => {
  const { id } = useParams();
  const { user } = useUser();
  return (
    <div className="container-mini px-5 grid grid-cols-12 gap-6  ">
      <aside className=" col-span-8">
        {ProfileHeader}
        {id === user?._id && <PostWritingDialog />}
        {Posts}
      </aside>
      <aside className="col-span-4 mt-6">{Sidebar}</aside>
    </div>
  );
};

export default ProfileLayout;
