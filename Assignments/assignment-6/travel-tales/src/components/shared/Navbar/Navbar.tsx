import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import GlobalSearch from "@/components/ui/GlobalSearch";
import { Bell, MessageSquareText, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const navItems = [
  {
    id: 1,
    title: "About Us",
    path: "/about-us",
    isPrivate: false,
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
    isPrivate: false,
  },
];
const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <aside className="flex items-center justify-start gap-x-2">
          <div className="flex items-center">
            <Image
              src={"/images/logo.png"}
              width={56}
              height={56}
              alt="Travel tales logo"
            />
            <h2 className="uppercase font-semibold text-xl">Travel Tales</h2>
          </div>
          <GlobalSearch />
        </aside>
        <aside>
          <ul className="flex items-center gap-x-3">
            {navItems.map((navItem) => (
              <li key={navItem.id} className="font-semibold">
                <Link href={navItem.path} className="">
                  {navItem.title}
                </Link>
              </li>
            ))}
            <li className="hidden">
              <SignInFormModal />
            </li>

            <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer ">
              <MessageSquareText size={18} strokeWidth={1} />
            </li>
            <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer ">
              <Settings size={18} strokeWidth={1} />
            </li>
            <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer relative">
              <Bell strokeWidth={1} size={18} />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 transition-all duration-500 ease-in-out bg-red-700 rounded"></span>
            </li>
            <li className="size-9 rounded-sm flex justify-center items-center bg-gray-200 cursor-pointer">
              <>
                <Image
                  src={"/icons/people.png"}
                  width={40}
                  height={40}
                  alt="avatar"
                />
              </>
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
