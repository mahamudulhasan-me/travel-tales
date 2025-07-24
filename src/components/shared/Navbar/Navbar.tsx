"use client";
import ExploreNav from "@/app/explore/_components/Banner/Nav";
import GlobalSearch from "@/components/ui/GlobalSearch";
import { useUser } from "@/context/userProvider";
import Image from "next/image";
import Link from "next/link";
import NavListItems from "./NavListItems";
import ProtectedNavItems from "./ProtectedNavItems";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  const { user } = useUser();

  return user ? (
    <nav
      className={` bg-white py-1 z-50 sticky top-0 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <aside className="flex items-center justify-start gap-x-2">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/images/logo.png"}
              width={56}
              height={56}
              alt="Travel tales logo"
            />
            <h2 className="uppercase font-semibold text-xl hidden sm:block">
              Travel Tales
            </h2>
          </Link>
          <GlobalSearch />
        </aside>
        <aside className="hidden md:block">
          <ul className=" md:flex  items-center gap-x-3">
            <NavListItems />
            <ProtectedNavItems />
          </ul>
        </aside>
        <aside className="md:hidden">
          <ResponsiveNav />
        </aside>
      </div>
    </nav>
  ) : (
    <ExploreNav />
  );
};

export default Navbar;
