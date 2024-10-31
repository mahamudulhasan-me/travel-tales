"use client";
import { useUser } from "@/context/userProvider";
import Link from "next/link";

const NavListItems = () => {
  const { user } = useUser();

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
    {
      id: 3,
      title: "Dashboard",
      path: "/dashboard",
      isPrivate: true,
    },
  ].filter((item) => {
    if (item.isPrivate) {
      return user?.role === "admin";
    }
    return true;
  });
  return (
    <>
      {navItems.map((navItem) => (
        <li key={navItem.id} className="font-semibold">
          <Link href={navItem.path} className="">
            {navItem.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavListItems;
