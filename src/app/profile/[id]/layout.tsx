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
  const { user, showSection } = useUser();

  return (
    <div className="container mx-auto md:px-28 px-2 grid grid-cols-12 gap-6">
      <aside className="col-span-12 md:col-span-8">
        {ProfileHeader}
        {id === user?._id && showSection === "feed" && <PostWritingDialog />}
        {showSection === "feed" && Posts}
      </aside>
      <aside className="hidden md:block  md:col-span-4 mt-6 ">{Sidebar}</aside>
    </div>
  );
};

export default ProfileLayout;
