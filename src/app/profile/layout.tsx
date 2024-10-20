import PostWritingDialog from "@/components/cards/PostWritingDialog";
import { ReactNode } from "react";

const layout = ({
  Posts,
  ProfileHeader,
  Sidebar,
}: {
  Posts: ReactNode;
  ProfileHeader: ReactNode;
  Sidebar: ReactNode;
}) => {
  return (
    <div className="container-mini px-5 grid grid-cols-12 gap-6  ">
      <aside className=" col-span-8">
        {ProfileHeader}
        <PostWritingDialog />
        {Posts}
      </aside>
      <aside className="col-span-4 mt-6">{Sidebar}</aside>
    </div>
  );
};

export default layout;
