import PostWritingDialog from "@/components/cards/PostWritingDialog";
import ProfileNavbar from "@/components/shared/Navbar/ProfileNavbar";
import { ReactNode } from "react";

const layout = ({
  Posts,
  ProfileHeader,
}: {
  Posts: ReactNode;
  ProfileHeader: ReactNode;
}) => {
  return (
    <div className="container-mini px-5 grid grid-cols-12 gap-6  ">
      <aside className=" col-span-8">
        {ProfileHeader}

        <PostWritingDialog />
        {Posts}
      </aside>
      <aside>others</aside>
    </div>
  );
};

export default layout;
