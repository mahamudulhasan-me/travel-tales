import { footerListItems } from "@/const/footerListItems";
import Link from "next/link";
import { ReactNode } from "react";

const SidebarProfileLayout = ({
  ProfileInfo,
  ProfileSidebar,
}: {
  ProfileInfo: ReactNode;
  ProfileSidebar: ReactNode;
}) => {
  return (
    <div className="mb-10 hidden md:block">
      <div className="bg-white common-shadow rounded-md mb-4">
        {ProfileInfo}
        {ProfileSidebar}
        <Link
          href={"/"}
          className="block text-center text-primary p-2 border-t"
        >
          View Profile
        </Link>
      </div>
      <div className="bg-transparent flex flex-wrap gap-x-8 gap-y-1 justify-center text-gray-700">
        {footerListItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="hover:text-primary transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <span className="block text-center mt-2 text-gray-700 ">&copy; 2024</span>
    </div>
  );
};

export default SidebarProfileLayout;
